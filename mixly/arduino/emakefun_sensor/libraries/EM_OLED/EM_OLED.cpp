#include "EM_OLED.h"

/**************************************
*** GetFontData 输入单个中文字符UTF8编码
*** 将得到的字符点阵放在 buff_fifo 中
***************************************/
int EM_OLED::GetFontData(uint8_t * data)
{
  uint8_t num = 0;
  Wire.beginTransmission(FONTADDR); 
  for (int i = 0; i < strlen(data); i++) {
    Wire.write(data[i]);
//    Serial.print(data[i],HEX);   
  }   
  Serial.println(); 
  byte error = Wire.endTransmission();
  if (error == 0) {
      Wire.requestFrom(FONTADDR, 32);
      while (Wire.available()) {
        if (num >= 32) {
            Serial.println("error");
          return -1;
        }
        buff_fifo[num++] = Wire.read();
//         Serial.print(buff_fifo[num - 1], HEX);
//         Serial.print(" ");
      }
  }
//   Serial.println();
  return num;
}

/**************************************
*** GetUtf8ByteNum 
*** 获取一个中文 UTF8 编码长度
***************************************/
int EM_OLED::GetUtf8ByteNum(uint8_t data)
{
  int num = 0;
  if (data >= 0x20 && data <= 0x7E) {
    return 0xFF;
  } 
  if (data >= 0xFC && data < 0xFE) {
    num = 6;
  }else if (data >= 0xF8) {
    num =5;
  }else if (data >= 0xF0) {
    num =4;
  }else if (data >= 0xE0) {
    num =3;
  }else if (data >= 0xC0) {
    num =2;
  }else if ((data & 0x80) == 0) {
    num =1;
  }
  return num;  
}

/**************************************
*** CopyStr 
*** 复制字符串 des；目的地址 source：源地址 len；长度
***************************************/
int EM_OLED::CopyStr(uint8_t *des, uint8_t *source, uint8_t len)
{
    if (source == NULL)
      return 0;
    do{
      *des++ = *source++;
    }while(--len);
    *des = '\0';
    return 1;
}

/**************************************
*** Copy 
*** 复制数据 des；目的地址 source：源地址 len：长度
***************************************/
int EM_OLED::Copy(uint8_t *des, uint8_t *source, uint8_t len)
{
    if (source == NULL)
      return 0;
    do{
      *des++ = *source++;
    }while(--len);
    return 1;
}

/**************************************
*** ShowFont 
*** 显示汉字 坐标（x,y） str：显示汉字数据
***************************************/
uint8_t EM_OLED::ShowFont(uint8_t x, uint8_t y, uint8_t *str)
{
  int clen = 0, len = 0, num = 0;
  uint8_t ch, *ptr, data[0x07], font_size = 0;
  ptr = str;
  if (str == NULL)
    return 0;
  clen = strlen(str);
  while(*ptr != '\0' && len <= clen) {
    ch = *ptr;  
    num = GetUtf8ByteNum(ch);
    if (num == 0) {return 0;}
    if (num != 0xFF) {
      CopyStr(data, ptr, num);
      memset(buff_fifo,0,sizeof(buff_fifo));
      GetFontData(data);
      font_size = 16;
    }
    if (num == 0xFF) {
      CopyStr(data, ptr, 1);
      memset(buff_fifo,0,sizeof(buff_fifo));
      GetFontData(data);
      num = 1;
      font_size = 8;
    }
    switch(font_size) {
      case 0x08:EM_OLED::drawXBM(x, y, 8, 16, buff_fifo);break;
      case 0x10:EM_OLED::drawXBM(x, y, 16, 16, buff_fifo);break;
      default: break;
    }
    if ((x + font_size) >  127) {
      x = 0;
      if ((y + 16) > 63) {
        return 0;
      }else {
        y += 16;
      }
    }else {
      x += font_size;
    }
    ptr += num;
    len++;
  }
}

/**************************************
*** ShowFont 
*** 显示汉字 坐标（x,y） str：显示汉字数据
***************************************/
uint8_t EM_OLED::ShowFont(uint8_t x, uint8_t y, String s)
{
  uint8_t array[0x100];
  strcpy(array, s.c_str());
  ShowFont(x, y, array);
}
