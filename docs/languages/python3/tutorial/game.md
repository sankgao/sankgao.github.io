---
title: Pygame 游戏编程
icon: game
date: 2023-06-05
category: Languages
tag:
    - Python
---

## 初始 Pygame

Pygame 是跨平台的 Python 模块，专为电子游戏设计（包含图像、声音），创建在 SDL（Simple DirectMedia Layer）基础上，允许实时电子游戏研发而不被低级语言（如：汇编语言）束缚，基于这一设想，所有需要的游戏功能和理念（主要是图像方面）都完全简化为游戏逻辑本身，所有的资源结构都可以由高级语言（如：python）提供。

### 安装 Pygame

Pygame 的官方网址是：<https://www.pygame.org>，在该网址中可以查找 Pygame 相关文档。

使用 pip 命令安装 Pygame 库：`pip install pygame`。

### Pygame 常用模块

使用 Pygame 做游戏开发的优势在于不需要过多考虑与底层开发相关的内容，而可以把工作重心放在游戏逻辑上。例如：Pygame 中集成了很多和底层开发相关的模块，如：访问显示设备、管理事件、使用字体等。

**Pygame 常用模块如下：**

|  模块名  |  功能  |
|  :----:  |  :----  |
|  **pygame.cdrom**  |  访问光驱  |
|  **pygame.cursors**  |  加载光标  |
|  **pygame.display**  |  访问显示设备  |
|  **pygame.draw**  |  绘制形状、线和点  |
|  **pygame.event**  |  管理事件  |
|  **pygame.font**  |  使用字体  |
|  **pygame.image**  |  加载和存储图片  |
|  **pygame.joystick**  |  使用游戏手柄或者类似的东西  |
|  **pygame.key**  |  读取键盘按键  |
|  **pygame.mixer**  |  声音  |
|  **pygame.mouse**  |  鼠标  |
|  **pygame.movie**  |  播放视频  |
|  **pygame.music**  |  播放音频  |
|  **pygame.overlay**  |  访问高级视频叠加  |
|  **pygame.rect**  |  管理矩形区域  |
|  **pygame.sndarray**  |  操作声音数据  |
|  **pygame.sprite**  |  操作移动图像  |
|  **pygame.surface**  |  管理图像和屏幕  |
|  **pygame.surfarray**  |  管理点阵图像数据  |
|  **pygame.time**  |  管理时间和帧信息  |
|  **pygame.trasform**  |  缩放和移动图像  |

使用 pygame 的 `display` 和 `event` 模块创建一个 Pygame 窗口。例如：

```python
import sys
import pygame

# 初始化 pygame
pygame.init()
# 设置窗口
size = width, height = 320, 240
# 显示窗口
screen = pygame.display.set_mode(size)

# 执行循环，确保窗口一直显示
while True:
    # 遍历所有事件
    for event in pygame.event.get():
        # 如果单击关闭窗口，则退出
        if event.type == pygame.QUIT:
            sys.exit()

# 退出 pygame
pygame.quit()
```

## Pygame 的基本应用

### 制作一个跳跃的小球游戏

创建一个游戏窗口，然后在窗口内创建一个小球，以一定的速度移动小球，当小球碰到游戏窗口的边缘时，小球弹回，继续移动。例如：

1. 创建一个游戏窗口

    宽和高设置为 `640 * 480`

    ```python
    import sys
    import pygame

    # 初始化 pygame
    pygame.init()
    # 设置窗口
    size = width, height = 640, 480
    # 显示窗口
    screen = pygame.display.set_mode(size)
    ```

    上述代码，首先导入 pygame 模块，然后调用 `init()` 方法初始化 pygame 模块，再设置窗口的宽和高，最后使用 `display` 模块显示窗体。

    **display 模块的常用方法如下：**

    |  方法名  |  功能  |
    |  :----:  |  :----  |
    |  **pygame.display.init**  |  初始化 display 模块  |
    |  **pygame.display.quit**  |  结束 display 模块  |
    |  **pygame.display.get_init**  |  如果 display 模块已经被初始化，则返回 True  |
    |  **pygame.display.set_mode**  |  初始化一个准备显示的界面  |
    |  **pygame.display.get_surface**  |  获取当前的 Surface 对象  |
    |  **pygame.display.flip**  |  更新整个待显示的 Surface 对象到屏幕上  |
    |  **pygame.display.update**  |  更新部分内容显示到屏幕上，如果没有参数，则于 flip 功能相同  |

