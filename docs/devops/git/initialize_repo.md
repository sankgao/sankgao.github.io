---
title: 初始化仓库
icon: storage
date: 2024-05-22
order: 3
category: DevOps
tag:
    - Git
---

## 初始化仓库

如果您有一个当前未受版本控制的项目目录或一个空目录，并且想要开始使用 Git 控制它，则首先需要转到该项目的目录。

```shell
cd ~/projects/
mkdir git_tutorials
cd git_tutorials
```

使用 [git init](../../computers/commands/git/git_init.md) 命令将此项目目录，初始化为 Git 仓库。

```shell
git init -b main
```

`git init` 此命令将在当前目录下创建一个新的 `.git` 子目录，该目录包含了 Git 仓库所需要的所有必要文件，如：元数据对象、HEAD 文件、索引文件、配置信息等。

`-b` 指定初始分支名为 `main`，如果没有指定 `-b` 选项，则默认使用 `master` 分支名。

::: info
Git 低版本的 `git init` 命令没有 `-b` 选项，如果要修改初始分支，使用 [git branch](../../computers/commands/git/git_branch.md) 命令的 `-m` 选项重命名当前分支。例如：

```shell
git init
git branch -m main
```

:::

```shell
ls -F1 .git/

branches/
config
description
HEAD
hooks/
info/
objects/
refs/
```

对于一个新建的 Git 仓库，这是默认结构。各文件目录描述如下：

- **branches**：此目录存储所有分支内容
- **config**：此文件包含项目特有的配置选项
- **description**：此文件仅供 GitWeb 程序使用，我们无需关心
- **HEAD**：此文件指向目前被检出的分支
- **hooks**：此目录包含客户端或服务端的钩子脚本（hook scripts）
- **info**：此目录包含一个全局性排除（global exclude）文件，用以放置那些不希望被记录在 `.gitignore` 文件中的忽略模式（ignored patterns）
- **objects**：此目录存储数据库的所有内容
- **refs**：此目录存储指向数据（分支、远程仓库和标签等）的提交对象的指针

## 初始化配置

初始化配置 Git 环境。使用 [git config](../../computers/commands/git/git_config.md) 命令设置 Git 外观和行为的配置变量。这些变量存储在三个不同的位置：

1. `/etc/gitconfig` 文件: 对系统上每一个用户及他们仓库生效。传递 `--system` 选项，那么它就会读写该文件中的配置变量。由于它是系统配置文件，因此需要管理员或超级用户权限来修改它。
2. `~/.gitconfig` 或 `~/.config/git/config` 文件：只对当前用户生效。传递 `--global` 选项让 Git 读写此文件，这会对您系统上所有的仓库生效。
3. 当前使用仓库的 Git 目录中的 config 文件（即 `.git/config`）：只对该仓库生效。传递 `--local` 选项让 Git 强制读写此文件，默认选项。这需要进入某个 Git 仓库中才能让该选项生效。

每一个级别会覆盖上一级别的配置，所以 `.git/config` 的配置变量会覆盖 `/etc/gitconfig` 中的配置变量。

在 Windows 系统中，Git 会查找 `$HOME` 目录下（一般情况下是 `C:\Users\$USER`）的 `.gitconfig` 文件。Git 同样也会寻找 `/etc/gitconfig` 文件，但只限于 MSys 的根目录下，即安装 Git 时所选的目标位置。如果您在 Windows 上使用 Git 2.x 以后的版本，那么还有一个系统级的配置文件。此文件只能以管理员权限通过 `git config -f <file>` 来修改。

通过以下命令查看所有的配置以及它们所在的文件：

```shell
git config --list --show-origin
```
### 用户信息

安装完 Git 之后，要做的第一件事就是设置您的用户名和邮件地址。这一点很重要，因为每一个 Git 提交都会使用这些信息，它们会写入到您的每一次提交中，不可更改。

```shell
git config --global user.name "Sank Gao"
git config --global user.email sankgao@example.com
```

查看配置信息：

```shell
git config -l

user.name=Sank Gao
user.email=sankgao@example.com
```

### 文本编辑器

当 Git 需要您输入信息时会调用文本编辑器，如果未配置 Git 会使用操作系统默认的文本编辑器（`nano`）。

如果您想使用不同的文本编辑器，例如：`vim`，可以这样做：

```shell
git config --global core.editor vim
```

`core.editor` 设置命令列表：

|  编辑器  |  设置命令  |
|  :----:  |  :----  |
|  nano  |  `git config --global core.editor "nano -w"`  |
|  Vim  |  `git config --global core.editor "vim"`  |
|  VS Code  |  `git config --global core.editor "code --wait"`  |
|  Notepad (Windows 64-bit)  |  `git config core.editor notepad"`  |
|  Notepad++ (Windows 64-bit)  |  `git config --global core.editor "'C:/Program Files/Notepad/notepad.exe' -multiInst -notabbar -nosession -noPlugin"`  |
|  Emacs  |  `git config --global core.editor emacs`  |
|  Atom  |  `git config --global core.editor "atom --wait"`  |
|  BBEdit (Mac, with command line tools)  |  `git config --global core.editor "bbedit -w"`  |
|  Gedit (Linux)  |  `git config --global core.editor "gedit --wait --new-window"`  |
|  Sublime Text (macOS)  |  `git config --global core.editor "/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl --new-window --wait"`  |
|  Sublime Text (Windows 64-bit)  |  `git config --global core.editor "'C:/Program Files/Sublime Text 3/sublime_text.exe' -w"`  |
|  TextEdit (macOS)  |  `git config --global --add core.editor "open -W -n"`  |
|  Textmate  |  `git config --global core.editor "mate -w"`  |

::: info
如果您在 64 位 Windows 系统上安装了 32 位的编辑器，那么它会被安装在 `C:\Program Files (x86)\` 而非上表中所写的 `C:\Program Files\` 中。
:::

## 初始化提交

如果在一个已存在文件的目录（而非空目录）中进行版本控制，应该开始跟踪这些文件并进行初始提交。可以通过 [git add](../../computers/commands/git/git_add.md) 命令来指定所需的文件来进行跟踪，然后执行 [git commit](../../computers/commands/git/git_commit.md) 命令进行提交。

如果是空目录，则在该目录中创建文件后再开始跟踪这些文件并进行初始提交。

```shell
echo 'test01' > test01.txt
git add test01.txt
git commit -m 'add test01.txt'

[master (root-commit) 508c4dc] add test01.txt
 1 file changed, 1 insertion(+)
 create mode 100644 test01.txt
```

- `git add` 将 `test01.txt` 文件从工作区添加到暂存区
- `git commit` 将 `test01.txt` 文件从暂存区提交到本地仓库，`-m` 选项添加描述信息

此时 Git 版本控制会生成一个记录，存放此次提交的信息（如：`commit id`、用户信息、时间、描述信息等）。使用 [git log](../../computers/commands/git/git_log.md) 命令查看 Git 历史记录。

```shell
git log

commit f3b964575a8a1d6919e591173d8a788f968a4140 (HEAD -> main)
Author: Sank Gao <sankgao@example.com>
Date:   Thu May 23 10:17:40 2024 +0800

    add test01.txt
```
