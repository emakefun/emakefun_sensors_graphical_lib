#ifndef EM_Microbit_Motor_H
#define EM_Microbit_Motor_H
#include <Arduino.h>
#include <Wire.h>



#define PCA9685_ADDRESS   0x40
#define MODE1   0x00
#define MODE2   0x01
#define SUBADR1   0x02
#define SUBADR2   0x03
#define SUBADR3   0x04
#define PRESCALE   0xFE
#define LED0_ON_L   0x06
#define LED0_ON_H   0x07
#define LED0_OFF_L   0x08
#define LED0_OFF_H   0x09
#define ALL_LED_ON_L   0xFA
#define ALL_LED_ON_H   0xFB
#define ALL_LED_OFF_L   0xFC
#define ALL_LED_OFF_H   0xFD

#define STP_CHA_L   2047
#define STP_CHA_H   4095

#define STP_CHB_L   1
#define STP_CHB_H   2047

#define STP_CHC_L   1023
#define STP_CHC_H   3071

#define STP_CHD_L   3071
#define STP_CHD_H   1023


#define BYG_CHA_L   3071
#define BYG_CHA_H   1023

#define BYG_CHB_L   1023
#define BYG_CHB_H   3071

#define BYG_CHC_L   4095
#define BYG_CHC_H   2047

#define BYG_CHD_L   2047
#define BYG_CHD_H   4095

    /**
     * The user can choose the step motor model.
     */
enum Stepper { 
  //% block="42"
  Ste1 = 1,
  //% block="28"
  Ste2 = 2
};

/**
* The user can select the 8 steering gear controller.
*/
enum Servos {
  S1 = 0x01,
  S2 = 0x02,
  S3 = 0x03,
  S4 = 0x04,
  S5 = 0x05,
  S6 = 0x06,
  S7 = 0x07,
  S8 = 0x08
};

/**
* The user selects the 4-way dc motor.
*/
enum Motors {
  M1 = 0x4,
  M2 = 0x3,
  M3 = 0x2,
  M4 = 0x1,
  ALL = 0x5
};

/**
* The user defines the motor rotation direction.
*/
enum Dir {
  //% blockId="CW" block="CW"
  CW = 1,
  //% blockId="CCW" block="CCW"
  CCW = -1,
};

/**
* The user can select a two-path stepper motor controller.
*/
enum Steppers {
  M1_M2 = 0x1,
  M3_M4 = 0x2
};


class EM_Microbit_Motor
{
  public:
 
  EM_Microbit_Motor();
  ~EM_Microbit_Motor();
  
  void    servo(Servos index, int degree),
          motorRun(Motors index, Dir direction, int speed),
          stepperDegree(Steppers index, Dir direction, int degree),
          stepperTurn(Steppers index, Dir direction, double turn),
          stepperTurn(Steppers index, Dir direction, int turn),
          motorStop(Motors index);



  private:
  
  int    i2cRead(int addr, int reg);
  
  void   i2cWrite(int addr, int reg, int value),
         i2cWriteBuffer(int addr, unsigned char *p, int len),
         initPCA9685(),
         setFreq(int freq),
         setPwm(int channel, int on, int off),
         setStepper(int index, bool dir);

  bool initialized;

};

#endif
