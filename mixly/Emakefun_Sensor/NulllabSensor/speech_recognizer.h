#pragma once

#include <WString.h>
#include <inttypes.h>

#include "i2c_device.h"

namespace emakefun {

/**
 * @brief 语音识别模块类
 */
class SpeechRecognizer {
 public:
  /**
   * @brief 语音识别模块默认I2C地址
   */
  static constexpr uint8_t kDefaultI2cAddress = 0x30;

  /**
   * @brief 每条关键词最大字符数
   */
  static constexpr uint8_t kMaxKeywordDataBytes = 50;

  /**
   * @brief 识别模式
   */
  enum RecognitionMode : uint8_t {
    kRecognitionAuto,         ///< 自动识别模式
    kButtonTrigger,           ///< 按键触发识别模式
    kKeywordTrigger,          ///< 关键词触发识别模式
    kKeywordOrButtonTrigger,  ///< 按键或关键词触发识别模式
  };

  /**
   * @brief 事件类型
   */

  enum Event : uint8_t {
    kEventNone = 0,                   ///< 无事件
    kEventStartWaitingForTrigger,     ///< 开始等待触发
    kEventButtonTriggered,            ///< 被按键触发
    kEventKeywordTriggered,           ///< 被关键词触发
    kEventStartRecognizing,           ///< 开始识别
    kEventSpeechRecognized,           ///< 识别成功
    kEventSpeechRecognitionTimedOut,  ///< 识别超时
  };

  /**
   * @brief 构造函数
   * @param device_i2c_address 语音识别模块I2C地址，默认为0x30
   */
  SpeechRecognizer(const uint8_t device_i2c_address = kDefaultI2cAddress);

  /**
   * @brief 初始化函数
   * @param[in] wire Wire对象，用于I2C通讯，可选，默认使用Arduino标准的Wire对象进行I2C通讯
   * @return 初始化结果
   * @retval true 成功
   * @retval false 失败，如I2C无法与语音识别模块通讯
   */
  bool Initialize(TwoWire* const wire = &Wire);

  /**
   * @brief 设置识别模式
   * @param[in] recognition_mode 识别模式，参考枚举: @ref RecognitionMode
   */
  void SetRecognitionMode(const RecognitionMode recognition_mode);

  /**
   * @brief 设置识别超时时间, 对自动触发模式( @ref kRecognitionAuto )无效
   * @param[in] timeout_ms 超时时间，单位毫秒
   */
  void SetTimeout(const uint32_t timeout_ms);

  /**
   * @brief 添加语音识别关键词
   * @details 最多可以添加50个词，每个词最大长度为50个字节
   * @param[in] index 索引，范围 0 ~ 255，多个词可以共用一个索引，当在 [关键字触发识别模式]( @ref kKeywordTrigger
   * ) 或 [按键或关键词触发识别模式]( @ref kKeywordOrButtonTrigger ) 下，索引 0 会被当做关键词
   * @param[in] keyword 关键词，String类型，最大长度为50 ( 参考定义: @ref kMaxKeywordDataBytes ) 个字节
   */
  void AddKeyword(const uint8_t index, const String& keyword);

  /**
   * @brief 进行语音识别
   * @details 在loop函数中<b>循环调用</b>该函数以推进语音识别模块的工作，
   * 调用该函数后可以获取识别结果，可以通过( @ref GetEvent )获取事件
   * @return 关键词的索引值
   * @retval <0 未识别到结果
   * @retval >=0 识别到关键词的索引值，对应 @ref AddKeyword 时设置的关键词索引
   */
  int16_t Recognize();

  /**
   * @brief 获取当前事件
   * @return 事件类型，参考枚举: @ref Event
   */
  Event GetEvent();

 private:
  void WaitUntilIdle();

  I2cDevice i2c_device_;
  SpeechRecognizer(const SpeechRecognizer&) = delete;
  SpeechRecognizer& operator=(const SpeechRecognizer&) = delete;
};
}  // namespace emakefun