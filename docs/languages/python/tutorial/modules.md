---
title: 模块
icon: module
date: 2023-06-01
category: Languages
tag:
    - Python
---

在 Python 中，一个扩展名为 `.py` 的文件就称为一个 **模块。**

通常情况下，把能够实现某一特定功能的代码放置在一个文件中作为一个模块，从而方便其它程序和脚本导入使用。另外使用模块也可以避免函数名和变量名冲突。

模块可以提高代码的可维护性和可用性。

## 自定义模块

自定义模块有两个作用：

- 规范代码，让代码更易于阅读
- 方便其它程序使用已经编写好的代码，提高开发效率

自定义模块主要分为两部分：**创建模块** 和 **导入模块。**

### 创建模块

创建模块时，可以将模块中相关的代码（变量定义和函数定义等）编写在一个单独的文件中，并且将该文件命名为 **模块名+.py** 的形式。

创建一个用于根据身高、体重计算 BMI 指数的模块，命名为 `bmi.py`，其中 `bmi` 为模块名，`.py` 为扩展名。例如：

```python
def fun_bmi(person, height, weight):
    """
    功能：根据身高和体重计算 BMI 指数
    :param person: 姓名
    :param height: 身高，单位：米
    :param weight: 体重，单位：千克
    """
    
    print(person + " 的身高：" + str(height) + " 米 \t体重：" + str(weight) + " 千克")
    
    bmi = weight / (height * height)
    print(person + " 的 BMI 指数为：" + str(bmi))


def fun_bmi_upgrade(*person):
    """
    功能：根据身高和体重计算 BMI 指数（升级版）
    :*param *person: 可变参数，该参数中需要传递带 3 个元素 列表，分别为：姓名、身高（单位：米）和体重（单位：千克）
    :return: 
    """
    # 此处省略了函数主体代码
```

### 使用 import 语句导入模块

使用模块需要先以模块的形式加载模块中的代码。

**语法格式**：`import modulename [as alias]`

- **modulename**：要导入的模块名
- **as alias**：如果模块名太长，可以给模块起一个别名，通过别名也可以使用模块

例如：

```python
import bmi   # 导入模块

bmi.fun_bmi("张三", 1.75, 120)  # 执行模块中的 fun_bmi 函数
```

::: tip
使用 import 语句导入模块时，模块名是区分字母大小写的
:::

### 使用 from...import 语句导入模块

在使用 `import` 语句导入模块时，每执行一条 `import` 语句都会创建一个新的命名空间（namespace），并且在该命名空间中执行与 `.py` 文件相关的所有语。在执行时，需在具体的变量、函数和类名前加上 **模块名.** 前缀。如果不想在每次导入模块时都创建一个新的命名空间，而是将具体的定义导入到当前命名空间中，可以使用 **from...import 语句**，使用 **from...import 语句** 导入模块后，不需要再添加前缀，直接通过具体的变量、函数和类名等访问即可。

**语法格式**：`from modulename import member`

- **modulename**：模块名，区分字母大小写
- **member**：指定要导入的变量、函数或者类等，可以同时导入多个定义，各个定义之间用逗号 `,` 分隔，也可以使用 `*` 号

::: tip
在使用 **from...import 语句** 导入模块中的定义时，需要保证所导入的内容在当前的命名空间中是唯一的，否则将出现冲突，后导入的同名变量、函数或者类会覆盖先导入的
:::

例如：导入两个包括同名的函数模块。

```python
"""
创建矩形模块，对应的文件名为 rectangle.py
"""

def girth(width, height):
    """
    功能：计算矩形周长
    :param widgh: 宽度
    :param height: 高
    :return:
    """

    return (width + height) * 2


def area(width, height):
    """
    功能：计算矩形面积
    :param width: 宽度
    :param height: 高
    :return:
    """

    return width * height


if __name__ == '__main__':
    print(area(10, 20))

"""
创建圆形模块，对应的文件名 circular.py
"""

import math

PI = math.pi


def girth(r):
    """
    功能：计算圆形周长
    :param r: 半径
    :return:
    """

    return round(2 * PI * r, 2)


def area(r):
    """
    功能：计算圆形面积
    :param r: 半径
    :return:
    """

    return round(PI * r * r, 2)


if __name__ == '__main__':
    print(girth(10))

"""
创建 computc.py 文件，导入矩形模块和圆形模块
"""

from rectangle import *  # 使用 from...import 导入
from circular import *

if __name__ == '__main__':
    print("矩形的周长为；", girth(10, 20))  # 输出结果：TypeError: girth() takes 1 positional argument but 2 were given。参数为 1 个，但指定了 2 个参数
    print("圆形的周长为：", girth(10))  # 输出结果：圆形的周长为： 62.83


import rectangle as r  # 使用 import 语句导入
import circular as c

if __name__ == '__main__':
    print("矩形的周长为：", r.girth(10, 20))  # 输出结果：矩形的周长为： 60
    print("圆形的周长为：", c.girth(10))  # 输出结果：圆形的周长为： 62.83
```

