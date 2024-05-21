---
title: git switch
icon: command
date: 2024-05-20
category: About
tag:
    - 命令
    - Git
---

## 描述

`git switch` 用于切换分支的命令。这个命令在 Git V2.23 版本以后被引入，作为 `git checkout` 命令的一个更专注于分支切换的替代选项，因为 `git checkout` 命令的职责较多且不够明确。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `<branch>`  |  转到的分支  |
|  `<new-branch>`  |  新分支的名称  |
|  `<start-point>`  |  新分支的起点  |
|  `-c, --create`  |  在切换到分支之前，从 `<start-point>` 开始创建一个名为 `<new-branch>` 的新分支  |
|  `-C, --force-create`  |  在切换到分支之前，从 `<start-point>` 开始创建一个名为 `<new-branch>` 的新分支  |
|  `-d, --detach`  |  切换到某个提交但不创建新分支  |
|  `-q, --quiet`  |  不显示输出内容  |
|  `-t, --track`  |  创建新分支时，设置 upstream（上游仓库）配置  |

## 示例

### 切换到已存在的分支

例如：切换到 `dev` 分支。

```shell
git switch dev
```

例如：切换回上一个分支。

```shell
git switch -
```

### 创建一个新分支并切换到该分支

例如：使用 `-c` 或 `--create` 选项，创建一个新的 `test` 分支，并立即切换到该分支。如果分支已经存在，Git 会报错。

```shell
git switch -c test
```

例如：以特定的提交创建一个新分支并切换。

```shell
git switch -c dev_demo <commit id>
```

例如：以特定的标签创建一个新分支并切换。

```shell
git switch -c v1.0.1 <tagName>
```

### 切换到某个提交但不创建新分支

例如：使用 `-d` 或 `--detach` 选项，切换到某个提交但不创建新分支。

```shell
git switch -d <commit id>
```
