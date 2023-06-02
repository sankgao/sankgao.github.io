---
title: 字符串
icon: string
date: 2023-05-31
category: Languages
tag:
    - Python
---

为了实现某项功能，经常需要对某些字符串进行特殊处理，如：拼接字符串、截取字符串、格式化字符串等。

## 拼接字符串

使用 “`+`” 运算符可完成对多个字符串的拼接，“`+`” 运算符可以连接多个字符串并产生一个字符串对象。例如：

```python
mot_en = 'Time is money'
mot_cn = "时间就是金钱"

print(mot_en + '——' + mot_cn)  # 输出结果：Time is money——时间就是金钱
```

字符串不允许直接与其它类型的数据拼接。例如：

```python
mystr = "我今天走了"
num = 1234
mystr01 = "步"

print(mystr + num + mystr01)


# 输出结果
TypeError: can only concatenate str (not "int") to str。只能将 str 类型的连接到 str
```

将整数转换为字符串的方法输出。例如：

```python
mystr = "我今天走了"
num = 1234
mystr01 = "步"

print(mystr + str(num) + mystr01)  # 输出结果：我今天走了1234步
```

## 计算字符串的长度

不同的字符所占字节数不同，在 Python 中，数字、英文、小数点、下划线和空格各占一个字节；一个汉字可能会占 `2~4` 个字节，占几个字节取决于采用的编码，汉字在 `GBK/GB2312` 编码中占 `2` 个字节，在 `UTF-8/unicode` 编码中一般占用 `3` 个字节。

使用 `len()` 函数计算字符串的长度。例如：

```python
mystr = "我喜欢用 Python"

print(len(mystr))  # 输出结果：11
```

::: tip
默认情况下通过 `len()` 函数计算字符串的长度时，不区分英文、数字和汉字，所有字符都按一个字符计算
:::

有时需要获取字符串实际所占的字节数，可以使用 `encode()` 方法，进行编码后再进行获取，默认是 `UTF-8` 编码。例如：

```python
mystr = "我喜欢用 Python"

print(len(mystr.encode()))  # 输出结果：19。使用 UTF-8 编码
print(len(mystr.encode('GBK')))  # 输出结果：15。使用 GBK 编码
```

## 截取字符串

字符串也属于序列，所以要截取字符串可以使用切片的方法实现，语法格式：

`string[start:end:step]`

- **string**：表示要截取的字符串
- **start**：表示要截取的第一个字符的索引（包括该索引）
- **end**：表示要截取的最后一个字符的所有（不包括该索引）
- **step**：表示切片的步长，默认为 1

例如：

```python
mystr = "我喜欢用 Python"
submystr01 = mystr[3]
submystr02 = mystr[3:]
submystr03 = mystr[:3]
submystr04 = mystr[1:7]
submystr05 = mystr[15]

print(submystr01)  # 输出结果：用
print(submystr02)  # 输出结果：用 Python
print(submystr03)  # 输出结果：我喜欢
print(submystr04)  # 输出结果：喜欢用 Py
print(submystr05)  # 输出结果：IndexError: string index out of range。索引超出范围
```

在进行截取字符串时，指定索引不存在报错，可以使用 `try···except` 语句捕获异常。例如：

```python
mystr = "我喜欢用 Python"

try:
    submystr01 = mystr[15]
except IndexError:
    print("指定的索引不存在")


# 输出结果
指定的索引不存在
```

## 分割、合并字符串

分割字符串是把字符串分割为列表，而合并字符串是把列表合并为字符串。分割和合并字符串可以看作是互逆操作。

### 分割字符串

使用 `split()` 分割字符串，将一个字符串按指定的分隔符分割为字符串列表，该列表元素中不包括分隔符。

**语法格式**：`str.split(sep[, maxsplit])`

- **str**：表示对 `split` 输入的对象
- **sep**：指定分隔符，默认为 None（即所有空格、换行 `\n`、制表符 `\t`）
- **maxsplit**：指定分割的次数，如果不指定或者为 `-1`，则分割次数没有限制，否则返回结果列表的元素个数，个数最多为 maxsplit+1

例如：

