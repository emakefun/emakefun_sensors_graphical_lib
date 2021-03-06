'use strict';

goog.provide('Blockly.Blocks.EmakefunSensor');

goog.require('Blockly.Blocks');

//var KW_LEDPRINT = [["A","A"],["C","C"],["B","B"],["D","D"],["E","E"],["F","F"],["G","G"],["H","H"],["I","I"],["J","J"],["K","K"],["L","L"],["M","M"],["N","N"],["O","O"],["P","P"],["Q","Q"],["R","R"],["S","S"],["T","T"],["U","U"],["V","V"],["W","W"],["X","X"],["Y","Y"],["Z","Z"]];
var EM_IRKEY = [["1", "IR_KEYCODE_1"], ["2", "IR_KEYCODE_2"], ["3", "IR_KEYCODE_3"], ["4", "IR_KEYCODE_4"], ["5", "IR_KEYCODE_5"], ["6", "IR_KEYCODE_6"], ["7", "IR_KEYCODE_7"], ["8", "IR_KEYCODE_8"], ["9", "IR_KEYCODE_9"], ["0", "IR_KEYCODE_0"], ["*", "IR_KEYCODE_STAR"], ["#", "IR_KEYCODE_POUND"], [Blockly.EM_IRKEY_UP, "IR_KEYCODE_UP"], [Blockly.EM_IRKEY_DOWN, "IR_KEYCODE_DOWN"], ["OK", "IR_KEYCODE_OK"], [Blockly.EM_IRKEY_LEFT, "IR_KEYCODE_LEFT"], [Blockly.EM_IRKEY_RIGHT, "IR_KEYCODE_RIGHT"]];
var EM_IRKEY2 = [["1", "EM_IR_KEYCODE_1"], ["2", "EM_IR_KEYCODE_2"], ["3", "EM_IR_KEYCODE_3"], ["4", "EM_IR_KEYCODE_4"], ["5", "EM_IR_KEYCODE_5"], ["6", "EM_IR_KEYCODE_6"], ["7", "EM_IR_KEYCODE_7"], ["8", "EM_IR_KEYCODE_8"], ["9", "EM_IR_KEYCODE_9"], ["0", "EM_IR_KEYCODE_0"], ["A", "EM_IR_KEYCODE_A"], ["B", "EM_IR_KEYCODE_B"], ["C", "EM_IR_KEYCODE_C"], ["D", "EM_IR_KEYCODE_D"], ["+", "EM_IR_KEYCODE_PLUS"], ["-", "EM_IR_KEYCODE_REDUCE"], [Blockly.EM_IRKEY_UP, "EM_IR_KEYCODE_UP"], [Blockly.EM_IRKEY_DOWN, "EM_IR_KEYCODE_DOWN"], ["OK", "EM_IR_KEYCODE_OK"], [Blockly.EM_IRKEY_LEFT, "EM_IR_KEYCODE_LEFT"], [Blockly.EM_IRKEY_RIGHT, "EM_IR_KEYCODE_RIGHT"]];
var EM_PIANO = [["1", "BS_KEYCODE_1"], ["2", "BS_KEYCODE_2"], ["3", "BS_KEYCODE_3"], ["4", "BS_KEYCODE_4"], ["5", "BS_KEYCODE_5"], ["6", "BS_KEYCODE_6"], ["7", "BS_KEYCODE_7"], ["8", "BS_KEYCODE_8"]];
var EM_PIANOV2 = [["1", "EM_PIANO_KEYCODE_1"], ["2", "EM_PIANO_KEYCODE_2"], ["3", "EM_PIANO_KEYCODE_3"], ["4", "EM_PIANO_KEYCODE_4"], ["5", "EM_PIANO_KEYCODE_5"], ["6", "EM_PIANO_KEYCODE_6"], ["7", "EM_PIANO_KEYCODE_7"], ["8", "EM_PIANO_KEYCODE_8"]];

var EM_BLUETOOTHMODES = [[Blockly.EM_BLUETOOTHMODES_RGB, "2"], [Blockly.EM_BLUETOOTHMODES_BUZZER, "3"]];
var EM_MAXIMAGE = [[Blockly.EM_MAXIMAGE_ZERO, "0"], [Blockly.EM_MAXIMAGE_ONE, "1"], [Blockly.EM_MAXIMAGE_TWO, "2"], [Blockly.EM_MAXIMAGE_THREE, "3"], [Blockly.EM_MAXIMAGE_FOUR, "4"], [Blockly.EM_MAXIMAGE_FIVE, "5"], [Blockly.EM_MAXIMAGE_SIX, "6"], [Blockly.EM_MAXIMAGE_SEVEN, "7"], [Blockly.EM_MAXIMAGE_EIGHT, "8"], [Blockly.EM_MAXIMAGE_NINE, "9"], [Blockly.EM_MAXIMAGE_SMILE, "10"], [Blockly.EM_MAXIMAGE_HAPPYOPEN, "11"], [Blockly.EM_MAXIMAGE_HAPPYCLOSED, "12"], [Blockly.EM_MAXIMAGE_HEART, "13"], [Blockly.EM_MAXIMAGE_BIGSURPRISE, "14"], [Blockly.EM_MAXIMAGE_SMALLSURPRISE, "15"], [Blockly.EM_MAXIMAGE_TONGUE, "16"], [Blockly.EM_MAXIMAGE_VAMP1, "17"], [Blockly.EM_MAXIMAGE_VAMP2, "18"], [Blockly.EM_MAXIMAGE_LINEMOUTH, "19"], [Blockly.EM_MAXIMAGE_CONFUSED, "20"], [Blockly.EM_MAXIMAGE_DIAGONAL, "21"], [Blockly.EM_MAXIMAGE_SAD, "22"], [Blockly.EM_MAXIMAGE_SADOPEN, "23"], [Blockly.EM_MAXIMAGE_SADCLOSED, "24"], [Blockly.EM_MAXIMAGE_OKMOUTH, "25"], [Blockly.EM_MAXIMAGE_XMOUTH, "26"], [Blockly.EM_MAXIMAGE_INTTEROGATION, "27"], [Blockly.EM_MAXIMAGE_THUNDER, "28"], [Blockly.EM_MAXIMAGE_CULITO, "29"], [Blockly.EM_MAXIMAGE_ANGRY, "30"]];
var EM_RGBPOSITION = [[Blockly.EM_ALL, "E_RGB_ALL"], [Blockly.EM_RIGHT, "E_RGB_RIGHT"], [Blockly.EM_LEFT, "E_RGB_LEFT"]];
var EM_RGBCOLOR = [[Blockly.EM_RED, "RGB_RED"], [Blockly.EM_GREEN, "RGB_GREEN"], [Blockly.EM_BLUE, "RGB_BLUE"], [Blockly.EM_YELLOW, "RGB_YELLOW"], [Blockly.EM_PURPLE, "RGB_PURPLE"], [Blockly.EM_ORANGE, "RGB_ORANGE"], [Blockly.EM_INDIGO, "RGB_INDIGO"], [Blockly.EM_VIOLET, "RGB_VIOLET"], [Blockly.EM_WHITE, "RGB_WHITE"], [Blockly.EM_BLACK, "0x000000"]];
var EM_RGBSTYLE = [[Blockly.EM_NONE, "E_EFFECT_NONE"], [Blockly.EM_BREATHING, "E_EFFECT_BREATHING"], [Blockly.EM_ROTATE, "E_EFFECT_ROTATE"], [Blockly.EM_FLASH, "E_EFFECT_FLASH"]];
// ?????????????????????
var EM_JOBONE_X = [['X','1'],['Y','2']];
var EM_JOBONE_BTN = [['A','BUTOON_UP'],['B','BUTOON_RIGHT'],['C','BUTOON_DOWN'],['D','BUTOON_LEFT'],[Blockly.EM_CENTER,'JOYSTICK_BUTTON']];
var EM_JOBONE_LAST = [[Blockly.EM_PRESSDOWNS,"PRESS_DOWN"],[Blockly.EM_PRESSUPS,"PRESS_UP"],[Blockly.EM_PRESSONES,"SINGLE_CLICK"],[Blockly.EM_PRESSTWOS,"DOUBLE_CLICK"],[Blockly.EM_PRESSYEARS,"LONG_PRESS_HOLD"],[Blockly.EM_PRESSNOS,"NONE_PRESS"]];

