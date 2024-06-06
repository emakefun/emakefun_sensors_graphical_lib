#pragma once

#include <inttypes.h>

/**
 * @brief 五路寻迹模块类，用于检测黑线的位置和状态。
 */
class LineTracker {
 public:
  /**
   * @brief 默认设备I2C地址。
   */
  enum { DEFAULT_DEVICE_I2C_ADDRESS = 0x50 };
  /**
   * @brief 黑线数量。
   */
  enum { LINE_NUMBER = 5 };
  /**
   * @brief 构造函数。
   * @param[in] device_i2c_address 设备I2C地址，默认为0x50。
   */
  LineTracker(const uint8_t device_i2c_address = DEFAULT_DEVICE_I2C_ADDRESS);
  /**
   * @brief 设置寻迹模块的敏感度
   *
   * @param[in] sensitivity 敏感度值，取值范围为 0 ~ 1023。
   *                        敏感度越高，模块对黑色物体的检测越敏感。
   */
  void SetSensitivity(const uint16_t sensitivity);
  /**
   * @brief 获取寻迹模块的传感器值
   *
   * @return 指向包含传感器值的数组的指针，数组长度为 5。
   */
  const uint16_t* GetSensorValues();
  /**
   * @brief 获取寻迹模块的传感器状态
   *
   * @return 一个字节的值，表示寻迹模块的传感器状态。
   *         每个位表示一个传感器的状态，1 表示传感器不在黑线上，0 表示在黑线上。
   *         位的顺序为从右到左：传感器 1、传感器 2、传感器 3、传感器 4、传感器 5。
   */
  uint8_t GetSensorStates();

 private:
  /**
   * @brief 设备I2C地址。
   */
  const uint8_t device_i2c_address_ = DEFAULT_DEVICE_I2C_ADDRESS;
  /**
   * @brief 存储阈值、ADC值和状态的数据结构。
   */
  struct SensorData {
    uint16_t sensitivity = 0;                  /**< 敏感度 */
    uint16_t sensor_values[LINE_NUMBER] = {0}; /**< 传感器值 */
    uint8_t sensor_states = 0;                 /**< 传感器状态 */
  } sensor_data_;
};