---
title: git archive
icon: command
date: 2024-06-18
category: 命令集
tag:
    - Git
---

## 描述

`git archive` 用于创建项目仓库的归档文件。它允许您获取仓库中特定提交或分支的文件快照，并将其打包为 ZIP、TAR 或其他格式的压缩文件。这对于备份、发布版本或创建项目的快照特别有用。

`git archive` 命令是创建项目快照或发布版本的强大工具，因为它只包含指定提交或分支的文件，而不包括 Git 仓库的元数据（如：`.git` 目录）。这使得归档文件更小，更适合于分发和备份。

在建立归档时，如果使用树对象 ID 进行归档，则使用当前时间作为归档中文件的修改时间；而如果使用提交 ID 或里程碑 ID 进行归档，则使用提交建立的时间作为归档中文件的修改时间。

此外，如果使用 `tar` 格式，提交 ID 会存储在全局扩展 `pax` 标头中；可以使用 `git get-tar-commit-id` 提取。在 ZIP 文件中，它被存储为文件注释。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--format=<format>`  |  归档文件的格式。如果没有给出 `--format`，并且指定了输出文件，将从文件名中推断出格式（例如：写入 `foo.zip` 会使输出为 `zip` 格式）。否则，输出格式为 `tar`  |
|  `-l, --list`  |  显示所有可用的格式  |
|  `--prefix=<prefix>/`  |  在归档文件内部为所有文件和目录添加一个前缀  |
|  `-v, --verbose`  |  向标准错误流报告进度，显示更多详细信息  |
|  `-o <file>, --output=<file>`  |  将存档写入文件而不是标准输出流  |
|  `--add-file=<file>`  |  添加一个非跟踪的文件到存档。可以重复添加多个文件  |
|  `-f, --force`  |  强制添加忽略的文件，即使文件被 `.gitignore` 文件忽略，也可以使用此选项将其添加到暂存区  |
|  `--remote=<repository>`  |  从远程仓库创建归档，而不是本地仓库  |
|  `<tree-ish>`  |  要制作存档的树目录或提交  |

## 基本语法:

```shell
git archive --format=<format> --output=<file> <tree-ish>
```

- **--format=\<format\>**：指定输出格式，如：`zip`、`tar`、`tar.gz` 等
- **--output=\<file\>**：归档文件的输出路径和名称
- **\<tree-ish\>**：可以是一个提交哈希、分支名、标签名或任何其他指向树对象的引用

## 示例

例如：创建当前 HEAD 提交的 ZIP 归档。

```shell
git archive --format=zip --output=my-project.zip HEAD
```

例如：为特定提交创建 TAR.GZ 归档。假设您有一个提交哈希 `abc123`，您可以这样创建归档。

```shell
git archive --format=tar.gz --output=my-project-abc123.tar.gz abc123
```

例如：为分支创建带前缀的 TAR 归档。为 `develop` 分支创建归档，并在归档内部的所有文件和目录前添加 `project-` 前缀。

```shell
git archive --format=tar --prefix=project/ --output=project-develop.tar develop
```

例如：为 `v1.4.0` 版本创建一个压缩的压缩包。

```shell
git archive --format=tar --prefix=git-1.4.0/ v1.4.0 | gzip > git-1.4.0.tar.gz
```

例如：为 `v1.4.0` 版本创建一个压缩的压缩包，但用内置的 TAR.GZ 处理。

```shell
git archive --format=tar.gz --prefix=git-1.4.0/ v1.4.0 > git-1.4.0.tar.gz
```

例如：为 `v1.4.0` 版本创建一个压缩的压缩包，但用格式是从输出文件中推断出来。

```shell
git archive --prefix=git-1.4.0/ -o git-1.4.0.tar.gz v1.4.0
```

例如：为 `v1.4.0` 版本创建一个压缩的 `tarball`，但没有全局扩展的 `pax` 头。

```shell
git archive --format=tar --prefix=git-1.4.0/ v1.4.0^{tree} | gzip > git-1.4.0.tar.gz
```
