---
title: 标签管理
icon: tag
date: 2024-05-27
order: 10
category: DevOps
tag:
    - Git
---

像其它版本控制系统（VCS）一样，Git 可以给仓库历史中的某一个提交打上标签，以示重要。比较有代表性的是人们会使用这个功能来标记发布结点（`v1.0.0`、`v2.0.0` 等等）。

在发布一个版本时，通常先在版本库中打一个标签（`tag`），这样就确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。

Git 的标签其实就是指向某个 `commit` 的指针（跟分支很像，但分支可以移动，标签不能移动），所以创建和删除标签都是瞬间完成的。

## 创建标签

Git 支持两种标签：**轻量标签**（lightweight）与 **附注标签**（annotated）。

轻量标签很像一个不会改变的分支，它只是某个特定提交的引用，而附注标签是存储在 Git 数据库中的一个完整对象，它们是可以被校验的，其中包含打标签者的名字、电子邮件地址、日期时间，此外还有一个标签信息，并且可以使用 GNU Privacy Guard（GPG）签名并验证。

通常会建议创建附注标签，这样您可以拥有以上所有信息。但是如果您只是想用一个临时的标签，或者因为某些原因不想要保存这些信息，那么也可以用轻量标签。

### 轻量标签

轻量标签本质上是将提交校验和存储到一个文件中，没有保存任何其他信息。创建轻量标签，不需要使用 `-a`、`-s` 或 `-m` 选项，只需要提供标签名字。

例如：创建 `v1.0.0` 轻量标签。

```shell
git tag v1.0.0
```

### 附注标签

在 Git 中创建附注标签十分简单。最简单的方式是当您在运行 `tag` 命令时指定 `-a` 选项，`-m` 选项指定了一条将会存储在标签中的信息。如果没有为附注标签指定一条信息，Git 会启动编辑器要求您输入信息。

例如：创建带描述的标签。`-a` 用于创建带注释的标签；`-m` 添加注释信息。

```shell
git tag -a v1.0.1 -m 'Version 1.0.1'
```

## 查看标签

在 Git 中列出已有的标签非常简单，只需要输入 [git tag](../../computers/commands/git/git_tag.md) 命令（可带上可选的 `-l, --list` 选项）。例如：查看当前仓库标签列表。

```shell
git tag

v1.0.0
v1.0.1
```

这个命令以字母顺序列出标签，但是它们显示的顺序并不重要。

也可以按照特定的模式查找标签，但按特定模式查找标签必须带 `-l` 或 `--list` 选项。例如：查找以 `1` 结尾的标签。

```shell
git tag -l '*1'

v1.0.1
```

通过使用 [git show](../../computers/commands/git/git_show.md) 命令可以看到标签信息和与之对应的提交信息。

- 查看轻量标签，不会看到额外的标签信息，只显示提交信息

    ```shell
    git show v1.0.0

    commit d624805693044bc4921d1224327638549231e616 (HEAD -> main, tag: v1.0.1, tag: v1.0.0, dev)
    Author: Sank Gao <sankgao@example.com>
    Date:   Wed May 29 17:27:42 2024 +0800

        modified file all, dev rebase main

    diff --git a/test01.txt b/test01.txt

    # ......省略部分内容
    ```

- 查看附注标签，可以看到标签信息和与之对应的提交信息

    ```shell
    git show v1.0.0

    tag v1.0.1
    Tagger: Sank Gao <sankgao@example.com>
    Date:   Wed May 29 18:25:51 2024 +0800

    Version 1.0.1

    commit d624805693044bc4921d1224327638549231e616 (HEAD -> main, tag: v1.0.1, tag: v1.0.0, dev)
    Author: Sank Gao <sankgao@example.com>
    Date:   Wed May 29 17:27:42 2024 +0800

        modified file all, dev rebase main
    # ......省略部分内容
    ```

## 后期打标签

也可以对过去的提交打标签。假设提交历史是这样的：

```shell
git log -8 --oneline

d624805 (HEAD -> main, tag: v1.0.1, tag: v1.0.0, dev) modified file all, dev rebase main
5a1d206 modified test01.txt
4b0390e (origin/main, origin/dev, test, develop) merge dev
ad6950e modified test02.txt
6a63f37 modified test02.txt
0f59771 add test01.txt
7333fb5 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
99114d6 modified test01.txt
```

