/*
  Timer2ServoPwm.cpp
  Interrupt driven Servo library for Arduino using 8 bit timer2. V1.0.0
  Copyright (c) 2020, Straka.
  All rights reserved.
  MIT License.

  The servo driver function is compatible with official servo library.
  The main point of this library is to use timer2 as servo driver timer 
  interrupt source when timer1 has been used by other libraries.
  It provide a more accurate servo drive pulse control, and can control 7 
  servos at a time. Besides, this library provides a not very accurate pwm 
  function on any pin about 32Hz and 4 max pwm pins at a time.
*/

#include "Timer2ServoPwm.h"
#include <avr/interrupt.h>

//#define __DEBUG

// compensation ticks to trim adjust for digitalWrite delays
#define TRIM_PULSE_TICK       3
// trim to prevent OCRA interruption miss 
#define TRIM_TICKS            32
// cycles revise for period of 20ms
#define PERIOD_REVISE_CYCLES  9
// trim to prevent OCRA interruption miss for period revise
#define PERIOD_REVISE_TRIM    16
// ticks revise for period of 20ms
#define PERIOD_REVISE_TICKS   10
// trim to not miss the first servo interruption of the next period
#define TCNT2_TRIM            5

typedef struct{
  uint8_t pin=0;
  volatile uint8_t cycles=0;
  volatile uint8_t startTicks=0;
  volatile uint8_t endTicks=0;
  bool    activated=false;
}servo_t;

typedef struct{
   uint8_t pin=0;
   volatile uint8_t start=0;
   volatile uint8_t end=0;
}pwm_t;

static bool inited = false;
static servo_t servos[MAX_SERVOS + 1];
static uint8_t servoCount=0;

static volatile uint8_t COMPACtn;
static volatile uint8_t curChan;

static pwm_t pwms[MAX_PWM];
static uint8_t pwmCount=0;
static uint8_t curPwm=0;

#ifdef __DEBUG
static uint32_t ovf_times;
static uint32_t compa_times;
#endif

static void initISR(){
   servos[MAX_SERVOS].activated = false;
   servos[MAX_SERVOS].cycles = PERIOD_REVISE_CYCLES;
   servos[MAX_SERVOS].startTicks = PERIOD_REVISE_TRIM;
   servos[MAX_SERVOS].endTicks = PERIOD_REVISE_TICKS+PERIOD_REVISE_TRIM;

   COMPACtn = 0;
   curChan = 0;

#ifdef __DEBUG
   ovf_times = 0;
   compa_times = 0;
   Serial.begin(9600);
#endif

   TIMSK2 = 0;                        // disable interrupts 
   TCCR2A = _BV(WGM21) | _BV(WGM20);  // fast PWM mode, top 0xFF 
   TCCR2B = _BV(CS21);                // prescaler 8

   TCNT2 = 0;
   TIFR2 = _BV(TOV2) | _BV(OCF2A);
#ifdef PWM_ENABLE
   TIMSK2 = _BV(TOIE2) | _BV(OCIE2A);
#else
   TIMSK2 = _BV(OCIE2A);
#endif // !PWM_ENABLE
   inited = true;
}

// Handle overflow interrupt to provide pwm
ISR(TIMER2_OVF_vect)
{
#ifdef __DEBUG
   ++ovf_times;
#endif
   curPwm++;
   for(uint8_t i=0;i<pwmCount;i++){
      if(curPwm == pwms[i].start){
         digitalWrite(pwms[i].pin, HIGH);
      }else if(curPwm == pwms[i].end){
         digitalWrite(pwms[i].pin, LOW);
      }
   }
}

// Handle compare A register to provider servo driver
ISR(TIMER2_COMPA_vect){
#ifdef __DEBUG
  ++compa_times;
#endif
  ++COMPACtn;
  if(COMPACtn == 1){
    OCR2A = servos[curChan].endTicks;
    if(servos[curChan].activated){
      digitalWrite( servos[curChan].pin, HIGH);
    }
  }else if(curChan >= MAX_SERVOS && COMPACtn > PERIOD_REVISE_CYCLES){
     // also trim to adjust period, not too close to 255 encase miss the next
     // interruption. TCNT2_TRIM + PERIOD_REVISE_TICKS is the actual revise.
     TCNT2 = 255 - TCNT2_TRIM;
     COMPACtn = 0;
     curChan = 0;
     OCR2A = servos[0].startTicks;
  }
  if(curChan < MAX_SERVOS && COMPACtn > servos[curChan].cycles){
     // a bit larger than 0 to  ensure not miss the next interruption
     OCR2A = TRIM_TICKS;
     if(servos[curChan].activated){
        digitalWrite(servos[curChan].pin, LOW);
     }
  }
  if(curChan < MAX_SERVOS && COMPACtn > CYCLES_PER_SERVO){
     ++curChan;
     OCR2A = servos[curChan].startTicks;
     COMPACtn = 0;
  }
}

