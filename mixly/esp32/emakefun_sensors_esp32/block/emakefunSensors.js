(() => {

    'use strict';
    goog.require('path');
    goog.require('Blockly.Blocks');

    const mediaDirPath = path.join(document.currentScript.src, '../../media/');
	
	 //矩阵键盘初始化 V3
	Blockly.Blocks.nulllab_init_matrix_keyboard_I2C_V3 = {
		init: function () {
		  this.setColour(190);
		  this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_INITIALIZE_MATRIX_KEYBOARD_V3)
			.appendField(new Blockly.FieldTextInput('myMatrixKeyboardV3'), 'nulllab_keyboard_v3')
			.appendField(Blockly.Msg.EM_I2C_MATRIX_KEYBOARD_V2_ADDR)
			this.appendDummyInput("")
			this.appendValueInput("nulllab_matrix_addr", Number)
			this.setOutput(false);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('');
		}
	}

  //获取矩阵键盘按键值 V3
	Blockly.Blocks.nulllab_matrix_keyboard_values_V3 = {
		init: function () {
		  this.setColour(190);
		  this.appendDummyInput("")
		  .appendField(Blockly.Msg.EM_MATRIX_KEYBOARD_V3)
		  .appendField(new Blockly.FieldTextInput('myMatrixKeyboardV3'), 'nulllab_keyboard_v3')
			.appendField(Blockly.Msg.EM_MATRIX_KEYBOARD_VALUES_V2)
		  this.setOutput(true, Number);
		  this.setInputsInline(true);
		}
	};
  
	
	// 初始化五路循迹V2
	Blockly.Blocks.nulllab_lineTracker_v2={
	  init:function(){
		this.setColour(220);
			this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_INITFIVEINFRAREDTRACKING_V2)
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKING_V2)
			.appendField(new Blockly.FieldTextInput('myFiveInfraredTrackingV2'), 'nulllab_fiveInfraredTracking_V2')
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKING_V2_ADDR)
			this.appendDummyInput("")
			this.appendValueInput("nulllab_tracker_addr", Number)
			this.setOutput(false);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('');
	  }
	}

	// 设值敏感度
	Blockly.Blocks.nulllab_setSensitivity_v2={
	  init:function(){
		this.setColour(220);
			this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKING_V2)
			.appendField(new Blockly.FieldTextInput('myFiveInfraredTrackingV2'), 'nulllab_fiveInfraredTracking_V2')
			.appendField(Blockly.Msg.EM_SETSENSITIVITY)
			this.appendDummyInput("")
			this.appendValueInput("nulllab_sensitivity", Number)
			this.setOutput(false);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('');
	  }
	}

	// 获取寻迹模块的传感器值
	Blockly.Blocks.nulllab_getSensorValues_v2={
	  init:function(){
		this.setColour(220);
			this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKING_V2)
			.appendField(new Blockly.FieldTextInput('myFiveInfraredTrackingV2'), 'nulllab_fiveInfraredTracking_V2')
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKINGVALUE)
		this.setOutput(true, Number);
		this.setInputsInline(true);
	  }
	}

	// 获取寻迹模块的传感器状态
	Blockly.Blocks.nulllab_getSensorStates_v2={
	  init:function(){
		this.setColour(220);
			this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKING_V2)
			.appendField(new Blockly.FieldTextInput('myFiveInfraredTrackingV2'), 'nulllab_fiveInfraredTracking_V2')
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKINGSTATES)
		this.setOutput(true, Number);
		this.setInputsInline(true);
	  }
	}

	// 获取寻迹模块的传感器值
	Blockly.Blocks.nulllab_getSensorValues_v2_index={
	  init:function(){
		this.setColour(220);
			this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKING_V2)
			.appendField(new Blockly.FieldTextInput('myFiveInfraredTrackingV2'), 'nulllab_fiveInfraredTracking_V2')
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKINGGET)
			.appendField(new Blockly.FieldDropdown([ 
			 ['0', "0"],
			 ['1', "1"],
			 ['2', "2"],
			 ['3', "3"],
			 ['4', "4"],
			]), "index")
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKINGINDEXVALUE)
		this.setOutput(true, Number);
		this.setInputsInline(true);
	  }
	}

	Blockly.Blocks.nulllab_getSensorStates_v2_index={
	  init:function(){
		this.setColour(220);
			this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKING_V2)
			.appendField(new Blockly.FieldTextInput('myFiveInfraredTrackingV2'), 'nulllab_fiveInfraredTracking_V2')
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKINGGETSTA)
			.appendField(new Blockly.FieldDropdown([ 
			 ['0', "0"],
			 ['1', "1"],
			 ['2', "2"],
			 ['3', "3"],
			 ['4', "4"],
			]), "index")
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKINGINDEXSTATUS)
		this.setOutput(true, Boolean);
		this.setInputsInline(true);
	  }
	}
	
	// I2C expansion board
	Blockly.Blocks.nulllab_init_i2c_expansion_board = {
		init: function () {
			  this.setColour(230);
			  this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_I2C_EXPANSION_BOARD)
        .appendField(new Blockly.FieldTextInput('myI2CExpansionBoard'), 'nulllab_i2cBoard')
				.appendField(Blockly.Msg.EM_INIT_I2C_EXPANSION_BOARD)
        this.appendValueInput("nulllab_i2cAddr", Number)
			  this.setOutput(false);
        this.setInputsInline(true);
		    this.setPreviousStatement(true, null);
		    this.setNextStatement(true, null);
		    this.setTooltip('');
		}
	}
	
	Blockly.Blocks.nulllab_set_i2c_expansion_board_mode = {
		init: function () {
			  this.setColour(230);
			  this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_I2C_EXPANSION_BOARD)
        .appendField(new Blockly.FieldTextInput('myI2CExpansionBoard'), 'nulllab_i2cBoard')
				.appendField(Blockly.Msg.EM_SET_I2C_EXPANSION_PIN)
				.appendField(new Blockly.FieldDropdown([
				  ["E0", "GpioExpansionBoard::GpioPin::kGpioPinE0"],
				  ["E1", "GpioExpansionBoard::GpioPin::kGpioPinE1"],
				  ["E2", "GpioExpansionBoard::GpioPin::kGpioPinE2"],
				  ["E3", "GpioExpansionBoard::GpioPin::kGpioPinE3"],
				  ["E4", "GpioExpansionBoard::GpioPin::kGpioPinE4"],
				  ["E5", "GpioExpansionBoard::GpioPin::kGpioPinE5"],
				  ["E6", "GpioExpansionBoard::GpioPin::kGpioPinE6"],
				  ["E7", "GpioExpansionBoard::GpioPin::kGpioPinE7"],
				]), "nulllab_pin")
				.appendField(Blockly.Msg.EM_SET_I2C_EXPANSION_MODE)
				.appendField(new Blockly.FieldDropdown([
				  [Blockly.Msg.EM_ADCMODE, "GpioExpansionBoard::GpioMode::kAdc"],
				  [Blockly.Msg.EM_PUTFLOATMODE, "GpioExpansionBoard::GpioMode::kInputFloating"],
				  [Blockly.Msg.EM_INPUTPULLUPMODE, "GpioExpansionBoard::GpioMode::kInputPullUp"],
				  [Blockly.Msg.EM_INPUTPULLDOWNMODE, "GpioExpansionBoard::GpioMode::kInputPullDown"],
				  [Blockly.Msg.EM_OUTPUTMODE, "GpioExpansionBoard::GpioMode::kOutput"],
				  [Blockly.Msg.EM_PWMMODE, "GpioExpansionBoard::GpioMode::kPwm"],
				  [Blockly.Msg.EM_SERVOMODE, "GpioExpansionBoard::GpioMode::kPwm"]
				]), "nulllab_mode")
			this.setOutput(false);
		    this.setPreviousStatement(true, null);
		    this.setNextStatement(true, null);
		    this.setTooltip('');
		}
	}
	
	Blockly.Blocks.nulllab_set_i2c_expansion_board_level = {
		init: function () {
			  this.setColour(230);
			  this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_I2C_EXPANSION_BOARD)
        .appendField(new Blockly.FieldTextInput('myI2CExpansionBoard'), 'nulllab_i2cBoard')
				.appendField(Blockly.Msg.EM_SET_I2C_EXPANSION_PIN)
				.appendField(new Blockly.FieldDropdown([
				  ["E0", "GpioExpansionBoard::GpioPin::kGpioPinE0"],
				  ["E1", "GpioExpansionBoard::GpioPin::kGpioPinE1"],
				  ["E2", "GpioExpansionBoard::GpioPin::kGpioPinE2"],
				  ["E3", "GpioExpansionBoard::GpioPin::kGpioPinE3"],
				  ["E4", "GpioExpansionBoard::GpioPin::kGpioPinE4"],
				  ["E5", "GpioExpansionBoard::GpioPin::kGpioPinE5"],
				  ["E6", "GpioExpansionBoard::GpioPin::kGpioPinE6"],
				  ["E7", "GpioExpansionBoard::GpioPin::kGpioPinE7"],
				]), "nulllab_pin")
				.appendField(Blockly.Msg.EM_SET_I2C_EXPANSION_LEVEL)
				.appendField(new Blockly.FieldDropdown([
				  ["HIGH", "HIGH"],
				  ["LOW", "LOW"]
				]), "nulllab_level")
			this.setOutput(false);
		    this.setPreviousStatement(true, null);
		    this.setNextStatement(true, null);
		    this.setTooltip('');
		}
	}
	
	Blockly.Blocks.nulllab_get_i2c_expansion_board_level = {
		init: function () {
			  this.setColour(230);
			  this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_I2C_EXPANSION_BOARD)
        .appendField(new Blockly.FieldTextInput('myI2CExpansionBoard'), 'nulllab_i2cBoard')
				.appendField(Blockly.Msg.EM_GET_I2C_EXPANSION_PIN)
				.appendField(new Blockly.FieldDropdown([
				  ["E0", "GpioExpansionBoard::GpioPin::kGpioPinE0"],
				  ["E1", "GpioExpansionBoard::GpioPin::kGpioPinE1"],
				  ["E2", "GpioExpansionBoard::GpioPin::kGpioPinE2"],
				  ["E3", "GpioExpansionBoard::GpioPin::kGpioPinE3"],
				  ["E4", "GpioExpansionBoard::GpioPin::kGpioPinE4"],
				  ["E5", "GpioExpansionBoard::GpioPin::kGpioPinE5"],
				  ["E6", "GpioExpansionBoard::GpioPin::kGpioPinE6"],
				  ["E7", "GpioExpansionBoard::GpioPin::kGpioPinE7"],
				]), "nulllab_pin")
				.appendField(Blockly.Msg.EM_I2C_EXPANSION_LEVEL)
			this.setOutput(true, Number);
			this.setInputsInline(true);
		}
	}
	
	Blockly.Blocks.nulllab_get_i2c_expansion_board_adc = {
		init: function () {
			  this.setColour(230);
			  this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_I2C_EXPANSION_BOARD)
        .appendField(new Blockly.FieldTextInput('myI2CExpansionBoard'), 'nulllab_i2cBoard')
				.appendField(Blockly.Msg.EM_GET_I2C_EXPANSION_PIN)
				.appendField(new Blockly.FieldDropdown([
				  ["E0", "GpioExpansionBoard::GpioPin::kGpioPinE0"],
				  ["E1", "GpioExpansionBoard::GpioPin::kGpioPinE1"],
				  ["E2", "GpioExpansionBoard::GpioPin::kGpioPinE2"],
				  ["E3", "GpioExpansionBoard::GpioPin::kGpioPinE3"],
				  ["E4", "GpioExpansionBoard::GpioPin::kGpioPinE4"],
				  ["E5", "GpioExpansionBoard::GpioPin::kGpioPinE5"],
				  ["E6", "GpioExpansionBoard::GpioPin::kGpioPinE6"],
				  ["E7", "GpioExpansionBoard::GpioPin::kGpioPinE7"],
				]), "nulllab_pin")
				.appendField(Blockly.Msg.EM_I2C_EXPANSION_ADC)
			this.setOutput(true, Number);
			this.setInputsInline(true);
		}
	}
	
	// 
	Blockly.Blocks.nulllab_set_i2c_expansion_board_PWM_freq = {
		init: function () {
			  this.setColour(230);
			  this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_I2C_EXPANSION_BOARD)
        .appendField(new Blockly.FieldTextInput('myI2CExpansionBoard'), 'nulllab_i2cBoard')
				.appendField(Blockly.Msg.EM_SET_I2C_EXPANSION_PWM_FREQ)
		this.appendValueInput("nulllab_i2cPwmFreq", Number)
			this.setOutput(false);
        this.setInputsInline(true);
		    this.setPreviousStatement(true, null);
		    this.setNextStatement(true, null);
		    this.setTooltip('');
		}
	}
	
	Blockly.Blocks.nulllab_set_i2c_expansion_board_PWM_duty = {
		init: function () {
			  this.setColour(230);
			  this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_I2C_EXPANSION_BOARD)
        .appendField(new Blockly.FieldTextInput('myI2CExpansionBoard'), 'nulllab_i2cBoard')
		.appendField(Blockly.Msg.EM_GET_I2C_EXPANSION_PIN)
		.appendField(new Blockly.FieldDropdown([
		  ["E1", "GpioExpansionBoard::GpioPin::kGpioPinE1"],
		  ["E2", "GpioExpansionBoard::GpioPin::kGpioPinE2"],
		]), "nulllab_pin")
		.appendField(Blockly.Msg.EM_SET_I2C_EXPANSION_PWM_DUTY)
		this.appendValueInput("nulllab_i2cPwmDuty", Number)
		this.setOutput(false);
        this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
		}
	}
	
	// 
	Blockly.Blocks.nulllab_set_i2c_expansion_board_servo = {
		init: function () {
			  this.setColour(230);
			  this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_I2C_EXPANSION_BOARD)
        .appendField(new Blockly.FieldTextInput('myI2CExpansionBoard'), 'nulllab_i2cBoard')
		.appendField(Blockly.Msg.EM_SET_I2C_EXPANSION_PIN)
		.appendField(new Blockly.FieldDropdown([
		  ["E1", "GpioExpansionBoard::GpioPin::kGpioPinE1"],
		  ["E2", "GpioExpansionBoard::GpioPin::kGpioPinE2"],
		]), "nulllab_pin")
		.appendField(Blockly.Msg.EM_SET_I2C_EXPANSION_SERVO_ANGLE)
		this.appendValueInput("nulllab_i2cServoAngle", Number)
		this.setOutput(false);
        this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
		}
	}


