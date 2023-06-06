---
title: 方法
icon: method
date: 2023-06-06
category: Languages
tag:
    - Python
---

方法属于类，通过类或对象调用方法。例如：`list.append(x)`

## upper()

`upper()` 方法，用于以大写形式返回字符串。

**语法格式**：`str.upper()`

- **str**：表示对 `upper` 输入的对象

例如：

```python
a = "Hello, World!"

print(a.upper())  # 输出结果：HELLO, WORLD!
```

## lower()

`lower()` 方法，用于以小写形式返回字符串。

**语法格式**：`str.lower()`

- **str**：表示对 `lower` 输入的对象

例如：

```python
a = "Hello, World!"

print(a.lower())  # 输出结果：hello, world!
```

## strip()

`strip()` 方法，用于从开头或结尾删除任何字符，默认是空格。

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

## lstrip()

`lstrip()` 方法，用于去掉字符串左侧的空格和特殊字符。

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

## rstrip()

`rstrip()` 方法，用于去掉字符串右侧的空格和特殊字符。

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

## replace()

`replace()` 方法，用于替换字符串。默认全部替换。

**语法格式**：`str.replace(old, new[, max])`

- **str**：表示对 `replace` 输入的对象
- **old**：表示替换旧的字符对象
- **new**：表示替换新的字符对象
- **[max]**：最大匹配次数，匹配时从左到右最多次数

例如：

```python
a = "Hello, World! Hello, Python!"

print(a.replace("H", "h"))  # 输出结果：hello, World! hello, Python!
print(a.replace("H", "h", 1))  # 输出结果：hello, World! Hello, Python!
```

## split()

`split()` 方法，用于返回一个列表，指定字符串中的分隔符来分割列表。

**语法格式**：`str.split(type="", num=string.count(str))[n]`

- **str**：表示对 `split` 输入的对象
- **type**：表示进行分割的符号，默认为空格
- **num**：表示分割的次数
- **[n]**：表示分割后取第几个分片

例如：以 `,` 号分割成列表

```python
a = "Hello, World!, test"
b = "kkkpythonkiskkkgoodkk"
c = "   kkkpy   thonkisk   kkgoodkk   "

print(a.split(","))  # 输出结果：['Hello', ' World!', ' test']
print(a.split(",", 1))  # 输出结果：['Hello', ' World!, test']
print(a.split(",", 1)[0])  # 输出结果：Hello
print(b.split("k"))  # 输出结果：['', '', '', 'python', 'is', '', '', 'good', '', '']
print(c.split())  # 输出结果：['kkkpy', 'thonkisk', 'kkgoodkk']
```

::: tip
如果分隔符是空格的话，连续的空格将作为一个分隔符
:::

## format()

`format()` 方法，用于接受传递的参数，格式化它们，并将它们放在占位符 `{}` 所在的字符串中。

**语法格式**：`str.format(value)`

- **str**：表示对 `format` 输入的对象
- **value**：表示要传递的参数

::: tip
您还可以使用索引号 `{0}` 将参数放到占位符中，不过需要确定索引号和参数位置所对应，否则会导致输出的顺序混乱

以 `key=value` 的形式无需注意索引号和参数位置顺序
:::

例如：将数字插入字符串

```python
age = 20
txt = "张三今年 {}"

print(txt.format(age))  # 输出结果：张三今年 20
```

例如：接受多个参数

```python
name = "张三"
age = 20

txt = "{} 今年 {}"

print(txt.format(name, age))  # 输出结果：张三今年 20
```

例如：使用索引号

```python
name = "张三"
age = 20

txt = "{0} 今年 {1}"

print(txt.format(name, age))  # 输出结果：张三今年 20
```

例如：

```python
name = "张三"
age = 20

print("我叫{}，今年{}岁了".format("张三", "20"))  # 输出结果：我叫张三，今年20岁了
print("我叫{0}，今年{1}岁了".format("张三", "20"))  # 输出结果：我叫张三，今年20岁了
print("我叫{1}，今年{0}岁了".format("张三", "20"))  # 输出结果：我叫20，今年张三岁了
print("我叫{name}，今年{age}岁了".format(name="张三", age="20"))  # 输出结果：我叫张三，今年20岁了
print("我叫{name}，今年{age}岁了".format(age="20", name="张三"))  # 输出结果：我叫张三，今年20岁了


mylist = ["张三", "20"]

print("我叫{List[0]}，今年{List[1]}岁了".format(List=mylist))  # 输出结果：我叫张三，今年20岁了
print("我叫{0[0]}，今年{0[1]}岁了".format(mylist))  # 输出结果：我叫张三，今年20岁了


mydict = {"name": "张三", "age": "20"}

print("我叫{Dict[name]}，今年{Dict[age]}岁了".format(Dict=mydict))  # 输出结果：我叫张三，今年20岁了
print("我叫{name}，今年{age}岁了".format(**mydict))  # 输出结果：我叫张三，今年20岁了


class value:
    name = "张三"
    age = "20"

print("我叫{Value.name}，今年{Value.age}".format(Value=value))  # 输出结果：我叫张三，今年20岁了


args = ["，", "。"]
kwargs = {"name": "张三", "age": "20"}

print("我叫{name}{}今年{age}岁了{}".format(*args, **kwargs))  # 输出结果：我叫张三，今年20岁了
```

