---
title: 正则表达式
icon: regexp
date: 2023-05-31
category: Languages
tag:
    - Python
---

正则表达式就是记录文本规则的代码。在处理字符串时，用于查找符合某些复杂规则的字符串的需求。

## 行定位符

用于描述字符串的边界。

- **^**：表示行的开始。例如：`^H`，表示匹配以 `H` 字符开头的行
- **\$**：表示行的结尾。例如：`!$`，表示匹配以 `!` 号结尾的行

## 元字符

常用的元字符如下所示：

|  元字符  |  说明  |
|  :----:  |  :----  |
|  **.**  |  匹配除换行符以外的任意字符。例如：`.` 在 “`mr\nM\tR`” 中匹配 “`m`、`r`、`M`、`\t`、`R`”  |
|  **\w**  |  匹配字母、数字、下划线和汉字。例如：`\w` 在 “`m_af\n7在`” 中匹配 “`m`、`_`、`a`、`f`、`7`、`在`”  |
|  **\W**  |  匹配除字母、数字、下划线和汉字以外的字符。例如：`\W` 在 “`m_af\n7在`” 中匹配 “`\n`”  |
|  **\s**  |  匹配单个的空白符（包括 Tab 键和换行符）。例如：`\s` 在 “`mr\nM\tR`” 中匹配 “`\n`、`\t`”  |
|  **\S**  |  匹配除单个的空白符（包括 Tab 键和换行符）以外的所有字符。例如：`\S` 在 “`mr\nM\tR`” 中匹配 “`m`、`r`、`M`、`R`”  |
|  **\b**  |  匹配单词的开始或结束，单词的分界符通常是空格，标点符号或者换行。例如：`\bm` 在 “`mr\nM\tRm`” 中匹配 “`m`”  |
|  **\d**  |  匹配数字。例如：`\d` 在 “`m_af\n7`在” 中匹配 “`7`”  |

## 限定符

常用的限定符如下所示：

|  限定符  |  说明  |
|  :----:  |  :----  |
|  **?**  |  匹配前面的字符零次或一次。例如：“`colou?r`” 可以匹配 “`colour`、`color`”  |
|  **+**  |  匹配前面的字符一次或多次。例如：“`colou+r`” 可以匹配 “`colour`、`colouu...ur`”  |
|  **\***  |  匹配前面的字符零次或多次。例如：“`colou*r`” 可以匹配 “`color`、`colouu..ur`”  |
|  **{n}**  |  匹配前面的字符 n 次。例如：“`colou{2}r`” 可以匹配 “`colouur`”  |
|  **{n,}**  |  匹配前面的字符最少 n 次。例如：“`colou{2,}r`” 可以匹配 “`colouur`、`colouu..ur`”  |
|  **{n,m}**  |  匹配前面的字符最少 n 次，最多 m 次。例如：“`colou{2,4}r`” 可以匹配 “`colouur`、`colouuur`、`colouuuur`”  |

## 字符类

- **[]**：表示匹配指定字符。例如：`[bc]` 在 “`abcd`” 中匹配 “`b`、`c`”

## 排除字符

- **[^]**：将 “`^`” 放到 “`[]`” 里面表示不匹配指定字符。例如：`[^a]` 在 “`abcd`” 中匹配 “`b`、`c`、`d`”

## 选择字符

- **(|)**：表示选择指定字符匹配。例如：`([a-z]|[0-9])` 在 “`abcd1234ABCD`” 中匹配 “`a`、`b`、`c`、`d`、`1`、`2`、`3`、`4`”

## 转义字符

- **\\**：表示在匹配指定字符时将特殊字符以普通字符匹配。例如：`[0-9]\\.[0-9]` 在 “`12.34`” 中匹配 “`2.3`”

## 分组

分组有两个作用：

- **第一个作用**：改变限定符的作用范围。如 “`|`、`*`、`^`” 等。例如：`([a-z]|[0-9])` 在 “`abcd1234ABCD`” 中匹配 “`a`、`b`、`c`、`d`、`1`、`2`、`3`、`4`”
- **第二个作用**：分组，也就是子表达式。如 “`(\.[0-9]{1,3}){3}`”，就是对分组 `(\.[0-9]{1,3})` 进行重复操作

## 在 Python 中使用正则表达式

在 Python 中使用正则表达式时，是将其作为模式字符串使用的，由于模式字符串中可能包含大量的特殊字符和反斜杠，所以在模式字符前面加 `r` 或 `R`。例如：`r'\bm\w*\b'`

## 使用 re 模块

### match()

使用 re 模块的 `match()` 方法从字符串的开始处进行匹配，如果在开始位置匹配成功则返回 Match 对象，否则返回 None。

**语法格式**：`re.match(pattern, string[, flags])`

- **pattern**：表示模式字符串
- **string**：表示要匹配的字符串
- **flags**：表示标志位，用于控制匹配方式。如：是否区分字母大小写

**常用的标志如下所示：**

|  标志位  |  说明  |
|  :----:  |  :----  |
|  **A** 或 **ASCII**  |  对于` \w`、`\W`、`\b`、`\B`、`\d`、`\D`、`\s` 和 `\S` 只进行 ASCII 匹配  |
|  **I** 或 **IGNORECASE**  |  执行不区分字母大小写的匹配  |
|  **M** 或 **MULTILINE**  |  将 `^` 和 `$` 用于包括整个字符串的开始和结尾的每一行（默认情况下，仅适用于整个字符串的开始和结尾处）  |
|  **S** 或 **DOTALL**  |  使用（`.`）字符匹配所有字符，包括换行符  |
|  **X** 或 **VERBOSE**  |  忽略模式字符串中未转义的空格和注释  |

