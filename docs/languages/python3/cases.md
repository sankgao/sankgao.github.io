---
title: 案例
icon: notes
date: 2023-06-07
category: Languages
tag:
    - Python
---

一些关于 Python 的案例。

## 计算 BMI 指数

根据身高、体重，计算 BMI 指数。

::: details 代码

```python
print("请输入数字：")

height = float(input("请输入您的身高（米）： "))
weight = float(input("请输入您的体重（公斤）： "))

print("您的身高为：", height)
print("您的体重为：", weight)

bmi = weight / (height * height)

print("您的 BMI 指数为： " + str(bmi))

if bmi < 18.5:
    print("您的体重过轻")
elif 18.5 <= bmi < 24.9:
    print("正常范围，注意保持")
elif 24.9 <= bmi < 29.9:
    print("您的体重过重")
else:
    print("肥胖")
```

:::

## 抹零结账

::: details 代码

```python
money_all = 56.75 + 72.91 + 88.50 + 26.37 + 68.51
money_all_str = str(money_all)

print("商品总金额为： " + money_all_str)

money_real = int(money_all)
money_real_str = str(money_real)

print("实收金额为： " + money_real_str)
```

:::

## 查找指定值

找出 100 以内，可以除以三余二、除以五余三、除以七余二的数。

::: details 代码

```python
i = 0

while i < 101:
    if (i % 3) == 2 and (i % 5) == 3 and (i % 7) == 2:
        print("这个数是 ", i)
        # 强制退出循环
        break
    # i = i + 1
    i += 1
```

:::

## 九九乘法表

::: details 代码

```python
for i in range(1, 10):
    for j in range(1, i + 1):
        if i == j:
            print(j, "*", i, "=", i * j)
            # print(f"{j}*{i}={i * j}")
            # print("%d*%d=%d" % (j, i, i * j))
            # print("{:d}*{:d}={:d}".format(j, i, i * j))
            # print("{0}*{1}={2}".format(j, i, i * j))
        else:
            print(j, "*", i, "=", i * j, end="\t")
```

:::

## 统计次数

从 1 到 99 中尾数是 7 或 7 的倍数，一共出现的次数。

::: details 代码

```python
i = 0

for number in range(1, 100):
    if (number % 7) == 0 or str(number).endswith("7"):
        print(number)
        i += 1

print("从 1~99 中尾数是 7 或 7 的倍数，一共出现 " + str(i) + " 次")

# 或者

total = 99

for number in range(1, 100):
    if (number % 7) == 0:
        continue  # 结束本次循环
    else:
        string = str(number)
        if string.endswith("7"):
            continue
    total -= 1

print("从 1~99 中尾数是 7 或 7 的倍数，一共出现", total, "次")

# 或者

i = 1
num = 0

while i < 100:
    if (i % 7) == 0 or str(i).endswith("7"):
        print(i)
        num += 1
    i += 1

print("从 1~99 中尾数是 7 或 7 的倍数，一共出现 " + str(num) + " 次")
```

:::

## 计算出水仙花数

水仙花数是一个三位数，三位数各位的立方之和等于三位数本身。水仙花数有 4 个：153、370、371、407

::: details 代码

```python
i = "100"

while int(i) < 1000:
    num01 = int(i[0]) ** 3 + int(i[1]) ** 3 + int(i[2]) ** 3

    if num01 == int(i):
        print("i = " + i)

    i = str(int(i) + 1)

# 或者

i = 100
r = 0
s = 0
t = 0

while i < 1000:
    r = i // 100
    s = (i - r * 100) // 10
    t = i - r * 100 - s * 10

    if i == (r ** 3 + s ** 3 + t ** 3):
        print("i = " + str(i))

    i += 1
```

:::

## 查询能量

模拟支付宝蚂蚁森林的能量产生过程

::: details 代码

```python
while True:
    print("能量来源如下：\n\n生活缴费\n行走捐\n共享单车\n线下支付\n网络购票\n")
    x = (input("退出程序输入 q！\n请输入能量来源查询能量："))

    if x == "生活缴费":
        print("100g")
    elif x == "行走捐":
        print("200g")
    elif x == "共享单车":
        print("150g")
    elif x == "线下支付":
        print("50g")
    elif x == "网络购票":
        print("300g")
    elif x == "q":
        print("退出")
        break
    else:
        print("输入错误！请输入：生活缴费、行走捐、共享单车、线下支付、网络购票")
```

:::

## 猜数字

::: details 代码

```python
import random

# 随机生成一个整数
num = random.randrange(1, 11)

while True:
    num01 = int(input("请输入 1~10 之间的整数数字，包括 1 和 10： "))

    if 0 < num01 < num:
        print("小了，请重新输入")
    elif num < num01 < 11:
        print("大了，请重新输入")
    elif num01 == 0:
        print("退出程序")
        break
    elif num01 == num:
        print("恭喜您，猜中了，猜中的数字是：", num)
        break
    else:
        print("输入无效，只能输入 1~10 之间的整数数字，包括 1 和 10。或输入 0 退出！")
```

:::

## 跳一跳

输入不同的加分块，并显示分数。

::: details 代码

```python
while True:
    print(('=' * 20), "跳一跳", ('=' * 20))
    print("欢迎回来，请开始游戏...\n输入 0 退出游戏！")
    x = (input("请输入（中心、音乐块、微信支付块）:"))

    if x == "中心":
        print("30")
    elif x == "音乐块":
        print("32")
    elif x == "微信支付块":
        print("42")
    elif x == "0":
        print("退出")
        break
    else:
        print("输入错误！")
```

:::

## 模拟 10086 查询功能

::: details 代码

```python
print(('=' * 20), "10086查询功能", ('=' * 20))
print("输入1，查询当前余额\n输入2，查询当前剩余流量\n输入3，查询当前剩余通话\n输入0，退出自动查询系统\n")

while True:
    number = input()
    if number == '1':
        print("当前余额为：999元")
    elif number == '2':
        print("当前剩余流量为：5G")
    elif number == '3':
        print("当前剩余通话为：189分钟")
    elif number == '0':
        print("退出自动查询系统！")
        break
```

:::

## 使用二维列表输出不同版式的古诗

如：柳宗元的《江雪》。

::: details 代码

```python
str1 = "千山鸟飞绝"
str2 = "万径人踪灭"
str3 = "孤舟蓑笠翁"
str4 = "独钓寒江雪"
verse = [list(str1), list(str2), list(str3), list(str4)]

print(('=' * 10), "横版", ('=' * 10))
for i in range(4):
    for j in range(5):
        if j == 4:
            print(verse[i][j])
        else:
            print(verse[i][j], end='')

print(('=' * 10), "竖版", ('=' * 10))
verse.reverse()
for i in range(5):
    for j in range(4):
        if j == 3:
            print(verse[j][i])
        else:
            print(verse[j][i], end='')
```

:::

## 输出王者荣耀的游戏角色

王者荣耀游戏中有很多英雄，这些英雄可以分为法师、战士、坦克、刺客、射手和辅助。

本实例将应用 Python 中的列表存储不同类别的英雄，并且遍历输出这些英雄。

::: details 代码

```python
print("“王者荣耀“ 游戏角色：")

role = [
    ["苏烈", "刘邦", "钟馗", "程咬金", "白起", "项羽", "廉颇", "猪八戒"],
    ["狂铁", "凯", "哪吒", "杨戬", "橘右京", "亚瑟", "雅典娜", "夏侯惇"],
    ["百里玄策", "荆轲", "李白", "裴擒虎", "孙悟空", "韩信", "娜可露露"],
    ["杨玉环", "奕星", "女娲", "周瑜", "芈月", "干将莫邪", "诸葛亮", "貂蝉"],
    ["公孙离", "百里守约", "后羿", "黄忠", "马可波罗", "成吉思汗", "虞姬"],
    ["明世隐", "孙膑", "太乙真人", "蔡文姬", "东皇太一", "鬼谷子", "大乔"]
]

for i in range(6):
    if i == 0:
        print("===坦克：===")
        for j in range(8):
            print(role[i][j], end=' ')
        continue
    elif i == 1:
        print("\n""===战士：===")
        for j in range(17):
            print(role[i][j], end=' ')
        continue
    elif i == 2:
        print("\n""===刺客：===")
        for j in range(10):
            print(role[i][j], end=' ')
        continue
    elif i == 3:
        print("\n""===法师：===")
        for j in range(21):
            print(role[i][j], end=' ')
        continue
    elif i == 4:
        print("\n""===射手：===")
        for j in range(13):
            print(role[i][j], end=' ')
        continue
    elif i == 5:
        print("\n""===辅助：===")
        for j in range(10):
            print(role[i][j], end=' ')
        continue
```

:::

## 模拟火车订票系统

::: details 代码

```python
tickets = [
    ["车次 ", "出发站-到达站", "出发时间", "到达时间", "历时"],
    ["T40 ", "长春-北京", "00:12", "12:20", "12:08"],
    ["Z298", "长春-北京", "00:06", "10:50", "10:44"],
    ["Z158", "长春-北京", "12:48", "21:06", "8:18"],
    ["Z62 ", "长春-北京", "21:58", "06:08", "8:30"]
]

# 生成二维列表，将 tickets 列表用二维列表打印
for i in range(5):
    for j in range(5):
        if j == 4:
            print(tickets[i][j])
        else:
            print(tickets[i][j], end='\t\t')

ticket = input("请输入要购买的车次：")
people = input("请输入要乘车人（用逗号分隔）：")

if ticket == "T40":
    print(f"您已购 {ticket} 次列车 {tickets[1][1]} {tickets[1][2]} 开，请 {people} 尽快换取纸质车票。【铁路客服】")
elif ticket == "Z298":
    print(f"您已购 {ticket} 次列车 {tickets[2][1]} {tickets[2][2]} 开，请 {people} 尽快换取纸质车票。【铁路客服】")
elif ticket == "Z158":
    print(f"您已购 {ticket} 次列车 {tickets[3][1]} {tickets[3][2]} 开，请 {people} 尽快换取纸质车票。【铁路客服】")
elif ticket == "Z62":
    print(f"您已购 {ticket} 次列车 {tickets[4][1]} {tickets[4][2]}，请 {people} 尽快换取纸质车票。【铁路客服】")
```

:::

## 电视剧的收视率排行榜

应用列表和元组将以下电视剧按收视率由高到低进行排序：

- 《Give up,hold on to me》 收视率：1.4%
- 《The private dishes of the husbands》 收视率：1.343%
- 《My father-in-law will do martiaiarts》 收视率：0.92%
- 《North Canton still believe in love》 收视率：0.862%
- 《Impossible task》 收视率：0.553%
- 《Sparrow》 收视率：0.411%
- 《East of dream Avenue》 收视率：0.164%
- 《The prodigal son of the new fromtier town》 收视率：0.259%
- 《Distant distance》 收视率：0.394%
- 《Music legend》 收视率：0.562%

::: details 代码

```python
print("电视剧的收视率排行榜：")

TV = (
    "《Give up,hold on to me》",
    "《The private dishes of the husbands》",
    "《My father-in-law will do martiaiarts》",
    "《North Canton still believe in love》",
    "《Impossible task》",
    "《Sparrow》",
    "《East of dream Avenue》",
    "《The prodigal son of the new fromtier town》",
    "《Distant distance》",
    "《Music legend》"
)

num = ["1.4", "1.343", "0.92", "0.862", "0.553", "0.411", "0.164", "0.259", "0.394", "0.562"]

# 创建空列表，用于将每个电视名和对应的收视率进行保存
TV_num = []

# 生成二维列表，将每个电视名和对应的收视率添加到 TV_num 列表中
for i in range(10):
    TV_num.append([])

    for j in range(2):
        if j == 0:
            TV_num[i].append(TV[i] + " 收视率：")
        else:
            TV_num[i].append(num[i])

# 对电视的收视率，从高到底进行排序
TV_num.sort(key=lambda TV_num: TV_num[1], reverse=True)

# 生成二维列表，打印 TV_num 列表中的数据
for i in range(10):
    for j in range(2):
        if j == 1:
            print(TV_num[i][j] + "%")
        else:
            print(TV_num[i][j], end=' ')
```

:::

## 定制自己的手机套餐

根据需求定制自己的手机套餐，可选项为话费、流量和短信。

- 话费：0 分钟, 50 分钟, 100 分钟, 300 分钟, 不限量
- 流量：0M, 500M, 1G, 5G, 不限量
- 短信：0 条, 50 条, 100 条

::: details 代码

```python
time = ["0 分钟", "50 分钟", "100 分钟", "300 分钟", "不限量"]
flows = ["0M", "500M", "1G", "5G", "不限量"]
num = ["0 条", "50 条", "100 条"]

print("定制自己的手机套餐：")
print("A. 请设置通话时长：")

for index, value in enumerate(time):
    index += 1
    print(index, value)

time_option = input("输入选择的通话时长编号：")

if time_option == str(1):
    time_option = "0 分钟"
elif time_option == str(2):
    time_option = "50 分钟"
elif time_option == str(3):
    time_option = "100 分钟"
elif time_option == str(4):
    time_option = "300 分钟"
elif time_option == str(5):
    time_option = "不限量"

print("B. 请设置流量包：")

for index, value in enumerate(flows):
    index += 1
    print(index, value)

flows_option = input("输入选择的通话时长编号：")

if flows_option == str(1):
    flows_option = "0M"
elif flows_option == str(2):
    flows_option = "500M"
elif flows_option == str(3):
    flows_option = "1G"
elif flows_option == str(4):
    flows_option = "5G"
elif flows_option == str(5):
    flows_option = "不限量"

print("C. 请设置短信条数：")

for index, value in enumerate(num):
    index += 1
    print(index, value)

num_option = input("输入选择的通话时长编号：")

if num_option == str(1):
    num_option = "0 条"
elif num_option == str(2):
    num_option = "50 条"
elif num_option == str(3):
    num_option = "100 条"

print(f"您的手机套餐定制成功：免费通话时长为 {time_option}/月，流量为 {flows_option}/月，短信跳数为 {num_option}/月")
```

