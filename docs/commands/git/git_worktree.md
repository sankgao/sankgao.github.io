---
title: git worktree
icon: command
date: 2024-05-20
category: About
tag:
    - 命令
    - Git
---

## 描述

`git worktree` 用于管理多个工作区，在同一个 Git 仓库中拥有多个工作目录（working directories），每个工作目录都有自己的 `.git` 目录，但共享相同的对象数据库。这个命令在 Git V2.5 版本以后被引入，这使得开发者能够同时在不同的分支或不同的工作流上进行工作，而不需要为每个分支克隆一个全新的仓库。

使用 `git worktree` 时，您不能在同一个时间在多个工作区中进行更改然后尝试合并它们，因为这可能会导致文件系统冲突。相反，您应该先在一个工作区中进行更改，然后合并到其他工作区中。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-n, --dry-run`  |  只显示要修剪的内容，而不做任何改变  |
|  `-q, --quiet`  |  不显示输出内容  |

## 命令

|  选项  |  描述  |
|  :----:  |  :----  |
|  `add <path> [<提交号>]`  |  在 `<path>` 创建一个工作区，并将 `<提交号>` 签入其中  |
|  `list`  |  列出每个工作区的细节  |
|  `lock`  |  锁定工作区  |
|  `unlock`  |  解锁工作区  |
|  `move`  |  将工作区移动到新的位置  |
|  `remove`  |  删除工作区  |

## 示例

### 添加工作区

例如：将 `dev` 分支添加到当前目录下的 `dev` 目录中。如果 `dev` 目录不存在会自动创建。

```shell
git worktree add dev dev
```

例如：将指定 `commit id` 添加到当前目录下的 `test01` 目录中。如果 `test01` 目录不存在会自动创建。

```shell
git worktree add test01 0f16cb
```

### 列出所有工作区

例如：列出当前 Git 中所有工作区，包括各工作区的路径。

```shell
git worktree list
```

### 删除工作区

例如：删除指定路径的 `test01` 工作区，包括存放此工作区的文件目录。

```shell
git worktree remove test01
```

### Lock 和 Unlock 工作区

```shell
git worktree lock dev
git worktree unlock dev
```

这两个命令分别用于锁定和解锁工作区。一旦工作区被锁定，您就不能在它上面进行任何操作，直到它被解锁。
