---
title: git show
icon: command
date: 2024-05-10
category: About
tag:
    - 命令
    - Git
---

## 描述

`git show` 用于查看提交历史和展示特定提交的详细信息。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--stat`  |  显示某次提交的统计信息  |

## 示例

### 显示最后一次提交的详细信息

```shell
git show

commit 52e58a9d5a1e0f8f88842b2919d5c08d6e7111ad (HEAD -> main, origin/main, origin/HEAD)
Merge: b82b21c 0d01fc1
Author: zhang san <zhang san@email.com>
Date:   Fri May 17 17:00:36 2024 +0800

    change file

diff --cc test01.txt
index 42cd9bc,27ca57f..169e37f
--- a/test01.txt
+++ b/test01.txt
@@@ -1,4 -1,2 +1,3 @@@
  test01
  test01
 +test01
- test01test01
```

### 显示特定提交的详细信息

例如：显示 `52e58a` 提交的详细信息。

```shell
git show 52e58a
```

### 显示某个文件的改动

例如：显示 `test01.txt` 文件最后一次提交的详细信息。

```shell
git show test01.txt
```

### 显示指定标签信息

例如：显示 `v1.0.0` 标签详细信息。

```shell
git show v1.0.0

tag v1.0.0
Tagger: Administrator <admin@example.com>
Date:   Wed May 15 13:24:55 2024 +0800

Version 1.0.0
commit a6c6aa91ec80e18add652523bf225760270a18ff (tag: v1.1.0, tag: v1.0.0, origin/test, test)
Author: Administrator <admin@sis.sh.cn>
Date:   Tue May 14 10:58:02 2024 +0800

    add test02.txt

diff --git a/test02.txt b/test02.txt
new file mode 100644
index 0000000..48fdd5c
--- /dev/null
+++ b/test02.txt
@@ -0,0 +1 @@
+test02
```

### 显示特定提交中某个文件的改动

例如：显示 `52e58a` 提交中 `test01.txt` 文件的详细信息。

```shell
git show 52e58a:test01.txt
```

### 显示最近的几次提交

例如：显示最近的 `3` 次的提交。

```shell
git show -3
```

### 显示某个分支的最后一次提交

例如：显示 `dev` 分支的最后一次提交。

```shell
git show dev
```

### 显示某个标签的信息

例如：显示 `v1.0.0` 标签的信息。

```shell
git show v1.0.0
```

### 显示某次提交的统计信息

例如：显示 `52e58a` 提交的统计信息。

```shell
git show --stat 52e58a
```

### 从历史中恢复文件

例如：从历史（前一次提交）中恢复 `welcome.txt` 文件到当前工作区中。

```shell
git show HEAD~1:welcome.txt > welcome.txt
```
