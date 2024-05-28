---
title: 分支管理
icon: branch
date: 2024-05-27
order: 9
category: DevOps
tag:
    - Git
---

几乎所有的版本控制系统都以某种形式支持分支，使用分支意味着您可以把您的工作从开发主线上分离开来，以免影响开发主线。在很多版本控制系统中，这是一个略微低效的过程——常常需要完全创建一个源代码目录的副本，对于大项目来说，这样的过程会耗费很多时间。

而 Git 可以轻量的处理分支，创建新分支这一操作几乎能在瞬间完成，并且在不同分支之间的切换操作也是一样便捷。与许多其它版本控制系统不同，Git 鼓励在工作流程中频繁地使用分支与合并，哪怕一天之内进行许多次。

## 分支简介

Git 保存数据的方式，不是文件的变化或者差异，而是一系列不同时刻的 **快照。**

在进行提交（`commit id`）操作时，Git 会保存一个提交对象。该提交对象会包含一个指向暂存内容快照的指针，还包含了作者的姓名和邮箱、提交时输入的信息以及指向它的父对象的指针。首次提交产生的提交对象没有父对象，普通提交操作产生的提交对象有一个父对象，而由多个分支合并产生的提交对象有多个父对象。

暂存（`git add`）操作会为每一个文件计算校验和（SHA-1 哈希算法），然后会把当前版本的文件快照保存到 Git 仓库中（Git 使用 **blob 对象** 来保存它们），最终将校验和加入到暂存区域等待提交。

当使用 `git commit` 进行提交操作时，Git 会先计算每一个子目录（本例中只有项目根目录）的校验和，然后在 Git 仓库中这些校验和保存为 **树对象**。随后，Git 便会创建一个提交对象，它除了包含上面提到的那些信息外，还包含指向这个树对象（项目根目录）的指针。如此一来，Git 就可以在需要的时候重现此次保存的快照。

首次提交没有父对象指针，但之后的提交，产生的提交对象会包含一个指向上次提交对象（父对象）的指针。

当前 Git 仓库中有四个对象：两个 **blob 对象**（保存着文件快照）、一个 **树对象**（记录着目录结构和 `blob` 对象索引）以及一个 **提交对象**（包含着指向前述树对象的指针和所有提交信息）。

例如：使用 `git log -3 --pretty=raw` 查看当前仓库前三个的提交对象（`commit`）和树对象（`tree`）。

```shell
git log -3 --pretty=raw

commit 7333fb5d96fab255ef780add57a41ffb1d3fbfe1
tree 53f69acb505bf9bfce1a4d9299b79df6d2e1c6be
parent 99114d61ea731daf4d5663aa77d83810a8c38680
author Sank Gao <sankgao@example.com> 1716518590 +0800
committer Sank Gao <sankgao@example.com> 1716533017 +0800

    将 test01.txt 文件重命名为 test02.txt，并修改文件内容

commit 99114d61ea731daf4d5663aa77d83810a8c38680
tree 74eeee4b7421028201d7fb950b9d66c8aff22937
parent 232657552142c8fe97ac32f5801c70137ed95246
author Sank Gao <sankgao@example.com> 1716452905 +0800
committer Sank Gao <sankgao@example.com> 1716452905 +0800

    modified test01.txt

commit 232657552142c8fe97ac32f5801c70137ed95246
tree 678664884292fb792d418030055ace3c8dcc5d91
parent f3b964575a8a1d6919e591173d8a788f968a4140
author Sank Gao <sankgao@example.com> 1716445579 +0800
committer Sank Gao <sankgao@example.com> 1716445579 +0800

    change file

    add README.md

    modified test01.txt
```

例如：使用 `git ls-tree` 查看当前仓库指定树对象（`tree`）的 blob 对象。

```shell
git ls-tree 53f69acb505bf9bfce1a4d9299b79df6d2e1c6be

100644 blob e6249324cb83b7d63fa664f4fb4dd1ada0133053    README.md
100644 blob b4682767c489896d37957a8b81d946d262ffbe3e    test02.txt
```

