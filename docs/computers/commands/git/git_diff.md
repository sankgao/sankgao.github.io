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

`git diff` 用于显示工作区或暂存区与 `commit id`（默认是最新提交 `HEAD`） 之间的差异。通过查看这些差异，您可以知道哪些文件被修改过，以及这些文件中具体哪些行被添加、删除或修改。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--cached, --staged`  |  查看为下一次提交所做的相对于 `<commit>` 的修改，默认是 `HEAD`  |
|  `--summary`  |  摘要输出新添加、删除、重命名和复制的文件  |
|  `--stat`  |  对输出内容进行统计  |
|  `--shortstat`  |  只输出使用 `--stat` 选项输出的最后一行  |

## 示例

Git 仓库目录有 `README.md`、`test01.txt` 和 `test02.txt` 三个文件，文件内容如下：

```shell
cat README.md

# test_demo

测试示例
```

```shell
cat test01.txt

test01
```

```shell
cat test02.txt

test02
```

### 查看工作区已修改文件的差异

查看工作区已修改（包括已修改的文件或已删除的文件，不包括新文件）但未暂存（`git add`）到暂存区文件的差异。

1. 删除 `test02.txt` 文件，修改 `test01.txt` 文件，添加新 `test03.txt` 文件

    ```shell
    rm test02.txt
    echo 'test01' >> test01.txt
    echo 'test03' >> test03.txt
    ```

2. 查看当前 `git` 状态

    ```shell
    git status

    On branch main
    Your branch is up to date with 'origin/main'.

    Changes not staged for commit:
      (use "git add/rm <file>..." to update what will be committed)
      (use "git checkout -- <file>..." to discard changes in working directory)

            modified:   test01.txt
            deleted:    test02.txt

    Untracked files:
      (use "git add <file>..." to include in what will be committed)

            test03.txt

    no changes added to commit (use "git add" and/or "git commit -a")
    ```

3. 查看工作区已修改文件的差异

    ```shell
    git diff

    diff --git a/test01.txt b/test01.txt
    index 4c19859..27ca57f 100644
    --- a/test01.txt
    +++ b/test01.txt
    @@ -1 +1,2 @@
     test01
    +test01
    diff --git a/test02.txt b/test02.txt
    deleted file mode 100644
    index 48fdd5c..0000000
    --- a/test02.txt
    +++ /dev/null
    @@ -1 +0,0 @@
    -test02
    ```

4. 输出描述

    - **diff --git a/test01.txt b/test01.txt**：表示文件版本。`a/test01.txt` 原文件版本；`b/test01.txt` 修改后文件版本
    - **index 4c19859..27ca57f 100644**：文件 hash 值。`4c19859` 暂存区 hash 值；`27ca57f` 工作区 hash 值，`100644` 中 `100` 表示普通文件；`644` 表示权限
    - **--- a/test01.txt**：表示原文件
    - **+++ b/test01.txt**：表示修改后文件
    - **@@ -1 +1,2 @@**：从第几行到第几行。`-1` 表示原文件从第一行到第一行；`+1,2` 表示修改后文件从第一行到第二行
    - **原文件和修改后文件合并显示**：`-` 表示删除行；`+` 表示添加行
    - **deleted file mode 100644**：表示删除文件

### 查看工作区已暂存文件的差异

使用 `--cached` 或 `--staged` 选项，查看工作区通过 `git add` 添加到暂存区（包括已修改的文件、已删除的文件或新文件）文件的差异。不包括未添加到暂存区文件。

1. 将上面的更改都添加到暂存区并查看 `git` 状态

```shell
git add .
git status

On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   test01.txt
        deleted:    test02.txt
        new file:   test03.txt
```

2. 查看工作区已暂存文件的差异

    ```shell
    git diff --cached

    diff --git a/test01.txt b/test01.txt
    index 4c19859..27ca57f 100644
    --- a/test01.txt
    +++ b/test01.txt
    @@ -1 +1,2 @@
     test01
    +test01
    diff --git a/test02.txt b/test02.txt
    deleted file mode 100644
    index 48fdd5c..0000000
    --- a/test02.txt
    +++ /dev/null
    @@ -1 +0,0 @@
    -test02
    diff --git a/test03.txt b/test03.txt
    new file mode 100644
    index 0000000..23bc844
    --- /dev/null
    +++ b/test03.txt
    @@ -0,0 +1 @@
    +test03
    ```

3. 删除 `README.md` 文件，修改 `test01.txt` 文件，添加新 `test04.txt` 文件，但不添加到暂存区

    ```shell
    rm README.md
    echo 'test01' >> test01.txt
    echo 'test04' >> test04.txt
    ```

4. 查看当前 `git` 状态

    ```shell
    git status

    On branch main
    Your branch is up to date with 'origin/main'.

    Changes to be committed:
      (use "git reset HEAD <file>..." to unstage)

            modified:   test01.txt
            deleted:    test02.txt
            new file:   test03.txt

    Changes not staged for commit:
      (use "git add/rm <file>..." to update what will be committed)
      (use "git checkout -- <file>..." to discard changes in working directory)

            deleted:    README.md
            modified:   test01.txt

    Untracked files:
      (use "git add <file>..." to include in what will be committed)

            test04.txt
    ```

5. 查看工作区已修改文件的差异

    ```shell
    git diff

    diff --git a/README.md b/README.md
    deleted file mode 100644
    index 6a177fc..0000000
    --- a/README.md
    +++ /dev/null
    @@ -1,3 +0,0 @@
    -# test_demo
    -
    -测试示例
    diff --git a/test01.txt b/test01.txt
    index 27ca57f..169e37f 100644
    --- a/test01.txt
    +++ b/test01.txt
    @@ -1,2 +1,3 @@
     test01
     test01
    +test01
    ```

6. 查看工作区已暂存文件的差异

    ```shell
    git diff --cached

    diff --git a/test01.txt b/test01.txt
    index 4c19859..27ca57f 100644
    --- a/test01.txt
    +++ b/test01.txt
    @@ -1 +1,2 @@
     test01
    +test01
    diff --git a/test02.txt b/test02.txt
    deleted file mode 100644
    index 48fdd5c..0000000
    --- a/test02.txt
    +++ /dev/null
    @@ -1 +0,0 @@
    -test02
    diff --git a/test03.txt b/test03.txt
    new file mode 100644
    index 0000000..23bc844
    --- /dev/null
    +++ b/test03.txt
    @@ -0,0 +1 @@
    +test03
    ```

### 查看工作区与指定 commit id 之间文件的差异

使用 `git diff <commit id>` 命令，查看工作区已修改（包括已修改的文件或已删除的文件，不包括新文件）及已暂存（包括已修改的文件、已删除的文件或新文件）到暂存区与指定的 `commit id` 之间文件的差异。

::: info
第一个 `commit id` 可以用 `HEAD` 代替。
:::

```shell
git diff a6c6aa91ec80e18add652523bf225760270a18ff
# 或
git diff HEAD

