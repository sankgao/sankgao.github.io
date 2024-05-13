---
title: git diff
icon: command
date: 2024-05-10
category: About
tag:
    - 命令
    - Git
---

## 描述

`git diff` 用于显示工作目录或暂存区与最新提交之间的差异。通过查看这些差异，您可以知道哪些文件被修改过，以及这些文件中具体哪些行被添加、删除或修改。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-b, --branch`  |  克隆指定分支  |

## 示例

### 查看工作目录与暂存区的差异

`git diff` 显示工作区与最后一次 `commit` 提交到本地仓库的共同文件的差异。

例如：只修改工作区，不添加到暂存区（`git add`）。

```shell
vim test
echo 'test02' > test02.txt
git diff

diff --git a/test b/test
index 37f703f..fc320c1 100644
--- a/test
+++ b/test
@@ -1,4 +1,5 @@
 test
+test
 testtest
 testtest
 testtest
```

### 查看工作目录与最新提交的差异

显示工作目录与最后一次提交之间的差异，包括暂存区的更改。

```shell
git add .
vim test
git diff HEAD

diff --git a/test b/test
index 37f703f..491b04f 100644
--- a/test
+++ b/test
@@ -1,3 +1,4 @@
+testtest
 test
 testtest
 testtest
diff --git a/test02.txt b/test02.txt
new file mode 100644
index 0000000..48fdd5c
--- /dev/null
+++ b/test02.txt
@@ -0,0 +1 @@
+test02
```

### 查看暂存区与最新提交的差异

显示已经暂存（通过 `git add` 命令）但尚未提交的更改。

```shell
git diff --cached
# 或
git diff --staged
```

### 查看两个提交之间的差异

显示两个提交之间的差异。`<commit1>` 和 `<commit2>` 是您想要比较的提交的哈希值或引用（如：分支名或标签）。

```shell
git diff <commit1> <commit2>
```

### 查看指定文件的差异

在 `git diff` 命令后添加文件名来只查看特定文件的差异。

```shell
git diff <filename>
```

### 以更简洁的格式显示差异

使用 `--summary` 选项可以以更简洁的方式显示差异，只列出有更改的文件名。

```shell
git diff --summary
```

### 以更详细的格式显示差异

使用 `--patch` 或 `-p` 选项可以以补丁格式显示差异，这对于详细分析文件的每一行更改很有用。

```shell
git diff --patch
# 或
git diff -p
```

### 显示差异统计信息

使用 `--stat` 或 `-s` 选项可以显示差异统计信息，如：每个文件中插入、删除和修改的行数。

```shell
git diff --stat
# 或
git diff -s
```
