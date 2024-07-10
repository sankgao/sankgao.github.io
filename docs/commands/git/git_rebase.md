---
title: git rebase
icon: command
date: 2024-05-17
category: About
tag:
    - 命令
    - Git
---

## 描述

`git rebase` 用于将一个分支的提交记录复制到另一个分支上，并改变分支的基础点。`git rebase` 会提取您在当前分支（也就是 “变基分支”）上的所有提交，保存为临时的补丁文件，然后切换到目标分支（也就是您希望您的当前分支基于的那个分支），最后将这些之前保存的补丁应用到目标分支上。

这个命令可以保持一个线性且干净的提交历史。与 [git merge](./git_merge.md) 不同，`git rebase` 不会创建一个新的合并提交，而是将变基分支的提交 “复制” 到目标分支上，从而保持一个看似连续的提交历史。这可以使提交历史更容易阅读和理解，尤其是在查看日志或进行代码审查时。

`git rebase` 的基本步骤包括：

1. 切换到目标分支：首先，您需要切换到您想要变基到的目标分支
2. 执行 `rebase` 命令：然后，您可以使用 `git rebase <source-branch>` 命令来开始变基操作，其中 `<source-branch>` 是您想要复制提交记录的分支
3. 跳过提交：如果遇到提交已经在分支中包含，则跳过该提交
4. 解决冲突：如果目标分支和源分支在变基期间存在冲突，Git 会暂停并提示您解决这些冲突。解决冲突后，您需要使用 `git add` 命令标记冲突已解决，并使用 `git rebase --continue` 命令继续变基过程
5. 完成 `rebase`：一旦所有提交都被成功应用到目标分支，变基操作就完成了

需要注意的是，虽然 `git rebase` 可以产生更干净的提交历史，但它也改变了历史的实际顺序。因此，在使用 `git rebase` 时需要谨慎，特别是在与他人协作的项目中，因为这可能会导致混淆或问题。通常，对于已经公开的提交，推荐使用 [git merge](./git_merge.md) 而不是 `git rebase`，以避免重写已经共享的历史。

此外，`git rebase` 还可以用于合并当前分支的多个提交记录，这对于想要清理或整理提交历史的情况非常有用。

总的来说，`git rebase` 是一个强大的工具，但也需要谨慎使用，以确保不会破坏项目的版本控制历史或给团队其他成员带来困扰。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--continue`  |  继续运行 `rebase` 变基操作  |
|  `--abort`  |  取消 `rebase` 变基操作，并将 HEAD 重置回原始分支  |
|  `--quit`  |  放弃 `rebase` 变基操作，但 HEAD 不会重置回原始分支  |
|  `--onto <newbase>`  |  创建新提交的起点  |
|  `-i, --interactive`  |  交互式执行 `rebase` 变基操作  |

## 示例

### 将提交记录复制到另一个分支

例如：将 `dev` 分支上的所有提交，复制到 `main` 分支下。

```shell
git checkout dev
git rebase main
# 或
git rebase main dev
```

例如：将 `dev` 分支下的某一个提交记录，复制到 `main` 分支下。

```shell
git rebase main <commit>
```

### 继续变基操作

例如：当遇到冲突，`git rebase` 变基操作停止，手动解决冲突后，继续变基操作。

```shell
git rebase --continue
```

### 撤销变基操作

```shell
git rebase --abort
```

### 交互式执行变基操作

```shell
git rebase -i HEAD~4
```

### 将特性分支移植到另一个分支

将基于一个分支的特性分支移植到另一个分支，以假装特性分支是从后一个分支分叉而来。

首先，假设 `topic` 基于 `next` 分支。例如：`topic` 中开发的功能依赖于 `next` 中的某些功能。

```txt
o---o---o---o---o  master
     \
      o---o---o---o---o  next
                       \
                        o---o---o  topic
```

想让 `topic` 从分支 `master` 中分叉出来；例如：因为 `topic` 所依赖的功能已经合并到了更稳定的分支 `master` 中。希望的提交树看起来像这样：

```txt
o---o---o---o---o  master
    |            \
    |             o'--o'--o'  topic
     \
      o---o---o---o---o  next
```

可以使用以下命令来获取：

```shell
git rebase --onto master next topic
```

### 重新基点分支的一部分

例如：有以下分支。

```txt
                        H---I---J topicB
                       /
              E---F---G  topicA
             /
