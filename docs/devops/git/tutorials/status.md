---
title: 查看仓库文件状态
icon: status
date: 2024-05-23
order: 5
category: DevOps
tag:
    - Git
---

工作目录下的每一个文件都不外乎这两种状态：**已跟踪** 或 **未跟踪**。

- **已跟踪的文件**：是指那些被纳入了 Git 版本控制的文件，在上一次快照中有它们的记录，在工作一段时间后，它们的状态可能是未修改，已修改或已放入暂存区
- **未跟踪的文件**：除已跟踪文件外的其它所有文件都属于未跟踪的文件，它们既不存在于上次快照的记录中，也没有被放入暂存区

初次克隆某个仓库的时候，工作目录中的所有文件都属于已跟踪文件，并处于未修改状态，因为 Git 刚刚检出了它们，而您尚未编辑过它们。

编辑过某些文件之后，由于自上次提交后您对它们做了修改，Git 将它们标记为已修改文件。在工作时，您可以选择性地将这些修改过的文件放入暂存区，然后提交所有已暂存的修改，如此反复。

## 查看当前文件状态

使用 [git status](../../../computers/commands/git/git_status.md) 命令查看哪些文件处于什么状态。如果在克隆仓库后立即使用此命令，会看到类似这样的输出：

```shell
$ git status
On branch main
nothing to commit, working directory clean
```

这说明您当前的工作目录相当干净，所有已跟踪文件在上次提交（不管是提交到本地还是远程仓库）后都未被更改过。

在项目目录中创建一个新文件（`README.md`）。

```shell
echo '# Git Tutorials' > README.md
```

此时用 `git status` 命令查看当前文件状态：

```shell
git status

On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)
```

显示 `README.md` 文件是未跟踪文件，Git 不会跟踪管理这个文件。只要在 `Untracked files` 这行下面的文件，就是未跟踪状态。

## 跟踪新文件

使用 [git add](../../../computers/commands/git/git_add.md) 命令跟踪 `README.md` 文件到暂存区。

```shell
git add README.md
```

此时再运行 `git status` 命令，会看到 `README.md` 文件已被跟踪，并处于已暂存状态：

```shell
git status

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   README.md
```

显示 `README.md` 文件是已暂存文件。只要在 `Changes to be committed` 这行下面的文件，就是 **已暂存状态**（对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中）。

`git add` 命令后面参数既可以是文件也可以是目录，如果参数是目录，则该命令将递归跟踪该目录下的所有文件及目录。

## 暂存已修改的文件

修改一个已被跟踪的文件（`test01.txt`），然后运行 `git status` 命令。

```shell
echo 'test01test01' >> test01.txt
git status

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   README.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test01.txt
```

显示已暂存的 `test01.txt` 文件内容已修改，但还没放到暂存区。只要在 `Changes not staged for commit` 这行下面的文件，就是 **已修改状态**（已跟踪文件的内容发生了变化，但还没有放到暂存区）。

将暂存已修改的 `test01.txt` 文件，放到暂存区后，再查看文件状态。

```shell
git add test01.txt
git status

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   README.md
        modified:   test01.txt
```

## 简短输出状态

`git status` 命令的输出十分详细，但其用语有些繁琐。使用 `-s` 或 `--short` 选项可以缩短状态的输出，以简洁的方式查看更改。

```shell
git status -s

A  README.md
M  test01.txt
```

上面的状态显示：`README.md` 是新添加且已暂存的文件；`test01.txt` 是已修改且已暂存的文件。

新添加的未跟踪文件前面有 `??` 标记，新添加到暂存区中的文件前面有 `A` 标记，修改过的文件前面有 `M` 标记。输出文件前面有两个字段，第一个字段显示暂存区（索引）的状态；第二个字段显示工作区的状态。

**常用字段及含义：**

- **??**：未跟踪的文件
- **M**：修改过的文件
- **T**：文件类型已更改（常规文件、符号链接或子模块）
- **A**：新添加的文件
- **D**：已删除的文件
- **R**：重命名的文件
- **C**：已复制的文件（如果配置选项 `status.renames` 设置为 “副本”）
- **U**：已更新但未合并的文件

## 查看已暂存和未暂存的修改

虽然 [git status](../../../computers/commands/git/git_status.md) 已经通过在相应栏下列出当前做的哪些更新尚未暂存、有哪些更新已暂存并准备好下次提交，但 [git diff](../../../computers/commands/git/git_diff.md) 能通过文件补丁的格式更加具体地显示哪些行发生了改变。

