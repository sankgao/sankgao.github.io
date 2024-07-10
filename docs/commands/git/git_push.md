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

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--all, --branches`  |  推送所有分支到远程仓库  |
|  `--tags`  |  推送所有标签到远程仓库  |
|  `-d, --delete`  |  删除远程分支或标签  |
|  `-f, --force`  |  即使远程仓库中有冲突或更新，也强制推送更改  |
|  `-u, --set-upstream`  |  添加上游（跟踪）分支引用  |
|  `-n, --dry-run`  |  查看将要推送的远程分支，但不实际推送  |
|  `--progress`  |  显示推送进度  |
|  `--porcelain`  |  输出一个简化的格式，通常用于脚本  |
|  `-v, --verbose`  |  显示详细的输出  |
|  `--mirror`  |  将本地仓库的所有引用（包括分支和标签）推送到另一个仓库  |
|  `-q, --quiet`  |  不显示输出内容  |

## 示例

### 直接推送

当命令行没有用 `--repo=<repository>` 参数指定推送位置时，会参考当前分支的 `branch.*.remote` 配置来决定推送位置。如果配置丢失，则默认为 `origin`。

```shell
git push
```

### 推送当前分支

当前的本地分支与远程分支同名，可以直接推送。

例如：推送本地仓库的 `main` 分支到远程仓库的 `main` 分支。

```shell
git push origin main
```

- `origin` 是远程仓库的默认名称，通常用于标识您的远程仓库
- `main` 通常指的是您想要推送到的远程仓库的分支名

如果您当前的本地分支名是 `main`，但远程仓库中没有名为 `main` 的分支，它将在远程仓库中被创建；如果您当前的本地分支名不是 `main`，而您想要推送到远程仓库的 `main` 分支，您需要先切换到您的本地目标分支，然后执行推送命令。

### 推送到远程指定分支

当前的本地分支与远程分支不同名，需要指定远程分支。

例如：推送本地仓库的 `main` 分支到远程仓库的 `test` 分支。如果指定的远程分支不存在，则远程仓库会自动创建此分支。

```shell
git push origin main:tset
```

例如：推送指定 `commit id` 到远程仓库的 `test` 分支。

```shell
git push origin <commit id>:tset
```

### 推送所有分支

例如：使用 `--all` 选项，推送所有本地分支到远程仓库。如果远程仓库中不存在相应的分支，它们也会被创建。

```shell
git push --all origin
```

### 推送标签

例如：将标签 `v1.0.0` 推送到远程仓库。

```shell
git push origin v1.0.0
```

### 推送所有标签

例如：使用 `--tags` 选项，将所有本地标签推送到远程仓库。

```shell
git push --tags origin
```

### 删除远程分支

例如：使用 `-d` 或 `--delete` 选项，删除远程 `test` 分支。

```shell
git push origin -d test
# 或
git push origin :test
```

只会删除远程分支，本地分支依然存在。

### 删除远程标签

例如：使用 `-d` 或 `--delete` 选项，删除远程 `v1.0.0` 标签。

```shell
git push origin -d v1.0.0
# 或
git push origin :v1.0.0
```

只会删除远程标签，本地标签依然存在。

### 强制推送

这通常是不推荐的，因为它可能会丢失其他人的工作。

例如：使用 `-f` 或 `--force` 选项，强制推送到远程 `main` 分支。

```shell
git push -f origin main
```

或者更安全地，您可以使用 `--force-with-lease` 选项，它会检查远程分支是否包含您的本地更改，从而避免覆盖其他人的工作。

```shell
git push --force-with-lease origin main
```

### 推送并设置上游分支

当第一次推送一个本地分支到远程仓库时，可能想要设置该远程分支作为此本地分支的上游（`upstream`）分支。这样，将来使用 `git pull` 和 `git push` 而不必指定远程仓库和分支名称。

例如：使用 `-u` 或 `--set-upstream` 选项，指定 `test` 远程分支作为此本地分支的上游分支。

```shell
git checkout -b test
git push -u origin test
```

通过 `git config -l` 命令查看是否引用：

```shell
git config -l

branch.test.remote=origin
branch.test.merge=refs/heads/test
```

设置跟踪关系之后，下次您只需调用 `git push` 即可将更改推送到关联的远程分支。

### 显示将要推送的远程分支

例如：使用 `-n` 或 `--dry-run` 选项，查看将要推送的远程分支，但不实际推送。

```shell
git push -n origin
```

### 显示推送进度

对于推送大量数据或慢速网络连接时特别有用，因为它可以让用户更好地了解推送操作的进度和预期剩余时间。

例如：使用 `--progress` 选项，显示推送进度。

```shell
git push --progress origin main
```

### 简化推送输出

例如：使用 `--porcelain` 选项，为了让脚本和其他程序更容易地解析 git 命令的输出。

```shell
git push --porcelain origin main
```

### 显示详细输出

例如：使用 `-v` 或 `--verbose` 选项，显示详细的 git 输出。

```shell
git push -v origin main
```

### 迁移

例如：使用 `--mirror` 选项，将本地仓库的所有引用（包括分支和标签）推送到另一个仓库。

```shell
git clone --bare oldproject.git
cd oldproject.git
git push --mirror newproject.git
```

::: tip
如果新仓库有保护分支，取消保护分支再推送，否则出现以下错误：

```bash
remote: GitLab: You are not allowed to force push code to a protected branch on this project.
```

:::
