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
Git 的 `master` 分支并不是一个特殊分支，它跟其它分支完全没有区别。之所以几乎每一个仓库都有 `master` 分支，是因为 [git init](../../../commands/git/git_init.md) 命令默认创建它，并且大多数人都懒得去改动它。
:::

## 分支规范

在 Git 中，分支策略和规范对于团队协作、代码管理和版本控制至关重要。下面是一些建议的 Git 分支规范：

- 主分支（master/main）
    - 不应直接在主分支上进行开发工作
    - 不应直接在主分支上进行开发工作
    - 发布新版本时，从主分支创建标签（tag）

- 开发分支（develop）
    - 开发分支用于集成新功能、修复缺陷和进行日常开发工作
    - 开发分支应该是主分支的不稳定版本
    - 所有特性分支和修复分支最终都应合并到开发分支

- 特性分支（feature-xxx）
    - 为每个新功能或大型改进创建一个特性分支
    - 分支名称应遵循 `feature-` 前缀加功能描述的模式，如：`feature-add-user-management`
    - 在特性分支上完成开发工作后，应将其合并到开发分支

- 修复分支（bugfix-xxx）
    - 为每个缺陷修复创建一个修复分支
    - 分支名称应遵循 `bugfix-` 前缀加缺陷编号或描述的模式，如：`bugfix-123-login-issue`
    - 在修复分支上完成修复工作后，应将其合并到开发分支和/或主分支（如果修复影响当前版本）

- 发布分支（release-xxx）
    - 在准备发布新版本时，从开发分支创建一个发布分支
    - 发布分支用于进行发布前的测试、文档更新和最终准备
    - 一旦发布分支通过测试并准备好发布，将其合并到主分支并打上标签

- 热修复分支（hotfix-xxx）
    - 对于生产环境中出现的紧急问题，可以从主分支创建热修复分支
    - 热修复分支应尽快修复问题，并通过测试后合并到主分支和开发分支
    - 合并后，主分支应立即打上新的标签进行发布

- 分支命名规范
    - 分支名称应简洁明了，避免过长和复杂的描述
    - 使用小写字母和连字符，避免空格和特殊字符
    - 遵循一致的命名模式，以便团队成员能够快速理解分支的用途和目的

- 分支保护
    - 对主分支设置保护，限制直接推送和合并权限
    - 使用代码审查（code review）机制，确保合并到主分支或开发分支的代码质量
    - 对于敏感或重要的分支，可以设置额外的权限和审查流程

- 文档和沟通
    - 在团队内部共享并维护 Git 分支规范文档
    - 定期回顾和更新分支规范，以适应项目发展和团队需求的变化
    - 通过团队会议、邮件或聊天工具等方式，确保团队成员了解并遵循分支规范

遵循这些规范可以帮助团队更有效地使用 Git 进行版本控制和协作开发，减少冲突和误解，提高代码质量和开发效率。

## 创建分支

分支只是为您创建了一个可以移动的新的指针。使用 [git branch](../../../commands/git/git_branch.md) 命令，创建一个新分支，这会在当前所在的提交对象上创建一个指针。

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

使用 [git checkout](../../../commands/git/git_checkout.md) 或 [git switch](../../../commands/git/git_switch.md) 命令，将切换到已存在的其它分支，HEAD 也会指向指定的分支。分支切换会改变您工作目录中的文件。

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

您可以运行您的测试，确保您的修改是正确的。使用 [git merge](../../../commands/git/git_merge.md) 命令将 `hotfix` 分支合并到 `main` 分支来部署到线上。

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

关于这个紧急问题的解决方案发布之后，您准备回到被打断之前时的工作中。然而，您应该先删除 `hotfix` 分支，因为您已经不再需要它了，`main` 分支已经指向了同一个位置。您可以使用带 `-d` 选项的 [git branch](../../../commands/git/git_branch.md) 命令来删除分支。

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