Git 的分支，其实本质上仅仅是指向提交对象的可变指针。Git 的默认分支名字是 `main` 或 `master`。在多次提交操作之后，您其实已经有一个指向最后那个提交对象的 `master` 分支。`master` 分支会在每次提交时自动向前移动。

::: info
Git 的 `master` 分支并不是一个特殊分支，它跟其它分支完全没有区别。之所以几乎每一个仓库都有 `master` 分支，是因为 [git init](../../computers/commands/git/git_init.md) 命令默认创建它，并且大多数人都懒得去改动它。
:::

## 创建分支

分支只是为您创建了一个可以移动的新的指针。使用 [git branch](../../computers/commands/git/git_branch.md) 命令，创建一个新分支，这会在当前所在的提交对象上创建一个指针。

例如：要开发一个新功能，一般会以主分支（`main`）为基础，创建一个新分支（`dev`），并在新分支中开发新功能。

```shell
git branch dev
```

查看提交对象指针，`main` 分支和 `dev` 分支都指向同一个提交对象指针（`7333fb5`）。

```shell
git log -1 --oneline

7333fb5 (HEAD -> main, origin/main, dev) 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
```

Git 有一个名为 HEAD 的特殊指针。请注意它和许多其它版本控制系统（如：Subversion 或 CVS）里的 HEAD 概念完全不同。在 Git 中，它是一个指针，指向当前所在的本地分支（将 HEAD 想象为当前分支的别名）。在本例中，HEAD 指针仍然在 `main` 分支上。因为 `git branch` 命令仅仅 **创建** 一个新分支，并不会自动切换到新分支中去。

## 分支切换

### HEAD 指向当前所在的分支

使用 [git checkout](../../computers/commands/git/git_checkout.md) 或 [git switch](../../computers/commands/git/git_switch.md) 命令，将切换到已存在的其它分支，HEAD 也会指向指定的分支。分支切换会改变您工作目录中的文件。

例如：切换到新创建的 `dev` 分支，且 HEAD 指针指向 `dev` 分支。

```shell
git checkout dev
```

查看 HEAD 指针，HEAD 指针指向 `dev` 分支。

```shell
git log -1 --oneline

7333fb5 (HEAD -> dev, origin/main, main) 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
```

### HEAD 指针随着提交操作自动向前移动

如果再次执行提交（`git commit`）操作，您的 `dev` 分支向前移动了，但是 `main` 分支却没有，HEAD 仍然指向运行 `git checkout` 时所指的对象。

例如：在 `dev` 分支中开发新功能，并执行提交（`git commit`）操作。

```shell
echo 'test01' > test01.txt
git add test01.txt
git commit -m 'add test01.txt'

[dev 0f59771] add test01.txt
 1 file changed, 1 insertion(+)
 create mode 100644 test01.txt
```

查看 `dev` 分支，HEAD 指针指向新的提交对象 `0f59771`。

```shell
git log -2 --oneline

0f59771 (HEAD -> dev) add test01.txt
7333fb5 (origin/main, main) 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
```

### 检出时 HEAD 随之移动

再切换回 `main` 分支，使 HEAD 指针指回 `main` 分支，并将工作目录恢复成 `main` 分支所指向的快照内容。

先查看 `dev` 分支内容：

```shell
ls

README.md  test01.txt  test02.txt
```

切换回 `main` 分支：

```shell
git checkout main
```

查看 `main` 分支，HEAD 指针指向的提交对象依旧是 `7333fb5`。

```shell
git log -1 --oneline

7333fb5 (HEAD -> main, origin/main) 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
```

查看 `main` 分支内容，已恢复成 `main` 分支所指向的快照内容。

```shell
ls

README.md  test02.txt
```

### 项目分叉历史

如果您正在 `dev` 分支中开发新功能，突然在之前的（主分支 `main`）环境中有一个紧急问题需要解决，但又不想放弃 `dev` 分支中的修改，可以通过 Git 回到 `main` 分支环境。

