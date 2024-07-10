---
title: git ls-remote
icon: command
date: 2024-05-28
category: 命令集
tag:
    - Git
---

## 描述

`git ls-remote` 用于列出给定远程仓库中所有可用的引用（通常是分支和标签）以及它们对应的最新提交对象的 SHA-1 哈希值。这个命令非常有用，尤其是当您想要查看远程仓库中所有分支的最新提交而不克隆整个仓库时。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `<repo>`  |  查询的 “远程” 版本库。这个参数可以是一个 URL，也可以是一个远程的名称  |
|  `-h, --heads`  |  显示存储在 `refs/heads` 中的引用  |
|  `-t, --tags`  |  显示存储在 `refs/tags` 中的引用  |
|  `--refs`  |  在输出中不显示剥离的标签或像 HEAD 这样的伪引用  |
|  `-q, --quiet`  |  不将远程 URL 打印到标准错误流  |
|  `<patterns>`  |  显示匹配一个或多个给定模式的引用  |

## 示例

例如：列出本地仓库所有引用，包括标签和伪引用。

```shell
git ls-remote

From /home/qingshan/projects/git_tutorials.git
4b0390e8a8a24305d1a54fb8c2c2b1b06b7f78af        HEAD
4b0390e8a8a24305d1a54fb8c2c2b1b06b7f78af        refs/heads/dev
4b0390e8a8a24305d1a54fb8c2c2b1b06b7f78af        refs/heads/main
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.0
cdb44ad37126f01cd0cd3bfbfd5c6c52ec9ba6c0        refs/tags/v1.0.1
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.1^{}
```

例如：列出指定仓库的所有分支和标签及其最新的提交哈希值。

```shell
git ls-remote /home/qingshan/projects/git_tutorials.git

4b0390e8a8a24305d1a54fb8c2c2b1b06b7f78af        HEAD
4b0390e8a8a24305d1a54fb8c2c2b1b06b7f78af        refs/heads/dev
4b0390e8a8a24305d1a54fb8c2c2b1b06b7f78af        refs/heads/main
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.0
cdb44ad37126f01cd0cd3bfbfd5c6c52ec9ba6c0        refs/tags/v1.0.1
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.1^{}
```

例如：列出指定仓库与给定模式匹配的所有引用。

```shell
git ls-remote /home/qingshan/projects/git_tutorials.git *}

d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.1^{}
```

例如：列出存储在 `refs/tags` 中的引用。

```shell
git ls-remote -t

From /home/qingshan/projects/git_tutorials.git
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.0
cdb44ad37126f01cd0cd3bfbfd5c6c52ec9ba6c0        refs/tags/v1.0.1
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.1^{}
```

例如：列出存储在 `refs/tags` 中的引用，但不显示剥离的标签或像 HEAD 这样的伪引用。

```shell
git ls-remote -t --refs

From /home/qingshan/projects/git_tutorials.git
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.0
cdb44ad37126f01cd0cd3bfbfd5c6c52ec9ba6c0        refs/tags/v1.0.1
```
