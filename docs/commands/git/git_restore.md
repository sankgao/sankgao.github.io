---
title: git restore
icon: command
date: 2024-05-20
category: About
tag:
    - 命令
    - Git
---

## 描述

`git restore` 用于恢复被修改或删除的文件到某个特定的状态。这个命令在 Git V2.23 版本以后被引入，旨在替代之前的 [git checkout](./git_checkout.md) 命令来恢复文件，使得这一过程更加清晰和直接。

对于新添加到仓库中但还没有提交的文件，`git restore` 命令不会产生效果。如果需要删除这些文件，需要手动删除或使用 [git clean](./git_clean.md) 命令。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-W, --worktree`  |  还原工作区内容，默认选项  |
|  `-S, --staged`  |  还原暂存区内容  |
|  `-q, --quiet`  |  不显示输出内容  |

## 示例

例如：还原单个文件到最后一次提交的状态。

```shell
git restore filename.txt
# 或
git restore -W filename.txt
```

例如：将暂存区的文件还原到工作区。

```shell
git restore --staged filename.txt
```

例如：同时撤销工作区和暂存区所有文件的修改。

```shell
git restore -W -S .
```

例如：还原所有文件到最后一次提交的状态。

```shell
git restore .
```