再次修改 `README.md` 文件后暂存，然后编辑 `test01.txt` 文件后先不暂存，然后运行 `git status` 命令。

```shell
echo 'git tutorials demo' >> README.md
git add README.md
echo 'test01' >> test01.txt
git status

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   README.md
        modified:   test01.txt

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test01.txt
```

查看未暂存的文件更新了哪些部分，不加参数直接输入 `git diff` 命令。

使用 `git diff` 命令，查看工作区已修改（包括已修改的文件或已删除的文件，不包括新文件）但未暂存（`git add`）到暂存区文件与暂存区文件之间的差异。

```shell
git diff

diff --git a/test01.txt b/test01.txt
index fea590a..f437e2d 100644
--- a/test01.txt
+++ b/test01.txt
@@ -1,2 +1,3 @@
 test01
 test01test01
+test01
```

使用 `git diff --cached` 或 `git diff --staged` 命令，查看工作区已暂存（包括已修改的文件、已删除的文件或新文件）到暂存区文件与最后一次提交（`git commit`）文件之间的差异。

```shell
git diff --cached

diff --git a/README.md b/README.md
new file mode 100644
index 0000000..e624932
--- /dev/null
+++ b/README.md
@@ -0,0 +1,2 @@
+# Git Tutorials
+git tutorials demo
diff --git a/test01.txt b/test01.txt
index 4c19859..fea590a 100644
--- a/test01.txt
+++ b/test01.txt
@@ -1 +1,2 @@
 test01
+test01test01
```

::: info
`git diff` 本身只显示尚未暂存的改动，而不是自上次提交以来所做的所有改动。所以有时候暂存了所有更新过的文件，运行 `git diff` 后却什么也没有，就是这个原因。
:::

## 提交更新

现在的暂存区已经准备就绪，可以提交了。在此之前，请务必确认还有什么已修改或新建的文件还没有暂存（`git add`）过，否则提交的时候不会记录这些尚未暂存的文件，这些已修改但未暂存的文件只会保留在本地磁盘。所以，每次准备提交前，先查看下当前文件状态（`git status`），确认您所需要的文件是不是都已暂存起来了，然后再运行 `git commit` 命令提交。

查看当前文件状态：

```shell
git status

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   README.md
        modified:   test01.txt

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test01.txt
```

只有 `test01.txt` 文件尚未暂存，暂且先不暂存，直接使用 `git commit` 命令提交。

`git commit` 命令可以给定多个 `-m` 选项，第一个 `-m` 值为 **标题行**，后面的 `-m` 值为单独段落串联起来的提交信息。

```shell
git commit -m 'change file' -m 'add README.md' -m 'modified test01.txt'

[main 2326575] change file
 2 files changed, 3 insertions(+)
 create mode 100644 README.md
```

提交后它会告诉您，当前是在哪个分支（`main`）提交的，本次提交的完整 SHA-1 校验和是什么（`2326575`），以及在本次提交中，有多少文件修订过，多少行添加和删改过。通过提交（`git commit`）后，已暂存的文件状态变成 **已提交状态**（数据已经安全地保存在本地数据库中）。

提交时记录的是放在暂存区域的快照。任何还未暂存文件的仍然保持已修改状态，可以在下次提交时纳入版本管理。每一次运行提交操作，都是对您项目作一次快照，以后可以回到这个状态，或者进行比较。

此时再查看文件状态，`test01.txt` 文件尚未暂存且仍然保持已修改状态，已暂存的文件已经提交到本地仓库中。

```shell
git status

On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test01.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

使用 [git log](../../../computers/commands/git/git_log.md) 命令查看 Git 历史记录。

```shell
git log

commit 232657552142c8fe97ac32f5801c70137ed95246 (HEAD -> main)
Author: Sank Gao <sankgao@example.com>
Date:   Thu May 23 14:26:19 2024 +0800

    change file

    add README.md

    modified test01.txt

commit f3b964575a8a1d6919e591173d8a788f968a4140
Author: Sank Gao <sankgao@example.com>
Date:   Thu May 23 10:17:40 2024 +0800

    add test01.txt
