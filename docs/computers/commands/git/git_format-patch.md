---
title: git format-patch
icon: command
date: 2024-06-25
category: About
tag:
    - 命令
    - Git
---

## 描述

`git format-patch` 用于生成一系列基于某个提交（或提交范围）的补丁文件（patch files）。这些补丁文件可以被其他 Git 仓库通过 [git am](./git_am.md) 命令应用，以实现代码迁移或合并。

`git format-patch` 命令会为每个指定的提交生成一个 `.patch` 文件，这些文件是文本文件，包含了将提交应用到另一个 Git 仓库所需的更改。文件名通常基于提交的哈希值（但会缩短并添加 `.patch` 后缀）。

这些补丁文件可以通过电子邮件、版本控制系统、文件共享服务等方式发送给其他人，或者用于自动化脚本中的代码迁移。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--root`  |  从仓库的根提交（即第一个提交）开始生成补丁  |
|  `-n, --number=<n>`  |  指定要生成的补丁数量  |
|  `-o <directory>, --output-directory=<directory>`  |  指定输出补丁文件的目录  |
|  `-s, --signoff`  |  在补丁文件中添加当前用户签名信息（`Signed-off-by:`）  |
|  `--cover-letter`  |  生成一个封面信（cover letter），通常用于描述补丁集合的总体目的或注意事项  |
|  `--subject-prefix=<prefix>`  |  为补丁的主题添加前缀  |

## 示例

例如：从最近的未推送提交开始，生成所有补丁到当前目录下的 `patches` 文件夹中。

```shell
git format-patch -o patches/
```

例如：从特定的提交 `abc123` 开始，生成 `3` 个补丁。

```shell
git format-patch -n 3 abc123
```

例如：将最近 3 个提交转换为补丁，并添加签名信息并输出到 `signed_patches` 目录。

```shell
git format-patch -s -o signed_patches/ HEAD~3..HEAD
```
