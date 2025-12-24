enum NUM { 
    //% block="第一个灯"
    0,
    //% block="第二个灯"
	1
    //% block="第三个灯"
    2,
    //% block="第四个灯"
    3
}

enum motor {
    //% block="M1"
    M1,
    //% block="M2"
    M2,
    //% block="M3"
    M3,
    //% block="M4"
    M4,
    //% block="全部"
    ALL
}

enum stepper {
    //% block="STP1"
    M1_M2,
    //% block="STP2"
    M3_M4
}

enum Turn {
    //% block="正转"
    CW,
    //% block="反转"
    CCW
}

enum stpTurn {
    //% block="1/4"
    1_4,
    //% block="1/2"
    1_2,
	//% block="1"
    1,
    //% block="2"
    2,
	//% block="3"
    3,
    //% block="4"
    4,
	//% block="5"
    5
}

enum servo {
    //% block="S1"
    S1,
     //% block="S2"
    S2,
    //% block="S3"
    S3,
     //% block="S4"
    S4,
    //% block="S5"
    S5,
     //% block="S6"
    S6,
    //% block="S7"
    S7,
     //% block="S8"
    S8
}

enum I2Cpin {
    //% block="E0"
    kGpioPinE0,
    //% block="E1"
    kGpioPinE1,
    //% block="E2"
    kGpioPinE2,
    //% block="E3"
    kGpioPinE3,
    //% block="E4"
    kGpioPinE4,
    //% block="E5"
    kGpioPinE5,
    //% block="E6"
    kGpioPinE6,
    //% block="E7"
    kGpioPinE7,
}

enum ServoMotorPin {
    //% block="E1"
    kGpioPinE1,
    //% block="E2"
    kGpioPinE2
}

enum I2Cmode {
    //% block="ADC mode"
    kAdc,
    //% block="Floating input mode"
    kInputFloating, 
    //% block="Pull up input mode"
    kInputPullUp,
    //% block="Dropdown input mode"
    kInputPullDown,
    //% block="Output mode"
    kOutput,
    //% block="PWM mode (only supports E1 and E2)"
    kPwm,
    //% block="Servo mode (only supports E1 and E2)"
    kPwm1
}

enum PinLevel {
    //% block="HIGH"
    HIGH,
    //% block="LOW"
    LOW
}

//% color="#FF6633" iconWidth=50 iconHeight=40
namespace EM_Motorbit {
    //% block="setRGB亮度 [LIANGDU]" blockType="command"
    //% LIANGDU.shadow="range"   LIANGDU.params.min=0    LIANGDU.params.max=255    LIANGDU.defl=255
    export function setRGBBrightness(parameter: any, block: any) {
        let pwm = parameter.LIANGDU.code

        Generator.addInclude("RGB", "#include <DFRobot_NeoPixel.h>");
        Generator.addObject("RGBObject", "DFRobot_NeoPixel", "neoPixel_P16;");
        Generator.addSetup("RGB.begin", `neoPixel_P16.begin(P16, 4);`);
        Generator.addCode(`neoPixel_P16.setBrightness(${pwm});`);
    }


    //% block="setRGBpin pins [NUM]  color [COLOR]" blockType="command"
    //%NUM.shadow="dropdown" NUM.options="NUM"
    //% COLOR.shadow="colorSlider" COLOR.defl="#f0f"
    export function setRGBcolor(parameter: any, block: any) {
        let num = parameter.NUM.code
        let str = parameter.COLOR.code

        Generator.addInclude("RGB", "#include <DFRobot_NeoPixel.h>");
        Generator.addObject("RGBObject", "DFRobot_NeoPixel", "neoPixel_P16;");
        Generator.addSetup("RGB.begin", `neoPixel_P16.begin(P16, 4);`);
        Generator.addCode(`neoPixel_P16.setRangeColor(${num},${num}, ${str});`);
    }


    //% block="setRGBclear color " blockType="command"
    export function setRGBclear(parameter: any, block: any) {

        Generator.addInclude("RGB", "#include <DFRobot_NeoPixel.h>");
        Generator.addObject("RGBObject", "DFRobot_NeoPixel", "neoPixel_P16;");
        Generator.addSetup("RGB.begin", `neoPixel_P16.begin(P16, 4);`);
        Generator.addCode(`neoPixel_P16.clear();`);
    }


    //% block="IRremote " blockType="reporter"
    export function IRremote_Receive(parameter: any, block: any) {

        Generator.addInclude("IRremote", "#include <DFRobot_IRremote.h>");
        Generator.addObject("IRremoteObject", "IRremote_Receive", "remoteReceive_P5;");
        Generator.addSetup("IRremote.begin", `remoteReceive_P5.begin(P5);`);
        Generator.addCode([`remoteReceive_P5.getIrCommand()`, Generator.ORDER_UNARY_POSTFIX]);
    }


