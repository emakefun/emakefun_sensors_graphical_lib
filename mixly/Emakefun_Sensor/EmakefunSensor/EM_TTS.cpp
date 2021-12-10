#include "EM_TTS.h"

TTS::TTS()
{
    Wire.begin();
}

void TTS::SendHeardCmd()
{
  Wire.write(0xFD);
  Wire.write(0x00);
}

//启动TTS合成文本并播放  
void TTS::Start(uint8_t *p_buff, uint8_t buff_size)
{
  Wire.beginTransmission(0x40);
  SendHeardCmd();
  Wire.write(buff_size + 2);
  Wire.write(0x01);
  Wire.write(0x04);
  for(uint8_t i = 0; i < buff_size; i++){
    Wire.write(p_buff[i]);
  }
  Wire.endTransmission();
}

//停止TTSvoid合成
void TTS::Stop()
{
  uint8_t _cmd = 0x02;
  SendHeardCmd();
  Start(&_cmd, 1);
}

//暂停命令
void TTS::Pause()
{
  uint8_t _cmd = 0x03;
  SendHeardCmd();
  Start(&_cmd, 1);
}

//继续命令
void TTS::Continue()
{
  uint8_t _cmd = 0x04;
  SendHeardCmd();
  Start(&_cmd, 1);
}

//文本缓存
void TTS::TextCacheCmd(uint8_t *p_buff, uint8_t buff_size)
{
  Wire.beginTransmission(0x40);
  SendHeardCmd();
  Wire.write(buff_size + 2);
  Wire.write(0x31);
  Wire.write(0x04);
  for(uint8_t i = 0; i < buff_size; i++){
    Wire.write(p_buff[i]);
  }
  Wire.endTransmission();
}

//Cplay命令
// num: 重复播报次数（0~15）
void TTS::Cplay(uint8_t num)
{
  Wire.beginTransmission(0x40);
  Wire.write(0xFD);
  Wire.write(0x00);
  Wire.write(0x02);
  Wire.write(0x32);
  Wire.write(((num & 0xF) << 0x04) | 0x04);
  Wire.endTransmission();
}

//返回状态值
uint8_t TTS::RetStatus()
{
  uint8_t status;
  Wire.requestFrom(0x40, 1);   

  while (Wire.available()) { 
    status = Wire.read(); 
  }  
  return status;
}

//状态查询命令
uint8_t TTS::StatusQuery()
{
  uint8_t _cmd = 0x21, ret;
  SendHeardCmd();
  Start(&_cmd, 1);
  ret = RetStatus();
  return ret;
}

//休眠命令
uint8_t TTS::Dormant() 
{
  uint8_t _cmd = 0x88, ret;
  SendHeardCmd();
  Start(&_cmd, 1);
  ret = RetStatus();
  return ret;
}

//退出休眠命令
uint8_t TTS::ExitHibernation() 
{
  uint8_t _cmd = 0xFF, ret;
  SendHeardCmd();
  Start(&_cmd, 1);
  ret = RetStatus();
  return ret;
}

TTS::~TTS()
{}
