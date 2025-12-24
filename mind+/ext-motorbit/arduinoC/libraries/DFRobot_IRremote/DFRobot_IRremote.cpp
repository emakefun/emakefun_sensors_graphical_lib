#include "DFRobot_IRremote.h"
#if defined(NRF5) || defined(NRF52833)
#include <avr/interrupt.h>
#include <basic.h>
#endif
#if CONFIG_FREERTOS_UNICORE
#define ARDUINO_RUNNING_CORE_IR 0
#else
#define ARDUINO_RUNNING_CORE_IR 1
#endif
#include <Arduino.h>

volatile uint32_t tmp=0;
volatile int counter=0;
volatile unsigned long ts;
volatile uint32_t data;
volatile uint32_t eventData;
volatile bool iravailable;
long micrHigh = 0;
long micrLow = 0;
uint32_t rec_data;

#if defined(NRF52833)
int ir_code = 0x00;
int ir_addr = 0x00;
#endif

IRremote_Receive *IRremote_dal_pt = NULL;
bool task_init;

#if defined(NRF5) || defined(NRF52833)
void loopEvent(){
#else
void loopEvent(void *param){
#endif
    while(true){
        uint32_t val = eventData;
        eventData = 0;
        if(val != 0){
            //if(((val&0xff)^((val>>8)&0xff)) == 0xff){
                if(IRremote_dal_pt->IRcb != NULL){
                    IRremote_dal_pt->IRcb(val&0xff);
                }
            //}
        }
#if defined(NRF5)
        fiber_sleep(50);
#elif defined(NRF52833)
        fiber_sleep(10);
#elif defined(ESP_PLATFORM)
        delay(50);
#endif
    }
}

#if defined(NRF52833)
int logic_value(){//閿熷彨璁规嫹閿熺纭锋嫹鍊奸敓鏂ゆ嫹0閿熸枻鎷烽敓閰碘槄鎷�1閿熸枻鎷烽敓鎺ョ尨鎷烽敓鏂ゆ嫹
    uint32_t lasttime = system_timer_current_time_us();
    uint32_t nowtime;
    while(!uBit.io.P16.getDigitalValue());//閿熼叺绛夎揪鎷�
    nowtime = system_timer_current_time_us();
    if((nowtime - lasttime) > 400 && (nowtime - lasttime) < 700){//閿熼叺纰夋嫹骞�560us
        while(uBit.io.P16.getDigitalValue()){
			yield();
		}
        lasttime = system_timer_current_time_us();
        if((lasttime - nowtime)>400 && (lasttime - nowtime) < 700){//閿熸枻鎷烽敓鑴氶珮纰夋嫹骞�560us
            return 0;
        }else if((lasttime - nowtime)>1500 && (lasttime - nowtime) < 1800){//閿熸枻鎷烽敓鑴氶珮纰夋嫹骞�1.7ms
            return 1;
       }
    }
//uBit.serial.printf("error\r\n");
    return -1;
}

void pulse_deal(){
    int i;
    ir_addr=0x00;//閿熸枻鎷烽敓鏂ゆ嫹
    for(i=0; i<16;i++ )
    {
      if(logic_value() == 1)
      {
        ir_addr |=(1<<i);
      }
    }
    //閿熸枻鎷烽敓鏂ゆ嫹閬ラ敓鏂ゆ嫹閿熸枻鎷烽敓鏂ゆ嫹閿熸枻鎷烽敓鍙鎷穋ommand鎸囬敓鏂ゆ嫹
    ir_code=0x00;//閿熸枻鎷烽敓鏂ゆ嫹
    for(i=0; i<16;i++ )
    {
      if(logic_value() == 1)
      {
        ir_code |=(1<<i);
      }
    }

}

int remote_decode(){
	uint32_t lasttime = system_timer_current_time_us();
    uint32_t nowtime;
    while(uBit.io.P16.getDigitalValue()){//閿熺纰夋嫹骞抽敓楗鸿揪鎷�
        nowtime = system_timer_current_time_us();
        if((nowtime - lasttime) > 100000){//閿熸枻鎷烽敓鏂ゆ嫹100 ms,閿熸枻鎷烽敓鏂ゆ嫹閿熸枻鎷锋椂娌￠敓鍙府鎷烽敓鏂ゆ嫹閿熸枻鎷烽敓鏂ゆ嫹
            ir_code = 0xff00;
            return -1;
        }
    }
    //閿熸枻鎷烽敓鏂ゆ嫹鍙╅敓鐙℃枻鎷烽敓鏂ゆ嫹閿熺粸鎲嬫嫹娲充紮鎷烽敓鏂ゆ嫹閿燂拷100ms
    lasttime = system_timer_current_time_us();
    while(!uBit.io.P16.getDigitalValue()){
		yield();
	}
    nowtime = system_timer_current_time_us();
    if((nowtime - lasttime) < 10000 && (nowtime - lasttime) > 8000){//9ms
        while(uBit.io.P16.getDigitalValue()){
			yield();
		}
        lasttime = system_timer_current_time_us();
        if((lasttime - nowtime) > 4000 && (lasttime - nowtime) < 5000){//4.5ms,閿熸枻鎷烽敓绉哥鎷烽敓鍓跨尨鎷烽敓鏂ゆ嫹鍗忛敓鏂ゆ嫹澶撮敓鏂ゆ嫹閿熸枻鎷烽敓閾板嚖鎷烽敓閰电鎷烽敓鏂ゆ嫹閿熸嵎鈽呮嫹閿熸枻鎷峰閿熸枻鎷烽敓鏂ゆ嫹閿熺纭锋嫹0閿熸枻鎷�1
            pulse_deal();
            //uBit.serial.printf("addr=0x%X,code = 0x%X\r\n",ir_addr,ir_code);
            return ir_code;
        }else if((lasttime - nowtime) > 2000 && (lasttime - nowtime) < 2500){//2.25ms,閿熸枻鎷风ず閿熸枻鎷烽敓渚ラ潻鎷烽敓鏂ゆ嫹涓€閿熸枻鎷烽敓鏂ゆ嫹涓€閿熸枻鎷�
            while(!uBit.io.P16.getDigitalValue());//閿熼叺绛夎揪鎷�
            nowtime = system_timer_current_time_us();
            if((nowtime - lasttime) > 500 && (nowtime - lasttime) < 700){//560us
                //uBit.serial.printf("addr=0x%X,code = 0x%X\r\n",ir_addr,ir_code);
                return ir_code;
            }
        }
    }
}
uint8_t transMind(uint8_t data){
	switch(data){
		case 0: data = 255; break;
		case 1: data = 127; break;
		case 2: data = 191; break;
		case 4: data = 223; break;
		case 5: data = 95; break;
		case 6: data = 159; break;
		case 8: data = 239; break;
		case 9: data = 111; break;
		case 10: data = 175; break;
		case 12: data = 207; break;
		case 13: data = 79; break;
		case 14: data = 143; break;
		case 16: data = 247; break;
		case 17: data = 119; break;
		case 18: data = 183; break;
		case 20: data = 215; break;
		case 21: data = 87; break;
		case 22: data = 151; break;
		case 24: data = 231; break;
		case 25: data = 103; break;
		case 26: data = 167; break;
		default: break;
	}
	return data;
}
void loopEventMaqueen(){
	while(true){
		if(IRremote_dal_pt->IRcb != NULL){
			int back = remote_decode();
			if(back != -1){
				IRremote_dal_pt->IRcb(transMind(back&0xff));
			}
		}
		fiber_sleep(10);
	}
}
#endif
IRremote_Receive::IRremote_Receive() {
    IRremote_dal_pt = this;
    data = 0;
    iravailable = false;
    task_init = false;
    enable = false;
}


void IRremote_Receive::setCallback(IRCallback cb){
    IRcb = cb;
    if(!task_init){
#if defined(NRF5)
    create_fiber(loopEvent);
#elif defined(NRF52833)
    if(recvpin == 20){  // bug wsq 16瀵洝鍓奸崣顖欎簰鏉╂稐鑵戦弬锟�
		//this->resume();
		//this->enable = false;
		create_fiber(loopEventMaqueen);
	}else{
		create_fiber(loopEvent);
	}
#elif defined(ESP_PLATFORM)
        xTaskCreatePinnedToCore(loopEvent, "loopEvent", 2048, NULL, 1, NULL, ARDUINO_RUNNING_CORE_IR);
#endif
        task_init = true;
    }
}


void IRremote_Receive::begin(int recvpin1) {
	recvpin = recvpin1;
#if defined(NRF52833)
    if(recvpin1 == 20){//maqueen maqueenPlus  //閿熸枻鎷烽敓鏂ゆ嫹p16閿熷彨鏂鎷烽敓鏂ゆ嫹閿熸枻鎷� bug wsq
		;
	}else{
		this->enableIRIn();
		this->enable = true;
	}
#endif
    this->enableIRIn();
    this->enable = true;

}

int IRremote_Receive::getPin() {
    return recvpin;
}

uint32_t IRremote_Receive::getData(void) {
    uint32_t _data = irData;
    irData = 0;
    return _data;
}

String IRremote_Receive::getIrCommand()
{
    uint32_t command = this->getData();
    char string[20];

    memset(string,'\0',20);
    sprintf(string,"%lX",command);
    return (String)string;
}

#if defined(ARDUINO_AVR_MEGA2560)
String IRremote_Receive::getIrCommand(int pin)
{
    if(this->enable == false){
        begin(pin);
    }
    uint32_t command = this->getData();
    char string[20];

    memset(string,'\0',20);
    sprintf(string,"%lX",command);
    return (String)string;
}
#endif

void IRremote_Receive::resume() {
#if defined(NRF5)
    detachInterrupt(recvpin);
#elif defined(NRF52833)
    detachInterrupt(recvpin);
#else
    detachInterrupt(digitalPinToInterrupt(recvpin));
#endif
}

// TIMER2 interrupt code to collect raw data.
// Widths of alternating SPACE, MARK are recorded in rawbuf.
// Recorded in ticks of 50 microseconds.
// rawlen counts the number of entries recorded so far.
// First entry is the SPACE between transmissions.
// As soon as a SPACE gets long, ready is set, state switches to IDLE, timing of SPACE continues.
// As soon as first MARK arrives, gap width is recorded, ready is cleared, and new logging starts
void IRremote_Receive::decode(uint32_t code) {  
    //byte add = (code>>24)&0xff;
    data = (code)&0xffffffff;
    eventData = data;
    irData = data;
	irEventData = irData;
    iravailable = true;
}
//long p=0;
bool IRremote_Receive::available() {
    if(iravailable) {
        //p++;
        //if(p>14000){ this->resume();
            iravailable = false;
           // p = 0; this->enableIRIn();
            return true;
       // }
    }
    return false;
}
#if defined(NRF52833)
void IR_INT(int e) {
	if(e == 0) return;
    iravailable = false;

    unsigned long long x = micros();
    unsigned long interval = x-ts;

    ts = x;
    if(interval > 3000){
        counter = 0;
        tmp = 0;
        return;
    }

    if((interval > 2000) && (interval<2500)){
        tmp <<= 1;
        tmp |=  1;
    }else{
        tmp <<= 1;
    }

    counter++;

    if(counter == 32){
        IRremote_dal_pt->decode(tmp); 
        counter = 0;
    }

}
#else
#if defined(ARDUINO_ARCH_ESP8266)
IRAM_ATTR void IR_INT() {
#else
void IR_INT() {
#endif
    iravailable = false;

    unsigned long long x = micros();
    unsigned long interval = x-ts;

    ts = x;
    if(interval > 3000){
        counter = 0;
        tmp = 0;
        return;
    }

    if((interval > 2000) && (interval<2500)){
        tmp <<= 1;
        tmp |=  1;
    }else{
        tmp <<= 1;
    }

    counter++;

    if(counter == 32){
        //Serial.print("tmp= ");Serial.println(tmp);
        IRremote_dal_pt->decode(tmp); 
        counter = 0;
    }

}
#endif
uint32_t IR_invert(uint32_t num)
{
   uint32_t temp = 0, sh = 0xf;
   uint8_t i = 0;
   for (i = 0; i < sizeof(uint32_t); i++)
   {
       temp |= (num & (sh << ((sizeof(uint32_t) - 1 - i) << 2))) << ((i << 3) + 4);
       temp |= (num & (sh << ((sizeof(uint32_t) + i) << 2))) >> ((i << 3) + 4);
   }
   num = ((temp << 2) & 0xcccccccccccccccc) | ((temp >> 2) & 0x3333333333333333);
   num = ((num << 1) & 0xaaaaaaaaaaaaaaaa) | ((num >> 1) & 0x5555555555555555);

   return num;
}

#if defined(IRRMOTE_RMT) && defined(ESP32)

#define NEC_DATA_ITEM_NUM   34  /*!< NEC code item number: header + 32bit data + end */
#define NEC_ITEM_DURATION(d)  ((d & 0x7fff)*10/RMT_TICK_10_US)  /*!< Parse duration time from memory register value */
#define RMT_TICK_10_US        (80000000/80/100000)
#define RMT_RX_ACTIVE_LEVEL   0
#define NEC_HEADER_HIGH_US    9000
#define NEC_BIT_MARGIN_HDR     2000   
#define NEC_BIT_ONE_HIGH_US    560
#define NEC_BIT_ONE_LOW_US    (2250-NEC_BIT_ONE_HIGH_US)
#define NEC_HEADER_LOW_US      4500
#define NEC_BIT_MARGIN         400
#define NEC_BIT_ZERO_HIGH_US   560
#define NEC_BIT_MARGIN         400
#define NEC_BIT_ZERO_LOW_US   (1120-NEC_BIT_ZERO_HIGH_US)  /*!< NEC protocol data bit 0: negative 0.56ms */

void IRremote_Receive::rxRMTCallBack(uint16_t addr, uint16_t cmd)
{
    uint32_t data = cmd;
    data <<= 16;
    data |= addr;
    data = IR_invert(data);
    decode(data);
}

int IRremote_Receive::NEC_ParseItems(rmt_item32_t* item, int item_num, uint16_t* addr, uint16_t* data)
{
    int w_len = item_num;
    if(w_len < NEC_DATA_ITEM_NUM) {
        //Serial.println("rc task wlen");
        return -1;
    }
    int i = 0, j = 0;
    if(!NEC_HeaderIf(item++)) {
        //Serial.println("rc task hdr");
        return -1;
    }
    uint16_t addr_t = 0;
    for(j = 0; j < 16; j++) {
        if(NEC_BitOneIf(item)) {
            addr_t |= (1 << j);
        } else if(NEC_BitZeroIf(item)) {
            addr_t |= (0 << j);
        } else {
            return -1;
        }
        item++;
        i++;
    }
    uint16_t data_t = 0;
    for(j = 0; j < 16; j++) {
        if(NEC_BitOneIf(item)) {
            data_t |= (1 << j);
        } else if(NEC_BitZeroIf(item)) {
            data_t |= (0 << j);
        } else {
            return -1;
        }
        item++;
        i++;
    }
    *addr = addr_t;
    *data = data_t;
    return i;
}

bool IRremote_Receive::NEC_CheckInRange(int duration_ticks, int target_us, int margin_us)
{
    if(( NEC_ITEM_DURATION(duration_ticks) < (target_us + margin_us))
        && ( NEC_ITEM_DURATION(duration_ticks) > (target_us - margin_us))) {
        return true;
    } else {
        return false;
    }
}

bool IRremote_Receive::NEC_HeaderIf(rmt_item32_t* item)
{
    if((item->level0 == RMT_RX_ACTIVE_LEVEL && item->level1 != RMT_RX_ACTIVE_LEVEL)
        && NEC_CheckInRange(item->duration0, NEC_HEADER_HIGH_US, NEC_BIT_MARGIN_HDR)
        && NEC_CheckInRange(item->duration1, NEC_HEADER_LOW_US, NEC_BIT_MARGIN_HDR)) {
        return true;
    }
    return false;
}

bool IRremote_Receive::NEC_BitOneIf(rmt_item32_t* item)
{
    if((item->level0 == RMT_RX_ACTIVE_LEVEL && item->level1 != RMT_RX_ACTIVE_LEVEL)
        && NEC_CheckInRange(item->duration0, NEC_BIT_ONE_HIGH_US, NEC_BIT_MARGIN)
        && NEC_CheckInRange(item->duration1, NEC_BIT_ONE_LOW_US, NEC_BIT_MARGIN)) {
        return true;
    }
    return false;
}

bool IRremote_Receive::NEC_BitZeroIf(rmt_item32_t* item)
{
    if((item->level0 == RMT_RX_ACTIVE_LEVEL && item->level1 != RMT_RX_ACTIVE_LEVEL)
        && NEC_CheckInRange(item->duration0, NEC_BIT_ZERO_HIGH_US, NEC_BIT_MARGIN)
        && NEC_CheckInRange(item->duration1, NEC_BIT_ZERO_LOW_US, NEC_BIT_MARGIN)) {
        return true;
    }
    return false;
}




#endif


// initialization
void IRremote_Receive::enableIRIn() {

#if defined(NRF5) || defined(NRF52833)
    pinMode(recvpin,INPUT);
    attachInterrupt(recvpin,IR_INT,RISING);
#else
#if defined(IRRMOTE_RMT) && defined(ESP32)
    RmtChannel ch = Rmt.rxInit(recvpin, 1000, 10000, 1);
    Rmt.rxStart(ch, RMTTask, this);
#else
    pinMode(recvpin,INPUT);
    attachInterrupt(digitalPinToInterrupt(recvpin),IR_INT,RISING);
#endif
#endif
}

bool IRremote_Receive::keyPressed(char *expected) {

    uint32_t number = data;
    char string[20];
    char *p = string;

    memset(string,'\0',20);
    //itoa(16580863,string,10);Serial.println(string);
    sprintf(string,"%lX",number);

    while(*expected!='\0') {
        if(*expected != *p)
            break;
        expected++;
        p++;
    }

    if(*expected != '\0')
        return false;
    if(*p!= '\0')
        return false;

    data = 0;
    return true;

}

IRremote_Send::IRremote_Send() {

}

void IRremote_Send::begin(int recvpin1) {
    recvpin = recvpin1;
}

int IRremote_Send::getPin() {
    return recvpin;
}

void IRremote_Send::sendNEC(unsigned long data, int nbits) {
#if defined(ESP_PLATFORM)
  noInterrupts();
#endif
    //data = data << (32 - nbits);

    enableIROut(38);

   // noInterrupts();

    this->mark(NEC_HDR_MARK);
    this->space(NEC_HDR_SPACE);

    for (int i = 0; i < nbits; i++) {
        if (data & TOPBIT) {
            this->mark(NEC_BIT_MARK);
            this->space(NEC_ONE_SPACE);
        } else {
            this->mark(NEC_BIT_MARK);
            this->space(NEC_ZERO_SPACE);
        }
        data <<= 1;
    }

    this->mark(NEC_BIT_MARK);
    this->space(0);
#if defined(ESP_PLATFORM)
  interrupts();
#endif
   // interrupts();
}

void IRremote_Send::sendSony(unsigned long data, int nbits) {

    enableIROut(40);

    noInterrupts();

    this->mark(SONY_HDR_MARK);
    this->space(SONY_HDR_SPACE);

    //data = data << (32 - nbits);

    for (int i = 0; i < nbits; i++) {
        if (data & TOPBIT) {
            this->mark(SONY_ONE_MARK);
            this->space(SONY_HDR_SPACE);
        } else {
            this->mark(SONY_ZERO_MARK);
            this->space(SONY_HDR_SPACE);
        }
        data <<= 1;
    }
    interrupts();
}

void IRremote_Send::sendRaw(unsigned int buf[], int len, int hz) {

    enableIROut(hz);
    noInterrupts();
    for (int i = 0; i < len; i++) {
        if (i & 1) {
            this->space(buf[i]);
        } else {
            this->mark(buf[i]);
        }
    }

    space(0); // Just to be sure
    interrupts();
}

// Note: first bit must be a one (start bit)
void IRremote_Send::sendRC5(unsigned long data, int nbits) {

    enableIROut(36);
    noInterrupts();
    //data = data << (32 - nbits);

    this->mark(RC5_T1); // First start bit
    this->space(RC5_T1); // Second start bit
    this->mark(RC5_T1); // Second start bit

    for (int i = 0; i < nbits; i++) {
        if (data & TOPBIT) {
            this->space(RC5_T1); // 1 is this->space, then mark
            this->mark(RC5_T1);
        } else {
            this->mark(RC5_T1);
            this->space(RC5_T1);
        }
        data <<= 1;
    }

    this->space(0); // Turn off at end
    interrupts();
}

// Caller needs to take care of flipping the toggle bit
void IRremote_Send::sendRC6(unsigned long data, int nbits) {

    enableIROut(36);
    noInterrupts();
    //data = data << (32 - nbits);

    this->mark(RC6_HDR_MARK);
    this->space(RC6_HDR_SPACE);
    this->mark(RC6_T1); // start bit
    this->space(RC6_T1);

    int t;
    for (int i = 0; i < nbits; i++) {
        if (i == 3) {
            // double-wide trailer bit
            t = 2 * RC6_T1;
        } else {
            t = RC6_T1;
        }
        if (data & TOPBIT) {
            this->mark(t);
            this->space(t);
        } else {
            this->space(t);
            this->mark(t);
        }

        data <<= 1;
    }

    this->space(0); // Turn off at end
    interrupts();
}
void IRremote_Send::sendPanasonic(unsigned int address, unsigned long data) {

    enableIROut(35);
    noInterrupts();
    this->mark(PANASONIC_HDR_MARK);
    this->space(PANASONIC_HDR_SPACE);
    
    for(int i=0;i<16;i++)
    {
        this->mark(PANASONIC_BIT_MARK);
        if (address & 0x8000) {
            this->space(PANASONIC_ONE_SPACE);
        } else {
            this->space(PANASONIC_ZERO_SPACE);
        }
        address <<= 1;
    }

    for (int i=0; i < 32; i++) {
        this->mark(PANASONIC_BIT_MARK);
        if (data & TOPBIT) {
            this->space(PANASONIC_ONE_SPACE);
        } else {
            this->space(PANASONIC_ZERO_SPACE);
        }
        data <<= 1;
    }

    this->mark(PANASONIC_BIT_MARK);
    this->space(0);
    interrupts();
}
void IRremote_Send::sendJVC(unsigned long data, int nbits, int repeat) {

    enableIROut(38);
    noInterrupts();
    data = data << (32 - nbits);

    if (!repeat){
        this->mark(JVC_HDR_MARK);
        space(JVC_HDR_SPACE); 
    }

    for (int i = 0; i < nbits; i++) {
        if (data & TOPBIT) {
            this->mark(JVC_BIT_MARK);
            space(JVC_ONE_SPACE); 
        } else {
            this->mark(JVC_BIT_MARK);
            space(JVC_ZERO_SPACE); 
        }
        data <<= 1;
    }

    this->mark(JVC_BIT_MARK);
    space(0);
    interrupts();
}

void IRremote_Send::sendWhynter(unsigned long data,  int nbits) {

    // Set IR carrier frequency
    enableIROut(38);
    noInterrupts();
    // Start
    mark(WHYNTER_ZERO_MARK);
    space(WHYNTER_ZERO_SPACE);

    // Header
    mark(WHYNTER_HDR_MARK);
    space(WHYNTER_HDR_SPACE);

    // Data
    for (unsigned long  mask = 1UL << (nbits - 1);  mask;  mask >>= 1) {
        if (data & mask) {
            mark(WHYNTER_ONE_MARK);
            space(WHYNTER_ONE_SPACE);
        } else {
            mark(WHYNTER_ZERO_MARK);
            space(WHYNTER_ZERO_SPACE);
        }
    }

    // Footer
    mark(WHYNTER_ZERO_MARK);
    space(WHYNTER_ZERO_SPACE);  // Always end with the LED off
    interrupts();

}

void IRremote_Send::sendDISH(unsigned long data,  int nbits) {

    // Set IR carrier frequency
    enableIROut(56);
    noInterrupts();
    mark(DISH_HDR_MARK);
    space(DISH_HDR_SPACE);

    for (unsigned long  mask = 1UL << (nbits - 1);  mask;  mask >>= 1) {
        if (data & mask) {
            mark(DISH_BIT_MARK);
            space(DISH_ONE_SPACE);
        } else {
            mark(DISH_BIT_MARK);
            space(DISH_ZERO_SPACE);
        }
    }
    mark(DISH_HDR_MARK);
    interrupts();
}

void IRremote_Send::sendSharpRaw(unsigned long data,  int nbits) {

    enableIROut(38);
    noInterrupts();
    // Sending codes in bursts of 3 (normal, inverted, normal) makes transmission
    // much more reliable. That's the exact behaviour of CD-S6470 remote control.
    for (int n = 0;  n < 3;  n++) {
        for (unsigned long  mask = 1UL << (nbits - 1);  mask;  mask >>= 1) {
            if (data & mask) {
                mark(SHARP_BIT_MARK);
                space(SHARP_ONE_SPACE);
            } else {
                mark(SHARP_BIT_MARK);
                space(SHARP_ZERO_SPACE);
            }
        }

        mark(SHARP_BIT_MARK);
        space(SHARP_ZERO_SPACE);
        delay(40);

        data = data ^ SHARP_TOGGLE_MASK;
    }
    interrupts();
}

void IRremote_Send::sendSAMSUNG(unsigned long data,  int nbits) {

    // Set IR carrier frequency
    enableIROut(38);
    noInterrupts();
    // Header
    mark(SAMSUNG_HDR_MARK);
    space(SAMSUNG_HDR_SPACE);

    // Data
    for (unsigned long  mask = 1UL << (nbits - 1);  mask;  mask >>= 1) {
        if (data & mask) {
            mark(SAMSUNG_BIT_MARK);
            space(SAMSUNG_ONE_SPACE);
        } else {
            mark(SAMSUNG_BIT_MARK);
        space(SAMSUNG_ZERO_SPACE);
        }
    }

    // Footer
    mark(SAMSUNG_BIT_MARK);
    space(0);  // Always end with the LED off
    interrupts();
}

void IRremote_Send::enableIROut(uint8_t khz) {
    pinMode(recvpin, OUTPUT);
#if defined(ARDUINO_AVR_UNO)
    micrHigh = 9;  
    micrLow = 6; 
#elif defined(NRF5)
    micrHigh = 5;  
    micrLow = 0;
#elif defined(NRF52833)
    micrHigh = 11;  
    micrLow = 7;
#elif defined(ARDUINO_AVR_LEONARDO)
    micrHigh = 8;  
    micrLow = 4;
#elif defined(ARDUINO_AVR_MEGA2560)
    micrHigh = 9;  
    micrLow = 6;
#elif defined(ARDUINO_AVR_NANO)
    micrHigh = 8;  
    micrLow = 4;
#elif defined(ESP_PLATFORM)
    micrHigh = 8;  
    micrLow = 8;
#elif defined(ARDUINO_ARCH_RP2040)
    micrHigh = 12;  
    micrLow = 12;
#else
    micrHigh = 13;  
    micrLow = 13;
#endif
}

void IRremote_Send::mark(int time) {

    long time1 = micros();

    while(1){
        IRwrite(recvpin, HIGH);
        delayMicroseconds(micrHigh);
        IRwrite(recvpin,  LOW);
        delayMicroseconds(micrLow);
        if((micros() - time1) >= time){
            return;
        }
    }
}

void IRremote_Send::space(int time) {

    long time1 = micros();

    IRwrite(recvpin,  LOW);

    while(1){
        if((micros() - time1) >= time){
            return;
        }
    }
}
