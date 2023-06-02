---
title: 函数
icon: functions
date: 2023-06-01
category: Languages
tag:
    - Python
---

## 函数的创建和调用

创建函数也称为定义函数，用于创建一个具有某种用途的工具。使用 `def` 关键字实现。

**语法格式：**

```python
def functionname([parameterlist]):
    ['''comments''']
    [functionbody]
```

- **functionname**：函数名称，在调用函数时使用
- **parameterlist**：可选参数，用于指定向函数中传递的参数，如果有多个参数，各参数间使用逗号 `,` 分割，如果不指定参数，则该函数没有参数，在调用时也不指定参数
- **comments**：可选参数，表示为函数指定注释
- **functionbody**：可选参数，用于指定函数体，该函数被调用后要执行的代码。如果函数没有返回值，可以使用 `return` 语句返回

调用函数也称为执行函数，如果把创建的函数理解为创建一个具有某种用途的工具，那么调用函数就是使用该工具。

**语法格式**：`functionname([parametersvalue])`

- **functionname**：函数名称，要调用的函数名必须是已创建的函数
- **parametersvalue**：可选参数，用于指定各个参数的值，如果有多个参数，各参数间使用逗号 `,` 分割；如果该函数没有参数，则直接写一对小括号 `()` 即可

例如：

```python
def rect_area(width, height):
    """
    功能：用于指定计算长方形的宽和高，并返回长方形的面积
    """

    area = width * height
    return area


r_area = rect_area(320, 80)

print("{0} x {1} 长方形的面积：{2:.2f}".format(320, 80, r_area))


# 输出结果
320 x 80 长方形的面积：25600.00
```

## 参数传递

在调用函数时，大多数情况下，主调函数和被调函数之间有数据传递关系，这就是有参数的函数形式。函数参数的作用是传递数据给函数使用，函数利用接收的数据进行具体的操作处理。

### 形式参数和实际参数

在使用函数时，经常会用到 **形式参数** 和 **实际参数**，二者都叫做参数，区别如下：

- **形式参数**：在定义函数时，函数名后面括号中的参数为 **形式参数**，简称 **形参**
- **实际参数**：在调用函数时，函数名后面括号中的参数为 **实际参数**，简称 **实参**

例如：

```python
def make_coffee(name="卡布奇诺"):
    return "制作一杯{0}咖啡".format(name)


coffee01 = make_coffee("拿铁")
coffee02 = make_coffee()

print(coffee01)  # 输出结果：制作一杯拿铁咖啡
print(coffee02)  # 输出结果：制作一杯卡布奇诺咖啡
```

实际参数的类型可以分为：

- **值传递**：当实际参数为不可变对象时，进行的是值传递。进行值传递后，改变形式参数的值，实际参数的值不变
- **引用传递**：当实际参数为可变对象时，进行的是引用传递。进行引用传递后，改变形式参数的值，实际参数的值也会改变

例如：

```python
def demo(obj):
    print("原值：", obj)
    obj += obj


print(('-' * 10), "值传递", ('-' * 10))

mot = "唯有在被追赶的时候，您才能真正地奔跑！"
print("函数调用前：", mot)

demo(mot)
print("函数调用后：", mot)

print(('-' * 10), "引用传递", ('-' * 10))

list01 = ["张三", "李四", "王五"]
print("函数调用前：", list01)

demo(list01)
print("函数调用后：", list01)


# 输出结果
---------- 值传递 ----------
函数调用前： 唯有在被追赶的时候，您才能真正地奔跑！
原值： 唯有在被追赶的时候，您才能真正地奔跑！
函数调用后： 唯有在被追赶的时候，您才能真正地奔跑！
---------- 引用传递 ----------
函数调用前： ['张三', '李四', '王五']
原值： ['张三', '李四', '王五']
函数调用后： ['张三', '李四', '王五', '张三', '李四', '王五']
```

