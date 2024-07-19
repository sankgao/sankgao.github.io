---
title: ftp
icon: command
date: 2024-07-17
category: 命令集
tag:
    - CMD
---

## 描述

`ftp` 用于在运行文件传输协议（FTP）服务器服务的计算机之间双向传输文件。此命令可以通过处理 ASCII 文本文件以交互方式或批处理方式使用。

- `ftp` 命令行参数区分大小写
- 仅当 Internet 协议（TCP/IP）协议作为组件安装在网络连接的网络适配器的属性中时，此命令才可用
- `ftp` 命令可以交互使用。启动之后，FTP 会创建一个子环境，您可以在其中使用 `ftp` 命令。可以键入 `quit` 命令返回到命令提示符。当 FTP 子环境正在运行时，`ftp>` 命令提示符会表明这一点
- 安装了 IPv6 协议时，`ftp` 命令支持使用 IPv6

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-a`  |  指定在绑定 FTP 数据连接时可以使用任何本地接口  |
|  `-i`  |  关闭多文件传输过程中的交互式提示  |
|  `-n`  |  以匿名身份登录到 FTP 远程服务器  |
|  `-v`  |  禁止显示远程服务器响应  |
|  `-v`  |  禁止显示远程服务器响应  |
|  `-s:filename`  |  指定包含 `ftp` 命令的文本文件；命令在 FTP 服务启动后自动运行  |
|  `/?`  |  在命令提示符下显示帮助  |

## 命令

|  命令  |  描述  |
|  :----:  |  :----  |
|  [append](#append)  |  将本地文件内容追加到远程服务器指定文件中  |
|  [bye 或 quit](#bye-或-quit)  |  结束远程服务器上的 FTP 会话，然后退出  |
|  [cd](#cd)  |  更改远程服务器上的工作目录  |
|  [close](#close)  |  结束与远程服务器的 FTP 会话并保持在 `ftp>` 提示符处  |
|  [debug](#debug)  |  切换调试模式。默认情况下，调试模式处于关闭状态。如果 “调试模式”处于打开状态，您将看到每个命令都发送到远程服务器，前面带 `>` 字符  |
|  [delete](#delete)  |  删除远程服务器上的文件，一次只能删除一个文件  |
|  [dir](#dir)  |  显示 FTP 远程服务器指定目录中文件和子目录的详细列表，只能指定一个目录  |
|  [disconnect](#disconnect)  |  断开与远程服务器的连接，并留在 `ftp>` 提示符  |
|  [get 或 recv](#get-或-recv)  |  使用当前文件传输类型将远程文件复制到本地计算机，一次只能复制一个文件  |
|  [lcd](#lcd)  |  更改本地计算机上的工作目录。默认情况下，工作目录是启动 `ftp` 命令的目录  |
|  [ls](#ls)  |  显示 FTP 远程服务器指定目录中文件和子目录的缩略列表  |
|  [mdelete](#mdelete)  |  删除远程服务器上的文件。可以一次删除多个文件，只能删除当前目录下的文件  |
|  [mdir](#mdir)  |  显示 FTP 远程服务器指定目录中文件和子目录的详细列表。可以一次显示一个或多个目录，如果不将结果保存到本地文件中，必须以连字符（`-`）结尾  |
|  [mget](#mget)  |  使用当前文件传输类型将远程文件复制到本地计算机。可以一次复制一个或多个文件，但需要提前切换到要复制的本地目录中，且不能修改文件名  |
|  [mkdir](#mkdir)  |  在 FTP 远程服务器中创建目录，一次只能创建一个目录  |
|  [mls](#mls)  |  显示 FTP 远程服务器指定目录中文件和子目录的缩略列表。可以一次显示一个或多个目录，如果不将结果保存到本地文件中，必须以连字符（`-`）结尾  |
|  [mput](#mput)  |  使用当前文件传输类型将本地文件复制到远程服务器。可以一次复制一个或多个文件，但需要提前切换到要复制的远程服务器目录中，且不能修改文件名  |
|  [open](#open)  |  连接到指定的 FTP 远程服务器  |
|  [prompt](#prompt)  |  打开和关闭 “提示” 模式。默认情况下，“提示” 模式处于打开状态。如果打开 “提示” 模式，`ftp` 命令会在传输多个文件期间提示，允许您有选择性地检索或存储文件  |
|  [put 或 send](#put-或-send)  |  使用当前文件传输类型将本地文件复制到远程服务器。一次只能复制一个文件  |
|  [pwd](#pwd)  |  显示当前远程服务器目录  |
|  [remotehelp](#remotehelp)  |  显示远程命令的帮助  |
|  [rename](#rename)  |  重命名远程文件  |
|  [rmdir](#rmdir)  |  删除远程目录，只能删除空目录  |
|  [status](#status)  |  显示 FTP 连接的当前状态  |
|  [type](#type)  |  设置或显示文件传输类型  |
|  [user](#user)  |  指定远程服务器的用户及密码  |
|  [verbose](#verbose)  |  切换详细模式。默认情况下，详细模式处于打开状态。启用详细模式时，将显示所有 `ftp` 命令响应。当文件传输完成时，还会显示有关传输效率的统计信息  |
|  [help](#help)  |  显示 `ftp` 命令的帮助  |

## 示例

### 登录服务器

例如：登录到 `192.168.10.10` FTP 远程服务器。

查看当前 `E:\ftp` 目录：

```cmd
E:\ftp>dir /b