2. 执行循环，确保窗口一直显示，并设置关闭按钮

    运行上述代码后，会出现一个一闪而过的黑色窗口，这是因为程序执行完成，会自动关闭。如果想让窗口一直显示，需要使用 `while True` 语句让程序一直执行，此外，还需要设置关闭按钮。

    ```python
    import sys
    import pygame

    # 初始化 pygame
    pygame.init()
    # 设置窗口
    size = width, height = 640, 480
    # 显示窗口
    screen = pygame.display.set_mode(size)

    # 执行循环，确保窗口一直显示
    while True:
        for event in pygame.event.get():
            # 如果单击关闭窗口，则退出
            if event.type == pygame.QUIT:
                sys.exit()

    # 退出 pygame
    pygame.quit()
    ```

    上述代码中，添加了轮询事件检测。`pygame.event.get()` 能够获取事件队列，使用 `for···in` 遍历事件，然后根据 `type` 属性判断事件类型。这里的事件处理方法于 GUI 类似，如 `event.type == pygame.QUIT` 表示检测关闭 pygame 窗口事件，`pygame.KEYDOWN` 表示键盘按下事件，`pygame.MOUSEBUTONDOWN` 表示鼠标按下事件等。

3. 在窗口中添加小球

    先准备好一张 `ball.png` 图片，然后加载该图片，最后将图片显示在窗口中。

    ```python
    import sys
    import pygame

    # 初始化 pygame
    pygame.init()
    # 设置窗口
    size = width, height = 640, 480
    # 显示窗口
    screen = pygame.display.set_mode(size)
    # 设置颜色
    color = (0, 0, 0)

    # 加载图片
    ball = pygame.image.load("images/ball.png")
    # 获取矩形区域
    ballrect = ball.get_rect()

    # 执行循环，确保窗口一直显示
    while True:
        for event in pygame.event.get():
            # 如果单击关闭窗口，则退出
            if event.type == pygame.QUIT:
                sys.exit()

        # 填充颜色
        screen.fill(color)
        # 将图片画到窗口上
        screen.blit(ball, ballrect)
        # 更新全部显示
        pygame.display.flip()

    # 退出 pygame
    pygame.quit()
    ```

    上述代码中，使用 image 模块的 `load()` 方法加载图片，返回值 `ball` 是一个 Surface 对象，`Surface` 是用来代表图片的 `pygame` 对象，可以对一个 Surface 对象进行涂画、变形、复制等各种操作。事实上，屏幕也只是一个 surface，`pygame.display.set_mode` 就返回一个屏幕 Surface 对象。如果将 ball 这个 Surface 对象画到 sureen Surface 对象，需要使用 `blit()` 方法，最后使用 display 模块的 `flip()` 方法更新整个待显示的 Surface 对象到屏幕上。

    **Surface 对象的常用方法如下：**

    |  方法名  |  功能  |
    |  :----:  |  :----  |
    |  **pygame.Surface.blit**  |  将一个图像画到另一个图像上  |
    |  **pygame.Surface.convert**  |  转换图像的像素格式  |
    |  **pygame.Surface.convert_alpha**  |  转换图像的像素格式，包含 alpha 通道的转换  |
    |  **pygame.Surface.fill**  |  使用颜色填充 Surface  |
    |  **pygame.Surface.get_rect**  |  获取 Surface 的矩形区域  |

4. 让小球动起来

    `ball.get_rect()` 方法返回值 `ballrect` 是一个 Rect 对象，该对象有一个 `move()` 方法可以用于移动矩形。`move(x, y)` 函数有两个参数，第一个参数是 `X` 轴移动的距离，第二个参数是 `Y` 轴移动的距离，窗体左上角坐标为 `0, 0`。为了实现小球不停移动，将 `move()` 函数添加到 `while` 循环内。

    ```python
    import sys
    import pygame

    # 初始化 pygame
    pygame.init()
    # 设置窗口
    size = width, height = 640, 480
    # 显示窗口
    screen = pygame.display.set_mode(size)
    # 设置颜色
    color = (0, 0, 0)

    # 加载图片
    ball = pygame.image.load("images/ball.png")
    # 获取矩形区域
    ballrect = ball.get_rect()

    # 设置移动的 X、Y 轴距离
    speed = [5, 5]

    # 执行循环，确保窗口一直显示
    while True:
        for event in pygame.event.get():
            # 如果单击关闭窗口，则退出
            if event.type == pygame.QUIT:
                sys.exit()

        # 移动小球
        ballrect = ballrect.move(speed)
        # 填充颜色
        screen.fill(color)
        # 将图片画到窗口上
        screen.blit(ball, ballrect)
        # 更新全部显示
        pygame.display.flip()

    # 退出 pygame
    pygame.quit()
    ```

