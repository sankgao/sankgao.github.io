---
title: git status
icon: command
date: 2024-05-10
category: About
tag:
    - 命令
    - Git
---

## 描述

`git stash` 用于显示工作区和暂存区的状态。可以查看当前仓库的哪些文件已经被修改、哪些文件是新添加的、哪些文件已被删除，以及哪些文件已经暂存准备提交等信息。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-s, --short`  |  以简短的形式给出输出  |
|  `-b, --branch`  |  即使在简短的形式中也要显示分支和跟踪信息  |
|  `--show-stash`  |  显示当前状态的条目数量  |
|  `--long`  |  给出长格式的输出。这是默认的  |
|  `-v, --verbose`  |  除了显示被修改的文件名外，还显示被分阶段提交的文本差异（即，像`git diff --cached`的输出）<br />如果 `-v` 被指定了两次，那么也会显示工作区中尚未分阶段的变化（即，像 `git diff` 的输出）  |

## 示例

### 查看当前状态

例如：查看当前工作区和暂存区的状态。

```shell
git status

On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   test01.txt

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   test03.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        test02.txt
```

### 简短的形式给出输出

例如：使用 `-s` 或 `--short` 选项，查看当前工作区和暂存区的状态，以简短的形式输出。

```shell
git status -s

M  test01.txt
 M test03.txt
?? test02.txt
```

文件前面有两个字段，第一个字段显示暂存区（索引）的状态；第二个字段显示工作区的状态。例如：`M  test01.txt` 中 `M` 表示 `test01.txt` 文件已修改并添加到暂存区（索引）。

**常用字段及含义：**

- **??**：未跟踪的文件
- **M**：修改过的文件
- **T**：文件类型已更改（常规文件、符号链接或子模块）
- **A**：新添加的文件
- **D**：已删除的文件
- **R**：重命名的文件
- **C**：已复制的文件（如果配置选项 `status.renames` 设置为 “副本”）
- **U**：已更新但未合并的文件

### 在简短的形式中显示分支和跟踪信息

例如：使用 `-b` 或 `--branch` 选项，即使在简短的形式中也要显示分支和跟踪信息。

```shell
git status -sb

## main...origin/main
M  test01.txt
 M test03.txt
?? test02.txt
```

### 显示当前状态的条目数量

例如：使用 `--show-stash` 选项，显示当前状态的条目数量。

```shell
git status --show-stash

# ...省略部分内容
Your stash currently has 3 entries
```

### 显示被分阶段提交的文本差异

例如：使用 `-v` 选项，显示被分阶段提交的文本差异。

```shell
git status -v
```
