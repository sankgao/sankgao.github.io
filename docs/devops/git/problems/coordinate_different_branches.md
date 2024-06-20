---
title: Need to specify how to reconcile divergent branches
icon: problem
date: 2024-06-20
category: 
    - DevOps
    - 问题
tag:
    - Git
---

## 问题

在使用 `git pull` 命令时，出现以下错误：

```shell
git pull

hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint:
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint:
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
fatal: Need to specify how to reconcile divergent branches.
```

## 原因

这个提示是 Git 给出的，旨在帮助您决定如何处理分叉的分支，在您下一次执行 `git pull` 操作时如何合并这些更改。当本地分支和远程分支有不同的提交历史时，就会出现分叉，这通常发生在别人已经推送（`push`）了一些提交到远程仓库，而您的本地仓库还没有这些更新。

## 解决方法

### 解决方法 1

配置在拉取（`pull`）时合并（`merge`）远程分支的更改。如果有冲突，需要手动解决，这是默认策略。

```shell
git config pull.rebase false
```

执行以上命令后，再次执行 `git pull` 命令。

### 解决方法 2

配置在拉取（`pull`）远程分支之前，先将您本地的更改变基（`rebase`）到远程分支的顶部。这样可以保持项目历史的线性。

```shell
git config pull.rebase true
```

执行以上命令后，再次执行 `git pull` 命令。

### 解决方法 3

配置只允许快进（Fast-forward）合并。如果 `git pull` 操作不能通过快进完成（即需要合并或变基来解决分叉），这个命令会导致失败。

```shell
git config pull.ff only
```

执行以上命令后，再次执行 `git pull` 命令。
