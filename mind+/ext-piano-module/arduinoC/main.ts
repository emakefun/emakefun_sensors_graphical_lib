enum PIANO_BTN {
    //% block="1"
    EM_PIANO_KEYCODE_1,
    //% block="2"
    EM_PIANO_KEYCODE_2,
    //% block="3"
    EM_PIANO_KEYCODE_3,
    //% block="4"
    EM_PIANO_KEYCODE_4,
    //% block="5"
    EM_PIANO_KEYCODE_5,
    //% block="6"
    EM_PIANO_KEYCODE_6,
    //% block="7"
    EM_PIANO_KEYCODE_7,
    //% block="8"
    EM_PIANO_KEYCODE_8
}

//% color="#5fa9b2" iconWidth=50 iconHeight=40
namespace EM_PIANO {

    //% block="basic_piano_play pins CLK[C_PIN] DIO[D_PIN] press the button [PIANO_BTN]" blockType="boolean"
    //% C_PIN.shadow="dropdown" C_PIN.options="PIN_DigitalRead" 
    //% D_PIN.shadow="dropdown" D_PIN.options="PIN_DigitalRead" 
    //% PIANO_BTN.shadow="dropdown" PIANO_BTN.options="PIANO_BTN" 
    export function basic_piano_play(parameter: any, block: any) {
        let c_pin = parameter.C_PIN.code
        let d_pin = parameter.D_PIN.code
        let piano_btn = parameter.PIANO_BTN.code
        Generator.addInclude('EM_Piano', '#include <EM_Piano.h>');
        Generator.addObject( `mPiano_${c_pin}${d_pin}`, `Piano`,`mPiano_${c_pin}${d_pin};`);
        Generator.addSetup(`mPiano_${c_pin}${d_pin}.initPiano`,`mPiano_${c_pin}${d_pin}.initPiano(${c_pin}, ${d_pin});`);
        Generator.addCode(`mPiano_${c_pin}${d_pin}.PressBsButton(${piano_btn})`);
    }
}
