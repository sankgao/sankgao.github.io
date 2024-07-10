---
title: git reset
icon: command
date: 2024-05-10
category: 命令集
tag:
    - Git
---

## 描述

`git reset` 用于重置当前 `HEAD` 到指定的状态。这个命令可以用来撤销提交、重新整理提交历史，或者改变分支的指向。

`git reset` 有三种主要的工作模式，每种模式的行为略有不同：

1. `git reset --soft [commit]`

    将 HEAD 指向指定的提交，但是索引（staging area）和工作目录的内容保持不变。这意味着所有自指定提交以来的更改都被视为已暂存，准备进行下一次提交。这个模式通常用于重新组织提交历史，而不改变工作目录中的实际文件。

2. `git reset --mixed [commit]` 或 `git reset [commit]`（默认模式）

    将 HEAD 和索引都指向指定的提交，但是工作目录中的文件保持不变。这会导致自指定提交以来的更改全部变为未暂存状态（即，它们会出现在 `git status` 的未跟踪文件列表中）。这个模式常用于撤销提交，但不立即丢弃工作目录中的更改。

3. `git reset --hard [commit]`

    将 HEAD、索引和工作目录都重置为指定提交的状态。这会丢弃自指定提交以来的所有更改，包括暂存的和未暂存的。使用这个模式时要特别小心，因为它会删除所有未提交的更改。

**注意事项：**

- 在使用 `git reset` 时，请确保您了解当前的工作目录状态，以及您希望达到的最终状态。错误的 `git reset` 命令可能会导致数据丢失
- 在执行任何可能导致数据丢失的操作之前，最好先使用 `git status` 查看当前的状态，并使用 `git log` 查看提交历史
- 如果您想撤销某个提交，但又不想丢失该提交中的更改，可以先使用 `git reset` 将 HEAD 移动到该提交之前，然后再手动应用所需的更改并提交
- 如果您只想撤销最近的一次提交，并保留更改以便进行新的提交，那么 `git reset --soft HEAD^` 或 `git reset --mixed HEAD^` 可能是合适的命令

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-q, --quiet`  |  不显示输出内容  |

## 示例

### 使用 soft 模式

例如：重置到上一次提交，不更改工作区和暂存区。

```shell
git reset --soft HEAD^
```

### 使用 mixed 模式

例如：重置到上一次提交，更改暂存区以匹配当前工作区，不更改工作区。

```shell
git reset --mixed HEAD^
```

### 使用 hard 模式

例如：重置到上一次提交，更改暂存区和工作区以匹配当前 HEAD。

```shell
git reset --hard HEAD^
```

例如：放弃本地的所有修改，包括已修改和已暂存的文件。

```shell
git reset --hard
```

### 重置到特定的提交

例如：重置到指定的 `commit id`。

```shell
git reset <commit id>
```

### 重置单个文件

例如：取消已暂存的 `test01.txt` 文件，但保留文件的更改。

```shell
git reset test01.txt
```
