---
title: git ls-remote
icon: command
date: 2024-05-28
category: About
tag:
    - 命令
    - Git
---

## 描述

`git ls-remote` 用于列出给定远程仓库中所有可用的引用（通常是分支和标签）以及它们对应的最新提交对象的 SHA-1 哈希值。这个命令非常有用，尤其是当您想要查看远程仓库中所有分支的最新提交而不克隆整个仓库时。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `<repo>`  |  查询的 “远程” 版本库。这个参数可以是一个 URL，也可以是一个远程的名称  |
|  `-h, --heads`  |  显示存储在 `refs/heads` 中的引用  |
|  `-t, --tags`  |  显示存储在 `refs/tags` 中的引用  |
|  `--refs`  |  在输出中不显示剥离的标签或像 HEAD 这样的伪引用  |
|  `-q, --quiet`  |  不将远程 URL 打印到标准错误流  |
|  `<patterns>`  |  显示匹配一个或多个给定模式的引用  |

## 示例

例如：列出本地仓库所有引用，包括标签和伪引用。

```shell
git ls-remote

From https://github.com/schacon/ticgit.git
847256809a3d518cd36b8f81859401416fe8d945        HEAD
847256809a3d518cd36b8f81859401416fe8d945        refs/heads/master
c6edfec5c46cc0d7447d6d6db388a76d56ad3342        refs/heads/ticgit
e2a0853642175388ab282d8b64a14ef24c6b8d29        refs/pull/10/head
e2a0853642175388ab282d8b64a14ef24c6b8d29        refs/pull/11/head
af5d713ba28c4ae79c6d324b638b8495488c66f9        refs/pull/13/merge
c6edfec5c46cc0d7447d6d6db388a76d56ad3342        refs/pull/20/head
8d04e20c1cb0be8852f3be28a7b1d99962841354        refs/pull/20/merge
```

例如：列出指定仓库的所有分支和标签及其最新的提交哈希值。

```shell
git ls-remote https://github.com/schacon/ticgit.git

847256809a3d518cd36b8f81859401416fe8d945        HEAD
847256809a3d518cd36b8f81859401416fe8d945        refs/heads/master
c6edfec5c46cc0d7447d6d6db388a76d56ad3342        refs/heads/ticgit
e2a0853642175388ab282d8b64a14ef24c6b8d29        refs/pull/10/head
e2a0853642175388ab282d8b64a14ef24c6b8d29        refs/pull/11/head
af5d713ba28c4ae79c6d324b638b8495488c66f9        refs/pull/13/merge
c6edfec5c46cc0d7447d6d6db388a76d56ad3342        refs/pull/20/head
8d04e20c1cb0be8852f3be28a7b1d99962841354        refs/pull/20/merge
```

例如：列出指定仓库与给定模式匹配的所有引用。

```shell
git ls-remote https://github.com/schacon/ticgit.git master 20 *head

847256809a3d518cd36b8f81859401416fe8d945        HEAD
847256809a3d518cd36b8f81859401416fe8d945        refs/heads/master
e2a0853642175388ab282d8b64a14ef24c6b8d29        refs/pull/10/head
e2a0853642175388ab282d8b64a14ef24c6b8d29        refs/pull/11/head
c6edfec5c46cc0d7447d6d6db388a76d56ad3342        refs/pull/20/head
```