// // 手势传感器
Blockly.Blocks.nulllab_gesture_sensor_init = {
	init:function(){
		this.setColour(245);
		this.appendDummyInput("")
		 .appendField(Blockly.Msg.EM_HANDLESENSOR_INIT)
		 .appendField(new Blockly.FieldTextInput('myHandleSensor'), 'nulllab_gestureSensor')
		 .appendField(Blockly.Msg.EM_HANDLESENSOR_I2C_ADDR)
		 this.appendValueInput("nulllab_gesture_addr", Number)
		this.setOutput(false);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
		this.setInputsInline(true);
	}
}

Blockly.Blocks.nulllab_get_gesture = {
	init:function(){
		this.setColour(245);
		this.appendDummyInput("")
		.appendField(Blockly.Msg.EM_HANDLESENSOR)
		.appendField(new Blockly.FieldTextInput('myHandleSensor'), 'nulllab_gestureSensor')
		 .appendField(Blockly.Msg.EM_GET_GESTURE_STATUS)
		this.setOutput(true, Number);
		this.setInputsInline(true);
	}
}

Blockly.Blocks.nulllab_gesture_sensor_status = {
	init:function(){
		this.setColour(245);
		this.appendDummyInput("")
		.appendField(Blockly.Msg.EM_HANDLESENSOR)
		.appendField(new Blockly.FieldTextInput('myHandleSensor'), 'nulllab_gestureSensor')
		 .appendField(Blockly.Msg.EM_GET_GESTURE_VALUE)
		 .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.EM_GESTURE_NONE, "GestureRecognizer::Gesture::kGestureNone"],
          [Blockly.Msg.EM_GESTURE_RIGHT, "GestureRecognizer::Gesture::kGestureRightSwipe"],
          [Blockly.Msg.EM_GESTURE_LEFT, "GestureRecognizer::Gesture::kGestureLeftSwipe"],
          [Blockly.Msg.EM_GESTURE_BACKWARD, "GestureRecognizer::Gesture::kGestureBackwardSwipe"],
          [Blockly.Msg.EM_GESTURE_FORWARD, "GestureRecognizer::Gesture::kGestureForwardSwipe"],
          [Blockly.Msg.EM_GESTURE_UPWARD, "GestureRecognizer::Gesture::kGestureUpward"],
          [Blockly.Msg.EM_GESTURE_DOWNWARD, "GestureRecognizer::Gesture::kGestureDownward"],
          [Blockly.Msg.EM_GESTURE_OUTOFRANGE, "GestureRecognizer::Gesture::kGestureOutOfRange"],
          [Blockly.Msg.EM_GESTURE_HOVER, "GestureRecognizer::Gesture::kGestureHover"],
        ]), "nulllab_getsture_status")
		this.setOutput(true, Number);
		this.setInputsInline(true);
	}
}

   //设置服务器地址与端口号
    Blockly.Blocks.emakefun_ps3_mac_init = {
        init: function () {
            this.setColour(133);
            this.appendDummyInput("")
                .appendField(Blockly.Msg.EMAKEFUN_INIT_PS3_MAC);
		    this.appendValueInput("nulllab_ps3_mac", String)
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setInputsInline(true);
			this.setTooltip('');
        }
    };
	
    //设置服务器地址与端口号
    Blockly.Blocks.emakefun_get_esp32_mac = {
        init: function () {
            this.setColour(133);
            this.appendDummyInput("")
                .appendField(Blockly.Msg.EMAKEFUN_GET_ESP32_MAC);
                this.setOutput(true, String);
        }
    };

    // 是否连接
    Blockly.Blocks.emakefun_esp32_isConnect = {
        init: function () {
            this.setColour(133);
            this.appendDummyInput("")
                .appendField(Blockly.Msg.EMAKEFUN_GET_ESP32_IS_CONNECT);
                this.setOutput(true, Boolean);
        }
    };

    Blockly.Blocks.emakefun_esp32_get_button = {
        init: function () {
            this.setColour(133);
            this.appendDummyInput("")
                .appendField(Blockly.Msg.EMAKEFUN_ESP32_PS3_BUTTON)
                .appendField(new Blockly.FieldDropdown(
                   [["x键", "cross"],
                    ["三角形键", "triangle"],
                    ["圆形键", "circle"],
                    ["正方形键", "square"],
                    ["SELECT键", "select"],
                    ["START键", "start"],
                    ["方向键上", "up"],
                    ["方向键下", "down"],
                    ["方向键左", "left"],
                    ["方向键右", "right"],
                    ["左侧1", "l1"],
                    ["左侧2", "l2"],
                    ["左侧3", "l3"],
                    ["右侧1", "r1"],
                    ["右侧2", "r2"],
                    ["右侧3", "r3"]]
                ), 'button')
                .appendField(Blockly.Msg.EMAKEFUN_ESP32_PS3_BUTTON_STATUS)
                .appendField(new Blockly.FieldDropdown(
                    [["按下", "button_down"],
                    ["松开", "button_up"],
                    ["改变", "analog_changed"]]
                ), 'status')
                this.setOutput(true, Boolean);
        }
    };
	
	Blockly.Blocks.emakefun_esp32_loop_get_button = {
		init: function () {
			this.setColour(133);
			this.appendDummyInput("")
				.appendField(Blockly.Msg.EMAKEFUN_ESP32_PS3_LOOP_BUTTON)
				.appendField(new Blockly.FieldDropdown(
				   [["x键", "cross"],
					["三角形键", "triangle"],
					["圆形键", "circle"],
					["正方形键", "square"],
					["SELECT键", "select"],
					["START键", "start"],
					["方向键上", "up"],
					["方向键下", "down"],
					["方向键左", "left"],
					["方向键右", "right"],
					["左侧1", "l1"],
					["左侧2", "l2"],
					["左侧3", "l3"],
					["右侧1", "r1"],
					["右侧2", "r2"],
					["右侧3", "r3"]]
				), 'button')
				.appendField(Blockly.Msg.EMAKEFUN_ESP32_PS3_BUTTON_VALUE)
				this.setOutput(true, Boolean);
		}
    };

    Blockly.Blocks.emakefun_esp32_get_rock_analog = {
        init: function () {
            this.setColour(133);
            this.appendDummyInput("")
                .appendField(Blockly.Msg.EMAKEFUN_GET_PS3_ROCK_VALUE)
                .appendField(new Blockly.FieldDropdown(
                   [ ["左侧X值", "Ps3.data.analog.stick.lx"],
                    ["左侧Y值", "Ps3.data.analog.stick.ly"],
                    ["右侧X值", "Ps3.data.analog.stick.rx"],
                    ["右侧Y值", "Ps3.data.analog.stick.ry"]]
                ), 'ps3Rock')
                this.setOutput(true, Number)
        }
    };

    Blockly.Blocks.emakefun_esp32_get_battey_status = {
        init: function () {
            this.setColour(133);
            this.appendDummyInput("")
                .appendField(Blockly.Msg.EMAKEFUN_GET_PS3_BATTERY_STATUS)
                this.setOutput(true, Number)
        }
    };
    
    Blockly.Blocks.emakefun_esp32_PS3_battey_status = {
        init: function () {
            this.setColour(133);
            this.appendDummyInput("")
                .appendField(Blockly.Msg.EMAKEFUN_PS3_BATTERY_STATUS)
                .appendField(new Blockly.FieldDropdown(
                    [ ["充电中", "ps3_status_battery_charging"],
                     ["满电", "ps3_status_battery_full"],
                     ["高电量", "ps3_status_battery_high"],
                     ["低电量", "ps3_status_battery_low"],
                     ["电量已用尽", "ps3_status_battery_dying"],
                     ["关机", "ps3_status_battery_shutdown"],
                    ]
                 ), 'ps3Battery')
                this.setOutput(true, Number)
        }
    };

    Blockly.Blocks.emakefun_esp32_PS3_set_player = {
        init: function () {
            this.setColour(133);
            this.appendDummyInput("")
                .appendField(Blockly.Msg.EMAKEFUN_GET_PS3_SET_PLAYER)
            this.appendValueInput("emakefun_player", Number)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip('');
        }
    };



    // nulllab_VoiceRecognition_init_V2
