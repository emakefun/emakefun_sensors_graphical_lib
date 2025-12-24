
enum COLOR_ONE{
    //% block="R"
    R,
    //% block="G"
    G,
    //% block="B"
    B
}

//% color="#34a3fc" iconWidth=50 iconHeight=40
namespace EM_COLOR_SENSOR{

    //% block="init color sensor I2C addr 0x29" blockType="command"
    export function initColorSensor(parameter: any, block: any) {
        Generator.addInclude(`colorSenorInit`, `#include <Adafruit_TCS34725.h>\nAdafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_614MS, TCS34725_GAIN_1X);`);
	Generator.addSetup(`colorSensorTcsBegin`, `tcs.begin();`);
    }
	
   //% block="color sensor Read color sensor [COL1]" blockType="reporter"
    //% COL1.shadow="dropdown" COL1.options="COLOR_ONE"
    export function colorSensorReadColor(parameter: any, block: any){
        let col1 = parameter.COL1.code
	Generator.addObject(`get_color_sensor_data`, 'int', `getData(char type){\n  uint16_t r, g, b, c;\n  tcs.getRawData(&r, &g, &b, &c);\n  if(type == 'R'){\n    return r;\n  }else if(type == 'G'){\n    return g;\n  }else if(type == 'B'){\n    return b;\n  }\n}`);
        Generator.addCode(`getData('${col1}')`);
    }
   
}