5. 当小球与窗体任意边缘发送碰撞，则更改小球的移动方向

    运行上述代码，发现小球在屏幕中一闪而过，此时小球并没有真正消失，而是移动到窗体之外，此时需要添加碰撞检测的功能。

    ```python
    import sys
    import pygame

    # 初始化 pygame
    pygame.init()
    # 设置窗口
    size = width, height = 640, 480
    # 显示窗口
    screen = pygame.display.set_mode(size)
    # 设置颜色
    color = (0, 0, 0)

    # 加载图片
    ball = pygame.image.load("images/ball.png")
    # 获取矩形区域
    ballrect = ball.get_rect()

    # 设置移动的 X、Y 轴距离
    speed = [5, 5]

    # 执行循环，确保窗口一直显示
    while True:
        for event in pygame.event.get():
            # 如果单击关闭窗口，则退出
            if event.type == pygame.QUIT:
                sys.exit()

        # 移动小球
        ballrect = ballrect.move(speed)

        # 碰到左右边缘
        if ballrect.left < 0 or ballrect.right > width:
            speed[0] = -speed[0]
        
        # 碰到上下边缘
        if ballrect.top < 0 or ballrect.bottom > height:
            speed[1] = -speed[1]

        
        # 填充颜色
        screen.fill(color)
        # 将图片画到窗口上
        screen.blit(ball, ballrect)
        # 更新全部显示
        pygame.display.flip()

    # 退出 pygame
    pygame.quit()
    ```

    上述代码中，添加了碰撞检测功能。如果碰到左右边缘，更改 X 轴数据为负数；如果碰到上下边缘，更改 Y 轴数据为负数。

6. 设置运行时间

    运行上述代码发现好像多个小球在飞快移动，这是因为运行代码的时间非常短导致的。这时就需要使用 Pygame 的 `time` 模块，使用 Pygame 时钟之前，必须先创建 Clock 对象的一个实例，然后在 while 循环中设置多长时间运行一次。

    ```python
    import sys
    import pygame

    # 初始化 pygame
    pygame.init()
    # 设置窗口
    size = width, height = 640, 480
    # 显示窗口
    screen = pygame.display.set_mode(size)
    # 设置颜色
    color = (0, 0, 0)

    # 加载图片
    ball = pygame.image.load("images/ball.png")
    # 获取矩形区域
    ballrect = ball.get_rect()

    # 设置移动的 X、Y 轴距离
    speed = [5, 5]
    # 设置时钟
    clock = pygame.time.Clock()

    # 执行循环，确保窗口一直显示
    while True:
        # 每秒执行 60 次
        clock.tick(60)

        for event in pygame.event.get():
            # 如果单击关闭窗口，则退出
            if event.type == pygame.QUIT:
                sys.exit()

        # 移动小球
        ballrect = ballrect.move(speed)

        # 碰到左右边缘
        if ballrect.left < 0 or ballrect.right > width:
            speed[0] = -speed[0]
        
        # 碰到上下边缘
        if ballrect.top < 0 or ballrect.bottom > height:
            speed[1] = -speed[1]

        # 填充颜色
        screen.fill(color)
        # 将图片画到窗口上
        screen.blit(ball, ballrect)
        # 更新全部显示
        pygame.display.flip()

    # 退出 pygame
    pygame.quit()
    ```

    完成小球的跳跃游戏。

## 开发 Flappy Bird 游戏

### 游戏简介

Flappy Bird 是一款鸟类飞行游戏，由越南河内独立游戏开发者阮哈东（Dong Nguyen）开发。这款游戏玩家需要用一根手指操作，通过单击触摸屏幕，小鸟就会向上飞；放松手指，则会快速下降。玩家要控制小鸟一直向前飞行，注意躲避途中高低不平的管子。每当小鸟飞过一组管道，玩家获得 1 分；如果小鸟碰到障碍物，则游戏结束。

### 游戏分析

在 Flappy Bird 游戏中，主要有两个对象：小鸟和管道。可以创建 `Brid` 类和 `Pipeline` 类来分别表示这两个对象。

