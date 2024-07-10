---
title: git revert
icon: command
date: 2024-05-20
category: 命令集
tag:
    - Git
---

## 描述

`git revert` 用于撤销之前的提交，但它并不直接删除那些提交，而是通过创建一个新的提交来逆转之前的更改。这个命令允许您保留原来的提交历史，同时撤销掉指定提交的更改，并将这些撤销作为新的提交记录下来。

`git revert` 会创建一个新的提交，所以您的提交历史会增加一条记录。如果您只是想撤销更改而不希望增加新的提交，可以使用 [git reset](./git_reset.md) 或 [git checkout](./git_checkout.md)（`git checkout` 在较新版本的 Git 中已被 [git restore](./git_restore.md) 替代）。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-e, --edit`  |  在提交之前编辑提交信息  |
|  `--continue`  |  使用 `.git/sequencer` 中的信息继续进行中的操作。用来在解决拣选或还原失败的冲突后继续执行  |
|  `--abort`  |  取消操作并返回到预排序状态  |

## 示例

### 撤销最近的一次提交

例如：撤销最近的一次提交。

```shell
git revert HEAD
```

### 撤销指定的提交

例如：撤销指定的提交。

```shell
git revert 1a2b3c4d
```

例如：撤销 HEAD 中倒数第四个的提交。

```shell
git revert HEAD~4
```

### 撤销一个范围的提交

例如：撤销一个范围的提交，使用 <kbd>^</kbd> 符号来指定起始点。

```shell
git revert ^1a2b3c4d
```