E:\ftp> 
```

从当前 `E:\ftp` 目录登录到 FTP 远程服务器。

```cmd
E:\ftp>ftp 192.168.10.10
连接到 192.168.10.10。
220 Microsoft FTP Service
200 OPTS UTF8 command successful - UTF8 encoding now ON.
用户(192.168.10.10:(none)): username
331 Password required
密码:

230 User logged in.
ftp> 
```

### open

如果只输入 `ftp` 命令则会进入到 FTP 子环境中，使用 `open` 命令可以连接到指定 FTP 远程服务器。

例如：连接到 `192.168.10.10` FTP 远程服务器。

```cmd
E:\ftp>ftp
ftp> open 192.168.10.10
连接到 192.168.10.10。
220 Microsoft FTP Service
200 OPTS UTF8 command successful - UTF8 encoding now ON.
用户(192.168.10.10:(none)): username
331 Password required
密码:

230 User logged in.
ftp> 
```

### user

例如：如果已经连接到远程服务器，但还没有登录，可以使用 `user` 命令进行登录。

```cmd
ftp> open 192.168.10.10
连接到 192.168.10.10。
220 Microsoft FTP Service
200 OPTS UTF8 command successful - UTF8 encoding now ON.
用户(192.168.10.10:(none)):
501 Invalid number of parameters.
登录失败。
ftp> 
ftp> ls
530 Please login with USER and PASS.
530 Please login with USER and PASS.
ftp> 
```

使用 `user` 命令进行登录。

```cmd
ftp> user username password
331 Password required
230 User logged in.
ftp> 
```

### status

例如：显示 ftp 连接的当前状态。

```cmd
ftp> status
连接到 192.168.10.10。
类型: ascii；详细: 开 ；铃声: 关 ；提示: 开 ；通配: 开
调试: 关 ；哈希标记打印: 关 。
ftp> 
```

### type

ftp 命令支持 ASCII（默认）和二进制（`binary`）映像文件传输类型：

- 建议在传输文本文件时使用 ASCII。在 ASCII 模式下，将执行与网络标准字符集之间的字符转换。例如：根据目标操作系统，在必要时转换行尾字符
- 建议在传输可执行文件时使用二进制。在二进制模式下，文件以单字节为单位传输

例如：设置为二进制文件传输类型，并查看当前文件传输类型。

```cmd
ftp> type binary
200 Type set to I.
ftp> 
ftp> type
使用 binary 模式传送文件。
ftp> 
```

例如：设置为 ASCII 文件传输类型，并查看当前文件传输类型。

```cmd
ftp> type ascii
200 Type set to A.
ftp> 
ftp> type
使用 ascii 模式传送文件。
ftp> 
```

### pwd

例如：显示当前 FTP 远程服务器工作目录。

```cmd
ftp> pwd
257 "/" is current directory.
ftp> 
```

`/` 表示当前位于远程服务器的根目录。

### dir

显示 FTP 远程服务器指定工作目录中文件和子目录的详细列表。

- 只能指定一个远程工作目录
- 如果未指定工作目录，则使用远程服务器中的当前工作目录
- 保存到的本地文件可以不存在
- 可以提前切换到要保存的本地工作目录中，这样可以不用指定本地工作目录的绝对路径，直接指定文件名即可

例如：显示远程服务器根目录中文件和子目录的详细列表。

```cmd
ftp> dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  04:46PM                    4 file.txt
07-18-24  07:39PM                   11 hello.txt
07-19-24  04:56PM       <DIR>          test01
226 Transfer complete.
ftp: 收到 149 字节，用时 0.00秒 49.67千字节/秒。
ftp> 
```

例如：将远程服务器根目录的详细列表保存在本地 `D:\ftp\dirlist.txt` 文件中。

```cmd
ftp> dir / D:\ftp\dirlist.txt
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 收到 146 字节，用时 0.00秒 146000.00千字节/秒。
ftp>
```

查看本地 `D:\ftp\dirlist.txt` 文件内容：

```cmd
D:\ftp>type dirlist.txt
07-19-24  04:46PM                    4 file.txt
07-18-24  07:39PM                   11 hello.txt
07-19-24  04:56PM       <DIR>          test01

