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
 * @class GestureRecognizer
 * @brief 手势识别传感器
 */
class GestureRecognizer {
 public:
  /**
   * @brief 手势识别传感器默认I2C地址
   */
  enum : uint8_t { kDeviceI2cAddressDefault = 0x39, /**< 0x39: 默认I2C地址 */ };

  /**
   * @enum Gesture
   * @brief 手势类型
   */
  enum Gesture : uint8_t {
    kGestureNone = 0x0,           /**< 0x00: 无手势动作*/
    kGestureRightSwipe = 0x01,    /**< 0x01: 右移动作*/
    kGestureLeftSwipe = 0x02,     /**< 0x02: 左移动作*/
    kGestureBackwardSwipe = 0x03, /**< 0x03: 后移动作*/
    kGestureForwardSwipe = 0x04,  /**< 0x04: 前移动作*/
    kGestureUpward = 0x05,        /**< 0x05: 上拉动作*/
    kGestureDownward = 0x06,      /**< 0x06: 下压动作*/
    kGestureOutOfRange = 0x07,    /**< 0x07: 离开感应区*/
    kGestureHover = 0x08,         /**< 0x08: 悬停*/
  };

  /**
   * @brief 构造函数
   * @param [in] device_i2c_address 手势识别传感器I2C地址，默认值为0x39
   */
  GestureRecognizer(const uint8_t device_i2c_address = kDeviceI2cAddressDefault);

  /**
   * @brief 初始化设置
   */
  void Setup();

  /**
   * @brief 获取识别到的手势
   * @return 手势类型，参考枚举: @ref GestureRecognizer::Gesture
   */
  Gesture GetGesture();

 private:
  GestureRecognizer(const GestureRecognizer&) = delete;
  GestureRecognizer& operator=(const GestureRecognizer&) = delete;

  const uint8_t device_i2c_address_ = 0;
};