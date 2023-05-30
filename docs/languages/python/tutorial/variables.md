---
title: 变量
icon: variable
date: 2023-05-30
category: Languages
tag:
    - Python
---

变量是存放数据值的容器。

与其他编程语言不同，Python 没有声明变量的命令。

首次为其赋值时，才会创建变量。

语法格式：`variablename = value`。

字符串变量可以使用单引号或双引号进行声明。例如：

```python
my_name = 'TOM'  # 定义变量：TOM
schoolName = "存储数据"  # 定义变量：存储数据

print(my_name)  # 输出结果：TOM
print(schoolName)  # 输出结果：存储数据
```

## Python 变量命名规则

- 变量名必须以字母或下划线字符开头
- 变量名称不能以数字开头
- 变量名只能包含字母、数字字符和下划线（`A-z`、`0-9` 和 `_`）
- 变量名称区分大小写（`age`、`Age` 和 `AGE` 是三个不同的变量）

## 向多个变量赋值

Python 允许您在一行中为多个变量赋值。例如：

```python
x, y, z = "Orange", "Banana", "Cherry"

print(x)  # 输出结果：Orange
print(y)  # 输出结果：Banana
print(z)  # 输出结果：Cherry
```

## 全局变量

在函数外部创建的变量（如上述所有实例所示）称为全局变量。

全局变量可以被函数内部和外部使用。例如：

```python
x = "awesome"


def myfunc():
    print("Python is " + x)  # 输出结果：Python is awesome


myfunc()
```

如果在函数内部创建具有相同名称的变量，则该变量将是局部变量，并且只能在函数内部使用。具有相同名称的全局变量将保留原样，并拥有原始值。

例如：在函数内部创建一个与全局变量同名的变量。

```python
x = "awesome"


def myfunc():
    x = "fantastic"
    print("Python is " + x)  # 输出结果：Python is fantastic


myfunc()

print("Python is " + x)  # 输出结果：Python is awesome
```

## global 关键字

通常，在函数内部创建变量时，该变量是局部变量，只能在该函数内部使用。

要在函数内部创建全局变量，您可以使用 `global` 关键字。例如：

```python
def myfunc():
    global x
    x = "fantastic"


myfunc()

print("Python is " + x)  # 输出结果：Python is fantastic
```