D:\ftp>
```

### mdir

显示 FTP 远程服务器指定工作目录中文件和子目录的详细列表。

- 可以一次显示一个或多个远程工作目录
- 如果不将结果保存到本地文件中，必须以连字符（`-`）结尾
- 保存到的本地文件可以不存在
- 可以提前切换到要保存的本地工作目录中，这样可以不用指定本地工作目录的绝对路径，直接指定文件名即可

例如：显示远程服务器中 `hello.txt` 文件和 `test01` 工作目录下文件的详细列表。

```cmd
ftp> mdir hello.txt test01 -
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-18-24  07:39PM                   11 hello.txt
226 Transfer complete.
ftp: 收到 53 字节，用时 0.00秒 53.00千字节/秒。
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  04:46PM                    6 test01.txt
07-19-24  04:47PM                    6 test02.txt
226 Transfer complete.
ftp: 收到 105 字节，用时 0.00秒 52.50千字节/秒。
ftp> 
```

::: warning
如果使用 `mdir` 命令不以连字符（`-`）结尾，且最后一个文件或目录不存在本地工作目录，则最后一个文件或目录默认指定为保存在本地工作目录的文件名：

```cmd
ftp> mdir hello.txt test01
output to local-file: test01? y
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 收到 50 字节，用时 0.00秒 50000.00千字节/秒。
ftp> 
```

查看本地 `test01` 文件内容，只保存了前一个远程服务器的文件信息：

```cmd
E:\ftp>type test01
07-18-24  07:39PM                   11 hello.txt

E:\ftp> 
```

先删除 `E:\ftp` 目录下的 `test01` 文件再创建 `test01` 目录，否则创建 `test01` 目录失败：

```cmd
E:\ftp>dir
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\ftp 的目录

2024/07/19  17:13    <DIR>          .
2024/07/19  17:13    <DIR>          ..
2024/07/19  17:13                51 test01
               1 个文件             51 字节
               2 个目录 697,204,674,560 可用字节

E:\ftp>
E:\ftp>md test01
子目录或文件 test01 已经存在。

E:\ftp>
E:\ftp>del test01

E:\ftp>md test01

E:\ftp>dir
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\ftp 的目录

2024/07/19  17:14    <DIR>          .
2024/07/19  17:14    <DIR>          ..
2024/07/19  17:14    <DIR>          test01
               0 个文件              0 字节
               3 个目录 697,204,674,560 可用字节

E:\ftp>
```

如果使用 `mdir` 命令不以连字符（`-`）结尾，且最后一个文件或目录已存在本地工作目录，则会报以下错误：

```cmd
ftp> mdir hello.txt test01
output to local-file: test01? y
200 PORT command successful.
打开本地文件 test01 出错。
> t:权限被拒绝
ftp> 
```

:::

### ls

显示 FTP 远程服务器指定工作目录中文件和子目录的缩略列表。

- 只能指定一个远程工作目录
- 如果未指定工作目录，则使用远程服务器中的当前工作目录
- 保存到的本地文件可以不存在
- 可以提前切换到要保存的本地工作目录中，这样可以不用指定本地工作目录的绝对路径，直接指定文件名即可

例如：显示远程服务器根目录中文件和子目录的缩略列表。

```cmd
ftp> ls
200 PORT command successful.
125 Data connection already open; Transfer starting.
file.txt
hello.txt
test01
226 Transfer complete.
ftp: 收到 32 字节，用时 0.00秒 32.00千字节/秒。
ftp>
```

例如：将远程服务器根目录的缩略列表保存在本地 `D:\ftp\lslist.txt` 文件中。

```cmd
ftp> ls / D:\ftp\lslist.txt
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 收到 32 字节，用时 0.00秒 32000.00千字节/秒。
ftp> 
```

查看本地 `D:\ftp\lslist.txt` 文件内容：

```cmd
D:\ftp>type lslist.txt
/file.txt
/hello.txt
/test01

