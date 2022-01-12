#include "TouchMatriKeyPad.h"
ST_KEY_MAP em_touch_matrix_keypad_keymap[16] = {
  {"1", 0xFFFE},
  {"2", 0xFFFD},
  {"3", 0xFFFB},
  {"A", 0xFFF7},
  
  {"4", 0xFFEF},
  {"5", 0xFFDF},
  {"6", 0xFFBF},
  {"B", 0xFF7F},
 
  {"7", 0xFEFF},
  {"8", 0xFDFF},
  {"9", 0xFBFF},
  {"C", 0xF7FF},

  {"*", 0xEFFF},
  {"0", 0xDFFF},
  {"#", 0xBFFF},
  {"D", 0x7FFF},
};

TouchMatriKeyPad::TouchMatriKeyPad(uint8_t SclPin, uint8_t SdoPin) {
  SCLPin = SclPin;
  SDOPin = SdoPin;
  pinMode(SCLPin , OUTPUT);
  pinMode(SDOPin , INPUT);
}

uint16_t TouchMatriKeyPad::GetKeyCode(void) {
  KeyCode = 0;
  if (digitalRead(SDOPin) == HIGH) {
    //delay(1);
    for (int i = 0; i < 16; i++)
    {
      digitalWrite(SCLPin, HIGH);
      //delay(1);
      digitalWrite(SCLPin, LOW);
      //delay(1);
      KeyCode |= digitalRead(SDOPin) << i;
    }
  }
  return KeyCode & 0xFFFF;
}
String TouchMatriKeyPad::GetKeyMap(void) {
  byte i;
  ST_KEY_MAP *irkeymap = em_touch_matrix_keypad_keymap;
  for (i = 0; i < KEY_PAD_MAX; i++) {
    // Serial.println(irkeymap[i].keycode);
    if (irkeymap[i].keycode == KeyCode)
      return irkeymap[i].keyname;
  }
  return "";
}

uint16_t TouchMatriKeyPad::GetKey(void) {
  byte i;
  uint16_t keycode = GetKeyCode();
  ST_KEY_MAP *irkeymap = em_touch_matrix_keypad_keymap;
  for (i = 0; i < KEY_PAD_MAX; i++) {
    // Serial.println(irkeymap[i].keycode);
    if ((KeyCode & (1 << i)) == 0)
      return i;
  }
  return 0xff;
}

bool TouchMatriKeyPad::KeyPressed(E_EM_KEYCODE key) {
  //Serial.println(key);
  if (((KeyCode >> key) & 0x01) == 0) {
      return true;
  }
  return false;
}
