---
title: find
icon: command
date: 2024-07-17
category: 命令集
tag:
    - CMD
---

## 描述

`find` 用于在一个或多个文件中搜索文本字符串，并显示包含指定字符串的文本行。搜索的字符串中不得出现通配符（`*` 和 `?`），若要搜索具有通配符和正则表达式模式的字符串，可以使用 [findstr](./findstr.md) 命令，**注意**：搜索的正则表达式要用双引号（`"`）引起来。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `/c`  |  对包含指定 `<string>` 的行进行计数，并显示总计  |
|  `/i`  |  指定搜索不区分大小写  |
|  `/n`  |  每行前面都有文件的行号  |
|  `/v`  |  显示不包含指定 `<string>` 的所有行  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

例如：显示在 `hello.txt` 文件中包含字符串 `hello` 的所有行，并显示行号。

```cmd
E:\test>find /n "hello" hello.txt

---------- HELLO.TXT
[1]hello world
[6]aaahelloaaa

E:\test>
```

例如：查看已输出的列表文件 `dir.lst` 中包含有哪些文件夹。

```cmd
E:\test>dir > dir.lst

E:\test>find "<DIR>" < dir.lst
2024/07/25  14:34    <DIR>          .
2024/07/25  14:34    <DIR>          ..
2024/07/24  15:19    <DIR>          test01
```
