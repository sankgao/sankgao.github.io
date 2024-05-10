---
title: git config
icon: command
date: 2024-05-10
category: About
tag:
    - 命令
    - Git
---

## 描述

`git config` 用于获取和设置仓库或全局选项。可以使用 `git config` 来查看、添加或修改 Git 配置变量。

读取配置时，默认从系统、全局和资源库的本地配置文件中读取数值，选项 `--system`、`--global`、`--local`、`--worktree` 和 `--file <filename>` 可以用来告诉命令只从选定的位置读取。

写入时，新值默认写入仓库的本地配置（`--local`）文件，选项 `--system`、`--global`、`--worktree`、`--file <filename>` 可以用来告诉命令写到那个位置。

配置文件作用域：

- **--local**：只对当前仓库生效，使用本地仓库配置文件。例如：Git 仓库根目录下的 `.git/config` 文件
- **--global**：对所有仓库生效，使用全局仓库配置文件。例如：用户家目录下的 `~/.gitconfig` 文件
- **--system**：对所有用户生效，使用系统仓库配置文件。例如：Git 安装目录下的 `/etc/gitconfig` 文件
- **--worktree**：使用每个工作区配置文件。例如：对于主工作区文件在 `.git/config.worktree`；对于其它工作区文件在 `.git/worktrees/<id>/`。只有在 `extensions.worktreeConfig` 配置后生效，否则该选项就是 `--local`
- **--file <filename>**：使用指定的配置文件。例如：写到指定的文件 `/data/gitconfig` 中
- **--blob <blob>**：使用指定的二进制文件。例如：二进制文件 `.gitmodules` 中

该命令出错时将以非零状态失败。以下是一些退出代码：

- 该节或键无效（退出代码为 1）
- 没有提供节或键（退出值为 2）
- 配置文件无效（退出代码为 3）
- 配置文件无法写入（退出代码为 4）
- 试图取消一个不存在的选项（退出代码为 5）
- 试图取消/设置一个多行匹配的选项（退出代码为 5）
- 试图使用一个无效的正则表达式（退出代码为 6）
- 执行成功时，该命令返回退出代码 0

所有可用配置变量的列表可以通过 `git help --config` 命令获取。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-l, --list`  |  列出所有当前已有的配置变量  |
|  `--add`  |  在不改变任何已有的键值情况下添加一行新键值  |
|  `--get`  |  获取最后一个匹配的键值  |
|  `--get-all`  |  获取所有匹配的键值  |
|  `--unset`  |  移除一个匹配的键值  |
|  `--unset-all`  |  移除所有匹配的键值  |
|  `-z, --null`  |  输出的键值是以 `null` 字符结束，而不是换行符，可用于对输出的安全解析  |
|  `--show-origin`  |  不仅输出配置，还会输出对应配置的来源文件  |

## 示例

### 配置用户名

例如：配置本地用户名 `admin`。

```shell
git config user.name 'admin'
```

例如：配置全局用户名 `admin`。

```shell
git config --global user.name 'admin'
```

### 配置邮箱

例如：配置本地邮箱 `admin@example.com`。

```shell
git config user.email 'admin@example.com'
```

例如：配置全局邮箱 `admin@example.com`。

```shell
git config --global user.name 'admin@example.com'
```

### 显示所有配置

例如：使用 `-l` 或 `--list` 选项，显示所有本地配置文件。

```shell
git config -l
```

例如：显示所有全局配置文件。

```shell
git config --global -l
```

### 显示所有可用配置变量

```shell
git help --config
```

### 添加一行新键值

例如：使用 `--add` 选项，在不改变任何已有的 `user.name` 键值情况下添加一行新 `user.name` 键值 `test`。

```shell
git config --add user.name 'test'
```

### 匹配指定键值

例如：使用 `--get` 选项，获取最后一个 `user.name` 的键值。

```shell
git config --get user.name
```

### 匹配所有键值

例如：使用 `--get-all` 选项，获取所有 `user.name` 的键值。

```shell
git config --get-all user.name
```

### 移除指定键值

例如：使用 `--unset` 选项，移除指定 `user.name` 为 `tset` 的键值。

```shell
git config --unset user.name test
```

### 移除所有键值

例如：使用 `--unset-all` 选项，移除所有匹配的键值。

```shell
git config --unset-all user.name
```

### 输出的键值是以 null 字符结束

例如：使用 `-z` 或 `--null` 选项，显示输出的键值是以 `null` 字符结束，而不是换行符。

```shell
git config -z --get-all user.name
```

### 显示配置来源文件

例如：使用 `--show-origin` 选项，显示输出所有 `user.name` 的键值包括对应配置的来源文件。

```shell
git config --show-origin --get-all user.name
```

### 默认文本编辑器

例如：配置 `vim` 为默认文本编辑器。

```shell
git config core.editor 'vim'
```

### 处理换行符的转换

`core.autocrlf` 用于控制 Git 如何处理换行符的转换，特别是在 Windows 和 Unix-like 系统（如：Linux 和 macOS）之间。

Git 默认会尝试自动转换换行符，以确保在不同操作系统之间的一致性。具体来说，当从 Git 仓库检出文件时（即当你查看或修改文件时），Git 会根据 `core.autocrlf` 的设置来决定是否将换行符从 `LF`（Unix-style，\n）转换为 `CRLF`（Windows-style，\r\n）。同样地，当提交文件到 Git 仓库时，Git 会根据这个设置来决定是否将换行符从 `CRLF` 转换回 `LF`。

`core.autocrlf` 可以设置为以下三个值之一：

- **true**：当检出代码时，将 `LF` 转换为 `CRLF`；当提交代码时，将 `CRLF` 转换为 `LF`。这是 Windows 系统上的默认设置，以确保在 Windows 环境下编辑的文件在 Unix-like 系统上也能正确显示
- **input**：当检出代码时，不做任何转换；当提交代码时，将 `CRLF` 转换为 `LF`。这意味着无论你在什么系统上工作，提交到 Git 仓库的代码都将使用 `LF` 换行符。这是 Unix-like 系统上的默认设置
- **false**：不做任何转换。这意味着无论检出还是提交，Git 都不会更改文件中的换行符。这可能会导致在不同操作系统之间查看文件时出现换行符不一致的问题

例如：要在全局范围内设置 `core.autocrlf` 为 `input`。

```shell
git config --global core.autocrlf input
```

