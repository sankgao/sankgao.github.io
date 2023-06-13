---
title: 函数
icon: functions
date: 2023-06-06
category: Languages
tag:
    - Python
---

函数不属于任何类，可以直接调用。例如：`list(iter)`

## print()

`print()` 内置函数，用于输出指定内容，默认 `print()` 输出内容后换行，如果要在一行显示，需在 `print()` 中用 `,` 号分割。

**语法格式**：`print(objects, sep=' ', end='\n', file=sys.stdout)`

- **objects**：表示输出的对象
- **sep**：用来间隔多个对象。默认是空格
- **end**：用来设定以什么结尾。默认值是换行符 `\n`
- **file**：要写入的文件对象

::: tip
`print()` 默认输出后，会进行换行 `\n`，如果想更改，可以使用 `end=""` 进行更改

`print()` 括号内打印字符时需要用单引号（`'`）或双引号（`"`）引用，引号必须是英文下的引号，中文会报语法错误
:::

例如：

```python
x = 10
y = 20

print("Hello, World!")
print(x, y)
print(x, y, sep="; ")
print(x, end="...")
print(y)


# 输出结果
Hello, World!
10 20
10; 20
10...20
```

## input()

`input()` 内置函数，用于输入指定内容，输出为字符串类型。

**语法格式**：`input("object")`

- **object**：表示用于输入提示的内容

例如：

```python
a = input("请输入密码： ")  # 将输入的内容赋值给 a

print(a)
print(type(a))


# 输出结果。输入任意字符，如：123
请输入密码： 123
123
<class 'str'>
```

## len()

`len()` 内置函数，用于返回字符串、列表、字典、元组等的长度。

**语法格式**：`len(object)`

- **object**：要计算的字符串、列表、字典、元组等的变量名

::: tip
标点符号和空格也算一个长度
:::

例如：

```python
a = "Hello, World!"

print(len(a))  # 输出结果：13
```

## range()

`range()` 内置函数，用于遍历数字序列。

**语法格式**：`range(start, stop, step)`

- **start**：值的是开始下标。`range` 序列里面的所有元素都有下标，第一个元素的下标是 `0`，所以，默认是从 `0` 开始
- **stop**：是结束位置。结束的位置下标为（元素个数 `-1`）。例如：`range` 里面有 `4` 个元素，那么结束下标最大为 `3`，大于 `3` 则跳出 `range`
- **step**：是步长，如果 `step` 是 `2`，那么每次会隔开 `1` 个元素，默认步长为 `1`，即每个元素都会取到

例如：

```python
for i in range(0, 5):
    print(i)


# 输出结果
0
1
2
3
4
```

## type()

`type()` 内置函数，如果您只有第一个参数则返回对象的类型，三个参数返回新的类型对象。

**语法格式**：`class type(name, bases, dict)`

- **name**：类的名称
- **bases**：基类的元组
- **dict**：字典，类内定义的命名空间变量

例如：

```python
num = 20

print(type(num))  # 输出结果：<class 'int'>


class X(object):
    a = 1


X = type('X', (object,), dict(a=1))

print(X)  # 输出结果：<class '__main__.X'>
```

## isinstance()

`isinstance()` 内置函数，用来判断数据类型是否是相对应的类型，它返回的是布尔值（`True` 或 `False`）。

**语法格式**：`isinstance(object, type)`

- **object**：表示输入的对象
- **type**：判断的类型

例如：

```python
num = 20
n = isinstance(num, int)

print(n)  # 输出结果：True
```

## id()

`id()` 内置函数，用于返回变量所指的内存地址。

**语法格式**：`id(object)`

- **object**：表示输入的对象

例如：

```python
num = num01 = 20

print(id(num))  # 输出结果：2689225392976
print(id(num01))  # 输出结果：2689225392976
```

## list()

`list()` 内置函数，用于将序列转换为列表。

**语法格式**：`list(object)`

- **object**：待转换为列表的数据类型

例如：

```python
a = {10, 20, 30}
b = list(a)

print(type(a))  # 输出结果：<class 'set'>
print(b)  # 输出结果：[10, 20, 30]
print(type(b))  # 输出结果：<class 'list'>
```

## tuple()

`tuple()` 内置函数，用于将序列转换为元组。

**语法格式**：`tuple(object)`

