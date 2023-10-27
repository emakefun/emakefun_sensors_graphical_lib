
enum RADIO {
    //% block="HIGH"
    HIGH,
    //% block="LOW"
    LOW
}

enum MOTORPIN {
    //% block="M1"
    1,
    //% block="M2"
    2,
    //% block="M3"
    3,
    //% block="M4"
    4
}

enum ENCODERMOTORPIN {
    //% block="E1"
    1,
    //% block="E2"
    2,
    //% block="E3"
    3,
    //% block="E4"
    4
}

enum DIRECTION {
    //% block="FORWARD"
    FORWARD,
    //% block="BACKWARD"
    BACKWARD,
    //% block="BRAKE"
    BRAKE,
    //% block="RELEASE"
    RELEASE
}

enum ENDIRECTION {
    //% block="FORWARD"
    FORWARD,
    //% block="BACKWARD"
    BACKWARD,
}


enum IOPIN {
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



//% color="#AA278D" iconWidth=50 iconHeight=40
namespace nulllab_tts {

    //% block="init tts [ADDR]" blockType="command"
    export function initTTs(parameter: any, block: any) {
        Generator.addInclude(`ttsInit`, `#include <tts.h>\nemakefun::Tts g_tts(emakefun::Tts::kDeviceI2cAddress);\n`);
    }

    //% block="tts start synthesizing voice [VOICE] speed [SPEED] text [TEXT]" blockType="command"
	//% TEXT.shadow="string" TEXT.defl=你好
    //% VOICE.shadow="range" VOICE.defl=5 VOICE.params.min=1 VOICE.params.max=10
    //% SPEED.shadow="range" SPEED.defl=5 SPEED.params.min=1 SPEED.params.max=10
    export function startSynthesizing(parameter: any, block: any) {
        Generator.addInclude(`ttsInit`, `#include <tts.h>\nemakefun::Tts g_tts(emakefun::Tts::kDeviceI2cAddress);\n`);
        Generator.addSetup("ttsSetup", `g_tts.Initialize();\n`); 
        let text = parameter.TEXT.code;
        let voice = parameter.VOICE.code;
        let speed = parameter.SPEED.code;
        let conf = `"[v${voice}][s${speed}]"`;
        Generator.addCode(`g_tts.Play(String(${conf}) + String(${text}));\n`);
    }

    //% block="tts stop synthesizing" blockType="command"
     export function stopSynthesizing(parameter: any, block: any) {
        Generator.addInclude(`ttsInit`, `#include <tts.h>\nemakefun::Tts g_tts(emakefun::Tts::kDeviceI2cAddress);\n`);
        Generator.addSetup("ttsSetup", `g_tts.Initialize();\n`); 
        Generator.addCode(`g_tts.Stop();\n`);
    }

	//% block="tts pause synthesizing" blockType="command"
    export function pauseSynthesizing(parameter: any, block: any) {
        Generator.addInclude(`ttsInit`, `#include <tts.h>\nemakefun::Tts g_tts(emakefun::Tts::kDeviceI2cAddress);\n`);
        Generator.addSetup("ttsSetup", `g_tts.Initialize();\n`); 
        Generator.addCode(`g_tts.Pause();\n`);
    }

    //% block="tts resume synthesizing" blockType="command"
    export function resumeSynthesizing(parameter: any, block: any) {
        Generator.addInclude(`ttsInit`, `#include <tts.h>\nemakefun::Tts g_tts(emakefun::Tts::kDeviceI2cAddress);\n`);
        Generator.addSetup("ttsSetup", `g_tts.Initialize();\n`); 
        Generator.addCode(`g_tts.Resume();\n`);
    }
	
    //% block="tts push text to cachevoice [VOICE] speed [SPEED] text [TEXT] cache index [INDEX]" blockType="command"	
	//% TEXT.shadow="string" TEXT.defl=你好
	//% INDEX.shadow="range" INDEX.params.min=1 INDEX.params.max=15 INDEX.defl=1
    //% VOICE.shadow="range" VOICE.defl=5 VOICE.params.min=1 VOICE.params.max=10
    //% SPEED.shadow="range" SPEED.defl=5 SPEED.params.min=1 SPEED.params.max=10
    export function pushTextToCache(parameter: any, block: any) {
        Generator.addInclude(`ttsInit`, `#include <tts.h>\nemakefun::Tts g_tts(emakefun::Tts::kDeviceI2cAddress);\n`);
        Generator.addSetup("ttsSetup", `g_tts.Initialize();\n`); 
		let text = parameter.TEXT.code;
		let index = parameter.INDEX.code;
        let voice = parameter.VOICE.code;
        let speed = parameter.SPEED.code;
        let conf = `"[v${voice}][s${speed}]"`;
        Generator.addCode(`g_tts.PushTextToCache(String(${conf}) + String(${text}), ${index});\n`);
    }

    //% block="tts start from cache speak count [COUNT]" blockType="command"
	//% COUNT.shadow="range" COUNT.params.min=1 COUNT.params.max=15 COUNT.defl=1
    export function startSynthesizingFromCache(parameter: any, block: any) {
        Generator.addInclude(`ttsInit`, `#include <tts.h>\nemakefun::Tts g_tts(emakefun::Tts::kDeviceI2cAddress);\n`);
        Generator.addSetup("ttsSetup", `g_tts.Initialize();\n`); 
        let count = parameter.COUNT.code;
        Generator.addCode(`g_tts.PlayFromCache();\n`);
    }

}
