
enum COLOR_ONE{
    //% block="R"
    R,
    //% block="G"
    G,
    //% block="B"
    B
}

//% color="#AFEEEE" iconWidth=50 iconHeight=40
namespace EM_COLOR_SENSOR_V2 {

    //% block="init color sensor v2 I2C addr 0x43" blockType="command"
    export function initColorSensorV2(parameter: any, block: any) {
        Generator.addInclude(`colorSenorV2Init`, `#include<color_sensor.h>\nemakefun::ColorSensor g_color_sensor;`);
		Generator.addSetup(`colorSensorV2Setup`, `Wire.begin();\n  g_color_sensor.Initialize();`);
    }
	
   //% block="color sensor V2 Read color sensor [COL1]" blockType="reporter"
    //% COL1.shadow="dropdown" COL1.options="COLOR_ONE"
    export function colorSensorV2ReadColor(parameter: any, block: any){
        let col1 = parameter.COL1.code
        Generator.addCode(`g_color_sensor.${col1}()`);
    }
   
}
