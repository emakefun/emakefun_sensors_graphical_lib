#include "color_sensor.h"

#include <Arduino.h>

namespace emakefun {
namespace {
constexpr uint16_t kMaxRawR = 500;
constexpr uint16_t kMaxRawG = 1100;
constexpr uint16_t kMaxRawB = 800;

float Map(const float value, const float in_min, const float in_max, const float out_min, const float out_max) {
  if (value <= in_min) {
    return out_min;
  } else if (value >= in_max) {
    return out_max;
  } else {
    return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
}
}  // namespace

ColorSensor::ColorSensor(const uint8_t i2c_address, TwoWire& wire) : i2c_address_(i2c_address), wire_(wire) {
  // do somethings
}

ColorSensor::ErrorCode ColorSensor::Initialize() {
  ErrorCode ret = kOK;
  wire_.beginTransmission(i2c_address_);
  wire_.write(0x80);
  wire_.write(0x03);
  ret = static_cast<ErrorCode>(wire_.endTransmission());
  return ret;
}

uint8_t ColorSensor::R() const {
  uint16_t value = 0;
  wire_.beginTransmission(i2c_address_);
  wire_.write(0xA0);
  wire_.endTransmission();
  wire_.requestFrom(i2c_address_, sizeof(value));
  if (wire_.available() == sizeof(value)) {
    wire_.readBytes(reinterpret_cast<uint8_t*>(&value), sizeof(value));
  }
  return Map(value, 0, kMaxRawR, 0, 255);
}

uint8_t ColorSensor::G() const {
  uint16_t value = 0;
  wire_.beginTransmission(i2c_address_);
  wire_.write(0xA2);
  wire_.endTransmission();
  wire_.requestFrom(i2c_address_, sizeof(value));
  if (wire_.available() == sizeof(value)) {
    wire_.readBytes(reinterpret_cast<uint8_t*>(&value), sizeof(value));
  }
  return Map(value, 0, kMaxRawG, 0, 255);
}

uint8_t ColorSensor::B() const {
  uint16_t value = 0;
  wire_.beginTransmission(i2c_address_);
  wire_.write(0xA4);
  wire_.endTransmission();
  wire_.requestFrom(i2c_address_, sizeof(value));
  if (wire_.available() == sizeof(value)) {
    wire_.readBytes(reinterpret_cast<uint8_t*>(&value), sizeof(value));
  }
  return Map(value, 0, kMaxRawB, 0, 255);
}

}  // namespace emakefun