- **object**：待转换为元组的数据类型

例如：

```python
a = [10, 20, 30]
b = tuple(a)

print(type(a))  # 输出结果：<class 'list'>
print(b)  # 输出结果：(10, 20, 30)
print(type(b))  # 输出结果：<class 'tuple'>
```

## str()

`str()` 内置函数，用于将序列转换为字符串。

**语法格式**：`str(object)`

- **object**：待转换为字符串的数据类型

例如：

```python
a = 2135
b = str(a)

print(type(a))  # 输出结果：<class 'int'>
print(b)  # 输出结果：2135
print(type(b))  # 输出结果：<class 'str'>
```

## bool()

`bool()` 内置函数，用于评估任何值，并返回 `True` 和 `False`。

**语法格式**：`bool(object)`

- **object**：待转换为布尔值的数据类型

::: tip
- 任何字符串都是 `True`，空字符串除外。任何数字都是 `True`，除了 `0`。任何列表、元组、集合和字典都是 `True`，空的除外。  
- `False` 除了空值（例如：`()`、`[]`、`{}`、`""`、 数字 `0`）之外，计算为 `None` 的值。当然，结果为 `False`。
:::

例如：

```python
print(bool("张三"))  # 输出结果：True
print(bool())  # 输出结果：False
```

## max()

`max()` 内置函数，用于返回元素中最大值，字符类型取字母表排序的靠后字母。

**语法格式**：`max(object)`

- **object**：传入可迭代对象

::: tip
字母表中大写在前，小写在后
:::

例如：

```python
a = "Hello, World!"
b = '6546186638948'

print(max(a))  # 输出结果：r
print(max(b))  # 输出结果：9
```

## min()

`min()` 内置函数，用于返回元素中最小值，字符类型取字母表排序的靠后字母。

**语法格式**：`min(object)`

- **object**：传入可迭代对象

::: tip
空格比字母值还要小
:::

例如：

```python
a = "Hello, World!"
b = '6546186638948'

print(max(a))  # 输出结果：空格
print(max(b))  # 输出结果：1
```

## enumerate()

`enumerate()` 内置函数，用于将序列组合为一个索引序列，多用于在 for 循环中，可以同时输出索引值和元素内容。

**语法格式**：`enumerate(object, start)`

- **object**：传入可迭代对象
- **start**：指定索引的起始值

例如：

```python
mylist = [10, 20, 30]

for index, i in enumerate(mylist):
    print(index, i)


# 输出结果
0 10
1 20
2 30
```

## lambda

`lambda` 内置函数，用于创建 `lambda` 函数。

**语法格式**：`result = lambda [arg01[, arg02[,... [, argn]]]]: expression`

- **result**：用于调用 lambda 表达式
- **[arg01[, arg02[,... [, argn]]]]**：可选参数，指定要传递的参数列表，多个参数间使用逗号 `,` 分隔
- **expression**：指定一个实现具体功能的表达式。如果有参数，那么在该表达式中将应用这些参数

::: tip
通常情况下，这样的函数只使用一次，使用 `lambda` 表达式时，需要定义一个变量，用于调用该 lambda 表达式
:::

例如：将 lambda 函数赋值给一个变量，通过这个变量间接调用该 lambda 函数

```python
num = lambda x, y: x + y

print(num(1, 2))  # 输出结果：3
```

## sum()

`sum()` 内置函数，用于计算可迭代对象之和。

**语法格式**：`sum(iterable[, start])`

- **iterable**：表示可迭代对象
- **start**：表示指定相加的参数，如果没有设置这个值，默认为 `0`

例如：

```python
mylist = [10, 20, 30]

print(sum(mylist))  # 输出结果：60
print(sum(mylist, 50))  # 输出结果：110
```

## sorted()

`sorted()` 内置函数，用于按字母排序，不改变原有列表。

**语法格式**：`sorted(iterable, [key[, reverse]])`

- **iterable**：指定可迭代对象
- **key**：指定带有一个参数的函数，用于从每个列表元素中提取比较键，或对指定的 key 值进行比较。
- **reverse**：为一个布尔值。如果设为 `True`，实现降序排序；如果设为 `False`，实现升序排序，默认为 `False`

例如：

