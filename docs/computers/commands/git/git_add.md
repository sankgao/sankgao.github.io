---
title: git add
icon: command
date: 2024-05-08
category: About
tag:
    - 命令
    - Git
---

## 描述

`git add <pathspec>` 用于将工作目录中的更改（包括新文件、已修改的文件或已删除的文件）添加到暂存区（也称为索引或缓存区），以便在后续的提交操作中包含这些更改。

`<pathspec>` 可以是文件，也可以是目录。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-A`  |  添加所有更改的文件（包括新文件、已修改的文件和已删除的文件）  |
|  `-u`  |  添加已更改的文件（包括已修改的文件和已删除的文件），不包括新文件  |
|  `-f`  |  强制添加忽略的文件，即使文件被 `.gitignore` 文件忽略，也可以使用此选项将其添加到暂存区  |

## 示例

### 添加单个文件

例如：添加 `test` 文件到暂存区

```shell
git add ./test
```

### 添加多个文件

例如：添加 `test` 和 `hello.sh` 文件到暂存区

```shell
git add ./test ./hello.sh
```

### 添加所有文件

::: tip
`git add .` 后有一个 **点**（`.`）不要忘记。
:::

```shell
git add .
# 或
git add -A
```

- `git add .` 和 `git add -A` 在 git 2.x 版本中没有区别；在 git 1.x 版本中使用 `git add .` 命令不包括已删除的文件。
- `git add .` 只能添加当前目录及子目录下所有更改的文件；`git add -A` 添加 git 仓库中所有目录更改的文件