```python
mystr = "Hello, World! Hello, Python!"
mylist01 = mystr.split()
mylist02 = mystr.split(',')
mylist03 = mystr.split('o')
mylist04 = mystr.split(' ', 4)
mylist05 = mystr.split('l')

print(mylist01)  # 输出结果：['Hello,', 'World!', 'Hello,', 'Python!']
print(mylist02)  # 输出结果：['Hello', ' World! Hello', ' Python!']
print(mylist03)  # 输出结果：['Hell', ', W', 'rld! Hell', ', Pyth', 'n!']
print(mylist04)  # 输出结果：['Hello,', 'World!', 'Hello,', 'Python!']
print(mylist05)  # 输出结果：['He', '', 'o, Wor', 'd! He', '', 'o, Python!']
```

::: tip
使用 `split()` 方法时，如果不指定参数，默认采用空格进行分割，无论有几个空格都将作为一个分隔符进行分割；如果分隔符连续出现多个，每分割一次将会得到一个空元素
:::

### 合并字符串

使用 `join()` 方法合并字符串。

**语法格式**：`strnew = string.join(iterable)`

- **strnew**：表示合并后生成的字符串名称
- **string**：字符串类型，指定合并时的分隔符
- **iterable**：可迭代的对象

例如：

```python
mylist = ['zhangsan', 'lisi', 'wangwu']
mystr01 = ' '.join(mylist)
mystr02 = '@'.join(mylist)

print(mystr01)  # 输出结果：zhangsan lisi wangwu
print('@' + mystr02)  # 输出结果：@zhangsan@lisi@wangwu
```

## 检索字符串

### 检索字符串次数

使用 `count()` 方法检索指定字符串在另一个字符串中出现的次数，如果要检索的字符串不存在，则返回 0。

**语法格式**：`str.count(sub[, start[, end=len(string)]])`

- **str**：表示对 `count` 输入的对象
- **sub**：搜索的子字符串
- **start**：字符串开始搜索的位置。默认为第一个字符，第一个字符索引值为 0
- **end**：字符串中结束搜索的位置。默认为字符串的最后一个位置

例如：

```python
string = 'Hello, World! Hello, Python!'

print(string.count('I'))  # 输出结果：0
print(string.count('H'))  # 输出结果：2
print(string.count('H', 1))  # 输出结果：1
print(string.count('H', 0, 20))  # 输出结果：2
```

### 检索字符串索引

使用 `find()` 方法检索是否包含指定的子字符串，如果检索的字符串不存在，则返回 `-1`；如果存在，则返回首次出现该字符串时的索引。

**语法格式**：`str.find(sub[, start[, end=len(string)]])`

- **str**：表示对 `find` 输入的对象
- **sub**：搜索的子字符串
- **start**：字符串开始搜索的位置。默认为第一个字符，第一个字符索引值为 0
- **end**：字符串中结束搜索的位置。默认为字符串的最后一个位置

例如：

```python
string = 'Hello, World! Hello, Python!'

print(string.find('I'))  # 输出结果：-1
print(string.find('H'))  # 输出结果：0
print(string.find('H', 1))  # 输出结果：14
print(string.find('H', 0, 20))  # 输出结果：0
```

使用 `index()` 方法与 `find()` 方法类似，也是用于检索是否包含指定的子字符串，只不过使用 `index()` 方法当指定的字符串不存在，将会报错。

**语法格式**：`str.index(sub[, start[, end=len(string)]])`

- **str**：表示对 `index` 输入的对象
- **sub**：搜索的子字符串
- **start**：字符串开始搜索的位置。默认为第一个字符，第一个字符索引值为 0
- **end**：字符串中结束搜索的位置。默认为字符串的最后一个位置

例如：

```python
string = 'Hello, World! Hello, Python!'

print(string.index('I'))  # 输出结果：ValueError: substring not found。没有找到字符串
print(string.index('H'))  # 输出结果：0
print(string.index('H', 1))  # 输出结果：14
print(string.index('H', 0, 20))  # 输出结果：0
```

### 检索字符串开头

使用 `startswith()` 方法检索字符串是否以指定子字符串开头，如果是则返回 True，否则返回 False。

**语法格式**：`str.startswith(prefix[, start[, end=len(string)]])`

- **str**：表示对 `startswith` 输入的对象
- **prefix**：搜索的子字符串
- **start**：字符串开始搜索的位置。默认为第一个字符，第一个字符索引值为 0
- **end**：字符串中结束搜索的位置。默认为字符串的最后一个位置

例如：

```python
string = 'Hello, World! Hello, Python!'

print(string.startswith('I'))  # 输出结果：False
print(string.startswith('H'))  # 输出结果：True
print(string.startswith('H', 1))  # 输出结果：False
print(string.startswith('H', 0, 20))  # 输出结果：True
```