此时 Git 做了合并，但是没有自动地创建一个新的合并提交。Git 会暂停下来，等待您去解决合并产生的冲突。在合并冲突后使用 [git status](../../../commands/git/git_status.md) 命令来查看那些因包含合并冲突而处于未合并（`unmerged`）状态的文件。

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

特殊标识 `<<<<<<< HEAD` 和 `=======` 之间的内容是当前分支（`main`）所更改的内容；特殊标识`=======` 和 `>>>>>>> dev` 之间的内容是所合并的版本分支（`dev`）更改的内容。为了解决冲突，您必须选择使用由 `=======` 分割的两部分中的一个，或者您也可以自行合并这些内容。例如：您可以通过把这段内容换成下面的样子来解决冲突。

```shell
test02
test02test02
```

上述的冲突解决方案仅保留了其中一个分支的修改，并且 `<<<<<<<` 、`=======` 和 `>>>>>>>` 这些行被完全删除了。在您解决了所有文件里的冲突之后，对每个文件使用 [git add](../../../commands/git/git_add.md) 命令来将其标记为冲突已解决。一旦暂存这些原本有冲突的文件，Git 就会将它们标记为冲突已解决。

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

[git branch](../../../commands/git/git_branch.md) 命令不只是可以创建与删除分支。如果不加任何参数运行它，会得到当前所有分支的一个列表：

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

远程引用是对远程仓库的引用（指针），包括分支、标签等等。使用 [git ls-remote \<remote\>](../../../commands/git/git_ls-remote.md) 命令来获取远程引用的完整列表，或者通过 [git remote show \<remote\>](../../../commands/git/git_remote.md) 获得远程分支的更多信息。然而，一个更常见的做法是利用 **远程跟踪分支。**

远程跟踪分支是远程分支状态的引用。远程跟踪分支是您无法移动的本地引用。一旦您进行了网络通信，Git 就会为您移动远程跟踪分支以精确反映远程仓库的状态，远程跟踪分支以 `<remote>/<branch>` 的形式命名。

例如：上面创建分支时，查看的提交对象指针。本地分支（`main`、`dev`）和远程分支（`origin/main`）都指向 `7333fb5` 提交对象。

```shell
git log -1 --oneline

7333fb5 (HEAD -> main, origin/main, dev) 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
```

::: info
远程仓库名字 `origin` 与分支名字 `main` 一样，在 Git 中并没有任何特别的含义一样。同时 `main` 是当您运行 `git init` 时默认的起始分支名字，原因仅仅是它的广泛使用，`origin` 是当您运行 `git clone` 时默认的远程仓库名字。如果您运行 `git clone -o booyah`，那么您默认的远程分支名字将会是 `booyah/main`。
:::

如果您在本地的 `main` 分支做了一些工作，在同一段时间内有其他人推送提交到远程 `main` 分支（`origin/main`）并且更新了它的 `main` 分支，这就是说您们的提交历史已走向不同的方向。即便这样，只要您保持不与 `origin` 服务器连接（并拉取数据），您的 `origin/master` 指针就不会移动。

例如：查看当前提交对象。本地分支（`main`）指向 `4b0390e`，而远程分支（`origin/main`）依然指向 `7333fb5`。

```shell
git log -5 --oneline

4b0390e (HEAD -> main) merge dev
ad6950e modified test02.txt
6a63f37 modified test02.txt
0f59771 add test01.txt
7333fb5 (origin/main) 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
```

如果要与给定的远程仓库同步数据，运行 [git fetch \<remote\>](../../../commands/git/git_fetch.md) 命令（在本例中为 `git fetch origin`）。这个命令查找 `origin` 是哪一个服务器（在本例中，它是 `/home/sankgao/projects/git_tutorials.git`），从中抓取本地没有的数据，并且更新本地数据库，移动 `origin/main` 指针到更新之后的位置。

### 推送

当您想要公开分享一个分支时，需要将其推送到有写入权限的远程仓库上。本地的分支并不会自动与远程仓库同步——您必须显式地推送想要分享的分支。这样，您就可以把不愿意分享的内容放到私人分支上，而将需要和别人协作的内容推送到公开分支。运行 `git push <remote> <branch>` 命令，将本地指定分支推送到远程仓库中。

