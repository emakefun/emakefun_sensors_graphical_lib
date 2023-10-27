#include "i2c_device.h"

#include <Arduino.h>

namespace emakefun {

I2cDevice::I2cDevice(const uint8_t i2c_address) : i2c_address_(i2c_address) {
}

bool I2cDevice::Initialize(TwoWire* const wire) {
  if (wire == nullptr) {
    return false;
  }
  wire_ = wire;
  wire_->begin();
  wire_->beginTransmission(i2c_address_);
  const auto ret = wire_->endTransmission();
  if (ret != 0) {
    Serial.print("i2c device 0x");
    Serial.print(i2c_address_, HEX);
    Serial.print(" connect failed, error code: ");
    Serial.println(ret);
    return false;
  }
  return true;
}

size_t I2cDevice::WriteByte(const uint8_t address, const uint8_t data) {
  wire_->beginTransmission(i2c_address_);
  wire_->write(address);
  wire_->write(data);
  return 0 == wire_->endTransmission() ? 1 : 0;
}

size_t I2cDevice::WriteBytes(const uint8_t address, const void* data, const size_t length) {
  wire_->beginTransmission(i2c_address_);
  wire_->write(address);
  size_t ret = wire_->write(reinterpret_cast<const uint8_t*>(data), length);
  return 0 == wire_->endTransmission() ? ret : 0;
}

uint8_t I2cDevice::ReadByte(const uint8_t address) {
  wire_->beginTransmission(i2c_address_);
  wire_->write(address);
  if (0 != wire_->endTransmission()) {
    return 0;
  }

  wire_->requestFrom(i2c_address_, static_cast<uint8_t>(1));
  return wire_->available() ? wire_->read() : 0;
}

size_t I2cDevice::ReadBytes(const uint8_t address, void* const buffer, const size_t length) {
  wire_->beginTransmission(i2c_address_);
  wire_->write(address);
  if (0 != wire_->endTransmission()) {
    return 0;
  }

  wire_->requestFrom(i2c_address_, length);
  if (wire_->available()) {
    return wire_->readBytes(reinterpret_cast<uint8_t*>(buffer), length);
  }

  return 0;
}

}  // namespace emakefun