```

::: info
只运行 `git commit` 命令不加 `-m` 选项，会启动您选择的文本编辑器来输入提交说明，启动的编辑器是通过 Shell 的环境变量 `core.editor` 指定的。

例如：使用 `vim` 编辑器。

```shell

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch main
# Changes to be committed:
#       new file:   README.md
#       modified:   test01.txt
#
# Changes not staged for commit:
#       modified:   test01.txt
#
~
~
~
~
.git/COMMIT_EDITMSG" 12L, 293C
```

可以看到，默认的提交消息包含最后一次运行 `git status` 的输出放在注释行里，另外开头还有一个空行供您输入提交说明。您完全可以去掉这些注释行，不过留着也没关系，多少能帮您回想起这次更新的内容有哪些。

退出编辑器时，Git 会丢弃注释行，用您输入的提交说明生成一次提交。
:::

## 跳过使用暂存区

Git 提供了一个跳过使用暂存区域的方式，只要在提交的时候，给 `git commit` 命令加上 `-a` 选项添加所有更改的文件，Git 就会自动把所有 **已经跟踪过的文件** 暂存起来一并提交，从而跳过 `git add` 步骤。

例如：先查看当前文件状态，再使用 `git commit -a -m` 命令，直接提交到本地仓库。`-a -m` 可以简写成 `-am`。

```shell
git status

On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test01.txt

no changes added to commit (use "git add" and/or "git commit -a")

git commit -am 'modified test01.txt'

[main 99114d6] modified test01.txt
 1 file changed, 1 insertion(+)
```

使用 [git log](../../../computers/commands/git/git_log.md) 命令查看 Git 历史记录。

```shell
git log

commit 99114d61ea731daf4d5663aa77d83810a8c38680 (HEAD -> main)
Author: Sank Gao <sankgao@example.com>
Date:   Thu May 23 16:28:25 2024 +0800

    modified test01.txt

commit 232657552142c8fe97ac32f5801c70137ed95246
Author: Sank Gao <sankgao@example.com>
Date:   Thu May 23 14:26:19 2024 +0800

    change file

    add README.md

    modified test01.txt

commit f3b964575a8a1d6919e591173d8a788f968a4140
Author: Sank Gao <sankgao@example.com>
Date:   Thu May 23 10:17:40 2024 +0800

    add test01.txt
```

## 删除文件

### 从工作区和暂存区中删除文件

要从 Git 中删除某个文件，就必须要从已跟踪文件清单中删除（确切地说，是从暂存区删除）然后提交。可以用 [git rm](../../../computers/commands/git/git_rm.md) 命令，并连带从工作目录中删除指定的文件，这样以后就不会出现在未跟踪文件清单中了。例如：

```shell
git rm test01.txt
git status

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    test01.txt
```

### 从工作区中手动删除文件

由于上面删除了 `test01.txt` 文件并在已暂存清单中，首先使用 [git restore](../../../computers/commands/git/git_restore.md) 命令同时撤销对工作区和暂存区所有文件的修改。

```shell
git restore -SW .
```

如果只是简单地从工作目录中手动删除文件，运行 `git status` 时就会在 `Changes not staged for commit` 部分（也就是 **未暂存清单**）看到该文件。

从工作目录中手动删除 `test01.txt` 文件，并查看当前文件状态。

```shell
rm test01.txt
git status

On branch main
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    test01.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

然后再运行 `git rm` 命令，记录此次移除文件的操作：

```shell
git rm test01.txt

rm 'test01.txt'
```

再次查看此时文件状态，`test01.txt` 文件已在暂存区中。

```shell
git status

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    test01.txt
```

## 移动或重命名文件

由于上面删除了 `test01.txt` 文件并在已暂存清单中，首先使用 [git restore](../../../computers/commands/git/git_restore.md) 命令同时撤销对工作区和暂存区所有文件的修改。

```shell
git restore -SW .
```

要在 Git 中对文件改名，使用 [git mv](../../../computers/commands/git/git_mv.md) 命令。例如：重命名 `test01.txt` 文件为 `test02.txt` 文件。

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

其实，运行 `git mv` 就相当于运行了下面三条命令：

```shell
mv README.md README
git rm README.md
git add README
```

如此分开操作，Git 也会意识到这是一次重命名，所以不管何种方式结果都一样。

将此次修改提交到本地仓库中：

```shell
git commit -m "将 test01.txt 重命名为 test02.txt"

[main 7df306b] 将 test01.txt 重命名为 test02.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 rename test01.txt => test02.txt (100%)
```
