---
title: 别名
icon: alias
date: 2024-05-30
order: 11
category: DevOps
tag:
    - Git
---

Git 别名是一种自定义命令的方式，可以简化常用的 Git 命令，提高开发效率。您可以使用 [git config](../../computers/commands/git/git_config.md) 命令来设置别名，或者在 Git 配置文件中直接编辑。

```shell
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

## 通过命令行设置别名

使用 `git config --global alias.<alias-name> <git-command>` 命令来设置全局别名。

例如：设置 `gp` 为 `git pull` 的别名。

```shell
git config --global alias.gp pull
```

这将在您的全局 Git 配置文件（通常是 `~/.gitconfig`）中添加一个别名设置。这个别名设置会应用于您的所有 Git 仓库。

例如：为了解决取消暂存文件的易用性问题，可以向 Git 中添加您自己的取消暂存别名。

```shell
git config --global alias.last 'log -1 HEAD'
```

## 通过编辑配置文件设置别名

直接打开您的全局 Git 配置文件 `~/.gitconfig` 或仓库级别的配置文件 `.git/config`，在 `[alias]` 部分添加别名设置。例如：

```shell
[alias]
    gp = pull
    st = status
```

保存文件后，别名设置会立即生效。一些有用的别名示例：

- **gs**：`git status` 的别名，用于查看仓库状态
- **gd**：`git diff` 的别名，用于查看文件差异
- **gc**：`git commit -m` 的别名，用于提交代码更改
- **gl**：`git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit` 的别名，用于以图形方式查看提交历史
- **gb**：`git branch` 的别名，用于管理分支
- **ga**：`git add -A` 的别名，用于添加所有更改到暂存区
- **go**：`git checkout` 的别名，用于切换分支或恢复文件
- **lg**：`git log` 的一个更友好的别名，用于显示提交历史

## 注意事项

- 别名设置会覆盖原有的 Git 命令，所以在设置别名时要确保不会与现有的 Git 命令冲突
- 别名设置是区分大小写的，所以 `gp` 和 `GP` 会被视为两个不同的别名
- 如果您在多个地方设置了相同的别名（例如：既在全局配置文件又在仓库级别配置文件中设置了 `gp` 别名），那么仓库级别的设置会覆盖全局设置
- 通过合理使用别名，您可以根据自己的工作流程和习惯来定制 Git 命令，从而提高开发效率和舒适度
