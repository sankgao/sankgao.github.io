---
title: git cat-file
icon: command
date: 2024-06-14
category: About
tag:
    - 命令
    - Git
---

## 描述

`git cat-file` 用于查看 Git 仓库中的对象（如：文件内容（`blob`）、目录树（`tree`）、提交（`commit`）等）的内容、类型以及大小。这个命令提供了对 Git 仓库内部对象直接访问的能力，使得用户能够查看和操作这些对象，而无需使用更高层级的 Git 命令。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-t`  |  不显示内容，而是显示由 `<对象>` 标识的对象类型  |
|  `-s`  |  不显示内容，而是显示由 `<对象>` 标识的对象大小  |
|  `-e`  |  如果 `<对象>` 存在且是有效对象，则以零状态退出  |
|  `-p`  |  根据 `<对象>` 的类型以可读的格式打印其内容。对于 blob 对象，这会直接显示文件内容；对于 tree 和 commit 对象，这会以一种格式化的方式显示其详细信息  |
|  `-k, --killed`  |  显示那些被 Git 忽略的文件  |
|  `-s, --stage`  |  显示暂存文件的暂存信息  |
|  `-u, --unmerged`  |  显示那些存在未解决冲突的文件  |
|  `-x <pattern>, --exclude=<pattern>`  |  排除与指定模式匹配的文件  |
|  `-X <file>, --exclude-from=<file>`  |  从给定文件中读取排除模式  |
|  `--exclude-standard`  |  添加 Git 默认的标准排除模式  |

## 示例

查看日志的详细信息：

```shell
git log -1 --pretty=raw

commit ffda3db0af4761b39ffb0ec382ec97629b9ac8d2
tree f58da9a820e3fd9d84ab2ca2f1b467ac265038f9
parent 2a53fa42f95ab1bb3ee93b8282fe61703553893f
author Sank Gao <sankgao@163.com> 1718332249 +0800
committer Sank Gao <sankgao@163.com> 1718332249 +0800

    which version checked in?
```

### 查看仓库对象类型

例如：查看 `<对象>` 的类型。

```shell
git cat-file -t ffda3db 

commit
```

### 查看仓库对象内容

例如：查看 `commit` 对象内容。

```shell
git cat-file -p ffda3db

tree f58da9a820e3fd9d84ab2ca2f1b467ac265038f9
parent 2a53fa42f95ab1bb3ee93b8282fe61703553893f
author Sank Gao <sankgao@163.com> 1718332249 +0800
committer Sank Gao <sankgao@163.com> 1718332249 +0800

which version checked in?
```

例如：查看 `tree` 对象内容。

```shell
git cat-file -p f58da9a

100644 blob fd3c069c1de4f4bc9b15940f490aeb48852f3c42    welcome.txt
```

例如：查看 `parent` 对象内容。

```shell
git cat-file -p 2a53fa4

tree 1ee1c14db52826f21b98290d42133064110b03e5
parent 81e37d1daa98fb2085396a0d310dbce718552247
author Sank Gao <sankgao@163.com> 1718331148 +0800
committer Sank Gao <sankgao@163.com> 1718331148 +0800

who does commit?
```

例如：查看 `blob` 对象内容。

```shell
git cat-file -p fd3c069

Hello.
Nice to meet you.
```

### 从历史中恢复文件

例如：从历史（前一次提交）中恢复 `welcome.txt` 文件到当前工作区中。

```shell
git cat-file -p HEAD~1:welcome.txt > welcome.txt
```
