---
title: 容器类型的数据
icon: data-type
date: 2023-05-31
category: Languages
tag:
    - Python
---

Python 内置的数据类型如：序列（列表、元组等）、集合和字典等可以容纳多项数据，我们称它们为容器类型的数据。

## 序列

序列是一块用于存放多个值的连续内存空间，并且按一定顺序排列，每一个元素（值）都分配一个数字，称为索引或位置，通过该索引可以取出相应的值。序列结构主要有列表、元组、集合、字典和字符串。

::: tip
集合和字典不支持索引、切片、相加和相乘操作
:::

### 索引

序列中的每一个元素都有一个编号，也称为索引。这个索引是从 `0` 开始递增的，即下标为 `0` 表示第一个元素，下标为 `1` 表示第二个元素，以此类推。

符号、空格也会占一个元素。索引有正值索引和负值索引之分，正值索引（下标）是从前向后，默认从 `0` 开始的，而负值索引（下标）是从后向前，默认从 `-1` 开始的。

可以通过下标运算符访问序列中的元素，下标运算符是跟在容器数据后的一对中括号（`[]`），中括号带有参数，对于序列类型的数据，这个参数就是元素的索引序号。例如：

```python
Hello, W

元素1  元素2  元素3  元素4  元素5  元素6  元素7  元素8
  H     e      l      l     o      ,            W
  0     1      2      3     4      5     6      7      正值索引（下标索引序号）
 -8    -7     -6     -5    -4     -3    -2     -1      负值索引（下标索引序号）


a = "Hello, World!"

print(a[0])  # 输出结果：H
print(a[-1])  # 输出结果：!

# 若索引超过范围，则会报错
print(a[20])  # 输出结果：IndexError: string index out of range
```

### 切片

通给切片操作可以生成一个新的序列。

**语法格式**：`sname[start: end: step]`

- **sname**：表示序列的名称
- **start**：表示切片的开始位置（包括该位置），如果不指定，默认为 0
- **end**：表示切片的结束位置（不包括该位置），如果不知道，默认为序列的长度
- **step**：表示切片的步长，如果省略，默认为 1

例如：

```python
a = "Hello, World!"

print(a[1:3])  # 输出结果：el
print(a[:3])  # 输出结果：Hel
print(a[3:])  # 输出结果：lo, World!
print(a[1:-1])  # 输出结果：ello, World
print(a[-5:-1])  # 输出结果：World
print(a[:])  # 输出结果：Hello, World!
```

### 序列相加

支持两种类型的序列相加，即将两个序列相加，不会去除重复的元素，使用（`+`）运算符实现。

::: tip
不能将列表和元组相加，也不能将列表和字符串相加
:::

例如：

```python
a = "Hello,"
b = "World!"

print(a + b)  # 输出结果：Hello,World!
```

### 序列乘法

使用一个序列乘以数字 n 会生成一个新的序列。新序列的内容为原来序列被重复 n 次的结果。例如：

```python
a = "Hello, World!"
b = a * 3

print(b)  # 输出结果：Hello, World!Hello, World!Hello, World!
```

### 序列成员测试

如果检查正确，则输出 `True`，否则输出 `False`。

- **in**：使用 `in` 关键字检查某个元素是否包含在序列中。**语法格式**：`value in sequence`

    - **value**：表示要检查的元素
    - **sequence**：表示指定的序列

- **not in**：使用 `not in` 关键字检查某个元素是否不包含在序列中。**语法格式**：`value not in sequence`

    - **value**：表示要检查的元素
    - **sequence**：表示指定的序列

例如：

```python
a = "Hello, World!"

print("Hello" in a)  # 输出结果：True
print("Hello" not in a)  # 输出结果：False
```

### 计算序列的长度、最大值和最小值

提供了内置函数计算序列的长度、最大值和最小值。

- **len()**：序列的长度
- **max()**：序列的最大值（元素）
- **min()**：序列的最小值（元素）

例如：