::: tip
在您这么做之前，要留意您的工作目录和暂存区里那些还没有被提交的修改，它可能会和您即将检出的分支产生冲突从而阻止 Git 切换到该分支。最好的方法是，在您切换分支之前，保持好一个干净的状态。有一些方法可以绕过这个问题，即 **贮藏**（stashing） 和 **修补提交**（commit amending）。
:::

现在，假设您已经把您的修改全部提交了，这时您可以切换回 `main` 分支。

```shell
git checkout main
```

这个时候，您的工作目录和您开始在 `dev` 分支上开发新功能之前一模一样，现在您可以专心修复紧急问题了。**注意**：当您切换分支的时候，Git 会重置您的工作目录，使其看起来像回到了您在那个分支上最后一次提交的样子。Git 会自动添加、删除、修改文件以确保此时您的工作目录和这个分支最后一次提交时的样子一模一样。

接下来，您要修复这个紧急问题。建立一个 `hotfix` 分支，在该分支上工作直到问题解决。

创建并切换到 `hotfix` 分支：

```shell
git checkout -b hotfix

Switched to a new branch 'hotfix'
```

在 `hotfix` 分支中修改，解决问题：

```shell
echo -e 'test02\ntest02test02' > test02.txt
git commit -am 'modified test02.txt'

[hotfix 6a63f37] modified test02.txt
 1 file changed, 2 insertions(+), 1 deletion(-)
```

查看 `hotfix` 分支，HEAD 指针指向新的提交对象 `6a63f37`。

```shell
git log -2 --oneline

6a63f37 (HEAD -> hotfix) modified test02.txt
7333fb5 (origin/main, main) 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
```

现在，这个项目的提交历史已经产生了分叉。因为刚才您创建了一个新分支，并切换过去进行了一些工作，随后又切换回 `main` 分支进行了另外一些工作。上述两次改动针对的是不同分支，您可以在不同分支间不断地来回切换和工作，并在时机成熟时将它们合并起来。

使用 `git log -5 --oneline --graph --all` 命令查看分叉历史，显示所有分支中前五个提交记录，并以简短的 ASCII 图形的方式显示。

```shell
git log -5 --oneline --graph --all

* 6a63f37 (HEAD -> hotfix) modified test02.txt
| * 0f59771 (dev) add test01.txt
|/
* 7333fb5 (origin/main, main) 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
* 99114d6 modified test01.txt
* 2326575 change file
```

::: info 创建新分支的同时切换过去
通常会在创建一个新分支后立即切换过去，这可以用 `git checkout -b <newbranchname>` 一条命令搞定。
:::

## 分支合并

### 快进合并

您可以运行您的测试，确保您的修改是正确的。使用 [git merge](../../computers/commands/git/git_merge.md) 命令将 `hotfix` 分支合并到 `main` 分支来部署到线上。

```shell
git checkout main
git merge hotfix

Updating 7333fb5..6a63f37
Fast-forward
 test02.txt | 3 ++-
 1 file changed, 2 insertions(+), 1 deletion(-)
```

在合并的时候，您应该注意到了 **快进**（`fast-forward`）这个词。由于要合并的分支 `hotfix` 所指向的提交 `6a63f37` 是您所在的提交 `7333fb5` 的直接后继，因此 Git 会直接将指针向前移动。换句话说，当您试图合并两个分支时，如果顺着一个分支走下去能够到达另一个分支，那么 Git 在合并两者的时候，只会简单的将指针向前推进（指针右移），因为这种情况下的合并操作没有需要解决的分歧——这就叫做 **快进**（`fast-forward`）。

现在，最新的修改已经在 `main` 分支所指向的提交快照中，您可以着手发布该修复了。查看 `main` 分支，HEAD 指针指向 `hotfix` 分支的提交对象 `6a63f37`。

```shell
git log -2 --oneline

6a63f37 (HEAD -> main, hotfix) modified test02.txt
7333fb5 (origin/main) 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
```

