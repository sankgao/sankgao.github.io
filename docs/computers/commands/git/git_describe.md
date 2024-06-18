---
title: git describe
icon: alias
date: 2024-06-18
category: About
tag:
    - 命令
    - Git
---

## 描述

`git describe` 用于为最新的可达提交生成一个可读的名称。它通常用于生成软件的版本号，特别是当你想基于当前提交的历史来生成一个有意义的标签时。

这个命令会查找最近的标签，并基于标签和最近的提交来生成一个描述性的字符串。如果当前 HEAD 指向一个标签，那么 `git describe` 就会返回那个标签名。否则，它会返回一个标签名加上自那个标签以来的提交数，以及当前提交的简短哈希值。

`git describe` 是一个在自动化构建系统和版本控制中非常有用的命令，因为它可以根据最近的标签和提交数来生成一个唯一且描述性的字符串，这对于跟踪软件的版本状态特别有用。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--tags`  |  只考虑轻量级标签（默认包含注解标签和轻量级标签）  |
|  `--long`  |  显示完整的 `40` 字符的提交哈希值，而不是简短的  |
|  `--all`  |  考虑所有引用（包括分支和远程引用），而不仅仅是标签  |
|  `--abbrev=<n>`  |  设置显示的哈希值的长度  |
|  `--dirty[=<标记>], --broken[=<标记>]`  |  如果工作目录中有未提交的更改，则在输出中添加一个 `-dirty` 后缀  |
|  `--exact-match`  |  仅当 HEAD 正好指向一个标签时才返回标签名  |

## 示例

例如：对一个标签名做 `git describe`，只会显示标签名。

```shell
git describe hello_1.0

hello_1.0
```

例如：使用 `--all` 选项，命令可以使用分支头作为参考，所以输出也会显示引用路径。

```shell
git describe --all hello_1.0

tags/hello_1.0
```

```shell
git describe --all HEAD

heads/main
```

```shell
git describe --all HEAD^

tags/hello_1.0-3-g79b758f
```
