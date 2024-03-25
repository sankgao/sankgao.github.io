---
title: 没有 Change-Id
icon: problem
date: 2024-03-25
category:
    - DevOpos
    - 问题
tag:
    - Gerrit
---

## 问题

直接使用 `git push origin master` 命令推送到 Gerrit 服务器出现以下错误：

```bash
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Writing objects: 100% (3/3), 248 bytes | 248.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Processing changes: refs: 1, done
remote: ERROR: commit e33ee12: missing Change-Id in message footer
remote:
remote: Hint: to automatically insert a Change-Id, install the hook:
remote:   gitdir=$(git rev-parse --git-dir); scp -p -P 29418 zhangsan@10.1.1.10:hooks/commit-msg ${gitdir}/hooks/
remote: (for OpenSSH >= 9.0 you need to add the flag '-O' to the scp command)
remote: or, for http(s):
remote:   f="$(git rev-parse --git-dir)/hooks/commit-msg"; curl -o "$f" http://10.1.1.10:8088/tools/hooks/commit-msg ; chmod +x "$f"
remote: and then amend the commit:
remote:   git commit --amend --no-edit
remote: Finally, push your changes again
remote:
To ssh://10.1.1.10:29418/test
 ! [remote rejected] master -> refs/for/master (commit e33ee12: missing Change-Id in message footer)
error: failed to push some refs to 'ssh://10.1.1.10:29418/test'
```

## 原因

推送时需要有 `Chang-Id`，而当前的推送没有 `Chang-Id`。

使用 `git log` 查看 `log` 信息，没有 `Chang-Id`：

```bash
git log

commit e33ee123453bf2572cb903d2b4d026e9be368128 (HEAD -> master)
Author: zhangsan <zhangsan@mail.example.com>
Date:   Mon Mar 25 14:27:22 2024 +0800

    add test

commit 9cb4e0bbcd27a7f9fb5ff62dc0aca34cdc9c1874 (origin/master, origin/HEAD)
Author: gerrit <gerrit@mail.example.com>
Date:   Mon Mar 25 14:00:22 2024 +0800

    Initial empty repository
```

## 解决方法

::: tip
在第一次克隆项目时，使用提交消息挂钩进行克隆（Clone with commit-msg hook）会直接拉取 `hooks` 文件，之后使用 `git commit` 时会自动生成 `Chang-Id`
:::

### 解决方法1

根据提示从 Gerrit 服务器上拉取 `hooks` 文件。`hooks` 文件下的 `commit-msg` 脚本会自动生成 `Chang-Id`：

```bash
gitdir=$(git rev-parse --git-dir); scp -p -P 29418 zhangsan@10.1.1.10:hooks/commit-msg ${gitdir}/hooks/
```

重新 `git push` 发现一样的错误，因为当前的 `commit` 没有生成 `Change-Id`。

使用 `git reset --hard` 命令回退到上一次，重新更新并提交文件。

使用 `git log` 查看上一次的 `commit id`：

```bash
git log

commit e33ee123453bf2572cb903d2b4d026e9be368128 (HEAD -> master)
Author: zhangsan <zhangsan@mail.example.com>
Date:   Mon Mar 25 14:27:22 2024 +0800

    add test

commit 9cb4e0bbcd27a7f9fb5ff62dc0aca34cdc9c1874 (origin/master, origin/HEAD)
Author: gerrit <gerrit@mail.example.com>
Date:   Mon Mar 25 14:00:22 2024 +0800

    Initial empty repository
```

使用 `git reset --hard` 命令回退到上一次：

```bash
git reset --hard 9cb4e0bbcd27a7f9fb5ff62dc0aca34cdc9c1874

HEAD is now at 9cb4e0b Initial empty repository
```

重新更新并提交文件：

```bash
echo "Hello World!" > test
git add test
git commit -m "add test"

[master e33ee12] add test
 1 file changed, 1 insertion(+)
 create mode 100644 test
```

### 解决方法2

使用 `git commit --amend --no-edit` 命令：

```bash
git commit --amend --no-edit

[master e8cc59b] add test01
 Date: Mon Mar 25 16:01:15 2024 +0800
 1 file changed, 1 insertion(+)
```

`git commit --amend --no-edit` 命令用于追加提交，且不修改 `message` 信息。

查看本次 `log` 信息是否带 `Change-Id`：

```bash
git log

commit e564c39767b949b77814ff6ca9fd319d12b43857 (HEAD -> master)
Author: zhangsan <zhangsan@mail.example.com>
Date:   Mon Mar 25 15:45:23 2024 +0800

    add test

    Change-Id: Ic8e2f63e1be2a00f42dd97513e91902754a057c7

commit 9cb4e0bbcd27a7f9fb5ff62dc0aca34cdc9c1874 (origin/master, origin/HEAD)
Author: gerrit <gerrit@mail.example.com>
Date:   Mon Mar 25 14:00:22 2024 +0800

    Initial empty repository
```

再次使用 `git push` 推送到 Gerrit 服务器中。
