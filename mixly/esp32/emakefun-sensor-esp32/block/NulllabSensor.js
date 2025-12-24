(() => {

    'use strict';
    goog.require('path');
    goog.require('Blockly.Blocks');

    const mediaDirPath = path.join(document.currentScript.src, '../../media/');
	const EM_PIANOV2 = [["1", "EM_PIANO_KEYCODE_1"], ["2", "EM_PIANO_KEYCODE_2"], ["3", "EM_PIANO_KEYCODE_3"], ["4", "EM_PIANO_KEYCODE_4"], ["5", "EM_PIANO_KEYCODE_5"], ["6", "EM_PIANO_KEYCODE_6"], ["7", "EM_PIANO_KEYCODE_7"], ["8", "EM_PIANO_KEYCODE_8"]];

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

	 //初始化钢琴模块 V2 引脚value
Blockly.Blocks.nulllab_initPiano_v2 = {
    init: function () {
      this.setColour(130);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_PIANOPORT_V2)
		this.appendValueInput("nulllab_clk")
             .setCheck(Number)
             .setAlign(Blockly.ALIGN_RIGHT)
             .appendField("CLK")
             .appendField(Blockly.Msg.MIXLY_PIN);
         this.appendValueInput("nulllab_dio")
             .setCheck(Number)
             .setAlign(Blockly.ALIGN_RIGHT)
             .appendField("DIO")
             .appendField(Blockly.Msg.MIXLY_PIN);
		this.appendDummyInput("")
			 .appendField(Blockly.Msg.EM_PIANO_NUM)
        .appendField(new Blockly.FieldDropdown(EM_PIANOV2), "nulllab_piano")
        .appendField(Blockly.Msg.EM_PIANO_ISTOUCH)
	  this.setInputsInline(true);
      this.setOutput(true, Boolean);
      this.setTooltip('');
    }
  };

  // I2C数码管 VK16K33
  Blockly.Blocks.nulllab_vk16k33_init = {
		init: function () {
		  this.setColour(110);
		  this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_INITVK16K33)
			.appendField(new Blockly.FieldTextInput('myVK16K33'), 'nulllab_vk16k33')
			.appendField(Blockly.Msg.EM_I2C_VK16K33_ADDR)
			this.appendDummyInput("")
			this.appendValueInput("nulllab_vk16k33_addr", Number)
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setInputsInline(true);
		}
	}
  
    // 设置亮度
    Blockly.Blocks.nulllab_vk16k33_brightness = {
		init: function () {
		  this.setColour(110);
		  this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_VK16K33)
			.appendField(new Blockly.FieldTextInput('myVK16K33'), 'nulllab_vk16k33')
			.appendField(Blockly.Msg.EM_VK16K33_SET_BRIGHTNESS)
			this.appendDummyInput("")
			this.appendValueInput("nulllab_vk16k33_brightness", Number)
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setInputsInline(true);
		}
	}
	
	// 显示数据
    Blockly.Blocks.nulllab_vk16k33_showNumber = {
		init: function () {
		  this.setColour(110);
		  this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_VK16K33)
			.appendField(new Blockly.FieldTextInput('myVK16K33'), 'nulllab_vk16k33')
			.appendField(Blockly.Msg.EM_VK16K33_SHOW_DATA)
			this.appendDummyInput("")
			this.appendValueInput("nulllab_data", Number)
			this.setOutput(false);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('');
		}
	}
	
	// 显示数据
    Blockly.Blocks.nulllab_vk16k33_showColon = {
		init: function () {
		  this.setColour(110);
		  this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_VK16K33)
			.appendField(new Blockly.FieldTextInput('myVK16K33'), 'nulllab_vk16k33')
			.appendField(Blockly.Msg.EM_VK16K33_SHOW_COLON)
			.appendField(new Blockly.FieldDropdown([
			  [Blockly.Msg.EM_VK16K33_DISPLAY, "true"],
			  [Blockly.Msg.EM_VK16K33_NOT_DISPLAY, "false"]
			  ]), "colonFlag")
			this.setOutput(false);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('');
		}
	}
		
