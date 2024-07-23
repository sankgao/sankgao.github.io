---
title: tskill
icon: command
date: 2024-07-23
category: 命令集
tag:
    - CMD
---

## 描述

`tskill` 用于结束在远程桌面会话主机服务器上的会话中运行的进程。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `<processID>`  |  指定要结束的进程 ID  |
|  `<processname>`  |  指定要结束的进程名称。此参数可以包含通配符  |
|  `/server:<servername>`  |  指定包含要结束的进程的终端服务器。如果未指定 `/server`，则使用当前远程桌面会话主机服务器  |
|  `/id:<sessionID>`  |  结束在指定会话中运行的进程  |
|  `/a`  |  结束在所有会话中运行的进程  |
|  `/v`  |  显示有关正在执行的操作的信息  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

例如：结束进程 6543。

```cmd
C:\Users\user>tskill 6543
```

例如：结束在会话 5 上运行的进程资源管理器。

```cmd
C:\Users\user>tskill explorer /id:5
```