```python
a = "Hello, World!"
b = '6546186638948'

print(len(a))  # 输出结果：13
print(len(b))  # 输出结果：13
print(max(a))  # 输出结果：r
print(max(b))  # 输出结果：9
print(min(a))  # 输出结果：空格
print(min(b))  # 输出结果：1
```

## 列表

列表是按特定顺序排列的元素组成的，是 Python 中内置的 **可变序列**，我们可以追加、插入、删除和修改列表中的元素。列表中所有元素都放在一对中括号中（`[]`），两个相邻元素之间使用逗号（`,`）分隔。可以将整数、实数、字符串、列表、元组等任何类型的内容放入到列表中，并且同一个列表中，元素类型可以不同，因为它们之间没有任何关系。

::: tip
列表中允许存在相同的元素
:::

### 创建列表

使用赋值运算符直接创建列表。例如：

```python
mylist = [10, 20, 30]
mylist01 = "Hello"

print(mylist)  # 输出结果：[10, 20, 30]
print(mylist01)  # 输出结果：['H', 'e', 'l', 'l', 'o']
```

创建空列表。例如：

```python
mylist = []

print(mylist)  # 输出结果：[]
```

创建数值列表。例如：

```python
mylist = list(range(10))

print(mylist)  # 输出结果：[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 访问列表元素

直接使用 `print()` 函数即可。例如：

```python
mylist = [10, 20, 30]

print(mylist[2])  # 输出结果：30
```

### 添加列表

通过使用列表对象的 `append()` 方法实现在列表的末尾添加元素。例如：

```python
mylist = [10, 20, 30]
mylist.append(40)

print(mylist)  # 输出结果：[10, 20, 30, 40]
```

通过使用列表对象的 `insert()` 方法实现在列表的指定位置添加元素。例如：

```python
mylist = [10, 20, 30]
mylist.insert(1, 40)

print(mylist)  # 输出结果：[10, 40, 20, 30]
```

通过使用列表对象的 `extend()` 方法实现将一个列表中的全部元素添加到另一个列表中。例如：

```python
mylist = [10, 20, 30]
mylist01 = [30, 40, 50]
mylist.extend(mylist01)

print(mylist)  # 输出结果：[10, 20, 30, 30, 40, 50]
```

### 修改列表

只需要通过索引获取该元素，然后再为其重新赋值即可。例如：

```python
mylist = [10, 20, 30]
mylist[1] = 40

print(mylist)  # 输出结果：[10, 40, 30]
```

### 删除列表元素

根据索引删除列表元素，通过 `del 语句` 实现。例如：

```python
mylist = [10, 20, 30]
del mylist[1]

print(mylist)  # 输出结果：[10, 30]
```

根据元素删除，通过 `remove()` 方法，如果指定的元素不存在将会报错。例如：

```python
mylist = [10, 20, 30]
mylist.remove(30)

# 指定元素不在列表中
mylist.remove(30)  # 输出结果：ValueError: list.remove(x): x not in list

print(mylist)  # 输出结果：[10, 20]
```

### 遍历列表

使用 for 循环遍历。例如：

```python
mylist = [10, 20, 30]

for i in mylist:
    print(i)


10  # 输出结果
20
30
```

使用 for 循环和 `enumerate()` 函数实现，可以同时输出索引值和元素内容。例如：

```python
mylist = [10, 20, 30]

for index, i in enumerate(mylist):
    print(index, i)


0 10  # 输出结果
1 20
2 30
```

### 对列表进行统计和计算

使用列表对象的 `count()` 方法可以获取指定元素在列表中出现的次数。例如：

```python
mylist = [10, 20, 30, 10, 50]
num = mylist.count(10)

print(num)  # 输出结果：2
```

使用列表对象的 `index()` 方法可以获取指定元素在列表中首次出现的索引位置，如果指定元素不存在将报错。例如：

```python
mylist = [10, 20, 30, 10, 50]
num = mylist.index(10)
num01 = mylist.index(60)

print(num)  # 输出结果：0

