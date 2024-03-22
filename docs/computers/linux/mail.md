---
title: 邮件服务
icon: mail
date: 2024-03-22
category: Computer
tag:
    - Mail
---

## Postfix 邮件

### 安装服务

安装 `postfix` 服务和 `mailx` 命令：

```bash
sudo yum install -y postfix mailx
```

开启 `postfix` 服务，并设置开机自启：

```bash
sudo systemctl start postfix
sudo systemctl enable postfix
```

### 修改配置文件

修改 Postfix 邮件配置文件 `/etc/postfix/main.cf` 以下内容：

```bash
myhostname = mail.example.com  # 修改邮件服务器的主机名，使用 FQDN
mydomain = example.com  # 修改邮件服务器的域名
myorigin = $mydomain  # 修改发件人所显示的域名
inet_interfaces = all  # 去掉注释。指定 Postfix 的监听端口
mydestination = $myhostname, localhost.$mydomain, localhost  # 去掉注释。允许哪些邮件地址在本地发送邮件
mynetworks = 10.1.1.0/24  # 修改所在网络的网络地址
relay_domains = $mydestination  # 去掉注释。指定可转发的邮件域名
```

重启 `postfix` 服务：

```bash
sudo systemctl restart postfix
```

## 测试邮件

新建两个测试用户：

```bash
sudo useradd -m -s /bin/bash zhangsan
sudo passwd zhangsan
sudo useradd -m -s /bin/bash lisi
sudo passwd lisi
```

使用 `zhangsan` 给 `lisi` 发送邮件：

```bash
sudo su - zhangsan
mail to lisi@mail.example.com

Subject: test
nihao
.
EOT
```

`Subject` 为邮件主题；`nihao` 为邮件内容；`.` 为发送邮件或使用 <kbd>Ctrl</kbd> + <kbd>D</kbd> 快捷键发送邮件。

或使用以下命令发送邮件：

```bash
echo "nihao" | mail -s "test2" lisi@mail.example.com
```

`nihao` 为邮件内容；`-s` 指定邮件主题。

登录 `lisi` 用户，使用 `mail` 命令查看邮件：

```bash
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
