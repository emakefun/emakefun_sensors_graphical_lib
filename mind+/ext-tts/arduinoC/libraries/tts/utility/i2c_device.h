#pragma once

#include <Wire.h>
#include <inttypes.h>
#include <stddef.h>

namespace emakefun {
class I2cDevice {
 public:
  explicit I2cDevice(const uint8_t i2c_address);

  bool Initialize(TwoWire* const wire = &Wire);

  size_t WriteByte(const uint8_t address, const uint8_t data);

  size_t WriteBytes(const uint8_t address, const void* const data, const size_t length);

  uint8_t ReadByte(const uint8_t address);

  size_t ReadBytes(const uint8_t address, void* const buffer, const size_t length);

  inline uint8_t I2cAddress() const {
    return i2c_address_;
  }

 private:
  TwoWire* wire_ = nullptr;
  const uint8_t i2c_address_;
};
}  // namespace emakefun