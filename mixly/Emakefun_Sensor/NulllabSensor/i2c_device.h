#pragma once
#ifndef _I2C_DEVICE_H_
#define _I2C_DEVICE_H_

#include <Arduino.h>
#include <Wire.h>
#include <inttypes.h>
#include <stddef.h>

namespace emakefun {
namespace {
template <typename T>
T SwapEndian(T value) {
  T result = 0;
  unsigned char* src_ptr = reinterpret_cast<unsigned char*>(&value);
  unsigned char* dest_ptr = reinterpret_cast<unsigned char*>(&result);

  for (size_t i = 0; i < sizeof(T); ++i) {
    dest_ptr[i] = src_ptr[sizeof(T) - 1 - i];
  }

  return result;
}
}  // namespace

class I2cDevice {
 public:
  explicit I2cDevice(const uint8_t i2c_address) : i2c_address_(i2c_address) {}

  bool Initialize(TwoWire* const wire = &Wire) {
    if (wire == nullptr) {
      return false;
    }
    wire_ = wire;
    wire_->begin();
    return Probe();
  }

  inline uint8_t I2cAddress() const { return i2c_address_; }

  bool Probe() {
    wire_->beginTransmission(i2c_address_);
    const auto ret = wire_->endTransmission();
    if (ret != 0) {
      Serial.print("Failed to probe i2c device with address 0x");
      Serial.print(i2c_address_, HEX);
      Serial.print(". error code: ");
      Serial.println(ret);
      return false;
    }

    return true;
  }

  size_t WriteByte(const uint8_t data) {
    wire_->beginTransmission(i2c_address_);
    wire_->write(data);
    return 0 == wire_->endTransmission() ? 1 : 0;
  }

  size_t WriteByte(const uint8_t address, const uint8_t data) {
    wire_->beginTransmission(i2c_address_);
    wire_->write(address);
    wire_->write(data);
    return 0 == wire_->endTransmission() ? 1 : 0;
  }

  size_t WriteBytes(const void* const data, const size_t length) {
    wire_->beginTransmission(i2c_address_);
    size_t ret = wire_->write(reinterpret_cast<const uint8_t*>(data), length);
    return 0 == wire_->endTransmission() ? ret : 0;
  }

  size_t WriteBytes(const uint8_t address, const void* const data, const size_t length) {
    wire_->beginTransmission(i2c_address_);
    wire_->write(address);
    size_t ret = wire_->write(reinterpret_cast<const uint8_t*>(data), length);
    return 0 == wire_->endTransmission() ? ret : 0;
  }
  size_t WriteInt8(const uint8_t address, const int8_t data) { return WriteByte(address, static_cast<uint8_t>(data)); }

  size_t WriteUint8(const uint8_t address, const uint8_t data) { return WriteByte(address, data); }

  size_t WriteInt16LE(const uint8_t address, const int16_t data) { return WriteBytes(address, &data, sizeof(data)); }

  size_t WriteUint16LE(const uint8_t address, const uint16_t data) { return WriteBytes(address, &data, sizeof(data)); }

  size_t WriteInt32LE(const uint8_t address, const int32_t data) { return WriteBytes(address, &data, sizeof(data)); }

  size_t WriteUint32LE(const uint8_t address, const uint32_t data) { return WriteBytes(address, &data, sizeof(data)); }

  size_t WriteInt64LE(const uint8_t address, const int64_t data) { return WriteBytes(address, &data, sizeof(data)); }

  size_t WriteUint64LE(const uint8_t address, const uint64_t data) { return WriteBytes(address, &data, sizeof(data)); }

  size_t WriteInt16BE(const uint8_t address, const int16_t data) { return WriteInt16LE(address, SwapEndian(data)); }

  size_t WriteUint16BE(const uint8_t address, const uint16_t data) { return WriteUint16LE(address, SwapEndian(data)); }

  size_t WriteInt32BE(const uint8_t address, const int32_t data) { return WriteInt32LE(address, SwapEndian(data)); }

  size_t WriteUint32BE(const uint8_t address, const uint32_t data) { return WriteUint32LE(address, SwapEndian(data)); }

  size_t WriteInt64BE(const uint8_t address, const int64_t data) { return WriteInt64LE(address, SwapEndian(data)); }

  size_t WriteUint64BE(const uint8_t address, const uint64_t data) { return WriteUint64LE(address, SwapEndian(data)); }

  uint8_t ReadByte() {
    wire_->requestFrom(i2c_address_, static_cast<uint8_t>(1));
    return wire_->available() ? wire_->read() : 0;
  }

  uint8_t ReadByte(const uint8_t address) {
    wire_->beginTransmission(i2c_address_);
    wire_->write(address);
    if (0 != wire_->endTransmission()) {
      return 0;
    }

    wire_->requestFrom(i2c_address_, static_cast<uint8_t>(1));
    return wire_->available() ? wire_->read() : 0;
  }

  size_t ReadBytes(void* const buffer, const size_t length) {
    wire_->requestFrom(i2c_address_, length);
    if (wire_->available()) {
      return wire_->readBytes(reinterpret_cast<uint8_t*>(buffer), length);
    }

    return 0;
  }

  size_t ReadBytes(const uint8_t address, void* const buffer, const size_t length) {
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

  int8_t ReadInt8(const uint8_t address) { return static_cast<int8_t>(ReadByte(address)); }

  uint8_t ReadUint8(const uint8_t address) { return ReadByte(address); }

  int16_t ReadInt16LE(const uint8_t address) {
    int16_t data = 0;
    ReadBytes(address, &data, sizeof(data));
    return data;
  }

  uint16_t ReadUint16LE(const uint8_t address) {
    uint16_t data = 0;
    ReadBytes(address, &data, sizeof(data));
    return data;
  }

  int32_t ReadInt32LE(const uint8_t address) {
    int32_t data = 0;
    ReadBytes(address, &data, sizeof(data));
    return data;
  }

  uint32_t ReadUint32LE(const uint8_t address) {
    uint32_t data = 0;
    ReadBytes(address, &data, sizeof(data));
    return data;
  }

  int64_t ReadInt64LE(const uint8_t address) {
    int64_t data = 0;
    ReadBytes(address, &data, sizeof(data));
    return data;
  }

  uint64_t ReadUint64LE(const uint8_t address) {
    uint64_t data = 0;
    ReadBytes(address, &data, sizeof(data));
    return data;
  }

  int16_t ReadInt16BE(const uint8_t address) { return SwapEndian(ReadInt16LE(address)); }

  uint16_t ReadUint16BE(const uint8_t address) { return SwapEndian(ReadUint16LE(address)); }

  int32_t ReadInt32BE(const uint8_t address) { return SwapEndian(ReadInt32LE(address)); }

  uint32_t ReadUint32BE(const uint8_t address) { return SwapEndian(ReadUint32LE(address)); }

  int64_t ReadInt64BE(const uint8_t address) { return SwapEndian(ReadInt64LE(address)); }

  uint64_t ReadUint64BE(const uint8_t address) { return SwapEndian(ReadUint64LE(address)); }

 private:
  TwoWire* wire_ = nullptr;
  const uint8_t i2c_address_ = 0x00;
};
}  // namespace emakefun
#endif