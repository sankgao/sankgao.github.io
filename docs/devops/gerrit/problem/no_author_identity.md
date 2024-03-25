---
title: 没有用户身份信息
icon: problem
date: 2024-03-25
category:
    - DevOpos
    - 问题
tag:
    - Gerrit
---

## 问题

在使用 `git commit` 时出现的错误：

```bash
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: empty ident name (for <zhangsan@localhost.localdomain>) not allowed
```

## 原因

当前存储库没有设置用户身份，即不知道提交的用户身份信息。

## 解决方法

在当前存储库中设置用户身份信息：

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

- **--global**：用于设置全局用户身份；不带此选项只在当前存储库中设置用户身份
- **user.name**：设置用户名
- **user.email**：设置用户邮箱

执行以上命令后再次使用 `git commit` 提交即可。
