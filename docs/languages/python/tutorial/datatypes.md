---
title: 数据类型
icon: data-type
date: 2023-05-30
category: Languages
tag:
    - Python
---

在编程中，数据类型是一个重要的概念。

变量可以存储不同类型的数据，并且不同类型可以执行不同的操作。

## 数据类型

### 整数类型（int）

- **十进制表示方式**：`0` 不能作为十进制数的开头。如：`20`
- **二进制表示方式**：以阿拉伯数字 `0` 与英文字母 `B（或 b）`作为前缀。如：`0B1010`、`0b1010`
- **八进制表示方式**：以阿拉伯数字 `0` 与英文字母 `O（或 o）`作为前缀。如：`0O34`、`0o34`
- **十六进制表示方式**：以阿拉伯数字 `0` 与英文字母 `X（或 x）`作为前缀。如：`0X1c`、`0x1c`

例如：

```python
my_int = 1

print(type(my_int))  # 输出结果：<class 'int'>
```

### 浮点类型（float）

在科学计数法中使用 `E（或 e）`表示乘以 `10` 的几次方。例如：**1e2** 表示 **10^2^**，1 乘 10 的 2 次方。例如：

```python
my_float = 1.1
my_float01 = 1e2

print(type(my_float))  # 输出结果：<class 'float'>
print(my_float01)  # 输出结果：100.0，表示 1 乘 10 的 10 次方
```

### 复数类型（complex）

整数和浮点数在数学中统称为实数，与实数对应的是复数，复数在数学中被表示为：`a+bi`，其中 `a` 被称为实部，`b` 被称为虚部，`i` 被称为虚数单位。例如：

```python
my_float = 4 + 4.5j

print(type(my_float))  # 输出结果：<class 'complex'>
```

### 字符串类型（str）

::: tip
字符串类型数据都要带引号
:::

例如：

```python
my_str = 'Hello, World!'

print(type(my_str))  # 输出结果：<class 'str'>
```

### 布尔类型（bool）

- 通常判断使用，布尔型有两个取值 `True` 和 `False`
- 只有以下几种情况值是 `False`，其它对象在 `if` 或 `while` 语句中都为真

    - `False` 或 `None`
    - 数值中的零，包括 `0`、`0.0`、`虚数 0`
    - 空序列，包括字符串、空元组、空列表、空字典
    - 自定义对象的实例，该对象的 `__bool__` 方法返回 `False` 或 `__len__` 方法返回 `0`

例如：

```python
my_bool = True

print(type(my_bool))  # 输出结果：<class 'bool'>
```

### 列表（list）

例如：

```python
my_list = [10, 20, 30]

print(type(my_list))  # 输出结果：<class 'list'>
```

### 元组（tuple）

例如：

```python
my_tuple = (10, 20, 30)

print(type(my_tuple))  # 输出结果：<class 'tuple'>
```

### 集合（set）

例如：

```python
my_set = {10, 20, 30}

print(type(my_set))  # 输出结果：<class 'set'>
```

### 字典（dict）

例如：

```python
my_dict = {'name': 'Tom', 'age': '18'}

print(type(my_dict))  # 输出结果：<class 'dict'>
```

## 数字类型的相互转换

在 Python 的数字类型中，除复数外，其他三种数字类型如：整数、浮点和布尔值都可以相互转换，分为 **隐式类型的转换** 和 **显式类型的转换。**

### 隐式类型转换

数字之间可以进行数学计算，在进行数学计算时若数字类型不同，则会发生隐式类型的转换。

|  操作数 1 的类型  |  操作数 2 的类型  |  转换后的类型  |
|  :----:  |  :----:  |  :----:  |
|  布尔值  |  整数  |  整数  |
|  布尔值、整数  |  浮点  |  浮点  |

例如：

```python
a = 1 + True
print(a)  # 输出结果：2。True 被转换为整数 1

a = 1 + False
print(a)  # 输出结果：1。False 被转换为整数 0

a = 1.0 + 1
print(a)  # 输出结果：2.0。整数 1 被转换为浮点数 1.0

a = 1.0 + True
print(a)  # 输出结果：2.0。True 被转换为浮点数 1.0
```

### 显示类型转换

除复数外，其他三种数字类型如：整数、浮点和布尔值都有自己的转换函数，分别是 `int()`、`float()` 和 `bool()` 函数。例如：

```python
# 将布尔值 False 转换为整数 0
print(int(False))  # 输出结果：0

# 将浮点数 0.6 转换为整数 0
print(int(0.6))  # 输出结果：0

# float(5) 将整数 5 转换为浮点数 5.0
print(float(5))  # 输出结果：5.0

# 将布尔值 False 转换为浮点数 0.0
print(float(False))  # 输出结果：0.0

# 将整数 5 转换为布尔值 True
print(bool(5))  # 输出结果：True

# 将浮点数 0.6 转换为布尔值 True
print(bool(0.6))  # 输出结果：True
```
