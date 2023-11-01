#include "gpio_expansion_board.h"

#include <Wire.h>
#include <arduino.h>

#define ADDRESS_VERSION (0x00)
#define ADDRESS_IO_MODE (0x01)
#define ADDRESS_ANALOG_VALUES (0x10)
#define ADDRESS_VOLTAGE_VALUES (0x20)
#define ADDRESS_RATIO_VOLTAGE (0x30)
#define ADDRESS_DIGITAL_VALUES (0x40)
#define ADDRESS_PWM_DUTY (0x50)
#define ADDRESS_PWM_FREQUENCY (0x60)

GpioExpansionBoard::GpioExpansionBoard(uint8_t device_i2c_address) : device_i2c_address_(device_i2c_address) {
  Wire.begin();
}

bool GpioExpansionBoard::SetGpioMode(GpioExpansionBoard::GpioPin gpio_pin, GpioExpansionBoard::GpioMode mode) {
  Wire.beginTransmission(device_i2c_address_);
  Wire.write(ADDRESS_IO_MODE + gpio_pin);
  Wire.write(mode);
  auto ret = Wire.endTransmission();
  if (ret != 0) {
    Serial.print("Error occurred when i2c writing: ");
    Serial.println(ret);
    return false;
  }

  return true;
}

bool GpioExpansionBoard::SetGpioLevel(GpioExpansionBoard::GpioPin gpio_pin, uint8_t level) {
  Wire.beginTransmission(device_i2c_address_);
  Wire.write(ADDRESS_DIGITAL_VALUES + gpio_pin);
  Wire.write(level);
  if (0 != Wire.endTransmission()) {
    return false;
  }
  return true;
}

uint8_t GpioExpansionBoard::GetGpioLevel(GpioExpansionBoard::GpioPin gpio_pin) {
  Wire.beginTransmission(device_i2c_address_);
  Wire.write(ADDRESS_DIGITAL_VALUES + gpio_pin);
  if (0 != Wire.endTransmission()) {
    return 0;
  }

  Wire.requestFrom(device_i2c_address_, (uint8_t)1);
  if (Wire.available()) {
    return Wire.read();
  }

  return 0;
}

uint16_t GpioExpansionBoard::GetGpioAdcValue(GpioExpansionBoard::GpioPin gpio_pin) {
  Wire.beginTransmission(device_i2c_address_);
  Wire.write(ADDRESS_ANALOG_VALUES + gpio_pin * sizeof(uint16_t));
  if (0 != Wire.endTransmission()) {
    return 0;
  }

  uint16_t analog_value = 0;
  Wire.requestFrom(device_i2c_address_, (uint8_t)2);
  for (int i = 0; i < sizeof(analog_value) && Wire.available(); i++) {
    reinterpret_cast<uint8_t*>(&analog_value)[i] = Wire.read();
  }

  return analog_value;
}
#if 0
uint16_t GpioExpansionBoard::GetGpioVoltageValue(GpioExpansionBoard::GpioPin gpio_pin) {
  Wire.beginTransmission(device_i2c_address_);
  Wire.write(ADDRESS_VOLTAGE_VALUES + gpio_pin * sizeof(uint16_t));
  if (0 != Wire.endTransmission()) {
    return 0;
  }

  uint16_t analog_value = 0;
  Wire.requestFrom(device_i2c_address_, (uint8_t)2);
  for (int i = 0; i < sizeof(analog_value) && Wire.available(); i++) {
    reinterpret_cast<uint8_t*>(&analog_value)[i] = Wire.read();
  }

  return analog_value;
}

uint16_t GpioExpansionBoard::GetGpioRatioVoltage(GpioPin gpio_pin) {
  Wire.beginTransmission(device_i2c_address_);
  Wire.write(ADDRESS_RATIO_VOLTAGE + gpio_pin);
  if (0 != Wire.endTransmission()) {
    return 0;
  }

  Wire.requestFrom(device_i2c_address_, (uint8_t)1);
  if (Wire.available()) {
    return Wire.read();
  }

  return 0;
}
#endif
bool GpioExpansionBoard::SetPwmFrequency(uint16_t frequency) {
  Wire.beginTransmission(device_i2c_address_);
  Wire.write(ADDRESS_PWM_FREQUENCY);
  Wire.write(reinterpret_cast<uint8_t*>(&frequency), sizeof(frequency));
  return Wire.endTransmission() == 0;
}

bool GpioExpansionBoard::SetPwmDuty(GpioPin gpio_pin, uint16_t duty) {
  Wire.beginTransmission(device_i2c_address_);
  Wire.write(ADDRESS_PWM_DUTY + gpio_pin * sizeof(duty));
  Wire.write(reinterpret_cast<uint8_t*>(&duty), sizeof(duty));
  return Wire.endTransmission() == 0;
}

bool GpioExpansionBoard::SetServoAngle(GpioPin gpio_pin, float angle) {
  return SetPwmFrequency(50) && SetPwmDuty(gpio_pin, ((angle / 90) + 0.5) / 20 * 4095) && SetGpioMode(gpio_pin, kPwm);
}
