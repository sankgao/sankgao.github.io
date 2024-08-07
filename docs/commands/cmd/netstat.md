---
title: netstat
icon: command
date: 2024-07-16
category: 命令集
tag:
    - CMD
---

## 描述

`tree` 用于显示活动的 TCP 连接数、计算机侦听的端口、以太网统计信息、IP 路由表、IPv4 统计信息（针对 IP、ICMP、TCP 和 UDP 协议），以及 IPv6 统计信息（针对 IPv6、ICMPv6、TCP over IPv6 和基于 IPv6 协议的 UDP）。在不使用参数的情况下，此命令会显示活动的 TCP 连接数。

::: tip
仅当 Internet 协议（TCP/IP）协议作为组件安装在网络连接的网络适配器的属性中时，此命令才可用。
:::

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-a`  |  显示所有活动的 TCP 连接数以及计算机正在侦听的 TCP 和 UDP 端口  |
|  `-e`  |  显示以太网统计信息，例如：发送和接收的字节数和数据包数。此参数可与 `-s` 一起使用  |
|  `-n`  |  显示活动的 TCP 连接数，但是，地址和端口号以数字表示，并且不会尝试确定名称  |
|  `/o`  |  显示活动的 TCP 连接数，并包括每个连接的进程 PID。此参数可与 `-s`、`-n` 和 `-p` 一起使用  |
|  `/p <Protocol>`  |  显示 Protocol 指定的协议的连接。Protocol 可以是 tcp、udp、tcpv6 或 udpv6。如果此参数与 `-s` 一起使用，则 Protocol 可以是 tcp、udp、icmp、ip、tcpv6、udpv6、icmpv6 或 ipv6  |
|  `/s`  |  按协议显示统计信息。默认情况下，会显示 TCP、UDP、ICMP 和 IP 协议的统计信息。如果安装了 IPv6 协议，则会显示基于 IPv6 的 TCP、UDP、ICMPv6 和 IPv6 协议的统计信息  |
|  `/r`  |  显示 IP 路由表的内容。这等效于 `route print` 命令  |
|  `<interval>`  |  每隔 `interval` 秒重新显示一次所选信息。按 CTRL+C 停止重新播放。如果省略此参数，此命令仅打印一次所选信息  |
|  `/?`  |  在命令提示符下显示帮助  |

指示 TCP 连接的状态：

- **ESTABLISHED**：表示两台机器之间的连接已经建立，并且正在进行数据传输
- **CLOSE_WAIT**：表示远程主机已经关闭了连接，但本地主机还没有关闭连接或完成关闭过程
- **TIME_WAIT**：表示本地主机已经关闭了连接，但是还在等待足够的时间以确保远程主机收到关闭连接的确认信息
- **LISTENING**：表示端口正在等待进入的连接
- **SYN_SENT**：表示本地主机已经发送了一个连接请求，正在等待匹配的连接请求
- **SYN_RECEIVED**：表示已从远程主机收到连接请求，并且本地已经发送了一个连接请求，正在等待对方的确认
- **FIN_WAIT_1**：表示本地主机已经决定关闭连接，并且已经发送了结束连接请求
- **FIN_WAIT_2**：表示本地主机已经收到远程主机的结束连接确认，并正在等待对方发送关闭连接请求
- **CLOSED**：表示连接已关闭或未打开

## 示例

例如：若要同时显示以太网统计信息和所有协议的统计信息。

```cmd
C:\Users\user>netstat -e -s
```

例如：若要仅显示 TCP 和 UDP 协议的统计信息。

```cmd
C:\Users\user>netstat -s -p tcp udp
```

例如：若要每 5 秒显示一次活动的 TCP 连接数和进程 ID。

```cmd
C:\Users\user>netstat -o 5
```

例如：若要使用数字形式显示所有活动的 TCP 连接数和进程 ID。

```cmd
C:\Users\user>netstat -a -n -o
```
