---
title: ping 通 IP 地址 ping 不通域名
icon: problem
date: 2024-05-07
category: 
    - Computer
    - 问题
tag:
    - Linux
---

## 问题

**报错日志如下：**

```bash
ping 8.8.8.8

PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=111 time=33.9 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=111 time=33.2 ms

ping www.baidu.com

ping: www.baidu.com: Name or service not known
```

## 原因

一般是 DNS 的配置问题导致域名无法解析。

## 解决方法

1. 先确保本地的 IP 相关地址配置正确
2. 配置 `resolved.conf` 文件

    在 `/etc/systemd/resolved.conf` 文件中添加以下内容：

    ```bash
    DNS=8.8.8.8
    DNS=114.114.114.114
    ```

3. 重启系统

    ```bash
    sudo reboot
    ```

::: tip
如果不想重启系统，则在 `/etc/resolv.conf` 文件中添加以下内容：

```bash
nameserver 8.8.8.8
nameserver 114.114.114.114
```

`/etc/resolv.conf` 文件所做得修改，在系统重启后失效。
:::

再次 ping 域名：

```bash
ping www.baidu.com

PING www.a.shifen.com (153.3.238.102) 56(84) bytes of data.
64 bytes from 153.3.238.102 (153.3.238.102): icmp_seq=1 ttl=52 time=8.81 ms
64 bytes from 153.3.238.102 (153.3.238.102): icmp_seq=2 ttl=52 time=9.01 ms
```