小鸟可以通过上下移动来躲避管道，所以在 `Brid` 类中创建一个 `birdUpdate()` 方法，实现小鸟的上下移动。

为了体现小鸟向前飞行的特征，可以让管道一直向左侧移动，所以在 `Pipeline` 类中也创建一个 `updatePipeline()` 方法，实现管道的向左移动。

此外，还创建了三个函数：`createMap()` 函数用于绘制地图；`checkDead()` 函数用于判断小鸟的生命状态；`getResult()` 函数用于获取最终分数。

最后在主逻辑中，实例化类并调用相关方法，实现相应功能。

### 搭建主框架

先创建 Flappy Bird 游戏的两个主要对象类（小鸟和管道），然后创建一个绘制地图的函数 `createMap()`，最后在主逻辑中绘制背景图片。

```python
import sys
import pygame


class Bird(object):
    """定义一个鸟类"""
    def __init__(self):
        """定义初始化方法"""
        pass

    def birdUpdate(self):
        """实现小鸟的上下移动"""
        pass


class Pipeline(object):
    """定义一个管道类"""
    def __init__(self):
        """定义初始化方法"""
        pass

    def updatePipeline(self):
        """实现管道的向左移动"""
        pass


def createMap():
    """定义创建地图的方法"""
    screen.fill((255, 255, 255))  # 填充颜色
    screen.blit(background, (0, 0))  # 填入到背景
    pygame.display.update()  # 更新显示


if __name__ == '__main__':
    """主程序"""
    pygame.init()  # 初始化 pygame
    size = width, height = 400, 650  # 设置窗口
    screen = pygame.display.set_mode(size)  # 显示窗口
    clock = pygame.time.Clock()  # 设置时钟

    Pipeline = Pipeline()  # 实例化管道类
    Bird = Bird()  # 实例化鸟类

    while True:  # 执行循环，确保窗口一直显示
        clock.tick(60)  # 每秒执行 60 次

        for event in pygame.event.get():  # 轮询事件
            if event.type == pygame.QUIT:
                sys.exit()

        background = pygame.image.load('images/backgroud.png')  # 加载图片
        createMap()  # 绘制地图

    pygame.quit()  # 退出 pygame
```

### 创建小鸟类

该类需要初始化很多参数，所以定义一个 `__init__()` 方法，用来初始化各种参数，包括鸟飞行的几种状态、飞行的速度、跳跃的高度等。然后定义 `birdUpdate()` 方法，该方法用于实现小鸟的跳跃和坠落。然后在主逻辑的轮询事件中添加键盘按下事件或鼠标单击事件，如：按下鼠标，使小鸟上升。最后在 `createMap()` 方法中，显示小鸟的图像。

```python
import sys
import pygame


class Bird(object):
    """定义一个鸟类"""
    def __init__(self):
        """定义初始化方法"""
        self.birdRect = pygame.Rect(65, 50, 50, 50)  # 鸟的矩形
        # 定义鸟的三种状态列表
        self.birdStatus = [
            pygame.image.load('images/bird-01.png'),
            pygame.image.load('images/bird-02.png'),
            pygame.image.load('images/bird-03.png')
        ]
        self.status = 0  # 默认飞行状态
        self.birdX = 120  # 鸟所在的 X 轴坐标
        self.birdY = 350  # 鸟所在的 Y 轴坐标
        self.jump = False  # 默认情况下小鸟自动降落
        self.jumpSpeed = 10  # 跳跃高度
        self.gravity = 5  # 重力
        self.dead = False  # 默认小鸟生命状态为活着

    def birdUpdate(self):
        """实现小鸟的上下移动"""
        if self.jump:  # 小鸟跳跃
            self.jumpSpeed -= 1  # 速度递减，上升越来越慢
            self.birdY -= self.jumpSpeed  # 鸟的 Y 坐标减小，小鸟上升
        else:  # 小鸟坠落
            self.gravity += 0.2  # 重力递增，下降越来越快
            self.birdY += self.gravity  # 鸟的 Y 坐标增加，小鸟下降

        self.birdRect[1] = self.birdY  # 更改 Y 轴位置


class Pipeline(object):
    """定义一个管道类"""
    def __init__(self):
        """定义初始化方法"""
        pass

    def updatePipeline(self):
        """实现管道的向左移动"""
        pass


def createMap():
    """定义创建地图的方法"""
    screen.fill((255, 255, 255))  # 填充颜色
    screen.blit(background, (0, 0))  # 填入到背景

    if Bird.dead:  # 显示小鸟，撞管道状态
        Bird.status = 2
    elif Bird.jump:  # 起飞状态
        Bird.status = 1

    screen.blit(Bird.birdStatus[Bird.status], (Bird.birdX, Bird.birdY))  # 设置小鸟的坐标
    Bird.birdUpdate()  # 鸟移动

    pygame.display.update()  # 更新显示


if __name__ == '__main__':
    """主程序"""
    pygame.init()  # 初始化 pygame
    size = width, height = 400, 650  # 设置窗口
    screen = pygame.display.set_mode(size)  # 显示窗口
    clock = pygame.time.Clock()  # 设置时钟

    Pipeline = Pipeline()  # 实例化管道类
    Bird = Bird()  # 实例化鸟类

    while True:  # 执行循环，确保窗口一直显示
        clock.tick(60)  # 每秒执行 60 次

        for event in pygame.event.get():  # 轮询事件
            if event.type == pygame.QUIT:
                sys.exit()
            if (event.type == pygame.KEYDOWN or event.type == pygame.MOUSEBUTTONDOWN) and not Bird.dead:
                Bird.jump = True  # 跳跃
                Bird.gravity = 5  # 重力
                Bird.jumpSpeed = 10  # 跳跃速度

        background = pygame.image.load('images/backgroud.png')  # 加载图片
        createMap()  # 绘制地图

    pygame.quit()  # 退出 pygame
```

