---
title: path
icon: command
date: 2024-07-16
category: 命令集
tag:
    - CMD
---

## 描述

`path` 用于在 PATH 环境变量中设置命令路径，指定用于搜索可执行（`.exe`）文件的目录集。如果在不使用参数的情况下使用，此命令将显示当前命令路径。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `;`  |  分隔命令路径中的目录。如果在不使用其他参数的情况下使用，`;` 会从 PATH 环境变量中清除现有命令路径，并指示 `Cmd.exe` 仅在当前目录中搜索  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

例如：显示当前系统中的环境变量。

```cmd
C:\Users\user>path
PATH=D:\VMware\bin\;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem
// ...省略部分内容

C:\Users\user>
```

例如：清除现有命令路径。

```cmd
C:\Users\user>path;

C:\Users\user>path
PATH=(null)

C:\Users\user>
```

在命令行模式下设置的环境变量，属于临时的环境变量，只针对当前的 CMD 命令窗口有效，并不影响其它窗口中的环境变量，更不会影响到永久性的环境变量，要设置永久的环境变量，需要通过图形操作修改。