::: tip
`*args` 表示任何多个无名参数，它是一个 `tuple` 或 `list`

`**kwargs` 表示关键字参数，它是一个 `dict`
:::

**数字格式化**

|  数字  |  格式  |  输出  |  描述  |
|  :----:  |  :----:  |  :----:  |  :----  |
|  3.1415926  |  **{:.2f}**  |  3.14  |  保留小数点后两位  |
|  3.1415926  或 -1  |  **{:+.2f}**  |  +3.14 或 -1.00  |  带符号保留小数点后两位  |
|  2.71828  |  **{:.0f}**  |  3  |  不带小数  |
|  5  |  **{:0>2d}**  |  05  |  数字补零（填充左边, 宽度为 2）  |
|  5 或 10  |  **{:x<4d}**  |  5xxx 或 10xx  |  数字补 x （填充右边, 宽度为 4）  |
|  1000000  |  **{:,}**  |  1,000,000  |  以逗号分隔的数字格式  |
|  0.25  |  **{:.2%}**  |  25.00%  |  百分比格式  |
|  1000000000  |  **{:.2e}**  |  1.00e+09  |  指数记法  |
|  13  |  **{:>5d}**  |  &nbsp;&nbsp;&nbsp;13  |  右对齐 (宽度为 5)  |
|  13  |  **{:<5d}**  |  13&nbsp;&nbsp;&nbsp;  |  左对齐 (宽度为 5)  |
|  13  |  **{:^5d}**  |  &nbsp;13&nbsp;&nbsp;  |  中间对齐 (宽度为 5)  |
|  11  |  **'{:b}'**  |  1011  |  二进制  |
|  11  |  **'{:d}'**  |  11  |  十进制  |
|  11  |  **`'{:o}'`**  |  13  |  八进制  |
|  11  |  **'{:x}'**  |  b  |  十六进制  |
|  11  |  **'{:#x}'**  |  0xb  |  0x 式十六进制 + 小写  |
|  11  |  **'{:#X}'**  |  0xB  |  0x 式十六进制 + 大写  |

例如：

```python
a = 3.1415926

print("保留两位小数：{:.2f}".format(a))  # 输出结果：保留两位小数：3.14
```

**叹号：**

例如：

```python
print("{!s}好".format("您"))  # 输出结果：您好
print("{!r}好".format("您"))  # 输出结果："您"好
print("{!a}好".format("您"))  # 输出结果："\u4f60"好
```

- **s**：`str()` 是面向用户的，目的是可读性
- **r**：`repr()` 带有引号
- **a**：`ascii()` 是面向 Python 解析器的，返回值表示在 python 内部的含义，`ascii()`，返回 ascii 编码

## insert()

`insert()` 方法，用于在列表中指定的索引处插入一个值。

**语法格式**：`list.insert(index, object)`

- **list**：表示对 `insert` 输入的对象
- **index**：指定索引号
- **object**：要插入列表的对象

例如：

```python
mylist = [10, 20, 30, 40]
mylist.insert(2, 60)

print(mylist)  # 输出结果：[10, 20, 60, 30, 40]
```

## append()

`append()` 方法，用于在列表结尾处添加一个值，列表只占一个索引位。

**语法格式**：`list.append(object)`

- **list**：表示对 `append` 输入的对象
- **object**：要添加列表的对象

例如：

```python
mylist = [10, 20, 30]
mylist01 = [10, 20, 30]
mylist.append(40)
mylist01.append([40, 50])

print(mylist)  # 输出结果：[10, 20, 30, 40]
print(mylist01)  # 输出结果：[10, 20, 30, [40, 50]]
```

## extend()

`extend()` 方法，用于合并列表，将列表中的每个元素都追加进来。

**语法格式**：`list.extend(object)`

- **list**：表示对 `extend` 输入的对象
- **object**：要合并列表的对象

例如：

```python
mylist = [10, 20, 30]
mylist01 = [30, 40, 50]
mylist.extend(mylist01)

print(mylist)  # 输出结果：[10, 20, 30, 30, 40, 50]
```

::: tip
列表中的元素允许重复
:::

## remove()

`remove()` 方法，用于删除列表指定的值。

**语法格式**：`list.remove(object)`