diff --git a/README.md b/README.md
deleted file mode 100644
index 6a177fc..0000000
--- a/README.md
+++ /dev/null
@@ -1,3 +0,0 @@
-# test_demo
-
-测试示例
diff --git a/test01.txt b/test01.txt
index 4c19859..169e37f 100644
--- a/test01.txt
+++ b/test01.txt
@@ -1 +1,3 @@
 test01
+test01
+test01
diff --git a/test02.txt b/test02.txt
deleted file mode 100644
index 48fdd5c..0000000
--- a/test02.txt
+++ /dev/null
@@ -1 +0,0 @@
-test02
diff --git a/test03.txt b/test03.txt
new file mode 100644
index 0000000..23bc844
--- /dev/null
+++ b/test03.txt
@@ -0,0 +1 @@
+test03
```

### 查看两个 commit id 之间的差异

使用 `git diff <commit id1> <commit id2>` 命令，查看从 `<commit id1>` 到 `<commit id2>` 之间所有文件的差异。

::: info
`<commit id>` 顺序不同，显示的差异也会不同。
:::

- 从 `557a` 到 `f084` 之间文件的差异：

    ```shell
    git diff 557a f084

    diff --git a/hello.sh b/hello.sh
    index cd16289..d2b0ce8 100755
    --- a/hello.sh
    +++ b/hello.sh
    @@ -1,3 +1,4 @@
     #!/bin/bash

     echo "Hello World!"
    +echo "Hello World!"
    ```

- 从 `f084` 到 `557a` 之间文件的差异：

    ```shell
    git diff f084 557a

    diff --git a/hello.sh b/hello.sh
    index d2b0ce8..cd16289 100755
    --- a/hello.sh
    +++ b/hello.sh
    @@ -1,4 +1,3 @@
     #!/bin/bash

     echo "Hello World!"
    -echo "Hello World!"
    ```

### 查看两个分支之间的差异

使用 `git diff <branch1> <branch2>` 命令，查看从 `<branch1>` 到 `<branch2>` 之间所有文件的差异。

```shell
git diff origin/main origin/dev
```

### 查看两个标签之间的差异

使用 `git diff <tag1> <tag2>` 命令，查看从 `<tag1>` 到 `<tag2>` 之间所有文件的差异。

```shell
git diff v1.0.0 v1.0.1
```

### 查看指定文件的差异

使用 `git diff <file name>` 命令，查看指定文件的差异。

- 查看工作区已修改 `test01.txt` 文件的差异

    ```shell
    git diff test01.txt

    diff --git a/test01.txt b/test01.txt
    index 27ca57f..169e37f 100644
    --- a/test01.txt
    +++ b/test01.txt
    @@ -1,2 +1,3 @@
     test01
     test01
    +test01
    ```

- 查看工作区已暂存 `test01.txt` 文件的差异

    ```shell
    git diff --cached test01.txt

    diff --git a/test01.txt b/test01.txt
    index 4c19859..27ca57f 100644
    --- a/test01.txt
    +++ b/test01.txt
    @@ -1 +1,2 @@
     test01
    +test01
    ```

- 查看两个 `commit id` 之间 `hello.sh` 文件的差异

    ```shell
    git diff f084 557a hello.sh

    diff --git a/hello.sh b/hello.sh
    index d2b0ce8..cd16289 100755
    --- a/hello.sh
    +++ b/hello.sh
    @@ -1,4 +1,3 @@
     #!/bin/bash

     echo "Hello World!"
    -echo "Hello World!"
    ```

### 摘要输出

- 使用 `--summary` 选项可以摘要输出新添加、删除、重命名和复制的文件

    ```shell
    git diff --cached --summary

     delete mode 100644 test02.txt
     create mode 100644 test03.txt
    ```

- 使用 `--stat` 选项对输出内容进行统计

    ```shell
    git diff --cached --stat

     test01.txt | 1 +
     test02.txt | 1 -
     test03.txt | 1 +
     3 files changed, 2 insertions(+), 1 deletion(-)
    ```

- 只输出使用 `--shortstat` 选项输出的最后一行，包含修改的文件总数，添加和删除的行数

    ```shell
    git diff --cached --shortstat

     3 files changed, 2 insertions(+), 1 deletion(-)
    ```
