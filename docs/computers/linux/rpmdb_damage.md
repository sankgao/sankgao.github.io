---
title: rpm 数据库损坏
icon: problem
date: 2024-04-24
category: 
    - Computer
    - 问题
tag:
    - Linux
---

## 问题

**报错日志如下：**

```bash
sudo yum install

error: rpmdb: BDB0113 Thread/process 1384218/140542473127808 failed: BDB1507 Thread died in Berkeley DB library
error: db5 error(-30973) from dbenv->failchk: BDB0087 DB_RUNRECOVERY: Fatal error, run database recovery
error: cannot open Packages index using db5 -  (-30973)
error: cannot open Packages database in /var/lib/rpm
Error: Error: rpmdb open failed
```

## 原因

一般是因为强制删除，损坏了 `rpm` 数据库。

## 解决方法

删除数据库文件（`__db*`）：

```bash
sudo rm -rf /var/lib/rpm/__db*
```

重新构建 `rpm` 数据库：

```bash
sudo rpm --rebuilddb
```
