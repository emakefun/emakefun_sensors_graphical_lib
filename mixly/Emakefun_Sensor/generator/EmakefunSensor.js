'use strict';

goog.provide('Blockly.Arduino.EmakefunSensor');

goog.require('Blockly.Arduino');

Blockly.Arduino.em_servo = function () {
	var value_servopin = Blockly.Arduino.valueToCode(this, 'em_servopin', Blockly.Arduino.ORDER_ATOMIC);
	var value_servoangle = Blockly.Arduino.valueToCode(this, 'em_servoangle', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['setup_servo'] = 'pinMode('+value_servopin+', OUTPUT);';
	Blockly.Arduino.definitions_['define_servo1'] = 'void SetServoDegree(int Angle){\n  for (int i = 0; i < 80; i++) {\n    float pulsewidth = (Angle * 11) + 350;\n    digitalWrite('+value_servopin+', HIGH);\n   delayMicroseconds(pulsewidth);\n    digitalWrite('+value_servopin+', LOW);\n   delayMicroseconds(20000 - pulsewidth);\n}}';
	var code = 'SetServoDegree(' + value_servoangle + ');\n'
    //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';

    return code;
};

Blockly.Arduino.em_7ledinit = function () {
    var value_pin1 = Blockly.Arduino.valueToCode(this, 'em_pin1', Blockly.Arduino.ORDER_ATOMIC);
	var value_pin2 = Blockly.Arduino.valueToCode(this, 'em_pin2', Blockly.Arduino.ORDER_ATOMIC);
	var value_pin3 = Blockly.Arduino.valueToCode(this, 'em_pin3', Blockly.Arduino.ORDER_ATOMIC);
	var value_pin4 = Blockly.Arduino.valueToCode(this, 'em_pin4', Blockly.Arduino.ORDER_ATOMIC);
	var value_pin5 = Blockly.Arduino.valueToCode(this, 'em_pin5', Blockly.Arduino.ORDER_ATOMIC);
	var value_pin6 = Blockly.Arduino.valueToCode(this, 'em_pin6', Blockly.Arduino.ORDER_ATOMIC);
	var value_pin7 = Blockly.Arduino.valueToCode(this, 'em_pin7', Blockly.Arduino.ORDER_ATOMIC);
	var value_pin8 = Blockly.Arduino.valueToCode(this, 'em_pin8', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_7led1'] = '#include<SegmentDisplay.h>';
	Blockly.Arduino.definitions_['define_7led'] = 'SegmentDisplay _7SegmentDisplay('+value_pin1+', '+value_pin2+', '+value_pin3+', '+value_pin4+', '+value_pin5+', '+value_pin6+', '+value_pin7+', '+value_pin8+');'
//Blockly.Arduino.setups_['setup_7led'] ='\t'+'int i;\n'+'Serial.begin(115200);\n'+'DisplayOff();\n'+'for( i = 0 ; i < 8 ; i++ ){'+'pinMode( LED_PIN[i] ,OUTPUT );}\n'
    //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = '';
    return code;
};

Blockly.Arduino.em_7leddisplaynum = function () {
	var value_displaynum = Blockly.Arduino.valueToCode(this, 'em_displaynum', Blockly.Arduino.ORDER_ATOMIC);
	var code = '_7SegmentDisplay.DisplayChar((byte)'+value_displaynum+');\n'
    //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    return code;
};

Blockly.Arduino.em_47ledinit = function () {
    var value_Pin1 = Blockly.Arduino.valueToCode(this, 'em_pin1', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin2 = Blockly.Arduino.valueToCode(this, 'em_pin2', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin3 = Blockly.Arduino.valueToCode(this, 'em_pin3', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin4 = Blockly.Arduino.valueToCode(this, 'em_pin4', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin5 = Blockly.Arduino.valueToCode(this, 'em_pin5', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin6 = Blockly.Arduino.valueToCode(this, 'em_pin6', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin7 = Blockly.Arduino.valueToCode(this, 'em_pin7', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin8 = Blockly.Arduino.valueToCode(this, 'em_pin8', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin9 = Blockly.Arduino.valueToCode(this, 'em_pin9', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin10 = Blockly.Arduino.valueToCode(this, 'em_pin10', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin11 = Blockly.Arduino.valueToCode(this, 'em_pin11', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin12 = Blockly.Arduino.valueToCode(this, 'em_pin12', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_comport'] = '#include<SegmentDisplay.h>';
	Blockly.Arduino.definitions_['define_47led'] = 'SegmentDisplay _4Bit_7SegmentDisplay('+value_Pin1+', '+value_Pin2+', '+value_Pin3+', '+value_Pin4+', '+value_Pin5+', '+value_Pin6+', '+value_Pin7+', '+value_Pin8+', '+value_Pin9+', '+value_Pin10+', '+value_Pin11+', '+value_Pin12+');';
	Blockly.Arduino.setups_['setup_input_47led'] = '_4Bit_7SegmentDisplay.TurnOffAllLed();';
    var code = '';
    return code;
};

Blockly.Arduino.em_7ledcountnum = function () {
	var value_count = Blockly.Arduino.valueToCode(this, 'em_count', Blockly.Arduino.ORDER_ATOMIC);
	//Blockly.Arduino.definitions_['define_count'] = 'char disp[4] = { 0 , 0 , 0 , 0 } ;\nint display_dat = '+value_count+', count = 0 ;\n'+'char LED_Display_Value[][3]  ={    { \'0\', 0x3F , 0xC0 } ,\n{ \'1\', 0x06 , 0xF9 } ,\n{ \'2\', 0x5B , 0xA4 } ,\n{ \'3\', 0x4F , 0xB0 } ,\n{ \'4\', 0x66 , 0x99 } ,\n{ \'5\', 0x6D , 0x92 } ,\n{ \'6\', 0x7D , 0x82 } ,\n{ \'7\', 0x07 , 0xF8 } ,\n{ \'8\', 0x7F , 0x80 } ,\n{ \'9\', 0x6F , 0x90 } ,\n{  0 , 0x00 , 0xFF }\n};\n'+'void  DisplayOff(void){\nint i ;\nfor( i = 0 ; i < 8 ; i++)\ndigitalWrite(LED_PIN[i],LOW);\nfor( i = 0 ; i < 4 ; i++)\ndigitalWrite(LED_SELECT[i],HIGH);\n}\nchar  GetDisplayValue(char Array[][3] ,\n char DisplayChar ){int i = 0 ;\nfor( i = 0 ; i < 10 ; i++){if( Array[i][0] == DisplayChar )\n            return Array[i][COM_PORT] ;\n       }\n    return 0 ;\n}void LED_Display ( char ch){\nint i ;\nfor( i = 0 ; i < 8 ; i++){\nif(  ch & ( 1 << i ) ){\ndigitalWrite(LED_PIN[i] ,HIGH);\n}else{\ndigitalWrite(LED_PIN[i],LOW);\n}\n}\n}\nvoid numble2dis( int numble ){\nint numble_bit = 0 ;int bit_base = 1000 ;\nfor( numble_bit = 0 ; numble_bit < 4 ; numble_bit++ ){\nif( numble/bit_base != 0){\ndisp[numble_bit] = numble/bit_base + \'0\';\nnumble = numble % bit_base ;\n}else{\ndisp[numble_bit] = \'0\';\n}\nbit_base = bit_base / 10 ;\n}}';
	//Blockly.Arduino.setups_['setup_47count'] ='\t'+'int i;\nfor( i = 0 ; i < 8 ; i++ )\npinMode( LED_PIN[i] ,OUTPUT ) ;\nfor( i = 0 ; i < 4 ; i++ )\npinMode( LED_SELECT[i] ,OUTPUT ) ;\nDisplayOff();\n';
	var code = '_4Bit_7SegmentDisplay.DisplayChar('+value_count+');\n';
	 //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    return code;
};

Blockly.Arduino.em_7ledcountnumoff = function () {
    // var value_count = Blockly.Arduino.valueToCode(this, 'count', Blockly.Arduino.ORDER_ATOMIC);
	//Blockly.Arduino.definitions_['define_count'] = 'char disp[4] = { 0 , 0 , 0 , 0 } ;\nint display_dat = '+value_count+', count = 0 ;\n'+'char LED_Display_Value[][3]  ={    { \'0\', 0x3F , 0xC0 } ,\n{ \'1\', 0x06 , 0xF9 } ,\n{ \'2\', 0x5B , 0xA4 } ,\n{ \'3\', 0x4F , 0xB0 } ,\n{ \'4\', 0x66 , 0x99 } ,\n{ \'5\', 0x6D , 0x92 } ,\n{ \'6\', 0x7D , 0x82 } ,\n{ \'7\', 0x07 , 0xF8 } ,\n{ \'8\', 0x7F , 0x80 } ,\n{ \'9\', 0x6F , 0x90 } ,\n{  0 , 0x00 , 0xFF }\n};\n'+'void  DisplayOff(void){\nint i ;\nfor( i = 0 ; i < 8 ; i++)\ndigitalWrite(LED_PIN[i],LOW);\nfor( i = 0 ; i < 4 ; i++)\ndigitalWrite(LED_SELECT[i],HIGH);\n}\nchar  GetDisplayValue(char Array[][3] ,\n char DisplayChar ){int i = 0 ;\nfor( i = 0 ; i < 10 ; i++){if( Array[i][0] == DisplayChar )\n            return Array[i][COM_PORT] ;\n       }\n    return 0 ;\n}void LED_Display ( char ch){\nint i ;\nfor( i = 0 ; i < 8 ; i++){\nif(  ch & ( 1 << i ) ){\ndigitalWrite(LED_PIN[i] ,HIGH);\n}else{\ndigitalWrite(LED_PIN[i],LOW);\n}\n}\n}\nvoid numble2dis( int numble ){\nint numble_bit = 0 ;int bit_base = 1000 ;\nfor( numble_bit = 0 ; numble_bit < 4 ; numble_bit++ ){\nif( numble/bit_base != 0){\ndisp[numble_bit] = numble/bit_base + \'0\';\nnumble = numble % bit_base ;\n}else{\ndisp[numble_bit] = \'0\';\n}\nbit_base = bit_base / 10 ;\n}}';
	//Blockly.Arduino.setups_['setup_47count'] ='\t'+'int i;\nfor( i = 0 ; i < 8 ; i++ )\npinMode( LED_PIN[i] ,OUTPUT ) ;\nfor( i = 0 ; i < 4 ; i++ )\npinMode( LED_SELECT[i] ,OUTPUT ) ;\nDisplayOff();\n';
	 var code = '_4Bit_7SegmentDisplay.TurnOffAllLed();';
	 //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';

    return code;
};

Blockly.Arduino.em_ultrasonicread = function () {
    var value_trigpin = Blockly.Arduino.valueToCode(this, 'em_trigpin', Blockly.Arduino.ORDER_ATOMIC);
	var value_echopin = Blockly.Arduino.valueToCode(this, 'em_echopin', Blockly.Arduino.ORDER_ATOMIC);
	// var value_servos = Blockly.Arduino.valueToCode(this, 'servos', Blockly.Arduino.ORDER_ATOMIC);
	// Blockly.Arduino.definitions_['define_radar'] = '#include <Servo.h>';
	 Blockly.Arduino.definitions_['define_ultrasonicread'] = 'float checkdistance() {\n  digitalWrite('+value_trigpin+', LOW);\n  delayMicroseconds(2);\n  digitalWrite('+value_trigpin+', HIGH);\n  delayMicroseconds(10);\n  digitalWrite('+value_trigpin+', LOW);\n  float distance = pulseIn('+value_echopin+', HIGH) / 58.00;\n  return distance;\n}\n';
	 Blockly.Arduino.setups_['setup_ultrasonicread'] ='pinMode('+value_trigpin+', OUTPUT);\n  pinMode('+value_echopin+', INPUT);\n'
    //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = 'checkdistance()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.em_dianzhen = function () {
    var value_clk = Blockly.Arduino.valueToCode(this, 'em_clk', Blockly.Arduino.ORDER_ATOMIC);
	var value_cs = Blockly.Arduino.valueToCode(this, 'em_cs', Blockly.Arduino.ORDER_ATOMIC);
	var value_din = Blockly.Arduino.valueToCode(this, 'em_din', Blockly.Arduino.ORDER_ATOMIC);
	var value_count = Blockly.Arduino.valueToCode(this, 'em_count', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_dianzhen'] = '#include <MAX7219_MaxMatrix.h>\n';
	 Blockly.Arduino.definitions_['define_dianzhen1'] = 'MaxMatrix ledmatrix('+value_din+', '+value_cs+', '+value_clk+', '+value_count+');\n';
	 Blockly.Arduino.setups_['setup_dianzhen'] ='ledmatrix.init();\n  ledmatrix.setIntensity(1);\n  ledmatrix.clearMatrix();\n';
	 //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = '';
	return code;
};

Blockly.Arduino.em_dianzhenprint = function () {
	var dropdown_maximage = this.getFieldValue('em_maximage');
	//var value_cs = Blockly.Arduino.valueToCode(this, 'cs', Blockly.Arduino.ORDER_ATOMIC);
	//var value_din = Blockly.Arduino.valueToCode(this, 'din', Blockly.Arduino.ORDER_ATOMIC);
	//Blockly.Arduino.definitions_['define_dianzhen'] = '#include "LedControl.h"';
	 //Blockly.Arduino.definitions_['define_dianzhen1'] = 'int CLK = '+value_clk+';\nint CS =  '+value_cs+';\nint DIN = '+value_din+';\n'+'LedControl lc=LedControl(DIN,CLK,CS,0);\n'+'void printByte(byte character []){\nint i = 0;\nfor(i=0;i<8;i++){\nlc.setRow(0,i,character[i]);\n}}\n';
	 //Blockly.Arduino.setups_['setup_dianzhen'] ='\t'+'lc.shutdown(0,false);\nlc.setIntensity(0,15);\nlc.clearDisplay(0);\n';
	 //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = 'ledmatrix.writeFull(ledmatrix.getMouthShape('+dropdown_maximage+'));\n';
	return code;
};

Blockly.Arduino.em_getbluetooth = function () {
	var code = 'Serial.available() > 0'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.em_getbluetoothdata = function () {
	var code = 'char(Serial.read())'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.em_initir = function () {
	var value_initir = Blockly.Arduino.valueToCode(this, 'em_initir', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_initir'] = '#include <IR_remote.h>\n#include <keymap.h>\n'+'IRremote ir('+value_initir+');\n';
	Blockly.Arduino.setups_['setup_initir'] = 'ir.begin();\n';
	var code = '';
    return code;
};

Blockly.Arduino.em_irKeyPress = function(){
	var dropdown_Irkey = this.getFieldValue('em_irkey');
	var code = 'ir.getIrKey(ir.getCode(),1) == '+dropdown_Irkey+'';
	return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};

Blockly.Arduino.em_irKeyPress2 = function(){
	var dropdown_Irkey2 = this.getFieldValue('em_irkey2');
	var code = 'ir.getIrKey(ir.getCode(),2) == '+dropdown_Irkey2+'';
	return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};

Blockly.Arduino.em_irKeyPress3 = function(){
	var code = 'ir.getCode()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.em_ds3231setdate = function () {
    var value_year = Blockly.Arduino.valueToCode(this, 'em_year', Blockly.Arduino.ORDER_ATOMIC);
	var value_month = Blockly.Arduino.valueToCode(this, 'em_month', Blockly.Arduino.ORDER_ATOMIC);
	var value_day = Blockly.Arduino.valueToCode(this, 'em_day', Blockly.Arduino.ORDER_ATOMIC);
	var value_week = Blockly.Arduino.valueToCode(this, 'em_week', Blockly.Arduino.ORDER_ATOMIC);
	var value_hour = Blockly.Arduino.valueToCode(this, 'em_hour', Blockly.Arduino.ORDER_ATOMIC);
	var value_minute = Blockly.Arduino.valueToCode(this, 'em_minute', Blockly.Arduino.ORDER_ATOMIC);
	var value_sencond = Blockly.Arduino.valueToCode(this, 'em_sencond', Blockly.Arduino.ORDER_ATOMIC);
Blockly.Arduino.setups_['setup_ds3231setdate'] = 'Wire.begin();\n'+'Clock.setSecond('+value_sencond+');\n'+'Clock.setMinute('+value_minute+');\n'+'Clock.setHour('+value_hour+');\n'+'Clock.setDoW('+value_week+');\n'+'Clock.setDate('+value_day+');\n'+'Clock.setMonth('+value_month+');\n'+'Clock.setYear('+value_year+');\n';
	Blockly.Arduino.definitions_['define_ds3231setdate'] = '#include <DS3231.h>\n#include <LCD.h>\n'+'DS3231 Clock;\n'+'bool Century=false;\n'+'bool h12;\n'+'bool PM;\n'+'char lcd_dis_str[2][16];\n';
	 //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = '';
    return code;
};

Blockly.Arduino.em_ds3231gettime = function () {
	Blockly.Arduino.definitions_['define_ds3231gettime'] = 'void ReadDS3231()\n{\n    int second,minute,hour,date,month,year,temperature;\n    second=Clock.getSecond();\n    minute=Clock.getMinute();\n    hour=Clock.getHour(h12, PM);\n    date=Clock.getDate();\n    month=Clock.getMonth(Century);\n    year=Clock.getYear();\n  temperature=Clock.getTemperature();\n  sprintf(lcd_dis_str[0],\"  20%02d-%02d-%02d\",year,month,date);\n  sprintf(lcd_dis_str[1],\"   %02d:%02d:%02d  %2d\'\",hour,minute,second,temperature);\n}\n';
	//Blockly.Arduino.setups_['setup_I2CLED'] = 'lcd.begin (16,2);\n'+'lcd.setBacklightPin(3,POSITIVE);\n'+'lcd.setBacklight(HIGH);\n';
	var code = 'ReadDS3231();\n';
    return code;
};

Blockly.Arduino.em_ds3231readyear = function () {
       var code = 'lcd_dis_str[0]'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.em_ds3231readhour = function () {
	var code = 'lcd_dis_str[1]';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.em_keypad = function () {
    var value_row_1 = Blockly.Arduino.valueToCode(this, 'em_row_1', Blockly.Arduino.ORDER_ATOMIC);
	var value_row_2 = Blockly.Arduino.valueToCode(this, 'em_row_2', Blockly.Arduino.ORDER_ATOMIC);
	var value_row_3 = Blockly.Arduino.valueToCode(this, 'em_row_3', Blockly.Arduino.ORDER_ATOMIC);
	var value_row_4 = Blockly.Arduino.valueToCode(this, 'em_row_4', Blockly.Arduino.ORDER_ATOMIC);
	var value_COL_1 = Blockly.Arduino.valueToCode(this, 'em_col_1', Blockly.Arduino.ORDER_ATOMIC);
	var value_COL_2 = Blockly.Arduino.valueToCode(this, 'em_col_2', Blockly.Arduino.ORDER_ATOMIC);
	var value_COL_3 = Blockly.Arduino.valueToCode(this, 'em_col_3', Blockly.Arduino.ORDER_ATOMIC);
	var value_COL_4 = Blockly.Arduino.valueToCode(this, 'em_col_4', Blockly.Arduino.ORDER_ATOMIC);
//Blockly.Arduino.setups_['setup_ds3231setdate'] = 'Wire.begin();\n'+'Clock.setSecond('+value_second+');\n'+'Clock.setMinute('+value_minute+');\n'+'Clock.setHour('+value_hour+');\n'+'Clock.setDoW('+value_week+');\n'+'Clock.setDate('+value_day+');\n'+'Clock.setMonth('+value_month+');\n'+'Clock.setYear('+value_year+');\n';
	Blockly.Arduino.definitions_['define_keypad'] = '#include <Keypad.h>\n'+'#define   ROW_1   '+value_row_1+'\n#define   ROW_2   '+value_row_2+'\n#define   ROW_3   '+value_row_3+'\n#define   ROW_4   '+value_row_4+'\n#define   COL_1   '+value_COL_1+'\n#define   COL_2  '+value_COL_2+'\n#define   COL_3   '+value_COL_3+'\n#define   COL_4   '+value_COL_4+'\nconst byte ROWS = 4;\nconst byte COLS = 4;\nchar hexaKeys[ROWS][COLS] = {\n  {\'1\',\'2\',\'3\',\'A\'},\n  {\'4\',\'5\',\'6\',\'B\'},\n  {\'7\',\'8\',\'9\',\'C\'},\n  {\'*\',\'0\',\'#\',\'D\'}\n};\nbyte rowPins[ROWS] = {'+value_row_1+', '+value_row_2+', '+value_row_3+', '+value_row_4+'};\nbyte colPins[COLS] = {'+value_COL_1+', '+value_COL_2+', '+value_COL_3+', '+value_COL_4+'};\nKeypad customKeypad = Keypad( makeKeymap(hexaKeys), rowPins, colPins, ROWS, COLS);\n';
	 //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = '';
    return code;
};

Blockly.Arduino.em_getkeypad = function () {
	Blockly.Arduino.definitions_['define_getkeypad'] = 'char customKey = customKeypad.getKey();\n';
	Blockly.Arduino.setups_['setup_getkeypad'] = 'int i;\n  for(i=0 ; i< ROWS ; i++)  {\n    pinMode(rowPins[i],OUTPUT);\n    pinMode(colPins[i],OUTPUT);\n  }\n';
	var code = 'char customKey = customKeypad.getKey();\n';
    return code;
};

Blockly.Arduino.em_keypadpressed = function () {
	var code = 'customKey';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.em_keypadvalue = function () {
	var code = 'customKey';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.em_getbluetoothvalue = function () {
	Blockly.Arduino.definitions_['define_getbluetoothvalue'] = '#include  <ProtocolParser.h>\n'+'ProtocolParser *mProtocol = new ProtocolParser();\n';
	var code = 'mProtocol->RecevData();\n';
    return code;
};

Blockly.Arduino.em_dogetbluetoothvalue = function () {
	var code = 'mProtocol->ParserPackage()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.em_bluetoothmode = function () {
	var dropdown_Bluetoothmodes = this.getFieldValue('em_bluetoothmodes');
	var code = 'mProtocol->GetRobotControlFun()=='+dropdown_Bluetoothmodes+'';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.em_bluetoothgetrgbvalue = function () {
	var code = ' mProtocol->GetRgbValue()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.em_bluetoothsetrgb = function () {
	var code = 'setColor( color>>16, (color>>8)&0xFF, color&0xFF);\n';
    return code;
};

Blockly.Arduino.em_bluetoothsetbuzzer = function () {
	Blockly.Arduino.definitions_['define_bluetoothsetbuzzer'] = 'void PianoSing(byte b[])\n{\n    union result\n    {\n      float d;\n      unsigned char data[4];\n    }r1,r2;\n    r2.data[0]=b[0];\n    r2.data[1]=b[1];\n    r2.data[2]=b[2];\n    r2.data[3]=b[3];\n    mBuzzer->_tone(r2.d,120, 2);\n}\n';
	var code = 'PianoSing((byte *)mProtocol->GetPianoSing());\n';
    return code;
};

Blockly.Arduino.em_buzzerpin = function () {
	var value_buzzerpin = this.getFieldValue('em_buzzerpin');
	var value_buzzerFreq = Blockly.Arduino.valueToCode(this, 'em_freq', Blockly.Arduino.ORDER_ATOMIC);
	var value_buzzerTime = Blockly.Arduino.valueToCode(this, 'em_buzzerTime', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_buzzerpin'] = '#include <Buzzer.h>\n';
	Blockly.Arduino.definitions_['define_buzzerpin_' + value_buzzerpin] = 'Buzzer buzzer_' + value_buzzerpin + '(' + value_buzzerpin + ');\n';
	//Blockly.Arduino.setups_['setup_buzzerpin'] = ' pinMode('+value_buzzerpin+', OUTPUT);\n';
	var code = 'buzzer_' + value_buzzerpin + '.tone(' + value_buzzerpin + ', ' + value_buzzerFreq + ', ' + value_buzzerTime + ');\n';
    return code;
};

Blockly.Arduino.em_iicinit = function () {
	var value_clk = Blockly.Arduino.valueToCode(this, 'em_clk', Blockly.Arduino.ORDER_ATOMIC);
	var value_dio = Blockly.Arduino.valueToCode(this, 'em_dio', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_iicinit'] = '#include <TM1637.h>\nTM1637 tm1637('+value_clk+','+value_dio+');\n';
	Blockly.Arduino.setups_['setup_iicinit'] = ' tm1637.set();\ntm1637.init();\ntm1637.point(POINT_OFF);\n';
	var code = '';
    return code;
};

Blockly.Arduino.em_iicdisplaynum = function () {
	var value_num1 = Blockly.Arduino.valueToCode(this, 'em_num1', Blockly.Arduino.ORDER_ATOMIC);
	var value_num2 = Blockly.Arduino.valueToCode(this, 'em_num2', Blockly.Arduino.ORDER_ATOMIC);
	var value_num3 = Blockly.Arduino.valueToCode(this, 'em_num3', Blockly.Arduino.ORDER_ATOMIC);
	var value_num4 = Blockly.Arduino.valueToCode(this, 'em_num4', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_iicdisplaynum'] = 'int8_t Disp[] = {'+value_num1+', '+value_num2+', '+value_num3+', '+value_num4+'};';
	//Blockly.Arduino.setups_['setup_iicinit'] = ' tm1637.set();\ntm1637.init();\ntm1637.point(POINT_OFF);\n';
	var code = 'tm1637.display(Disp);\nwhile(1);\n';
    return code;
};
Blockly.Arduino.em_iictube = function () {
	var value_hours = Blockly.Arduino.valueToCode(this, 'em_hours', Blockly.Arduino.ORDER_ATOMIC);
	var value_minutes = Blockly.Arduino.valueToCode(this, 'em_minutes', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_iictube'] = '#include <TimerOne.h>\n#define ON 1\n#define OFF 0\nint8_t TimeDisp[] = {0x00,0x00,0x00,0x00};\nunsigned char ClockPoint = 1;\nunsigned char Update;\nunsigned char halfsecond = 0;\nunsigned char second;\nunsigned char minute = '+value_minutes+';\nunsigned char hour = '+value_hours+';\nvoid TimingISR()\n{\n  halfsecond ++;\n  Update = ON;\n  if(halfsecond == 2){\n    second ++;\n    if(second == 60)\n    {\n      minute ++;\n      if(minute == 60)\n      {\n        hour ++;\n        if(hour == 24)hour = 0;\n        minute = 0;\n      }\n      second = 0;\n    }\n    halfsecond = 0;  \n  }\n  ClockPoint = (~ClockPoint) & 0x01;\n}\nvoid TimeUpdate(void)\n{\n  if(ClockPoint)tm1637.point(POINT_ON);\n  else tm1637.point(POINT_OFF); \n  TimeDisp[0] = hour / 10;\n  TimeDisp[1] = hour % 10;\n  TimeDisp[2] = minute / 10;\n  TimeDisp[3] = minute % 10;\n  Update = OFF;\n}\n';
	Blockly.Arduino.setups_['setup_iictube'] = '  Timer1.initialize(500000);\n  Timer1.attachInterrupt(TimingISR);\n';
	var code = ' if(Update == ON)\n  {\n    TimeUpdate();\n    tm1637.display(TimeDisp);\n  }\n';
    return code;
};

Blockly.Arduino.em_doubleDcMotorDriver = function () {
	var motorPin = this.getFieldValue('em_motorPin');
	var speed = Blockly.Arduino.valueToCode(this, 'em_speed', Blockly.Arduino.ORDER_ATOMIC);
	var code = '';
	if (speed > 0) {
	    if (motorPin == 1 || motorPin == 2) {
	        code = "analogWrite(5," + speed + ");\nanalogWrite(6, 0);\n";
	    } else {
	        code = "analogWrite(9," + speed + ");\nanalogWrite(10, 0);\n";
	    }
	} else {
	    if (motorPin == 1 || motorPin == 2) {
		code = "analogWrite(6,abs" + speed + ");\nanalogWrite(5, 0);\n";
	    } else {
		code = "analogWrite(10,abs" + speed + ");\nanalogWrite(9, 0);\n";
	    }
	}
	return code;
};

Blockly.Arduino.em_stepper = function () {
	var value_in1 = Blockly.Arduino.valueToCode(this, 'em_in1', Blockly.Arduino.ORDER_ATOMIC);
	var value_in2 = Blockly.Arduino.valueToCode(this, 'em_in2', Blockly.Arduino.ORDER_ATOMIC);
	var value_in3 = Blockly.Arduino.valueToCode(this, 'em_in3', Blockly.Arduino.ORDER_ATOMIC);
	var value_in4 = Blockly.Arduino.valueToCode(this, 'em_in4', Blockly.Arduino.ORDER_ATOMIC);
	var value_ste = Blockly.Arduino.valueToCode(this, 'em_ste', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_stepper'] = '#include <KW_Stepper.h>\nStepper stepper('+value_ste+', '+value_in1+', '+value_in2+', '+value_in3+', '+value_in4+');';
	//Blockly.Arduino.setups_['setup_iictube'] = ' tm1637.set();  tm1637.init();\n  Timer1.initialize(500000);\n  Timer1.attachInterrupt(TimingISR);\n';
	var code = ' ';
    return code;
};


Blockly.Arduino.em_stepperspeed = function () {
	var value_speed1 = Blockly.Arduino.valueToCode(this, 'em_speed1', Blockly.Arduino.ORDER_ATOMIC);
	//Blockly.Arduino.definitions_['define_stepper1'] = '#include \"KW_Stepper.h\"\nStepper stepper(200, '+value_in1+', '+value_in2+', '+value_in3+', '+value_in4+');';
	//Blockly.Arduino.setups_['setup_kw_stepperspeed'] = 'stepper.setSpeed('+value_speed1+');\n';
	var code = 'stepper.setSpeed('+value_speed1+');\n';
    return code;
};

Blockly.Arduino.em_stepperspeed2 = function () {
	 //var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
	var value_step1 = Blockly.Arduino.valueToCode(this, 'em_step1', Blockly.Arduino.ORDER_ATOMIC);
	//Blockly.Arduino.definitions_['define_stepper1'] = '#include \"KW_Stepper.h\"\nStepper stepper(200, '+value_in1+', '+value_in2+', '+value_in3+', '+value_in4+');';
	//Blockly.Arduino.setups_['setup_kw_stepperspeed'] = 'stepper.setSpeed('+value_speed1+');\n';
	var code = 'stepper.step('+value_step1+');\n';
    return code;
};

// Blockly.Arduino.em_4linelcd = function () {
// 	 var value_RS = Blockly.Arduino.valueToCode(this, 'RS', Blockly.Arduino.ORDER_ATOMIC);
// 	 var value_RW = Blockly.Arduino.valueToCode(this, 'RW', Blockly.Arduino.ORDER_ATOMIC);
// 	 var value_E = Blockly.Arduino.valueToCode(this, 'E', Blockly.Arduino.ORDER_ATOMIC);
// 	 var value_DB4 = Blockly.Arduino.valueToCode(this, 'DB4', Blockly.Arduino.ORDER_ATOMIC);
// 	 var value_DB5 = Blockly.Arduino.valueToCode(this, 'DB5', Blockly.Arduino.ORDER_ATOMIC);
// 	 var value_DB6 = Blockly.Arduino.valueToCode(this, 'DB6', Blockly.Arduino.ORDER_ATOMIC);
// 	 var value_DB7 = Blockly.Arduino.valueToCode(this, 'DB7', Blockly.Arduino.ORDER_ATOMIC);
// 	Blockly.Arduino.definitions_['define__4linelcd'] = '#include <LiquidCrystal.h>\nLiquidCrystal lcd('+value_RS+','+value_RW+','+value_E+','+value_DB4+','+value_DB5+','+value_DB6+','+value_DB7+');\n';
// 	Blockly.Arduino.setups_['setup__4linelcd'] = 'lcd.begin(16,2);\n';
// 	var code = '';
//     return code;
// };

// Blockly.Arduino.em_8linelcd = function () {
// 	var value__RS = Blockly.Arduino.valueToCode(this, '_RS', Blockly.Arduino.ORDER_ATOMIC);
// 	var value__RW = Blockly.Arduino.valueToCode(this, '_RW', Blockly.Arduino.ORDER_ATOMIC);
// 	var value__E = Blockly.Arduino.valueToCode(this, '_E', Blockly.Arduino.ORDER_ATOMIC);
// 	var value__DB0 = Blockly.Arduino.valueToCode(this, '_DB0', Blockly.Arduino.ORDER_ATOMIC);
// 	var value__DB1 = Blockly.Arduino.valueToCode(this, '_DB1', Blockly.Arduino.ORDER_ATOMIC);
// 	var value__DB2 = Blockly.Arduino.valueToCode(this, '_DB2', Blockly.Arduino.ORDER_ATOMIC);
// 	var value__DB3 = Blockly.Arduino.valueToCode(this, '_DB3', Blockly.Arduino.ORDER_ATOMIC);
// 	var value__DB4 = Blockly.Arduino.valueToCode(this, '_DB4', Blockly.Arduino.ORDER_ATOMIC);
// 	var value__DB5 = Blockly.Arduino.valueToCode(this, '_DB5', Blockly.Arduino.ORDER_ATOMIC);
// 	var value__DB6 = Blockly.Arduino.valueToCode(this, '_DB6', Blockly.Arduino.ORDER_ATOMIC);
// 	var value__DB7 = Blockly.Arduino.valueToCode(this, '_DB7', Blockly.Arduino.ORDER_ATOMIC);
// 	Blockly.Arduino.definitions_['define__8linelcd'] = '#include <LiquidCrystal.h>\nLiquidCrystal lcd('+value__RS+','+value__RW+','+value__E+','+value__DB0+','+value__DB1+','+value__DB2+','+value__DB3+','+value__DB4+','+value__DB5+','+value__DB6+','+value__DB7+'); ';
// 	Blockly.Arduino.setups_['setup__8linelcd'] = 'lcd.begin(16,2);\n';
// 	var code = '';
//     return code;
// };

Blockly.Arduino.em_initrgbultrasonic = function () {
	var value_ultrasonicpin = Blockly.Arduino.valueToCode(this, 'em_ultrasonicpin', Blockly.Arduino.ORDER_ATOMIC);
	var value_rgbpin = Blockly.Arduino.valueToCode(this, 'em_rgbpin', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_initrgbultrasonic'] = '#include <RgbUltrasonic.h>\nRgbUltrasonic mRUS04('+value_ultrasonicpin+', '+value_rgbpin+');\n';
	var code = '';
    return code;
};

Blockly.Arduino.em_setcolor = function () {
    var dropdown_rgbposition = this.getFieldValue('em_rgbposition');
	var dropdown_rgbcolor = this.getFieldValue('em_rgbcolor');
    var code = '  mRUS04.SetRgbColor('+dropdown_rgbposition+', '+dropdown_rgbcolor+');\n';
	return code;
};

Blockly.Arduino.em_setcolorandstyle = function () {
    var dropdown_rgbposition = this.getFieldValue('em_rgbposition');
	var dropdown_rgbcolor = this.getFieldValue('em_rgbcolor');
	var dropdown_rgbstyle = this.getFieldValue('em_rgbstyle');
    var code = '  mRUS04.SetRgbEffect('+dropdown_rgbposition+', '+dropdown_rgbcolor+', '+dropdown_rgbstyle+');\n';
	return code;
};

Blockly.Arduino.em_setrgbbreathe = function () {
    var dropdown_rgbposition = this.getFieldValue('em_rgbposition');
    var code = '  mRUS04.SetRgbEffect('+dropdown_rgbposition+', RGB_WHITE, E_EFFECT_BREATHING);\n';
	return code;
};

Blockly.Arduino.em_readultrasonicdistance = function () {
	var code = 'mRUS04.GetUltrasonicDistance()'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['em_x8ledinit'] = function(block) {
	var dropdown_ROW_0s = this.getFieldValue('em_row_0s');
	var dropdown_ROW_1s = this.getFieldValue('em_row_1s');
	var dropdown_ROW_2s = this.getFieldValue('em_row_2s');
	var dropdown_ROW_3s = this.getFieldValue('em_row_3s');
	var dropdown_ROW_4s = this.getFieldValue('em_row_4s');
	var dropdown_ROW_5s = this.getFieldValue('em_row_5s');
	var dropdown_ROW_6s = this.getFieldValue('em_row_6s');
	var dropdown_ROW_7s = this.getFieldValue('em_row_7s');
	var dropdown_LED_A1 = this.getFieldValue('em_led_a1');
	var dropdown_LED_B1 = this.getFieldValue('em_led_b1');
	var dropdown_LED_C1 = this.getFieldValue('em_led_c1');
	var dropdown_LED_D1 = this.getFieldValue('em_led_d1');
	var dropdown_LED_E1 = this.getFieldValue('em_led_e1');
	var dropdown_LED_F1 = this.getFieldValue('em_led_f1');
	var dropdown_LED_G1 = this.getFieldValue('em_led_g1');
	var dropdown_LED_H1 = this.getFieldValue('em_led_h1');
	Blockly.Arduino.setups_['x8ledinit'] = 'm8x8Dot = new MaxMatrix_8x8(ROW_PIN, COL_PIN);\n';
	Blockly.Arduino.definitions_['include_8x8ledinit'] = '#include <MaxMatrix_8x8.h>\n';
	Blockly.Arduino.definitions_['define_8x8ledinit'] = 'MaxMatrix_8x8 *m8x8Dot;\nconst byte ROW_PIN[8] = {'+dropdown_ROW_0s+', '+dropdown_ROW_1s+', '+dropdown_ROW_2s+', '+dropdown_ROW_3s+', '+dropdown_ROW_4s+', '+dropdown_ROW_5s+', '+dropdown_ROW_6s+', '+dropdown_ROW_7s+'};\nconst byte COL_PIN[8] = {'+dropdown_LED_A1+', '+dropdown_LED_B1+', '+dropdown_LED_C1+', '+dropdown_LED_D1+', '+dropdown_LED_E1+', '+dropdown_LED_F1+', '+dropdown_LED_G1+', '+dropdown_LED_H1+'};\n';
	return  '';
}

Blockly.Arduino.em_x8leddisplay = function() {
	var maximage =  this.getFieldValue('em_maximage');
	Blockly.Arduino.setups_['x8leddisplay'] = 'm8x8Dot->writeFull(m8x8Dot->getMouthShape('+maximage+'));\n';
	return '';
};

Blockly.Arduino.em_x8ledloopscan = function() {
	return 'm8x8Dot->scan();\n';
};

//74h初始化 74hinit
Blockly.Arduino.em_74hinit = function() {
	var dropdown_BIT_CHOICE_11 =  this.getFieldValue('em_bit_choice_11');
	var dropdown_BIT_CHOICE_22 =  this.getFieldValue('em_bit_choice_22');
	var dropdown_BIT_CHOICE_33 =  this.getFieldValue('em_bit_choice_33');
	var dropdown_BIT_CHOICE_44 =  this.getFieldValue('em_bit_choice_44');
	var dropdown_STCP_PIN1 =  this.getFieldValue('em_stcp_pin1');
	var dropdown_SHCP_PIN1 =  this.getFieldValue('em_shcp_pin1');
	var dropdown_DATA_PIN1 =  this.getFieldValue('em_data_pin1');
	Blockly.Arduino.definitions_['include__74hinit'] = '#include<SegmentDisplay.h>\nSegmentDisplay _74HC595_7SegmentDisplay('+dropdown_BIT_CHOICE_11+', '+dropdown_BIT_CHOICE_22+', '+dropdown_BIT_CHOICE_33+', '+dropdown_BIT_CHOICE_44+', '+dropdown_STCP_PIN1+', '+dropdown_SHCP_PIN1+', '+dropdown_DATA_PIN1+');';
	return '';
};

//74h数码管显示 _74hinitisplay
Blockly.Arduino['em_74hinitisplay'] = function(block) {
	var value__74hinitisplays = Blockly.Arduino.valueToCode(this, 'em_74hinitisplays', Blockly.Arduino.ORDER_ATOMIC);
	return  '_74HC595_7SegmentDisplay.DisplayChar((int)'+value__74hinitisplays+'); \n';
}

//74h熄灭 _74hoff
Blockly.Arduino['em_74hoff'] = function(block) {
	return  '_74HC595_7SegmentDisplay.TurnOffAllLed();\n';
}

//钢琴模块
Blockly.Arduino.em_initPiano = function () {
	var value_clk = this.getFieldValue('em_clk');
	var value_dio = this.getFieldValue('em_dio');
	Blockly.Arduino.definitions_['define_initir'] = '#include <BS818A.h>\n';
	Blockly.Arduino.definitions_['include_ph_bs_' + value_clk + value_dio] = "BS818A BS_" + value_clk + value_dio + ";\n";
	Blockly.Arduino.setups_['setup_initPiano_' + value_clk + value_dio] = 'BS_' + value_clk + value_dio + '.InitBS818A(' + value_dio + ', ' + value_clk + ');\n';
	var dropdown_piano = this.getFieldValue('em_piano');
	var code = 'BS_' + value_clk + value_dio + '.PressBsButton(' + dropdown_piano + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//钢琴模块
Blockly.Arduino.em_initPiano_v2 = function () {
	var dropdown_piano = this.getFieldValue('em_piano');
	var value_clk = this.getFieldValue('em_clk');
	var value_dio = this.getFieldValue('em_dio');
	Blockly.Arduino.definitions_['include_emPiano'] = '#include <EM_Piano.h>\n';
	Blockly.Arduino.definitions_['include_ph_piano_' + value_clk + value_dio] = "Piano mPiano_" + value_clk + value_dio + ";\n";
	Blockly.Arduino.setups_['setup_ph_piano_' + value_clk + value_dio] = 'mPiano_'  + value_clk + value_dio + '.initPiano(' + value_clk + ', ' + value_dio + ');\n';
	var code = 'mPiano_' + value_clk + value_dio + '.PressBsButton('+dropdown_piano+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
// 
Blockly.Arduino.em_digitalInitPort = function () {
	var em_porta = this.getFieldValue('em_porta');
	var em_portb = this.getFieldValue('em_portb');
	var em_portd = this.getFieldValue('em_portd');
	Blockly.Arduino.definitions_['define_ecport'] = '#define ecPortA ' + em_porta + '\n#define ecPortB ' + em_portb + '\n#define ecPortD ' + em_portd + '\n';
	Blockly.Arduino.definitions_['define_ecvolatile'] = 'volatile int lastEncoded = 0;\nvolatile long encoderValue = 0;\nlong lastencoderValue = 0;\nint lastMSB = 0;\nint lastLSB = 0;\n\nlong readEncoderValue(void) {\n  return encoderValue / 4;\n}\n';
	Blockly.Arduino.setups_['setup_port'] = "pinMode(ecPortA, INPUT);\n  pinMode(ecPortB, INPUT);\n  pinMode(ecPortD, INPUT);\n  digitalWrite(ecPortA, HIGH);\n  digitalWrite(ecPortB, HIGH);\n";
	// var code = 'digitalRead(' + 'SWITCH_PIN' + ')' + '== LOW';
	return "";
};

//旋转编码器
Blockly.Arduino.em_digital = function () {
	Blockly.Arduino.definitions_['define_encoder_button'] = "boolean isButtonPushDown(void) {\n  if (!digitalRead(ecPortD)) {\n    delay(5);\n    if (!digitalRead(ecPortD))\n      return true;\n    }\n  return false;\n}\n";
	var code = 'isButtonPushDown()';     
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.em_print = function () {
	Blockly.Arduino.setups_['setup_attachInterrupt'] = 'attachInterrupt(0, updateEncoder, CHANGE);\n  attachInterrupt(1, updateEncoder, CHANGE);\n';
	Blockly.Arduino.definitions_['read_quadrature'] = 'void updateEncoder() {\n  int MSB = digitalRead(ecPortA);\n  int LSB = digitalRead(ecPortB);\n  int encoded = (MSB << 1) | LSB;\n  int sum  = (lastEncoded << 2) | encoded;\n  if (sum == 0b1101 || sum == 0b0100 || sum == 0b0010 || sum == 0b1011) encoderValue ++;\n  if (sum == 0b1110 || sum == 0b0111 || sum == 0b0001 || sum == 0b1000) encoderValue --;\n  lastEncoded = encoded;\n}\n';
	var oldposition = 'readEncoderValue()';
	return [oldposition, Blockly.Arduino.ORDER_ATOMIC];
};

//初始化矩阵键盘
Blockly.Arduino.em_initialize_matrix_keyboard = function () {
	var value_scl = Blockly.Arduino.valueToCode(this, 'em_scl_pin', Blockly.Arduino.ORDER_ATOMIC);
	var value_sdo = Blockly.Arduino.valueToCode(this, 'em_sdo_pin', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_matrix_keyboard'] = '#include <EM_TTP229.h>\nEM_TTP229 mTTP229;\nint SCLPin = '+value_scl+', SDOPin = '+value_sdo+';\nString Read_Key () {\n String key_name = mTTP229.GetKeyMap();\n char * result = (char *)key_name.c_str();\n return result;\n}';
	Blockly.Arduino.setups_['matrix_keyboard'] ='mTTP229.initTTP229(' + value_scl + ', ' + value_sdo + ');';
	var code = '';
    return code;
};

//矩阵键盘状态
Blockly.Arduino.em_matrix_keyboard_status = function () {
	var value_key = this.getFieldValue('em_key');
	var value_status = this.getFieldValue('em_status');
	var code = 'Read_Key()'+value_status+'="'+value_key+'"';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//获取矩阵键盘按下的值
Blockly.Arduino.em_matrix_keyboard_values = function () {
	var code = 'Read_Key()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//初始化发送
Blockly.Arduino.em_nrf24l01send = function(){
	var value_address = Blockly.Arduino.valueToCode(this,'em_address',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['md_nrf24l01'] = '#include<SPI.h>\n#include <RF24.h>\n'   
	Blockly.Arduino.setups_['Address'] = '';
	var code = 'radio.openWritingPipe('+value_address+');\n';
	return code;
};

//初始化接收
Blockly.Arduino.em_nrf24l01rec = function(){
	var value_address2 = Blockly.Arduino.valueToCode(this,'em_address2',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['md_nrf24l01'] = '#include<SPI.h>\n#include <RF24.h>\n';
	// Blockly.Arduino.setups_['begin'] ='radio.begin();\n';
	Blockly.Arduino.setups_['Address2'] = '';
	var code = 'radio.openReadingPipe(1, ' + value_address2 + ');\n';
	return code;
};

//功耗等级块
Blockly.Arduino.em_power_consumption_level = function(){
	var level = this.getFieldValue('em_version');
	Blockly.Arduino.setups_['setPALevel'] = 'radio.setPALevel(' + level + ');\n';
	return '';
}

//初始化引脚块
Blockly.Arduino.em_initialize_pins = function(){
	Blockly.Arduino.definitions_['md_nrf24l01'] = '#include<SPI.h>\n#include <RF24.h>\n'
	var ce = this.getFieldValue('em_CE');
	var cs = this.getFieldValue('em_CS');
	Blockly.Arduino.setups_['begin'] ='radio.begin();\n';
	Blockly.Arduino.definitions_['initialize'] = 'RF24 radio(' + ce + ', ' + cs + ');\n';
	return '';
}

//发送数据
Blockly.Arduino.em_nrf24l01senddatass = function(){
	var value_senddatass = Blockly.Arduino.valueToCode(this, 'em_nrfdatass', Blockly.Arduino.ORDER_ATOMIC);
	var value_genre = this.getFieldValue('em_GENRE');
	var code = 'radio.write(&'+value_senddatass+', sizeof(' + value_senddatass + ') );\n';
	return code;
};

//发送字符串数据
Blockly.Arduino.em_nrf24l01senddatass_string = function(){
	var value_senddatass_string = Blockly.Arduino.valueToCode(this,'em_nrfdatass_string',Blockly.Arduino.ORDER_ATOMIC);
	var value_genre = this.getFieldValue('em_GENRE');
	//Blockly.Arduino.definitions_['md_string'] = 'char value[];'
	var code = 'char value[] = ' + value_senddatass_string + ';\nradio.write(value, sizeof(value) );\n';
	return code;
};

//监听块
Blockly.Arduino.em_eavesdrop = function(){
	var listen = this.getFieldValue('em_EAVESDROP');
	var code = 'radio.' + listen + 'Listening();\n';
	return code;
}

//RF24是否有数据可读
Blockly.Arduino.em_nrfdataradys = function(){
	var code = 'radio.available()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//接收数据
Blockly.Arduino.em_nrfrecdatas = function(){
	var value_md_nrfdatasss = Blockly.Arduino.valueToCode(this,'em_nrfdatasss',Blockly.Arduino.ORDER_ATOMIC);
	var code = 'radio.read(&'+value_md_nrfdatasss+', sizeof('+value_md_nrfdatasss+') );\n';
	return code;
};

//接收字符串数据
Blockly.Arduino.em_nrfrecdatas_string = function(){
	Blockly.Arduino.definitions_['receiving_string'] = 'char aary[100]={0};\nString receiving(){\nradio.read(aary, sizeof(aary) );\nString data = aary;\nreturn data;\n}';
	var code = 'receiving()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//速率块
Blockly.Arduino.em_transmission_rate = function(){
	var speed = this.getFieldValue('em_Transmission_Rate');
	Blockly.Arduino.setups_['transmission_rate'] = 'radio.setDataRate('+speed+');\n';
	return '';
}

//通道速率块
Blockly.Arduino.em_channel_frequency = function(){
	var value_channel = Blockly.Arduino.valueToCode(this,'em_channel',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['channel_frequency'] = 'radio.setChannel('+value_channel+');\n';
	return '';
}

//初始化颜色传感器
Blockly.Arduino.em_colorview_init = function(){
	Blockly.Arduino.definitions_['EM_TCS34725'] = '#include <EM_TCS34725.h>\nEM_TCS34725 tcs34725;\n'
	Blockly.Arduino.setups_['tcs34725'] = 'tcs34725.begin();\n';
	return '';
}

//颜色传感器读值
Blockly.Arduino.em_colorview_value = function () {
	var Color = this.getFieldValue('em_color');
	var Gamma = this.getFieldValue('em_gamma');
	var code = 'tcs34725.' + Color + Gamma +'()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//初始化语音识别传感器
Blockly.Arduino.em_VoiceRecognition_init = function(){
	Blockly.Arduino.definitions_['VoiceRecognition'] = '#include <asr_ld3320.h>\n'
	Blockly.Arduino.setups_['VoiceRecognition_init'] = 'Wire.begin();\n';
	return '';
}

//语音识别模式设置
Blockly.Arduino.em_VoiceRecognition_Mode = function(){
	var mode = this.getFieldValue('em_mode');
	Blockly.Arduino.setups_['VoiceRecognition_Mode'] = 'uint8_t asr_mode = '+mode+';\nld3320_config_mode(asr_mode);\n';
	return '';
 }

 //语音识别设置词条和编号
Blockly.Arduino.em_VoiceRecognition_Content = function () {
	var key = Blockly.Arduino.valueToCode(this, 'em_Key', Blockly.Arduino.ORDER_ATOMIC);
	var content = Blockly.Arduino.valueToCode(this, 'em_content', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['VoiceRecognition_content'+ key] ='ld3320_add_words('+key+','+ content+');\ndelay(200);\n';
	var code = '';
    return code;
};

//语音识别开始识别
Blockly.Arduino.em_VoiceRecognition_Start = function(){
	Blockly.Arduino.setups_['VoiceRecognition_Start'] = 'ld3320_asr_start();\n';
	return '';
}

//语音识别进行复位
Blockly.Arduino.em_VoiceRecognition_Reset = function(){
	Blockly.Arduino.setups_['VoiceRecognition_Reset'] = 'ld3320_reset();\ndelay(200);\n';
	return '';
}

//语音识别获取识别到词条的对应编号
Blockly.Arduino.em_VoiceRecognition_Number = function(){
	var code = 'ld3320_get_result()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

//语音识别设置唤醒时间
Blockly.Arduino.em_VoiceRecognition_Time = function(){
	var time = Blockly.Arduino.valueToCode(this,'em_time',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['SetTime'] = 'ld3320_config_time('+time+');\n';
	return '';
 }

 var speechVal = 0;
 //语音合成播报开始
 Blockly.Arduino.em_speech_synthesisStart = function(){
	var voice = this.getFieldValue('em_voice');
	var voiceSpeed = this.getFieldValue('em_voiceSpeed');
	var content = Blockly.Arduino.valueToCode(this, 'em_content', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['VoiceRecognition'] = '#include <EM_TTS.h>\n\nTTS tts;\n';
	var code = `String res_${speechVal} = String("[v${voice}][s${voiceSpeed}]") + String(${content});\nchar cArr_${speechVal}[res_${speechVal}.length() + 1];\nres_${speechVal}.toCharArray(cArr_${speechVal}, res_${speechVal}.length() + 1);\ntts.Start(cArr_${speechVal}, strlen(cArr_${speechVal}));\n`;
	speechVal ++;
	return code;
 }

//语音合成缓存内容
var speechValCache = 0;
Blockly.Arduino.em_speech_synthesisCache = function(){
	var voice = this.getFieldValue('em_voice');
	var voiceSpeed = this.getFieldValue('em_voiceSpeed');
	var content = Blockly.Arduino.valueToCode(this, 'em_content', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['VoiceRecognition'] = '#include <EM_TTS.h>\n\nTTS tts;\n'
	var code = `String res_${speechValCache} = String("[v${voice}][s${voiceSpeed}]") + String(${content});\nchar_${speechValCache} cArr_${speechValCache}[res_${speechValCache}.length() + 1];\nres_${speechValCache}.toCharArray(cArr_${speechValCache},res_${speechValCache}.length() + 1);\ntts.TextCacheCmd(cArr_${speechValCache}, strlen(cArr_${speechValCache}));\n`;
	return code;
 }

 Blockly.Arduino.em_speech_cplay = function(){
	var freq = Blockly.Arduino.valueToCode(this, 'em_freq', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['VoiceRecognition'] = '#include <EM_TTS.h>\n\nTTS tts;\n'
	// Blockly.Arduino.setups_['SetTime'] = 'ld3320_config_time('+time+');\n';
	var code = `tts.Cplay(${freq});\n`;
	return code;
 }

//初始化MP3模块
Blockly.Arduino.em_MP3_MODE = function () {
	var tx_pin = Blockly.Arduino.valueToCode(this, 'em_tx_pin', Blockly.Arduino.ORDER_ATOMIC);
	var rx_pin = Blockly.Arduino.valueToCode(this, 'em_rx_pin', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['MP3_MODE'] = '#include <GD5800_Serial.h>\nGD5800_Serial mp345('+tx_pin+','+rx_pin+');\n';
	Blockly.Arduino.setups_['MP3_MODE'] ='mp345.begin(9600);\n';
    return '';
};

//设置设置MP3模块音量
Blockly.Arduino.em_MP3_Volume = function(){
	var Volume = Blockly.Arduino.valueToCode(this,'em_volume',Blockly.Arduino.ORDER_ATOMIC);
	// var operation = this.getFieldValue('Operation');
	var code = 'mp345.setVolume(' + Volume + ');\n';
	return code;
 }

 //设置MP3播放哪首
Blockly.Arduino.em_MP3_playIndex = function(){
	var index = Blockly.Arduino.valueToCode(this,'em_index',Blockly.Arduino.ORDER_ATOMIC);
	// var operation = this.getFieldValue('Operation');
	var code = 'mp345.playFileByIndexNumber(' + index + ');\n';
	return code;
 }
 
 // 设置MP3播放模式
 Blockly.Arduino.em_MP3_playModel = function(){
	// var Volume = Blockly.Arduino.valueToCode(this,'Volume',Blockly.Arduino.ORDER_ATOMIC);
	var model = this.getFieldValue('em_model');
	var code = 'mp345.setLoopMode(' + model + ');\n';
	return code;
 }
  // 设置MP3播放音效
 Blockly.Arduino.em_MP3_playEqualizer = function(){
	// var Volume = Blockly.Arduino.valueToCode(this,'Volume',Blockly.Arduino.ORDER_ATOMIC);
	var equalizer = this.getFieldValue('em_equalizer');
	var code = 'mp345.setLoopMode(' + equalizer + ');\n';
	return code;
 }
 //MP3模块开始播放
Blockly.Arduino.em_MP3_Play = function(){
	var control = this.getFieldValue('em_control');
	var code = 'mp345.' + control + ';\n';
	return code;
}
//OLED初始化
Blockly.Arduino.em_OLED_Init = function () {
    Blockly.Arduino.definitions_['OLED_MODE'] = '#include <EM_OLED.h>\nEM_OLED u8g2(U8G2_R0, U8X8_PIN_NONE);\n';
    Blockly.Arduino.setups_['OLED_INIT'] ='u8g2.begin();\n  u8g2.enableUTF8Print();\n';
    return '';
};

Blockly.Arduino.em_OLED_Model = function () {
    var branch = Blockly.Arduino.statementToCode(this, "DO");
    var code = `u8g2.firstPage();\ndo\n{\n${branch}\n}while(u8g2.nextPage());\n`;
    return code;
};

//OLED显示字符串
Blockly.Arduino.em_OLED_Display_String = function () {
    var horizontal = Blockly.Arduino.valueToCode(this,'em_horizontal',Blockly.Arduino.ORDER_ATOMIC);
    var longitudinal = Blockly.Arduino.valueToCode(this,'em_longitudinal',Blockly.Arduino.ORDER_ATOMIC);
    var Content = Blockly.Arduino.valueToCode(this,'em_content',Blockly.Arduino.ORDER_ATOMIC);
    var Size = this.getFieldValue('size');
    var code ='u8g2.ShowFont(' + horizontal +',' + longitudinal + ',' + Content + ');\n';
    return code;
};

// OLED_Display_String_row
Blockly.Arduino.em_OLED_Display_String_Row = function () {
  var horizontal = Blockly.Arduino.valueToCode(this,'horizontal',Blockly.Arduino.ORDER_ATOMIC);
  var row = this.getFieldValue('em_row');
  var Content = Blockly.Arduino.valueToCode(this,'content',Blockly.Arduino.ORDER_ATOMIC);
  var Size = this.getFieldValue('em_size');
  row = row * 16;
  var code ='u8g2.ShowFont(' + horizontal +',' + row + ',' + Content + ');\n';
  return code;
};

//压力传感器
Blockly.Arduino.em_pressure = function () {
	var pin = this.getFieldValue('em_pin');
	// Blockly.Arduino.definitions_['Pressure'] = 'int fsrPin = ' + pin + ';\n';
	var code = 'analogRead(' + pin + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//水蒸气传感器
Blockly.Arduino.em_water_vapor = function () {
	var pin = this.getFieldValue('em_pin');
	// Blockly.Arduino.definitions_['Water_Vapor'] = 'int WaterVaporPin = ' + pin + ';\n';
	var code = 'analogRead(' + pin + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//手柄摇杆传感器
Blockly.Arduino.em_hand_jobone_header_x= function(){
	var deacting_one_x=this.getFieldValue('em_decasx');
	var value_Speed_x = 'joystick.AnalogRead_X()';
	var value_Speed_y= 'joystick.AnalogRead_Y()';
	var code = '';
	if (deacting_one_x== 1) {
		code = value_Speed_x
	}else {
		code = value_Speed_y
	}
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//手柄键盘传感器
Blockly.Arduino.em_hand_botton_fore= function(){
	var btn_four=this.getFieldValue('em_btnfour');
	var btn_lasts=this.getFieldValue('em_btnlast');
	var buttonjoge = 'joystick.Get_Button_Status('+btn_four+')';
	var code=buttonjoge+'=='+btn_lasts;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
// 手柄初始化
Blockly.Arduino.em_hand_initalize_header=function(){
	Blockly.Arduino.definitions_['define_maker'] = '#include <JoystickHandle.h>\nJoystickHandle joystick(JOYSTICK_I2C_ADDR);\n';
	var code='';
	return code;
};

// 判断手柄按键按下/释放
Blockly.Arduino.em_hand_press_that=function(){
	var btn_pre=this.getFieldValue('em_btnfour');
	var btn_prebt='PRESS_DOWN';
	var buttpress = 'joystick.Get_Button_Status('+btn_pre+')';
	var code=buttpress+'=='+btn_prebt;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.em_hand_release_that=function(){
	var btn_rel=this.getFieldValue('em_btnfour');
	var btn_relbt='NONE_PRESS';
	var buttrelease = 'joystick.Get_Button_Status('+btn_rel+')';
	var code=buttrelease+'=='+btn_relbt;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

// 手柄左右摇杆
Blockly.Arduino.em_hand_lr_press= function(){
	var deacting_lr=this.getFieldValue('em_lrpre');
	var lr_press=this.getFieldValue('em_jobone');
	var code = '';
	if(lr_press == 1){
		code='joystick.'+deacting_lr+'nalogRead_X()'
	}else{
		code='joystick.'+deacting_lr+'nalogRead_Y()'
	}
   	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 指南针
Blockly.Arduino.em_compass_star=function() {
	var compass_xyz='int x_values, y_values, z_values, azimuth_values;\nint readCompass(){\n  int x, y, z;\n  int azimuth;\n  qmc.read(&x, &y, &z, &azimuth);\n  x_values = x;\n  y_values = y;\n  z_values = z;\n  azimuth_values = azimuth;\n}\n';
	Blockly.Arduino.setups_['setup_compass_star'] ='Wire.begin();\n  qmc.init();\n';
	Blockly.Arduino.definitions_['define_compass'] = '#include  <MechaQMC5883.h>\nMechaQMC5883 qmc;\n' + compass_xyz;
    var code='';
	return code;
}


Blockly.Arduino.em_compass_getValue=function() {
    var code='readCompass();\n';
	return code;
}

Blockly.Arduino.em_compass_vue=function() {
	var compass_v=this.getFieldValue('em_capa');
    var code=compass_v+"_values";
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

// em_five_infrared_tracking
Blockly.Arduino.em_fiveInfraredTracking=function() {
	Blockly.Arduino.definitions_['define_fiveInfraredTracking'] = '#include <EM_InfraredTracking.h>\nInfraredTracking 5line_track(INFRARED_I2C_ADDR);\n';
	var em_infrared = this.getFieldValue('em_infrared');
    // var code=compass_v+"_values";
	var code = "";
	if(em_infrared == 0) {
		code = "5line_track.GetState() & 0x01";
	} else if(em_infrared == 1) {
		code = "5line_track.GetState() & 0x02";
	} else if(em_infrared == 2) {
		code = "5line_track.GetState() & 0x04";
	} else if(em_infrared == 3) {
		code = "5line_track.GetState() & 0x08";
	} else if(em_infrared == 4) {
		code = "5line_track.GetState() & 0x10";
	}
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

// 陀螺仪
Blockly.Arduino.em_gyro_init=function(){
	Blockly.Arduino.definitions_['define_gyro'] = '#include <Mpu6050Module.h>\nMpu6050Module mpu6050;\n';
	Blockly.Arduino.setups_['setup_gyro'] = 'mpu6050.InitMpu6050();\n';
	var code='mpu6050.GetInclination();\n';
	return code;
}

Blockly.Arduino.em_gyro_getvalue=function(){
	var gyros = this.getFieldValue('em_gyrov');
	var code='mpu6050.'+gyros;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

//手势传感器
Blockly.Arduino.em_handleStatus_init=function(){
	Blockly.Arduino.definitions_['define_handleStatus_init'] = '#include <SparkFun_APDS9960.h>\nSparkFun_APDS9960 apds = SparkFun_APDS9960();\nint gestureStatus;\n';
	Blockly.Arduino.setups_['setup_gyro'] = 'apds.init();\napds.enableGestureSensor(true);\n';
	return '';
}

//手势传感器
Blockly.Arduino.em_handleSensor_getValue=function(){
	var code = 'gestureStatus = apds.readGesture();\n';
	return code;
}

//手势传感器
Blockly.Arduino.em_handleSensor_isGetValue=function(){
	var code = 'gestureStatus = apds.readGesture()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

//手势传感器
Blockly.Arduino.handleSensor_getStatus=function(){
	var MODE = this.getFieldValue('em_MODE');
	var code = 'gestureStatus == ' + MODE;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

//rgb环灯
Blockly.Arduino.em_rgbLamp_init=function(){
	var lam = Blockly.Arduino.valueToCode(this,'em_rgb_init',Blockly.Arduino.RGBLAMP_ONES);
	Blockly.Arduino.definitions_['define_rgblamp'] = '#include <RGBLed.h>\n#define RgbPin '+lam+'\n';
	Blockly.Arduino.definitions_['define_rgblnum'] = 'RGBLed mRgb(RgbPin, 12);\n';
	var code ='';
	return code;
}

Blockly.Arduino.em_rgbLamp_Bright=function(){
	var brg = Blockly.Arduino.valueToCode(this,'rgb_briga',Blockly.Arduino.RGBLAMP_BRIG);
	Blockly.Arduino.definitions_['define_rgblnum'] = 'RGBLed mRgb(RgbPin, 12);\n';
	var code ='mRgb.setBrightness('+brg+');\n';
	return code;
}
Blockly.Arduino.em_rgbLamp_num=function(){
	var rnuma = Blockly.Arduino.valueToCode(this,'em_rgb_numa',Blockly.Arduino.RGBNUMA);
	var rnumb = Blockly.Arduino.valueToCode(this,'em_rgb_numb',Blockly.Arduino.RGBNUMB);
	var rnumc = Blockly.Arduino.valueToCode(this,'em_rgb_numc',Blockly.Arduino.RGBNUMC);
	var rnumd = Blockly.Arduino.valueToCode(this,'em_rgb_numd',Blockly.Arduino.RGBNUMD);
	var rnume = Blockly.Arduino.valueToCode(this,'em_rgb_nume',Blockly.Arduino.RGBNUME);
	var rnumf = Blockly.Arduino.valueToCode(this,'em_rgb_numf',Blockly.Arduino.RGBNUMF);
	var rnumg = Blockly.Arduino.valueToCode(this,'em_rgb_numg',Blockly.Arduino.RGBNUMG);
	Blockly.Arduino.definitions_['define_rgblnum'] = 'RGBLed mRgb(RgbPin, '+rnuma+');\nint delayval = '+rnumd+';\n';
	var code ='for(int rgbdh = ' + rnumb + ' - 1; rgbdh < ' + rnumc + '; rgbdh++){\nmRgb.setColorAt(rgbdh, '+rnume+', '+rnumf+', '+rnumg+');\nmRgb.show();\ndelay(delayval);\n}';
	return code;
}

//mqtt init
Blockly.Arduino.em_esp8266_init=function(){
	var tx = this.getFieldValue('em_iotTx');
	var rx = this.getFieldValue('em_iotRX');
	Blockly.Arduino.definitions_['define_esp8266'] = '#include <WiFiEsp.h>\n#include <SoftwareSerial.h>\n';
	Blockly.Arduino.definitions_['define_esp8266' + tx + rx] = 'SoftwareSerial esp8266_serial(' + tx + ', ' + rx + ');\n';
	return '';
}

//mqtt wifi
Blockly.Arduino.em_esp8266_wifi=function(){
	var ssid = Blockly.Arduino.valueToCode(this,'em_wifiSsid',Blockly.Arduino.ORDER_ATOMIC);
	var pwd = Blockly.Arduino.valueToCode(this,'em_wifiPwd',Blockly.Arduino.ORDER_ATOMIC);
	var host = Blockly.Arduino.valueToCode(this,'em_host',Blockly.Arduino.ORDER_ATOMIC);
	var port = Blockly.Arduino.valueToCode(this,'em_port',Blockly.Arduino.ORDER_ATOMIC);
	var productKey = Blockly.Arduino.valueToCode(this,'em_productKey',Blockly.Arduino.ORDER_ATOMIC);
	var deviceName = Blockly.Arduino.valueToCode(this,'em_deviceName',Blockly.Arduino.ORDER_ATOMIC);
	var deviceSecret = Blockly.Arduino.valueToCode(this,'em_deviceSecret',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_WifiEspMqtt'] = '#include <WiFiEspMqtt.h>\n';
	Blockly.Arduino.definitions_['define_WifiEspMqttObj'] = 'WiFiEspMqtt esp8266;\n';
	Blockly.Arduino.definitions_['define_esp8266Wifi'] = 'char ssid[] = ' + ssid + ';\nchar passwd[] = ' + pwd + ';\n';
	Blockly.Arduino.definitions_['define_esp8266Host'] = 'char aliyun_mqtt_host[] = ' + host + ';\nuint16_t aliyun_mqtt_port = ' + port + ";\n";
	Blockly.Arduino.definitions_['define_esp8266Param'] = 'char product_key[] = ' + productKey + ';\nchar device_name[] = ' + deviceName + ";\nchar device_secret[] = " + deviceSecret + ";\n";
	Blockly.Arduino.setups_['setup_esp8266Setup'] = 'esp8266_serial.begin(9600);\n  WiFi.init(&esp8266_serial);\n  WiFi.begin(ssid, passwd);\nesp8266.mqtt_connect_aliyun(aliyun_mqtt_host, aliyun_mqtt_port, product_key, device_name, device_secret, 0);\n';	
	return '';
}

//mqtt host
Blockly.Arduino.em_esp8266_host=function(){
	var host = Blockly.Arduino.valueToCode(this,'em_host',Blockly.Arduino.ORDER_ATOMIC);
	var port = Blockly.Arduino.valueToCode(this,'em_port',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_esp8266Host'] = 'char aliyun_mqtt_host[] = ' + host + ';\nuint16_t aliyun_mqtt_port = ' + port + ";\n";
	return '';
}

//mqtt param
Blockly.Arduino.em_esp8266_setParam=function(){
	var productKey = Blockly.Arduino.valueToCode(this,'em_productKey',Blockly.Arduino.ORDER_ATOMIC);
	var deviceName = Blockly.Arduino.valueToCode(this,'em_deviceName',Blockly.Arduino.ORDER_ATOMIC);
	var deviceSecret = Blockly.Arduino.valueToCode(this,'em_deviceSecret',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_esp8266Param'] = 'char product_key[] =' + productKey + ';\nchar device_name[] = ' + deviceName + ";\nchar device_secret[] = " + deviceSecret + ";\n";
	Blockly.Arduino.setups_['setup_esp8266Setup'] = 'Serial.begin(115200);\n  esp8266_serial.begin(9600);\n  WiFi.init(&esp8266_serial);\n    WiFi.begin(ssid, passwd);\nesp8266.mqtt_connect_aliyun(aliyun_mqtt_host, aliyun_mqtt_port, product_key, device_name, device_secret, 0);\n';	
	return '';
}

//esp8266_connection
Blockly.Arduino.em_esp8266_connection=function(){
	var code = 'WiFi.begin(ssid, passwd);\n';
	return code;
}

//mqtt isConnection
Blockly.Arduino.em_esp8266_isConnection=function(){
	var code = 'WiFi.status() == WL_CONNECTED';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

//mqtt sub
Blockly.Arduino.em_esp8266_sub=function(){
	var subStr = Blockly.Arduino.valueToCode(this,'em_subStr',Blockly.Arduino.ORDER_ATOMIC); 
	var qos = this.getFieldValue('em_qos');
	return 'esp8266.mqtt_sub(' + subStr + ', ' + qos + ');\n';
}

//mqtt pub
Blockly.Arduino.em_esp8266_pub=function(){
	var pubStr = Blockly.Arduino.valueToCode(this,'em_pubStr',Blockly.Arduino.ORDER_ATOMIC); 
	var data = Blockly.Arduino.valueToCode(this,'em_data',Blockly.Arduino.ORDER_ATOMIC); 
	var qos = this.getFieldValue('em_qos');
	return 'esp8266.mqtt_public(' + pubStr + ', ' + data + ', ' + qos + ');\n';
}

//mqtt isConnection
Blockly.Arduino.em_esp8266_isReceive=function(){
	var code = 'esp8266.mqtt_receive()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

//mqtt pub
Blockly.Arduino.em_esp8266_getSubMsg = function(){
	var msgType = this.getFieldValue('em_msgType');
	var result = msgType == 1?"esp8266.mqtt_topic":"esp8266.mqtt_message";
	return [result, Blockly.Arduino.ORDER_ATOMIC];
}

//mqtt other host
Blockly.Arduino.em_esp8266_otherHost = function(){
	var ssid = Blockly.Arduino.valueToCode(this,'em_wifiSsid',Blockly.Arduino.ORDER_ATOMIC);
	var pwd = Blockly.Arduino.valueToCode(this,'em_wifiPwd',Blockly.Arduino.ORDER_ATOMIC);
	var host = Blockly.Arduino.valueToCode(this,'em_host',Blockly.Arduino.ORDER_ATOMIC);
	var port = Blockly.Arduino.valueToCode(this,'em_port',Blockly.Arduino.ORDER_ATOMIC);
	var userClientId = Blockly.Arduino.valueToCode(this, 'em_userClientId', Blockly.Arduino.ORDER_ATOMIC);
	var username = Blockly.Arduino.valueToCode(this, 'em_username', Blockly.Arduino.ORDER_ATOMIC);
	var password1 = Blockly.Arduino.valueToCode(this, 'em_password', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_WifiEspMqtt'] = '#include <WifiEspMqtt.h>\n';
	Blockly.Arduino.definitions_['define_WifiEspMqttObj'] = 'WiFiEspMqtt esp8266;\n';
	Blockly.Arduino.definitions_['define_esp8266Wifi'] = 'char ssid[] = ' + ssid + ';\nchar passwd[] = ' + pwd + ';\n';
	Blockly.Arduino.definitions_['define_esp8266OtherHost'] = 'char mqtt_host[] = ' + host + ';\nuint16_t mqtt_port = ' + port + ";\n";
	Blockly.Arduino.definitions_['define_esp8266UserConfig'] = 'char mqtt_client_id[] = ' + userClientId + ';\nchar mqtt_username[] = ' + username + ";\nchar mqtt_password[] = " + password1 + ";\n";
	Blockly.Arduino.setups_['setup_esp8266Setup'] = 'esp8266_serial.begin(9600);\n  WiFi.init(&esp8266_serial);\n  WiFi.begin(ssid, passwd);\n';	
	Blockly.Arduino.setups_['setup_esp8266UserConfig'] = 'esp8266.mqtt_usercfg(mqtt_client_id, mqtt_username, mqtt_password);\n  esp8266.mqtt_connect(mqtt_host, mqtt_port, 0);\n';	
	return '';
}

//mqtt other host user config
Blockly.Arduino.em_esp8266_userConfigParam = function(){
	var userClientId = Blockly.Arduino.valueToCode(this, 'em_userClientId', Blockly.Arduino.ORDER_ATOMIC);
	var username = Blockly.Arduino.valueToCode(this, 'em_username', Blockly.Arduino.ORDER_ATOMIC);
	var password1 = Blockly.Arduino.valueToCode(this, 'em_password', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_esp8266UserConfig'] = 'char mqtt_client_id[] = ' + userClientId + ';\nchar mqtt_username[] = ' + username + ";\nchar mqtt_password[] = " + password1 + ";\n";
	Blockly.Arduino.setups_['setup_esp8266UserConfig'] = 'esp8266.mqtt_usercfg(mqtt_client_id, mqtt_username, mqtt_password);\n';	
	return '';
}

var httpHost = "";
var httpPort = 0;
//http host
Blockly.Arduino.em_esp8266_httpHost = function(){
	var ssid = Blockly.Arduino.valueToCode(this,'em_wifiSsid',Blockly.Arduino.ORDER_ATOMIC);
	var pwd = Blockly.Arduino.valueToCode(this,'em_wifiPwd',Blockly.Arduino.ORDER_ATOMIC);
	var host = Blockly.Arduino.valueToCode(this,'em_httpHost',Blockly.Arduino.ORDER_ATOMIC);
	var port = Blockly.Arduino.valueToCode(this,'em_httpPort',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_WifiEspMqtt'] = '#include <WiFiEspClient.h>\n';
	Blockly.Arduino.definitions_['define_WifiEspMqttObj'] = 'WiFiEspClient httpClient;\n';
	Blockly.Arduino.definitions_['define_esp8266Wifi'] = 'char ssid[] = ' + ssid + ';\nchar passwd[] = ' + pwd + ';\n';
	Blockly.Arduino.definitions_['define_esp8266HttpHost'] = 'char http_host[] = ' + host + ';\nuint16_t http_port = ' + port + ";\n";
	httpHost = host.substring(1, host.length - 1);;
	httpPort = port;
	Blockly.Arduino.setups_['setup_esp8266Setup'] = 'esp8266_serial.begin(9600);\r\n  WiFi.init(&esp8266_serial);\r\n';	
	return '';
}

//esp8266_connectHttpServer
Blockly.Arduino.em_esp8266_connectHttpServer=function(){
	var code = 'httpClient.connect(http_host, http_port)';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

//esp8266_get
Blockly.Arduino.esp8266_get=function(){
	var getStr = Blockly.Arduino.valueToCode(this,'getStr',Blockly.Arduino.ORDER_ATOMIC);
	var timeout = Blockly.Arduino.valueToCode(this,'timeout',Blockly.Arduino.ORDER_ATOMIC);
	var code = 'httpClient.readData(String(' + getStr + ').c_str(), &esp8266_serial, ' + timeout + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}