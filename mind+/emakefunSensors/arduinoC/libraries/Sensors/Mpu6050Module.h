#ifndef _MPU6050_MODULE_H_
#define _MPU6050_MODULE_H_

#include "Arduino.h"
#include "Wire.h"
// I2Cdev and MPU6050 must be installed as libraries, or else the .cpp/.h files
// for both classes must be in the include path of your project
#include "I2Cdev.h"
#include "MPU6050.h"

#define BT_X 1
#define BT_Y 2
#define BT_Z 3

struct RAW_type {
    uint8_t x;
    uint8_t y;
    uint8_t z;
};

class Mpu6050Module {
  private :
    MPU6050 accelgyro;
    float roll = 0, pitch = 0, yaw = 0;
    float RwAcc[3], Gyro[3];            // ACC raw data
    float RwGyro[3], Awz[2], RwEst[3];  // Gyro raw dat
    float tmpf = 0.0;
    int signRzGyro;
    uint32_t currentTime = 0, lastTime = 0, interval = 0;
    const float pi = 3.1415926;
    const float Rad = 57.3;             //180.0/pi;
    const float wGyro = 10.0;
    const float AcceRatio = 16384.0;
    const float GyroRatio = 131.0 * 57.3;

    int16_t ax, ay, az, gx, gy, gz;
    struct RAW_type accel_zero_offsent, gyro_zero_offsent;
    void normalize3DVec(float vector[3]);
    float squared(float x);
    void readSensors(void);

  public :

    Mpu6050Module();
    float GetGravity(byte direction);
    void GetInclination(void);
    float GetRoll(void);
    float GetPitch(void);
    int GetDegree(void);
    void InitMpu6050(void);
};
#endif
