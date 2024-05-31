---
title: 邮件服务
icon: mail
date: 2024-03-22
category: Computer
tag:
    - Mail
---

电子邮件，简称 `E-mail`，是一种通过网络进行信息传递的通信方式，它利用电子手段提供信息交换。

电子邮件的主要特点：

- **快速传递**：电子邮件可以快速、方便地传递信息，不受时间和空间的限制，无论是在国内还是国际都可以迅速到达收件人的手中
- **发送多种类型文件**：电子邮件可以发送文字、图片、音频、视频等多种类型的文件，使信息传递更加丰富和全面
- **存储和管理功能**：电子邮件具有便捷的存储和管理功能，可以方便地分类、归档和检索邮件

电子邮件地址由两部分组成，格式为 **登录名@主机名.域名**，其中 `@` 符号分开两部分，左边是登录名，右边是完整的主机名。

随着互联网的普及和发展，电子邮件已经成为人们工作和生活中不可或缺的一部分，它不仅提高了沟通效率，还节省了时间和成本。

## SSL/TLS/STARTTLS 区别

SSL、TLS 和 STARTTLS 的区别主要体现在它们的应用场景、协议关系和版本发展上。

SSL（Secure Sockets Layer，安全套接字层）和 TLS（Transport Layer Security，安全传输层协议）都是用于加密计算机网络中两台计算机之间通信的协议，如：客户端和服务器之间的通信。这可以防止任何第三方监视这些通信。

SSL 和 TLS 的主要区别在于它们处于不同的版本发展阶段，TLS 是 SSL 的继任者，提供了更好的安全性和性能。SSL 有 SSL v2 和 SSL v3 两个版本，而 TLS 则从 TLS v1.0 发展到目前的 TLS v1.3。需要注意的是，SSL v2 和 SSL v3 由于存在安全漏洞，已经不再推荐使用。

STARTTLS 是一种协议命令，用于将已有的非安全连接升级为安全连接。它主要用于电子邮件协议，如：SMTP 和 IMAP，以及 POP3 协议的 STLS 命令。STARTTLS 允许客户端在已经建立的非加密连接上发出命令，将连接升级为使用 SSL/TLS 加密。这意味着，即使初始连接是不安全的，通过 STARTTLS 命令，客户端和服务器可以协商并切换到安全的通信模式。

简而言之，SSL、TLS 和 STARTTLS 都是用于网络通信加密的协议，但它们的应用场景和目的有所不同。SSL 和 TLS 主要用于整个通信过程的加密，而 STARTTLS 则用于在通信过程中将非安全连接升级为安全连接。

## MTA/MUA/MDA 区别

### MTA

邮件传输代理（Mail Transfer Agent，MTA），基于 SMTP 协议（简单邮件传输协议）的服务端，例如：Postfix、Exim、Sendmail 等。SMTP 服务端彼此之间进行相互通信。

MTA 是用在邮件主机上的软件，主要的邮件服务器。MTA 负责用户寄信与收信，MTA 的功能如下：

- 接收外部主机寄来的邮件：既然是邮件主机，接收邮件自然是主要功能，只要这个邮件里有 MTA 内部账号，这封信就会被 MTA 收下来
- 帮用户发（寄出）信：利用这台 MTA 主机把信传送出去！不过要注意，MTA 会将邮件送给目的地的 MTA 而不是目的地的 MUA

::: tip
用户使用的是 MUA，而邮件仅会送达 MTA 主机上，收、发邮件时，都需要通过 MTA 帮忙处理，所以，用户在使用邮件编辑器 MUA 将数据编辑完毕之后，按下送出，并且成功送到 MTA 之后，接下来的事情就是 MTA 的工作了，跟用户的 Client 端计算机没有关系。 
:::

用户收自己的信：用户可以将放置在邮件主机的邮件收到自己的个人计算机上。

### MUA

邮件用户代理（Mail User Agent，MUA）本地的邮件客户端，例如：Evolution、Claws Mail、postfix、Foxmail、outlook 等。

MUA 是用在客户端的软件，客户端的计算机无法直接收发邮件，需要通过 MUA 传递邮件，通过各个操作系统提供的 MUA 才能够使用邮件系统。

MUA 主要的功能就是接收邮件主机的电子邮件，并提供用户浏览与编写邮件的功能。

### MDA

邮件投递代理（Mail Delivery Agent，MDA），例如：procmail、dropmail 等。

