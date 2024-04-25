(() => {
	'use strict';

	// goog.provide('Blockly.Blocks.NulllabSensor');

	goog.require('Blockly.Blocks');


//var KW_LEDPRINT = [["A","A"],["C","C"],["B","B"],["D","D"],["E","E"],["F","F"],["G","G"],["H","H"],["I","I"],["J","J"],["K","K"],["L","L"],["M","M"],["N","N"],["O","O"],["P","P"],["Q","Q"],["R","R"],["S","S"],["T","T"],["U","U"],["V","V"],["W","W"],["X","X"],["Y","Y"],["Z","Z"]];
var EM_IRKEY = [["1", "IR_KEYCODE_1"], ["2", "IR_KEYCODE_2"], ["3", "IR_KEYCODE_3"], ["4", "IR_KEYCODE_4"], ["5", "IR_KEYCODE_5"], ["6", "IR_KEYCODE_6"], ["7", "IR_KEYCODE_7"], ["8", "IR_KEYCODE_8"], ["9", "IR_KEYCODE_9"], ["0", "IR_KEYCODE_0"], ["*", "IR_KEYCODE_STAR"], ["#", "IR_KEYCODE_POUND"], [Blockly.Msg.EM_IRKEY_UP, "IR_KEYCODE_UP"], [Blockly.Msg.EM_IRKEY_DOWN, "IR_KEYCODE_DOWN"], ["OK", "IR_KEYCODE_OK"], [Blockly.Msg.EM_IRKEY_LEFT, "IR_KEYCODE_LEFT"], [Blockly.Msg.EM_IRKEY_RIGHT, "IR_KEYCODE_RIGHT"]];
var EM_IRKEY2 = [["1", "EM_IR_KEYCODE_1"], ["2", "EM_IR_KEYCODE_2"], ["3", "EM_IR_KEYCODE_3"], ["4", "EM_IR_KEYCODE_4"], ["5", "EM_IR_KEYCODE_5"], ["6", "EM_IR_KEYCODE_6"], ["7", "EM_IR_KEYCODE_7"], ["8", "EM_IR_KEYCODE_8"], ["9", "EM_IR_KEYCODE_9"], ["0", "EM_IR_KEYCODE_0"], ["A", "EM_IR_KEYCODE_A"], ["B", "EM_IR_KEYCODE_B"], ["C", "EM_IR_KEYCODE_C"], ["D", "EM_IR_KEYCODE_D"], ["+", "EM_IR_KEYCODE_PLUS"], ["-", "EM_IR_KEYCODE_REDUCE"], [Blockly.Msg.EM_IRKEY_UP, "EM_IR_KEYCODE_UP"], [Blockly.Msg.EM_IRKEY_DOWN, "EM_IR_KEYCODE_DOWN"], ["OK", "EM_IR_KEYCODE_OK"], [Blockly.Msg.EM_IRKEY_LEFT, "EM_IR_KEYCODE_LEFT"], [Blockly.Msg.EM_IRKEY_RIGHT, "EM_IR_KEYCODE_RIGHT"]];
var EM_PIANO = [["1", "BS_KEYCODE_1"], ["2", "BS_KEYCODE_2"], ["3", "BS_KEYCODE_3"], ["4", "BS_KEYCODE_4"], ["5", "BS_KEYCODE_5"], ["6", "BS_KEYCODE_6"], ["7", "BS_KEYCODE_7"], ["8", "BS_KEYCODE_8"]];
var EM_PIANOV2 = [["1", "EM_PIANO_KEYCODE_1"], ["2", "EM_PIANO_KEYCODE_2"], ["3", "EM_PIANO_KEYCODE_3"], ["4", "EM_PIANO_KEYCODE_4"], ["5", "EM_PIANO_KEYCODE_5"], ["6", "EM_PIANO_KEYCODE_6"], ["7", "EM_PIANO_KEYCODE_7"], ["8", "EM_PIANO_KEYCODE_8"]];

var EM_BLUETOOTHMODES = [[Blockly.Msg.EM_BLUETOOTHMODES_RGB, "2"], [Blockly.Msg.EM_BLUETOOTHMODES_BUZZER, "3"]];
var EM_MAXIMAGE = [[Blockly.Msg.EM_MAXIMAGE_ZERO, "0"], [Blockly.Msg.EM_MAXIMAGE_ONE, "1"], [Blockly.Msg.EM_MAXIMAGE_TWO, "2"], [Blockly.Msg.EM_MAXIMAGE_THREE, "3"], [Blockly.Msg.EM_MAXIMAGE_FOUR, "4"], [Blockly.Msg.EM_MAXIMAGE_FIVE, "5"], [Blockly.Msg.EM_MAXIMAGE_SIX, "6"], [Blockly.Msg.EM_MAXIMAGE_SEVEN, "7"], [Blockly.Msg.EM_MAXIMAGE_EIGHT, "8"], [Blockly.Msg.EM_MAXIMAGE_NINE, "9"], [Blockly.Msg.EM_MAXIMAGE_SMILE, "10"], [Blockly.Msg.EM_MAXIMAGE_HAPPYOPEN, "11"], [Blockly.Msg.EM_MAXIMAGE_HAPPYCLOSED, "12"], [Blockly.Msg.EM_MAXIMAGE_HEART, "13"], [Blockly.Msg.EM_MAXIMAGE_BIGSURPRISE, "14"], [Blockly.Msg.EM_MAXIMAGE_SMALLSURPRISE, "15"], [Blockly.Msg.EM_MAXIMAGE_TONGUE, "16"], [Blockly.Msg.EM_MAXIMAGE_VAMP1, "17"], [Blockly.Msg.EM_MAXIMAGE_VAMP2, "18"], [Blockly.Msg.EM_MAXIMAGE_LINEMOUTH, "19"], [Blockly.Msg.EM_MAXIMAGE_CONFUSED, "20"], [Blockly.Msg.EM_MAXIMAGE_DIAGONAL, "21"], [Blockly.Msg.EM_MAXIMAGE_SAD, "22"], [Blockly.Msg.EM_MAXIMAGE_SADOPEN, "23"], [Blockly.Msg.EM_MAXIMAGE_SADCLOSED, "24"], [Blockly.Msg.EM_MAXIMAGE_OKMOUTH, "25"], [Blockly.Msg.EM_MAXIMAGE_XMOUTH, "26"], [Blockly.Msg.EM_MAXIMAGE_INTTEROGATION, "27"], [Blockly.Msg.EM_MAXIMAGE_THUNDER, "28"], [Blockly.Msg.EM_MAXIMAGE_CULITO, "29"], [Blockly.Msg.EM_MAXIMAGE_ANGRY, "30"]];
var EM_RGBPOSITION = [[Blockly.Msg.EM_ALL, "E_RGB_ALL"], [Blockly.Msg.EM_RIGHT, "E_RGB_RIGHT"], [Blockly.Msg.EM_LEFT, "E_RGB_LEFT"]];
var EM_RGBCOLOR = [[Blockly.Msg.EM_RED, "RGB_RED"], [Blockly.Msg.EM_GREEN, "RGB_GREEN"], [Blockly.Msg.EM_BLUE, "RGB_BLUE"], [Blockly.Msg.EM_YELLOW, "RGB_YELLOW"], [Blockly.Msg.EM_PURPLE, "RGB_PURPLE"], [Blockly.Msg.EM_ORANGE, "RGB_ORANGE"], [Blockly.Msg.EM_INDIGO, "RGB_INDIGO"], [Blockly.Msg.EM_VIOLET, "RGB_VIOLET"], [Blockly.Msg.EM_WHITE, "RGB_WHITE"], [Blockly.Msg.EM_BLACK, "0x000000"]];
var EM_RGBSTYLE = [[Blockly.Msg.EM_NONE, "E_EFFECT_NONE"], [Blockly.Msg.EM_BREATHING, "E_EFFECT_BREATHING"], [Blockly.Msg.EM_ROTATE, "E_EFFECT_ROTATE"], [Blockly.Msg.EM_FLASH, "E_EFFECT_FLASH"]];
// 手柄摇杆和按钮
var EM_JOBONE_X = [['X','1'],['Y','2']];
var EM_JOBONE_BTN = [['A','BUTOON_UP'],['B','BUTOON_RIGHT'],['C','BUTOON_DOWN'],['D','BUTOON_LEFT'],[Blockly.Msg.EM_CENTER,'JOYSTICK_BUTTON']];
var EM_JOBONE_LAST = [[Blockly.Msg.EM_PRESSDOWNS,"PRESS_DOWN"],[Blockly.Msg.EM_PRESSUPS,"PRESS_UP"],[Blockly.Msg.EM_PRESSONES,"SINGLE_CLICK"],[Blockly.Msg.EM_PRESSTWOS,"DOUBLE_CLICK"],[Blockly.Msg.EM_PRESSYEARS,"LONG_PRESS_HOLD"],[Blockly.Msg.EM_PRESSNOS,"NONE_PRESS"]];

// 手柄左右摇杆
var EM_LR_press = [[Blockly.Msg.EM_LRPRESSL,'A'],[Blockly.Msg.EM_LRPRESSR,'B']];

// 指南针
var EM_COMPASS_VAU = [['X方向','1'],['Y方向','2'],['Z方向','3'],[Blockly.Msg.EM_AZIMUTHS,'4']];
// 陀螺仪
var EM_GYROVALUE = [[Blockly.Msg.EM_GYROVALUEA,'GetGravity(BT_X)'],[Blockly.Msg.EM_GYROVALUEB,'GetGravity(BT_Y)'],[Blockly.Msg.EM_GYROVALUEC,'GetGravity(BT_Z)'],[Blockly.Msg.EM_GYROVALUED,'GetRoll()'],[Blockly.Msg.EM_GYROVALUEE,'GetPitch()']];

// 五路循迹
var EM_FIVE_INFRARED_TRACKING_GROUP = [[Blockly.Msg.GROUP1, '0'],[Blockly.Msg.GROUP2, '1'],[Blockly.Msg.GROUP3, '2'],[Blockly.Msg.GROUP4, '3'],[Blockly.Msg.GROUP5, '4']];

/* 
*传感器
*/
//超声波测距
Blockly.Blocks.nulllab_ultrasonicread = {
    init: function () {
      this.setColour(50);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_ULTRASONICREAD);
      this.appendValueInput("nulllab_trigpin", Number)
        .appendField(Blockly.EN_TRIG)
        .setCheck(Number);
      this.appendValueInput("nulllab_echopin", Number)
        .appendField(Blockly.Msg.EM_ECHO)
        .setCheck(Number);
        this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_ULTRASONICDISTANCE);
      this.setInputsInline(true);
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
//rgb超声波模块初始化
Blockly.Blocks.nulllab_initrgbultrasonic = {
    init: function () {
      this.setColour(80);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_INITRGBULTRASONIC)
        .appendField(new Blockly.FieldTextInput('myRGBUltrasonic'), 'nulllab_rgbUltrasonic')
        .appendField(Blockly.Msg.EM_ULTRASONICPIN)
        .appendField(new Blockly.FieldDropdown([
          ['6', "6"],
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_ultrasonicpin")
        .appendField(Blockly.Msg.EM_RGBPIN)
        .appendField(new Blockly.FieldDropdown([
          ['5', "5"],
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_rgbpin")
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };

//设置RGB超声波模块颜色样式
Blockly.Blocks.nulllab_setcolorandstyle = {
    init: function () {
      this.setColour(80);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_SETCOLOR)
        .appendField(new Blockly.FieldTextInput('myRGBUltrasonic'), 'nulllab_rgbUltrasonic')
        .appendField(Blockly.Msg.EM_PROBE)
        .appendField(new Blockly.FieldDropdown(EM_RGBPOSITION), "nulllab_rgbposition");
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_SETRGBCOLOR)
        .appendField(new Blockly.FieldDropdown(EM_RGBCOLOR), "nulllab_rgbcolor");
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_SETSTYLE)
        .appendField(new Blockly.FieldDropdown(EM_RGBSTYLE), "nulllab_rgbstyle");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };
  //RGB超声波模块读取超声波距离
Blockly.Blocks.nulllab_readultrasonicdistance = {
    init: function () {
      this.setColour(80);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_RGBULTRASONIC)
      .appendField(new Blockly.FieldTextInput('myRGBUltrasonic'), 'nulllab_rgbUltrasonic')
        .appendField(Blockly.Msg.EM_READULTRASONICDISTANCE)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
//压力传感器
Blockly.Blocks.nulllab_pressure = {
    init: function () {
      this.setColour(120);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_PRESSUREVALUE)
        .appendField(Blockly.Msg.EM_PIN)
        .appendField(new Blockly.FieldDropdown(
          [
            ['A0', 'A0'],
            ['A1', 'A1'],
            ['A2', 'A2'],
            ['A3', 'A3'],
            ['A4', 'A4'],
            ['A5', 'A5']
          ]
        ), "nulllab_pin")
      .appendField(Blockly.Msg.EM_GETANALOG)
      this.setOutput(true, Number);
      this.setTooltip(true);
    }
  };
  //水蒸气感器
  Blockly.Blocks.nulllab_water_vapor = {
    init: function () {
      this.setColour(160);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_WATERVAPOR)
        .appendField(Blockly.Msg.EM_PIN)
        .appendField(new Blockly.FieldDropdown(
          [
            ['A0', 'A0'],
            ['A1', 'A1'],
            ['A2', 'A2'],
            ['A3', 'A3'],
            ['A4', 'A4'],
            ['A5', 'A5']
          ]
        ), "nulllab_pin")
        .appendField(Blockly.Msg.EM_GETANALOG)
      this.setOutput(true, Number);
      this.setTooltip(true);
    }
  };
// 指南针
Blockly.Blocks.nulllab_compass_vue={
	init:function(){
		this.setColour(200);
		this.appendDummyInput("")
		    .appendField(Blockly.Msg.EM_COMMPASSONE)
        .appendField(new Blockly.FieldTextInput('myCompass'), 'nulllab_compass')
        .appendField(Blockly.Msg.EM_COMMPASSONE_GET)
		    .appendField(new Blockly.FieldDropdown(EM_COMPASS_VAU), "nulllab_capa")
		    .appendField(Blockly.Msg.EM_COMMPASSTWO);
		this.setOutput(true);
		this.setPreviousStatement(false, null);
		this.setNextStatement(false, null);
		this.setTooltip('');
	}
};
Blockly.Blocks.nulllab_compass_star={
	init:function(){
		this.setColour(200);
		this.appendDummyInput("")
    .appendField(Blockly.Msg.EM_COMPASS)
    .appendField(new Blockly.FieldTextInput('myCompass'), 'nulllab_compass')
		    .appendField(Blockly.Msg.EM_COMMPASSTHR)
		this.setOutput(false);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.nulllab_fiveInfraredTracking={
  init:function(){
    this.setColour(220);
		this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKING)
        .appendField(new Blockly.FieldTextInput('myFiveInfraredTracking'), 'nulllab_fiveInfraredTracking')
        .appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKINGINIT)
        // .appendField("五路循迹模块 从左至右第")
        .appendField(new Blockly.FieldDropdown(EM_FIVE_INFRARED_TRACKING_GROUP), "nulllab_infrared")
      .appendField(Blockly.Msg.EM_INFRAREDTRACKING)
      // .appendField("组探头检测到黑线?")
    this.setOutput(true, Boolean);
    this.setInputsInline(true);
  }
}

Blockly.Blocks.nulllab_fiveInfraredTrackingData={
  init:function(){
    this.setColour(220);
		this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKING)
        .appendField(new Blockly.FieldTextInput('myFiveInfraredTracking'), 'nulllab_fiveInfraredTracking')
        .appendField(Blockly.Msg.EM_FIVEINFRAREDTRACKINGDATA)
        // .appendField("五路循迹模块 从左至右第")
      // .appendField("组探头检测到黑线?")
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

/* 
//基础输入块
*/
//设置矩阵键盘引脚
Blockly.Blocks.nulllab_keypad = {
    init: function () {
      this.setColour(100);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_DEYPAD);
      this.appendValueInput("nulllab_row_1", Number)
        .appendField(Blockly.Msg.EM_DEYPADROW1)
        .setCheck(Number);
      this.appendValueInput("nulllab_row_2", Number)
        .appendField(Blockly.Msg.EM_DEYPADROW2)
        .setCheck(Number);
      this.appendValueInput("nulllab_row_3", Number)
        .appendField(Blockly.Msg.EM_DEYPADROW3)
        .setCheck(Number);
      this.appendValueInput("nulllab_row_4", Number)
        .appendField(Blockly.Msg.EM_DEYPADROW4)
        .setCheck(Number);
      this.appendValueInput("nulllab_col_1", Number)
        .appendField(Blockly.Msg.EM_DEYPADCOL1)
        .setCheck(Number);
      this.appendValueInput("nulllab_col_2", Number)
        .appendField(Blockly.Msg.EM_DEYPADCOL2)
        .setCheck(Number);
      this.appendValueInput("nulllab_col_3", Number)
        .appendField(Blockly.Msg.EM_DEYPADCOL3)
        .setCheck(Number);
      this.appendValueInput("nulllab_col_4", Number)
        .appendField(Blockly.Msg.EM_DEYPADCOL4)
        .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };
  //获取矩阵键盘值
  Blockly.Blocks.nulllab_getkeypad = {
    init: function () {
      this.setColour(100);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_GETKEYPAD)
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };
  //矩阵键盘按键被按下
  Blockly.Blocks.nulllab_keypadpressed = {
    init: function () {
      this.setColour(100);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_KEYPADPRESED)
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
    }
  };
  //矩阵键盘按键值
  Blockly.Blocks.nulllab_keypadvalue = {
    init: function () {
      this.setColour(100);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_KEYPADVALUE)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
  
//初始化钢琴模块 引脚value
Blockly.Blocks.nulllab_initPiano = {
    init: function () {
      this.setColour(130);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_PIANOPORT)
      // this.appendDummyInput("")
      //   .appendField(Blockly.Msg.EM_IICTUBECLK)
        .appendField(new Blockly.FieldDropdown([
          ['5', "5"],
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_clk")
      // this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_IICTUBEDIO)
        .appendField(new Blockly.FieldDropdown([
          ['6', "6"],
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"]
        ]), "nulllab_dio")
        // this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_PIANO)
        .appendField(new Blockly.FieldDropdown(EM_PIANO), "nulllab_piano")
        // this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_PIANO_ISTOUCH)
      this.setInputsInline(true);
      this.setOutput(true, Boolean);
      this.setTooltip('');
    }
  };
  
 //初始化钢琴模块 V2 引脚value
Blockly.Blocks.nulllab_initPiano_v2 = {
    init: function () {
      this.setColour(130);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_PIANOPORT_V2)
        .appendField(new Blockly.FieldDropdown([
          ['5', "5"],
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_clk")
        .appendField(Blockly.Msg.EM_IICTUBEDIO)
        .appendField(new Blockly.FieldDropdown([
          ['6', "6"],
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_dio")
        .appendField(Blockly.Msg.EM_PIANO_V2)
        .appendField(new Blockly.FieldDropdown(EM_PIANOV2), "nulllab_piano")
        .appendField(Blockly.Msg.EM_PIANO_ISTOUCH)
	  this.setInputsInline(true);
      this.setOutput(true, Boolean);
      this.setTooltip('');
    }
  };

Blockly.Blocks.nulllab_sliding_potentiometer = {
  init: function () {
    this.setColour(160);
    this.appendDummyInput("")
    .appendField(Blockly.Msg.EM_PIN)
    .appendField(new Blockly.FieldDropdown([
      ['A0', "A0"],
      ['A1', "A1"],
      ['A2', "A2"],
      ['A3', "A3"],
      ['A4', "A4"],
      ['A5', "A5"],
    ]), "nulllab_slidingPort")
      .appendField(Blockly.Msg.EM_SLIDINGPOTENTIOMETER)
      this.setOutput(true, Number);
      this.setInputsInline(true);
  }
}

Blockly.Blocks.nulllab_digitalInitPort = {
  init: function () {
    this.setColour(160);
    this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_DIGITALPORTINIT)
      .appendField(new Blockly.FieldTextInput('myEncoder'), 'nulllab_encoder')
      .appendField(Blockly.Msg.EM_DIGITALPORTA)
      .appendField(new Blockly.FieldDropdown([
        ['3', "3"],
        ['0', "0"],
        ['1', "1"],
        ['2', "2"],
        ['4', "4"],
        ['5', "5"],
        ['6', "6"],
        ['7', "7"],
        ['8', "8"],
        ['9', "9"],
        ['10', "10"],
        ['11', "11"],
        ['12', "12"],
        ['13', "13"],
        ['A0', "A0"],
        ['A1', "A1"],
        ['A2', "A2"],
        ['A3', "A3"],
        ['A4', "A4"],
        ['A5', "A5"],
      ]), "nulllab_porta")
      .appendField(Blockly.Msg.EM_DIGITALPORTB)
      .appendField(new Blockly.FieldDropdown([
        ['5', "5"],
        ['0', "0"],
        ['1', "1"],
        ['2', "2"],
        ['3', "3"],
        ['4', "4"],
        ['6', "6"],
        ['7', "7"],
        ['8', "8"],
        ['9', "9"],
        ['10', "10"],
        ['11', "11"],
        ['12', "12"],
        ['13', "13"],
        ['A0', "A0"],
        ['A1', "A1"],
        ['A2', "A2"],
        ['A3', "A3"],
        ['A4', "A4"],
        ['A5', "A5"],
      ]), "nulllab_portb")
      .appendField(Blockly.Msg.EM_DIGITALPORTD)
      .appendField(new Blockly.FieldDropdown([
        ['6', "6"],
        ['0', "0"],
        ['1', "1"],
        ['2', "2"],
        ['3', "3"],
        ['4', "4"],
        ['5', "5"],
        ['7', "7"],
        ['8', "8"],
        ['9', "9"],
        ['10', "10"],
        ['11', "11"],
        ['12', "12"],
        ['13', "13"],
        ['A0', "A0"],
        ['A1', "A1"],
        ['A2', "A2"],
        ['A3', "A3"],
        ['A4', "A4"],
        ['A5', "A5"],
      ]), "nulllab_portd")
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
  }
}


//旋转编码器
Blockly.Blocks.nulllab_digital = {
    init: function () {
      this.setColour(160);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_ENCODER)
        .appendField(new Blockly.FieldTextInput('myEncoder'), 'nulllab_encoder')
        .appendField(Blockly.Msg.EM_DIGITAL)
      this.setOutput(true, Boolean);
      this.setTooltip('');
    }
  };
  Blockly.Blocks.nulllab_print = {
    init: function () {
      this.setColour(160);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_ENCODER)
      .appendField(new Blockly.FieldTextInput('myEncoder'), 'nulllab_encoder')
      .appendField(Blockly.Msg.EM_PRINT)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
//矩阵键盘初始化
Blockly.Blocks.nulllab_initialize_matrix_keyboard = {
    init: function () {
      this.setColour(190);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_INITIALIZE_MATRIX_KEYBOARD)
        .appendField(new Blockly.FieldTextInput('myMatrixKeyboard'), 'nulllab_keyboard')
        .appendField(Blockly.Msg.EM_SCLPIN)
        .appendField(new Blockly.FieldDropdown([
          ['5', "5"],
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_scl_pin")
        .appendField(Blockly.Msg.EM_SDOPIN)
        .appendField(new Blockly.FieldDropdown([
          ['6', "6"],
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A5', "A5"],
          ['A4', "A4"],
        ]), "nulllab_sdo_pin")
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };
  //矩阵键盘状态
  Blockly.Blocks.nulllab_matrix_keyboard_status = {
    init: function () {
      this.setColour(190);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_MATRIX_KEYBOARD)
        .appendField(new Blockly.FieldTextInput('myMatrixKeyboard'), 'nulllab_keyboard')
        .appendField(Blockly.Msg.EM_MATRIX_KEY)
        .appendField(new Blockly.FieldDropdown(
          [
            ['1', "KEYPAD_KEYCODE_1"],
            ['2', "KEYPAD_KEYCODE_2"],
            ['3', "KEYPAD_KEYCODE_3"],
            ['4', "KEYPAD_KEYCODE_4"],
            ['5', "KEYPAD_KEYCODE_5"],
            ['6', "KEYPAD_KEYCODE_6"],
            ['7', "KEYPAD_KEYCODE_7"],
            ['8', "KEYPAD_KEYCODE_8"],
            ['9', "KEYPAD_KEYCODE_9"],
            ['0', "KEYPAD_KEYCODE_0"],
            ['*', "KEYPAD_KEYCODE_STAR"],
            ['#', "KEYPAD_KEYCODE_POUND"],
            ['A', "KEYPAD_KEYCODE_A"],
            ['B', "KEYPAD_KEYCODE_B"],
            ['C', "KEYPAD_KEYCODE_C"],
            ['D', "KEYPAD_KEYCODE_D"]
          ]
        ), "nulllab_key")
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_STATUS)
        
      this.setOutput(true, Boolean);
      this.setTooltip('');
      this.setInputsInline(true);
    }
  };
  //获取矩阵键盘按键值
  Blockly.Blocks.nulllab_matrix_keyboard_values = {
    init: function () {
      this.setColour(190);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_MATRIX_KEYBOARD)
      .appendField(new Blockly.FieldTextInput('myMatrixKeyboard'), 'nulllab_keyboard')
        .appendField(Blockly.Msg.EM_MATRIX_KEYBOARD_VALUES)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
  
  //矩阵键盘初始化
Blockly.Blocks.nulllab_init_matrix_keyboard_I2C_V2 = {
    init: function () {
      this.setColour(190);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_INITIALIZE_MATRIX_KEYBOARD_V2)
        .appendField(new Blockly.FieldTextInput('myMatrixKeyboardV2'), 'nulllab_keyboard_v2')
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

  //获取矩阵键盘按键值
  Blockly.Blocks.nulllab_matrix_keyboard_values_V2 = {
    init: function () {
      this.setColour(190);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_MATRIX_KEYBOARD_V2)
      .appendField(new Blockly.FieldTextInput('myMatrixKeyboardV2'), 'nulllab_keyboard_v2')
        .appendField(Blockly.Msg.EM_MATRIX_KEYBOARD_VALUES_V2)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
  
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
  
  
// 遥控手柄初始化
Blockly.Blocks.nulllab_hand_initalize_header={
	init:function(){
		this.setColour(210);
		this.appendDummyInput("")
		    .appendField(Blockly.Msg.EM_HANDINIT_HEADER)
        .appendField(new Blockly.FieldTextInput('myJoystickHandle'), 'nulllab_joystick')
		this.setInputsInline(false);
    this.setPreviousStatement(true, null);
		// this.setPreviousStatement(false, null);
    this.setNextStatement(true, null);

		// this.setNextStatement(false, null);
		this.setTooltip('');
	}
};
// this.setPreviousStatement(true,
// 按下释放状态判断模块
Blockly.Blocks.nulllab_hand_press_that={
	init:function(){
		this.setColour(210);
		this.appendDummyInput("")
		    .appendField(Blockly.Msg.EM_HAND_PRESS_THATA)
        .appendField(new Blockly.FieldTextInput('myJoystickHandle'), 'nulllab_joystick')
			.appendField(new Blockly.FieldDropdown(EM_JOBONE_BTN), "nulllab_btnfour")
			.appendField(Blockly.Msg.EM_HAND_PRESS_THATB);
		this.setInputsInline(true);
		this.setOutput(true, Number);
		this.setPreviousStatement(false, null);
		this.setNextStatement(false, null);
		this.setTooltip('');
	}
};
Blockly.Blocks.nulllab_hand_release_that={
	init:function(){
		this.setColour(210);
		this.appendDummyInput("")
		    .appendField(Blockly.Msg.EM_HAND_PRESS_THATA)
        .appendField(new Blockly.FieldTextInput('myJoystickHandle'), 'nulllab_joystick')
        .appendField(Blockly.Msg.EM_HAND_PRESS_THATA_KEY)
			.appendField(new Blockly.FieldDropdown(EM_JOBONE_BTN), "nulllab_btnfour")
			.appendField(Blockly.Msg.EM_HAND_PRESS_THATC);
		this.setInputsInline(true);
		this.setOutput(true, Number);
		this.setPreviousStatement(false, null);
		this.setNextStatement(false, null);
		this.setTooltip('');
	}
};
//手柄摇杆模块
Blockly.Blocks.nulllab_hand_jobone_header_x={
  init:function(){
    this.setColour(210);
    this.appendDummyInput("")
	  .appendField(Blockly.Msg.EM_HAND_IOBONE_HEADER)
    .appendField(new Blockly.FieldTextInput('myJoystickHandle'), 'nulllab_joystick')
    .appendField(Blockly.Msg.EM_HAND_IOBONE_HEADERA)
      .appendField(new Blockly.FieldDropdown(EM_JOBONE_X), "nulllab_decasx")
	  .appendField(Blockly.Msg.EM_HAND_IOBONE_HEADERB)
    this.setOutput(true, Number);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setTooltip('');
  }
};
//手柄按键模块
Blockly.Blocks.nulllab_hand_botton_fore={
	init:function(){
		this.setColour(210);
		this.appendDummyInput("")
		    .appendField(Blockly.Msg.EM_HAND_PRESS_THATA)
        .appendField(new Blockly.FieldTextInput('myJoystickHandle'), 'nulllab_joystick')
        .appendField(Blockly.Msg.EM_HAND_PRESS_THATA_KEY)
		    .appendField(new Blockly.FieldDropdown(EM_JOBONE_BTN), "nulllab_btnfour")
		    .appendField(Blockly.Msg.EM_HAND_BOTTON_FOREC)
		    .appendField(new Blockly.FieldDropdown(EM_JOBONE_LAST), "nulllab_btnlast")
		this.setInputsInline(true);
		this.setOutput(true, Number);
		this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
		this.setTooltip('');
	}
};
// 手柄左右摇杆
Blockly.Blocks.nulllab_hand_lr_press={
	init:function(){
		this.setColour(210);
		this.appendDummyInput("")
		    .appendField(Blockly.Msg.EM_HAND_LR_PRESSA)
			.appendField(new Blockly.FieldDropdown(EM_LR_press), "nulllab_lrpre")
			.appendField(new Blockly.FieldDropdown(EM_JOBONE_X), "nulllab_jobone")
			.appendField(Blockly.Msg.EM_HAND_LR_PRESSB)
		this.setOutput(true, Number);
		this.setPreviousStatement(false, null);
		this.setNextStatement(false, null);
		this.setTooltip('');
	}
}

/* 
//显示器
*/
//初始化7段数码管
Blockly.Blocks.nulllab_7ledinit = {
    init: function () {
      this.setColour(30);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_7LEDINIT);
      this.appendValueInput("nulllab_pin1", Number)
        .appendField(Blockly.Msg.EM_A)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin2", Number)
        .appendField(Blockly.Msg.EM_B)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin3", Number)
        .appendField(Blockly.Msg.EM_C)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin4", Number)
        .appendField(Blockly.Msg.EM_D)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin5", Number)
        .appendField(Blockly.Msg.EM_E)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin6", Number)
        .appendField(Blockly.Msg.EM_F)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin7", Number)
        .appendField(Blockly.Msg.EM_G)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin8", Number)
        .appendField(Blockly.Msg.EM_H)
        .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
  
    }
  };
  //7段数码管显示数字value
  Blockly.Blocks.nulllab_7leddisplaynum = {
    init: function () {
      this.setColour(30);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_7LEDDISPLAYNUM);
      this.appendValueInput("nulllab_displaynum", Number)
        .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
  
    }
  };
  //初始化4*7段数码管
Blockly.Blocks.nulllab_47ledinit = {
    init: function () {
      this.setColour(70);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_47LEDINIT);
      this.appendValueInput("nulllab_pin1", Number)
        .appendField(Blockly.Msg.EM_A)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin2", Number)
        .appendField(Blockly.Msg.EM_B)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin3", Number)
        .appendField(Blockly.Msg.EM_C)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin4", Number)
        .appendField(Blockly.Msg.EM_D)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin5", Number)
        .appendField(Blockly.Msg.EM_E)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin6", Number)
        .appendField(Blockly.Msg.EM_F)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin7", Number)
        .appendField(Blockly.Msg.EM_G)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin8", Number)
        .appendField(Blockly.Msg.EM_H)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin9", Number)
        .appendField(Blockly.Msg.EM_D1)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin10", Number)
        .appendField(Blockly.Msg.EM_D2)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin11", Number)
        .appendField(Blockly.Msg.EM_D3)
        .setCheck(Number);
      this.appendValueInput("nulllab_pin12", Number)
        .appendField(Blockly.Msg.EM_D4)
        .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };
  //4*7段数码管显示
  Blockly.Blocks.nulllab_7ledcountnum = {
    init: function () {
      this.setColour(70);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_7LEDFROM);
      this.appendValueInput("nulllab_count", Number)
        .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
  
    }
  };
  
  Blockly.Blocks.nulllab_7ledcountnumoff = {
    init: function () {
      this.setColour(70);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_7LEDFROMOFF);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
  
    }
  };
//初始化点阵屏
Blockly.Blocks.nulllab_dianzhen = {
    init: function () {
      this.setColour(110);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_INITDIANZHEN)
        .appendField(new Blockly.FieldTextInput('myMaxMatrix'), 'nulllab_maxMaxtrix')
        .appendField(Blockly.Msg.EM_DIN)
        .appendField(new Blockly.FieldDropdown([
          ['7', "7"],
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"]
        ]), "nulllab_din")
      .appendField(Blockly.Msg.EM_CS)
      .appendField(new Blockly.FieldDropdown([
        ['6', "6"],
        ['0', "0"],
        ['1', "1"],
        ['2', "2"],
        ['3', "3"],
        ['4', "4"],
        ['5', "5"],
        ['7', "7"],
        ['8', "8"],
        ['9', "9"],
        ['10', "10"],
        ['11', "11"],
        ['12', "12"],
        ['13', "13"],
        ['A0', "A0"],
        ['A1', "A1"],
        ['A2', "A2"],
        ['A3', "A3"],
        ['A4', "A4"],
        ['A5', "A5"]
      ]), "nulllab_cs")
      // this.appendValueInput("nulllab_cs", Number)
      //   .setCheck(Number);
      // this.appendValueInput("nulllab_clk", Number)
        .appendField(Blockly.Msg.EM_CLK)
        .appendField(new Blockly.FieldDropdown([
          ['5', "5"],
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"]
        ]), "nulllab_clk")
        // .setCheck(Number);
      this.appendValueInput("nulllab_count", Number)
        .appendField(Blockly.Msg.EM_COUNT)
        .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };
  //点阵屏显示 下拉
  Blockly.Blocks.nulllab_dianzhenprint = {
    init: function () {
      this.setColour(110);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_MAXIMAGES)
        .appendField(new Blockly.FieldTextInput('myMaxMatrix'), 'nulllab_maxMaxtrix')
        .appendField(Blockly.Msg.EM_MAXIMAGESDISPLAY)
        .appendField(new Blockly.FieldDropdown(EM_MAXIMAGE), "nulllab_maximage");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
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
  
//iic数码管
// Blockly.Blocks.kw_iicinit = {
//     init: function () {
//       this.setColour(150);
//       this.appendDummyInput("")
//         .appendField(Blockly.KW_IICINIT)
//       this.appendDummyInput("")
//         .appendField(Blockly.KW_IICTUBECLK)
//       this.appendValueInput("clk", Number)
//         .setCheck(Number);
//       this.appendDummyInput("")
//         .appendField(Blockly.KW_IICTUBEDIO)
//       this.appendValueInput("dio", Number)
//         .setCheck(Number);
//       this.setInputsInline(true);
//       this.setPreviousStatement(true, null);
//       this.setInputsInline(true);
//       this.setNextStatement(true, null);
//     }
//   }; 
  // Blockly.Blocks.kw_iicdisplaynum = {
  //   init: function () {
  //     this.setColour(150);
  //     this.appendDummyInput("")
  //       .appendField(Blockly.KW_IICDISPLAYNUM)
  //     this.appendDummyInput("")
  //     //.appendField(Blockly.KW_IICTUBENUM1)
  //     this.appendValueInput("num1", Number)
  //       .setCheck(Number);
  //     this.appendDummyInput("")
  //     //.appendField(Blockly.KW_IICTUBENUM2)
  //     this.appendValueInput("num2", Number)
  //       .setCheck(Number);
  //     this.appendDummyInput("")
  //     //.appendField(Blockly.KW_IICTUBENUM3)
  //     this.appendValueInput("num3", Number)
  //       .setCheck(Number);
  //     this.appendDummyInput("")
  //     //.appendField(Blockly.KW_IICTUBENUM4)
  //     this.appendValueInput("num4", Number)
  //       .setCheck(Number);
  //     this.setInputsInline(true);
  //     this.setPreviousStatement(true, null);
  //     this.setInputsInline(true);
  //     this.setNextStatement(true, null);
  //   }
  // };

  // Blockly.Blocks.kw_iictube = {
  //   init: function () {
  //     this.setColour(150);
  //     this.appendDummyInput("")
  //       .appendField(Blockly.KW_IICTUBE)
  //     this.appendDummyInput("")
  //       .appendField(Blockly.KW_IICTUBEHOUR)
  //     this.appendValueInput("hours", Number)
  //       .setCheck(Number);
  //     this.appendDummyInput("")
  //       .appendField(Blockly.KW_IICTUBEMINUTE)
  //     this.appendValueInput("minutes", Number)
  //       .setCheck(Number);
  //     this.setInputsInline(true);
  //     this.setPreviousStatement(true, null);
  //     this.setInputsInline(true);
  //     this.setNextStatement(true, null);
  //   }
  // };

//8x8ledinit 8x8点阵屏初始化
Blockly.Blocks.nulllab_x8ledinit = {
    init: function () {
      this.setColour(30);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_8X8LEDINIT)
        .appendField("ROW_0")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_row_0s")
        .appendField("ROW_1")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_row_1s")
        .appendField("ROW_2")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_row_2s")
        .appendField("ROW_3")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_row_3s")
        .appendField("ROW_4")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_row_4s")
        .appendField("ROW_5")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_row_5s")
        .appendField("ROW_6")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_row_6s")
        .appendField("ROW_7")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_row_7s")
        .appendField("LED_A")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_led_a1")
        .appendField("LED_B")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_led_b1")
        .appendField("LED_C")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_led_c1")
        .appendField("LED_D")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_led_d1")
        .appendField("LED_E")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_led_e1")
        .appendField("LED_F")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_led_f1")
        .appendField("LED_G")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_led_g1")
        .appendField("LED_H")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_led_h1")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
//8x8led点阵屏显示
  Blockly.Blocks.nulllab_x8leddisplay = {
    init: function () {
      this.setColour(30);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_MAXIMAGES1)
        .appendField(new Blockly.FieldDropdown(EM_MAXIMAGE), "nulllab_maximage");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  
  };
  //不断扫描显示x8ledloopscan
  Blockly.Blocks.nulllab_x8ledloopscan = {
    init: function () {
      this.setColour(30);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_ARDUINO_X8LEDLOOPSCAN)
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
//74h初始化 74hinit
Blockly.Blocks.nulllab_74hinit = {
    init: function () {
      this.setColour(80);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_ARDUINO_74HINIT)
        .appendField("BIT_CHOICE_1")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_bit_choice_11")
        .appendField("BIT_CHOICE_2")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_bit_choice_22")
        .appendField("BIT_CHOICE_3")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_bit_choice_33")
        .appendField("BIT_CHOICE_4")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_bit_choice_44")
        .appendField("STCP_PIN")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_stcp_pin1")
        .appendField("SHCP_PIN")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_shcp_pin1")
        .appendField("DATA_PIN")
        .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_data_pin1")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //74h数码管显示 _74hinitisplay
  Blockly.Blocks.nulllab_74hinitisplay = {
    init: function () {
      this.setColour(80);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_ARDUINO_74HDISPLAY)
      this.appendValueInput("nulllab_74hinitisplays", Number)
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //74h熄灭 _74hoff
  Blockly.Blocks.nulllab_74hoff = {
    init: function () {
      this.setColour(80);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_ARDUINO_74HOFF)
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
//OLED初始化
// 
Blockly.Blocks.nulllab_OLED_Init = {
  init: function () {
    this.setColour(130);
    this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_OLEDINIT)
      .appendField(new Blockly.FieldTextInput('myOled'), 'nulllab_oled')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

Blockly.Blocks.nulllab_OLED_Model = {
    init: function () {
      this.setColour(130);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_OLEDRUN)
        .appendField(new Blockly.FieldTextInput('myOled'), 'nulllab_oled')
        this.appendStatementInput('DO')
        .appendField(Blockly.Msg.EM_OLEDDISPLAY)
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  }

  //OLED显示字符串
  Blockly.Blocks.nulllab_OLED_Display_String = {
    init: function () {
      this.setColour(130);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_OLEDDISPLAYSTRING)
        .appendField(new Blockly.FieldTextInput('myOled'), 'nulllab_oled')
      this.appendValueInput("nulllab_horizontal", Number)
        .appendField(Blockly.Msg.EM_OLEDDISPLAYSTRING_HORIZONTAL)
        .setCheck(Number);
      this.appendValueInput("nulllab_longitudinal", Number)
        .appendField(Blockly.Msg.EM_OLEDDISPLAYSTRING_LONGITUDINAL)
        .setCheck(Number);
      this.appendValueInput("nulllab_content", String)
        .appendField(Blockly.Msg.EM_OLEDDISPLAYSTRING_CONTENT)
        this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_OLEDSIZE)
        .appendField(new Blockly.FieldDropdown(
          [
            ['16', '16'],
          ]
        ), "nulllab_size")
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };

  //OLED显示字符串
  Blockly.Blocks.nulllab_OLED_Display_String_Row = {
    init: function () {
      this.setColour(130);
      this.appendDummyInput("")
        // .appendField(Blockly.OLEDDISPLAYSTRING)
        .appendField(Blockly.Msg.EM_OLEDDISPLAYSTRING)
        .appendField(new Blockly.FieldTextInput('myOled'), 'nulllab_oled')
        .appendField(Blockly.Msg.EM_OLEDDISPLAYSTRINGROW)
        .appendField(new Blockly.FieldDropdown(
          [
            ['1', '0'],
            ['2', '1'],
            ['3', '2'],
            ['4', '3'],
          ]
        ), "nulllab_row")
      this.appendValueInput("nulllab_horizontal", Number)
        .appendField(Blockly.Msg.EM_OLEDDISPLAYSTRINGHORIZONTALROW);
      this.appendValueInput("nulllab_content", String)
      // .appendField(Blockly.OLEDROW)
        .appendField(Blockly.Msg.EM_OLEDDISPLAYSTRINGCONTENTROW)
        this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_OLEDSIZE)
        .appendField(new Blockly.FieldDropdown(
          [
            ['16', '16'],
          ]
        ), "nulllab_size")
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  

/* 
//执行器
*/
//舵机引脚value 转动角度value
Blockly.Blocks.nulllab_servo = {
    init: function () {
      this.setColour(40);
      this.appendValueInput("nulllab_servopin", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.EM_SERVOPIN)
      this.appendValueInput("nulllab_servoangle", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.EM_SERVOANGLE);
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
  
    }
  };
//设置DS3231时钟时间 年月日星期时分秒
Blockly.Blocks.kw_ds3231setdate = {
    init: function () {
      this.setColour(100);
      this.appendDummyInput("")
        .appendField(Blockly.KW_DS3231SETDATE);
      this.appendValueInput("year", Number)
        .appendField(Blockly.KW_DS3231SETDATEYAER)
        .setCheck(Number);
      this.appendValueInput("month", Number)
        .appendField(Blockly.KW_DS3231SETDATEMONTH)
        .setCheck(Number);
      this.appendValueInput("day", Number)
        .appendField(Blockly.KW_DS3231SETDATEDAY)
        .setCheck(Number);
      this.appendValueInput("week", Number)
        .appendField(Blockly.KW_DS3231SETDATEWEEK)
        .setCheck(Number);
      this.appendValueInput("hour", Number)
        .appendField(Blockly.KW_DS3231SETDATEHOUR)
        .setCheck(Number);
      this.appendValueInput("minute", Number)
        .appendField(Blockly.KW_DS3231SETDATEMINUTE)
        .setCheck(Number);
      this.appendValueInput("sencond", Number)
        .appendField(Blockly.KW_DS3231SETDATESECOND)
        .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };
  //da3231时钟获取时间
  Blockly.Blocks.kw_ds3231gettime = {
    init: function () {
      this.setColour(100);
      this.appendDummyInput("")
        .appendField(Blockly.KW_DA3231GETTIME)
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };
  //da3231时钟读取年月日
  Blockly.Blocks.kw_ds3231readyear = {
    init: function () {
      this.setColour(100);
      this.appendDummyInput("")
        .appendField(Blockly.KW_DA3231READYEAR)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
  //da3231时钟读取时分秒温度
  Blockly.Blocks.kw_ds3231readhour = {
    init: function () {
      this.setColour(100);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_DS3231READHOUR)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };


  Blockly.Blocks.nulllab_geekServo = {
    init: function () {
      this.setColour(160);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_GEEKSERVO)
      .appendField(new Blockly.FieldDropdown([
        ['3', "3"],
        ['0', "0"],
        ['1', "1"],
        ['2', "2"],
        ['4', "4"],
        ['5', "5"],
        ['6', "6"],
        ['7', "7"],
        ['8', "8"],
        ['9', "9"],
        ['10', "10"],
        ['11', "11"],
        ['12', "12"],
        ['13', "13"],
        ['A0', "A0"],
        ['A1', "A1"],
        ['A2', "A2"],
        ['A3', "A3"],
        ['A4', "A4"],
        ['A5', "A5"],
      ]), "nulllab_geekServoPin")
      this.appendValueInput("nulllab_geekServoAngle", Number)
      .appendField(Blockly.Msg.EM_GEEKSERVO_ANGLE)
      .setCheck(Number);
      this.appendValueInput("nulllab_geekServoDelay", Number)
      .appendField(Blockly.Msg.EM_GEEKSERVO_DELAY)
      .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }

  }
  
    var NL_TONE_NOTES = [["NOTE_C3", "131"], ["NOTE_D3", "147"], ["NOTE_E3", "165"], ["NOTE_F3", "175"], ["NOTE_G3", "196"], ["NOTE_A3", "220"], ["NOTE_B3", "247"], ["NOTE_C4", "262"], ["NOTE_D4", "294"], ["NOTE_E4", "330"], ["NOTE_F4", "349"], ["NOTE_G4", "392"], ["NOTE_A4", "440"], ["NOTE_B4", "494"], ["NOTE_C5", "532"], ["NOTE_D5", "587"], ["NOTE_E5", "659"], ["NOTE_F5", "698"], ["NOTE_G5", "784"], ["NOTE_A5", "880"], ["NOTE_B5", "988"], ["NOTE_C6", "1047"], ["NOTE_D6", "1175"], ["NOTE_E6", "1319"], ["NOTE_F6", "1397"], ["NOTE_G6", "1568"], ["NOTE_A6", "1760"], ["NOTE_B6", "1976"], ["NOTE_C7", "2093"], ["NOTE_D7", "2349"], ["NOTE_E7", "2637"], ["NOTE_F7", "2794"], ["NOTE_G7", "3136"], ["NOTE_A7", "3520"], ["NOTE_B7", "3951"]];

//蜂鸣器引脚value
Blockly.Blocks.nulllab_buzzerpin = {
    init: function () {
      this.setColour(160);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_BUZZERPIN)
		  .appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_buzzerpin")
      this.appendDummyInput("")
	  .appendField(Blockly.Msg.EM_BUZZERFREQ)
	   .appendField(new Blockly.FieldDropdown(NL_TONE_NOTES), 'nulllab_freq');
    this.appendValueInput("nulllab_buzzerTime", Number)
    .appendField(Blockly.Msg.EM_BUZZERTIME);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };
//kw_doubleDcMotorDriver 双路电机驱动板
Blockly.Blocks.nulllab_doubleDcMotorDriver = {
  init: function () {
    this.setColour(220);
    this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_DOUBLEDCINIT)
      .appendField(new Blockly.FieldDropdown([
        ['D5', "5"],
        ['D6', "6"],
        ['D9', "9"],
        ['D10', "10"]
      ]), "nulllab_motorIn1")
      .appendField(Blockly.Msg.EM_DOUBLEDCIN2)
      .appendField(new Blockly.FieldDropdown([
        ['D6', "6"],
        ['D5', "5"],
        ['D9', "9"],
        ['D10', "10"]
      ]), "nulllab_motorIn2")
      .appendField(Blockly.Msg.EM_DOUBLEDCIN3)
      .appendField(new Blockly.FieldDropdown([
        ['D9', "9"],
        ['D5', "5"],
        ['D6', "6"],
        ['D10', "10"],
      ]), "nulllab_motorIn3")
      .appendField(Blockly.Msg.EM_DOUBLEDCIN4)
      .appendField(new Blockly.FieldDropdown([
        ['D10', "10"],
        ['D5', "5"],
        ['D6', "6"],
        ['D9', "9"]
      ]), "nulllab_motorIn4")
      this.appendValueInput("nulllab_speed1", Number)
    .appendField(Blockly.Msg.EM_DCMOTORSPEED1)
    this.appendValueInput("nulllab_speed2", Number)
    .appendField(Blockly.Msg.EM_DCMOTORSPEED2)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
  }
};

// 
Blockly.Blocks.nulllab_doubleDcMotorDriverStop = {
  init: function () {
    this.setColour(220);
    this.appendDummyInput("")
    .appendField(Blockly.Msg.EM_DOUBLEDC)
      .appendField(new Blockly.FieldDropdown([
        ['D5', "5"],
        ['D6', "6"],
        ['D9', "9"],
        ['D10', "10"]
      ]), "nulllab_motorIn1")
      .appendField(Blockly.Msg.EM_DOUBLEDCIN2)
      .appendField(new Blockly.FieldDropdown([
        ['D6', "6"],
        ['D5', "5"],
        ['D9', "9"],
        ['D10', "10"]
      ]), "nulllab_motorIn2")
      .appendField(Blockly.Msg.EM_DOUBLEDCIN3)
      .appendField(new Blockly.FieldDropdown([
        ['D9', "9"],
        ['D5', "5"],
        ['D6', "6"],
        ['D10', "10"],
      ]), "nulllab_motorIn3")
      .appendField(Blockly.Msg.EM_DOUBLEDCIN4)
      .appendField(new Blockly.FieldDropdown([
        ['D10', "10"],
        ['D5', "5"],
        ['D6', "6"],
        ['D9', "9"]
      ]), "nulllab_motorIn4")
      .appendField(Blockly.Msg.EM_DOUBLEDCSTOP)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

Blockly.Blocks.nulllab_dcmotordriver = {
  init: function () {
    this.setColour(220);
    this.appendDummyInput("")
    .appendField(Blockly.Msg.EM_DCMOTOR)
    .appendField(Blockly.Msg.EM_DCMOTOR_DIRECTION_PIN)
    .appendField(new Blockly.FieldDropdown([
      ['4', "4"],
      ['0', "0"],
      ['1', "1"],
      ['2', "2"],
      ['3', "3"],
      ['5', "5"],
      ['6', "6"],
      ['7', "7"],
      ['8', "8"],
      ['9', "9"],
      ['10', "10"],
      ['11', "11"],
      ['12', "12"],
      ['13', "13"],
      ['A0', "A0"],
      ['A1', "A1"],
      ['A2', "A2"],
      ['A3', "A3"],
      ['A4', "A4"],
      ['A5', "A5"],
    ]), "nulllab_motorDirectionPin")
    .appendField(Blockly.Msg.EM_DCMOTOR_DIRECTION)
    .appendField(new Blockly.FieldDropdown([
      [Blockly.Msg.EM_DCMOTOR_FORWORD, "HIGH"],
      [Blockly.Msg.EM_DCMOTOR_BACK, "LOW"],
    ]), "nulllab_direction")
    .appendField(Blockly.Msg.EM_DCMOTOR_SPEED_PIN)
    .appendField(new Blockly.FieldDropdown([
      ['5', "5"],
      ['3', "3"],
      ['6', "6"],
      ['9', "9"],
      ['10', "10"],
      ['11', "11"]
    ]), "nulllab_motorSpeedPin")
    this.appendValueInput("nulllab_speed", Number)
    .appendField(Blockly.Msg.EM_DCMOTOR_SPEED)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

/* 
//智能模块
*/
Blockly.Blocks.nulllab_PM25_sensor_data = {
	init: function () {
      this.setColour(65);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_PM25_READ)
        .appendField(new Blockly.FieldDropdown(
          [
            ['PM1.0', 'readPM01'],
            ['PM2.5', 'readPM2_5'],
            ['PM10', 'readPM10']
          ]
        ), "nulllab_pmValue")
        .appendField(Blockly.Msg.EM_PM25_DESC)
      this.setOutput(true, Number);
      this.setTooltip('');
      this.setInputsInline(true);
    }
}


//初始化颜色传感器
Blockly.Blocks.nulllab_colorview_init = {
    init: function () {
      this.setColour(50);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_COLORVIEW_INIT)
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  }
  //颜色传感器读取的值
  Blockly.Blocks.nulllab_colorview_value = {
    init: function () {
      this.setColour(50);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_COLORVIEW_VALUE)
        .appendField(new Blockly.FieldTextInput('myColorSensor'), 'nulllab_colorView')
        .appendField(Blockly.Msg.EM_COLORVIEW)
        .appendField(new Blockly.FieldDropdown(
          [
            ['R(红)', 'getRed'],
            ['G(绿)', 'getGreen'],
            ['B(蓝)', 'getBlue']
          ]
        ), "nulllab_color")
      this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(
          [
            ['GAMMA', 'ToGamma'],
            ['NO GAMMA', ''],
          ]
        ), "nulllab_gamma")
        .appendField(Blockly.Msg.EM_GAMMACHECK)
      this.setOutput(true, Number);
      this.setTooltip('');
      this.setInputsInline(true);
    }
  };
  //初始化语音识别传感器
  Blockly.Blocks.nulllab_VoiceRecognition_init = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_VOICERECOGNITION_INIT)
        .appendField(new Blockly.FieldTextInput('myVoiceRecognition'), 'nulllab_VoiceRecognition')
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  }
  //语音识别模式设置
  Blockly.Blocks.nulllab_VoiceRecognition_Mode = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_VOICERECOGNITION)
        .appendField(new Blockly.FieldTextInput('myVoiceRecognition'), 'nulllab_VoiceRecognition')
        .appendField(Blockly.Msg.EM_VOICERECOGNITION_MODE)
        .appendField(new Blockly.FieldDropdown(
          [
            [Blockly.Msg.EM_VOICERECOGNITION_MODEA, 'LOOP_MODE'],
            [Blockly.Msg.EM_VOICERECOGNITION_MODEB, 'BUTTON_MODE'],
            [Blockly.Msg.EM_VOICERECOGNITION_MODEC, 'KEYWORDS_MODE'],
            [Blockly.Msg.EM_VOICERECOGNITION_MODED, 'KEYWORDS_AND_BUTTON']
          ]), "nulllab_mode")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //语音识别设置词条和编号
  Blockly.Blocks.nulllab_VoiceRecognition_Content = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_VOICERECOGNITION)
      .appendField(new Blockly.FieldTextInput('myVoiceRecognition'), 'nulllab_VoiceRecognition')
        //.appendField(Blockly.INITIALIZE_MATRIX_KEYBOARD)
      this.appendValueInput("nulllab_Key", Number)
        .appendField(Blockly.Msg.EM_VOICERECOGNITION_KEY)
        .setCheck(Number);
      this.appendValueInput("nulllab_content", String)
        .appendField(Blockly.Msg.EM_VOICERECOGNITION_CONTENT)
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };
  //语音识别开始识别
  Blockly.Blocks.nulllab_VoiceRecognition_Start = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_VOICERECOGNITION)
      .appendField(new Blockly.FieldTextInput('myVoiceRecognition'), 'nulllab_VoiceRecognition')
        .appendField(Blockly.Msg.EM_VOICERECOGNITION_START)
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  }
  //语音识别进行复位
  Blockly.Blocks.nulllab_VoiceRecognition_Reset = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_VOICERECOGNITION)
      .appendField(new Blockly.FieldTextInput('myVoiceRecognition'), 'nulllab_VoiceRecognition')
        .appendField(Blockly.Msg.EM_VOICERECOGNITION_RESET)
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  }
  //语音识别获取识别到词条的对应编号
  Blockly.Blocks.nulllab_VoiceRecognition_Number = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_VOICERECOGNITION)
      .appendField(new Blockly.FieldTextInput('myVoiceRecognition'), 'nulllab_VoiceRecognition')
        .appendField(Blockly.Msg.EM_VOICERECOGNITION_NUMBER)
      this.setOutput(true, Number);
      this.setTooltip(true);
    }
  };
  //语音识别设置唤醒时间
  Blockly.Blocks.nulllab_VoiceRecognition_Time = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_VOICERECOGNITION)
      .appendField(new Blockly.FieldTextInput('myVoiceRecognition'), 'nulllab_VoiceRecognition')
      .appendField(Blockly.Msg.EM_VOICERECOGNITION_TIME);
      this.appendValueInput("nulllab_time", Number)
        .setCheck(Number)
        .setAlign(Blockly.Msg.EM_ALIGN_RIGHT);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };

  //语音识别设置唤醒词
  Blockly.Blocks.nulllab_VoiceRecognition_wake_word = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.EM_VOICERECOGNITION)
      .appendField(new Blockly.FieldTextInput('myVoiceRecognition'), 'nulllab_VoiceRecognition')
      this.appendValueInput("nulllab_wakeWordContent", String)
        .appendField(Blockly.Msg.EM_VOICERECOGNITION_WAKEWORD)
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
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

  //   Blockly.Blocks.speech_recognizer_event = {
  //     init: function () {
  //         this.setColour(150);
  //         this.appendDummyInput("")
  //         .appendField(Blockly.Msg.EM_VOICERECOGNITION_RESULT)
  //         this.setOutput(true, Number);
  //         this.setInputsInline(true);
  //     }
  // };

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

// 陀螺仪
Blockly.Blocks.nulllab_gyro_init={
  init:function(){
    this.setColour(240);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_GYRO_INIT)
    this.setOutput(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}
Blockly.Blocks.nulllab_gyro_getvalue={
  init:function(){
    this.setColour(240);
    this.appendDummyInput("")
		    .appendField(Blockly.Msg.EM_GYRO_GETVALUE)
		    .appendField(new Blockly.FieldDropdown(EM_GYROVALUE), "nulllab_gyrov")
		    .appendField(Blockly.Msg.EM_GYRO_GETVALUEA)
    this.setOutput(true);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
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
// Blockly.Blocks.nulllab_handleSensor_getValue={
//   init:function(){
//     this.setColour(245);
//     this.appendDummyInput("")
//         .appendField(Blockly.Msg.EM_HANDLESENSOR_GETVALUE)
//     this.setOutput(false);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('');
//   }
// }

// Blockly.Blocks.nulllab_handleSensor_isGetValue = {
//     init: function () {
//       this.setColour(245);
//       this.appendDummyInput("")
//       .appendField(Blockly.Msg.EM_HANDLESENSOR)
//       .appendField(new Blockly.FieldTextInput('myHandleSensor'), 'nulllab_handleSensor')
//         .appendField(Blockly.Msg.EM_HANDLESENSOR_ISGETVALUE)
//       this.setOutput(true, Boolean);
//       this.setInputsInline(true);
//     }
//   };
//   
//   Blockly.Blocks.nulllab_handleSensor_getStatus = {
//     init: function () {
//       this.setColour(245);
//       this.appendDummyInput("")
//       .appendField(Blockly.Msg.EM_HANDLESENSOR)
//       .appendField(new Blockly.FieldTextInput('myHandleSensor'), 'nulllab_handleSensor')
//       .appendField(Blockly.Msg.EM_HANDLESENSOR_GETSTATUS)
// 		  .appendField(new Blockly.FieldDropdown(
//           [
//             [Blockly.Msg.EM_HANDLESENSOR_UP, 'DIR_UP'],
//             [Blockly.Msg.EM_HANDLESENSOR_DOWN, 'DIR_DOWN'],
//             [Blockly.Msg.EM_HANDLESENSOR_LEFT, 'DIR_LEFT'],
//             [Blockly.Msg.EM_HANDLESENSOR_RIGHT, 'DIR_RIGHT'],
// 			[Blockly.Msg.EM_HANDLESENSOR_NEAR, 'DIR_NEAR'],
//             [Blockly.Msg.EM_HANDLESENSOR_FAR, 'DIR_FAR']
//           ]), "nulllab_mode")
//       this.setOutput(true, Boolean);
//       this.setInputsInline(true);
//     }
//   };

	// 初始化esp8266引脚
	Blockly.Blocks.nulllab_esp8266_init = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_ESP8266INIT)
		.appendField(new Blockly.FieldDropdown([
          ['5', "5"],
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['6', "6"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_iotTx")
		this.appendDummyInput("")
        .appendField("RX")
		.appendField(new Blockly.FieldDropdown([
          ['6', "6"],
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
          ['3', "3"],
          ['4', "4"],
          ['5', "5"],
          ['7', "7"],
          ['8', "8"],
          ['9', "9"],
          ['10', "10"],
          ['11', "11"],
          ['12', "12"],
          ['13', "13"],
          ['A0', "A0"],
          ['A1', "A1"],
          ['A2', "A2"],
          ['A3', "A3"],
          ['A4', "A4"],
          ['A5', "A5"],
        ]), "nulllab_iotRX")
	this.setOutput(false);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    }
  };
  
  // 设置WiFi
	Blockly.Blocks.nulllab_esp8266_wifi = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_ESP8266WIFICONNECTIONALIYUN)
		this.appendValueInput("nulllab_wifiSsid", String)
		.appendField(Blockly.Msg.EM_ESP8266WIFICONNECTION)
	  // this.appendDummyInput("")
       
		this.appendValueInput("nulllab_wifiPwd", String)
		 .appendField(Blockly.Msg.EM_PWD)
	  //this.appendDummyInput("")
        
		this.appendValueInput("nulllab_host", String)
		.appendField(Blockly.Msg.EM_HOST)
	  //this.appendDummyInput("")
        
		this.appendValueInput("nulllab_port", String)
		.appendField(Blockly.Msg.EM_PORT)
	   //this.appendDummyInput("")
        
		this.appendValueInput("nulllab_productKey", String)
		.appendField(Blockly.Msg.EM_PRODUCTKEY)
		//this.appendDummyInput("")
        
		this.appendValueInput("nulllab_deviceName", String)
		.appendField(Blockly.Msg.EM_DRIVERNAME)
		//this.appendDummyInput("")
        
		this.appendValueInput("nulllab_deviceSecret", String)
		.appendField(Blockly.Msg.EM_DEVICESECRET)
	this.setOutput(false);
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    }
  };
  
  // 设置host
	Blockly.Blocks.nulllab_esp8266_otherHost = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_OTHERServer)
		this.appendValueInput("nulllab_wifiSsid", String)
		.appendField(Blockly.Msg.EM_ESP8266WIFICONNECTION)
	  // this.appendDummyInput("")
       
		this.appendValueInput("nulllab_wifiPwd", String)
		 .appendField(Blockly.Msg.EM_PWD)
		this.appendValueInput("nulllab_host", String)
		.appendField(Blockly.Msg.EM_OTHERHOST)
		// this.appendDummyInput("")
		this.appendValueInput("nulllab_port", Number)
		.appendField(Blockly.Msg.EM_PORT)
		// this.appendDummyInput("")
		this.appendValueInput("nulllab_userClientId", String)
		.appendField(Blockly.Msg.EM_CLIENTID)
	  // this.appendDummyInput("")
		this.appendValueInput("nulllab_username", String)
		.appendField(Blockly.Msg.EM_USERNAME)
	  // this.appendDummyInput("")
		this.appendValueInput("nulllab_password", String)
		.appendField(Blockly.Msg.EM_PASSWORD)
	this.setOutput(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    }
  };
  
  // 设置 三要素
	Blockly.Blocks.nulllab_esp8266_userConfigParam = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_CLIENTID)
		this.appendValueInput("nulllab_userClientId", String)
	  this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_USERNAME)
		this.appendValueInput("nulllab_username", String)
	  this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_PASSWORD)
		this.appendValueInput("nulllab_password", String)
	this.setOutput(false);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    }
  };
  
  // 设置 三要素
	Blockly.Blocks.nulllab_esp8266_setParam = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_PRODUCTKEY)
		this.appendValueInput("nulllab_productKey", String)
	  this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_DRIVERNAME)
		this.appendValueInput("nulllab_deviceName", String)
	  this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_DEVICESECRET)
		this.appendValueInput("nulllab_deviceSecret", String)
	this.setOutput(false);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    }
  };
  
   // 连接WIFI网络
	Blockly.Blocks.nulllab_esp8266_connection = {
    init: function () {
      this.setColour(150);
	  this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_MQTTCONNECTION)
  	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    }
  };
  
  // 判断是否连接网络
	Blockly.Blocks.nulllab_esp8266_isConnection = {
    init: function () {
      this.setColour(150);
	  this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_ISCONNECTION)
    this.setOutput(true, Boolean);
    this.setInputsInline(true);
    }
  };
  
  // 订阅
	Blockly.Blocks.nulllab_esp8266_sub = {
    init: function () {
      this.setColour(150);
	  this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_SUB)
		this.appendValueInput("nulllab_subStr", String)
	  this.appendDummyInput("")
        .appendField("QOS")
		.appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
		  ]), "nulllab_qos")
	this.setOutput(false);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    }
  };
  
   // 发布
	Blockly.Blocks.nulllab_esp8266_pub = {
		init: function () {
			  this.setColour(150);
			  this.appendDummyInput("")
				.appendField(Blockly.Msg.EM_PUB)
				this.appendValueInput("nulllab_pubStr", String)
			  this.appendDummyInput("")
				.appendField(Blockly.Msg.EM_PUBDATA)
				this.appendValueInput("nulllab_data", String)
				this.appendDummyInput("")
				.appendField("QOS")
				.appendField(new Blockly.FieldDropdown([
				  ['0', "0"],
				  ['1', "1"],
				  ['2', "2"],
				  ]), "nulllab_qos")
			this.setOutput(false);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('');
		}
  };
  
   // 判断是否接收到数据
	Blockly.Blocks.nulllab_esp8266_isReceive = {
    init: function () {
      this.setColour(150);
	  this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_ISRECEIVE)
		this.setOutput(true, Boolean);
		this.setInputsInline(true);
    }
  };
  
  
   // 获取数据
	Blockly.Blocks.nulllab_esp8266_getSubMsg = {
		init: function () {
			  this.setColour(150);
			  this.appendDummyInput("")
				.appendField(Blockly.Msg.EM_GETSUBMSG)
				.appendField(new Blockly.FieldDropdown([
				  [Blockly.Msg.EM_TOPIC, "1"],
				  [Blockly.Msg.EM_MSG, "2"],
				]), "nulllab_msgType")
			this.setOutput(true, String);
			this.setInputsInline(true);
		}
	}

