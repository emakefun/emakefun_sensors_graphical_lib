#pragma once

#include <stdint.h>

/**
 * @class GpioExpansionBoard
 * @brief GPIO扩展板主类
 */
class GpioExpansionBoard {
 public:
  /**
   * @enum GpioMode
   * @brief 扩展板GPIO模式类型
   */
  enum GpioMode : uint8_t {
    kNone = 0,
    kInputPullUp = 1 << 0,   /**< 输入模式，默认拉高电平*/
    kInputPullDown = 1 << 1, /**< 输入模式，默认拉低电平*/
    kInputFloating = 1 << 2, /**< 浮空输入模式*/
    kOutput = 1 << 3,        /**< 输出模式*/
    kAdc = 1 << 4,           /**< ADC模式*/
    kPwm = 1 << 5,           /**< PWM输出模式*/
  };

  /**
   * @enum GpioPin
   * @brief 扩展板GPIO引脚
   */
  enum GpioPin : uint8_t {
    kGpioPinE0 = 0, /**< 引脚E0*/
    kGpioPinE1 = 1, /**< 引脚E1*/
    kGpioPinE2 = 2, /**< 引脚E2*/
    kGpioPinE3 = 3, /**< 引脚E3*/
    kGpioPinE4 = 4, /**< 引脚E4*/
    kGpioPinE5 = 5, /**< 引脚E5*/
    kGpioPinE6 = 6, /**< 引脚E6*/
    kGpioPinE7 = 7, /**< 引脚E7*/
  };

  /**
   * @brief 扩展板默认I2C地址
   */
  enum { kDeviceI2cAddressDefault = 0x24, /**< 默认I2C地址：0x24*/ };

  /**
   * @brief 构造函数
   * @param [in] device_i2c_address 扩展板I2C地址，默认值为0x24, @see kDeviceI2cAddressDefault
   */
  GpioExpansionBoard(uint8_t device_i2c_address = kDeviceI2cAddressDefault);

  /**
   * @brief 设置GPIO模式
   * @param [in] gpio_pin GPIO引脚 @see GpioPin
   * @param [in] mode GPIO模式 @see GpioMode
   * @return bool 成功返回true，失败返回false
   */
  bool SetGpioMode(GpioPin gpio_pin, GpioMode mode);

  /**
   * @brief 设置GPIO输出电平
   * @param [in] gpio_pin GPIO引脚 @see GpioPin
   * @param [in] level 电平值，0为低电平，1为高电平
   * @return bool 成功返回true，失败返回false
   */
  bool SetGpioLevel(GpioPin gpio_pin, uint8_t level);

  /**
   * @brief 获取GPIO输出电平
   * @param [in] gpio_pin GPIO引脚 @see GpioPin
   * @return uint8_t 电平值，0为低电平，1为高电平
   */
  uint8_t GetGpioLevel(GpioPin gpio_pin);

  /**
   * @brief 获取GPIO ADC电平值
   * @param [in] gpio_pin GPIO引脚 @see GpioPin
   * @return uint16_t ADC电平值
   */
  uint16_t GetGpioAdcValue(GpioPin gpio_pin);

  /**
   * @brief 设置GPIO开发板PWM频率
   * @param [in] frequency PWM频率，单位：HZ
   * @return bool 成功返回true，失败返回false
   */
  bool SetPwmFrequency(uint16_t frequency);

  /**
   * @brief 设置PWM的占空比,使用前需要将引脚的模式设置为pwm模式(kPwm)
   * @param [in] gpio_pin GPIO引脚 @see GpioPin
   * @param [in] duty 精度为12位的占空比，取值范围: 0 ~ 4095
   * @return bool 成功返回true，失败返回false
   */
  bool SetPwmDuty(GpioPin gpio_pin, uint16_t duty);

  /**
   * @brief 驱动舵机转动到指定角度
   * @note 只支持E1 ~ E2
   * @param [in] gpio_pin GPIO引脚 @see GpioPin
   * @param [in] angle 角度值，范围0 ~ 180
   * @return bool 成功返回true，失败返回false
   */
  bool SetServoAngle(GpioPin gpio_pin, float angle);

 private:
  uint8_t device_i2c_address_;
};