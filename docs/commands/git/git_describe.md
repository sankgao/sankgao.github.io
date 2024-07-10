---
title: git describe
icon: command
date: 2024-06-18
category: 命令集
tag:
    - Git
---

## 描述

`git describe` 用于为最新的可达提交生成一个可读的名称。它通常用于生成软件的版本号，特别是当您想基于当前提交的历史来生成一个有意义的标签时。

这个命令会查找最近的标签，并基于标签和最近的提交来生成一个描述性的字符串。如果当前 HEAD 指向一个标签，那么 `git describe` 就会返回那个标签名。否则，它会返回一个标签名加上自那个标签以来的提交数，以及当前提交的简短哈希值。

`git describe` 是一个在自动化构建系统和版本控制中非常有用的命令，因为它可以根据最近的标签和提交数来生成一个唯一且描述性的字符串，这对于跟踪软件的版本状态特别有用。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--tags`  |  显示轻量级标签（默认包含注解标签和轻量级标签）  |
|  `--long`  |  显示完整的 `40` 字符的提交哈希值，而不是简短的  |
|  `--all`  |  显示所有的引用（包括标签和分支），而不仅仅是标签  |
|  `--abbrev=<n>`  |  设置显示的哈希值的长度  |
|  `--dirty[=<标记>], --broken[=<标记>]`  |  如果工作目录中有未提交的更改，则在输出中添加一个 `-dirty` 后缀  |
|  `--exact-match`  |  仅当 HEAD 正好指向一个标签时才返回标签名  |

## 示例

### 提交有标签

例如：如果当前 HEAD 提交恰好被打上一个标签，则显示该标签的名字。

```shell
git tag v1.1.0
git describe

v1.1.0
```

例如：对一个标签名执行 `git describe` 命令，只会显示标签名。

```shell
git describe v1.1.0

v1.1.0
```

例如：查看指定提交（HEAD）。

```shell
git describe HEAD

v1.1.0
```

### 提交没有标签

若提交没有对应的标签，但是在其祖先版本上建有标签，则使用类似 `<tag>-<num>-g<commit>` 的格式显示。

其中 `<tag>` 是最接近的祖先提交的标签名字，`<num>` 是该标签和提交之间的距离，`<commit>` 是该提交的精简提交 ID。例如：

```shell
git describe HEAD^

v1.0.1-8-gb1b3de7
```

### 显示引用路径

例如：使用 `--all` 选项，命令可以使用分支头作为参考，所以输出也会显示引用路径。

```shell
git describe --all v1.1.0

tags/v1.1.0
```

```shell
git describe --all HEAD

heads/main
```

```shell
git describe --all HEAD^

tags/hello_1.0-3-g79b758f
```