// ??????????????????
var EM_LR_press = [[Blockly.EM_LRPRESSL,'A'],[Blockly.EM_LRPRESSR,'B']];

// ?????????
var EM_COMPASS_VAU = [['X??????','1'],['Y??????','2'],['Z??????','3'],[Blockly.EM_AZIMUTHS,'4']];
// ?????????
var EM_GYROVALUE = [[Blockly.EM_GYROVALUEA,'GetGravity(BT_X)'],[Blockly.EM_GYROVALUEB,'GetGravity(BT_Y)'],[Blockly.EM_GYROVALUEC,'GetGravity(BT_Z)'],[Blockly.EM_GYROVALUED,'GetRoll()'],[Blockly.EM_GYROVALUEE,'GetPitch()']];

// ????????????
var EM_FIVE_INFRARED_TRACKING_GROUP = [[Blockly.GROUP1, '0'],[Blockly.GROUP2, '1'],[Blockly.GROUP3, '2'],[Blockly.GROUP4, '3'],[Blockly.GROUP5, '4']];

/* 
*?????????
*/
//???????????????
Blockly.Blocks.em_ultrasonicread = {
    init: function () {
      this.setColour(50);
      this.appendDummyInput("")
        .appendField(Blockly.EM_ULTRASONICREAD);
      this.appendValueInput("em_trigpin", Number)
        .appendField(Blockly.EN_TRIG)
        .setCheck(Number);
      this.appendValueInput("em_echopin", Number)
        .appendField(Blockly.EM_ECHO)
        .setCheck(Number);
        this.appendDummyInput("")
        .appendField(Blockly.EM_ULTRASONICDISTANCE);
      this.setInputsInline(true);
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
//rgb????????????????????????
Blockly.Blocks.em_initrgbultrasonic = {
    init: function () {
      this.setColour(80);
      this.appendDummyInput("")
        .appendField(Blockly.EM_INITRGBULTRASONIC)
        .appendField(new Blockly.FieldTextInput('myRGBUltrasonic'), 'em_rgbUltrasonic')
        .appendField(Blockly.EM_ULTRASONICPIN)
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
        ]), "em_ultrasonicpin")
        .appendField(Blockly.EM_RGBPIN)
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
        ]), "em_rgbpin")
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };

//??????RGB???????????????????????????
Blockly.Blocks.em_setcolorandstyle = {
    init: function () {
      this.setColour(80);
      this.appendDummyInput("")
        .appendField(Blockly.EM_SETCOLOR)
        .appendField(new Blockly.FieldTextInput('myRGBUltrasonic'), 'em_rgbUltrasonic')
        .appendField(Blockly.EM_PROBE)
        .appendField(new Blockly.FieldDropdown(EM_RGBPOSITION), "em_rgbposition");
      this.appendDummyInput("")
      .appendField(Blockly.EM_SETRGBCOLOR)
        .appendField(new Blockly.FieldDropdown(EM_RGBCOLOR), "em_rgbcolor");
      this.appendDummyInput("")
        .appendField(Blockly.EM_SETSTYLE)
        .appendField(new Blockly.FieldDropdown(EM_RGBSTYLE), "em_rgbstyle");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };
  //RGB????????????????????????????????????
Blockly.Blocks.em_readultrasonicdistance = {
    init: function () {
      this.setColour(80);
      this.appendDummyInput("")
      .appendField(Blockly.RGBULTRASONIC)
      .appendField(new Blockly.FieldTextInput('myRGBUltrasonic'), 'em_rgbUltrasonic')
        .appendField(Blockly.EM_READULTRASONICDISTANCE)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
//???????????????
Blockly.Blocks.em_pressure = {
    init: function () {
      this.setColour(120);
      this.appendDummyInput("")
      .appendField(Blockly.EM_PRESSUREVALUE)
        .appendField(Blockly.EM_PIN)
        .appendField(new Blockly.FieldDropdown(
          [
            ['A0', 'A0'],
            ['A1', 'A1'],
            ['A2', 'A2'],
            ['A3', 'A3'],
            ['A4', 'A4'],
            ['A5', 'A5']
          ]
        ), "em_pin")
      .appendField(Blockly.EM_GETANALOG)
      this.setOutput(true, Number);
      this.setTooltip(true);
    }
  };
  //???????????????
  Blockly.Blocks.em_water_vapor = {
    init: function () {
      this.setColour(160);
      this.appendDummyInput("")
      .appendField(Blockly.EM_WATERVAPOR)
        .appendField(Blockly.EM_PIN)
        .appendField(new Blockly.FieldDropdown(
          [
            ['A0', 'A0'],
            ['A1', 'A1'],
            ['A2', 'A2'],
            ['A3', 'A3'],
            ['A4', 'A4'],
            ['A5', 'A5']
          ]
        ), "em_pin")
        .appendField(Blockly.EM_GETANALOG)
      this.setOutput(true, Number);
      this.setTooltip(true);
    }
  };
// ?????????
Blockly.Blocks.em_compass_vue={
	init:function(){
		this.setColour(200);
		this.appendDummyInput("")
		    .appendField(Blockly.EM_COMMPASSONE)
        .appendField(new Blockly.FieldTextInput('myCompass'), 'em_compass')
        .appendField(Blockly.EM_COMMPASSONE_GET)
		    .appendField(new Blockly.FieldDropdown(EM_COMPASS_VAU), "em_capa")
		    .appendField(Blockly.EM_COMMPASSTWO);
		this.setOutput(true);
		this.setPreviousStatement(false, null);
		this.setNextStatement(false, null);
		this.setTooltip('');
	}
};
Blockly.Blocks.em_compass_star={
	init:function(){
		this.setColour(200);
		this.appendDummyInput("")
    .appendField(Blockly.EM_COMPASS)
    .appendField(new Blockly.FieldTextInput('myCompass'), 'em_compass')
		    .appendField(Blockly.EM_COMMPASSTHR)
		this.setOutput(false);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
	}
};

Blockly.Blocks.em_fiveInfraredTracking={
  init:function(){
    this.setColour(220);
		this.appendDummyInput("")
        .appendField(Blockly.EM_FIVEINFRAREDTRACKING)
        .appendField(new Blockly.FieldTextInput('myFiveInfraredTracking'), 'em_fiveInfraredTracking')
        .appendField(Blockly.EM_FIVEINFRAREDTRACKINGINIT)
        // .appendField("?????????????????? ???????????????")
        .appendField(new Blockly.FieldDropdown(EM_FIVE_INFRARED_TRACKING_GROUP), "em_infrared")
      .appendField(Blockly.EM_INFRAREDTRACKING)
      // .appendField("?????????????????????????")
    this.setOutput(true, Boolean);
    this.setInputsInline(true);
  }
}

Blockly.Blocks.em_fiveInfraredTrackingData={
  init:function(){
    this.setColour(220);
		this.appendDummyInput("")
        .appendField(Blockly.EM_FIVEINFRAREDTRACKING)
        .appendField(new Blockly.FieldTextInput('myFiveInfraredTracking'), 'em_fiveInfraredTracking')
        .appendField(Blockly.EM_FIVEINFRAREDTRACKINGDATA)
        // .appendField("?????????????????? ???????????????")
      // .appendField("?????????????????????????")
    this.setOutput(true, Number);
    this.setInputsInline(true);
  }
}

/* 
//???????????????
*/
//????????????????????????
Blockly.Blocks.em_keypad = {
    init: function () {
      this.setColour(100);
      this.appendDummyInput("")
        .appendField(Blockly.EM_DEYPAD);
      this.appendValueInput("em_row_1", Number)
        .appendField(Blockly.EM_DEYPADROW1)
        .setCheck(Number);
      this.appendValueInput("em_row_2", Number)
        .appendField(Blockly.EM_DEYPADROW2)
        .setCheck(Number);
      this.appendValueInput("em_row_3", Number)
        .appendField(Blockly.EM_DEYPADROW3)
        .setCheck(Number);
      this.appendValueInput("em_row_4", Number)
        .appendField(Blockly.EM_DEYPADROW4)
        .setCheck(Number);
      this.appendValueInput("em_col_1", Number)
        .appendField(Blockly.EM_DEYPADCOL1)
        .setCheck(Number);
      this.appendValueInput("em_col_2", Number)
        .appendField(Blockly.EM_DEYPADCOL2)
        .setCheck(Number);
      this.appendValueInput("em_col_3", Number)
        .appendField(Blockly.EM_DEYPADCOL3)
        .setCheck(Number);
      this.appendValueInput("em_col_4", Number)
        .appendField(Blockly.EM_DEYPADCOL4)
        .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };
  //?????????????????????
  Blockly.Blocks.em_getkeypad = {
    init: function () {
      this.setColour(100);
      this.appendDummyInput("")
        .appendField(Blockly.EM_GETKEYPAD)
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };
  //???????????????????????????
  Blockly.Blocks.em_keypadpressed = {
    init: function () {
      this.setColour(100);
      this.appendDummyInput("")
        .appendField(Blockly.EM_KEYPADPRESED)
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
    }
  };
  //?????????????????????
  Blockly.Blocks.em_keypadvalue = {
    init: function () {
      this.setColour(100);
      this.appendDummyInput("")
        .appendField(Blockly.EM_KEYPADVALUE)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
  
//????????????????????? ??????value
Blockly.Blocks.em_initPiano = {
    init: function () {
      this.setColour(130);
      this.appendDummyInput("")
        .appendField(Blockly.EM_PIANOPORT)
      // this.appendDummyInput("")
      //   .appendField(Blockly.EM_IICTUBECLK)
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
        ]), "em_clk")
      // this.appendDummyInput("")
        .appendField(Blockly.EM_IICTUBEDIO)
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
        ]), "em_dio")
        // this.appendDummyInput("")
        .appendField(Blockly.EM_PIANO)
        .appendField(new Blockly.FieldDropdown(EM_PIANO), "em_piano")
        // this.appendDummyInput("")
        .appendField(Blockly.EM_PIANO_ISTOUCH)
      this.setInputsInline(true);
      this.setOutput(true, Boolean);
      this.setTooltip('');
    }
  };
  
 //????????????????????? V2 ??????value
Blockly.Blocks.em_initPiano_v2 = {
    init: function () {
      this.setColour(130);
      this.appendDummyInput("")
        .appendField(Blockly.EM_PIANOPORT_V2)
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
        ]), "em_clk")
        .appendField(Blockly.EM_IICTUBEDIO)
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
        ]), "em_dio")
        .appendField(Blockly.EM_PIANO_V2)
        .appendField(new Blockly.FieldDropdown(EM_PIANOV2), "em_piano")
        .appendField(Blockly.EM_PIANO_ISTOUCH)
	  this.setInputsInline(true);
      this.setOutput(true, Boolean);
      this.setTooltip('');
    }
  };

