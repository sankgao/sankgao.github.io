---
title: git shortlog
icon: command
date: 2024-05-20
category: 命令集
tag:
    - Git
---

## 描述

`git shortlog` 用于总结仓库中的提交历史，并按照提交者进行分组和汇总。这个命令主要用于生成一个简洁的报告，显示每个提交者所做的提交数量以及相关的提交信息。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-n, --numbered`  |  根据每个作者的提交数量对输出进行排序，而不是按照作者的字母顺序  |
|  `-s, --summary`  |  抑制提交描述，只提供提交计数摘要  |
|  `-e, --email`  |  显示每个作者的电子邮件地址  |
|  `--format[=<格式>]`  |  代替提交主题，使用一些其他信息来描述每个提交  |
|  `--group=<type>`  |  根据 `<type>` 对提交进行分组。如：`author`、`committer`、`trailer:<field>`、`format:<format>`  |
|  `-c, --committer`  |  这是 `--group=committer` 的一个别名  |

## 示例

### 按提交者数量显示

例如：按提交者数量显示，由大到小排序。

```shell
git shortlog -8 -n

Administrator (4):
      change test01.txt
      add test03.txt
      解决合并冲突
      change file

zhang san (3):
      change test01.txt
      change test01.txt
      change file

qingshan (1):
      change test01.txt
```

### 只提供提交计数摘要

例如：抑制提交描述，只提供提交计数摘要。

```shell
git shortlog -8 -s
     4  Administrator
     1  qingshan
     3  zhang san
```

### 按指定格式显示

例如：只显示简短的 `commit id` 和标题行。

```shell
git shortlog -8 --format="%h %s"
Administrator (4):
      114fbb1 change test01.txt
      097351d add test03.txt
      453f5ff 解决合并冲突
      0d01fc1 change file

qingshan (1):
      0f16cb6 change test01.txt

zhang san (3):
      1d6b44c change test01.txt
      b82b21c change test01.txt
      52e58a9 change file
```