### 模块搜索目录

当使用 import 语句导入模块时，默认情况下，会按照以下顺序进行查找：

1. 在当前目录（即执行的 Python 脚本文件所在的目录）下查找
2. 到 PYTHONATH（环境变量）下的每个目录中查找
3. 到 Python 的默认安装目录下查找

以上各个目录的具体位置保存在标准模块 `sys` 的 `sys.path` 变量中。可以通过以下代码输出具体的目录：

```python
import sys

print(sys.path)  # 输出结果：['E:\\SourceCode\\Python\\PythonProject', 'E:\\SourceCode\\Python\\PythonProject', 'E:\\Software\\PyCharm\\PyCharm 2022.1.2\\plugins\\python\\helpers\\pycharm_display', 'E:\\Software\\Python3\\python310.zip', 'E:\\Software\\Python3\\DLLs', 'E:\\Software\\Python3\\lib', 'E:\\Software\\Python3', 'E:\\Software\\PyCharm\\pythonProject\\venv', 'E:\\Software\\PyCharm\\pythonProject\\venv\\lib\\site-packages', 'E:\\Software\\PyCharm\\PyCharm 2022.1.2\\plugins\\python\\helpers\\pycharm_matplotlib_backend']
```

以下三种方法，添加指定模块目录到 `sys.path`：

- **临时添加**

    只在当前执行文件的窗口有效，窗口关闭后失效。例如：

    ```python
    import sys

    sys.path.append("E:\\SourcdCode\\Python\\demo")
    ```

- **增加 .pth 文件**（推荐）

    通过该方法添加的目录只在当前版本的 Python 中有效，并且创建完成后，要重新打开要执行的 Python 文件。

    例如：在 Python 安装目录下的 `Lib\site-packages` 子目录中，创建扩展名为 `.pth` 文件，在该文件中添加要导入模块所在的目录。

    ```pth
    E:\\SourcdCode\\Python\\demo
    ```

- **在 PYTHONPATH 环境变量中添加**

    通过该方法添加的目录可以再不同版本的 Python 中共享，并且创建完成后，要重新打开要执行的 Python 文件。

    例如：打开 **环境变量** 框，如果没有 **PYTHONPATH 系统变量**，则需要先创建一个，否则直接选中 **PYTHONPATH 系统变量**，再点击 **编辑** 按钮，并且再弹出的对话框 **变量值** 文本中添加新的模块目录

## 以主程序的形式执行

```python
"""
创建名为 christmastree 模块
"""

pinetree = "我是一颗松树"


def fun_christmastree():
    """
    功能：一个梦
    :return:
    """

    pinetree = "挂上彩灯、礼物...我变成一颗圣诞树\n"
    print(pinetree)


print("\n下雪了...\n")
print(('-' * 20), "开始做梦", ('-' * 20))
fun_christmastree()
print(('-' * 20), "梦醒了...", ('-' * 20))
pinetree = "我身上落满雪花，" + pinetree
print(pinetree)

"""
创建名为 main.py 的文件，导入 christmastree 模块并执行
"""

import christmastree

print(christmastree.pinetree)


下雪了...  # 输出结果
-------------------- 开始做梦 --------------------
挂上彩灯、礼物...我变成一颗圣诞树
-------------------- 梦醒了... --------------------
我身上落满雪花，我是一颗松树
我身上落满雪花，我是一颗松树
```

导入模块后，不仅输出了全局变量的值，而且模块中原有的测试代码也被执行了，这个结果不是想要的。在模块中将原本直接执行的测试代码放在一个 if 语句中，修改后的代码：

```python
"""
创建名为 christmastree 模块
"""

pinetree = "我是一颗松树"


def fun_christmastree():
    """
    功能：一个梦
    :return:
    """

    pinetree = "挂上彩灯、礼物...我变成一颗圣诞树\n"
    print(pinetree)


if __name__ == '__main__'  # 使用此方法时，下面的语句在导入到其他文件中时不执行
    print("\n下雪了...\n")
    print(('-' * 20), "开始做梦", ('-' * 20))
    fun_christmastree()
    print(('-' * 20), "梦醒了...", ('-' * 20))
    pinetree = "我身上落满雪花，" + pinetree
    print(pinetree)

"""
创建名为 main.py 的文件，导入 christmastree 模块并执行
"""

import christmastree

print(christmastree.pinetree)  # 输出结果：我是一颗松树
```

::: tip
在每个模块的定义中都包括一个记录模块名称的变量 `__name__`，程序可以检查该变量，以确定它们在哪个模块中执行。如果一个模块不是被导入到其它程序中执行，那么它可能在解释器的顶级模块中执行。顶级模块的 `__name__` 变量的值为 `__main__`
:::

## Python 中的包