# 指定元素不在列表中
print(num01)  # 输出结果：ValueError: 60 is not in list
```

使用 `sum()` 函数用于统计数值列表中各元素的和。例如：

```python
mylist = [10, 20, 30, 10, 50]
total = sum(mylist)

print(total)  # 输出结果：120
```

### 对列表进行排序

使用列表对象的 `sort()` 方法可以对原列表中的元素进行排序，改变原有列表。例如：

```python
mylist = [20, 10, 50, 30]
mylist.sort()

print(mylist)  # 输出结果：[10, 20, 30, 50]
```

使用 `sorted()` 内置函数，可以对列表进行排序，不改变原有的列表。例如：

```python
mylist = [20, 10, 50, 30]
mylist01 = sorted(mylist)

print(mylist)  # 输出结果：[20, 10, 50, 30]
print(mylist01)  # 输出结果：[10, 20, 30, 50]
```

### 列表推导式

使用列表推导式可以快速生成一个列表，或者根据某个列表生成满足指定需求的列表。

生成指定范围的数值列表。例如：

```python
import random

mylist = [random.randint(10, 100) for i in range(10)]

print(mylist)  # 输出结果：[77, 45, 18, 14, 30, 58, 97, 88, 91, 83]
```

根据需求生成指定列表。例如：

```python
mylist = [1200, 5330, 2988, 6200, 1998, 8888]
newlist = [int(i * 0.5) for i in mylist]

print("原列表：", mylist)  # 输出结果：原列表： [1200, 5330, 2988, 6200, 1998, 8888]
print("原列表乘 0.5 后生成的新列表：", newlist)  # 输出结果：原列表乘 0.5 后生成的新列表： [600, 2665, 1494, 3100, 999, 4444]
```

从列表中选择符合条件的元素组成新的列表。例如：

```python
mylist = [1200, 5330, 2988, 6200, 1998, 8888]
newlist = [x for x in mylist if (x > 5000)]

print("原列表：", mylist)  # 输出结果：原列表： [1200, 5330, 2988, 6200, 1998, 8888]
print("原列表中大于 5000 生成的新列表：", newlist)  # 输出结果：原列表中大于 5000 生成的新列表： [5330, 6200, 8888]
```

::: tip
if 作用是用于判断，只有满足条件时，将满足条件的元素值，生成一个新的列表
:::

从列表中选择符合条件的元素组成新的列表，大于 5000 输出原有值，小于 5000 输出小于 5000。例如：

```python
mylist = [1200, 5330, 2988, 6200, 1998, 8888]
newlist = [x if (x > 5000) else "小于 5000" for x in mylist]

print("原列表：", mylist)  # 输出结果：原列表： [1200, 5330, 2988, 6200, 1998, 8888]
print("原列表中大于 5000 和 小于 5000 生成的新列表：", newlist)  # 输出结果：原列表中大于 5000 和 小于 5000 生成的新列表： ['小于 5000', 5330, '小于 5000', 6200, '小于 5000', 8888]
```

::: tip
`if...else` 作用的用于赋值，满足条件时，执行 if 前面的代码；不满足条件时，执行 else 后面的代码
:::

### 二维列表

二维列表中的信息以行和列的形式表示，第一个下标表示元素所在的行，第二个下标表示元素所在的列。常用的三种方法：

- 直接定义二维列表

    语法格式：

    ```python
    listname = [
        [元素11, 元素12, 元素13, ..., 元素1n],
        [元素21, 元素22, 元素23, ..., 元素2n],
        [元素31, 元素32, 元素33, ..., 元素3n],
        ...
        [元素n1, 元素n2, 元素n3, ..., 元素nn],
    ]
    ```

    - **listname**：表示生成的列表名称
    - **[元素11, 元素12, 元素13, ..., 元素1n]**：表示二维列表的第一行，也是一个列表。其中 “元素11, 元素12, 元素13, ..., 元素1n” 表示第一行中的列
    - **[元素21, 元素22, 元素23, ..., 元素2n]**：表示二维列表的第二行
    - **[元素31, 元素32, 元素33, ..., 元素3n]**：表示二维列表的第三行
    - **[元素n1, 元素n2, 元素n3, ..., 元素nn**]：表示二维列表的第 n 行

    例如：

    ```python
    listname = [
        ['千', '山', '鸟', '飞', '绝'],
        ['万', '径', '人', '踪', '灭'],
        ['孤', '舟', '蓑', '笠', '翁'],
        ['独', '钓', '寒', '江', '雪'],
    ]

    print(listname)  # 输出结果：[['千', '山', '鸟', '飞', '绝'], ['万', '径', '人', '踪', '灭'], ['孤', '舟', '蓑', '笠', '翁'], ['独', '钓', '寒', '江', '雪']]
    ```

- 使用嵌套的 for 循环创建

    每创建一行，行内再创建 5 个列表。例如：

    ```python
    arr = []

    for i in range(4):
        arr.append([])
        for j in range(5):
            arr[i].append(j)

    print(arr)  # 输出结果：[[0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4]]
    ```

- 使用列表推导式创建

    每创建一行，行内再创建 5 个列表。例如：

    ```python
    arr = [[j for j in range(5)] for i in range(4)]

    print(arr)  # 输出结果：[[0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4]]
    ```

使用二维列表输出不同版式的古诗。例如：柳宗元《江雪》。

```python
str1 = "千山鸟飞绝"
str2 = "万径人踪灭"
str3 = "孤舟蓑笠翁"
str4 = "独钓寒江雪"
verse = [list(str1), list(str2), list(str3), list(str4)]