Blockly.Blocks.em_sliding_potentiometer = {
  init: function () {
    this.setColour(160);
    this.appendDummyInput("")
    .appendField(Blockly.EM_PIN)
    .appendField(new Blockly.FieldDropdown([
      ['A0', "A0"],
      ['A1', "A1"],
      ['A2', "A2"],
      ['A3', "A3"],
      ['A4', "A4"],
      ['A5', "A5"],
    ]), "em_slidingPort")
      .appendField(Blockly.EM_SLIDINGPOTENTIOMETER)
      this.setOutput(true, Number);
      this.setInputsInline(true);
  }
}

Blockly.Blocks.em_digitalInitPort = {
  init: function () {
    this.setColour(160);
    this.appendDummyInput("")
      .appendField(Blockly.EM_DIGITALPORTINIT)
      .appendField(new Blockly.FieldTextInput('myEncoder'), 'em_encoder')
      .appendField(Blockly.EM_DIGITALPORTA)
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
      ]), "em_porta")
      .appendField(Blockly.EM_DIGITALPORTB)
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
      ]), "em_portb")
      .appendField(Blockly.EM_DIGITALPORTD)
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
      ]), "em_portd")
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
  }
}


//???????????????
Blockly.Blocks.em_digital = {
    init: function () {
      this.setColour(160);
      this.appendDummyInput("")
      .appendField(Blockly.EM_ENCODER)
        .appendField(new Blockly.FieldTextInput('myEncoder'), 'em_encoder')
        .appendField(Blockly.EM_DIGITAL)
      this.setOutput(true, Boolean);
      this.setTooltip('');
    }
  };
  Blockly.Blocks.em_print = {
    init: function () {
      this.setColour(160);
      this.appendDummyInput("")
      .appendField(Blockly.EM_ENCODER)
      .appendField(new Blockly.FieldTextInput('myEncoder'), 'em_encoder')
      .appendField(Blockly.EM_PRINT)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
//?????????????????????
Blockly.Blocks.em_initialize_matrix_keyboard = {
    init: function () {
      this.setColour(190);
      this.appendDummyInput("")
        .appendField(Blockly.EM_INITIALIZE_MATRIX_KEYBOARD)
        .appendField(new Blockly.FieldTextInput('myMatrixKeyboard'), 'em_keyboard')
        .appendField(Blockly.EM_SCLPIN)
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
        ]), "em_scl_pin")
        .appendField(Blockly.EM_SDOPIN)
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
        ]), "em_sdo_pin")
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };
  //??????????????????
  Blockly.Blocks.em_matrix_keyboard_status = {
    init: function () {
      this.setColour(190);
      this.appendDummyInput("")
        .appendField(Blockly.EM_MATRIX_KEYBOARD)
        .appendField(new Blockly.FieldTextInput('myMatrixKeyboard'), 'em_keyboard')
        .appendField(Blockly.EM_MATRIX_KEY)
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
        ), "em_key")
      this.appendDummyInput("")
        .appendField(Blockly.EM_STATUS)
        
      this.setOutput(true, Boolean);
      this.setTooltip('');
      this.setInputsInline(true);
    }
  };
  //???????????????????????????
  Blockly.Blocks.em_matrix_keyboard_values = {
    init: function () {
      this.setColour(190);
      this.appendDummyInput("")
      .appendField(Blockly.EM_MATRIX_KEYBOARD)
      .appendField(new Blockly.FieldTextInput('myMatrixKeyboard'), 'em_keyboard')
        .appendField(Blockly.EM_MATRIX_KEYBOARD_VALUES)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
// ?????????????????????
Blockly.Blocks.em_hand_initalize_header={
	init:function(){
		this.setColour(210);
		this.appendDummyInput("")
		    .appendField(Blockly.EM_HANDINIT_HEADER)
        .appendField(new Blockly.FieldTextInput('myJoystickHandle'), 'em_joystick')
		this.setInputsInline(false);
    this.setPreviousStatement(true, null);
		// this.setPreviousStatement(false, null);
    this.setNextStatement(true, null);

		// this.setNextStatement(false, null);
		this.setTooltip('');
	}
};
// this.setPreviousStatement(true,
// ??????????????????????????????
Blockly.Blocks.em_hand_press_that={
	init:function(){
		this.setColour(210);
		this.appendDummyInput("")
		    .appendField(Blockly.EM_HAND_PRESS_THATA)
        .appendField(new Blockly.FieldTextInput('myJoystickHandle'), 'em_joystick')
			.appendField(new Blockly.FieldDropdown(EM_JOBONE_BTN), "em_btnfour")
			.appendField(Blockly.EM_HAND_PRESS_THATB);
		this.setInputsInline(true);
		this.setOutput(true, Number);
		this.setPreviousStatement(false, null);
		this.setNextStatement(false, null);
		this.setTooltip('');
	}
};
Blockly.Blocks.em_hand_release_that={
	init:function(){
		this.setColour(210);
		this.appendDummyInput("")
		    .appendField(Blockly.EM_HAND_PRESS_THATA)
        .appendField(new Blockly.FieldTextInput('myJoystickHandle'), 'em_joystick')
        .appendField(Blockly.EM_HAND_PRESS_THATA_KEY)
			.appendField(new Blockly.FieldDropdown(EM_JOBONE_BTN), "em_btnfour")
			.appendField(Blockly.EM_HAND_PRESS_THATC);
		this.setInputsInline(true);
		this.setOutput(true, Number);
		this.setPreviousStatement(false, null);
		this.setNextStatement(false, null);
		this.setTooltip('');
	}
};
//??????????????????
Blockly.Blocks.em_hand_jobone_header_x={
  init:function(){
    this.setColour(210);
    this.appendDummyInput("")
	  .appendField(Blockly.EM_HAND_IOBONE_HEADER)
    .appendField(new Blockly.FieldTextInput('myJoystickHandle'), 'em_joystick')
    .appendField(Blockly.EM_HAND_IOBONE_HEADERA)
      .appendField(new Blockly.FieldDropdown(EM_JOBONE_X), "em_decasx")
	  .appendField(Blockly.EM_HAND_IOBONE_HEADERB)
    this.setOutput(true, Number);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setTooltip('');
  }
};
//??????????????????
Blockly.Blocks.em_hand_botton_fore={
	init:function(){
		this.setColour(210);
		this.appendDummyInput("")
		    .appendField(Blockly.EM_HAND_PRESS_THATA)
        .appendField(new Blockly.FieldTextInput('myJoystickHandle'), 'em_joystick')
        .appendField(Blockly.EM_HAND_PRESS_THATA_KEY)
		    .appendField(new Blockly.FieldDropdown(EM_JOBONE_BTN), "em_btnfour")
		    .appendField(Blockly.EM_HAND_BOTTON_FOREC)
		    .appendField(new Blockly.FieldDropdown(EM_JOBONE_LAST), "em_btnlast")
		this.setInputsInline(true);
		this.setOutput(true, Number);
		this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
		this.setTooltip('');
	}
};
// ??????????????????
Blockly.Blocks.em_hand_lr_press={
	init:function(){
		this.setColour(210);
		this.appendDummyInput("")
		    .appendField(Blockly.EM_HAND_LR_PRESSA)
			.appendField(new Blockly.FieldDropdown(EM_LR_press), "em_lrpre")
			.appendField(new Blockly.FieldDropdown(EM_JOBONE_X), "em_jobone")
			.appendField(Blockly.EM_HAND_LR_PRESSB)
		this.setOutput(true, Number);
		this.setPreviousStatement(false, null);
		this.setNextStatement(false, null);
		this.setTooltip('');
	}
}

/* 
//?????????
*/
//?????????7????????????
Blockly.Blocks.em_7ledinit = {
    init: function () {
      this.setColour(30);
      this.appendDummyInput("")
        .appendField(Blockly.EM_7LEDINIT);
      this.appendValueInput("em_pin1", Number)
        .appendField(Blockly.EM_A)
        .setCheck(Number);
      this.appendValueInput("em_pin2", Number)
        .appendField(Blockly.EM_B)
        .setCheck(Number);
      this.appendValueInput("em_pin3", Number)
        .appendField(Blockly.EM_C)
        .setCheck(Number);
      this.appendValueInput("em_pin4", Number)
        .appendField(Blockly.EM_D)
        .setCheck(Number);
      this.appendValueInput("em_pin5", Number)
        .appendField(Blockly.EM_E)
        .setCheck(Number);
      this.appendValueInput("em_pin6", Number)
        .appendField(Blockly.EM_F)
        .setCheck(Number);
      this.appendValueInput("em_pin7", Number)
        .appendField(Blockly.EM_G)
        .setCheck(Number);
      this.appendValueInput("em_pin8", Number)
        .appendField(Blockly.EM_H)
        .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
  
    }
  };
  //7????????????????????????value
  Blockly.Blocks.em_7leddisplaynum = {
    init: function () {
      this.setColour(30);
      this.appendDummyInput("")
        .appendField(Blockly.EM_7LEDDISPLAYNUM);
      this.appendValueInput("em_displaynum", Number)
        .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
  
    }
  };
  //?????????4*7????????????
Blockly.Blocks.em_47ledinit = {
    init: function () {
      this.setColour(70);
      this.appendDummyInput("")
        .appendField(Blockly.EM_47LEDINIT);
      this.appendValueInput("em_pin1", Number)
        .appendField(Blockly.EM_A)
        .setCheck(Number);
      this.appendValueInput("em_pin2", Number)
        .appendField(Blockly.EM_B)
        .setCheck(Number);
      this.appendValueInput("em_pin3", Number)
        .appendField(Blockly.EM_C)
        .setCheck(Number);
      this.appendValueInput("em_pin4", Number)
        .appendField(Blockly.EM_D)
        .setCheck(Number);
      this.appendValueInput("em_pin5", Number)
        .appendField(Blockly.EM_E)
        .setCheck(Number);
      this.appendValueInput("em_pin6", Number)
        .appendField(Blockly.EM_F)
        .setCheck(Number);
      this.appendValueInput("em_pin7", Number)
        .appendField(Blockly.EM_G)
        .setCheck(Number);
      this.appendValueInput("em_pin8", Number)
        .appendField(Blockly.EM_H)
        .setCheck(Number);
      this.appendValueInput("em_pin9", Number)
        .appendField(Blockly.EM_D1)
        .setCheck(Number);
      this.appendValueInput("em_pin10", Number)
        .appendField(Blockly.EM_D2)
        .setCheck(Number);
      this.appendValueInput("em_pin11", Number)
        .appendField(Blockly.EM_D3)
        .setCheck(Number);
      this.appendValueInput("em_pin12", Number)
        .appendField(Blockly.EM_D4)
        .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };
  //4*7??????????????????
  Blockly.Blocks.em_7ledcountnum = {
    init: function () {
      this.setColour(70);
      this.appendDummyInput("")
        .appendField(Blockly.EM_7LEDFROM);
      this.appendValueInput("em_count", Number)
        .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
  
    }
  };
  
  Blockly.Blocks.em_7ledcountnumoff = {
    init: function () {
      this.setColour(70);
      this.appendDummyInput("")
        .appendField(Blockly.EM_7LEDFROMOFF);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
  
    }
  };
//??????????????????
Blockly.Blocks.em_dianzhen = {
    init: function () {
      this.setColour(110);
      this.appendDummyInput("")
        .appendField(Blockly.EM_INITDIANZHEN)
        .appendField(new Blockly.FieldTextInput('myMaxMatrix'), 'em_maxMaxtrix')
        .appendField(Blockly.EM_DIN)
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
        ]), "em_din")
      .appendField(Blockly.EM_CS)
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
      ]), "em_cs")
      // this.appendValueInput("em_cs", Number)
      //   .setCheck(Number);
      // this.appendValueInput("em_clk", Number)
        .appendField(Blockly.EM_CLK)
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
        ]), "em_clk")
        // .setCheck(Number);
      this.appendValueInput("em_count", Number)
        .appendField(Blockly.EM_COUNT)
        .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };
  //??????????????? ??????
  Blockly.Blocks.em_dianzhenprint = {
    init: function () {
      this.setColour(110);
      this.appendDummyInput("")
        .appendField(Blockly.EM_MAXIMAGES)
        .appendField(new Blockly.FieldTextInput('myMaxMatrix'), 'em_maxMaxtrix')
        .appendField(Blockly.EM_MAXIMAGESDISPLAY)
        .appendField(new Blockly.FieldDropdown(EM_MAXIMAGE), "em_maximage");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  
  };
//iic?????????
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

//8x8ledinit 8x8??????????????????
Blockly.Blocks.em_x8ledinit = {
    init: function () {
      this.setColour(30);
      this.appendDummyInput("")
        .appendField(Blockly.EM_8X8LEDINIT)
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
        ]), "em_row_0s")
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
        ]), "em_row_1s")
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
        ]), "em_row_2s")
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
        ]), "em_row_3s")
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
        ]), "em_row_4s")
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
        ]), "em_row_5s")
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
        ]), "em_row_6s")
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
        ]), "em_row_7s")
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
        ]), "em_led_a1")
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
        ]), "em_led_b1")
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
        ]), "em_led_c1")
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
        ]), "em_led_d1")
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
        ]), "em_led_e1")
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
        ]), "em_led_f1")
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
        ]), "em_led_g1")
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
        ]), "em_led_h1")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