    //% block="STOP  MOTOR[motor] " blockType="command"
    //%motor.shadow="dropdown" motor.options="motor"
    export function motorstop(parameter: any, block: any) {
        let M = parameter.motor.code
        Generator.addInclude("Motor", "#include <EM_Microbit_Motor.h>");
        Generator.addObject("MotorObject", "EM_Microbit_Motor", " motorbit;");
        Generator.addCode(`	motorbit.motorStop(${M});`);
    }

    //% block=" MOTOR[motor]speed[SPEED] TUEN[Turn]" blockType="command"
    //%motor.shadow="dropdown" motor.options="motor"
    //% SPEED.shadow="range"   SPEED.params.min=0    SPEED.params.max=255 SPEED.defl=255
    //%Turn.shadow="dropdown" Turn.options="Turn"
    export function motor(parameter: any, block: any) {
        let M = parameter.motor.code
        let T = parameter.Turn.code
        let speed = parameter.SPEED.code
        Generator.addInclude("Motor", "#include <EM_Microbit_Motor.h>");
        Generator.addObject("MotorObject", "EM_Microbit_Motor", "motorbit;");
        Generator.addCode(`motorbit.motorRun(${M},${T},${speed}) ;`);

    }
   
    //% block=" SERVO[servo]speed[SPEED] " blockType="command"
    //%servo.shadow="dropdown" servo.options="servo"
    //% SPEED.shadow="range"   SPEED.params.min=0    SPEED.params.max=180 SPEED.defl=90
    
    export function servo(parameter: any, block: any) {
        let servo = parameter.servo.code
        let speed = parameter.SPEED.code
        Generator.addInclude("Motor", "#include <EM_Microbit_Motor.h>");
        Generator.addObject("MotorObject", "EM_Microbit_Motor", "motorbit;");
        Generator.addCode(`motorbit.servo(${servo},${speed});`);
    }
	
	//% block=" stepper motor[stepper]direction[dir]degree[degree] " blockType="command"
    //%stepper.shadow="dropdown" stepper.options="stepper"
	//%dir.shadow="dropdown" dir.options="Turn"
    //% degree.shadow="range"   degree.params.min=0 degree.params.max=10000 degree.defl=180
    export function stepperDegree(parameter: any, block: any) {
        let stepper = parameter.stepper.code
        let dir = parameter.dir.code
	    let degree = parameter.degree.code
        Generator.addInclude("Motor", "#include <EM_Microbit_Motor.h>");
        Generator.addObject("MotorObject", "EM_Microbit_Motor", "motorbit;");
        Generator.addCode(`motorbit.stepperDegree(${stepper}, ${dir}, ${degree});`);
    }
	
	//% block=" stepper motor[stepper]direction[dir]turn[turn] " blockType="command"
    //% stepper.shadow="dropdown" stepper.options="stepper"
	//% dir.shadow="dropdown" dir.options="Turn"
	//% turn.shadow="dropdown" turn.options="stpTurn"
    export function stepperTurn(parameter: any, block: any) {
        let stepper = parameter.stepper.code
        let dir = parameter.dir.code
	    let turn = parameter.turn.code
		if(turn == "1_4") {
			turn = 0.25;
		} else if(turn == "1_2"){
			turn = 0.5;
		}
        Generator.addInclude("Motor", "#include <EM_Microbit_Motor.h>");
        Generator.addObject("MotorObject", "EM_Microbit_Motor", "motorbit;");
        Generator.addCode(`motorbit.stepperTurn(${stepper}, ${dir}, ${turn});`);

    }

