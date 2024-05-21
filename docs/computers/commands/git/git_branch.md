---
title: git branch
icon: command
date: 2024-05-10
category: About
tag:
    - 命令
    - Git
---

## 描述

`git branch` 用于列出、创建和删除 Git 仓库中分支的命令。

如果给了 `--list`，或者没有非选项参数，现有的分支将被列出；当前的分支将以绿色突出显示，并标有星号。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-a, -all`  |  列出本地分支和远程跟踪的分支  |
|  `-d, --delete`  |  删除分支  |
|  `-D`  |  `--delete --force` 的快捷方式  |
|  `-m, --move`  |  重命名分支  |
|  `-M`  |  `--move --force` 的快捷方式  |
|  `-l, --list`  |  列出本地分支  |
|  `-r, --remotes`  |  列出或删除（如果与 `-d` 一起使用）远程跟踪的分支  |
|  `-u, --set-upstream-to=<上游仓库>`  |  指定上游（跟踪）分支，如果没有指定分支名，则默认为当前分支  |
|  `-v, --verbose`  |  显示每个分支当前指向提交的哈希值以及与上游分支的关系（如果有的话）  |
|  `-vv`  |  `-v` 增强，显示上游分支的名称  |
|  `-f, --force`  |  强制创建分支；或将分支重置到指定的起点  |
|  `-q, --quiet`  |  不显示输出内容  |

## 示例

### 创建分支

例如：创建 `test` 分支。

```shell
git branch test
```

### 列出本地和远程分支

例如：使用 `-a` 或 `--all` 选项，列出所有本地和远程分支。

```shell
git branch -a
```

### 删除本地分支

::: tip

- 无法删除当前所在分支，在删除分支前确保当前分支不是要删除的分支，否则无法删除
- 无法删除未合并更改或未推送提交的分支

:::

例如：使用 `-d` 或 `--delete` 选项，删除本地 `test` 分支。

```shell
git branch -d test
```

也可以一次删除多个分支。

```shell
git branch -d test dev
```

### 强制删除分支

如果要删除有未合并更改或未推送提交的分支，可以使用强制删除。

例如：使用 `-D` 或 `--delete --force` 组合选项，强制删除本地 `test` 分支，不管其合并状态如何。

```shell
git branch -D test
```

### 重命名分支

例如：使用 `-m` 或 `--move` 选项，将本地分支 `test` 重命名为 `dev` 分支。

```shell
git branch -m dev
```

`git branch -m <new_branch>` 此方法需要切换到 `<old_branch>` 分支中才可以使用；使用 `git branch -m <old_branch> <new_branch>` 方法不需要切换到 `<old_branch>` 分支即可使用。例如：

```shell
git branch -m test dev
```

### 列出本地分支

例如：使用 `-l` 或 `--list` 选项，列出所有本地分支。

```shell
git branch -l
# 或
git branch
```

### 列出远程分支

例如：使用 `-r` 选项，列出所有远程分支。

```shell
git branch -l
```

与 `-d` 一起使用，删除本地远程分支。例如：删除本地远程分支 `origin/test`。

```shell
git branch -rd origin/test
```

### 指定上游分支

设置指定 `<branchname>` 的跟踪信息，使 `<upstream>` 被视为 `<branchname>` 的上游分支。如果没有指定 `<branchname>`，则默认为当前分支。

例如：使用 `-u` 或 `--set-upstream-to=<上游仓库>` 选项，指定远程分支 `origin/test` 为本地分支 `test` 的上游分支。

```shell
git branch -u origin/test test
```

关联之后，`git branch -vv` 就可以展示关联的远程分支名了，同时推送到远程仓库直接 `git push`，不需要指定远程仓库

### 显示当前分支提交记录的哈希值

例如：使用 `-v` 或 `--verbose` 选项，显示每个分支当前指向提交的哈希值以及与上游分支的关系（如果有的话）

```shell
git branch -v

  dev   7a21b7d change test
  dev01 7a21b7d change test
  main  704cb1c change test
* test  7a21b7d [ahead 2, behind 21] change test
```

使用 `-vv` 选项，显示上游分支的名。

```shell
git branch -vv

  dev   7a21b7d [origin/dev] change test
  dev01 7a21b7d change test
  main  704cb1c [origin/main] change test
* test  7a21b7d [origin/test: ahead 2, behind 21] change test
```

在上面的示例中：

- **ahead 2**：表示本地分支 `test` 中有文件 **领先** 远程分支 `test` 中文件 1 个提交记录
- **behind 21**：表示本地分支 `test` 中有文件 **落后** 远程分支 `test` 中文件 21 个提交记录

### 重置分支起始点

使用 `git branch -f <branch_name> [<star-point>]` 命令，可以将分支名的 `HEAD` 重置到指定的起始点位置。

::: tip
强制更新的分支，不能是当前分支。
:::

例如：使用 `-f` 或 `--force` 选项，强制创建 `test` 分支。

```shell
git branch -f test
```

例如：将 `test` 分支的 `HEAD` 重置到 `HEAD~3` 的起始点位置。

查看当前 `test` 分支的 `HEAD` 位置：

```shell
git checkout test
git log -n5

commit 3fb7399ea8e0f01e2e50ae18f734cd8a5ac64fa9 (HEAD -> test, origin/test)
Author: Administrator <admin@example.com>
Date:   Sat May 11 16:54:36 2024 +0800

    change test

commit d4f2393e191cca1bcdf0a74028e9c83c6073bf9a
Author: Administrator <admin@example.com>
Date:   Fri May 10 16:43:09 2024 +0800

    change test

commit 6ea5644b0f4c17d5899c6199cb35d12d1ad8ece6
Author: Administrator <admin@example.com>
Date:   Fri May 10 16:39:37 2024 +0800

    change test

commit 704cb1c822c3bb3218db55ee88f7126fc89ddefd
Author: Administrator <admin@example.com>
Date:   Fri May 10 14:35:15 2024 +0800

    change test

commit bc9fe5f17ff3422cd4abecdf92b8f0ae0a7fb834
Author: Administrator <admin@example.com>
Date:   Fri May 10 13:52:37 2024 +0800

    change test
```

将 `test` 分支的 `HEAD` 重置到 `HEAD~3` 的起始点位置：

```shell
git checkout main
git branch -f test HEAD~3
# 或
git branch -f test 704cb1c822c3bb3218db55ee88f7126fc89ddefd
```

再次查看当前 `test` 分支的 `HEAD` 位置：

```shell
git checkout test
git log -n3

commit 704cb1c822c3bb3218db55ee88f7126fc89ddefd (HEAD -> test)
Author: Administrator <admin@example.com>
Date:   Fri May 10 14:35:15 2024 +0800

    change test

commit bc9fe5f17ff3422cd4abecdf92b8f0ae0a7fb834
Author: Administrator <admin@example.com>
Date:   Fri May 10 13:52:37 2024 +0800

    change test

commit 437655a7320a968c5ae61003cde4615739a65c30
Author: Administrator <admin@example.com>
Date:   Fri May 10 13:49:31 2024 +0800

    change test
```