//8x8led???????????????
  Blockly.Blocks.em_x8leddisplay = {
    init: function () {
      this.setColour(30);
      this.appendDummyInput("")
        .appendField(Blockly.EM_MAXIMAGES1)
        .appendField(new Blockly.FieldDropdown(EM_MAXIMAGE), "em_maximage");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  
  };
  //??????????????????x8ledloopscan
  Blockly.Blocks.em_x8ledloopscan = {
    init: function () {
      this.setColour(30);
      this.appendDummyInput("")
        .appendField(Blockly.EM_ARDUINO_X8LEDLOOPSCAN)
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
//74h????????? 74hinit
Blockly.Blocks.em_74hinit = {
    init: function () {
      this.setColour(80);
      this.appendDummyInput("")
        .appendField(Blockly.EM_ARDUINO_74HINIT)
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
        ]), "em_bit_choice_11")
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
        ]), "em_bit_choice_22")
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
        ]), "em_bit_choice_33")
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
        ]), "em_bit_choice_44")
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
        ]), "em_stcp_pin1")
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
        ]), "em_shcp_pin1")
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
        ]), "em_data_pin1")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //74h??????????????? _74hinitisplay
  Blockly.Blocks.em_74hinitisplay = {
    init: function () {
      this.setColour(80);
      this.appendDummyInput("")
        .appendField(Blockly.EM_ARDUINO_74HDISPLAY)
      this.appendValueInput("em_74hinitisplays", Number)
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //74h?????? _74hoff
  Blockly.Blocks.em_74hoff = {
    init: function () {
      this.setColour(80);
      this.appendDummyInput("")
        .appendField(Blockly.EM_ARDUINO_74HOFF)
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
//OLED?????????
// 
Blockly.Blocks.em_OLED_Init = {
  init: function () {
    this.setColour(130);
    this.appendDummyInput("")
      .appendField(Blockly.EM_OLEDINIT)
      .appendField(new Blockly.FieldTextInput('myOled'), 'em_oled')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

Blockly.Blocks.em_OLED_Model = {
    init: function () {
      this.setColour(130);
      this.appendDummyInput("")
        .appendField(Blockly.EM_OLEDRUN)
        .appendField(new Blockly.FieldTextInput('myOled'), 'em_oled')
        this.appendStatementInput('DO')
        .appendField(Blockly.EM_OLEDDISPLAY)
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  }

  //OLED???????????????
  Blockly.Blocks.em_OLED_Display_String = {
    init: function () {
      this.setColour(130);
      this.appendDummyInput("")
        .appendField(Blockly.EM_OLEDDISPLAYSTRING)
        .appendField(new Blockly.FieldTextInput('myOled'), 'em_oled')
      this.appendValueInput("em_horizontal", Number)
        .appendField(Blockly.EM_OLEDDISPLAYSTRING_HORIZONTAL)
        .setCheck(Number);
      this.appendValueInput("em_longitudinal", Number)
        .appendField(Blockly.EM_OLEDDISPLAYSTRING_LONGITUDINAL)
        .setCheck(Number);
      this.appendValueInput("em_content", String)
        .appendField(Blockly.EM_OLEDDISPLAYSTRING_CONTENT)
        this.appendDummyInput("")
        .appendField(Blockly.EM_OLEDSIZE)
        .appendField(new Blockly.FieldDropdown(
          [
            ['16', '16'],
          ]
        ), "em_size")
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };

  //OLED???????????????
  Blockly.Blocks.em_OLED_Display_String_Row = {
    init: function () {
      this.setColour(130);
      this.appendDummyInput("")
        // .appendField(Blockly.OLEDDISPLAYSTRING)
        .appendField(Blockly.EM_OLEDDISPLAYSTRING)
        .appendField(new Blockly.FieldTextInput('myOled'), 'em_oled')
        .appendField(Blockly.EM_OLEDDISPLAYSTRINGROW)
        .appendField(new Blockly.FieldDropdown(
          [
            ['1', '0'],
            ['2', '1'],
            ['3', '2'],
            ['4', '3'],
          ]
        ), "em_row")
      this.appendValueInput("em_horizontal", Number)
        .appendField(Blockly.EM_OLEDDISPLAYSTRINGHORIZONTALROW);
      this.appendValueInput("em_content", String)
      // .appendField(Blockly.OLEDROW)
        .appendField(Blockly.EM_OLEDDISPLAYSTRINGCONTENTROW)
        this.appendDummyInput("")
        .appendField(Blockly.EM_OLEDSIZE)
        .appendField(new Blockly.FieldDropdown(
          [
            ['16', '16'],
          ]
        ), "em_size")
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  

/* 
//?????????
*/
//????????????value ????????????value
Blockly.Blocks.em_servo = {
    init: function () {
      this.setColour(40);
      this.appendValueInput("em_servopin", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.EM_SERVOPIN)
      this.appendValueInput("em_servoangle", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.EM_SERVOANGLE);
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
  
    }
  };
//??????DS3231???????????? ????????????????????????
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
  //da3231??????????????????
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
  //da3231?????????????????????
  Blockly.Blocks.kw_ds3231readyear = {
    init: function () {
      this.setColour(100);
      this.appendDummyInput("")
        .appendField(Blockly.KW_DA3231READYEAR)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
  //da3231???????????????????????????
  Blockly.Blocks.kw_ds3231readhour = {
    init: function () {
      this.setColour(100);
      this.appendDummyInput("")
        .appendField(Blockly.EM_DS3231READHOUR)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
//???????????????value
Blockly.Blocks.em_buzzerpin = {
    init: function () {
      this.setColour(160);
      this.appendDummyInput("")
        .appendField(Blockly.EM_BUZZERPIN)
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
        ]), "em_buzzerpin")
      this.appendValueInput("em_freq", Number)
    .appendField(Blockly.EM_BUZZERFREQ)
    this.appendValueInput("em_buzzerTime", Number)
    .appendField(Blockly.EM_BUZZERTIME);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };
//kw_doubleDcMotorDriver ?????????????????????
Blockly.Blocks.em_doubleDcMotorDriver = {
  init: function () {
    this.setColour(220);
    this.appendDummyInput("")
      .appendField(Blockly.EM_DOUBLEDCINIT)
      .appendField(new Blockly.FieldDropdown([
        ['D5', "5"],
        ['D6', "6"],
        ['D9', "9"],
        ['D10', "10"]
      ]), "em_motorIn1")
      .appendField(Blockly.EM_DOUBLEDCIN2)
      .appendField(new Blockly.FieldDropdown([
        ['D6', "6"],
        ['D5', "5"],
        ['D9', "9"],
        ['D10', "10"]
      ]), "em_motorIn2")
      .appendField(Blockly.EM_DOUBLEDCIN3)
      .appendField(new Blockly.FieldDropdown([
        ['D9', "9"],
        ['D5', "5"],
        ['D6', "6"],
        ['D10', "10"],
      ]), "em_motorIn3")
      .appendField(Blockly.EM_DOUBLEDCIN4)
      .appendField(new Blockly.FieldDropdown([
        ['D10', "10"],
        ['D5', "5"],
        ['D6', "6"],
        ['D9', "9"]
      ]), "em_motorIn4")
      this.appendValueInput("em_speed1", Number)
    .appendField(Blockly.EM_DCMOTORSPEED1)
    this.appendValueInput("em_speed2", Number)
    .appendField(Blockly.EM_DCMOTORSPEED2)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
  }
};

// 
Blockly.Blocks.em_doubleDcMotorDriverStop = {
  init: function () {
    this.setColour(220);
    this.appendDummyInput("")
    .appendField(Blockly.EM_DOUBLEDC)
      .appendField(new Blockly.FieldDropdown([
        ['D5', "5"],
        ['D6', "6"],
        ['D9', "9"],
        ['D10', "10"]
      ]), "em_motorIn1")
      .appendField(Blockly.EM_DOUBLEDCIN2)
      .appendField(new Blockly.FieldDropdown([
        ['D6', "6"],
        ['D5', "5"],
        ['D9', "9"],
        ['D10', "10"]
      ]), "em_motorIn2")
      .appendField(Blockly.EM_DOUBLEDCIN3)
      .appendField(new Blockly.FieldDropdown([
        ['D9', "9"],
        ['D5', "5"],
        ['D6', "6"],
        ['D10', "10"],
      ]), "em_motorIn3")
      .appendField(Blockly.EM_DOUBLEDCIN4)
      .appendField(new Blockly.FieldDropdown([
        ['D10', "10"],
        ['D5', "5"],
        ['D6', "6"],
        ['D9', "9"]
      ]), "em_motorIn4")
      .appendField(Blockly.EM_DOUBLEDCSTOP)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}
/* 
//????????????
*/
//????????????????????????
Blockly.Blocks.em_colorview_init = {
    init: function () {
      this.setColour(50);
      this.appendDummyInput("")
        .appendField(Blockly.EM_COLORVIEW_INIT)
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  }
  //???????????????????????????
  Blockly.Blocks.em_colorview_value = {
    init: function () {
      this.setColour(50);
      this.appendDummyInput("")
        .appendField(Blockly.EM_COLORVIEW_VALUE)
        .appendField(new Blockly.FieldTextInput('myColorSensor'), 'em_colorView')
        .appendField(Blockly.EM_COLORVIEW)
        .appendField(new Blockly.FieldDropdown(
          [
            ['R(???)', 'getRed'],
            ['G(???)', 'getGreen'],
            ['B(???)', 'getBlue']
          ]
        ), "em_color")
      this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(
          [
            ['GAMMA', 'ToGamma'],
            ['NO GAMMA', ''],
          ]
        ), "em_gamma")
        .appendField(Blockly.EM_GAMMACHECK)
      this.setOutput(true, Boolean);
      this.setTooltip('');
      this.setInputsInline(true);
    }
  };
  //??????????????????????????????
  Blockly.Blocks.em_VoiceRecognition_init = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
        .appendField(Blockly.EM_VOICERECOGNITION_INIT)
        .appendField(new Blockly.FieldTextInput('myVoiceRecognition'), 'em_VoiceRecognition')
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  }
  //????????????????????????
  Blockly.Blocks.em_VoiceRecognition_Mode = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
        .appendField(Blockly.EM_VOICERECOGNITION)
        .appendField(new Blockly.FieldTextInput('myVoiceRecognition'), 'em_VoiceRecognition')
        .appendField(Blockly.EM_VOICERECOGNITION_MODE)
        .appendField(new Blockly.FieldDropdown(
          [
            [Blockly.EM_VOICERECOGNITION_MODEA, 'LOOP_MODE'],
            [Blockly.EM_VOICERECOGNITION_MODEB, 'BUTTON_MODE'],
            [Blockly.EM_VOICERECOGNITION_MODEC, 'KEYWORDS_MODE'],
            [Blockly.EM_VOICERECOGNITION_MODED, 'KEYWORDS_AND_BUTTON']
          ]), "em_mode")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //?????????????????????????????????
  Blockly.Blocks.em_VoiceRecognition_Content = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
      .appendField(Blockly.EM_VOICERECOGNITION)
      .appendField(new Blockly.FieldTextInput('myVoiceRecognition'), 'em_VoiceRecognition')
        //.appendField(Blockly.INITIALIZE_MATRIX_KEYBOARD)
      this.appendValueInput("em_Key", Number)
        .appendField(Blockly.EM_VOICERECOGNITION_KEY)
        .setCheck(Number);
      this.appendValueInput("em_content", String)
        .appendField(Blockly.EM_VOICERECOGNITION_CONTENT)
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };
  //????????????????????????
  Blockly.Blocks.em_VoiceRecognition_Start = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
      .appendField(Blockly.EM_VOICERECOGNITION)
      .appendField(new Blockly.FieldTextInput('myVoiceRecognition'), 'em_VoiceRecognition')
        .appendField(Blockly.EM_VOICERECOGNITION_START)
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  }
  //????????????????????????
  Blockly.Blocks.em_VoiceRecognition_Reset = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
      .appendField(Blockly.EM_VOICERECOGNITION)
      .appendField(new Blockly.FieldTextInput('myVoiceRecognition'), 'em_VoiceRecognition')
        .appendField(Blockly.EM_VOICERECOGNITION_RESET)
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  }
  //????????????????????????????????????????????????
  Blockly.Blocks.em_VoiceRecognition_Number = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
      .appendField(Blockly.EM_VOICERECOGNITION)
      .appendField(new Blockly.FieldTextInput('myVoiceRecognition'), 'em_VoiceRecognition')
        .appendField(Blockly.EM_VOICERECOGNITION_NUMBER)
      this.setOutput(true, Number);
      this.setTooltip(true);
    }
  };
  //??????????????????????????????
  Blockly.Blocks.em_VoiceRecognition_Time = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
      .appendField(Blockly.EM_VOICERECOGNITION)
      .appendField(new Blockly.FieldTextInput('myVoiceRecognition'), 'em_VoiceRecognition')
      .appendField(Blockly.EM_VOICERECOGNITION_TIME);
      this.appendValueInput("em_time", Number)
        .setCheck(Number)
        .setAlign(Blockly.EM_ALIGN_RIGHT);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };

  //???????????????????????????
  Blockly.Blocks.em_VoiceRecognition_wake_word = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
      .appendField(Blockly.EM_VOICERECOGNITION)
      .appendField(new Blockly.FieldTextInput('myVoiceRecognition'), 'em_VoiceRecognition')
      this.appendValueInput("em_wakeWordContent", String)
        .appendField(Blockly.EM_VOICERECOGNITION_WAKEWORD)
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };

  // ???????????????????????????
  Blockly.Blocks.em_speech_synthesisStart = {
    init: function () {
      this.setColour(180);
      this.appendDummyInput("")
      .appendField(Blockly.EM_SPEECH)
      .appendField(new Blockly.FieldTextInput('mySpeechSynthesis'), 'em_speech')
        .appendField(Blockly.EM_SPEECH_START)
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
          ]), "em_voice")
        // .setCheck(Number)
        .appendField(Blockly.EM_SPEECH_VOICESPEED)
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
          ]), "em_voiceSpeed")
        // .setCheck(Number)
        this.appendValueInput("em_content", String)
        .appendField(Blockly.EM_SPEECH_VOICECONTENT)
        // .setAlign(Blockly.ALIGN_RIGHT);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };


  // ??????????????????
  Blockly.Blocks.em_speech_synthesisCache = {
    init: function () {
      this.setColour(180);
      this.appendDummyInput("")
      .appendField(Blockly.EM_SPEECH)
      .appendField(new Blockly.FieldTextInput('mySpeechSynthesis'), 'em_speech')
        .appendField(Blockly.EM_SPEECH_STARTCACHE)
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
          ]), "em_voice")
        // .setCheck(Number)
        .appendField(Blockly.EM_SPEECH_VOICESPEED)
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
          ]), "em_voiceSpeed")
        // .setCheck(Number)
        this.appendValueInput("em_content", String)
        .appendField(Blockly.EM_SPEECH_VOICECACHECONTENT)
        // .setAlign(Blockly.ALIGN_RIGHT);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };

