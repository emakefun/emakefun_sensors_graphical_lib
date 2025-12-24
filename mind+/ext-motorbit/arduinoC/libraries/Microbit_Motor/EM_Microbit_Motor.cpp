#include "EM_Microbit_Motor.h"
#include "Arduino.h"
#include "Wire.h"



EM_Microbit_Motor::EM_Microbit_Motor(): initialized(false) {}

EM_Microbit_Motor::~EM_Microbit_Motor() 
{
  this->initialized = false;
}


void EM_Microbit_Motor::servo(Servos index, int degree)
{
  if (!initialized) {
    this->initPCA9685();
  }
  // 100hz
  uint32_t v_us = (degree * 10 + 600); // 0.6ms ~ 2.4ms
  uint32_t value = v_us * 4095 / (1000000 / 50);
  this->setPwm(index + 7, 0, value);
}

void EM_Microbit_Motor::motorRun(Motors index, Dir direction, int speed)
{
  if (!initialized) {
    this->initPCA9685();
  }
  speed = speed * 16 * direction; // map 255 to 4096
  if (speed >= 4096) {
    speed = 4095;
  }
  if (speed <= -4096) {
    speed = -4095;
  }
  if (index > 5 || index <= 0)
    return;
  int pn, pp;
  for(int i = (index == 5? 1 : index); i <= (index == 5? index - 1 : index); i++)
  {
    pn = (4-i) * 2;
    pp = (4-i) * 2 + 1;
    if (speed >= 0) {
      this->setPwm(pp, 0, speed);
      this->setPwm(pn, 0, 0);
    } else {
      this->setPwm(pp, 0, 0);
      this->setPwm(pn, 0, -speed);
    }
  }
}

void EM_Microbit_Motor::stepperDegree(Steppers index, Dir direction, int degree)
{
  if (!initialized) {
    this->initPCA9685();
  }
  // let Degree = Math.abs(degree);
  // Degree = Degree * direction;
  //setFreq(100);
  this->setStepper(index, direction > 0);
  if (degree == 0) { 
    return;
  }
  uint32_t Degree = abs(degree);
  uint32_t dtime = ((10240 * Degree) / 360) + 800;
  printf("stepperDegree %d \n", dtime);
  delay(dtime);
  
  if (index == 1) {
    this->motorStop(M1);
    this->motorStop(M2);
  }else{
    this->motorStop(M3);
    this->motorStop(M4);
  }
}

void EM_Microbit_Motor::stepperTurn(Steppers index, Dir direction, double turn)
{
  if (!initialized) {
    this->initPCA9685();
  }
    this->stepperDegree(index, direction, (int)(turn * 360));
}

void EM_Microbit_Motor::stepperTurn(Steppers index, Dir direction, int turn)
{
  if (!initialized) {
    this->initPCA9685();
  }
    this->stepperDegree(index, direction, turn * 360);
}

void EM_Microbit_Motor::motorStop(Motors index)
{
  if (!initialized) {
    this->initPCA9685();
  }
  for(int i = (index == 5? 1 : index); i <= (index == 5? index - 1 : index); i++)
  {
    this->setPwm((4 - i) * 2, 0, 0);
    this->setPwm((4 - i) * 2 + 1, 0, 0);
  }
}

void EM_Microbit_Motor::i2cWriteBuffer(int addr, unsigned char *p, int len)
{
  Wire.beginTransmission(addr);
  for(int i=0; i<len; i++)
    Wire.write((uint8_t)p[i]);
  Wire.endTransmission();
}

void EM_Microbit_Motor::i2cWrite(int addr, int reg, int value)
{
  Wire.beginTransmission(addr);
  Wire.write(reg);
  Wire.write(value);
  Wire.endTransmission();
}

int EM_Microbit_Motor::i2cRead(int addr, int reg)
{
  uint8_t data;
  Wire.beginTransmission(addr);
  Wire.write(reg);
  Wire.endTransmission();
  Wire.requestFrom(addr, 1);
  data = Wire.read();
  return data;
}

void EM_Microbit_Motor::initPCA9685()
{
  Wire.begin();
  this->i2cWrite(PCA9685_ADDRESS, MODE1, 0x00);
  this->setFreq(50);
  this->initialized = true;//Serial.println("ss");
  
}

void EM_Microbit_Motor::setFreq(int freq)
{
  uint32_t prescaleval = 25000000;
  prescaleval /= 4096;
  prescaleval /= freq;
  prescaleval -= 1;

  uint32_t prescale = prescaleval;//Math.floor(prescaleval + 0.5);
  uint8_t oldmode = this->i2cRead(PCA9685_ADDRESS, MODE1);
  uint8_t newmode = (oldmode & 0x7F) | 0x10; // sleep
  this->i2cWrite(PCA9685_ADDRESS, MODE1, newmode); // go to sleep
  this->i2cWrite(PCA9685_ADDRESS, PRESCALE, 0x84); // set the prescaler
  this->i2cWrite(PCA9685_ADDRESS, MODE1, oldmode);
  delayMicroseconds(5000);
  this->i2cWrite(PCA9685_ADDRESS, MODE1, oldmode | 0xa1);
}

void EM_Microbit_Motor::setPwm(int channel, int on, int off)
{
  if (channel < 0 || channel > 15)
    return;

  unsigned char buf[5];
  buf[0] = LED0_ON_L + 4 * channel;
  buf[1] = on & 0xff;
  buf[2] = (on >> 8) & 0xff;
  buf[3] = off & 0xff;
  buf[4] = (off >> 8) & 0xff;
  this->i2cWriteBuffer(PCA9685_ADDRESS, buf, 5);
}

void EM_Microbit_Motor::setStepper(int index, bool dir)
{
  if (index == 1) {
        if (dir) {
            setPwm(0, STP_CHA_L, STP_CHA_H);
            setPwm(2, STP_CHB_L, STP_CHB_H);
            setPwm(1, STP_CHC_L, STP_CHC_H);
            setPwm(3, STP_CHD_L, STP_CHD_H);
        } else {
            setPwm(3, STP_CHA_L, STP_CHA_H);
            setPwm(1, STP_CHB_L, STP_CHB_H);
            setPwm(2, STP_CHC_L, STP_CHC_H);
            setPwm(0, STP_CHD_L, STP_CHD_H);
        }
    } else {
        if (dir) {
            setPwm(4, STP_CHA_L, STP_CHA_H);
            setPwm(6, STP_CHB_L, STP_CHB_H);
            setPwm(5, STP_CHC_L, STP_CHC_H);
            setPwm(7, STP_CHD_L, STP_CHD_H);
        } else {
            setPwm(7, STP_CHA_L, STP_CHA_H);
            setPwm(5, STP_CHB_L, STP_CHB_H);
            setPwm(6, STP_CHC_L, STP_CHC_H);
            setPwm(4, STP_CHD_L, STP_CHD_H);
        }
    }
}





























