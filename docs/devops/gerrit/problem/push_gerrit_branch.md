---
title: 推送到 Gerrit 特有的分支
icon: problem
date: 2024-03-25
category:
    - DevOps
    - 问题
tag:
    - Gerrit
---

## 问题

直接使用 `git push origin master` 命令推送到远程 Git 仓库会出现以下错误：

```bash
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Writing objects: 100% (3/3), 248 bytes | 248.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote: error: branch refs/heads/master:
remote: Push to refs/for/master to create a review, or get 'Push' rights to update the branch.
remote: User: zhangsan
remote: Contact an administrator to fix the permissions
remote: Processing changes: refs: 1, done
To ssh://10.1.1.10:29418/test
 ! [remote rejected] master -> master (prohibited by Gerrit: not permitted: update)
error: failed to push some refs to 'ssh://10.1.1.10:29418/test'
```

## 原因

使用 `git config --list` 命令查看当前 `remote.origin` 信息：

```bash
git config --list

core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
remote.origin.url=ssh://zhangsan@10.1.1.10:29418/test
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
branch.master.remote=origin
branch.master.merge=refs/heads/master
user.name=zhangsan
user.email=zhangsan@mail.example.com
```

当前使用 `git push` 命令时，是直接提交到远程 Git 仓库 `refs/heads/master` 分支中进行合并。

由于需要 Gerrit 进行审核代码，不能直接提交到远程 Git 仓库中，而是提交到 Gerrit 特有的 `refs/for/*` 分支中。

## 解决方法

修改推送远程的默认分支：

```bash
git config remote.origin.push refs/heads/*:refs/for/*
```

使用 `git config --list` 命令查看当前 `remote.origin` 信息：

```bash
git config --list

core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
remote.origin.url=ssh://zhangsan@10.1.1.10:29418/test
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
remote.origin.push=refs/heads/*:refs/for/*
branch.master.remote=origin
branch.master.merge=refs/heads/master
user.name=zhangsan
user.email=zhangsan@mail.example.com
```

当前使用 `git push` 命令时，是推送到 Gerrit 特有的 `refs/for/*` 分支中，然后由 Gerrit 审核完代码后再进行提交合并。

修改完提交的分支后再次使用 `git push` 命令推送即可。