### 检索字符串结尾

使用 `endswith()` 方法检索字符串是否以指定子字符串结尾，如果是则返回 True，否则返回 False。

**语法格式**：`str.endswith(suffix[, start[, end=len(string)]])`

- **str**：表示对 `endswith` 输入的对象
- **suffix**：搜索的子字符串
- **start**：字符串开始搜索的位置。默认为第一个字符，第一个字符索引值为 0
- **end**：字符串中结束搜索的位置。默认为字符串的最后一个位置

例如：

```python
string = 'Hello, World! Hello, Python!'

print(string.endswith('I'))  # 输出结果：False
print(string.endswith('!'))  # 输出结果：True
print(string.endswith('!', 14))  # 输出结果：True
print(string.endswith('!', 0, 20))  # 输出结果：False
```

## 字母的大小写转换

### 小写转换字母

使用 `lower()` 方法将字符串的大写字母转换为小写字母。

**语法格式**：`str.lower()`

- **str**：表示对 `lower` 输入的对象

例如：

```python
mystr = "Hello, World!"

print(mystr.lower())  # 输出结果：hello, world!
```

### 大写转换字母

使用 `upper()` 方法将字符串中的小写字母转换为大写字母。

**语法格式**：`str.upper()`

- **str**：表示对 `upper` 输入的对象

例如：

```python
mystr = "Hello, World!"

print(mystr.upper())  # 输出结果：HELLO, WORLD!
```

## 删除空格和特殊字符

### 删除左右两侧

使用 `strip()` 方法去除字符串左右两侧的空格和特殊字符。

**语法格式**：`str.strip("object")`

- **str**：表示对 `strip` 输入的对象
- **object**：表示要删除的对象

例如：

```python
mystr = " Hello, World!  "
mystr01 = ", Hello, World!  "

print(mystr.strip())  # 输出结果：Hello, World!
print(mystr01.strip(","))  # 输出结果： Hello, World!
```

### 删除左侧

使用 `lstrip()` 方法去掉字符串左侧的空格和特殊字符。

**语法格式**：`str.lstrip("object")`

- **str**：表示对 `strip` 输入的对象
- **object**：表示要删除的对象

例如：

```python
mystr = " Hello, World!  "
mystr01 = ", Hello, World!  "

print(mystr.lstrip())  # 输出结果：Hello, World!  
print(mystr01.lstrip(","))  # 输出结果： Hello, World!  
```

### 删除右侧

使用 `rstrip()` 方法去掉字符串右侧的空格和特殊字符。

**语法格式**：`str.rstrip("object")`

- **str**：表示对 `strip` 输入的对象
- **object**：表示要删除的对象

例如：

```python
mystr = " Hello, World!  "
mystr01 = ", Hello, World!"

print(mystr.rstrip())  # 输出结果： Hello, World!
print(mystr01.rstrip("!"))  # 输出结果：, Hello, World
```

## 格式化字符串

格式化字符串是指先指定一个模板，在这个模板中预留几个空位，然后再根据需要填上相应的内容，这些空位需要通过指定的符号标记（占位符），而这些符号不会显示出来。

### 使用 % 号操作符

**语法格式**：`"%[-][+][0][m][.n]格式化字符" % exp`

- **-**：用于指定左对齐，正数前方无符号，负数前面加负号
- **+**：用于指定右对齐，正数前方无符号，负数前方加负号
- **0**：表示右对齐，正数前方无符号，负数前方加负号，用 0 填充空白处（一般与 m 参数一起使用）
- **m**：表示占有宽度
- **.n**：表示小数点后保留的位数
- **格式化字符**：用于指定类型
- **exp**：要转换的项，如果要指定的项有多个，需要通过元组的形式进行指定，但不能使用列表

**常用的格式化字符如下：**

|  格式化字符  |  说明  |
|  :----:  |  :----  |
|  **%s**  |  字符串（用 `str()` 显示）  |
|  **%c**  |  单个字符  |
|  **%d** 或者 **%i**  |  十进制整数  |
|  **%x**  |  十六进制整数  |
|  **%f** 或者 **%F**  |  浮点数  |
|  **%r**  |  字符串（用 `repr()` 显示）  |
|  **%o**  |  八进制整数  |
|  **%e**  |  指数（基底写为 `e`）  |
|  **%E**  |  指数（基底写为 `E`）  |
|  **%%**  |  字符 `%`  |

例如：