D:\ftp>
```

### mls

显示 FTP 远程服务器指定工作目录中文件和子目录的缩略列表。

- 可以一次显示一个或多个远程工作目录
- 如果不将结果保存到本地文件中，必须以连字符（`-`）结尾
- 保存到的本地文件可以不存在
- 可以提前切换到要保存的本地工作目录中，这样可以不用指定本地工作目录的绝对路径，直接指定文件名即可

例如：显示远程服务器中 `hello.txt` 文件和 `test01` 工作目录下文件的缩略列表。

```cmd
ftp> mls hello.txt test01 -
200 PORT command successful.
125 Data connection already open; Transfer starting.
hello.txt
226 Transfer complete.
ftp: 收到 14 字节，用时 0.00秒 14000.00千字节/秒。
200 PORT command successful.
125 Data connection already open; Transfer starting.
test01.txt
test02.txt
226 Transfer complete.
ftp: 收到 27 字节，用时 0.00秒 27.00千字节/秒。
ftp> 
```

::: warning
如果使用 `mls` 命令不以连字符（`-`）结尾，和使用 [mdir](#mdir) 命令不以连字符（`-`）结尾效果一样。
:::

### cd

更改 FTP 远程服务器中的工作目录。

例如：切换到远程服务器的 `test01` 工作目录。

```cmd
ftp> pwd
257 "/" is current directory.
ftp> 
ftp> cd test01
250 CWD command successful.
ftp> 
ftp> pwd
257 "/test01" is current directory.
ftp> 
```

例如：切换到远程服务器的上一级工作目录。

```cmd
ftp> cd ../
250 CWD command successful.
ftp>
ftp> pwd
257 "/" is current directory.
ftp> 
```

### lcd

更改本地工作目录。默认情况下，本地工作目录是启动 `ftp` 命令的目录。

例如：在 FTP 子环境中切换到本地 `D:\ftp` 工作目录。

查看当前本地工作目录：

```cmd
ftp> lcd
目前的本地目录 E:\ftp。
ftp> 
```

切换到本地 `D:\ftp` 工作目录：

```cmd
ftp> lcd D:\ftp
目前的本地目录 D:\ftp。
ftp> 
```

再次执行 `lcd` 命令，切换回启动 `ftp` 命令的工作目录：

```cmd
ftp> lcd
目前的本地目录 E:\ftp。
ftp> 
```

### mkdir

在 FTP 远程服务器中创建工作目录。

- 一次只能创建一个工作目录
- 如果创建多个工作目录（如：`mkdir a b c`），只会创建第一个工作目录（`a`），其它工作目录（`b 和 c`）不会创建
- 不能创建递归工作目录（如：`mkdir a\b\c`）

例如：在远程服务器根目录中创建 `test02` 工作目录。

查看远程服务器根目录：

```cmd
ftp> pwd
257 "/" is current directory.
ftp> 
ftp> dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  04:46PM                    4 file.txt
07-18-24  07:39PM                   11 hello.txt
07-19-24  04:56PM       <DIR>          test01
226 Transfer complete.
ftp: 收到 149 字节，用时 0.00秒 49.67千字节/秒。
ftp> 
```

在远程服务器根目录中创建 `test02` 工作目录：

```cmd
ftp> mkdir test02
257 "test02" directory created.
ftp> 
```

再次查看远程服务器根目录，`test02` 工作目录已存在：

```cmd
ftp> pwd
257 "/" is current directory.
ftp> 
ftp> dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  04:46PM                    4 file.txt
07-18-24  07:39PM                   11 hello.txt
07-19-24  04:56PM       <DIR>          test01
07-19-24  05:34PM       <DIR>          test02
226 Transfer complete.
ftp: 收到 196 字节，用时 0.01秒 28.00千字节/秒。
ftp> 
```

::: warning
如果使用 `mkdir` 命令创建递归工作目录，则会报以下错误：

```cmd
ftp> mkdir a/b/c
550-The system cannot find the path specified.
 Win32 error:   The system cannot find the path specified.
 Error details: File system returned an error.
550 End
ftp> 
```

:::

### get 或 recv

使用当前文件传输类型将 FTP 远程服务器中的指定文件复制到本地指定工作目录中。

- 一次只能复制一个远程文件
- 如果指定本地工作目录，则必须指定文件名；如果未指定本地工作目录，则默认复制到当前本地工作目录中
- 本地文件名可以和远程文件名不同
- 可以提前切换到要复制的本地工作目录中，这样可以不用指定本地工作目录的绝对路径，直接指定文件名即可
- 如果要复制到当前本地工作目录且文件名不变，则可以省略文件名（如：`get hello.txt hello.txt` 可以简写为 `get hello.txt`）

例如：将远程根目录下的 `hello.txt` 文件复制到本地 `D:\ftp\test` 工作目录下，并指定文件名为 `hello01.txt`。

查看本地 `D:\ftp\test` 工作目录：

```cmd
D:\ftp>dir /b test
test.txt

D:\ftp>
```

将远程根目录下的 `hello.txt` 文件复制到本地 `D:\ftp\test` 工作目录下，并指定文件名为 `hello01.txt`：

```cmd
ftp> get hello.txt D:\ftp\test\hello01.txt
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 收到 11 字节，用时 0.00秒 11000.00千字节/秒。
ftp>
```

再次查看本地 `D:\ftp\test` 工作目录，`hello01.txt` 文件已存在：

```cmd
D:\ftp>dir /b test
hello01.txt
test.txt

