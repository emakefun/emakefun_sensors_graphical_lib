#pragma once

#include "inttypes.h"

namespace emakefun {
uint16_t Checksum(const uint8_t* data, const uint8_t length);
}