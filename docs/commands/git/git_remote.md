---
title: git remote
icon: command
date: 2024-05-10
category: 命令集
tag:
    - Git
---

## 描述

`git remote` 用于管理远程仓库的别名（`alias`）。它允许您查看、添加、更改和删除与本地仓库关联的远程仓库的引用。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-v, --verbose`  |  查看远程仓库的详细信息，在名称后显示远程 URL  |
|  `--no-tags`  |  避免将远程版本库的标签引入本地版本库  |

## 命令

|  命令  |  描述  |
|  :----:  |  :----  |
|  `add`  |  添加远程仓库，并为远程仓库起一个别名  |
|  `rm, remove`  |  删除远程仓库  |
|  `rename`  |  重命名远程仓库  |
|  `get-url`  |  获取指定远程仓库 `<alias>` 的 URL  |
|  `set-url`  |  更改远程仓库 `<alias>` 的 URL  |
|  `show`  |  提供关于远程仓库 `<alias>` 的一些信息  |
|  `prune`  |  删除任何不再存在于远程的远程跟踪引用  |
|  `update`  |  获取所有远程版本库的更新  |

## 示例

### 查看远程仓库列表

例如：列出与当前本地仓库关联的所有远程仓库的别名。通常，克隆一个仓库后，会有一个默认的远程仓库别名 `origin`。

```shell
git remote

origin
```

### 查看远程仓库 URL

例如：列出与当前本地仓库关联的所有远程仓库的别名以及它们对应的 URL，包括用于拉取（fetch）和推送（push）的 URL。

```shell
git remote -v

origin  ssh://git@10.1.1.10/tests/test_demo.git (fetch)
origin  ssh://git@10.1.1.10/tests/test_demo.git (push)
```

### 查看指定远程仓库 URL

例如：查看别名为 `origin` 远程仓库的 URL。

```shell
git remote get-url origin

ssh://git@10.1.1.10/tests/test_demo.git
```

### 查看远程仓库详细信息

例如：提供关于远程仓库 `<alias>` 的一些信息。

```shell
git remote show origin

* remote origin
  Fetch URL: ssh://git@10.1.1.10/tests/test_demo.git
  Push  URL: ssh://git@10.1.1.10/tests/test_demo.git
  HEAD branch: main
  Remote branches:
    dev  tracked
    main tracked
    test tracked
  Local branches configured for 'git pull':
    dev  merges with remote dev
    main merges with remote main
    test merges with remote test
  Local refs configured for 'git push':
    dev  pushes to dev  (up to date)
    main pushes to main (local out of date)
    test pushes to test (up to date)
```

### 添加远程仓库

```shell
git remote add <name> <url>
```

- `<alias>` 是远程仓库的别名，`<url>` 为远程仓库 URL

例如：添加一个别名为 `test` 的远程仓库，并指向 `test_demo` 仓库。

```shell
git remote add test ssh://git@10.1.1.10/tests/test_demo.git
```

### 更改远程仓库的 URL

```shell
git remote set-url <alias> <new_url>
```

- `<alias>` 是远程仓库的别名，`<new_url>` 是新的 URL

例如：更改别名为 `test` 的远程仓库，并指向新的 `demo` 仓库。

```shell
git remote set-url test ssh://git@10.1.1.10/tests/demo.git
```

### 移除远程仓库

```shell
git remote rm <alias>
```

- `<alias>` 是您要移除的远程仓库的别名。

例如：删除别名为 `test` 的远程仓库。

```shell
git remote rm test
```

### 重命名远程仓库别名

```shell
git remote rename <old_name> <new_name>
```

- `<old_name>` 是原始的别名，`<new_name>` 是新的别名。

例如：将别名为 `test` 的远程仓库，重命名为 `demo`。

```shell
git remote rename test demo
```

### 删除不存在的远程跟踪引用

例如：远程没有 `test01` 分支，删除本地的 `remotes/origin/test01` 远程跟踪引用。

```shell
git remote prune origin
```