//MAX7219点阵屏幕初始化
Blockly.Blocks.nulllab_MAX7219_init = {
    init: function () {
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MIXLY_MAX7219_INIT)	
        // this.appendDummyInput("")
        //   .appendField(Blockly.Msg.MIXLY_MATRIX_NAME)
        //   .appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
         this.appendValueInput("PIN1")
             .setCheck(Number)
             .setAlign(Blockly.ALIGN_RIGHT)
             .appendField("DIN(MOSI)")
             .appendField(Blockly.Msg.MIXLY_PIN);
         this.appendValueInput("PIN2")
             .setCheck(Number)
             .setAlign(Blockly.ALIGN_RIGHT)
             .appendField("CS")
             .appendField(Blockly.Msg.MIXLY_PIN);
         this.appendValueInput("PIN3")
             .setCheck(Number)
             .setAlign(Blockly.ALIGN_RIGHT)
             .appendField("CLK(SCK)")
             .appendField(Blockly.Msg.MIXLY_PIN);
         this.appendValueInput("hDisplays")
             .setCheck(Number)
             .setAlign(Blockly.ALIGN_RIGHT)
             .appendField(Blockly.Msg.MIXLY_MAX7219_HDISPALY);
         this.appendValueInput("vDisplays")
             .setCheck(Number)
             .setAlign(Blockly.ALIGN_RIGHT)
             .appendField(Blockly.Msg.MIXLY_MAX7219_VDISPALY);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg['DISPLAY_HUE']);
        this.setInputsInline(false);
        this.setTooltip(Blockly.Msg.MAX7219_INIT_TOOLTIP);
        this.setHelpUrl('');
    }
};
	
	var MATRIX_TYPES = [['MAX7219', 'MAX7219']];

	//点阵屏显示点
	Blockly.Blocks.nulllab_display_Matrix_DrawPixel = {
		init: function () {
			this.setColour(Blockly.Msg['DISPLAY_HUE']);
			this.appendDummyInput("")
				.appendField(Blockly.Msg.MIXLY_MATRIX_TYPE)
				.appendField(new Blockly.FieldDropdown(MATRIX_TYPES), 'TYPE');
			// this.appendDummyInput("")
			//   .appendField(Blockly.Msg.MIXLY_MATRIX_NAME)
			//   .appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
			this.appendValueInput('XVALUE')
				.setCheck(Number)
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(Blockly.Msg.MIXLY_DISPLAY_MATRIX_X);
			this.appendValueInput("YVALUE")
				.setCheck(Number)
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(Blockly.Msg.MIXLY_DISPLAY_MATRIX_Y);
			this.appendValueInput("STAT")
				.appendField(Blockly.Msg.MIXLY_STAT)
				.setCheck([Number, Boolean]);
			this.appendDummyInput("")
				.appendField(new Blockly.FieldDropdown([
					[Blockly.Msg.MIXLY_DISPLAY_MATRIX_WRITE_NOW, "ON"],
					[Blockly.Msg.MIXLY_DISPLAY_MATRIX_DONT_WRITE, "OFF"]
				]), "WRITE");
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip();
		}
	};


	//点阵屏 旋转变量
	var display_Rotation_NUM = [
		[Blockly.Msg.MIXLY_0DEGREE, "0"],
		[Blockly.Msg.MIXLY_90DEGREE, "3"],
		[Blockly.Msg.MIXLY_180DEGREE, "2"],
		[Blockly.Msg.MIXLY_270DEGREE, "1"]
	];

	//点阵屏旋转
	Blockly.Blocks.nulllab_display_Max7219_Rotation = {
		init: function () {
			this.setColour(Blockly.Msg['DISPLAY_HUE']);
			this.appendDummyInput("")
				.appendField(Blockly.Msg.MIXLY_MATRIX_TYPE)
				.appendField('MAX7219');
			// this.appendDummyInput("")
			//   .appendField(Blockly.Msg.MIXLY_MATRIX_NAME)
			//   .appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
			this.appendValueInput("NO")
				.setCheck(Number)
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(Blockly.Msg.MIXLY_MAX7219_NO);
			this.appendDummyInput("")
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(Blockly.Msg.MIXLY_DISPLAY_MATRIX_ROTATE)
				.appendField(new Blockly.FieldDropdown(display_Rotation_NUM), "Rotation_TYPE");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setInputsInline(true);
			this.setTooltip(Blockly.Msg.MIXLY_TOOPTIP_Matrix_HK16T33_ROTATION);
		}
	};
	//点阵屏旋转
	Blockly.Blocks.nulllab_display_Max7219_setPosition = {
		init: function () {
			this.setColour(Blockly.Msg['DISPLAY_HUE']);
			this.appendDummyInput("")
				.appendField(Blockly.Msg.MIXLY_MATRIX_TYPE)
				.appendField('MAX7219');
			// this.appendDummyInput("")
			//   .appendField(Blockly.Msg.MIXLY_MATRIX_NAME)
			//   .appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
			this.appendValueInput("NO")
				.setCheck(Number)
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(Blockly.Msg.MIXLY_MAX7219_NO);
			this.appendValueInput("X")
				.setCheck(Number)
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("X");
			this.appendValueInput("Y")
				.setCheck(Number)
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("Y");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setInputsInline(true);
			this.setTooltip(Blockly.Msg.MIXLY_TOOPTIP_Matrix_HK16T33_ROTATION);
		}
	};
	//点阵屏旋转
	Blockly.Blocks.nulllab_display_HT16K33_Rotation = {
		init: function () {
			this.setColour(Blockly.Msg['DISPLAY_HUE']);
			this.appendDummyInput("")
				.appendField(Blockly.Msg.MIXLY_MATRIX_TYPE)
				.appendField('HT16K33');
			// this.appendDummyInput("")
			//   .appendField(Blockly.Msg.MIXLY_MATRIX_NAME)
			//   .appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
			this.appendDummyInput("")
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(Blockly.Msg.MIXLY_DISPLAY_MATRIX_ROTATE)
				.appendField(new Blockly.FieldDropdown(display_Rotation_NUM), "Rotation_TYPE");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setInputsInline(true);
			this.setTooltip(Blockly.Msg.MIXLY_TOOPTIP_Matrix_HK16T33_ROTATION);
		}
	};

	//点阵屏滚动显示字符
	Blockly.Blocks.nulllab_display_Matrix_TEXT = {
		init: function () {
			this.setColour(Blockly.Msg['DISPLAY_HUE']);
			this.appendDummyInput("")
				.appendField(Blockly.Msg.MIXLY_MATRIX_TYPE)
				.appendField(new Blockly.FieldDropdown(MATRIX_TYPES), 'TYPE');
			this.appendValueInput("TEXT", String)
				.setCheck([Number, String])
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(Blockly.Msg.texttodisplay);
			this.appendValueInput("Speed")
				.setCheck(Number)
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(Blockly.Msg.MIXLY_SPEED);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setInputsInline(true);
			this.setTooltip(Blockly.Msg.MIXLY_TOOPTIP_Matrix_HK16T33_TEXT);
		}
	};

	//点阵屏滚动显示文本
	Blockly.Blocks.nulllab_display_Matrix_print = {
		init: function () {
			this.setColour(Blockly.Msg['DISPLAY_HUE']);
			this.appendDummyInput("")
				.appendField(Blockly.Msg.MIXLY_MATRIX_TYPE)
				.appendField(new Blockly.FieldDropdown(MATRIX_TYPES), 'TYPE');
			this.appendValueInput("TEXT", String)
				.setCheck([Number, String])
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(Blockly.Msg.texttodisplay);
			this.appendDummyInput("")
				.appendField(new Blockly.FieldDropdown([
					[Blockly.Msg.MIXLY_DISPLAY_MATRIX_WRITE_NOW, "ON"],
					[Blockly.Msg.MIXLY_DISPLAY_MATRIX_DONT_WRITE, "OFF"]
				]), "WRITE");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setInputsInline(true);
			this.setTooltip(Blockly.Msg.MIXLY_TOOPTIP_Matrix_HK16T33_TEXT);
		}
	};

	//点阵屏显示_显示图案
	Blockly.Blocks.nulllab_display_Matrix_DisplayChar = {
		init: function () {
			this.setColour(Blockly.Msg['DISPLAY_HUE']);
			this.appendDummyInput("")
				.appendField(Blockly.Msg.MIXLY_MATRIX_TYPE)
				.appendField(new Blockly.FieldDropdown(MATRIX_TYPES), 'TYPE')
				.appendField(new Blockly.FieldDropdown([
					[Blockly.Msg.MIXLY_DISPLAY_MATRIX_WRITE_NOW, "ON"],
					[Blockly.Msg.MIXLY_DISPLAY_MATRIX_DONT_WRITE, "OFF"]
				]), "WRITE");
			// this.appendDummyInput("")
			//   .appendField(Blockly.Msg.MIXLY_MATRIX_NAME)
			//   .appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
			this.appendValueInput("NO")
				.setCheck(Number)
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(Blockly.Msg.MIXLY_MAX7219_NO);
			this.appendValueInput("LEDArray")
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(Blockly.Msg.MIXLY_DISPLAY_MATRIX_PICARRAY);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setInputsInline(false);
			this.setTooltip(Blockly.Msg.MIXLY_TOOPTIP_Matrix_HK16T33_DISPLAYCHAR);
		}
	};

	//点阵屏显示_图案数组
	Blockly.Blocks.nulllab_display_Matrix_LedArray = {
		init: function () {
			this.setColour(Blockly.Msg['DISPLAY_HUE']);
			this.appendDummyInput("")
				.appendField(Blockly.Msg.MIXLY_DISPLAY_MATRIX_ARRAYVAR)
				.appendField(new Blockly.FieldTextInput("LedArray1"), "VAR");
			this.appendDummyInput("")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a81")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a82")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a83")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a84")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a85")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a86")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a87")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a88");
			this.appendDummyInput("")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a71")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a72")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a73")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a74")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a75")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a76")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a77")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a78");
			this.appendDummyInput("")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a61")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a62")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a63")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a64")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a65")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a66")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a67")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a68");
			this.appendDummyInput("")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a51")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a52")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a53")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a54")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a55")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a56")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a57")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a58");
			this.appendDummyInput("")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a41")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a42")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a43")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a44")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a45")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a46")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a47")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a48");
			this.appendDummyInput("")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a31")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a32")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a33")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a34")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a35")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a36")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a37")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a38");
			this.appendDummyInput("")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a21")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a22")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a23")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a24")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a25")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a26")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a27")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a28");
			this.appendDummyInput("")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a11")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a12")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a13")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a14")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a15")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a16")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a17")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "a18");
			this.setOutput(true, Number);
			this.setTooltip(Blockly.Msg.MIXLY_TOOPTIP_Matrix_HK16T33_LEDARRAY);
		}
	};

	Blockly.Blocks.nulllab_display_matrix_bitmap = {
		init: function () {
			this.setColour(Blockly.Msg['DISPLAY_HUE']);
			this.appendDummyInput("")
				.appendField(Blockly.Msg.MIXLY_DISPLAY_MATRIX_ARRAYVAR)
				.appendField(new Blockly.FieldTextInput("LedArray1"), "VAR");
			this.appendDummyInput("")
				.setAlign(Blockly.ALIGN_CENTRE)
				.appendField(new Blockly.FieldBitmap([
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0]
				], null, {
					filledColor: '#000',
					emptyColor: '#5ba5a5',
					bgColor: '#e5e7f1'
				}), 'BITMAP');
			this.setOutput(true, Number);
			this.setTooltip("");
		}
	};

	//点阵屏亮度
	Blockly.Blocks.nulllab_display_Matrix_Brightness = {
		init: function () {
			this.setColour(Blockly.Msg['DISPLAY_HUE']);
			this.appendDummyInput("")
				.appendField(Blockly.Msg.MIXLY_MATRIX_TYPE)
				.appendField(new Blockly.FieldDropdown(MATRIX_TYPES), 'TYPE');
			// this.appendDummyInput("")
			//   .appendField(Blockly.Msg.MIXLY_MATRIX_NAME)
			//   .appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
			this.appendValueInput("Brightness")
				.setCheck(Number)
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(Blockly.Msg.MIXLY_BRIGHTNESS);
			this.setTooltip(Blockly.Msg.MIXLY_MAX7219_BRIGHTNESS_TOOLTIP);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setInputsInline(true);
		}
	};

	var MAX7219_FILLSCREEN_SELECT = [
		[Blockly.Msg.MAX7219_FILLSCREEN_ON, "fillScreen(1)"],
		[Blockly.Msg.MAX7219_FILLSCREEN_OFF, "fillScreen(0)"],
		//[Blockly.Msg.MAX7219_SHUTDOWN_ON, "shutdown(1)"],
		// [Blockly.Msg.MAX7219_SHUTDOWN_OFF, "shutdown(0)"]
	];

	//点阵屏 全屏亮灭
	Blockly.Blocks.nulllab_display_Matrix_fillScreen = {
		init: function () {
			this.setColour(Blockly.Msg['DISPLAY_HUE']);
			this.appendDummyInput("")
				.appendField(Blockly.Msg.MIXLY_MATRIX_TYPE)
				.appendField(new Blockly.FieldDropdown(MATRIX_TYPES), 'TYPE');
			// this.appendDummyInput("")
			//   .appendField(Blockly.Msg.MIXLY_MATRIX_NAME)
			//   .appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
			this.appendDummyInput("")
				.appendField(Blockly.Msg.MIXLY_STAT);
			this.appendDummyInput("")
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(new Blockly.FieldDropdown(MAX7219_FILLSCREEN_SELECT), "FILLSCREEN_TYPE");
			this.appendDummyInput("")
				.appendField(new Blockly.FieldDropdown([
					[Blockly.Msg.MIXLY_DISPLAY_MATRIX_WRITE_NOW, "ON"],
					[Blockly.Msg.MIXLY_DISPLAY_MATRIX_DONT_WRITE, "OFF"]
				]), "WRITE");
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip(Blockly.Msg.MIXLY_TOOPTIP_Matrix_HK16T33_POS);
		}
	};


	//点阵屏预设图案
	Blockly.Blocks.nulllab_Matrix_img = {
		init: function () {
			this.appendDummyInput("")
				.appendField(Blockly.Msg.MIXLY_MAX7219_IMG)
				.appendField(new Blockly.FieldDropdown([
					["↑", "18181818db7e3c18"],
					["↓", "183c7edb18181818"],
					["←", "080c06ffff060c08"],
					["→", "103060ffff603010"],
					["♥", "183c7effffffe742"],
					["▲", "00000000ff7e3c18"],
					["▼", "183c7eff00000000"],
					["◄", "080c0e0f0f0e0c08"],
					["►", "103070f0f0703010"],
					["△", "00000000ff422418"],
					["▽", "182442ff00000000"],
					["☺", "3c4299a581a5423c"],
					["○", "3c4281818181423c"],
					["◑", "3c72f1f1f1f1723c"],
					["◐", "3c4e8f8f8f8f4e3c"],
					["￥", "101010ff10ff2442"],
					["Χ", "8142241818244281"],
					["√", "0000010204885020"],
					["□", "007e424242427e00"],
					["▣", "007e425a5a427e00"],
					["◇", "1824428181422418"],
					["♀", "083e081c2222221c"],
					["♂", "0e1b111b9ea0c0f0"],
					["♪", "061f1e1010d07030"],
					["✈", "203098ffff983020"],
					["卍", "00f21212fe90909e"],
					["卐", "009e9090fe1212f2"],
					["|", "1010101010101010"],
					["—", "000000ff00000000"],
					["╱", "0102040810204080"],
					["＼", "8040201008040201"],
					["大", "41221408087f0808"],
					["中", "1010fe9292fe1010"],
					["小", "0e08492a2a080808"],
					["米", "00925438fe385492"],
					["正", "7f0a0a3a08087f00"],
					["囧", "ffa5a5bdc3a5a5ff"]
				]), "img_");
			this.setOutput(true);
			this.setTooltip('');
			this.setColour(Blockly.Msg['DISPLAY_HUE']);
			this.setTooltip(Blockly.Msg.MIXLY_TOOPTIP_Matrix_MAX7219_PREDEFARR);
			this.setHelpUrl('');
		}
	};

	//点阵屏 设置生效
	Blockly.Blocks.nulllab_display_Matrix_write = {
		init: function () {
			this.setColour(Blockly.Msg['DISPLAY_HUE']);
			this.appendDummyInput("")
				.appendField(Blockly.Msg.MIXLY_MATRIX_TYPE)
				.appendField(new Blockly.FieldDropdown(MATRIX_TYPES), 'TYPE')
				.appendField(Blockly.Msg.MIXLY_DISPLAY_MATRIX_WRITE);
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
		}
	};

	Blockly.Blocks.nulllab_DM11I2CDcMotorDriver = {
	  init: function () {
		this.setColour(220);
		this.appendDummyInput("")
		.appendField(Blockly.Msg.EM_I2CDCMOTOR)
		.appendField(new Blockly.FieldTextInput('0x15'), 'DM11I2CAddress')
		.appendField(Blockly.Msg.EM_DM11_DCMOTOR_PIN)
		.appendField(new Blockly.FieldDropdown([
		  ['M0', "0"],
		  ['M1', "2"],
		]), "nulllab_dm11_pin")
		.appendField(Blockly.Msg.EM_DCMOTOR_DIRECTION)
		.appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.EM_DCMOTOR_FORWORD, "forword"],
		  [Blockly.Msg.EM_DCMOTOR_BACK, "back"],
		]), "nulllab_dm11_direction")
		this.appendDummyInput("")
		this.appendValueInput("nulllab_dm11_speed", Number)
		.appendField(Blockly.Msg.EM_dm11_DCMOTOR_SPEED)
		.setCheck(Number);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	  }
	}


		  //RGB超声波模块读取超声波距离
	Blockly.Blocks.nulllab_readultrasonicdistance = {
		init: function () {
		  this.setColour(80);
		  this.appendDummyInput("")
		  .appendField(Blockly.Msg.EM_RGBULTRASONIC)
		  this.appendValueInput("DISTANCEPIN", Number)
            .appendField("PIN #")
            .setCheck(Number)
		  this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_READULTRASONICDISTANCE)
		  this.setOutput(true, Number);
		  this.setInputsInline(true);
		}
    }
	
	
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
	
	// 初始化五路循迹V3
	Blockly.Blocks.nulllab_lineTracker_v3={
	  init:function(){
		this.setColour(220);
			this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_INITFIVEINFRAREDTRACKING_V3)
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKING_V3)
			.appendField(new Blockly.FieldTextInput('myFiveInfraredTrackingV3'), 'nulllab_fiveInfraredTracking_V3')
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKING_V3_ADDR)
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
	Blockly.Blocks.nulllab_high_thresholds_v3={
	  init:function(){
		this.setColour(220);
			this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKING_V3)
			.appendField(new Blockly.FieldTextInput('myFiveInfraredTrackingV3'), 'nulllab_fiveInfraredTracking_V3')
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKINGSET)
			.appendField(new Blockly.FieldDropdown([ 
			 ['0', "0"],
			 ['1', "1"],
			 ['2', "2"],
			 ['3', "3"],
			 ['4', "4"],
			]), "index")
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKINGHIGHTHRESHOLD)
			this.appendDummyInput("")
			this.appendValueInput("nulllab_high_threshold", Number)
			this.setOutput(false);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('');
	  }
	}
		// 设值敏感度
	Blockly.Blocks.nulllab_low_thresholds_v3={
	  init:function(){
		this.setColour(220);
			this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKING_V3)
			.appendField(new Blockly.FieldTextInput('myFiveInfraredTrackingV3'), 'nulllab_fiveInfraredTracking_V3')
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKINGSET)
			.appendField(new Blockly.FieldDropdown([ 
			 ['0', "0"],
			 ['1', "1"],
			 ['2', "2"],
			 ['3', "3"],
			 ['4', "4"],
			]), "index")
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKINGLOWTHRESHOLD)
			this.appendDummyInput("")
			this.appendValueInput("nulllab_low_threshold", Number)
			this.setOutput(false);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('');
	  }
	}
	
	// 获取寻迹模块的传感器值
	Blockly.Blocks.nulllab_getSensorValues_v3_index={
	  init:function(){
		this.setColour(220);
			this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKING_V3)
			.appendField(new Blockly.FieldTextInput('myFiveInfraredTrackingV3'), 'nulllab_fiveInfraredTracking_V3')
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

	Blockly.Blocks.nulllab_getSensorStates_v3_index={
	  init:function(){
		this.setColour(220);
			this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKING_V3)
			.appendField(new Blockly.FieldTextInput('myFiveInfraredTrackingV3'), 'nulllab_fiveInfraredTracking_V3')
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

	    //颜色传感器V2读取的值
	Blockly.Blocks.nulllab_color_view_v2_value = {
		init: function () {
		  this.setColour(50);
		  this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_COLOR_VIEW_V2_VALUE)
			.appendField(new Blockly.FieldTextInput('myColorSensorV2'), 'nulllab_color_view_v2')
			.appendField(Blockly.Msg.EM_COLORVIEW)
			.appendField(new Blockly.FieldDropdown(
			  [
				['R(红)', 'R'],
				['G(绿)', 'G'],
				['B(蓝)', 'B']
			  ]
			), "nulllab_color")
		  this.setOutput(true, Number);
		  this.setTooltip('');
		  this.setInputsInline(true);
	}
	};
	
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

//DS1302 RTC
Blockly.Blocks.nulllab_DS1302_init = {
    init: function () {
        this.setColour(Blockly.Msg['SENSOR_HUE']);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.MIXLY_DS1302_INITPIN);
        //.appendField(new Blockly.FieldTextInput('myRTC'), 'RTCName');
        this.appendValueInput("RST", Number)
            .appendField("RST#")
            .setCheck(Number);
        this.appendValueInput("DAT")
            .appendField("DAT#")
            .setCheck(Number);
        this.appendValueInput("CLK")
            .appendField("CLK#")
            .setCheck(Number);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.MIXLY_TOOLTIP_DS1302_INIT);
    }
}

