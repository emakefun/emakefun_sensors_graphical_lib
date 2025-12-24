'use strict';
goog.provide('Blockly.Arduino.Mqtt');
goog.require('Blockly.Arduino');

 // 设置编码电机的脉冲数
Blockly.Arduino.forBlock['maker_esp32_pro_set_encoder_motor_ppr']  = function () {
	var encoder_motor_ppr = Blockly.Arduino.valueToCode(this,'encoder_motor_ppr', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_maker_esp32_encoder_motor'] = '#include <encoder_motor.h>\n#include <encoder_motor_lib.h>';
	Blockly.Arduino.definitions_['maker_esp32_kPPR'] = 'uint32_t kPPR = ' + encoder_motor_ppr + ';';
    return '';
};

// 设置编码电机的减速比
Blockly.Arduino.forBlock['maker_esp32_pro_set_encoder_motor_radio']  = function () {
	var encoder_motor_radio = Blockly.Arduino.valueToCode(this,'encoder_motor_radio', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_maker_esp32_encoder_motor'] = '#include <encoder_motor.h>\n#include <encoder_motor_lib.h>';
 	Blockly.Arduino.definitions_['maker_esp32_kReductionRation'] = 'uint32_t kReductionRation = ' + encoder_motor_radio + ';';
	return '';
};

// 设置编码电机ledc channel
Blockly.Arduino.forBlock['maker_esp32_pro_set_encoder_motor_channel']  = function () {
	var motorPin1;
	var motorPin2;
	var aPlusPin;
	var bPlusPin;
	var encoderMotorPin = this.getFieldValue('encoderMotorPin');
    if(encoderMotorPin == 0) {
      motorPin1 = "GPIO_NUM_27";
      motorPin2 = "GPIO_NUM_13";
      aPlusPin = "GPIO_NUM_18";
      bPlusPin = "GPIO_NUM_19";
    }else if(encoderMotorPin == 1) {
      motorPin1 = "GPIO_NUM_4";
      motorPin2 = "GPIO_NUM_2";
      aPlusPin = "GPIO_NUM_5";
      bPlusPin = "GPIO_NUM_23";
    }else if(encoderMotorPin == 2) {
      motorPin1 = "GPIO_NUM_17";
      motorPin2 = "GPIO_NUM_12";
      aPlusPin = "GPIO_NUM_35";
      bPlusPin = "GPIO_NUM_36";
    }else if(encoderMotorPin == 3) {
      motorPin1 = "GPIO_NUM_15";
      motorPin2 = "GPIO_NUM_14";
      aPlusPin = "GPIO_NUM_34";
      bPlusPin = "GPIO_NUM_39";
    }
	var motorId = this.getFieldValue('motorId');
	Blockly.Arduino.definitions_['define_maker_esp32_encoder_motor'] = '#include <encoder_motor.h>\n#include <encoder_motor_lib.h>';
 	Blockly.Arduino.definitions_['maker_esp32_g_encoder_motor_' + encoderMotorPin] = `em::EncoderMotor g_encoder_motor_${encoderMotorPin}(${motorPin1}, ${motorId} * 2 - 2, ${motorPin2}, ${motorId} * 2 - 1, ${aPlusPin}, ${bPlusPin}, kPPR, kReductionRation, em::EncoderMotor::kBPhaseLeads);`;
	Blockly.Arduino.setups_['setup_maker_esp32_' + encoderMotorPin] = `g_encoder_motor_${encoderMotorPin}.Init();`;
	return '';
};

// 设置编码电机的PID参数
Blockly.Arduino.forBlock['maker_esp32_pro_set_speed_pid']  = function () {
	var encoderMotorPin = this.getFieldValue('encoderMotorPin');
	var encoder_motor_speed_pid_p = Blockly.Arduino.valueToCode(this,'encoder_motor_speed_pid_p', Blockly.Arduino.ORDER_ATOMIC);
	var encoder_motor_speed_pid_i = Blockly.Arduino.valueToCode(this,'encoder_motor_speed_pid_i', Blockly.Arduino.ORDER_ATOMIC);
	var encoder_motor_speed_pid_d = Blockly.Arduino.valueToCode(this,'encoder_motor_speed_pid_d', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_maker_esp32_encoder_motor'] = '#include <encoder_motor.h>\n#include <encoder_motor_lib.h>';
	var code = `g_encoder_motor_${encoderMotorPin}.SetSpeedPid(${encoder_motor_speed_pid_p}, ${encoder_motor_speed_pid_i}, ${encoder_motor_speed_pid_d});\n`;
	return code;
};

// 设置占空比
Blockly.Arduino.forBlock['maker_esp32_pro_set_encoder_motor_pwm_duty']  = function () {
	var encoderMotorPin = this.getFieldValue('encoderMotorPin');
	var encoder_motor_pwm_duty = Blockly.Arduino.valueToCode(this,'encoder_motor_pwm_duty', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_maker_esp32_encoder_motor'] = '#include <encoder_motor.h>\n#include <encoder_motor_lib.h>';
	var code = `g_encoder_motor_${encoderMotorPin}.RunPwmDuty(${encoder_motor_pwm_duty});\n`;
	return code;
};

// 设置电机速度
Blockly.Arduino.forBlock['maker_esp32_pro_encoder_motor_run_speed']  = function () {
	var encoderMotorPin = this.getFieldValue('encoderMotorPin');
	var encoder_motor_speed = Blockly.Arduino.valueToCode(this,'encoder_motor_speed', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_maker_esp32_encoder_motor'] = '#include <encoder_motor.h>\n#include <encoder_motor_lib.h>';
	var code = `g_encoder_motor_${encoderMotorPin}.RunSpeed(${encoder_motor_speed});\n`;
	return code;
};

// 停止
Blockly.Arduino.forBlock['maker_esp32_pro_encoder_motor_stop']  = function () {
	var encoderMotorPin = this.getFieldValue('encoderMotorPin');
	Blockly.Arduino.definitions_['define_maker_esp32_encoder_motor'] = '#include <encoder_motor.h>\n#include <encoder_motor_lib.h>';
	var code = `g_encoder_motor_${encoderMotorPin}.Stop();\n`;
	return code;
};

// 获取编码器脉冲数
Blockly.Arduino.forBlock['maker_esp32_pro_get_encoder_pluse_count'] = function() {
	Blockly.Arduino.definitions_['define_maker_esp32_encoder_motor'] = '#include <encoder_motor.h>\n#include <encoder_motor_lib.h>';
	var encoderMotorPin = this.getFieldValue('encoderMotorPin');
	var code = `g_encoder_motor_${encoderMotorPin}.EncoderPulseCount()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 获取编码电机的当前速度
Blockly.Arduino.forBlock['maker_esp32_pro_get_encoder_motor_rpm'] = function() {
	Blockly.Arduino.definitions_['define_maker_esp32_encoder_motor'] = '#include <encoder_motor.h>\n#include <encoder_motor_lib.h>';
	var encoderMotorPin = this.getFieldValue('encoderMotorPin');
	var code = `g_encoder_motor_${encoderMotorPin}.SpeedRpm()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 获取编码电机的PWM占空比
Blockly.Arduino.forBlock['maker_esp32_pro_get_encoder_motor_pwm_duty'] = function() {
	Blockly.Arduino.definitions_['define_maker_esp32_encoder_motor'] = '#include <encoder_motor.h>\n#include <encoder_motor_lib.h>';
	var encoderMotorPin = this.getFieldValue('encoderMotorPin');
	var code = `g_encoder_motor_${encoderMotorPin}.PwmDuty()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 获取编码电机的目标转速
Blockly.Arduino.forBlock['maker_esp32_pro_get_encoder_motor_target_rpm'] = function() {
	Blockly.Arduino.definitions_['define_maker_esp32_encoder_motor'] = '#include <encoder_motor.h>\n#include <encoder_motor_lib.h>';
	var encoderMotorPin = this.getFieldValue('encoderMotorPin');
	var code = `g_encoder_motor_${encoderMotorPin}.TargetRpm()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};