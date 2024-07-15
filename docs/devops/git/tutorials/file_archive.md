---
title: 文件归档
icon: file-zip
date: 2024-06-18
order: 12
category: DevOps
tag:
    - Git
---

如果使用压缩工具（`tar`、`7zip`、`winzip`、`rar` 等）将工作区文件归档，一不小心会把版本库（`.git` 目录）包含其中，甚至将工作区中的忽略文件、临时文件也包含其中。

Git 提供了一个归档命令 [git archive](../../../commands/git/git_archive.md)，可以对任意提交对应的目录树建立归档。

例如：基于最新提交建立归档文件 `latest.zip`。

```shell
git archive -o latest.zip HEAD
```

例如：只将目录 `src` 和 `doc` 建立到归档 `partial.tar` 中。

```shell
git archive -o partial.tar HEAD src doc
```

例如：基于里程碑 `v1.0` 建立归档，并且为归档中的文件添加目录前缀 `1.0`。

```shell
git archive --format=tar --prefix=1.0/ v1.0 | gzip > foo-1.0.tar.gz
```

在建立归档时，如果使用树对象 ID 进行归档，则使用当前时间作为归档中文件的修改时间，而如果使用提交 ID 或里程碑等，则使用提交建立的时间作为归档中文件的修改时间。

此外，如果使用 `tar` 格式，提交 ID 会存储在全局扩展 `pax` 标头中；可以使用 `git get-tar-commit-id` 提取。在 ZIP 文件中，它被存储为文件注释。
