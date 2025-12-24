#include <DFRobot_IRremote.h>

DFROBOT_IRremote_Send remote(2);

void setup()
{
  Serial.begin(115200);
  remote.begin();
}

void loop()
{
  remote.sendNEC(213, 8);
  delay(500);
}