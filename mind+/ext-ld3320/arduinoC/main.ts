enum LD3320MODE {
    //% block="kRecognitionAuto"
    kRecognitionAuto,
    //% block="kButtonTrigger"
    kButtonTrigger,
    //% block="kKeywordTrigger"
    kKeywordTrigger,
	//% block="kKeywordOrButtonTrigger"
    kKeywordOrButtonTrigger
}

//% color="#6495ED" iconWidth=50 iconHeight=40
namespace emakefun_ld3320 {

    //% block="init ld3320 [ADDR] recognition mode [MODE] I2C address 0x30" blockType="command"
    //% MODE.shadow="dropdown" MODE.options="LD3320MODE" MODE.defl="LD3320MODE.loop"
    export function initLD3320(parameter: any, block: any) {
        Generator.addInclude(`ld3320Init`, `#include <speech_recognizer.h>\nemakefun::SpeechRecognizer g_speech_recognizer(emakefun::SpeechRecognizer::kDefaultI2cAddress);\n`);
        Generator.addSetup("ld3320Setup", `g_speech_recognizer.Initialize();\n`); 
        let mode = parameter.MODE.code;
        Generator.addSetup("ld3320SetupMode", `g_speech_recognizer.SetRecognitionMode(emakefun::SpeechRecognizer::${mode});\n`); 
    }

    //% block="ld3320 add keyword [KEYWORD] code [CODE]" blockType="command"
	//% KEYWORD.shadow="string" KEYWORD.defl="xiao yi xiao yi"
    //% CODE.shadow="range" CODE.defl=0
    export function addKeyword(parameter: any, block: any) {
        Generator.addInclude(`ld3320Init`, `#include <speech_recognizer.h>\nemakefun::SpeechRecognizer g_speech_recognizer(emakefun::SpeechRecognizer::kDefaultI2cAddress);\n`);
        Generator.addSetup("ld3320Setup", `g_speech_recognizer.Initialize();\n`); 
        let code = parameter.CODE.code;
        let keyword = parameter.KEYWORD.code;
        Generator.addCode(`g_speech_recognizer.AddKeyword(${code}, F(${keyword}));\n`);
    }

    //% block="ld3320 set wake up time [TIME] ms" blockType="command"
    //% TIME.shadow="number" TIME.defl="10000"
    export function setWakeupTime(parameter: any, block: any) {
        Generator.addInclude(`ld3320Init`, `#include <speech_recognizer.h>\nemakefun::SpeechRecognizer g_speech_recognizer(emakefun::SpeechRecognizer::kDefaultI2cAddress);\n`);
        Generator.addSetup("ld3320Setup", `g_speech_recognizer.Initialize();\n`); 
        let time = parameter.TIME.code;
        Generator.addCode(`g_speech_recognizer.SetTimeout(${time});\n`);
    }

	//% block="ld3320 result" blockType="reporter"
    export function ld3320Recognize(parameter: any, block: any) {
        Generator.addInclude(`ld3320Init`, `#include <speech_recognizer.h>\nemakefun::SpeechRecognizer g_speech_recognizer(emakefun::SpeechRecognizer::kDefaultI2cAddress);\n`);
        Generator.addSetup("ld3320Setup", `g_speech_recognizer.Initialize();\n`); 
        Generator.addCode(`g_speech_recognizer.Recognize()`);
    }

}