A---B---C---D  master
```

执行以下命令：

```shell
git rebase --onto master topicA topicB
```

将导致分支变基为：

```txt
             H'--I'--J'  topicB
            /
            | E---F---G  topicA
            |/
A---B---C---D  master
```

这在主题 B 不依赖于主题 A 的情况下非常有用。

### 变基删除一系列提交

例如：有以下分支。

```txt
E---F---G---H---I---J  topicA
```

执行以下命令：

```shell
git rebase --onto topicA~5 topicA~3 topicA
```

将导致删除 F 和 G 提交：

```txt
E---H'---I'---J'  topicA
```

如果 F 和 G 提交在某些方面有缺陷，或者不应该是 topicA 的一部分，这一点就很有用。请注意，`--onto` 参数和 `<upstream>` 参数可以是任何有效的提交。

### 交互式变基

在变基的时候进入一个交互界面，执行交互式变基操作，会将 `<since>..<till>` 的提交悉数罗列在一个文件中，然后自动打开一个编辑器来编辑这个文件。可以通过修改文件的内容设定变基操作，实现删除提交、将多个提交压缩为一个提交、更改提交的顺序，以及更改历史提交的提交说明等。

例如：下面的界面就是执行交互式变基时编辑器打开的文件。

```shell
pick 1069522 ignore object files.
pick d20b252 move .gitignore outside also works.
pick 79b758f add hello.h
pick dde7bb9 modify hello.h

# Rebase bcc612a..dde7bb9 onto bcc612a (4 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous
#                    commit's log message, unless -C is used, in which case
#                    keep only this commit's message; -c is same as -C but
#                    opens the editor
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
#         create a merge commit using the original merge commit's
#         message (or the oneline, if no original merge commit was
#         specified); use -c <commit> to reword the commit message
# u, update-ref <ref> = track a placeholder for the <ref> to be updated
#                       to this position in the new commits. The <ref> is
#                       updated at the end of the rebase
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
```

前四行默认的动作都是 `pick`，即应用此提交。参考文件中的注释，可以通过修改动作名称，在变基的时候执行特定操作。

- **r, reword**：在变基时会应用此提交，但是在提交的时候允许用户修改提交说明
- **e, edit**：也会在变基时应用此提交，但是会在应用后暂停变基，提示用户使用 `git commit --amend` 执行提交，以便对提交进行修补。当用户执行 `git commit --amend` 完成提交后，还需要执行 `git rebase --continue` 继续变基操作
- **s, squash**：该提交会与前面的提交压缩为一个
- **f, fixup**：类似 `squash`，但是此提交的提交说明被丢弃

可以通过修改变基任务文件中各个提交的先后顺序，进而改变最终变基后提交的先后顺序。

可以修改变基任务文件，删除包含相应提交的行，这样该提交就不会被应用，进而在变基后的提交中被删除。

例如：删除 D 提交。

1. 变基前日志

    ```shell
    git log --oneline --decorate -6

    dde7bb9 (HEAD -> main, tag: F) modify hello.h
    79b758f (tag: E) add hello.h
    d20b252 (tag: D) move .gitignore outside also works.
    1069522 (tag: C) ignore object files.
    bcc612a (tag: hello_1.0, tag: B) Hello world initialized.
    4dcaeec (tag: A, origin/main, origin/HEAD) README is from welcome.txt.
    ```

2. 执行交互式变基操作

    ```shell
    git rebase -i D^
    ```

3. 自动用编辑器修改文件，省略井号（`#`）内容

    ```shell
    pick 3488f2c move.gitignore outside also works.
    pick 48456ab add hello.h
    pick b6f0b0a modify hello.h
    ```

4. 将第一行删除，使得上面的文件看起来像是这样，省略井号（`#`）内容

    ```shell
    pick 48456ab add hello.h
    pick b6f0b0a modify hello.h
    ```

5. 保存退出
6. 变基自动开始，即刻完成。显示下面的内容

    ```shell
    Successfully rebased and updated refs/heads/master.
    ```

7. 查看日志。当前分支 `master` 已经完成变基，删除 D 提交

    ```shell
    git log --oneline --decorate -6

    78e5133(HEAD,master)modify hello.h
    11eea7e add hello.h
    b3af728(tag:C)ignore object files.
    d71ce92(tag:hello_1.0,tag:B)Hello world initialized.
    c024f34(tag:A)README is from welcome.txt.
    63992f0 restore file:welcome.txt
    ```