//????????????
Blockly.Blocks.em_speech_cplay={
  init:function(){
    this.setColour(180);
    this.appendDummyInput("")
    .appendField(Blockly.EM_SPEECH)
      .appendField(new Blockly.FieldTextInput('mySpeechSynthesis'), 'em_speech')
    this.appendValueInput("em_freq", Number)
        .appendField(Blockly.EM_SPEED_CPLAY)
    this.setInputsInline(true);
    // this.setOutput(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

// ?????????
Blockly.Blocks.em_gyro_init={
  init:function(){
    this.setColour(240);
    this.appendDummyInput("")
        .appendField(Blockly.EM_GYRO_INIT)
    this.setOutput(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}
Blockly.Blocks.em_gyro_getvalue={
  init:function(){
    this.setColour(240);
    this.appendDummyInput("")
		    .appendField(Blockly.EM_GYRO_GETVALUE)
		    .appendField(new Blockly.FieldDropdown(EM_GYROVALUE), "em_gyrov")
		    .appendField(Blockly.EM_GYRO_GETVALUEA)
    this.setOutput(true);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setTooltip('');
  }
}

// // ???????????????
// Blockly.Blocks.em_handleStatus_init={
//   init:function(){
//     this.setColour(245);
//     this.appendDummyInput("")
//         .appendField(Blockly.EM_HANDLESENSOR_INIT)
//     this.setOutput(false);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('');
//   }
// }

// Blockly.Blocks.em_handleSensor_getValue={
//   init:function(){
//     this.setColour(245);
//     this.appendDummyInput("")
//         .appendField(Blockly.EM_HANDLESENSOR_GETVALUE)
//     this.setOutput(false);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('');
//   }
// }

Blockly.Blocks.em_handleSensor_isGetValue = {
    init: function () {
      this.setColour(245);
      this.appendDummyInput("")
      .appendField(Blockly.EM_HANDLESENSOR)
      .appendField(new Blockly.FieldTextInput('myHandleSensor'), 'em_handleSensor')
        .appendField(Blockly.EM_HANDLESENSOR_ISGETVALUE)
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
    }
  };
  
  Blockly.Blocks.em_handleSensor_getStatus = {
    init: function () {
      this.setColour(245);
      this.appendDummyInput("")
      .appendField(Blockly.EM_HANDLESENSOR)
      .appendField(new Blockly.FieldTextInput('myHandleSensor'), 'em_handleSensor')
      .appendField(Blockly.EM_HANDLESENSOR_GETSTATUS)
		  .appendField(new Blockly.FieldDropdown(
          [
            [Blockly.EM_HANDLESENSOR_UP, 'DIR_UP'],
            [Blockly.EM_HANDLESENSOR_DOWN, 'DIR_DOWN'],
            [Blockly.EM_HANDLESENSOR_LEFT, 'DIR_LEFT'],
            [Blockly.EM_HANDLESENSOR_RIGHT, 'DIR_RIGHT'],
			[Blockly.EM_HANDLESENSOR_NEAR, 'DIR_NEAR'],
            [Blockly.EM_HANDLESENSOR_FAR, 'DIR_FAR']
          ]), "em_mode")
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
    }
  };

	// ?????????esp8266??????
	Blockly.Blocks.em_esp8266_init = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
        .appendField(Blockly.EM_ESP8266INIT)
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
        ]), "em_iotTx")
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
        ]), "em_iotRX")
	this.setOutput(false);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    }
  };
  
  // ??????WiFi
	Blockly.Blocks.em_esp8266_wifi = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
        .appendField(Blockly.EM_ESP8266WIFICONNECTIONALIYUN)
		this.appendValueInput("em_wifiSsid", String)
		.appendField(Blockly.EM_ESP8266WIFICONNECTION)
	  // this.appendDummyInput("")
       
		this.appendValueInput("em_wifiPwd", String)
		 .appendField(Blockly.EM_PWD)
	  //this.appendDummyInput("")
        
		this.appendValueInput("em_host", String)
		.appendField(Blockly.EM_HOST)
	  //this.appendDummyInput("")
        
		this.appendValueInput("em_port", String)
		.appendField(Blockly.EM_PORT)
	   //this.appendDummyInput("")
        
		this.appendValueInput("em_productKey", String)
		.appendField(Blockly.EM_PRODUCTKEY)
		//this.appendDummyInput("")
        
		this.appendValueInput("em_deviceName", String)
		.appendField(Blockly.EM_DRIVERNAME)
		//this.appendDummyInput("")
        
		this.appendValueInput("em_deviceSecret", String)
		.appendField(Blockly.EM_DEVICESECRET)
	this.setOutput(false);
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    }
  };
  
  // ??????host
	Blockly.Blocks.em_esp8266_otherHost = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
        .appendField(Blockly.EM_OTHERServer)
		this.appendValueInput("em_wifiSsid", String)
		.appendField(Blockly.EM_ESP8266WIFICONNECTION)
	  // this.appendDummyInput("")
       
		this.appendValueInput("em_wifiPwd", String)
		 .appendField(Blockly.EM_PWD)
		this.appendValueInput("em_host", String)
		.appendField(Blockly.EM_OTHERHOST)
		// this.appendDummyInput("")
		this.appendValueInput("em_port", Number)
		.appendField(Blockly.EM_PORT)
		// this.appendDummyInput("")
		this.appendValueInput("em_userClientId", String)
		.appendField(Blockly.EM_CLIENTID)
	  // this.appendDummyInput("")
		this.appendValueInput("em_username", String)
		.appendField(Blockly.EM_USERNAME)
	  // this.appendDummyInput("")
		this.appendValueInput("em_password", String)
		.appendField(Blockly.EM_PASSWORD)
	this.setOutput(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    }
  };
  
  // ?????? ?????????
	Blockly.Blocks.em_esp8266_userConfigParam = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
        .appendField(Blockly.EM_CLIENTID)
		this.appendValueInput("em_userClientId", String)
	  this.appendDummyInput("")
        .appendField(Blockly.EM_USERNAME)
		this.appendValueInput("em_username", String)
	  this.appendDummyInput("")
        .appendField(Blockly.EM_PASSWORD)
		this.appendValueInput("em_password", String)
	this.setOutput(false);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    }
  };
  
  // ?????? ?????????
	Blockly.Blocks.em_esp8266_setParam = {
    init: function () {
      this.setColour(150);
      this.appendDummyInput("")
        .appendField(Blockly.EM_PRODUCTKEY)
		this.appendValueInput("em_productKey", String)
	  this.appendDummyInput("")
        .appendField(Blockly.EM_DRIVERNAME)
		this.appendValueInput("em_deviceName", String)
	  this.appendDummyInput("")
        .appendField(Blockly.EM_DEVICESECRET)
		this.appendValueInput("em_deviceSecret", String)
	this.setOutput(false);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    }
  };
  
   // ??????WIFI??????
	Blockly.Blocks.em_esp8266_connection = {
    init: function () {
      this.setColour(150);
	  this.appendDummyInput("")
        .appendField(Blockly.EM_MQTTCONNECTION)
  	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    }
  };
  
  // ????????????????????????
	Blockly.Blocks.em_esp8266_isConnection = {
    init: function () {
      this.setColour(150);
	  this.appendDummyInput("")
        .appendField(Blockly.EM_ISCONNECTION)
    this.setOutput(true, Boolean);
    this.setInputsInline(true);
    }
  };
  
  // ??????
	Blockly.Blocks.em_esp8266_sub = {
    init: function () {
      this.setColour(150);
	  this.appendDummyInput("")
        .appendField(Blockly.EM_SUB)
		this.appendValueInput("em_subStr", String)
	  this.appendDummyInput("")
        .appendField("QOS")
		.appendField(new Blockly.FieldDropdown([
          ['0', "0"],
          ['1', "1"],
          ['2', "2"],
		  ]), "em_qos")
	this.setOutput(false);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    }
  };
  
   // ??????
	Blockly.Blocks.em_esp8266_pub = {
		init: function () {
			  this.setColour(150);
			  this.appendDummyInput("")
				.appendField(Blockly.EM_PUB)
				this.appendValueInput("em_pubStr", String)
			  this.appendDummyInput("")
				.appendField(Blockly.EM_PUBDATA)
				this.appendValueInput("em_data", String)
				this.appendDummyInput("")
				.appendField("QOS")
				.appendField(new Blockly.FieldDropdown([
				  ['0', "0"],
				  ['1', "1"],
				  ['2', "2"],
				  ]), "em_qos")
			this.setOutput(false);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('');
		}
  };
  
   // ???????????????????????????
	Blockly.Blocks.em_esp8266_isReceive = {
    init: function () {
      this.setColour(150);
	  this.appendDummyInput("")
        .appendField(Blockly.EM_ISRECEIVE)
		this.setOutput(true, Boolean);
		this.setInputsInline(true);
    }
  };
  
  
   // ????????????
	Blockly.Blocks.em_esp8266_getSubMsg = {
		init: function () {
			  this.setColour(150);
			  this.appendDummyInput("")
				.appendField(Blockly.EM_GETSUBMSG)
				.appendField(new Blockly.FieldDropdown([
				  [Blockly.EM_TOPIC, "1"],
				  [Blockly.EM_MSG, "2"],
				]), "em_msgType")
			this.setOutput(true, String);
			this.setInputsInline(true);
		}
	}

