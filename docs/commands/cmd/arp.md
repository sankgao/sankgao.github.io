---
title: arp
icon: command
date: 2024-07-22
category: 命令集
tag:
    - CMD
---

## 描述

`arp` 用于显示和修改地址解析协议（ARP）缓存中的条目。ARP 缓存包含一个或多个表，用于存储 IP 地址及其解析的以太网或令牌环物理地址。针对计算机上安装的每个以太网或令牌环网络适配器，都有一个单独的表。如果使用 `arp` 命令时不带参数，则将显示帮助信息。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `[/a [<inetaddr>] [/n <ifaceaddr>]`  |  显示所有接口的当前 arp 缓存表。`/n` 参数区分大小写。要显示特定 IP 地址的 arp 缓存条目，请将 arp `/a` 与 `inetaddr` 参数一起使用，其中 `inetaddr` 是 IP 地址。如果未指定 `inetaddr`，则使用第一个适用的接口。要显示特定接口的 arp 缓存表，请将 `/n ifaceaddr` 参数与 `/a` 参数结合使用，其中 `inetaddr` 是分配给接口的 IP 地址  |
|  `[/g [<inetaddr>] [/n <ifaceaddr>]`  |  等同于 `/a`  |
|  `[/d <inetaddr> [<ifaceaddr>]`  |  删除具有特定 IP 地址的条目，其中 `inetaddr` 是 IP 地址。要删除表中特定接口的条目，请使用 `ifaceaddr` 参数，其中 `ifaceaddr` 是分配给接口的 IP 地址。要删除所有条目，请使用星号（`*`）通配符代替 `inetaddr`  |
|  `[/s <inetaddr> <etheraddr> [<ifaceaddr>]`  |  向 arp 缓存添加一个静态条目，该条目将 IP 地址 `inetaddr` 解析为物理地址 `etheraddr`。要将静态 arp 缓存条目添加到特定接口的表中，请使用 `ifaceaddr` 参数，其中 `ifaceaddr` 是分配给接口的 IP 地址  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

### 显示指定接口的 arp 缓存表

例如：显示分配了 IP 地址 `10.0.0.99` 的接口的 arp 缓存表。

```cmd
C:\Users\user>arp /a /n 10.0.0.99
```

### 添加静态条目

例如：添加将 IP 地址 `10.0.0.80` 解析为物理地址 `00-AA-00-4F-2A-9C` 的静态 arp 缓存条目。

```cmd
C:\Users\user>arp /s 10.0.0.80 00-AA-00-4F-2A-9C
```
