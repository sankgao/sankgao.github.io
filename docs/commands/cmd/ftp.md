---
title: ftp
icon: command
date: 2024-07-17
category: 命令集
tag:
    - CMD
---

## 描述

`ftp` 用于在运行文件传输协议（`ftp`）服务器服务的计算机之间双向传输文件。此命令可以通过处理 ASCII 文本文件以交互方式或批处理方式使用。

- `ftp` 命令行参数区分大小写
- 仅当 Internet 协议（TCP/IP）协议作为组件安装在网络连接的网络适配器的属性中时，此命令才可用
- `ftp` 命令可以交互使用。启动之后，`ftp` 会创建一个子环境，你可以在其中使用 `ftp` 命令。可以键入 `quit` 命令返回到命令提示符。当 `ftp` 子环境正在运行时，`ftp>` 命令提示符会表明这一点
- 安装了 IPv6 协议时，`ftp` 命令支持使用 IPv6

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-a`  |  指定在绑定 FTP 数据连接时可以使用任何本地接口  |
|  `-i`  |  关闭多文件传输过程中的交互式提示  |
|  `-n`  |  以匿名身份登录到 FTP 服务器  |
|  `-v`  |  禁止显示远程服务器响应  |
|  `-v`  |  禁止显示远程服务器响应  |
|  `-s:filename`  |  指定包含 FTP 命令的文本文件；命令在 FTP 启动后自动运行  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

例如：登录到 `192.168.10.10` FTP 服务器。

```cmd
E:\test>ftp 192.168.10.10
连接到 192.168.10.10。
220 Microsoft FTP Service
200 OPTS UTF8 command successful - UTF8 encoding now ON.
用户(192.168.10.10:(none)): username
331 Password required
密码:

230 User logged in.
ftp>
```
