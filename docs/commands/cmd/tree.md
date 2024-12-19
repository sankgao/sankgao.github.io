---
title: tree
icon: command
date: 2024-07-16
category: 命令集
tag:
    - CMD
---

## 描述

`tree` 用于以图形方式显示路径或磁盘的目录结构。此命令显示的结构取决于在命令提示符处指定的参数，如果未指定磁盘或路径，此命令将显示以当前磁盘的当前目录开头的树结构。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `/a`  |  指定使用文本字符而不是图形字符来显示链接子目录的行  |
|  `/f`  |  显示每个目录中的文件名  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

例如：显示当前目录树结构。

```cmd
E:\test>tree
文件夹 PATH 列表
卷序列号为 02E3-C833
E:.
├─a
│  └─b
│      └─c
└─test01
    └─test02

E:\test>
```

例如：显示指定目录树结构。

```cmd
E:\test>tree test01
文件夹 PATH 列表
卷序列号为 02E3-C833
E:\TEST\TEST01
└─test02

E:\test>
```

例如：指定使用文本字符而不是图形字符来显示链接子目录的行。

```cmd
E:\test>tree /a
文件夹 PATH 列表
卷序列号为 02E3-C833
E:.
+---a
|   \---b
|       \---c
\---test01
    \---test02

E:\test>
```