:::

## 判断会员是否可以注册，会员名称不管大小写

::: details 代码

```python
username = "|zhangsan|Lisi|WangWu|zhaoliu|zhouwu|"
# 将字符串都转换为小写
username01 = username.lower()

regname = input("请输入要注册的会员名称：")
regname01 = "|" + regname.lower() + "|"

print(regname01)

if regname01 in username01:
    print("会员名", regname, "已经存在")
else:
    print("会员名", regname, "可以注册")
```

:::

## 验证输入的手机号码是否为中国移动的号码

::: details 代码

```python
import re

pattern = r'(13[4-9]\d{8})$|(15[01289]\d{8})$'
mobile = input("请输入您的电话号码：")
# 在整个字符串中搜索第一个正则表达式匹配的值
match = re.match(pattern, mobile)

if match == None:
    print(mobile, "不是有效的中国移动号码")
else:
    print(mobile, "是有效的中国移动号码")
```

:::

## 验证是否出现危险字符

::: details 代码

```python
import re

pattern = r'(黑客)|(抓包)|(监听)|(Trojan)'
mystr = "我是一名程序员，我喜欢看黑客方面的图书，想研究一下Trojan"
# 在整个字符串中搜索第一个正则表达式匹配的值
match = re.search(pattern, mystr)

if match == None:
    print(mystr, "@ 安全！")
else:
    print(mystr, "@ 出现了危险词汇！")

mystr01 = "我是一名程序员，我喜欢看计算机网络方面的图书，喜欢开发网站"
match01 = re.search(pattern, mystr01)

if match01 == None:
    print(mystr01, "@ 安全！")
else:
    print(mystr01, "@ 出现了危险词汇！")
```

:::

## 输出象棋口诀并加上正确的标点符合输出

马走日，
象走田，
车走直路炮翻山，
士走斜线护将边，
小卒一去不回返。

::: details 代码

```python
import re

print("象棋口诀：")

pattern = r'(\w{3}，|\w{7}，|\w{7}。)'
mystrs = "马走日，象走田，车走直路炮翻山，士走斜线护将边，小卒一去不回返。"
# 在整个字符串中搜索所有符合正则表达式的字符串，并以列表的形式返回
match = re.findall(pattern, mystrs)

for mystr in match:
    print(mystr)
```

:::

## 判断车牌归属地

::: details 代码

```python
import re

while True:
    print("输入 0 退出程序！")
    pattern = r'(津|沪|京)'
    mystr = input("请输入您的车牌号：")

    if mystr == "0":
        print("退出程序！")
        break

    # 从字符串开始位置匹配符合正则表达式的字符串
    match = re.match(pattern, mystr)

    if match[0] == "津":
        print("您的这张车牌的归属地为：天津")
    elif match[0] == "沪":
        print("您的这张车牌的归属地为：上海")
    elif match[0] == "京":
        print("您的这张车牌的归属地为：北京")
    else:
        print("请输入正确的车牌号！")
```

:::

## 模拟微信抢红包

::: details 代码

```python
from decimal import *
import random
import re

print(('=' * 20), "微信抢红包", ('=' * 20))

moneys = float(input("请输入要装入红包的总金额（元）："))
nums = int(input("请输入要分成的红包个数（个）："))

# 创建空列表，用于将生成的随机数进行保存
money_list = []

for num in range(nums):
    if num == nums - 1:
        money = Decimal(moneys).quantize(Decimal('0.00'))
        money_list.append(float(money))
        # print(f"第 {num + 1} 个红包: {money} 元")
        break
    else:
        # 随机生成一个浮点数，并保留两位小数
        money = Decimal(random.uniform(0, moneys)).quantize(Decimal('0.00'))
        money_list.append(float(money))
        moneys = moneys - float(money)
        # print(f"第 {num + 1} 个红包: {money} 元")

pattern = r'\d{1,2}\.\d{1,2}'
match = re.findall(pattern, str(money_list))

for (index, value) in enumerate(match):
    index += 1
    print(f"第 {index} 个红包: {value} 元")
```

:::

## 显示实时天气预报

用 `format()` 方法格式化输出实时天气预报。

::: details 代码

```python
print("{}\t天气预报：{}\t\t{}\t\t{}".format("2022年11月7号", "晴", '4~24℃', "微风转西风 3~4 级"))
print("{}\t\t天气预报：{}\t\t{}\t\t\t{}".format("08:00", "晴", '9℃', "微风"))
print("{}\t\t天气预报：{}\t\t{}\t\t{}".format("12:00", "晴", '23℃', "微风"))
print("{}\t\t天气预报：{}\t\t{}\t\t{}".format("16:00", "晴", '18℃', "微风"))
print("{}\t\t天气预报：{}\t\t{}\t\t{}".format("18:00", "晴", '15℃', "微风"))
print("{}\t\t天气预报：{}\t\t{}\t\t{}".format("21:00", "晴", '10℃', "西风 3~4 级"))
print("{}\t\t天气预报：{}\t\t{}\t\t\t{}".format("23:00", "晴", '4℃', "西风 3~4 级"))
```

:::

## 输出励志每日一贴

::: details 代码

```python
# 定义函数
def funcion_tips():
    """
    功能：每天输出一条励志文字
    :return:
    """

    import datetime

    mot = [
        "今天星期一：\n坚持下去不是因为我很坚强，而是因为我别无选择！",
        "今天星期二：\n含泪播种的人一定能笑着收获！",
        "今天星期三：\n做对的事情比把事情做对重要！",
        "今天星期四：\n命运给予我们的不是失望之酒，而是机会之杯！",
        "今天星期五：\n不要等到明天，明天太遥远，今天就行动！",
        "今天星期六：\n求知若饥，虚心若愚！",
        "今天星期日：\n成功将属于那些从不说 ”不可能“ 的人！"
    ]
    day = datetime.datetime.now().weekday()
    print(mot[day])


# 调用函数
funcion_tips()
```

:::

## 模拟结账功能——计算实付金额

::: details 代码

```python
# 定义函数
def fun_checkout(money):
    """
    功能：计算商品合计金额并进行折扣处理
    :param money: 保存商品金额的列表
    :return: 返回商品的合计金额和折扣后的金额
    """

    money_old = sum(money)
    money_new = money_old

    if 500 <= money_old <= 1000:
        money_new = '{:.2f}'.format(money_old * 0.9)
    elif 1000 <= money_old <= 2000:
        money_new = '{:.2f}'.format(money_old * 0.8)
    elif 2000 <= money_old <= 3000:
        money_new = '{:.2f}'.format(money_old * 0.7)
    elif 3000 >= money_old:
        money_new = '{:.2f}'.format(money_old * 0.6)
    return money_old, money_new


print(('=' * 20), "开始结算", ('=' * 20))

# 创建空列表
list_money = []

while True:
    inmoney = float(input("请输入商品金额（输入 0 表示输入完成）："))

    if int(inmoney) == 0:
        break
    else:
        # 将输入的值保存到 list_money 列表中
        list_money.append(inmoney)

# 调用函数，将 list_money 列表中的值指定为 fun_checkout 函数的实参
money = fun_checkout(list_money)

print("合计金额：", money[0], "应付金额：", money[1])
```

:::

## lambda 实现对爬取到的秒杀商品信息进行排序

排序规则是：优先按秒杀金额升序排列，有重复的，再按折扣比例降序排列。

::: details 代码

```python
bookinfo = [
    ("不一样的卡梅拉（全套）", 22.50, 120),
    ("零基础学 Android", 65.10, 80),
    ("摆渡人", 23.40, 36),
    ("福尔摩斯探案全集 8 册", 22.50, 128)
]

print("爬取到的商品信息：\n", bookinfo, '\n')

bookinfo.sort(key=lambda x: (x[1], x[1] / x[2]))

print("排序后的商品信息：\n", bookinfo, '\n')
```

:::

## 导演为剧本选主角

输出确定参演剧本主角的名字。

::: details 代码

```python
def roles(role):
    print(f"{role}开始参演这个剧本")


role = input("导演选定的主角是：")
roles(role)
```

:::

## 模拟美团外面商家的套餐

米线店套餐：考神套餐 13 元，单人套餐 9.9 元，情侣套餐 20 元，输出该米线点推出的套餐。

::: details 代码

```python
def packages(package01, money01, package02, money02, package03, money03):
    print(f"米线店套餐如下：1.{package01}\t2.{package02}\t3.{package03}")
    print(f"{package01} {money01} 元")
    print(f"{package02} {money02} 元")
    print(f"{package03} {money03} 元")


packages("考神套餐", '13', "单人套餐", '9.9', "情侣套餐", '20')
```

:::

## 根据生日判断星座

例如：生日为 7 月 1 日，属于巨蟹座。根据输入的出生月份和日期判断所属星座。

::: details 代码

```python
def dates(month, day):
    if (month == 3 and 21 <= day <= 31) or (month == 4 and 1 <= day <= 19):
        print(f"{month} 月 {day} 日星座为：白羊座")
    elif (month == 4 and 20 <= day <= 30) or (month == 5 and 1 <= day <= 20):
        print(f"{month} 月 {day} 日星座为：金牛座")
    elif (month == 5 and 21 <= day <= 31) or (month == 6 and 1 <= day <= 21):
        print(f"{month} 月 {day} 日星座为：双子座")
    elif (month == 6 and 22 <= day <= 30) or (month == 7 and 1 <= day <= 22):
        print(f"{month} 月 {day} 日星座为：巨蟹座")
    elif (month == 7 and 23 <= day <= 31) or (month == 8 and 1 <= day <= 22):
        print(f"{month} 月 {day} 日星座为：狮子座")
    elif (month == 8 and 23 <= day <= 31) or (month == 9 and 1 <= day <= 22):
        print(f"{month} 月 {day} 日星座为：处女座")
    elif (month == 9 and 23 <= day <= 30) or (month == 10 and 1 <= day <= 23):
        print(f"{month} 月 {day} 日星座为：天秤座")
    elif (month == 10 and 24 <= day <= 31) or (month == 11 and 1 <= day <= 22):
        print(f"{month} 月 {day} 日星座为：天蝎座")
    elif (month == 11 and 23 <= day <= 30) or (month == 12 and 1 <= day <= 21):
        print(f"{month} 月 {day} 日星座为：射手座")
    elif (month == 12 and 22 <= day <= 31) or (month == 1 and 1 <= day <= 19):
        print(f"{month} 月 {day} 日星座为：摩羯座")
    elif (month == 1 and 20 <= day <= 31) or (month == 2 and 1 <= day <= 18):
        print(f"{month} 月 {day} 日星座为：水瓶座")
    elif (month == 2 and 19 <= day <= 29) or (month == 3 and 1 <= day <= 20):
        print(f"{month} 月 {day} 日星座为：双鱼座")
    else:
        print("请输入正确的月份和日期（1~31）：")


month = int(input("请输入月份："))
day = int(input("请输入日期："))
dates(month, day)

# 或者

m = ('摩羯座', '水瓶座', '双鱼座', '白羊座', '金牛座', '双子座',
     '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座')
d = (20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22)


def xingzuo(month, day):
    if day < d[month - 1]:
        return m[month - 1]
    else:
        return m[month]


M = int(input("请输入月份："))
D = int(input("请输入日期："))
print(f"{M} 月 {D} 日星座为：{xingzuo(M, D)}")
```

:::

## 将美元转换为人民币

按 1 美元等于 6.28 人民币计算。

::: details 代码

```python
def moneys(dollar):
    rmb = dollar * 6.28
    return "转换后人名币金额是：￥{:,.2f} 元".format(rmb)


dollar = float(input("请输入要转换的美元金额：￥"))
print(moneys(dollar))
```

:::

## 修改手机默认语言

编写手机类，采用无参数构造方法时，表示使用默认语言设计，利用有参数构造方法时，修改手机默认语言。

::: details 代码

```python
class Phone:
    def __init__(self, language="英文"):
        if language == "英文":
            print("智能手机的默认语言为：" + language)
        else:
            print("将智能手机的默认语言设置为：" + language)


Phone()
Phone('中文')
```

:::

## 给信用卡设置默认密码

创建信用卡类，并且为该类创建一个构造方法，该构造方法有三个参数，分别是：self、卡号和密码。密码设置一个默认值：123456，如果不指定密码采用默认密码，否则要重置密码。

::: details 代码

```python
class CreditCard:
    def __init__(self, creditnum, passwd=123456):
        if passwd == 123456:
            print(f"信用卡 {creditnum} 的默认密码为 {passwd}")
        else:
            print(f"重置信用卡 {creditnum} 的密码为 {passwd}")


CreditCard(1234657986541563)
CreditCard(1234657986541563, 654321)
```

:::

## 打印每月销售明细

输出进销存管理系统中的每月销售明细，运行程序，输入要查询的月份，如果输入的月份存在销售明细，则显示本月商品销售明细，如果输入的月份不存在或不是数字，则提示 “该月没有销售数据或输入的月份有误”。

::: details 代码