print(('-' * 10), "横版", ('-' * 10))
for i in range(4):
    for j in range(5):
        if j == 4:
            print(verse[i][j])
        else:
            print(verse[i][j], end='')


print(('-' * 10), "竖版", ('-' * 10))
verse.reverse()
for i in range(5):
    for j in range(4):
        if j == 3:
            print(verse[j][i])
        else:
            print(verse[j][i], end='')
```

## 元组

元组（tuple）与列表类似，也是由一系列按特定顺序排列的元素组成，但是它是不可变序列。

### 创建元组

使用赋值运算符直接创建元组。例如：

```python
num = (10, 20, 30)

print(num)  # 输出结果：(10, 20, 30)
```

创建元组时，小括号（`()`）不是必须的，Python 中只要将一组元素值用逗号（`,`）分隔，默认就是元组。例如：

```python
num = 10, 20, 30

print(num)  # 输出结果：(10, 20, 30)
```

创建元组时，如果只有只有一个元素值，则需要在元素的后面加一个逗号（`,`）否则创建的不是元组。例如：

```python
num = 10,
num01 = 10

print(num)  # 输出结果：(10,)
print(num01)  # 输出结果：10
```

创建空元组。例如：

```python
mytuple = ()

print(mytuple)  # 输出结果：()
```

### 删除元组

使用 `del` 语句删除。例如：

```python
num = (10, 20, 30)

print(num)  # 输出结果：(10, 20, 30)

del num

print(num)  # 输出结果：NameError: name 'num' is not defined. Did you mean: 'sum'?，没有这个名称
```

### 访问元组

使用 `print()` 函数即可。例如：

```python
num = (10, 20, 30)

print(num)  # 输出结果：(10, 20, 30)
```

指定索引获取元组元素。例如：

```python
num = (10, 20, 30)

print(num[1])  # 输出结果：20
```

使用切片方式获取指定的元素。例如：

```python
num = (10, 20, 30)

print(num[:2])  # 输出结果：(10, 20)
```

### 修改元组

元组是不可变序列，所以不能对它单个元素值进行修改，但可以对元组重新进行赋值。例如：

```python
num = (10, 20, 30)

print(num)  # 输出结果：(10, 20, 30)

num[1] = 50

print(num)  # 输出结果：TypeError: 'tuple' object does not support item assignment，元组不支持指定元素重新赋值

num = (10, 50, 30)

print(num)  # 输出结果：(10, 50, 30)
```

使用加号（+）连接组合元组。例如：

```python
num = (10, 20, 30)
num01 = (40, 50, 60)
num02 = (num + num01)
num03 = (40, 50) + num
num04 = [40, 50] + num

