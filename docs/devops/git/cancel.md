---
title: 撤消操作
icon: cached
date: 2024-05-24
order: 7
category: DevOps
tag:
    - Git
---

在任何一个阶段（如：当前工作区文件修改、暂存区、仓库），您都有可能想要撤消某些操作。注意，有些撤消操作是不可逆的。这是在使用 Git 的过程中，会因为操作失误而导致之前的工作丢失的少有的几个地方之一。

## 重新提交

有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。此时，可以使用 `git commit --amend` 命令重新提交（完全用一个 **新的提交** 替换 **旧的提交**）。

例如：忘记修改 `test02.txt` 文件内容就提交到本地仓库。

先查看上次提交的 `commit id`：

```shell
git log -2

commit 7df306b180568b13a9f7782f3575c8f06e4b1ed5 (HEAD -> main)
Author: Sank Gao <sankgao@example.com>
Date:   Fri May 24 10:43:10 2024 +0800

    将 test01.txt 重命名为 test02.txt

commit 99114d61ea731daf4d5663aa77d83810a8c38680
Author: Sank Gao <sankgao@example.com>
Date:   Thu May 23 16:28:25 2024 +0800

    modified test01.txt
```

修改 `test02.txt` 文件内容，并添加到暂存区。

```shell
echo 'test02' > test02.txt
git add test02.txt
```

执行 `git commit --amend` 命令，文本编辑器启动后，可以看到之前的提交信息，编辑后保存。

```shell
git commit --amend

[main 7333fb5] 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
 Date: Fri May 24 10:43:10 2024 +0800
 2 files changed, 1 insertion(+), 3 deletions(-)
 delete mode 100644 test01.txt
 create mode 100644 test02.txt
```

再次查看提交信息，覆盖原来的提交信息，`commit id` 也会改变。

```shell
git log -2

commit 7333fb5d96fab255ef780add57a41ffb1d3fbfe1 (HEAD -> main)
Author: Sank Gao <sankgao@example.com>
Date:   Fri May 24 10:43:10 2024 +0800

    将 test01.txt 文件重命名为 test02.txt，并修改文件内容

commit 99114d61ea731daf4d5663aa77d83810a8c38680
Author: Sank Gao <sankgao@example.com>
Date:   Thu May 23 16:28:25 2024 +0800

    modified test01.txt
```

现在您有了一个新的提交，它有一个新的 `commit id`，而旧的提交则保留在仓库的引用日志中，可以通过 [git reflog](../../computers/commands/git/git_reflog.md) 命令查看。

::: tip
`--amend` 选项可以和 `-m` 选项一起使用，这样就不用在文本编辑器中修改提交信息。例如：

```shell
git commit --amend -m "将 test01.txt 文件重命名为 test02.txt，并修改文件内容"
```

:::

## 撤销已修改的文件

如果工作区的文件被修改了但还没有提交到暂存区，但又不想保存工作区的修改，可以使用 [git restore](../../computers/commands/git/git_restore.md) 命令撤销对指定文件的修改。

例如：修改 `test02.txt` 文件，并删除 `README.md` 文件。

```shell
echo 'test02test02' >> test02.txt
rm README.md
```

查看当前文件状态，更改的文件都已放在未暂存清单中。

```shell
git status

On branch main
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    README.md
        modified:   test02.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

根据提示，可以使用 [git restore](../../computers/commands/git/git_restore.md) 命令撤销对指定文件的修改。例如：撤销对 `README.md` 文件的修改。

```shell
git restore README.md
```

再次查看当前文件状态，`README.md` 文件已经不在未暂存清单中，成功恢复 `README.md` 文件。

```shell
git status

On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test02.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

::: tip
[git restore](../../computers/commands/git/git_restore.md) 这个命令在 Git V2.23 版本以后被引入，如果在 Git V2.23 版本之前，则使用 [git checkout](../../computers/commands/git/git_checkout.md) 命令撤销已修改的文件。例如：

```shell
git checkout -- README.md
```

:::

## 撤销已暂存的文件

如果工作区的文件还没修改完就被提交到暂存区，可以使用 [git restore](../../computers/commands/git/git_restore.md) 命令撤销对指定文件的暂存。

### 依次撤销

先将指定文件从暂存区撤销到未暂存清单中，再撤销对指定文件的修改。

例如：不小心将 `test02.txt` 文件，提交到暂存区。

```shell
git add .
```

查看当前文件状态，`test02.txt` 文件已放在已暂存清单中。

```shell
git status

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   test02.txt
```

根据提示，可以使用 [git restore](../../computers/commands/git/git_restore.md) 命令的 `--staged` 选项撤销对指定文件的暂存。例如：撤销对 `test02.txt` 文件的暂存。

```shell
git restore --staged test02.txt
```

再次查看当前文件状态，`test02.txt` 文件已经不在已暂存清单中，而在未暂存清单中。

```shell
git status

On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test02.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

::: tip
[git restore](../../computers/commands/git/git_restore.md) 这个命令在 Git V2.23 版本以后被引入，如果在 Git V2.23 版本之前，则使用 [git reset](../../computers/commands/git/git_reset.md) 命令撤销已暂存的文件。例如：

```shell
git reset HEAD test02.txt
```

:::

再撤销 `test02.txt` 文件：

```shell
git restore test02.txt
```

### 直接撤销

上面的两个步骤可以用一步实现。例如：

```shell
git restore -WS test02.txt
```

- `-W` 或 `--worktree` 选项用于撤销工作区内容，默认选项
- `-S` 或 `--staged` 选项用于撤销暂存区内容

`-W` 和 `-S` 选项一起使用，可以同时撤销工作区和暂存区所有文件的修改。
