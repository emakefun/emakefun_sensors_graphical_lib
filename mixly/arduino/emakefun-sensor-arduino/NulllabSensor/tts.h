#pragma once

#include <WString.h>
#include <inttypes.h>

#include "i2c_device.h"

namespace emakefun {

/**
 * @class Tts
 * @brief 语音合成模块
 */
class Tts {
 public:
  /**
   * @brief 语音合成模块默认I2C地址
   */
  static constexpr uint8_t kDefaultI2cAddress = 0x40;

  /**
   * @brief 文本数据最大字节数
   */
  static constexpr uint8_t kMaxTextBytesSize = 250;

  /**
   * @brief  缓存块索引最大值
   */
  static constexpr uint8_t kMaxCacheIndex = 15;

  /**
   * @brief 从缓存合成播放次数的最小值
   */
  static constexpr uint8_t kMinSpeechCount = 1;

  /**
   * @brief 从缓存合成播放次数的最大值
   */
  static constexpr uint8_t kMaxSpeechCount = 15;

  /**
   * @enum TextEncodingType
   * @brief 文本编码类型
   */
  enum TextEncodingType : uint8_t {
    kGb23212 = 0x00, /**< GB2312 */
    kGbk = 0x01,     /**< GBK */
    kBig5 = 0x02,    /**< BIG5 */
    kUtf16le = 0x03, /**< UTF16LE */
    kUtf8 = 0x04,    /**< UTF8 */
  };

  /**
   * @brief 构造函数
   * @param device_i2c_address 语音合成模块I2C地址，默认为0x40
   */
  explicit Tts(const uint8_t device_i2c_address = kDefaultI2cAddress);

  /**
   * @brief 初始化函数
   * @param[in] wire Wire对象，用于I2C通讯，可选，默认使用Arduino标准的Wire对象进行I2C通讯
   * @return 初始化结果
   * @retval true 成功
   * @retval false 失败，如I2C无法与语音识别模块通讯
   */
  bool Initialize(TwoWire* const wire = &Wire);

  /**
   * @brief 文本转语音并播放
   * @param[in] text 文本数据，数据长度不大于250个字节
   * @param[in] text_encoding_type 文本编码类型，参考 @ref TextEncodingType, 默认为 @ref kUtf8
   */
  void Play(const String& text, const TextEncodingType text_encoding_type = kUtf8);

  /**
   * @brief 从缓存块0的文本开始转语音并播放
   * @param[in] text_encoding_type 文本编码类型，参考 @ref TextEncodingType，默认为 @ref kUtf8
   * @param[in] synthesizing_count 合成播放次数，范围 1 ~ 15
   */
  void PlayFromCache(const TextEncodingType text_encoding_type = kUtf8, uint8_t count = kMinSpeechCount);

  /**
   * @brief 将文本内容上传到指定缓存块
   * @param[in] text 文本数据，数据长度不大于250个字节
   * @param[in] cache_index 缓存块索引，范围 0 ~ 15
   */
  void PushTextToCache(const String& text, const uint8_t cache_index);

  /**
   * @brief 停止播放
   */
  void Stop();

  /**
   * @brief 暂停播放
   */
  void Pause();

  /**
   * @brief 恢复播放
   */
  void Resume();

 private:
  Tts(const Tts&) = delete;
  Tts& operator=(const Tts&) = delete;

  I2cDevice i2c_device_;
};
}  // namespace emakefun