D:\ftp>
```

::: warning
如果使用 `get` 或 `recv` 命令只指定本地工作目录路径不指定文件名，则会报以下错误：

```cmd
ftp> get hello.txt D:\ftp\test
200 PORT command successful.
打开本地文件 D:\ftp\test 出错。
> D:未知错误编号
ftp> 
```

:::

### mget

使用当前文件传输类型将 FTP 远程服务器中的指定文件复制到本地指定工作目录中。

- 可以一次复制一个或多个文件
- 不能指定本地工作目录，需要提前切换到要复制的本地工作目录中。默认复制到当前的本地工作目录
- 不能修改本地文件名
- 可以指定远程工作目录（如：`mget test01/`），指定远程工作目录时，可以对目录中的文件依次选择是否要复制
- 不能指定远程工作目录下的某一个文件（如：`mget test01/test01.txt`）

例如：将远程根目录下的 `file.txt` 文件和 `test01` 工作目录下的 `test01.txt` 文件复制到本地 `D:\ftp\test` 工作目录下。

查看本地 `D:\ftp\test` 工作目录：

```cmd
D:\ftp>dir /b test
hello01.txt
test.txt

D:\ftp>
```

先切换到要复制的本地 `D:\ftp\test` 工作目录中：

```cmd
ftp> lcd
目前的本地目录 E:\ftp。
ftp> 
ftp> lcd D:\ftp\test
目前的本地目录 D:\ftp\test。
ftp> 
```

将远程根目录下的 `file.txt` 文件和 `test01` 工作目录下的 `test01.txt` 文件复制到本地 `D:\ftp\test` 工作目录下：

```cmd
ftp> mget file.txt test01/
200 Type set to A.
mget file.txt? y
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 收到 4 字节，用时 0.00秒 4.00千字节/秒。
mget test01/test01.txt? y
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 收到 6 字节，用时 0.00秒 6000.00千字节/秒。
mget test01/test02.txt? n
ftp> 
```

再次查看本地 `D:\ftp\test` 目录，`file.txt` 和 `test01.txt` 文件已存在：

```cmd
D:\ftp>dir /b test\
file.txt
hello01.txt
test.txt
test01.txt

D:\ftp>
```

### put 或 send

使用当前文件传输类型将本地工作目录中指定文件复制到 FTP 远程服务器指定工作目录中。

- 一次只能复制一个远程文件
- 如果指定远程工作目录，则必须指定文件名；如果未指定远程工作目录，则默认复制到当前远程工作目录中
- 远程文件名可以和本地文件名不同
- 可以提前切换到本地工作目录中，这样可以不用指定本地工作目录的绝对路径，直接指定文件名即可
- 如果要复制到当前远程工作目录且文件名不变，则可以省略文件名（如：`put dirlist.txt dirlist.txt` 可以简写为 `put dirlist.txt`）

例如：将本地 `D:\ftp\dirlist.txt` 文件复制到远程服务器根目录中，并指定文件名为 `dirlist01.txt`。

查看远程服务器根目录：

```cmd
ftp> pwd
257 "/" is current directory.
ftp> 
ftp> dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  04:46PM                    4 file.txt
07-18-24  07:39PM                   11 hello.txt
07-19-24  04:56PM       <DIR>          test01
07-19-24  05:34PM       <DIR>          test02
226 Transfer complete.
ftp: 收到 196 字节，用时 0.01秒 39.20千字节/秒。
ftp> 
```

将本地 `D:\ftp` 工作目录下的 `dirlist.txt` 文件复制到远程服务器根目录中，并指定文件名为 `dirlist01.txt`：

```cmd
ftp> lcd D:\ftp
目前的本地目录 D:\ftp。
ftp> 
ftp> put dirlist.txt dirlist01.txt
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 发送 146 字节，用时 0.00秒 146000.00千字节/秒。
ftp> 
```

再次查看远程服务器根目录，`dirlist01.txt` 文件已存在：

```cmd
ftp> pwd
257 "/" is current directory.
ftp> 
ftp> dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  06:07PM                  146 dirlist01.txt
07-19-24  04:46PM                    4 file.txt
07-18-24  07:39PM                   11 hello.txt
07-19-24  04:56PM       <DIR>          test01
07-19-24  05:34PM       <DIR>          test02
226 Transfer complete.
ftp: 收到 250 字节，用时 0.01秒 41.67千字节/秒。
ftp> 
```

::: warning
如果使用 `put` 或 `send` 命令只指定远程服务器工作目录路径不指定文件名，则会报以下错误：

```cmd
ftp> put D:\ftp\dirlist.txt ./
200 PORT command successful.
550-Access is denied.
 Win32 error:   Access is denied.
 Error details: Write access for the root of the virtual directory is forbidden.