上述代码在 Bird 类中设置了 `birdStatus` 属性，该属性是一个鸟类图片的列表，显示鸟类三种飞行状态，根据小鸟的不同状态加载相应的图片。在 `buildUpdate()` 方法中，为了达到较好的动画效果，使 `jumpSpeed` 和 `gravity` 两个属性逐渐变化。

### 创建管道类

创建管道类。在 `__init__()` 方法中初始化各种参数，包括设置管道的坐标，加载上下管道图片等。然后在 `updatePipline()` 方法中，定义管道向左移动的速度，并且当管道移除屏幕时，重新绘制下一组管道。最后在 `createMap()` 函数中显示管道。

```python
import sys
import pygame


class Bird(object):
    """定义一个鸟类"""
    def __init__(self):
        """定义初始化方法"""
        self.birdRect = pygame.Rect(65, 50, 50, 50)  # 鸟的矩形
        # 定义鸟的三种状态列表
        self.birdStatus = [
            pygame.image.load('images/bird-01.png'),
            pygame.image.load('images/bird-02.png'),
            pygame.image.load('images/bird-03.png')
        ]
        self.status = 0  # 默认飞行状态
        self.birdX = 120  # 鸟所在的 X 轴坐标
        self.birdY = 350  # 鸟所在的 Y 轴坐标
        self.jump = False  # 默认情况下小鸟自动降落
        self.jumpSpeed = 10  # 跳跃高度
        self.gravity = 5  # 重力
        self.dead = False  # 默认小鸟生命状态为活着

    def birdUpdate(self):
        """实现小鸟的上下移动"""
        if self.jump:  # 小鸟跳跃
            self.jumpSpeed -= 1  # 速度递减，上升越来越慢
            self.birdY -= self.jumpSpeed  # 鸟的 Y 坐标减小，小鸟上升
        else:  # 小鸟坠落
            self.gravity += 0.2  # 重力递增，下降越来越快
            self.birdY += self.gravity  # 鸟的 Y 坐标增加，小鸟下降

        self.birdRect[1] = self.birdY  # 更改 Y 轴位置


class Pipeline(object):
    """定义一个管道类"""
    def __init__(self):
        """定义初始化方法"""
        self.wallX = 400  # 管道在 X 轴坐标
        self.pineUp = pygame.image.load('images/pipeup.png')  # 加载上管道图片
        self.pineDown = pygame.image.load('images/pipedown.png')  # 加载下管道图片

    def updatePipeline(self):
        """实现管道的向左移动"""
        self.wallX -= 5  # 管道 X 轴坐标递减，即管道向左移动

        if self.wallX < -80:  # 当管道运行到一定位置，即小鸟飞越管道，分数加 1，并且重置管道
            self.wallX = 400


def createMap():
    """定义创建地图的方法"""
    screen.fill((255, 255, 255))  # 填充颜色
    screen.blit(background, (0, 0))  # 填入到背景

    screen.blit(Pipeline.pineUp, (Pipeline.wallX, 0))  # 显示管道，上管道坐标位置
    screen.blit(Pipeline.pineDown, (Pipeline.wallX, 500))  # 下管道坐标位置
    Pipeline.updatePipeline()  # 管道移动

    if Bird.dead:  # 显示小鸟，撞管道状态
        Bird.status = 2
    elif Bird.jump:  # 起飞状态
        Bird.status = 1

    screen.blit(Bird.birdStatus[Bird.status], (Bird.birdX, Bird.birdY))  # 设置小鸟的坐标
    Bird.birdUpdate()  # 鸟移动

    pygame.display.update()  # 更新显示


if __name__ == '__main__':
    """主程序"""
    pygame.init()  # 初始化 pygame
    size = width, height = 400, 650  # 设置窗口
    screen = pygame.display.set_mode(size)  # 显示窗口
    clock = pygame.time.Clock()  # 设置时钟

    Pipeline = Pipeline()  # 实例化管道类
    Bird = Bird()  # 实例化鸟类

    while True:  # 执行循环，确保窗口一直显示
        clock.tick(60)  # 每秒执行 60 次

        for event in pygame.event.get():  # 轮询事件
            if event.type == pygame.QUIT:
                sys.exit()
            if (event.type == pygame.KEYDOWN or event.type == pygame.MOUSEBUTTONDOWN) and not Bird.dead:
                Bird.jump = True  # 跳跃
                Bird.gravity = 5  # 重力
                Bird.jumpSpeed = 10  # 跳跃速度

        background = pygame.image.load('images/backgroud.png')  # 加载图片
        createMap()  # 绘制地图
    
    pygame.quit()  # 退出 pygame
```

