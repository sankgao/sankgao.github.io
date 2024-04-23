---
title: 找不到匹配项
icon: problem
date: 2024-04-23
category: 
    - DevOps
    - 问题
tag:
    - gitlab
---

## 问题

`Error: Unable to find a match: policycoreutils-python`

**报错日志如下：**

```bash
sudo yum install -y curl policycoreutils-python openssh-server perl postfix

Last metadata expiration check: 0:21:21 ago on Tue 23 Apr 2024 04:57:02 PM CST.
Package curl-7.61.1-34.el8.x86_64 is already installed.
No match for argument: policycoreutils-python
Package openssh-server-8.0p1-24.el8.x86_64 is already installed.
Package postfix-2:3.5.8-7.el8.x86_64 is already installed.
Error: Unable to find a match: policycoreutils-python
```

## 原因

`Error: Unable to find a match` 错误，有两种情况：

- 安装的软件包名写错了
- 系统没有这个软件包，缺少 repo 或 epel 源

这里是因为安装的软件包名写错了。

## 解决方法

使用 python3 安装 `policycoreutils-python3` 软件包即可。

```bash
sudo yum install -y curl policycoreutils-python3 openssh-server perl postfix
```
