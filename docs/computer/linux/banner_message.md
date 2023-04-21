---
title: SSH 登录之前显示横幅消息
icon: banner
date: 2023-04-12
category: Computer
tag:
    - Linux
---

`OpenSSH` 有一个名为 `Banner` 的内置选项。在允许身份验证之前，将指定文件的内容发送给远程用户。如果 `Banner` 选项设置为 `none`，那么在 ssh 登录时就不会显示任何 `Banner` 消息。默认情况下不显示横幅，并且禁用该选项。

## 开启 Banner 选项

1. 打开 `/etc/ssh/sshd_config` 配置文件

    在配置文件末尾添加 `Banner /etc/ssh/my_banner` 这一行内容。

    ```bash
    echo "Banner /etc/ssh/my_banner" >> /etc/ssh/sshd_config
    ```

2. 退出并保存配置文件

3. 创建 `/etc/ssh/my_banner` 文件

    ```bash
    touch /etc/ssh/my_banner
    ```

4. 重启 sshd 服务

    ```bash
    systemctl restart sshd
    ```

## 设置横幅消息

1. 横幅消息文字
    
    安装 `figlet` 命令并生成普通字符的放大版。

    ::: tip
    在 centos 中需要安装 epel 源，然后才可以安装 figlet 程序
    :::

    ```bash
    yum -y install figlet
    
    figlet test

     _            _
    | |_ ___  ___| |_
    | __/ _ \/ __| __|
    | ||  __/\__ \ |_
     \__\___||___/\__|
    ```

    还可以在网上搜索 `ASCII art`，会有许多生成 ascii 艺术字的网站，还可以将图片转换成 ASCII 类型的。
    
    `ASCII art` 网站：
    - <https://asciiart.website/>
    - <http://1lineart.kulaone.com/#/>

2. 将 figlet 生成的艺术字体写入 `/etc/ssh/my_banner` 文件中

    ```bash
    figlet test > /etc/ssh/my_banner
    ```

3. ssh 登录 linux 操作系统测试

    ```bash
    ssh root@localhost
     _            _
    | |_ ___  ___| |_
    | __/ _ \/ __| __|
    | ||  __/\__ \ |_
     \__\___||___/\__|

    Activate the web console with: systemctl enable --now cockpit.socket

    Last login: Tue Jan 10 10:44:15 2023 from ::1
    ```
