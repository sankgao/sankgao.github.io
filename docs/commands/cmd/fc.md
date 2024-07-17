---
title: fc
icon: command
date: 2024-07-17
category: 命令集
tag:
    - CMD
---

## 描述

`fc` 用于比较两个文件或文件集并显示它们之间的差异。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `/a`  |  缩短 ASCII 比较输出。`fc` 不会显示所有不同的行，而是仅显示每组差异的第一行和最后一行  |
|  `/c`  |  忽略字母大小写  |
|  `/lb<n>`  |  将内部行缓冲区的行数设置为 `N`。行缓冲区的默认长度为 `100` 行。如果要比较的文件具有 `100` 多个连续的不同行，`fc` 将取消比较  |
|  `/n`  |  ASCII 比较过程中将显示行号  |
|  `/w`  |  在比较过程中压缩空格（即制表符和空格）。如果一行包含许多连续的空格或制表符，`/w` 会将这些字符视为单个空格。如果与 `/w` 一起使用，`fc` 会忽略行首和行尾的空格  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

例如：比较当前目录下的 `hello.txt` 和 `hello01.txt` 文件，并显示行号。

```cmd
E:\test>fc /n hello.txt hello01.txt
正在比较文件 hello.txt 和 HELLO01.TXT
***** hello.txt
    1:  hello world
    2:  Hello World
    3:
    4:  testTest
    5:
    6:  aaahelloaaa
    7:  bbbworldbbb
***** HELLO01.TXT
    1:  hello world
    2:  aaa
    3:  bbb
*****


E:\test>
```