包是一个分层次的目录结构，它将一组功能相近的模块组织在一个目录下。这样即可以起到规范代码的作用，又能避免模块名重名引起的冲突。简单理解就是 **文件夹**，只不过在该文件夹下必须存在一个名称为 `__init__.py` 的文件。

### 包结构

先创建名为 `shop` 项目，然后在该包下又创建了 `admin`、`home` 和 `templates` 包和一个 `manage.py` 的文件，最后在每个包中，又创建了相应的模块。

```text
shop  # 项目名
├── admin  # 用于保存后台文件的包
│   ├── forms.py
│   ├── __init__.py
│   └── views.py
├── home  # 用于保存前台文件的包
│   ├── forms.py
│   ├── __init__.py
│   └── views.py
├── templates  # 用于保存模板文件的包
│   ├── __init__.py
│   └── models.py
└── manage.py  # 入口程序
```

### 创建和使用包

创建包，实际上就是创建一个文件夹，并且在该文件夹中创建一个名称为 `__init__.py` 的文件。`__init__.py` 文件是一个模块文件，模块名为对应的包名。例如：在 `settings` 包中创建的 `__init__.py` 文件，对应的模块名为 `settings`。在 `__init__.py` 文件中可以不写任何代码，也可以编写一些 Python 代码，在 `__init__.py` 文件中所编写的代码，在导入包时会自动执行。

1. 创建名为 `settings` 的文件夹
2. 在 `settings` 文件夹中创建 `__init__.py` 文件
3. 在 `settings` 包中创建名为 `size` 的模块，在模块中定义两个变量。例如：

    ```python
    width = 800
    height = 600
    ```

在创建包之后就可以在包中创建相应的模块，然后再使用 `import` 语句从包中加载模块，加载模块通常有以下三种方式：

- 通过 **import + 完整包名 + 模块名** 形式加载指定模块

    通过该方法导入模块，在使用时需要在变量名前加入 `settings.size` 前缀。例如：

    ```python
    import settings.size

    if __name__ == '__main__':
        print("宽度：", settings.size.width)  # 输出结果：宽度： 800
        print("高度：", settings.size.height)  # 输出结果：高度： 600
    ```

- 通过 **from + 完整包名 + import + 模块名** 形式加载指定模块

    通过该方法导入模块，在使用时不需要带包前缀，但是需要带模块名。例如：

    ```python
    from settings import size

    if __name__ == '__main__':
        print("宽度：", size.width)  # 输出结果：宽度： 800
        print("高度：", size.height)  # 输出结果：高度： 600
    ```

- 通过 **from + 完整包名 + 模块名 + import + 定义名** 形式加载指定模块

    通过该方法导入模块的函数、变量或类后，在使用时直接使用函数、变量或类名即可。例如：

    ```python
    from settings.size import width, height

    if __name__ == '__main__':
        print("宽度：", width)  # 输出结果：宽度： 800
        print("高度：", height)  # 输出结果：高度： 600
    ```

    ::: tip
    通过 **from + 完整包名 + 模块名 + import + 定义名** 形式加载指定模块时，可以使用 `*` 号代替定义名，表示加载该模块下的全部定义
    :::

定义 `size` 模块，在该模块中定义两个保护类型的全局变量，定义 `change()` 函数，用于修改两个全局变量的值，再定义两个函数，分别用于获取两个保护类型的全局变量。例如：

```python
_width = 800
_height = 600


def change(w, h):
    global _width
    _width = w
    global _height
    _height = h


def getwidth():
    global _width
    return _width


def getheight():
    global _height
    return _height
```

在 `settings` 包的上层目录创建名为 `main.py` 的文件，在该文件中导入 `settings` 包下的 `size` 模块的全部定义。例如：

```python
from settings.size import *

if __name__ == '__main__':
    change(1024, 768)
    print("宽度：", getwidth())  # 输出结果：宽度： 800
    print("高度：", getheight())  # 输出结果：高度： 600
```

## 引入其它模块

在 Python 中，除了可以自定义模块外，还可以引用其它模块，主要包括使用标准模块和第三方模块。

### 导入标准模块

直接使用 import 语句导入 Python 文件中即可，导入后通过模块名调用其提供的函数。例如：

```python
import random

print(random.randint(0, 10))  # 输出结果：7
```

### 使用第三方模块

可以在 Python 官方推出的 <http://pypi.python.org/pypi> 中找到第三方模块。使用第三方模块，需要先下载并安装该模块，然后就可以像使用标准模块一样导入并使用了。

下载和安装第三方模块可以使用 Python 提供的 `pip` 命令实现。

**语法格式**：`pip <command> [modulename]`

- **command**：指定要执行的命令。常用的参数值有 `install`（用于安装第三方模块）、`uninstall`（用于卸载已经安装的第三方模块）、`list`（用于显示已经安装的第三方模块）等
- **modulename**：可选参数，用于指定要安装或者卸载的模块名，当 `command` 为 `install` 或 `uninstall` 时不能忽略

例如：

```bash
pip install numpy  # 安装 numpy 模块
```

