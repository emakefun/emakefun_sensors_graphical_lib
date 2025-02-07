(() => {

	'use strict';

	goog.provide('Blockly.Arduino.EmakefunSensor');

	goog.require('Blockly.Arduino');

    Blockly.Arduino.forBlock["gamepad_init"] = function () {
        Blockly.Arduino.definitions_['define_arduino_gamepad'] = '#include <Arduino.h>\n#include "gamepad.h"';
        Blockly.Arduino.definitions_['define_gamepad_define'] = 'emakefun::Gamepad g_gamepad;\n  emakefun::GamepadModel g_gamepad_model;';
        Blockly.Arduino.setups_['setup_gamepad'] = 'g_gamepad.Initialize();\n  g_gamepad.AttachModel(&g_gamepad_model);';
        return "";
    };

    Blockly.Arduino.forBlock["gamepad_enable_gyroscope"] = function () {
        Blockly.Arduino.definitions_['define_arduino_gamepad'] = '#include <Arduino.h>\n#include "gamepad.h"';
        Blockly.Arduino.definitions_['define_gamepad_define'] = 'emakefun::Gamepad g_gamepad;\nemakefun::GamepadModel g_gamepad_model;';
        Blockly.Arduino.setups_['setup_gamepad'] = 'g_gamepad.Initialize();\n  g_gamepad.AttachModel(&g_gamepad_model);';
        var gyrpscope_state = this.getFieldValue('gyrpscope_state');
        Blockly.Arduino.setups_['setup_gamepad_enableGyroscope'] = `g_gamepad.EnableGyroscope(${gyrpscope_state});`;
        return "";
    };

    Blockly.Arduino.forBlock["gamepad_rf24_init"] = function () {
        Blockly.Arduino.definitions_['define_arduino_gamepad'] = '#include <Arduino.h>\n#include "gamepad.h"';
        Blockly.Arduino.definitions_['define_arduino_rf24_pub'] = '#include "gamepad_publisher_rf24.h"';
        Blockly.Arduino.definitions_['define_gamepad_define'] = 'emakefun::Gamepad g_gamepad;\nemakefun::GamepadModel g_gamepad_model;';
        Blockly.Arduino.setups_['setup_gamepad'] = 'g_gamepad.Initialize();';
        var rf24_CE = this.getFieldValue('rf24_CE');
        var rf24_CS = this.getFieldValue('rf24_CS');
        var rf24_channel = Blockly.Arduino.valueToCode(this,'rf24_channel',Blockly.Arduino.ORDER_ATOMIC); 
        rf24_channel = rf24_channel > 125?125:rf24_channel < 0?1:rf24_channel;
        var rf24_address = Blockly.Arduino.valueToCode(this,'rf24_address',Blockly.Arduino.ORDER_ATOMIC); 
        Blockly.Arduino.definitions_['define_gamepad_define_publisher'] = `emakefun::GamepadPublisherRf24 g_gamepad_publisher(${rf24_CE}, ${rf24_CS});`;
        Blockly.Arduino.setups_['setup_gamepad_Initialize_pub'] = `g_gamepad_publisher.Initialize(${rf24_channel}, 5, ${rf24_address});\n  g_gamepad.AttachModel(&g_gamepad_model);\n  g_gamepad_model.AddObserver(&g_gamepad_publisher);`;
        return "";
    };

    Blockly.Arduino.forBlock["gamepad_rf24_sub_init"] = function () {
        Blockly.Arduino.definitions_['define_arduino_gamepad'] = '#include <Arduino.h>\n#include "gamepad.h"';
        Blockly.Arduino.definitions_['define_arduino_rf24_sub'] = '#include "gamepad_subscriber_rf24.h"';
        Blockly.Arduino.definitions_['define_gamepad_define'] = 'emakefun::Gamepad g_gamepad;\nemakefun::GamepadModel g_gamepad_model;';
        Blockly.Arduino.setups_['setup_gamepad'] = 'g_gamepad.Initialize();\n  g_gamepad.AttachModel(&g_gamepad_model);';
        var rf24_CE = this.getFieldValue('rf24_CE');
        var rf24_CS = this.getFieldValue('rf24_CS');
        var rf24_channel = Blockly.Arduino.valueToCode(this,'rf24_channel',Blockly.Arduino.ORDER_ATOMIC); 
        rf24_channel = rf24_channel > 125?125:rf24_channel < 0?1:rf24_channel;
        var rf24_address = Blockly.Arduino.valueToCode(this,'rf24_address',Blockly.Arduino.ORDER_ATOMIC); 
        Blockly.Arduino.definitions_['define_gamepad_define_sub'] = `emakefun::GamepadSubscriberRf24 g_gamepad_subscriber(${rf24_CE}, ${rf24_CS});`;
        Blockly.Arduino.setups_['setup_gamepad_Initialize_sub'] = `g_gamepad_subscriber.Initialize(${rf24_channel}, 5, ${rf24_address});\n  g_gamepad_subscriber.AttachModel(&g_gamepad_model);`;
        return "";
    };

    Blockly.Arduino.forBlock["gamepad_set_ble_mode"] = function () {
        Blockly.Arduino.definitions_['define_arduino_gamepad'] = '#include <Arduino.h>\n#include "gamepad.h"';
        Blockly.Arduino.definitions_['define_arduino_ble_pub'] = '#include "gamepad_publisher_ble.h"';
        Blockly.Arduino.definitions_['define_gamepad_define'] = 'emakefun::Gamepad g_gamepad;\nemakefun::GamepadModel g_gamepad_model;';
        Blockly.Arduino.definitions_['define_gamepad_publisher_ble'] = 'emakefun::GamepadPublisherBle g_gamepad_publisher;';
        Blockly.Arduino.setups_['setup_gamepad_ble_role'] = `Serial.begin(115200);\n  Serial.println("AT+ROLE=0");`;
        return "";
    };
    
    Blockly.Arduino.forBlock["gamepad_conn_ble_mac"] = function () {
        Blockly.Arduino.definitions_['define_arduino_gamepad'] = '#include <Arduino.h>\n#include "gamepad.h"';
        Blockly.Arduino.definitions_['define_arduino_ble'] = '#include "gamepad_publisher_ble.h"';
        Blockly.Arduino.definitions_['define_gamepad_define'] = 'emakefun::Gamepad g_gamepad;\nemakefun::GamepadModel g_gamepad_model;';
        Blockly.Arduino.definitions_['define_gamepad_publisher_ble'] = 'emakefun::GamepadPublisherBle g_gamepad_publisher;';
        var ble_mac = Blockly.Arduino.valueToCode(this, 'ble_mac', Blockly.Arduino.ORDER_ATOMIC); 
        Blockly.Arduino.setups_['setup_gamepad_set_ble_role'] = `Serial.begin(115200);\n  Serial.println("AT+CON=${ble_mac}");\n   g_gamepad.Initialize();\n  g_gamepad_publisher.Initialize(Serial);\n  g_gamepad.AttachModel(&g_gamepad_model);\n  g_gamepad_model.AddObserver(&g_gamepad_publisher);\n`;
        return "";
    };

    Blockly.Arduino.forBlock["gamepad_set_client"] = function () {
        Blockly.Arduino.definitions_['define_arduino_gamepad'] = '#include <Arduino.h>\n#include "gamepad.h"';
        Blockly.Arduino.definitions_['define_arduino_ble_sub'] = '#include "gamepad_subscriber_ble.h"';
        Blockly.Arduino.definitions_['define_gamepad_define'] = 'emakefun::Gamepad g_gamepad;\nemakefun::GamepadModel g_gamepad_model;';
        Blockly.Arduino.definitions_['define_gamepad_publisher_ble'] = 'emakefun::GamepadSubscriberBle g_gamepad_subscriber;';
        Blockly.Arduino.setups_['setup_gamepad_ble_role'] = `Serial.begin(115200);\n  g_gamepad_subscriber.Initialize(Serial);\n   g_gamepad_subscriber.AttachModel(&g_gamepad_model);`;
        return "";
    };

    Blockly.Arduino.forBlock["gamepad_tick"] = function () {
        Blockly.Arduino.definitions_['define_arduino_gamepad'] = '#include <Arduino.h>\n#include "gamepad.h"';
        Blockly.Arduino.definitions_['define_gamepad_define'] = 'emakefun::Gamepad g_gamepad;\nemakefun::GamepadModel g_gamepad_model;';
        return `g_gamepad.Tick();\n`;
    };

    Blockly.Arduino.forBlock["gamepad_button_pressed"] = function () {
        Blockly.Arduino.definitions_['define_arduino_gamepad'] = '#include <Arduino.h>\n#include "gamepad.h"';
        Blockly.Arduino.definitions_['define_gamepad_define'] = 'emakefun::Gamepad g_gamepad;\nemakefun::GamepadModel g_gamepad_model;';
        var button = this.getFieldValue('button');
        var pressedOrReleased = this.getFieldValue('pressedOrReleased');
        return [`g_gamepad_model.Button${pressedOrReleased}(${button})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.forBlock["gamepad_button_state"] = function () {
        Blockly.Arduino.definitions_['define_arduino_gamepad'] = '#include <Arduino.h>\n#include "gamepad.h"';
        Blockly.Arduino.definitions_['define_gamepad_define'] = 'emakefun::Gamepad g_gamepad;\nemakefun::GamepadModel g_gamepad_model;';
        var button = this.getFieldValue('button');
        return [`g_gamepad_model.GetButtonState(${button})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.forBlock["gamepad_get_joystick_value"] = function () {
        Blockly.Arduino.definitions_['define_arduino_gamepad'] = '#include <Arduino.h>\n#include "gamepad.h"';
        Blockly.Arduino.definitions_['define_gamepad_define'] = 'emakefun::Gamepad g_gamepad;\nemakefun::GamepadModel g_gamepad_model;';
        var rock = this.getFieldValue('rock');
        return [`g_gamepad_model.GetJoystickCoordinate().${rock}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.forBlock["gamepad_get_gravity_acceleration_value"] = function () {
        Blockly.Arduino.definitions_['define_arduino_gamepad'] = '#include <Arduino.h>\n#include "gamepad.h"';
        Blockly.Arduino.definitions_['define_gamepad_define'] = 'emakefun::Gamepad g_gamepad;\nemakefun::GamepadModel g_gamepad_model;';
        var acc = this.getFieldValue('acc');
        return [`g_gamepad_model.GetGravityAcceleration().${acc}`, Blockly.Arduino.ORDER_ATOMIC];
    };

})();