/************************************************************************************
 * 原创：Emakefun
 * 
 * 联系邮箱：
 * 
 * 适用主板：
 * 
 * 版权：
 * 
 * 本程序库仅供学习使用，不得出售或有其他商业行为，违权必追。
 * 
 ********************************板载传感器与引脚说明**********************************
 * 
 * 
 * 
 * 
************************************************************************************/


//% color="#3366FF" iconWidth=40 iconHeight=40  /*图标颜色#3078D8*/
namespace Emakefun_RIFD
{

    //----------------RFID射频识别模块-------------------//

    //% block="RFID初始化 IIC地址[IIC_address]" blockType="command"
    //% IIC_address.shadow="number" IIC_address.defl="0x28"
    
    export function RFID(parameter: any, block: any) 
    {
        let IIC_address = parameter.IIC_address.code;

        //Generator.addInclude('Wire', '#include <Wire.h>');
        //Generator.addInclude('MFRC522_I2C', '#include <MFRC522_I2C.h>');
        Generator.addInclude('Emakefun_RFID', '#include <Emakefun_RFID.h>');
        Generator.addObject( `mfrc522`, `MFRC522`,`mfrc522(${IIC_address});`);

        Generator.addSetup(`Serial.begin`,`Serial.begin(115200);`);
        Generator.addSetup(`Wire.begin`,`Wire.begin();`);
        Generator.addSetup(`mfrc522.PCD_Init`,`mfrc522.PCD_Init();`);
    }

    //% block="RFID检测到卡片?" blockType="boolean"
    export function RFID_Read(parameter: any, block: any) 
    {
        Generator.addCode(`(mfrc522.PICC_IsNewCardPresent() && mfrc522.PICC_ReadCardSerial())`);
    }

    //% block="RFID读取卡片UID" blockType="reporter"
    export function RFID_Read_UID(parameter: any, block: any) 
    {
        Generator.addCode(`mfrc522.read_uid()`);
        
    }

/*
    //% block="UID.Size" blockType="reporter"
    export function UID_Size(parameter: any, block: any) 
    {
        Generator.addCode(`mfrc522.uid.size`);
    }

    //% block="UID.Byte[Number]" blockType="reporter"
    //% Number.shadow="normal" 
    export function UID_Byte(parameter: any, block: any) 
    {
        let Number = parameter.Number.code;
        Generator.addCode(`mfrc522.uid.uidByte[${Number}]`);
    }
*/
}