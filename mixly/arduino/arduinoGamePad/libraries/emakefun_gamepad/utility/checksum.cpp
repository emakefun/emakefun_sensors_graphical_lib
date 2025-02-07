#include "checksum.h"

namespace emakefun {
uint16_t Checksum(const uint8_t* data, const uint8_t length) {
  uint16_t checksum = 0;
  for (uint8_t i = 0; i < length; i++) {
    checksum += data[i];
  }
  return checksum;
}
}