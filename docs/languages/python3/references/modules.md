---
title: 模块使用
icon: module
date: 2023-06-09
category: Languages
tag:
    - Python
---

Python 内置和第三方模块的使用。

## 内置模块

### random

[random 官网地址](https://docs.python.org/zh-cn/3/library/random.html#module-random)

`random` 内置模块，用于生成随机数。

- **random.random()**：返回随机生成的浮点数，范围在 `[0, 1]` 之间（不包括结束数字 `1`）
- **random.uniform(a, b)**：返回随机生成的一个浮点数，范围在 `[a, b]` 之间（不包括结束数字 `b`）
- **random.randint(a, b)**：生成指定范围内的整数，范围在 `[a, b]` 之间（包括开始数字 `a` 和结束数字 `b`）
- **random.randrange(a, b)**：生成指定范围内的整数，范围在 `[a, b]` 之间（包括开始数字 `a`，不包括结束数字 `b`）
- **random.seed(a)**：用于固定随机生成的字符，`a` 可以是 str、bytes、float、int、bytearray
- **random.choice()**：从指定序列中获取一个随机元素
- **random.sample(sequence, k)**：用于从指定序列中随机获取指定长度的片段，`sample()` 函数不会修改原有序列，`sequence` 指定序列，`k` 指定要输出元素的个数

例如：显示 1 到 100 之间的一个随机数。

```python
import random

print(random.random())  # 输出结果：0.201879620585662
print(random.uniform(1, 10))  # 输出结果：7.9777317888163894
print(random.randint(1, 10))  # 输出结果：8
print(random.randrange(1, 10))  # 输出结果：4

random.seed("af")
x = random.random()
print(x)  # 输出结果：0.26588175145144166

random.seed(10)
y = random.random()
print(y)  # 输出结果：0.5714025946899135

random.seed(10)
z = random.random()
print(z)  # 输出结果：0.5714025946899135

print(random.choice('Hello, World!'))  # 输出结果：r


mylist = [1, 2, 3, 4, 5, 6]
print(random.sample(mylist, 1))  # 输出结果：[3]
```

### keyword

[keyword 官网地址](https://docs.python.org/zh-cn/3/library/keyword.html#module-keyword)

`keyword` 内置模块，用于返回 Python 中所有关键字的列表，避免变量名冲突。

- **keyword.kwlist**：返回 Python 中所有关键字列表
- **keyword.iskeyword("variable")**：判断变量名是否为内置关键字

```python
import keyword

print(keyword.kwlist)  # 返回所有关键字
print(keyword.iskeyword("break"))  # 判断给定的变量名是否为内置关键字


# 输出结果
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
True
```

### datetime

[datetime 官网地址](https://docs.python.org/zh-cn/3/library/datetime.html#module-datetime)

`datetime` 内置模块，用于获取日期时间。

- **datetime.date(year, month, day)**：用于指定日期
- **datetime.date.today()**：用于获取当前日期
- **datetime.date.fromtimestamp(timestamp)**：`timestamp` 是时间戳，返回 **年-月-日**
- **datetime.date.fromordinal(ordinal)**：`ordinal` 是对应于预期格列高利历序号的日期，其中公元 1 年 1 月 1 日的序号为 1，返回 **年-月-日**
- **datetime.date.fromisoformat(date_string)**：`date_string` 是日期字符串，返回 **年-月-日**
- **datetime.date.fromisocalendar(year, week, day)**：返回 **年-月-日**
- **datetime.date.replace([year=year[, month=month[, day=day]]])**：修改为指定 **年-月-日**
- **datetime.date.timetuple()**：将获取的当前日期转换为元组对象
- **datetime.date.toordinal()**：将获取的当前日期转换为预期格列高利历序号的日期
- **datetime.date.weekday()**：用于从当前日期对象中获取星期。值为 `0-6` 中的一个，`0` 为周一，`1` 为周二，以此类推
- **datetime.date.isoweekday()**：用于从当前日期对象中获取星期。值为 `1-7` 中的一个，`1` 为周一，`2` 为周二，以此类推
- **datetime.date.isocalendar()**：把日期对象返回一个带有年月日的元组
- **datetime.date.isoformat()**：将获取的当前日期转换为字符串
- **datetime.datetime(year, month, day[, hour[, minute[, second[, microsecond[, tzinfo]]]]])**：用于指定日期时间
- **datetime.datetime.today()**：用于获取当前日期和时间
- **datetime.datetime.now()**：用于获取当前日期和时间
- **datetime.datetime.now().weekday()**：用于从当前日期对象中获取星期。值为 `0-6` 中的一个，`0` 为周一，`1` 为周二，以此类推
- **datetime.datetime.now().date()**：用于从当前日期对象中获取年月日
- **datetime.datetime.now().day**：用于从当前日期对象中获取日
- **datetime.datetime.strptime('2014-03-16 12:21:21', '%Y-%m-%d %H:%M:%S')**：将字符串转为 datetime 对象
- **datetime.datetime.strftime(datetime.datetime.now(), '%Y-%m-%d %H:%M:%S')**：将 datetime 对象转换为 str 表示形式
- **datetime.time(hour[, minute[, second[, microsecond[, tzinfo]]]])**：用于指定时间
- **datetime.timedelta([days[, second[, microsecond[, milliseconds[, minute[, hour[, weeks]]]]]]])**：用于计算时间跨度

例如：

```python
import datetime

print(datetime.date(2022, 11, 4))  # 输出结果：2022-11-04
print(datetime.date.today())  # 输出结果：2022-11-04
print(datetime.date.fromtimestamp(1672196826.5001976))  # 输出结果：2022-12-28
print(datetime.date.fromordinal(738517))  # 输出结果：2022-12-28
print(datetime.date.fromisoformat('2022-12-28'))  # 输出结果：2022-12-28
print(datetime.date.fromisocalendar(2022, 52, 3))  # 输出结果：2022-12-28

mydate = datetime.date(2022, 12, 28)
print(mydate.replace(year=2023, month=1, day=23))  # 输出结果：2023-1-23
print(mydate.timetuple())  # 输出结果：time.struct_time(tm_year=2022, tm_mon=12, tm_mday=28, tm_hour=0, tm_min=0, tm_sec=0, tm_wday=2, tm_yday=362, tm_isdst=-1)
print(mydate.toordinal())  # 输出结果：738517
print(mydate.weekday())  # 输出结果：2
print(mydate.isoweekday())  # 输出结果：3
print(mydate.isocalendar())  # 输出结果：datetime.IsoCalendarDate(year=2022, week=52, weekday=3)
print(mydate.isoformat())  # 输出结果：2022-12-28

print(datetime.datetime(2022, 11, 4))  # 输出结果：2022-11-04 00:00:00
print(datetime.datetime.today())  # 输出结果：2022-11-15 13:42:00.713318
print(datetime.datetime.now())  # 输出结果：2022-10-27 11:27:10.632539
print(datetime.datetime.now().weekday())  # 输出结果：3
print(datetime.datetime.now().date())  # 输出结果：2022-10-27
print(datetime.datetime.now().day)  # 输出结果：27
print(datetime.datetime.strptime('2022-12-28 12:21:21', '%Y-%m-%d %H:%M:%S'))  # 输出结果：2022-12-28 12:21:21
print(datetime.datetime.strftime(datetime.datetime.now(), '%Y-%m-%d %H:%M:%S'))  # 输出结果：2022-12-28 14:16:20

print(datetime.time(9, 15, 30))  # 输出结果：09:15:30
print((datetime.date.today()) - (datetime.timedelta(days=3)))  # 输出结果：2022-11-12
```

### time

[time 官网地址](https://docs.python.org/zh-cn/3/library/time.html#module-time)

`time` 内置模块，用于返回当前时间。

- **time.asctime()**：返回时间字符串。如：Wed Dec 28 14:21:02 2022 形式
- **time.gmtime()**：返回当前 UTC 时间转换为元组对象
- **time.localtime**：返回当前时间转换为元组对象
- **time.mktime(timetuple)**：将 `datetime` 元组对象转为时间戳
- **time.perf_counter()**：以小数表示的秒为单位，返回一个性能计数器的值，即用于测量较短持续时间的具有最高有效精度的时钟。它会包括睡眠状态所消耗的时间并且作用于全系统范围。返回值的参考点未被定义，因此只有两次调用之间的差值才是有效的
- **time.sleep()**：在给定的秒数内暂停调用线程的执行。参数可以是一个浮点数，以指示更精确的睡眠时间
- **time.time()**：当前时间戳
- **time.strftime(format[, t])**：将 `time` 对象转换为 `str` 表示形式。`format` 参数指定的字符串；`t` 默认为 `localtime()` 返回的当前时间

**format 参数指定字符串：**

|  参数  |  说明  |
|  :----:  |  :----  |
|  **%a**  |  缩写星期名称。例如：Wed  |
|  **%A**  |  完整星期名称。例如：Wednesday  |
|  **%b**  |  缩写月名称。例如：Dec  |
|  **%B**  |  完整月名称。例如：December  |
|  **%c**  |  日期和时间表示。例如：Wed Dec 28 15:00:36 2022  |
|  **%d**  |  十进制数 [01,31] 表示的月中日。例如：28  |
|  **%H**  |  十进制数 [00,23] 表示的小时（24小时制）。例如：15  |
|  **%I**  |  十进制数 [01,12] 表示的小时（12小时制）。例如：03  |
|  **%j**  |  十进制数 [001,366] 表示的年中日。例如：362  |
|  **%m**  |  十进制数 [01,12] 表示的月。例如：12  |
|  **%M**  |  十进制数 [00,59] 表示的分钟。例如：00  |
|  **%p**  |  本地化的 `AM` 或 `PM`。例如：PH  |
|  **%S**  |  十进制数 [00,61] 表示的秒。例如：36  |
|  **%U**  |  十进制数 [00,53] 表示的一年中的周数（星期日作为一周的第一天）。在第一个星期日之前的新年中的所有日子都被认为是在第 `0` 周。例如：52  |
|  **%w**  |  十进制数 [0（星期日）,6] 表示的周中日。例如：3  |
|  **%W**  |  十进制数 [00,53] 表示的一年中的周数（星期一作为一周的第一天）。在第一个星期一之前的新年中的所有日子被认为是在第 `0` 周。例如：52  |
|  **%x**  |  本地化的适当日期表示。例如：12/28/22  |
|  **%X**  |  本地化的适当时间表示。例如：15:00:36  |
|  **%y**  |  十进制数 [00,99] 表示的没有世纪的年份。例如：22  |
|  **%Y**  |  十进制数表示的带世纪的年份。例如：2022  |
|  **%z**  |  时区偏移以格式 `+HHMM` 或 `-HHMM` 形式的 `UTC/GMT` 的正或负时差指示，其中 `H` 表示十进制小时数字，`M` 表示小数分钟数字 [-23:59, +23:59]。例如：`+0800`  |
|  **%Z**  |  时区名称（如果不存在时区，则不包含字符），已弃用。例如：中国标准时间  |
|  **%%**  |  字面的 `%` 字符。例如：%  |

例如：

```python
print(time.asctime())  # 输出结果：Wed Dec 28 14:21:02 2022
print(time.gmtime())  # 输出结果：time.struct_time(tm_year=2022, tm_mon=12, tm_mday=28, tm_hour=6, tm_min=29, tm_sec=1, tm_wday=2, tm_yday=362, tm_isdst=0)
print(time.localtime())  # 输出结果：time.struct_time(tm_year=2022, tm_mon=12, tm_mday=28, tm_hour=14, tm_min=31, tm_sec=1, tm_wday=2, tm_yday=362, tm_isdst=0)
print(time.mktime(time.localtime()))  # 输出结果：1672209845.0
print(time.perf_counter())  # 输出结果：187313.1646997
print(time.sleep(10))
print(time.time())  # 输出结果：1672209877.5045297
print(time.strftime('%Y-%m-%d %H:%M:%S'))  # 输出结果：2022-12-28 14:54:22
```

### re

[re 官网地址](https://docs.python.org/zh-cn/3/library/re.html#module-re)

`re` 内置模块，用于通过正则表达式对字符串进⾏匹配、替换、分割等。

- **re.match(pattern, string[, flags])**：用于从字符串的开始处进行匹配。如果在开始位置匹配成功则返回 Match 对象，否则返回 None
- **re.search(pattern, string[, flags])**：用于在整个字符串中搜索第一个匹配的值。如果在起始位置匹配成功则返回 Match 对象，否则返回 None
- **re.findall(pattern, string[, flags])**：用于在整个字符串中搜索所有符合正则表达式的字符串，并以列表的形式返回。如果匹配成功，则返回包含匹配结构的列表，否则返回空列表

    - **pattern**：表示模式字符串
    - **string**：表示要匹配的字符串
    - **flags**：表示标志位，用于控制匹配方式。如：是否区分字母大小写

- **re.sub(pattern, repl, string[, count[, flags]])**：用于替换字符串

    - **pattern**：表示模式字符串
    - **repl**：表示替换的字符串
    - **string**：表示要被查找替换的原始字符串
    - **count**：表示模式匹配后替换的最大次数，默认为 0 表示替换所有的匹配
    - **flags**：表示标志位，用于控制匹配方式

- **re.split(pattern, string[, maxsplit[, flags]])**：用于实现根据正则表达式分割字符串，并以列表的形式返回
    - **pattern**：表示模式字符串
    - **string**：表示要匹配的字符串
    - **maxsplit**：表示最大的拆分次数
    - **flags**：表示标志位，用于控制匹配方式

**正则表达式：**

|  特殊字符  |  说明  |
|  :----:  |  :----  |
|  **.**  |  匹配除换行符以外的任意字符。例如：`.` 在 `mr\nM\tR` 中匹配 `m`、`r`、`M`、`\t`、`R`  |
|  **^**  |  表示行的开始。例如：`^H`，表示匹配以 `H` 字符开头的行  |
|  **$**  |  表示行的结尾。例如：`!$`，表示匹配以 `!` 号结尾的行  |
|  **?**  |  匹配前面的字符零次或一次。例如：`colou?r` 可以匹配 `colour`、`color`  |
|  **+**  |  匹配前面的字符一次或多次。例如：`colou+r` 可以匹配 `colour`、`colouu...ur`  |
|  **\***  |  匹配前面的字符零次或多次。例如：`colou*r` 可以匹配 `color`、`colouu...ur`  |
|  **{n}**  |  匹配前面的字符 n 次。例如：`colou{2}r` 可以匹配 `colouur`  |
|  **{n,}**  |  匹配前面的字符最少 n 次。例如：`colou{2,}r` 可以匹配 `colouur`、`colouu...ur`  |
|  **{n,m}**  |  匹配前面的字符最少 n 次，最多 m 次。例如：`colou{2,4}r` 可以匹配 `colouur`、`colouuur`、`colouuuur`  |
|  **\\**  |  表示在匹配指定字符时将特殊字符以普通字符匹配。例如：`[0-9]\\.[0-9]` 在 `12.34` 中匹配 `2.3`  |
|  **[]**  |  表示匹配指定字符。例如：`[bc]` 在 `abcd` 中匹配 `b`、`c`  |
|  **[^]**  |  将 `^` 放到 `[]` 里面表示不匹配指定字符。例如：`[^a]` 在 `abcd` 中匹配 `b`、`c`、`d`  |
|  **\|**  |  从左到右进行匹配。例如：`b|c` 在 `abcd1234ABCD` 中匹配 `b`、`c`  |
|  **()**  |  第一个作用：可以改变限定符的作用范围，如：`|`、`*`、`^` 等。例如：`([a-z]|[0-9])` 在 `abcd1234ABCD` 中匹配 `a`、`b`、`c`、`d`、`1`、`2`、`3`、`4`；第二个作用：分组，也就是子表达式。例如 `(\.[0-9]{1,3}){3}`，就是对分组 `(\.[0-9]{1,3})` 进行重复操作  |
|  **\A**  |  只匹配字符串开始。例如：`\Aa` 在 `abcd1234ABCD` 中匹配 `a`  |
|  **\b**  |  匹配空字符串，但只在单词的开始或结束，单词的分界符通常是空格，标点符号或者换行。例如：`\bm` 在 `mr\nM\tRm` 中匹配 `m`  |
|  **\B**  |  匹配空字符串，但不能在单词的开始或结束。例如：`\Bm` 在 `r\nM\tRm` 中匹配 `m`  |
|  **\d**  |  匹配数字。例如：`\d` 在 `m_af\n7在` 中匹配 `7`  |
|  **\D**  |  匹配非数字。例如：`\D` 在 `m_af\n7在` 中匹配 `m`、`_`、`a`、`f`、`\n`  |
|  **\s**  |  匹配空白符（包括 Tab 键和换行符）。例如：`\s` 在 `mr\nM\tR` 中匹配 `\n`、`\t`  |
|  **\S**  |  匹配非空白符（包括 Tab 键和换行符）以外的所有字符。例如：`\S` 在 `mr\nM\tR` 中匹配 `m`、`r`、`M`、`R`  |
|  **\w**  |  匹配字母、数字、下划线和汉字。例如：`\w` 在 `m_af\n7在` 中匹配 `m`、`_`、`a`、`f`、`7`、`在`  |
|  **\W**  |  匹配除字母、数字、下划线和汉字以外的字符。例如：`\W` 在 `m_af\n7在` 中匹配 `\n`  |
|  **\Z**  |  匹配字符串结尾。例如：`在\Z` 在 `m_af\n7在` 中匹配 `在`  |

**标志：**

|  标志  |  说明  |
|  :----:  |  :----  |
|  **re.A** 或 **re.ASCII**  |  对于 `\w`、`\W`、`\b`、`\B`、`\d`、`\D`、`\s` 和 `\S` 只进行 ASCII 匹配  |
|  **re.I** 或 **re.IGNORECASE**  |  执行不区分字母大小写的匹配  |
|  **re.M** 或 **re.MULTILINE**  |  将 `^` 和 `$` 用于包括整个字符串的开始和结尾的每一行（默认情况下，仅适用于整个字符串的开始和结尾处）  |
|  **re.S** 或 **re.DOTALL**  |  使用（`.`）字符匹配所有字符，包括换行符  |
|  **re.X** 或 **re.VERBOSE**  |  忽略模式字符串中未转义的空格和注释  |

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


pattern = r'hel\w+'
mystr = 'Hello, World! Hello, Python!'
mystr01 = 'World! Hello Hello, Python!'
match = re.search(pattern, mystr, re.I)
match01 = re.search(pattern, mystr01, re.I)

print(match)  # 输出结果：<re.Match object; span=(0, 5), match='Hello'>
print(match01)  # 输出结果：<re.Match object; span=(7, 12), match='Hello'>


pattern = r'hel\w+'
mystr = 'Hello, World! Hello, Python!'
mystr01 = 'World! Hello Hello, Python!'
match = re.findall(pattern, mystr, re.I)
match01 = re.findall(pattern, mystr01, re.I)

print(match)  # 输出结果：['Hello', 'Hello']
print(match01)  # 输出结果：['Hello', 'Hello']


pattern = r'1[34578]\d{9}'
mystr = "中奖号码为 4568，联系电话为：13645238965"
result = re.sub(pattern, '136xxxxxxxx', mystr)

print(result)  # 输出结果：中奖号码为 4568，联系电话为：136xxxxxxxx


pattern = r'[?|&]'
url = 'asfa?fdgsdg&agg'
result = re.split(pattern, url)

print(result)  # 输出结果：['asfa', 'fdgsdg', 'agg']
```

### decimal

[decimal 官网地址](https://docs.python.org/zh-cn/3/library/decimal.html#module-decimal)

`decimal` 内置模块，用于完全精确的十进制定点和浮点运算。

该模块的设计以三个概念为中心：`decimal` 数值、算术上下文和信号。

**decimal 数值**：是不可变对象。它由符号，系数和指数位组成。为了保持有效位，系数位不会截去末尾零。`decimal` 数值也包括特殊值例如：`Infinity`、`-Infinity` 和 `NaN`。该标准还区分 `-0` 和 `+0`。

**算术的上下文**：是指定精度、舍入规则、指数限制、指示操作结果的标志以及确定符号是否被视为异常的陷阱启用器的环境。**舍入选项包括**：`ROUND_CEILING`、`ROUND_DOWN`、`ROUND_FLOOR`、`ROUND_HALF_DOWN`、`ROUND_HALF_EVEN`、`ROUND_HALF_UP`、`ROUND_UP` 以及 `ROUND_05UP`。

**信号**：是在计算过程中出现的异常条件组。十进制模块中的信号有：`Clamped`、`InvalidOperation`、`DivisionByZero`、`Inexact`、`Rounded`、`Subnormal`、`Overflow`、`Underflow` 以及 `FloatOperation`。

对于每个信号，都有一个标志和一个陷阱启动器。遇到信号时，其标志设置为 `1`，如果陷阱启用器设置为 1，则引发异常。标志是粘性的，因此用户需要在监控计算之前重置它们。

::: tip
上下文精度和舍入仅在算术运算期间发挥作用
:::

- **decimal.Decimal(obejct)**：可以基于整数、字符串、浮点数或元组构造 Decimal 实例，Decimal 数字包括特殊值。例如：`NaN` 表示 “非数字”，正的和负的 `Infinity` 和 `-0`
- **getcontext().prec**：设定有效数字
- **decimal.Decimal(obejct).quantize(exp[, rounding=None[, context=None]])**：将数字舍入为固定指数。此方法对于将结果舍入到固定的位置的货币应用程序非常有用

**舍入模式：**

|  模式  |  说明  |
|  :----:  |  :----  |
|  **decimal.ROUND_CEILING**  |  舍入方向为正无穷大。如果为正数，保留位最后一位为 `0~9`，且保留位的后一位是 `0` 不进位，`1~9` 均进位；如果为负数，保留位最后一位为 `0~9`，且保留位的后一位为 `0~9` 均不进位  |
|  **decimal.ROUND_DOWN**  |  舍入方向为零。保留位最后一位为 `0~9`，且保留位的后一位为 `0~9` 均不进位  |
|  **decimal.ROUND_FLOOR**  |  舍入方向为负无穷大。如果为正数，保留位最后一位为 `0~9`，且保留位的后一位为 `0~9` 均不进位；如果为负数，保留位最后一位为 `0~9`，且保留位的后一位是 `0` 不进位，`1~9` 均进位  |
|  **decimal.ROUND_HALF_DOWN**  |  舍入到最接近的数，同样接近则舍入方向为零。保留位最后一位为 `0~9`，且保留位的后一位为 `0~5` 均不进位，`6~9` 均进位 |
|  **decimal.ROUND_HALF_EVEN**  |  舍入到最接近的数，同样接近则舍入到最接近的偶数。如果保留位最后一位为偶数，且保留位的后一位为 `0~4` 均不进位，`5~9` 均进位；如果保留位最后一位为奇数，且保留位的后一位为 `0~4` 均不进位，`5~9` 均进位  |
|  **decimal.ROUND_HALF_UP**  |  舍入到最接近的数，同样接近则舍入到零的反方向。保留位最后一位为 `0~9`，且保留位的后一位为 `0~4` 均不进位，`5~9` 均进位  |
|  **decimal.ROUND_UP**  |  舍入到零的反方向。保留位最后一位为 `0~9`，且保留位的后一位是 `0` 不进位；`1~9` 均进位  |
|  **decimal.ROUND_05UP**  |  如果最后一位朝零的方向舍入后为 `0` 或 `5` 则舍入到零的反方向；否则舍入方向为零。如果保留位最后一位为 `0` 或 `5`，且保留位的后一位为 `0` 不进位，为 `1~9` 均进位；如果保留位最后一位为 `1~4` 或 `6~9`，且保留位的后一位为 `0~9` 均不进位  |

例如：

```python
from decimal import *

print(Decimal(10))  # 输出结果：10
print(Decimal('3.14654'))  # 输出结果：3.14654
print(Decimal(3.14))  # 输出结果：3.140000000000000124344978758017532527446746826171875

print(Decimal(1.1) + Decimal(3.3))  # 输出结果：4.399999999999999911182158030
print(Decimal(1.1 + 3.3))  # 输出结果：4.4000000000000003552713678800500929355621337890625


getcontext().prec = 2
print(Decimal(1.1) / Decimal(3.3))  # 输出结果：0.33


print((Decimal(1.1) / Decimal(3.3)).quantize(Decimal('0.00')))  # 输出结果：0.33
print(Decimal(1.1).quantize(Decimal('0.00')))  # 输出结果：1.10


print(str(Decimal('1.23465689').quantize(Decimal('0.00'))))  # 输出结果：1.23

print(decimal.Decimal('3.1490').quantize(decimal.Decimal('0.000'), decimal.ROUND_CEILING))  # 输出结果：3.149
```

### math

[math 官网地址](https://docs.python.org/zh-cn/3/library/math.html#module-math)

`math` 内置模块，用于解决数学中的运算，提供了内置数学类函数库，因为复数类型常用于科学计算，一般计算并不常用，因此 `math` 库不支持复数类型，仅支持整数和浮点数运算。

- **math.ceil(x)**：返回大于或等于 x 最小整数
- **math.flool(x)**：返回小于或等于 x 最大整数
- **math.pi**：圆周率，数学常数 `π = 3.141592...`，精确到 15 位
- **math.sqrt(x)**：返回 x 的平方根
- **math.pow(x, y)**：返回 x 的 y 次幂的值
- **math.log(x[, base])**：返回以 base 为底的 x 对数，若省略底数 base，则计算 x 自然对数
- **math.sin(x)**：返回弧度 x 的三角正弦
- **math.cos(x)**：返回弧度 x 的三角余弦
- **math.tan(x)**：返回弧度 x 的三角正切
- **math.degrees(x)**：将弧度 x 转换为角度
- **math.radians(x)**：将角度 x 转换为弧度

例如：

```python
import math

print(math.pi)  # 输出结果：3.141592653589793
print(math.ceil(2.5))  # 输出结果：3
print(math.floor(2.5))  # 输出结果：2
print(math.ceil(-2.5))  # 输出结果：-2
print(math.floor(-2.5))  # 输出结果：-3
print(math.pow(5, 3))  # 输出结果：125.0
print(math.sqrt(9))  # 输出结果：3.0
print(math.log(125, 5))  # 输出结果：3.0000000000000004
print(math.log(125))  # 输出结果：4.8283137373023015
print(math.degrees(0.5 * math.pi))  # 输出结果：90.0
print(math.radians(180 / math.pi))  # 输出结果：1.0
print(math.sin(1))  # 输出结果：0.8414709848078965
print(math.cos(1))  # 输出结果：0.5403023058681398
print(math.tan(1))  # 输出结果：1.5574077246549023
```

### functools

[functools 官网地址](https://docs.python.org/zh-cn/3/library/functools.html#module-functools)

`functools` 内置模块，用于高阶函数，即参数或返回值为其他函数的函数。通常来说，此模块的功能适用于所有可调用对象。

- **@functools.cache(user_function)**：简单轻量级未绑定函数缓存，有时称为 `memoize`。返回值与 `lru_cache(maxsize=None)` 相同，创建一个查找函数参数的字典的简单包装器。因为它不需要移出旧值，所以比带有大小限制的 `lru_cache()` 更小更快
- **functools.cmp_to_key(func)**：将旧式的比较函数转换为新式的 `key` 函数。在类似于 `sort()`、`sorted()`、`min()`、`max()`、`heapq.nlargest()`、`heapq.nsmallest()`、`itertools.groupby()` 等函数的 `key` 参数中使用
- **@functools.lru_cache(maxsize=128, typed=False)**：一个为函数提供缓存功能的装饰器，缓存 `maxsize` 组传入参数，在下次以相同参数调用时直接返回上一次的结果。用以节约高开销或 `I/O` 函数的调用时间。如果 `typed` 被设置为 `true`，不同类型的函数参数将被分别缓存。如果 `typed` 为 `false`，通常会将它们视为等价的调用，只缓存一个结果
- **functools.partial(func, \*args, \*\*keywords)**：返回一个新的部分对象，当被调用时其行为类似于 `func` 附带位置参数 `args` 和关键字参数 `keywords` 被调用
- **functools.partialmethod(func, \*args, \*\*keywords)**：返回一个新的 `partialmethod` 描述器，其行为类似 `partial` 但它被设计用作方法定义而非直接用作可调用对象
- **functools.reduce(function, iterable[, initializer])**：将两个参数的 `function` 从左至右积累地应用到 `iterable` 的条目，以便将该可迭代对象缩减为单一的值
- **@functools.singledispatch**：将一个函数转换为单分派 `generic function`。要定义一个泛型函数，用装饰器 `@singledispatch` 来装饰它
- **functools.update_wrapper(wrapper, wrapped, *, assigned=WRAPPER_ASSIGNMENTS, updated=WRAPPER_UPDATES)**：更新一个 `wrapper` 函数以使其类似于 `wrapped` 函数。可选参数为指明原函数的哪些属性要直接被赋值给 `wrapper` 函数的匹配属性的元组，并且这些 `wrapper` 函数的属性将使用原函数的对应属性来更新
- **@functools.wraps(wrapped, assigned=WRAPPER_ASSIGNMENTS, updated=WRAPPER_UPDATES)**：这是一个便捷函数，用于在定义包装器函数时发起调用 `update_wrapper()` 作为函数装饰器


例如：

```python
import functools

x = ['hello', 'worl', 'ni']
x.sort(key=len)
print(x)  # 输出结果：['ni', 'worl', 'hello']


int2 = functools.partial(int, base=8)

print(int2('123'))  # 输出结果：83


my_sum = functools.reduce(lambda x, y: x+y, [1, 2, 3, 4, 5])

print(my_sum)  # 输出结果：15
```

### sys

[sys 官网地址](https://docs.python.org/zh-cn/3/library/sys.html#module-sys)

`sys` 内置模块，提供了许多函数和变量来处理 Python 运行时环境的不同部分。

- **sys.argv[number]**：用于获取当前正在执行的命令行参数的参数列表。一个列表，其中包含了被传递给 Python 脚本的命令行参数。`argv[0]` 为脚本的名称（是否是完整的路径名取决于操作系统）
- **sys.path**：一个由字符串组成的列表，用于指定模块的搜索路径。初始化自环境变量 `PYTHONPATH`，再加上一条与安装有关的默认路径
- **sys.exit([arg])**：用于退出程序。可选参数 arg 可以是表示退出状态的整数（默认为 0），也可以是其他类型的对象。如果它是整数，则 shell 等将 `0` 视为 “成功终止”，非零值视为 “异常终止”
- **sys.platform**：用于获取当前系统平台
- **sys.modules**：用于加载模块的字典，每当程序员导入新的模块时，`sys.modules` 将自动记录该模块，`key` 是模块名，`value` 是模块。当相同模块第二次导入时 Python 将从该字典中进行查询，从而加快程序的运行速度
- **sys.modules.keys()**：返回所有已经导入的模块列表
- **sys.exc_info()**：获取当前正在处理的异常类，`exc_type`、`exc_value`、`exc_traceback` 当前处理的异常详细信息
- **sys.hexversion**：获取 Python 解释程序的版本值，16 进制格式如：`0x020403F0`
- **sys.version**：获取 Python 解释程序的版本信息
- **sys.stdout**：标准输出
- **sys.stdout.write(str)**：标准输出指定内容等于 `print()`。`str` 要输出的内容
- **sys.stdout.writelines(str)**：标准输出指定行内容，行末尾多个 None 字符。`str` 要输出的内容
- **sys.stdout.writable()**：是否可写标准输出
- **sys.stdin**：标准输入
- **sys.stdin.read([int])**：标准输入读取内容。如果不指定 `int` 将一直读取内容；如果指定 `int` 且输入指定 `int` 个字符串，`sys.stdin.read(int)` 等于 `input()`
- **sys.stdin.readline([int])**：标准输入读取行内容，读取每行后多个 `\n`，`int` 指定输入多少个字符串
- **sys.stdin.readable()**：是否可读标准输入
- **sys.stderr**：错误输出
- **sys.stderr.write([str])**：错误输出指定内容，`str` 要输出的内容
- **sys.stderr.writelines([str])**：错误输出指定行内容，`str` 要输出的内容
- **sys.stderr.writable()**：是否可写错误输出
- **sys.exec_prefix**：返回平台独立的 python 文件安装的位置
- **sys.byteorder**：本地字节顺序的指示符。在大端序（最高有效位优先）操作系统上值为 `big`，在小端序（最低有效位优先）操作系统上为 `little` 
- **sys.copyright**：记录 python 版权相关的东西
- **sys.api_version**：解释器的 C 的 API 版本
- **sys.version_info**：一个包含版本号五部分的元组: `major`、`minor`、`micro`、`releaselevel` 和 `serial`。除 `releaselevel` 外的所有值均为整数；发布级别值则为 `alpha`、`beta`、`candidate` 或 `final`
- **sys.getdefaultencoding()**：返回当前您所用的默认的字符编码格式
- **sys.getfilesystemencoding()**：返回将 Unicode 文件名转换成系统文件名的编码的名字
- **sys.builtin_module_names**：Python 解释器导入的内建模块列表
- **sys.executable**：Python 解释程序路径
- **sys.getwindowsversion()**：获取 Windows 的版本
- **sys.setdefaultencoding(name)**：用来设置当前默认的字符编码（详细使用参考文档）
- **sys.displayhook(value)**：如果 `value` 非空，这个函数会把他输出到 `sys.stdout`（详细使用参考文档）

例如：

```python
import sys

print("script name is", sys.argv[0])

if len(sys.argv) > 1:
    print("there are", len(sys.argv)-1, "arguments:")
    for arg in sys.argv[1:]:
        print(arg)
else:
    print("there are no arguments!")


# 输出结果
script name is E:/SourceCode/Python/PythonProject/test.py
there are no arguments!


print(sys.path)  # 输出结果：['E:\\SourceCode\\Python\\PythonProject', 'E:\\SourceCode\\Pytho....]
```

### os

[os 官网地址](https://docs.python.org/zh-cn/3/library/os.html#module-os)

::: tip
一定要使用 `import os` 而不是 `from os import *`。这将避免内建的 `open()` 函数被 `os.open()` 隐式替换掉，因为它们的使用方式大不相同
:::

`os` 内置模块，用于处理文件和目录。

- **os.access(path, mode)**：判断文件或目录权限，`mode` 参数为：`os.F_OK`、`os.R_OK`、`os.W_OK`、`os.X_OK`，分别测试 `path` 的存在性、可读性、可写性和可执行性
- **os.chdir(path)**：改变当前工作目录为 `path`
- **os.chmod(path, mode)**：修改文件或目录权限。将 `path` 的 `mode` 更改为其他由数字表示的 `mode`
- **os.chown(path, uid, gid)**：将 `path` 的用户和组 ID 分别修改为数字形式的 `uid` 和 `gid`
- **os.chroot(path)**：将当前进程的根目录更改为 `path`
- **os.close(fd)**：关闭文件或目录
- **os.isatty(fd)**：如果文件或目录描述符打开且已连接至 `tty` 设备（或类 `tty` 设备），返回 `True`，否则返回 `False`
- **os.getcwd()**：返回表示当前工作目录的字符串
- **os.getenv(key)**：如果环境变量键存在，则将其值作为字符串返回；如果不存在，则返回默认值 `None`。`key` 是字符串。注意，由于 `getenv()` 使用 `os.environ`，因此在导入时也会捕获 `getenv()` 的映射，并且该函数可能不会反映未来的环境变化
- **os.link(src, dst)**：创建一个指向 `src` 的硬链接，名为 `dst`
- **os.listdir(path)**：列出指定目录下所有文件和目录，以列表的形成输出，默认为当前目录
- **os.mkdir(path)**：创建名为 `path` 的目录。如果目录存在，则会报错
- **os.makedirs(path)**：递归创建目录。如果目录存在，则会报错
- **os.name**：获取操作系统标识。如果是 `posix`，说明系统是 `Linux`、`Unix` 或 `Mac OS X`；如果是 `nt`，就是 `Windows` 系统
- **os.open(file, flags[, mode])**：用于打开一个文件。并且设置需要的打开选项（标志位），多个使用 `|` 隔开。模式参数 `mode` 参数是可选的，默认为 `0777`

**flags 标志位：**

|  标志位  |  说明  |
|  :----:  |  :----  |
|  **os.O_RDONLY**  |  以只读的方式打开  |
|  **os.O_WRONLY**  |  以只写的方式打开  |
|  **os.O_RDWR**  |  以读写的方式打开  |
|  **os.O_APPEND**  |  以追加的方式打开  |
|  **os.O_CREAT**  |  创建并打开一个新文件  |
|  **os.O_TRUNC**  |  打开一个文件并截断它的长度为零（必须有写权限）  |
|  **os.O_EXCL**  |  如果指定的文件存在，返回错误  |
|  **os.O_NONBLOCK**  |  打开时不阻塞  |
|  **os.O_SHLOCK**  |  自动获取共享锁  |
|  **os.O_EXLOCK**  |  自动获取独立锁  |
|  **os.O_DIRECT**  |  消除或减少缓存效果  |
|  **os.O_FSYNC**  |  同步写入  |
|  **os.O_NOFOLLOW**  |  不追踪软链接  |

**mode 权限设置：**

|  权限  |  说明  |
|  :----:  |  :----  |
|  **4（r）**  |  打开读取（默认）  |
|  **2（w）**  |  打开以进行写入，首先截断文件  |
|  **1（x）**  |  创建一个新文件并打开它进行写入  |
|  **a**  |  打开以进行写入。如果文件存在，则附加到文件末尾  |
|  **b**  |  二进制模式  |
|  **t**  |  文本模式（默认）  |
|  **+**  |  打开磁盘文件进行更新（读写）  |
|  **U**  |  通用换行模式（已弃用）  |

- **os.popen(command)**：打开命令 `cmd` 的管道。返回值是连接到管道的打开文件对象，根据模式是 `r`（默认值）还是 `w`，可以读取或写入该对象
- **os.read(fd, n)**：从文件描述符 fd 中读取至多 `n` 个字节
- **os.remove(path)**：删除文件。如果路径是目录，则会报错
- **os.removedirs(path)**：删除多级目录。如果目录不为空，则会报错
- **os.rename(str, dst)**：将文件或目录 `src` 重命名为 `dst`。如果 `dst` 已存在，则会报错
- **os.rmdir(path)**：删除目录。如果目录不为空，则会报错（删除非空目录, 使用 `shutil.rmtree()`）
- **os.stat(path)**：获取文件属性
- **os.symlink(src, dst)**：创建一个指向 `src` 的符号链接，名为 `dst`
- **os.system(command)**：执行操作系统命令，并返回一个 16 位的二进制数，要获得 `os.system` 的正确返回值，可以使用位移运算（将返回值右移 8 位。例如：a>>8）还原返回值
- **os.sync()**：强制将所有内容写入磁盘
- **os.uname()**：返回当前操作系统的识别信息
- **os.unsetenv(key)**：取消设置（删除）名为 `key` 的环境变量
- **os.unlink(path)**：删除文件
- **os.utime(path)**：设置文件 `path` 的访问时间和修改时间
- **os.write(fd, str)**：将 `str` 中的字节串（bytestring）写入文件描述符 fd。返回实际写入的字节数
- **os.walk(path)**：用于遍历指定路径下的所有子文件和目录，返回一个三元组（`dirpath`, `dirnames`, `filenames`）

    - **dirpath**：是一个字符串，指向目录的路径
    - **dirnames**：是 `dirpath` 中子目录的名称列表（包括指向目录的符号链接，不包括 `.` 和 `..`）
    - **filenames**：是 `dirpath` 中文件的名称列表。请注意，列表中的名称不包含路径组件

- **os.wait()**：等待子进程执行完毕，返回一个元组，包含其 pid 和退出状态指示：一个 16 位数字，其低字节是终止该进程的信号编号，高字节是退出状态码（信号编号为零的情况下）。如果生成了核心文件，则低字节的高位会置位
- **os.path.abspath(path)**：返回路径 `path` 的绝对路径
- **os.path.basename(path)**：返回路径 `path` 的文件名部分
- **os.path.commonpath(list)**：接受包含多个路径的序列，返回 `list` 的最长公共子路径
- **os.path.commonprefix(list)**：接受包含多个路径的列表，返回所有路径的最长公共前缀
- **os.path.dirname(path)**：返回路径 `path` 的目录名称
- **os.path.exists(path)**：如果 `path` 指向一个已存在的路径或已打开的文件描述符，返回 `True`。对于失效的符号链接，返回 `False`
- **os.path.lexists(path)**：如果 `path` 指向一个已存在的路径，返回 `True`。对于失效的符号链接，也返回 `True`
- **os.path.expanduser(path)**：把 `path` 中包含的 `~` 或 `~user` 替换为当前用户的家目录并返回
- **os.path.expandvars(path)**：根据环境变量的值替换 `path` 中包含的 `\$name` 和 `\${name}`
- **os.path.getatime()**：返回 `path` 的最后访问时间。返回值是一个浮点数，为纪元秒数
- **os.path.getmtime()**：返回 `path` 的最后修改时间。返回值是一个浮点数，为纪元秒数
- **os.path.getctime()**：返回 `path` 在系统中的 `ctime`，在有些系统（比如 Unix）上，它是元数据的最后修改时间，其他系统（比如 Windows）上，它是 `path` 的创建时间。返回值是一个浮点数，为纪元秒数
- **os.path.getsize()**：返回 `path` 的大小，以字节为单位
- **os.path.isabs(path)**：如果 `path` 是一个绝对路径，则返回 `True`
- **os.path.isfile(path)**：如果 `path` 是一个文件且存在，则返回 `True`
- **os.path.isdir(path)**：如果 `path` 是一个目录且存在，则返回 `True`
- **os.path.islink(path)**：如果 `path` 是一个符号链接且存在，则返回 `True`
- **os.path.ismount(path)**：如果路径 `path` 是挂载点（文件系统中挂载其他文件系统的点）且存在，则返回 `True`
- **os.path.join(path, *paths)**：拼接一个或多个路径
- **os.path.normcase(path)**：规范路径的大小写。在 Windows 上，将路径中的所有字符都转换为小写，并将正斜杠转换为反斜杠。在其他操作系统上返回原路径
- **os.path.normpath(path)**：删除多余的分隔符和对上级目录的引用来标准化路径名
- **os.path.realpath(path)**：返回指定文件的规范路径，消除路径中存在的任何符号链接
- **os.path.relpath(path)**：返回从当前目录至 `path` 的相对文件路径
- **os.path.samefile(path1, path2)**：如果两个路径都指向相同的文件或目录，则返回 `True`
- **os.path.sameopenfile(fp1, fp2)**：如果文件描述符 fp1 和 fp2 指向相同文件，则返回 `True`
- **os.path.samestat(stat1, stat2)**：如果 stat 元组 stat1 和 stat2 指向相同文件，则返回 `True`
- **os.path.split(path)**：将 `path` 拆分为（`head`, `tail`），文件路径和文件名分割成一个元组（会将最后一个目录作为文件名而分离）。如果 `path` 以斜杠结尾，`tail` 将为空
- **os.path.splitdrive(path)**：将 `path` 拆分为（`drive`, `tail`），其中 `drive` 是挂载点或空字符串。在没有驱动器概念的系统上，`drive` 将始终为空字符串，在 windows 下，返回驱动器名和路径组成的元组
- **os.path.splitext(path)**：将 `path` 拆分为（`root`, `ext`），文件路径和文件扩展名分割成一个元组

例如：

```python
path = r"E:\SourceCode\Python\PythonProject"

for path, dirs, files in os.walk(path):
    print(path)
    print(dirs)
    print(files)
    print("\n")


# 输出结果
E:\SourceCode\Python\PythonProject
['.idea', 'Alien_invasion', 'assets', 'build', 'Date_visualization', 'dist', 'images', 'settings', 'Web_APP', '__pycache__']
['ball.png', 'bmi.py', 'cards_main.py', 'cards_tools.py', 'cats.txt']


E:\SourceCode\Python\PythonProject\.idea
['inspectionProfiles']
['.gitignore', 'misc.xml', 'modules.xml', 'PythonProject.iml', 'workspace.xml']
...省略部分内容

print(os.stat(path))

# 输出结果
os.stat_result(st_mode=16895, st_ino=562949953481838, st_dev=48482355, st_nlink=1, st_uid=0, st_gid=0, st_size=8192, st_atime=1672366429, st_mtime=1672366429, st_ctime=1666057200)

print(os.system("echo 'Hello, World!'"))  # 输出结果：'Hello, World!'

fd = os.open("test.txt", os.O_RDWR)
ret = os.read(fd, 12)  # 读取文本
print(ret)
os.close(fd)  # 关闭文件
print("关闭文件成功!!")
```

### calendar

[calendar 官网地址](https://docs.python.org/zh-cn/3/library/calendar.html#module-calendar)

`calendar` 内置函数，用于输出日历相关功能。

- **calendar.setfirstweekday(weekday)**：设置每一周的开始（`0` 表示星期一，`6` 表示星期天）
- **calendar.firstweekday()**：返回当前设置的每星期的第一天的数值
- **calendar.isleap(year)**：如果 `year` 是闰年则返回 `True`，否则返回 `False`
- **calendar.leapdays(y1, y2)**：返回在范围 `y1` 至 `y2`（不包括 `y2`）之间的闰年的年数，其中 `y1` 和 `y2` 是年份。此函数适用于跨越一个世纪变化的范围
- **calendar.weekday(year, month, day)**：返回某年某月某日是星期几（`0` 是星期一，`6` 是星期日）
- **calendar.weekheader(n)**：返回一个包含星期几的缩写名的列表。`n` 指定星期几缩写的字符宽度
- **calendar.monthrange(year, month)**：返回指定月份的第一天是星期几和这个月的天数（`0` 是星期一，`6` 是星期日）的一个元组
- **calendar.monthcalendar(year, month)**：返回表示一个月的日历列表。每一行代表一周；此月份外的日子由零表示。每周从周一开始，除非使用 `setfirstweekday()` 改变设置
- **calendar.prmonth(theyear, themonth[, w=0[, l=0]])**：打印由 `month()` 返回的一个月的日历。`w` 为日期的宽度，但始终保持日期居中。`l` 指定了每星期占用的行数
- **calendar.month(theyear, themonth[, w=0[, l=0]])**：使用 `TextCalendar` 类的 `formatmonth()` 以多行字符串形式返回月份日历。`w` 为日期的宽度，但始终保持日期居中。`l` 指定了每星期占用的行数
- **calendar.prcal(year[, w=2[, l=1[, c=6]]], m=3)**：打印由 `calendar()` 返回的整年的日历。这个字符串为一个 `m`（默认为 `3`）列日历。可选参数 `w`、`l` 和 `c` 分别表示日期的宽度、周的行数和月之间的间隔
- **calendar.calendar(year[, w=2[, l=1[, c=6]]], m=3)**：使用 `TextCalendar` 类的 `formatyear()` 返回整年的 `3` 列的日历以多行字符串的形式。这个字符串为一个 `m`（默认为 `3`）列日历。可选参数 `w`、`l` 和 `c` 分别表示日期的宽度、周的行数和月之间的间隔
- **calendar.day_name**：返回一个迭代器，在当前语言环境下表示星期几（全写）的数组
- **calendar.day_abbr**：返回一个迭代器，在当前语言环境下表示星期几（缩写）的数组
- **calendar.month_name**：返回一个迭代器，在当前语言环境下表示一年中月份的数组。这遵循一月的月号为 `1` 的通常惯例，所以它的长度为 `13` 且 `month_name[0]` 是空字符串
- **calendar.month_abbr**：返回一个迭代器，在当前语言环境下表示月份简写的数组。这遵循一月的月号为 `1` 的通常惯例，所以它的长度为 `13` 且 `month_abbr[0]` 是空字符串
- **calendar.MONDAY**：返回一个星期序号别名，`0`
- **calendar.TUESDAY**：返回一个星期序号别名，`1`
- **calendar.WEDNESDAY**：返回一个星期序号别名，`2`
- **calendar.THURSDAY**：返回一个星期序号别名，`3`
- **calendar.FRIDAY**：返回一个星期序号别名，`4`
- **calendar.SATURDAY**：返回一个星期序号别名，`5`
- **calendar.SUNDAY**：返回一个星期序号别名，`6`
- **calendar.Calender([firstweekday=0])**：创建一个 `Calendar` 对象。`firstweekday` 是一个用来指定每星期第一天的整数（`0~6`）。`MONDAY` 是 `0`（默认值），`SUNDAY` 是 `6`
- **calendar.Calender().iterweekdays()**：返回一个迭代器，迭代器的内容为一星期的数字。迭代器的第一个值与 `firstweekday` 属性的值一致
- **calendar.Calender().itermonthdates(year, month)**：返回一个迭代器，迭代器的内容为 `year` 年 `month` 月（`1-12`）的日期。这个迭代器返回当月的所有日期（`datetime.date` 对象），日期包含了本月头尾用于组成完整一周的日期
- **calendar.Calender().itermonthdays(year, month)**：返回一个迭代器，为 `year` 年 `month` 月的日期，但不受 `datetime.date` 范围限制。返回的日期为当月每一天的日期对应的天数。对于不在当月的日期，显示为 `0`
- **calendar.Calender().itermonthdays2(year, month)**：返回一个迭代器，为 `year` 年 `month` 月的日期，但不受 `datetime.date` 范围的限制。迭代器中的元素为一个由日期和代表星期几的数字组成的的元组
- **calendar.Calender().itermonthdays3(year, month)**：返回一个迭代器，为 `year` 年 `month` 月的日期，但不受 `datetime.date` 范围的限制。迭代器的元素为一个由年、月和日组成的元组
- **calendar.Calender().itermonthdays4(year, month)**：返回一个迭代器，为 `year` 年 `month` 月的日期，但不受 `datetime.date` 范围的限制。迭代器的元素为一个由年、月、日和代表星期几的数字组成的元组
- **calendar.Calender().monthdatescalendar(year, month)**：返回一个表示指定年月的周列表。周列表由七个 `datetime.date` 对象组成，即（周一到周五）
- **calendar.Calender().monthdays2calendar(year, month)**：返回一个表示指定年月的周列表。周列表由七个代表日期的数字和代表周几的数字组成的二元元组，即（周一到周五）
- **calendar.Calender().monthdayscalendar(year, month)**：返回一个表示指定年月的周列表。周列表由七个代表日期的数字组成，即（周一到周五）
- **calendar.Calender().yeardatescalendar(year, width=3)**：返回可以用来格式化的指定年月的数据。返回的值是一个列表，列表是月份组成的行。每一行包含了最多 `width` 个月（默认为 `3`）。每个月包含了 `4` 到 `6` 周，每周包含 `1-7` 天。每一天使用 `datetime.date` 对象
- **calendar.Calender().yeardays2calendar(year, width=3)**：返回可以用来格式化的指定年月的数据。周列表的元素是由表示日期的数字和表示星期几的数字组成的元组。不在这个月的日子为 `0`
- **calendar.Calender().yeardayscalendar(year, width=3)**：返回可以用来格式化的指定年月的数据。周列表的元素是表示日期的数字。不在这个月的日子为 `0`
- **calendar.TextCalendar([firstweekday=0])**：可以使用这个类生成纯文本日历。`firstweekday` 是一个用来指定每星期第一天的整数（`0~6`）。`MONDAY` 是 `0`（默认值），`SUNDAY` 是 `6`
- **calendar.TextCalendar().formatmonth(theyear, themonth[, w=0[, l=0]])**：返回一个多行字符串来表示指定年月的日历。`w` 为日期的宽度，但始终保持日期居中。`l` 指定了每星期占用的行数。以上这些还依赖于构造器或者 `setfirstweekday()` 方法指定的周的第一天是哪一天
- **calendar.TextCalendar().prmonth(theyear, themonth[, w=0[, l=0]])**：指定一个月的日历。无返回值，所以返回的结果为 `None`
- **calendar.TextCalendar().formatyear(theyear[, w=2[, l=1[, c=6]]], m=3)**：返回一个多行字符串，这个字符串为一个 `m`（默认为 `3`）列日历。可选参数 `w`、`l` 和 `c` 分别表示日期的宽度、周的行数和月之间的间隔。同样，以上这些还依赖于构造器或者 `setfirstweekday()` 指定哪一天为一周的第一天。日历的第一年由平台依赖于使用的平台
- **calendar.TextCalendar().pryear(theyear, w=2, l=1, c=6, m=3)**：指定一整年的日历。无返回值，所以返回的结果为 `None`
- **calendar.HTMLCalendar([firstweekday=0])**：可以使用这个类生成 `HTML` 日历。`firstweekday` 是一个用来指定每星期第一天的整数（`0~6`）。`MONDAY` 是 `0`（默认值），`SUNDAY` 是 `6`
- **calendar.HTMLCalendar().formatmonth(theyear, themonth[, withyear=True])**：返回一个 `HTML` 表格作为指定年月的日历。`withyear` 默认为真，则年份将会包含在表头，否则只显示月份
- **calendar.HTMLCalendar().formatyear(theyear, width=3)**：返回一个 `HTML` 表格作为指定年份的日历。`width`（默认为 `3`）用于规定每一行显示月份的数量
- **calendar.HTMLCalendar().cssclasses**：对应星期一到星期天的简写列表。默认列表为 `["mon", "tue", "wed", "thu", "fri", "sat", "sun"]`

例如：

```python
calendar.setfirstweekday(5)
print(calendar.firstweekday())  # 输出结果：5

c = calendar.Calendar()
print(list(c.iterweekdays()))


# 输出结果
[0, 1, 2, 3, 4, 5, 6]。0 为周一，以此类推


c = calendar.Calendar(firstweekday=5)
print(list(c.iterweekdays()))


# 输出结果
[5, 6, 0, 1, 2, 3, 4]。5 为周一，以此类推


c = calendar.Calendar()
print(list(c.itermonthdates(2022, 12)))


# 输出结果
[datetime.date(2022, 11, 28), datetime.date(2022, 11, 29), datetime.date(2022, 11, 30), datetime.date(2022, 12, 1)... datetime.date(2022, 12, 31), datetime.date(2023, 1, 1)]


for item in c.itermonthdates(2022, 12):
    print(item)


# 输出结果
2022-11-28
2022-11-29
2022-11-30
2022-12-01
...省略部分内容
2022-12-31
2023-01-01


print(list(c.monthdayscalendar(2022, 12)))


# 输出结果
[[0, 0, 0, 1, 2, 3, 4], [5, 6, 7, 8, 9, 10, 11]...[26, 27, 28, 29, 30, 31, 0]]


for item in c.monthdayscalendar(2022, 12):
    print(item)


# 输出结果
[0, 0, 0, 1, 2, 3, 4]
[5, 6, 7, 8, 9, 10, 11]
[12, 13, 14, 15, 16, 17, 18]
[19, 20, 21, 22, 23, 24, 25]
[26, 27, 28, 29, 30, 31, 0]


print(list(c.yeardayscalendar(2022, 1)))


# 输出结果
[[[[0, 0, 0, 0, 0, 1, 2], [3, 4, 5, 6, 7, 8, 9]...[26, 27, 28, 29, 30, 31, 0]]]]


for item in c.yeardayscalendar(2022, 1):
    print(item)


# 输出结果
[[[0, 0, 0, 0, 0, 1, 2], [3, 4, 5, 6, 7, 8, 9], [10, 11, 12, 13, 14, 15, 16], [17, 18, 19, 20, 21, 22, 23], [24, 25, 26, 27, 28, 29, 30], [31, 0, 0, 0, 0, 0, 0]]]
[[[0, 1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13], [14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27], [28, 0, 0, 0, 0, 0, 0]]]
[[[0, 1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13], [14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27], [28, 29, 30, 31, 0, 0, 0]]]
...省略部分内容
[[[0, 1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13], [14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27], [28, 29, 30, 0, 0, 0, 0]]]
[[[0, 0, 0, 1, 2, 3, 4], [5, 6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24, 25], [26, 27, 28, 29, 30, 31, 0]]]


c = calendar.TextCalendar()
print(c.formatmonth(2022, 12))


# 输出结果
   December 2022
Mo Tu We Th Fr Sa Su
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30 31


c.prmonth(2022, 12)


# 输出结果
   December 2022
Mo Tu We Th Fr Sa Su
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30 31


print(c.prmonth(2022, 12))


# 输出结果
   December 2022
Mo Tu We Th Fr Sa Su
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30 31
None
```

### urllib

[urllib 官网地址](https://docs.python.org/zh-cn/3/library/urllib.html#module-urllib)

`urllib` 内置模块，用于抓取 URL 资源，发送网络请求。

**urllib 模块包括如下模块包**：

- **urllib.error**：用于对 `urllib.request` 引发的异常进行处理。如在发送网络请求时出现错误，用该模块捕捉并处理
- **urllib.parse**：用于 URL 解析和转码
- **urllib.request**：用于实现基本的 http 请求
- **urllib.response**：在使用 `urlopen()` 方法或者 opener 的 `open()` 方法发起请求后，获得的结果是一个 response 对象。这个对象有一些方法和属性，可以对请求返回的结果进行一些处理
- **urllib.robotparser**：用于解析 `robots.txt` 文件。判断是否可以爬取网站信息

**urllib 模块包常用函数和方法**：

- **urllib.error.URLError**：处理程序在遇到问题时会引发此异常
- **urllib.error.URLError.reason**：此错误的原因。可以是一个消息字符串或另一个异常实例
- **urllib.error.HTTPError**：用于处理特殊 HTTP 错误例如作为认证请求的时候。是 `URLError` 的子类
- **urllib.error.HTTPError.code**：一个 HTTP 状态码
- **urllib.error.HTTPError.reason**：通常是一个解释本次错误原因的字符串
- **urllib.error.HTTPError.headers**：导致 `HTTPError` 的特定 HTTP 请求的 HTTP 响应头
- **urllib.error.ContentTooShortError(msg, content)**：此异常会在 `urlretrieve()` 函数检测到已下载的数据量小于期待的数据量（由 Content-Length 头给定）时被引发。`content` 属性中将存放已下载（可能被截断）的数据
- **urllib.parse.urlparse(urlstring[, scheme=''[, allow_fragments=True]])**：将一个 URL 解析为六个部分，返回 ParseResult 对象包含 6 项的 named tuple

    - **urlstring**：URL 地址
    - **scheme**：协议类型，可用的包括 `file`、`ftp`、`gopher`、`hdl`、`http`、`https`...
    - **allow_fragments**：是否忽略 URL 中的 `fragment` 部分

- **urllib.parse.urlunparse(parts)**：根据 `urlparse()` 所返回的元组来构造一个 URL
- **urllib.parse.urlsplit(url)**：将一个 URL 解析为五个部分，不再单独拆分 params 这部分内容，而是将 params 合并到 path 中。返回 SplitResult 对象包含 5 项的 named tuple。通常用于在需要允许将参数应用到 URL 的 path 部分的每个分节的较新的 URL 语法的情况下
- **urllib.parse.quote(string[, safe='/'[, encoding=None[, errors=None]]])**：对字符串进行编码。空格会被转码为 ` ` 字符而 `/` 字符不会被转码。使用 `%xx` 转义符替换 string 中的特殊字符。字母、数字和 `_.-~` 等字符一定不会被转码。在默认情况下，此函数只对 URL 的路径部分进行转码

    - **safe**：形参额外指定不应被转码的 ASCII 字符，其默认值为 `/`
    - **encoding** 和 **errors**：形参指明如何处理非 ASCII 字符

- **urllib.parse.quote_plus(string, safe='', encoding=None, errors=None)**：对字符串进行编码。空格会被转码为 `+` 字符而 `/` 字符会被转码为 `%2F`
- **urllib.parse.unquote(string[, encoding='utf-8'[, errors='replace']])**：对字符串进行解码。将 `%xx` 转义符替换为其单字符

    - **encoding** 和 **errors**：形参指定如何将以百分号编码的序列解码为 Unicode 字符

- **urllib.parse.urlencode(query[, doseq=False[, safe=''[, encoding=None[, errors=None[, quote_via=quote_plus]]]]])**：将一个包含有 str 或 bytes 对象的映射对象（字典）或二元组序列转换为以百分号编码的 ASCII 文本字符串。每个 `key=value` 对之间用 `&` 分隔

    - **query**：一个包含有 str 或 bytes 对象的映射对象（字典）或二元组序列
    - **doseq**：当 query 使用二元组序列时，值为 `True`
    - **safe**、**encoding** 和 **errors**：形参会被传递给 `quote_via`、`encoding` 和 `errors` 形参仅在查询元素为 str 时会被传递

- **urllib.parse.urljoin(base, url[, allow_fragments=True])**：通过合并一个基准 URL（base）和另一个 URL（url）来构造一个完整 URL（absolute）

    - **base**：表示基础链接
    - **url**：表示新的链接
    - **allow_fragments**：为可选参数，默认为 `Ture`，设为 `False` 则忽略 `fragment` 这部分内容

- **urllib.request.urlopen(url[, data=None[, timeout[, cafile=None[, capath=None[, cadefault=False[, context=None]]]]]])**：传入字符串格式的 url 地址。返回 HTTPResponse 生成器对象，可从中读取数据。带有 `url`、`headers` 和 `status` 属性

    - **url**：请求地址
    - **data**：发送到服务器的其他数据对象，默认为 `None`，表示请求方式为 `get` 请求；如果需要实现 `post` 请求，需要字典形式的数据作为参数
    - **timeout**：超时时间，单位为秒
    - **cafile** 和 **capath**：`cafile` 为 CA 证书，`capath` 为 CA 证书的路径，使用 `HTTPS` 需要用到
    - **cadefault**：CA 证书的默认值
    - **context**：`ssl.SSLContext` 类型，用来指定 SSL 设置

- **urllib.request.install_opener(opener)**：将生成的 opener 使用 `install_opener` 方法来设置为全局的
- **urllib.request.build_opener([handler, ...])**：生成 opener，以给定顺序把处理函数串联起来
- **urllib.request.pathname2url(path)**：将本地路径转换成 url 路径
- **urllib.request.url2pathname(path)**：将 url 路径转换成本地路径
- **urllib.request.Request(url[, data=None[, headers={}[, origin_req_host=None[, unverifiable=False[, method=None]]]]])**：URL 请求对象的抽象类

    - **url**：访问网站的完整 url 地址
    - **data**：如果要传必须传 bytes （字节流）类型的；如果是一个字典，可以先用 `urllib.parse.urlencode()` 编码。默认为 `None`，表示请求方式为 `get` 请求；如果需要实现 `post` 请求，需要字典形式的数据作为参数
    - **headers**：设置请求头部信息，字典类型。也可以通过调用 Request 对象的 `add_header()` 方法来添加请求头。请求头最常用的用法就是通过修改 `User-Agent` 来伪装浏览器
    - **origin_req_host**：用于设置请求方的 host 名称或者 IP
    - **unverifiable**：用于设置网页是否需要验证，默认值为 `False`
    - **method**：用于设置请求方式。例如：`GET`、`POST`。默认为 `GET`

- **urllib.request.OpenerDirector**：OpenerDirector 类通过串接在一起的 BaseHandler 打开 URL，并负责管理 `handler` 链及从错误中恢复
- **urllib.request.BaseHandler**：这是所有已注册 `handler` 的父类，只做了简单的注册机制
- **urllib.request.HTTPDefaultErrorHandler**：为 HTTP 错误响应定义的默认 `handler`，所有出错响应都会转为 HTTPError 异常
- **urllib.request.HTTPRedirectHandler**：一个用于处理重定向的类
- **urllib.request.HTTPCookieProcessor(cookiejar=None)**：一个用于处理 `HTTP Cookies` 的类
- **urllib.request.ProxyHandler(proxies=None)**：让请求转往代理服务，默认代理为空。如果给出了 `proxies`，则它必须是一个将协议名称映射到代理 URL 的字典
- **urllib.request.HTTPPasswordMgr**：维护 `(realm, uri) -> (user, password)` 映射数据库。用于管理密码，它维护了用户名密码的表
- **urllib.request.HTTPBasicAuthHandler(password_mgr=None)**：处理远程主机的身份认证

例如：

```python
from urllib import parse, request

url = "http://docs.python.org:80/3/library/urllib.parse.html?highlight=params#url-parsing"
o = parse.urlparse(url)

print(o)
print(o.scheme)
print(parse.urlunparse(o))
print(parse.urlsplit(url))
print(parse.quote(url))


# 输出结果
ParseResult(scheme='http', netloc='docs.python.org:80', path='/3/library/urllib.parse.html', params='', query='highlight=params', fragment='url-parsing')
http
http://docs.python.org:80/3/library/urllib.parse.html?highlight=params#url-parsing
SplitResult(scheme='http', netloc='docs.python.org:80', path='/3/library/urllib.parse.html' query='highlight=params', fragment='url-parsing')
http%3A//docs.python.org%3A80/3/library/urllib.parse.html%3Fhighlight%3Dparams%23url-parsing


base_url = 'http://httpbin.org/get?'
params = {'wd': '南北', 'code': '1', 'height': '188'}
params01 = (('aaa', '111'), ('bbb', '222'))
url = base_url+parse.urlencode(params)
url01 = base_url+parse.urlencode(params01, doseq=True)
print(url)  # 输出结果：http://httpbin.org/get?wd=%E5%8D%97%E5%8C%97&code=1&height=188
print(url01)  # 输出结果：http://httpbin.org/get?aaa=111&bbb=222


url = "http://httpbin.org/post"
headers = {
    # 伪装一个火狐浏览器
    "User-Agent": 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)',
    "host": 'httpbin.org'
}
dict = {
    "name": "Germey"
}
# 转换数据类型
data = bytes(parse.urlencode(dict), encoding="utf8")
# 实例化对象
req = request.Request(url=url, data=data, headers=headers, method="POST")
req.add_header('GET', 'httpbin.org')  # 添加请求头
response = request.urlopen(req)  # 发送数据
print(response.read().decode("utf-8"))
```

### json

[json 官网地址](https://docs.python.org/zh-cn/3/library/json.html#module-json)

`json` 内置模块，用于对 JSON 数据进行编解码。

- **json.dump(obj, fp[, skipkeys=False[, ensure_ascii=True[, check_circular=True[, allow_nan=True[, cls=None[, indent=None[, separators=None[, default=None[, sort_keys=False[, \*\*kw]]]]]]]]]])**：将 Python 内置类型序列化为 `json` 对象后写入文件，使用这个转换表将 `obj` 序列化为 JSON 格式化流形式的 `fp`

    - **obj**：表示是要序列化的对象
    - **fp**：文件描述符，将序列化的 `str` 保存到文件中。json 模块总是生成 `str` 对象，而不是字节对象；因此 `fp.write()` 必须支持 `str` 输入
    - **skipkeys**：如果 `skipkeys` 是 `true`（默认为 `False`），那么那些不是基本对象（包括 `str`、`int`、`float`、`bool`、`None`）的字典的键会被跳过；否则引发一个 TypeError
    - **ensure_ascii**：如果 `ensure_ascii` 是 `true`（即默认值），输出保证将所有输入的非 ASCII 字符转义。如果 `ensure_ascii` 是 `false`，这些字符会原样输出
    - **check_circular**：如果 `check_circular` 为 `false`（默认值：True），那么将跳过容器类型的循环引用检查，循环引用将导致 RecursionError
    - **allow_nan**：如果 `allow_nan` 是 `false`（默认为 `True`），那么在对严格 JSON 规格范围外的 float 类型值（`nan`、`inf` 和 `-inf`）进行序列化时会引发一个 ValueError。如果 `allow_nan` 是 `true`，则使用它们的 JavaScript 等价形式（`NaN`、`Infinity` 和 `-Infinity`）
    - **cls**：为了使用一个自定义的 JSONEncoder 子类（比如：覆盖了 `default()` 方法来序列化额外的类型），通过 `cls` 关键字参数来指定；否则将使用 JSONEncoder
    - **indent**：如果 `indent` 是一个非负整数或者字符串，那么 JSON 数组元素和对象成员会被美化输出为该值指定的缩进等级。如果缩进等级为零、负数或者 ` `，则只会添加换行符。`None`（默认值）选择最紧凑的表达。使用一个正整数会让每一层缩进同样数量的空格。如果 `indent` 是一个字符串（比如 `\t`），那个字符串会被用于缩进每一层
    - **separators**：当被指定时，`separators` 应当是一个（`item_separator`, `key_separator`）元组。当 `indent` 为 `None` 时，默认值取（`', '`, `': '`），不为 `None` 时采用（`','`, `': '`）。为了得到最紧凑的 JSON 表达式，您应该指定其为（`','`, `': '`）以消除空白字符
    - **default**：当 `default` 被指定时，其应该是一个函数，每当某个对象无法被序列化时它会被调用。它应该返回该对象的一个可以被 JSON 编码的版本或者引发一个 TypeError。如果没有被指定，则会直接引发 TypeError
    - **sort_keys**：如果 `sort_keys` 是 `true`（默认为 `False`），那么字典的输出会以键的顺序排序

- **json.dumps(obj[, skipkeys=False[, ensure_ascii=True[, check_circular=True[, allow_nan=True[, cls=None[, indent=None[, separators=None[, default=None[, sort_keys=False[, \*\*kw]]]]]]]]]])**：将 Python 对象编码成 JSON 字符串，使用这个转换表将 `obj` 序列化为 JSON 格式的 `str`。其参数的含义与 `dump()` 中的相同
- **json.load(fp[, cls=None[, object_hook=None[, parse_float=None[, parse_int=None[, parse_constant=None[, object_pairs_hook=None[, \*\*kw]]]]]]])**：读取文件中 json 形式的字符串元素转化为 Python 类型，使用这个转换表将 `fp`（一个支持 `.read()` 并包含一个 JSON 文档的 `text file` 或者 `binary file`）反序列化为一个 Python 对象

    - **fp**：文件描述符，将 `fp`（`.read()` 支持包含 JSON 文档的文本文件或二进制文件）反序列化为 Python 对象
    - **cls**：要使用自定义的 JSONDecoder 子类，用 `cls` 指定他；否则使用 JSONDecoder
    - **object_hook**：默认值为 `None`，将使用任何对象文本解码的结果（dict）调用该函数。将使用 `object_hook` 的返回值而不是 dict。此功能可用于实现自定义解码器
    - **parse_float**：默认值为 `None`。如果指定了 `parse_float`，用来对 JSON float 字符串进行解码，这可用于为 JSON 浮点数使用另一种数据类型或解析器
    - **parse_int**：默认值为 `None`。如果指定了 `parse_int`，用来对 JSON `int` 字符串进行解码，这可以用于为 JSON 整数使用另一种数据类型或解析器
    - **parse_constant**：默认值为 `None`。如果指定了 `parse_constant`，对 `-Infinity`、`Infinity` 和 `NaN` 字符串进行调用。如果遇到了无效的 JSON 符号，会引发异常
    - **object_pairs_hook**：默认值为 `None`，它会被调用于每一个有序列表对解码出的对象字面量。`object_pairs_hook` 的返回值将会取代原本的 dict。这一特性能够被用于实现自定义解码器。如果 `object_hook` 也被定义，`object_pairs_hook` 优先

- **json.loads(s[, cls=None[, object_hook=None[, parse_float=None[, parse_int=None[, parse_constant=None[, object_pairs_hook=None[, \*\*kw]]]]]]])**：将已编码的 JSON 字符串解码为 Python 对象，使用这个转换表将 `s`（一个包含 JSON 文档的 `str`、`bytes` 或 `bytearray` 实例）反序列化为 Python 对象。其他参数的含义与 `load()` 中的相同。如果反序列化的数据不是有效 JSON 文档，引发 JSONDecodeError 错误
- **json.JSONDecoder(\*, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, strict=True, object_pairs_hook=None)**：简单的 JSON 解码器
- **json.JSONEncoder(\*, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, sort_keys=False, indent=None, separators=None, default=None)**：用于 Python 数据结构的可扩展 JSON 编码器

::: tip
不带 `s` 的是序列化到文件或者从文件反序列化，带 `s` 的都是内存操作不涉及持久化
:::

**JSON 中的数据格式和 Python 中的数据格式转化关系如下：**

|  JSON  |  Python
|  :----:  |  :----:  |
|  **object**  |  **dict**  |
|  **array**  |  **list**  |
|  **string**  |  **str**  |
|  **number（整数）**  |  **int**  |
|  **number（真实的）**  |  **float**  |
|  **true**  |  **True**  |
|  **false**  |  **False**  |
|  **null**  |  **None**  |

例如：

```python
import json

data = {'name': 'nanbei', 'age': 18}
# 将 Python 对象编码成 json 字符串
print(json.dumps(data))  # 输出结果：{"name": "nanbei", "age": 18}

a = json.dumps(data)
# 将 json 字符串解码成 Python 对象
print(json.loads(a))  # 输出结果：{'name': 'nanbei', 'age': 18}

data = {
    'nanbei': 'haha',
    'a': [1, 2, 3, 4],
    'b': (1, 2, 3)
}
with open('json_test.txt', 'w+') as f:
    json.dump(data, f)

with open('json_test.txt', 'r+') as f:
    print(json.load(f))  # 输出结果：{'nanbei': 'haha', 'a': [1, 2, 3, 4], 'b': [1, 2, 3]}
```

### shutil

[shutil 官网地址](https://docs.python.org/zh-cn/3/library/shutil.html#module-shutil)

`shutil` 内置模块，用于对一系列文件和文件集合的高阶操作。

- **shutil.copyfileobj(fsrc, fdst[, length])**：将文件类对象 `fsrc` 的内容拷贝到文件类对象 `fdst`，整数值 `length` 如果给出则为缓冲区大小
- **shutil.copyfile(src, dst[, follow_symlinks=True])**：将名为 `src` 的文件的内容（不包括元数据）拷贝到名为 `dst` 的文件并以尽可能高效的方式返回 `dst`。如果 `follow_symlinks` 为假值且 `src` 为符号链接，则将创建一个新的符号链接而不是拷贝 `src` 所指向的文件
- **shutil.copymode(src, dst[, follow_symlinks=True])**：从 `src` 拷贝权限到 `dst`。文件的内容、所有者和分组将不变
- **shutil.copystat(src, dst[, follow_symlinks=True])**：从 `src` 拷贝权限位、最近访问时间、最近修改时间以及旗标到 `dst`。如果 `follow_symlinks` 为假值，并且 `src` 和 `dst` 均指向符号链接，将作用于符号链接本身而非该符号链接所指向的文件 —— 从 `src` 符号链接读取信息，并将信息写入 `dst` 符号链接
- **shutil.copy(src, dst[, follow_symlinks=True])**：将文件 `src` 拷贝到文件或目录 `dst`
- **shutil.copy2(src, dst[, follow_symlinks=True])**：将文件 `src` 拷贝到文件或目录 `dst`，并保留文件的元数据
- **shutil.ignore_patterns(*patterns)**：这个函数会创建一个函数，它可被用作 `copytree()` 的 `ignore` 可调用对象参数，以忽略那些匹配所提供的 glob 风格的 patterns 之一的文件和目录
- **shutil.copytree(src, dst[, symlinks=False[, ignore=None[, copy_function=copy2[, ignore_dangling_symlinks=False[, dirs_exist_ok=False]]]]])**：递归地将以 `src` 为根起点的整个目录树拷贝到名为 `dst` 的目录并返回目标目录。所需的包含 `dst` 的中间目录在默认情况下也将被创建

    - **src**：源目录
    - **dst**：目标目录
    - **symlinks**：如果 `symlinks` 为真值，源目录树中的符号链接会在新目录树中表示为符号链接，并且原链接的元数据在平台允许的情况下也会被拷贝；如果为假值或省略，则会将被链接文件的内容和元数据拷贝到新目录树
    - **ignore**：如果给出了 `ignore`，它必须是一个可调用对象。该对象将接受 `copytree()` 所访问的目录以及 `os.listdir()` 所返回的目录内容列表作为其参数
    - **copy_function**：如果给出了 `copy_function`，它必须是一个将被用来拷贝每个文件的可调用对象。它在被调用时会将源路径和目标路径作为参数传入，默认情况下 `copy2()` 将被使用，但任何支持同样签名（与 `copy()` 一致）都可以使用
    - **dirs_exist_ok**：如果 `dirs_exist_ok` 为 `False`（默认的）且 `dst` 已存在，则会引发 FileExistsError；如果 `dirs_exist_ok` 为 `True`，则如果拷贝操作遇到已存在的目录时将继续执行，并且在 `dst` 目录树中的文件将被 `src` 目录树中对应的文件所覆盖

- **shutil.rmtree(path[, ignore_errors=False[, onerror=None[, dir_fd=None]]])**：删除一个完整的目录树

    - **path**：必须指向一个目录（但不能是一个目录的符号链接）
    - **ignore_errors**：如果 `ignore_errors` 为真值，删除失败导致的错误将被忽略；如果为假值或是省略，此类错误将通过调用由 `onerror` 所指定的处理程序来处理，或者如果此参数被省略则将引发一个异常

- **shutil.move(src, dst[, copy_function=copy2])**：递归地将一个文件或目录 `src` 移至另一位置 `dst` 并返回目标位置，或将 `src` 重命名为 `dst`
- **shutil.disk_usage(path)**：返回给定路径的磁盘使用统计数据，形式为一个 named tuple，其中包含 `total`、`used` 和 `free` 属性，分别表示总计、已使用和未使用空间的字节数。`path` 可以是一个文件或是一个目录
- **shutil.chown(path, user=None, group=None)**：修改给定 `path` 的所有者 `user` 或 `group`
- **shutil.make_archive(base_name, format[, root_dir[, base_dir[, dry_run[, owner[, group[, logger]]]]]])**：创建一个归档文件（例如 `zip` 或 `tar`）并返回其名称

    - **base_name**：要创建的文件名称，包括路径，去除任何特定格式的扩展名
    - **format**：归档格式：为 `zip`、`tar`、`gztar`（如 zlib 模块可用）、`bztar`（如 bz2 模块可用）或 `xztar`（如 lzma 模块可用）中的一个
    - **root_dir**：是一个目录，它将作为归档文件的根目录，归档中的所有路径都将是它的相对路径。例如：通常会在创建归档之前用 `chdir` 命令切换到 `root_dir`
    - **base_dir**：要执行归档的起始目录；也就是说 `base_dir` 将成为归档中所有文件和目录共有的路径前缀。`base_dir` 必须相对于 `root_dir` 给出
    - **root_dir** 和 **base_dir**：默认均为当前目录
    - **dry_run**：如果 `dry_run` 为真值，则不会创建归档文件，但将要被执行的操作会被记录到 `logger`
    - **owner** 和 **group**：将在创建 `tar` 归档文件时被使用。默认会使用当前的所有者和分组
    - **logger**：必须是一个兼容 PEP 282 的对象，通常为 `logging.Logger` 的实例

- **shutil.unpack_archive(filename[, extract_dir[, format]])**：解包一个归档文件

    - **filename**：是归档文件的完整路径
    - **extract_dir**：是归档文件解包的目标目录名称。如果未提供，则将使用当前工作目录
    - **format**：是归档格式：应为 `zip`、`tar`、`gztar`、`bztar` 或 `xztar` 之一

例如：

```python
shutil.copyfileobj(open('hello.txt','r'), open('hello_01.txt', 'w'))  # 将文件内容拷贝到另一个文件中
shutil.copyfile('hello.txt', 'hello_02.txt')  # 拷贝文件
shutil.copymode('hello.txt', 'hello_03.txt')  # 仅拷贝权限。内容、组、用户均不变
shutil.copystat('hello.txt', 'hello_04.txt')  # 仅拷贝状态的信息，包括：mode bits, atime, mtime, flags
shutil.copy('hello.txt', 'hello_05.txt')  # 拷贝文件和权限
shutil.copy2('hello.txt', 'hello_06.txt')  # 拷贝文件和状态信息
shutil.copytree('folder1', 'folder2', ignore=shutil.ignore_patterns('*.pyc', 'tmp*'))  # 递归的去拷贝除以 .pyc 结尾和 tmp 开头的文件夹
shutil.copytree('folder1', 'folder2', symlinks=True, ignore=shutil.ignore_patterns('*.pyc', 'tmp*'))
shutil.rmtree('folder1')  # 递归的去删除文件
shutil.move('folder1', 'folder3')  # 递归的去移动文件，它类似 mv 命令，其实就是重命名
shutil.disk_usage('/root')  # 查看指定文件或目录的磁盘使用信息
shutil.chown('hello.txt', user='zhangsan', group='zhangsan')  # 修改指定文件或目录的所属用户或组

archive_name = os.path.expanduser(os.path.join('~', 'myarchive'))  # 对文件或目录进行归档
root_dir = os.path.expanduser(os.path.join('~', '.ssh'))
shutil.make_archive(archive_name, 'zip', root_dir)

shutil.unpack_archive('myarchive.zip')  # 解压归档文件
```

### tkinter

[tkinter 官网地址](https://docs.python.org/zh-cn/3/library/tkinter.html#module-tkinter)

`tkinter` 内置模块，用于进行窗口视窗设计的模块。

### string

[string 官网地址](https://docs.python.org/zh-cn/3/library/string.html#module-string)

`string` 内置模块，用于对字符串操作。

- **str.capitalize()**：把字符串的第一个字符大写
- **str.center(width)**：返回一个原字符串居中，并使用空格填充到 `width` 长度的新字符串
- **str.ljust(width)**：返回一个原字符串左对齐，用空格填充到指定长度的新字符串
- **str.rjust(width)**：返回一个原字符串右对齐，用空格填充到指定长度的新字符串
- **str.zfill(width)**：返回字符串右对齐，前面用 `0` 填充到指定长度的新字符串
- **str.count(str[, beg, len])**：返回子字符串在原字符串出现次数，`beg`、`len` 是范围
- **str.decode(encodeing[, replace])**：解码 string，出错引发 ValueError 异常
- **str.encode(encodeing[, replace])**：编码 string
- **str.endswith(substr[, beg, end])**：字符串是否以 `substr` 结束，`beg`、`len` 是范围
- **str.startswith(substr[, beg, end])**：字符串是否以 `substr` 开头，`beg`、`len` 是范围
- **str.expandtabs(tabsize = 8)**：把字符串的 `tab` 转为空格，默认为 `8` 个
- **str.find(str[, stat, end])**：查找子字符串在字符串第一次出现的位置，否则返回 `-1`
- **str.index(str[, beg, end])**：查找子字符串在指定字符中的位置，不存在报异常
- **str.isalnum()**：检查字符串是否以字母和数字组成，是返回 true 否则 False
- **str.isalpha()**：检查字符串是否以纯字母组成，是返回 true，否则 false
- **str.isdecimal()**：检查字符串是否以纯十进制数字组成，返回布尔值
- **str.isdigit()**：检查字符串是否以纯数字组成，返回布尔值
- **str.islower()**：检查字符串是否全是小写，返回布尔值
- **str.isupper()**：检查字符串是否全是大写，返回布尔值
- **str.isnumeric()**：检查字符串是否只包含数字字符，返回布尔值
- **str.isspace()**：如果 `str` 中只包含空格，则返回 true,否则 FALSE
- **str.title()**：返回标题化的字符串（所有单词首字母大写，其余小写）
- **str.istitle()**：如果字符串是标题化的（参见 `title()`）则返回 true，否则 false
- **str.join(seq)**：以 `str` 作为连接符，将一个序列中的元素连接成字符串
- **str.split(str='', num)**：以 `str` 作为分隔符，将一个字符串分隔成一个序列，`num` 是被分隔的字符串
- **str.splitlines(num)**：以行分隔，返回各行内容作为元素的列表
- **str.lower()**：将大写转为小写
- **str.upper()**：转换字符串的小写为大写
- **str.swapcase()**：翻换字符串的大小写
- **str.lstrip()**：去掉字符左边的空格和回车换行符
- **str.rstrip()**：去掉字符右边的空格和回车换行符
- **str.strip()**：去掉字符两边的空格和回车换行符
- **str.partition(substr)**：从 `substr` 出现的第一个位置起，将 `str` 分割成一个 `3` 元组
- **str.replace(str1, str2, num)**：查找 `str1` 替换成 `str2`，`num` 是替换次数
- **str.rfind(str[, beg, end])**：从右边开始查询子字符串
- **str.rindex(str[, beg, end])**：从右边开始查找子字符串位置
- **str.rpartition(str)**：类似 `partition` 函数，不过从右边开始查找
- **str.translate(str, del='')**：按 `str` 给出的表转换 string 的字符，`del` 是要过虑的字符

### csv

[csv 官网地址](https://docs.python.org/zh-cn/3/library/csv.html#module-csv)

### getpass

[getpass 官网地址](https://docs.python.org/zh-cn/3/library/getpass.html#module-getpass)

`getpass` 内置模块，用于对密码处理。

- **getpass.getpass([prompt='Password: ', [stream=None]])**：输入密码，且密码不会显示

    - **prompt**：参数用于提示用户，默认值为 `Password`
    - **stream**：参数用于如有必要提示会使用替换错误句柄写入到文件类对象 `stream`，默认值为 `None(/dev/tty)`

- **getpass.getuser()**：返回用户的登录名

例如：

```python
"""
不给用户任何提示，将使用默认提示，即 Password
"""
import getpass

try:
    p = getpass.getpass()
except Exception as error:
    print('ERROR', error)
else:
    print('Password entered:', p)


# 输出结果
Password:
Password entered: abc.123

"""
给用户提示 “Enter your password:”
"""
import getpass

try:
    p = getpass.getpass(prompt='Enter your password: ')
except Exception as error:
    print('ERROR:', error)
else:
    print('Password entered:', p)


# 输出结果
Enter your password:
Password entered: abc.123

"""
给用户任何提示 “Enter your password:”，并获取当前用户名
"""
import getpass

user_name = getpass.getuser()

print('User Name: %s' % user_name)

while True:
    passwd = getpass.getpass(prompt='Enter your Password: ')
    if passwd == 'abc.123':
        print('Welcome')
        break
    else:
        print('The password you entered is incorrect!')
```

### configparser

[configparser 官网地址](https://docs.python.org/zh-cn/3/library/configparser.html#module-configparser)

`configparser` 内置模块，用于管理应用程序的可编辑配置文件。

- **configparser.ConfigParser.read()**：用于接收一个或多个文件。它会检测每个文件，只要该文件存在，就会打开该文件并读取内容
- **configparser.ConfigParser.get()**：用于获取返回值

例如：

```python
from configparser import ConfigParser

p = ConfigParser()
files = ['hello.ini', 'bye.ini', 'read_simple.ini', 'welcome.ini']
files_found = p.read(files)
files_missing = set(files) - set(files_found)

print('Files found: ', sorted(files_found))
print('Files missing: ', sorted(files_missing))


# 输出结果
Files found: ['read_simple.ini']
Files missing: ['bye.ini', 'hello.ini', 'welcome.ini']
```

### logging

[logging 官网地址](https://docs.python.org/zh-cn/3/library/logging.html#module-logging)

`logging` 内置模块，用于跟踪程序中发生的事件。

- **logging.basicConfig(\*\*kwargs)**：设置 log 信息的基本配置参数

    - **filename**：使用指定的文件名创建一个 `FileHandler`，而不是 `StreamHandler`
    - **filemode**：如果指定了 `filename`，则用此模式打开该文件。默认模式为 `a`
    - **format**：使用指定的格式字符串作为处理器。默认为属性以冒号分隔的 `levelname`、`name` 和 `message`
    - **datefmt**：使用指定的日期或时间格式，与 `time.strftime()` 所接受的格式相同
    - **style**：如果指定了 `format`，将为格式字符串使用此风格。`%`、`{` 或 `$` 分别对应于 printf 风格, `str.format()` 或 `string.Template`。默认为 `%`
    - **level**：设置根记录器级别为指定的 `level`
    - **stream**：使用指定的流初始化 `StreamHandler`。请注意此参数与 `filename` 不兼容 —— 如果两者同时存在，则会引发 ValueError
    - **handlers**：如果指定，这应为一个包含要加入根日志记录器的已创建处理器的可迭代对象。任何尚未设置格式描述符的处理器将被设置为在此函数中创建的默认格式描述符。请注意此参数与 `filename` 或 `stream` 不兼容 —— 如果两者同时存在，则会引发 ValueError
    - **force**：如果将此关键字参数指定为 true，则在执行其他参数指定的配置之前，将移除并关闭附加到根记录器的所有现有处理器
    - **encoding**：如果此关键字参数与 `filename` 一同被指定，则其值会在创建 `FileHandler` 时被使用，因而也会在打开输出文件时被使用
    - **errors**：如果此关键字参数与 `filename` 一同被指定，则其值会在创建 `FileHandler` 时被使用，因而也会在打开输出文件时被使用。如果未指定，则会使用值 `backslashreplace`。请注意如果指定为 `None`，它将被原样传给 `open()`，这意味着它将会当作传入 `errors` 一样处理

- **logging.info(msg, \*args, \*\*kwargs)**：在根日志记录器上记录一条 `INFO` 级别的消息
- **logging.getLogger(name=None)**：返回具有指定 `name` 的日志记录器，或者当 `name` 为 `None` 时返回层级结构中的根日志记录器，默认值为 `root`
- **logging.StreamHandler(stream=None)**：返回一个新的 `StreamHandler` 类。如果指定了 `stream`，则实例将用它作为日志记录输出；在其他情况下将使用 `sys.stderr`
- **logging.FileHandler(filename, *, mode='a', encoding=None, delay=False, errors=None)**：返回一个 `FileHandler` 类的新实例。将打开指定的文件并将其用作日志记录流。`mode` 默认为 `a`。如果 `encoding` 不为 `None`，则会将其用作打开文件的编码格式。如果 `delay` 为真值，则文件打开会被推迟至第一次调用 `emit()` 时。默认情况下，文件会无限增长。如果指定了 `errors`，它会被用于确定编码格式错误的处理方式
- **logging.Formatter(fmt=None, datefmt=None, style='%', validate=True, *, defaults=None)**：返回 `Formatter` 类的新实例。实例将使用整个消息的格式字符串以及消息的日期或时间部分的格式字符串进行初始化。如果未指定 `fmt`，则使用 `%(message)s`

例如：

```python
# 记录日志到文件
logging.basicConfig(filename='example.log', encoding='utf-8', level=logging.DEBUG)
logging.warning('is when this event was logged.')

# 记录变量数据
logging.warning('%s before you %s', 'Look', 'leap!')

# 更改显示消息的格式
logging.basicConfig(format='%(asctime)s %(levelname)s:%(message)s', level=logging.DEBUG)
logging.warning('is when this event was logged.')
```

### warnings

[warnings 官网地址](https://docs.python.org/zh-cn/3/library/warnings.html#module-warnings)

`warnings` 内置模块，用于警告程序员关于语言和程序库中所做的更改。

### glob

[glob 官网地址](https://docs.python.org/zh-cn/3/library/glob.html#module-glob)

`glob` 内置模块，用于查找与特定模式匹配的文件和目录名称，并将搜索的到的结果返回到一个列表中。

- **glob.glob(pathname, \*, root_dir=None, dir_fd=None, recursive=False, include_hidden=False)**：返回符合匹配条件的所有文件的路径

    - **pathname**：返回与路径名匹配的路径名的可能为空的列表，该列表必须是包含路径规范的字符串。路径名可以是绝对的（如 `/usr/src/Python-1.5/Makefile`）或相对的（如 `../../Tools/*/*.gif`），并且可以包含 `shell` 样式的通配符。断开的符号链接包含在结果中（如 `shell` 中）。结果是否排序取决于文件系统。如果在调用此函数期间删除或添加了满足条件的文件，则未指定是否包含该文件的路径名
    - **root_dir**：如果 `root_dir` 不为 `None`，则它应当是指明要搜索的根目录的 path-like object。它用在 `glob()` 上与在调用它之前改变当前目录有相同的效果。如果 `pathname` 为相对路径，结果将包含相对于 `root_dir` 的路径
    - **dir_fd**：本函数带有 `dir_fd` 参数，支持基于目录描述符的相对路径
    - **recursive=False**：代表递归调用，与特殊通配符 `**` 一同使用，默认为 `False`，`False` 表示不递归调用，`True` 表示递归调用
    - **include_hidden**：如果 `include_inhidden` 为 `true`，`**` 模式将匹配隐藏目录

- **glob.iglob(pathname, \*, root_dir=None, dir_fd=None, recursive=False, include_hidden=False)**：返回一个迭代器对象，需要循环遍历获取每个元素，得到的也是符合匹配条件的所有文件的路径
- **glob.escape(pathname)**：`escape` 可以忽略所有的特殊字符，就是星号（`*`）、问号（`?`）、中括号（`[]`），用处不大

**支持 4 个常用的通配符：**

- **\***：匹配 0 个或多个字符
- **\*\***：匹配所有文件、目录、子目录和子目录里的文件
- **?**：匹配一个字符
- **\[\]**：匹配指定范围内的字符。例如：[0-9] 匹配数字，[a-z] 匹配小写字母

例如：

```python
glob.glob('./[0-9].*')  # 查找匹配当前目录下以 0~9 命名的文件

a = glob.iglob('./[0-9].*')  # 查找匹配当前目录下以 0~9 命名的文件
for i in a:
    print(i)

glob.escape('t*')  # 查找包含特殊字符的文件或目录
```

### tarfile

[tarfile 官网地址](https://docs.python.org/zh-cn/3/library/tarfile.html#module-tarfile)

`tarfile` 内置模块，用于读写 `tar` 归档，包括使用 `gzip`、`bz2` 和 `lzma` 压缩的归档。

- **tarfile.open(name=None, mode='r', fileobj=None, bufsize=10240, \*\*kwargs)**：针对路径名 `name` 返回 `TarFile` 对象
- **tarfile.is_tarfile(name)**：如果 `name` 是一个 `tarfile` 能读取的 `tar` 归档文件则返回 `True`
- **TarFile.getnames()**：以名称列表的形式返回成员。它的顺序与 `getmembers()` 所返回列表的顺序一致
- **TarFile.getmembers()**：以 `TarInfo` 对象列表的形式返回归档的成员。列表的顺序与归档中成员的顺序一致
- **TarFile.extractall(path='.', members=None, *, numeric_owner=False)**：将归档中的所有成员提取到当前工作目录或 `path` 目录。如果给定了可选的 `members`，则它必须为 `getmembers()` 所返回的列表的一个子集。如果 `numeric_owner` 为 `True`，则将使用来自 `tarfile` 的 `uid` 和 `gid` 数值来设置被提取文件的所有者或用户组
- **TarFile.add(name, arcname=None, recursive=True, *, filter=None)**：将文件 `name` 添加到归档

例如：

```python
import os
import tarfile
import shutil


print('creating archive')

shutil.make_archive('work', 'tar', root_dir='..', base_dir='work',)
print('\nArchive contents:')

with tarfile.open('work.tar', 'r') as t_file:
    for names in t_file.getnames():
        print(names)

os.system('touch sample.txt')
print('adding sample.txt')

with tarfile.open('work.tar', mode='a') as t:
    t.add('sample.txt')
print('contents:',)

with tarfile.open('work.tar', mode='r') as t:
    print([m.name for m in t.getmembers()])

os.mkdir('work')
with tarfile.open('work.tar', 'r') as t:
    t.extractall('work')

print(os.listdir('work'))
```

### textwrap

[textwrap 官网地址](https://docs.python.org/zh-cn/3/library/textwrap.html#module-textwrap)

`textwrap` 内置模块，用于文本自动换行与填充。

- **textwrap.wrap(text, width=70, \*, initial_indent='', subsequent_indent='', expand_tabs=True, replace_whitespace=True, fix_sentence_endings=False, break_long_words=True, drop_whitespace=True, break_on_hyphens=True, tabsize=8, max_lines=None, placeholder=' [...]')**：对 text（字符串）中的单独段落自动换行以使每行长度最多为 `width` 个字符。返回由输出行组成的列表，行尾不带换行符
- **textwrap.fill(text, width=70, \*, initial_indent='', subsequent_indent='', expand_tabs=True, replace_whitespace=True, fix_sentence_endings=False, break_long_words=True, drop_whitespace=True, break_on_hyphens=True, tabsize=8, max_lines=None, placeholder=' [...]')**：对 text 中的单独段落自动换行，并返回一个包含被自动换行段落的单独字符串，而不是列表
- **textwrap.shorten(text, width, \*, fix_sentence_endings=False, break_long_words=True, break_on_hyphens=True, placeholder=' [...]')**：将折叠 text 中的空格（所有连续空格替换为单个空格）。如果结果能适合 `width` 则将其返回。否则将丢弃足够数量的末尾单词以使得剩余单词加 `placeholder` 能适合 `width`
- **textwrap.dedent(text)**：移除 text 中每一行的任何相同前缀空白符
- **textwrap.indent(text, prefix[, predicate=None])**：将 `prefix` 添加到 text 中选定行的开头
- **textwrap.TextWrapper(\*\*kwargs)**：`TextWrapper` 构造器接受多个可选的关键字参数。每个关键字参数对应一个实例属性

**TextWrapper 的实例属性（以及构造器的关键字参数）:**

- **width**：默认为 `70`，自动换行的最大行长度
- **expand_tabs**：默认为 `True`。如果为真值，则 text 中所有的制表符将使用 text 的 `expandtabs()` 方法扩展为空格符
- **tabsize**：默认为 `8`。如果 `expand_tabs` 为真值，则 text 中所有的制表符将扩展为零个或多个空格，具体取决于当前列位置和给定的制表宽度
- **replace_whitespace**：默认为 `True`。如果为真值，在制表符扩展之后、自动换行之前，`wrap()` 方法将把每个空白字符都替换为单个空格。会被替换的空白字符如下：制表，换行，垂直制表、换页和回车（`\t\n\v\f\r`）
- **drop_whitespace**：默认为 `True`。如果为真值，每一行开头和末尾的空白字符（在包装之后、缩进之前）会被丢弃。但是段落开头的空白字符如果后面不带任何非空白字符则不会被丢弃。如果被丢弃的空白字符占据了一个整行，则该整行将被丢弃
- **initial_indent**：默认为 `''`，将被添加到被自动换行输出内容的第一行的字符串。其长度会被计入第一行的长度。空字符串不会被缩进
- **subsequent_indent**：默认为 `''`，将被添加到被自动换行输出内容除第一行外的所有行的字符串。其长度会被计入除行一行外的所有行的长度
- **fix_sentence_endings**：默认为 `False`。如果为真值，`TextWrapper` 将尝试检测句子结尾并确保句子间总是以恰好两个空格符分隔。对于使用等宽字体的文本来说通常都需要这样
- **break_long_words**：默认为 `True`。如果为真值，则长度超过 `width` 的单词将被分开以保证行的长度不会超过 `width`。如果为假值，超长单词不会被分开，因而某些行的长度可能会超过 `width`（超长单词将被单独作为一行，以尽量减少超出 `width` 的情况）
- **break_on_hyphens**：默认为 `True`。如果为真值，将根据英语的惯例首选在空白符和复合词的连字符之后自动换行。如果为假值，则只有空白符会被视为合适的潜在断行位置，但如果您确实不希望出现分开的单词则您必须将 `break_long_words` 设为假值
- **max_lines**：默认为 `None`。如果不为 `None`，则输出内容将最多包含 `max_lines` 行，并使 `placeholder` 出现在输出内容的末尾
- **placeholder**：默认为 `' […]'`，该文本将在输出文本被截短时出现在文本末尾

**TextWrapper 还提供了一些公有方法，类似于模块层级的便捷函数：**

- **wrap(text)**：对 text（字符串）中的单独段落自动换行以使每行长度最多为 `width` 个字符。所有自动换行选项均获取自 `TextWrapper` 实例的实例属性。返回由输出行组成的列表，行尾不带换行符。如果自动换行输出结果没有任何内容，则返回空列表
- **fill(text)**：对 text 中的单独段落自动换行，并返回包含被自动换行段落的单独字符串

例如：

```python
import textwrap

sample_string = '''Python is an interpreted high-level programming language
for general-purpose programming. Created by Guido van Rossum and first
released in 991, Python has a design philosophy that emphasizes code
readability, notably using significant whitespace.'''

w = textwrap.wrap(text=sample_string, width=30)
print(w)


# 输出结果
['Python is an interpreted high-', 'level programming language for'...'significant whitespace.']

sample_string = '''Python is an interpreted high-level programming
language.'''

w = textwrap.fill(text=sample_string, width=30)
print(w)


# 输出结果
Python is an interpreted high-
level programming language for
...省略部分内容
significant whitespace.


str1 = '''\
    Hello Python World \tThis is Python 101
    Scripting language\n
    Python is an interpreted high-level programming language for
    general-purpose programming.
'''

s = textwrap.shorten(str1, width=50)
print(s)  # 输出结果：Hello Python World This is Python 101 [...]

print("Original: \n", str1)
print()
t = textwrap.dedent(str1)
print("Dedented: \n", t)


# 输出结果
Original: 
     Hello Python World 	This is Python 101
    Scripting language

    Python is an interpreted high-level programming language for
    general-purpose programming.


Dedented: 
 Hello Python World 	This is Python 101
Scripting language

Python is an interpreted high-level programming language for
general-purpose programming.


w = textwrap.fill(sample_string, width=30)
i = textwrap.indent(w, '*')
print(i)


# 输出结果
*Python is an interpreted high-
*level programming language for
...省略部分内容
*significant whitespace.
```

### smtplib

[smtplib 官网地址](https://docs.python.org/zh-cn/3/library/smtplib.html#module-smtplib)

`smtplib` 内置模块，用于发送邮件，它对 `smtp` 协议进行了简单的封装。

- **smtplib.SMTP(host, port[, local_hostname=None[, timeout[, source_address=None]]])**：用于连接邮箱服务器。它提供了支持各种 SMTP 和 ESMTP 操作的方法

    - **host**：邮箱服务器地址。如：`smtp.163.com`（163 邮箱）、`smtp.qq.com`（QQ 邮箱）、`smtp.gmail.com`（Google 邮箱）
    - **port**：邮箱服务端口。如：SSL 协议端口 `465/994`，SSL 加密，保密性高；非 SSL 协议端口 `25`
    - **local_hostname**：它将在 `HELO/EHLO` 命令中被用作本地主机的 `FQDN`（完全合格域名：主机名.域名）
    - **timeout**：设置超时时间
    - **source_address**：允许在有多张网卡的计算机中绑定到某些特定的源地址和绑定到某些特定的源 TCP 端口。它接受一个二元组（`host`, `port`）作为在连接之前所绑定作为其源地址的套接字

- **smtplib.SMTP_SSL(host, port[, local_hostname=None[, keyfile=None[, certfile=None[, timeout[, context=None[, source_address=None]]]]]])**：用于 SSL 连接邮箱服务器。其它选项和 `SMTP` 一样

    - **keyfile** 和 **certfile**：是 `context` 的传统替代物，它们可以指向 PEM 格式的私钥和证书链文件用于 SSL 连接

**SMTP 或 SMTP_SSL 对象方法：**

- **set_debuglevel(level)**：设置调试输出级别，打印出和 SMTP 服务器交互的所有信息。如果 `level` 的值为 `1` 或 `True`，就会产生连接的调试信息，以及所有发送和接收服务器的信息。如果 `level` 的值为 `2`，则这些信息会被加上时间戳
- **connect(host, port)**：连接远程 smtp 主机方法，`host` 为远程主机地址，`port` 为远程主机 smtp 端口，默认为 `25`，也可以直接使用 `host:port` 形式来表示
- **helo()**：使用 `HELO` 向 SMTP 服务器表明自己的身份
- **ehlo()**：使用 `EHLO` 向 ESMTP 服务器表明自己的身份
- **login(user, password[, initial_response_ok=True])**：登录到一个需要认证的 SMTP 服务器

    - **user**：登录的用户名
    - **password**：登录的密码或 `smtp` 服务生成的客户端授权码，该授权码用于第三方客户端登录，代替了第三方登录时使用的个人邮箱密码
    - **initial_response_ok**：对于支持它的认证方法，是否可以与 `auto` 命令一起发送规定的 “初始响应”

- **auth(mechanism, authobject[, initial_response_ok=True])**：为指定的认证机制 `mechanism` 发送 `SMTP AUTH` 命令，并通过 `authobject` 处理回复响应

    - **mechanism**：指定要使用何种认证机制作为 `AUTH` 命令的参数
    - **authobject**：必须是接受一个可选的单独参数的可调用对象
    - **initial_response_ok**：如果 `initial_response_ok` 为真值，则不带参数地调用 `authobject()`。如果 `initial_response_ok` 为假值，则将调用 `authobject()` 来处理服务器的回复响应

- **starttls([keyfile=None[, certfile=None[, context=None]]])**：将 SMTP 连接设为 TLS (传输层安全) 模式。后续的所有 SMTP 命令都将被加密。您应当随即再次调用 `ehlo()`
- **sendmail(from_addr, to_addrs, msg[, mail_options=()[, rcpt_options=()]])**：发送邮件

    - **from_addr**：发件人地址
    - **to_addrs**：收件人地址
    - **msg**：发送消息，可以是一个包含 ASCII 范围内字符的字符串，或是一个字节串。邮件对象.as_string()

- **quit()**：终结 SMTP 会话并关闭连接。返回 `SMTP QUIT` 命令的结果

**SMTP 协议响应码：**

|  响应码  |  说明  |
|  :----:  |  :----  |
|  **211**  |  系统状态或系统帮助响应  |
|  **214**  |  帮助信息  |
|  **220**  |  SMTP 服务就绪。SMTP 服务器已准备好继续下一条命令  |
|  **221**  |  服务关闭。会话或与邮件服务器的连接正在结束，并且所有过程都已完成  |
|  **250**  |  采取并完成了请求的操作。表明 SMTP 通信已成功  |
|  **251**  |  用户非本地，服务器提供转发地址以进行尝试  |
|  **354**  |  开始输入消息并以 `…` 结尾。服务器已准备好接受消息本身  |
|  **421**  |  服务不可用，连接将关闭。发送邮件服务器不可达  |
|  **450**  |  请求的命令失败，因为用户的邮箱不可用（例如：因为它已被锁定），请稍后再试  |
|  **451**  |  由于服务器错误，命令已中止。接收邮件服务器的规则可能阻止了邮件的处理  |
|  **452**  |  该命令已中止，因为服务器的系统存储空间不足。由于尝试一次发送太多邮件时邮件服务器超载引起的  |
|  **455**  |  服务器此时无法处理该命令。收到此消息，请留出更多时间尝试  |
|  **500**  |  服务器由于语法错误而无法识别命令。可能是有防病毒软件或防火墙软件引起的  |
|  **501**  |  命令参数中遇到语法错误。通常是由错误/无效的电子邮件地址引起的  |
|  **502**  |  未实现此命令。可能是您的基础 MTA 遇到配置问题  |
|  **503**  |  服务器遇到了错误的命令序列。所使用的参数与邮件服务器的预期顺序不符，这通常在不对电子邮件账户进行身份验证时发生  |
|  **504**  |  未实现命令参数。与 `502` 非常相似  |
|  **521**  |  该主机从不接受邮件；虚拟服务器的响应。表示收件人邮件服务器不接受和传递电子邮件  |
|  **541**  |  由于策略原因而无法传递该邮件，通常是垃圾邮件过滤器。表明您的电子邮件可能已被标记为垃圾邮件  |
|  **550**  |  请求的命令失败，因为用户的邮箱不可用。例如：因为找不到用户邮箱，或者由于策略原因而拒绝了该命令  |
|  **551**  |  收件人不在服务器本地。服务器提供转发地址以进行尝试  |
|  **552**  |  由于超出了存储分配，操作被中止。通常是由于收件人的邮件服务器太满  |
|  **553**  |  由于邮箱名称无效，命令被中止。确保您要发送到的所有电子邮件地址都是正确的  |
|  **554**  |  发送错误：对不起，您无法发送消息。此邮箱已禁用，只是正常的无效地址响应。检查电子邮件地址，然后重试  |

例如：

```python
import smtplib
import getpass
import logging
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# 设置日志级别
logging.basicConfig(level=logging.DEBUG, format='%(levelname)s - %(message)s')

email_address = 'sankgao@163.com'  # 登录的用户名
pwd01 = input('please input your password:')  # 登录的密码
pwd = 'BHGMUMRGLRAKVHJH'
to_mail_address = 'sankgao@163.com'  # 收件人地址

msg = MIMEMultipart()  # 创建邮件对象
msg['Subject'] = 'Test'  # 设置邮件主题
msg["From"] = email_address  # 设置邮件发件人
msg['To'] = to_mail_address  # 设置邮件收件人
content = MIMEText('<b>Test mail</b>', 'html', 'utf-8')  # 设置邮件内容
msg.attach(content)  # 添加到当前载荷中

smtp_obj01 = smtplib.SMTP('smtp.163.com', 25)  # 连接邮箱服务器
smtp_obj = smtplib.SMTP_SSL('smtp.163.com', 465)

response = smtp_obj.ehlo()  # 向 ESMTP 服务器表明自己的身份
logging.info('ehlo() -> %s', response)

response = smtp_obj.login(email_address, pwd)  # 登陆 SMTP 服务器
logging.info('login() -> %s', response)

response = smtp_obj.sendmail(email_address, to_mail_address, msg.as_string())  # 发送邮件
logging.info('sendmail() -> %s', response)

response = smtp_obj.quit()  # 断开连接
logging.info('quit() -> %s', response)


host_name = 'smtp.163.com'
port = 465
u_name = 'sankgao@163.com'
password01 = getpass.getpass(prompt='Enter your password: ')
password = 'BHGMUMRGLRAKVHJH'
sender = 'sankgao@163.com'
receivers = ['sankgao@163.com']
msg = MIMEText('Test mail')
msg['Subject'] = 'Test'
msg['From'] = sender
msg['To'] = ', '.join(receivers)

smtp_obj = smtplib.SMTP_SSL(host_name, port)
smtp_obj.login(u_name, password)
smtp_obj.sendmail(sender, receivers, msg.as_string())
smtp_obj.quit()
print("Mail sent successfully")
```

### email

[email 官网地址](https://docs.python.org/zh-cn/3/library/email.html#module-email)

`email` 内置模块，用于管理电子邮件消息。

### csv

[csv 官网地址](https://docs.python.org/zh-cn/3/library/csv.html#module-csv)

`csv` 内置模块，用于处理从电子表格和数据库导出的文本数据。CSV 格式代表逗号分隔值，用于分隔数据记录中的字段，此格式通常用于电子表格和数据库导入和导出。

- **csv.reader(csvfile, \*, dialect='excel', \*\*fmtparams)**：返回一个 `reader` 对象，该对象将逐行遍历 `csvfile`

    - **csvfile**：可以是任何对象，只要这个对象支持 `iterator` 协议并在每次调用 `__next__()` 方法时都返回字符串，文件对象和列表对象均适用。如果 `csvfile` 是文件对象，则打开它时应使用 `newline=''`
    - **dialect**：是用于不同的 CSV 变种的特定参数组。它可以是 Dialect 类的子类的实例，也可以是 `list_dialects()` 函数返回的字符串之一
    - **fmtparams**：可以覆写当前变种格式中的单个格式设置

- **csv.writer(csvfile, \*, dialect='excel', \*\*fmtparams)**：返回一个 `writer` 对象，该对象负责将用户的数据在给定的文件类对象上转换为带分隔符的字符串

    - **csvfile**：可以是任何具有 `write()` 方法的对象。如果 `csvfile` 是一个文件对象，则打开它时应使用 `newline=''`
    - **dialect**：用来定义一组特定 CSV 变种专属的形参。它可以是 Dialect 类的某个子类的实例或是 `list_dialects()` 函数返回的字符串之一
    - **fmtparams**：关键字参数来覆盖当前变种中的单个格式化形参

- **csv.DictReader(f, fieldnames=None, \*, restkey=None, restval=None, dialect='excel', \*args, \*\*kwds)**：创建一个对象，该对象在操作上类似于常规 `reader`，但是将每行中的信息映射到一个 `dict`，该 `dict` 的键由 `fieldnames` 可选参数给出

    - **f**：指定读取的文件
    - **fieldnames**：是一个序列。如果省略 `fieldnames`，则文件 `f` 第一行中的值将用作字段名。无论字段名是如何确定的，字典都将保留其原始顺序
    - **restkey**：如果某一行中的字段多于字段名，则剩余数据会被放入一个列表，并与 `restkey` 所指定的字段名（默认为 `None`）一起保存
    - **restval**：如果某个非空白行的字段少于字段名，则缺失的值会使用 `restval` 的值来填充（默认为 `None`）

- **csv.DictWriter(f, fieldnames, \*, restval='', extrasaction='raise', dialect='excel', \*args, \*\*kwds)**：创建一个对象，该对象在操作上类似常规 `writer`，但会将字典映射到输出行

    - **f**：指定要写入的文件
    - **fieldnames**：是由键组成的序列，它指定字典中值的顺序，这些值会按指定顺序传递给 `writerow()` 方法并写入文件 `f`
    - **restval**：如果字典缺少 `fieldnames` 中的键，则可选参数 `restval` 用于指定要写入的值
    - **extrasaction**：如果传递给 `writerow()` 方法的字典的某些键在 `fieldnames` 中找不到，则可选参数 `extrasaction` 用于指定要执行的操作

例如：

```python
import csv

with open("new_data.csv", mode="r", encoding="utf-8-sig") as f:
    reader = csv.reader(f)  # 创建 csv.reader 实例
    header = next(reader)  # 读取第一行

    for row in reader:  # 逐行获取数据，并输出
        print("{}{}: {}={}, {}={}, {}={}".format(
            header[0], row[0],
            header[1], row[1],
            header[2], row[2],
            header[3], row[3]
        ))


# 输出结果
设备编号0: 温度=31, 湿度=20, 转速=1000
设备编号1: 温度=30, 湿度=22, 转速=998
设备编号2: 温度=32, 湿度=33, 转速=1005


with open("new_data.csv", encoding="utf-8-sig", mode="r") as f:
    reader = csv.DictReader(f)  # 创建 csv.DictReader 实例

    for row in reader:
        print("设备编号{}: 温度={}, 湿度={}, 转速={}".format(
            row["设备编号"],
            row["温度"],
            row["湿度"],
            row["转速"]
        ))


# 输出结果
设备编号0: 温度=31, 湿度=20, 转速=1000
设备编号1: 温度=30, 湿度=22, 转速=998
设备编号2: 温度=32, 湿度=33, 转速=1005


# 创建列表，保存 header 内容
header_list = ["设备编号", "温度", "湿度", "转速"]

# 创建列表，保存数据
data_list = [
    [0, 31, 20, 1000],
    [1, 30, 22, 998],
    [2, 32, 33, 1005]
]

with open("new_data.csv", mode="w", encoding="utf-8-sig", newline="") as f:
    writer = csv.writer(f)  #　创建 csv.writer 实例
    writer.writerow(header_list)  # 写入 header，writerow() 一次只能写入一行
    writer.writerows(data_list)  # 写入 header，writerows() 一次写入多行


# 创建 header 列表
header_list = ["设备编号", "温度", "湿度", "转速"]
# 创建数据列表，列表的每个元素都是字典
data_list = [
    {"设备编号": "0", "温度": 31, "湿度": 20, "转速": 1000},
    {"设备编号": "1", "温度": 30, "湿度": 22, "转速": 998},
    {"设备编号": "2", "温度": 32, "湿度": 23, "转速": 1005},
]

with open("new_data.csv", mode="w", encoding="utf-8-sig", newline="") as f:
    # 创建 csv.DictWriter 实例，将 header 列表作为参数传入
    writer = csv.DictWriter(f, header_list)
    writer.writeheader()  # 写入 header
    writer.writerows(data_list)  # 写入数据
```

### hashlib

[hashlib 官网地址](https://docs.python.org/zh-cn/3/library/hashlib.html#module-hashlib)

`hashlib` 内置模块，用于对许多不同的安全哈希和消息摘要算法实现了一个通用接口。包括的算法有 `md5`、`sha1`、`sha224`、`sha256`、`sha384`、`sha512` 等。**安全哈希** 和 **消息摘要** 是同义的。较旧的算法被称为 **消息摘要**，现代的术语是安全哈希。

`hashlib` 提供了一些流行的 `hash`（摘要）算法的 Python 标准库。摘要算法又称 **哈希算法**、**散列算法**。它通过一个函数，把任意长度的数据转换为一个长度固定的数据串（通常用 16 进制的字符串表示），简单的说就是通过函数，将明文数据通过变成密文数据达到加密的作用。

::: note
MD5 是最常见的摘要算法，速度很快，生成结果是固定的 128 bit 字节，通常用一个 32 位的十六进制字符串表示

加盐：额外给原始数据添加一点自定义的数据，使得生成的消息摘要不同于普通方式计算的摘要
:::

- **hashlib.new(name, [data, ]\*, usedforsecurity=True)**：接受所希望的算法构造器

    - **name**：构造器（算法名称）
    - **data**：是可选的 bytes 类型待摘要的数据
    - **usedforsecurity**：用于安全

- **hashlib.algorithms_guaranteed**：一个集合，包含此模块在所有平台上都保证支持的哈希算法的名称
- **hashlib.algorithms_available**：一个集合，包含在所运行的 Python 解释器上可用的哈希算法的名称。将这些名称传给 `new()` 时将可被识别
- **hash.digest_size**：以字节表示的结果哈希对象的大小，返回该构造器的进制大小
- **hash.block_size**：以字节表示的哈希算法的内部块大小
- **hash.update(data)**：更新哈希对象以字符串参数。如果同一个 hash 对象重复调用该方法。例如：`m.update(a); m.update(b)` 等价于 `m.update(a+b)`。使用 `update` 输入需要被加密的对象，需要注意必须为 **字节型数据**，可以使用字符串的内置方法 `encode()` 转化为字节型。或者，当字符串为英文或者纯数字组成，只要在字符串引号外加上 `b` 也可以转化成字节型
- **hash.digest()**：返回当前已传给 `update()` 方法的数据摘要。这是一个大小为 `digest_size` 的字节串对象，字节串中可包含 `0` 至 `255` 的完整取值范围
- **hash.hexdigest()**：返回当前已传给 `update()` 方法的数据摘要，作为十六进制数据字符串值
- **hash.copy()**：复制。返回哈希对象的副本。这可被用来高效地计算共享相同初始子串的数据的摘要

例如：

```python
import hashlib

m1 = hashlib.md5('hello python'.encode(encoding='utf-8'))  # 构建 MD5 对象
print(m1.hexdigest())  # 输出结果：e53024684c9be1dd3f6114ecc8bbdddc


m2 = hashlib.md5()  # 构建 MD5 对象
m2.update('hello python'.encode(encoding='utf-8'))  # 设置编码格式 并将字符串添加到 MD5 对象中
password_md5 = m2.hexdigest()
print(m2.hexdigest())  # 输出结果：e53024684c9be1dd3f6114ecc8bbdddc


m3 = hashlib.md5()
m3.update("hello ".encode("utf-8"))  # 注意：分块是空格也要保持一致
m3.update("python".encode("utf-8"))
print(m3.hexdigest())  # 输出结果：e53024684c9be1dd3f6114ecc8bbdddc


USER_LIST = []


def pwd_Md5(password):
    password = password + 'hello python'  # 字符串混淆加盐，可以设置更复杂一点
    return hashlib.md5(password.encode("utf-8")).hexdigest()


def register():
    print('**************用户注册**************')
    while True:
        user = input('请输入用户名:')
        if user.isalpha():
            break
    while True:
        password1 = input('请输入密码>>>:').strip()
        passwprd2 = input('请重复密码>>>：').strip()
        if password1 == passwprd2:
            password = pwd_Md5(password1)  # 将密码进行 Md5 加密
            break
        else:
            print('密码不正确，重新输入！')
    temp = {'username': user, 'password': password}
    USER_LIST.append(temp)
    print(USER_LIST)


def login():
    print('**************用户登陆**************')
    user = input('请输入用户名:')
    pwd = input('请输入密码:')

    for item in USER_LIST:
        if item['username'] == user and item['password'] == pwd_Md5(pwd):
            return True


if __name__ == '__main__':
    register()
    if login():
        print('登陆成功')
    else:
        print('登陆失败')
```

### pickle

[pickle 官网地址](https://docs.python.org/zh-cn/3/library/pickle.html#module-pickle)

`pickle` 内置模块，用于对一个 Python 对象结构的二进制序列化和反序列化，一种数据的持久化保存方式。

**一般序列化流程：**

对象1--序列化--> 字符串 --> 反序列化 --> 对象2（即原对象1）

- **pickle.dump(obj, file, protocol=None, \*, fix_imports=True, buffer_callback=None)**：序列化对象。将对象 `obj` 封存以后的对象写入已打开的 file object file。它等同于 `pickle.Pickler(file, protocol).dump(obj)`

    - **obj**：要输入的对象
    - **file**：要保存的文件
    - **protocol**：整数，告知 `pickler` 使用指定的协议，可选择的协议范围 `0~5`
    - **fix_imports**：如果 `fix_imports` 为 `True` 且 `protocol` 小于 `3`，`pickle` 将尝试将 Python3 中的新名称映射到 Python2 中的旧模块名称
    - **buffer_callback**：如果 `buffer_callback` 为 `None`（默认情况），缓冲区视图（buffer view）将会作为 `pickle` 流的一部分被序列化到 `file` 中

- **pickle.dumps(obj, protocol=None, \*, fix_imports=True, buffer_callback=None)**：将 `obj` 封存以后的对象作为 bytes 类型直接返回，而不是将其写入到文件
- **pickle.load(file, \*, fix_imports=True, encoding='ASCII', errors='strict', buffers=None)**：反序列化对象。从已打开的 file object 文件中读取封存后的对象，重建其中特定对象的层次结构并返回

    - **file**：打开的文件
    - **fix_imports**、**encoding** 和 **errors**：用于控制由 Python2 生成的 `pickle` 流的兼容性。如果 `fix_imports` 为 `True`，则 `pickle` 将尝试将旧的 Python2 名称映射到 Python3 中对应的新名称。`encoding` 和 `errors` 参数告诉 `pickle` 如何解码 Python2 存储的 8 位字符串实例；这两个参数默认分别为 `ASCII` 和 `strict`。`encoding` 参数可置为 `bytes` 来将这些 8 位字符串实例读取为字节对象
    - **buffers**：如果 `buffers` 为 `None`（默认值），则反序列化所需的所有数据都必须包含在 `pickle` 流中

- **pickle.loads(data, \*, fix_imports=True, encoding='ASCII', errors='strict', buffers=None)**：重建并返回一个对象的封存表示形式 `data` 的对象层级结构

例如：

```python
import pickle

t1 = ('this is a string', 42, [1, 2, 3], None)
print(t1)  # 输出结果：('this is a string', 42, [1, 2, 3], None)
p1 = pickle.dumps(t1)
print(p1)  # 输出结果：b'\x80\x04\x95$\x00\x00\x00\x00\x00\x00\x00(\x8c\x10this is a string\x94K*]\x94(K\x01K\x02K\x03eNt\x94.'
t2 = pickle.loads(p1)
print(t2)  # 输出结果：('this is a string', 42, [1, 2, 3], None)


a1 = 'apple'
b1 = {1: 'One', 2: 'Two', 3: 'Three'}
c1 = ['fee', 'free', 'foe', 'fum']
f1 = open('temp.txt', 'wb')
pickle.dump(a1, f1)
pickle.dump(b1, f1)
pickle.dump(c1, f1)
f1.close()

f2 = open('temp.txt', 'rb')
a2 = pickle.load(f2)
print(a2)  # 输出结果：apple
b2 = pickle.load(f2)
print(b2)  # 输出结果：{1: 'One', 2: 'Two', 3: 'Three'}
c2 = pickle.load(f2)
print(c2)  # 输出结果：['fee', 'free', 'foe', 'fum']
```

### copy

[copy 官网地址](https://docs.python.org/zh-cn/3/library/copy.html#module-copy)

`copy` 内置模块，用于浅层（`shallow`）和深层（`deep`）复制操作。对于简单的 object，用 `shallow copy` 和 `deep copy` 没区别；而对于复杂的 object。例如：list 中套着 list 的情况，shallow copy 中的子 list，并未从原 object 真的独立出来。

- **copy.copy(x)**：返回 x 的浅层复制
- **copy.deepcopy(x[, memo])**：返回 x 的深层复制

例如：

```python
import copy

list1 = [1, 2, 3, [1, 2]]
list2 = copy.copy(list1)
print(list2)  # 输出结果：[1, 2, 3, [1, 2]]

list2.append('a')
print(list1)  # 输出结果：[1, 2, 3, [1, 2]]
print(list2)  # 输出结果：[1, 2, 3, [1, 2], 'a']

list2[3].append('a')
print(list1)  # 输出结果：[1, 2, 3, [1, 2, 'a']]
print(list2)  # 输出结果：[1, 2, 3, [1, 2, 'a'], 'a']


list1 = [1, 2, 3, [1, 2]]
list2 = copy.deepcopy(list1)
print(list2)  # 输出结果：[1, 2, 3, [1, 2]]

list2.append('a')
print(list1)  # 输出结果：[1, 2, 3, [1, 2]]
print(list2)  # 输出结果：[1, 2, 3, [1, 2], 'a']

list2[3].append('a')
print(list1)  # 输出结果：[1, 2, 3, [1, 2]]
print(list2)  # 输出结果：[1, 2, 3, [1, 2, 'a'], 'a']
```

### collections

[collections 官网地址](https://docs.python.org/zh-cn/3/library/collections.html#module-collections)

`collections` 内置模块，实现了特定目标的容器，以提供 Python 标准内建容器 `dict`、`list`、`set` 和 `tuple` 的替代选择。

- **collections.ChainMap(\*maps)**：类似字典（dict）的容器类，将多个字典或者其他映射组合在一起，创建一个单独的可更新的视图。如果没有 `maps` 被指定，就提供一个默认的空字典，这样一个新链至少有一个映射。底层映射被存储在一个列表中。搜索查询底层映射，直到一个键被找到。不同的是，写、更新和删除只操作第一个映射。

    **ChainMap 的方法：**

    - **maps**：返回一个可以更新的映射列表。它是仅有的存储状态，可以被修改。列表最少包含一个映射
    - **new_child(m=None, \*\*kwargs)**：返回一个新的 `ChainMap`，其中包含一个新的映射，后面跟随当前实例中的所有映射。如果指定了 `m`，它会成为新的映射加在映射列表的前面；如果未指定，则会使用一个空字典。如果指定了任何关键字参数，它们会更新所传入的映射或新的空字典。此方法被用于创建子上下文，它可在不改变任何上级映射的情况下被更新
    - **parents**：属性返回一个新的 ChainMap 包含所有的当前实例的映射，除了第一个

    ::: tip
    一个 `ChainMap()` 的迭代顺序是通过从后往前扫描所有映射来确定的。如果一个 `key` 也在第一个映射（字典）中，将返回第一个映射（字典）的 `value`
    :::

- **collections.Counter([iterable])**：一个计数器工具提供快速和方便的计数。是一个 dict 的子类，用于计数可散列对象
    
    **Counter 的方法：**
    
    - **elements()**：返回一个迭代器，其中每个元素将重复出现计数值所指定次。元素会按首次出现的顺序返回。如果一个元素的计数值小于 1，将会忽略它
    - **most_common([n])**：返回一个列表，其中包含 `n` 个最常见的元素及出现次数，按常见程度由高到低排序。如果 `n` 被省略或为 `None`，将返回计数器中的所有元素。计数值相等的元素按首次出现的顺序排序
    - **subtract([iterable])**：从迭代对象或映射对象减去元素。像 `dict.update()` 但是是减去，而不是替换。输入和输出都可以是 0 或者负数
    - **total()**：计算总计数值
    - **update([iterable])**：从迭代对象计数元素或者从另一个映射对象（或计数器）添加。像 `dict.update()` 但是是加上，而不是替换。另外，迭代对象应该是序列元素，而不是一个（`key`, `value`）对

    ::: tip
    `subtract` 减去对象可以用 `-` 号代替；`update` 添加对象可以用 `+` 号代替
    :::

- **collections.deque([iterable[, maxlen]])**：返回一个新的双向队列对象，从左到右初始化（用方法 `append()`），从 `iterable`（迭代对象）数据创建。如果 `iterable` 没有指定，新队列为空
    
    **deque 的方法：**
    
    - **append(x)**：添加 `x` 到右端
    - **appendleft(x)**：添加 `x` 到左端
    - **clear()**：清除所有元素，长度变为 `0`
    - **copy()**：创建一份浅拷贝
    - **count(x)**：计算队列中个数等于 `x` 的元素
    - **extend(iterable)**：在队列右侧添加 `iterable` 中的元素
    - **extendleft(iterable)**：在队列左侧添加 `iterable` 中的元素。**注**：在左侧添加时，`iterable` 参数的顺序将会反过来添加
    - **index(x[, start[, stop]])**：返回第 `x` 个元素（从 `start` 开始计算，在 `stop` 之前）。返回第一个匹配。如果没找到的话，引发 ValueError
    - **insert(i,x)**：在位置 `i` 插入 `x`。如果插入会导致一个限长 `deque` 超出长度 `maxlen` 的话，引发 IndexError
    - **pop()**：移去并且返回一个元素，`deque` 最右侧的那一个。如果没有元素的话，就引发一个 IndexError
    - **popleft()**：移去并且返回一个元素，`deque` 最左侧的那一个。如果没有元素的话，就引发 IndexError
    - **remove(value)**：移除找到的第一个 `value`。如果没有的话就引发 ValueError
    - **reverse()**：将 `deque` 逆序排列。返回 None
    - **maxlen**：`Deque` 的最大长度，没有限定则为 None

- **collections.defaultdict(default_factory=None[, ...])**：返回一个新的类似字典的对象。`defaultdict` 是内置 dict 类的子类。它重载了一个方法并添加了一个可写的实例变量

    - **default_factory**：本属性由 `__missing__()` 方法来调用。如果构造对象时提供了第一个参数，则本属性会被初始化成那个参数。如果未提供第一个参数，则本属性为 None
    - **\_\_missing\_\_(key)**：如果 `default_factory` 属性为 `None`，则调用本方法会抛出 KeyError 异常，附带参数 key。如果 `default_factory` 不为 `None`，则它会被（不带参数）调用来为 `key` 提供一个默认值，这个值和 `key` 作为一对键值对被插入到字典中，并作为本方法的返回值返回

    ::: tip
    `default_factory` 值为 `str` 时，调用字典中不存在的 key 时，返回空（`''`）；值为 `int` 时，调用字典中不存在的 key 时，返回 `0`；值为 `list` 时，返回一个列表
    :::

- **collections.namedtuple(typename, field_names, \*, rename=False, defaults=None, module=None)**：返回一个新的元组子类，名为 `typename`。这个新的子类用于创建类元组的对象，可以通过字段名来获取属性值，同样也可以通过索引和迭代获取值。子类实例同样有文档字符串（类名和字段名）另外一个有用的 `__repr__()` 方法，以 `name=value` 格式列明了元组内容

    - **field_names**：是一个像 `['x', 'y']` 一样的字符串序列。另外 `field_names` 可以是一个纯字符串，用空白或逗号分隔开元素名。比如：`'x y'` 或者 `'x, y'`
    - **rename**：如果 `rename` 为真，无效字段名会自动转换成位置名。比如：`['abc', 'def', 'ghi', 'abc']` 转换成 `['abc', '_1', 'ghi', '_3']`，消除关键词 `def` 和重复字段名 `abc`
    - **defaults**：值可以为 `None` 或者是一个默认值的 `iterable`。如果一个默认值域必须跟其他没有默认值的域在一起出现，`defaults` 就应用到最右边的参数。比如：如果域名 `['x', 'y', 'z']` 和默认值 `(1, 2)`，那么 `x` 就必须指定一个参数值，`y` 默认值 `1`，`z` 默认值 `2`
    - **module**：如果 `module` 值有定义，命名元组的 `__module__` 属性值就被设置

- **collections.OrderedDict([items])**：返回一个 dict 子类的实例，它具有专门用于重新排列字典顺序的方法

    **OrderedDict 的方法：**

    - **popitem(last=True)**：该方法移除并返回一个（`key`, `value`）键值对。如果 `last` 值为真，则按 LIFO 后进先出的顺序返回键值对，否则就按 FIFO 先进先出的顺序返回键值对
    - **move_to_end(key, last=True)**：将一个现有的 key 移到序字典的任一端。如果 `last` 为真值（默认）则将条目移到右端，或者如果 `last` 为假值则将条目移到开头。如果 key 不存在则会引发 KeyError

例如：

```python
import collections

d1 = {'apple': 1, 'banana': 2}
d2 = {'orange': 2, 'apple': 3, 'pike': 1}
combined1 = collections.ChainMap(d1, d2)
combined2 = collections.ChainMap(d2, d1)

print(combined1)
print(combined2)


# 输出结果
ChainMap({'apple': 1, 'banana': 2}, {'orange': 2, 'apple': 3, 'pike': 1})
ChainMap({'orange': 2, 'apple': 3, 'pike': 1}, {'apple': 1, 'banana': 2})


d1['aaa'] = 4
print(combined1)
print(combined2)


# 输出结果
ChainMap({'apple': 1, 'banana': 2, 'aaa': 4}, {'orange': 2, 'apple': 3, 'pike': 1})
ChainMap({'orange': 2, 'apple': 3, 'pike': 1}, {'apple': 1, 'banana': 2, 'aaa': 4})


d3 = {'bbb': 5}
print(combined1.maps)
print(combined1.new_child(m=d3, ccc=2))
print(combined1.maps)
print(combined1.parents)
print(combined1.maps)


# 输出结果
[{'apple': 1, 'banana': 2, 'aaa': 4}, {'orange': 2, 'apple': 3, 'pike': 1}]
ChainMap({'bbb': 5, 'ccc': 2}, {'apple': 1, 'banana': 2, 'aaa': 4}, {'orange': 2, 'apple': 3, 'pike': 1})
[{'apple': 1, 'banana': 2, 'aaa': 4}, {'orange': 2, 'apple': 3, 'pike': 1}]
ChainMap({'orange': 2, 'apple': 3, 'pike': 1})
[{'apple': 1, 'banana': 2, 'aaa': 4}, {'orange': 2, 'apple': 3, 'pike': 1}]


for k, v in combined1.items():
    print(k, v)


# 输出结果
orange 2
apple 1
pike 1
banana 2
aaa 4


my_str = collections.Counter('hello world')
my_list = collections.Counter(['hello', 'world', 'hello', 'python'])

print(my_str)  # 输出结果：Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})
print(my_list)  # 输出结果：Counter({'hello': 2, 'world': 1, 'python': 1})

print(list(my_str.elements()))  # 输出结果：['h', 'e', 'l', 'l', 'l', 'o', 'o', ' ', 'w', 'r', 'd']
print(list(my_list.elements()))  # 输出结果：['hello', 'hello', 'world', 'python']

print(my_str.most_common())  # 输出结果：[('l', 3), ('o', 2), ('h', 1), ('e', 1), (' ', 1), ('w', 1), ('r', 1), ('d', 1)]
print(my_str.most_common(4))  # 输出结果：[('l', 3), ('o', 2), ('h', 1), ('e', 1)]

my_list.subtract(['hello'])
print(my_list)  # 输出结果：Counter({'hello': 1, 'world': 1, 'python': 1})
print(my_list.total())  # 输出结果：3

my_list.update(['hello'])
print(my_list)  # 输出结果：Counter({'hello': 2, 'world': 1, 'python': 1})

my_list01 = collections.Counter(['world'])
print(my_list - my_list01)  # 输出结果：Counter({'hello': 2, 'python': 1})
print(my_list + my_list01)  # 输出结果：Counter({'hello': 2, 'world': 2, 'python': 1})


my_list = [i for i in range(1, 15)]

d = collections.deque(my_list, maxlen=10)
print(d)  # 输出结果：deque([5, 6, 7, 8, 9, 10, 11, 12, 13, 14], maxlen=10)


d.append(1)
print(d)  # 输出结果：deque([6, 7, 8, 9, 10, 11, 12, 13, 14, 1], maxlen=10)


P1 = collections.namedtuple('Person1', ['name', 'age', 'height'])
P2 = collections.namedtuple('Person2', 'name,age,height')
P3 = collections.namedtuple('Person3', 'name age height')

lucy = P1('lucy', 23, 180)
print(lucy)  # 输出结果：Person1(name='lucy', age=23, height=180)

jack = P2('jack', 20, 190)
print(jack)  # 输出结果：Person2(name='jack', age=20, height=190)

print(lucy.name)  # 输出结果：lucy
print(lucy.age)  # 输出结果：23
```

### socket

[socket 官网地址](https://docs.python.org/zh-cn/3/library/socket.html#module-socket)

`socket` 内置模块，用于针对服务器端和客户端 Socket 进行打开、读写和关闭。

服务器端先初始化 `Socket`，然后与端口绑定（`bind`），对端口进行监听（`listen`），调用 `accept` 阻塞，等待客户端连接。在这时如果有个客户端初始化一个 `Socket`，然后连接服务器（`connect`）。如果连接成功，这时客户端与服务器端的连接就建立了。客户端发送数据请求，服务器端接收请求并处理请求，然后把回应数据发送给客户端，客户端读取数据，最后关闭连接，一次交互结束。

- **socket.socket(family=AF_INET, \*, type=SOCK_STREAM, proto=0, fileno=None)**：使用给定的地址族、套接字类型和协议号创建一个新的套接字

    - **family**：地址族应为 `AF_INET`（默认值）、`AF_INET6`、`AF_UNIX`、`AF_CAN`、`AF_PACKET` 或 `AF_RDS` 之一。
    - **type**：套接字类型应为 `SOCK_STREAM`（默认值）、`SOCK_DGRAM`、`SOCK_RAW` 或其他可能的 `SOCK_` 常量之一。协议号通常为零并且可以省略，或在协议族为 `AF_CAN` 的情况下，协议应为 `CAN_RAW`、`CAN_BCM`、`CAN_ISOTP` 或 `CAN_J1939` 之一
    - **fileno**：如果指定了 `fileno`，那么将从这一指定的文件描述符中自动检测 `family`、`type` 和 `proto` 的值。如果调用本函数时显式指定了 `family`、`type` 和 `proto`  参数，可以覆盖自动检测的值

- **socket.create_connection(address, \*, timeout=GLOBAL_DEFAULT, source_address=None, all_errors=False)**：连接到一个在互联网 `address`（以（`host`, `port`）二元组表示）上侦听的 TCP 服务，并返回套接字对象。如果 `host` 是非数字的主机名，它将尝试将其解析为 `AF_INET` 和 `AF_INET6`，然后依次尝试连接到所有可能的地址直到连接成功

    - **timeout**：可以在套接字实例上设置超时（在尝试连接前）。如果未提供 `timeout`，则使用由 `getdefaulttimeout()` 返回的全局默认超时设置
    - **source_address**：如果提供了 `source_address`，它必须为二元组（`host`, `port`），以便套接字在连接之前绑定为其源地址。如果 `host` 或 `port` 分别为 `''` 或 `0`，则使用操作系统默认行为
    - **all_errors**：当无法创建连接时，将引发异常。默认情况下，它是列表中最后一个地址的例外。如果 `all_errors` 为 `True`，则它是包含所有尝试的错误的 ExceptionGroup

- **socket.close(fd)**：关闭一个套接字文件描述符
- **socket.getfqdn([name])**：返回 `name` 的完整限定域名。如果 `name` 被省略或为空，则将其解读为本地主机
- **socket.gethostbyname(hostname)**：将主机名转换为 IPv4 地址格式。IPv4 地址以字符串格式返回
- **socket.gethostname()**：返回一个字符串，包含当前正在运行 Python 解释器的机器的主机名
- **socket.getnameinfo(sockaddr, flags)**：将套接字地址 `sockaddr` 转换为二元组（主机、端口）
- **socket.accept()**：接受一个连接。此 `socket` 必须绑定到一个地址上并且监听连接。返回值是一个（`conn`, `address`）对，其中 `conn` 是一个新的套接字对象，用于在此连接上收发数据，`address` 是连接另一端的套接字所绑定的地址
- **socket.bind(address)**：将套接字绑定到 `address`。套接字必须尚未绑定。`address` 的格式取决于地址簇
- **socket.close()**：将套接字标记为关闭
- **socket.connect(address)**：连接到 `address` 处的远程套接字。`address` 的格式取决于地址簇
- **socket.connect_ex(address)**：类似于 `connect(address)`。如果操作成功，则错误指示器为 `0`，否则为 errno 变量的值。这对支持如异步连接很有用
- **socket.detach()**：将套接字对象置于关闭状态，而底层的文件描述符实际并不关闭。返回该文件描述符，使其可以重新用于其他目的
- **socket.getpeername()**：返回套接字连接到的远程地址
- **socket.getsockname()**：返回套接字本身的地址
- **socket.getblocking()**：如果套接字处于阻塞模式，返回 `True`，非阻塞模式返回 `False`
- **socket.gettimeout()**：返回套接字操作相关的超时秒数（浮点数），未设置超时则返回 `None`。它反映最后一次调用 `setblocking()` 或 `settimeout()` 后的设置
- **socket.listen([backlog])**：启动一个服务器用于接受连接。如果指定 `backlog`，则它最低为 `0`（小于 `0` 会被置为 `0`），它指定系统允许暂未 `accept` 的连接数，超过后将拒绝新连接。未指定则自动设为合理的默认值
- **socket.recv(bufsize[, flags])**：从套接字接收数据。返回值是一个字节对象，表示接收到的数据。`bufsize` 指定一次接收的最大数据量
- **socket.recvfrom(bufsize[, flags])**：从套接字接收数据。返回值是一对（`bytes`, `address`），其中 `bytes` 是字节对象，表示接收到的数据，`address` 是发送端套接字的地址
- **socket.send(bytes[, flags])**：发送数据给套接字。本套接字必须已连接到远程套接字。返回已发送的字节数，应用程序要负责检查所有数据是否已发送。如果仅传输了部分数据，程序需要自行尝试传输其余数据
- **socket.sendall(bytes[, flags])**：发送数据给套接字。本套接字必须已连接到远程套接字。持续从 `bytes` 发送数据，直到所有数据都已发送或发生错误为止。成功后会返回 `None`。出错后会抛出一个异常
- **socket.setblocking(flag)**：设置套接字为阻塞或非阻塞模式：如果 `flag` 为 `false`，则将套接字设置为非阻塞，否则设置为阻塞
- **socket.settimeout(value)**：为阻塞套接字的操作设置超时。`value` 参数可以是非负浮点数，表示秒，也可以是 `None`
- **socket.setsockopt(level, optname, None, optlen: int)**：设置给定套接字选项的值

### http

[http 官网地址](https://docs.python.org/zh-cn/3/library/http.html#module-http)

### ftplib

[ftplib 官网地址](https://docs.python.org/zh-cn/3/library/ftplib.html#module-ftplib)

### poplib

[poplib 官网地址](https://docs.python.org/zh-cn/3/library/poplib.html#module-poplib)

### imaplib

[imaplib 官网地址](https://docs.python.org/zh-cn/3/library/imaplib.html#module-imaplib)

### pprint

[pprint 官网地址](https://docs.python.org/zh-cn/3/library/pprint.html#module-pprint)

### telnetlib

[telnetlib 官网地址](https://docs.python.org/zh-cn/3/library/telnetlib.html#module-telnetlib)

### subprocess

[subprocess 官网地址](https://docs.python.org/zh-cn/3/library/subprocess.html#module-subprocess)

## 第三方模块

### requests

[requests 官网地址](https://requests.readthedocs.io/en/latest/)

requests 第三方模块，用于处理网络请求。

### pygame

[pygame 官网地址](https://www.pygame.org/news)

### Matplotlib

[Matplotlib 官网地址](https://matplotlib.org/3.6.2/index.html#)

### Pygal

[Pygal 官网地址](https://www.pygal.org/en/stable/#)

### django

[django 官网地址](https://www.djangoproject.com/)

### PyPDF2

[PyPDF2 官网地址](https://pypdf2.readthedocs.io/en/latest/)

`PyPDF2` 第三方模块，用于处理 PDF 文件。读取、写入、分割、合并 PDF 文档，它还可以对 PDF 文档进行添加水印、加密解密等操作。

- **PyPDF2.PdfReader(stream[, strict=False[, password=None]])**：初始化 `PdfReader` 对象

    - **stream**：文件对象或支持标准读取的对象并查找类似于 File 对象的方法。也可能是一个表示 PDF 文件路径的字符串
    - **strict**：确定是否应警告用户所有问题，也会导致一些可纠正的问题致命。默认值为 `False`
    - **password**：初始化时解密 PDF 文件。如果密码为 `None`，则不会解密文件。默认为 `None`

例如：

```python
import PyPDF2

with open("零基础学 Python（全彩版-1）.pdf", 'rb') as pdf:
    read_pdf = PyPDF2.PdfReader(pdf)
    print("Number of pages in pdf:", len(read_pdf.pages))  # 输出结果：300

with open("看漫画学 Python：有趣、有料、好玩、好用：全彩版.pdf", 'rb') as pdf:
    read_pdf = PyPDF2.PdfReader(pdf)
    pdf_page = read_pdf.pages[2]
    pdf_content = pdf_page.extract_text()
    print(pdf_content)  # 输出结果：提取第二页的文本

with open("零基础学 Python（全彩版-1）.pdf", 'rb') as pdf:
    rd_pdf = PyPDF2.PdfReader(pdf)
    wr_pdf = PyPDF2.PdfWriter()
    for pg_num in range(len(rd_pdf.pages)):
        pdf_page = rd_pdf.pages[pg_num]
        pdf_page.rotate(90)  # 按顺时针旋转 90 度
        wr_pdf.add_page(pdf_page)

    with open('rotated.pdf', 'wb') as pdf_out:
        wr_pdf.write(pdf_out)
print("pdf successfully rotated")
```

### xlrd

[xlrd 官网地址](https://xlrd.readthedocs.io/en/latest/)

`xlrd` 第三方模块，用于处理 Excel 文件。新版本只能处理以 `.xls` 后缀的文件，旧版本可以处理以 `.xlsx` 后缀的文件。

- **xlrd.open_workbook(filename=None, \*, logfile=<_io.TextIOWrapper name='\<stdout\>' mode='w' encoding='utf-8'>, verbosity=0, use_mmap=True, file_contents=None, encoding_override=None, formatting_info=False, on_demand=False, ragged_rows=False, ignore_workbook_corruption=False)**：全局加载数据和返回而不释放资源。在这个阶段，唯一的有关工作表的可用信息是 `Book.nsheets` 和 `Book.sheet_names()`，分别是工作簿文件中存在的工作表数和工作簿文件中所有工作表的名称列表

    - **filename**：要打开的电子表格文件的路径
    - **logfile**：写入消息和诊断的打开文件
    - **verbosity**：增加写入日志文件
    - **use_mmap**：是否使用 `mmap` 模块是通过启发式方式确定的。使用此参数覆盖结果。当前启发式：如果存在，则使用 `mmap`
    - **file_contents**：字符串或 `mmap.mmap` 对象或其他类似行为对象。如果提供，将不使用，除了（可能）在 `file_contents` 和 `filename` 消息中
    - **encoding_override**：用于克服代码页信息的缺失或错误在旧版本的文件中
    - **formatting_info**：默认值为 `False`，这样可以节省内存。在这种情况下，“空白” 单元格（即具有自己的格式信息但没有数据的单元格）将被视为空，忽略文件 BLANK 和 MULBLANK 记录。这将切断空单元格或空白单元格行的任何底部或右侧 “边距”。只有 `cell_value()` 和 `cell_type()` 可用。值为 `True` 时，将从电子表格文件中读取格式信息。这将提供所有单元格，包括空单元格和空白单元格。每个单元格都有格式信息。请注意，这将在与 xlsx 文件一起使用时引发 NotImplementedError
    - **on_demand**：控制是最初加载所有工作表还是在需要时由调用方加载
    - **ragged_rows**：默认值 `False`，表示所有行都用空单元格填充，因此所有行的大小与 NCOL 中的大小相同。值为 `True`，表示行尾没有空单元格。如果行分布广泛，这可以节省大量内存大小不一
    - **ignore_workbook_corruption**：此选项允许读取损坏的工作簿。默认值为 `False` 您可能遇到 CompDocError 时：工作簿损坏。值为 `True` 时将忽略该异常


例如：

```python
excel_file = (r"31YA 版本管理表.xlsx")
book = xlrd.open_workbook(excel_file)
print("The number of worksheets is {0}".format(book.nsheets))  # 显示表中工作表的数量
print("Worksheet name(s): {0}".format(book.sheet_names()))  # 显示表中工作表名称

sh = book.sheet_by_index(0)  # 指定表中的某一个工作表
print("{0} {1} {2}".format(sh.name, sh.nrows, sh.ncols))  # 显示指定工作表的名称，行数，列数
print("Cell D30 is {0}".format(sh.cell_value(rowx=3, colx=3)))  # 显示指定单元格内容

for rx in range(sh.nrows):
    print(sh.row(rx))  # 返回指定工作表全部内容
```

### openpyxl

[openpyxl 官网地址](https://openpyxl.readthedocs.io/en/stable/)

`openpyxl` 第三方模块，用于读写 `xlsx`、`xlsm`、`xltx` 和 `xltm` 文件。

- **openpyxl.Workbook**：导入工作簿
- **openpyxl.Workbook.active**：抓取活动工作表
- **openpyxl.Workbook.append**：附加行
- **openpyxl.Workbook.save**：保存文件

例如：

```python
import datetime
from openpyxl import Workbook

wb = Workbook()  # 导入工作簿
ws = wb.active  # 抓取活动工作表
ws['A1'] = 42  # 数据可以直接分配给单元格
ws.append([1, 2, 3])  # 也可以附加行
ws['A2'] = datetime.datetime.now()  # Python 类型将自动转换
wb.save("sample.xlsx")  # 保存文件
```

### pandas

[pandas 官网地址](https://pandas.pydata.org/)

`pandas` 第三方模块，用于处理 Excel 文件。

- **pandas.read_excel(io, sheet_name=0, *, header=0, names=None, index_col=None, usecols=None, squeeze=None, dtype=None, engine=None, converters=None, true_values=None, false_values=None, skiprows=None, nrows=None, na_values=None, keep_default_na=True, na_filter=True, verbose=False, parse_dates=False, date_parser=None, thousands=None, decimal='.', comment=None, skipfooter=0, convert_float=None, mangle_dupe_cols=True, storage_options=None)**：将 Excel 文件读入 panda DataFrame

    - **io**：任何有效的字符串路径都是可以接受的。该字符串可以是 URL
    - **sheet_name**：字符串用于工作表名称。整数用于零索引工作表位置（图表工作表不计为工作表位置）。字符串或整数列表用于请求多个工作表。指定 `None` 以获取所有工作表
    - **header**：用于已分析的列标签的行（0 索引）数据帧。如果传递了整数列表，则这些行位置将组合成 MultiIndex。如果没有标头，请使用 `None`
    - **names**：要使用的列名列表。如果文件不包含标题行，请使用 `None`
    - **index_col**：用作数据帧的行标签的列（0 索引）。如果没有此类列，则传递 `None`
    - **usecols**：返回列的子集。如果为 `None`，则分析所有列。如果为 `str`，则表示以逗号分隔的 Excel 列字母列表和列范围（例如：`A：E` 或 `A，C，E：F`）。范围包括双方。如果为 `int` 列表，则表示要解析的列号列表（0 索引）。如果是字符串列表，则指示要解析的列名列表。如果是 `callable`，则根据它计算每个列名并解析列。如果为 `callable` 对象返回 `True`
    - **squeeze**：如果解析的数据仅包含一列，则返回 Series。自版本 1.4.0 起已弃用
    - **dtype**：数据或列的数据类型。例如：`{'a'： np.float64， 'b'： np.int32}` 使用 object 保留存储在 Excel 中的数据，而不解释 `dtype`。如果指定了转换器，则将应用它们的 `dtype` 转换
    - **engine**：如果 `io` 不是缓冲区或路径，则必须将其设置为标识 `io`
    - **converters**：用于转换某些列中的值的函数字典
    - **true_values**：要视为 `True` 的值
    - **nrows**：要分析的行数，默认为 `None`
    - **na_values**：将指定字符串转换为 `NA/NaN`
    - **comment**：注释超出行的其余部分。向此参数传递一个或多个字符，以指示输入文件中的注释。注释字符串与当前行结尾之间的任何数据都将被忽略

例如：

```python
import pandas as pd

excel_file = '31YA 版本管理表.xlsx'
cols = [1, 2, 3]
df = pd.read_excel(excel_file, sheet_name=0, usecols=cols)
print(df.head())


# 输出结果
  Unnamed: 1  ...              Unnamed: 3
0       シート名  ...  前回のバージョン管理表と比べると更新有り無し
1   ｿﾌﾄ(SOC)  ...                      有り
2   ｿﾌﾄ(MCU)  ...                      有り
3         4G  ...                      無し
4       制限事項  ...                      有り

[5 rows x 3 columns]
```

### numpy

[numpy 官网地址](https://numpy.org/)

### fabric

[fabric 官网地址](https://www.fabfile.org/)

### paramiko

[paramiko 官网地址](https://www.paramiko.org/)

### netmiko

[netmiko 官网地址](https://libraries.io/pypi/netmiko)

### PyQt5

[PyQt5 官网地址](https://www.pythonguis.com/pyqt5/)

- **PyQt5.window**：用于创建简单的应用程序窗口
- **PyQt5.button**：是一个按钮，可以随时单击，并执行对应操作
- **PyQt5.textbox**：控件允许用户输入文本
- **PyQt5.label**：控件用于显示单行文本或图像
- **PyQt5.combo box**：控件包含一个组合按钮和一个弹出列表
- **PyQt5.check box**：控件是一个可以选中或取消选中的选项按钮
- **PyQt5.radio button**：控件是一个可以选中或取消选中的选项按钮。在一组单选按钮中，一次只能选中其中一个按钮
- **PyQt5.message box**：控件用于显示消息
- **PyQt5.menu**：控件提供了不同的显示选项
- **PyQt5.table**：控件为应用程序提供标准表显示功能，可以使用多行和多列构建
- **PyQt5.signals slots**：`signals` 让程序对已发生的事件做出反应，而 `slot` 是一个在信号发生时被调用的函数
- **PyQt5.layouts**：由多个控件组成

