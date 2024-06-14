---
title: git ls-files
icon: command
date: 2024-06-14
category: About
tag:
    - 命令
    - Git
---

## 描述

`git ls-files` 用于列出 Git 仓库中所有被追踪的文件，即那些已经通过 [git add](./git_add.md) 命令添加到暂存区的文件。这个命令在多种场景下都很有用，比如当您想要查看哪些文件被 Git 追踪时，或者当您想要对仓库中的文件进行某些批量操作时。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-c, --cached`  |  仅显示已经暂存（`cached`）的文件，即那些存在于索引（`index`）中但可能尚未提交的文件  |
|  `-d, --deleted`  |  显示那些在工作目录中已删除，但尚未从索引中删除的文件  |
|  `-m, --modified`  |  显示那些在工作目录中已修改，但尚未暂存的文件  |
|  `-o, --others`  |  显示那些不在 Git 索引中，但存在于工作目录中的文件。这些通常是未被 Git 追踪的文件  |
|  `-k, --killed`  |  显示那些被 Git 忽略的文件  |
|  `-s, --stage`  |  显示暂存文件的暂存信息  |
|  `-u, --unmerged`  |  显示那些存在未解决冲突的文件  |
|  `-x <pattern>, --exclude=<pattern>`  |  排除与指定模式匹配的文件  |
|  `-X <file>, --exclude-from=<file>`  |  从给定文件中读取排除模式  |
|  `--exclude-standard`  |  添加 Git 默认的标准排除模式  |

## 示例

例如：查看所有被 Git 追踪的文件（包括已暂存和未暂存的文件）。

```shell
git ls-files

a/b/c/hello.txt
welcome.txt
```

例如：查看那些在工作目录中已修改但尚未暂存的文件。

```shell
git ls-files -m

a/b/c/hello.txt
```

例如：显示暂存文件的暂存信息。

```shell
git ls-files -s

100644 18832d35117ef2f013c4009f5b2128dfaeff354f 0       a/b/c/hello.txt
100644 51dbfd25a804c30e9d8dc441740452534de8264b 0       welcome.txt
```