```python
mylists = ["zero", "banana", "Orange", "Kiwi", "cherry"]
x = sorted(mylists)
y = sorted(mylists, key=lambda mylist: mylist[2])
z = sorted(mylists, reverse=True)

print(x)  # 输出结果：['Kiwi', 'Orange', 'banana', 'cherry', 'zero']
print(y)  # 输出结果：['Orange', 'cherry', 'banana', 'zero', 'Kiwi']
print(z)  # 输出结果：['zero', 'cherry', 'banana', 'Orange', 'Kiwi']
```

## zip()

`zip()` 内置函数，用于接收一系列可迭代对象作为参数，将对象中对应的元素打包成一个个 **元组**（`tuple`），然后返回列表（`list`）。

::: tip
若传入参数的长度不等，则返回列表的长度和参数中长度最短的对象相同

如果提前不对 `zip()` 函数进行数据类型转换，则只能进行遍历一次，第二次就是空值

利用 `*` 号操作符，可以将 `list` unzip（解压）
:::

**语法格式**：`zip([iterable, iterable, ...])`

- **iterable**：传入可迭代对象

例如：

```python
name = ['zhangsan', 'lisi', 'wangwu']
age = ['20', '24', '25', '26']
mydict = zip(name, age)

print(dict(mydict))  # 输出结果：{'zhangsan': '20', 'lisi': '24', 'wangwu': '25'}
print(dict(mydict))  # 输出结果：{}


a = [1, 2, 3]
b = [4, 5, 6]
c = list(zip(a, b))

print(c)  # 输出结果：[(1, 4), (2, 5), (3, 6)]
print(c)  # 输出结果：[(1, 4), (2, 5), (3, 6)]


aa, bb = zip(*c)

print(aa, bb)  # 输出结果：(1, 2, 3) (4, 5, 6)
```

## set()

`set()` 内置函数，用于将一系列可迭代对象转换成集合。

**语法格式**：`set([iterable, iterable, ...])`

- **iterable**：传入可迭代对象

例如：

```python
myset = set("abcde")
myset01 = set(['10', '20', '30'])
myset02 = set(['10'])

print(myset)  # 输出结果：{'b', 'e', 'a', 'c', 'd'}
print(myset01)  # 输出结果：{'10', '30', '20'}
print(myset02)  # 输出结果：{'10'}
```

## round()

`round()` 内置函数，返回 `number` 舍入到小数点后 `ndigits` 位精度的值。如果 `ndigits` 被省略或为 `None`，则返回最接近输入值的整数。

::: tip
结果值会舍入至最接近的 `10` 的负 `ndigits` 次幂的倍数；如果与两个倍数同样接近，则选用偶数。因此，`round(0.5)` 和 `round(-0.5)` 均得出 `0` 而 `round(1.5)` 则为 `2`

大多数的十进制小数都不能精确地表示为二进制小数

`ndigits` 可为任意整数值（正数、零或负数）。如果省略了 `ndigits` 或为 `None`，则返回值将为最接近 `number` 的整数。否则返回值与 `number` 的类型相同
:::

**语法格式**：`round(number[, ndigits=None])`

- **number**：表示输入的浮点类型字符
- **ndigits=None**：表示要保留的小数位

例如：

```python
print(round(3.4))  # 输出结果：3
print(round(3.5))  # 输出结果：4

print(round(3.1445, 2))  # 输出结果：3.14
print(round(3.1464, 2))  # 输出结果：3.15

print(round(3.145, 2))  # 输出结果：3.15
print(round(3.155, 2))  # 输出结果：3.15
print(round(3.165, 2))  # 输出结果：3.17

print(round(3.1450, 2))  # 输出结果：3.15
print(round(3.1554, 2))  # 输出结果：3.16
print(round(3.1655, 2))  # 输出结果：3.17
```

## filter()

`filter()` 内置函数，用于过滤序列，过滤掉不符合条件的元素，返回符合条件的元素组成新列表。

**语法格式**：`filter(function, iterable)`

- **function**：指定判断函数，是一个提供过滤条件的函数，返回布尔值
- **iterable**：可迭代对象数据

在调用 `filter()` 函数时，`iterable` 会被遍历，它的元素会被逐一传入 `function` 函数中，`function` 函数若返回 `True`，则元素被保留；若返回 `False`，则元素被过滤。最后遍历完成，已保留的元素被放到一个新的容器数据中。