例如：使用 [git push](../../../commands/git/git_push.md) 命令，推送本地 `main` 分支到远程仓库的 `origin/main` 分支中。

```shell
git push origin main

Enumerating objects: 13, done.
Counting objects: 100% (13/13), done.
Delta compression using up to 2 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (11/11), 899 bytes | 899.00 KiB/s, done.
Total 11 (delta 4), reused 0 (delta 0), pack-reused 0 (from 0)
To /home/sankgao/projects/git_tutorials.git
   7333fb5..4b0390e  main -> main
```

再次查看提交对象，本地分支（`main`）和远程分支（`origin/main`）都指向 `4b0390e`。

```shell
git log -5 --oneline

4b0390e (HEAD -> main, origin/main) merge dev
ad6950e modified test02.txt
6a63f37 modified test02.txt
0f59771 add test01.txt
7333fb5 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
```

### 跟踪分支

从一个远程跟踪分支检出一个本地分支会自动创建所谓的 **跟踪分支**（它跟踪的分支叫做 **上游分支**），跟踪分支是与远程分支有直接关系的本地分支。如果在一个跟踪分支上输入 `git pull`，Git 能自动地识别去哪个服务器上抓取、合并到哪个分支。

当前远程只有 `origin/main` 分支，先创建远程 `origin/dev` 和 `origin/test` 分支：

```shell
git checkout -b dev
git push origin dev

Total 0 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To /home/sankgao/projects/git_tutorials.git
 * [new branch]      dev -> dev


git checkout main
git checkout -b test
git push origin test

Total 0 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To /home/sankgao/projects/git_tutorials.git
 * [new branch]      test -> test
```

查看本地和远程跟踪分支：

```shell
git branch -a

  dev
  main
* test
  remotes/origin/dev
  remotes/origin/main
  remotes/origin/test
```

删除本地 `dev` 和 `test` 分支，并查看本地和远程跟踪分支：

```shell
git checkout main
git branch -d dev
git branch -d test
git branch -a

* main
  remotes/origin/dev
  remotes/origin/main
  remotes/origin/test
```

当克隆一个仓库时，它通常会自动地创建一个跟踪 `origin/main` 的 `main` 分支。然而，如果您愿意的话可以设置其它的跟踪分支，或是一个在其它远程仓库上的跟踪分支，又或者不跟踪 `main` 分支。最简单的方式就是运行 `git checkout -b <branch> <remote>/<branch>` 命令。这是一个十分常用的操作所以 Git 提供了 `--track` 快捷方式，这两种方式前提是远程分支已存在。

```shell
git checkout --track origin/test

branch 'test' set up to track 'origin/test'.
Switched to a new branch 'test'
```

由于这个操作太常用了，该捷径本身还有一个捷径。如果要切换的本地分支（`dev`）不存在但在远程分支（`origin/dev`）存在，那么 Git 就会创建一个跟踪分支：

```shell
git checkout dev

branch 'dev' set up to track 'origin/dev'.
Switched to a new branch 'dev'
```

如果想要将本地分支与远程分支设置为不同的名字，可以使用 `git checkout -b` 命令增加一个不同名字的本地分支：

```shell
git checkout -b develop origin/dev

branch 'develop' set up to track 'origin/dev'.
Switched to a new branch 'develop'
```

现在，本地分支 `develop` 会自动从 `origin/dev` 拉取。

设置已有的本地分支跟踪一个刚刚拉取下来的远程分支，或者想要修改正在跟踪的上游分支，您可以在任意时间使用 `-u` 或 `--set-upstream-to` 选项运行 `git branch` 来显式地设置。

```shell
git branch -u origin/dev

branch 'develop' set up to track 'origin/dev'.
```

### 拉取

