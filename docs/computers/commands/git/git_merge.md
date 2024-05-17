---
title: git merge
icon: command
date: 2024-05-17
category: About
tag:
    - 命令
    - Git
---

## 描述

`git merge` 用于合并一个或多个分支的更改到当前分支。通常用于将一个分支（例如：`dev` 分支）的更改合并到另一个分支（如：`main` 分支）时使用。

`git merge` 命令的工作基于 Git 的合并策略（默认为递归策略）。当执行 `git merge` 时，Git 会：

1. 找出两个分支最近的共同祖先提交（也称为合并基准）
2. 比较这个共同祖先提交和您当前分支的 HEAD 提交之间的差异
3. 比较这个共同祖先提交和您想要合并的分支的 HEAD 提交之间的差异
4. 尝试将两个差异合并成一个新的提交，这个新的提交会包含两个分支的所有更改

如果在合并过程中出现 **冲突**（即两个分支都修改了同一个文件同一部分的内容），Git 会暂停合并过程，提示合并冲突，需要手动解决冲突。找到冲突的文件并进行编辑解决冲突，然后再提交合并结果，以完成合并操作。

合并冲突可能会影响开发效率，因此尽量避免合并冲突是很重要的。以下是一些建议可以帮助您预防合并冲突：

- **及时同步主分支**：在开发过程中，定期将主分支的更新同步到当前分支，以尽早发现并解决潜在的合并冲突
- **遵循编码规范**：团队成员应遵循统一的编码规范，以减少不必要的格式和风格差异
- **划分模块**：尽量将项目划分为独立的模块，让团队成员在不同的模块上进行开发，以减少合并冲突的可能性
- **定期沟通**：团队成员之间应保持良好的沟通，共享开发计划和进度，以避免重复工作和潜在的冲突
- **使用分支策略**：制定合适的分支策略，如：GitFlow、GitHub Flow 等，以规范团队成员在分支上的协作

在执行 `git merge` 之前，建议先运行 [git status](./git_status.md) 确保当前分支干净，并且已经拉取了最新的更改。

如果不希望直接合并分支，而是想要保留分支的独立性但将更改整合到当前分支，可以考虑使用 [git rebase](./git_rebase.md) 命令。

合并操作会改变历史记录，所以在公共分支（如：`main` 分支）上执行合并时要特别小心，确保与其他团队成员协调好。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--ff`  |  以快进方式解决合并问题（只更新分支指针以匹配合并后的分支；不创建合并提交）。当不可能时（当合并的历史不是当前历史的后代），创建一个合并提交  |
|  `--no-ff`  |  在所有情况下都创建一个合并提交，即使该合并可以作为一个快进解决  |
|  `--ff-only`  |  在可能的情况下，以快进的方式解决合并的问题。当不可能时，拒绝合并并以非零状态退出  |
|  `--squash`  |  将另一个分支的更改压缩成一个新的提交，而不是创建一个合并提交  |
|  `--abort`  |  中止当前的冲突解决过程，并尝试重建合并前的状态。工作区会自动应用自动存储条目  |
|  `--quit`  |  忘记当前正在进行的合并。让索引和工作区保持原样  |
|  `--continue`  |  在 `git merge` 因冲突而停止后，可以通过运行 `git merge --continue` 来结束当前合并  |
|  `-s <策略>, --strategy=<策略>`  |  使用给定的合并策略，如：`ort`、`recursive`、`resolve`、`octopus`、`ours`、`subtree`；可以多次提供，以指定它们应该被尝试的顺序  |
|  `-q, --quiet`  |  不显示输出内容  |
|  `-v, --verbose`  |  显示详细输出  |

## 示例

### 合并分支

例如：将本地 `dev` 分支合并到 `main` 分支。

```shell
git checkout main
git merge dev

Auto-merging test01.txt
CONFLICT (content): Merge conflict in test01.txt
Auto-merging test03.txt
CONFLICT (add/add): Merge conflict in test03.txt
Automatic merge failed; fix conflicts and then commit the result.
```

在合并过程中出现冲突，需要手动解决。首先，使用 [git status](./git_status.md) 命令查看冲突文件：

```shell
git status

On branch main
Your branch is up to date with 'origin/main'.

You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   test01.txt
        both added:      test03.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

然后，打开冲突文件 `test01.txt`，手动解决冲突。

```shell
cat test01.txt

test01
<<<<<<< HEAD
test01
test01
test01
=======
test01test01
test01test01
test01test01
test01
test01test01
>>>>>>> dev
```

`test01.txt` 文件中 `<<<<<<< HEAD` 到 `=======` 之间是当前分支的更改；`=======` 到 `>>>>>>> dev` 之间是被合并分支的更改。

解决冲突后，将更改添加到暂存区，并进行提交，成了分支合并。

```shell
git add .
git commit -m "解决合并冲突"
git push origin main
```

### 合并远程分支

例如：合并远程 `main` 分支。

```shell
git merge origin/main
```

### 合并指定提交

例如：合并指定 `commit id` 提交。

```shell
git merge a159da180cd0ea822a03e81c29492a45e9828c53
```

### 合并指定策略

例如：指定 `subtree` 策略，合并 `dev` 分支。

```shell
git merge -s subtree dev
```