关于这个紧急问题的解决方案发布之后，您准备回到被打断之前时的工作中。然而，您应该先删除 `hotfix` 分支，因为您已经不再需要它了，`main` 分支已经指向了同一个位置。您可以使用带 `-d` 选项的 `git branch` 命令来删除分支。

```shell
git branch -d hotfix

Deleted branch hotfix (was 6a63f37).
```

现在可以切换回 `dev` 分支继续开发新功能：

```shell
git checkout dev
echo -e 'test02test02\ntest02' >> test02.txt
git commit -am 'modified test02.txt'

[dev ad6950e] modified test02.txt
 1 file changed, 2 insertions(+)
```

查看 `dev` 分支，HEAD 指针指向新的提交对象 `ad6950e`。

```shell
git log -3 --oneline

ad6950e (HEAD -> dev) modified test02.txt
0f59771 add test01.txt
7333fb5 (origin/main) 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
```

### 三方合并

有时候合并操作不会如此顺利。如果您在两个不同的分支中，对同一个文件的同一个部分进行了不同的修改，Git 就没法自动的合并它们。这种情况称为 **合并冲突。**

例如：已经在 `dev` 分支中开发完新功能，将 `dev` 分支合并到 `main` 分支中。在 `dev` 和 `main` 分支中，同时修改了 `test02.txt` 文件的同一个部分。

```shell
git checkout main
git merge dev

Auto-merging test02.txt
CONFLICT (content): Merge conflict in test02.txt
Automatic merge failed; fix conflicts and then commit the result.
```

此时 Git 做了合并，但是没有自动地创建一个新的合并提交。Git 会暂停下来，等待您去解决合并产生的冲突。在合并冲突后使用 `git status` 命令来查看那些因包含合并冲突而处于未合并（`unmerged`）状态的文件。

```shell
git status

On branch main
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Changes to be committed:
        new file:   test01.txt

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   test02.txt
```

任何因包含合并冲突而有待解决的文件，都会以未合并状态标识出来。Git 会在有冲突的文件中加入标准的冲突解决标记（`Unmerged paths`），这样您可以打开这些包含冲突的文件然后手动解决冲突。出现冲突的文件会包含一些特殊区段，看起来如下：

```shell
<<<<<<< HEAD
test02
test02test02
=======
test02.txt
test02test02
test02
>>>>>>> dev
```

这表示 HEAD 所指示的版本（也就是您 `main` 分支所在的位置，因为您在运行 `merge` 命令的时候已经检出到了这个分支）在这个区段的上半部分（`=======` 的上半部分），而 `dev` 分支所指示的版本在 `=======` 的下半部分。为了解决冲突，您必须选择使用由 `=======` 分割的两部分中的一个，或者您也可以自行合并这些内容。例如：您可以通过把这段内容换成下面的样子来解决冲突。

```shell
test02
test02test02
```

上述的冲突解决方案仅保留了其中一个分支的修改，并且 `<<<<<<<` 、`=======` 和 `>>>>>>>` 这些行被完全删除了。在您解决了所有文件里的冲突之后，对每个文件使用 `git add` 命令来将其标记为冲突已解决。一旦暂存这些原本有冲突的文件，Git 就会将它们标记为冲突已解决。

```shell
git add test02.txt
git status

On branch main
All conflicts fixed but you are still merging.
  (use "git commit" to conclude merge)

Changes to be committed:
        new file:   test01.txt
```

如果您对结果感到满意，并且确定之前有冲突的文件都已经暂存了，这时您可以输入 `git commit` 来完成合并提交。

```shell
git commit -m 'merge dev'

[main 4b0390e] merge dev
```

使用 `git log -5 --oneline --graph --all` 命令查看分叉历史，显示所有分支中前五个提交记录，并以简短的 ASCII 图形的方式显示。

```shell
git log -5 --oneline --graph --all

*   4b0390e (HEAD -> main) merge dev
|\
| * ad6950e (dev) modified test02.txt
| * 0f59771 add test01.txt
* | 6a63f37 modified test02.txt
|/
* 7333fb5 (origin/main) 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
```

