---
title: ipconfig
icon: command
date: 2024-07-16
category: 命令集
tag:
    - CMD
---

## 描述

`ipconfig` 用于显示所有当前的 TCP/IP 网络配置值，并刷新动态主机配置协议（DHCP）和域名系统（DNS）设置。在没有参数的情况下使用时，`ipconfig` 会显示 Internet IPv4 和 IPv6 地址、子网掩码以及所有适配器的默认网关。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `/all`  |  显示所有适配器的完整 TCP/IP 配置。适配器可表示物理接口（例如：已安装的网络适配器）或逻辑接口（如：拨号连接）  |
|  `/flushdns`  |  刷新和重置 DNS 客户端解析程序缓存的内容  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

例如：显示所有适配器的基本 TCP/IP 配置。

```cmd
C:\Users\user>ipconfig

Windows IP 配置


以太网适配器 以太网:

   连接特定的 DNS 后缀 . . . . . . . :
   本地链接 IPv6 地址. . . . . . . . : fe80::d003:479e:9df0:259d%19
   IPv4 地址 . . . . . . . . . . . . : 192.168.10.12
   子网掩码  . . . . . . . . . . . . : 255.255.255.0
   默认网关. . . . . . . . . . . . . : 192.168.10.1
// ...省略部分内容

C:\Users\user>
```

例如：刷新 DNS 解析器缓存。

```cmd
C:\Users\user>ipconfig /flushdns

Windows IP 配置

已成功刷新 DNS 解析缓存。

C:\Users\user>
```
