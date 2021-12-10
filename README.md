# emakefun_sensors_graphical_lib
​       本库是深圳市易创空间科技有限公司结合自家公司生产的硬件做的Arduino库；其中里面包含Arduino源码、Mixly扩展库、Mind+扩展库、MBlock5扩展库以及相对应的示例程序。
## 目录结构

> -----emakefun_sensors_graphical_lib
>      |
>      |-----example
>      |       |-----mblock5     mblock5图形化案例
>      |       |-----mind+         mind图形化案例
>      |       |-----mixly           mixly图形化案例
>      |-----mblock5              mblock5图形化库
>      |-----mind+                  mind+图形化库
>      |-----mixly                    mixly图形化库
>      |-----README.md       readme

## 库描述

### 一. Mixly库

​        mixly库我们秉着mixly软件自带传感器库和我们的硬件兼容的器件我们不做库，只做差异化的库的原则分成了六个模块，分别为基础输入模块、传感器、显示器、执行器、智能模块、无线通信；当我们使用Mixly编程的时候，先[点击下载][点击下载](https://github.com/emakefun/emakefun_sensors_graphical_lib/releases/download/v1.0.0/Emakefun_Sensor.zip) Mixly库，解压下载的Emakefun_Sensor.zip文件；将里面的EM_MQTT和EM_OLED两个文件夹，

**1. 基础输入模块:**

**钢琴模块**：钢琴模块分为v1、v2两个版本，使用时请根据硬件上的丝印选择对应的块。

当硬件是V1时，请选择![piano_v1](.\media\mixly\piano_v1.png)

**解释**：钢琴模块选择对应的CLK、DIO两个引脚，判断钢琴模块上的数字按键是否被触摸；

**输入**：5V；**输出**：布尔值，被触摸对应的数字输出TRUE,否则为FALSE。

[Mixly钢琴模块V1案例下载](.\example\mixly\piano_v1_mixly.mix)

**案例说明**：钢琴V1模块CLK引脚接Arduino的A4引脚，钢琴模块的DIO引脚接Arduino的A5引脚，无源蜂鸣器的S引脚接Arduino的3引脚；当按下钢琴模块不同的数字按钮，无源蜂鸣器发出不同的音符，犹如我们在弹钢琴，如果觉得音质不对，我们可以自己调节无源蜂鸣器的频率，让蜂鸣器发出想要的声音，这里就不做过多的解释。

当硬件是V2时，请选择![piano_v2](.\media\mixly\piano_v2.png)

同V1相同操作。

[Mixly钢琴模块V2案例下载](.\example\mixly\piano_v2_mixly.mix )

**旋转编码器：**

