---
title: md 或 mkdir
icon: command
date: 2024-07-15
category: 命令集
tag:
    - CMD
---

## 描述

`md` 或 `mkdir` 用于创建目录或子目录。命令扩展（默认情况下启用）允许使用单个 `md` 命令在指定路径中创建中间目录。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

### 创建目录

例如：在当前目录中创建 `test04` 目录。

创建前先查看当前目录：

```cmd
E:\test>dir /b
hello.txt
test 03
test01
test02

E:\test>
```

创建 `test04` 目录：

```cmd
E:\test>md test04

E:\test>
```

创建后查看当前目录：

```cmd
E:\test>dir /b
hello.txt
test 03
test01
test02
test04

E:\test>
```

### 创建递归目录

例如：在当前目录中递归创建 `a\b\c` 目录。

```cmd
E:\test>md a\b\c

E:\test>
```

创建后查看当前目录：

```cmd
E:\test>dir /b
a
hello.txt
test 03
test01
test02
test04

E:\test>
```
