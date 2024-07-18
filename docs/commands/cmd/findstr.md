---
title: findstr
icon: command
date: 2024-07-17
category: 命令集
tag:
    - CMD
---

## 描述

`findstr` 用于搜索文件中的文本模式，**注意**：搜索的正则表达式要用双引号（`"`）引起来。

正则表达式使用文本字符和元字符查找文本模式，而不是确切的字符串。

- 文本字符是在正则表达式语法中没有特殊含义的字符，它只是匹配该字符的出现。例如：字母和数字是文本字符
- 元字符是正则表达式语法中具有特殊含义的符号（运算符或分隔符）

元字符如下表所示：

|  元字符  |  描述  |
|  :----:  |  :----  |
|  `.`  |  通配符 - 任意字符  |
|  `*`  |  重复 - 上一个字符或类的零次或多次出现  |
|  `^`  |  起始行位置 - 行的开头  |
|  `$`  |  结束行位置 - 行的末尾  |
|  `[class]`  |  字符类 - 集中的任何一个字符  |
|  `[^class]`  |  逆向类 - 不在集中的任何一个字符  |
|  `[x-y]`  |  范围 - 指定范围内的任何字符  |
|  `\x`  |  转义 - 元字符的文本使用  |
|  `\<string`  |  起始单词位置 - 单词的开头  |
|  `string\>`  |  结束单词位置 - 单词的结尾  |

一起使用时，正则表达式语法中的特殊字符具有最高优先级。例如：使用通配符（`.`）和重复字符（`*`）的组合来匹配任何字符串：`.*`。

将以下表达式用作较大表达式的一部分，以匹配以 `b` 开头且以 `ing` 结尾的任何字符串：`b.*ing`

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `/b`  |  如果文本模式位于行的开头，则匹配该模式  |
|  `/e`  |  如果文本模式位于行的末尾，则匹配该模式  |
|  `/l`  |  逐字处理搜索字符串  |
|  `/r`  |  将搜索字符串作为正则表达式进行处理。这是默认设置  |
|  `/s`  |  搜索当前目录和所有子目录  |
|  `/i`  |  在搜索字符串时忽略字符大小写  |
|  `/x`  |  打印完全匹配的行  |
|  `/v`  |  仅打印不包含匹配项的行  |
|  `/n`  |  打印匹配的每一行的行号  |
|  `/m`  |  如果文件包含匹配项，则仅打印文件名  |
|  `/f:<file>`  |  从指定文件获取文件列表  |
|  `/c:<string>`  |  使用指定的文本作为文本搜索字符串  |
|  `/g:<file>`  |  从指定文件获取搜索字符串  |
|  `/d:<dirlist>`  |  搜索指定的目录列表。每个目录都必须用分号（`;`）分隔，例如：`dir1;dir2;dir3`  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

### 搜索指定字符

例如：在文件 `hello.txt` 中搜索 `hello` 或 `test`。

```cmd
E:\test>findstr "hello test" hello.txt
hello world
testTest
aaahelloaaa

E:\test>
```

### 搜索结果存储到其它文件

例如：列出要在文本文件中搜索的确切文件，请使用文件 `stringlist.txt` 中的搜索条件，搜索在 `filelist.txt` 中列出的文件，然后将结果存储在文件 `results.txt` 中。

```cmd
E:\test>type stringlist.txt
hello
test
E:\test>type filelist.txt
hello.txt
E:\test>findstr /g:stringlist.txt /f:filelist.txt > results.txt

E:\test>type results.txt
hello.txt:hello world
hello.txt:testTest
hello.txt:aaahelloaaa

E:\test>
```

### 列出文件列表

例如：列出当前目录及子目录中，所有文件中包含以 `test` 开头字符的文件列表。

```cmd
E:\test>findstr /s /m "^test" .\*
.\hello.txt
.\stringlist.txt
.\test01\test01.txt

E:\test>
```