550 End
ftp> 
```

:::

### mput

使用当前文件传输类型将本地工作目录中指定文件复制到 FTP 远程服务器指定工作目录中。

- 可以一次复制一个或多个文件
- 不能指定远程服务器工作目录，需要提前切换到要复制的远程服务器工作目录中。默认复制到当前的本地工作目录
- 不能修改远程文件名
- 不能指定本地工作目录（如：`mput test/`）
- 可以指定远程工作目录下的某一个文件（如：`mput test/test.txt`）

例如：将本地 `D:\ftp` 工作目录下的 `dirlist.txt` 文件和 `test` 工作目录下的 `test.txt` 文件复制到远程服务器 `test01` 工作目录中。

查看远程服务器 `test01` 工作目录：

```cmd
ftp> dir test01
200 PORT command successful.
150 Opening ASCII mode data connection.
07-19-24  04:46PM                    6 test01.txt
07-19-24  04:47PM                    6 test02.txt
226 Transfer complete.
ftp: 收到 105 字节，用时 0.01秒 13.13千字节/秒。
ftp> 
```

切换到远程服务器 `test01` 工作目录中：

```cmd
ftp> cd test01
250 CWD command successful.
ftp> 
ftp> pwd
257 "/test01" is current directory.
ftp> 
```

将本地 `D:\ftp` 工作目录下的 `dirlist.txt` 文件和 `test` 目录下的 `test.txt` 文件复制到远程服务器 `test01` 工作目录中：

```cmd
ftp> lcd D:\ftp
目前的本地目录 D:\ftp。
ftp> 
ftp> mput dirlist.txt test\test.txt
mput dirlist.txt? y
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 发送 146 字节，用时 0.00秒 146.00千字节/秒。
mput test\test.txt? y
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 发送 4 字节，用时 0.00秒 4000.00千字节/秒。
ftp> 
```

再次查看远程服务器 `test01` 工作目录，`dirlist.txt` 和 `test.txt` 文件已存在：

```cmd
ftp> pwd
257 "/test01" is current directory.
ftp> 
ftp> dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  06:33PM                  146 dirlist.txt
07-19-24  06:33PM                    4 test.txt
07-19-24  04:46PM                    6 test01.txt
07-19-24  04:47PM                    6 test02.txt
226 Transfer complete.
ftp: 收到 206 字节，用时 0.00秒 51.50千字节/秒。
ftp> 
```

### prompt

打开和关闭 “提示” 模式。默认情况下，“提示” 模式处于打开状态。如果打开 “提示” 模式，`ftp` 命令会在传输多个文件期间提示，允许您有选择性地检索或存储文件。

“提示” 模式处于关闭状态时，可以使用 [mget](#mget) 和 [mput](#mput) 命令传输所有文件。

例如：关闭 “提示” 模式，将本地 `D:\ftp` 工作目录下的 `dirlist.txt` 和 `lslist.txt` 文件复制到远程服务器 `test02` 工作目录中。

查看远程服务器 `test02` 工作目录：

```cmd
ftp> pwd
257 "/test01" is current directory.
ftp> 
ftp> cd /
250 CWD command successful.
ftp> 
ftp> dir test02
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp> 
```

切换到远程服务器 `test02` 工作目录中：

```cmd
ftp> cd test02
250 CWD command successful.
ftp> 
ftp> pwd
257 "/test02" is current directory.
ftp> 
```

关闭 “提示” 模式：

```cmd
ftp> prompt
交互模式 关 。
ftp> 
```

将本地 `D:\ftp` 工作目录下的 `dirlist.txt` 和 `lslist.txt` 文件复制到远程服务器 `test02` 工作目录中：

```cmd
ftp> lcd D:\ftp
目前的本地目录 D:\ftp。
ftp> 
ftp> mput dirlist.txt lslist.txt
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 发送 146 字节，用时 0.00秒 146000.00千字节/秒。
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 发送 35 字节，用时 0.00秒 35000.00千字节/秒。
ftp> 
```

再次查看远程服务器 `test02` 工作目录：

```cmd
ftp> pwd
257 "/test02" is current directory.
ftp> 
ftp> dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  06:44PM                  146 dirlist.txt
07-19-24  06:44PM                   35 lslist.txt
226 Transfer complete.
ftp: 收到 106 字节，用时 0.00秒 35.33千字节/秒。
ftp> 
```

例如：打开 “提示” 模式。

```cmd
ftp> prompt
交互模式 开 。
ftp> 
```

### append

将本地文件内容追加到 FTP 远程服务器指定文件中。

例如：将本地 `D:\ftp\test` 目录下的 `test.txt` 文件内容，追加到远程服务器根目录下的 `hello.txt` 文件中。

查看本地 `D:\ftp\test` 目录下的 `test.txt` 文件内容：

```cmd
D:\ftp>type test\test.txt
test
D:\ftp> 
```

查看远程服务器根目录下的 `hello.txt` 文件内容：

```cmd
E:\test>type hello.txt
hello world
E:\test>
```

将本地 `D:\ftp\test` 目录下的 `test.txt` 文件内容，追加到远程服务器根目录下的 `hello.txt` 文件中：

```cmd
ftp> cd /
250 CWD command successful.
ftp> 
ftp> pwd
257 "/" is current directory.
ftp> 
ftp> lcd D:\ftp\test
目前的本地目录 D:\ftp\test。
ftp> 
ftp> append test.txt hello.txt
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 发送 4 字节，用时 0.00秒 4.00千字节/秒。
ftp>
```

或使用以下方式：

```cmd
ftp> append
本地文件 D:\ftp\test\test.txt
远程文件 hello.txt
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 发送 4 字节，用时 0.00秒 4.00千字节/秒。
ftp> 
```

再次查看远程服务器根目录下的 `hello.txt` 文件内容，`test.txt` 文件内容已追加到文件末尾：

```cmd
E:\test>type hello.txt
hello worldtest
E:\test>
```

### rename

重命名远程文件。

例如：将远程 `hello01.txt` 文件重命名为 `hello02.txt`。

查看远程服务器根目录：

```cmd
ftp> pwd
257 "/" is current directory.
ftp>
ftp> dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  06:07PM                  146 dirlist01.txt
07-19-24  04:46PM                    4 file.txt
07-19-24  06:55PM                   15 hello.txt
07-19-24  06:33PM       <DIR>          test01
07-19-24  06:44PM       <DIR>          test02
226 Transfer complete.
ftp: 收到 250 字节，用时 0.01秒 35.71千字节/秒。
ftp> 
```

将远程 `hello01.txt` 文件重命名为 `hello02.txt`。

```cmd
ftp> rename hello01.txt hello02.txt
350 Requested file action pending further information.
250 RNTO command successful.
ftp> 
```

再次查看 FTP 当前目录，`hello01.txt` 文件已重命名为 `hello02.txt`：

```cmd
ftp> dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-15-24  10:50AM       <DIR>          a
07-17-24  02:24PM                    9 filelist.txt
07-18-24  02:26PM                   66 hello.txt
07-17-24  02:43PM                   23 hello02.txt
07-17-24  02:25PM                   66 results.txt
07-17-24  02:23PM                   11 stringlist.txt
07-18-24  04:54PM       <DIR>          test01
07-18-24  04:23PM       <DIR>          test02
226 Transfer complete.
ftp: 收到 401 字节，用时 0.01秒 44.56千字节/秒。
ftp> 
```

### delete

::: tip
如果 `delete` 命令后跟多个文件，也只会删除第一个文件，其它文件不会删除。
:::

例如：删除 FTP 远程服务器的 `test01` 目录中 `test02.txt` 文件。

查看 FTP 远程服务器的 `test01` 目录：

```cmd
ftp> cd test01
250 CWD command successful.
ftp> ls
200 PORT command successful.
125 Data connection already open; Transfer starting.
test01.txt
test02
test02.txt
226 Transfer complete.
ftp: 收到 35 字节，用时 0.00秒 35.00千字节/秒。
ftp> 
```

删除 FTP 远程服务器的 `test01` 目录中 `test02.txt` 文件：

```cmd
ftp>
ftp> delete test02.txt
250 DELE command successful.
ftp> 
```

再次查看 FTP 远程服务器的 `test01` 目录，`test02.txt` 文件已删除：

```cmd
ftp> ls
200 PORT command successful.
125 Data connection already open; Transfer starting.
test01.txt
test02
226 Transfer complete.
ftp: 收到 23 字节，用时 0.00秒 23.00千字节/秒。
ftp> 
```

### mdelete

例如：删除 FTP 远程服务器 `test01` 目录中 `dirlist.txt` 和 `lslist.txt` 文件。

查看远程 `test01` 目录：

```cmd
ftp> dir test01
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-18-24  03:22PM                  351 dirlist.txt
07-18-24  03:22PM                   20 lslist.txt
07-18-24  10:30AM                   22 test01.txt
07-16-24  06:22PM       <DIR>          test02
226 Transfer complete.
ftp: 收到 204 字节，用时 0.01秒 40.80千字节/秒。
ftp> 
```

先切换到远程 `test01` 目录中：

```cmd
ftp> cd test01
250 CWD command successful.
ftp> 
ftp> pwd
257 "/test01" is current directory.
ftp> 
```

删除 FTP 远程服务器的 `dirlist.txt` 和 `lslist.txt` 文件：

```cmd
ftp> mdelete dirlist.txt lslist.txt
200 Type set to A.
mdelete dirlist.txt? y
250 DELE command successful.
mdelete lslist.txt? y
250 DELE command successful.
ftp> 
```

再次查看远程 `test01` 目录：

```cmd
ftp> dir ./
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-18-24  10:30AM                   22 test01.txt
07-16-24  06:22PM       <DIR>          test02
226 Transfer complete.
ftp: 收到 101 字节，用时 0.00秒 33.67千字节/秒。
ftp> 
```

::: warning
如果使用 `mdelete` 命令删除其它目录下的文件，则会报以下错误：

```cmd
ftp> mdelete test01\dirlist.txt test01\lslist.txt
200 Type set to A.
mdelete dirlist.txt? y
550-The system cannot find the file specified.
 Win32 error:   The system cannot find the file specified.
 Error details: File system returned an error.