//	// ??????host
	Blockly.Blocks.em_esp8266_httpHost = {
   init: function () {
     this.setColour(150);
     this.appendDummyInput("")
       .appendField(Blockly.EM_HTTPSERVER)
		this.appendValueInput("em_wifiSsid", String)
		.appendField(Blockly.EM_ESP8266WIFICONNECTION)
	  // this.appendDummyInput("")
		this.appendValueInput("em_wifiPwd", String)
		 .appendField(Blockly.PWD)
		this.appendValueInput("em_httpHost", String)
		.appendField(Blockly.EM_HTTPHOST)
		// this.appendDummyInput("")
       
		this.appendValueInput("em_httpPort", Number)
		.appendField(Blockly.EM_PORT)
		// this.appendDummyInput("")
	this.setOutput(false);
   this.setPreviousStatement(true, null);
   this.setNextStatement(true, null);
   this.setTooltip('');
   }
 };
	
   // ????????????
	Blockly.Blocks.em_esp8266_connectHttpServer = {
		init: function () {
			  this.setColour(150);
			  this.appendDummyInput("")
				.appendField(Blockly.EM_CONNECTHTTPSERVER)
			this.setOutput(true, Boolean);
		this.setInputsInline(true);
		}
	}
	
	// 
	Blockly.Blocks.em_esp8266_get = {
		init: function () {
			  this.setColour(150);
			  this.appendDummyInput("")
				this.appendValueInput("em_getStr", String)
				.appendField(Blockly.EM_HTTPGET)
				this.appendValueInput("em_timeout", Number)
				.appendField(Blockly.EM_TIMEOUT)
			this.setOutput(true, String);
			this.setInputsInline(true);
		}
	}
	