print(num02)  # 输出结果：(10, 20, 30, 40, 50, 60)
print(num03)  # 输出结果：(40, 50, 10, 20, 30)
print(num04)  # 输出结果：TypeError: can only concatenate list (not "tuple") to list，不能将列表用连接符添加到元组
```

::: tip
元组连接时，连接的内容只能是元组，不能使用其它元素进行连接
:::

### 元组推导式

使用元组推导式可以快速生成一个元组，它的表现形式和列表推导式类似。

生成指定范围的数值列表。例如：

```python
import random

mytuple = (random.randint(10, 100) for i in range(10))
mytuple01 = (tuple(random.randint(10, 100) for i in range(10)))

print(mytuple)  # 输出结果：<generator object <genexpr> at 0x000001AA0BD8A2D0>
print(mytuple01)  # 输出结果：(36, 65, 71, 52, 86, 49, 85, 46, 47, 11)
```

::: tip
使用元组推导式生成的元组，需要使用 `tuple()` 函数转换为元组，否则生成的是一个生成器对象
:::

## 元组与列表的区别

- 列表属于可变序列，可以随时修改或者删除；元组属于不可变序列，其中的元素不可以修改，除非整体替换
- 列表可以使用 `append()`、`extend()`、`insert()`、`remove()` 和 `pop()` 等方法实现添加和修改列表元素，而元组没有这几个方法，所以不能向元组中添加、修改和删除元素
- 列表可以使用切片访问和修改列表中的元素；元组也支持切片，但只支持通过切片访问元组中的元素，不支持修改
- 元组比列表的访问和处理速度快
- 列表不能作为字典的键，而元组可以

## 字典

字典与列表类似，也是可变序列，不过列表是有序的可变序列，字典是无序的可变序列，保存的内容是以 “键-值” 对的形式存放的。

字典的特征：

- 通过键而不是通过索引来读取
- 字典是任意对象的无序集合
- 字典是可变的，并且可以任意嵌套
- 字典中的键必须唯一，如果键出现多次，则最后一个值会被记住
- 字典中的键必须不可变，可以使用数字、字符串或者元组，但不能使用列表

### 创建字典

通过 `key-value` 的方式创建。例如：

```python
mydict = {'zhangsan': '20', 'lisi': '24'}

print(mydict)  # 输出结果：{'zhangsan': '20', 'lisi': '24'}
```

创建空字典。例如：

```python
mydict = {}

或者

my_dict = dict()
```

使用 `zip()` 函数将已有的数据快速创建字典。例如：

```python
name = ['zhangsan', 'lisi', 'wangwu']
age = ['20', '24', '25']
mydict = dict(zip(name, age))

print(mydict)  # 输出结果：{'zhangsan': '20', 'lisi': '24', 'wangwu': '25'}
```

使用 dict 对象的 `fromkeys()` 方法创建值为 None 的字典。例如：

```python
name = ['zhangsan', 'lisi', 'wangwu']
mydict = dict.fromkeys(name)

print(mydict)  # 输出结果：{'zhangsan': None, 'lisi': None, 'wangwu': None}
```

使用已经存在的元组和列表创建字典。例如：

```python
name = ['zhangsan', 'lisi', 'wangwu']
name01 = ('zhangsan', 'lisi', 'wangwu')
age = ['20', '24', '25']
mydict = {name: age}
mydict01 = {name01: age}

print(mydict)  # 输出结果：TypeError: unhashable type: 'list'，无法处理 list 类型
print(mydict01)  # 输出结果：{('zhangsan', 'lisi', 'wangwu'): ['20', '24', '25']}
```

::: tip
使用这种方式创建字典，字典中的键（key）不能为列表
:::

### 添加字典元素

字典是可变序列，所以可以随时在字典中添加 “key-value”。例如：

```python
mydict = {'zhangsan': '20', 'lisi': '24'}

print(mydict)  # 输出结果：{'zhangsan': '20', 'lisi': '24'}

