---
title: git am
icon: command
date: 2024-06-25
category: About
tag:
    - 命令
    - Git
---

## 描述

`git am` 用于应用由 [git format-patch](./git_format-patch.md) 或其他方式生成的补丁文件（patch files）到当前的代码库中。

`git am` 的基本用法 `git am <patchfile>` 其中 `<patchfile>` 是补丁文件的路径。这个命令将读取补丁文件的内容，并将其应用到本地的代码库中。如果应用成功，将生成一个新的提交，包含了补丁所做的更改。

`git am` 命令是 Git 中用于应用补丁文件的强大工具，它可以帮助开发者轻松地将补丁集成到他们的代码库中。通过结合其他 Git 命令和选项，开发者可以高效地管理和维护他们的代码库。

**注意事项：**

- `git am` 只能应用 `.patch` 或 `.diff` 格式的补丁文件
- 补丁文件应该是以 UTF-8 编码保存的纯文本文件
- 补丁文件必须是基于当前代码库的最新提交生成的，否则可能会出现冲突

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-s, --signoff`  |  在补丁文件中添加当前用户签名信息（`Signed-off-by:`）  |
|  `-3`  |  如果遇到冲突，尝试进行三路合并（three-way merge），这有助于解决行号不匹配的问题  |
|  `--directory=<dir>`  |  更改补丁中的文件路径，使补丁应用于指定目录中的文件  |
|  `-i, --interactive`  |  交互式运行  |

## 示例

例如：如果您有一个名为 `example.patch` 的补丁文件，您可以使用以下命令将其应用到本地的代码库中。

```shell
git am example.patch
```

这将读取 `example.patch` 文件的内容，并将其应用到本地的代码库中。如果应用成功，将生成一个新的提交，包含了补丁所做的更改。