例如：过滤出大于 50 的数

```python
def num(x):
    return x > 50


num01 = [66, 12, 91, 28, 92, 50, 4, 80, 99]
num02 = filter(num, num01)
num03 = list(filter(num, num01))

print(num02)  # 输出结果：<filter object at 0x000001405661B310>
print(num03)  # 输出结果：[66, 91, 92, 80, 99]


num01 = [66, 12, 91, 28, 92, 50, 4, 80, 99]  # 用 lambda 函数替代
num02 = list(filter(lambda x: (x > 50), num01))

print(num02)  # 输出结果：[66, 91, 92, 80, 99]
```

::: note
`filter()` 函数默认输出的是生成器对象，需要用 `list()` 函数转换为列表
:::

## map()

`map()` 内置函数，用于对容器中的元素进行映射（或变换）。

**语法格式**：`map(function, iterable)`

- **function**：指定变换规则的函数，返回变换之后的元素
- **iterable**：可迭代对象数据

在调用 `map()` 函数时，`iterable` 会被遍历，它的元素被逐一传入 `function` 函数中，在 `function` 函数中对元素进行变换。

例如：将列表中的数字乘以二

```python
def num(x):
    return x * 2


num01 = [1, 2, 3, 4, 5]
num02 = map(num, num01)
num03 = list(map(num, num01))

print(num02)  # 输出结果：<map object at 0x0000026078ADB490>
print(num03)  # 输出结果：[2, 4, 6, 8, 10]


num01 = [1, 2, 3, 4, 5]  # 用 lambda 函数替代
num02 = list(map(lambda x: (x * 2), num01))

print(num02)  # 输出结果：[2, 4, 6, 8, 10]
```

::: note
`map()` 函数默认输出的是生成器对象，需要用 `list()` 函数转换为列表
:::

## super()

`super()` 内置函数，用于调用父类（超类）的一种方法，在子类中可以通过 `super()` 方法来调用父类方法，解决多继承带来的重复调用（菱形继承）、查找顺序（MRO）问题。

**语法格式**：`super(type[, object-or-type])`

- **type**：类
- **object-or-type**：类，一般是 `self`

::: tip
Python3 用 **super().xxx** 代替 Python2 的 **super(Class, self).xxx**
:::

**MRO——方法搜索顺序**：MRO 是 method resolution order，主要用于在对继承是判断方法、属性的调用路径顺序，其实也就是继承父类方法时的顺序表，`super()` 函数严格按照 **MRO** 顺序执行。Python 中针对类提供了一个内置属性 `__mro__` 可以查看方法的搜索顺序。

在搜索方法时，是按照 `__mro__` 的输出结果从左到右的顺序查找的。

- 如果当前类中找到方法，就直接执行，不再搜索
- 如果没有找到，就查找下一个类中是否有对应的方法，如果找到，就直接执行，不再搜索
- 如果找到最后一个类，还是没有找到方法，程序报错

### 单继承：

```python
class A:
    def __init__(self):
        self.n = 2

    def add(self, m):
        print('self is {0} @A.add'.format(self))
        self.n += m


class B(A):
    def __init__(self):
        self.n = 3

    def add(self, m):
        print('self is {0} @B.add'.format(self))
        super().add(m)
        self.n += 3


b = B()
b.add(2)
print(b.n)
print(B.__mro__)


# 输出结果
self is <__main__.B object at 0x106c49b38> @B.add
self is <__main__.B object at 0x106c49b38> @A.add
8
(<class '__main__.B'>, <class '__main__.A'>, <class 'object'>)
```

**整体流程：**

```python
class B(A):             class A:
    def add(self, m):       def add(self, m):
        super().add(m)  1.--->  self.n += m
        self.n += 3   <----2.   <----|
        (5+3=8)                 (3+2=5)
```

::: tip
`super().add(m)` 调用父类方法 `def add(self, m)` 时, 此时父类中 `self` 并不是父类的实例而是子类的实例, 所以 `b.add(2)` 之后的结果是 `5`（n=3，m=2，3+2） 而不是 `4`（n=2，m=2，2+2）
:::

### 多继承：

