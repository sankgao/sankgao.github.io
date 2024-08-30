---
title: netsh
icon: command
date: 2024-08-30
category: 命令集
tag:
    - CMD
---

## 描述

`netsh` Network Shell 是命令行脚本实用工具，可让您以本地或远程方式显示或修改当前正在运行的计算机的网络配置。可以在命令提示符处或在 Windows PowerShell 中启动此实用工具。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-a <aliasfile>`  |  指定在运行 Aliasfile 后返回到 `netsh` 提示符，并指定包含一个或多个 `netsh` 命令的文本文件的名称  |
|  `-c <Context>`  |  指定 `netsh` 输入指定的 `netsh` 上下文和要输入的 `netsh` 上下文  |
|  `-r <Remotecomputer>`  |  指定要配置的远程计算机</br> 重要提示：如果使用此参数，必须确保远程注册表服务在远程计算机上运行。如果未运行，Windows 将显示 “找不到网络路径” 错误消息  |
|  `-u <domainname>\<username>`  |  指定在用户帐户下运行 `netsh` 命令时要使用的域和用户帐户名称。如果省略域，则默认使用本地域  |
|  `-p <Password>`  |  指定 `-u <username>` 参数指定的用户帐户的密码  |
|  `<NetshCommand>`  |  指定要运行的 `netsh` 命令  |
|  `-f <scriptfile>`  |  运行指定的脚本文件后退出 `netsh` 命令  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

### netsh 帮助信息

例如：在命令提示符下显示帮助。

```cmd
C:\Users\user>netsh /?

用法: netsh [-a AliasFile] [-c Context] [-r RemoteMachine] [-u [DomainName\]UserName] [-p Password | *]
             [Command | -f ScriptFile]

下列指令有效:

此上下文中的命令:
?              - 显示命令列表。
add            - 在项目列表上添加一个配置项目。
advfirewall    - 更改到 `netsh advfirewall' 上下文。
branchcache    - 更改到 `netsh branchcache' 上下文。
bridge         - 更改到 `netsh bridge' 上下文。
delete         - 在项目列表上删除一个配置项目。
dhcpclient     - 更改到 `netsh dhcpclient' 上下文。
dnsclient      - 更改到 `netsh dnsclient' 上下文。
dump           - 显示一个配置脚本。
exec           - 运行一个脚本文件。
firewall       - 更改到 `netsh firewall' 上下文。
help           - 显示命令列表。
http           - 更改到 `netsh http' 上下文。
interface      - 更改到 `netsh interface' 上下文。
ipsec          - 更改到 `netsh ipsec' 上下文。
lan            - 更改到 `netsh lan' 上下文。
mbn            - 更改到 `netsh mbn' 上下文。
namespace      - 更改到 `netsh namespace' 上下文。
netio          - 更改到 `netsh netio' 上下文。
p2p            - 更改到 `netsh p2p' 上下文。
ras            - 更改到 `netsh ras' 上下文。
rpc            - 更改到 `netsh rpc' 上下文。
set            - 更新配置设置。
show           - 显示信息。
trace          - 更改到 `netsh trace' 上下文。
wcn            - 更改到 `netsh wcn' 上下文。
wfp            - 更改到 `netsh wfp' 上下文。
winhttp        - 更改到 `netsh winhttp' 上下文。
winsock        - 更改到 `netsh winsock' 上下文。
wlan           - 更改到 `netsh wlan' 上下文。

下列的子上下文可用:
 advfirewall branchcache bridge dhcpclient dnsclient firewall http interface ipsec lan mbn namespace netio p2p ras rpc trace wcn wfp winhttp winsock wlan

若需要命令的更多帮助信息，请键入命令，接着是空格，
后面跟 ?。

C:\Users\user>
```

### 显示指定命令帮助信息

例如：显示 `wlan` 命令的使用方法。

```cmd
C:\Users\user>netsh wlan /?

下列指令有效:

此上下文中的命令:
?              - 显示命令列表。
add            - 在一个表格中添加一个配置项。
connect        - 连接到无线网络。
delete         - 从一个表格中删除一个配置项。
disconnect     - 从无线网络断开连接。
dump           - 显示一个配置脚本。
export         - 将 WLAN 配置文件保存为 XML 文件。
help           - 显示命令列表。
IHV            - 用于 IHV 记录的命令。
refresh        - 刷新承载网络设置。
reportissues   - 生成 WLAN 智能跟踪报告。
set            - 设置配置信息。
show           - 显示信息。
start          - 启动承载网络。
stop           - 停止承载网络。

若需要命令的更多帮助信息，请键入命令，接着是空格，
后面跟 ?。


C:\Users\user>
```

### net wlan

例如：列出所有存储的 Wi-Fi 配置文件。

```cmd
C:\Users\user>netsh wlan show profiles
```

例如：查看 Wi-Fi 密码。

```cmd
C:\Users\user>netsh wlan show profile name="NetworkName" key=clear
```

例如：显示无线网络适配器的详细信息。

```cmd
C:\Users\user>netsh wlan show interface
```

例如：删除特定的 Wi-Fi 网络记录。

```cmd
C:\Users\user>netsh wlan delete profile name="NetworkName"
```
