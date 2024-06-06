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


//% color="#DAA520" iconWidth=50 iconHeight=40
namespace i2cExpansionBoard {

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

}