```python
class A:
    def __init__(self):
        self.n = 2

    def add(self, m):
        print('self is {0} @A.add'.format(self))
        self.n += m


class B(A):
    def __init__(self):
        self.n = 3

    def add(self, m):
        print('self is {0} @B.add'.format(self))
        super().add(m)
        self.n += 3


class C(A):
    def __init__(self):
        self.n = 4

    def add(self, m):
        print('self is {0} @C.add'.format(self))
        super().add(m)
        self.n += 4


class D(B, C):
    def __init__(self):
        self.n = 5

    def add(self, m):
        print('self is {0} @D.add'.format(self))
        super().add(m)
        self.n += 5


d = D()
d.add(2)
print(d.n)
print(D.__mro__)


# 输出结果
self is <__main__.D object at 0x10ce10e48> @D.add
self is <__main__.D object at 0x10ce10e48> @B.add
self is <__main__.D object at 0x10ce10e48> @C.add
self is <__main__.D object at 0x10ce10e48> @A.add
19
(<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>)
```

**整体流程：**

```python
class D(B, C):          class B(A):            class C(A):             class A:
    def add(self, m):       def add(self, m):      def add(self, m):       def add(self, m):
        super().add(m)  1.--->  super().add(m) 2.--->  super().add(m)  3.--->  self.n += m
        self.n += 5   <------6. self.n += 3    <----5. self.n += 4     <----4. <--|
        (14+5=19)               (11+3=14)              (7+4=11)                (5+2=7)
```

## dir()

`dir()` 内置函数，如果没有实参，则返回当前本地作用域中的名称列表。如果有实参，它会尝试返回该对象的有效属性列表。

**语法格式**：`dir([parameter])`

- **parameter**：可选参数，可以是 `""`（表示字符串）、`[]`（表示列表）、`()`（表示元组）等，也可以是函数、类、方法等

例如：

```python
print(dir())

# 输出结果：['__annotations__', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'bmi']

print(dir(()))

# 输出结果：['__add__', '__class__', '__class_getitem__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'count', 'index']
```

## chr()

`chr()` 内置函数，函数返回值类型为 `String`，其数值表达式值取值范围为 `0~255`。

**语法格式**：`chr(i)`

- **i**：指定数值表达式，可以是十进制也可以是十六进制的数字

例如：

```python
for i in range(256):
    print(chr(i), end='')

"""输出结果："""

	
 !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ


for i in range(48, 58):
    print(chr(i), end='')  # 输出结果：0123456789


for i in range(65, 91):
    print(chr(i), end='')  # 输出结果：ABCDEFGHIJKLMNOPQRSTUVWXYZ


for i in range(97, 123):
    print(chr(i), end='')  # 输出结果：abcdefghijklmnopqrstuvwxyz
```

## ord()

`ord()` 内置函数，函数返回值类型为 `int` 类型。

**语法格式**：`ord(c)`

- **c**：指定字符串，可以是 `ASCII` 和 `Unicode` 字符串

例如：

```python
print(ord('0'))  # 输出结果：48

print(ord('a'))  # 输出结果：97

print(ord('A'))  # 输出结果：65
```

## open()

`open()` 内置函数，用于创建或者打开指定文件并创建文件对象。

**语法格式**：`file = open(filename[, mode[, buffering[, encoding[, errors[, newline[, closefd[, opener]]]]]]])`

- **file**：被创建的文件对象
- **filename**：要创建或打开的文件名称，需要用单引号或双引号括起来。可以使用相对路径也可以使用绝对路径
- **mode**：可选参数，指定文件的打开模式。默认的打开模式为只读（`r`）
- **buffering**：可选参数，指定读写文件的缓冲模式，值为 `0` 表示不缓存；值为 `1` 表示缓存；如果大于 `1`，则表示缓冲区的大小。默认为缓存模式
- **encoding**：指定文件编码。默认为 `None`。`encoding` 参数仅可在采用文本方式（即 `mode` 值带 `t`）读写数据的情况下有效，二进制方式下不可指定。常用的有 `utf-8`、`ascii`、`gbk` 等
- **errors**：指定在文本文件发生编码错误时如何处理。默认为 `None`。仅当 `mode` 参数采用文本方式时有效，二进制方式下不可指定。常用的可选值有 `strict`、`ignore`、`replace`、`surrogateescape`、`xmlcharrefreplace`、`backslashreplace`、`namereplace` 等。推荐参数为 `ignore` 表示在遇到编码错误时忽略该错误，程序继续执行
- **newline**：设置换行符。默认为 `None`。可选值包括 `None`、`"\r"`、`"\n"`、`"\r\n"`
- **closefd**：控制传入的 `file` 参数类型。默认为 `True`，当为 `True` 时，`file` 参数可以是表示文件路径的字符串，也可以是文件描述符，当为 `False` 时，`file` 参数只能是文件描述符，传入字符串会报错