```python
class months:
    def __init__(self, month):
        if month == 1:
            print(f"{month} 月份的商品销售明细如下：")
            print("商品编号：T0001\t商品名称：笔记本电脑")
            print("商品编号：T0002\t商品名称：华为荣耀6X")
            print("商品编号：T0003\t商品名称：iPad")
            print("商品编号：T0004\t商品名称：华为荣耀V9")
            print("商品编号：T0005\t商品名称：MacBock")
        else:
            print("该月没有销售数据或输入的月份有误！")


while True:
    print(('-' * 20), "销售明细", ('-' * 20))
    print("退出系统请输入 0！")

    month = int(input("请输入要查询的月份（比如：1、2、3 等）："))

    if month == 0:
        print("退出系统！")
        break

    months(month)


# 或者

class Sales:
    def __init__(self):
        self.__self_date = {'2': [('T0001', "笔记本电脑"),
                                  ('T0002', "华为荣耀6X"),
                                  ('T0003', "iPad"),
                                  ('T0004', "华为荣耀V9"),
                                  ('T0005', "MacBock")
                                  ]
                            }

    def months(self, month):
        if month in self.__self_date:
            print(f"{month} 月份的商品销售明细如下：")
            for (key, value) in self.__self_date[month]:
                print(f"商品编号：{key}\t商品名称：{value}")
        else:
            print("该月没有销售数据或输入的月份有误！")


while True:
    print(('-' * 20), "销售明细", ('-' * 20))
    print("退出系统请输入 0！")

    M = Sales()
    month = input("请输入要查询的月份（比如：1、2、3 等）：")

    if month == '0':
        print("退出系统！")
        break

    M.months(month)
```

:::

## 模拟电影院的自动售票机选票页面

模拟电影院自动售票机自动选择电影场次的页面，例如：一部电影在当日的播放时间有很多，可以自动选择合适的场次。

::: details 代码

```python
class AutoTicket:
    def __init__(self, movie, time, seat):
        print()
        print("正在出票...")
        print()
        print(f"电影：{movie}\n播出时间：2018.4.12 {time}\n座位：{seat}")
        print()
        print("出票完成，请别忘记取票")


print(('-' * 20), "欢迎使用自动售票机", ('-' * 20))

print("请选择正在上映的电影：1、《环太平洋：雷霆再起》 2、《头号玩家》 3、《红海行动》")
movie = input("已选电影：")
print("请选择电影播放场次：1、9:30 2、10:40 3、12:00")
time = input("电影场次：")
print("请选择座位剩余座位：10-01、10-02、10-03、10-04")
seat = input("选择座位：")

a = AutoTicket(movie, time, seat)


# 或者

class Film:
    def __init__(self, film_name, timelist, seatlist):
        self.name = film_name
        self.timeList = timelist
        self.seatList = seatlist


class Ticket:
    def __init__(self, film, time, seat):
        self.__film = film
        self.__time = time
        self.__seat = seat

    def __str__(self):
        """
        __str__() 方法与 __init__() 方法一样，首尾双下划线修饰，也是一个默认方法
        作用：用于返回一个字符串，当做这个对象的描述
        如果用 print 打印将会打印生成器对象，所以要用 __str__() 方法将对象的描述符格式化
        :return:
        """
        return "电影：" + self.__film + "\n放映时间：" + self.__time + "\n座位：" + self.__seat


class TicketMachine:
    def __init__(self):
        self.__filmList = [Film("《环太平洋：雷霆再起》", ['9:30', '10:40', '12:00'], ['10-01', '10-02', '10-03', '10-04']),
                           Film("《头号玩家》", ['13:30', '14:40', '16:00'], ['11-01', '11-02', '11-03', '11-04']),
                           Film("《红海行动》", ['19:30', '20:40', '22:00'], ['12-01', '12-02', '12-03', '12-04'])
                           ]
        print("欢迎使用自动售票机...")

    def take_ticket(self):
        print("\n请选择正在上映的电影：", end=' ')
        for (index, item) in enumerate(self.__filmList):
            print(index + 1, item.name, sep='、', end=' ')
        print()

        # inputselect = '3'
        inputselect = input()

        sfilm = self.__filmList[int(inputselect) - 1]
        selectfilm = sfilm.name
        print("已选择电影：" + selectfilm)

        print("\n请选择电影播放场次：", end=' ')
        for (index, item) in enumerate(sfilm.timeList):
            print(index + 1, item, sep='、', end=' ')
        print()

        # inputselect = '3'
        inputselect = input()

        selecttime = sfilm.timeList[int(inputselect) - 1]
        print("已选择电影：" + selecttime)

        print("\n请选择座位：", end=' ')
        for (index, item) in enumerate(sfilm.seatList):
            print(index + 1, item, sep='、', end=' ')
        print()

        # inputselect = '1'
        inputselect = input()

        selectseat = sfilm.seatList[int(inputselect) - 1]
        print("已选择座位:" + selectseat)

        print("\n正在出票...\n")

        tk = Ticket(selectfilm, selecttime, selectseat)

        print(tk)
        print("\n出票完成，请别忘记取票")


tm = TicketMachine()
tm.take_ticket()
```

:::

## 生成由数字、字母组成的 4 为验证码

::: details 代码

```python
import random

if __name__ == '__main__':
    # 保存验证码的变量
    checkcode = ""

    # 循环 4 次
    for i in range(4):
        # 生成 0~3 中的一个数
        index = random.randint(0, 4)
        print(index)

        if index != i and (index + 1) != i:
            # 生成 a~z 中的一个小写字母
            checkcode += chr(random.randint(97, 122))
        elif index + 1 == i:
            # 生成 A~Z 中的一个大写字母
            checkcode += chr(random.randint(65, 90))
        else:
            # 生成 1~9 中的一个数字
            checkcode += str(random.randint(1, 9))

    print("验证码：", checkcode)
```

:::

## 大乐透号码生成器

使用 `Random` 模块，规则：前区在 1~35 的范围内随机产生不重复的 5 个号码，后区在 1~12 的范围内随机产生不重复的 2 个号码。

::: details 代码

```python
import random

print(('=' * 20), "大乐透号码生成器", ('=' * 20))
nums = int(input("请输入要生成的大乐透号码注数："))
# 将前区和后区分别保存到列表中
front = []
back = []

for j in range(nums):
    for i in range(5):
        # 当循环到第五次时，print 打印以制表符结尾
        if i == 4:
            num = random.randint(1, 35)
            # 判断随机数是否在列表中
            while num in front:
                num = random.randint(1, 35)

            # 将随机数添加到列表
            front.append(num)
            print('%02d' % num, end='\t\t')
        else:
            num = random.randint(1, 35)
            while num in front:
                num = random.randint(1, 35)

            front.append(num)
            print('%02d' % num, end=' ')

    # 每循环一次清空前区列表
    front.clear()

    for x in range(2):
        num = random.randint(1, 12)
        while num in back:
            num = random.randint(1, 12)

        back.append(num)
        print('%02d' % num, end=' ')

    back.clear()
    # 每循环一次进行换行
    print()

# 或者

import random


def Lotto():
    # 将前区和后区分别保存到列表中
    front = []
    back = []

    for i in range(5):
        # 当循环到第五次时，print 打印以制表符结尾
        if i == 4:
            num = random.randint(1, 35)
            # 判断随机数是否在列表中
            while num in front:
                num = random.randint(1, 35)

            # 将随机数添加到列表
            front.append(num)
            print('%02d' % num, end='\t\t')
        else:
            num = random.randint(1, 35)
            while num in front:
                num = random.randint(1, 35)

            front.append(num)
            print('%02d' % num, end=' ')

    # 每循环一次清空前区列表
    front.clear()

    for x in range(2):
        num = random.randint(1, 12)
        while num in back:
            num = random.randint(1, 12)

        back.append(num)
        print('%02d' % num, end=' ')

    back.clear()


if __name__ == '__main__':
    print(('-' * 20), "大乐透号码生成器", ('-' * 20))
    nums = int(input("请输入要生成的大乐透号码注数："))

    for j in range(nums):
        Lotto()
        # 每循环一次进行换行
        print()
```

:::

## 模拟春节集五福过程

::: details 代码

```python
import random

print(('=' * 20), "开始集五福啦", ('=' * 20))

agf = 0
fqf = 0
hxf = 0
ysf = 0
jyf = 0
blessings = ("爱国福", "富强福", "和谐福", "友善福", "敬业福")
# 创建一个列表，用于判断是否集齐五福
nums = []

while True:
    key = input("输入 0 退出程序！请按下 <Enter> 键获取五福：")

    if key == '':
        # 从指定序列中获取一个随机元素
        num = random.choice(blessings)

        if num == "爱国福":
            if agf == 0:
                nums.append(agf)
                agf += 1
            else:
                agf += 1
        elif num == "富强福":
            if fqf == 0:
                nums.append(fqf)
                fqf += 1
            else:
                fqf += 1
        elif num == "和谐福":
            if hxf == 0:
                nums.append(hxf)
                hxf += 1
            else:
                hxf += 1
        elif num == "友善福":
            if ysf == 0:
                nums.append(ysf)
                ysf += 1
            else:
                ysf += 1
        else:
            if jyf == 0:
                nums.append(jyf)
                jyf += 1
            else:
                jyf += 1
        print(f"获取到的福：{num}\n当前拥有的福：")
        print(f"{blessings[0]}：{agf}\t{blessings[1]}：{fqf}\t{blessings[2]}：{hxf}\t"
              f"{blessings[3]}：{ysf}\t{blessings[4]}：{jyf}")
    elif key == '0':
        print("退出程序！")
        break
    else:
        print("输入错误！")

    if len(nums) == 5:
        print("恭喜您，成功集齐五福")
        break
    print()

# 或者

import random


def Ji_Fu():
    # 所有福卡列表
    fus = ['爱国福', '富强福', '和谐福', '友善福', '敬业福']
    # 获取列表中的一项组成新的列表
    fu = random.sample(fus, 1)
    # 返回获取到的福卡
    return fu


# 打印当前拥有的所有福卡 方法
def fus(fu):
    print('当前拥有的福：')
    # 循环福卡字典
    for i, j in fu.items():
        # 打印福卡
        print(i, ': ', j, '\t', end='')


# 判断五福是否集齐方法 集齐返回1
def five_blessings(fu):
    # 拥于判断是否集齐的标识 1代表集齐
    type = 1
    # 循环 福卡字典 判断副卡是否集齐
    for i, j in fu.items():
        # 当有副卡是0张的时候不能合成五福
        if j == 0:
            # 不能集成五福的时候返回0
            type = 0
    # 返回 判断是否集齐标识
    return type


print('开始集福啦~~~')
# 五福字典 保存拥有的五福数据
fu = {'爱国福': 0, '富强福': 0, '和谐福': 0, '友善福': 0, '敬业福': 0}
# 判断是否集齐五福
while five_blessings(fu) == 0:
    # 没有集齐五福提示用户
    input('\n按下<Enter>键获取五福')
    # 获取福卡
    Strfu = Ji_Fu()[0]
    # 提示用户获取的的五福卡
    print('获取到：' + Strfu)
    # 在五福字典中 为获取到的福卡加1
    fu[Strfu] += 1
    # 打印拥有的福卡
    fus(fu)
print('\n恭喜您集成五福！！！')
```

:::

## 封装用户的上网行为

对用户的上网时间进行统计，当上网时间过长，给出提升。

::: details 代码

```python
name = "小明"
a = [1.5, 2, 3, 2]

print(name, "上网时间、行为统计：")
print("浏览网页：", a[0], "小时")
print("看视频：", a[1], "小时")
print("玩网络游戏：", a[2], "小时")
print("上网学习：", a[3], "小时")
print("今天上网时间共计", sum(a), "小时，请保护眼睛，合理安排上网时间！")


# 或者

def net_play(time):
    print('浏览网页', str(time) + '小时')
    return time


# 看视频
def Watch_videos(time):
    print('看视频', str(time) + '小时')
    return time


# 网游戏
def Play_game(time):
    print('玩网络游戏', str(time) + '小时')
    return time


# 学习
def Study(time):
    print('上网学习', str(time) + '小时')
    return time


# 计算上网时间，上网时间达到或者多余 8 小时给出提示
def times(time):
    if time >= 8:
        print('今天上网时间共计' + str(time) + '小时，请保护眼睛，合理安排上网时间！')
    return time


# 上网用户
name = '小明'
# 上网总时间
time = 0
print(name, '上网时间、行为统计：')
# 打印用户上网时间行为，返回上网时间
time += net_play(1.5)
time += Watch_videos(2)
time += Play_game(3)
time += Study(2)
# 根据上网时间超出8小时提示用户注意休息

times(time)
```

:::

## 计算个人所得税

::: details 代码