这和您之前合并 `hotfix` 分支的时候看起来有一点不一样。在这种情况下，您的开发历史从一个更早的地方开始分叉开来（`diverged`）。因为，`main` 分支所在提交并不是 `dev` 分支所在提交的直接祖先，Git 不得不做一些额外的工作。出现这种情况的时候，Git 会使用两个分支的末端所指的快照（`6a63f37` 和 `ad6950e`）以及这两个分支的公共祖先（`7333fb5`），做一个简单的三方合并。

和之前将分支指针向前推进所不同的是，Git 将此次三方合并的结果做了一个新的快照并且自动创建一个新的提交指向它。这个被称作一次合并提交，它的特别之处在于他有不止一个父提交。

既然您的修改已经合并进来了，就不再需要 `dev` 分支了。现在您可以在任务追踪系统中关闭此项任务，并删除这个分支。

```shell
git branch -d dev

Deleted branch dev (was ad6950e).
```

如果想使用图形化工具来解决冲突，可以运行 `git mergetool`，该命令会为您启动一个合适的可视化合并工具，并带领您一步一步解决这些冲突。

## 分支管理

`git branch` 命令不只是可以创建与删除分支。如果不加任何参数运行它，会得到当前所有分支的一个列表：

```shell
git branch

* main
```

`main` 分支前的 `*` 字符表示现在检出的那一个分支（也就是说，当前 HEAD 指针所指向的分支）。

如果需要查看每一个分支的最后一次提交，可以运行 `git branch -v` 命令。

```shell
git branch -v

* main 4b0390e merge dev
```

请牢记，当您做这么多操作的时候，这些分支全部都存于本地。当您新建和合并分支的时候，所有这一切都只发生在您本地的 Git 版本库中，没有与服务器发生交互。

## 远程分支

远程引用是对远程仓库的引用（指针），包括分支、标签等等。通过 `git ls-remote <remote>` 命令来显式地获得远程引用的完整列表，或者通过 `git remote show <remote>` 获得远程分支的更多信息。然而，一个更常见的做法是利用 远程跟踪 分支。

远程跟踪分支是远程分支状态的引用。它们是您无法移动的本地引用。一旦您进行了网络通信，Git 就会为您移动它们以精确反映远程仓库的状态。请将它们看做书签，这样可以提醒您该分支在远程仓库中的位置就是您最后一次连接到它们的位置。

它们以 `<remote>/<branch>` 的形式命名，例如：如果您想要看您最后一次与远程仓库 `origin` 通信时 `main` 分支的状态，您可以查看 `origin/main` 分支。您与同事合作解决一个问题并且他们推送了一个 `dev` 分支，您可能有自己的本地 `dev` 分支，然而在服务器上的分支会以 `origin/dev` 来表示。

::: info
远程仓库名字 `origin` 与分支名字 `main` 一样，在 Git 中并没有任何特别的含义一样。同时 `main` 是当您运行 `git init` 时默认的起始分支名字，原因仅仅是它的广泛使用，`origin` 是当您运行 `git clone` 时默认的远程仓库名字。如果您运行 `git clone -o booyah`，那么您默认的远程分支名字将会是 `booyah/main`。
:::

如果您在本地的 `main` 分支做了一些工作，在同一段时间内有其他人推送提交到远程 `main` 分支（`origin/main`）并且更新了它的 `main` 分支，这就是说您们的提交历史已走向不同的方向。即便这样，只要您保持不与 `origin` 服务器连接（并拉取数据），您的 `origin/master` 指针就不会移动。

如果要与给定的远程仓库同步数据，运行 `git fetch <remote>` 命令（在本例中为 `git fetch origin`）。这个命令查找 `origin` 是哪一个服务器（在本例中，它是 `/home/sankgao/projects/git_tutorials.git`），从中抓取本地没有的数据，并且更新本地数据库，移动 `origin/main` 指针到更新之后的位置。