**mode 参数列表如下：**

|  参数  |  说明  |
|  :----:  |  :----  |
|  **t**  |  文本模式（默认）  |
|  **x**  |  写模式，新建一个文件，如果文件存在，则报错  |
|  **b**  |  二进制模式  |
|  **+**  |  打开一个文件进行更新（读写模式）  |
|  **U**  |  通用换行模式（不推荐）  |
|  **r**  |  只读模式打开文件，文件的指针将会放在文件的开头。文件必须存在  |
|  **rb**  |  只读模式以二进制格式打开文件，文件的指针将会放在文件的开头，一般用于非文本文件。例如：图片、声音等。文件必须存在  |
|  **r+**  |  读写模式打开文件，写入新的内容覆盖原有内容，文件的指针将会放在文件的开头。文件必须存在  |
|  **rb+**  |  读写模式以二进制格式打开文件，文件的指针将会放在文件的开头，一般用于非文本文件。例如：图片、声音等。文件必须存在  |
|  **w**  |  只写模式打开文件。文件如果存在，则将其覆盖，否则创建新文件  |
|  **wb**  |  只写模式以二进制格式打开文件，一般用于非文本文件。例如：图片、声音等。文件如果存在，则将其覆盖，否则创建新文件  |
|  **w+**  |  读写模式打开文件，先清空原有内容，再写入内容。文件如果存在，则将其覆盖，否则创建新文件  |
|  **wb+**  |  读写模式以二进制格式打开文件，一般用于非文本文件。例如：图片、声音等。文件如果存在，则将其覆盖，否则创建新文件  |
|  **a**  |  追加模式打开文件。如果该文件存在，文件指针将会放在文件的末尾，否则，创建新文件写入  |
|  **ab**  |  追加模式以二进制格式打开文件。如果该文件存在，文件指针将会放在文件的末尾，否则，创建新文件写入  |
|  **a+**  |  读写、追加模式打开文件。如果该文件存在，文件指针将会放在文件的末尾，否则，创建新文件写入  |
|  **ab+**  |  读写、追加模式以二进制格式打开文件。如果该文件存在，文件指针将会放在文件的末尾，否则，创建新文件写入  |

打开一个不存在的文件。例如：

```python
file = open('test.txt', 'w')
print("打开文件", file)

# 输出结果：打开文件 <_io.TextIOWrapper name='test.txt' mode='w' encoding='cp936'>
```

以二进制形式打开文件。例如：

```python
file = open('picture.png', 'rb')
print(file)  # 输出结果：<_io.BufferedReader name='picture.png'>
```

打开文件时指定编码方式。例如：

```python
file = open('test.txt', 'r', encoding='utf-8')
print(file)  # 输出结果：<_io.TextIOWrapper name='test.txt' mode='r' encoding='utf-8'>
```

## iter()

`iter()` 内置函数，用于返回一个迭代器，与 `__iter__()` 方法作用一样。

**语法格式**：`iter(object, [sentinel])`