将 MTA 接收的邮件依照邮件的流向（送到哪里）将该邮件放置到本机账户下的邮件文件中（收件箱），或者再经由 MTA 将邮件送到下个 MTA。如果邮件的流向是到本机，这个邮件代理的功能就不只是将由 MTA 传来的邮件放置到每个用户的收件箱，它还可以具有邮件过滤（filtering），可以通过 MDA 邮件分析功能，将邮件丢弃。让邮件主机在别人给你发信时自动回复一封，让寄件人知道你在忙碌中。

## 邮件协议

邮件协议是指用户在客户端计算机上可以通过哪些方式进行电子邮件的发送和接收。常见的协议有 SMTP、POP3 和 IMAP，这几种协议都是由 TCP/IP 协议族定义的。

- 发邮件：SMTP（加密版本 SMTPS）
- 收邮件：IMAP（加密版本 IMAPS）、POP3（加密版本 POP3S）

### SMTP

SMTP（Simple Mail Transfer Protocol，简单邮件传输协议）可以向用户提供高效、可靠的邮件传输方式。SMTP 的一个重要特点是它能够在传送过程中转发电子邮件，即邮件可以通过不同网络上的邮件服务器转发到其他的邮件服务器。

**SMTP 协议工作在两种情况下：**

- 电子邮件从客户机传输到邮件服务器
- 从某一台邮件服务器传输到另一台邮件服务器

SMTP 是个请求/响应协议，它监听 `25` 号端口，用于接收用户的邮件请求，并与远端邮件服务器建立 SMTP 连接。

常见的 SMTP 端口包括 `25`、`465`（用于 SSL/TLS 加密）和 `587`（用于 TLS 加密，也被称为 “启动” 端口）。

- `25` 是邮件服务器（即中继消息）之间 SMTP 通信的推荐端口号
- `587` 是邮件客户端向邮件服务器提交消息的推荐端口

**SMTP 端口：**

- 端口 `25`

    这是 SMTP 服务的标准端口，主要用于邮件服务器之间的邮件传输。当您给别人发送邮件时，您的机器会通过这个端口与邮件服务器建立连接，然后发送邮件。

    然而，由于端口 `25` 经常被用于垃圾邮件的发送，许多云服务提供商和 ISP（Internet Service Provider，互联网服务提供商）会阻止或限制此端口的使用。

- 端口 `465`

    这个端口用于 SMTP over SSL（SMTPS）即带有安全套接字层（SSL）的 SMTP，是一种加密的 SMTP 连接。它提供了更高的安全性，因为邮件在传输过程中是加密的，可以防止邮件被窃取或篡改。这个端口通常用于发送需要高度安全性的邮件。

    在过去，端口 `465` 是加密 SMTP 通信的推荐端口，但现代电子邮件系统通常不再使用此端口。

    值得注意的是，端口 `465` 从未被 IETF（Internet Engineering Task Force，因特网工程任务组）正式认可为 SMTP 的标准端口。

- 端口 `587`

    端口 `587` 是现代应用程序用于电子邮件提交的首选端口。

    这个端口通常与 SMTP over STARTTLS 一起使用，通过 SMTP 连接实施 TLS（Transport Layer Security，传输层安全）加密，这意味着连接开始时是不加密的，但可以在连接建立后升级为加密连接。

    端口 `587` 主要用于邮件客户端向邮件服务器提交邮件。

- 端口 `994`

    这个端口用于 IMAP over SSL（IMAPS），是一种加密的 IMAP 连接。IMAP 是一种用于从服务器获取邮件的协议，而不是用于发送邮件。因此，端口 994 与 SMTP 不同，但它也是邮件通信中常用的一个加密端口

端口 `25` 和 `587` 主要用于发送邮件，而端口 `465` 和 `994` 则用于更安全的邮件通信。

### POP3

POP（Post Office Protocol，邮局协议）用于电子邮件的接收，它使用 TCP 的 `110` 端口，常用的是第三版，所以简称为 POP3。POP3 是把邮件从电子邮箱中传输到本地计算机的协议。

POP3 仍采用 C/S 工作模式。当客户机需要服务时，客户端的软件（如：Outlook Express）将与 POP3 服务器建立 TCP 连接，然后要经过 POP3 协议的三种工作状态：首先是认证过程，确认客户机提供的用户名和密码；在认证通过后便转入处理状态，在此状态下用户可收取自己的邮件，在完成相应操作后，客户机便发出 `quit` 命令；此后便进入更新状态，将作删除标记的邮件从服务器端删除掉。到此为止，整个 POP 过程完成。

**POP3 端口：**

