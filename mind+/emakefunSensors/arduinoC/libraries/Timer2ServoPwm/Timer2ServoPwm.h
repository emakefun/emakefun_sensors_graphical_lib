/*
  Timer2ServoPwm.h
  Interrupt driven Servo library for Arduino using 8 bit timer2. V1.0.0
  Copyright (c) 2020, Straka.
  All rights reserved.
  MIT License.

  The servo driver function is compatible with official servo library.
  The main point of this library is to use timer2 as servo driver timer 
  interrupt source when timer1 has been used by other libraries.
  It provide a more accurate servo drive pulse control, and can control 7 
  servos at a time. Besides, this library provides a not very accurate pwm 
  function on any pin and 4 max pwm pins at a time.
*/
#ifndef __TIMER2_SERVO_PWM_H__
#define __TIMER2_SERVO_PWM_H__

#include <Arduino.h>
#include <inttypes.h>

#define PWM_ENABLE

#define MIN_PULSE_WIDTH       500
#define MAX_PULSE_WIDTH       2500      // unit:us

#define PERIOD                20        // unit: ms
#define PRESCALE_FACTOR       8
#define CRYSTAL_FREQ          16000000  // 16M
#define TICKS_PER_CYCLE       256

#define MAX_SERVOS            7         // 20ms / 2.5ms = 8
#define INVALID_SERVO         255 

// (CRYSTAL_FREQ / 1000 / TICKS_PER_CYCLE * PERIOD / PRESCALE_FACTOR )
#define CYCLES_PER_PERIOD     156       // 16M: 156.25
// (CYCLES_PER_PERIOD / MAX_SERVOS)
#define CYCLES_PER_SERVO      20
// (1000 * 1000 / CRYSTAL_FREQ * PRESCALE_FACTOR * TICKS_PER_CYCLE) 
#define TIME_PER_CYCLE        128       // unit: us  16
// (CRYSTAL_FREQ / 1000 / 1000 / PRESCALE_FACTOR)
#define TICKS_PER_MICROSECOND 2

#ifdef PWM_ENABLE
#define MAX_PWM               4
#define INVALID_PWM           255
#endif // !PWM_ENABLE

class Timer2Servo{
public:
  Timer2Servo();
  // Attach the pin to the free servo channel, sets pinMode,
  // it will return channel number or INVALID_SERVO if failure.
  // Caller should ensure the pin is legal.
  uint8_t attach(uint8_t pin);
  // Similar as attach(int pin), but also sets min and max pluse width in
  // microseconds.
  uint8_t attach(uint8_t pin, uint16_t min, uint16_t max); 
  void detach();
  // if value is < 200 its treated as an angle, otherwise as pulse width in
  // microseconds 
  void write(uint16_t value);             
  // Write pulse width in microseconds 
  void writeMicroseconds(uint16_t value); 
  // returns current pulse width as an angle between 0 and 180 degrees
  uint8_t read();
  // returns current pulse width in microseconds for this servo (was read_us()
  // in first release)            
  uint16_t readMicroseconds();
  bool attached();
  void debug();
private:
  uint8_t servoChan_;
  uint16_t min_;
  uint16_t max_;
};

#ifdef PWM_ENABLE
class Timer2Pwm{
public:
  Timer2Pwm();
  uint8_t attach(uint8_t pin);
  void write(uint8_t pwm);
  uint8_t read();
  void debug();
private:
  uint8_t pwmChan_;
};
#endif // !PWM_ENABLE

#endif // !__TIMER2_SERVO_PWM_H__
