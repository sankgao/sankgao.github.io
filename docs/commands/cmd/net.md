---
title: net
icon: command
date: 2024-07-22
category: 命令集
tag:
    - CMD
---

## 描述

`net` 用于管理 Windows 中的网络服务，同时可以管理本地或者远程计算机的网络环境，并对服务程序进行配置，还可以对系统用户进行管理。Net 命令有很多函数用于与 NetBIOS 有关。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `/?`  |  在命令提示符下显示帮助  |

## 命令

|  命令  |  描述  |
|  :----:  |  :----  |
|  `accounts`  |  更新用户帐号数据库、更改密码及所有帐号的登录要求  |
|  `computer`  |  从域数据库中添加或删除计算机  |
|  `config`  |  显示当前运行的可配置服务，或显示并更改某项服务的设置  |
|  `continue`  |  重新激活挂起的服务  |
|  `file`  |  显示某服务器上所有打开的共享文件名及锁定文件数  |
|  `group`  |  在 Windows NT/2000/2003 Server 域中添加、显示或更改全局组  |
|  `help`  |  帮助命令，可以看到全部命令的使用方法  |
|  `helpmsg`  |  帮助消息  |
|  `localgroup`  |  添加、显示或更改本地组  |
|  `name`  |  添加或删除消息名（有时也称别名），或显示计算机接收消息的名称列表  |
|  `pause`  |  暂停正在运行的服务  |
|  `print`  |  显示或控制打印作业及打印队列  |
|  `send`  |  向网络的其他用户、计算机或通信名发送消息  |
|  `session`  |  列出或断开本地计算机和与之连接的客户端的会话  |
|  `share`  |  创建、删除或显示共享资源  |
|  `start`  |  启动服务，或显示已启动服务的列表  |
|  `statistics`  |  显示本地工作站或服务器服务的统计记录  |
|  `stop`  |  停止 Windows NT/2000/2003 网络服务  |
|  `time`  |  使计算机的时钟与另一台计算机或域的时间同步  |
|  `use`  |  连接计算机或断开计算机与共享资源的连接，或显示计算机的连接信息  |
|  `user`  |  添加或更改用户帐号或显示用户帐号信息  |
|  `view`  |  显示域列表、计算机列表或指定计算机的共享资源列表  |

## 示例

### net 帮助信息

例如：在命令提示符下显示帮助。

```cmd
C:\Users\user>net /?
此命令的语法是:

NET
    [ ACCOUNTS | COMPUTER | CONFIG | CONTINUE | FILE | GROUP | HELP |
      HELPMSG | LOCALGROUP | PAUSE | SESSION | SHARE | START |
      STATISTICS | STOP | TIME | USE | USER | VIEW ]

C:\Users\user>
```

### 显示指定命令帮助信息

例如：显示 `file` 命令的使用方法。

```cmd
C:\Users\user>net help file
此命令的语法是:

NET FILE
[id [/CLOSE]]

NET FILE 关闭共享文件并删除文件锁。使用时如果没有选项，它列出服务器上打开的文
件。该列表包括分配给打开文件的标识号、文件的路径名、用户名和文件的锁数量。

该命令仅在运行 Server 服务的计算机上运行。

id      为文件的标识号。
/CLOSE  关闭打开的文件并删除文件锁。从共享文件所在服务器键入该命令。

NET HELP 命令 | MORE 显示帮助，一次显示一屏。

C:\Users\user>
```
