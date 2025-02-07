(() => {
	'use strict';

	// goog.provide('Blockly.Blocks.NulllabSensor');

	goog.require('Blockly.Blocks');

    // 初始化手柄
    Blockly.Blocks.gamepad_init = {
        init: function () {
            this.setColour(200);
            this.appendDummyInput("")
                .appendField("初始化Arduino手柄")    
            this.setOutput(false);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    }

    // 开启/关闭陀螺仪功能
    Blockly.Blocks.gamepad_enable_gyroscope = {
        init: function () {
            this.setColour(200);
            this.appendDummyInput("")
                .appendField(new Blockly.FieldDropdown(
                    [
                        ['开启', 'true'],
                        ['关闭', 'false'],
                    ]), "gyrpscope_state")
                .appendField("陀螺仪功能")    
            this.setOutput(false);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    }

    // 初始化手柄RF24功能 设置通信通道(0-125)为
    Blockly.Blocks.gamepad_rf24_init = {
        init: function () {
            this.setColour(200);
            this.appendDummyInput("")
                .appendField("初始化Arduino手柄RF24功能 发送引脚CE") 
                .appendField(new Blockly.FieldDropdown(
                    [
                      ['7', '7'],
                      ['2', '2'],
                      ['3', '3'],
                      ['4', '4'],
                      ['5', '5'],
                      ['6', '6'],
                      ['8', '8'],
                      ['9', '9'],
                      ['10', '10']
                    ]
                  ), "rf24_CE")
                  .appendField(" 引脚CS") 
                  .appendField(new Blockly.FieldDropdown(
                      [
                        ['8', '8'],
                        ['2', '2'],
                        ['3', '3'],
                        ['4', '4'],
                        ['5', '5'],
                        ['6', '6'],
                        ['7', '7'],
                        ['9', '9'],
                        ['10', '10']
                      ]
                    ), "rf24_CS")
                .appendField("设置通信通道(0-125)为")     
            this.appendValueInput("rf24_channel", Number)
            this.appendValueInput("rf24_address", Number)
            .appendField("通道地址为")
            this.setOutput(false);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    }

    // 初始化手柄RF24功能 设置通信通道(0-125)为
    Blockly.Blocks.gamepad_rf24_sub_init = {
        init: function () {
            this.setColour(200);
            this.appendDummyInput("")
                .appendField("初始化RF24模块为接收模式 接收引脚CE") 
                .appendField(new Blockly.FieldDropdown(
                    [
                      ['7', '7'],
                      ['2', '2'],
                      ['3', '3'],
                      ['4', '4'],
                      ['5', '5'],
                      ['6', '6'],
                      ['8', '8'],
                      ['9', '9'],
                      ['10', '10']
                    ]
                  ), "rf24_CE")
                  .appendField(" 引脚CS") 
                  .appendField(new Blockly.FieldDropdown(
                      [
                        ['8', '8'],
                        ['2', '2'],
                        ['3', '3'],
                        ['4', '4'],
                        ['5', '5'],
                        ['6', '6'],
                        ['7', '7'],
                        ['9', '9'],
                        ['10', '10']
                      ]
                    ), "rf24_CS")
                .appendField("设置通信通道(0-125)为")     
            this.appendValueInput("rf24_channel", Number)
            this.appendValueInput("rf24_address", Number)
            .appendField("通道地址为")
            this.setOutput(false);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    }
    
    // 设置手柄BLE为主机模式
    Blockly.Blocks.gamepad_set_ble_mode = {
        init: function () {
            this.setColour(200);
            this.appendDummyInput("")
                .appendField("设置BLE功能Arduino手柄为主机模式")    
            this.setOutput(false);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    }

    // 配置手柄为主机模式时需要连接从机的mac地址
    Blockly.Blocks.gamepad_conn_ble_mac = {
        init: function () {
            this.setColour(200);
            this.appendDummyInput("")
                .appendField("主机模式时连接从机的Mac地址 ")    
            this.appendValueInput("ble_mac", String)
            this.setOutput(false);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    }

       // 设置手柄BLE为从机模式
    Blockly.Blocks.gamepad_set_client = {
        init: function () {
            this.setColour(200);
            this.appendDummyInput("")
                .appendField("设置BLE为从机模式接收手柄数据")    
            this.setOutput(false);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    }

        // 设置手柄BLE为从机模式
    Blockly.Blocks.gamepad_tick = {
        init: function () {
            this.setColour(200);
            this.appendDummyInput("")
                .appendField("手柄刷新数据和发送数据")    
            this.setOutput(false);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    }
    
    // 判断某个按键是否被按下
    Blockly.Blocks.gamepad_button_pressed = {
        init: function () {
            this.setColour(200);
            this.appendDummyInput("")
                .appendField("按键") 
                .appendField(new Blockly.FieldDropdown(
                    [
                        ['L', '1'],
                        ['R', '2'],
                        ['A', '3'],
                        ['B', '4'],
                        ['C', '5'],
                        ['D', '6'],
                        ['SELECT', '7'],
                        ['MODE', '8'],
                    ]), "button")
                .appendField(new Blockly.FieldDropdown(
                    [
                        ['按下', 'Pressed'],
                        ['松开', 'Released'],
                    ]), "pressedOrReleased")
                this.setOutput(true, Boolean);
                this.setInputsInline(true);
        }
    }

    // 按键X的值
    Blockly.Blocks.gamepad_button_state = {
        init: function () {
            this.setColour(200);
            this.appendDummyInput("")
            .appendField("获取按键") 
            .appendField(new Blockly.FieldDropdown(
                [
                    ['L', '1'],
                    ['R', '2'],
                    ['A', '3'],
                    ['B', '4'],
                    ['C', '5'],
                    ['D', '6'],
                    ['SELECT', '7'],
                    ['MODE', '8'],
                ]), "button")
                .appendField("的值") 
            this.setOutput(true, Number);
            this.setInputsInline(true);
        }
    }

    
    // 遥杆X的值
    Blockly.Blocks.gamepad_get_joystick_value = {
        init: function () {
            this.setColour(200);
            this.appendDummyInput("")
            .appendField("获取遥杆") 
            .appendField(new Blockly.FieldDropdown(
                [
                    ['X轴', 'x'],
                    ['Y轴', 'y'],
                ]), "rock")
                .appendField("的值") 
            this.setOutput(true, Number);
            this.setInputsInline(true);
        }
    }

    // 陀螺仪的值
    Blockly.Blocks.gamepad_get_gravity_acceleration_value = {
        init: function () {
            this.setColour(200);
            this.appendDummyInput("")
            .appendField("获取陀螺仪") 
            .appendField(new Blockly.FieldDropdown(
                [
                    ['X轴', 'x'],
                    ['Y轴', 'y'],
                    ['Z轴', 'z'],
                ]), "acc")
                .appendField("的值") 
            this.setOutput(true, Number);
            this.setInputsInline(true);
        }
    }
    

})();