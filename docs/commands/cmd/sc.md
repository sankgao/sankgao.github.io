---
title: sc
icon: command
date: 2024-07-23
category: 命令集
tag:
    - CMD
---

## 描述

`sc` 用于与服务控制管理器和服务进行通信的命令行程序。

## 命令

|  命令  |  描述  |
|  :----:  |  :----  |
|  `sc config`  |  修改注册表和服务控制管理器数据库中服务项的值  |
|  `sc create`  |  在注册表和服务控制管理器数据库中为服务创建子项和条目  |
|  `sc delete`  |  从注册表中删除服务子项。如果服务正在运行，或者另一个进程具有服务的打开句柄，则会将服务标记为删除  |
|  `sc query`  |  获取并显示有关指定服务、驱动程序、服务类型或驱动程序类型的信息  |
|  `sc start`  |  启动服务  |
|  `sc stop`  |  向服务发送 STOP 请求  |

## 示例

例如：显示 eventlog 服务的状态。

```cmd
C:\Users\user>sc query eventlog

SERVICE_NAME: eventlog
        TYPE               : 30  WIN32
        STATE              : 4  RUNNING
                                (STOPPABLE, NOT_PAUSABLE, ACCEPTS_SHUTDOWN)
        WIN32_EXIT_CODE    : 0  (0x0)
        SERVICE_EXIT_CODE  : 0  (0x0)
        CHECKPOINT         : 0x0
        WAIT_HINT          : 0x0

E:\test>
```