```python
mystr = "id：%02d\t name：%s\t age：%d"
context01 = (1, 'zhangsan', 24)
context02 = (2, 'lisi', 21)
context03 = [3, 'zhangsan', 24]

print(mystr % context01)
print(mystr % context02)
print(mystr % context03)
print("id：%02d\t name：%s\t age：%d" % (3, 'wangwu', 24))


# 输出结果
id：01	 name：zhangsan	 age：24
id：02	 name：lisi	 age：21
TypeError: %d format: a real number is required, not list。找不到子字符串格式，需要元组，不是列表
id：03	 name：wangwu	 age：24
```

### 使用 format() 方法进行字符串格式化

**语法格式**：`str.format(args)`

- **str**：指定字符串的显示样式（模板）
- **args**：指定要转换的项，如果有多项使用 `,` 号分隔

在创建模板时，需要使用 `{}` 和 `:` 指定占位符。

**语法格式**：`{[index][:[[fill]align][#][width][.precision][type]]}`

- **index**：指定要设置格式的对象在参数列表中的索引位置，索引值从 0 开始
- **fill**：指定空白处填充的字符
- **align**：指定对齐方式（值为 “`<`” 时表示内容左对齐；值为 “`>`” 时表示内容右对齐；值为 “`=`” 时表示内容右对齐，将符号放在填充内容的最左侧，且只对数字类型有效；值为 “`^`” 时表示内容居中），需要配合 `width` 一起使用
- **sign**：指定有无符号数（值为 “`+`” 时表示正数加正号，负数加负号；值为 “`-`” 时表示正数不变，负数加负号；值为 “` `”（空格）时表示正数加空格，负数加负号）
- **#** ：对于二进制、八进制和十六进制数，如果加上 “`#`”，表示会显示 `0b/0o/0X` 前缀，否则不显示前缀
- **width**：指定所占宽度
- **.precision**：指定保留的小数位数
- **type**：指定类型

**format() 方法中常用的格式化字符：**

|  格式化字符  |  说明  |
|  :----:  |  :----  |
|  **s**  |  对字符串类型格式化  |
|  **d**  |  十进制整数  |
|  **c**  |  将十进制整数自动转换成对应的 Unicode 字符  |
|  **e** 或者 **E**  |  转换为科学计数法表示再格式  |
|  **g** 或者 **G**  |  自动在 e 和 f 或者 E 和 F 中切换  |
|  **b**  |  将十进制整数自动转换成二进制表示再格式化  |
|  **o**  |  将十进制整数自动转换成八进制表示再格式化  |
|  **x** 或者 **X**  |  将十进制整数自动转换成十六进制表示再格式化  |
|  **f** 或者 **F**  |  转换为浮点数（默认小数点后保留 6 位）再格式化  |
|  **%**  |  显示百分比（默认显示小数点后 6 位）  |

例如：

```python
mystr = "id：{:0>2}\t name：{:s}\t age：{:d}"
context01 = mystr.format(1, 'zhangsan', 24)
context02 = mystr.format(2, 'lisi', 21)
context03 = mystr.format[3, 'zhangsan', 24]

print(context01)
print(context02)
print(context03)
print("id: {:0>2}\t name: {:s}\t age: {:d}".format(3, 'wangwu', 24))


# 输出结果
id：01	 name：zhangsan	 age：24
id：02	 name：lisi	 age：21
TypeError: 'builtin_function_or_method' object is not subscriptable。对象不可调用
id: 03	 name: wangwu	 age: 24
```

将数值格式化为不同的形式。例如：

```python
import math

print("1234 + 4321 的结果是（以货币的形式显示）：￥{:,.2f} 元".format(1234 + 4321))
print("{0:.1f} 用科学计数法表示：{0:E}".format(120000.1))
print("π 取 5 位小数：{:.5f}".format(math.pi))
print("{0:d} 的十六进制结果是：{0:#x}".format(100))
print("天才是由 {:.0%} 的灵感，加上 {:.0%} 的汗水".format(0.01, 0.99))


# 输出结果
1234 + 4321 的结果是（以货币的形式显示）：￥5,555.00 元
120000.1 用科学计数法表示：1.200001E+05
π 取 5 位小数：3.14159
100 的十六进制结果是：0x64
天才是由 1% 的灵感，加上 99% 的汗水
```

::: tip
`*args` 表示任何多个无名参数，它是一个 `tuple` 或 `list`；`**kwargs` 表示关键字参数，它是一个 `dict`。例如：

