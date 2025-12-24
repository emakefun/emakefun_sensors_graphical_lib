//% color="#7c5e8b" iconWidth=50 iconHeight=40
namespace em_matrix_keypad_v3 {

   //% block="em_matrix_keyborad_v3_init initialize [keyboard_ID] I2C [I2C_address]" blockType="command"
    //% keyboard_ID.shadow="number" keyboard_ID.defl="1" 
    //% I2C_address.shadow="number" I2C_address.defl="0x65" 
    export function em_matrix_keyborad_v3_init(parameter: any, block: any) {
        let keyboard_id = parameter.keyboard_ID.code
        let i2c_address = parameter.I2C_address.code
            Generator.addInclude('matrix_keyboard_v3', `#include <matrix_keyboard_v3.h>`);
            Generator.addObject( `myMatrixKeyboardV3_${keyboard_id}`, `MatrixKeyboard`,`myMatrixKeyboardV3_${keyboard_id}(${i2c_address});`);
            Generator.addSetup(`myMatrixKeyboardV3_${keyboard_id}`,`myMatrixKeyboardV3_${keyboard_id}.Setup();`);
    }

    //取键值
    //% block="actuator_keyborad_read [keyboard_ID]" blockType="reporter"
    //% keyboard_ID.shadow="number" keyboard_ID.defl="1" 
    export function em_matrix_keyborad_v3_read(parameter: any, block: any) {
        let keyboard_id = parameter.keyboard_ID.code
        Generator.addCode(`String(myMatrixKeyboardV3_${keyboard_id}.GetTouchedKey())`);
    }

}
