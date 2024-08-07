---
title: timeout
icon: command
date: 2024-07-15
category: 命令集
tag:
    - CMD
---

## 描述

`timeout` 用于将命令处理器暂停指定的秒数。此命令通常用于批处理文件。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `/t`  |  指定命令处理器继续处理之前需等待的十进制秒数（介于 `-1~99999` 之间）。值为 `-1` 会导致计算机无限期地等待击键  |
|  `/nobreak`  |  指定此项会忽略用户击键  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

例如：将命令处理器暂停 `10` 秒钟。

```cmd
E:\test>timeout /t 10
等待 10 秒，按一个键继续 ...

E:\test>
```

例如：将命令处理器暂停 `10` 秒并忽略任何击键。

```cmd
E:\test>timeout /t 10 /nobreak
等待 10 秒，按 CTRL+C 退出 ...

E:\test>
```
