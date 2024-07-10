---
title: git reflog
icon: command
date: 2024-05-10
category: About
tag:
    - 命令
    - Git
---

## 描述

`git reflog` 用于显示本地仓库的引用日志（Reference logs），即查看分支、标签、HEAD 等引用的操作历史记录。

`git reflog` 记录了本地仓库中分支和其他引用的提示更新时间。参考日志在各种 Git 命令中都很有用，可以用来指定引用的旧值。例如：`HEAD@{2}` 表示 “两步前 HEAD 所在的位置”，`master@{one.week.ago}` 表示 “一周前本仓库中 master 所在的位置” 等等。

`git reflog` 命令可以显示 HEAD 和分支引用的变动历史，包括每次变化的简要说明（如：`commit`、`reset` 等）和对应的提交哈希值。这对于找回丢失的提交（如：在一个被重置（reset）的分支上的提交）特别有用，因为即使某些提交不再被任何分支或标签所引用，只要它们在 `reflog` 中，您就能找到它们的 SHA-1 哈希，并可以检出或恢复。

与 [git log](./git_log.md) 不同，`git reflog` 主要关注的是引用（如：HEAD、分支）的变化，而不是提交对象本身的历史。因此，当需要恢复丢失的提交或理解 HEAD 和分支引用如何变化时，使用 `git reflog` 更为合适。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `show`  |  显示命令行中提供的引用日志，`git reflog show` 接受 `git log` 接受的任何选项  |
|  `--all`  |  处理所有引用的引用日志  |
|  `--single-worktree`  |  只处理当前工作区的引用日志  |
|  `--expire=<时间>`  |  剪除超过指定时间的条目  |
|  `-n, --dry-run`  |  只显示要修剪的内容，而不做任何改变  |

## 示例

例如：查看本地仓库前五行的引用日志。

```shell
git reflog -4

0a1b2c3 (HEAD -> main) HEAD@{0}: reset: moving to HEAD&#126;1
d34e5f6 HEAD@{1}: commit: Add a third line
f56g7h8 HEAD@{2}: commit: Add a second line
i90ja1k HEAD@{3}: commit (initial): Initial commit
```

- **0a1b2c3**：是最新一次提交（在重置操作之后的 HEAD 所指向的提交）的哈希值
- **HEAD -> main**：表示 HEAD 当前指向 main 分支
- **HEAD@{0}**：表示最近的引用日志条目
- **reset: moving to HEAD&#126;1**：是对这次 `git reset` 操作的描述
- **d34e5f6, f56g7h8, i90ja1k**：是之前提交的哈希值
- **HEAD@{1}, HEAD@{2}, HEAD@{3}**：是之前引用日志条目的引用

通过这个输出，可以看到 HEAD 的历史移动记录，包括提交和重置操作。如果想要恢复到某个特定的提交，可以使用相应的提交哈希值来检出那个提交，或者使用 [git reset](./git_reset.md) 或 [git checkout](./git_checkout.md) 命令来移动 HEAD 到那个位置。

例如：想要恢复到 `f56g7h8` 这个提交。

```shell
git checkout f56g7h8
```

例如：想要创建一个新的分支 `recover-branch` 指向那个提交。

```shell
git branch recover-branch f56g7h8
```

利用 `git reflog` 的输出来恢复了丢失的提交或回滚了之前的操作。
