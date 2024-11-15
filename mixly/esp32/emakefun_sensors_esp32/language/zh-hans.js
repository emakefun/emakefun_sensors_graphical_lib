(() => {

    'use strict';
    goog.require('Blockly.Lang.ZhHans');

    const { ZhHans } = Blockly.Lang;
	
	ZhHans.EM_INITIALIZE_MATRIX_KEYBOARD_V3 = "初始化矩阵键盘V3(I2C)"
	ZhHans.EM_I2C_MATRIX_KEYBOARD_V2_ADDR = "设置I2C地址为";
	ZhHans.EM_MATRIX_KEYBOARD_V3 = "矩阵键盘V3(I2C)";
	ZhHans.EM_MATRIX_KEYBOARD_VALUES_V2 = "获取当前按下的按键值";
	
	ZhHans.EM_FIVEINFRAREDTRACKING_V2 = "五路循迹V2模块(IIC)";
	ZhHans.EM_FIVEINFRAREDTRACKING_V2_ADDR = "设置地址为";
	ZhHans.EM_SETSENSITIVITY = "设置敏感度为";
	ZhHans.EM_FIVEINFRAREDTRACKINGVALUE = "获取寻迹模块的传感器值";
	ZhHans.EM_FIVEINFRAREDTRACKINGSTATES = "获取寻迹模块的传感器状态";
	ZhHans.EM_FIVEINFRAREDTRACKINGGET = "获取第";
	ZhHans.EM_FIVEINFRAREDTRACKINGSET = "设置第";
	ZhHans.EM_FIVEINFRAREDTRACKINGHIGHTHRESHOLD = "个探头转化为高电平(数字值)的阈值为";
	ZhHans.EM_FIVEINFRAREDTRACKINGLOWTHRESHOLD = "个探头转化为低电平(数字值)的阈值为";
	ZhHans.EM_FIVEINFRAREDTRACKINGGETSTA= "第";
	ZhHans.EM_FIVEINFRAREDTRACKING_V3 = "五路循迹V3模块(IIC)";
	ZhHans.EM_FIVEINFRAREDTRACKING_V3_ADDR = "设置地址为";
	ZhHans.EM_FIVEINFRAREDTRACKINGINDEXVALUE = "个探头的值";
	ZhHans.EM_FIVEINFRAREDTRACKINGINDEXSTATUS = "个探头寻到黑线";
	ZhHans.EM_COLOR_VIEW_V2_VALUE = "颜色识别传感器V2";
	ZhHans.EM_COLORVIEW = "读取颜色值";
	ZhHans.EM_I2C_EXPANSION_BOARD = "I2C扩展板";
	ZhHans.EM_INIT_I2C_EXPANSION_BOARD = "初始化I2C地址为 ";
	ZhHans.EM_RGBULTRASONIC = "RGB超声波";
	ZhHans.EM_READULTRASONICDISTANCE = "读取距离(cm)";
	ZhHans.EM_SET_I2C_EXPANSION_PIN = "设置引脚";
	ZhHans.EM_SET_I2C_EXPANSION_MODE = "模式";
	ZhHans.EM_ADCMODE = "ADC模式";
	ZhHans.EM_INPUTPULLUPMODE = "上拉输入模式";
	ZhHans.EM_INPUTPULLDOWNMODE = "下拉输入模式";
	ZhHans.EM_OUTPUTMODE = "输出模式";
	ZhHans.EM_PUTFLOATMODE = "浮空输入模式";
	ZhHans.EM_PWMMODE = "PWM输出模式(只支持引脚E1 ~ E2)";
	ZhHans.EM_SERVOMODE = "舵机模式(只支持引脚E1 ~ E2)";
	ZhHans.EM_SET_I2C_EXPANSION_LEVEL = "电平";
	ZhHans.EM_GET_I2C_EXPANSION_PIN = "获取引脚";
	ZhHans.EM_I2C_EXPANSION_LEVEL = "的数字值";
	ZhHans.EM_I2C_EXPANSION_ADC = "的模拟值";
	ZhHans.EM_SET_I2C_EXPANSION_PWM_FREQ = "设置PWM模式频率(1-10000)为";
	ZhHans.EM_SET_I2C_EXPANSION_PWM_DUTY = "设置PWM模式占空比(0-4095)为";
	ZhHans.EM_SET_I2C_EXPANSION_SERVO_ANGLE = "设置舵机模式的舵机角度(0-180)为";
	
	ZhHans.EMAKEFUN_INIT_PS3_MAC = "初始化PS3手柄，设置蓝牙配对码(冒号为英文格式):";
    ZhHans.EMAKEFUN_GET_ESP32_MAC = '获取ESP32主板的MAC地址';
    ZhHans.EMAKEFUN_GET_ESP32_IS_CONNECT = '是否连接上PS3手柄?';
    ZhHans.EMAKEFUN_ESP32_PS3_BUTTON = 'PS3按键';
	ZhHans.EMAKEFUN_ESP32_PS3_LOOP_BUTTON = '获取PS3按键';
    ZhHans.EMAKEFUN_GET_ESP32_IS_CONNECT = '是否连接上PS3手柄?';
    ZhHans.EMAKEFUN_ESP32_PS3_BUTTON_STATUS = "状态";
	ZhHans.EMAKEFUN_ESP32_PS3_BUTTON_VALUE = '的值';
    ZhHans.EMAKEFUN_GET_PS3_ROCK_VALUE = "PS3摇杆";
    ZhHans.EMAKEFUN_GET_PS3_BATTERY_STATUS = "获取PS3手柄电量状态";
    ZhHans.EMAKEFUN_PS3_BATTERY_STATUS = "PS3手柄电量为";
    ZhHans.EMAKEFUN_GET_PS3_SET_PLAYER = "给PS3手柄设置玩家编号为";


    ZhHans.EM_VOICERECOGNITION_INIT_V2 = "初始化语音识别模块V2(I2C)";
    ZhHans.EM_VOICERECOGNITION_V2 = "语音识别模块(I2C)";
    ZhHans.EM_VOICERECOGNITION_MODE = "模式设置为";
    ZhHans.EM_VOICERECOGNITION_MODEA = "循环模式";
    ZhHans.EM_VOICERECOGNITION_MODEB = "按键模式";
    ZhHans.EM_VOICERECOGNITION_MODEC = "关键词模式";
    ZhHans.EM_VOICERECOGNITION_MODED = "关键词或按键模式";
    ZhHans.EM_VOICERECOGNITION_KEY = "设置词条编号";
    ZhHans.EM_VOICERECOGNITION_CONTENT = "词条内容";
    ZhHans.EM_VOICERECOGNITION_START = "开始识别";
    ZhHans.EM_VOICERECOGNITION_RESET = "进行复位";
    ZhHans.EM_VOICERECOGNITION_TIME = "设置关键字唤醒等待时间毫秒(ms)";
    ZhHans.EM_VOICERECOGNITION_NUMBER = "获取识别到词条的对应编号";
    ZhHans.EM_VOICERECOGNITION_WAKEWORD = "设置唤醒词";
    ZhHans.EM_SPEECH = "语音合成模块(I2C)";
    ZhHans.EM_SPEECH_START = "设置音量";
    ZhHans.EM_SPEECH_VOICESPEED = "语速";
    ZhHans.EM_SPEECH_VOICECONTENT = "合成并播放内容";
    ZhHans.EM_SPEECH_STARTCACHE = "设置音量";
    ZhHans.EM_SPEECH_VOICECACHECONTENT = "缓存合成内容";
    ZhHans.EM_SPEED_CPLAY = "播放缓存内容播报次数(0~15)";
    ZhHans.EM_SPEED_SYNTHESISSTATUS = "当前语音模块的状态为";

    ZhHans.EM_HANDLESENSOR_I2C_ADDR = "地址为";
    ZhHans.EM_GET_GESTURE_STATUS = "获取手势传感器获取到的手势值";
    ZhHans.EM_GESTURE_NONE = "无手势动作";
    ZhHans.EM_GESTURE_RIGHT = "右移";
    ZhHans.EM_GESTURE_LEFT = "左移";
    ZhHans.EM_GESTURE_BACKWARD = "后移";
    ZhHans.EM_GESTURE_FORWARD = "前移";
    ZhHans.EM_GESTURE_UPWARD = "上拉";
    ZhHans.EM_GESTURE_DOWNWARD = "下压";
    ZhHans.EM_GESTURE_OUTOFRANGE = "离开感应区";
    ZhHans.EM_GESTURE_HOVER = "悬停";
    ZhHans.EM_HANDLESENSOR = "手势识别传感器";
    ZhHans.EM_GET_GESTURE_VALUE = "识别到手势";
    ZhHans.EM_HANDLESENSOR_INIT = "初始化手势识别传感器";
    ZhHans.emakefun_Mixly_ps3_help = "使用帮助";
    ZhHans.emakefun_ps3_helpurl = "https://docs.emakefun.com/esp32/ps3_esp32/";

})();