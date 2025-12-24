#pragma once

#ifndef EMAKEFUN_COLOR_SENSOR_NLCS11_H_
#define EMAKEFUN_COLOR_SENSOR_NLCS11_H_

#include <Wire.h>
#include <stdint.h>

namespace emakefun {
class ColorSensorNlcs11 {
 public:
  static constexpr uint32_t kVersionMajor = 2;
  static constexpr uint32_t kVersionMinor = 0;
  static constexpr uint32_t kVersionPatch = 0;
  static constexpr uint8_t kDefaultI2cAddress = 0x43;

  /**
   * @enum ErrorCode
   * @brief 错误码
   */
  enum ErrorCode : uint32_t {
    kOK = 0,                                  /**< 0：成功 */
    kI2cDataTooLongToFitInTransmitBuffer = 1, /**< 1：I2C数据太长，无法装入传输缓冲区 */
    kI2cReceivedNackOnTransmitOfAddress = 2,  /**< 2：在I2C发送地址时收到NACK */
    kI2cReceivedNackOnTransmitOfData = 3,     /**< 3：在I2C发送数据时收到NACK */
    kI2cOtherError = 4,                       /**< 4：其他I2C错误 */
    kI2cTimeout = 5,                          /**< 5：I2C通讯超时 */
    kInvalidParameter = 6,                    /**< 6：参数错误 */
    kUnknownError = 7,                        /**< 7：未知错误*/
  };

  struct Color {
    /* data */
    uint16_t r = 0;
    uint16_t g = 0;
    uint16_t b = 0;
    uint16_t c = 0;
  };

  explicit ColorSensorNlcs11(const uint8_t i2c_address = kDefaultI2cAddress, TwoWire& wire = Wire);

  explicit ColorSensorNlcs11(TwoWire& wire) : ColorSensorNlcs11(kDefaultI2cAddress, wire) {
  }

  /**
   * @brief 初始化函数
   * @return 返回值请参考 @ref ErrorCode
   */
  ErrorCode Initialize();

  Color GetColor() const;

 private:
  ColorSensorNlcs11(const ColorSensorNlcs11&) = delete;
  ColorSensorNlcs11& operator=(const ColorSensorNlcs11&) = delete;

  const uint8_t i2c_address_ = kDefaultI2cAddress;
  TwoWire& wire_ = Wire;
};
}  // namespace emakefun
#endif