当 [git fetch](../../../commands/git/git_fetch.md) 命令从服务器上抓取本地没有的数据时，它并不会修改工作目录中的内容。它只会获取数据然后让您自己合并。而 [git pull](../../../commands/git/git_pull.md) 命令在大多数情况下它的含义是一个 [git fetch](../../../commands/git/git_fetch.md) 紧接着一个 [git merge](../../../commands/git/git_merge.md) 命令。 如果有一个设置好的跟踪分支，不管它是显式地设置还是通过 `clone` 或 `checkout` 命令为您创建的，`git pull` 都会查找当前分支所跟踪的服务器与分支，从服务器上抓取数据然后尝试合并入那个远程分支。

由于 [git pull](../../../commands/git/git_pull.md) 的魔法经常令人困惑所以通常单独显式地使用 `fetch` 与 `merge` 命令会更好一些。

### 删除远程分支

假设您已经通过远程分支做完所有的工作了——也就是说您和您的协作者已经完成了一个特性，并且将其合并到了远程仓库的 `main` 分支（或任何其他稳定代码分支）。可以运行带有 `--delete` 选项的 [git push](../../../commands/git/git_pull.md) 命令来删除一个远程分支。

例如：如果从服务器上删除 `test` 分支，运行下面的命令：

```shell
git push origin --delete test

To /home/sankgao/projects/git_tutorials.git
 - [deleted]         test
```

基本上这个命令做的只是从服务器上移除这个指针。Git 服务器通常会保留数据一段时间直到垃圾回收运行，所以如果不小心删除掉了，通常是很容易恢复的。

## 变基

在 Git 中整合来自不同分支的修改主要有两种方法：合并（`merge`）和变基（`rebase`）。

整合分支最容易的方法是 `merge` 命令。它会把两个分支的最新快照以及二者最近的共同祖先进行三方合并，合并的结果是生成一个新的快照（并提交）。

- **合并**：使用 `merge` 命令，会把两个分支的最新快照以及二者最近的共同祖先进行三方合并，合并的结果是生成一个新的快照（并提交）
- **变基**：使用 `rebase` 命令，将提交到某一分支上的所有修改都移至另一分支上，就好像 “重新播放” 一样

还有一种方法：您可以提取在 C4 中引入的补丁和修改，然后在 C3 的基础上应用一次。在 Git 中，这种操作就叫做 **变基**（`rebase`）。您可以使用 rebase 命令将提交到某一分支上的所有修改都移至另一分支上，就好像 “重新播放” 一样。

例如：将 `dev` 分支变基到 `main` 分支上。

先在 `dev` 分支上提交信息：

```shell
git checkout dev
echo 'test01test01' >> test01.txt
echo 'test02' >> test02.txt
git commit -am 'modified file all'

[dev 835d939] modified file all
 2 files changed, 2 insertions(+)
```

在 `main` 分支上提交信息：

```shell
git checkout main
echo 'test01' >> test01.txt
git commit -am 'modified test01.txt'

[main 5a1d206] modified test01.txt
 1 file changed, 1 insertion(+)
```

使用 `git log -5 --oneline --graph --all` 命令查看分叉历史，显示所有分支中前五个提交记录，并以简短的 ASCII 图形的方式显示。

```shell
git log -5 --oneline --graph --all

* 5a1d206 (HEAD -> main) modified test01.txt
| * 835d939 (dev) modified file all
|/
*   4b0390e (origin/main, origin/dev, test, develop) merge dev
|\
| * ad6950e modified test02.txt
| * 0f59771 add test01.txt
```

将 `dev` 分支变基到 `main` 分支上：

```shell
git checkout dev
git rebase main

Auto-merging test01.txt
CONFLICT (content): Merge conflict in test01.txt
error: could not apply 835d939... modified file all
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
Could not apply 835d939... modified file all
```

提示 `test01.txt` 文件合并冲突，也可以通过 [git status](../../../commands/git/git_status.md) 命令查看：

