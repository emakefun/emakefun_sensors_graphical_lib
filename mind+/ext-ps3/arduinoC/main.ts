
enum PS3BUTTON {
    //% block="XBUTTON"
    cross,
    //% block="TRIANGLE"
    triangle,
    //% block="CIRCLE"
    circle,
    //% block="SQUARE"
    square,
    //% block="SELECT"
    select,
	//% block="START"
    start,
	//% block="UP"
    up,
	//% block="DOWN"
    down,
	//% block="LEFT"
    left,
	//% block="RIGHT"
    right,
	//% block="L1"
    l1,
	//% block="L2"
    l2,
	//% block="L3"
    l3,
	//% block="R1"
    r1,
	//% block="R2"
    r2,
	//% block="R3"
    r3
}

enum PS3STATUS {
    //% block="BUTTONDOWN"
    button_down,
    //% block="BUTTONUP"
    button_up,
    //% block="BUTTONCHANGE"
    analog_changed
}

enum PS3ROCK {
	//% block="LX"
    lx,
    //% block="LY"
    ly,
    //% block="RX"
    rx,
	//% block="RY"
    ry
}

//% color="#E9967A" iconWidth=50 iconHeight=40
namespace EM_PS3 {
	
	//% block="init PS3 set Mac [MAC]" blockType="command"
	//% MAC.shadow="string" MAC.defl="01:02:03:04:05:06"
    export function initPS3SetMac(parameter: any, block: any) {
		Generator.addInclude(`ps3Init`, `#include <Ps3Controller.h>`);
		let mac = parameter.MAC.code;
		Generator.addSetup("ps3.begin", `Ps3.begin(${mac});`);
    }
	
	//% block="get esp32 mac" blockType="reporter"
    export function getEsp32Mac(parameter: any, block: any) {
		Generator.addInclude(`ps3Init`, `#include <Ps3Controller.h>`);
		// Generator.addSetup("ps3.begin", `Ps3.begin();`);
		Generator.addCode(`Ps3.getAddress()`);
    }
	
	//% block="is connected PS3" blockType="boolean"
    export function isConnectedPS3(parameter: any, block: any) {
		Generator.addInclude(`ps3Init`, `#include <Ps3Controller.h>`);
		// Generator.addSetup("ps3.begin", `Ps3.begin();`);
		Generator.addCode(`Ps3.isConnected()`);
    }
	
	//% block="PS3 button [BUTTON] status [STATUS]" blockType="boolean"
	//% BUTTON.shadow="dropdown" BUTTON.options="PS3BUTTON" BUTTON.defl="PS3BUTTON.XBUTTON"
	//% STATUS.shadow="dropdown" STATUS.options="PS3STATUS" STATUS.defl="PS3STATUS.XBUTTON"
    export function getPS3ButtonSatus(parameter: any, block: any) {
		let button = parameter.BUTTON.code;
		let status = parameter.STATUS.code;
		if (status == 'analog_changed') {
			status = 'analog_changed.button';
		}
		Generator.addInclude(`ps3Init`, `#include <Ps3Controller.h>`);
		Generator.addSetup("ps3.begin", `Ps3.begin();`);
		Generator.addCode(`Ps3.event.${status}.${button}`);
    }
	
	//% block="get PS3 button [BUTTON] value" blockType="reporter"
	//% BUTTON.shadow="dropdown" BUTTON.options="PS3BUTTON" BUTTON.defl="PS3BUTTON.XBUTTON"
    export function getPS3ButtonValue(parameter: any, block: any) {
		let button = parameter.BUTTON.code;
		Generator.addInclude(`ps3Init`, `#include <Ps3Controller.h>`);
		// Generator.addSetup("ps3.begin", `Ps3.begin();`);
		Generator.addCode(`Ps3.data.button.${button}`);
    }
	
	//% block="get PS3 rock [ROCK] value" blockType="reporter"
	//% ROCK.shadow="dropdown" ROCK.options="PS3ROCK" ROCK.defl="PS3ROCK.LX"
    export function getPS3RockValue(parameter: any, block: any) {
		let rock = parameter.ROCK.code;
		Generator.addInclude(`ps3Init`, `#include <Ps3Controller.h>`);
		// Generator.addSetup("ps3.begin", `Ps3.begin();`);
		Generator.addCode(`Ps3.data.analog.stick.${rock}`);
    }
	
	
}
