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

#include "matrix_keyboard_v3.h"

#include <Wire.h>
#include <arduino.h>

namespace {
constexpr char g_keys[] = {
    '1',
    '4',
    '7',
    '*',

    '2',
    '5',
    '8',
    '0',

    '3',
    '6',
    '9',
    '#',

    'A',
    'B',
    'C',
    'D',
};

}  // namespace

MatrixKeyboard::MatrixKeyboard(const uint8_t device_i2c_address) : device_i2c_address_(device_i2c_address) {
}

bool MatrixKeyboard::Setup() {
  Wire.begin();
  Wire.beginTransmission(device_i2c_address_);
  return Wire.endTransmission() == 0;
}

char MatrixKeyboard::GetTouchedKey() {
  int16_t button_states = -1;
  while (button_states == -1) {
    button_states = ReadButtonStates();
    for (uint8_t i = 0; i < 4; i++) {
      if (button_states != ReadButtonStates()) {
        button_states = -1;
        break;
      }
    }
  }

  last_button_states_ = button_states_;
  button_states_ = button_states;

  char touched_key = '\0';

  if (last_button_states_ == 0 && button_states_ != 0) {
    static_assert(sizeof(button_states_) <= sizeof(int));
    touched_key = g_keys[__builtin_ffs(button_states_) - 1];
    // Serial.print("touched_key:");
    // Serial.println(touched_key);
  }

  return touched_key;
}

int16_t MatrixKeyboard::ReadButtonStates() {
  int16_t button_states = 0;

  if (sizeof(button_states) != Wire.requestFrom(device_i2c_address_, sizeof(button_states))) {
    return -1;
  }

  if (sizeof(button_states) != Wire.readBytes(reinterpret_cast<uint8_t*>(&button_states), sizeof(button_states))) {
    return -1;
  }

  return button_states;
}