---
title: git push
icon: command
date: 2024-05-08
category: About
tag:
    - 命令
    - Git
---

## 描述

`git push` 用于将本地分支的更改推送到一个远程仓库。默认情况下，它推送当前活动的本地分支到与其同名的远程分支。您也可以指定要推送的本地分支和远程分支，以及推送的内容（例如：标签或特定的提交）。

`git push` 是协作开发中的重要命令，它允许团队成员共享代码更改并保持代码的同步。在使用它时，了解您的操作如何影响其他人以及如何在不造成冲突的情况下进行推送是非常重要的。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--all`  |  推送所有分支  |
|  `--tags`  |  推送所有标签到远程仓库  |
|  `--prune`  |  删除在远程仓库中不存在但本地仍然引用的远程分支  |
|  `--repo=<仓库>`  |  指定远程仓库  |
|  `-u \| --set-upstream`  |  指定默认远程仓库  |

## 示例

### 直接推送

像 `git push <仓库>` 那样工作，其中 `<仓库>` 是当前分支的远程仓库（或者 `origin`，如果没有为当前分支配置远程仓库）。

```shell
git push
```

### 推送当前分支到远程仓库

例如：推送名为 `<branch-name>` 的本地分支到名为 `origin` 的远程仓库的对应分支。如果远程分支不存在，Git 通常会尝试创建它。

```shell
git push origin <branch-name>
```

### 推送所有分支到远程仓库

例如：推送所有本地分支到远程仓库。如果远程仓库中不存在相应的分支，它们也会被创建。

```shell
git push origin --all
```

### 推送标签到远程仓库

例如：将特定的标签推送到远程仓库。

```shell
git push origin <tag-name>
```

### 推送所有标签到远程仓库

例如：将所有本地标签推送到远程仓库。

```shell
git push origin tags
```

### 推送并设置上游分支

当第一次推送一个本地分支到远程仓库时，可能想要设置该远程分支作为此本地分支的上游（`upstream`）。这样，将来使用 `git pull` 和 `git push` 而不必指定远程仓库和分支名称。

例如：使用 `-u` 选项指定该远程分支作为此本地分支的上游。

```shell
git push -u origin <branch-name>
# 或
git push origin <branch-name> --set-upstream
```

### 强制推送

有时您可能需要覆盖远程仓库上的更改。这通常是不推荐的，因为它可能会丢失其他人的工作，但如果您确定要这样做，可以使用 `--force` 或 `-f` 选项。

```shell
git push -f origin <branch-name>
```

或者更安全地，您可以使用 `--force-with-lease`，它会检查远程分支是否包含您的本地更改，从而避免覆盖其他人的工作。

```shell
git push --force-with-lease origin <branch-name>
```

### 同步本地仓库和远程仓库

删除在远程仓库中不存在但本地仍然引用的远程分支

例如：如果本地的同名分支不存在了，那么远程分支 `tmp` 将被删除。

```shell
git push --prune remote refs/heads/*:refs/tmp/*
```

将确保如果 `refs/heads/foo` 不存在，那么远程的 `refs/tmp/foo` 将被删除。

### 推送到远程指定分支

推送当前分支到远程引用匹配 `master` 的 `origin` 仓库中。这种形式可以方便地推送当前分支，而不必考虑其本地名称。

```shell
git push origin HEAD:master
```
