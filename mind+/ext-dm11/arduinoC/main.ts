enum MOTORPIN {
    //% block="M0"
    m0,
    //% block="M1"
    m1
}

//% color="#3366FF" iconWidth=40 iconHeight=40  /*图标颜色#3078D8*/
namespace Emakefun_DM11
{
    //% block="DM11 I2C双路电机驱动模块IIC地址[IIC_address] 电机[motorpin] 速度[speed]" blockType="command"
    //% IIC_address.shadow="number" IIC_address.defl="0x15"
    //% motorpin.shadow="dropdown" motorpin.options="MOTORPIN" motorpin.defl="MOTORPIN.M0"
    //% speed.shadow="range" speed.params.min=-4095 speed.params.max=4095 speed.defl=0
    export function DM11(parameter: any, block: any) 
    {
        let IIC_address = parameter.IIC_address.code;
        let motorpin = parameter.motorpin.code;
        let speed = parameter.speed.code;
        //Generator.addInclude('Wire', '#include <Wire.h>');
        //Generator.addInclude('MFRC522_I2C', '#include <MFRC522_I2C.h>');
        Generator.addInclude('Emakefun_dm11', '#include <dm11.h>\n#include <dm11_lib.h>');
        Generator.addObject( `dm11_${IIC_address}`, `em::Dm11`,`g_dm11_${IIC_address}(${IIC_address});`);
         Generator.addSetup(`wire_begin`,`Wire.begin();`);
        Generator.addSetup(`dm11_${IIC_address}_init`,`g_dm11_${IIC_address}.Init();`);
        let code = "";
        let dm11Pin = 0;
        if(motorpin == "m0") {
            dm11Pin = 0;
        }else if(motorpin == "m1") {
            dm11Pin = 2;
        }
        let pin1 = dm11Pin + 1;
        if (speed > 0){
		    code = `g_dm11_${IIC_address}.PwmDuty(em::Dm11::kPwmChannel${dm11Pin}, 0);\n  g_dm11_${IIC_address}.PwmDuty(em::Dm11::kPwmChannel${pin1}, ${speed});\n`;
        }else if (speed <= 0){
            code = `g_dm11_${IIC_address}.PwmDuty(em::Dm11::kPwmChannel${pin1}, 0);\n  g_dm11_${IIC_address}.PwmDuty(em::Dm11::kPwmChannel${dm11Pin}, ${speed});\n`;
        }
        Generator.addCode(code);
    }

    
}