//	// 设置host
	Blockly.Blocks.nulllab_esp8266_httpHost = {
   init: function () {
     this.setColour(150);
     this.appendDummyInput("")
       .appendField(Blockly.Msg.EM_HTTPSERVER)
		this.appendValueInput("nulllab_wifiSsid", String)
		.appendField(Blockly.Msg.EM_ESP8266WIFICONNECTION)
	  // this.appendDummyInput("")
		this.appendValueInput("nulllab_wifiPwd", String)
		 .appendField(Blockly.PWD)
		this.appendValueInput("nulllab_httpHost", String)
		.appendField(Blockly.Msg.EM_HTTPHOST)
		// this.appendDummyInput("")
       
		this.appendValueInput("nulllab_httpPort", Number)
		.appendField(Blockly.Msg.EM_PORT)
		// this.appendDummyInput("")
	this.setOutput(false);
   this.setPreviousStatement(true, null);
   this.setNextStatement(true, null);
   this.setTooltip('');
   }
 };
	
   // 获取数据
	Blockly.Blocks.nulllab_esp8266_connectHttpServer = {
		init: function () {
			  this.setColour(150);
			  this.appendDummyInput("")
				.appendField(Blockly.Msg.EM_CONNECTHTTPSERVER)
			this.setOutput(true, Boolean);
		this.setInputsInline(true);
		}
	}
	
	// 
	Blockly.Blocks.nulllab_esp8266_get = {
		init: function () {
			  this.setColour(150);
			  this.appendDummyInput("")
				this.appendValueInput("nulllab_getStr", String)
				.appendField(Blockly.Msg.EM_HTTPGET)
				this.appendValueInput("nulllab_timeout", Number)
				.appendField(Blockly.Msg.EM_TIMEOUT)
			this.setOutput(true, String);
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
	
/* 
//无线通信
*/
//串口有蓝牙数据可读
Blockly.Blocks.nulllab_getbluetooth = {
    init: function () {
      this.setColour(85);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_GETBLUETOOTH)
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
    }
  };
  //串口读取蓝牙数据
  Blockly.Blocks.nulllab_getbluetoothdata = {
    init: function () {
      this.setColour(85);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_GETBLUETOOTHDATA)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
  //初始化红外遥控 引脚value
Blockly.Blocks.nulllab_initir = {
    init: function () {
      this.setColour(135);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_INITIR)
        .appendField(Blockly.Msg.EM_IRPORT)
      this.appendValueInput("nulllab_initir", Number)
        .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };
  // 普通红外遥控按键（下拉，返回boolean）
  Blockly.Blocks.nulllab_irKeyPress = {
    init: function () {
      this.setColour(135);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_IRKEYPRESS)
        .appendField(new Blockly.FieldDropdown(EM_IRKEY), "nulllab_irkey")
      this.setOutput(true, Boolean);
      this.setTooltip('');
    }
  };
  // emakefun红外遥控按键（下拉，返回boolean）
  Blockly.Blocks.nulllab_irKeyPress2 = {
    init: function () {
      this.setColour(135);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_IRKEYPRESS2)
        .appendField(new Blockly.FieldDropdown(EM_IRKEY2), "nulllab_irkey2")
      this.setOutput(true, Boolean);
      this.setTooltip('');
    }
  };
  //红外遥控获取值
  Blockly.Blocks.nulllab_irKeyPress3 = {
      init:function (){
          this.setColour(135);
          this.appendDummyInput("")
              .appendField(Blockly.Msg.EM_IRKEYPRESS3)
          this.setOutput(true, Boolean);
          this.setTooltip('');
      }
  }