- 端口 `110`

    这是 POP3 协议的标准端口，用于未加密的邮件传输。当邮件客户端尝试连接到邮件服务器时，通常会通过这个端口建立连接。
    
    通过这个端口，客户端可以发送命令给服务器（如：登录、获取邮件、删除邮件等），并接收服务器返回的响应和邮件内容。

- 端口 `465`

    这是 POP3 协议的安全端口，通常用于通过 SSL（安全套接层）进行加密的邮件传输。使用这个端口可以保护邮件在传输过程中的数据安全，防止敏感信息被恶意截取或篡改。
    
    这个端口是可选的，但在需要更高安全性的情况下推荐使用。

POP3 协议使用的主要端口是 `110`（未加密）和 `995`（加密）。选择使用哪个端口取决于对邮件安全性的需求。如果希望在接收邮件时保持最高的安全性，建议使用端口 `995` 进行 SSL 加密的邮件传输。如果在一个安全的环境中，或者对安全性要求不高，可以使用端口 `110` 进行未加密的邮件传输。

### IMAP

IMAP（Internet Message Access Protocol，Internet 信息访问协议）主要提供的是通过 Internet 获取信息的一种协议，是一种用于访问和管理电子邮件服务器上的邮件的协议。

IMAP 像 POP3 那样提供了方便的邮件下载服务，让用户能进行离线阅读，但 IMAP 能完成的却远远不只这些。IMAP 提供的摘要浏览功能可以让您在阅读完所有的邮件到达时间、主题、发件人、大小等信息后再作出是否下载的决定。

IMAP 协议与 POP3 协议的主要区别在于，IMAP 允许用户在邮件客户端上直接对服务器上的邮件进行操作，而不需要将所有邮件下载到本地设备。这样，无论在何处登录邮件客户端，用户看到的邮件状态（如：已读、未读、标记等）都是一致的。

**IMAP 端口：**

- 端口 `143`

    这是 IMAP 协议的标准端口，用于未加密的邮件传输。当邮件客户端尝试连接到 IMAP 服务器时，通常会通过这个端口建立连接。通过这个端口，用户可以在不下载邮件到本地设备的情况下，直接对服务器上的邮件进行读取、搜索、标记等操作。

- 端口 `993`

    这是 IMAP 协议的安全端口，通常用于通过 SSL（安全套接层）或 TLS（传输层安全）进行加密的邮件传输。使用这个端口可以保护邮件在传输过程中的数据安全，防止敏感信息被恶意截取或篡改。这个端口是可选的，但在需要更高安全性的情况下推荐使用。

IMAP 协议使用的主要端口是 `143`（未加密）和 `993`（加密）。选择使用哪个端口取决于对邮件安全性的需求。如果希望在访问邮件时保持最高的安全性，建议使用端口 `993` 进行 SSL 或 TLS 加密的邮件传输。如果在一个安全的环境中，或者对安全性要求不高，可以使用端口 `143` 进行未加密的邮件传输。

## 各邮件地址及端口

邮件服务商主要分为两类，一类主要针对个人用户提供个人免费电子邮箱服务，另外一类针对企业提供付费企业电子邮箱服务。

|  邮箱  |  SMTP 地址  |  POP3 地址  |  IMAP 地址  |
|  :----:  |  :----:  |  :----:  |  :----:  |
|  腾讯 QQ 邮箱  |  `smtp.qq.com`  |  `pop.qq.com`  |  `imap.qq.com`  |
|  腾讯 QQ 企业邮箱  |  `smtp.exmail.qq.com`  |  `pop.exmail.qq.com`  |  `imap.exmail.qq.com`  |
|  网易 163 邮箱  |  `smtp.163.com`  |  `pop.163.com`  |  `imap.163.com`  |
|  网易 163 企业邮箱  |  `smtp.ym.163.com`  |  `pop.ym.163.com`  |  `imap.ym.163.com`  |
|  谷歌 Gmail 邮箱  |  `smtp.gmail.com`  |  `pop.gmail.com`  |  `imap.gmail.com`  |
|  微软 Outlook 邮箱  |  `smtp.live.com`  |  `pop3.live.com`  |  `imap.office365.com`  |
|  微软 Office 365 邮箱  |  `smtp.office365.com`  |  `outlook.office365.comm`  |  `outlook.office365.com`  |
|  腾讯 Foxmail 邮箱  |  `smtp.foxmail.com`  |  `pop.foxmail.com`  |  `imap.foxmail.com`  |
|  新浪 sina 邮箱  |  `smtp.sina.com`  |  `pop3.sina.com`  |  `imap.sina.com`  |
|  雅虎 Yahoo 邮箱  |  `smtp.mail.yahoo.com`  |  `pop.mail.yahoo.com`  |  `imap.mail.yahoo.com`  |
|  移动 139 邮箱  |  `smtp.139.com`  |  `pop.139.com`  |  `imap.139.com`  |
|  电信 189 邮箱  |  `smtp.189.cn`  |  `pop.189.cn`  |  `imap.189.cn`  |
|  中国网 china 邮箱  |  `smtp.china.com`  |  `pop.china.com`  |  `imap.china.com`  |