### 位置参数

位置参数也称必备参数，是必须按照正确的顺序传到函数中。

::: tip
参数数量和参数位置必须与定义时一致
:::

例如：

```python
def rect_area(width, height):
    """
    功能：用于指定计算长方形的宽和高，并返回长方形的面积
    """

    area = width * height
    return area


r_area = rect_area(320, 80)

print("{0} x {1} 长方形的面积：{2:.2f}".format(320, 80, r_area))


# 输出结果
320 x 80 长方形的面积：25600.00
```

### 关键字参数

关键字参数是指使用形式参数的名字来确定参数值，通过这种方式指定实际参数时，不再需要与形式参数的位置完全一致。例如：

```python
def rect_area(width, height):
    """
    功能：用于指定计算长方形的宽和高，并返回长方形的面积
    """

    area = width * height
    return area


r_area = rect_area(width=320, height=80)

print("{0} x {1} 长方形的面积：{2:.2f}".format(320, 80, r_area))


# 输出结果
320 x 80 长方形的面积：25600.00
```

### 默认参数

在调用参数时，如果没有指定某个参数将抛出异常，为了解决这个问题，可以在定义函数时为形参指定默认值。

**语法格式：**

```python
def functionname(..., [parameter01=defaultvalue01]):
    [functionbody]
```

- **functionname**：函数名，调用函数时使用
- **parameter01=defaultvalue**：可选参数，用于指定向函数中传递的默认的形参
- **functionbody**：可选参数，用于指定函数体，该函数被调用后，要执行的代码

::: tip
在定义函数时，指定默认的形式参数必须在所有参数的最后，否则将产生语法错误，且默认参数必须指向不可变对象
:::

例如：

```python
def rect_area(width, height=40):
    """
    功能：用于指定计算长方形的宽和高，并返回长方形的面积
    """

    area = width * height
    return area


r_area = rect_area(320)

print("{0} x {1} 长方形的面积：{2:.2f}".format(320, 40, r_area))


# 输出结果
320 x 40 长方形的面积：12800.00
```

::: tip
在 Python 中可以使用 `functionname.__defaults__` 查看函数的默认值参数的当前值，其结果是一个元组；使用 `functionname.__doc__` 查看函数的注释信息。例如：

```python
def rect_area(width, height=40):
    """
    功能：用于指定计算长方形的宽和高，并返回长方形的面积
    """

    area = width * height
    return area


r_area = rect_area(320)

print("{0} x {1} 长方形的面积：{2:.2f}".format(320, 40, r_area))
print(rect_area.__defaults__)  # 输出结果：(40,)
print(rect_area.__doc__)  # 输出结果：功能：用于指定计算长方形的宽和高，并返回长方形的面积
```

:::

### 可变参数

可变参数也称为不定长参数，即传入函数中的实际参数可以是任意多个，主要有两种形式：

- **\*parameter**：表示接收任意多个实际参数并将其放到一个元组中
- **\*\*parameter**：表示接收任意多个类似关键字参数一样显示赋值的实际参数，并将其放到一个字典中

例如：

```python
def sum(*numbers):
    total = 0.0
    for number in numbers:
        total += number
    return total


print(sum(100.0, 20.0, 30.0))  # 输出结果：150.0
print(sum(30.0, 80.0))  # 输出结果：110.0
```

```python
def show_info(**info):
    print(('-' * 10), 'show_info', ('-' * 10))
    for key, value in info.items():
        print('{0} - {1}'.format(key, value))


show_info(name='Tony', age=18, sex=True)
show_info(sutdent_name='Tony', sutdent_no='1000')


# 输出结果
---------- show_info ----------
name - Tony
age - 18
sex - True
---------- show_info ----------
sutdent_name - Tony
sutdent_no - 1000
```

## 返回值

可以在函数体中使用 `return` 语句为函数指定返回值，该返回值可以是任意类型，并且无论 `return` 语句出现在函数的什么位置，只要得到执行就会直接结束函数。