550 End
mdelete lslist.txt? y
550-The system cannot find the file specified.
 Win32 error:   The system cannot find the file specified.
 Error details: File system returned an error.
550 End
ftp> 
```

:::

### rmdir

例如：删除远程 `test03` 空目录。

创建 `test03` 目录：

```cmd
ftp> mkdir test03
257 "test03" directory created.
ftp> 
```

查看 FTP 当前目录：

```cmd
ftp> dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-15-24  10:50AM       <DIR>          a
07-17-24  02:24PM                    9 filelist.txt
07-18-24  02:26PM                   66 hello.txt
07-17-24  02:43PM                   23 hello02.txt
07-17-24  02:25PM                   66 results.txt
07-17-24  02:23PM                   11 stringlist.txt
07-18-24  04:54PM       <DIR>          test01
07-18-24  04:23PM       <DIR>          test02
07-18-24  05:37PM       <DIR>          test03
226 Transfer complete.
ftp: 收到 448 字节，用时 0.01秒 37.33千字节/秒。
ftp> 
```

删除远程 `test03` 空目录：

```cmd
ftp> rmdir test03
250 XRMD command successful.
ftp> 
```

再次查看 FTP 当前目录：

```cmd
ftp> dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-15-24  10:50AM       <DIR>          a
07-17-24  02:24PM                    9 filelist.txt
07-18-24  02:26PM                   66 hello.txt
07-17-24  02:43PM                   23 hello02.txt
07-17-24  02:25PM                   66 results.txt
07-17-24  02:23PM                   11 stringlist.txt
07-18-24  04:54PM       <DIR>          test01
07-18-24  04:23PM       <DIR>          test02
226 Transfer complete.
ftp: 收到 448 字节，用时 0.01秒 37.33千字节/秒。
ftp> 
```

::: warning
如果使用 `rmdir` 命令删除的不是远程空目录，则会报以下错误：

```cmd
ftp> rmdir test02
550-The directory is not empty.
 Win32 error:   The directory is not empty.
 Error details: File system returned an error.