- **list**：表示对 `remove` 输入的对象
- **object**：要删除列表的对象

例如：

```python
mylist = [10, 20, 30, 40]

mylist.remove(30)
print(mylist)  # 输出结果：[10, 20, 40]
```

## pop()

`pop()` 方法，用于删除列表指定的索引，默认删除最后一个元素。

**语法格式**：`list.pop(index)`

- **list**：表示对 `pop` 输入的对象
- **index**：指定要删除列表的索引

例如：

```python
mylist = [10, 20, 30, 40]
mylist01 = [10, 20, 30, 40]
mylist02 = [10, 20, 30, 40]
mylist.pop()
mylist01.pop(1)
mylist02.pop(-1)

print(mylist)  # 输出结果：[10, 20, 30]
print(mylist01)  # 输出结果：[10, 30, 40]
print(mylist02)  # 输出结果：[10, 20, 30]
```

## clear()

`clear()` 方法，用于清空列表，并且会删除地址空间，导致这些值被清空无法存储。该列表仍然存在，但没有内容。

**语法格式**：`list.clear()`

- **list**：表示对 `clear` 输入的对象

例如：

```python
mylist = [10, 20, 30, 40]
mylist01 = []
mylist01.append(mylist)

print(mylist01)  # 输出结果：[[10, 20, 30, 40]]

mylist.clear()

print(mylist)  # 输出结果：[]
print(mylist01)  # 输出结果：[[]]
```

## sort()

`sort()` 方法，用于按字母排序，改变原有列表。

**语法格式**：`iterable.sort([key[, reverse]])`

- **iterable**：表示对 sort 输入可迭代对象
- **key**：指定带有一个参数的函数，用于从每个列表元素中提取比较键
- **reverse**：为一个布尔值，默认为 `False`。如果设为 `False`，实现升序排序；如果设为 `True`，实现降序排序

例如：

```python
mylist = ["zero", "banana", "Orange", "Kiwi", "cherry"]
mylist01 = ["zero", "banana", "Orange", "Kiwi", "cherry"]
mylist02 = ["zero", "banana", "Orange", "Kiwi", "cherry"]

mylist.sort()
y = mylist.sort()
mylist01.sort(reverse=True)
mylist02.sort(key=str.lower)

print(mylist)  # 输出结果：['Kiwi', 'Orange', 'banana', 'cherry', 'zero']
print(y)  # 输出结果：None
print(mylist01)  # 输出结果：['zero', 'cherry', 'banana', 'Orange', 'Kiwi']
print(mylist02)  # 输出结果：['banana', 'cherry', 'Kiwi', 'Orange', 'zero']
```

## reverse()

`reverse()` 方法，用于将列表倒序，改变原有列表。

**语法格式**：`list.reverse()`

- **list**：表示对 `reverse` 输入的对象

例如：

```python
mylist = ["zero", "banana", "Orange", "Kiwi", "cherry"]
mylist01 = ["zero", "banana", "Orange", "Kiwi", "cherry"]

mylist.reverse()

print(mylist)  # 输出结果：['cherry', 'Kiwi', 'Orange', 'banana', 'zero']
```

## reversed()

`reversed()` 方法，用于将序列反转，不改变原有序列。

**语法格式**：`type.reversed(iterable)`

- **type**：表示对 `reversed` 输入的类型
- **iterable**：指定可迭代对象

例如：

```python
a = [20, 50, 40, 10, 30]
b = list(reversed(a))

print(list(reversed(a)))  # 输出结果：[30, 10, 40, 50, 20]
print(a)  # 输出结果：[20, 50, 40, 10, 30]
print(b)  # 输出结果：[30, 10, 40, 50, 20]
```

## copy()

`copy()` 方法，用于制作列表的副本。

**语法格式**：`list.copy()`

- **list**：表示对 `copy` 输入的对象

例如：

```python
mylist = ["zero", "banana", "Orange", "Kiwi", "cherry"]
mylist01 = mylist.copy()

print(mylist01)  # 输出结果：['zero', 'banana', 'Orange', 'Kiwi', 'cherry']
```

## count()

`count()` 方法，用于返回某字符出现的次数，如果字符不存在，则返回 `0`。

**语法格式**：`str.count(sub[, start[, end=len(string)]])`

- **str**：表示对 `count` 输入的对象
- **sub**：搜索的子字符串
- **start**：字符串开始搜索的位置。默认为第一个字符，第一个字符索引值为 `0`
- **end**：字符串中结束搜索的位置。默认为字符串的最后一个位置

例如：

```python
string = 'Hello, World! Hello, Python!'

print(string.count('I'))  # 输出结果：0
print(string.count('H'))  # 输出结果：2
print(string.count('H', 1))  # 输出结果：1
print(string.count('H', 0, 20))  # 输出结果：2
```

## index()

