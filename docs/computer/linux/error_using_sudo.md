---
title: 使用 sudo 时报错
icon: error
date: 2023-4-12
category: Computer
tag:
    - Linux
---

## 普通用户使用 sudo 时报错

Linux 普通用户执行 `sudo` 命令时，提示：`sudo: no tty present and no askpass program specified`，原因是默认新建的用户不在 `sudo` 组，没有开启免密，需要编辑 `/etc/sudoers` 文件将用户或用户组加入。

解决方法：

切换到 root 用户，执行命令 `visudo` 或者 `vim /etc/sudoers`，打开 `sudoers` 文件，在最下面一行添加

```bash
build-admin ALL=(ALL:ALL) NOPASSWD:ALL
```

再输入 `:wq!` 保存

## sudoers

`sudoers` 文件是用于指定特定用户或用户组像 root 用户一样使用各种各样的命令，而不需要输入 root 用户密码，语法格式：`user    MACHINE=COMMANDS` （用户 主机地址=（可以变换的身份） 可以执行的命令）。

```bash
......省略部分内容
root    ALL=(ALL)       ALL  # 允许 root 用户执行任意路径下的任意命令
%wheel        ALL=(ALL)       ALL  # 允许 wheel 用户组中的用户执行所有命令
%wheel        ALL=(ALL)       NOPASSWD: ALL  # 允许 wheel 用户组中的用户在不输入该用户的密码的情况下使用所有命令
%sudo   ALL=(ALL:ALL) NOPASSWD:ALL  # 允许 sudo 用户组中的用户执行所有命令，且不需要输入用户密码
```

```bash
%sudo   ALL=(ALL:ALL) NOPASSWD:ALL
```

- **第一段**：用户名或者用户组，表示谁有权限来使用后面的配置。`%sudo` 代表 sudo 组下的所有用户
- **第二段**：表示来源地，即从哪执行这条命令。`ALL` 表示所有计算机
- **第三段**：表示 sudo 可以切换到什么用户。`ALL` 表示所有用户
- **第四段**：表示 sudo 可以切换到哪些组下的用户。`ALL` 表示所有组
- **第五段**：表示 sudo 之后能够执行的命令。`NOPASSWD:ALL` 表示执行任意命令都不需要输入用户密码