//接收蓝牙数据
Blockly.Blocks.kw_getbluetoothvalue = {
    init: function () {
      this.setColour(85);
      this.appendDummyInput("")
        .appendField(Blockly.KW_GETBLUETOOTHVALUE)
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };
  //接收到了蓝牙数据
  Blockly.Blocks.kw_dogetbluetoothvalue = {
    init: function () {
      this.setColour(85);
      this.appendDummyInput("")
        .appendField(Blockly.KW_DOGETBLUETOOTHVALUE)
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
    }
  };
  //蓝牙模式 下拉，返回boolean
  Blockly.Blocks.kw_bluetoothmode = {
    init: function () {
      this.setColour(85);
      this.appendDummyInput("")
        .appendField(Blockly.KW_BLUETOOTHMODE)
        .appendField(new Blockly.FieldDropdown(KW_BLUETOOTHMODES), "Bluetoothmodes")
      this.setOutput(true, Boolean);
      this.setTooltip('');
    }
  };
  //蓝牙获取RGB值
  Blockly.Blocks.kw_bluetoothgetrgbvalue = {
    init: function () {
      this.setColour(85);
      this.appendDummyInput("")
        .appendField(Blockly.KW_BLUETOOTHGETRGBVALUE)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
  //蓝牙调光
  Blockly.Blocks.kw_bluetoothsetrgb = {
    init: function () {
      this.setColour(85);
      this.appendDummyInput("")
        .appendField(Blockly.KW_BLUETOOTHSETRGB)
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };
  //蓝牙钢琴
  Blockly.Blocks.kw_bluetoothsetbuzzer = {
    init: function () {
      this.setColour(85);
      this.appendDummyInput("")
        .appendField(Blockly.KW_BLUETOOTHSETBUZZER)
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };


//第十三个图形块的样式 NRF24L01发送数据地址value 数据value
Blockly.Blocks.nulllab_nrf24l01send = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_RF24_INITNRF24L01ADDRESS1);
      this.appendValueInput("nulllab_address", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //初始化接收数组
  Blockly.Blocks.nulllab_nrf24l01rec = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_RF24_INITNRF24L01ADDRESS2);
      this.appendValueInput("nulllab_address2", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //功耗等级块样式  
  Blockly.Blocks.nulllab_power_consumption_level = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_RF24_SETUP)
        .appendField(new Blockly.FieldDropdown(
          [
            [Blockly.Msg.EM_PEWER_CONS_LEVELA, 'RF24_PA_MIN'],
            [Blockly.Msg.EM_PEWER_CONS_LEVELB, 'RF24_PA_LOW'],
            [Blockly.Msg.EM_PEWER_CONS_LEVELC, 'RF24_PA_HIGH'],
            [Blockly.Msg.EM_PEWER_CONS_LEVELD, 'RF24_PA_MAX'],
          ]), "nulllab_version")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //初始化引脚
  Blockly.Blocks.nulllab_initialize_pins = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_RF24_PINSCE)
        .appendField(new Blockly.FieldDropdown(
          [
            ['2', '2'],
            ['3', '3'],
            ['4', '4'],
            ['5', '5'],
            ['6', '6'],
            ['7', '7'],
            ['8', '8'],
            ['9', '9'],
            ['10', '10']
          ]
        ), "nulllab_CE")
        .appendField(Blockly.Msg.EM_RF24_PINSCS)
        .appendField(new Blockly.FieldDropdown(
          [
			['3', '3'],
            ['2', '2'],
            ['4', '4'],
            ['5', '5'],
            ['6', '6'],
            ['7', '7'],
            ['8', '8'],
            ['9', '9'],
            ['10', '10']
          ]
        ), "nulllab_CS")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //nrf发送数据
  Blockly.Blocks.nulllab_nrf24l01senddatass = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_RF24_SENDDATA);
      this.appendValueInput("nulllab_nrfdatass", Number)
      this.setInputsInline(true);
      //   this.appendDummyInput("")
      //   .appendField(Blockly.RF24_GENRE)
      //   .appendField(new Blockly.FieldDropdown(
      //    [
      //         ['整数','int'],
      //         ['无符号整数','unsigned int'],
      //         ['字','word'],
      //         ['长整数','long'],
      //         ['无符号长整数','unsigned long'],
      //         ['小数','float'],
      //         ['双精度浮点数','double'],
      //         ['布尔','boolean'],
      //         ['字节','byte'],
      //         ['字符','char'],
      //         ['无符号字符','unsigned char'],
      //         ['字符串','String']
      // ]
      // ), "GENRE")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  
	Blockly.Blocks.nulllab_nrf24l01PrintDetails = {
		init: function () {
		  this.setColour(200);
		  this.appendDummyInput("")
			.appendField(Blockly.Msg.EM_RF24_PRINT_DETAILS);
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setTooltip('');
		}
	}
  
  //nrf发送字符串数据
  Blockly.Blocks.nulllab_nrf24l01senddatass_string = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_RF24_SENDDATA_STRING);
      this.appendValueInput("nulllab_nrfdatass_string", String)
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //监听块样式
  Blockly.Blocks.nulllab_eavesdrop = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_RF24_EAVESDROP)
        .appendField(new Blockly.FieldDropdown(
          [
            [Blockly.Msg.EM_RF24_EAVESDROPUP, 'start'],
            [Blockly.Msg.EM_RF24_EAVESDROPDOWN, 'stop']
          ]), "nulllab_EAVESDROP")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //是否有数据可读
  Blockly.Blocks.nulllab_nrfdataradys = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_RF24_READABILITY)
      this.setOutput(true, Boolean);
      this.setTooltip('');
    }
  };
  //nrf接收数据
  Blockly.Blocks.nulllab_nrfrecdatas = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_RF24_INITNRF24L01RECDATASSS);
      this.appendValueInput("nulllab_nrfdatasss", Number)
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //nrf接收字符串数据
  Blockly.Blocks.nulllab_nrfrecdatas_string = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_RF24_INITNRF24L01RECDATASSS_STRING)
      this.setOutput(true, String);
      this.setTooltip(true);
    }
  };
  //速率块
  Blockly.Blocks.nulllab_transmission_rate = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_RF24_SPEED)
        .appendField(new Blockly.FieldDropdown(
          [
            ['1MB', 'RF24_1MBPS'],
            ['2MB', 'RF24_2MBPS'],
            ['250KB', 'RF24_250KBPS']
          ]), "nulllab_Transmission_Rate")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //设置通道速率
  Blockly.Blocks.nulllab_channel_frequency = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.Msg.EM_RF24_CHANNEL_FREQUENCY);
      this.appendValueInput("nulllab_channel", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };

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

})();