550 End
ftp>
```

:::

### close

例如：结束与远程服务器的 ftp 会话并保持在 `ftp>` 提示符处。

```cmd
ftp> close
221 Goodbye.
ftp> 
```

### disconnect

例如：断开与远程服务器的连接，并留在 `ftp>` 提示符。

```cmd
ftp> close
221 Goodbye.
ftp> 
```

### bye 或 quit

例如：使用 `bye` 命令退出 FTP 会话。

```cmd
ftp> quit
221 Goodbye.

E:\test>
```

或使用 `quit` 命令退出 FTP 会话。

```cmd
ftp> quit
221 Goodbye.

E:\test>
```

### debug

例如：开启调试模式。

```cmd
ftp> debug
调试 开 。
ftp> 
```

例如：关闭调试模式。

```cmd
ftp> debug
调试 关 。
ftp> 
```

### verbose

例如：关闭详细模式。

```cmd
ftp> verbose
详细模式 关 。
ftp> 
```

例如：开启详细模式。

```cmd
ftp> verbose
详细模式 开 。
ftp> 
```

### remotehelp

::: tip
`remotehelp` 命令只能对以下远程命令的列表中的命令提供帮助，且命令不能写错。
:::

例如：显示所有远程命令的列表。

```cmd
ftp> remotehelp
214-The following commands are recognized (* ==>'s unimplemented).
    ABOR
    ACCT
    ADAT *
    ALLO
    APPE
    AUTH
    CCC
    CDUP
    CWD
    DELE
    ENC *
    EPRT
    EPSV
    FEAT
    HELP
    HOST
    LANG
    LIST
    MDTM
    MIC *
    MKD
    MODE
    NLST
    NOOP
    OPTS
    PASS
    PASV
    PBSZ
    PORT
    PROT
    PWD
    QUIT
    REIN
    REST
    RETR
    RMD
    RNFR
    RNTO
    SITE
    SIZE
    SMNT
    STAT
    STOR
    STOU
    STRU
    SYST
    TYPE
    USER
    XCUP
    XCWD
    XMKD
    XPWD
    XRMD
214 HELP command successful.
ftp> 
```

例如：显示 `DELE` 命令帮助。

```cmd
ftp> remotehelp dele
214 Syntax: dele <sp> file-name - (delete file)
ftp> 
```

### help

显示对 ftp 命令的帮助信息。

例如：显示所有 ftp 命令的列表。

```cmd
ftp> help
命令可能是缩写的。  命令为:

!               delete          literal         prompt          send
?               debug           ls              put             status
append          dir             mdelete         pwd             trace
ascii           disconnect      mdir            quit            type
bell            get             mget            quote           user
binary          glob            mkdir           recv            verbose
bye             hash            mls             remotehelp
cd              help            mput            rename
close           lcd             open            rmdir
ftp> 
```

例如：显示 `delete` 命令帮助。

```cmd
ftp> help delete
delete          删除远程文件
ftp> 
```