```python
args = ["，", "。"]
kwargs = {"name": "张三", "age": "20"}

print("我叫{name}{}今年{age}岁了{}".format(*args, **kwargs))  # 输出结果：我叫张三，今年20岁了
```

:::

## 字符串编码转换

最早的字符串编码是美国标准信息交换码（即 ASCII 码）。它仅对 10 个数字、26 个大写英文字母、26 个小写英文字母及一些其它符号进行编码。ASCII 码最多只能表示 256 个符号，每个字符占一个字节。随着信息技术的发展，出现了 GBK、GB2312、UTF-8 编码等，其中 GBK 和 GB2312 是我国制定的中文编码标准，使用一个字节表示英文字母；两个字节表示中文字符，而 UTF-8 是国际通用的编码，对全世界所有国家需要用到的字符都进行了编码，UTF-8 采用一个字节表示英文字符；三个字节表示中文字符。

在 Python 中，有两种常用的字符串类型，分别为 `str` 和 `bytes`。其中 str 表示 Unicode 字符（ASCII 或者其它）；bytes 表示二进制数据（包括编码的文本）。这两种类型的字符串不能拼接在一起使用。通常情况下，str 在内存中以 Unicode 表示，一个字符对应若干个字节，但是在网络上传输或者保存到磁盘中，就需要把 str 转换位字节类型（即 bytes 类型）

::: tip
bytes 类型的数据是带有 b 前缀的字符串（用单引号或双引号表示）。例如：`b'\xd2\xb0'`、`b'mr'` 都是 bytes 类型的数据
:::

### 字符串转换为二进制数据

使用 `encode()` 方法将字符串转换为二进制数据（即 bytes）。

**语法格式**：`str.encode([encoding="utf-8"][, error="strict"])`

- **str**：表示对 `encode` 输入的字符串
- **encoding="utf-8"**：用于指定进行转码时采用的字符编码，默认为 UTF-8，如果使用简体中文，则设置为 GB2312
- **error**：指定错误处理方式，值为 strict 时，遇到非法字符就抛出异常；值为 ignore 时，忽略非法字符；值为 replace 时，用 “？” 替换非法字符；值为 xmlcharrefreplace 时，使用 XML 的字符引用等，默认为 strict

例如：

```python
mystr = "我喜欢用 Python"

print(mystr.encode('UTF-8'))
print(mystr.encode('GB2312'))
print(mystr.encode('GBK'))


# 输出结果
b'\xe6\x88\x91\xe5\x96\x9c\xe6\xac\xa2\xe7\x94\xa8 Python'
b'\xce\xd2\xcf\xb2\xbb\xb6\xd3\xc3 Python'
b'\xce\xd2\xcf\xb2\xbb\xb6\xd3\xc3 Python'
```

### 二进制数据转换为字符串

使用 `decode()` 方法将二进制数据转换为字符串，将 `encode()` 方法转换的结果再转换为字符串，也称为 “解码”。

**语法格式**：`bytes.decode([encoding="utf-8"][, error="strict"])`

- **bytes**：表示对 `decode` 输入的二进制数据
- **encoding="utf-8"**：用于指定进行转码时采用的字符编码，默认为 UTF-8，如果使用简体中文，则设置为 GB2312
- **error**：指定错误处理方式，值为 strict 时，遇到非法字符就抛出异常；值为 ignore 时，忽略非法字符；值为 replace 时，用 “？” 替换非法字符；值为 xmlcharrefreplace 时，使用 XML 的字符引用等，默认为 strict

::: tip
在设置解码采用的字符编码时，需要与编码时采用的字符编码一致
:::

例如：

```python
mybytes01 = b'\xe6\x88\x91\xe5\x96\x9c\xe6\xac\xa2\xe7\x94\xa8 Python'
mybytes02 = b'\xce\xd2\xcf\xb2\xbb\xb6\xd3\xc3 Python'
mybytes03 = b'\xce\xd2\xcf\xb2\xbb\xb6\xd3\xc3 Python'

print(mybytes01.decode('UTF-8'))
print(mybytes01.decode('GB2312'))
print(mybytes02.decode('GB2312'))
print(mybytes03.decode('GBK'))


# 输出结果
我喜欢用 Python
UnicodeDecodeError: 'gb2312' codec can't decode byte 0xe6 in position 0: illegal multibyte sequence。GB2312 解码器无法解码
我喜欢用 Python
我喜欢用 Python
```

