---
title: git ls-tree
icon: command
date: 2024-05-28
category: 命令集
tag:
    - Git
---

## 描述

`git ls-tree` 用于列出给定树对象（通常是某个提交的 SHA-1 哈希值）的内容。它会显示树对象中的文件和子目录列表，以及它们的模式、类型和对应的 SHA-1 哈希值。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `<tree-ish>`  |  可以是一个提交对象或者树对象的 SHA-1 哈希值  |
|  `-d`  |  只显示已命名的目录条目本身，不显示其子条目  |
|  `-r`  |  向子树递归  |
|  `-t`  |  即使在递归时也显示树条目。如果未传递 `-r`，则无影响。`-d` 意味着 `-t`  |
|  `-l, --long`  |  显示 blob（文件）条目的对象大小  |
|  `--full-name`  |  显示完整的路径名  |

## 示例

例如：列出当前分支的最新提交中包含的所有文件。

```shell
git ls-tree HEAD

100644 blob e6249324cb83b7d63fa664f4fb4dd1ada0133053    README.md
100644 blob b4682767c489896d37957a8b81d946d262ffbe3e    test02.txt
```

例如：列出当前分支上一个提交中包含的所有文件。

```shell
git ls-tree HEAD~1

100644 blob e6249324cb83b7d63fa664f4fb4dd1ada0133053    README.md
100644 blob f437e2d9915b6ca9077436581d5594845e82e38a    test01.txt
```

例如：列出当前分支指定提交中包含的所有文件。

```shell
git ls-tree 7333fb5d96fab255ef780add57a41ffb1d3fbfe1

100644 blob e6249324cb83b7d63fa664f4fb4dd1ada0133053    README.md
100644 blob b4682767c489896d37957a8b81d946d262ffbe3e    test02.txt
```
