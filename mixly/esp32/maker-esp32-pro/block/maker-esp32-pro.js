(() => {

    'use strict';
    goog.require('path');
    goog.require('Blockly.Blocks');

    const mediaDirPath = path.join(document.currentScript.src, '../../media/');
	
	 // 设置编码电机的脉冲数
	Blockly.Blocks.maker_esp32_pro_set_encoder_motor_ppr = {
		init: function () {
		  this.setColour(190);
			this.appendValueInput("encoder_motor_ppr", Number)
			.appendField("初始化编码电机 设置编码电机的脉冲数(ppr)")
			this.setOutput(false);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('');
		}
	}

	// 设置编码电机的减速比
	Blockly.Blocks.maker_esp32_pro_set_encoder_motor_radio = {
		init: function () {
			this.setColour(190);
			this.appendDummyInput("")
			this.appendValueInput("encoder_motor_radio", Number)
			.appendField("初始化编码电机 设置编码电机的减速比(ratio)")
			this.setOutput(false);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('');
		}
	}

	// 设置编码电机对应的LEDC channel
	Blockly.Blocks.maker_esp32_pro_set_encoder_motor_channel = {
		init: function () {
			this.setColour(190);
			this.appendDummyInput("")
			.appendField("初始化编码电机 设置编码电机")
			.appendField(new Blockly.FieldDropdown([
				["E0", "0"],
				["E1", "1"],
				["E2", "2"],
				["E3", "3"],
			]), "encoderMotorPin")
			.appendField("管道(Channel)组号")
			.appendField(new Blockly.FieldDropdown([
				["1", "1"],
				["2", "2"],
				["3", "3"],
				["4", "4"],
				["5", "5"],
				["6", "6"],
				["7", "7"],
				["8", "8"],
			]), "motorId")
			this.setOutput(false);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('');
		}
	}

	// 设置编码电机的PID参数
	Blockly.Blocks.maker_esp32_pro_set_speed_pid = {
		init: function () {
			this.setColour(190);
			this.appendDummyInput("")
			.appendField("设置编码电机")
			.appendField(new Blockly.FieldDropdown([
				["E0", "0"],
				["E1", "1"],
				["E2", "2"],
				["E3", "3"],
			]), "encoderMotorPin")
			this.appendDummyInput("")
			this.appendValueInput("encoder_motor_speed_pid_p", Number)
			.appendField("的速度PID算法 比例(P)")
			this.appendDummyInput("")
			this.appendValueInput("encoder_motor_speed_pid_i", Number)
			.appendField("积分(I)")
			this.appendDummyInput("")
			this.appendValueInput("encoder_motor_speed_pid_d", Number)
			.appendField("微分(D)")
			this.setOutput(false);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('');
		}
	}

	// 设置占空比
	Blockly.Blocks.maker_esp32_pro_set_encoder_motor_pwm_duty = {
		init: function () {
			this.setColour(190);
			this.appendDummyInput("")
			.appendField("设置编码电机")
			.appendField(new Blockly.FieldDropdown([
				["E0", "0"],
				["E1", "1"],
				["E2", "2"],
				["E3", "3"],
			]), "encoderMotorPin")
			this.appendDummyInput("")
			this.appendValueInput("encoder_motor_pwm_duty", Number)
			.appendField("设置编码电机的PWM占空比(-1023~1023)为")
			this.setOutput(false);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('');
		}
	}

	// 设置电机速度
	Blockly.Blocks.maker_esp32_pro_encoder_motor_run_speed = {
		init: function () {
			this.setColour(190);
			this.appendDummyInput("")
			.appendField("设置编码电机")
			.appendField(new Blockly.FieldDropdown([
				["E0", "0"],
				["E1", "1"],
				["E2", "2"],
				["E3", "3"],
			]), "encoderMotorPin")
			this.appendDummyInput("")
			this.appendValueInput("encoder_motor_speed", Number)
			.appendField("设置编码电机速度")
			this.setOutput(false);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('');
		}
	}

	// 停止
	Blockly.Blocks.maker_esp32_pro_encoder_motor_stop = {
		init: function () {
			this.setColour(190);
			this.appendDummyInput("")
			.appendField("停止编码电机")
			.appendField(new Blockly.FieldDropdown([
				["E0", "0"],
				["E1", "1"],
				["E2", "2"],
				["E3", "3"],
			]), "encoderMotorPin")
			this.setOutput(false);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('');
		}
	}

	// 获取编码器脉冲数
	Blockly.Blocks.maker_esp32_pro_get_encoder_pluse_count = {
		init: function () {
			this.setColour(190);
			this.appendDummyInput("")
			.appendField("获取编码电机")
			.appendField(new Blockly.FieldDropdown([
				["E0", "0"],
				["E1", "1"],
				["E2", "2"],
				["E3", "3"],
			]), "encoderMotorPin")
			.appendField("的脉冲数")
			this.setOutput(true, Number);
			this.setInputsInline(true);
		}
	}

	// 获取编码电机的当前速度
	Blockly.Blocks.maker_esp32_pro_get_encoder_motor_rpm = {
		init: function () {
			this.setColour(190);
			this.appendDummyInput("")
			.appendField("获取编码电机")
			.appendField(new Blockly.FieldDropdown([
				["E0", "0"],
				["E1", "1"],
				["E2", "2"],
				["E3", "3"],
			]), "encoderMotorPin")
			.appendField("当前转速")
			this.setOutput(true, Number);
			this.setInputsInline(true);
		}
	}

	// 获取编码电机的PWM占空比
	Blockly.Blocks.maker_esp32_pro_get_encoder_motor_pwm_duty = {
		init: function () {
			this.setColour(190);
			this.appendDummyInput("")
			.appendField("获取编码电机")
			.appendField(new Blockly.FieldDropdown([
				["E0", "0"],
				["E1", "1"],
				["E2", "2"],
				["E3", "3"],
			]), "encoderMotorPin")
			.appendField("PWM占空比(-1023~1023)")
			this.setOutput(true, Number);
			this.setInputsInline(true);
		}
	}

	// 获取编码电机的目标转速
	Blockly.Blocks.maker_esp32_pro_get_encoder_motor_target_rpm = {
		init: function () {
			this.setColour(190);
			this.appendDummyInput("")
			.appendField("获取编码电机")
			.appendField(new Blockly.FieldDropdown([
				["E0", "0"],
				["E1", "1"],
				["E2", "2"],
				["E3", "3"],
			]), "encoderMotorPin")
			.appendField("目标转速")
			this.setOutput(true, Number);
			this.setInputsInline(true);
		}
	}
})();