`index()` 方法，用于获取指定元素在列表中首次出现的索引位置。

**语法格式**：`list.index(object[, start, [end]])`

- **list**：表示对 `index` 输入的对象
- **object**：指定要查找的元素对象
- **start**：指定索引起始位置
- **end**：指定索引结束位置

```python
mylist = [10, 20, 30, 10, 50]
num = mylist.index(10)
num01 = mylist.index(10, 1, 5)
num02 = mylist.index(10, 1, 3)

print(num)  # 输出结果：0
print(num01)  # 输出结果：3
print(num02)  # 输出结果：报错，10 不在列表
```

## get()

`get()` 方法，用于获取字典中键的值。

**语法格式**：`dict.get(key, value)`

- **dict**：表示对 `get` 输入的对象
- **key**：指定在字典中要返回值的键
- **value**：指定如果键不存在字典中时，要返回的值，默认为 `None`

例如：

```python
mydict = {'zhangsan': '20', 'lisi': '24'}

print(mydict.get('zhangsan'))  # 输出结果：20
print(mydict.get('wangwu'))  # 输出结果：None
print(mydict.get('wangwu', "字典中不存在"))  # 输出结果：字典中不存在
```

## items()

`items()` 方法，用于以列表返回可遍历的（键, 值）元组数组。

**语法格式**：`dict.items()`

- **dict**：表示对 `items` 输入的对象

例如：

```python
mydict = {'zhangsan': '20', 'lisi': '24'}

print(mydict.items())

for key, value in mydict.items():
    print(key, "的年龄是", value)


# 输出结果
dict_items([('zhangsan', '20'), ('lisi', '24')])
zhangsan 的年龄是 20
lisi 的年龄是 24
```

## add()

`add()` 方法，用于添加元素到集合中。

**语法格式**：`set.add(object)`

- **set**：表示对 `add` 输入的对象
- **object**：表示要添加的元素对象

例如：

```python
myset = {10, 20, 30}
myset.add(40)

print(myset)  # 输出结果：{40, 10, 20, 30}
```

## join()

`join()` 方法，用于合并字符串。

**语法格式**：`strnew = string.join(iterable)`

- **strnew**：表示合并后生成的字符串名称
- **string**：字符串类型，指定合并时的分隔符
- **iterable**：可迭代对象

例如：

```python
mylist = ['zhangsan', 'lisi', 'wangwu']
mystr01 = ' '.join(mylist)
mystr02 = '@'.join(mylist)

print(mystr01)  # 输出结果：zhangsan lisi wangwu
print('@' + mystr02)  # 输出结果：@zhangsan@lisi@wangwu
```

## find()

`find()` 方法，用于检索是否包含指定的子字符串，如果检索的字符串不存在，则返回 `-1`；如果存在，则返回首次出现该字符串时的索引。

**语法格式**：`str.find(sub[, start[, end=len(string)]])`

- **str**：表示对 find 输入的对象
- **sub**：搜索的子字符串
- **start**：字符串开始搜索的位置。默认为第一个字符，第一个字符索引值为 `0`
- **end**：字符串中结束搜索的位置。默认为字符串的最后一个位置

例如：

```python
string = 'Hello, World! Hello, Python!'

print(string.find('I'))  # 输出结果：-1
print(string.find('H'))  # 输出结果：0
print(string.find('H', 1))  # 输出结果：14
print(string.find('H', 0, 20))  # 输出结果：0
```

## startswith()

`startswith()` 方法，用于检索字符串是否以指定子字符串开头，如果是则返回 `True`，否则返回 `False`。

**语法格式**：`str.startswith(prefix[, start[, end=len(string)]])`

- **str**：表示对 `startswith` 输入的对象
- **prefix**：搜索的子字符串
- **start**：字符串开始搜索的位置。默认为第一个字符，第一个字符索引值为 `0`
- **end**：字符串中结束搜索的位置。默认为字符串的最后一个位置

例如：

```python
string = 'Hello, World! Hello, Python!'

print(string.startswith('I'))  # 输出结果：False
print(string.startswith('H'))  # 输出结果：True
print(string.startswith('H', 1))  # 输出结果：False
print(string.startswith('H', 0, 20))  # 输出结果：True
```

## endswith()

`endswith()` 方法，用于检索字符串是否以指定子字符串结尾，如果是则返回 `True`，否则返回 `False`。

**语法格式**：`str.endswith(suffix[, start[, end=len(string)]])`

- **str**：表示对 `endswith` 输入的对象
- **suffix**：搜索的子字符串
- **start**：字符串开始搜索的位置。默认为第一个字符，第一个字符索引值为 `0`
- **end**：字符串中结束搜索的位置。默认为字符串的最后一个位置

例如：

