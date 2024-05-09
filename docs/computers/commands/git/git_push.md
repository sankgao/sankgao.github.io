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

`git push` 用于将本地分支的更改推送到远程仓库。默认情况下，它推送当前活动的本地分支到与其同名的远程分支。您也可以指定要推送的本地分支和远程分支，以及推送的内容（例如：标签或特定的提交）。

`git push` 是协作开发中的重要命令，它允许团队成员共享代码更改并保持代码的同步。在使用它时，了解您的操作如何影响其他人以及如何在不造成冲突的情况下进行推送是非常重要的。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--all, --branches`  |  推送所有分支到远程仓库  |
|  `--tags`  |  推送所有标签到远程仓库  |
|  `--prune`  |  删除远程仓库中已经不存在的本地分支  |
|  `--repo=<repository>`  |  指定远程仓库  |
|  `-d, --delete`  |  删除远程分支  |
|  `-f, --force`  |  即使远程仓库中有冲突或更新，也强制推送更改  |
|  `-u, --set-upstream`  |  指定默认远程仓库  |
|  `-n, --dry-run`  |  查看将要推送的远程分支，但不实际推送  |
|  `--progress`  |  显示推送进度  |
|  `--porcelain`  |  输出一个简化的格式，通常用于脚本  |
|  `-v, --verbose`  |  显示详细的输出  |

## 示例

### 直接推送

当命令行没有用 `--repo=<repository>` 参数指定推送位置时，会参考当前分支的 `branch.*.remote` 配置来决定推送位置。如果配置丢失，则默认为 `origin`。

```shell
git push
```

### 推送当前分支

例如：推送名为 `main` 的本地分支到名为 `origin` 远程仓库的对应分支。

```shell
git push origin main
```

- `origin` 是远程仓库的默认名称，通常用于标识您的远程仓库
- `main` 通常指的是您想要推送到的远程仓库的分支名

如果您当前的本地分支名是 `main`，但远程仓库中没有名为 `main` 的分支，它将在远程仓库中被创建；如果您当前的本地分支名不是 `main`，而您想要推送到远程仓库的 `main` 分支，您需要先切换到您的本地目标分支，然后执行推送命令。

### 推送所有分支

例如：推送所有本地分支到远程仓库。如果远程仓库中不存在相应的分支，它们也会被创建。

```shell
git push --all origin
```

### 推送标签

例如：将特定的标签推送到远程仓库。

```shell
git push origin <tag-name>
```

### 推送所有标签

例如：将所有本地标签推送到远程仓库。

```shell
git push --tags origin
```

### 同步本地仓库和远程仓库

删除在远程仓库中不存在但本地仍然引用的远程分支

例如：如果本地的同名分支不存在了，那么远程分支 `tmp` 将被删除。

```shell
git push --prune remote refs/heads/*:refs/tmp/*
```

将确保如果 `refs/heads/foo` 不存在，那么远程的 `refs/tmp/foo` 将被删除。

### 删除远程分支

例如：删除远程 `test` 分支。

```shell
git push origin -d test
```

只会删除远程分支，本地分支依然存在。

### 强制推送

有时您可能需要覆盖远程仓库上的更改。这通常是不推荐的，因为它可能会丢失其他人的工作，但如果您确定要这样做，可以使用 `-f` 或 `--force` 选项。

```shell
git push -f origin main
```

或者更安全地，您可以使用 `--force-with-lease`，它会检查远程分支是否包含您的本地更改，从而避免覆盖其他人的工作。

```shell
git push --force-with-lease origin main
```

### 推送并设置上游分支

当第一次推送一个本地分支到远程仓库时，可能想要设置该远程分支作为此本地分支的上游（`upstream`）。这样，将来使用 `git pull` 和 `git push` 而不必指定远程仓库和分支名称。

例如：使用 `-u` 选项指定该远程分支作为此本地分支的上游。

```shell
git push -u origin test
```

### 显示将要推送的远程分支

例如：使用 `-n` 查看将要推送的远程分支，但不实际推送。

```shell
git push -n origin
```

### 推送到远程指定分支

推送当前分支到远程引用匹配 `master` 的 `origin` 仓库中。这种形式可以方便地推送当前分支，而不必考虑其本地名称。

```shell
git push origin HEAD:master
```
