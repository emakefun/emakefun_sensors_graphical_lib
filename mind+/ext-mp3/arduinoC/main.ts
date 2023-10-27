
enum MP3MODE {
    //% block="PLAY"
    play,
    //% block="PAUSE"
    pause,
    //% block="NEXT"
    next,
	//% block="PREV"
	prev,
	//% block="UP"
	volumeUp,
	//% block="DOWN"
	volumeDn
}

enum MP3EQMODE {
    //% block="NORMAL"
    MP3_EQ_NORMAL,
    //% block="POP"
    MP3_EQ_POP,
    //% block="ROCK"
    MP3_EQ_ROCK,
	//% block="JAZZ"
	MP3_EQ_JAZZ,
	//% block="CLASSIC"
	MP3_EQ_CLASSIC,
	//% block="BASS"
	MP3_EQ_BASS
}

enum MP3LOOPMODE {
    //% block="LOOPALL"
    MP3_LOOP_ALL,
    //% block="LOOPFOLDER"
    MP3_LOOP_FOLDER,
    //% block="LOOPONE"
    MP3_LOOP_ONE,
	//% block="LOOPRAM"
	MP3_LOOP_RAM
}


enum MP3TXPIN {
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	A1,
	A2,
	A3,
	A4,
	A5
}

enum MP3RXPIN {
	3,
	2,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	A1,
	A2,
	A3,
	A4,
	A5
}

//% color="#9999CC" iconWidth=50 iconHeight=40
namespace EM_MP3 {

    //% block="init MP3 TX[TXPIN] RX[RXPIN] set [MODE]" blockType="command"
	//% MODE.shadow="dropdown" MODE.options="MP3MODE" MODE.defl="MP3MODE.PLAY"
	//% RXPIN.shadow="dropdown" RXPIN.options="MP3RXPIN" RXPIN.defl="MP3RXPIN.3"
	//% TXPIN.shadow="dropdown" TXPIN.options="MP3TXPIN" TXPIN.defl="MP3MODE.2"
    export function initMP3(parameter: any, block: any) {
		let rxPin = parameter.RXPIN.code;
		let txPin = parameter.TXPIN.code;
		let mode = parameter.MODE.code;
        Generator.addInclude(`mp3Init`, `#include<GD5800_Serial.h>\nGD5800_Serial mp3${rxPin}${txPin}(${txPin}, ${rxPin});\n`);
		Generator.addSetup(`mp3${rxPin}${txPin}_setup`, `mp3${rxPin}${txPin}.begin(9600);\n`);
		Generator.addCode(`mp3${rxPin}${txPin}.${mode}();\n`);
    }
	
	//% block="MP3 TX[RXPIN] RX[TXPIN] play [NUM]" blockType="command"
	//% NUM.shadow="range" NUM.params.min=1 NUM.defl=1
	//% RXPIN.shadow="dropdown" RXPIN.options="MP3RXPIN" RXPIN.defl="MP3RXPIN.3"
	//% TXPIN.shadow="dropdown" TXPIN.options="MP3TXPIN" TXPIN.defl="MP3MODE.2"
    export function mp3Play(parameter: any, block: any) {
		let rxPin = parameter.RXPIN.code;
		let txPin = parameter.TXPIN.code;
		let num = parameter.NUM.code;
        Generator.addInclude(`mp3Init`, `#include<GD5800_Serial.h>\nGD5800_Serial mp3${rxPin}${txPin}(${txPin}, ${rxPin});\n`);
		Generator.addSetup(`mp3${rxPin}${txPin}_setup`, `mp3${rxPin}${txPin}.begin(9600);\n`);
		Generator.addCode(`mp3${rxPin}${txPin}.playFileByIndexNumber(${num});\n`);
    }
	
	//% block="MP3 TX[RXPIN] RX[TXPIN] set equalizer [EQMODE]" blockType="command"
	//% EQMODE.shadow="dropdown" EQMODE.options="MP3EQMODE" EQMODE.defl="MP3EQMODE.NORMAL"
	//% RXPIN.shadow="dropdown" RXPIN.options="MP3RXPIN" RXPIN.defl="MP3RXPIN.3"
	//% TXPIN.shadow="dropdown" TXPIN.options="MP3TXPIN" TXPIN.defl="MP3MODE.2"
    export function mp3Equalizer(parameter: any, block: any) {
		let rxPin = parameter.RXPIN.code;
		let txPin = parameter.TXPIN.code;
		let eqmode = parameter.EQMODE.code;
        Generator.addInclude(`mp3Init`, `#include<GD5800_Serial.h>\nGD5800_Serial mp3${rxPin}${txPin}(${txPin}, ${rxPin});\n`);
		Generator.addSetup(`mp3${rxPin}${txPin}_setup`, `mp3${rxPin}${txPin}.begin(9600);\n`);
		Generator.addCode(`mp3${rxPin}${txPin}.setEqualizer(${eqmode});\n`);
    }
	
	//% block="MP3 TX[RXPIN] RX[TXPIN] loop mode [LOOPMODE]" blockType="command"
	//% LOOPMODE.shadow="dropdown" LOOPMODE.options="MP3LOOPMODE" LOOPMODE.defl="MP3LOOPMODE.LOOPALL"
	//% RXPIN.shadow="dropdown" RXPIN.options="MP3RXPIN" RXPIN.defl="MP3RXPIN.3"
	//% TXPIN.shadow="dropdown" TXPIN.options="MP3TXPIN" TXPIN.defl="MP3MODE.2"
    export function mp3LoopMode(parameter: any, block: any) {
		let rxPin = parameter.RXPIN.code;
		let txPin = parameter.TXPIN.code;
		let loopMode = parameter.LOOPMODE.code;
        Generator.addInclude(`mp3Init`, `#include<GD5800_Serial.h>\nGD5800_Serial mp3${rxPin}${txPin}(${txPin}, ${rxPin});\n`);
		Generator.addSetup(`mp3${rxPin}${txPin}_setup`, `mp3${rxPin}${txPin}.begin(9600);\n`);
		Generator.addCode(`mp3${rxPin}${txPin}.setLoopMode(${loopMode});\n`);
    }
  
	//% block="MP3 TX[RXPIN] RX[TXPIN] set volume [VOLUME]" blockType="command"
	//% VOLUME.shadow="range" VOLUME.params.min=1 VOLUME.params.max=30 VOLUME.defl=20
	//% RXPIN.shadow="dropdown" RXPIN.options="MP3RXPIN" RXPIN.defl="MP3RXPIN.3"
	//% TXPIN.shadow="dropdown" TXPIN.options="MP3TXPIN" TXPIN.defl="MP3MODE.2"
    export function mp3SetVolume(parameter: any, block: any) {
		let rxPin = parameter.RXPIN.code;
		let txPin = parameter.TXPIN.code;
		let volume = parameter.VOLUME.code;
        Generator.addInclude(`mp3Init`, `#include<GD5800_Serial.h>\nGD5800_Serial mp3${rxPin}${txPin}(${txPin}, ${rxPin});\n`);
		Generator.addSetup(`mp3${rxPin}${txPin}_setup`, `mp3${rxPin}${txPin}.begin(9600);\n`);
		Generator.addCode(`mp3${rxPin}${txPin}.setVolume(${volume});\n`);
    }  
   
}
