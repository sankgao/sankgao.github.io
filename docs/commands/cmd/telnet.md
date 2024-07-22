---
title: telnet
icon: command
date: 2024-07-22
category: 命令集
tag:
    - CMD
---

## 描述

`telnet` 用于与运行 telnet 服务器服务的计算机通信。在不带任何参数的情况下运行此命令即可进入 telnet 上下文，如：telnet 提示符（`Microsoft telnet>`）所示。在 telnet 提示符下，可以使用 `telnet` 命令来管理运行 telnet 客户端的计算机。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `/a`  |  尝试自动登录。与 `/l` 选项相同，只不过它使用当前登录的用户名  |
|  `/f <filename>`  |  指定用于客户端日志记录的文件名  |
|  `/l`  |  指定要在远程计算机上登录的用户名  |
|  `<host> [<port>]`  |  指定要连接到的远程计算机的主机名或 IP 地址，可以选择要使用的 TCP 端口（默认为 TCP 端口 `23`）  |
|  `/?`  |  在命令提示符下显示帮助  |

## 命令

|  命令  |  描述  |
|  :----:  |  :----  |
|  `close` 简写 `c`  |  关闭当前连接  |
|  `display` 简写 `d`  |  显示操作参数  |
|  `open` 简写 `o`  |  连接到 telnet 服务器  |
|  `quit` 简写 `q`  |  退出 telnet  |
|  `send` 简写 `sen`  |  将 `telnet` 命令发送到 telnet 服务器  |
|  `set` 简写 `set`  |  设置选项  |
|  `status` 简写 `st`  |  显示状态信息  |
|  `unset` 简写 `u`  |  关闭以前设置的选项  |

## 示例

例如：进入 telnet 上下文。

```cmd
C:\Users\user>telnet
欢迎使用 Microsoft Telnet Client

Escape 字符为 'CTRL+]'

Microsoft Telnet>
```
