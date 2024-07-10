---
title: git fetch
icon: command
date: 2024-05-10
category: 命令集
tag:
    - Git
---

## 描述

`git fetch` 用于从另一个存储库或本地分支获取（下载）对象和引用。这些对象通常包括提交、树、blob 和标签。获取到的数据被保存在本地的 `.git/objects` 目录中，但并不会自动合并或修改您当前的工作。

被获取的引用名称，以及它们所指向的对象名称，被写到 `.git/FETCH_HEAD`。 这些信息可以被脚本或其他 `git` 命令使用。

`git fetch` 不会改变您当前的工作目录或您所在的分支，它只是更新您的本地引用。

要将获取到的更改合并到您的当前分支，您需要使用 [git merge](./git_merge.md) 或 [git rebase](./git_rebase.md)。

与 [git pull](./git_pull.md) 相比，`git fetch` 更安全，因为它不会直接修改您的工作。您可以首先查看获取到的更改，然后再决定是否合并它们。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--all`  |  获取所有远程的最新信息  |
|  `--dry-run`  |  只显示更新内容，而不做任何改变  |
|  `--porcelain`  |  将输出结果以易于解析的格式打印到标准输出，供脚本使用  |
|  `-p, --prune`  |  在获取之前，删除任何不再存在于远程的远程跟踪引用  |
|  `-P, --prune-tags`  |  与 `-p` 选项一起使用，删除任何不再存在于远程的本地标签  |
|  `-n, --no-tags`  |  禁用从远程仓库获取对象标签  |
|  `-t, --tags`  |  从远程获取所有标签。将远程标签 `refs/tags/*` 获取为同名的本地标签  |
|  `--set-upstream`  |  如果远程被成功获取，添加上游（跟踪）引用  |
|  `-v, --verbose`  |  输出详细日志  |

## 示例

### 更新远程追踪的分支

例如：获取所有远程（`origin`）分支的最新提交到本地。`origin` 是远程仓库的默认名称。

```shell
git fetch origin
# 或
git fetch --all

From ssh://10.1.1.10/tests/test_demo
 * [new branch]      dev        -> origin/dev
 * [new branch]      test       -> origin/test
 * [new tag]         v1.0.0     -> v1.0.0
 * [new tag]         v1.0.1     -> v1.0.1
 * [new tag]         v1.0.0     -> v1.0.0
 * [new tag]         v1.0.1     -> v1.0.1
```

例如：获取指定远程 `dev` 分支的最新提交到本地 `dev` 分支。只下载 `origin` 仓库中 `dev` 分支的最新提交。

```shell
git checkout dev
git fetch origin dev

From ssh://10.1.1.10/tests/test_demo
 * branch            dev        -> FETCH_HEAD
 * [new branch]      dev        -> origin/dev
```

例如：获取指定远程 `dev` 分支的最新提交到本地 `main` 分支。

```shell
git fetch origin dev:main

From ssh://10.1.1.10/tests/test_demo
 * branch            dev        -> FETCH_HEAD
 * [new branch]      dev        -> origin/dev
```

如果不指定远程 `dev` 分支，只指定本地 `test` 分支且本地没有 `test` 分支，将创建本地分支。

```shell
git fetch origin :test
```

### 只显示更新内容

例如：使用 `--dry-run` 选项，只显示更新内容，而不做任何改变。

```shell
git fetch --dry-run origin

From ssh://10.1.1.10/tests/test_demo
 * [new branch]      dev        -> origin/dev
 * [new branch]      test       -> origin/test
 * [new tag]         v1.0.0     -> v1.0.0
 * [new tag]         v1.0.1     -> v1.0.1
 * [new tag]         v1.0.0     -> v1.0.0
 * [new tag]         v1.0.1     -> v1.0.1
```

### 简易输出

例如：使用 `--porcelain` 选项，将 `git fetch` 输出结果以易于解析的格式打印到标准输出，供脚本使用。

```shell
git fetch --dry-run --porcelain

  a6c6aa91ec80e18add652523bf225760270a18ff a159da180cd0ea822a03e81c29492a45e9828c53 refs/remotes/origin/main
* 0000000000000000000000000000000000000000 4637c7d9d5ed2aa5695366d1daa011bd57fc4fe9 refs/tags/v1.0.0
* 0000000000000000000000000000000000000000 adbc1dedd67dce934b0e77947c4df6936be318e3 refs/tags/v1.0.1
* 0000000000000000000000000000000000000000 4637c7d9d5ed2aa5695366d1daa011bd57fc4fe9 refs/tags/v1.0.0
* 0000000000000000000000000000000000000000 adbc1dedd67dce934b0e77947c4df6936be318e3 refs/tags/v1.0.1
```

### 删除不存在远程分支跟踪引用

使用 `-p` 或 `--prune` 选项，在获取之前，删除任何不再存在于远程的远程跟踪引用。

例如：远程没有 `test01` 分支，删除本地的 `remotes/origin/test01` 远程跟踪引用。

```shell
git fetch -p

From ssh://10.1.1.10/tests/test_demo
 - [deleted]         (none)     -> origin/test01
```

### 删除不再存在远程的本地标签

使用 `-P` 或 `--prune-tags` 选项与 `-p` 选项一起使用，在获取之前，将删除任何不再存在于远程的本地标签。

例如：远程没有 `v1.0.1` 和 `v1.1.0` 标签，删除本地的 `v1.0.1` 和 `v1.1.0` 标签。

```shell
git fetch -p -P

From ssh://10.1.1.10/tests/test_demo
 - [deleted]         (none)     -> v1.0.1
 - [deleted]         (none)     -> v1.1.0
```

### 禁用从远程仓库获取对象标签

默认情况下，指向从远程仓库下载的对象的标签会被获取并存储到本地。

例如：使用 `-n` 或 `--no-tags` 选项，禁用从远程仓库获取对象标签。

```shell
git fetch -n

From ssh://10.1.1.10/tests/test_demo
 * [new branch]      dev        -> origin/dev
 * [new branch]      test       -> origin/test
```

### 添加上游引用

例如：使用 `--set-upstream` 选项，如果远程被成功获取，添加上游（跟踪）引用。

```shell
git fetch --set-upstream
```

### 输出详细日志

例如：使用 `-v` 或 `--verbose` 选项，输出详细日志。

```shell
git fetch -v

From ssh://10.1.1.10/tests/test_demo
   a6c6aa9..a159da1  main       -> origin/main
 = [up to date]      dev        -> origin/dev
 = [up to date]      test       -> origin/test
 * [new tag]         v1.0.0     -> v1.0.0
 * [new tag]         v1.0.1     -> v1.0.1
 * [new tag]         v1.0.0     -> v1.0.0
 * [new tag]         v1.0.1     -> v1.0.1
```

### 查看获取到的提交

使用 [git log](./git_log.md) 命令可以查看 `FETCH_HEAD` 中包含的提交。

```shell
git log FETCH_HEAD
```

或者，查看特定远程跟踪分支的提交：

```shell
git log origin/dev
```

### 与远程仓库同步

`git fetch` 通常与 [git merge](./git_merge.md) 或 [git rebase](./git_rebase.md) 结合使用，以便将远程仓库的更新合并或重基于您的当前分支。例如：

```shell
git fetch origin
git merge origin/main
```

或者，使用 `rebase`：

```shell
git fetch origin
git rebase origin/main
```
