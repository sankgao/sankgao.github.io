---
title: git tag
icon: command
date: 2024-05-10
category: 命令集
tag:
    - Git
---

## 描述

`git tag` 用于给特定的提交（commit）打上标签（tag）的命令。标签在 Git 中是一种静态引用，指向某个特定的提交。标签主要有两种类型：**轻量标签**（lightweight tag）和 **附注标签**（annotated tag）。

轻量标签只是一个指向特定提交的引用，没有额外的信息。而附注标签则是一个独立的 Git 对象，它除了包含指向特定提交的指针外，还包含了标签创建者的名字、邮箱、日期以及可选的注释信息，这些信息会被存储在 Git 数据库中并经过 GPG 签名验证。

使用 `git tag` 可以帮助开发者清晰地标记项目的重大版本、发布点或其他重要标签。例如：当开发团队完成一个稳定版本或重要开发标签时，他们可以使用 `git tag` 命令为该版本的提交打上标签，如 `v1.0.0`，以便后续可以方便地回溯、查看和管理代码库的历史状态。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-a, --annotate`  |  创建一个无符号、有注释的标签对象  |
|  `-d, --delete`  |  删除指定标签  |
|  `-n<num>`  |  指定在使用 `-l` 时打印多少行注释，默认是不打印任何注释行  |
|  `-l, --list`  |  查看标签列表  |
|  `-m <msg>, --message=<msg>`  |  给标签添加注释信息，如果给出多个 `-m` 选项，它们的值将作为单独的段落连接起来  |
|  `-s, --sign`  |  制作一个 GPG 签名的标签，使用默认电子邮件地址的密钥  |
|  `-u <key-id>, --local-user=<key-id>`  |  制作一个 GPG 签名的标签，使用给定的密钥  |
|  `-v, --verify`  |  验证给定标签名称的 GPG 签名  |

## 示例

### 创建标签

例如：创建 `v1.0.0` 标签。

```shell
git tag v1.0.0
```

例如：为指定 `commit id` 创建 `v1.0.0` 标签。

```shell
git tag v1.0.0 <commit id>
```

### 创建带描述的标签

例如：创建带描述的标签。`-a` 用于创建带注释的标签；`-m` 添加注释信息。

```shell
git tag -a v1.0.0 -m "Version 1.0.0"
```

### 创建带签名的标签

例如：创建带签名的标签。`-s` 用于制作一个 GPG 签名的标签；`-m` 添加注释信息。

```shell
git tag -s -m "GPG-signed tag." v3.0.0
```

验证标签签名的有效性：

```shell
git tag -v v3.0.0

object 435f67c85d077d2ea31b4b0a3ea17ca0118194a5
type commit
tag v3.0.0
tagger zhangsan <zhangsan@example.com> 1719298048 +0800

GPG-signed tag..
gpg: Signature made Tue 25 Jun 2024 02:47:28 PM CST
gpg:                using RSA key 152CC437FCE6EC964E67BD33DEE43202523B1835
gpg:                issuer "zhangsan@example.com"
gpg: Good signature from "zhangsan <zhangsan@example.com>" [ultimate]
```

### 删除指定标签

例如：删除 `v1.0.0` 标签。

```shell
git tag -d v1.0.0
```

### 查看标签列表

例如：查看本地所有标签。

```shell
git tag -l
# 或
git tag

v1.0.0
v1.0.1
v1.1.0
```

例如：查看本地以 `v1.0` 开头的标签。

```shell
git tag -l v1.0*
```

例如：查看标签列表时打印注释行。

```shell
git tag -n1

v1.0.0          Version 1.0.0
v1.0.1          Version 1.0.1
v1.1.0          add test02.txt
```

### 指定提交创建标签

例如：为前一个提交，创建标签。

```shell
git tag v1.1 HEAD^
```

例如：为第五个提交，创建标签。

```shell
git tag v1.0 HEAD~5
```
