#include "line_tracker.h"

#include <Arduino.h>
#include <Wire.h>
#include <stddef.h>

LineTracker::LineTracker(const uint8_t device_i2c_address) : device_i2c_address_(device_i2c_address) {
  Wire.begin();
}

void LineTracker::SetSensitivity(const uint16_t sensitivity) {
  Wire.beginTransmission(device_i2c_address_);
  Wire.write(static_cast<uint8_t>(offsetof(SensorData, sensitivity)));
  Wire.write(reinterpret_cast<const uint8_t*>(&sensitivity), sizeof(sensitivity));
  Wire.endTransmission();
}

const uint16_t* LineTracker::GetSensorValues() {
  Wire.beginTransmission(device_i2c_address_);
  Wire.write(static_cast<uint8_t>(offsetof(SensorData, sensor_values)));
  Wire.endTransmission();
  Wire.requestFrom(device_i2c_address_, sizeof(SensorData::sensor_values));
  uint8_t index = 0;
  uint8_t* data = reinterpret_cast<uint8_t*>(sensor_data_.sensor_values);

  while (Wire.available()) {
    data[index++] = Wire.read();
  }

  return sensor_data_.sensor_values;
}

uint8_t LineTracker::GetSensorStates() {
  Wire.beginTransmission(device_i2c_address_);
  Wire.write(static_cast<uint8_t>(offsetof(SensorData, sensor_states)));
  Wire.endTransmission();

  Wire.requestFrom(device_i2c_address_, sizeof(SensorData::sensor_states));
  uint8_t index = 0;
  uint8_t* data = reinterpret_cast<uint8_t*>(&sensor_data_.sensor_states);

  while (Wire.available()) {
    data[index++] = Wire.read();
  }

  return sensor_data_.sensor_states;
}

void LineTracker::setMotorSpeed(uint16_t motorPort, int speed) {
    int in1,in2;
    if (motorPort == 1) {
      in1 = 13; in2 = 27;
    } else if (motorPort == 2) {
      in1 = 4; in2 = 2;
    } else if (motorPort == 3) {
      in1 = 17; in2 = 12;
    } else if (motorPort == 4) {
      in1 = 15; in2 = 14;
    }
    if (speed > 0) {
        motorAnalogWrite(in1, 0);
        motorAnalogWrite(in2, abs(speed));
    } else {
        motorAnalogWrite(in2, 0);
        motorAnalogWrite(in1, abs(speed));
    }
}