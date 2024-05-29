---
title: 远程仓库
icon: reverse
date: 2024-05-24
order: 8
category: DevOps
tag:
    - Git
---

为了能在任意 Git 项目上协作，您需要知道如何管理自己的远程仓库。远程仓库是指托管在因特网或其他网络中的您的项目的版本库，远程仓库也可以在您的本地主机上。

您可以有好几个远程仓库，通常有些仓库对您只读，有些则可以读写。与他人协作涉及管理远程仓库以及根据需要推送或拉取数据。管理远程仓库包括了解如何添加远程仓库、移除无效的远程仓库、管理不同的远程分支并定义它们是否被跟踪等等。

## 添加远程仓库

如果在本地初始化一个 Git 仓库，需要将本地的 Git 仓库与远程仓库进行关联，这样您本地仓库和远程仓库就可以实现同步，又可以让其他人协作管理此仓库。可以使用 `git remote add <ailas> <repo>` 命令。

例如：添加一个别名为 `origin` 的远程仓库，并指向 `git_tutorials.git` 仓库。

### 添加本地远程仓库

首先在本地创建一个 [裸仓库](../../computers/commands/git/git_clone.md#创建裸仓库)：

```shell
mkdir ~/projects/git_tutorials.git
cd ./projects/git_tutorials.git
git init --bare

Initialized empty Git repository in /home/sankgao/projects/test.git/
```

`git init` 默认分支名是 `master`，修改分支名为 `main`：

```shell
git branch -m main
```

将裸仓库配置为本地的远程仓库：

```shell
cd ./projects/git_tutorials
git remote add origin ~/projects/git_tutorials.git
```

### 添加 GitLab 远程仓库

在您 GitLab 仓库中创建一个名为 `git_tutorials` 的仓库，然后为本地项目添加 GitLab 远程仓库。

```shell
cd ./projects/git_tutorials
git remote add origin ssh://git@10.1.1.10/tests/git_tutorials.git
```

### 添加 GitHub 远程仓库

在您 GitHub 仓库中创建一个名为 `git_tutorials` 的仓库，然后为本地项目添加 GitHub 远程仓库。

```shell
cd ./projects/git_tutorials
git remote add origin git@github.com:sankgao/git_tutorials.git
```

## 查看远程仓库

如果想查看您已经配置的远程仓库服务器，可以运行 [git remote](../../computers/commands/git/git_remote.md) 命令，它会列出您指定的每一个远程服务器的简写。如果您已经克隆了自己的仓库，那么至少应该能看到 `origin`，这是 Git 给您克隆的仓库服务器的默认名字。

例如：查看刚添加的 `git_tutorials.git` 远程仓库。

```shell
git remote

origin
```

指定 `-v` 选项，会显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL。

例如：`git_tutorials.git` 是本地仓库。

```shell
git remote -v

origin  /home/sankgao/projects/git_tutorials.git (fetch)
origin  /home/sankgao/projects/git_tutorials.git (push)
```

例如：`git_tutorials.git` 是 GitLab 仓库。

```shell
git remote -v

origin  ssh://git@10.1.1.10/tests/git_tutorials.git (fetch)
origin  ssh://git@10.1.1.10/tests/git_tutorials.git (push)
```

例如：`git_tutorials.git` 是 GitHub 仓库。

```shell
git remote -v

origin  https://github.com/sankgao/git_tutorials.git (fetch)
origin  https://github.com/sankgao/git_tutorials.git (push)
```

## 从远程仓库中抓取与拉取

使用 [git fetch](../../computers/commands/git/git_fetch.md) 命令，从远程仓库中获得数据。

```shell
git fetch origin
```

这个命令会访问远程仓库，从中拉取所有您还没有的数据。执行完成后，您将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看。

如果您使用 `clone` 命令克隆了一个仓库，命令会自动将其添加为远程仓库并默认以 `origin` 为简写。所以，`git fetch origin` 会抓取克隆（或上一次抓取）后新推送的所有工作。

::: tip
`git fetch` 命令只会将数据下载到您的本地仓库——它并不会自动合并或修改您当前的工作。当准备好时您必须手动将其合并入您的工作。
:::

如果您的当前分支设置了跟踪远程分支，那么可以用 [git pull](../../computers/commands/git/git_pull.md) 命令来自动抓取后合并该远程分支到当前分支，这或许是个更加简单舒服的工作流程。默认情况下，[git clone](../../computers/commands/git/git_clone.md) 命令会自动设置本地 `main` 分支跟踪克隆远程仓库的 `main` 分支（或其它名字的默认分支）。运行 `git pull` 通常会从最初克隆的服务器上抓取数据并自动尝试合并到当前所在的分支。

## 推送到远程仓库

当您想分享您的项目时，可以使用 `git push <remote> <branch>` 将其推送到上游。当您想要将 `main` 分支推送到 `origin` 服务器时（再次说明，克隆时通常会自动帮您设置好那两个名字），那么运行这个命令就可以将您所做的备份到服务器：

```shell
git push origin main
```

只有当您有所克隆服务器的写入权限，并且之前没有人推送过时，这条命令才能生效。当您和其他人在同一时间克隆，他们先推送到上游然后您再推送到上游，您的推送就会毫无疑问地被拒绝。您必须先抓取他们的工作并将其合并进您的工作后才能推送。

## 重命名远程仓库

使用 `git remote rename` 命令，来修改一个远程仓库的简写名。

例如：将 `origin` 重命名为 `git_tutorials`。

```shell
git remote rename origin git_tutorials

Renaming remote references: 100% (4/4), done.
```

查看远程仓库别名：

```shell
git remote

git_tutorials
```

::: tip
这样会修改您所有远程跟踪的分支名字。那些过去引用 `origin/main` 的现在会引用 `git_tutorials/main`。
:::

## 删除远程仓库

如果因为一些原因想要移除一个远程仓库，您已经从服务器上搬走了或不再想使用某一个特定的镜像了，又或者某一个贡献者不再贡献了，可以使用 `git remote remove` 或 `git remote rm` 命令。

例如：删除 `git_tutorials` 远程仓库，并查看远程仓库地址。

```shell
git remote remove git_tutorials
git remote
```

::: tip
一旦您使用这种方式删除了一个远程仓库，那么所有和这个远程仓库相关的远程跟踪分支以及配置信息也会一起被删除。
:::