**语法格式**：`return [value]`

- **value**：可选参数，用于指定要返回的值，可以返回一个值，也可以是多个值

例如：

```python
def sum(*numbers):
    total = 0.0
    for number in numbers:
        total += number
    return total


print(sum(100.0, 20.0, 30.0))  # 输出结果：150.0


def sum(*numbers):
    total = 0.0
    for number in numbers:
        total += number


print(sum(100.0, 20.0, 30.0))  # 输出结果：None
```

::: tip
当函数中没有 return 语句时，或者忽略了 return 语句的参数时，将返回 None 空值
:::

## 变量的作用域

### 局部变量

局部变量是指在函数内部定义并使用的变量，它只在函数内部有效。例如：

```python
def demo():
    x = 10
    print("函数内访问局部变量：", x)


demo()  # 输出结果：函数内访问局部变量： 10

print("函数外访问局部变量：", x)  # 输出结果：NameError: name 'x' is not defined。没有这个名称
```

### 全局变量

全局变量能够作用于函数内外。

在函数外定义变量。例如：

```python
x = 20


def demo():
    x = 10
    print("函数内访问全局变量：", x)


demo()  # 输出结果：函数内访问全局变量： 10

print("函数外访问全局变量：", x)  # 输出结果：函数外访问全局变量： 20
```

使用 `global` 关键字在函数内定义全局变量。例如：

```python
x = 20


def demo():
    global x
    x = 10
    print("函数内访问全局变量：", x)


demo()  # 输出结果：函数内访问全局变量： 10

print("函数外访问全局变量：", x)  # 输出结果：函数外访问全局变量： 10
```

## 匿名函数（lambda）

匿名函数是指没有名字的函数，应用在需要一个函数，但是又不想命名这个函数的场合，使用 `lambda` 表达式创建匿名函数。

**语法格式**：`result = lambda [arg01[, arg02[,... [, argn]]]]: expression`

- **result**：用于调用 `lambda` 表达式
- **[arg01[, arg02[,... [, argn]]]]**：可选参数，指定要传递的参数列表，多个参数间使用逗号 `,` 分隔
- **expression**：用于指定一个实现具体功能的表达式。如果有参数，那么在该表达式中将应用这些参数

::: tip
通常情况下，这样的函数只使用一次，使用 `lambda` 表达式时，需要定义一个变量，用于调用该 `lambda` 表达式
:::

例如：

```python
import math


def circlearea(r):
    result = math.pi*r*r
    return result


r = 10
print("半径为：", r, "圆的面积为：", circlearea(r))


# 输出结果
半径为： 10 圆的面积为： 314.1592653589793
```

**使用 lambda 表达式后：**

```python
import math

r = 10
result = lambda r: math.pi*r*r

print("半径为：", r, "圆的面积为：", result(r))


# 输出结果
半径为： 10 圆的面积为： 314.1592653589793
```

## 闭包

闭包是函数式编程的重要语法结构。一种编程范式，对代码进行提炼和抽象概括，使得重用性更高。

**闭包的条件：**

- 必须是一个内嵌函数
- 外部函数必须返回内部函数的函数对象
- 内部函数必须使用外部函数的局部变量

如果内部函数调用了外部函数的局部变量，并外部函数返回内部函数的函数对象（函数名）。例如：

```python
def fun1():
    a = 100

    def fun2():
        print(a)
        return "哈哈"

    return fun2


print(fun1()())


# 输出结果
100
哈哈
```

这就形成了闭包，闭包的作用是可以传递更少的形参，可以传递更多的实参——更加安全，间接性的访问内部函数。例如：

```python
def fun1(b):
    a = 100
    print(b)

    def fun2(c):
        print(c)
        return "哈哈"

    return fun2


print(fun1(200)(300))


# 输出结果
200
300
哈哈
```