```python
string = 'Hello, World! Hello, Python!'

print(string.endswith('I'))  # 输出结果：False
print(string.endswith('!'))  # 输出结果：True
print(string.endswith('!', 13))  # 输出结果：True
print(string.endswith('!', 0, 20))  # 输出结果：False
```

## encode()

`encode()` 方法，用于将字符串转换为二进制数据（即 bytes），也称为 “编码”。

**语法格式**：`str.encode([encoding="utf-8"][, error="strict"])`

- **str**：表示对 `encode` 输入的字符串
- **encoding="utf-8**"：用于指定进行转码时采用的字符编码，默认为 `UTF-8`，如果使用简体中文，则设置为 `GB2312`
- **error**：指定错误处理方式，值为 `strict` 时，遇到非法字符就抛出异常；值为 `ignore` 时，忽略非法字符；值为 `replace` 时，用 `?` 替换非法字符；值为 `xmlcharrefreplace` 时，使用 `XML` 的字符引用等。默认为 `strict`

例如：

```python
mystr = "我喜欢用 Python"

print(mystr.encode('UTF-8'))  # 输出结果：b'\xe6\x88\x91\xe5\x96\x9c\xe6\xac\xa2\xe7\x94\xa8 Python'
print(mystr.encode('GB2312'))  # 输出结果：b'\xce\xd2\xcf\xb2\xbb\xb6\xd3\xc3 Python'
print(mystr.encode('GBK'))  # 输出结果：b'\xce\xd2\xcf\xb2\xbb\xb6\xd3\xc3 Python'
```

## decode()

`decode()` 方法，将二进制数据转换为字符串，将 `encode()` 方法转换的结果再转换为字符串，也称为 “解码”。

**语法格式**：`bytes.decode([encoding="utf-8"][, error="strict"])`

- **bytes**：表示对 `decode` 输入的二进制数据
- **encoding="utf-8"**：用于指定进行转码时采用的字符编码，默认为 `UTF-8`，如果使用简体中文，则设置为 `GB2312`
- **error**：指定错误处理方式，值为 `strict` 时，遇到非法字符就抛出异常；值为 `ignore` 时，忽略非法字符；值为 `replace` 时，用 `?` 替换非法字符；值为 `xmlcharrefreplace` 时，使用 `XML` 的字符引用等。默认为 `strict`

::: tip
在设置解码采用的字符编码时，需要与编码时采用的字符编码一致
:::

例如：

```python
mybytes01 = b'\xe6\x88\x91\xe5\x96\x9c\xe6\xac\xa2\xe7\x94\xa8 Python'
mybytes02 = b'\xce\xd2\xcf\xb2\xbb\xb6\xd3\xc3 Python'
mybytes03 = b'\xce\xd2\xcf\xb2\xbb\xb6\xd3\xc3 Python'

print(mybytes01.decode('UTF-8'))  # 输出结果：我喜欢用 Python
print(mybytes01.decode('GB2312'))  # 输出结果：UnicodeDecodeError: 'gb2312' codec can't decode byte 0xe6 in position 0: illegal multibyte sequence。GB2312 解码器无法解码
print(mybytes02.decode('GB2312'))  # 输出结果：我喜欢用 Python
print(mybytes03.decode('GBK'))  # 输出结果：我喜欢用 Python
```

## \_\_new\_\_()

`__new__()` 方法，用于创建一个 cls 类的新实例。`__new__()` 是一个由 `object` 基类提供的 **静态方法**（因为是特例所以您不需要显式地声明），它会将所请求实例所属的类作为第一个参数。其余的参数会被传递给对象构造器表达式（对类的调用）。`__new__()` 的返回值应为新对象实例（通常是 cls 的实例）。

如果 `__new__()` 在构造对象期间被发起调用并且它返回了一个 cls 的实例，则新实例的 `__init__()` 方法将以 `__init__(self[, ...])` 的形式被发起调用，其中 `self` 为新实例而其余的参数与被传给对象构造器的参数相同。

如果 `__new__()` 未返回一个 cls 的实例，则新实例的 `__init__()` 方法就不会被执行。

**语法格式**：`__new__(cls[, ...])`

- **cls**：必须指定且必须是第一个参数
- **[, ...]**：可以指定一些 `*arg` 和 `**kwargs`

当 Python 实例化一个对象时，首先调用 `__new__()` 方法构造一个类的实例，并为其分配对应类型的内存空间，该实例的内存地址就是它的唯一标识符。然后再调用 `__init__()` 方法对实例进行初始化，通常是对该实例的属性进行初始化。

例如：

