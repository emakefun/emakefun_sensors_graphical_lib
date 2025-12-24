/**
 * @~Chinese
 * @file motor_forward_backward.ino
 * @brief 驱动电机前进与后退的示例。
 * @example motor_forward_backward.ino
 * 电机前进与后退的示例。
 */

/**
 * @~English
 * @file motor_forward_backward.ino
 * @brief Example of motor forward and backward.
 * @example motor_forward_backward.ino
 * Example of motor forward and backward.
 */

#include "dm11.h"
#include "dm11_lib.h"

namespace {
em::Dm11 g_dm11(0x15);
}

void setup() {
  Serial.begin(115200);
  Serial.println("setup");
  Serial.println(String("dm11 lib version: ") + em::dm11_lib::Version());

  Wire.begin();

  const auto ret = g_dm11.Init();

  if (em::Dm11::kOK == ret) {
    Serial.println("dm11 initialization successful");
  } else {
    Serial.print("dm11 initialization failed: ");
    Serial.println(ret);
    while (true);
  }

  Serial.println(F("setup successful"));
}

void loop() {
  g_dm11.PwmDuty(em::Dm11::kPwmChannel0, 0);
  g_dm11.PwmDuty(em::Dm11::kPwmChannel1, 4095);
  g_dm11.PwmDuty(em::Dm11::kPwmChannel2, 0);
  g_dm11.PwmDuty(em::Dm11::kPwmChannel3, 4095);
  Serial.println("motor forward");
  delay(1000);

  g_dm11.PwmDuty(em::Dm11::kPwmChannel0, 4095);
  g_dm11.PwmDuty(em::Dm11::kPwmChannel1, 0);
  g_dm11.PwmDuty(em::Dm11::kPwmChannel2, 4095);
  g_dm11.PwmDuty(em::Dm11::kPwmChannel3, 0);
  Serial.println("motor backward");
  delay(1000);
}
