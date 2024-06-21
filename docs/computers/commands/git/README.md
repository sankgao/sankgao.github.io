---
title: Git 命令集
icon: git
date: 2024-04-26
category: About
tag:
    - 命令
    - Git
---

记录一些 Git 命令集。

## 选项

Git 命令常用选项如下：

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-v, --version`  |  打印 Git 程序的 Git 套件版本  |
|  `-h, --help`  |  打印 Git 程序的 Git 套件版本  |
|  `--git-dir=<path>`  |  设置仓库的路径（`.git` 目录），`<path>` 可以是绝对路径或是当前工作目录的相对路径  |

例如：在非仓库目录下配置仓库用户名和邮箱。

```shell
git --git-dir=/home/sankgao/project/demo/.git config user.name "Sank Gao"
git --git-dir=/home/sankgao/project/demo/.git config user.email "sankgao@163.com"
```

<!-- more -->

<AutoCatalog />
