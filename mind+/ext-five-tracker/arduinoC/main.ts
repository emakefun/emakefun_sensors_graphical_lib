


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
}
