#ifndef TTS_H
#define TTS_H
#include <Wire.h>

#define S_CORRECT 0X41
#define S_ERROR   0X45
#define S_DATA    0X46
#define S_MARK    0X47
#define S_INIT    0X4A
#define S_BUSY    0X4E
#define S_IDLE    0X4F

class TTS
{
private:    
    void SendHeardCmd(); 
public:
    TTS();
    void Start(uint8_t *p_buff, uint8_t buff_size);
    void Stop();
    void Pause();
    void Continue();
    void TextCacheCmd(uint8_t *p_buff, uint8_t buff_size);
    void Cplay(uint8_t num);
    uint8_t RetStatus();
    uint8_t StatusQuery();
    uint8_t Dormant();
    uint8_t ExitHibernation();
    ~TTS();
};

#endif
