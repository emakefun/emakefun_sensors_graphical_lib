#include "Mpu6050Module.h"
#include "Wire.h"

#undef abs

//#undef round

Mpu6050Module::Mpu6050Module()
{
    ax = ay = az = gx = gy = gz = 0;
}

void Mpu6050Module::InitMpu6050(void)
{
    struct RAW_type accel_self_enable , accel_self_diable;
    int32_t ax_zero = 0, ay_zero = 0, az_zero = 0, gx_zero = 0, gy_zero = 0, gz_zero = 0;

    Wire.begin();
    accelgyro.initialize();
    delay(300) ;
    accelgyro.setFullScaleAccelRange(MPU6050_ACCEL_FS_8);
    // enable Accel Self Test
    accelgyro.setAccelXSelfTest(1); // enable accel self test
    accelgyro.setAccelYSelfTest(1);
    accelgyro.setAccelZSelfTest(1);
    delay(100);
    accel_self_enable.x = accelgyro.getAccelXSelfTestDate();
    accel_self_enable.y = accelgyro.getAccelYSelfTestDate();
    accel_self_enable.z = accelgyro.getAccelZSelfTestDate();

    accelgyro.setAccelXSelfTest(0); // disable accel self test
    accelgyro.setAccelYSelfTest(0);
    accelgyro.setAccelZSelfTest(0);
    accel_self_diable.x = accelgyro.getAccelXSelfTestDate();
    accel_self_diable.y = accelgyro.getAccelYSelfTestDate();
    accel_self_diable.z = accelgyro.getAccelZSelfTestDate();

    accelgyro.setFullScaleAccelRange(MPU6050_ACCEL_FS_2);
    /* get zero accel/gyro value */
    for (byte i = 0; i < 200; i++) {
       accelgyro.getMotion6(&ax, &ay, &az, &gx, &gy, &gz); //get raw accel/gyro measurements 
       ax_zero += az;
       ay_zero += ay;
       az_zero += az;
       gx_zero += gx;
       gy_zero += gy;
       gz_zero += gz;
    }
    accel_zero_offsent.x = ax_zero/200;
    accel_zero_offsent.y = ay_zero/200;
    accel_zero_offsent.z = az_zero/200;
    gyro_zero_offsent.x = gx_zero/200;
    gyro_zero_offsent.y = gy_zero/200;
    gyro_zero_offsent.z = gz_zero/200;
}

float Mpu6050Module::squared(float x)
{
    return x * x;
}

void Mpu6050Module::readSensors(void)
{
    accelgyro.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
    RwAcc[0] = (ax - accel_zero_offsent.x);
    RwAcc[1] = (ay - accel_zero_offsent.y);
    RwAcc[2] = (az - accel_zero_offsent.z);
    Gyro[0] = (gx - gyro_zero_offsent.x);
    Gyro[1] = (gy - gyro_zero_offsent.y);
    Gyro[2] = (gz - gyro_zero_offsent.z);
}

void Mpu6050Module::normalize3DVec(float vector[3])
{
    float R;
    R = sqrt(vector[0] * vector[0] + vector[1] * vector[1] + vector[2] * vector[2]);
    vector[0] /= R;
    vector[1] /= R;
    vector[2] /= R;
}

void Mpu6050Module::GetInclination(void)
{
    static boolean firstSample = true;
    int w = 0;
    readSensors();
    normalize3DVec(RwAcc);
    
    currentTime = millis();
    interval = currentTime - lastTime;
    lastTime = currentTime;
    
    if (firstSample) {
        for (w=0;w<=2;w++) {
            RwEst[w] = RwAcc[w];
        }
    } else {
        if (abs(RwEst[2]) < 0.1) {
            for (w=0;w<=2;w++) {
                RwGyro[w] = RwEst[w];
            }
        } else {
            for (w=0;w<=1;w++) {
                tmpf = Gyro[w];
                tmpf *= interval / 1000.0f;
                Awz[w] = atan2(RwEst[w], RwEst[2]) * 180 / PI;
                Awz[w] += tmpf;
            }
            signRzGyro = ( cos(Awz[0] * PI / 180) >=0 ) ? 1 : -1;

            // http://starlino.com/imu_guide.html
            for (w=0;w<=1;w++) {
                RwGyro[0] = sin(Awz[0] * PI / 180);
                RwGyro[0] /= sqrt( 1 + squared(cos(Awz[0] * PI / 180)) * squared(tan(Awz[1] * PI / 180)) );
                RwGyro[1] = sin(Awz[1] * PI / 180);
                RwGyro[1] /= sqrt( 1 + squared(cos(Awz[1] * PI / 180)) * squared(tan(Awz[0] * PI / 180)) );
            }
                RwGyro[2] = signRzGyro * sqrt(1 - squared(RwGyro[0]) - squared(RwGyro[1]));
        }
        for (w=0;w<=2;w++) RwEst[w] = (RwAcc[w] + wGyro * RwGyro[w]) / (1 + wGyro);
        normalize3DVec(RwEst);
    }
    firstSample = false;
}

float Mpu6050Module::GetGravity(byte direction)
{
    if (direction == BT_X) {
        return -RwEst[1];
    } else if (direction == BT_Y) {
        return RwEst[0];
    } else if (direction == BT_Z) {
        return RwEst[2];
    }
}

float Mpu6050Module::GetRoll(void) {
    roll = 90 - acos(-RwEst[1]) * Rad;
    return roll;
}

float Mpu6050Module::GetPitch(void) {
    pitch = 90 - acos(RwEst[0]) * Rad;
    return pitch;
}

int Mpu6050Module::GetDegree(void) {
    int degree = 0XFFFF;
    if ((RwEst[1] < 0.3) && (RwEst[1] > -0.3) && (RwEst[0] < 0.3) && (RwEst[0] > -0.3))
        return 0XFFFF;
    degree = 180 - atan2(RwEst[0], RwEst[1]) * Rad;
}
