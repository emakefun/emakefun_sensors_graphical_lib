// #include <WString.h>
#include <Arduino.h>
#include <IRremoteInt.h>

#ifndef DFROBOT_IRRMEMOTE_H
#define DFROBOT_IRRMEMOTE_H

#define RAWBUF 100 // Length of raw duration buffer

#if defined(NRF5) || defined(ESP_PLATFORM) || defined(NRF52833) || defined(ARDUINO_ARCH_ESP8266) || defined(ARDUINO_ARCH_RP2040)
#define IRwrite(pin, value) digitalWrite(pin, value)
#else
#define IRwrite(pin, value) digitalWrite1(pin, value)
#endif

#define IRRMOTE_RMT 1
#if defined(IRRMOTE_RMT) && defined(ESP32)
#include "RMT.h"
#endif

typedef void (*IRCallback)(uint8_t val);

class IRremote_Receive
{
    public:

    IRremote_Receive();

    void begin(int recvpin1);

    bool keyPressed(char *expected);

    void resume();

    int getPin();

    uint32_t getData();

    String getIrCommand();
#if defined(ARDUINO_AVR_MEGA2560)
    String getIrCommand(int pin);
#endif

    bool available();

    void setCallback(IRCallback cb);

    void decode(uint32_t code);

    IRCallback IRcb = NULL;

    private:

    uint32_t invert(uint32_t num);

    void enableIRIn();

    uint8_t recvpin;

    bool enable;

    uint32_t irData;

    uint32_t irEventData;

#if defined(IRRMOTE_RMT) && defined(ESP32)
    void rxRMTCallBack(uint16_t addr, uint16_t cmd);
    int NEC_ParseItems(rmt_item32_t* item, int item_num, uint16_t* addr, uint16_t* data);
    bool NEC_HeaderIf(rmt_item32_t* item);
    bool NEC_BitOneIf(rmt_item32_t* item);
    bool NEC_BitZeroIf(rmt_item32_t* item);
	bool NEC_CheckInRange(int duration_ticks, int target_us, int margin_us);
	static void RMTTask(rmt_item32_t* item, uint32_t size, void* parameters)
	{
		IRremote_Receive* obj = (IRremote_Receive*) parameters;
		uint16_t rmt_addr = 0;
		uint16_t rmt_cmd = 0;
		int offset = 0;
		while(1) 
		{
			int res = obj->NEC_ParseItems(item + offset, size / 4 - offset, &rmt_addr, &rmt_cmd);
			if(res > 0) 
			{
				offset += res + 1;
				obj->rxRMTCallBack(rmt_addr, rmt_cmd);
				if ((size / 4 <= offset) || (item + offset)->duration0 == 0 || (item + offset)->duration1 == 0){
					break;
				}
			}else{
				break;
			}
		}
	}
#endif
};

class IRremote_Send 
{
    public:

    IRremote_Send();

    void begin(int recvpin1);

    int getPin();

    void sendNEC(unsigned long data, int nbits);

    void sendWhynter(unsigned long data,  int nbits);

    void sendSony(unsigned long data, int nbits);

    void sendRC5(unsigned long data, int nbits);
  
    void sendRC6(unsigned long data, int nbits);

    void sendDISH(unsigned long data,  int nbits);

    void sendSharpRaw(unsigned long data,  int nbits);

    void sendSAMSUNG(unsigned long data,  int nbits);


    void sendRaw(unsigned int buf[], int len, int hz);

    void sendPanasonic(unsigned int address, unsigned long data);
  
    void sendJVC(unsigned long data, int nbits, int repeat);


    private:

    void space(int time);

    void mark(int time);

    void enableIROut(uint8_t khz);

    uint8_t recvpin;

};


#endif