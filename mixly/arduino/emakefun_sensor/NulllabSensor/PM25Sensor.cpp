#include "PM25Sensor.h"

PM25Sensor::PM25Sensor()
{
}

PM25Sensor::~PM25Sensor()
{
}

void PM25Sensor::begin(HardwareSerial *serial){
  _serialH = serial;
  _serialH->begin(9600);
  _serialH->setTimeout(1500);
}

int PM25Sensor::readPM01()
{
	readBuf();
	return this->_PM01Value;
}

int PM25Sensor::readPM2_5()
{
	readBuf();
	return this->_PM2_5Value;
}

int PM25Sensor::readPM10()
{
	readBuf();
	return this->_PM10Value;
}

char PM25Sensor::checkValue(unsigned char *buf,uint8_t len)
{
	char receiveflag = 0;
	int receiveSum = 0;
	for(int i = 0; i < (len-2); i++){
		receiveSum += buf[i];
	}
	receiveSum += 0x42;
	if(receiveSum == ((buf[len-2] << 8) + buf[len - 1])){
		receiveSum = 0;
		receiveflag = 1;
	}
	return receiveflag;
}

void PM25Sensor::readBuf(){
  if(_serialH){
		if(_serialH->find(0x42)){
			_serialH->readBytes(this->_buf,31);
			if(this->_buf[0] == 0x4d){
				if(checkValue(this->_buf,31)){
					this->_PM01Value = transmitPM01(this->_buf);
					this->_PM2_5Value = transmitPM2_5(this->_buf);
					this->_PM10Value = transmitPM10(this->_buf);
				}
			}
		}
	}
}

int PM25Sensor::transmitPM01(unsigned char *buf){
	int PM01Val;
	PM01Val = ((buf[3]<<8) + buf[4]);
	return PM01Val;
}

int PM25Sensor::transmitPM2_5(unsigned char *buf){
	int PM2_5Val;
	PM2_5Val = ((buf[5]<<8) + buf[6]);
	return PM2_5Val;
}

int PM25Sensor::transmitPM10(unsigned char *buf){
	int PM10Val;
	PM10Val=((buf[7]<<8) + buf[8]);
	return PM10Val;
}