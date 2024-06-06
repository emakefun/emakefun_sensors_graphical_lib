(() => {

	'use strict';

	goog.provide('Blockly.Arduino.EmakefunSensor');

	goog.require('Blockly.Arduino');

Blockly.Arduino.forBlock["nulllab_servo"] = function () {
	var value_servopin = Blockly.Arduino.valueToCode(this, 'nulllab_servopin', Blockly.Arduino.ORDER_ATOMIC);
	var value_servoangle = Blockly.Arduino.valueToCode(this, 'nulllab_servoangle', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['setup_servo'] = 'pinMode('+value_servopin+', OUTPUT);';
	Blockly.Arduino.definitions_['define_servo1'] = 'void SetServoDegree(int Angle){\n  for (int i = 0; i < 80; i++) {\n    float pulsewidth = (Angle * 11) + 350;\n    digitalWrite('+value_servopin+', HIGH);\n   delayMicroseconds(pulsewidth);\n    digitalWrite('+value_servopin+', LOW);\n   delayMicroseconds(20000 - pulsewidth);\n}}';
	var code = 'SetServoDegree(' + value_servoangle + ');\n'
    //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';

    return code;
};

	Blockly.Arduino.forBlock["nulllab_7ledinit"] = function () {
    var value_pin1 = Blockly.Arduino.valueToCode(this, 'nulllab_pin1', Blockly.Arduino.ORDER_ATOMIC);
	var value_pin2 = Blockly.Arduino.valueToCode(this, 'nulllab_pin2', Blockly.Arduino.ORDER_ATOMIC);
	var value_pin3 = Blockly.Arduino.valueToCode(this, 'nulllab_pin3', Blockly.Arduino.ORDER_ATOMIC);
	var value_pin4 = Blockly.Arduino.valueToCode(this, 'nulllab_pin4', Blockly.Arduino.ORDER_ATOMIC);
	var value_pin5 = Blockly.Arduino.valueToCode(this, 'nulllab_pin5', Blockly.Arduino.ORDER_ATOMIC);
	var value_pin6 = Blockly.Arduino.valueToCode(this, 'nulllab_pin6', Blockly.Arduino.ORDER_ATOMIC);
	var value_pin7 = Blockly.Arduino.valueToCode(this, 'nulllab_pin7', Blockly.Arduino.ORDER_ATOMIC);
	var value_pin8 = Blockly.Arduino.valueToCode(this, 'nulllab_pin8', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_7led1'] = '#include<SegmentDisplay.h>';
	Blockly.Arduino.definitions_['define_7led'] = 'SegmentDisplay _7SegmentDisplay('+value_pin1+', '+value_pin2+', '+value_pin3+', '+value_pin4+', '+value_pin5+', '+value_pin6+', '+value_pin7+', '+value_pin8+');'
//Blockly.Arduino.setups_['setup_7led'] ='\t'+'int i;\n'+'Serial.begin(115200);\n'+'DisplayOff();\n'+'for( i = 0 ; i < 8 ; i++ ){'+'pinMode( LED_PIN[i] ,OUTPUT );}\n'
    //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = '';
    return code;
};

Blockly.Arduino.forBlock["nulllab_7leddisplaynum"] = function () {
	var value_displaynum = Blockly.Arduino.valueToCode(this, 'nulllab_displaynum', Blockly.Arduino.ORDER_ATOMIC);
	var code = '_7SegmentDisplay.DisplayChar((byte)'+value_displaynum+');\n'
    //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    return code;
};

Blockly.Arduino.forBlock["nulllab_47ledinit"] = function () {
    var value_Pin1 = Blockly.Arduino.valueToCode(this, 'nulllab_pin1', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin2 = Blockly.Arduino.valueToCode(this, 'nulllab_pin2', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin3 = Blockly.Arduino.valueToCode(this, 'nulllab_pin3', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin4 = Blockly.Arduino.valueToCode(this, 'nulllab_pin4', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin5 = Blockly.Arduino.valueToCode(this, 'nulllab_pin5', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin6 = Blockly.Arduino.valueToCode(this, 'nulllab_pin6', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin7 = Blockly.Arduino.valueToCode(this, 'nulllab_pin7', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin8 = Blockly.Arduino.valueToCode(this, 'nulllab_pin8', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin9 = Blockly.Arduino.valueToCode(this, 'nulllab_pin9', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin10 = Blockly.Arduino.valueToCode(this, 'nulllab_pin10', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin11 = Blockly.Arduino.valueToCode(this, 'nulllab_pin11', Blockly.Arduino.ORDER_ATOMIC);
	var value_Pin12 = Blockly.Arduino.valueToCode(this, 'nulllab_pin12', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_comport'] = '#include<SegmentDisplay.h>';
	Blockly.Arduino.definitions_['define_47led'] = 'SegmentDisplay _4Bit_7SegmentDisplay('+value_Pin1+', '+value_Pin2+', '+value_Pin3+', '+value_Pin4+', '+value_Pin5+', '+value_Pin6+', '+value_Pin7+', '+value_Pin8+', '+value_Pin9+', '+value_Pin10+', '+value_Pin11+', '+value_Pin12+');';
	Blockly.Arduino.setups_['setup_input_47led'] = '_4Bit_7SegmentDisplay.TurnOffAllLed();';
    var code = '';
    return code;
};

Blockly.Arduino.forBlock["nulllab_7ledcountnum"] = function () {
	var value_count = Blockly.Arduino.valueToCode(this, 'nulllab_count', Blockly.Arduino.ORDER_ATOMIC);
	//Blockly.Arduino.definitions_['define_count'] = 'char disp[4] = { 0 , 0 , 0 , 0 } ;\nint display_dat = '+value_count+', count = 0 ;\n'+'char LED_Display_Value[][3]  ={    { \'0\', 0x3F , 0xC0 } ,\n{ \'1\', 0x06 , 0xF9 } ,\n{ \'2\', 0x5B , 0xA4 } ,\n{ \'3\', 0x4F , 0xB0 } ,\n{ \'4\', 0x66 , 0x99 } ,\n{ \'5\', 0x6D , 0x92 } ,\n{ \'6\', 0x7D , 0x82 } ,\n{ \'7\', 0x07 , 0xF8 } ,\n{ \'8\', 0x7F , 0x80 } ,\n{ \'9\', 0x6F , 0x90 } ,\n{  0 , 0x00 , 0xFF }\n};\n'+'void  DisplayOff(void){\nint i ;\nfor( i = 0 ; i < 8 ; i++)\ndigitalWrite(LED_PIN[i],LOW);\nfor( i = 0 ; i < 4 ; i++)\ndigitalWrite(LED_SELECT[i],HIGH);\n}\nchar  GetDisplayValue(char Array[][3] ,\n char DisplayChar ){int i = 0 ;\nfor( i = 0 ; i < 10 ; i++){if( Array[i][0] == DisplayChar )\n            return Array[i][COM_PORT] ;\n       }\n    return 0 ;\n}void LED_Display ( char ch){\nint i ;\nfor( i = 0 ; i < 8 ; i++){\nif(  ch & ( 1 << i ) ){\ndigitalWrite(LED_PIN[i] ,HIGH);\n}else{\ndigitalWrite(LED_PIN[i],LOW);\n}\n}\n}\nvoid numble2dis( int numble ){\nint numble_bit = 0 ;int bit_base = 1000 ;\nfor( numble_bit = 0 ; numble_bit < 4 ; numble_bit++ ){\nif( numble/bit_base != 0){\ndisp[numble_bit] = numble/bit_base + \'0\';\nnumble = numble % bit_base ;\n}else{\ndisp[numble_bit] = \'0\';\n}\nbit_base = bit_base / 10 ;\n}}';
	//Blockly.Arduino.setups_['setup_47count'] ='\t'+'int i;\nfor( i = 0 ; i < 8 ; i++ )\npinMode( LED_PIN[i] ,OUTPUT ) ;\nfor( i = 0 ; i < 4 ; i++ )\npinMode( LED_SELECT[i] ,OUTPUT ) ;\nDisplayOff();\n';
	var code = '_4Bit_7SegmentDisplay.DisplayChar('+value_count+');\n';
	 //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    return code;
};

Blockly.Arduino.forBlock["nulllab_7ledcountnumoff"] = function () {
    // var value_count = Blockly.Arduino.valueToCode(this, 'count', Blockly.Arduino.ORDER_ATOMIC);
	//Blockly.Arduino.definitions_['define_count'] = 'char disp[4] = { 0 , 0 , 0 , 0 } ;\nint display_dat = '+value_count+', count = 0 ;\n'+'char LED_Display_Value[][3]  ={    { \'0\', 0x3F , 0xC0 } ,\n{ \'1\', 0x06 , 0xF9 } ,\n{ \'2\', 0x5B , 0xA4 } ,\n{ \'3\', 0x4F , 0xB0 } ,\n{ \'4\', 0x66 , 0x99 } ,\n{ \'5\', 0x6D , 0x92 } ,\n{ \'6\', 0x7D , 0x82 } ,\n{ \'7\', 0x07 , 0xF8 } ,\n{ \'8\', 0x7F , 0x80 } ,\n{ \'9\', 0x6F , 0x90 } ,\n{  0 , 0x00 , 0xFF }\n};\n'+'void  DisplayOff(void){\nint i ;\nfor( i = 0 ; i < 8 ; i++)\ndigitalWrite(LED_PIN[i],LOW);\nfor( i = 0 ; i < 4 ; i++)\ndigitalWrite(LED_SELECT[i],HIGH);\n}\nchar  GetDisplayValue(char Array[][3] ,\n char DisplayChar ){int i = 0 ;\nfor( i = 0 ; i < 10 ; i++){if( Array[i][0] == DisplayChar )\n            return Array[i][COM_PORT] ;\n       }\n    return 0 ;\n}void LED_Display ( char ch){\nint i ;\nfor( i = 0 ; i < 8 ; i++){\nif(  ch & ( 1 << i ) ){\ndigitalWrite(LED_PIN[i] ,HIGH);\n}else{\ndigitalWrite(LED_PIN[i],LOW);\n}\n}\n}\nvoid numble2dis( int numble ){\nint numble_bit = 0 ;int bit_base = 1000 ;\nfor( numble_bit = 0 ; numble_bit < 4 ; numble_bit++ ){\nif( numble/bit_base != 0){\ndisp[numble_bit] = numble/bit_base + \'0\';\nnumble = numble % bit_base ;\n}else{\ndisp[numble_bit] = \'0\';\n}\nbit_base = bit_base / 10 ;\n}}';
	//Blockly.Arduino.setups_['setup_47count'] ='\t'+'int i;\nfor( i = 0 ; i < 8 ; i++ )\npinMode( LED_PIN[i] ,OUTPUT ) ;\nfor( i = 0 ; i < 4 ; i++ )\npinMode( LED_SELECT[i] ,OUTPUT ) ;\nDisplayOff();\n';
	 var code = '_4Bit_7SegmentDisplay.TurnOffAllLed();';
	 //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';

    return code;
};

Blockly.Arduino.forBlock["nulllab_ultrasonicread"] = function () {
    var value_trigpin = Blockly.Arduino.valueToCode(this, 'nulllab_trigpin', Blockly.Arduino.ORDER_ATOMIC);
	var value_echopin = Blockly.Arduino.valueToCode(this, 'nulllab_echopin', Blockly.Arduino.ORDER_ATOMIC);
	// var value_servos = Blockly.Arduino.valueToCode(this, 'servos', Blockly.Arduino.ORDER_ATOMIC);
	// Blockly.Arduino.definitions_['define_radar'] = '#include <Servo.h>';
	 Blockly.Arduino.definitions_['define_ultrasonicread'] = 'float checkdistance() {\n  digitalWrite('+value_trigpin+', LOW);\n  delayMicroseconds(2);\n  digitalWrite('+value_trigpin+', HIGH);\n  delayMicroseconds(10);\n  digitalWrite('+value_trigpin+', LOW);\n  float distance = pulseIn('+value_echopin+', HIGH) / 58.00;\n  return distance;\n}\n';
	 Blockly.Arduino.setups_['setup_ultrasonicread'] ='pinMode('+value_trigpin+', OUTPUT);\n  pinMode('+value_echopin+', INPUT);\n'
    //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = 'checkdistance()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock["nulllab_dianzhen"] = function () {
	var nulllab_maxMaxtrix = this.getFieldValue('nulllab_maxMaxtrix');
	var value_clk = this.getFieldValue('nulllab_clk');
	var value_cs = this.getFieldValue('nulllab_cs');
	var value_din = this.getFieldValue('nulllab_din');
	var value_count = Blockly.Arduino.valueToCode(this, 'nulllab_count', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_dianzhen'] = '#include <MAX7219_MaxMatrix.h>\n';
	 Blockly.Arduino.definitions_['define_dianzhen1'] = 'MaxMatrix ' + nulllab_maxMaxtrix + '(' + value_din + ', ' + value_cs + ', ' + value_clk + ', ' + value_count + ');\n';
	 Blockly.Arduino.setups_['setup_dianzhen'] =nulllab_maxMaxtrix + '.init();\n  ' + nulllab_maxMaxtrix + '.setIntensity(1);\n  ' + nulllab_maxMaxtrix + '.clearMatrix();\n';
	 //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = '';
	return code;
};

Blockly.Arduino.forBlock["nulllab_dianzhenprint"] = function () {
	var nulllab_maxMaxtrix = this.getFieldValue('nulllab_maxMaxtrix');
	var dropdown_maximage = this.getFieldValue('nulllab_maximage');
	//var value_cs = Blockly.Arduino.valueToCode(this, 'cs', Blockly.Arduino.ORDER_ATOMIC);
	//var value_din = Blockly.Arduino.valueToCode(this, 'din', Blockly.Arduino.ORDER_ATOMIC);
	//Blockly.Arduino.definitions_['define_dianzhen'] = '#include "LedControl.h"';
	 //Blockly.Arduino.definitions_['define_dianzhen1'] = 'int CLK = '+value_clk+';\nint CS =  '+value_cs+';\nint DIN = '+value_din+';\n'+'LedControl lc=LedControl(DIN,CLK,CS,0);\n'+'void printByte(byte character []){\nint i = 0;\nfor(i=0;i<8;i++){\nlc.setRow(0,i,character[i]);\n}}\n';
	 //Blockly.Arduino.setups_['setup_dianzhen'] ='\t'+'lc.shutdown(0,false);\nlc.setIntensity(0,15);\nlc.clearDisplay(0);\n';
	 //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = nulllab_maxMaxtrix + '.writeFull(' + nulllab_maxMaxtrix + '.getMouthShape('+dropdown_maximage+'));\n';
	return code;
};

Blockly.Arduino.forBlock["nulllab_getbluetooth"] = function () {
	var code = 'Serial.available() > 0'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock["nulllab_getbluetoothdata"] = function () {
	var code = 'char(Serial.read())'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock["nulllab_initir"] = function () {
	var value_initir = Blockly.Arduino.valueToCode(this, 'nulllab_initir', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_initir'] = '#include <IR_remote.h>\n#include <keymap.h>\n'+'IRremote ir('+value_initir+');\n';
	Blockly.Arduino.setups_['setup_initir'] = 'ir.begin();\n';
	var code = '';
    return code;
};

Blockly.Arduino.forBlock["nulllab_irKeyPress"] = function(){
	var dropdown_Irkey = this.getFieldValue('nulllab_irkey');
	var code = 'ir.getIrKey(ir.getCode(),1) == '+dropdown_Irkey+'';
	return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};

Blockly.Arduino.forBlock["nulllab_irKeyPress2"] = function(){
	var dropdown_Irkey2 = this.getFieldValue('nulllab_irkey2');
	var code = 'ir.getIrKey(ir.getCode(),2) == '+dropdown_Irkey2+'';
	return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};

Blockly.Arduino.forBlock["nulllab_irKeyPress3"] = function(){
	var code = 'ir.getCode()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock["nulllab_ds3231setdate"] = function () {
    var value_year = Blockly.Arduino.valueToCode(this, 'nulllab_year', Blockly.Arduino.ORDER_ATOMIC);
	var value_month = Blockly.Arduino.valueToCode(this, 'nulllab_month', Blockly.Arduino.ORDER_ATOMIC);
	var value_day = Blockly.Arduino.valueToCode(this, 'nulllab_day', Blockly.Arduino.ORDER_ATOMIC);
	var value_week = Blockly.Arduino.valueToCode(this, 'nulllab_week', Blockly.Arduino.ORDER_ATOMIC);
	var value_hour = Blockly.Arduino.valueToCode(this, 'nulllab_hour', Blockly.Arduino.ORDER_ATOMIC);
	var value_minute = Blockly.Arduino.valueToCode(this, 'nulllab_minute', Blockly.Arduino.ORDER_ATOMIC);
	var value_sencond = Blockly.Arduino.valueToCode(this, 'nulllab_sencond', Blockly.Arduino.ORDER_ATOMIC);
Blockly.Arduino.setups_['setup_ds3231setdate'] = 'Wire.begin();\n'+'Clock.setSecond('+value_sencond+');\n'+'Clock.setMinute('+value_minute+');\n'+'Clock.setHour('+value_hour+');\n'+'Clock.setDoW('+value_week+');\n'+'Clock.setDate('+value_day+');\n'+'Clock.setMonth('+value_month+');\n'+'Clock.setYear('+value_year+');\n';
	Blockly.Arduino.definitions_['define_ds3231setdate'] = '#include <DS3231.h>\n#include <LCD.h>\n'+'DS3231 Clock;\n'+'bool Century=false;\n'+'bool h12;\n'+'bool PM;\n'+'char lcd_dis_str[2][16];\n';
	 //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = '';
    return code;
};

Blockly.Arduino.forBlock["nulllab_ds3231gettime"] = function () {
	Blockly.Arduino.definitions_['define_ds3231gettime'] = 'void ReadDS3231()\n{\n    int second,minute,hour,date,month,year,temperature;\n    second=Clock.getSecond();\n    minute=Clock.getMinute();\n    hour=Clock.getHour(h12, PM);\n    date=Clock.getDate();\n    month=Clock.getMonth(Century);\n    year=Clock.getYear();\n  temperature=Clock.getTemperature();\n  sprintf(lcd_dis_str[0],\"  20%02d-%02d-%02d\",year,month,date);\n  sprintf(lcd_dis_str[1],\"   %02d:%02d:%02d  %2d\'\",hour,minute,second,temperature);\n}\n';
	//Blockly.Arduino.setups_['setup_I2CLED'] = 'lcd.begin (16,2);\n'+'lcd.setBacklightPin(3,POSITIVE);\n'+'lcd.setBacklight(HIGH);\n';
	var code = 'ReadDS3231();\n';
    return code;
};

Blockly.Arduino.forBlock["nulllab_ds3231readyear"] = function () {
       var code = 'lcd_dis_str[0]'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock["nulllab_ds3231readhour"] = function () {
	var code = 'lcd_dis_str[1]';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock["nulllab_keypad"] = function () {
    var value_row_1 = Blockly.Arduino.valueToCode(this, 'nulllab_row_1', Blockly.Arduino.ORDER_ATOMIC);
	var value_row_2 = Blockly.Arduino.valueToCode(this, 'nulllab_row_2', Blockly.Arduino.ORDER_ATOMIC);
	var value_row_3 = Blockly.Arduino.valueToCode(this, 'nulllab_row_3', Blockly.Arduino.ORDER_ATOMIC);
	var value_row_4 = Blockly.Arduino.valueToCode(this, 'nulllab_row_4', Blockly.Arduino.ORDER_ATOMIC);
	var value_COL_1 = Blockly.Arduino.valueToCode(this, 'nulllab_col_1', Blockly.Arduino.ORDER_ATOMIC);
	var value_COL_2 = Blockly.Arduino.valueToCode(this, 'nulllab_col_2', Blockly.Arduino.ORDER_ATOMIC);
	var value_COL_3 = Blockly.Arduino.valueToCode(this, 'nulllab_col_3', Blockly.Arduino.ORDER_ATOMIC);
	var value_COL_4 = Blockly.Arduino.valueToCode(this, 'nulllab_col_4', Blockly.Arduino.ORDER_ATOMIC);
//Blockly.Arduino.setups_['setup_ds3231setdate'] = 'Wire.begin();\n'+'Clock.setSecond('+value_second+');\n'+'Clock.setMinute('+value_minute+');\n'+'Clock.setHour('+value_hour+');\n'+'Clock.setDoW('+value_week+');\n'+'Clock.setDate('+value_day+');\n'+'Clock.setMonth('+value_month+');\n'+'Clock.setYear('+value_year+');\n';
	Blockly.Arduino.definitions_['define_keypad'] = '#include <Keypad.h>\n'+'#define   ROW_1   '+value_row_1+'\n#define   ROW_2   '+value_row_2+'\n#define   ROW_3   '+value_row_3+'\n#define   ROW_4   '+value_row_4+'\n#define   COL_1   '+value_COL_1+'\n#define   COL_2  '+value_COL_2+'\n#define   COL_3   '+value_COL_3+'\n#define   COL_4   '+value_COL_4+'\nconst byte ROWS = 4;\nconst byte COLS = 4;\nchar hexaKeys[ROWS][COLS] = {\n  {\'1\',\'2\',\'3\',\'A\'},\n  {\'4\',\'5\',\'6\',\'B\'},\n  {\'7\',\'8\',\'9\',\'C\'},\n  {\'*\',\'0\',\'#\',\'D\'}\n};\nbyte rowPins[ROWS] = {'+value_row_1+', '+value_row_2+', '+value_row_3+', '+value_row_4+'};\nbyte colPins[COLS] = {'+value_COL_1+', '+value_COL_2+', '+value_COL_3+', '+value_COL_4+'};\nKeypad customKeypad = Keypad( makeKeymap(hexaKeys), rowPins, colPins, ROWS, COLS);\n';
	 //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = '';
    return code;
};

Blockly.Arduino.forBlock["nulllab_getkeypad"] = function () {
	Blockly.Arduino.definitions_['define_getkeypad'] = 'char customKey = customKeypad.getKey();\n';
	Blockly.Arduino.setups_['setup_getkeypad'] = 'int i;\n  for(i=0 ; i< ROWS ; i++)  {\n    pinMode(rowPins[i],OUTPUT);\n    pinMode(colPins[i],OUTPUT);\n  }\n';
	var code = 'char customKey = customKeypad.getKey();\n';
    return code;
};

Blockly.Arduino.forBlock["nulllab_keypadpressed"] = function () {
	var code = 'customKey';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock["nulllab_keypadvalue"] = function () {
	var code = 'customKey';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock["nulllab_getbluetoothvalue"] = function () {
	Blockly.Arduino.definitions_['define_getbluetoothvalue'] = '#include  <ProtocolParser.h>\n'+'ProtocolParser *mProtocol = new ProtocolParser();\n';
	var code = 'mProtocol->RecevData();\n';
    return code;
};

Blockly.Arduino.forBlock["nulllab_dogetbluetoothvalue"] = function () {
	var code = 'mProtocol->ParserPackage()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock["nulllab_bluetoothmode"] = function () {
	var dropdown_Bluetoothmodes = this.getFieldValue('nulllab_bluetoothmodes');
	var code = 'mProtocol->GetRobotControlFun()=='+dropdown_Bluetoothmodes+'';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock["nulllab_bluetoothgetrgbvalue"]  = function () {
	var code = ' mProtocol->GetRgbValue()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock["nulllab_bluetoothsetrgb"] = function () {
	var code = 'setColor( color>>16, (color>>8)&0xFF, color&0xFF);\n';
    return code;
};

Blockly.Arduino.forBlock["nulllab_bluetoothsetbuzzer"] = function () {
	Blockly.Arduino.definitions_['define_bluetoothsetbuzzer'] = 'void PianoSing(byte b[])\n{\n    union result\n    {\n      float d;\n      unsigned char data[4];\n    }r1,r2;\n    r2.data[0]=b[0];\n    r2.data[1]=b[1];\n    r2.data[2]=b[2];\n    r2.data[3]=b[3];\n    mBuzzer->_tone(r2.d,120, 2);\n}\n';
	var code = 'PianoSing((byte *)mProtocol->GetPianoSing());\n';
    return code;
};

Blockly.Arduino.forBlock["nulllab_buzzerpin"] = function () {
	var value_buzzerpin = this.getFieldValue('nulllab_buzzerpin');
	var value_buzzerFreq = this.getFieldValue('nulllab_freq');
	var value_buzzerTime = Blockly.Arduino.valueToCode(this, 'nulllab_buzzerTime', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_buzzerpin'] = '#include <Buzzer.h>\n';
	Blockly.Arduino.definitions_['define_buzzerpin_' + value_buzzerpin] = 'Buzzer buzzer_' + value_buzzerpin + '(' + value_buzzerpin + ');\n';
	//Blockly.Arduino.setups_['setup_buzzerpin'] = ' pinMode('+value_buzzerpin+', OUTPUT);\n';
	var code = 'buzzer_' + value_buzzerpin + '.tone(' + value_buzzerpin + ', ' + value_buzzerFreq + ', ' + value_buzzerTime + ');\n';
    return code;
};

Blockly.Arduino.forBlock["nulllab_iicinit"] = function () {
	var value_clk = Blockly.Arduino.valueToCode(this, 'nulllab_clk', Blockly.Arduino.ORDER_ATOMIC);
	var value_dio = Blockly.Arduino.valueToCode(this, 'nulllab_dio', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_iicinit'] = '#include <TM1637.h>\nTM1637 tm1637('+value_clk+','+value_dio+');\n';
	Blockly.Arduino.setups_['setup_iicinit'] = ' tm1637.set();\ntm1637.init();\ntm1637.point(POINT_OFF);\n';
	var code = '';
    return code;
};

Blockly.Arduino.forBlock["nulllab_iicdisplaynum"]  = function () {
	var value_num1 = Blockly.Arduino.valueToCode(this, 'nulllab_num1', Blockly.Arduino.ORDER_ATOMIC);
	var value_num2 = Blockly.Arduino.valueToCode(this, 'nulllab_num2', Blockly.Arduino.ORDER_ATOMIC);
	var value_num3 = Blockly.Arduino.valueToCode(this, 'nulllab_num3', Blockly.Arduino.ORDER_ATOMIC);
	var value_num4 = Blockly.Arduino.valueToCode(this, 'nulllab_num4', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_iicdisplaynum'] = 'int8_t Disp[] = {'+value_num1+', '+value_num2+', '+value_num3+', '+value_num4+'};';
	//Blockly.Arduino.setups_['setup_iicinit'] = ' tm1637.set();\ntm1637.init();\ntm1637.point(POINT_OFF);\n';
	var code = 'tm1637.display(Disp);\nwhile(1);\n';
    return code;
};
Blockly.Arduino.forBlock["nulllab_iictube"] = function () {
	var value_hours = Blockly.Arduino.valueToCode(this, 'nulllab_hours', Blockly.Arduino.ORDER_ATOMIC);
	var value_minutes = Blockly.Arduino.valueToCode(this, 'nulllab_minutes', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_iictube'] = '#include <TimerOne.h>\n#define ON 1\n#define OFF 0\nint8_t TimeDisp[] = {0x00,0x00,0x00,0x00};\nunsigned char ClockPoint = 1;\nunsigned char Update;\nunsigned char halfsecond = 0;\nunsigned char second;\nunsigned char minute = '+value_minutes+';\nunsigned char hour = '+value_hours+';\nvoid TimingISR()\n{\n  halfsecond ++;\n  Update = ON;\n  if(halfsecond == 2){\n    second ++;\n    if(second == 60)\n    {\n      minute ++;\n      if(minute == 60)\n      {\n        hour ++;\n        if(hour == 24)hour = 0;\n        minute = 0;\n      }\n      second = 0;\n    }\n    halfsecond = 0;  \n  }\n  ClockPoint = (~ClockPoint) & 0x01;\n}\nvoid TimeUpdate(void)\n{\n  if(ClockPoint)tm1637.point(POINT_ON);\n  else tm1637.point(POINT_OFF); \n  TimeDisp[0] = hour / 10;\n  TimeDisp[1] = hour % 10;\n  TimeDisp[2] = minute / 10;\n  TimeDisp[3] = minute % 10;\n  Update = OFF;\n}\n';
	Blockly.Arduino.setups_['setup_iictube'] = '  Timer1.initialize(500000);\n  Timer1.attachInterrupt(TimingISR);\n';
	var code = ' if(Update == ON)\n  {\n    TimeUpdate();\n    tm1637.display(TimeDisp);\n  }\n';
    return code;
};

Blockly.Arduino.forBlock["nulllab_geekServo"] = function () {
	var geekServoPin = this.getFieldValue('nulllab_geekServoPin');;
	var angle = Blockly.Arduino.valueToCode(this, 'nulllab_geekServoAngle', Blockly.Arduino.ORDER_ATOMIC);
	var delay = Blockly.Arduino.valueToCode(this, 'nulllab_geekServoDelay', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_servo'] = `#include <Servo.h>\n`;
	Blockly.Arduino.definitions_['define_servo_' + geekServoPin] =`Servo servo_${geekServoPin};\n`;
	Blockly.Arduino.definitions_['define_geekservo'] = `int geekServoAngle(int x) {\n  return ((x - 90) * 20) / 3 + 1500;\n}\n`; 
	Blockly.Arduino.setups_['setup_geekservoPin_' + geekServoPin] = `pinMode(${geekServoPin}, OUTPUT);\n`;
	Blockly.Arduino.setups_['setup_geekservo_'+geekServoPin] = `servo_${geekServoPin}.attach(${geekServoPin});`;
	return `servo_${geekServoPin}.write(geekServoAngle(${angle}));\ndelay(${delay});\n`;
}

Blockly.Arduino.forBlock["nulllab_doubleDcMotorDriver"] = function () {
	var motorPin1 = this.getFieldValue('nulllab_motorIn1');
	var motorPin2 = this.getFieldValue('nulllab_motorIn2');
	var motorPin3 = this.getFieldValue('nulllab_motorIn3');
	var motorPin4 = this.getFieldValue('nulllab_motorIn4');
	var speed1 = Blockly.Arduino.valueToCode(this, 'nulllab_speed1', Blockly.Arduino.ORDER_ATOMIC);
	var speed2 = Blockly.Arduino.valueToCode(this, 'nulllab_speed2', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_doubleDcMotor'] = `#define IN1_PIN${motorPin1} ${motorPin1}\n#define IN2_PIN${motorPin2} ${motorPin2}\n#define IN3_PIN${motorPin3} ${motorPin3}\n#define IN4_PIN${motorPin4} ${motorPin4}\n`;
	Blockly.Arduino.setups_['setup_doubleDcMotor'] = `pinMode(IN1_PIN${motorPin1}, OUTPUT);\n  digitalWrite(IN1_PIN${motorPin1}, LOW);\n  pinMode(IN2_PIN${motorPin2}, OUTPUT);\n  digitalWrite(IN2_PIN${motorPin2}, LOW);\n  pinMode(IN3_PIN${motorPin3}, OUTPUT);\n  digitalWrite(IN3_PIN${motorPin3}, LOW);\n  pinMode(IN4_PIN${motorPin4}, OUTPUT);\n  digitalWrite(IN4_PIN${motorPin4}, LOW);\n`;
	var code = '';
	if (speed1 > 0) {
		code += `analogWrite(IN1_PIN${motorPin1}, LOW);\n  analogWrite(IN2_PIN${motorPin2}, ${speed1});\n`;
	} else {
		code += `analogWrite(IN2_PIN${motorPin2}, LOW);\n  analogWrite(IN1_PIN${motorPin1}, abs(${speed1}));\n`;
	}
	if (speed2 > 0) {
		code += `analogWrite(IN3_PIN${motorPin3}, LOW);\n  analogWrite(IN4_PIN${motorPin4}, ${speed2});\n`;
	} else {
		code += `analogWrite(IN4_PIN${motorPin4}, LOW);\n  analogWrite(IN3_PIN${motorPin3}, abs(${speed2}));\n`;
	}
	return code;
};

Blockly.Arduino.forBlock["nulllab_doubleDcMotorDriverStop"] = function () {
	var motorPin1 = this.getFieldValue('nulllab_motorIn1');
	var motorPin2 = this.getFieldValue('nulllab_motorIn2');
	var motorPin3 = this.getFieldValue('nulllab_motorIn3');
	var motorPin4 = this.getFieldValue('nulllab_motorIn4');
	Blockly.Arduino.definitions_['define_doubleDcMotor'] = `#define IN1_PIN${motorPin1} ${motorPin1}\n#define IN2_PIN${motorPin2} ${motorPin2}\n#define IN3_PIN${motorPin3} ${motorPin3}\n#define IN4_PIN${motorPin4} ${motorPin4}\n`;
	Blockly.Arduino.setups_['setup_doubleDcMotor'] = `pinMode(IN1_PIN${motorPin1}, OUTPUT);\n  digitalWrite(IN1_PIN${motorPin1}, LOW);\n  pinMode(IN2_PIN${motorPin2}, OUTPUT);\n  digitalWrite(IN2_PIN${motorPin2}, LOW);\n  pinMode(IN3_PIN${motorPin3}, OUTPUT);\n  digitalWrite(IN3_PIN${motorPin3}, LOW);\n  pinMode(IN4_PIN${motorPin4}, OUTPUT);\n  digitalWrite(IN4_PIN${motorPin4}, LOW);\n`;
	var code = `analogWrite(IN1_PIN${motorPin1}, HIGH);\nanalogWrite(IN2_PIN${motorPin2}, HIGH);\nanalogWrite(IN3_PIN${motorPin3}, HIGH);\nanalogWrite(IN4_PIN${motorPin4}, HIGH);\n`;
	return code;
};

Blockly.Arduino.forBlock["nulllab_dcmotordriver"] = function () {
	var dirPin = this.getFieldValue('nulllab_motorDirectionPin');
	var direction = this.getFieldValue('nulllab_direction');
	var speedPin = this.getFieldValue('nulllab_motorSpeedPin');
	var speed = Blockly.Arduino.valueToCode(this, 'nulllab_speed', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['setup_dcMotor_' + dirPin] = `pinMode(${dirPin}, OUTPUT);\n`;
	Blockly.Arduino.setups_['setup_dcMotor_' + speedPin] = `pinMode(${speedPin}, OUTPUT);\n`;
	return `digitalWrite(${dirPin}, ${direction});\nanalogWrite(${speedPin}, ${speed});\n`;
}

Blockly.Arduino.forBlock["nulllab_stepper"] = function () {
	var value_in1 = Blockly.Arduino.valueToCode(this, 'nulllab_in1', Blockly.Arduino.ORDER_ATOMIC);
	var value_in2 = Blockly.Arduino.valueToCode(this, 'nulllab_in2', Blockly.Arduino.ORDER_ATOMIC);
	var value_in3 = Blockly.Arduino.valueToCode(this, 'nulllab_in3', Blockly.Arduino.ORDER_ATOMIC);
	var value_in4 = Blockly.Arduino.valueToCode(this, 'nulllab_in4', Blockly.Arduino.ORDER_ATOMIC);
	var value_ste = Blockly.Arduino.valueToCode(this, 'nulllab_ste', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_stepper'] = '#include <KW_Stepper.h>\nStepper stepper('+value_ste+', '+value_in1+', '+value_in2+', '+value_in3+', '+value_in4+');';
	//Blockly.Arduino.setups_['setup_iictube'] = ' tm1637.set();  tm1637.init();\n  Timer1.initialize(500000);\n  Timer1.attachInterrupt(TimingISR);\n';
	var code = ' ';
    return code;
};


Blockly.Arduino.forBlock["nulllab_stepperspeed"] = function () {
	var value_speed1 = Blockly.Arduino.valueToCode(this, 'nulllab_speed1', Blockly.Arduino.ORDER_ATOMIC);
	//Blockly.Arduino.definitions_['define_stepper1'] = '#include \"KW_Stepper.h\"\nStepper stepper(200, '+value_in1+', '+value_in2+', '+value_in3+', '+value_in4+');';
	//Blockly.Arduino.setups_['setup_kw_stepperspeed'] = 'stepper.setSpeed('+value_speed1+');\n';
	var code = 'stepper.setSpeed('+value_speed1+');\n';
    return code;
};

Blockly.Arduino.forBlock["nulllab_stepperspeed2"] = function () {
	 //var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
	var value_step1 = Blockly.Arduino.valueToCode(this, 'nulllab_step1', Blockly.Arduino.ORDER_ATOMIC);
	//Blockly.Arduino.definitions_['define_stepper1'] = '#include \"KW_Stepper.h\"\nStepper stepper(200, '+value_in1+', '+value_in2+', '+value_in3+', '+value_in4+');';
	//Blockly.Arduino.setups_['setup_kw_stepperspeed'] = 'stepper.setSpeed('+value_speed1+');\n';
	var code = 'stepper.step('+value_step1+');\n';
    return code;
};

// Blockly.Arduino.nulllab_4linelcd = function () {
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

// Blockly.Arduino.nulllab_8linelcd = function () {
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

Blockly.Arduino.forBlock["nulllab_initrgbultrasonic"] = function () {
	var value_ultrasonicpin = this.getFieldValue('nulllab_ultrasonicpin');
    var value_rgbpin = this.getFieldValue('nulllab_rgbpin');
	var myRGBUltrasonic = this.getFieldValue('nulllab_rgbUltrasonic');
	Blockly.Arduino.definitions_['define_initrgbultrasonic'] = '#include <RgbUltrasonic.h>\n';
	Blockly.Arduino.definitions_['define_initrgbultrasonic_' + myRGBUltrasonic] = 'RgbUltrasonic ' + myRGBUltrasonic + '('+value_ultrasonicpin+', '+value_rgbpin+');\n';
	var code = '';
    return code;
};

Blockly.Arduino.forBlock["nulllab_setcolor"] = function () {
    var dropdown_rgbposition = this.getFieldValue('nulllab_rgbposition');
	var dropdown_rgbcolor = this.getFieldValue('nulllab_rgbcolor');
    var code = '  mRUS04.SetRgbColor('+dropdown_rgbposition+', '+dropdown_rgbcolor+');\n';
	return code;
};

Blockly.Arduino.forBlock["nulllab_setcolorandstyle"] = function () {
	var myRGBUltrasonic = this.getFieldValue('nulllab_rgbUltrasonic');
    var dropdown_rgbposition = this.getFieldValue('nulllab_rgbposition');
	var dropdown_rgbcolor = this.getFieldValue('nulllab_rgbcolor');
	var dropdown_rgbstyle = this.getFieldValue('nulllab_rgbstyle');
    var code = myRGBUltrasonic + '.SetRgbEffect('+dropdown_rgbposition+', '+dropdown_rgbcolor+', '+dropdown_rgbstyle+');\n';
	return code;
};

Blockly.Arduino.forBlock["nulllab_setrgbbreathe"] = function () {
    var dropdown_rgbposition = this.getFieldValue('nulllab_rgbposition');
    var code = 'mRUS04.SetRgbEffect('+dropdown_rgbposition+', RGB_WHITE, E_EFFECT_BREATHING);\n';
	return code;
};

Blockly.Arduino.forBlock["nulllab_readultrasonicdistance"] = function () {
	var myRGBUltrasonic = this.getFieldValue('nulllab_rgbUltrasonic');
	var code = myRGBUltrasonic + '.GetUltrasonicDistance()'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock['nulllab_x8ledinit'] = function(block) {
	var dropdown_ROW_0s = this.getFieldValue('nulllab_row_0s');
	var dropdown_ROW_1s = this.getFieldValue('nulllab_row_1s');
	var dropdown_ROW_2s = this.getFieldValue('nulllab_row_2s');
	var dropdown_ROW_3s = this.getFieldValue('nulllab_row_3s');
	var dropdown_ROW_4s = this.getFieldValue('nulllab_row_4s');
	var dropdown_ROW_5s = this.getFieldValue('nulllab_row_5s');
	var dropdown_ROW_6s = this.getFieldValue('nulllab_row_6s');
	var dropdown_ROW_7s = this.getFieldValue('nulllab_row_7s');
	var dropdown_LED_A1 = this.getFieldValue('nulllab_led_a1');
	var dropdown_LED_B1 = this.getFieldValue('nulllab_led_b1');
	var dropdown_LED_C1 = this.getFieldValue('nulllab_led_c1');
	var dropdown_LED_D1 = this.getFieldValue('nulllab_led_d1');
	var dropdown_LED_E1 = this.getFieldValue('nulllab_led_e1');
	var dropdown_LED_F1 = this.getFieldValue('nulllab_led_f1');
	var dropdown_LED_G1 = this.getFieldValue('nulllab_led_g1');
	var dropdown_LED_H1 = this.getFieldValue('nulllab_led_h1');
	Blockly.Arduino.setups_['x8ledinit'] = 'm8x8Dot = new MaxMatrix_8x8(ROW_PIN, COL_PIN);\n';
	Blockly.Arduino.definitions_['include_8x8ledinit'] = '#include <MaxMatrix_8x8.h>\n';
	Blockly.Arduino.definitions_['define_8x8ledinit'] = 'MaxMatrix_8x8 *m8x8Dot;\nconst byte ROW_PIN[8] = {'+dropdown_ROW_0s+', '+dropdown_ROW_1s+', '+dropdown_ROW_2s+', '+dropdown_ROW_3s+', '+dropdown_ROW_4s+', '+dropdown_ROW_5s+', '+dropdown_ROW_6s+', '+dropdown_ROW_7s+'};\nconst byte COL_PIN[8] = {'+dropdown_LED_A1+', '+dropdown_LED_B1+', '+dropdown_LED_C1+', '+dropdown_LED_D1+', '+dropdown_LED_E1+', '+dropdown_LED_F1+', '+dropdown_LED_G1+', '+dropdown_LED_H1+'};\n';
	return  '';
}

Blockly.Arduino.forBlock['nulllab_x8leddisplay']  = function() {
	var maximage =  this.getFieldValue('nulllab_maximage');
	Blockly.Arduino.setups_['x8leddisplay'] = 'm8x8Dot->writeFull(m8x8Dot->getMouthShape('+maximage+'));\n';
	return '';
};

Blockly.Arduino.forBlock['nulllab_x8ledloopscan'] = function() {
	return 'm8x8Dot->scan();\n';
};

//74h初始化 74hinit
Blockly.Arduino.forBlock['nulllab_74hinit'] = function() {
	var dropdown_BIT_CHOICE_11 =  this.getFieldValue('nulllab_bit_choice_11');
	var dropdown_BIT_CHOICE_22 =  this.getFieldValue('nulllab_bit_choice_22');
	var dropdown_BIT_CHOICE_33 =  this.getFieldValue('nulllab_bit_choice_33');
	var dropdown_BIT_CHOICE_44 =  this.getFieldValue('nulllab_bit_choice_44');
	var dropdown_STCP_PIN1 =  this.getFieldValue('nulllab_stcp_pin1');
	var dropdown_SHCP_PIN1 =  this.getFieldValue('nulllab_shcp_pin1');
	var dropdown_DATA_PIN1 =  this.getFieldValue('nulllab_data_pin1');
	Blockly.Arduino.definitions_['include__74hinit'] = '#include<SegmentDisplay.h>\nSegmentDisplay _74HC595_7SegmentDisplay('+dropdown_BIT_CHOICE_11+', '+dropdown_BIT_CHOICE_22+', '+dropdown_BIT_CHOICE_33+', '+dropdown_BIT_CHOICE_44+', '+dropdown_STCP_PIN1+', '+dropdown_SHCP_PIN1+', '+dropdown_DATA_PIN1+');';
	return '';
};

//74h数码管显示 _74hinitisplay
Blockly.Arduino.forBlock['nulllab_74hinitisplay'] = function(block) {
	var value__74hinitisplays = Blockly.Arduino.valueToCode(this, 'nulllab_74hinitisplays', Blockly.Arduino.ORDER_ATOMIC);
	return  '_74HC595_7SegmentDisplay.DisplayChar((int)'+value__74hinitisplays+'); \n';
}

//74h熄灭 _74hoff
Blockly.Arduino.forBlock['nulllab_74hoff'] = function(block) {
	return  '_74HC595_7SegmentDisplay.TurnOffAllLed();\n';
}

//钢琴模块
Blockly.Arduino.forBlock['nulllab_initPiano'] = function () {
	var value_clk = this.getFieldValue('nulllab_clk');
	var value_dio = this.getFieldValue('nulllab_dio');
	Blockly.Arduino.definitions_['define_initir'] = '#include <BS818A.h>\n';
	Blockly.Arduino.definitions_['include_ph_bs_' + value_clk + value_dio] = "BS818A BS_" + value_clk + value_dio + ";\n";
	Blockly.Arduino.setups_['setup_initPiano_' + value_clk + value_dio] = 'BS_' + value_clk + value_dio + '.InitBS818A(' + value_dio + ', ' + value_clk + ');\n';
	var dropdown_piano = this.getFieldValue('nulllab_piano');
	var code = 'BS_' + value_clk + value_dio + '.PressBsButton(' + dropdown_piano + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//钢琴模块
Blockly.Arduino.forBlock['nulllab_initPiano_v2'] = function () {
	var dropdown_piano = this.getFieldValue('nulllab_piano');
	var value_clk = this.getFieldValue('nulllab_clk');
	var value_dio = this.getFieldValue('nulllab_dio');
	Blockly.Arduino.definitions_['include_emPiano'] = '#include <EM_Piano.h>\n';
	Blockly.Arduino.definitions_['include_ph_piano_' + value_clk + value_dio] = "Piano mPiano_" + value_clk + value_dio + ";\n";
	Blockly.Arduino.setups_['setup_ph_piano_' + value_clk + value_dio] = 'mPiano_'  + value_clk + value_dio + '.initPiano(' + value_clk + ', ' + value_dio + ');\n';
	var code = 'mPiano_' + value_clk + value_dio + '.PressBsButton('+dropdown_piano+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 滑动变阻器
Blockly.Arduino.forBlock['nulllab_sliding_potentiometer'] = function () {
	var nulllab_slidingPort = this.getFieldValue('nulllab_slidingPort');
	var code = 'round(analogRead(' + nulllab_slidingPort + ')*0.098)';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
// 
Blockly.Arduino.forBlock['nulllab_digitalInitPort'] = function () {
	var myEncoder = this.getFieldValue('nulllab_encoder');
	var nulllab_porta = this.getFieldValue('nulllab_porta');
	var nulllab_portb = this.getFieldValue('nulllab_portb');
	var nulllab_portd = this.getFieldValue('nulllab_portd');        
	Blockly.Arduino.definitions_['define_ecport_' + myEncoder] = '#define ' + myEncoder + '_A ' + nulllab_porta + '\n#define ' + myEncoder + '_B ' + nulllab_portb + '\n#define ' + myEncoder + '_D ' + nulllab_portd + '\n';
	Blockly.Arduino.definitions_['define_ecvolatile_' + myEncoder] = 'volatile int ' + myEncoder + '_lastEncoded = 0;\nvolatile long ' + myEncoder + '_encoderValue = 0;\nlong ' + myEncoder + '_lastencoderValue = 0;\nint ' + myEncoder + '_lastMSB = 0;\nint ' + myEncoder + '_lastLSB = 0;\n\nlong ' + myEncoder + '_readEncoderValue(void) {\n  return ' + myEncoder + '_encoderValue / 4;\n}\n';
	Blockly.Arduino.setups_['setup_port_' + myEncoder] = "pinMode(" + myEncoder + "_A, INPUT);\n  pinMode(" + myEncoder + "_B, INPUT);\n  pinMode(" + myEncoder + "_D, INPUT);\n  digitalWrite(" + myEncoder + "_A, HIGH);\n  digitalWrite(" + myEncoder + "_B, HIGH);\n";
	// var code = 'digitalRead(' + 'SWITCH_PIN' + ')' + '== LOW';
	return "";
};

//旋转编码器
Blockly.Arduino.forBlock['nulllab_digital'] = function () {
	var myEncoder = this.getFieldValue('nulllab_encoder');
	Blockly.Arduino.definitions_['define_encoder_button_' + myEncoder] = "boolean " + myEncoder + "_isButtonPushDown(void) {\n  if (!digitalRead(" + myEncoder + "_D)) {\n    delay(5);\n    if (!digitalRead(" + myEncoder + "_D))\n      return true;\n    }\n  return false;\n}\n";
	var code = myEncoder + '_isButtonPushDown()';     
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock['nulllab_print'] = function () {
	var myEncoder = this.getFieldValue('nulllab_encoder');
	Blockly.Arduino.setups_['setup_attachInterrupt_' + myEncoder] = 'attachInterrupt(0, updateEncoder_' + myEncoder + ', CHANGE);\n  attachInterrupt(1, updateEncoder_' + myEncoder + ', CHANGE);\n';
	Blockly.Arduino.definitions_['read_quadrature_' + myEncoder] = 'void updateEncoder_' + myEncoder + '() {\n  int MSB = digitalRead(' + myEncoder + '_A);\n  int LSB = digitalRead(' + myEncoder + '_B);\n  int encoded = (MSB << 1) | LSB;\n  int sum  = (' + myEncoder + '_lastEncoded << 2) | encoded;\n  if (sum == 0b1101 || sum == 0b0100 || sum == 0b0010 || sum == 0b1011) ' + myEncoder + '_encoderValue ++;\n  if (sum == 0b1110 || sum == 0b0111 || sum == 0b0001 || sum == 0b1000) ' + myEncoder + '_encoderValue --;\n  ' + myEncoder + '_lastEncoded = encoded;\n}\n';
	var oldposition = myEncoder + '_readEncoderValue()';
	return [oldposition, Blockly.Arduino.ORDER_ATOMIC];
};

//初始化矩阵键盘
Blockly.Arduino.forBlock['nulllab_initialize_matrix_keyboard'] = function () {
	var myKeyBoard = this.getFieldValue('nulllab_keyboard');
	var value_scl = this.getFieldValue('nulllab_scl_pin');
	var value_sdo = this.getFieldValue('nulllab_sdo_pin');
	Blockly.Arduino.definitions_['define_matrix_keyboard'] = '#include <TouchMatriKeyPad.h>\n';
	Blockly.Arduino.definitions_['matrix_keyboard_' + myKeyBoard] = 'TouchMatriKeyPad ' + myKeyBoard + '(' + value_scl + ', ' + value_sdo + ');\nString ' + myKeyBoard + '_getKeyPadValue() {\n  uint16_t keycode = ' + myKeyBoard + '.GetKeyCode();\n  if (keycode != 0xFFFF) {\n    String key_name = ' + myKeyBoard + '.GetKeyMap();\n    return key_name;\n  }\n  return "";\n}\n';
	var code = '';
    return code;
};

//矩阵键盘状态
Blockly.Arduino.forBlock['nulllab_matrix_keyboard_status'] = function () {
	var value_key = this.getFieldValue('nulllab_key');
	var myKeyBoard = this.getFieldValue('nulllab_keyboard');
	// var value_status = this.getFieldValue('nulllab_status');
	var code =  myKeyBoard + '.KeyPressed(' + value_key + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//获取矩阵键盘按下的值
Blockly.Arduino.forBlock['nulllab_matrix_keyboard_values'] = function () {
	var myKeyBoard = this.getFieldValue('nulllab_keyboard');
	var code = myKeyBoard + '_getKeyPadValue()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//初始化矩阵键盘v2
Blockly.Arduino.forBlock['nulllab_init_matrix_keyboard_I2C_V2']  = function () {
	var myKeyBoard = this.getFieldValue('nulllab_keyboard_v2');
	var nulllab_matrix_addr = Blockly.Arduino.valueToCode(this,'nulllab_matrix_addr',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_matrix_keyboard_v2'] = '#include <matrix_keyboard.h>\n';
	Blockly.Arduino.definitions_['matrix_keyboard_V2_' + myKeyBoard] = 'MatrixKeyboard ' + myKeyBoard + '(' + nulllab_matrix_addr + ');\n';
	Blockly.Arduino.setups_['matrix_keyboard_I2C_' + myKeyBoard] = myKeyBoard + '.Setup();\n';
	var code = '';
    return code;
};

//获取矩阵键盘V2按下的值
Blockly.Arduino.forBlock['nulllab_matrix_keyboard_values_V2'] = function () {
	var nulllab_keyboard_v2 = this.getFieldValue('nulllab_keyboard_v2');
	var code = nulllab_keyboard_v2 + '.GetTouchedKey()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//初始化矩阵键盘v3
Blockly.Arduino.forBlock['nulllab_init_matrix_keyboard_I2C_V3']  = function () {
	var myKeyBoardV3 = this.getFieldValue('nulllab_keyboard_v3');
	var nulllab_matrix_addr = Blockly.Arduino.valueToCode(this,'nulllab_matrix_addr',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_matrix_keyboard_v2'] = '#include <matrix_keyboard_v3.h>\n';
	Blockly.Arduino.definitions_['matrix_keyboard_V2_' + myKeyBoardV3] = 'MatrixKeyboard ' + myKeyBoardV3 + '(' + nulllab_matrix_addr + ');\n';
	Blockly.Arduino.setups_['matrix_keyboard_I2C_' + myKeyBoardV3] = myKeyBoardV3 + '.Setup();\n';
	var code = '';
    return code;
};

//获取矩阵键盘V3按下的值
Blockly.Arduino.forBlock['nulllab_matrix_keyboard_values_V3'] = function () {
	var nulllab_keyboard_v3 = this.getFieldValue('nulllab_keyboard_v3');
	var code = nulllab_keyboard_v3 + '.GetTouchedKey()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//初始化发送
Blockly.Arduino.forBlock['nulllab_nrf24l01send'] = function(){
	var value_address = Blockly.Arduino.valueToCode(this,'nulllab_address',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['md_nrf24l01'] = '#include<SPI.h>\n#include <RF24.h>\n#include <printf.h>\n';
	Blockly.Arduino.setups_['Address'] = '';
	var code = 'radio.openWritingPipe('+value_address+');\n';
	return code;
};

//初始化接收
Blockly.Arduino.forBlock['nulllab_nrf24l01rec'] = function(){
	var value_address2 = Blockly.Arduino.valueToCode(this,'nulllab_address2',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['md_nrf24l01'] = '#include<SPI.h>\n#include <RF24.h>\n#include <printf.h>\n';
	// Blockly.Arduino.setups_['begin'] ='radio.begin();\n';
	Blockly.Arduino.setups_['Address2'] = '';
	var code = 'radio.openReadingPipe(1, ' + value_address2 + ');\n';
	return code;
};

//功耗等级块
Blockly.Arduino.forBlock['nulllab_power_consumption_level'] = function(){
	var level = this.getFieldValue('nulllab_version');
	Blockly.Arduino.setups_['setPALevel'] = 'radio.setPALevel(' + level + ');\n';
	return '';
}

//初始化引脚块
Blockly.Arduino.forBlock['nulllab_initialize_pins'] = function(){
	Blockly.Arduino.definitions_['md_nrf24l01'] = '#include<SPI.h>\n#include <RF24.h>\n#include <printf.h>\n';
	var ce = this.getFieldValue('nulllab_CE');
	var cs = this.getFieldValue('nulllab_CS');
	Blockly.Arduino.setups_['begin'] ='radio.begin();\n  Serial.begin(115200);\n  printf_begin();\n';
	Blockly.Arduino.definitions_['initialize'] = 'RF24 radio(' + ce + ', ' + cs + ');\n';
	return '';
}

//发送数据
Blockly.Arduino.forBlock['nulllab_nrf24l01senddatass'] = function(){
	var value_senddatass = Blockly.Arduino.valueToCode(this, 'nulllab_nrfdatass', Blockly.Arduino.ORDER_ATOMIC);
	var value_genre = this.getFieldValue('nulllab_GENRE');
	var code = 'radio.write(&'+value_senddatass+', sizeof(' + value_senddatass + '));\n';
	return code;
};

//发送字符串数据
Blockly.Arduino.forBlock['nulllab_nrf24l01senddatass_string'] = function(){
	var value_senddatass_string = Blockly.Arduino.valueToCode(this,'nulllab_nrfdatass_string',Blockly.Arduino.ORDER_ATOMIC);
	var value_genre = this.getFieldValue('nulllab_GENRE');
	//Blockly.Arduino.definitions_['md_string'] = 'char value[];'
	var code = 'char value[] = ' + value_senddatass_string + ';\nradio.write(value, sizeof(value));\n';
	return code;
};

//监听块
Blockly.Arduino.forBlock['nulllab_eavesdrop'] = function(){
	var listen = this.getFieldValue('nulllab_EAVESDROP');
	var code = 'radio.' + listen + 'Listening();\n';
	return code;
}

Blockly.Arduino.forBlock['nulllab_nrf24l01PrintDetails'] = function(){
	var code = 'radio.printDetails();;\n';
	return code;
}

//RF24是否有数据可读
Blockly.Arduino.forBlock['nulllab_nrfdataradys'] = function(){
	var code = 'radio.available()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//接收数据
Blockly.Arduino.forBlock['nulllab_nrfrecdatas'] = function(){
	var value_md_nrfdatasss = Blockly.Arduino.valueToCode(this,'nulllab_nrfdatasss',Blockly.Arduino.ORDER_ATOMIC);
	var code = 'radio.read(&'+value_md_nrfdatasss+', sizeof('+value_md_nrfdatasss+') );\n';
	return code;
};

//接收字符串数据
Blockly.Arduino.forBlock['nulllab_nrfrecdatas_string'] = function(){
	Blockly.Arduino.definitions_['receiving_string'] = 'byte rf24_res_array[32];\nbyte rf24_receiving(){\n  radio.read(rf24_res_array, sizeof(rf24_res_array));\n  return rf24_res_array[0];\n}';
	var code = 'rf24_receiving()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//速率块
Blockly.Arduino.forBlock['nulllab_transmission_rate'] = function(){
	var speed = this.getFieldValue('nulllab_Transmission_Rate');
	Blockly.Arduino.setups_['transmission_rate'] = 'radio.setDataRate('+speed+');\n';
	return '';
}

//通道速率块
Blockly.Arduino.forBlock['nulllab_channel_frequency'] = function(){
	var value_channel = Blockly.Arduino.valueToCode(this,'nulllab_channel',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['channel_frequency'] = 'radio.setChannel('+value_channel+');\n';
	return '';
}

//初始化颜色传感器
Blockly.Arduino.forBlock['nulllab_colorview_init'] = function(){
	Blockly.Arduino.definitions_['EM_TCS34725'] = '#include <EM_TCS34725.h>\nEM_TCS34725 tcs34725;\n'
	Blockly.Arduino.setups_['tcs34725'] = 'tcs34725.begin();\n';
	return '';
}

//颜色传感器读值
Blockly.Arduino.forBlock['nulllab_colorview_value'] = function () {
	var nulllab_colorView = this.getFieldValue('nulllab_colorView');
	Blockly.Arduino.definitions_['EM_TCS34725'] = '#include <EM_TCS34725.h>\n';
	Blockly.Arduino.definitions_['EM_TCS34725_' + nulllab_colorView] = 'EM_TCS34725 ' + nulllab_colorView + ';\n'
	Blockly.Arduino.setups_['tcs34725_' + nulllab_colorView] = nulllab_colorView + '.begin();\n';
	var Color = this.getFieldValue('nulllab_color');
	var Gamma = this.getFieldValue('nulllab_gamma');
	var code = nulllab_colorView + '.' + Color + Gamma +'()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//初始化语音识别传感器
Blockly.Arduino.forBlock['nulllab_VoiceRecognition_init'] = function(){
	Blockly.Arduino.definitions_['VoiceRecognition'] = '#include <asr_ld3320.h>\n'
	Blockly.Arduino.setups_['VoiceRecognition_init'] = 'Wire.begin();\n';
	return '';
}

//语音识别模式设置
Blockly.Arduino.forBlock['nulllab_VoiceRecognition_Mode'] = function(){
	var voiceRecognition = this.getFieldValue('nulllab_VoiceRecognition');
	Blockly.Arduino.definitions_['VoiceRecognition'] = '#include <asr_ld3320.h>\n'
	Blockly.Arduino.definitions_['VoiceRecognition_init_' + voiceRecognition] = 'LD3320 ' + voiceRecognition + '(VOICE_IIC_ADDR);\n';
	var mode = this.getFieldValue('nulllab_mode');
	Blockly.Arduino.setups_['VoiceRecognition_Mode_' + voiceRecognition] = voiceRecognition + '.ld3320_config_mode(' + mode + ');\n';
	return '';
}

 //语音识别设置词条和编号
Blockly.Arduino.forBlock['nulllab_VoiceRecognition_Content'] = function () {
	Blockly.Arduino.definitions_['VoiceRecognition'] = '#include <asr_ld3320.h>\n'
	var voiceRecognition = this.getFieldValue('nulllab_VoiceRecognition');
	Blockly.Arduino.definitions_['VoiceRecognition_init_' + voiceRecognition] = 'LD3320 ' + voiceRecognition + '(VOICE_IIC_ADDR);\n';
	// Blockly.Arduino.setups_['VoiceRecognition_init'] = 'Wire.begin();\n';
	var key = Blockly.Arduino.valueToCode(this, 'nulllab_Key', Blockly.Arduino.ORDER_ATOMIC);
	var content = Blockly.Arduino.valueToCode(this, 'nulllab_content', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['VoiceRecognition_content'+ voiceRecognition + '_' + key] =voiceRecognition + '.ld3320_add_words('+key+', '+ content+');\n  delay(200);\n';
	var code = '';
    return code;
};

//语音识别开始识别
Blockly.Arduino.forBlock['nulllab_VoiceRecognition_Start'] = function(){
	Blockly.Arduino.definitions_['VoiceRecognition'] = '#include <asr_ld3320.h>\n'
	// Blockly.Arduino.setups_['VoiceRecognition_init'] = 'Wire.begin();\n';
	var voiceRecognition = this.getFieldValue('nulllab_VoiceRecognition');
	Blockly.Arduino.definitions_['VoiceRecognition_init_' + voiceRecognition] = 'LD3320 ' + voiceRecognition + '(VOICE_IIC_ADDR);\n';
	Blockly.Arduino.setups_['VoiceRecognition_Start_' + voiceRecognition] = voiceRecognition + '.ld3320_asr_start();\n';
	return '';
}

//语音识别进行复位
Blockly.Arduino.forBlock['nulllab_VoiceRecognition_Reset']  = function(){
	Blockly.Arduino.definitions_['VoiceRecognition'] = '#include <asr_ld3320.h>\n'
	// Blockly.Arduino.setups_['VoiceRecognition_init'] = 'Wire.begin();\n';
	var voiceRecognition = this.getFieldValue('nulllab_VoiceRecognition');
	Blockly.Arduino.definitions_['VoiceRecognition_init_' + voiceRecognition] = 'LD3320 ' + voiceRecognition + '(VOICE_IIC_ADDR);\n';
	Blockly.Arduino.setups_['VoiceRecognition_Reset_' + voiceRecognition] = voiceRecognition + '.ld3320_reset();\n  delay(200);\n';
	return '';
}

//语音识别获取识别到词条的对应编号
Blockly.Arduino.forBlock['nulllab_VoiceRecognition_Number']  = function(){
	Blockly.Arduino.definitions_['VoiceRecognition'] = '#include <asr_ld3320.h>\n';
	var voiceRecognition = this.getFieldValue('nulllab_VoiceRecognition');
	Blockly.Arduino.definitions_['VoiceRecognition_init_' + voiceRecognition] = 'LD3320 ' + voiceRecognition + '(VOICE_IIC_ADDR);\n';
	// Blockly.Arduino.setups_['VoiceRecognition_init'] = 'Wire.begin();\n';
	var code = voiceRecognition + '.ld3320_get_result()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

// 语音识别设置唤醒时间
Blockly.Arduino.forBlock['nulllab_VoiceRecognition_Time'] = function(){
	var time = Blockly.Arduino.valueToCode(this,'nulllab_time',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['VoiceRecognition'] = '#include <asr_ld3320.h>\n';
	var voiceRecognition = this.getFieldValue('nulllab_VoiceRecognition');
	Blockly.Arduino.definitions_['VoiceRecognition_init_' + voiceRecognition] = 'LD3320 ' + voiceRecognition + '(VOICE_IIC_ADDR);\n';
	Blockly.Arduino.setups_['SetTime_' + voiceRecognition] = voiceRecognition + '.ld3320_config_time('+time+');\n';
	return '';
 }

 // 语音识别设置唤醒词
Blockly.Arduino.forBlock['nulllab_VoiceRecognition_wake_word'] = function(){
	var nulllab_wakeWordContent = Blockly.Arduino.valueToCode(this,'nulllab_wakeWordContent',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['VoiceRecognition'] = '#include <asr_ld3320.h>\n';
	var voiceRecognition = this.getFieldValue('nulllab_VoiceRecognition');
	Blockly.Arduino.definitions_['VoiceRecognition_init_' + voiceRecognition] = 'LD3320 ' + voiceRecognition + '(VOICE_IIC_ADDR);\n';
	Blockly.Arduino.setups_['SetTime_' + voiceRecognition] = voiceRecognition + '.ld3320_config_keywords(' + nulllab_wakeWordContent + ');\n';
	return '';
 }

 // 语音识别设置唤醒词
 Blockly.Arduino.forBlock['nulllab_VoiceRecognition_init_V2'] = function(){
	Blockly.Arduino.definitions_['VoiceRecognition_v2'] = '#include <speech_recognizer.h>\n';
	var voiceRecognitionV2 = this.getFieldValue('nulllab_VoiceRecognition_V2');
	var nulllabModeV2 = this.getFieldValue('nulllab_mode_V2');
	Blockly.Arduino.definitions_['VoiceRecognition_v2_init_' + voiceRecognitionV2] = 'emakefun::SpeechRecognizer ' + voiceRecognitionV2 + '(emakefun::SpeechRecognizer::kDefaultI2cAddress);\n';
	Blockly.Arduino.setups_['Setup' + voiceRecognitionV2] = voiceRecognitionV2 + '.Initialize();\n';
	Blockly.Arduino.setups_['SetTrigger_' + voiceRecognitionV2] = voiceRecognitionV2 + '.SetRecognitionMode(emakefun::SpeechRecognizer::' + nulllabModeV2 + ');\n';
	return '';
 }

 Blockly.Arduino.forBlock['nulllab_VoiceRecognition_Content_V2'] = function(){
	Blockly.Arduino.definitions_['VoiceRecognition_v2'] = '#include <speech_recognizer.h>\n';
	var voiceRecognitionV2 = this.getFieldValue('nulllab_VoiceRecognition_V2');
	var nulllab_Key_V2 = Blockly.Arduino.valueToCode(this,'nulllab_Key_V2',Blockly.Arduino.ORDER_ATOMIC);
	var nulllab_content_V2 = Blockly.Arduino.valueToCode(this,'nulllab_content_V2',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['VoiceRecognition_content' + voiceRecognitionV2 + '_' + nulllab_Key_V2] = voiceRecognitionV2 + '.AddKeyword(' + nulllab_Key_V2 + ', F(' + nulllab_content_V2 + '));\n';
	return '';
 }

 Blockly.Arduino.forBlock['nulllab_VoiceRecognition_time_V2'] = function(){
	Blockly.Arduino.definitions_['VoiceRecognition_v2'] = '#include <speech_recognizer.h>\n';
	var voiceRecognitionV2 = this.getFieldValue('nulllab_VoiceRecognition_V2');
	var nulllab_time_V2 = Blockly.Arduino.valueToCode(this,'nulllab_time_V2',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['VoiceRecognition_time' + voiceRecognitionV2 + '_' + nulllab_time_V2] = voiceRecognitionV2 + '.SetTimeout(' + nulllab_time_V2 + ');\n';
	return '';
 }

 Blockly.Arduino.forBlock['speech_recognizer_event'] = function(){
	Blockly.Arduino.definitions_['VoiceRecognition_v2'] = '#include <speech_recognizer.h>\n';
	var voiceRecognitionV2 = this.getFieldValue('nulllab_VoiceRecognition_V2');
	var code = `${voiceRecognitionV2}.Recognize()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
 }

//  var speechVal = 0;
 //语音合成播报开始
Blockly.Arduino.forBlock['nulllab_speech_synthesisStart'] = function(){
	var voice = this.getFieldValue('nulllab_voice');
	var voiceSpeed = this.getFieldValue('nulllab_voiceSpeed');
	var nulllab_speech = this.getFieldValue('nulllab_speech');
	var content = Blockly.Arduino.valueToCode(this, 'nulllab_content', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['speech_synthesisCache'] = '#include <tts.h>\n';
	Blockly.Arduino.definitions_['synthesisCache_' + nulllab_speech] = 'emakefun::Tts ' + nulllab_speech + '(emakefun::Tts::kDefaultI2cAddress);\n';
	Blockly.Arduino.setups_['Setup' + nulllab_speech] = nulllab_speech + '.Initialize();\n';
	var code = `${nulllab_speech}.Play(String("[v${voice}][s${voiceSpeed}]") + String(${content}));\n`;
	// speechVal ++;
	return code;
 }

//语音合成缓存内容
Blockly.Arduino.forBlock['nulllab_speech_synthesisCache'] = function(){
	var voice = this.getFieldValue('nulllab_voice');
	var voiceSpeed = this.getFieldValue('nulllab_voiceSpeed');
	var nulllab_speech = this.getFieldValue('nulllab_speech');
	var content = Blockly.Arduino.valueToCode(this, 'nulllab_content', Blockly.Arduino.ORDER_ATOMIC);
	var nulllab_index = Blockly.Arduino.valueToCode(this, 'nulllab_index', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['speech_synthesisCache'] = '#include <tts.h>\n';
	Blockly.Arduino.definitions_['synthesisCache_' + nulllab_speech] = 'emakefun::Tts ' + nulllab_speech + '(emakefun::Tts::kDefaultI2cAddress);\n';
	Blockly.Arduino.setups_['Setup' + nulllab_speech] = nulllab_speech + '.Initialize();\n';
	var code = `${nulllab_speech}.PushTextToCache(String("[v${voice}][s${voiceSpeed}]") + String(${content}), ${nulllab_index});\n`;
	return code;
 }

Blockly.Arduino.forBlock['nulllab_speech_cplay'] = function(){
	var nulllab_speech = this.getFieldValue('nulllab_speech');
	var freq = Blockly.Arduino.valueToCode(this, 'nulllab_freq', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['speech_synthesisCache'] = '#include <tts.h>\n';
	Blockly.Arduino.definitions_['synthesisCache_' + nulllab_speech] = 'emakefun::Tts ' + nulllab_speech + '(emakefun::Tts::kDefaultI2cAddress);\n';
	Blockly.Arduino.setups_['Setup' + nulllab_speech] = nulllab_speech + '.Initialize();\n';
	// Blockly.Arduino.setups_['SetTime'] = 'ld3320_config_time('+time+');\n';
	var code = `${nulllab_speech}.PlayFromCache();\n`;
	return code;
 }

 Blockly.Arduino.forBlock['nulllab_vk16k33_init'] = function() {
	var nulllab_vk16k33 = this.getFieldValue('nulllab_vk16k33');  // 
	var nulllab_vk16k33_addr = Blockly.Arduino.valueToCode(this, 'nulllab_vk16k33_addr', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['nulllab_vk16k33'] = '#include <digit_display.h>\n';
	Blockly.Arduino.definitions_['nulllab_vk16k33_' + nulllab_vk16k33] = 'DigitDisplay ' + nulllab_vk16k33 + '(' + nulllab_vk16k33_addr + ');\n';
	Blockly.Arduino.setups_['nulllab_vk16k33_' + nulllab_vk16k33] = nulllab_vk16k33 + '.Setup();\n';
	var code = '';
	return code;
 }
 
 Blockly.Arduino.forBlock['nulllab_vk16k33_brightness'] = function() {
 	var nulllab_vk16k33 = this.getFieldValue('nulllab_vk16k33');  // 
 	var nulllab_vk16k33_brightness = Blockly.Arduino.valueToCode(this, 'nulllab_vk16k33_brightness', Blockly.Arduino.ORDER_ATOMIC);
 	Blockly.Arduino.definitions_['nulllab_vk16k33'] = '#include <digit_display.h>\n';
	var res = nulllab_vk16k33 + ".SetBrightness(" + nulllab_vk16k33_brightness + ");\n";
 	return res;
 }
 
 Blockly.Arduino.forBlock['nulllab_vk16k33_showNumber'] = function() {
 	var nulllab_vk16k33 = this.getFieldValue('nulllab_vk16k33');  // 
 	var nulllab_data = Blockly.Arduino.valueToCode(this, 'nulllab_data', Blockly.Arduino.ORDER_ATOMIC);
 	Blockly.Arduino.definitions_['nulllab_vk16k33'] = '#include <digit_display.h>\n';
 	return nulllab_vk16k33 + ".ShowNumber(double(" + nulllab_data + "), 3);\n";
 }
 
 Blockly.Arduino.forBlock['nulllab_vk16k33_showColon'] = function() {
 	var nulllab_vk16k33 = this.getFieldValue('nulllab_vk16k33');  // 
 	var colonFlag = this.getFieldValue('colonFlag');
 	Blockly.Arduino.definitions_['nulllab_vk16k33'] = '#include <digit_display.h>\n';
 	return nulllab_vk16k33 + ".ShowColon(" + colonFlag + ");\n";
 }

//OLED初始化
Blockly.Arduino.forBlock['nulllab_OLED_Init'] = function () {
	var nulllab_oled = this.getFieldValue('nulllab_oled');
    Blockly.Arduino.definitions_['OLED_MODE'] = '#include <EM_OLED.h>\n';
	Blockly.Arduino.definitions_['OLED_MODE_' + nulllab_oled] = 'EM_OLED ' + nulllab_oled + '(U8G2_R0, U8X8_PIN_NONE);\n';
    Blockly.Arduino.setups_['OLED_INIT_' + nulllab_oled] =nulllab_oled + '.begin();\n  ' + nulllab_oled + '.enableUTF8Print();\n';
    return '';
};

Blockly.Arduino.forBlock['nulllab_OLED_Model'] = function () {
	var nulllab_oled = this.getFieldValue('nulllab_oled');
	Blockly.Arduino.definitions_['OLED_MODE'] = '#include <EM_OLED.h>\n';
	Blockly.Arduino.definitions_['OLED_MODE_' + nulllab_oled] = 'EM_OLED ' + nulllab_oled + '(U8G2_R0, U8X8_PIN_NONE);\n';
    Blockly.Arduino.setups_['OLED_INIT_' + nulllab_oled] =nulllab_oled + '.begin();\n  ' + nulllab_oled + '.enableUTF8Print();\n';
    var branch = Blockly.Arduino.statementToCode(this, "DO");
    var code = `${nulllab_oled}.firstPage();\ndo\n{\n${branch}\n}while(${nulllab_oled}.nextPage());\n`;
    return code;
};

//OLED显示字符串
Blockly.Arduino.forBlock['nulllab_OLED_Display_String']  = function () {
	var nulllab_oled = this.getFieldValue('nulllab_oled');
    var horizontal = Blockly.Arduino.valueToCode(this,'nulllab_horizontal',Blockly.Arduino.ORDER_ATOMIC);
    var longitudinal = Blockly.Arduino.valueToCode(this,'nulllab_longitudinal',Blockly.Arduino.ORDER_ATOMIC);
    var Content = Blockly.Arduino.valueToCode(this,'nulllab_content',Blockly.Arduino.ORDER_ATOMIC);
    var Size = this.getFieldValue('size');
    var code = nulllab_oled + '.ShowFont(' + horizontal +', ' + longitudinal + ', ' + Content + ');\n';
    return code;
};

// OLED_Display_String_row
Blockly.Arduino.forBlock['nulllab_OLED_Display_String_Row'] = function () {
  var nulllab_oled = this.getFieldValue('nulllab_oled');
  var horizontal = Blockly.Arduino.valueToCode(this,'nulllab_horizontal',Blockly.Arduino.ORDER_ATOMIC);
  var row = this.getFieldValue('nulllab_row');
  var Content = Blockly.Arduino.valueToCode(this,'nulllab_content',Blockly.Arduino.ORDER_ATOMIC);
  var Size = this.getFieldValue('nulllab_size');
  row = row * 16;
  var code = nulllab_oled + '.ShowFont(' + horizontal +', ' + row + ', ' + Content + ');\n';
  return code;
};

//压力传感器
Blockly.Arduino.forBlock['nulllab_pressure'] = function () {
	var pin = this.getFieldValue('nulllab_pin');
	// Blockly.Arduino.definitions_['Pressure'] = 'int fsrPin = ' + pin + ';\n';
	var code = 'analogRead(' + pin + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//水蒸气传感器
Blockly.Arduino.forBlock['nulllab_water_vapor'] = function () {
	var pin = this.getFieldValue('nulllab_pin');
	// Blockly.Arduino.definitions_['Water_Vapor'] = 'int WaterVaporPin = ' + pin + ';\n';
	var code = 'analogRead(' + pin + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//手柄摇杆传感器
Blockly.Arduino.forBlock['nulllab_hand_jobone_header_x'] = function(){
	var deacting_one_x=this.getFieldValue('nulllab_decasx');
	Blockly.Arduino.definitions_['define_maker'] = '#include <JoystickHandle.h>\n';
	var nulllab_joystick = this.getFieldValue('nulllab_joystick');
	Blockly.Arduino.definitions_['define_maker_' + nulllab_joystick] = 'JoystickHandle ' + nulllab_joystick + '(JOYSTICK_I2C_ADDR);\n';
	var value_Speed_x = nulllab_joystick + '.AnalogRead_X()';
	var value_Speed_y= nulllab_joystick + '.AnalogRead_Y()';
	var code = '';
	if (deacting_one_x== 1) {
		code = value_Speed_x
	}else {
		code = value_Speed_y
	}
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//手柄键盘传感器
Blockly.Arduino.forBlock['nulllab_hand_botton_fore'] = function(){
	Blockly.Arduino.definitions_['define_maker'] = '#include <JoystickHandle.h>\n';
	var nulllab_joystick = this.getFieldValue('nulllab_joystick');
	Blockly.Arduino.definitions_['define_maker_' + nulllab_joystick] = 'JoystickHandle ' + nulllab_joystick + '(JOYSTICK_I2C_ADDR);\n';
	var btn_four = this.getFieldValue('nulllab_btnfour');
	var btn_lasts = this.getFieldValue('nulllab_btnlast');
	var buttonjoge = nulllab_joystick + '.Get_Button_Status('+btn_four+')';
	var code=buttonjoge+'=='+btn_lasts;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
// 手柄初始化
Blockly.Arduino.forBlock['nulllab_hand_initalize_header']=function(){
	var nulllab_joystick=this.getFieldValue('nulllab_joystick');
	Blockly.Arduino.definitions_['define_maker'] = '#include <JoystickHandle.h>\n';
	Blockly.Arduino.definitions_['define_maker_' + nulllab_joystick] = 'JoystickHandle ' + nulllab_joystick + '(JOYSTICK_I2C_ADDR);\n';
	var code='';
	return code;
};

// 手柄左右摇杆
Blockly.Arduino.forBlock['nulllab_hand_lr_press']= function(){
	Blockly.Arduino.definitions_['define_maker'] = '#include <JoystickHandle.h>\n';
	var nulllab_joystick=this.getFieldValue('nulllab_joystick');
	Blockly.Arduino.definitions_['define_maker_' + nulllab_joystick] = 'JoystickHandle ' + nulllab_joystick + '(JOYSTICK_I2C_ADDR);\n';
	
	var deacting_lr=this.getFieldValue('nulllab_lrpre');
	var lr_press=this.getFieldValue('nulllab_jobone');
	var code = '';
	if(lr_press == 1){
		code= nulllab_joystick + '.'+deacting_lr+'nalogRead_X()'
	}else{
		code=nulllab_joystick + '.'+deacting_lr+'nalogRead_Y()'
	}
   	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 指南针
Blockly.Arduino.forBlock['nulllab_compass_star']=function() {
	var nulllab_compass=this.getFieldValue('nulllab_compass');
	var compass_xyz='int ' + nulllab_compass + '_readCompass(int type){\n  int x, y, z;\n  int azimuth, result;\n  ' + nulllab_compass + '.read(&x, &y, &z, &azimuth);\n  if(type == 1){\n    result = x;\n  }else if(type == 2) {\n    result = y;\n  }else if(type == 3) {\n    result = z;\n  }else {\n    result = azimuth;\n  }\n  return result;\n}\n';
	Blockly.Arduino.setups_['setup_compass_star'] ='Wire.begin();\n  ' + nulllab_compass + '.init();\n';
	Blockly.Arduino.definitions_['define_compass'] = '#include  <MechaQMC5883.h>\n';
	Blockly.Arduino.definitions_['define_compass_' + nulllab_compass] = 'MechaQMC5883 ' + nulllab_compass + ';\n' + compass_xyz;
    var code='';
	return code;
}

Blockly.Arduino.forBlock['nulllab_compass_vue']=function() {
	var nulllab_compass=this.getFieldValue('nulllab_compass');
	var compass_xyz='int ' + nulllab_compass + '_readCompass(int type){\n  int x, y, z;\n  int azimuth, result;\n  ' + nulllab_compass + '.read(&x, &y, &z, &azimuth);\n  if(type == 1){\n    result = x;\n  }else if(type == 2) {\n    result = y;\n  }else if(type == 3) {\n    result = z;\n  }else {\n    result = azimuth;\n  }\n  return result;\n}\n';
	Blockly.Arduino.setups_['setup_compass_star'] ='Wire.begin();\n  ' + nulllab_compass + '.init();\n';
	Blockly.Arduino.definitions_['define_compass'] = '#include  <MechaQMC5883.h>\n';
	Blockly.Arduino.definitions_['define_compass_' + nulllab_compass] = 'MechaQMC5883 ' + nulllab_compass + ';\n' + compass_xyz;
	var compass_v=this.getFieldValue('nulllab_capa');
    var code=nulllab_compass + "_readCompass(" + compass_v + ")";
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

// nulllab_five_infrared_tracking
Blockly.Arduino.forBlock['nulllab_fiveInfraredTracking']=function() {
	var nulllab_fiveInfraredTracking = this.getFieldValue('nulllab_fiveInfraredTracking');
	Blockly.Arduino.definitions_['define_fiveInfraredTracking'] = '#include <EM_InfraredTracking.h>\n';
	Blockly.Arduino.definitions_['define_fiveInfraredTracking_' + nulllab_fiveInfraredTracking] = 'InfraredTracking ' + nulllab_fiveInfraredTracking + '(INFRARED_I2C_ADDR);\n';
	var nulllab_infrared = this.getFieldValue('nulllab_infrared');
    // var code=compass_v+"_values";
	var code = "";
	if(nulllab_infrared == 0) {
		code = nulllab_fiveInfraredTracking + ".GetState() & 0x01";
	} else if(nulllab_infrared == 1) {
		code = nulllab_fiveInfraredTracking + ".GetState() & 0x02";
	} else if(nulllab_infrared == 2) {
		code = nulllab_fiveInfraredTracking + ".GetState() & 0x04";
	} else if(nulllab_infrared == 3) {
		code = nulllab_fiveInfraredTracking + ".GetState() & 0x08";
	} else if(nulllab_infrared == 4) {
		code = nulllab_fiveInfraredTracking + ".GetState() & 0x10";
	}
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

// nulllab_fiveInfraredTrackingData
Blockly.Arduino.forBlock['nulllab_fiveInfraredTrackingData']=function() {
	var nulllab_fiveInfraredTracking = this.getFieldValue('nulllab_fiveInfraredTracking');
	Blockly.Arduino.definitions_['define_fiveInfraredTracking'] = '#include <EM_InfraredTracking.h>\n';
	Blockly.Arduino.definitions_['define_fiveInfraredTracking_' + nulllab_fiveInfraredTracking] = 'InfraredTracking ' + nulllab_fiveInfraredTracking + '(INFRARED_I2C_ADDR);\n';
	return [nulllab_fiveInfraredTracking + '.GetState()', Blockly.Arduino.ORDER_ATOMIC];
}

// 五路循迹 V2
Blockly.Arduino.forBlock['nulllab_lineTracker_v2']=function() {
	var nulllab_fiveInfraredTracking_V2=this.getFieldValue('nulllab_fiveInfraredTracking_V2');
	var nulllab_tracker_addr = Blockly.Arduino.valueToCode(this,'nulllab_tracker_addr', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_LineTracker'] = '#include <line_tracker.h>\n';
    Blockly.Arduino.definitions_['define_lineTracker_' + nulllab_fiveInfraredTracking_V2] = 'LineTracker ' + nulllab_fiveInfraredTracking_V2 + '(' + nulllab_tracker_addr + ');\n';
	return '';
}

// nulllab_setSensitivity_v2
Blockly.Arduino.forBlock['nulllab_setSensitivity_v2'] = function() {
	var nulllab_fiveInfraredTracking_V2 = this.getFieldValue('nulllab_fiveInfraredTracking_V2');
	var nulllab_sensitivity = Blockly.Arduino.valueToCode(this,'nulllab_sensitivity', Blockly.Arduino.ORDER_ATOMIC);
	return nulllab_fiveInfraredTracking_V2 + '.SetSensitivity(' + nulllab_sensitivity + ');\n';
}

// nulllab_getSensorValues_v2
Blockly.Arduino.forBlock['nulllab_getSensorValues_v2'] = function() {
	var nulllab_fiveInfraredTracking = this.getFieldValue('nulllab_fiveInfraredTracking_V2');
	return [nulllab_fiveInfraredTracking + '.GetSensorValues()', Blockly.Arduino.ORDER_ATOMIC];
}

// nulllab_getSensorStates_v2
Blockly.Arduino.forBlock['nulllab_getSensorStates_v2'] = function() {
	var nulllab_fiveInfraredTracking = this.getFieldValue('nulllab_fiveInfraredTracking_V2');
	return [nulllab_fiveInfraredTracking + '.GetSensorStates()', Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.forBlock['nulllab_getSensorValues_v2_index'] = function() {
	var nulllab_fiveInfraredTracking = this.getFieldValue('nulllab_fiveInfraredTracking_V2');
	var index = this.getFieldValue('index');
	return [nulllab_fiveInfraredTracking + '.GetSensorValue(' + index + ')', Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.forBlock['nulllab_getSensorStates_v2_index'] = function() {
	var nulllab_fiveInfraredTracking = this.getFieldValue('nulllab_fiveInfraredTracking_V2');
	var index = this.getFieldValue('index');
	return [nulllab_fiveInfraredTracking + '.GetSensorState(' + index + ')',Blockly.Arduino.ORDER_ATOMIC];
}

// PM2.5激光粉尘传感器
Blockly.Arduino.forBlock['nulllab_PM25_sensor_data']=function() {
	var nulllab_pmValue = this.getFieldValue('nulllab_pmValue');
	Blockly.Arduino.definitions_['define_pm25'] = '#include <PM25Sensor.h>\n';
	Blockly.Arduino.definitions_['define_pm25_domain'] = 'PM25Sensor pm01;\n';
	Blockly.Arduino.setups_['setup_gyro'] = 'pm01.begin(&Serial);\n';
	return ['pm01.' + nulllab_pmValue + '()', Blockly.Arduino.ORDER_ATOMIC];
}


// 陀螺仪
Blockly.Arduino.forBlock['nulllab_gyro_init']=function(){
	Blockly.Arduino.definitions_['define_gyro'] = '#include <Mpu6050Module.h>\nMpu6050Module mpu6050;\n';
	Blockly.Arduino.setups_['setup_gyro'] = 'mpu6050.InitMpu6050();\n';
	var code='mpu6050.GetInclination();\n';
	return code;
}

Blockly.Arduino.forBlock['nulllab_gyro_getvalue']=function(){
	var gyros = this.getFieldValue('nulllab_gyrov');
	var code='mpu6050.'+gyros;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

//手势传感器
Blockly.Arduino.forBlock['nulllab_gesture_sensor_init'] = function(){
	var gestureName = this.getFieldValue('nulllab_gestureSensor');
	var gesture_addr = Blockly.Arduino.valueToCode(this,'nulllab_gesture_addr',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_handleStatus_init'] = '#include <gesture_recognizer.h>\n';
	Blockly.Arduino.definitions_['define_handleStatus_init_' + gestureName] = 'GestureRecognizer ' + gestureName + '(' + gesture_addr + ');\n' ;
	Blockly.Arduino.setups_['setup_gesture_' + gestureName] = gestureName + '.Setup();\n';
	return '';
}

//手势传感器
Blockly.Arduino.forBlock['nulllab_get_gesture'] = function(){
	var gestureName = this.getFieldValue('nulllab_gestureSensor');
	Blockly.Arduino.definitions_['define_handleStatus_init'] = '#include <gesture_recognizer.h>\n';
	var code = gestureName + '.GetGesture()\n';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.forBlock['nulllab_gesture_sensor_status'] = function(){
	var gestureName = this.getFieldValue('nulllab_gestureSensor');
	var gestureStatus = this.getFieldValue('nulllab_getsture_status');
	Blockly.Arduino.definitions_['define_handleStatus_init'] = '#include <gesture_recognizer.h>\n';
	return [gestureStatus, Blockly.Arduino.ORDER_ATOMIC];
}

//mqtt init
Blockly.Arduino.forBlock['nulllab_esp8266_init']=function(){
	var tx = this.getFieldValue('nulllab_iotTx');
	var rx = this.getFieldValue('nulllab_iotRX');
	Blockly.Arduino.definitions_['define_esp8266'] = '#include <WiFiEsp.h>\n#include <SoftwareSerial.h>\n';
	Blockly.Arduino.definitions_['define_esp8266' + tx + rx] = 'SoftwareSerial esp8266_serial(' + tx + ', ' + rx + ');\n';
	return '';
}

//mqtt wifi
Blockly.Arduino.forBlock['nulllab_esp8266_wifi']=function(){
	var ssid = Blockly.Arduino.valueToCode(this,'nulllab_wifiSsid',Blockly.Arduino.ORDER_ATOMIC);
	var pwd = Blockly.Arduino.valueToCode(this,'nulllab_wifiPwd',Blockly.Arduino.ORDER_ATOMIC);
	var host = Blockly.Arduino.valueToCode(this,'nulllab_host',Blockly.Arduino.ORDER_ATOMIC);
	var port = Blockly.Arduino.valueToCode(this,'nulllab_port',Blockly.Arduino.ORDER_ATOMIC);
	var productKey = Blockly.Arduino.valueToCode(this,'nulllab_productKey',Blockly.Arduino.ORDER_ATOMIC);
	var deviceName = Blockly.Arduino.valueToCode(this,'nulllab_deviceName',Blockly.Arduino.ORDER_ATOMIC);
	var deviceSecret = Blockly.Arduino.valueToCode(this,'nulllab_deviceSecret',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_WifiEspMqtt'] = '#include <WiFiEspMqtt.h>\n';
	Blockly.Arduino.definitions_['define_WifiEspMqttObj'] = 'WiFiEspMqtt esp8266;\n';
	Blockly.Arduino.definitions_['define_esp8266Wifi'] = 'char ssid[] = ' + ssid + ';\nchar passwd[] = ' + pwd + ';\n';
	Blockly.Arduino.definitions_['define_esp8266Host'] = 'char aliyun_mqtt_host[] = ' + host + ';\nuint16_t aliyun_mqtt_port = ' + port + ";\n";
	Blockly.Arduino.definitions_['define_esp8266Param'] = 'char product_key[] = ' + productKey + ';\nchar device_name[] = ' + deviceName + ";\nchar device_secret[] = " + deviceSecret + ";\n";
	Blockly.Arduino.setups_['setup_esp8266Setup'] = 'esp8266_serial.begin(9600);\n  WiFi.init(&esp8266_serial);\n  WiFi.begin(ssid, passwd);\nesp8266.mqtt_connect_aliyun(aliyun_mqtt_host, aliyun_mqtt_port, product_key, device_name, device_secret, 0);\n';	
	return '';
}

//mqtt host
Blockly.Arduino.forBlock['nulllab_esp8266_host']=function(){
	var host = Blockly.Arduino.valueToCode(this,'nulllab_host',Blockly.Arduino.ORDER_ATOMIC);
	var port = Blockly.Arduino.valueToCode(this,'nulllab_port',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_esp8266Host'] = 'char aliyun_mqtt_host[] = ' + host + ';\nuint16_t aliyun_mqtt_port = ' + port + ";\n";
	return '';
}

//mqtt param
Blockly.Arduino.forBlock['nulllab_esp8266_setParam']=function(){
	var productKey = Blockly.Arduino.valueToCode(this,'nulllab_productKey',Blockly.Arduino.ORDER_ATOMIC);
	var deviceName = Blockly.Arduino.valueToCode(this,'nulllab_deviceName',Blockly.Arduino.ORDER_ATOMIC);
	var deviceSecret = Blockly.Arduino.valueToCode(this,'nulllab_deviceSecret',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_esp8266Param'] = 'char product_key[] =' + productKey + ';\nchar device_name[] = ' + deviceName + ";\nchar device_secret[] = " + deviceSecret + ";\n";
	Blockly.Arduino.setups_['setup_esp8266Setup'] = 'Serial.begin(115200);\n  esp8266_serial.begin(9600);\n  WiFi.init(&esp8266_serial);\n    WiFi.begin(ssid, passwd);\nesp8266.mqtt_connect_aliyun(aliyun_mqtt_host, aliyun_mqtt_port, product_key, device_name, device_secret, 0);\n';	
	return '';
}

//esp8266_connection
Blockly.Arduino.forBlock['nulllab_esp8266_connection']=function(){
	var code = 'WiFi.begin(ssid, passwd);\n';
	return code;
}

//mqtt isConnection
Blockly.Arduino.forBlock['nulllab_esp8266_isConnection']=function(){
	var code = 'WiFi.status() == WL_CONNECTED';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

//mqtt sub
Blockly.Arduino.forBlock['nulllab_esp8266_sub']=function(){
	var subStr = Blockly.Arduino.valueToCode(this,'nulllab_subStr',Blockly.Arduino.ORDER_ATOMIC); 
	var qos = this.getFieldValue('nulllab_qos');
	return 'esp8266.mqtt_sub(String(' + subStr + ').c_str(), ' + qos + ');\n';
}

//mqtt pub
Blockly.Arduino.forBlock['nulllab_esp8266_pub']=function(){
	var pubStr = Blockly.Arduino.valueToCode(this,'nulllab_pubStr',Blockly.Arduino.ORDER_ATOMIC); 
	var data = Blockly.Arduino.valueToCode(this,'nulllab_data',Blockly.Arduino.ORDER_ATOMIC); 
	var qos = this.getFieldValue('nulllab_qos');
	return 'esp8266.mqtt_public(' + pubStr + ', String(' + data + ').c_str(), ' + qos + ');\n';
}

//mqtt isConnection
Blockly.Arduino.forBlock['nulllab_esp8266_isReceive']=function(){
	var code = 'esp8266.mqtt_receive()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

//mqtt pub
Blockly.Arduino.forBlock['nulllab_esp8266_getSubMsg'] = function(){
	var msgType = this.getFieldValue('nulllab_msgType');
	var result = msgType == 1?"esp8266.mqtt_topic":"esp8266.mqtt_message";
	return [result, Blockly.Arduino.ORDER_ATOMIC];
}

//mqtt other host
Blockly.Arduino.forBlock['nulllab_esp8266_otherHost'] = function(){
	var ssid = Blockly.Arduino.valueToCode(this,'nulllab_wifiSsid',Blockly.Arduino.ORDER_ATOMIC);
	var pwd = Blockly.Arduino.valueToCode(this,'nulllab_wifiPwd',Blockly.Arduino.ORDER_ATOMIC);
	var host = Blockly.Arduino.valueToCode(this,'nulllab_host',Blockly.Arduino.ORDER_ATOMIC);
	var port = Blockly.Arduino.valueToCode(this,'nulllab_port',Blockly.Arduino.ORDER_ATOMIC);
	var userClientId = Blockly.Arduino.valueToCode(this, 'nulllab_userClientId', Blockly.Arduino.ORDER_ATOMIC);
	var username = Blockly.Arduino.valueToCode(this, 'nulllab_username', Blockly.Arduino.ORDER_ATOMIC);
	var password1 = Blockly.Arduino.valueToCode(this, 'nulllab_password', Blockly.Arduino.ORDER_ATOMIC);
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
Blockly.Arduino.forBlock['nulllab_esp8266_userConfigParam'] = function(){
	var userClientId = Blockly.Arduino.valueToCode(this, 'nulllab_userClientId', Blockly.Arduino.ORDER_ATOMIC);
	var username = Blockly.Arduino.valueToCode(this, 'nulllab_username', Blockly.Arduino.ORDER_ATOMIC);
	var password1 = Blockly.Arduino.valueToCode(this, 'nulllab_password', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_esp8266UserConfig'] = 'char mqtt_client_id[] = ' + userClientId + ';\nchar mqtt_username[] = ' + username + ";\nchar mqtt_password[] = " + password1 + ";\n";
	Blockly.Arduino.setups_['setup_esp8266UserConfig'] = 'esp8266.mqtt_usercfg(mqtt_client_id, mqtt_username, mqtt_password);\n';	
	return '';
}

var httpHost = "";
var httpPort = 0;
//http host
Blockly.Arduino.forBlock['nulllab_esp8266_httpHost'] = function(){
	var ssid = Blockly.Arduino.valueToCode(this,'nulllab_wifiSsid',Blockly.Arduino.ORDER_ATOMIC);
	var pwd = Blockly.Arduino.valueToCode(this,'nulllab_wifiPwd',Blockly.Arduino.ORDER_ATOMIC);
	var host = Blockly.Arduino.valueToCode(this,'nulllab_httpHost',Blockly.Arduino.ORDER_ATOMIC);
	var port = Blockly.Arduino.valueToCode(this,'nulllab_httpPort',Blockly.Arduino.ORDER_ATOMIC);
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
Blockly.Arduino.forBlock['nulllab_esp8266_connectHttpServer']=function(){
	var code = 'httpClient.connect(http_host, http_port)';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

//esp8266_get
Blockly.Arduino.forBlock['nulllab_esp8266_get']=function(){
	var getStr = Blockly.Arduino.valueToCode(this,'nulllab_getStr',Blockly.Arduino.ORDER_ATOMIC);
	var timeout = Blockly.Arduino.valueToCode(this,'nulllab_timeout',Blockly.Arduino.ORDER_ATOMIC);
	var code = 'httpClient.readData(String(' + getStr + ').c_str(), &esp8266_serial, ' + timeout + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.forBlock['nulllab_init_i2c_expansion_board'] = function() {
	var i2cName = this.getFieldValue('nulllab_i2cBoard');
	var i2cAddr = Blockly.Arduino.valueToCode(this,'nulllab_i2cAddr',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_i2c_expansion_board' + i2cName] = '#include <gpio_expansion_board.h>\nGpioExpansionBoard ' + i2cName + '(' + i2cAddr + ');\n';
	return "";
}

Blockly.Arduino.forBlock['nulllab_set_i2c_expansion_board_mode'] = function() {
	var i2cName = this.getFieldValue('nulllab_i2cBoard');
	var pin = this.getFieldValue('nulllab_pin');
	var mode = this.getFieldValue('nulllab_mode');
	var code = i2cName + '.SetGpioMode(' + pin + ', ' + mode + ');\n';
	return code;
}

Blockly.Arduino.forBlock['nulllab_set_i2c_expansion_board_level'] = function() {
	var i2cName = this.getFieldValue('nulllab_i2cBoard');
	var pin = this.getFieldValue('nulllab_pin');
	var level = this.getFieldValue('nulllab_level');
	var code = i2cName + '.SetGpioLevel(' + pin + ', ' + level + ');\n';
	return code;
}

Blockly.Arduino.forBlock['nulllab_get_i2c_expansion_board_level'] = function() {
	var i2cName = this.getFieldValue('nulllab_i2cBoard');
	var pin = this.getFieldValue('nulllab_pin');
	var code = i2cName + '.GetGpioLevel(' + pin + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.forBlock['nulllab_get_i2c_expansion_board_adc'] = function() {
	var i2cName = this.getFieldValue('nulllab_i2cBoard');
	var pin = this.getFieldValue('nulllab_pin');
	var code = i2cName + '.GetGpioAdcValue(' + pin + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.forBlock['nulllab_set_i2c_expansion_board_PWM_freq'] = function() {
	var i2cName = this.getFieldValue('nulllab_i2cBoard');
	var freq = Blockly.Arduino.valueToCode(this, 'nulllab_i2cPwmFreq', Blockly.Arduino.ORDER_ATOMIC);
	var code = i2cName + '.SetPwmFrequency(' + freq + ');\n';
	return code;
}

Blockly.Arduino.forBlock['nulllab_set_i2c_expansion_board_PWM_duty']  = function() {
	var i2cName = this.getFieldValue('nulllab_i2cBoard');
	var pin = this.getFieldValue('nulllab_pin');
	var duty = Blockly.Arduino.valueToCode(this,'nulllab_i2cPwmDuty',Blockly.Arduino.ORDER_ATOMIC);
	duty = duty > 4095?4095:duty;
	var code = i2cName + '.SetPwmDuty(' + pin + ' ,' + duty + ');\n';
	return code;
}

Blockly.Arduino.forBlock['nulllab_set_i2c_expansion_board_servo'] = function() {
	var i2cName = this.getFieldValue('nulllab_i2cBoard');
	var pin = this.getFieldValue('nulllab_pin');
	var angle = Blockly.Arduino.valueToCode(this,'nulllab_i2cServoAngle',Blockly.Arduino.ORDER_ATOMIC);
	var code = i2cName + '.SetServoAngle(' + pin + ' ,' + angle + ');\n';
	return code;
}

//初始化RFID
Blockly.Arduino.forBlock['nulllab_init_RFID_I2C']  = function () {

	Blockly.Arduino.definitions_['define_Emakefun_RFID'] = '#include "Emakefun_RFID.h"';
	Blockly.Arduino.definitions_['define_Wire'] = '#include "Wire.h"\n';
	var nulllab_RFID = Blockly.Arduino.valueToCode(this,'nulllab_RFID',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['Emakefun_RFID'] = 'MFRC522 ' + 'mfrc522(' + nulllab_RFID + ');\n';

	Blockly.Arduino.setups_['setup_RFID_Serial'] = 'Serial.begin(115200);';
	Blockly.Arduino.setups_['setup_RFID_Wire'] = 'Wire.begin();';
	Blockly.Arduino.setups_['setup_RFID_PCD_Init'] = 'mfrc522.PCD_Init();';
	
	var code = '';
	
    return code;
};

//RFID检测到卡片？
Blockly.Arduino.forBlock['nulllab_RFID_detection'] = function () {

    var code = '(mfrc522.PICC_IsNewCardPresent() && mfrc522.PICC_ReadCardSerial())';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//RFID读取UID
Blockly.Arduino.forBlock['nulllab_RFID_ReadUID'] = function () {

    var code = 'mfrc522.Read_Uid()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

})();