	//% block="Initialize I2C expansion board [name] I2C address to [address]"  blockType="command"
    //% name.shadow="normal"   name.defl="myI2CExpansionBoard"
    //% address.shadow="normal"   address.defl="0x24"
    export function initI2C(parameter: any, block: any) {
        let name = parameter.name.code;
        let address = parameter.address.code;
        name=name.replace(/"/g,"");     //去掉多余的双引号
        address=address.replace(/"/g,"");
        Generator.addInclude("includgpio_expansion_board", "#include <gpio_expansion_board.h>", false);
        Generator.addObject(`${name}`, `GpioExpansionBoard`, `${name}(${address});`);
    }

     /*
     *设置I2C扩展板 引脚和模式
     */
     //% block="I2C expansion board [name] setting pin [pin] mode [mode]"  blockType="command"
     //% name.shadow="normal"   name.defl="myI2CExpansionBoard"
     //% pin.shadow="dropdown"   pin.options="I2Cpin"
     //% mode.shadow="dropdown"   mode.options="I2Cmode"
     export function setI2CMode(parameter: any, block: any) {
         let name = parameter.name.code;
         let pin = parameter.pin.code;
         let mode = parameter.mode.code;
         if(parameter.mode.code.substr(4, 1)==1){
            mode='kPwm';
         }
         name=name.replace(/"/g,"");     //去掉多余的双引号
         Generator.addCode(`${name}.SetGpioMode(GpioExpansionBoard::GpioPin::${pin}, GpioExpansionBoard::GpioMode::${mode});`);
     }

    /*
     *设置I2C扩展板 PWM模式频率
     */
     //% block="I2C expansion board [name] setting PWM freq [freq]"  blockType="command"
     //% name.shadow="normal"   name.defl="myI2CExpansionBoard"
     //% freq.shadow="range"   freq.params.min=1 freq.params.max=10000 freq.defl=50
     export function setI2CPWMFreq(parameter: any, block: any) {
        let name = parameter.name.code;
        let freq = parameter.freq.code;
        name=name.replace(/"/g,"");     //去掉多余的双引号
        Generator.addCode(`${name}.SetPwmFrequency(${freq});`);
    }

    /*
     *设置I2C扩展板 PWM模式频率
     */
     //% block="I2C expansion board [name] setting Pin [pin] PWM duty [duty]"  blockType="command"
     //% name.shadow="normal"   name.defl="myI2CExpansionBoard"
     //% pin.shadow="dropdown"   pin.options="I2Cpin"
     //% duty.shadow="range"   duty.params.min=1 duty.params.max=4095 duty.defl=50
     export function setI2CPWMDuty(parameter: any, block: any) {
        let name = parameter.name.code;
        let duty = parameter.duty.code;
        let pin = parameter.pin.code;
        name=name.replace(/"/g,"");     //去掉多余的双引号
        Generator.addCode(`${name}.SetPwmDuty(GpioExpansionBoard::GpioPin::${pin}, ${duty});`);
    }

     /*
     *设置I2C扩展板舵机角度
     */
     //% block="I2C expansion board [name] pin [servoMotorPin] servo angle set to [angle]"  blockType="command"
     //% name.shadow="normal"   name.defl="myI2CExpansionBoard"
     //% servoMotorPin.shadow="dropdown"   servoMotorPin.options="ServoMotorPin"
     //% angle.shadow="angle" angle.params.edge=1 
     export function setI2CSteeringAngle(parameter: any, block: any) {
         let name = parameter.name.code;
         let servoMotorPin = parameter.servoMotorPin.code;
         let angle = parameter.angle.code;
         name=name.replace(/"/g,"");     //去掉多余的双引号
         Generator.addCode(`${name}.SetServoAngle(GpioExpansionBoard::GpioPin::${servoMotorPin},${angle});`);
     }

     /*
     *设置I2C扩展板 引脚高低电平
     */
     //% block="I2C expansion board [name] setting pin [pin] level [level]"  blockType="command"
     //% name.shadow="normal"   name.defl="myI2CExpansionBoard"
     //% pin.shadow="dropdown"   pin.options="I2Cpin"
     //% level.shadow="dropdown"   level.options="PinLevel"
     export function setI2CPinLevel(parameter: any, block: any) {
        let name = parameter.name.code;
        let pin = parameter.pin.code;
        let level = parameter.level.code;
        name=name.replace(/"/g,"");     //去掉多余的双引号
        Generator.addCode(`${name}.SetGpioLevel(GpioExpansionBoard::GpioPin::${pin}, ${level});`);
    }

     /*
     *获取I2C扩展板的引脚的数字值
     */
     //% block="Digital value of pin [pin] on I2C expansion board [name]"  blockType="reporter"
     //% name.shadow="normal"   name.defl="myI2CExpansionBoard"
     //% pin.shadow="dropdown"   pin.options="I2Cpin"
     export function I2CPinDigital(parameter: any, block: any) {
        let name = parameter.name.code;
        let pin = parameter.pin.code;
        name=name.replace(/"/g,"");     //去掉多余的双引号
        Generator.addCode(`${name}.GetGpioLevel(GpioExpansionBoard::GpioPin::${pin})`);        
    }

    /*
     *获取I2C扩展板的引脚的模拟值
     */
     //% block="Analog value of pin [pin] on I2C expansion board [name]"  blockType="reporter"
     //% name.shadow="normal"   name.defl="myI2CExpansionBoard"
     //% pin.shadow="dropdown"   pin.options="I2Cpin"
     export function I2CPinAnalog(parameter: any, block: any) {
        let name = parameter.name.code;
        let pin = parameter.pin.code;
        name=name.replace(/"/g,"");     //去掉多余的双引号
        Generator.addCode(`${name}.GetGpioAdcValue(GpioExpansionBoard::GpioPin::${pin})`);        
    }