上述代码中，在 `createMap()` 函数内，设置先显示管道，再显示小鸟，这样做的目的是为了当小鸟与管道图像重合时，小鸟的图像显示在上层，而管道的图像显示在底层。

### 计算得分

当小鸟飞过管道时，玩家得分加 `1`。这里对于飞过管道的逻辑做了简化处理：当管道移动到窗体左侧一定距离后，默认为小鸟飞过管道，使分数加 `1`，并显示在屏幕上。

```python
import sys
import pygame

from tkinter import font


class Bird(object):
    """定义一个鸟类"""
    def __init__(self):
        """定义初始化方法"""
        self.birdRect = pygame.Rect(65, 50, 50, 50)  # 鸟的矩形
        # 定义鸟的三种状态列表
        self.birdStatus = [
            pygame.image.load('images/bird-01.png'),
            pygame.image.load('images/bird-02.png'),
            pygame.image.load('images/bird-03.png')
        ]
        self.status = 0  # 默认飞行状态
        self.birdX = 120  # 鸟所在的 X 轴坐标
        self.birdY = 350  # 鸟所在的 Y 轴坐标
        self.jump = False  # 默认情况下小鸟自动降落
        self.jumpSpeed = 10  # 跳跃高度
        self.gravity = 5  # 重力
        self.dead = False  # 默认小鸟生命状态为活着

    def birdUpdate(self):
        """实现小鸟的上下移动"""
        if self.jump:  # 小鸟跳跃
            self.jumpSpeed -= 1  # 速度递减，上升越来越慢
            self.birdY -= self.jumpSpeed  # 鸟的 Y 坐标减小，小鸟上升
        else:  # 小鸟坠落
            self.gravity += 0.2  # 重力递增，下降越来越快
            self.birdY += self.gravity  # 鸟的 Y 坐标增加，小鸟下降

        self.birdRect[1] = self.birdY  # 更改 Y 轴位置


class Pipeline(object):
    """定义一个管道类"""
    def __init__(self):
        """定义初始化方法"""
        self.wallX = 400  # 管道在 X 轴坐标
        self.pineUp = pygame.image.load('images/pipeup.png')  # 加载上管道图片
        self.pineDown = pygame.image.load('images/pipedown.png')  # 加载下管道图片

    def updatePipeline(self):
        """实现管道的向左移动"""
        self.wallX -= 5  # 管道 X 轴坐标递减，即管道向左移动

        if self.wallX < -40:  # 当管道运行到一定位置，即小鸟飞越管道，分数加 1，并且重置管道
            global score
            score += 1
            self.wallX = 400


def createMap():
    """定义创建地图的方法"""
    screen.fill((255, 255, 255))  # 填充颜色
    screen.blit(background, (0, 0))  # 填入到背景

    screen.blit(Pipeline.pineUp, (Pipeline.wallX, 0))  # 显示管道，上管道坐标位置
    screen.blit(Pipeline.pineDown, (Pipeline.wallX, 500))  # 下管道坐标位置
    Pipeline.updatePipeline()  # 管道移动

    if Bird.dead:  # 显示小鸟，撞管道状态
        Bird.status = 2
    elif Bird.jump:  # 起飞状态
        Bird.status = 1

    screen.blit(Bird.birdStatus[Bird.status], (Bird.birdX, Bird.birdY))  # 设置小鸟的坐标
    Bird.birdUpdate()  # 鸟移动

    screen.blit(font.render('Score' + str(score), -1, (255, 255, 255)), (100, 50))
    pygame.display.update()  # 更新显示


if __name__ == '__main__':
    """主程序"""
    pygame.init()  # 初始化 pygame
    pygame.font.init()  # 初始化字体
    font = pygame.font.SysFont(None, 50)  # 设置默认字体和大小
    size = width, height = 400, 650  # 设置窗口
    screen = pygame.display.set_mode(size)  # 显示窗口
    clock = pygame.time.Clock()  # 设置时钟

    Pipeline = Pipeline()  # 实例化管道类
    Bird = Bird()  # 实例化鸟类
    score = 0  # 初始化分数

    while True:  # 执行循环，确保窗口一直显示
        clock.tick(60)  # 每秒执行 60 次

        for event in pygame.event.get():  # 轮询事件
            if event.type == pygame.QUIT:
                sys.exit()

            if (event.type == pygame.KEYDOWN or event.type == pygame.MOUSEBUTTONDOWN) and not Bird.dead:
                Bird.jump = True  # 跳跃
                Bird.gravity = 5  # 重力
                Bird.jumpSpeed = 10  # 跳跃速度

        background = pygame.image.load('images/backgroud.png')  # 加载图片
        createMap()  # 绘制地图

    pygame.quit()  # 退出 pygame
```

