---
title: 网页提示此站点不安全
icon: problem
date: 2023-07-04
category: 计算机
tag:
    - Windows
---

## 问题

电脑可以正常上网，但部分网站或网页打不开，提示 **您与此网站之间建立的连接不安全**，无法加载网页。

![站点不安全](./assets/site_not_secure.jpg)

## 解决方法

很有可能是本地 DNS 缓存错误造成的，刷新本地 DNS 缓存。

电脑中的 DNS 缓存存储了最近访问过的域名和其对应的 IP 地址。如果缓存中存在错误的或过期的记录，电脑就会出现 DNS 错误。这可能是由于域名信息的更改或 DNS 缓存未及时更新所致。

1. 在 Windows 中按 <kbd>Win</kbd> + <kbd>R</kbd> 键，在运行中输入 `cmd` 打开终端控制器

    ![终端控制器](./assets/terminal_controller.jpg)

2. 在终端控制器中输入 `ipconfig /flushdns` 命令，刷新 DNS 解析缓存

    ![ipconfig /flushdns](./assets/ipconfig_flushdns.jpg)

    当访问一个网站时，系统将从 DNS 缓存中读取该域名所对应的 IP 地址，当查找不到时就会到系统中查找 hosts 文件，如果还没有那么才会向 DNS 服务器请求一个 DNS 查询，DNS 服务器将返回该域名所对应的 IP，在您的系统收到解析地址以后将使用该 IP 地址进行访问，同时将解析缓存到本地的 DNS 缓存中。
    
    如果 DNS 地址无法解析或者是 DNS 缓存中的地址错误，一般才会使用 `ipconfig /flushdns` 命令来清除所有的 DNS 缓存。

3. 再次访问网页，就可以成功访问

::: tip
按 <kbd>F5</kbd> 键刷新网页，只对当前页面进行刷新，只刷新本地缓存；按 <kbd>Ctrl</kbd> + <kbd>F5</kbd> 键强制刷新网页，会把本地缓存文件删除再重新从服务器下载
:::