```python
def tax(monthMoney):
    # 扣除标准
    # 最低工资额 3500 往下不扣税
    ds = 3500
    # 三险一金上线
    threeInsurancesUp = 7662
    # 养老保险
    yangLao = monthMoney * 0.08
    # 医疗保险
    yiLiao = monthMoney * 0.02
    # 失业保险
    shiYe = monthMoney * 0.005
    # 住房公积金
    homeMoney = monthMoney * 0.12
    # 计算应扣除 的 三险一金
    threeInsurances = yangLao + yiLiao + shiYe + homeMoney
    # 判断是否超出三险一金 上线
    if threeInsurances > threeInsurancesUp:
        # 超出等于默认值
        threeInsurances = threeInsurancesUp
    # 应纳税所得额= 扣除三险一金  - 扣除最低月收入 的收入部分
    payable = monthMoney - threeInsurances - ds
    # 初始化应交税
    single = 0
    # 根据收入判断 不同级别收入 扣除不同的税
    if payable < 1500:
        single = payable * 0.03 - 0
    elif 1500 <= payable < 4500:
        single = payable * 0.1 - 105
    elif 4500 <= payable < 9000:
        single = payable * 0.2 - 555
    elif 9000 <= payable < 35000:
        single = payable * 0.25 - 1005
    elif 35000 <= payable < 55000:
        single = payable * 0.3 - 2002
    elif 55000 <= payable < 80000:
        single = payable * 0.35 - 5505
    elif payable >= 80000:
        single = payable * 0.45 - 13505
    # 如果 计算的single等于负数 返回0 证明收入不满3500
    if single < 0:
        single = 0
    # 返回应交的个税
    return single


monthMoney = int(input("请输入月收入："))
# 通过税收计算模块计算税额 并打印
print("应纳个人所得税税额为%.2f" % tax(monthMoney))
```

:::

## 根据当前时间创建文件

在指定目录中，批量创建文件，文件名为 `%Y%m%d%H%M%S` 格式的当前时间（精确到秒）。

例如：创建文件的时间为 2022 年 11 月 17 日 11 点 5 分 10 秒，则该文件的文件名为 `20221171510.txt`。为了防止出现重名的文件，在每创建一个文件后，让线程休息一秒。

::: details 代码

```python
import os
import time


def createfile(nums):
    """
    功能：根据当前时间创建文件
    :return:
    """
    path = "E:\\testdir\\"
    if os.path.exists(path):
        print("指定的目录存在")
    else:
        os.mkdir(path)
        print("指定的目录不存在，成功创建该目录")

    for num in range(nums):
        longtime = time.strftime('%Y%m%d%H%M%S', time.localtime())
        filename = path + longtime + ".txt"
        time.sleep(1)

        with open(filename, 'w') as file:
            print(f"file {num + 1}：{file.name}")
    print("文件生成成功！")


if __name__ == '__main__':
    nums = int(input("请输入需要生成的文件数："))
    createfile(nums)
```

:::

## 批量添加文件夹

在指定的目录中，批量创建指定个数的文件夹。

::: details 代码

```python
import os


def createdir(nums):
    path = "E:\\testdir\\"
    if os.path.exists(path):
        print("指定的目录存在")
    else:
        os.mkdir(path)
        print("指定的目录不存在，成功创建该目录")

    for num in range(nums):
        dirname = path + "mydir" + str(num + 1)
        if os.path.exists(dirname):
            print(f"文件夹 {num + 1} 存在，不进行创建")
        else:
            os.mkdir(dirname)
            print(f"文件夹 {num + 1} 创建成功！")


if __name__ == '__main__':
    nums = int(input("请输入需要生成的目录数："))
    createdir(nums)
```

:::

## 基础综合项目【名片管理系统】

- 程序启动，显示名片管理系统欢迎界面，并显示功能菜单
- 用户用数字选择不同的功能
- 根据功能选择，执行不同的功能
- 用户名片需要记录用户的 姓名、电话、QQ、邮件
- 如果查询到指定的名片，用户可以选择 修改 或者 删除 名片

::: details

```python
mylist = []


def func_menu():
    """
    功能：显示功能菜单
    :return:
    """
    print(('*' * 50), "\n欢迎使用【名片管理系统】V1.0\n\n"
                      "1. 新建名片\n2. 显示全部\n3. 查询名片\n\n"
                      "0. 退出系统\n", ('*' * 50))


def create():
    """
    功能：新建名片
    :return:
    """
    name = input("请输入名字：")
    number = input("请输入电话：")
    qq = input("请输入 QQ 号码：")
    email = input("请输入邮件：")
    mydict = {
        'name': name,
        'phone': number,
        'qq': qq,
        'email': email
    }
    mylist.append(mydict)

    print("成功添加 %s 的名片" % name)


def show_all():
    """
    功能：显示已保存的名片
    :return:
    """
    print("姓名\t\t\t\t电话\t\t\t\tQQ\t\t\t\t邮件")

    for i in mylist:
        print(i['name'], '\t\t', i['phone'], '\t\t', i['qq'], '\t\t', i['email'])


def select():
    """
    功能：查询指定名片，并选择是否要修改
    :return:
    """
    name = input("请输入要查询的名字：")

    for mydict in mylist:
        if mydict['name'] == name:
            print("姓名\t\t\t\t电话\t\t\t\tQQ\t\t\t\t邮件")
            print(mydict['name'], '\t\t', mydict['phone'], '\t\t', mydict['qq'], '\t\t', mydict['email'])

            num = input("请选择对此用户的操作：\n1. 删除名片\n2. 修改名片\n0. 直接退出\n")
            if num == '1':
                mylist.remove(mydict)
                print("已删除此用户")
            elif num == '2':
                while True:
                    modify_option = input("请输入要修改的选项：\n1. 修改姓名\n2. 修改电话\n3. 修改 QQ\n4. 修改邮件\n0. 修改完毕退出\n")
                    if modify_option == '1':
                        modify_name = input("请输入要修改后的姓名：")
                        mydict['name'] = modify_name
                    elif modify_option == '2':
                        modify_phone = input("请输入要修改后的电话：")
                        mydict['phone'] = modify_phone
                    elif modify_option == '3':
                        modify_qq = input("请输入要修改后的 QQ：")
                        mydict['qq'] = modify_qq
                    elif modify_option == '4':
                        modify_email = input("请输入要修改后的邮件：")
                        mydict['email'] = modify_email
                    elif modify_option == '0':
                        print("修改完毕退出！")
                        break
                    else:
                        print("输入错误！请输入正确数字")
            elif num == '0':
                break
            break
    else:
        print("抱歉，您要查询的用户不存在！")


while True:
    func_menu()

    func = input("请选择操作功能：")
    if func == '1':
        create()
    elif func == '2':
        show_all()
    elif func == '3':
        select()
    elif func == '0':
        print("退出系统！")
        break
    else:
        print("输入错误！请输入正确数字")

# 或者对输入的列表格式化输出

mylist = []


def aligns(string, length=20):
    """
    功能：自动制表自动对齐
    :param string: 指定字符串
    :param length: 限制字符串之间间隔长度
    :return:
    """
    difference = length - len(string)  # 计算限定长度为 20 时需要补齐多少个空格
    if difference == 0:  # 若差值为 0 则不需要补
        return string
    elif difference < 0:
        print('错误：限定的对齐长度小于字符串长度!')
        return None
    new_string = ''
    space = '　'
    for i in string:
        codes = ord(i)  # 将字符转为 ASCII 或 UNICODE 编码
        if codes <= 126:  # 若是半角字符
            new_string = new_string + chr(codes + 65248)  # 则转为全角
        else:
            new_string = new_string + i  # 若是全角，则不转换
    return new_string + space * difference  # 返回补齐空格后的字符串


def tabulator(inputlist, column, length=20):
    """
    功能：自动制表自动对齐
    :param inputlist: 指定列表
    :param column: 分成多少纵列
    :param length: 每个元素占多少个字符位置
    :return:
    """
    p = ''
    num = 0
    sum = len(inputlist)
    for i in inputlist:
        p = p + aligns(i, length)
        num = num + 1
        sum = sum - 1
        if num >= column:
            print(p)
            p = ''
            num = 0
        elif sum <= 0:
            print(p)


def func_menu():
    """
    功能：显示功能菜单
    :return:
    """
    print(('*' * 50), "\n欢迎使用【名片管理系统】V1.0\n\n"
                      "1. 新建名片\n2. 显示全部\n3. 查询名片\n\n"
                      "0. 退出系统\n", ('*' * 50))


def create():
    """
    功能：新建名片
    :return:
    """
    name = input("请输入名字：")
    number = input("请输入电话：")
    qq = input("请输入 QQ 号码：")
    email = input("请输入邮件：")
    mydict = {
        'name': name,
        'phone': number,
        'qq': qq,
        'email': email
    }
    mylist.append(mydict)

    print("成功添加 %s 的名片" % name)


def show_all():
    """
    功能：显示已保存的名片
    :return:
    """
    tabulator(['姓名', '电话', 'QQ', '邮件'], 4, 20)

    for i in mylist:
        name = [i['name'], i['phone'], i['qq'], i['email']]
        tabulator(name, 4, 20)


def select():
    """
    功能：查询指定名片，并选择是否要修改
    :return:
    """
    name = input("请输入要查询的名字：")

    for mydict in mylist:
        if mydict['name'] == name:
            tabulator(['姓名', '电话', 'QQ', '邮件'], 4, 20)
            tabulator([mydict['name'], mydict['phone'], mydict['qq'], mydict['email']], 4, 20)

            num = input("请选择对此用户的操作：\n1. 删除名片\n2. 修改名片\n0. 直接退出\n")
            if num == '1':
                mylist.remove(mydict)
                print("已删除此用户")
            elif num == '2':
                while True:
                    modify_option = input("请输入要修改的选项：\n1. 修改姓名\n2. 修改电话\n3. 修改 QQ\n4. 修改邮件\n0. 修改完毕退出\n")
                    if modify_option == '1':
                        modify_name = input("请输入要修改后的姓名：")
                        mydict['name'] = modify_name
                    elif modify_option == '2':
                        modify_phone = input("请输入要修改后的电话：")
                        mydict['phone'] = modify_phone
                    elif modify_option == '3':
                        modify_qq = input("请输入要修改后的 QQ：")
                        mydict['qq'] = modify_qq
                    elif modify_option == '4':
                        modify_email = input("请输入要修改后的邮件：")
                        mydict['email'] = modify_email
                    elif modify_option == '0':
                        print("修改完毕退出！")
                        break
                    else:
                        print("输入错误！请输入正确数字")
            elif num == '0':
                break
            break
    else:
        print("抱歉，您要查询的用户不存在！")


while True:
    func_menu()

    func = input("请选择操作功能：")
    if func == '1':
        create()
    elif func == '2':
        show_all()
    elif func == '3':
        select()
    elif func == '0':
        print("退出系统！")
        break
    else:
        print("输入错误！请输入正确数字")
```

:::

## 快递地址信息按省分拣

现有一堆快递地址信息，需对其进行按省分拣，以方便后续投递。

::: details

