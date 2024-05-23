---
title: git mv
icon: command
date: 2024-05-23
category: About
tag:
    - 命令
    - Git
---

## 描述

`git mv` 用于移动或重命名文件或目录，并将这次的操作记录下来。在移动成功完成后，索引（暂存区）就会被更新，但更改仍需要进行提交才能生效。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-f, --force`  |  强制移动或重命名文件，会覆盖目标文件  |
|  `-n, --dry-run`  |  只显示要移动或重命名的文件，而不做任何改变  |
|  `-v, --verbose`  |  显示详细信息  |
|  `-k`  |  跳过可能导致错误条件的移动或重命名操作  |

## 示例

### 重命名文件

例如：将 `test01.txt` 文件重命名为 `test02.txt`。

```shell
git mv test01.txt test02.txt 
```

查看文件状态：

```shell
git status

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        renamed:    test01.txt -> test02.txt
```

### 移动文件

例如：将 `test01.txt` 文件移动到 `demo` 目录中，且 `demo` 目录必须存在。

```shell
git mv test01.txt demo/
```

查看文件状态：

```shell
git status

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        renamed:    test01.txt -> demo/test01.txt
```
