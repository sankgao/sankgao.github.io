---
title: type
icon: command
date: 2024-07-15
category: 命令集
tag:
    - CMD
---

## 描述

在 Windows 命令 shell 中，`type` 是显示文本文件内容的内置命令。使用 `type` 命令将只查看文本文件而不对其进行修改。

在 PowerShell 中，`type` 是 `Get-Content cmdlet` 的内置别名，该 `cmdlet` 也显示文件的内容，但使用的语法不同。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

例如：查看当前目录下的 `hello.txt` 文件内容。

```cmd
E:\test>type hello.txt
hello world

E:\test>
```