var RTCTypeList = [['DS1307', 'RtcDS1307'], ['DS3231', 'RtcDS3231']];
//DS1307 RTC
Blockly.Blocks.nulllab_DS1307_init = {
    init: function () {
        this.setColour(Blockly.Msg['SENSOR_HUE']);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MIXLY_RTCINIT);
        this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(RTCTypeList), 'RTCType');
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.MIXLY_PIN);
        //.appendField(new Blockly.FieldTextInput('myRTC'), 'RTCName');
        this.appendValueInput("SDA")
            .appendField("SDA#")
            .setCheck(Number);
        this.appendValueInput("SCL")
            .appendField("SCL#")
            .setCheck(Number);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.MIXLY_TOOLTIP_DS1307_INIT);
    },
};
//传感器-实时时钟块_时间变量
var RTC_TIME_TYPE = [
    [Blockly.Msg.MIXLY_YEAR, "Year"],
    [Blockly.Msg.MIXLY_MONTH, "Month"],
    [Blockly.Msg.MIXLY_DAY, "Day"],
    [Blockly.Msg.MIXLY_HOUR, "Hour"],
    [Blockly.Msg.MIXLY_MINUTE, "Minute"],
    [Blockly.Msg.MIXLY_SECOND, "Second"],
    [Blockly.Msg.MIXLY_WEEK, "DayOfWeek"],

];


