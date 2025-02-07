#pragma once

#include "inttypes.h"

namespace emakefun {
constexpr uint8_t kProtocolVersion = 0x01;
constexpr uint8_t kDeviceType = 0x01;
constexpr uint8_t kDefaultDeviceAddress = kDeviceType;

enum MessageType : uint8_t {
  kButtonState = 0x00,
  kJoystickCoordinate = 0x01,
  kGravityAcceleration = 0x02,
};

}  // namespace emakefun