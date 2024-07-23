---
title: taskkill
icon: command
date: 2024-07-23
category: 命令集
tag:
    - CMD
---

## 描述

`taskkill` 用于结束一个或多个任务或进程。可以通过进程 ID 或图像名称结束进程。可以使用 [tasklist](./tasklist.md) 命令来确定要结束的进程的进程 PID。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `/s <computer>`  |  指定远程计算机的名称或 IP 地址（请勿使用反斜杠）。默认为本地计算机  |
|  `/u <domain>\<username>`  |  使用 `<username>` 或 `<domain>\<username>` 指定的用户的帐户权限运行该命令。仅当还指定了 `/s` 时，才能指定 `/u` 参数。默认值是当前登录到发出该命令的计算机的用户的权限  |
|  `/p <password>`  |  指定 `/u` 参数中指定的用户帐户的密码  |
|  `/fi <filter>`  |  应用筛选器以选择一组任务。可以使用多个筛选器或使用通配符（`*`）指定所有任务或映像名称。本文的 “筛选器名称、运算符和值” 部分列出了有效的筛选器  |
|  `/pid <processID>`  |  指定要终止的进程的进程 ID  |
|  `/im <imagename>`  |  指定要终止的进程的映像名称。使用通配符（`*`）指定所有映像名称  |
|  `/f`  |  指定强制结束进程。对于远程进程，将忽略此参数；所有远程进程都会被强制结束  |
|  `/t`  |  结束指定的进程及其启动的任何子进程  |
|  `/?`  |  在命令提示符下显示帮助  |

## 筛选器名称、运算符和值

|  筛选器名称  |  有效运算符  |  有效值  |
|  :----  |  :----  |  :----  |
|  STATUS  |  eq、ne  |  RUNNING \| NOT RESPONDING \| UNKNOWN  |
|  IMAGENAME  |  eq、ne  |  映像名称  |
|  PID  |  eq、ne、gt、lt、ge、le  |  PID 值  |
|  SESSION  |  eq、ne、gt、lt、ge、le  |  会话号  |
|  CPUtime  |  eq、ne、gt、lt、ge、le  |  采用 HH:MM:SS 格式的 CPU 时间，其中 MM 和 SS 介于 0 到 59 之间，HH 是任何无符号数字  |
|  MEMUSAGE  |  eq、ne、gt、lt、ge、le  |  内存使用量（KB）  |
|  USERNAME  |  eq、ne  |  任何有效的用户名（`<user>` 或 `<domain\user>`）  |
|  SERVICES  |  eq、ne  |  服务名称  |
|  WINDOWTITLE  |  eq、ne  |  窗口标题。如果指定远程系统，则不支持此筛选器  |
|  MODULES  |  eq、ne  |  DLL name  |

## 示例

例如：结束进程 ID 为 1230、1241 和 1253 的进程。

```cmd
C:\Users\user>taskkill /pid 1230 /pid 1241 /pid 1253
```

例如：如果进程 `Notepad.exe` 是由系统启动的，要强行结束它。

```cmd
C:\Users\user>taskkill /f /fi "USERNAME eq NT AUTHORITY\SYSTEM" /im notepad.exe
```
