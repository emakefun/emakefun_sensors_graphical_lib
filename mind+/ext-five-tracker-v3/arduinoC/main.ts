
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
namespace EM_five_tracker_v3 {

	
	//% block="five tracker v3 set [INDEX] high threshold [LINENUMBER]" blockType="command"
	//% INDEX.shadow="dropdown" INDEX.options="INDEXPROBE" INDEX.defl="INDEXPROBE.0"
	//% LINENUMBER.shadow="range" LINENUMBER.params.min=1 LINENUMBER.params.max=1023 LINENUMBER.defl=200
    export function setSensorHighThresholdValue(parameter: any, block: any) {
        Generator.addInclude(`fiveTrackerInitV3`, `#include <five_line_tracker_v3.h>\nemakefun::FiveLineTracker  line_tracker_v3;`);
		let index = parameter.INDEX.code;
		let lieNumber = parameter.LINENUMBER.code;
		Generator.addSetup(`line_tracker_setup_v3`, `Wire.begin();\n  line_tracker_v3.Initialize();`);
		Generator.addCode(`line_tracker_v3.HighThreshold(${index}, ${lieNumber});`);
    }
	
	//% block="five tracker v3 set [INDEX] low threshold [LINENUMBER]" blockType="command"
	//% INDEX.shadow="dropdown" INDEX.options="INDEXPROBE" INDEX.defl="INDEXPROBE.0"
	//% LINENUMBER.shadow="range" LINENUMBER.params.min=1 LINENUMBER.params.max=1023 LINENUMBER.defl=200
    export function setSensorLowThresholdValue(parameter: any, block: any) {
        Generator.addInclude(`fiveTrackerInitV3`, `#include <five_line_tracker_v3.h>\nemakefun::FiveLineTracker  line_tracker_v3;`);
		let index = parameter.INDEX.code;
		let lieNumber = parameter.LINENUMBER.code;
		Generator.addSetup(`line_tracker_setup_v3`, `Wire.begin();\n  line_tracker_v3.Initialize();`);
		Generator.addCode(`line_tracker_v3.LowThreshold(${index}, ${lieNumber});`);
    }
	
	
	//% block="five tracker v3 get [INDEX] sensor value" blockType="reporter"
	//% INDEX.shadow="dropdown" INDEX.options="INDEXPROBE" INDEX.defl="INDEXPROBE.0"
    export function getSingleSensorValueV3(parameter: any, block: any) {
		let index = parameter.INDEX.code;
        Generator.addInclude(`fiveTrackerInitV3`, `#include <five_line_tracker_v3.h>\nemakefun::FiveLineTracker  line_tracker_v3;`);
		Generator.addSetup(`line_tracker_setup_v3`, `Wire.begin();\n  line_tracker_v3.Initialize();`);
		Generator.addCode(`line_tracker_v3.AnalogValue(${index})`);
    }
	
	//% block="five tracker get [INDEX] sensor state" blockType="boolean"
	//% INDEX.shadow="dropdown" INDEX.options="INDEXPROBE" INDEX.defl="INDEXPROBE.0"
    export function getSingleSensorState(parameter: any, block: any) {
		let index = parameter.INDEX.code;
		Generator.addInclude(`fiveTrackerInitV3`, `#include <five_line_tracker_v3.h>\nemakefun::FiveLineTracker  line_tracker_v3;`);
		Generator.addSetup(`line_tracker_setup_v3`, `Wire.begin();\n  line_tracker_v3.Initialize();`);
		Generator.addCode(`line_tracker_v3.DigitalValue(${index})`);
    }
}
