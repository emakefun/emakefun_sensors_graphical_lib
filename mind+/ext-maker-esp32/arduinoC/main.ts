
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

enum MOTORPIN {
  //% block="M1"
  M1,
  //% block="M2"
  M2,
  //% block="M3"
  M3,
  //% block="M4"
  M4
}

enum SERVOPIN {
  //% block="18"
  18,
  //% block="19"
  19
  //% block="26"
  26,
  //% block="25"
  25,
  //% block="32"
  32,
  //% block="33"
  33
}

//% color="#0099CC" iconWidth=50 iconHeight=40
namespace em_maker_esp32 {

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
	
	//% block="five tracker get [INDEX] sensor state" blockType="boolean"
	//% INDEX.shadow="dropdown" INDEX.options="INDEXPROBE" INDEX.defl="INDEXPROBE.0"
  export function getSingleSensorState(parameter: any, block: any) {
		let index = parameter.INDEX.code;
		Generator.addInclude(`fiveTrackerInit`, `#include <line_tracker.h>\nLineTracker line_tracker;\n`);
		Generator.addCode(`line_tracker.GetSensorState(${index})`);
  }

  //% block="robofun car motor [MOTORPIN] speed [MOTORSPEED]" blockType="command"
  //% MOTORPIN.shadow="dropdown" MOTORPIN.options="MOTORPIN" MOTORPIN.defl="MOTORPIN.M1"
  //% MOTORSPEED.shadow="range" MOTORSPEED.params.min=-1023 MOTORSPEED.params.max=1023 MOTORSPEED.defl=200
  export function setMotorSpeed(parameter: any, block: any) {
    Generator.addInclude(`fiveTrackerInit`, `#include <line_tracker.h>\nLineTracker line_tracker;`);
    let motorPin = parameter.MOTORPIN.code;
    let motorSpeed = parameter.MOTORSPEED.code;
    if(motorPin == "M1") {
      motorPin = 1;
    }else if(motorPin == "M2") {
      motorPin = 2;
    }else if(motorPin == "M3") {
      motorPin = 3;
    }else if(motorPin == "M4") {
      motorPin = 4;
    }
    Generator.addCode(`line_tracker.setMotorSpeed(${motorPin}, ${motorSpeed});`);
  }
  
  //% block="motor [MOTORPIN] brake" blockType="command"
  //% MOTORPIN.shadow="dropdown" MOTORPIN.options="MOTORPIN" MOTORPIN.defl="MOTORPIN.M1"
  export function setMotorBrake(parameter: any, block: any) {
    Generator.addInclude(`fiveTrackerInit`, `#include <line_tracker.h>\nLineTracker line_tracker;`);
    let motorPin = parameter.MOTORPIN.code;
    if(motorPin == "M1") {
      motorPin = 1;
    }else if(motorPin == "M2") {
      motorPin = 2;
    }else if(motorPin == "M3") {
      motorPin = 3;
    }else if(motorPin == "M4") {
      motorPin = 4;
    }
    Generator.addCode(`line_tracker.setMotorBrake(${motorPin});`);
  }

  //% block="servo pin1 [SERVOPIN1]  left ar right angle[LEFTRIGHTANGLE] delay [SERVODELAY1]" blockType="command"
  //% SERVOPIN1.shadow="dropdown" SERVOPIN1.options="SERVOPIN" SERVOPIN1.defl="SERVOPIN.18"
  //% LEFTRIGHTANGLE.shadow="range" LEFTRIGHTANGLE.params.min=0 LEFTRIGHTANGLE.params.max=180 LEFTRIGHTANGLE.defl=90
  //% SERVODELAY1.shadow="range" SERVODELAY1.params.min=0 SERVODELAY1.params.max=10000 SERVODELAY1.defl=1
  export function doubleDriverMechanicalArm(parameter: any, block: any) {
    let servoPin1 = parameter.SERVOPIN1.code;
    let leftRightAngle = parameter.LEFTRIGHTANGLE.code;
    let delay1 = parameter.SERVODELAY1.code;
    Generator.addInclude(`mechanicalArmInit`, `#include <DFRobot_Servo.h>`);
    Generator.addObject(`mechanicalArmInit_servo_${servoPin1}`, `Servo`, `servo_${servoPin1}`);
    Generator.addSetup(`mechanicalArmInit_servo_${servoPin1}`, `servo_${servoPin1}.attach(${servoPin1});`);
    Generator.addCode(`servo_${servoPin1}.angle(abs(${leftRightAngle}));\n  delay(${delay1});`);
  }
}