/* 
//????????????
*/
//???????????????????????????
Blockly.Blocks.em_getbluetooth = {
    init: function () {
      this.setColour(85);
      this.appendDummyInput("")
        .appendField(Blockly.EM_GETBLUETOOTH)
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
    }
  };
  //????????????????????????
  Blockly.Blocks.em_getbluetoothdata = {
    init: function () {
      this.setColour(85);
      this.appendDummyInput("")
        .appendField(Blockly.EM_GETBLUETOOTHDATA)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
  //????????????????????? ??????value
Blockly.Blocks.em_initir = {
    init: function () {
      this.setColour(135);
      this.appendDummyInput("")
        .appendField(Blockly.EM_INITIR)
        .appendField(Blockly.EM_IRPORT)
      this.appendValueInput("em_initir", Number)
        .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
    }
  };
  // ??????????????????????????????????????????boolean???
  Blockly.Blocks.em_irKeyPress = {
    init: function () {
      this.setColour(135);
      this.appendDummyInput("")
        .appendField(Blockly.EM_IRKEYPRESS)
        .appendField(new Blockly.FieldDropdown(EM_IRKEY), "em_irkey")
      this.setOutput(true, Boolean);
      this.setTooltip('');
    }
  };
  // emakefun????????????????????????????????????boolean???
  Blockly.Blocks.em_irKeyPress2 = {
    init: function () {
      this.setColour(135);
      this.appendDummyInput("")
        .appendField(Blockly.EM_IRKEYPRESS2)
        .appendField(new Blockly.FieldDropdown(EM_IRKEY2), "em_irkey2")
      this.setOutput(true, Boolean);
      this.setTooltip('');
    }
  };
  //?????????????????????
  Blockly.Blocks.em_irKeyPress3 = {
      init:function (){
          this.setColour(135);
          this.appendDummyInput("")
              .appendField(Blockly.EM_IRKEYPRESS3)
          this.setOutput(true, Boolean);
          this.setTooltip('');
      }
  }
//??????????????????
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
  //????????????????????????
  Blockly.Blocks.kw_dogetbluetoothvalue = {
    init: function () {
      this.setColour(85);
      this.appendDummyInput("")
        .appendField(Blockly.KW_DOGETBLUETOOTHVALUE)
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
    }
  };
  //???????????? ???????????????boolean
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
  //????????????RGB???
  Blockly.Blocks.kw_bluetoothgetrgbvalue = {
    init: function () {
      this.setColour(85);
      this.appendDummyInput("")
        .appendField(Blockly.KW_BLUETOOTHGETRGBVALUE)
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
  //????????????
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
  //????????????
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


//?????????????????????????????? NRF24L01??????????????????value ??????value
Blockly.Blocks.nrf24l01send = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.RF24_INITNRF24L01ADDRESS1);
      this.appendValueInput("address", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //?????????????????????
  Blockly.Blocks.nrf24l01rec = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.RF24_INITNRF24L01ADDRESS2);
      this.appendValueInput("address2", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //?????????????????????  
  Blockly.Blocks.power_consumption_level = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.RF24_SETUP)
        .appendField(new Blockly.FieldDropdown(
          [
            [Blockly.PEWER_CONS_LEVELA, 'RF24_PA_MIN'],
            [Blockly.PEWER_CONS_LEVELB, 'RF24_PA_LOW'],
            [Blockly.PEWER_CONS_LEVELC, 'RF24_PA_HIGH'],
            [Blockly.PEWER_CONS_LEVELD, 'RF24_PA_MAX'],
          ]), "version")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //???????????????
  Blockly.Blocks.initialize_pins = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.RF24_PINSCE)
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
        ), "CE")
        .appendField(Blockly.RF24_PINSCS)
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
        ), "CS")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //nrf????????????
  Blockly.Blocks.nrf24l01senddatass = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.RF24_SENDDATA);
      this.appendValueInput("nrfdatass", Number)
      this.setInputsInline(true);
      //   this.appendDummyInput("")
      //   .appendField(Blockly.RF24_GENRE)
      //   .appendField(new Blockly.FieldDropdown(
      //    [
      //         ['??????','int'],
      //         ['???????????????','unsigned int'],
      //         ['???','word'],
      //         ['?????????','long'],
      //         ['??????????????????','unsigned long'],
      //         ['??????','float'],
      //         ['??????????????????','double'],
      //         ['??????','boolean'],
      //         ['??????','byte'],
      //         ['??????','char'],
      //         ['???????????????','unsigned char'],
      //         ['?????????','String']
      // ]
      // ), "GENRE")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //nrf?????????????????????
  Blockly.Blocks.nrf24l01senddatass_string = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.RF24_SENDDATA_STRING);
      this.appendValueInput("nrfdatass_string", String)
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //???????????????
  Blockly.Blocks.eavesdrop = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.RF24_EAVESDROP)
        .appendField(new Blockly.FieldDropdown(
          [
            [Blockly.RF24_EAVESDROPUP, 'start'],
            [Blockly.RF24_EAVESDROPDOWN, 'stop']
          ]), "EAVESDROP")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //?????????????????????
  Blockly.Blocks.nrfdataradys = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.RF24_READABILITY)
      this.setOutput(true, Boolean);
      this.setTooltip('');
    }
  };
  //nrf????????????
  Blockly.Blocks.nrfrecdatas = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.RF24_INITNRF24L01RECDATASSS);
      this.appendValueInput("nrfdatasss", Number)
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //nrf?????????????????????
  Blockly.Blocks.nrfrecdatas_string = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.RF24_INITNRF24L01RECDATASSS_STRING)
      this.setOutput(true, String);
      this.setTooltip(true);
    }
  };
  //?????????
  Blockly.Blocks.transmission_rate = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.RF24_SPEED)
        .appendField(new Blockly.FieldDropdown(
          [
            ['1MB', 'RF24_1MBPS'],
            ['2MB', 'RF24_2MBPS'],
            ['250KB', 'RF24_250KBPS']
          ]), "Transmission_Rate")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
  //??????????????????
  Blockly.Blocks.channel_frequency = {
    init: function () {
      this.setColour(200);
      this.appendDummyInput("")
        .appendField(Blockly.RF24_CHANNEL_FREQUENCY);
      this.appendValueInput("channel", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
    }
  };
