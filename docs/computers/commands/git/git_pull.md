---
title: git pull
icon: command
date: 2024-05-10
category: About
tag:
    - 命令
    - Git
---

## 描述

`git pull` 用于从另一个存储库或本地分支获取（`fetch`）并集成（`merge` 或 `rebase`）更改到当前分支。通常用于同步您的本地分支与远程存储库中的最新更改。

将远程版本库的修改并入当前分支。如果当前分支落后于远程分支，默认情况下，它将快速合并当前分支以匹配远程分支。如果当前分支和远程分支有分歧，用户需要用 `--rebase` 或 `--no-rebase`（或 `pull.rebase` 中的相应配置选项）来指定如何调和分歧的分支。

更确切地说，`git pull` 运行 [git fetch](./git_fetch.md) 并给出参数，然后根据配置选项或命令行标志，调用 [git rebase](./git_rebase.md) 或 [git merge](./git_merge.md) 来协调不同的分支。

在执行 `git pull` 之前，通常建议先运行 [git status](./git_status.md) 来检查当前分支的状态，确保您处于正确的分支上，并且工作目录是干净的（没有未提交的更改）。

如果合并过程中发生冲突，您需要手动解决这些冲突，然后提交合并结果。

如果您想避免合并过程中的冲突，可以考虑使用 `git pull --rebase`，这将会尝试通过变基（而不是合并）来集成更改。

`git pull` 默认会使用您最后一次使用的远程和分支，因此如果您经常从同一个远程分支拉取，您甚至可以直接使用 [git pull](./git_pull.md) 而不需要指定远程和分支。

如果任何远程修改与本地未提交的修改重叠，合并将被自动取消，工作目录树不会被改动。一般来说，最好是在拉取之前把任何本地的修改弄到工作状态，或者用 [git stash](./git_stash.md) 把它们贮藏起来。

- `git pull` 命令，就是先执行 [git fetch](./git_fetch.md) 再执行 [git merge](./git_merge.md) 命令
- `git pull --rebase` 命令，就是先执行 [git fetch](./git_fetch.md) 再执行 [git rebase](./git_rebase.md) 命令

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--all`  |  获取所有远程控制  |
|  `-q, --quiet`  |  不显示输出内容  |
|  `-v, --verbose`  |  显示详细输出  |
|  `-r, --rebase`  |  在获取最新远程分支后，将当前分支变基到远程分支之上  |

## 示例

### 更新远程分支

使用 `git pull` 不添加任何参数，这等于 `git pull origin`。而当配置 `branch.<分支名>.remote` 在 `<分支名>` 上出现时，该值会被用来代替 `origin`。

例如：更新远程分支到本地。

```shell
git pull

Auto-merging test01.txt
CONFLICT (content): Merge conflict in test01.txt
Automatic merge failed; fix conflicts and then commit the result.
```

在更新过程中出现冲突，需要手动解决。首先，使用 [git status](./git_status.md) 命令查看冲突文件：

```shell
git status

On branch main
Your branch and 'origin/main' have diverged,
and have 1 and 4 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)

        both modified:   test01.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

然后，打开冲突文件 `test01.txt`，手动解决冲突。

```shell
cat test01.txt

test01
test01
<<<<<<< HEAD
test01
test01test01
=======
>>>>>>> 0d01fc15e2e250c67ef151bea3adbb90ae5471cf
```

`test01.txt` 文件中 `<<<<<<< HEAD` 到 `=======` 之间是当前分支的更改；`=======` 到 `>>>>>>> 0d01fc1` 之间是远程最新 HEAD 的更改。

解决冲突后，将更改添加到暂存区，并进行提交，成了分支合并。

```shell
git add .
git commit -m "解决合并冲突"
git pull
```

### 更新指定远程分支

例如：将远程 `dev` 分支的最新提交并 `merge` 到本地 `main` 分支。

```shell
git checkout main
git pull origin dev
```

例如：将远程 `dev` 分支的最新提交并 `merge` 到本地 `test` 分支。如果本地没有 `test` 分支，先创建 `test` 分支后再获取远程 `dev` 分支的最新提交并 `merge` 到本地 `test` 分支中。

```shell
git pull origin dev:test
```

### 更新指定远程提交

例如：将远程 `commit id` 的提交并 `merge` 到本地 `main` 分支。

```shell
git checkout main
git pull origin <commit id>
```
