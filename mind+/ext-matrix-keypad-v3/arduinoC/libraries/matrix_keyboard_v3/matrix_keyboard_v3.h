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

#pragma once

#include <stdint.h>

/**
 * @brief 矩阵键盘
 * @class MatrixKeyboard
 */
class MatrixKeyboard {
 public:
  /**
   * @brief 默认I2C地址
   *
   */
  enum : uint8_t { kDeviceI2cAddressDefault = 0x65, /**< 0x65, 默认I2C地址 */ };
  /**
   * @brief 构造函数
   * @param [in] device_i2c_address 矩阵键盘的I2C地址，默认值为0x65
   */
  MatrixKeyboard(const uint8_t device_i2c_address = kDeviceI2cAddressDefault);
  /**
   * @brief 析构函数
   */
  virtual ~MatrixKeyboard() = default;
  /**
   * @brief 初始化设置
   * @retval true - 成功
   * @retval false - 失败
   */
  bool Setup();

  /**
   * @brief 获取当前按下的按键值
   * @return @b 按键值，字符型
   * @warning @b 注意是字符型，不是整型或其他类型
   * @return @b '\0' - 无按键
   * @return @b '0' - 按键0
   * @return @b '1' - 按键1
   * @return @b '2' - 按键2
   * @return @b '3' - 按键3
   * @return @b '4' - 按键4
   * @return @b '5' - 按键5
   * @return @b '6' - 按键6
   * @return @b '7' - 按键7
   * @return @b '8' - 按键8
   * @return @b '9' - 按键9
   * @return @b 'A' - 按键A
   * @return @b 'B' - 按键B
   * @return @b 'C' - 按键C
   * @return @b 'D' - 按键D
   * @return @b '*' - 按键*
   * @return @b '#' - 按键#
   */
  char GetTouchedKey();

 private:
  MatrixKeyboard(const MatrixKeyboard&) = delete;
  MatrixKeyboard& operator=(const MatrixKeyboard&) = delete;
  int16_t ReadButtonStates();

  const uint8_t device_i2c_address_;
  int16_t last_button_states_ = 0;
  int16_t button_states_ = 0;
};