## Postfix 邮件

### 安装服务

安装 `postfix` 服务和 `mailx` 命令：

```shell
sudo apt install -y postfix mailutils
# 或
sudo yum install -y postfix mailx
```

开启 `postfix` 服务，并设置开机自启：

```shell
sudo systemctl start postfix
sudo systemctl enable postfix
```

在配置过程中，选择 *Internet Site* 并使用完整的域名（例如：`mail.example.com`）：

如果在安装过程没有出现交互的配置窗口，则在上面的安装操作完成后执行以下操作来配置基本的参数，这对于我们开始学习的人来说极其重要。

```shell
sudo dpkg-reconfigure postfix
```

配置交互中的各项信息：

- 邮件配置的一般类型：Internet 站点
- 系统邮件名称：`example.com`（不是 `mail.example.com`）
- Root 和 postmaster 邮件收件人：您的主要 Linux 帐户的用户名（也就是你正在使用的登录 ubuntu 系统的用户名，用 root 权限的用户名）
- 其他接收邮件的目的地：`$myhostname, example.com, mail.example.com, localhost.example.com, localhost`，这个目的地就是能代表我们服务器网络地址的域名和本地主机名
- 强制同步更新邮件队列？：否
- 本地网络：`127.0.0.0/8 [::ffff:127.0.0.0]/104 [::1]/128`
- 邮箱大小限制：`0 `（0 代表不限制）
- 本地地址扩展字符：`+`
- 要使用的互联网协议：`all`

### 修改配置文件

修改 Postfix 邮件配置文件 `/etc/postfix/main.cf` 以下内容：

```shell
myhostname = mail.example.com  # 修改邮件服务器的主机名，使用 FQDN
mydomain = example.com  # 修改邮件服务器的域名
myorigin = $mydomain  # 修改发件人所显示的域名
inet_interfaces = all  # 去掉注释。指定 Postfix 的监听端口
mydestination = $myhostname, localhost.$mydomain, localhost  # 去掉注释。允许哪些邮件地址在本地发送邮件
mynetworks = 10.1.1.0/24  # 修改所在网络的网络地址
relay_domains = $mydestination  # 去掉注释。指定可转发的邮件域名
```

重启 `postfix` 服务：

```shell
sudo systemctl restart postfix
```

## 测试邮件

新建两个测试用户：

```shell
sudo useradd -m -s /bin/bash zhangsan
sudo passwd zhangsan
sudo useradd -m -s /bin/bash lisi
sudo passwd lisi
```

使用 `zhangsan` 给 `lisi` 发送邮件：

```shell
sudo su - zhangsan
mail to lisi@mail.example.com

Subject: test
nihao
.
EOT
```

`Subject` 为邮件主题；`nihao` 为邮件内容；`.` 为发送邮件或使用 <kbd>Ctrl</kbd> + <kbd>D</kbd> 快捷键发送邮件。

或使用以下命令发送邮件：

```shell
echo "nihao" | mail -s "test2" lisi@mail.example.com
```

`nihao` 为邮件内容；`-s` 指定邮件主题。

登录 `lisi` 用户，使用 `mail` 命令查看邮件：

```shell
sudo su - lisi
mail

Heirloom Mail version 12.5 7/5/10.  Type ? for help.
"/var/spool/mail/lisi": 2 messages 1 new
    1 zhangsan@example.com  Fri Mar 22 13:01  18/601   "test"
>N  2 zhangsan@example.com  Fri Mar 22 13:10  18/601   "test2"
& 2  # 输入编号查看指定邮件
Message  2:
From zhangsan@example.com  Fri Mar 22 13:10:55 2024
Return-Path: <zhangsan@example.com>
X-Original-To: lisi@mail.example.com
Delivered-To: lisi@mail.example.com
Date: Fri, 22 Mar 2024 13:10:55 +0800
To: lisi@mail.example.com, to@example.com
Subject: test2
User-Agent: Heirloom mailx 12.5 7/5/10
Content-Type: text/plain; charset=us-ascii
From: zhangsan@example.com
Status: R

nihao

& q  # 使用 q 或 ctrl + d 退出
& Held 2 messages in /var/spool/mail/lisi
```
