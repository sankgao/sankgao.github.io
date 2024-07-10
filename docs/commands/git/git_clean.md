---
title: git clean
icon: command
date: 2024-05-20
category: 命令集
tag:
    - Git
---

## 描述

`git clean` 用于删除工作目录中未跟踪的文件和目录。这些未跟踪的文件和目录是那些没有被 Git 管理的文件，也就是说它们没有被添加到暂存区或提交到仓库中。

使用 `git clean` 时需要谨慎，因为它会永久删除文件，而且无法恢复。通常，这个命令用于清理构建产物、临时文件或其他不想保留的未跟踪文件。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-d`  |  删除目录  |
|  `-f, --force`  |  删除文件  |
|  `-i, --interactive`  |  以交互方式清理文件  |
|  `-n, --dry-run`  |  只显示删除的文件或目录，而不做任何改变  |
|  `-q, --quiet`  |  不显示输出内容  |
|  `-e <模式>, --exclude <模式>`  |  在标准的忽略规则之外，使用给定的排除模式  |
|  `-X`  |  只删除被 `.gitignore` 文件忽略的文件  |

## 示例

Git 配置变量 `clean.requireForce` 默认为 `true`，如果该变量没有设置为 `false`，`git clean` 将拒绝删除文件或目录，除非给出 `-f` 或 `-i`。除非给出第二个 `-f`，否则 Git 将拒绝修改未跟踪的嵌套 git 仓库（有 `.git` 子目录的目录）。

例如：删除所有未跟踪的文件和目录。

```shell
git clean -f
```

例如：删除未跟踪的目录及其内容。

```shell
git clean -fd
```


例如：删除忽略文件匹配的文件。

```shell
git clean -fX
```

例如：交互式删除。

```shell
git clean -i
```
