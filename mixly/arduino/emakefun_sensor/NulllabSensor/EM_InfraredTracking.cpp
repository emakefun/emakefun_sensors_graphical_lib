#include "EM_InfraredTracking.h"

InfraredTracking::InfraredTracking(uint8_t addr)
{
    Wire.begin();
    _i2c_addr = addr;
    // Sensitivity(500);
}

void InfraredTracking::WriteRegWord(uint8_t reg, uint8_t *array)
{
    Wire.beginTransmission(_i2c_addr);
    Wire.write(reg);
    Wire.write(array[0]);
    Wire.write(array[1]);    
    Wire.endTransmission(); 
}

int InfraredTracking::ReadDataArray(uint8_t reg, uint8_t *array, uint8_t len)
{
    int result = 0;
    Wire.beginTransmission(_i2c_addr);
    Wire.write(reg);
    Wire.endTransmission();
    Wire.requestFrom(_i2c_addr, len);
    while (Wire.available()) {
        if (result >= len) {
            return -1;
        }
        array[result] = Wire.read();
        result++;
    }    
}

void InfraredTracking::Sensitivity(uint16_t threshold)
{
    uint8_t array[2];
    array[0] = threshold & 0xFF;
    array[1] = (threshold >> 8) & 0xFF;
    WriteRegWord(INFRARED_SENSITIVITY_REG, array);
}

uint8_t InfraredTracking::GetState(uint8_t line)
{
    uint8_t result;
    result = ReadDataArray(INFRARED_DIGITAL_REG, &state, 1);
    if (result == -1) {
        return -1;
    }
    return state&line;    
}

boolean InfraredTracking::ReadFIFO()
{
    uint8_t result;
    result = ReadDataArray(INFRARED_ANALOG_REG, FIFO, INFRARED_FIFO_LENGTH);  
    if (result == -1) {
        return false;
    }  
    return true;
}

void InfraredTracking::GetRawDat()
{
    // GetThreshold();
    // GetState();
    ReadFIFO();
    ir_track1 = (FIFO[0] & 0xFF) | ((FIFO[1] & 0xFF) << 8 );
    ir_track2 = (FIFO[2] & 0xFF) | ((FIFO[3] & 0xFF) << 8 );
    ir_track3 = (FIFO[4] & 0xFF) | ((FIFO[5] & 0xFF) << 8 );
    ir_track4 = (FIFO[6] & 0xFF) | ((FIFO[7] & 0xFF) << 8 );
    ir_track5 = (FIFO[8] & 0xFF) | ((FIFO[9] & 0xFF) << 8 );
}

InfraredTracking::~InfraredTracking()
{
}
