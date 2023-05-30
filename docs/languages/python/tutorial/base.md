---
title: 基础
icon: base
date: 2023-05-30
category: Languages
tag:
    - Python
---

## 标识符

标识符就是变量、函数、属性、类、模块等可以由程序员指定名称的代码元素。

构成标识符的统一命名规则：

- 区分大小写：`Myname` 与 `myname` 是两个不同的标识符
- 首字符可以是下画线（`_`）或字母，但不能是数字
- 除首字符外的其他字符必须是下画线、字母和数字
- 关键字不能作为标识符
- 不要使用 Python 的内置函数作为自己的标识符

## 关键字

关键字是由语言本身定义好的有特殊含义的代码元素，可以使用 `keyword` 内置函数打印出所有的关键字。关键字如下：

```python
import keyword  # 导入 keyword 函数

print(keyword.kwlist)  # 打印出所有的关键字
```

**输出结果：**

```text
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```

## 变量

在 Python 中为一个变量赋值的同时就声明了该变量，该变量的数据类型就是赋值数据所属的类型，该变量还可以接收其他类型的数据。

```python
x = 20

print(type(x))  # x 数据类型为 int

x = True

print(tyep(x))  # x 数据类型为 str
```

## 语句

Python 代码是由关键字、标识符、表达式和语句等构成的，语句是代码的重要组成部分。

在 Python 中，一行代码表示一条语句，在一般情况下语句结束时不加分号（`;`）。

## 代码注释

- 添加的注释应该有一定的意义，可以充分的解释代码的功能及用途
- 临时注释掉不想执行的代码

::: tip
在 Python 中三引号（`'''`）或（`"""`）是字符串定界符，如果三引号作为语句的一部分出现时，就不是注释，而是作为字符串输出
:::

1. 单行注释

    `#` 号位于行的开头，或者是代码最后加空格再写 `#` 号注释，`#` 号后面有一个空格。例如：

    ```python
    # print('Hello, World!')
    print('Hello, World!')  # 打印 Hello, World!
    ```

2. 多行注释
    
    使用（`'''`）或（`"""`）进行注释。例如：

    ```python
    '''
    第一行注释
    第二行注释
    第三行注释
    '''
    
    """
    第一行注释
    第二行注释
    第三行注释
    """

    print("""你好，我的名字叫张三""")  # 三引号内的内容作为字符串输出
    ```

3. 特殊注释

`# coding=utf-8` 或 `# -*- coding: utf-8 -*-` 该注释必须写在代码的第一行或者第二行，该注释告诉 Python 解释器该文件的编码集是 `UTF-8`，可以避免代码中的中文等文字无法解析的问题。

## 模块

Python 中一个模块就是一个文件，模块是保存代码的最小单位，在模块中可以声明变量、函数、属性和类等 Python 代码元素。

导入模块的方式：

- `import <模块名>`

    会导入模块中的所有代码元素，在访问时需要加模块名前缀。例如：

    ```python
    import keyword
    
    print(keyword.kwlist)
    ```

- `from <模块名> import <代码元素>`

    会导入模块中的指定代码元素，在访问时不需要加模块名前缀。例如：

    ```python
    from keyword import kwlist
    
    print(kwlist)
    ```

- `form <模块名> import <代码元素> as <代码元素别名>`

    会导入模块中的指定代码元素，在访问时不需要加模块名前缀，并设置代码元素别名，可以解决代码元素名称冲突。例如：

    ```python
    from keyword import kwlist as kwlist2
    
    kwlist = "Hello, World!"

    print(kwlist)
    print(kwlist2)
    ```

::: info
一个模块就是一个文件，在模块中封装了很多代码元素，在实际的项目开发过程中，避免不了会使用别人的模块，如果想导入所有代码元素，则使用 `import <模块名>` 语句；如果只是导入一个代码元素，则使用 `from <模块名> import <代码元素>` 语句；如果名称有冲突，则使用 `form <模块名> import <代码元素> as <代码元素别名>` 语句
:::

## 两个模块间的代码元素访问

在同一文件夹下创建两个模块 hello 和 world，即两个代码文件：hello.py 和 world.py

- world 模块的代码如下：

    ```python
    # -*- coding: utf-8 -*-
    # 代码文件：E:/SourceCode/Python/world.py

    x = "Hello"
    y = True
    z = 20.0
    ```

- hello 模块的代码如下：

    ```python
    # -*- coding: utf-8 -*-
    # 代码文件：E:/SourceCode/Python/hello.py

    import world
    from world import z
    from world import x as x2

    x = 100
    y = 20

    print(y)  # 访问当前模块变量 y
    print(world.y)  # 访问 world 模块变量 y
    print(z)  # 访问 world 模块变量 z
    print(x2)  # 访问 world 模块变量 x，x2 是 world 模块 x 的别名
    ```

