---
title: git rev-parse
icon: command
date: 2024-05-10
category: About
tag:
    - 命令
    - Git
---

## 描述

`git rev-parse` 用于获取和处理各种 Git 对象（如：提交、树、标签等）的 SHA-1 哈希值或其他信息。这个命令在多种场景下都非常有用，特别是当您需要获取当前 HEAD 的哈希值、解析分支名或标签名到对应的哈希值、或检查 Git 仓库的状态时。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--abbrev-ref`  |  获取当前所在分支名，不包括命名空间  |
|  `--symbolic-full-name`  |  输出完全限定的引用名，包括命名空间  |
|  `--git-dir`  |  获取 `.git` 目录的相对路径  |
|  `--absolute-git-dir`  |  获取 `.git` 目录的绝对路径  |
|  `--show-toplevel`  |  获取工作区的绝对路径  |
|  `--show-prefix`  |  获取相对于工作区根目录的相对目录  |
|  `--show-cdup`  |  获取从当前目录（`cd`）后退到工作区的根的深度  |
|  `--short[=length]`  |  获取当前 HEAD 的哈希值简短格式，默认 `6` 字符  |
|  `--verify`  |  验证引用是否存在，并打印解析后的哈希值  |

## 示例

### 获取当前 HEAD 的哈希值

例如：返回当前 HEAD 指向的提交的 SHA-1 哈希值。

```shell
git rev-parse HEAD

0d01fc15e2e250c67ef151bea3adbb90ae5471cf
```

例如：返回当前 HEAD 指向的提交的 SHA-1 哈希值简短格式。

```shell
git rev-parse --short HEAD

0d01fc
```

### 获取特定分支的哈希值

例如：返回 `origin/main` 分支最新提交的哈希值。

```shell
git rev-parse origin/main

0d01fc15e2e250c67ef151bea3adbb90ae5471cf
```

### 解析标签到哈希值

例如：返回 `v1.0.0` 该标签指向的提交的哈希值。

```shell
git rev-parse v1.0.0

4637c7d9d5ed2aa5695366d1daa011bd57fc4fe9
```

### 检查当前所在分支名

例如：返回当前所在的分支名（如果 HEAD 指向一个分支的话）。如果 HEAD 指向一个特定的提交（例如：在 detached HEAD 状态下），则返回 HEAD。

```shell
git rev-parse --abbrev-ref HEAD

main
```

例如：输出完全限定的引用名，包括命名空间。

```shell
git rev-parse --symbolic-full-name HEAD

refs/heads/main
```

### 获取 Git 目录的路径

例如：返回 Git 仓库的 `.git` 目录的路径。

```shell
git rev-parse --git-dir

.git
```

### 获取工作区的绝对路径

例如：返回 Git 仓库的绝对路径。

```shell
git rev-parse --show-toplevel

/opt/projects/test_demo
```

### 验证引用是否存在

例如：检测指定提交是否存在。

```shell
git rev-parse --verify 0d01fc15e2e250c67ef151bea3adbb90ae5471cf

0d01fc15e2e250c67ef151bea3adbb90ae5471cf
```

例如：检测指定分支是否存在。

```shell
git rev-parse --verify dev

097351db8d74f9a0eeb5d80cababbd2f7fd5b787
```

例如：检测指定 `tag` 是否存在。

```shell
git rev-parse --verify v1.0.0

4637c7d9d5ed2aa5695366d1daa011bd57fc4fe9
```

例如：检测指定远程 `tag` 是否存在。

```shell
git rev-parse --verify refs/tags/v1.0.0

4637c7d9d5ed2aa5695366d1daa011bd57fc4fe9
```