```python
"""先调用 __new__() 方法再调用 __init__() 方法"""
class Person(object):
    def __new__(cls):
        print("__new__ called")
        return super().__new__(cls)
    
    def __init__(self):
        print("__init__ called")


a = Person()


# 输出结果
__new__ called
__init__ called


"""__new__() 方法构造一个类实例，并将该实例传递给自身的 __init__() 方法，即 __init__() 方法的 self 参数"""
class Person(object):
    def __new__(cls):
        print("__new__ called")
        instance = super().__new__(cls)
        print(type(instance))
        print(instance)
        print(id(instance))
        return instance
    
    def __init__(self):
        print("__init__ called")
        print(id(self))


b = Person()


# 输出结果
__new__ called
<class '__main__.Person'>
<__main__.Person object at 0x1093c1580>
4449899904
__init__ called
4449899904


"""如果 __new__() 方法不返回任何实例的话，__init__() 方法将不会被调用"""
class Person(object):
    def __new__(cls):
        print("__new__ called")

    def __init__(self):
        print("__init__ called")


c = Person()


# 输出结果
__new__ called


"""如果 __new__() 方法返回一个其他类的实例的话，那它自身的 __init__() 方法将不会被调用。而且 __new__() 方法将会初始化一个其他类的对象"""
class Animal(object):
    def __init__(self):
        pass

class Person(object):
    
    def __new__(cls):
        print("__new__ called")
        return Animal()

    def __init__(self):
        print("__init__ called")


d = Person()
print(type(d))
print(d)


# 输出结果
__new__ called
<class '__main__.Animal'>
<__main__.Animal object at 0x10fea3550>


"""如果重写 __new__() 方法时，除了 cls 参数外不再设置其他参数的话，将无法用 __init__() 方法来设置初始化参数"""
class Person(object):
    def __new__(cls):
        print("__new__ called")
        instance = super().__new__(cls)
        return instance
    
    def __init__(self, name):
        print("__init__ called")
        self.name = name


e = Person("Eric")
print(e.name)


# 输出结果
Traceback (most recent call last):
  File "example.py", line 102, in <module>
    e = Person("Eric")
TypeError: __new__() takes 1 positional argument but 2 were given


"""在重写 __new__() 方法时，需要在参数中加入 *args,**kwargs，或者显式地加入对应的参数，才能通过 __init__() 方法初始化参数"""
class Person(object):
    def __new__(cls, *args, **kwargs):  # 或者 def __new__(cls, name)
        print("__new__ called")
        instance = super().__new__(cls)
        return instance
    
    def __init__(self, name):
        print("__init__ called")
        self.name = name


e = Person("Eric")
print(e.name)


# 输出结果
__new__ called
__init__ called
Eric
```

## \_\_init\_\_()

`__init__()` 方法，这种方法是 **构造方法**。该方法是一个特殊的方法，每当创建一个类的新实例时，Python 都会自动执行它。`__init__()` 方法必须包含一个 `self` 参数，并且必须是第一个参数。`self` 参数是一个指向实例本身的引用，用于访问类中属性和方法。在方法调用时会自动传递实际参数 `self`，因此当 `__init__()` 方法只有一个参数时，在创建类的实例时，就不需要指定实际参数了。

**语法格式**：`__init__(self[, parameter[, parameter[,...]]])`

- **self**：必须指定且必须是第一个参数，`self` 参数是一个指向实例本身的引用，用于访问类中属性和方法
- **[, parameter[, parameter[,...]]]**：可选参数，用于指定类中的属性

例如：

```python
class Dog:
    def __init__(self, name, age):  # 构造方法
        self.name = name
        self.age = age


dog = Dog("球球", 2)  # 创建实例化对象，调用构造方法

print("我们家的狗狗叫：{0}，{1} 岁了。".format(dog.name, dog.age))  # 输出结果：我们家的狗狗叫：球球，2 岁了。
```

## \_\_str\_\_()

`__str__()` 方法，该方法是一个特殊的方法，每当创建一个类的新实例时，Python 都会自动执行它。用于返回一个字符串，当做这个对象的描述。

**语法格式**：`__str__(self[, parameter[, parameter[,...]]])`

- **self**：必须指定且必须是第一个参数，`self` 参数是一个指向实例本身的引用，用于访问类中属性和方法
- **[, parameter[, parameter[,...]]]**：可选参数，用于指定类中的属性

::: tip
`__str__()` 方法与 `__init__()` 方法一样，首尾双下划线修饰，也是一个默认方法

作用：用于返回一个字符串，当做这个对象的描述

如果用 `print` 打印将会打印生成器对象，所以要用 `__str__()` 方法将对象的描述符格式化
:::

例如：