```python
import re

infos = [
    ['王*龙', '北京市海淀区苏州街大恒科技大厦南座4层'],
    ['庞*飞', '北京市昌平区汇德商厦四楼403'],
    ['顾*锐', '江苏省扬州市三垛镇工业集中区扬州市立华畜禽有限公司'],
    ['王*飞', '上海市徐汇区上海市徐汇区H88越虹广场B座5E'],
    ['华*升', '北京市海淀区杰睿大厦'],
    ['朱*锴', '上海市浦东新区川沙新镇华川家园33号楼503'],
    ['陈*盼', '浙江省杭州市闲林街道，西溪华东园，十幢一单元401。'],
    ['司*鹏', '河南省鹤壁市淇滨大道310号  鹤壁京立医院'],
    ['聂*睿', '河北省石家庄市中山路勒泰中心写字楼b座11层'],
    ['张*', '辽宁省本溪市明兴丽城九号楼四单元'],
    ['冉*晗', '河北省石家庄市体育南大街385号'],
    ['高*杰', '北京市朝阳区广渠路42号院3号楼，408'],
    ['李*国', '安徽省合肥市新站区淮合花园'],
    ['常*源', '江苏省南京市白下路242号，南京市红十字医院，放射科'],
    ['张*玉', '河北省沧州市新居然家居广场'],
    ['王*川', '上海市奉贤区南桥镇 贝港七区'],
    ['冀*庆', '河北省保定市河北大学坤兴园生活区'],
    ['胡*晨', '浙江省宁波市浙江省宁波市江东区中山首府A座2004室'],
    ['尹*婷', '湖北省武汉市武汉大学信息学部'],
    ['李*东', '辽宁省大连市大关一街3号3-3-1'],
    ['张*', '天津市河西区隆昌路94号（天津科技馆）'],
    ['刘*', '湖北省黄冈市城关镇'],
    ['阿*亚', '内蒙古呼和浩特市包头东接民望家园1区3号楼2单元1501'],
    ['孙*云', '山东省济南市山东省济南市历下区祥泰汇东国际，一号楼3005室'],
    ['曹*亮', '黑龙江省大庆市服务外包产业园D1'],
    ['侯*琦', '上海市长宁区金钟路凌空soho16号楼3楼'],
    ['郭*峰', '河南省商丘市高新技术开发区恒宇食品厂'],
    ['赵*生', '河北省唐山市朝阳道与学院路路口融通大厦2408室'],
    ['张*', '陕西省咸阳市文汇东路6号西藏民族大学'],
    ['刘*民', '北京市大兴区南海家园四里7号楼1单元902'],
    ['郭*兰', '湖北省武汉市湖北省'],
    ['张*强', '河北省张家口市经开区钻石南路11号'],
    ['鞠*龙', '山东省潍坊市玉清街江山帝景B区12号楼一单元14楼'],
    ['李*', '北京市海淀区西二旗智学苑5号楼超市'],
    ['许*康', '北京市西城区西单北大街甲133号'],
    ['叶*生', '江苏省扬州市扬子江中路756号'],
    ['赵*兴', '北京市海淀区西二旗上地信息路1号金远见大楼华纬讯301'],
    ['徐*革', '北京市海淀区闵庄路3号102栋二层206'],
    ['徐*', '安徽省淮南市金荷小区(金格商场旁)'],
    ['雷*', '北京市朝阳区望京街道望京sohoT1C座1201'],
    ['庄*', '浙江省杭州市恒生电子大厦'],
    ['蔡*恩', '湖北省武汉市仁和路沙湖港湾B区1103'],
    ['陈*', '江苏省苏州市巴城镇湖滨北路193号牛吃蟹庄'],
    ['黄*', '北京市朝阳区霄云路26号鹏润大厦A座33层'],
    ['魏*飞', '河北省石家庄市新石北路与红旗大街交口开元大厦502室'],
    ['张*', '山东省济南市兴港路三庆城市主人'],
    ['段*琪', '山西省临汾市福利路尧乡小区'],
    ['刘*', '北京市昌平区龙禧三街骊龙园601'],
    ['王*生', '上海市杨浦区邯郸路复旦大学遗传学楼319室'],
    ['王*君', '江苏省扬州市叶挺路318号建行营业部'],
    ['王*义', '北京市东城区环球贸易中心D座'],
    ['李*', '陕西省汉中市同沟寺镇晨光村二组'],
    ['裴*宇', '吉林省四平市岭西新耀豪庭7栋'],
    ['丁*', '山东省烟台市大季家镇芦洋村'],
    ['刘*铎', '黑龙江省佳木斯市火电小区桥头浴池附近惠惠干洗店'],
    ['樊*', '浙江省宁波市文苑风荷201-301'],
    ['陈*瑞', '安徽省宣城市安徽省宣城市宣州区薰化路301合肥工业大学宣城校区'],
    ['崔*峰', '浙江省台州市福溪街道始丰西路43号501室'],
    ['徐*', '湖北省武汉市三金雄楚天地1号楼1210'],
    ['王*', '浙江省宁波市浙江工商职业技术学院信息中心'],
    ['闫*', '上海市浦东新区蓝天路368弄1号301室'],
    ['于*泉', '吉林省四平市金星书苑小区8号楼5单元102室'],
    ['刘*萌', '河北省秦皇岛市抚宁镇交通局家属院3-2-201'],
    ['石*', '安徽省宣城市薰化路301'],
    ['王*雯', '甘肃省兰州市天水南路222号兰州大学'],
    ['王*朝', '河南省郑州市嵩山南路政通路升龙城六号院'],
    ['金*晶', '吉林省延边州延吉市新兴街民安委11'],
    ['蒋*彬', '辽宁省本溪市新城北岸，恒大绿洲'],
    ['牛*鑫', '黑龙江省鸡西市南山路康光二号楼中雅发廊'],
    ['陈*宏', '山西省太原市太原理工大学'],
    ['刘*', '山西省运城市卿头镇'],
    ['陈*杰', '浙江省宁波市高新区研发园A5幢7楼多维时空科技有限公司'],
    ['郝**', '山东省德州市焦庙镇'],
    ['焦*', '山西省长治市太行西街金威超市太西店金威快购办公室'],
    ['李*旗', '北京市昌平区沙河镇汇德商厦4楼403老男孩教育'],
    ['通*大都', '北京市丰台区万泉寺东路9号院1栋1单1704'],
    ['孙*川', '浙江省金华市佛堂镇雅西村双溪口便民超市'],
    ['宋*', '安徽省合肥市上派镇滨河家园9栋2102'],
    ['李*', '陕西省安康市汉滨区新城街道南环东路口桃园小区大门口'],
    ['李*连', '北京市昌平区立汤路北七家威尼斯花园2区2-3'],
    ['籍*旭', '北京市房山区良乡鸿顺园西区20号楼3单元601'],
    ['韩*嵩', '北京市昌平区立汤路威尼斯花园2区2-3'],
    ['曹*', '北京市朝阳区东三环北路28号博瑞大厦B座'],
    ['贺*', '上海市徐汇区古美路1515号19号楼1101室'],
    ['关*轩', '山西省长治市石哲镇'],
    ['罗*', '河北省廊坊市书香苑小区四号楼'],
    ['段**', '北京市朝阳区酒仙桥东路M5世纪互联'],
    ['杜*伟', '北京市昌平区汇德商厦老男孩教育'],
    ['王*', '北京市昌平区汇德商厦四楼'],
    ['赵*波', '上海市闵行区上海市闵行区莘庄镇庙泾路水清三村52号32弄402室'],
    ['许*', '北京市海淀区西北旺镇中海枫涟山庄北门对面中心'],
    ['李*成', '北京市昌平区沙河镇于辛庄村天利合家园'],
    ['刘*', '江苏省南京市兴智路6号兴智科技园A栋7层'],
    ['张*涛', '安徽省合肥市安徽省合肥市庐阳区寿春路156号古井百花大厦大厦A座2603'],
    ['高*', '上海市虹口区欧阳路351弄10号楼104室'],
    ['谷*成', '浙江省杭州市城厢街道 下湘湖路1号'],
    ['王*玉', '上海市嘉定区南翔镇'],
    ['刘*海', '北京市海淀区玉渊潭南路3号水科院万方城科技楼'],
    ['杨*娟', '安徽省合肥市清源路中铁国际城和畅园'],
    ['谢*桥', '北京市海淀区丰秀中路3号院9号楼北京数码大方科技股份有限公司'],
    ['张*', '陕西省咸阳市北上召秦楚汽车城别克雪佛兰4s店'],
    ['邵*龙', '北京市海淀区西北旺镇大牛坊社区四期4号楼1单元301'],
    ['耿*涛', '北京市朝阳区三间房东柳巷甲一号意菲克大厦A座'],
    ['孙*周', '北京市东城区东花市街道便宜坊写字楼10层，恒信通大厦。就在崇文门地铁站口旁边'],
    ['于*涵', '山东省济南市舜耕路舜耕山庄宿舍'],
    ['陈*', '上海市普陀区近铁城市广场北座15楼'],
    ['马*', '北京市昌平区沙河镇松兰堡村西口兴业家园6号楼'],
    ['李*宇', '江苏省苏州市工业园区苏雅路158号华盛广场3楼东北证券304室'],
    ['王*杰', '河北省邯郸市后仓街39号'],
    ['刘*明', '河北省唐山市卫国北路305张家口银行'],
    ['王*凡', '天津市南开区卫津路92号天津大学鹏翔公寓'],
    ['郭*军', '上海市浦东新区郭守敬路498号浦东软件园16号3楼'],
    ['宋*东', '北京市丰台区万寿路南口288号华信大厦'],
    ['江*', '安徽省阜阳市临海尚城B区2单元，19号楼'],
    ['吴*', '河南省郑州市经三路与东风路交汇处金城国际广场6#东单元2403'],
    ['祁*雄', '湖北省武汉市洪山区白沙洲大道武汉科技大学北苑'],
    ['吕*', '上海市嘉定区上海市嘉定区嘉罗公路2019号'],
    ['黄*', '湖北省武汉市国家光电实验室'],
    ['常*旗', '山东省潍坊市林海生态博览园'],
    ['陈*', '上海市虹口区吴淞路218号宝矿大厦2501A'],
    ['郑*琳', '北京市丰台区西马金润家园2区10号楼11单元11-2-1'],
    ['姚*峰', '江苏省无锡市江苏省无锡市滨湖区龙山龚巷213#'],
    ['徐*', '浙江省杭州市余杭塘路515矩阵国际中心2号楼705'],
    ['沈*', '上海市长宁区金钟路968号凌空SOHO11号楼506室'],
    ['王*', '上海市浦东新区川沙路1666弄79号803'],
    ['徐*', '山东省日照市安东卫街道汾水村'],
    ['路*领', '北京市丰台区四方景园一区3号楼1006室'],
    ['张*巍', '河南省开封市西环路北段青年城8号楼3单元302'],
    ['王*俊', '江苏省盐城市新都路29号紫金大厦19楼'],
    ['姜*波', '北京市朝阳区北京市朝阳区阜通东大街1号望京soho塔三B座17层1707'],
    ['曹*翎', '江苏省苏州市科教新城太和丽都31-1604'],
    ['齐*', '江苏省南京市天元东路228号莱茵量子国际'],
    ['高*', '山西省太原市经济技术开发区龙盛街2号国药控股'],
    ['刘*', '北京市海淀区中关村丹棱街中国电子大厦B座1608'],
    ['陈*山', '安徽省六安市南港镇'],
    ['赵*', '黑龙江省哈尔滨市锦山路5号，黑龙江省地质科学研究所'],
    ['伍*', '安徽省芜湖市泉塘镇'],
    ['白*潮', '上海市浦东新区康桥镇环桥路2585弄文怡苑一期27号楼301'],
    ['黄*曦', '北京市朝阳区西坝河南路3号2层201室 同创双子信息技术股份有限公司'],
    ['牟*强', '山东省日照市山东东路619号 广电网络公司'],
    ['李*运', '上海市松江区沪亭南路208弄109号801室'],
    ['杨*', '北京市朝阳区安苑路20号世纪兴源大厦304'],
    ['宋*伟', '河北省石家庄市高头乡西高村'],
    ['任*鹏', '陕西省西安市锦业一路29号 龙旗科技园 6层 西安和利时系统工程有限公司'],
    ['孙*洲', '北京市东城区东花市街道便宜坊写字楼10层，恒信通公司。就在崇文门地铁站旁边'],
    ['张*义', '上海市浦东新区三舒路181弄2号904'],
    ['门*意', '黑龙江省哈尔滨市文昌街238号联通系统集成有限公司'],
    ['陈*维', '上海市虹口区欧阳路196号26栋2楼'],
    ['周*涛', '浙江省嘉兴市施家北路陈家浜1号'],
    ['吴*', '江苏省苏州市工业园区星湖街328号11栋'],
    ['苏*', '河南省郑州市登封路晨光社区14号院绿田野超市'],
    ['王*', '陕西省西安市雁塔区雁翔路58号西安理工大学曲江校区'],
    ['赵*龙', '河北省廊坊市燕郊经济开发区福成大酒店东福成行政中心三楼信息部'],
    ['范*勇', '江苏省苏州市苏州市吴中区木渎镇胥口镇621号斯莱克精密设备股份有限公司'],
    ['白*', '北京市东城区安定门外大街10号楼415'],
    ['刘*', '北京市昌平区回龙观镇二拨子新村东区7号楼1单元402'],
    ['钱*庭', '江苏省江苏省泰州市姜堰区南苑新村58号'],
    ['王*', '北京市朝阳区北京市朝阳区摩托罗拉大厦'],
    ['杨*', '北京市朝阳区阜荣街10号首开广场5楼'],
    ['姬*飞', '北京市昌平区宏福创业园15号创昱'],
    ['熊*威', '浙江省杭州市万塘路252号计量大厦10楼'],
    ['薛*', '山东省济南市高新区新泺大街888号福瑞达'],
    ['贾*凯', '上海市浦东新区鹤永路751弄汇贤雅苑'],
    ['孟*震', '上海市宝山区淞南镇祥腾生活广场，8栋816室'],
    ['刘*', '河南省洛阳市城关镇人民路21号'],
    ['杨*凯', '湖北省武汉市中国地质大学北区1栋'],
    ['王*', '上海市浦东新区环桥路1137弄秀怡苑31号楼302'],
    ['夏*', '北京市朝阳区垂杨柳东里11号楼3单元402'],
    ['张*宇', '北京市海淀区中关村南大街6号中电信息大厦1207'],
    ['蔡*', '陕西省西安市凤城八路天朗御湖一号楼二单元（西门）'],
    ['高*', '新疆乌鲁木齐市民主路99号建行大厦12楼审计室'],
    ['孙*园', '陕西省西安市丈八沟街道科技五路8号数字大厦'],
    ['王*亚', '北京市朝阳区华盛乐章b座1708'],
    ['李*博', '山东省淄博市索镇花园小区5#2单元202室'],
    ['方*', '北京市海淀区北洼西里33号清华同方研究院'],
    ['杨*东', '上海市闵行区梅陇镇高兴路高兴花园一街坊14号501'],
    ['袁*', '陕西省西安市高新四路南窑头东区22排11号'],
    ['王*', '天津市河北区建国道地铁站B口旁青创中心'],
    ['程*磊', '北京市西城区北三环中路27号商房大厦5楼'],
    ['陈*琦', '安徽省合肥市徽州大道与九华山路交叉口信旺九华国际2419'],
    ['刘*杰', '北京市大兴区亦庄经济开发区地盛北街1号35号楼2栋北京如风达快递有限公司'],
    ['侯*森', '北京市朝阳区北苑路潮驿178'],
    ['胡*辉', '浙江省杭州市瑞立东方花城2-2-503'],
    ['杨*平', '北京市昌平区沙河镇于辛庄村赋腾公寓'],
    ['黄*', '浙江省杭州市衢江路耀江福村3单元602'],
    ['李*', '上海市黄浦区黄浦区北京东路288弄66号甲，后门201室'],
    ['邹*', '安徽省淮北市南坪镇黄沟村邹圩庄'],
    ['刘*', '北京市昌平区沙河镇赋腾公寓E516'],
    ['彭*', '北京市望京SOHOt3  40层'],
    ['张*乾', '河南省周口市八一路人民路交叉口医药局家属楼'],
    ['贺*梦', '北京市通州区永顺镇世纪星城92号楼二单元'],
    ['冯*琴', '北京市海淀区金澳国际写字楼1115  中汇'],
    ['邓*亮', '湖北省武汉市云林街台北一路58号'],
    ['李*沙', '北京市昌平区城南街道北清路珠江摩尔国际大厦五号楼二单元906'],
    ['徐*瑞', '上海市徐汇区古美路1595号宝石园27号楼2楼D区'],
    ['梁*', '陕西省西安市电子二路18号(西安石油大学)'],
    ['徐*', '浙江省衢州市西区广电大楼'],
    ['雷*强', '河南省信阳市汪桥镇街道滨河花园A幢6208'],
    ['张*亮', '天津市河西区郁江道17号陈塘科技328'],
    ['陈*', '上海市浦东新区东方路1217号陆家嘴金融服务广场15楼'],
    ['郭*', '北京市昌平区北七家镇东三旗365号'],
    ['李*扬', '上海市浦东新区北蔡镇北艾路1500弄6号楼203'],
    ['汝*明', '吉林省长春市长春光机所研究生部D栋'],
    ['朱*懿', '上海市静安区陕西北路66号科恩国际中心1027室'],
    ['刘*', '上海市浦东新区五莲路 锦河苑'],
    ['任*荣', '陕西省西安市软件新城软件公寓'],
    ['王*', '上海市闵行区莲花路2080弄50号C幢3楼'],
    ['崔*斌', '北京市房山区阎村镇焦庄村四里'],
    ['王*强', '浙江省杭州市物联网街451号芯图大厦17楼'],
    ['姬*玲', '黑龙江省哈尔滨市长江路462号悦山国际c座1单元2501'],
    ['T*m', '上海市浦东新区浦东大道3040弄丽江锦庭1号楼'],
    ['李*宇', '黑龙江省绥化市十道街升平小区15号楼1单元102室'],
    ['董*', '河南省郑州市崇高路与嵩山路交叉口北黄河商务酒店'],
    ['杨*辉', '江苏省镇江市江苏大学F 区'],
    ['韩*鉴', '北京市门头沟区滨河路葡东小区七号楼4层D门'],
    ['罗*若', '陕西省西安市龙首北路宫园一号5号楼4单元'],
    ['王*', '北京市海淀区上地东路盈创动力大厦e座801c源清慧虹信息科技'],
    ['马*', '湖北省武汉市庙山中路10号名湖豪庭7栋1403'],
    ['常*峰', '山西省太原市迎新街'],
    ['侯*', '浙江省杭州市江陵路1541号'],
    ['许*娟', '上海市宝山区殷高西路高境二村177号502'],
    ['徐*飞', '湖北省武汉市潘塘街喻大村梅家大湾'],
    ['崔*腾', '辽宁省沈阳市虹桥路15号富雅豪临'],
    ['张*俊', '新疆巴音郭楞州石化大道塔指1区25栋403'],
    ['严*', '北京市大兴区清源北路16号，校长大厦'],
    ['李*', '北京市大兴区十八里店乡横街子村64号柠檬家园B113'],
    ['于*佳', '北京市朝阳区郎园2号A座2层'],
    ['张*江', '北京市海淀区海淀区上地三街9号金隅嘉华大厦Ｆ座703室'],
    ['萌*', '北京市西城区金融街邮政集团公司'],
    ['张*宾', '河南省郑州市文治路泰祥投资集团楼下新锐广告'],
    ['彭*灿', '江苏省苏州市玉山镇印象欧洲17#606'],
    ['王*亮', '北京市朝阳区双营路11号美立方4号楼4单元602'],
    ['朱*伦', '北京市海淀区西三环中路19号海军大院西门顺丰快递'],
    ['杜*', '河北省石家庄市河北科技大学新校区26号'],
    ['董*', '北京市朝阳区雅宝路华声国际大厦'],
    ['朱*', '江苏省镇江市延陵镇'],
    ['段*', '山东省临沂市银雀山街道万阅城A座1207'],
    ['朱*', '北京市昌平区北京联合大学昌平校区'],
    ['陈*章', '北京市昌平区沙河镇白沙路汇德商厦老男孩教育'],
    ['肖*雅', '北京市昌平区沙河汇德商厦4楼老男孩儿教育'],
    ['赵*明', '北京市昌平区沙河顺沙路汇德商厦老男孩教育403'],
    ['邹*', '宁夏银川市上海路福州街口云峰盛大药房'],
    ['袁*', '辽宁省锦州市辽宁省凌海市国庆路33B号2单元23室'],
    ['陈*', '浙江省杭州市昌化电站里56号骏程瓷砖店'],
    ['索*辉', '辽宁省沈阳市浑南区创新路117号东软医疗系统有限公司'],
    ['李*', '北京市大兴区天宫院地铁站熙悦春天小区'],
    ['张*', '陕西省西安市电子城街道高新领域4号楼'],
    ['王*', '山西省吕梁市一家庄小区三期五号楼'],
    ['钟*', '陕西省商洛市商洛学院'],
    ['薛*', '江苏省泰州市口岸街道向阳北路94号农商行'],
    ['张*强', '甘肃省兰州市北滨河西路666号（中国移动甘肃分公司）'],
    ['姚*飞', '上海市浦东新区成山路1728弄88号'],
    ['赵*宁', '浙江省金华市光南路898号金华移动公司'],
    ['张*昌', '北京市昌平区回龙观东大街 矩阵小区 11楼1单元1102室'],
    ['董*亨', '上海市嘉定区曹安公路4800号同济大学嘉定校区'],
    ['李*根', '北京市昌平区马连店4号楼2单元'],
    ['贾*新', '北京市海淀区学院路29号'],
    ['吕*', '浙江省舟山市高亭镇军民路106号'],
    ['张*东', '河南省周口市西华县基城高中'],
    ['李*东', '河北省石家庄市新石中路，物联网大厦10层'],
    ['韩*泰', '山东省青岛市青岛农业大学西苑'],
    ['邵*遥', '浙江省杭州市塘栖镇张家墩路65号博乐展具内'],
    ['李*泽', '河南省郑州市郑东新区龙子湖高校园区郑州信息科技职业学院'],
    ['沈*蕾', '浙江省杭州市下沙学源街中国计量大学'],
    ['冯*明', '上海市浦东新区张江路华夏中路 虹御公寓'],
    ['海*', '浙江省杭州市良渚街道大陆村邱家桥桥南3号'],
    ['刘*龙', '北京市通州区台湖镇次渠嘉园8区1号楼1705号'],
    ['王*宇', '河南省安阳市红旗路天宇国际三号楼四单元'],
    ['宋*波', '北京市海淀区龙翔路甲1号泰翔商务楼508'],
    ['周*萧', '北京市昌平区回龙观镇史各庄村176号'],
    ['梁*升', '吉林省吉林市承德街45号吉林化工学院'],
    ['陈*龙', '上海市浦东新区郭守敬路498号23号楼23215'],
    ['张*', '上海市徐汇区桂林路402号 诚达创意园76幢407室 银基科技'],
    ['何*畅', '河南省周口市西华县箕城高中'],
    ['欧*', '北京市丰台区东营里5号院8号楼2单元401'],
    ['张*', '陕西省西安市陕西西安思源学院'],
    ['曹*', '浙江省宁波市白沙街道新马路61弄江北区农林水利局'],
    ['陈*刚', '宁夏银川市上海东路银佐家园东区11-1-501'],
    ['喻*明', '湖北省武汉市徐东'],
    ['陈*余', '北京市海淀区甘家口街道阜成路北二街阜光里小区7号楼二单元102'],
    ['刘*博', '山西省太原市小店区平阳路42号山西省自动化研究所'],
    ['王*', '北京市大兴区亦庄经济技术开发区大族广场T5，6层洪泰空间c033'],
    ['褚*文', '湖北省武汉市明伦正街明伦生鲜市场9号'],
    ['乔**', '河北省衡水市香榭丽都2号楼1单元 2603'],
    ['貟*杰', '上海市宝山区上海市宝山区陆翔路678弄62号903'],
    ['甘*德', '北京市海淀区四季青杏石口路甲18号航天信息园'],
    ['杨*奖', '北京市东城区东单北大街1号国旅大厦502'],
    ['李*', '北京市海淀区北京市海淀区中关村南大街9号理工科技大厦207'],
    ['刘*', '浙江省杭州市紫荆花路金月巷嘉禾花苑'],
    ['刘*亮', '北京市朝阳门'],
    ['聂*敏', '上海市浦东新区高博路188弄1号楼1903室'],
    ['刘*正', '山东省青岛市流亭街道洼里社区八号楼尚美美发'],
    ['杨*强', '陕西省西安市枣园路万科金色悦城'],
    ['聂*', '湖北省武汉市台银大厦1单位1楼'],
    ['刘*', '上海市闵行区闵驰一路29弄3号1101'],
    ['郭*', '青海省西宁市互助东路12号海亮大都汇'],
    ['芦*坤', '北京市朝阳区北京工人体育场3号看台2号楼1706'],
    ['晋*林', '上海市杨浦区隆昌路619号城市概念10号b座'],
    ['董*', '浙江省杭州市丰潭路城西银泰E2幢10楼'],
    ['刘*', '湖北省武汉市中国地质大学（北区）'],
    ['马*', '河北省保定市保定市南市区朝阳南大街哈弗技术中心2076号包裹站'],
    ['王*超', '黑龙江省哈尔滨市永泰城3号楼1单位1304'],
    ['孙*敏', '北京市昌平区北京市昌平区沙河于辛庄于辛家园1号楼1单元'],
    ['郑*龙', '河南省郑州市花园路国基路花园SOHO2栋'],
    ['李*', '北京市昌平区流星花园三区11号楼4单元401室'],
    ['李*', '浙江省杭州市金岸提香3幢1单元1303'],
    ['庄*峰', '北京市海淀区慧科大厦'],
    ['马*', '北京市朝阳区惠新东街11号紫光发展大厦A座12层'],
    ['朱*', '北京市海淀区东升镇宝盛东路奥北科技园领智中心Ｂ座5层'],
    ['吴*峰', '湖北省武汉市幸福路鸿福花园1栋3006'],
    ['付*诚', '北京市海淀区观林园'],
    ['滕*', '江苏省南京市秣周东路11号双子楼9号楼15楼君度科技'],
    ['石*刚', '辽宁省大连市大连市经济技术开发区福泉北路20号'],
    ['程*', '北京市昌平区沙河兆丰家园'],
    ['武*', '北京市昌平区回龙观西大街龙腾苑五区16号楼1单元202'],
    ['郭*欣', '北京市西城区阜成门 万通新世界 B座1503'],
    ['毛*', '陕西省西安市高新六路万象汇B座'],
    ['龙*宇', '山东省青岛市山东省青岛市市南区青岛啤酒大厦403'],
    ['郅*', '北京市顺义区后沙峪清岚花园西区15号楼一单元502'],
    ['蔡*芝', '江苏省南京市新模范马路五号南京工业大学国家科技园 A2405'],
    ['王*飞', '江苏省苏州市工业园区雪堂街1号，善行楼17栋'],
    ['葛*光', '北京市海淀区复兴路甲23号华能大厦'],
    ['胡*鑫', '天津市和平区河南路63号'],
    ['陶*东', '浙江省宁波市杭州湾新区滨海四路777号b-4'],
    ['王*庆', '上海市静安区万荣路700号A1 SINODIS食品有限公司'],
    ['刘*闯', '北京市东城区东中街58号美惠大厦B座2单元1层MH-Z-0005'],
    ['李*', '上海市闵行区航北路228弄142号202'],
    ['林*春', '河南省郑州市河南中医药大学龙子湖校区'],
    ['张*春', '陕西省延安市李渠镇阳山村延安北铁路小区'],
    ['李*', '浙江省杭州市文三西路52号建投大厦'],
    ['李*', '河南省郑州市红旗路6号华图教育'],
    ['徐*麒', '河南省洛阳市河南科技大学开元校区'],
    ['陈*', '江苏省苏州市伟业迎春华府'],
    ['张*', '北京市北京亦庄经济开发区地泽北街1号朗致集团'],
    ['伍*葵', '新疆阿克苏地区红旗坡十一队'],
    ['王*操', '上海市浦东新区亮秀路72号X座6楼'],
    ['孙*强', '湖北省宜昌市大学路8号三峡大学'],
    ['王*军', '山东省临沂市九曲街道格瑞斯小镇'],
    ['郭*', '天津市西青区侯台碧水家园e区'],
    ['聂*双', '北京市海淀区柳浪家园东里5号楼3单元801室'],
    ['安*', '辽宁省沈阳市青山路亚都名苑3期逸林14号楼1-11-2'],
    ['戴*', '浙江省杭州市乔司街道花漫里8幢3单元101'],
    ['米*俊', '陕西省西安市太白新苑'],
    ['周*祺', '河南省新乡市新辉路街道建设西路保温瓶厂家属院向西100米新中批发'],
    ['丁*', '山西省运城市运城宾馆对面北大青鸟'],
    ['文*宇', '湖北省宜昌市三峡大学欣苑'],
    ['王*', '北京市海淀区北清路68号用友软件园'],
    ['张*君', '山东省青岛市上清路16号甲，青岛东软载波科技股份有限公司'],
    ['正*', '山东省济南市经十路20188号'],
    ['李*晓', '北京市朝阳区国际电子城总部360发票A座收发室'],
    ['丁*涛', '江苏省苏州市子胥路新峰工业小区11栋苏州三川'],
    ['A*yua*', '上海市浦东新区华佗路1号'],
    ['夏*捷', '陕西省西安市西安邮电大学'],
    ['郭*坤', '山东省济宁市济宁学院男生宿舍'],
    ['杨*星', '湖北省武汉市江夏大道18号梅兰山居碧水轩'],
    ['唐*宁', '新疆乌鲁木齐市新疆省乌鲁木齐头屯河区火车西站6街'],
    ['田*', '上海市黄浦区马当路388号SOHO复兴广场E栋2楼R13A'],
    ['覃*', '湖北省武汉市南李路55号'],
    ['杨*', '北京市朝阳区光华路甲8号和侨大厦B座508'],
    ['梁*雷', '北京市海淀区王庄路1号，清华同方科技广场B2006'],
    ['李*', '湖北省武汉市东湖高新南湖大道182号'],
    ['曹*伟', '江苏省南京市安德门大街57号楚翘城1号楼4层'],
    ['郭*铠', '山西省太原市南中环西街万年花城7号楼2单元401'],
    ['李*生', '江苏省南京市江山路明发3期332栋603室'],
    ['许*辰', '河南省郑州市丰产路111号河南省国家税务局8楼信息中心'],
    ['姚*超', '北京市昌平区TBD云集中心1号楼5层'],
    ['张*', '山东省青岛市山东科技大学'],
    ['高*锐', '山东省济南市经十路万科金域中心a座'],
    ['严*', '安徽省合肥市双凤开发区阜阳北路与魏武路交叉口西南角北部湾小区'],
    ['李*春', '山东省德州市德州职业技术学院'],
    ['张*豪', '河南省南阳市河南省南阳市宛城区第七小学邮政家属院对面的楼七一搬运站'],
    ['康*', '北京市朝阳区垡头东里百斯特大厦A663'],
    ['陈*', '江苏省南京市文苑路9号南京邮电大学'],
    ['柴*虎', '北京市昌平区北七家镇顺玮阁小区'],
    ['韩*', '辽宁省葫芦岛市小庄子乡宝仓村'],
    ['魏*森', '北京市昌平区于辛庄路，赋腾国创中心，2楼'],
    ['邓*明', '北京市丰台区新华街三里1号楼305'],
    ['赵*', '上海市宝山区宝山区高境镇高境一村11号后3号车库'],
    ['徐*亮', '北京市海淀区花园东路11号泰兴大厦302'],
    ['张*凡', '北京市昌平区沙河镇松兰堡迎客家园507'],
    ['赵*', '北京市北京市海淀区农大国际创业园b区6065'],
    ['顾*天', '北京市海淀区上地东路1号华控大厦'],
    ['丁*', '上海市杨浦区安波路533弄硕和商务2号楼1102'],
    ['封*号', '江苏省苏州市陆家镇陆丰东路199号水岸香堤2#2309'],
    ['王*哲', '上海市静安区曲沃路430弄15号401'],
    ['刘**', '湖北省武汉市左岭镇 武汉华星光电一号门'],
    ['付*', '安徽省合肥市长江西路305号电信新技术楼'],
    ['鲁*', '湖北省武汉市武大科技园宏业楼C座'],
    ['张*', '北京市朝阳区小营路13号亚非大厦7层8704室'],
    ['齐*', '湖北省武汉市珞喻路马家庄'],
    ['王*', '北京市海淀区北坞嘉园北里9号楼三单元D01'],
    ['陈*龙', '北京市朝阳区北卫新园'],
    ['曹*生', '江苏省无锡市澄南花苑'],
    ['沈*', '北京市海淀区中关村南大街甲18号北京国际大厦D座7层'],
    ['续*', '山西省晋中市中都广场12层畅快车贷'],
    ['赵*全', '河北省唐山市李钊庄镇大王庄村'],
    ['成*', '上海市虹口区东五小区641号楼2007'],
    ['方*', '上海市闵行区联航路1399弄28号1103室'],
    ['曹*', '上海市浦东新区向城路15号24C'],
    ['韩*德', '北京市大兴区枣园北里小区1号楼8单元202'],
    ['金*鹏', '浙江省温州市温州职业技术学院生活区快递中心'],
    ['陶*明', '浙江省嘉兴市南溪路桂苑小区23幢603'],
    ['李*ir', '北京市丰台区南苑乡 德鑫家园9号楼5单元50'],
    ['姜*杰', '山东省临沂市凤凰岭大街惠民早餐'],
    ['l*xq', '辽宁省沈阳市卫工南街4-4网点2门瀚辰跆拳道'],
    ['赵*', '河北省邯郸市幸福街于联防路交叉口北行幸福馨苑'],
    ['张*锋', '内蒙古呼和浩特市双河镇莹昱佳苑商铺A段13号（防汛东巷莲爱粮油副食门市）'],
    ['胡*', '北京市西城区鸭子桥路24号'],
    ['王*鲲', '北京市延庆区东外小区15号楼一单元101'],
    ['马*闻', '陕西省西安市西安邮电大学东门'],
    ['许*', '安徽省合肥市宿松路紫竹苑B区2栋2单元602室'],
    ['范*', '浙江省金华市金华职业技术学院'],
    ['马*铎', '山西省太原市徐沟镇山西警察学院'],
    ['武*文', '上海市浦东新区浦东新区盛夏路738弄樟盛苑32号楼一楼'],
    ['陈*', '江苏省徐州市苏堤北小区四号楼三单元702室'],
    ['曹*政', '辽宁省大连市大连理工大学软件学院'],
    ['张*超', '山东省济南市八一立交桥西南角联通公司3号楼'],
    ['唐*生', '山东省济南市工业南路鑫苑国际城市花园'],
    ['严*鹏', '上海市杨浦区五角场街道 国定路277弄铁村小区13号601'],
    ['张**', '甘肃省兰州市甘肃省兰州市七里河区兰公坪兰州理工大学校本部'],
    ['麻*肖', '安徽省宿州市香格里拉108幢'],
    ['刘*仪', '河北省廊坊市燕郊经济开发区 华北科技学院'],
    ['刘*龙', '河南省洛阳市新一中文印室'],
    ['李*', '陕西省西安市临潼区西安科技大学'],
    ['相**', '北京市昌平区天通公园里'],
    ['康*熙', '山西省忻州市万人商厦对面联想专卖店'],
    ['张*栋', '山东省泰安市安驾庄镇上前'],
    ['陶*', '安徽省宣城市鳌峰东路180号宣城皖南农商银行413室'],
    ['艾*麦提江·拜克热', '浙江省杭州市浦沿街道江畔云卢4幢2单元1202'],
    ['王*', '上海市浦东新区福山路455号，全华信息大厦，1楼，平安银行'],
    ['刘*林', '湖北省宜昌市枝城镇大堰村四组'],
    ['罗*', '河南省信阳市西关黄国新城C6'],
    ['莫*', '河南省郑州市金水区76号9202'],
    ['徐*龙', '安徽省合肥市长江西路新加坡花园城4联排'],
    ['杨*杰', '山西省忻州市京原南路雷神网咖'],
    ['朱*北', '海南省海口市和平北路三亚上二街9号'],
    ['朱*', '浙江省杭州市龙湖春江郦城'],
    ['常*磊', '北京市海淀区学院南路59号'],
    ['王*阳', '江苏省南京市南京江宁21世纪现代城'],
    ['谢*星', '甘肃省酒泉市雄关路54号东风物流十号'],
    ['侯*', '河南省郑州市河南省郑州市高新区莲花街牡丹路西雅图荣邦城'],
    ['孙*康', '江苏省南京市化工园方水东路9号'],
    ['索*华', '北京市昌平区北七家镇东三旗村委会'],
    ['王*', '陕西省西安市十里铺街长力小区北门对面（王家辣子面）'],
    ['姜*生', '北京市朝阳区东大桥宫宵国际1103'],
    ['顾*生', '安徽省阜阳市清河西路100号阜阳师范学院'],
    ['申*伟', '上海市青浦区巷佳华苑三期10号楼904室'],
    ['刘*', '湖北省武汉市左岭新城1社区15栋'],
    ['单*成', '山东省日照市日照职业技术学院'],
    ['韩*红', '上海市杨浦区隆昌路619号10号楼二楼'],
    ['魏*琪', '北京市丰台区汉威国际广场4区12号楼'],
    ['杨*康', '北京市丰台区丰台科技园汉威广场12栋']
]

address = [
    "北京市", "江苏省", "上海市", "浙江省", "河南省", "河北省", "辽宁省", "安徽省", "湖北省", "天津市", "内蒙古呼和浩特市",
    "山东省", "黑龙江省", "陕西省", "山西省", "吉林省", "甘肃省", "新疆乌鲁木齐市", "新疆巴音郭楞州", "宁夏银川市",
    "青海省", "新疆阿克苏地区", "海南省"
]

mydir = {}

for i in address:
    info = []

    for j in infos:
        pattern = fr"{i}\w+"
        add = re.match(pattern, j[1])

        if add is not None:
            info.append(j)

    mydir[i] = info

for key, value in mydir.items():
    print(key, value)
```