例如：判断字符是否以 “Hel” 开头。

```python
import re

pattern = r'Hel\w+'
pattern01 = r'Wor\w+'
mystr = 'Hello, World! Hello, Python!'
match = re.match(pattern, mystr, re.I)
match01 = re.match(pattern01, mystr, re.I)

print(match)  # 输出结果：<re.Match object; span=(0, 5), match='Hello'>
print(match01)  # 输出结果：None
```

Match 对象中包含了匹配值的位置和匹配数据。其中，Match 对象的常用方法或属性如下：

- **start() 方法**：可以获取匹配值的起始位置
- **end() 方法**：可以获取匹配值的结束位置
- **span() 方法**：可以返回匹配位置的元组
- **group() 方法**：可以返回指定匹配的数据
- **string 属性**：可以获取要匹配的字符串

例如：

```python
import re


pattern = r'Hel\w+'
mystr = 'Hello, World! Hello, Python!'
match = re.match(pattern, mystr, re.I)

print(match)  # 输出结果：<re.Match object; span=(0, 5), match='Hello'>
print("匹配值的起始位置：", match.start())  # 输出结果：匹配值的起始位置： 0
print("匹配值的结束位置：", match.end())  # 输出结果：匹配值的结束位置： 5
print("匹配值的元组：", match.span())  # 输出结果：匹配值的元组： (0, 5)
print("要匹配的字符串：", match.string)  # 输出结果：要匹配的字符串： Hello, World! Hello, Python!
print("匹配数据：", match.group())  # 输出结果：匹配数据： Hello
```

### search()

使用 `search()` 方法用于在整个字符串中搜索第一个匹配的值，如果在起始位置匹配成功则返回 Match 对象，否则返回 None。

**语法格式**：`re.search(pattern, string[, flags])`

- **pattern**：表示模式字符串
- **string**：表示要匹配的字符串
- **flags**：表示标志位，用于控制匹配方式。如：是否区分字母大小写

例如：

```python
import re

pattern = r'hel\w+'
mystr = 'Hello, World! Hello, Python!'
mystr01 = 'World! Hello Hello, Python!'
match = re.search(pattern, mystr, re.I)
match01 = re.search(pattern, mystr01, re.I)

print(match)  # 输出结果：<re.Match object; span=(0, 5), match='Hello'>
print(match01)  # 输出结果：<re.Match object; span=(7, 12), match='Hello'>
```

::: tip
`search()` 方法不仅仅是在字符串的起始位置搜索，其它位置有符合的匹配也可以进行搜索
:::

### findall()

使用 `findall()` 方法用于在整个字符串中搜索所有符合正则表达式的字符串，并以列表的形式返回。如果匹配成功，则返回包含匹配结构的列表，否则返回空列表。

**语法格式**：`re.findall(pattern, string[, flags])`

- **pattern**：表示模式字符串
- **string**：表示要匹配的字符串
- **flags**：表示标志位，用于控制匹配方式。如：是否区分字母大小写

例如：

```python
import re

pattern = r'hel\w+'
mystr = 'Hello, World! Hello, Python!'
mystr01 = 'World! Hello Hello, Python!'
match = re.findall(pattern, mystr, re.I)
match01 = re.findall(pattern, mystr01, re.I)

print(match)  # 输出结果：['Hello', 'Hello']
print(match01)  # 输出结果：['Hello', 'Hello']
```

如果在指定的模式字符串中包含分组，则返回与分组匹配的文本列表。例如：

```python
import re

pattern = r'[1-9]{1,3}(\.[0-9]{1,3}){3}'
num = '127.0.0.1 192.168.10.11'
match = re.findall(pattern, num)

print(match)  # 输出结果：['.1', '.11']
```

并没有得到匹配的 IP 地址，这是因为在模式字符串中出现了分组，所以得到的结果是根据分组进行匹配的结果，即 “`(\.[0-9]{1,3}){3}`” 匹配的结果。如果要获取整个模式字符串的匹配，可以将整个模式字符串使用一对小括号进行分组，然后在获取结果时，只取返回值列表的每个元素的第一个元素。例如：

```python
import re

pattern = r'([1-9]{1,3}(\.[0-9]{1,3}){3})'
num = '127.0.0.1 192.168.10.11'
match = re.findall(pattern, num)

for item in match:
    print(item[0])


127.0.0.1  # 输出结果
192.168.10.11
```

### sub()

使用 re 模块的 `sub()` 方法用于替换字符串。

**语法格式**：`re.sub(pattern, repl, string[, count[, flags]])`

- **pattern**：表示模式字符串
- **repl**：表示替换的字符串
- **string**：表示要被查找替换的原始字符串
- **count**：表示模式匹配后替换的最大次数，默认为 0 表示替换所有的匹配
- **flags**：表示标志位，用于控制匹配方式

例如：

```python
import re

pattern = r'1[34578]\d{9}'
mystr = "中奖号码为 4568，联系电话为：13645238965"
result = re.sub(pattern, '136xxxxxxxx', mystr)

print(result)  # 输出结果：中奖号码为 4568，联系电话为：136xxxxxxxx
```

### split()

使用 `split()` 方法用于实现根据正则表达式分割字符串，并以列表的形式返回。

**语法格式**：`re.split(pattern, string[, maxsplit[, flags]])`

- **pattern**：表示模式字符串
- **string**：表示要匹配的字符串
- **maxsplit**：表示最大的拆分次数
- **flags**：表示标志位，用于控制匹配方式

例如：

```python
import re

pattern = r'[?|&]'
url = 'asfa?fdgsdg&agg'
result = re.split(pattern, url)

print(result)  # 输出结果：['asfa', 'fdgsdg', 'agg']
```