```python
class Cat:
    """定义一个猫类"""
    def __init__(self, new_name, new_age):
        """在创建完对象之后会自动调用, 它完成对象的初始化的功能"""
        self.name = new_name
        self.age = new_age

    def __str__(self):
        """返回一个对象的描述信息"""
        return "名字是: %s, 年龄是: %d" % (self.name, self.age)

    def eat(self):
        print("%s在吃鱼...." % self.name)

    def drink(self):
        print("%s在喝可乐..." % self.name)

    def introduce(self):
        print("名字是: %s, 年龄是: %d" % (self.name, self.age))


tom = Cat("汤姆", 30)  # 创建了一个对象
print(tom)  # 输出结果：名字是: 汤姆, 年龄是: 30
tom.eat()  # 输出结果：汤姆在吃鱼....
tom.drink()  # 输出结果：汤姆在喝可乐...
tom.introduce()  # 输出结果：名字是: 汤姆, 年龄是: 30
```

## \_\_name\_\_ == '\_\_main\_\_'

`__name__ == '__main__'` 方法，是用来控制 Python 文件执行的场景。

Python 文件通常有两种执行方法：

- 作为脚本文件直接执行
- 作为模块 import 导入到其它的 Python 脚本中执行

`if __name__ == '__main__'` 中的代码只有在作为脚本文件才会被执行，而作为模块 `import` 导入到其它的 Python 脚本中不会执行。

例如：

```python
"""
创建名为 test.py 文件
"""

print("Hello, World!")
print("__name__：", __name__)

if __name__ == '__main__':
    print("Hello, Python!")


# 输出结果。if __name__=="__main__": 语句之前和之后的代码都被执行
Hello, World!
__name__： __main__
Hello, Python!

"""
创建名为 test01.py 文件，将 test.py 文件作为模块导入
"""

import test


# 输出结果。if __name__=="__main__": 之前的语句被执行，之后的没有被执行
Hello, World!
__name__： test
```

::: tip
每个 Python 模块（Python 文件，也就是此处的 `test.py` 和 `test01.py`）都包含内置的变量 `__name__`，当该模块被直接执行的时候，`__name__` 等于文件名（包含后缀 `.py` ）；如果该模块 import 到其他模块中，则该模块的 `__name__` 等于模块名称（不包含后缀 `.py`），而 `__main__` 始终指当前执行模块的名称（包含后缀 `.py`）。进而当模块被直接执行时，`__name__ == '__main__'` 结果为假
:::

## close()

`close()` 方法，对打开的文件进行关闭，以免对文件造成不必要的破坏。

**语法格式**：`file.close()`

- **file**：为打开的文件对象

例如：

```python
file = open('test.txt', 'r', encoding='utf-8')
print(file)  # 输出结果：<_io.TextIOWrapper name='test.txt' mode='r' encoding='utf-8'>

file.close()
```

::: tip
`close()` 方法先刷新缓冲区中还没有写入的信息，然后再关闭文件。这样可以将没有写入到文件的内容写入到文件中，在关闭文件后，便不能再进行写入操作了
:::

## write()

`write()` 方法，可以向文件中写入内容。

**语法格式**：`file.write(string)`

- **file**：指定要打开的文件对象
- **string**：指定要写入的内容

::: warning
在调用 `write()` 方法向文件中写入内容的前提是在打开文件时，指定打开模式为 `w`（可写）或 `a`（追加），否则会报错
:::

使用 `w` 读写模式写入内容。例如：

```python
file = open('test.txt', 'w')
file.write("Hello, World!\n")

print("写入内容")

file.close()


# 输出结果
写入内容
```

::: tip
在写入文件后，一定要调用 `close()` 方法关闭文件，否则写入的内容不会保存到文件中。这是因为当写入文件内容时，操作系统不会立刻把数据写入到磁盘中，而是先缓存起来，只有调用 `close()` 方法时才会将数据写入到磁盘中
:::

使用 `a` 追加模式写入内容。例如：

```python
file = open('test.txt', 'a')
file.write("Hello, Python!")

print("写入内容")

file.close()
```

## read()

`read()` 方法，用于读取指定个数的字符。

**语法格式**：`file.read([size])`

- **file**：指定要读取的文件对象
- **size**：指定要读取字符的个数，如果省略，则读取所有内容

::: warning
在调用 `read()` 方法读取文件内容的前提时在打开文件时，指定打开模式为 `r`（只读）或 `r+`（读写），否则会报错
:::

例如：

```python
with open('test.txt', 'r') as file:
    mystr = file.read()
    print(mystr)


# 输出结果
Hello, World!
Hello, Python!
```

## seek()

`seek()` 方法，用于将文件的指针移动到只读位置，然后再应用 `read()` 方法读取，可以读取文件部分内容。

**语法格式**：`file.seek(offset[, whence])`

- **file**：指定已经打开的文件对象
- **offset**：指定移动的字符个数，具体位置与 `whence` 参数有关
- **whence**：指定从什么位置开始计算。默认为 `0`，值为 `0` 表示从文件头开始计算，值为 `1` 表示从当前位置开始计算，值为 `2` 表示从文件末尾开始计算