Blockly.Blocks.nulllab_VoiceRecognition_init_V2 = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_VOICERECOGNITION_INIT_V2)
        .appendField(new Blockly.FieldTextInput('myVoiceRecognitionV2'), 'nulllab_VoiceRecognition_V2')
        .appendField(Blockly.Msg.EM_VOICERECOGNITION_MODE)
        .appendField(new Blockly.FieldDropdown(
          [
            [Blockly.Msg.EM_VOICERECOGNITION_MODEA, 'kRecognitionAuto'],
            [Blockly.Msg.EM_VOICERECOGNITION_MODEB, 'kButtonTrigger'],
            [Blockly.Msg.EM_VOICERECOGNITION_MODEC, 'kKeywordTrigger'],
            [Blockly.Msg.EM_VOICERECOGNITION_MODED, 'kKeywordOrButtonTrigger']
          ]), "nulllab_mode_V2")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  }
  
    //语音识别设置词条和编号
    Blockly.Blocks.nulllab_VoiceRecognition_Content_V2 = {
      init: function () {
        this.setColour(150);
        this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_VOICERECOGNITION_V2)
        .appendField(new Blockly.FieldTextInput('myVoiceRecognitionV2'), 'nulllab_VoiceRecognition_V2')
          //.appendField(Blockly.INITIALIZE_MATRIX_KEYBOARD)
        this.appendValueInput("nulllab_Key_V2", Number)
          .appendField(Blockly.Msg.EM_VOICERECOGNITION_KEY)
          .setCheck(Number);
        this.appendValueInput("nulllab_content_V2", String)
          .appendField(Blockly.Msg.EM_VOICERECOGNITION_CONTENT)
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
      }
    };
  
      //语音识别设置唤醒词
      Blockly.Blocks.nulllab_VoiceRecognition_time_V2 = {
        init: function () {
          this.setColour(150);
          this.appendDummyInput("")
          .appendField(Blockly.Msg.EM_VOICERECOGNITION_V2)
          .appendField(new Blockly.FieldTextInput('myVoiceRecognitionV2'), 'nulllab_VoiceRecognition_V2')
          .appendField(Blockly.Msg.EM_VOICERECOGNITION_TIME);
          this.appendValueInput("nulllab_time_V2", Number)
            .setCheck(Number)
            .setAlign(Blockly.Msg.EM_ALIGN_RIGHT);
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setTooltip('');
        }
      };
  
    Blockly.Blocks.speech_recognizer_event = {
      init: function () {
        this.setColour(150);
        this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_VOICERECOGNITION_V2)
        .appendField(new Blockly.FieldTextInput('myVoiceRecognitionV2'), 'nulllab_VoiceRecognition_V2')
          .appendField(Blockly.Msg.EM_VOICERECOGNITION_NUMBER)
        this.setOutput(true, Number);
        this.setTooltip(true);
      }
    };
      
    // 开始语音合成并播放
  Blockly.Blocks.nulllab_speech_synthesisStart = {
    init: function () {
      this.setColour(180);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_SPEECH)
      .appendField(new Blockly.FieldTextInput('mySpeechSynthesis'), 'nulllab_speech')
        .appendField(Blockly.Msg.EM_SPEECH_START)
        .appendField(new Blockly.FieldDropdown(
          [
            ['5', '5'],
            ['0', '0'],
            ['1', '1'],
            ['2', '2'],
            ['3', '3'],
            ['4', '4'],
            ['6', '6'],
            ['7', '7'],
            ['8', '8'],
            ['9', '9'],
            ['10', '10'],
          ]), "nulllab_voice")
        // .setCheck(Number)
        .appendField(Blockly.Msg.EM_SPEECH_VOICESPEED)
        .appendField(new Blockly.FieldDropdown(
          [
            ['5', '5'],
            ['0', '0'],
            ['1', '1'],
            ['2', '2'],
            ['3', '3'],
            ['4', '4'],
            ['6', '6'],
            ['7', '7'],
            ['8', '8'],
            ['9', '9'],
            ['10', '10'],
          ]), "nulllab_voiceSpeed")
        // .setCheck(Number)
        this.appendValueInput("nulllab_content", String)
        .appendField(Blockly.Msg.EM_SPEECH_VOICECONTENT)
        // .setAlign(Blockly.ALIGN_RIGHT);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  
    // 把命令帧缓存
    Blockly.Blocks.nulllab_speech_synthesisCache = {
      init: function () {
        this.setColour(180);
        this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_SPEECH)
        .appendField(new Blockly.FieldTextInput('mySpeechSynthesis'), 'nulllab_speech')
          .appendField(Blockly.Msg.EM_SPEECH_STARTCACHE)
          .appendField(new Blockly.FieldDropdown(
            [
              ['5', '5'],
              ['0', '0'],
              ['1', '1'],
              ['2', '2'],
              ['3', '3'],
              ['4', '4'],
              ['6', '6'],
              ['7', '7'],
              ['8', '8'],
              ['9', '9'],
              ['10', '10'],
            ]), "nulllab_voice")
          // .setCheck(Number)
          .appendField(Blockly.Msg.EM_SPEECH_VOICESPEED)
          .appendField(new Blockly.FieldDropdown(
            [
              ['5', '5'],
              ['0', '0'],
              ['1', '1'],
              ['2', '2'],
              ['3', '3'],
              ['4', '4'],
              ['6', '6'],
              ['7', '7'],
              ['8', '8'],
              ['9', '9'],
              ['10', '10'],
            ]), "nulllab_voiceSpeed")
          // .setCheck(Number)
          this.appendValueInput("nulllab_content", String)
          .appendField(Blockly.Msg.EM_SPEECH_VOICECACHECONTENT)
          this.appendValueInput("nulllab_index", Number)
          .appendField(Blockly.Msg.EM_SPEECH_VOICECACHEINDEX)
          // .setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
      }
    };
  
  //播报次数
  Blockly.Blocks.nulllab_speech_cplay={
    init:function(){
      this.setColour(180);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_SPEECH)
        .appendField(new Blockly.FieldTextInput('mySpeechSynthesis'), 'nulllab_speech')
      this.appendValueInput("nulllab_freq", Number)
          .appendField(Blockly.Msg.EM_SPEED_CPLAY)
      this.setInputsInline(true);
      // this.setOutput(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  }
  
  //RFID_IIC初始化
 Blockly.Blocks.nulllab_init_RFID_I2C = {
  init: function () {
    this.setColour(200);
    this.appendDummyInput("")
      .appendField("RFID初始化 IIC地址")
     // .appendField(new Blockly.FieldTextInput('RFID_IIC'), 'Emakefun_RIFD')//创建文本输入对象

    this.appendDummyInput("")
    this.appendValueInput("nulllab_RFID", Number)
    this.setOutput(false);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

//RFID检测卡片
Blockly.Blocks.nulllab_RFID_detection = {
  init: function() {
    this.setColour(200);//模块图形颜色
    this.appendDummyInput("")//此行代码刚需,为模块创建提供入口
      .appendField("RFID检测到卡片？") //代码块上的文字内容
    
    this.setOutput(true, Number);
    this.setInputsInline(true);
  }
};

//RFID读取卡片UID
Blockly.Blocks.nulllab_RFID_ReadUID = {
  init: function() {
    this.setColour(200);//模块图形颜色
    this.appendDummyInput("")//此行代码刚需,为模块创建提供入口
      .appendField("RFID读取卡片UID") //代码块上的文字内容
    
    this.setOutput(true, Number);
    this.setInputsInline(true);
  }
};

    //使用帮助
    Blockly.Blocks.emakefun_ps3_help = {
        init: function () {
            this.setColour(60);
            this.appendValueInput("ps3_help")
                .setCheck(null)
                .appendField(Blockly.Msg.emakefun_Mixly_ps3_help);
                this.setTooltip(Blockly.Msg.MQTT_TEST_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.emakefun_ps3_helpurl);
        }
    };

})();