- **object**：可迭代的对象
- **sentinel**：哨兵，标记符。每次迭代都会调用 `__next__()` 方法，直到值为 `sentinel` 时触发 [StopIteration](https://docs.python.org/zh-cn/3/library/exceptions.html#StopIteration) 停止

例如：

```python
mylist = [1, 2, 3, 4]
ite = iter(mylist)  # 接收一下 __iter__() 干了什么

print(ite)  # 输出结果：<list_iterator object at 0x0000025FC9F78670>


# 随机产生 1~10 之间的数，遇到 5 就停止
from random import randint


def d10():
    return randint(1, 10)


for i in iter(d10, 5):
    print(i)
```

## next()

`next()` 内置函数，用于获取迭代器中的每一个元素，与 `__next__()` 方法作用一样。

**语法格式**：`next(name)`

- **name**：指定迭代器

例如：

```python
mylist = [1, 2, 3, 4]
ite = iter(mylist)  # 接收一下 __iter__() 干了什么

print(ite)  # 输出结果：<list_iterator object at 0x0000025FC9F78670>

print(next(ite))
print(next(ite))
print(next(ite))
print(next(ite))


# 输出结果
1
2
3
4
```

## repr()

`repr()` 内置函数，用于将对象转化为供解释器读取的形式，返回包含对象的可打印表示形式的字符串。

**语法格式**：`repr(object)`

- **object**：可迭代的对象

::: note
`repr` 其实就是 return properties（返回属性）的缩写，比起 `str()` 函数更适合调试
:::

例如：

```python
s = 'runoob'
print(repr(s))  # 输出结果：'runoob'

d = {'baidu': 'baidu.com', 'youtube': 'youtube.com'}
print(repr(d))  # 输出结果：{'baidu': 'baidu.com', 'youtube': 'youtube.com'}


class Test:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return '这个类的名字是: %s' % self.name


a = Test('科学')
print(a)  # 输出结果：这个类的名字是: 科学


import datetime

n = datetime.datetime.now()

print(str(n))  # 输出结果：2023-01-06 18:52:11.763043
print(repr(n))  # 输出结果：datetime.datetime(2023, 1, 6, 18, 52, 11, 763043)
```

## yield

`yield` 函数作用和 `return` 类似，执行到 `yield` 语句时下面的语句不会执行。只是 `return` 函数返回的是值，而 `yield` 函数返回的是生成器，用 `next()` 函数读取。

**语法格式**：`yield value`

- **value**：指定要返回的值

::: tip
`yield` 函数返回的生成器，每次只读取一次，节省内存空间
:::

例如：

```python
def foo():
    print("starting...")
    while True:
        res = yield 4
        print("res:", res)


g = foo()
print(g)
print(next(g))

print("*"*20)
print(next(g))

# 输出结果
<generator object foo at 0x0000019D1541B610>
starting...
4
********************
res: None
4
```

## hasattr()

`hasattr()` 内置函数，用于判断对象是否包含对应的属性，如果对象有该属性返回 `True`，否则返回 `False`。

**语法格式**：`hasattr(object, name)`

- **object**：对象
- **name**：字符串，属性名

例如：

```python
class Coordinate:
    x = 10
    y = -5
    z = 0
 
point1 = Coordinate() 
print(hasattr(point1, 'x'))  # 输出结果：True
print(hasattr(point1, 'y'))  # 输出结果：True
print(hasattr(point1, 'z'))  # 输出结果：True
print(hasattr(point1, 'no'))  # 输出结果：False。没有该属性
```

## callable()

`callable()` 内置函数，用于检查一个对象是否是可调用的。如果返回 `True`，object 仍然可能调用失败；但如果返回 `False`，调用对象 object 绝对不会成功。对于函数、方法、lambda 函式、类以及实现了 `__call__` 方法的类实例, 它都返回 True。

**语法格式**：`callable(object)`

- **object**：对象

例如：

```python
print(callable(0))  # 输出结果：False
print(callable("runoob"))  # 输出结果：False


def add(a, b):
    return a + b


print(callable(add))  # 输出结果：True


class A:
    def method(self):
        return 0


print(callable(A))  # 输出结果：True
a = A()
print(callable(a))  # 输出结果：False。没有实现 __call__


class B:
    def __call__(self):
        return 0


print(callable(B))  # 输出结果：True
b = B()
print(callable(b))  # 输出结果：True。实现 __call__
```

## getattr()

`getattr()` 内置函数，用于返回一个对象属性值。

**语法格式**：`getattr(object, name[, default])`

- **object**：对象
- **name**：字符串，对象属性
- **default**：默认返回值，如果不提供该参数，在没有对应属性时，将触发 `AttributeError`

例如：

```python
class A(object):
    bar = 1


a = A()
print(getattr(a, 'bar'))  # 输出结果：1。获取属性 bar 值
print(getattr(a, 'bar2'))  # 输出结果：AttributeError: 'A' object has no attribute 'bar2'. Did you mean: 'bar'?。属性 bar2 不存在，触发异常
print(getattr(a, 'bar2', 3))  # 输出结果：3。属性 bar2 不存在，但设置了默认值
```