例如：

```python
with open('test.txt', 'r') as file:
    file.seek(6)
    mystr = file.read(10)
    print(mystr)


# 输出结果
 World!
He
```

::: tip
对于 `whence` 参数，如果在打开文件时，没有使用 `b` 模式（即 `rb`），那么只允许从文件头开始计算相对位置，从文件末尾计算时就会抛出异常

在使用 `seek()` 方法时，如果采用 `GBK` 编码，那么 `offset` 的值是按一个汉字（包括中文标点符号）占两个字符计算，采用 `UTF-8` 编码，则一个汉字占三个字符，不过无论采用何种编码英文和数字都是按一个字符计算
:::

## readline()

`readline()` 方法，用于每次读取一行数据。

**语法格式**：`file.readline()`

- **file**：指定已经打开的文件对象

例如：

```python
with open('test.txt', 'r') as file:
    num = 0
    while True:
        num += 1
        line = file.readline()
        if line == '':
            break
        print(num, line)


# 输出结果
1 Hello, World!

2 Hello, Python!
```

## readlines()

`readlines()` 方法，用于读取全部行，返回的是一个字符串列表，每行内容为一个元素。

**语法格式**：`file.readlines()`

- **file**：指定要打开的文件对象

例如：

```python
with open('test.txt', 'r') as file:
    lines = file.readlines()
    print(lines)  # 输出结果：['Hello, World!\n', 'Hello, Python!']
```

## \_\_all\_\_

`__all__` 方法，在模块中用于控制可以被导入的功能列表；但在包里面，`__all__` 是控制可以被导入的模块列表，即声明哪些模块可以被导入。

包里面的 `__all__` 是在 `__init__` 文件中声明的，而不是在哪个模块中写的。

例如：

```python
"""
在模块中使用：
新建了一个叫 module1 的模块，模块代码有两个功能：fun1 和 fun2
"""
def fun1(): 
    print("这是功能 1")


def fun2():
    print("这是功能 2")


__all__ = ["fun1"]  # 声明只能调用 fun1() 模块


"""
在另一个 Python 文件中导入模块中的所有方法
"""
from module1 import *

fun1()
fun2()


# 输出结果
这是功能 1


"""
在包中使用：
在名为 demo 的包里面有 module1 和 module2 两个模块，但在 __init__ 文件中被 __all__ 声明只有 module1 模块可以使用，__init__ 文件的代码如下
"""
__all__ = ["module1"]  # module1 模块允许被导入


"""
在新的 Python 文件中导入 demo 包里面的 module1 和 module2 两个模块
"""
from demo import *

module1.fun1()
module2.fun1()


# 输出结果
这是功能 1
```

## \_\_iter\_\_()

`__iter__()` 方法，用于返回一个迭代器，与 `iter()` 内置函数作用一样

例如：

```python
mylist = [1, 2, 3, 4]
ite = mylist.__iter__()  # 接收一下 __iter__() 干了什么

print(ite)  # 输出结果：<list_iterator object at 0x0000022FAB878670>
```

## \_\_next\_\_()

`__next__()` 方法，用于获取迭代器中的每一个元素，与 `next()` 内置函数作用一样

例如：

```python
mylist = [1, 2, 3, 4]
ite = mylist.__iter__()  # 接收一下 __iter__() 干了什么

print(ite)  # 输出结果：<list_iterator object at 0x0000022FAB878670>

print(ite.__next__())
print(ite.__next__())
print(ite.__next__())
print(ite.__next__())


# 输出结果
1
2
3
4
```

## \_\_call\_\_

`__call__` 方法，是一个特殊方法，用于将一个类实例要变成一个可调用对象，`__call__` 参数可变。平时自定义的函数、内置函数和类都属于可调用对象，但凡是可以把一对括号 `()` 应用到某个对象身上都可称之为可调用对象，判断对象是否为可调用对象可以用函数 `callable`。

此方法会在实例作为一个函数被 **调用** 时被调用；如果定义了此方法，则 `x(arg1, arg2, ...)` 就大致可以被改写为 `type(x).__call__(x, arg1, ...)`。

例如：

```python
class Person(object):
    def __init__(self, name, gender):
        self.name = name
        self.gender = gender

    def __call__(self, friend):
        print('My name is %s...' % self.name)
        print('My friend is %s...' % friend)


p = Person('Tom', 'male')
p('Tony')
print(callable(p))


# 输出结果
My name is Tom...
My friend is Tony...
True


# 对于自定义函数的调用，通常情况下是在函数名后加 () 来调用。但同样也可以用 __call__() 方法来调用
def test():
    print("Function test() is called")


print("Function test() is callable: %s" % callable(test))
test()
test.__call__()


# 输出结果
Function test() is callable: True
Function test() is called
Function test() is called
```