mydict['wangwu'] = '25'

print(mydict)  # 输出结果：{'zhangsan': '20', 'lisi': '24', 'wangwu': '25'}
```

在字典中 “键” 是唯一的，如果添加的新 “键” 已经存在，那么将使用新的值替换原来的 “键” 值。例如：

```python
mydict = {'zhangsan': '20', 'lisi': '24'}

print(mydict)  # 输出结果：{'zhangsan': '20', 'lisi': '24'}

mydict['zhangsan'] = '25'

print(mydict)  # 输出结果：{'zhangsan': '25', 'lisi': '24'}
```

### 删除字典

使用 `del` 命令删除整个字典。例如：

```python
mydict = {'zhangsan': '20', 'lisi': '24'}

print(mydict)  # 输出结果：{'zhangsan': '20', 'lisi': '24'}

del mydict

print(mydict)  # 输出结果：NameError: name 'mydict' is not defined. Did you mean: 'dict'?，没有这个名称
```

使用 `clear()` 方法将字典变为空字典。例如：

```python
mydict = {'zhangsan': '20', 'lisi': '24'}

print(mydict)  # 输出结果：{'zhangsan': '20', 'lisi': '24'}

mydict.clear()

print(mydict)  # 输出结果：{}
```

使用 `pop()` 方法删除并默认返回指定键（key）的元素，如果指定键（key）不存在，则报错或者指定返回内容。例如：

```python
mydict = {'zhangsan': '20', 'lisi': '24'}

print(mydict.pop('zhangsan'))  # 输出结果：20
print(mydict.pop('wangwu'))  # 输出结果：KeyError: 'wangwu'。没有指定的 key 值
print(mydict.pop('wangwu', "没有 wangwu 的年龄"))  # 输出结果：没有 wangwu 的年龄
```

### 访问字典

使用 `print()` 函数。例如：

```python
mydict = {'zhangsan': '20', 'lisi': '24'}

print(mydict)  # 输出结果：{'zhangsan': '20', 'lisi': '24'}
```

访问字典指定的元素，可以通过下标的方式实现，与列表和元组不同，这里的下标不是索引号，而是键（key）。例如：

```python
mydict = {'zhangsan': '20', 'lisi': '24'}

print(mydict['zhangsan'])  # 输出结果：20
```

使用 **if 语句** 对不存在的键进行处理。例如：

```python
mydict = {'zhangsan': '20', 'lisi': '24'}

print("wangwu 的年龄是：", mydict['wangwu'] if 'wangwu' in mydict else "字典里没有名字是 wangwu 的人")  # 输出结果：wangwu 的年龄是： 字典里没有名字是 wangwu 的人
```

使用字典对象的 `get()` 方法获取指定的键。例如：

```python
mydict = {'zhangsan': '20', 'lisi': '24'}

print("zhangsan 的年龄是：", mydict.get('zhangsan'))  # 输出结果：zhangsan 的年龄是： 20
print("wangwu 的年龄是：", mydict.get('wangwu', "字典里没有名字是 wangwu 的人"))  # 输出结果：wangwu 的年龄是： 字典里没有名字是 wangwu 的人
```

### 遍历字典

使用字典对象的 `items()` 方法可以获取字典的 “key-value” 对的列表，将各个元素以元组的方式输出。例如：

```python
mydict = {'zhangsan': '20', 'lisi': '24'}

for item in mydict.items():
    print(item)


('zhangsan', '20')  # 输出结果
('lisi', '24')
```

获取具体的每个键和值。例如：

```python
mydict = {'zhangsan': '20', 'lisi': '24'}

for key, value in mydict.items():
    print(key, "的年龄是", value)


zhangsan 的年龄是 20  # 输出结果
lisi 的年龄是 24
```

### 字典推导式

使用字典推导式可以快速的生成一个字典，和列表推导式类似。例如：

```python
import random

mydict = {i: random.randint(10, 100) for i in range(1, 5)}

