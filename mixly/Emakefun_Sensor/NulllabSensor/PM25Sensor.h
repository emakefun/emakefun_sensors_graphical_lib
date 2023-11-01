#ifndef _PM25SENSOR_H_
#define _PM25SENSOR_H_

#include "Arduino.h"
#include "SoftwareSerial.h"
#include "HardwareSerial.h"

class PM25Sensor
{
  public:
    PM25Sensor();
    ~PM25Sensor();
    void begin(HardwareSerial *serial);

    int readPM01();
	  int readPM2_5();
	  int readPM10();

	private:
    // HardwareSerial *_serialH=NULL;
    HardwareSerial *_serialH=NULL;
	int _PM01Value;
	int _PM2_5Value;
	int _PM10Value;
	unsigned char _buf[31];
    int   transmitPM01(unsigned char *buf);
    int   transmitPM2_5(unsigned char *buf);
    int   transmitPM10(unsigned char *buf);
	char  checkValue(unsigned char *buf,uint8_t len);
	void  readBuf();
};

#endif





















