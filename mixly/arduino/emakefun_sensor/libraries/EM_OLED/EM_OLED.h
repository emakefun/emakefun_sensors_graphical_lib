#ifndef EM_OLED_H
#define EM_OLED_H

#include "U8g2lib.h"
#include <Wire.h>
#include <stdlib.h>

#define FONTADDR  0x51

class EM_OLED: public U8G2
{
  public:
    EM_OLED(const u8g2_cb_t *rotation, uint8_t reset = U8X8_PIN_NONE, uint8_t clock = U8X8_PIN_NONE, uint8_t data = U8X8_PIN_NONE) : U8G2() {
      Wire.begin();
      u8g2_Setup_ssd1306_i2c_128x64_noname_1(&u8g2, rotation, u8x8_byte_arduino_hw_i2c, u8x8_gpio_and_delay_arduino);
      u8x8_SetPin_HW_I2C(getU8x8(), reset, clock, data);
    }
    
    int GetFontData(uint8_t * data);
    int GetUtf8ByteNum(uint8_t data);
    int CopyStr(uint8_t *des, uint8_t *source, uint8_t len);
    int Copy(uint8_t *des, uint8_t *source, uint8_t len);
    uint8_t ShowFont(uint8_t x, uint8_t y, uint8_t *str);
    uint8_t ShowFont(uint8_t x, uint8_t y, String s);
    ~EM_OLED(){}
    private:
        uint8_t buff_fifo[32];
};
#endif
