
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
    Blockly.Arduino.setups_['setup_esp32_ps3'] = `Ps3.begin(${nulllab_ps3_mac});`;
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

//使用帮助
Blockly.Arduino.forBlock['emakefun_ps3_help'] = function() {
  Blockly.Arduino.setups_['emakefun_ps3_help'] = 'Serial.begin(115200);\nSerial.println("help url: https://docs.emakefun.com/esp32/ps3_esp32/");';
  return "";
};
