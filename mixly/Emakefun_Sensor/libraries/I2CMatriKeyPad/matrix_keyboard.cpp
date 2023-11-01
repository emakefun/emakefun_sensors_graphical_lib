/*
 * MIT License
 *
 * Copyright (c) 2023 emakefun
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

#include "matrix_keyboard.h"

#include <Wire.h>
#include <arduino.h>

#define SETTING_REGISTER_START_BYTE (0xB0)
#define TOUCH_KEY_STATUS_DATA_REGISTER (0x08)
#define KEY_TRIGGER_THRESHOLD_VALUE (0x3F)
#define KEY_STATUS_STRUCTURE_SIZE (2)

#define WIRE_TIMEOUT_US (3000)

namespace {
constexpr char g_keys[] = {
    '1',
    '2',
    '3',
    'A',
    '4',
    '5',
    '6',
    'B',
    '7',
    '8',
    '9',
    'C',
    '*',
    '0',
    '#',
    'D',
};

template <size_t size>
constexpr uint8_t Checksum(const uint8_t (&data)[size], const size_t index = 0) {
  return index >= size ? 0 : data[index] + Checksum(data, index + 1);
}

}  // namespace

MatrixKeyboard::MatrixKeyboard(const uint8_t device_i2c_address) : device_i2c_address_(device_i2c_address) {
}

bool MatrixKeyboard::Setup() {
  constexpr uint8_t setting_bytes[] = {
      0x00,  // Option1
      0x00,  // Reserve
      0x83,  // Reserve
      0xF3,  // Reserve
      0x98,  // Option2

      KEY_TRIGGER_THRESHOLD_VALUE,  // Key1 Trigger threshold value
      KEY_TRIGGER_THRESHOLD_VALUE,  // Key2 Trigger threshold value
      KEY_TRIGGER_THRESHOLD_VALUE,  // Key3 Trigger threshold value
      KEY_TRIGGER_THRESHOLD_VALUE,  // Key4 Trigger threshold value

      KEY_TRIGGER_THRESHOLD_VALUE,  // Key5 Trigger threshold value
      KEY_TRIGGER_THRESHOLD_VALUE,  // Key6 Trigger threshold value
      KEY_TRIGGER_THRESHOLD_VALUE,  // Key7 Trigger threshold value
      KEY_TRIGGER_THRESHOLD_VALUE,  // Key8 Trigger threshold value

      KEY_TRIGGER_THRESHOLD_VALUE,  // Key9 Trigger threshold value
      KEY_TRIGGER_THRESHOLD_VALUE,  // Key10 Trigger threshold value
      KEY_TRIGGER_THRESHOLD_VALUE,  // Key11 Trigger threshold value
      KEY_TRIGGER_THRESHOLD_VALUE,  // Key12 Trigger threshold value

      KEY_TRIGGER_THRESHOLD_VALUE,  // Key13 Trigger threshold value
      KEY_TRIGGER_THRESHOLD_VALUE,  // Key14 Trigger threshold value
      KEY_TRIGGER_THRESHOLD_VALUE,  // Key15 Trigger threshold value
      KEY_TRIGGER_THRESHOLD_VALUE,  // Key16 Trigger threshold value
  };

  Wire.begin();
  Wire.beginTransmission(device_i2c_address_);
  Wire.write(SETTING_REGISTER_START_BYTE);
  Wire.write(setting_bytes, sizeof(setting_bytes));
  Wire.write(Checksum(setting_bytes));
  return Wire.endTransmission() == 0;
}

char MatrixKeyboard::GetTouchedKey() {
  int16_t button_states = 0;
  Wire.setWireTimeout(WIRE_TIMEOUT_US, true);
  Wire.clearWireTimeoutFlag();
  Wire.beginTransmission(device_i2c_address_);
  Wire.write(TOUCH_KEY_STATUS_DATA_REGISTER);

  if (0 != Wire.endTransmission()) {
    return '\0';
  }

  if (0 == Wire.requestFrom(device_i2c_address_, sizeof(button_states))) {
    return '\0';
  }

  if (sizeof(button_states) != Wire.readBytes(reinterpret_cast<uint8_t*>(&button_states), sizeof(button_states))) {
    return '\0';
  }

  char touched_key = '\0';

  if (last_button_states_ == 0 && (last_button_states_ ^ button_states) != 0) {
    static_assert(sizeof(button_states) <= sizeof(int));
    touched_key = g_keys[__builtin_ffs(button_states) - 1];
  }

  last_button_states_ = button_states;

  return touched_key;
}