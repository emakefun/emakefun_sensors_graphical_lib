#include "color_sensor_nlcs11.h"

#include <Arduino.h>

namespace emakefun {
namespace {
constexpr uint16_t kMaxRawR = 500;
constexpr uint16_t kMaxRawG = 1100;
constexpr uint16_t kMaxRawB = 800;
}  // namespace

ColorSensorNlcs11::ColorSensorNlcs11(const uint8_t i2c_address, TwoWire &wire) : i2c_address_(i2c_address), wire_(wire) {
  // do somethings
}

ColorSensorNlcs11::ErrorCode ColorSensorNlcs11::Initialize() {
  ErrorCode ret = kOK;
  wire_.beginTransmission(i2c_address_);
  wire_.write(0x80);
  wire_.write(0x03);
  ret = static_cast<ErrorCode>(wire_.endTransmission());
  return ret;
}

ColorSensorNlcs11::Color ColorSensorNlcs11::GetColor() const {
  Color color;
  uint16_t value[4] = {0};
  uint16_t raw_r, raw_g, raw_b = 0;

  wire_.beginTransmission(i2c_address_);
  wire_.write(0xA0);
  wire_.endTransmission();

  // 请求从传感器读取4个字节的数据
  wire_.requestFrom(i2c_address_, sizeof(value));

  // 确认读取的数据大小是否正确
  if (wire_.available() == sizeof(value)) {
    wire_.readBytes(reinterpret_cast<uint8_t *>(value), sizeof(value));

    raw_r = value[0];
    raw_g = value[1];
    raw_b = value[2];
    color.c = value[3];
  }
  if (color.c == 0) {
    color.r = 0;
    color.g = 0;
    color.b = 0;
  } else {
    color.r = static_cast<uint16_t>((float)raw_r / color.c * 255);
    color.g = static_cast<uint16_t>((float)raw_g / color.c * 255);
    color.b = static_cast<uint16_t>((float)raw_b / color.c * 255);
  }
  return color;
}
}  // namespace emakefun