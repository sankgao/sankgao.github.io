---
title: git add
icon: command
date: 2024-05-08
category: 命令集
tag:
    - Git
---

## 描述

`git add <pathspec>` 用于将工作目录中的更改（包括新文件、已修改的文件或已删除的文件）添加到暂存区（也称为索引或缓存区），以便在后续的提交操作中包含这些更改。

`<pathspec>` 可以是文件，也可以是目录。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-A, --all`  |  添加所有更改的文件（包括新文件、已修改的文件和已删除的文件）  |
|  `-u, --update`  |  添加已更改的文件（包括已修改的文件和已删除的文件），不包括新文件  |
|  `-f, --force`  |  强制添加忽略的文件，即使文件被 `.gitignore` 文件忽略，也可以使用此选项将其添加到暂存区  |
|  `-i, --interactive`  |  以交互方式将工作树中的修改内容添加到索引  |

## 示例

### 添加单个文件

例如：添加 `test` 文件到暂存区。

```shell
git add ./test
```

### 添加多个文件

例如：添加 `test` 和 `hello.sh` 文件到暂存区。

```shell
git add ./test ./hello.sh
```

### 添加所有文件

```shell
git add .
# 或
git add -A
```

::: tip
- `git add .` 后有一个 **点**（`.`）不要忘记
- `git add .` 和 `git add -A` 在 git 2.x 版本中没有区别；在 git 1.x 版本中使用 `git add .` 命令不包括已删除的文件
- `git add .` 只能添加当前目录及子目录下所有更改的文件；`git add -A` 添加 git 仓库中所有目录更改的文件
:::

### 交互式添加文件

例如：以交互式添加指定文件。

执行 `git add -i` 命令，进入一个交互式界面，首先显示的是工作区状态：

```shell
git add -i

*** Commands ***
  1: status       2: update       3: revert       4: add untracked
  5: patch        6: diff         7: quit         8: help
What now> 
```

交互式界面显示了命令列表，可以使用数字或加亮显示的命令首字母，选择相应的功能。对于此例需要将新文件加入到版本库中，所以选择 `4`：

```shell
What now> 4
           staged     unstaged path
  1: src/Makefile
  2: src/hello
  3: src/main.c
  4: src/main.o
  5: src/version.h
  6: src/version.h.in
Add untracked>>
```

当选择了 `4` 之后，就进入了 `Add untracked` 的界面，显示了本地新增（尚不在版本库中）的文件列表，而且提示符也变了，由 `What now>` 变为 `Add untracked>>`。依次输入 `1`、`3`、`6` 将源代码添加到版本库中。输入 `1`：

```shell
Add untracked>> 1
           staged     unstaged path
* 1: src/Makefile
  2: src/hello
  3: src/main.c
  4: src/main.o
  5: src/version.h
  6: src/version.h.in
Add untracked>> 3
           staged     unstaged path
* 1: src/Makefile
  2: src/hello
* 3: src/main.c
  4: src/main.o
  5: src/version.h
  6: src/version.h.in
Add untracked>> 6
           staged     unstaged path
* 1: src/Makefile
  2: src/hello
* 3: src/main.c
  4: src/main.o
  5: src/version.h
* 6: src/version.h.in
Add untracked>>
```

每次输入文件序号，对应的文件前面都添加一个 **星号**，代表将此文件添加到暂存区。在提示符 `Add untracked>>` 处按回车键，完成文件添加，返回主界面：

```shell
Add untracked>>
added 3 paths

*** Commands ***
  1: status       2: update       3: revert       4: add untracked
  5: patch        6: diff         7: quit         8: help
What now> 
```

此时输入 `1` 查看状态，可以看到三个文件添加到暂存区中：

```shell
What now> 1
           staged     unstaged path
  1:       +27/-0      nothing src/Makefile
  2:       +12/-0      nothing src/main.c
  3:        +7/-0      nothing src/version.h.in

*** Commands ***
  1: status       2: update       3: revert       4: add untracked
  5: patch        6: diff         7: quit         8: help
What now> 
```

输入 `7` 退出交互界面：

```shell
What now> 7
Bye.
```

查看文件状态，可以发现三个文件被添加到暂存区中：

```shell
git status -s

A  Makefile
A  main.c
A  version.h.in
?? hello
?? main.o
?? version.h
```
