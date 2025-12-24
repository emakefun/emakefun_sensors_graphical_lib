#include <Wire.h>
#include "asr_ld3320.h"

LD3320::LD3320(uint8_t addr){
  Wire.begin();
    _i2c_addr = addr;
}

boolean LD3320::WireWriteByte(uint8_t val)
{
    Wire.beginTransmission(_i2c_addr);
    Wire.write(val);
    if( Wire.endTransmission() != 0 ) {
        return false;
    }
    return true;
}

boolean LD3320::WireWriteDataArray(uint8_t reg, uint8_t *val, unsigned int len)
{
    unsigned int i;
    Wire.beginTransmission(_i2c_addr);
    Wire.write(reg);
    for(i = 0; i < len; i++) {
        Wire.write(val[i]);
    }
    if( Wire.endTransmission() != 0 ) {
        return false;
    }
    return true;
}

int LD3320::WireReadDataArray(uint8_t reg, uint8_t *val, unsigned int len)
{
    unsigned char i = 0;  
    /* Indicate which register we want to read from */
    if (!WireWriteByte(reg)) {
        return -1;
    }
    Wire.requestFrom(_i2c_addr, len);
    while (Wire.available()) {
        if (i >= len) {
            return -1;
        }
        val[i] = Wire.read();
        i++;
    }
    /* Read block data */    
    return i;
}

boolean LD3320::ld3320_config_time(unsigned char t) 
{
    Wire.beginTransmission(_i2c_addr);
	Wire.write(VOICE_CONFIG_TIME_REG);
	Wire.write(t);
    if (Wire.endTransmission() != 0) {
        delay(10);
        return false;
    }
    delay(300);
    return true;
}

boolean LD3320::ld3320_config_mode(E_WORK_MODE m)
{
  Wire.beginTransmission(_i2c_addr);
	Wire.write(VOICE_MODE_REG);
	Wire.write(m);
    if (Wire.endTransmission() != 0) {
        delay(10);
        return false;
    }
    delay(300);
    return true;	
}

boolean LD3320::ld3320_clear(void)
{
	WireWriteByte(VOICE_ERASE_REG);
}

boolean LD3320::ld3320_reset(void)
{
  WireWriteByte(VOICE_RESET_REG);
  delay(300);

}

boolean LD3320::ld3320_asr_start(void)
{
  WireWriteByte(VOICE_ASR_START_REG);
  delay(300);
  return true;
}

unsigned char LD3320::ld3320_get_result(void)
{
    unsigned char result;
    WireReadDataArray(VOICE_RESULT_REG, &result, 1);
    return result;
}

/*
 * 添加词条函数，
 * idNum：词条对应的识别号，1~255随意设置。识别到该号码对应的词条语音时，
 *        会将识别号存放到ASR_RESULT_ADDR处，等待主机读取，读取后清0
 * words：要识别汉字词条的拼音，汉字之间用空格隔开
 * 执行该函数，词条是自动往后排队添加的。
 */
boolean LD3320::ld3320_add_words(unsigned char idNum, const char *words)
{
    Wire.beginTransmission(_i2c_addr);
    Wire.write(VOICE_ADD_WORDS_REG);
    Wire.write(idNum);
    Wire.write(words, strlen(words));
    if (Wire.endTransmission() != 0) {
        delay(10);
        return false;
    }
    delay(300);
    return true;
}

boolean LD3320::ld3320_config_keywords(const char *words)
{
	return ld3320_add_words(0, words);
}

LD3320::~LD3320()
{
}