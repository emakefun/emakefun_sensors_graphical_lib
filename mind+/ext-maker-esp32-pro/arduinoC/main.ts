enum ENCODERMOTORPIN {
  //% block="E0"
  E0,
  //% block="E1"
  E1,
  //% block="E2"
  E2,
  //% block="E3"
  E3
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

enum CHANNELGROUP {
  //% block="1"
  1,
  //% block="2"
  2
  //% block="3"
  3,
  //% block="4"
  4,
  //% block="5"
  5,
  //% block="6"
  6,
  //% block="7"
  7,
  //% block="8"
  8
}


//% color="#0099CC" iconWidth=50 iconHeight=40
namespace em_maker_esp32_pro {

 
  //% block="init encoder motor ppr [PPR]" blockType="command"
  //% PPR.shadow="range" PPR.params.min=1 PPR.params.max=1000 PPR.defl=12
  export function setEncoderMotorPPR(parameter: any, block: any) {
    Generator.addInclude(`encoderMotorInit`, `#include <encoder_motor.h>\n#include <encoder_motor_lib.h>`);
    let ppr = parameter.PPR.code;
    Generator.addInclude(`uint32_t kPPR = ${ppr};`);
  }
  
  //% block="set encoder motor ration [RATIO] " blockType="command"
  //% RATIO.shadow="range" RATIO.params.min=1 RATIO.params.max=1000 RATIO.defl=90
  export function setEncoderMotorRation(parameter: any, block: any) {
    Generator.addInclude(`encoderMotorInit`, `#include <encoder_motor.h>\n#include <encoder_motor_lib.h>`);
    let ratio = parameter.RATIO.code;
    Generator.addInclude(`uint32_t kReductionRation = ${ratio};`);
  }

  //% block="init encoder motor [ENCODERMOTORPIN] channel [CHANNEL] " blockType="command"
  //% ENCODERMOTORPIN.shadow="dropdown" ENCODERMOTORPIN.options="ENCODERMOTORPIN" ENCODERMOTORPIN.defl="ENCODERMOTORPIN.E0"
  //% RATION.shadow="range" RATION.params.min=1 RATION.params.max=1000 RATION.defl=90
  //% CHANNEL.shadow="dropdown" CHANNEL.options="CHANNELGROUP" CHANNEL.defl="CHANNELGROUP.1"
  export function setEncoderMotorChannel(parameter: any, block: any) {
    Generator.addInclude(`encoderMotorInit`, `#include <encoder_motor.h>\n#include <encoder_motor_lib.h>`);
    let motorPin1;
    let motorPin2;
    let aPlusPin;
    let bPlusPin;
    let encoderMotorPin = parameter.ENCODERMOTORPIN.code;
    let channel = parameter.CHANNEL.code;
    if(encoderMotorPin == "E0") {
      motorPin1 = "GPIO_NUM_27";
      motorPin2 = "GPIO_NUM_13";
      aPlusPin = "GPIO_NUM_18";
      bPlusPin = "GPIO_NUM_19";
    }else if(encoderMotorPin == "E1") {
      motorPin1 = "GPIO_NUM_4";
      motorPin2 = "GPIO_NUM_2";
      aPlusPin = "GPIO_NUM_5";
      bPlusPin = "GPIO_NUM_23";
    }else if(encoderMotorPin == "E2") {
      motorPin1 = "GPIO_NUM_17";
      motorPin2 = "GPIO_NUM_12";
      aPlusPin = "GPIO_NUM_35";
      bPlusPin = "GPIO_NUM_36";
    }else if(encoderMotorPin == "E3") {
      motorPin1 = "GPIO_NUM_15";
      motorPin2 = "GPIO_NUM_14";
      aPlusPin = "GPIO_NUM_34";
      bPlusPin = "GPIO_NUM_39";
    }
    Generator.addObject(`maker_esp32_pro_g_encoder_motor_${encoderMotorPin}`, `em::EncoderMotor`, `g_encoder_motor_${encoderMotorPin}(${motorPin1}, ${channel} * 2 - 2, ${motorPin2}, ${channel} * 2 - 1, ${aPlusPin}, ${bPlusPin}, kPPR, kReductionRation, em::EncoderMotor::kBPhaseLeads);`);
    Generator.addSetup(`maker_esp32_pro_g_encoder_motor_${encoderMotorPin}`, `g_encoder_motor_${encoderMotorPin}.Init();`);
  }

  //% block="set encoder motor [ENCODERMOTORPIN] speed PID p [P] I [I] D [D] " blockType="command"
  //% ENCODERMOTORPIN.shadow="dropdown" ENCODERMOTORPIN.options="ENCODERMOTORPIN" ENCODERMOTORPIN.defl="ENCODERMOTORPIN.E0"
  //% P.shadow="range" P.params.min=0 P.params.max=100 P.defl=3.0
  //% I.shadow="range" I.params.min=0 I.params.max=100 I.defl=1.0
  //% D.shadow="range" D.params.min=0 D.params.max=100 D.defl=1.0
  export function setEncoderMotorSpeedPID(parameter: any, block: any) {
    Generator.addInclude(`encoderMotorInit`, `#include <encoder_motor.h>\n#include <encoder_motor_lib.h>`);
    let encoderMotorPin = parameter.ENCODERMOTORPIN.code;
    let p = parameter.P.code;
    let i = parameter.I.code;
    let d = parameter.D.code;
    Generator.addCode(`g_encoder_motor_${encoderMotorPin}.SetSpeedPid(${p}, ${i}, ${d});\n`);
  }

  //% block="set encoder motor [ENCODERMOTORPIN] pwm Duty [DUTY]" blockType="command"
  //% ENCODERMOTORPIN.shadow="dropdown" ENCODERMOTORPIN.options="ENCODERMOTORPIN" ENCODERMOTORPIN.defl="ENCODERMOTORPIN.E0"
  //% DUTY.shadow="range" DUTY.params.min=-1023 RATION.params.max=1023 DUTY.defl=90
  export function setEncoderMotorPWMDuty(parameter: any, block: any) {
    Generator.addInclude(`encoderMotorInit`, `#include <encoder_motor.h>\n#include <encoder_motor_lib.h>`);
    let encoderMotorPin = parameter.ENCODERMOTORPIN.code;
    let duty = parameter.DUTY.code;
    Generator.addCode(`g_encoder_motor_${encoderMotorPin}.RunPwmDuty(${duty});\n`);
  }

  //% block="set encoder motor [ENCODERMOTORPIN] speed [SPEED]" blockType="command"
  //% ENCODERMOTORPIN.shadow="dropdown" ENCODERMOTORPIN.options="ENCODERMOTORPIN" ENCODERMOTORPIN.defl="ENCODERMOTORPIN.E0"
  //% SPEED.shadow="range" SPEED.params.min=1 SPEED.params.max=1000 SPEED.defl=90
  export function setEncoderMotorSpeed(parameter: any, block: any) {
    Generator.addInclude(`encoderMotorInit`, `#include <encoder_motor.h>\n#include <encoder_motor_lib.h>`);
    let encoderMotorPin = parameter.ENCODERMOTORPIN.code;
    let speed = parameter.SPEED.code;
    Generator.addCode(`g_encoder_motor_${encoderMotorPin}.RunSpeed(${speed};\n`);
  }

  //% block="stop encoder motor [ENCODERMOTORPIN]" blockType="command"
  //% ENCODERMOTORPIN.shadow="dropdown" ENCODERMOTORPIN.options="ENCODERMOTORPIN" ENCODERMOTORPIN.defl="ENCODERMOTORPIN.E0"
  //% RATION.shadow="range" RATION.params.min=1 RATION.params.max=1000 RATION.defl=90
  export function setEncoderMotorStop(parameter: any, block: any) {
    Generator.addInclude(`encoderMotorInit`, `#include <encoder_motor.h>\n#include <encoder_motor_lib.h>`);
    let encoderMotorPin = parameter.ENCODERMOTORPIN.code;
    Generator.addCode(`g_encoder_motor_${encoderMotorPin}.Stop();\n`);
  }

  //% block="get encoder motor [ENCODERMOTORPIN] pulse count" blockType="reporter"
  //% ENCODERMOTORPIN.shadow="dropdown" ENCODERMOTORPIN.options="ENCODERMOTORPIN" ENCODERMOTORPIN.defl="ENCODERMOTORPIN.E0"
  export function getEncoderMotorPulseCount(parameter: any, block: any) {
    Generator.addInclude(`encoderMotorInit`, `#include <encoder_motor.h>\n#include <encoder_motor_lib.h>`);
    let encoderMotorPin = parameter.ENCODERMOTORPIN.code;
    Generator.addCode(`g_encoder_motor_${encoderMotorPin}.EncoderPulseCount()`);
  }

  //% block="get encoder motor [ENCODERMOTORPIN] speed rpm" blockType="reporter"
  //% ENCODERMOTORPIN.shadow="dropdown" ENCODERMOTORPIN.options="ENCODERMOTORPIN" ENCODERMOTORPIN.defl="ENCODERMOTORPIN.E0"
  export function getEncoderMotorSpeedRpm(parameter: any, block: any) {
    Generator.addInclude(`encoderMotorInit`, `#include <encoder_motor.h>\n#include <encoder_motor_lib.h>`);
    let encoderMotorPin = parameter.ENCODERMOTORPIN.code;
    Generator.addCode(`g_encoder_motor_${encoderMotorPin}.SpeedRpm()`);
  }

  //% block="get encoder motor [ENCODERMOTORPIN] pwm duty" blockType="reporter"
  //% ENCODERMOTORPIN.shadow="dropdown" ENCODERMOTORPIN.options="ENCODERMOTORPIN" ENCODERMOTORPIN.defl="ENCODERMOTORPIN.E0"
  export function getEncoderMotorPwmDuty(parameter: any, block: any) {
    Generator.addInclude(`encoderMotorInit`, `#include <encoder_motor.h>\n#include <encoder_motor_lib.h>`);
    let encoderMotorPin = parameter.ENCODERMOTORPIN.code;
    Generator.addCode(`g_encoder_motor_${encoderMotorPin}.PwmDuty()`);
  }

  //% block="get encoder motor [ENCODERMOTORPIN] target rpm" blockType="reporter"
  //% ENCODERMOTORPIN.shadow="dropdown" ENCODERMOTORPIN.options="ENCODERMOTORPIN" ENCODERMOTORPIN.defl="ENCODERMOTORPIN.E0"
  export function getEncoderMotorTargetRpm(parameter: any, block: any) {
    Generator.addInclude(`encoderMotorInit`, `#include <encoder_motor.h>\n#include <encoder_motor_lib.h>`);
    let encoderMotorPin = parameter.ENCODERMOTORPIN.code;
    Generator.addCode(`g_encoder_motor_${encoderMotorPin}.TargetRpm()`);
  }

  //% block="servo pin1 [SERVOPIN1]  left ar right angle[ANGLE] delay [SERVODELAY1]" blockType="command"
  //% SERVOPIN1.shadow="dropdown" SERVOPIN1.options="SERVOPIN" SERVOPIN1.defl="SERVOPIN.18"
  //% ANGLE.shadow="range" ANGLE.params.min=0 ANGLE.params.max=180 ANGLE.defl=90
  //% SERVODELAY1.shadow="range" SERVODELAY1.params.min=0 SERVODELAY1.params.max=10000 SERVODELAY1.defl=1
  export function makerEsp32ProServo(parameter: any, block: any) {
    let servoPin1 = parameter.SERVOPIN1.code;
    let angle = parameter.ANGLE.code;
    let delay1 = parameter.SERVODELAY1.code;
    Generator.addInclude(`mechanicalArmInit`, `#include <DFRobot_Servo.h>`);
    Generator.addObject(`mechanicalArmInit_servo_${servoPin1}`, `Servo`, `servo_${servoPin1}`);
    Generator.addSetup(`mechanicalArmInit_servo_${servoPin1}`, `servo_${servoPin1}.attach(${servoPin1});`);
    Generator.addCode(`servo_${servoPin1}.angle(abs(${angle}));\n  delay(${delay1});`);
  }
}
