---
title: git cherry-pick
icon: command
date: 2024-05-20
category: 命令集
tag:
    - Git
---

## 描述

`git cherry-pick <commit>` 用于将指定的提交（`commit`）应用于其它分支。其中 `<commit>` 是您想要应用的提交的哈希值或分支名。执行此命令后，指定的提交会应用到当前分支上，并创建一个新的提交。

这允许开发者将一个分支上的特定更改复制到另一个分支，而不需要合并整个分支。这对于将特定的代码改动、修复或功能从一个分支移动到另一个分支非常有用。

`git cherry-pick` 也支持一次转移多个提交，通过指定一系列的 `commit` 哈希值或使用范围选择来实现。

通过 `git cherry-pick` 创建的新提交会有不同的哈希值，尽管它们包含相同的更改。这是因为每个提交都包含其创建时的元数据，如：提交者信息、时间戳等，这些元数据在每次提交时都是唯一的。

使用 `git cherry-pick` 时，请确保理解其工作原理和潜在的影响，特别是在处理复杂的代码库或进行关键更改时。如果不确定，最好在操作前备份您的代码或在一个安全的分支上先进行测试。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-e, --edit`  |  在提交前编辑提交信息  |

## 示例

例如：将 `dev` 分支下的所有提交记录，复制到 `main` 分支下。

```shell
git checkout main
git cherry-pick dev
```

例如：将 `dev` 分支下的某一个提交记录，复制到 `main` 分支下。

```shell
git checkout main
git cherry-pick <commit>
```

例如：将 `dev` 分支下的多个提交记录，复制到 `main` 分支下。

```shell
git checkout main
git cherry-pick <commit2> <commit4>
```
