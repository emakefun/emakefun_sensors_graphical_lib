
enum COLOR_ONE{
    //% block="R"
    r,
    //% block="G"
    g,
    //% block="B"
    b
}

//% color="#AFEEEE" iconWidth=50 iconHeight=40
namespace EM_COLOR_SENSOR_NLCS11 {

    //% block="init color sensor NLCS11 I2C addr 0x43" blockType="command"
    export function initColorSensorNLCS11(parameter: any, block: any) {
        Generator.addInclude(`colorSenorNLCS11Init`, `#include<color_sensor_nlcs11.h>\nemakefun::ColorSensorNlcs11 g_color_sensor_nlcs11;`);
		Generator.addSetup(`colorSensorNLCS11Setup`, `Wire.begin();\n  g_color_sensor_nlcs11.Initialize();`);
    }
	
   //% block="color sensor NLCS11 Read color sensor [COL1]" blockType="reporter"
    //% COL1.shadow="dropdown" COL1.options="COLOR_ONE"
    export function colorSensoNLCS11ReadColor(parameter: any, block: any){
        let col1 = parameter.COL1.code
        Generator.addCode(`g_color_sensor_nlcs11.GetColor().${col1}`);
    }
   
}