```shell
git status

interactive rebase in progress; onto 5a1d206
Last command done (1 command done):
   pick 835d939 modified file all
No commands remaining.
You are currently rebasing branch 'dev' on '5a1d206'.
  (fix conflicts and then run "git rebase --continue")
  (use "git rebase --skip" to skip this patch)
  (use "git rebase --abort" to check out the original branch)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   test02.txt

Unmerged paths:
  (use "git restore --staged <file>..." to unstage)
  (use "git add <file>..." to mark resolution)
        both modified:   test01.txt
```

任何因包含合并冲突而有待解决的文件，都会以未合并状态标识出来。`test01.txt` 冲突的文件内容如下：

```shell
test01
<<<<<<< HEAD
test01
=======
test01test01
>>>>>>> 835d939 (modified file all)
```

将文件改为以下内容解决冲突：

```shell
test01
test01test01
```

上述的冲突解决方案仅保留了其中一个分支的修改，并且 `<<<<<<<` 、`=======` 和 `>>>>>>>` 这些行被完全删除了。在您解决了所有文件里的冲突之后，对每个文件使用 [git add](../../../commands/git/git_add.md) 命令来将其标记为冲突已解决。一旦暂存这些原本有冲突的文件，Git 就会将它们标记为冲突已解决。

将冲突文件 `test01.txt` 暂存，并继续变基：

```shell
git add test01.txt
git rebase --continue

[detached HEAD d624805] modified file all, dev rebase main
 2 files changed, 2 insertions(+), 1 deletion(-)
Successfully rebased and updated refs/heads/dev.
```

使用 `git log -5 --oneline --graph --all` 命令查看分叉历史，显示所有分支中前五个提交记录，并以简短的 ASCII 图形的方式显示。

```shell
git log -5 --oneline --graph --all

* d624805 (HEAD -> dev) modified file all, dev rebase main
* 5a1d206 (main) modified test01.txt
*   4b0390e (origin/main, origin/dev, test, develop) merge dev
|\
| * ad6950e modified test02.txt
| * 0f59771 add test01.txt
```

查看当前的分支：

```shell
git branch

* dev
  develop
  main
  test
```

**变基原理** 是首先找到这两个分支（即当前分支 `dev`、变基操作的目标基底分支 `main`）的最近共同祖先 `4b0390e`，然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件，然后将当前分支指向目标基底 `5a1d206`，最后以此将之前另存为临时文件的修改依序应用。

现在回到 `main` 分支，进行一次快进合并。

```shell
git checkout main
git merge dev

Updating 5a1d206..d624805
Fast-forward
 test01.txt | 2 +-
 test02.txt | 1 +
 2 files changed, 2 insertions(+), 1 deletion(-)
```

使用 `git log -5 --oneline --graph --all` 命令查看分叉历史，显示所有分支中前五个提交记录，并以简短的 ASCII 图形的方式显示。

```shell
git log -5 --oneline --graph --all

* d624805 (HEAD -> main, dev) modified file all, dev rebase main
* 5a1d206 modified test01.txt
*   4b0390e (origin/main, origin/dev, test, develop) merge dev
|\
| * ad6950e modified test02.txt
| * 0f59771 add test01.txt
```

这两种整合方法的最终结果没有任何区别，但是变基使得提交历史更加整洁。您在查看一个经过变基的分支的历史记录时会发现，尽管实际的开发工作是并行的，但它们看上去就像是串行的一样，提交历史是一条直线没有分叉。

一般我们这样做的目的是为了确保在向远程分支推送时能保持提交历史的整洁——例如：向某个其他人维护的项目贡献代码时。在这种情况下，您首先在自己的分支里进行开发，当开发完成时您需要先将您的代码变基到 `origin/main` 上，然后再向主项目提交修改。这样的话，该项目的维护者就不再需要进行整合工作，只需要快进合并便可。

无论是通过变基，还是通过三方合并，整合的最终结果所指向的快照始终是一样的，只不过提交历史不同罢了。变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起。

**变基遵守一条准则**：如果提交存在于您的仓库之外，而别人可能基于这些提交进行开发，那么不要执行变基。
