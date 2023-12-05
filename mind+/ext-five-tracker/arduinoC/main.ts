
enum INDEXPROBE {
    //% block="0"
    0,
    //% block="1"
    1,
    //% block="2"
    2,
    //% block="3"
    3,
    //% block="4"
    4
}

//% color="#0099CC" iconWidth=50 iconHeight=40
namespace EM_five_tracker {

    //% block="set five tracker sensitivity [SENSITIVITY]" blockType="command"
	//% SENSITIVITY.shadow="range" SENSITIVITY.params.min=1 SENSITIVITY.params.max=1023 SENSITIVITY.defl=200
    export function SetSensitivity(parameter: any, block: any) {
		let sensitivity = parameter.SENSITIVITY.code;
        Generator.addInclude(`fiveTrackerInit`, `#include <line_tracker.h>\nLineTracker line_tracker;\n`);
		Generator.addSetup(`line_tracker_setup`, `line_tracker.SetSensitivity(${sensitivity});\n`);
    }
	
	//% block="five tracker get sensor value" blockType="reporter"
    export function getSensorValue(parameter: any, block: any) {
		Generator.addInclude(`fiveTrackerInit`, `#include <line_tracker.h>\nLineTracker line_tracker;\n`);
		Generator.addCode(`line_tracker.GetSensorValues()`);
    }
	
	//% block="five tracker get sensor states" blockType="reporter"
    export function getSensorStates(parameter: any, block: any) {
		Generator.addInclude(`fiveTrackerInit`, `#include <line_tracker.h>\nLineTracker line_tracker;\n`);
		Generator.addCode(`line_tracker.GetSensorStates()`);
    }
	
	//% block="five tracker get [INDEX] sensor value" blockType="reporter"
	//% INDEX.shadow="dropdown" INDEX.options="INDEXPROBE" INDEX.defl="INDEXPROBE.0"
    export function getSingleSensorValue(parameter: any, block: any) {
		let index = parameter.INDEX.code;
		Generator.addInclude(`fiveTrackerInit`, `#include <line_tracker.h>\nLineTracker line_tracker;\n`);
		Generator.addCode(`line_tracker.GetSensorValue(${index})`);
    }
	
	//% block="five tracker get [INDEX] sensor state" blockType="reporter"
	//% INDEX.shadow="dropdown" INDEX.options="INDEXPROBE" INDEX.defl="INDEXPROBE.0"
    export function getSingleSensorState(parameter: any, block: any) {
		let index = parameter.INDEX.code;
		Generator.addInclude(`fiveTrackerInit`, `#include <line_tracker.h>\nLineTracker line_tracker;\n`);
		Generator.addCode(`line_tracker.GetSensorState(${index})`);
    }
}
