#ifndef _TTP229_H_
#define _TTP229_H_
#include <Arduino.h>
#define KEY_PAD_MAX 16
typedef struct
{
  String keyname;
  uint16_t keycode;
} ST1_KEY_MAP;

typedef enum {
  KEYPAD_KEYCODE_1 = 0,
  KEYPAD_KEYCODE_2 = 1,
  KEYPAD_KEYCODE_3 = 2,
  KEYPAD_KEYCODE_A = 3,
  KEYPAD_KEYCODE_4 = 4,
  KEYPAD_KEYCODE_5,
  KEYPAD_KEYCODE_6,
  KEYPAD_KEYCODE_B = 7,
  KEYPAD_KEYCODE_7 = 8,
  KEYPAD_KEYCODE_8,
  KEYPAD_KEYCODE_9,
  KEYPAD_KEYCODE_C = 11,
  KEYPAD_KEYCODE_STAR,
  KEYPAD_KEYCODE_0,
  KEYPAD_KEYCODE_POUND,
  KEYPAD_KEYCODE_D,
} E_EM_KEYCODE;
extern ST1_KEY_MAP em_keypad_keymap[];

class TouchMatriKeyPad {
  private:
    uint8_t SCLPin, SDOPin;
    uint16_t KeyCode;
  public:
    TouchMatriKeyPad(uint8_t SclPin, uint8_t SdoPin);
    uint16_t GetKeyCode(void);
    String GetKeyMap(void);
    uint16_t GetKey(void);
    bool KeyPressed(E_EM_KEYCODE key);
};
#endif  /* _KEYMAY_H_ */
