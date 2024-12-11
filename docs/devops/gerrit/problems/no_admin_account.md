---
title: 没有管理员账号
icon: problem
date: 2024-03-24
category:
    - DevOps
    - 问题
tag:
    - Gerrit
---

## 问题

没有管理员账号。

## 原因

不小心删除唯一的管理员账号；时间太久忘记管理员账号密码。

## 解决方法

停止 Gerrit 服务：

```bash
review_site/bin/gerrit.sh stop
```

使用 `git clone` 命令克隆 Gerrit 的 `All-User.git` 项目，从裸仓库克隆出一个工作仓库出来：

```bash
mkdir project/
cd project/
git clone ~/review_site/git/All-Users.git

Cloning into 'All-Users'...
done.
Note: switching to 'b1452ac39d369a1e99296f9801d3b5b89b054f85'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false
```

从 `All-Users/groups` 中得到 `Administrators` 群组的 `UUID`：

```bash
cd All-Users/
cat groups

# UUID                                          Group Name
#
dd67898a2a89433ad8b9145f9e0f60f8de580c7b        Administrators
global:Registered-Users                         Registered Users
```

使用 `git fetch` 获取并切换到 `Administrators` 群组的 `UUID` 分支：

::: tip
`refs/groups/dd/` 中的 `dd` 是根据您自己 `UUID` 的前两个字符。
:::

```bash
git fetch origin refs/groups/dd/dd67898a2a89433ad8b9145f9e0f60f8de580c7b:refs/groups/dd/dd67898a2a89433ad8b9145f9e0f60f8de580c7b
git checkout refs/groups/dd/dd67898a2a89433ad8b9145f9e0f60f8de580c7b
```

在 `members` 文件中添加成为管理员用户的 ID 值，例如：`100002`。

::: tip
用户的 ID 值可以在 Gerrit web 界面用户设置中查看
:::

使用 `git commit` 命令将暂存区的内容添加到本地仓库：

```bash
git add .
git commit -am "change administrator ID"

[Separation head pointer fad9310] change administrator ID
 1 file changed, 1 insertion(+), 1 deletion(-)
```

使用 `git update-ref` 命令更新引用，应用到 `NoteDb` 数据库：

```bash
git update-ref refs/groups/dd/dd67898a2a89433ad8b9145f9e0f60f8de580c7b $(git rev-parse HEAD)
```

使用 `git push` 命令将本地仓库推送到远程仓库中：

```bash
git push origin refs/groups/dd/dd67898a2a89433ad8b9145f9e0f60f8de580c7b

Counting objects: 5, done.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 286 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To /home/gerrit/project/../review_site/git/All-Users.git/
   ac1792c..fad9310  refs/groups/dd/dd67898a2a89433ad8b9145f9e0f60f8de580c7b -> refs/groups/dd/dd67898a2a89433ad8b9145f9e0f60f8de580c7b
```

重新启动 Gerrit 服务器，新用户就成为管理员用户了，也添加到 Administrators 组里了。