:::

## 计算文件大小

::: details

```python
import os


def get_size(path):
    size = 0
    l = [path]
    while l:
        path = l.pop()
        lst = os.listdir(path)
        for name in lst:
            son_path = os.path.join(path, name)
            if os.path.isfile(son_path):
                size += os.path.getsize(son_path)
            else:
                l.append(son_path)
    return size


size = get_size(r'D:\s14\算法')
print(size)
```

:::

## 三级菜单

- 运行程序输出第一级菜单
- 选择一级菜单某项，输出二级菜单，同理输出三级菜单
- 可返回上一级
- 可随时退出程序

::: details

```python
menu = {
    '北京': {
        '海淀': {
            '五道口': {
                'soho': {},
                '网易': {},
                'google': {}
            },
            '中关村': {
                '爱奇艺': {},
                '汽车之家': {},
                'youku': {},
            },
            '上地': {
                '百度': {},
            },
        },
        '昌平': {
            '沙河': {
                '老男孩': {},
                '北航': {},
            },
            '天通苑': {},
            '回龙观': {},
        },
        '朝阳': {},
        '东城': {},
    },
    '上海': {
        '闵行': {
            "人民广场": {
                '炸鸡店': {}
            }
        },
        '闸北': {
            '火车战': {
                '携程': {}
            }
        },
        '浦东': {},
    },
    '山东': {},
}

l = [menu]

while l:
    for k in l[-1]:
        print(k)
    key = input('>>>')
    if key.upper() == 'B':
        l.pop()
    elif key.upper() == 'Q':
        l.clear()
    elif l[-1].get(key):
        l.append(l[-1][key])
```

