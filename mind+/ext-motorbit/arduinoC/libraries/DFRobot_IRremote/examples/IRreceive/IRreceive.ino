#include <DFRobot_IRremote.h>

DFROBOT_IRremote_Receive remote(2);

void setup()
{
  Serial.begin(115200);
  remote.begin();
}

void loop()
{
  if(remote.available()){
    Serial.println(remote.getData());
  }
}
