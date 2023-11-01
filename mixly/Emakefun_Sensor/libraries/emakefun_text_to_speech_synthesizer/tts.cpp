#include <Arduino.h>
#include <tts.h>

#ifdef AVR
#include "utility/TinyI2CMaster.h"
#endif

namespace emakefun {
namespace {
template <typename T>
inline T Min(const T x, const T y) {
  return x < y ? x : y;
}

#ifdef AVR
void TinyI2cWrite(const uint8_t i2c_address, const uint8_t address, const uint8_t* data, const size_t length) {
  TinyI2C.start(i2c_address, 0);
  TinyI2C.write(address);
  for (uint8_t i = 0; i < length; i++) {
    TinyI2C.write(data[i]);
  }
  TinyI2C.stop();
}
#endif

}  // namespace

Tts::Tts(const uint8_t device_i2c_address) : i2c_device_(device_i2c_address) {
}

bool Tts::Initialize(TwoWire* const wire) {
  if (!i2c_device_.Initialize(wire)) {
    return false;
  }

  Stop();
  return true;
}

void Tts::Play(const String& text, const TextEncodingType text_encoding_type) {
  const uint8_t text_length = Min<uint8_t>(kMaxTextBytesSize, text.length());
  const uint8_t data_length = text_length + 4;
  uint8_t* data = new uint8_t[data_length];
  data[0] = 0x00;
  data[1] = text_length + 2;
  data[2] = 0x01;
  data[3] = text_encoding_type;
  memcpy(data + 4, text.c_str(), text_length);
#ifdef AVR
  TinyI2cWrite(i2c_device_.I2cAddress(), 0xFD, data, data_length);
#else
  i2c_device_.WriteBytes(0xFD, data, data_length);
#endif
  delete[] data;
}

void Tts::PlayFromCache(const TextEncodingType text_encoding_type, uint8_t count) {
  count = constrain(count, kMinSpeechCount, kMaxSpeechCount);
  const uint8_t data[] = {0x00, 0x02, 0x32, (count << 4) | text_encoding_type};
  i2c_device_.WriteBytes(0xFD, data, sizeof(data));
}

void Tts::PushTextToCache(const String& text, const uint8_t cache_index) {
  if (cache_index > kMaxCacheIndex) {
    return;
  }

  const uint8_t text_length = Min<uint8_t>(kMaxTextBytesSize, text.length());
  const uint8_t data_length = text_length + 4;
  uint8_t* data = new uint8_t[data_length];
  data[0] = 0x00;
  data[1] = text_length + 2;
  data[2] = 0x31;
  data[3] = cache_index;
  memcpy(data + 4, text.c_str(), text_length);
#ifdef AVR
  TinyI2cWrite(i2c_device_.I2cAddress(), 0xFD, data, data_length);
#else
  i2c_device_.WriteBytes(0xFD, data, data_length);
#endif
  delete[] data;
}

void Tts::Stop() {
  uint8_t data[] = {0x00, 0x01, 0x02};
  i2c_device_.WriteBytes(0xFD, data, sizeof(data));
}

void Tts::Pause() {
  uint8_t data[] = {0x00, 0x01, 0x03};
  i2c_device_.WriteBytes(0xFD, data, sizeof(data));
}

void Tts::Resume() {
  uint8_t data[] = {0x00, 0x01, 0x04};
  i2c_device_.WriteBytes(0xFD, data, sizeof(data));
}

}  // namespace emakefun