//传感器-实时时钟块_获取时间
Blockly.Blocks.nulllab_rtc_get_time = {
    init: function () {
        this.setColour(Blockly.Msg['SENSOR_HUE']);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("RTC" + Blockly.Msg.MIXLY_RTCGETTIME);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT);
        //.appendField(new Blockly.FieldTextInput('myRTC'), 'RTCName');
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(RTC_TIME_TYPE), "TIME_TYPE");
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip(Blockly.Msg.MIXLY_TOOLTIP_RTC_GETTIME.replace('%1', this.getFieldValue("TIME_TYPE")));
    }
};
// //传感器-实时时钟块_设置时间
Blockly.Blocks.nulllab_rtc_time = {
    init: function () {
        this.setColour(Blockly.Msg['SENSOR_HUE']);
        this.appendValueInput("hour")
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MIXLY_HOUR);
        this.appendValueInput("minute")
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MIXLY_MINUTE);
        this.appendValueInput("second")
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MIXLY_SECOND);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setTooltip(Blockly.Msg.MIXLY_TOOLTIP_RTC_SETTIME);
    }
};

Blockly.Blocks.nulllab_rtc_date = {
    init: function () {
        this.setColour(Blockly.Msg['SENSOR_HUE']);
        this.appendValueInput("year")
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MIXLY_YEAR);
        this.appendValueInput("month")
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MIXLY_MONTH);
        this.appendValueInput("day")
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MIXLY_DAY);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setTooltip(Blockly.Msg.MIXLY_TOOLTIP_RTC_SETTIME);
    }
};
//设置时间
Blockly.Blocks.nulllab_rtc_set_time = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("RTC" + Blockly.Msg.MIXLY_RTCSETTIME);
        this.appendValueInput("date")
            .appendField(Blockly.Msg.MIXLY_GPS_DATE);
        this.appendValueInput("time")
            .appendField(Blockly.Msg.MIXLY_GPS_TIME);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg['SENSOR_HUE']);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//获取烧录时间和日期
Blockly.Blocks.nulllab_get_system_date_time = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MIXLY_GET + " " + Blockly.Msg.MIXLY_SYSTEM)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MIXLY_GPS_DATE, "DATE"], [Blockly.Msg.MIXLY_GPS_TIME, "TIME"]]), "type");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(40);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//传感器-实时时钟块_设置日期
Blockly.Blocks.RTC_set_date = {
    init: function () {
        this.setColour(Blockly.Msg['SENSOR_HUE']);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.MIXLY_RTCSETDATE);
        // .appendField(new Blockly.FieldTextInput('myRTC'), 'RTCName');

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.MIXLY_TOOLTIP_RTC_SETDATE);
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