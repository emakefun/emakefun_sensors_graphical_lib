
'use strict';
goog.provide('Blockly.Arduino.Mqtt');
goog.require('Blockly.Arduino');


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

//钢琴模块
Blockly.Arduino.forBlock['nulllab_initPiano_v2'] = function () {
	var dropdown_piano = this.getFieldValue('nulllab_piano');
    var value_clk = Blockly.Arduino.valueToCode(this, 'nulllab_clk', Blockly.Arduino.ORDER_ATOMIC);
    var value_dio = Blockly.Arduino.valueToCode(this, 'nulllab_dio', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['include_emPiano'] = '#include <EM_Piano.h>\n';
	Blockly.Arduino.definitions_['include_ph_piano_' + value_clk + value_dio] = "Piano mPiano_" + value_clk + value_dio + ";\n";
	Blockly.Arduino.setups_['setup_ph_piano_' + value_clk + value_dio] = 'mPiano_'  + value_clk + value_dio + '.initPiano(' + value_clk + ', ' + value_dio + ');\n';
	var code = 'mPiano_' + value_clk + value_dio + '.PressBsButton('+dropdown_piano+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

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
 	return nulllab_vk16k33 + ".ShowNumber(" + nulllab_data  + ");\n";
 }
 
 Blockly.Arduino.forBlock['nulllab_vk16k33_showColon'] = function() {
 	var nulllab_vk16k33 = this.getFieldValue('nulllab_vk16k33');  // 
 	var colonFlag = this.getFieldValue('colonFlag');
 	Blockly.Arduino.definitions_['nulllab_vk16k33'] = '#include <digit_display.h>\n';
 	return nulllab_vk16k33 + ".ShowColon(" + colonFlag + ");\n";
 }

//Max7219点阵初始化
Blockly.Arduino.forBlock['nulllab_MAX7219_init'] = function () {
    var pin_mosi = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
	var pin_cs = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
	var pin_clk = Blockly.Arduino.valueToCode(this, 'PIN3', Blockly.Arduino.ORDER_ATOMIC);
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    var hDisplays = Blockly.Arduino.valueToCode(this, 'hDisplays', Blockly.Arduino.ORDER_ATOMIC);
    var vDisplays = Blockly.Arduino.valueToCode(this, 'vDisplays', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
    Blockly.Arduino.definitions_['include_Adafruit_GFX'] = '#include <Adafruit_GFX.h>';
    Blockly.Arduino.definitions_['include_Max72xxPanel'] = '#include <EMMax72xxPanel.h>';
    Blockly.Arduino.definitions_['var_declare_Max72xxPanel'] = 'EMMax72xxPanel ' + matrixName + ' = EMMax72xxPanel(' + pin_mosi + ',' + pin_clk + ',' + pin_cs + ',' + hDisplays + ',' + vDisplays + ');';
    var code = '';
    return code;
};

//点阵屏画点
Blockly.Arduino.forBlock['nulllab_display_Matrix_DrawPixel'] = function () {
    var matrixType = this.getFieldValue('TYPE');
    var write = this.getFieldValue('WRITE');
    var pos_x = Blockly.Arduino.valueToCode(this, 'XVALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
    var pos_y = Blockly.Arduino.valueToCode(this, 'YVALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    var dropdown_type = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
    if (matrixType == "HT16K33") {
        var code = matrixName + '.drawPixel(' + pos_x + ',7-' + pos_y + ',' + dropdown_type + ');\n'
    }
    else {
        var code = matrixName + '.drawPixel(' + pos_x + ',' + pos_y + ',' + dropdown_type + ');\n'
    }
    if (write !== 'OFF') {
        code += matrixName + '.write();\n';
    }
    return code;
};

//点阵屏滚动显示文本
Blockly.Arduino.forBlock['nulllab_display_Matrix_TEXT'] = function () {
    var matrixType = this.getFieldValue('TYPE');
    var matrixName = "myMatrix";
    var textString = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ASSIGNMENT);
    var speed = Blockly.Arduino.valueToCode(this, 'Speed', Blockly.Arduino.ORDER_ATOMIC);
    var code = matrixName + '.scrollMessage(' + textString + ',' + speed + ');\n'
    return code;
};

//点阵屏显示文本
Blockly.Arduino.forBlock['nulllab_display_Matrix_print'] = function () {
    var matrixType = this.getFieldValue('TYPE');
    var matrixName = "myMatrix";
    var write = this.getFieldValue('WRITE');
    var textString = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ASSIGNMENT);
    var code = matrixName + '.setCursor(0, 0);\n';
    code += matrixName + '.print(' + textString + ');\n';
    if (write !== 'OFF') {
        code += matrixName + '.write();\n';
    }
    return code;
};

//点阵屏显示_显示图案
Blockly.Arduino.forBlock['nulllab_display_Matrix_DisplayChar'] = function () {
    var matrixType = this.getFieldValue('TYPE');
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    var write = this.getFieldValue('WRITE');
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    var dotMatrixArray = Blockly.Arduino.valueToCode(this, 'LEDArray', Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.definitions_['var_declare_LEDArray'] = 'uint8_t  LEDArray[8];';
    var code = '';
    code += 'memcpy_P(&LEDArray, &' + dotMatrixArray + ', 8);\n';
    code += 'for(int index_i=0; index_i<8; index_i++)\n';
    code += '{\n'
    //code+='  LEDArray[index_i]='+dotMatrixArray+'[index_i];\n';
    code += '  for(int index_j=' + (NO) + '*8; index_j<' + (NO) + '*8+8; index_j++)\n'
    //code+='  for(int index_j=7; index_j>=0; index_j--)\n'
    code += '  {\n'
    code += '    if((LEDArray[index_i]&0x01)>0)\n';
    if (matrixType == "HT16K33") {
        code += '      ' + matrixName + '.drawPixel(index_j, index_i,1);\n';
        code += '    else\n      ' + matrixName + '.drawPixel(index_j, index_i,0);\n';
    }
    else {
        code += '      ' + matrixName + '.drawPixel(index_j, 7-index_i,1);\n';
        code += '    else\n      ' + matrixName + '.drawPixel(index_j, 7-index_i,0);\n';
    }
    code += '    LEDArray[index_i] = LEDArray[index_i]>>1;\n';
    code += '  }  \n';
    code += '}\n';
    if (write !== 'OFF') {
        code += matrixName + '.write();\n';
    }
    return code;
};

//点阵屏显示_点阵数组
Blockly.Arduino.forBlock['nulllab_display_Matrix_LedArray'] = function () {
    var varName = this.getFieldValue('VAR');
    var a = new Array();
    for (var i = 1; i < 9; i++) {
        a[i] = new Array();
        for (var j = 1; j < 9; j++) {
            a[i][9 - j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
        }
    }
    var code = '{';
    for (var i = 1; i < 9; i++) {
        var tmp = ""
        for (var j = 1; j < 9; j++) {
            tmp += a[i][j];
        }
        tmp = (parseInt(tmp, 2)).toString(16)
        if (tmp.length == 1) tmp = "0" + tmp;
        code += '0x' + tmp + ((i != 8) ? ',' : '');
    }
    code += '};';
    //Blockly.Arduino.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
    Blockly.Arduino.definitions_[varName] = "const uint8_t " + varName + "[8] PROGMEM =" + code;
    return [varName, Blockly.Arduino.ORDER_ATOMIC];
};

//点阵位图数据
Blockly.Arduino.forBlock['nulllab_display_matrix_bitmap'] = function () {
    var varName = this.getFieldValue('VAR');
    var a = this.getFieldValue('BITMAP');
    var code = '{';
    for (var i = 7; i >= 0; i--) {
        var tmp = "";
        for (var j = 7; j >= 0; j--) {
            tmp += a[i][j];
        }
        tmp = (parseInt(tmp, 2)).toString(16);
        if (tmp.length == 1) tmp = "0" + tmp;
        code += '0x' + tmp + ((i !== 0) ? ',' : '');
    }
    code += '};';
    Blockly.Arduino.definitions_[varName] = "const uint8_t " + varName + "[8] PROGMEM =" + code;
    return [varName, Blockly.Arduino.ORDER_ATOMIC];
};

//点阵设置亮度
Blockly.Arduino.forBlock['nulllab_display_Matrix_Brightness'] = function () {
    var matrixType = this.getFieldValue('TYPE');
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    var BRIGHTNESS = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);
    if (matrixType == "HT16K33") {
        var code = matrixName + '.setBrightness(' + BRIGHTNESS + ');\n';
    }
    else {
        var code = matrixName + '.setIntensity(' + BRIGHTNESS + ');\n';
    }
    return code;
};

//点阵 全亮/全灭/关闭/开启
Blockly.Arduino.forBlock['nulllab_display_Matrix_fillScreen'] = function () {
    var matrixType = this.getFieldValue('TYPE');
    var write = this.getFieldValue('WRITE');
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    var FILLSCREEN_TYPE = this.getFieldValue('FILLSCREEN_TYPE');
    var code = matrixName + '.' + FILLSCREEN_TYPE + ';\n'
    if (write !== 'OFF') {
        code += matrixName + '.write();\n';
    }
    return code;
};

//点阵屏旋转
Blockly.Arduino.forBlock['nulllab_display_Max7219_Rotation'] = function () {
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    var dropdown_type = this.getFieldValue('Rotation_TYPE');
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    var code = matrixName + '.setRotation(' + NO + ',' + dropdown_type + ');\n'
    return code;
};

//点阵屏位置
Blockly.Arduino.forBlock['nulllab_display_Max7219_setPosition'] = function () {
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    var X = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC);
    var Y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC);
    var code = matrixName + '.setPosition(' + NO + ',' + X + ',' + Y + ');\n'
    return code;
};

//点阵屏旋转
Blockly.Arduino.forBlock['nulllab_display_HT16K33_Rotation'] = function () {
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    var dropdown_type = this.getFieldValue('Rotation_TYPE');
    var code = matrixName + '.setRotation(4-' + dropdown_type + ');\n'
    return code;
};

//点阵屏 图案数组
Blockly.Arduino.forBlock['nulllab_LedArray'] = function () {
    var varName = this.getFieldValue('VAR');
    var a = new Array();
    for (var i = 1; i < 9; i++) {
        a[i] = new Array();
        for (var j = 1; j < 9; j++) {
            a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
        }
    }
    var code = '{';
    for (var i = 1; i < 9; i++) {
        var tmp = ""
        for (var j = 1; j < 9; j++) {
            tmp += a[i][j];
        }
        tmp = (parseInt(tmp, 2)).toString(16)
        if (tmp.length == 1) tmp = "0" + tmp;
        code += '0x' + tmp + ((i != 8) ? ',' : '');
    }
    code += '};\n';
    Blockly.Arduino.definitions_[varName] = "byte " + varName + "[]=" + code;
    return [varName, Blockly.Arduino.ORDER_ATOMIC];
};

//点阵屏预设图案
Blockly.Arduino.forBlock['nulllab_Matrix_img'] = function () {
    var dropdown_img_ = this.getFieldValue('img_');
    var code = '"' + dropdown_img_ + '"';
    code = '{';
    for (var i = 0; i < 15; i += 2) {
        code += '0x' + dropdown_img_.substr(i, 2) + ((i != 14) ? ',' : '');
    }
    code += '};\n';
    Blockly.Arduino.definitions_['matrix_img_' + dropdown_img_] = "const uint8_t " + 'matrix_img_' + dropdown_img_ + "[8] PROGMEM=" + code;
    return ['matrix_img_' + dropdown_img_, Blockly.Arduino.ORDER_ATOMIC];
};

//点阵屏 设置生效
Blockly.Arduino.forBlock['nulllab_display_Matrix_write'] = function () {
    return 'myMatrix.write();\n';
};

// nulllab_DM11I2CDcMotorDriver  
Blockly.Arduino.forBlock["nulllab_DM11I2CDcMotorDriver"] = function () {
	var dm11Addr = this.getFieldValue('DM11I2CAddress');
	var dm11Pin = this.getFieldValue('nulllab_dm11_pin');
	var direction = this.getFieldValue('nulllab_dm11_direction');
	var speed = Blockly.Arduino.valueToCode(this, 'nulllab_dm11_speed', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_dm11_i2c_define'] = `#include "dm11.h"\n#include "dm11_lib.h"\n`;
	Blockly.Arduino.definitions_['define_dm11_i2c_obj_' + dm11Addr] = `em::Dm11 g_dm11_${dm11Addr}(${dm11Addr});`;
	Blockly.Arduino.setups_['setup_dm11_i2c_dcMotor_' + dm11Addr] = `Wire.begin();\ng_dm11_${dm11Addr}.Init();\n`;
	var code = "";
	var pin1 = parseInt(dm11Pin) + 1;
	if (direction == 'forword'){
		code = `g_dm11_${dm11Addr}.PwmDuty(em::Dm11::kPwmChannel${dm11Pin}, 0);\ng_dm11_${dm11Addr}.PwmDuty(em::Dm11::kPwmChannel${pin1}, ${speed});\n`;
	}else if (direction == 'back'){
		code = `g_dm11_${dm11Addr}.PwmDuty(em::Dm11::kPwmChannel${pin1}, 0);\ng_dm11_${dm11Addr}.PwmDuty(em::Dm11::kPwmChannel${dm11Pin}, ${speed});\n`;
	}
	return code;
}

// 颜色传感器读值
Blockly.Arduino.forBlock['nulllab_color_view_v2_value'] = function () {
	var nulllab_colorView_v2 = this.getFieldValue('nulllab_color_view_v2');
	Blockly.Arduino.definitions_['EM_color_view_v2'] = '#include <color_sensor.h>';
	Blockly.Arduino.definitions_['EM_color_view_v2_' + nulllab_colorView_v2] = 'emakefun::ColorSensor ' + nulllab_colorView_v2 + ';'
	Blockly.Arduino.setups_["Wire_begin"] = "Wire.begin();";
	Blockly.Arduino.setups_['EM_color_view_v2_' + nulllab_colorView_v2] = nulllab_colorView_v2 + '.Initialize();';
	var Color = this.getFieldValue('nulllab_color');
	var code = nulllab_colorView_v2 + '.' + Color + '()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock["nulllab_readultrasonicdistance"] = function () {
	var pin = Blockly.Arduino.valueToCode(this, 'DISTANCEPIN', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_getDistance' ] = `
float GetUltrasonicDistance(int SignalPin)
{
  pinMode(SignalPin, OUTPUT);
  digitalWrite(SignalPin, HIGH);
  delayMicroseconds(100);
  digitalWrite(SignalPin, LOW);
  pinMode(SignalPin, INPUT);
  return pulseIn(SignalPin, HIGH, 500000) / 58.00;;
}`;
	return ['GetUltrasonicDistance(' + pin + ')',Blockly.Arduino.ORDER_ATOMIC];
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

// 五路循迹 V3
Blockly.Arduino.forBlock['nulllab_lineTracker_v3']=function() {
	var nulllab_fiveInfraredTracking_V3 = this.getFieldValue('nulllab_fiveInfraredTracking_V3');
	var nulllab_tracker_addr = Blockly.Arduino.valueToCode(this,'nulllab_tracker_addr', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_LineTracker'] = '#include <five_line_tracker_v3.h>';
    Blockly.Arduino.definitions_['define_lineTracker_' + nulllab_fiveInfraredTracking_V3] = 'emakefun::FiveLineTrackerV3 ' + nulllab_fiveInfraredTracking_V3 + '(Wire, ' + nulllab_tracker_addr + ');';
	Blockly.Arduino.setups_['define_lineTracker_' + nulllab_fiveInfraredTracking_V3] = `Wire.begin();\n  ${nulllab_fiveInfraredTracking_V3}.Initialize();\n`;
	return '';
}

// nulllab_high_thresholds_v3
Blockly.Arduino.forBlock['nulllab_high_thresholds_v3'] = function() {
	var nulllab_fiveInfraredTracking_V3 = this.getFieldValue('nulllab_fiveInfraredTracking_V3');
	var index = this.getFieldValue('index');
	var nulllab_high_threshold = Blockly.Arduino.valueToCode(this,'nulllab_high_threshold', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['define_lineTracker_high_threshold_' + nulllab_fiveInfraredTracking_V3] = nulllab_fiveInfraredTracking_V3 + '.HighThreshold(' + index + ', ' + nulllab_high_threshold + ');\n'
	return '';
}

// nulllab_low_thresholds_v3
Blockly.Arduino.forBlock['nulllab_low_thresholds_v3'] = function() {
	var nulllab_fiveInfraredTracking_V3 = this.getFieldValue('nulllab_fiveInfraredTracking_V3');
	var index = this.getFieldValue('index');
	var nulllab_low_threshold = Blockly.Arduino.valueToCode(this,'nulllab_low_threshold', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['define_lineTracker_low_threshold_' + nulllab_fiveInfraredTracking_V3] = nulllab_fiveInfraredTracking_V3 + '.LowThreshold(' + index + ', ' + nulllab_low_threshold + ');\n'
	return '';
}

Blockly.Arduino.forBlock['nulllab_getSensorValues_v3_index'] = function() {
	var nulllab_fiveInfraredTracking = this.getFieldValue('nulllab_fiveInfraredTracking_V3');
	var index = this.getFieldValue('index');
	return [nulllab_fiveInfraredTracking + '.AnalogValue(' + index + ')', Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.forBlock['nulllab_getSensorStates_v3_index'] = function() {
	var nulllab_fiveInfraredTracking = this.getFieldValue('nulllab_fiveInfraredTracking_V3');
	var index = this.getFieldValue('index');
	return [nulllab_fiveInfraredTracking + '.DigitalValue(' + index + ')',Blockly.Arduino.ORDER_ATOMIC];
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
	var freq = Blockly.Arduino.valueToCode(this,'nulllab_i2cPwmFreq',Blockly.Arduino.ORDER_ATOMIC);
	var code = i2cName + '.SetPwmFrequency(' + freq + ');\n';
	return code;
}

Blockly.Arduino.forBlock['nulllab_set_i2c_expansion_board_PWM_duty']  = function() {
	var i2cName = this.getFieldValue('nulllab_i2cBoard');
	var pin = this.getFieldValue('nulllab_pin');
	var duty = Blockly.Arduino.valueToCode(this,'nulllab_i2cPwmDuty',Blockly.Arduino.ORDER_ATOMIC);
	duty = duty;
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

Blockly.Arduino.forBlock['emakefun_ps3_mac_init'] = function() {
    Blockly.Arduino.definitions_['include_ESP32_PS3'] = '#include <Ps3Controller.h>\n';
	var nulllab_ps3_mac = Blockly.Arduino.valueToCode(this,'nulllab_ps3_mac', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_esp32_ps3'] = `Ps3.begin(${nulllab_ps3_mac});\n`;
    // var code = "Ps3.getAddress()";
	return "";
};

Blockly.Arduino.forBlock['emakefun_get_esp32_mac'] = function() {
    Blockly.Arduino.definitions_['include_ESP32_PS3'] = '#include <Ps3Controller.h>\n';
    //Blockly.Arduino.setups_['setup_esp32_ps3'] = 'Ps3.begin();\n';
    var code = "Ps3.getAddress()";
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock['emakefun_esp32_isConnect'] = function() {
    Blockly.Arduino.definitions_['include_ESP32_PS3'] = '#include <Ps3Controller.h>\n';
    // Blockly.Arduino.setups_['setup_esp32_ps3'] = 'Ps3.begin();\n';
    var code = "Ps3.isConnected()";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock['emakefun_esp32_get_button'] = function() {
  Blockly.Arduino.definitions_['include_ESP32_PS3'] = '#include <Ps3Controller.h>\n';
  //Blockly.Arduino.setups_['setup_esp32_ps3'] = 'Ps3.begin();\n';
  var button = this.getFieldValue('button');
  var status = this.getFieldValue('status');
  var code = "";
  if (status == "analog_changed") {
    if (button == "start" || button == "select" || button == "l3" || button == "r3" ) {
      code = "";
    }else {
      code = "Ps3.event.analog_changed.button." + button;
    }
  } else {
    code = "Ps3.event." + status + "." + button;
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock['emakefun_esp32_loop_get_button'] = function() {
  Blockly.Arduino.definitions_['include_ESP32_PS3'] = '#include <Ps3Controller.h>\n';
  //Blockly.Arduino.setups_['setup_esp32_ps3'] = 'Ps3.begin();\n';
  var button = this.getFieldValue('button');
  var code = "Ps3.data.button." + button;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock['emakefun_esp32_get_rock_analog'] = function() {
  Blockly.Arduino.definitions_['include_ESP32_PS3'] = '#include <Ps3Controller.h>\n';
  //Blockly.Arduino.setups_['setup_esp32_ps3'] = 'Ps3.begin();\n';
  var ps3Rock = this.getFieldValue('ps3Rock');
  var code = ps3Rock;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock['emakefun_esp32_get_battey_status'] = function() {
  Blockly.Arduino.definitions_['include_ESP32_PS3'] = '#include <Ps3Controller.h>\n';
  //Blockly.Arduino.setups_['setup_esp32_ps3'] = 'Ps3.begin();\n';
  // var ps3Rock = this.getFieldValue('ps3Rock');
  var code = `Ps3.data.status.battery`;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock['emakefun_esp32_PS3_battey_status'] = function() {
  Blockly.Arduino.definitions_['include_ESP32_PS3'] = '#include <Ps3Controller.h>\n';
  //Blockly.Arduino.setups_['setup_esp32_ps3'] = 'Ps3.begin();\n';
  var ps3Battery = this.getFieldValue('ps3Battery');
  var code = ps3Battery;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock['emakefun_esp32_PS3_set_player'] = function() {
  Blockly.Arduino.definitions_['include_ESP32_PS3'] = '#include <Ps3Controller.h>\n';
  //Blockly.Arduino.setups_['setup_esp32_ps3'] = 'Ps3.begin();\n';
  var emakefun_player = Blockly.Arduino.valueToCode(this, 'emakefun_player', Blockly.Arduino.ORDER_ATOMIC);
  var code = `Ps3.setPlayer(${emakefun_player});\n`;
  return code;
};

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


//DS1302
Blockly.Arduino.forBlock['nulllab_DS1302_init'] = function () {
    var dropdown_rst = Blockly.Arduino.valueToCode(this, 'RST', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_dat = Blockly.Arduino.valueToCode(this, 'DAT', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_clk = Blockly.Arduino.valueToCode(this, 'CLK', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['include_ThreeWire'] = '#include <ThreeWire.h>';
    Blockly.Arduino.definitions_['include_RtcDS1302'] = '#include <RtcDS1302.h>';
    //Blockly.Arduino.definitions_['var_declare_RtcDateTime_dt'] = 'const RtcDateTime dt;';
    Blockly.Arduino.definitions_['var_declare_ThreeWire'] = 'ThreeWire ' + 'myWire(' + dropdown_dat + ',' + dropdown_clk + ',' + dropdown_rst + ');';
    Blockly.Arduino.definitions_['var_declare_RtcDS1302'] = 'RtcDS1302<ThreeWire> Rtc(myWire);';
    Blockly.Arduino.setups_['setup_Rtc.Begin'] = 'Rtc.Begin();\n  Rtc.SetIsRunning(true);';
    return "";
};

Blockly.Arduino.forBlock['nulllab_DS1307_init'] = function () {
    var SDA = Blockly.Arduino.valueToCode(this, 'SDA', Blockly.Arduino.ORDER_ATOMIC);
    var SCL = Blockly.Arduino.valueToCode(this, 'SCL', Blockly.Arduino.ORDER_ATOMIC);
    var RTCType = this.getFieldValue('RTCType');
    Blockly.Arduino.definitions_['include_' + RTCType] = '#include <' + RTCType + '.h>';
    //Blockly.Arduino.definitions_['var_declare_RtcDateTime_dt'] = 'const RtcDateTime dt;';
    if (SDA != profile.default.SDA[0][1] || SCL != profile.default.SCL[0][1]) {
        Blockly.Arduino.definitions_['include_SoftwareWire'] = '#include <SoftwareWire.h>';
        Blockly.Arduino.definitions_['var_declare_SoftwareWire'] = 'SoftwareWire myWire(' + SDA + ',' + SCL + ');';
        Blockly.Arduino.definitions_['var_declare_' + RTCType] = RTCType + '<SoftwareWire> Rtc(myWire);';
    }
    else {
        Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
        Blockly.Arduino.definitions_['var_declare_' + RTCType] = RTCType + '<TwoWire> Rtc(Wire);';
    }
    Blockly.Arduino.setups_['setup_Rtc.Begin'] = 'Rtc.Begin();\n  Rtc.SetIsRunning(true);';
    return "";
}
                          
Blockly.Arduino.forBlock['nulllab_rtc_get_time'] = function () {
    var timeType = this.getFieldValue('TIME_TYPE');
    var code = 'Rtc.GetDateTime().' + timeType + '()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
}
                   
Blockly.Arduino.forBlock['nulllab_rtc_date'] = function () {
    var year = Blockly.Arduino.valueToCode(this, "year", Blockly.Arduino.ORDER_ATOMIC);
    var month = Blockly.Arduino.valueToCode(this, "month", Blockly.Arduino.ORDER_ATOMIC);
    var day = Blockly.Arduino.valueToCode(this, "day", Blockly.Arduino.ORDER_ATOMIC);

    switch (month) {
        case '1':
            month = 'Jan';
            break;
        case '2':
            month = 'Feb';
            break;
        case '3':
            month = 'Mar';
            break;
        case '4':
            month = 'Apr';
            break;
        case '5':
            month = 'May';
            break;
        case '6':
            month = 'Jun';
            break;
        case '7':
            month = 'Jul';
            break;
        case '8':
            month = 'Aug';
            break;
        case '9':
            month = 'Sep';
            break;
        case '10':
            month = 'Oct';
            break;
        case '11':
            month = 'Nov';
            break;
        case '12':
            month = 'Dec';
            break;
        default:
            month = 'Jan';
    }
    if (day.length == 1)
        day = '0' + day;
    var code = '"' + month + '/' + day + '/' + year + '"';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
}
						
Blockly.Arduino.forBlock['nulllab_rtc_time'] = function () {
    var hour = Blockly.Arduino.valueToCode(this, "hour", Blockly.Arduino.ORDER_ATOMIC);
    var minute = Blockly.Arduino.valueToCode(this, "minute", Blockly.Arduino.ORDER_ATOMIC);
    var second = Blockly.Arduino.valueToCode(this, "second", Blockly.Arduino.ORDER_ATOMIC);
    if (hour.length == 1)
        hour = '0' + hour;
    if (minute.length == 1)
        minute = '0' + minute;
    if (second.length == 1)
        second = '0' + second;
    var code = '"' + hour + ':' + minute + ':' + second + '"';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
}

//设置时间
Blockly.Arduino.forBlock['nulllab_rtc_set_time'] = function () {
    var value_date = Blockly.Arduino.valueToCode(this, 'date', Blockly.Arduino.ORDER_ATOMIC);
    var value_time = Blockly.Arduino.valueToCode(this, 'time', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    code = 'Rtc.SetDateTime(RtcDateTime(' + value_date + ', ' + value_time + '));\n';
    return code;
};
//获取烧录时间和日期   
Blockly.Arduino.forBlock['nulllab_get_system_date_time'] = function () {
    var dropdown_type = this.getFieldValue('type');
    var code = '__' + dropdown_type + '__';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock['RTC_set_date'] = function () {
    var RTCName = "myRTC";
    var code = RTCName + '.setDate(' + year + ',' + month + ',' + day + ');\n';
    code += RTCName + '.setDOW(' + year + ',' + month + ',' + day + ');\n';
    return code;
}

//使用帮助
Blockly.Arduino.forBlock['emakefun_ps3_help'] = function() {
  Blockly.Arduino.setups_['emakefun_ps3_help'] = 'Serial.begin(115200);\nSerial.println("help url: https://docs.emakefun.com/esp32/ps3_esp32/");';
  return "";
};