:::

## 文件监听

::: details

```python
def func():
    with open('test.txt', 'r+', encoding='utf-8') as f:
        while 1:
            lens = f.readline()
            if lens:
                yield lens


t = func()
for j in t:
    print(j)
```

:::

## 发红包

指定红包大小，并随机发几份红包。

::: details

```python
import random


def rea_pac(money, num):
    ret = random.sample(range(1, money * 100), num - 1)
    print(ret)
    ret.sort()
    ret.insert(0, 0)
    ret.append(money * 100)
    for i in range(len(ret) - 1):
        value = ret[i + 1] - ret[i]
        yield value / 100


g = rea_pac(200, 10)
for i in g:
    print(i)
```

:::

## 递归问路

::: details

```python
lis = ['alex', 'wusir', 'yuanhao', 'linhaifeng', 'henry']


def inner(name):
    if len(name) == 0:
        return '没有找到路'
    res = lis.pop(0)
    if res == 'henry':
        return '%s说:我知道老男孩就在沙河地铁站附近' % res
    print('hi美男%s敢问路在何方' % res)
    print('%s回答道,我也不知道,我帮你问问%s' % (res, lis[0]))
    f = inner(lis)
    return f


print(inner(lis))
```

:::

## 人狗大战

::: details

```python
import random
import time


# 定义一个人的类
class Person:
    # 定义人的静态属性
    def __init__(self, name, hp, ad, sex):
        self.name = name
        self.ad = ad
        self.hp = hp
        self.sex = sex

    # 定义人的方法
    def da(self, dog):
        yy = random.randint(1, self.ad)
        dog.hp -= yy
        print('%s使用%s,打了%s,%s掉了%s点血' % (self.name, arms.name, dog.name, dog.name, yy))
        if dog.hp < 50:
            print("{}使用终极必杀技{}".format(dog.name, arms.skill()))


# 定义一个狗的类
class Dog:
    # 定义狗的静态属性
    def __init__(self, name, hp, ad, kind):
        self.name = name
        self.hp = hp
        self.ad = ad
        self.kind = kind

    # 定义狗的方法
    def yao(self, person):
        uu = random.randint(1, self.ad)
        person.hp -= uu
        print('%s咬了%s,%s掉了%s点血' % (self.name, person.name, person.name, uu))
        if person.hp < 50:
            print("{}使用终极必杀技{}".format(person.name, arms.skill()))


# 定义一个武器类
class Arms:
    def __init__(self, name, hp, ad):
        self.name = name
        self.hp = hp
        self.ad = ad

    # 定义一个武器的技能
    def skill(self):
        li = ['飞龙在天', '乾坤大挪移', '九阳神功']
        f = random.choice(li)
        return f


arms = Arms('铁锹', 3000, 2000)
henry = Person('henry', 500, 30, '男')
dog = Dog('大黄', 300, 30, '哈士奇')
c = 1
while dog.hp > 0:
    print('第{}回合'.format(c))
    dog.yao(henry)
    henry.da(dog)
    time.sleep(1)
    c += 1
```

:::

## 计算器

::: details