Timer2Servo::Timer2Servo(){
  if(servoCount>=MAX_SERVOS){
     servoChan_=INVALID_SERVO;
     return;
  }
  servoChan_=servoCount++;
}

uint8_t Timer2Servo::attach(uint8_t pin){
  if(!inited){
    initISR();
  }
   return attach(pin, MIN_PULSE_WIDTH, 2500);
}

uint8_t Timer2Servo::attach(uint8_t pin, uint16_t min, uint16_t max){
  if(this->servoChan_ < MAX_SERVOS){
     pinMode(pin, OUTPUT);
     servos[this->servoChan_].pin = pin;
     servos[this->servoChan_].activated = true;
     min_ = min;
     max_ = max;
  }
  return this->servoChan_;
}

void Timer2Servo::detach(){
   servos[this->servoChan_].activated = false;
}

void Timer2Servo::write(uint16_t value){
  if(value < MIN_PULSE_WIDTH){
    if(value > 180) value = 180;
    value = map(value, 0, 180, min_, max_);
  }
  this->writeMicroseconds(value);
}

void Timer2Servo::writeMicroseconds(uint16_t  value){
  if(servoChan_ >= MAX_SERVOS){
     return;
  }
  if(value < MIN_PULSE_WIDTH){
     value = MIN_PULSE_WIDTH;
  }
  if(value > MAX_PULSE_WIDTH){
     value = MAX_PULSE_WIDTH;
  }
  value = value * TICKS_PER_MICROSECOND - TRIM_PULSE_TICK;
  // TODO: call cli() sei() to ensure... // Reverse these codes for future use.
  // cli();
  servos[servoChan_].cycles = value / TICKS_PER_CYCLE;
  uint8_t ticks = value % TICKS_PER_CYCLE;

   if(ticks>=256-2*TRIM_TICKS){
      servos[servoChan_].cycles++;
      servos[servoChan_].startTicks=3*TRIM_TICKS;
      servos[servoChan_].endTicks=ticks+3*TRIM_TICKS;
   }else{
      servos[servoChan_].startTicks=TRIM_TICKS;
      servos[servoChan_].endTicks=ticks+TRIM_TICKS;
   }
  // sei();
}

uint8_t Timer2Servo::read(){
   return map(readMicroseconds(), min_, max_, 0, 180);
}

uint16_t Timer2Servo::readMicroseconds(){
  if(servoChan_ >= MAX_SERVOS){
     return 0;
  }
  return (servos[servoChan_].cycles * TICKS_PER_CYCLE +
             servos[servoChan_].endTicks-servos[servoChan_].startTicks) / 
         TICKS_PER_MICROSECOND;
}

bool Timer2Servo::attached(){
  return servos[servoChan_].activated;
}

void Timer2Servo::debug(){
#ifdef __DEBUG
   for(uint8_t i=0;i<servoCount;i++){
      Serial.print("pin:");Serial.println(servos[i].pin);
      Serial.print("cycles:");Serial.println(servos[i].cycles);
      Serial.print("start_ticks:");Serial.println(servos[i].startTicks);
      Serial.print("end_ticks:");Serial.println(servos[i].endTicks);
      Serial.print("activated:");Serial.println(servos[i].activated);
   }
   Serial.print("ovf_times:"); Serial.println(ovf_times);
#endif
}

#ifdef PWM_ENABLE
Timer2Pwm::Timer2Pwm(){
  if(pwmCount>=MAX_PWM){
     pwmChan_=INVALID_PWM;
     return;
  }
  pwmChan_=pwmCount++;
}

uint8_t Timer2Pwm::attach(uint8_t pin){
  if(!inited){
    initISR();
  }
  if(pwmChan_ < MAX_PWM){
    pinMode(pin, OUTPUT);
    pwms[pwmChan_].pin = pin;
  }
  return pwmChan_;
}

void Timer2Pwm::write(uint8_t pwm){
  // uint8_t oldSREG = SREG; // Reverse these codes for future use.
  // cli();
    pwms[pwmChan_].start = pwmChan_;
    pwms[pwmChan_].end = pwm + pwmChan_;
  // SREG = oldSREG;
}

uint8_t Timer2Pwm::read(){
  return pwms[pwmChan_].end-pwms[pwmChan_].start;
}

void Timer2Pwm::debug(){
#ifdef __DEBUG
   for(uint8_t i=0;i<pwmCount;i++){
      Serial.print("pin:");Serial.println(pwms[i].pin);
      Serial.print("start:");Serial.println(pwms[i].start);
      Serial.print("end:");Serial.println(pwms[i].end);
   }
   Serial.print("compa_times:"); Serial.println(compa_times);
#endif
}
#endif // !PWM_ENABLE
