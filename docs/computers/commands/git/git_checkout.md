---
title: git checkout
icon: command
date: 2024-05-10
category: About
tag:
    - 命令
    - Git
---

## 描述

`git checkout` 用于切换分支或恢复工作目录树文件。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-q, --quiet`  |  不显示输出内容  |
|  `-f, --force`  |  放弃工作区和暂存区的所有修改  |
|  `-b`  |  创建并切换分支  |
|  `-t, --track`  |  创建分支并与远程分支关联  |
|  `--orphan=<new_branch>`  |  新建并切换到新分支上，同时这个分支没有任何 `commit`  |

## 示例

### 切换分支

使用 `git checkout <branch-name>` 可以切换到指定的分支。如果该分支不存在 Git 会报错。

例如：切换到 `dev` 分支。

```shell
git checkout dev
```

### 切换上一个分支

例如：切换到上一个分支。

```shell
git checkout -
```

### 从另一个分支签出单个文件

如果本地有相同文件，则会覆盖本地文件。

例如：从 `dev` 分支签出 `test` 文件到本地。

```shell
git checkout dev -- test
```

::: tip
为避免引用（或者提交 ID）和路径同名而发生冲突，可以在 `<path>` 前用两个连续的短线（`--`）作为分隔。
:::

例如：从历史（前一次提交）中恢复 `welcome.txt` 文件到当前工作区中。

```shell
git checkout HEAD~1 -- welcome.txt
```

### 恢复工作区文件

如果工作区的文件被修改了但还没有提交到暂存区，可以使用 `git checkout -- <file>` 来恢复这个文件到最新的提交状态，这实际上会丢弃工作区中对这个文件的修改。

例如：放弃对工作区 `test` 文件的修改。在修改工作区文件后和执行 `git checkout -- <file>` 命令后分别用 [git status](./git_status.md) 命令查看当前 Git 状态。

```shell
vim test
git status
git checkout -- test
git status
```

例如：放弃对工作区所有文件的修改。

```shell
git checkout -- .
# 或
git checkout .
```

### 恢复工作区和暂存区文件

如果工作区的文件修改后并提交到暂存区，可以使用 `git checkout -f` 命令，将丢弃工作区和暂存区文件所有文件的修改。

例如：放弃工作区和暂存区的所有修改。

```shell
vim test
git add test
vim test01.txt
git status
git checkout -f
git status
```

例如：放弃工作区和暂存区的所有修改，并切换到 `test` 分支。

```shell
vim test
git add test
vim test01.txt
git status
git checkout -f test
git status
```

### 创建并切换分支

使用 `git checkout -b <new-branch-name>` 可以创建一个新的分支，并立即切换到这个新分支。

例如：创建并切换到 `test` 分支。

```shell
git checkout -b test
```

例如：创建并切换到 `test` 分支，并与远程分支关联。

如果本地文件名有和远程分支名一样，也可以使用此方法切换到远程分支。

```shell
git checkout -b test origin/test
```

### 创建并与远程分支关联

例如：创建并切换到 `test` 分支，并与远程分支关联。

```shell
git checkout -t origin/test
```
