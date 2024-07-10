---
title: git rm
icon: command
date: 2024-05-23
category: About
tag:
    - 命令
    - Git
---

## 描述

`git rm` 用于从工作目录和暂存区中删除文件，并将这次删除的操作记录下来。在删除成功完成后，索引（暂存区）就会被更新，但更改仍需要进行提交才能生效。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-f, --force`  |  强制删除文件  |
|  `-n, --dry-run`  |  只显示要删除的文件，而不做任何改变  |
|  `-r`  |  删除目录  |
|  `--`  |  用于分离命令行选项和文件列表（当文件名可能被误认为命令行选项时非常有用）  |
|  `--cached`  |  从 Git 版本控制中删除对文件的跟踪，但保留在当前工作区中  |
|  `-q, --quiet`  |  不显示输出内容  |

## 示例

### 删除文件

要删除的文件或目录不能正在更改，否则无法删除。

例如：从工作区和暂存区中删除 `test01.txt` 文件。

```shell
git rm test01.txt

rm 'test01.txt'
```

查看文件状态：

```shell
git status

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    test01.txt
```

### 强制删除文件

例如：强制删除 `test01.txt` 文件，不管该文件是否正在更改。

```shell
git rm -f test01.txt

rm 'test01.txt'
```

### 删除目录

例如：从工作区和暂存区中删除 `demo` 目录。

```shell
git rm -f demo

rm 'demo'
```

### 删除对文件的跟踪

例如：使用 `--cached` 选项，从 Git 版本控制中删除对 `test01.txt` 文件的跟踪。

```shell
git rm --cached test01.txt

rm 'test01.txt'
```

查看此时文件状态，下次提交（`git commit`）时会删除暂存区 `test01.txt` 文件，Git 不再跟踪此文件，但 `test01.txt` 文件会保存在本地（当前工作区）中。

```shell
git status

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    test01.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        test01.txt
```
