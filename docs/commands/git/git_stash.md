---
title: git stash
icon: command
date: 2024-05-13
category: About
tag:
    - 命令
    - Git
---

## 描述

`git stash` 用于用户临时保存当前工作目录的修改内容，以便稍后进行恢复。这对于在需要切换分支、暂时中断工作、处理紧急任务或解决代码冲突时非常有用。

使用 `git stash` 可以将当前工作目录中的未提交更改保存起来，而不必提交它们。这样，您可以轻松地切换到其他分支进行工作，而不必担心丢失当前工作目录的更改。当需要回到之前的工作时，您可以使用 `git stash` 的相关命令来恢复保存的更改。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-q, --quiet`  |  不显示输出内容  |

## 命令

|  命令  |  描述  |
|  :----:  |  :----  |
|  `push`  |  将本地修改保存到一个新的 “存储条目” 中  |
|  `save`  |  将本地修改保存到一个新的 “存储条目” 中，但不能接受路径规范  |
|  `list`  |  列出目前拥有的 stash 列表  |
|  `show`  |  显示 stash 中记录的修改，作为 stash 内容与 stash 库条目首次创建时的提交之间的差异  |
|  `apply`  |  将 stash 记录中的修改应用到当前工作目录，但保留 stash 记录  |
|  `pop`  |  将 stash 记录中的修改应用到当前工作目录，并删除相应的 stash 记录  |
|  `drop`  |  删除指定的 stash 记录  |
|  `clear`  |  删除所有的 stash 记录  |

## 示例

### 保存本地的修改

例如：保存工作区和暂存区的修改到一个新的 “存储条目” 中。

```shell
git stash
```

### 保存本地修改并添加注释

例如：保存工作区和暂存区的修改并添加注释到一个新的 “存储条目” 中。

```shell
git stash save "change file"
```

### 查看当前 stash 列表

例如：查看当前 stash 列表。

```shell
git stash list

stash@{0}: WIP on main: 52e58a9 change file
stash@{1}: WIP on main: 52e58a9 change file
stash@{2}: On main: change file
```

### 显示 stash 中记录的修改

例如：显示 stash 中 `stash@{2}` 记录的修改。

```shell
git stash show stash@{2}

 test01.txt | 1 +
 test03.txt | 1 +
 2 files changed, 2 insertions(+)
```

### 将 stash 记录应用到当前工作目录

例如：将 stash 中 `stash@{2}` 记录应用到当前工作目录，但保留 stash 记录。

```shell
git stash apply stash@{2}
```

例如：将 stash 中 `stash@{2}` 记录应用到当前工作目录，并删除相应的 stash 记录。

```shell
git stash pop stash@{2}
```