### 碰撞检测

当小鸟与管道碰撞时，小鸟颜色变为灰色，游戏结束，并显示总分数。在 `checkDead()` 函数中通过 `pygame.Rect()` 可以分别获取小鸟的矩形区域对象和管道的矩形区域对象，该对象有一个 `colliderect()` 方法可以判断两个矩形区域是否相撞。如果相撞，设置 `Bird.dead` 属性为 `True`。此外，当小鸟飞出窗体时，也设置 `Bird.dead` 属性为 `True`。最后用两行文字显示游戏得分。

```python
import sys
import pygame

from tkinter import font


class Bird(object):
    """定义一个鸟类"""
    def __init__(self):
        """定义初始化方法"""
        self.birdRect = pygame.Rect(65, 50, 50, 50)  # 鸟的矩形
        # 定义鸟的三种状态列表
        self.birdStatus = [
            pygame.image.load('images/bird-01.png'),
            pygame.image.load('images/bird-02.png'),
            pygame.image.load('images/bird-03.png')
        ]
        self.status = 0  # 默认飞行状态
        self.birdX = 120  # 鸟所在的 X 轴坐标
        self.birdY = 350  # 鸟所在的 Y 轴坐标
        self.jump = False  # 默认情况下小鸟自动降落
        self.jumpSpeed = 10  # 跳跃高度
        self.gravity = 5  # 重力
        self.dead = False  # 默认小鸟生命状态为活着

    def birdUpdate(self):
        """实现小鸟的上下移动"""
        if self.jump:  # 小鸟跳跃
            self.jumpSpeed -= 1  # 速度递减，上升越来越慢
            self.birdY -= self.jumpSpeed  # 鸟的 Y 坐标减小，小鸟上升
        else:  # 小鸟坠落
            self.gravity += 0.2  # 重力递增，下降越来越快
            self.birdY += self.gravity  # 鸟的 Y 坐标增加，小鸟下降

        self.birdRect[1] = self.birdY  # 更改 Y 轴位置


class Pipeline(object):
    """定义一个管道类"""
    def __init__(self):
        """定义初始化方法"""
        self.wallX = 400  # 管道在 X 轴坐标
        self.pineUp = pygame.image.load('images/pipeup.png')  # 加载上管道图片
        self.pineDown = pygame.image.load('images/pipedown.png')  # 加载下管道图片

    def updatePipeline(self):
        """实现管道的向左移动"""
        self.wallX -= 5  # 管道 X 轴坐标递减，即管道向左移动

        if self.wallX < -80:  # 当管道运行到一定位置，即小鸟飞越管道，分数加 1，并且重置管道
            global score
            score += 1
            self.wallX = 400


def createMap():
    """定义创建地图的方法"""
    screen.fill((255, 255, 255))  # 填充颜色
    screen.blit(background, (0, 0))  # 填入到背景

    screen.blit(Pipeline.pineUp, (Pipeline.wallX, 0))  # 显示管道，上管道坐标位置
    screen.blit(Pipeline.pineDown, (Pipeline.wallX, 500))  # 下管道坐标位置
    Pipeline.updatePipeline()  # 管道移动

    if Bird.dead:  # 显示小鸟，撞管道状态
        Bird.status = 2
    elif Bird.jump:  # 起飞状态
        Bird.status = 1

    screen.blit(Bird.birdStatus[Bird.status], (Bird.birdX, Bird.birdY))  # 设置小鸟的坐标
    Bird.birdUpdate()  # 鸟移动

    screen.blit(font.render('Score' + str(score), -1, (255, 255, 255)), (100, 50))
    pygame.display.update()  # 更新显示


def checkDead():
    # 上方管子的矩形位置
    upRect = pygame.Rect(
        Pipeline.wallX, 0,
        Pipeline.pineUp.get_width() - 10,
        Pipeline.pineUp.get_height()
    )

    # 下方管子的矩形位置
    downRect = pygame.Rect(
        Pipeline.wallX, 500,
        Pipeline.pineDown.get_width() - 10,
        Pipeline.pineDown.get_height()
    )

    if upRect.colliderect(Bird.birdRect) or downRect.colliderect(Bird.birdRect):  # 检测小鸟与上下方管子是否碰撞
        Bird.dead = True

    if not 0 < Bird.birdRect[1] < height:  # 检测小鸟是否飞出上下边界
        Bird.dead = True
        return True
    else:
        return False


def getResutl():
    final_text1 = "Game Over"
    final_text2 = "Your final score is：" + str(score)
    ft1_font = pygame.font.SysFont("Arial", 70)  # 设置第一行文字字体
    ft1_surf = font.render(final_text1, 1, (242, 3, 36))  # 设置第一行文字颜色
    ft2_font = pygame.font.SysFont("Arial", 50)  # 设置第二行文字字体
    ft2_surf = font.render(final_text2, 1, (253, 177, 6))  # 设置第二行文字颜色

    screen.blit(ft1_surf, [screen.get_width()/2 - ft1_surf.get_width()/2, 100])  # 设置第一行文字显示位置
    screen.blit(ft2_surf, [screen.get_width()/2 - ft2_surf.get_width()/2, 200])  # 设置第二行文字显示位置
    pygame.display.flip()  # 更新整个待显示的 Surface 对象到屏幕上


if __name__ == '__main__':
    """主程序"""
    pygame.init()  # 初始化 pygame
    pygame.font.init()  # 初始化字体
    font = pygame.font.SysFont(None, 50)  # 设置默认字体和大小
    size = width, height = 400, 650  # 设置窗口
    screen = pygame.display.set_mode(size)  # 显示窗口
    clock = pygame.time.Clock()  # 设置时钟

    Pipeline = Pipeline()  # 实例化管道类
    Bird = Bird()  # 实例化鸟类
    score = 0  # 初始化分数

    while True:  # 执行循环，确保窗口一直显示
        clock.tick(60)  # 每秒执行 60 次

        for event in pygame.event.get():  # 轮询事件
            if event.type == pygame.QUIT:
                sys.exit()
            
            if (event.type == pygame.KEYDOWN or event.type == pygame.MOUSEBUTTONDOWN) and not Bird.dead:
                Bird.jump = True  # 跳跃
                Bird.gravity = 5  # 重力
                Bird.jumpSpeed = 10  # 跳跃速度

        background = pygame.image.load('images/backgroud.png')  # 加载图片

        if checkDead():  # 检测小鸟生命状态
            getResutl()  # 如果小鸟死亡，显示游戏总分数
        else:
            createMap()  # 绘制地图

    pygame.quit()  # 退出 pygame
```

上述代码的 `checkDead()` 方法中，`upRect.colliderect(Bird.birdRect)` 用于检测小鸟的矩形区域是否与上面的管道的矩形区域相撞，`colliderent()` 函数的参数是另一个矩形区域对象。