例如：在 `add test01.txt` 提交处忘记打标签了，需要在 `git tag` 命令的末尾指定提交的校验和（或部分校验和）。

```shell
git tag -a v1.0 -m 'Version 1.0' 0f59771
```

查看在那次提交上打的标签：

```shell
git tag

v1.0
v1.0.0
v1.0.1
```

```shell
git show v1.0

tag v1.0
Tagger: Sank Gao <sankgao@example.com>
Date:   Wed May 29 18:55:34 2024 +0800

Version 1.0

commit 0f59771b62084472aad9d4cd4b8799a8b1889794 (tag: v1.0)
Author: Sank Gao <sankgao@example.com>
Date:   Tue May 28 09:56:52 2024 +0800

    add test01.txt
# ......省略部分内容
```

## 共享标签

默认情况下，[git push](../../computers/commands/git/git_push.md) 命令并不会传送标签到远程仓库服务器上。在创建完标签后您必须显式地用 `git push origin <tagname>` 命令推送标签到共享服务器上。

例如：指定推送 `v1.0` 标签。

```shell
git push origin v1.0

Enumerating objects: 1, done.
Counting objects: 100% (1/1), done.
Writing objects: 100% (1/1), 163 bytes | 163.00 KiB/s, done.
Total 1 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To /home/sankgao/projects/git_tutorials.git
 * [new tag]         v1.0 -> v1.0
```

例如：指定推送所有标签。

```shell
git push origin --tags

Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 2 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (8/8), 779 bytes | 779.00 KiB/s, done.
Total 8 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To /home/sankgao/projects/git_tutorials.git
 * [new tag]         v1.0.0 -> v1.0.0
 * [new tag]         v1.0.1 -> v1.0.1
```

查看远程标签：

```shell
git ls-remote --tags origin

5a893e8974ad8972aa13ed61a19329c6b6317651        refs/tags/v1.0
0f59771b62084472aad9d4cd4b8799a8b1889794        refs/tags/v1.0^{}
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.0
cdb44ad37126f01cd0cd3bfbfd5c6c52ec9ba6c0        refs/tags/v1.0.1
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.1^{}
```

::: info
`^{}` 表示该对象可能是一个标签，并递归地取消引用该标签，直到找到非标签对象。在 [gitrevisions](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/gitrevisions.html#_specifying_revisions) 中有描述。
:::

现在，当其他人从仓库中克隆或拉取，他们也能得到您的那些标签。

## 删除标签

要删除本地仓库上的标签，可以使用命令 `git tag -d <tagname>`。例如：删除一个轻量标签 `v1.0`。

```shell
git tag -d v1.0

Deleted tag 'v1.0' (was 5a893e8)
```

上述命令并不会从任何远程仓库中移除这个标签，可以使用 `git push <remote> :refs/tags/<tagname>` 命令来更新您的远程仓库。

例如：更新远程仓库，使远程仓库删除 `v1.0` 标签。

```shell
git push origin :refs/tags/v1.0

To /home/sankgao/projects/git_tutorials.git
 - [deleted]         v1.0
```

上面这种操作的含义是，将冒号前面的空值推送到远程标签名，从而高效地删除它。

也可以使用另一种方式删除远程标签，例如：直接删除远程 `v1.0.1` 标签。

```shell
$ git push origin --delete v1.0.1
```

## 检出标签

如果您想查看某个标签所指向的文件版本，可以使用 `git checkout` 命令，虽然这会使您的仓库处于 “分离头指针（detached HEAD）” 的状态——这个状态有些不好的副作用。

```shell
git checkout v1.0.0

Note: switching to 'v1.0.0'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at d624805 modified file all, dev rebase main
```

查看当前分支：

```shell
git branch

* (HEAD detached at v1.0.0)
  dev
  develop
  main
  test
```

在 “分离头指针” 状态下，如果您做了某些更改然后提交它们，标签不会发生变化，但您的新提交将不属于任何分支，并且将无法访问，除非通过确切的提交哈希才能访问。因此，如果您需要进行更改，例如：您要修复旧版本中的错误，那么通常需要创建一个新分支：

```shell
git checkout -b version2 v2.0.0

Switched to a new branch 'version2'
```

如果在这之后又进行了一次提交，`version2` 分支就会因为这个改动向前移动，此时它就会和 `v2.0.0` 标签稍微有些不同，这时就要当心了。