print(mydict)  # 输出结果：{1: 61, 2: 51, 3: 75, 4: 30}
```

字典推导式也可以通过列表生成字典。例如：

```python
name = ['zhangsan', 'lisi']
age = ['20', '24']

mydict = {i: j + "岁" for i, j in zip(name, age)}

print(mydict)  # 输出结果：{'zhangsan': '20岁', 'lisi': '24岁'}
```

## 集合

Python 中的集合用于保存不重复的元素，如果有重复的元素，只保留一个，集合是无序序列，有可变集合（set）和不可变集合（fozenset）两种。

### 创建集合

直接使用 “`{}`” 创建集合。例如：

```python
myset = {10, 20, 30, 20, 40}

print(myset)  # 输出结果：{40, 10, 20, 30}
```

使用 `set()` 函数创建集合，`set()` 函数可以将列表、元组等其它可迭代的对象转换为集合。例如：

```python
myset = set([10, 20, 30, 20, 40])

print(myset)  # 输出结果：{40, 10, 20, 30}
```

创建空集合。例如：

```python
myset = set()

print(myset)  # 输出结果：set()
print(type(myset))  # 输出结果：<class 'set'>
```

::: tip
在创建空集合时，只能使用 `set()` 实现，不能使用 `{}`，因为 `{}` 表示创建一个空字典
:::

### 添加集合元素

使用 `add()` 方法向集合中添加元素。例如：

```python
myset = set([10, 20, 30, 40])
myset.add(50)

print(myset)  # 输出结果：{40, 10, 50, 20, 30}
```

### 删除集合元素

使用 `del` 语句删除整个集合。例如：

```python
myset = set([10, 20, 30, 40])
del myset

print(myset)  # 输出结果：NameError: name 'myset' is not defined，没有这个名称
```

使用 `pop()` 方法随机删除一个元素。例如：

```python
myset = set([10, 20, 30, 40])
myset.pop()

print(myset)  # 输出结果：{10, 20, 30}
```

使用 `remove()` 和 `discard()` 方法删除指定元素，但当删除的元素不存在时 `remove()` 方法会报错，`discard()` 方法不会报错。例如：

```python
myset = set([10, 20, 30, 40])
myset01 = set([10, 20, 30, 40])
myset.remove(10)
myset01.discard(20)
myset.remove(50)  # 输出结果：KeyError: 50。没有指定 key
myset01.discard(50)

print(myset)  # 输出结果：{40, 20, 30}
print(myset01)  # 输出结果：{40, 10, 30}
```

使用 `clear()` 方法清空集合。例如：

```python
myset = set([10, 20, 30, 40])
myset.clear()

print(myset)  # 输出结果：set()
```

::: tip
使用 `remove()` 和 `discard()` 方法时，最好先判断是否存在，可以使用 `in` 关键字实现。例如：
:::

```python
myset = set([10, 20, 30, 40])

print(50 in myset)  # 输出结果：False

if 50 in myset:
    myset.remove(50)
    print("已删除 50")
else:
    print("50 不存在")


50 不存在  # 输出结果
```

### 集合的交集、并集、差集和对称差集运算

进行交集运算使用 “`&`” 符号；并集运算使用 “`|`” 符号；差集运算使用 “`-`” 符号；对称差集运算使用 “`^`” 符号。例如：

```python
myset = {10, 20, 30, 40}
myset01 = {50, 60, 20, 30}

print("交集运算，在 myset 和 myset01 都存在的有：", myset & myset01)  # 输出结果：交集运算，在 myset 和 myset01 都存在的有： {20, 30}
print("并集运算，即在 myset 也在 myset01 的有：", myset | myset01)  # 输出结果：并集运算，即在 myset 也在 myset01 的有： {40, 10, 50, 20, 60, 30}
print("差集运算，只在 myset 不在 myset01 的有：", myset - myset01)  # 输出结果：差集运算，只在 myset 不在 myset01 的有： {40, 10}
print("对称差集运算，myset 和 myset01 中不相同的有：", myset ^ myset01)  # 输出结果：对称差集运算，myset 和 myset01 中不相同的有： {40, 10, 50, 60}
```