```python
import re

express = '1-2*((60-30+(9-2*5/3+7/3*99/4*2998+10*568/14)*(-40/5))-(-4*3)/(16-3*2))'
express = express.replace(' ', '')


# 计算
def cout(exp):
    if '*' in exp:
        a, b = exp.split('*')
        return str(float(a) * float(b))
    else:
        a, b = exp.split('/')
        return str(float(a) / float(b))


# 表达式的符号管理把++变成+,--变成-,+-变成-,-+变成-
def format_exp(exp):
    exp = exp.replace('++', '+')
    exp = exp.replace('+-', '-')
    exp = exp.replace('--', '+')
    exp = exp.replace('-+', '-')
    return exp


# 计算所有的乘除法
def cal_no(res):
    while True:
        chengshu = re.search('\d+\.?\d*[*/]-?\d+\.?\d*', res)  # (9-2*5/3+7/3*99/4*2998+10*568/14)
        if chengshu:
            ret = chengshu.group()  # 2*5
            resut = cout(ret)  # 得到乘除法的计算结果 10.0
            # 将2*5替换成10.0
            res = res.replace(ret, resut)  # (9-10.0/3+7/3*99/4*2998+10*568/14)
        else:
            break
    print(res)  # (9-3.3333333333333335+173134.50000000003+405.7142857142857)
    # 表达式的符号管理把++变成+,--变成-,+-变成-,-+变成-
    res1 = format_exp(res)  # 将替换后的结果从新赋值给res
    # 将括号内的加减法都匹配出来
    res_lis = re.findall('[-+]?\d+(?:\.\d+)?', res1)
    print(res_lis)  # ['9', '-3.3333333333333335', '+173134.50000000003', '+405.7142857142857']
    sum_n = 0
    for i in res_lis:
        sum_n += float(i)
    return sum_n


def remove_bracket(express):
    while True:
        # 提取表达式最里层的括号
        exp = re.search('\([^()]+\)', express)
        if exp:
            res = exp.group()  # (9-2*5/3+7/3*99/4*2998+10*568/14)
            rep = cal_no(res)  # 173545.88095238098
            print(rep)
            express = express.replace(res, str(rep))  # 因为rep的结果是一个数字
            print(express)  # 1-2*((60-30+173545.88095238098*(-40/5))-(-4*3)/(16-3*2))
        else:
            break
    return express  # 括号内的表达式全部计算完成1-2*-1388338.2476190478


ret = remove_bracket(express)
print(cal_no(ret))
```

:::

## 检验文件一致性

::: details

```python
import os
import hashlib


def file_md5(path):
    filesize = os.path.getsize(path)
    md5 = hashlib.md5()
    with open(path, 'rb') as f:
        while filesize >= 4096:
            content = f.read(4096)
            md5.update(content)
            filesize -= 4096
        else:
            content = f.read(filesize)
            if content:
                md5.update(content)
    return md5.hexdigest()


def cmp_file(path1, path2):
    return file_md5(path1) == file_md5(path2)


path1 = r'D:\s20\day18\视频\4.面向对象整理.mp4'
path2 = r'D:\s20\day18\视频\tmp.mp4'
ret = cmp_file(path1, path2)
print(ret)
```

:::

## 博客园登录

::: details

```python
# 创建一个 log 和 register 文件,
import time

dic = {
    1: '请登录',
    2: '请注册',
    3: '文章页面',
    4: '日记页面',
    5: '评论页面',
    6: '收藏页面',
    7: '退出程序',
}


def Home_display():
    """
    首页展示
    :return:
    """
    print('欢迎来到博客园首页！！！')
    for i in dic:
        print(i, dic[i])


Home_display()


def ster():
    """
    用户注册函数,将用户名,密码写入文件
    :return:
    """
    user_name = input('请填写注册名称').strip()
    pass_word = input('请填写注册密码').strip()
    with open('register', 'a+', encoding='utf-8') as f1:
        f1.write('{},{}'.format(user_name, pass_word) + '\n')
        print('注册成功,请登录！！！')


def login_system():
    """
    登录函数
    :return:
    """
    user_name = []
    time = 3
    with open('register', 'r+', encoding='utf-8') as f:
        for i in f:
            user_name.append(i.strip())
        while time >= 1:
            name = input('请输入用户名')
            wd = input('请输入密码')
            l = name + ',' + wd
            if l in user_name:
                print('登录成功')
                chioce(name)
            else:
                time -= 1
                if time == 0:
                    print('登录次数超出限制,请您注册后登录！')
                    break
                print('用户名或密码错误,剩余{}次机会'.format(time))


def eixt_procedure():
    """
    退出程序
    :return:
    """
    print('程序退出,欢迎下次光临')
    exit()


def log(n, func):
    with open('log', 'a+', encoding='utf-8') as f2:
        current_time = time.strftime("%Y-%m-%d-%X", time.localtime())
        f2.write('{}:{}调用了{}函数'.format(n, current_time, func) + '\n')


def diary(n):
    """
    日记页面
    :return:
    """
    print('欢迎{}访问日记页面'.format(n))
    log(n, 'diary')


def comment(n):
    """
    评论页面
    :return:
    """
    print('欢迎{}访问评论页面'.format(n))
    log(n, 'comment')


def Collection(n):
    """
    收藏页面
    :return:
    """
    print('欢迎{}访问收藏页面'.format(n))
    log(n, 'Collection')


def Article(n):
    """
    文章页面
    :return:
    """
    print('欢迎{}访问文章页面'.format(n))
    log(n, 'Article')


lis = [login_system, ster, Article, diary, comment, Collection, eixt_procedure, log]


def chioce(a):
    """
    用户选择函数
    :return:
    """
    while 1:
        number = input('请选择页面:').strip()
        if number.isdigit() and 3 <= int(number) <= 6:
            lis[int(number) - 1](a)
        # 不可以输入字母
        elif number.isdigit() and (int(number) == 1 or int(number) == 7):
            if int(number) == 7:
                eixt_procedure()
            lis[int(number) - 1]()
        else:
            print('请输入正确页面选项:')


def chioce1():
    while 1:
        number = input('请选择登录或注册或退出').strip()
        if number.isdigit() and (1 == int(number) or int(number) == 7 or int(number) == 2):
            if int(number) == 7:
                eixt_procedure()
            else:
                lis[int(number) - 1]()
        else:
            print('输入有误请重新输入')


chioce1()
```

:::

## 学生选课系统

::: details

```python
# 创建 course_file，test.log，vip_admin 文件
import hashlib
import pickle
import os
import logging

logger = logging.getLogger()
# 创建一个handler，用于写入日志文件
fh = logging.FileHandler('test.log', encoding='utf-8')

# 再创建一个handler，用于输出到控制台
# ch = logging.StreamHandler()
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
fh.setFormatter(formatter)
# ch.setFormatter(formatter)
logger.addHandler(fh)  # logger对象可以添加多个fh和ch对象
# logger.addHandler(ch)
logger.setLevel(logging.DEBUG)


# 密码加密
def md5_user(username, password):
    md5 = hashlib.md5(username.encode('utf-8'))
    md5.update(password.encode('utf-8'))
    return md5.hexdigest()


# 读取文件
def read_file_name(file_name):
    with open(file_name, 'rb') as f:
        while True:
            try:
                res = pickle.load(f)
                if res:
                    yield res
            except EOFError:
                break


# 写文件
def add_file(file_name, content):
    with open(file_name, 'ab') as f:
        pickle.dump(content, f)


# 创建课程类
class Course:
    def __init__(self, name, price, period, teacher):
        self.name = name
        self.price = price
        self.period = period
        self.teacher = teacher

    def __str__(self):
        return format('\t课程：' + self.name, '<13') + format('价钱：' + self.price, '<13') + format(
               '周期：' + self.period, '<13') + format('老师：' + self.teacher, '<13')


class Admin:
    msg = [('创建课程', 'course'),
           ('创建学生和学生账号', 'account_num'),
           ('查看所有课程', 'view_courses'),
           ('查看所有学生', 'look_all_student'),
           ('查看所有学生的选课情况', 'look_all_courses'),
           ('退出程序', 'quit')]

    # 实例化出一个管理员
    def __init__(self, username, password, identify='Admin'):
        self.username = username
        self.password = password
        self.identify = identify

    # 创建课程
    def course(self):
        student_name = input('请输入课程名称')
        student_pricce = input('请输入课程价钱')
        student_period = input('请输入课程周期')
        student_teacher = input('请输入授课老师')
        Course1 = Course(student_name, student_pricce, student_period, student_teacher)
        add_file('course_file', Course1)
        return True

    # 创建学生和学生账号
    def account_num(self):
        username = input('请输入要创建的姓名')
        password = input('请输入要创建的密码')
        student1 = Student(username, md5_user(username, password))
        add_file('vip_admin', student1)
        return True

    # 查看所有课程
    def view_courses(self):
        ret = read_file_name('course_file')
        for index, i in enumerate(ret, 1):
            print(index, i)  # 因为用__str__所以直接打印对象名直接可以打印他的return值
        return True

    # 查看所有学生
    def look_all_student(self):
        ret = read_file_name('vip_admin')
        for i in ret:
            if i.identify == 'Student':
                print(i.username, i.password)
        return True

    # 查看所有学生的选课情况
    def look_all_courses(self):
        ret = read_file_name('vip_admin')
        for i in ret:
            if i.identify == 'Student':
                print(i.username)
                for j in i.course:
                    print(j)
        return True

    # 退出程序
    def quit(self):
        print('程序退出')
        logger.info(self.username + '——' + self.msg[-1][0])
        exit()


# 实例化一个alex密码123的管理员
# alex = Admin('alex',md5_user('alex','123'))
# def write_file_name():
#     with open('vip_admin','wb') as f:
#         pickle.dump(alex,f)
# write_file_name()
class Student:
    msg = [('查看所有课程', 'look_all_course'),
           ('选择课程', 'choice_course'),
           ('查看所选课程', 'look_choice_course'),
           ('退出程序', 'quit')]

    def __init__(self, username, password, identify='Student'):
        self.username = username
        self.password = password
        self.identify = identify
        self.course = []

    def look_all_course(self):
        ret = read_file_name('course_file')
        for index, i in enumerate(ret, 1):
            print(index, i)
        return True

    def choice_course(self):
        ret = list(read_file_name('course_file'))
        # print(ret)
        for index, i in enumerate(ret, 1):
            print(index, i)
        while True:
            choice = input('请选择课程>>>:').strip()
            if choice.isdigit() and int(choice) in range(1, len(ret) + 1):
                print(ret[int(choice) - 1].name)
                print([i.name for i in self.course])
                if ret[int(choice) - 1].name not in [i.name for i in self.course]:
                    self.course.append(ret[int(choice) - 1])
                    with open('vip_admin', 'rb') as f1, open('vip_admin2', 'wb') as f2:
                        while True:
                            try:
                                res1 = pickle.load(f1)
                                if res1.username == self.username:
                                    res1.course.append(ret[int(choice) - 1])
                                    pickle.dump(res1, f2)
                                else:
                                    pickle.dump(res1, f2)
                            except EOFError:
                                break
                    os.remove('vip_admin')
                    os.rename('vip_admin2', 'vip_admin')
                    logger.info(self.username + '——' + self.msg[1][0] + str(ret[int(choice) - 1]))  # ?????
                    break
                else:
                    print('该课程您已选择')
                    break
            else:
                print('输入有误重新输入')

    def look_choice_course(self):
        ret = read_file_name('vip_admin')
        for i in ret:
            if i.username == self.username:
                for j in i.course:
                    print(j)
        return True

    def quit(self):
        logger.info(self.username + '——' + self.msg[-1][0])
        exit()


# 登录验证
def login(username, password):
    ret = read_file_name('vip_admin')
    for i in ret:
        # print(i.username)
        if i.username == username and i.password == md5_user(username, password):
            return i

    else:
        return False


def auth():
    lis = ['登录', '退出']
    while True:
        for index, opt in enumerate(lis, 1):
            print(index, opt)
        num = input('请输入你要操作的内容')
        if num.isdigit() and int(num) in range(1, len(lis) + 1):
            if num == '1':
                username = input('请输入用户名')
                password = input('请输入密码')
                ret = login(username, password)
                if ret:
                    print('登录成功')
                    logger.info(username + '——' + '登录成功')
                    return ret
                else:
                    print('登录失败')
            elif num == '2':
                exit()
        else:
            print('您输入的序号有误请重新输入')


# 主函数
def main():
    ret = auth()
    # if hasattr(sys.modules[__name__],ret['identify']):
    #     cls = getattr(sys.modules[__name__],ret['identify']) # ???????
    #     # print(sys.modules[__name__]) # <module '__main__' from 'D:/PycharmProjects/s20/大作业/Thursday/学生选课系统升级版/选课系统升级版.py'>
    #     obj = cls(ret['username'],ret['password'])
    if ret:
        # print(ret)
        obj = ret
        # print(obj)
        while True:
            for index, i in enumerate(obj.msg, 1):
                print(index, i[0])
            choice = input('请选择序号')
            if choice.isdigit() and int(choice) in range(1, len(obj.msg) + 1):
                if hasattr(obj, obj.msg[int(choice) - 1][1]):
                    if callable(getattr(obj, obj.msg[int(choice) - 1][1])):
                        ret = getattr(obj, obj.msg[int(choice) - 1][1])()
                        if ret:
                            logger.info(obj.username + '——' + obj.msg[int(choice) - 1][0])
            else:
                print('您输入的序号有误,请重新输入')


main()
# my_admin = Admin('zhangsan', 'build.2022')

# my_admin.course()
# my_admin.account_num()
# my_admin.view_courses()
# my_admin.look_all_student()
# my_admin.look_all_courses()
# my_admin.quit()

# my_student = Student('小张', 'build.2022')
# my_student.look_all_course()
# my_student.choice_course()
# my_student.look_choice_course()
# my_student.quit()
```

:::

