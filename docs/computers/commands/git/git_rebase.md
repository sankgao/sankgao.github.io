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
3. 解决冲突：如果目标分支和源分支在变基期间存在冲突，Git 会暂停并提示您解决这些冲突。解决冲突后，您需要使用 `git add` 命令标记冲突已解决，并使用 `git rebase --continue` 命令继续变基过程
4. 完成 `rebase`：一旦所有提交都被成功应用到目标分支，变基操作就完成了

需要注意的是，虽然 `git rebase` 可以产生更干净的提交历史，但它也改变了历史的实际顺序。因此，在使用 `git rebase` 时需要谨慎，特别是在与他人协作的项目中，因为这可能会导致混淆或问题。通常，对于已经公开的提交，推荐使用 [git merge](./git_merge.md) 而不是 `git rebase`，以避免重写已经共享的历史。

此外，`git rebase` 还可以用于合并当前分支的多个提交记录，这对于想要清理或整理提交历史的情况非常有用。

总的来说，`git rebase` 是一个强大的工具，但也需要谨慎使用，以确保不会破坏项目的版本控制历史或给团队其他成员带来困扰。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--continue`  |  继续运行 `rebase` 变基操作  |
|  `--abort`  |  取消 `rebase` 变基操作，并将 HEAD 重置为原始分支  |
|  `--quit`  |  放弃 `rebase` 变基操作，但 HEAD 不会重置回原始分支  |
|  `-i, --interactive`  |  交互式执行 `rebase` 变基操作  |

## 示例

### 将提交记录复制到另一个分支

例如：将 `dev` 分支上的所有提交，复制到 `main` 分支下。

```shell
git checkout dev
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
