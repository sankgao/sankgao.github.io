---
title: git log
icon: command
date: 2024-05-10
category: About
tag:
    - 命令
    - Git
---

## 描述

`git log` 用于显示当前分支的提交历史记录。默认情况下，`git log` 会按照时间顺序（从新到旧）显示提交，并包括提交者的姓名、电子邮件地址、提交日期和时间、提交信息以及每个提交的哈希值。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--all`  |  显示所有分支的提交历史  |
|  `-<num>, -n <num>`  |  指定显示提交的 log 信息数量  |
|  `--skip=<num>`  |  从最新提交开始，跳过指定数量再显示  |
|  `--since=<date>, --after=<date>`  |  仅显示指定日期之后的提交  |
|  `--until=<date>, --before=<date>`  |  仅显示指定日期之前的提交  |
|  `--author=<pattern>, --committer=<pattern>`  |  仅显示由指定作者提交的提交  |
|  `--grep=<pattern>`  |  仅显示提交信息中包含指定模式的提交  |
|  `-i, --regexp-ignore-case`  |  匹配正则表达式的限制模式，不考虑字母大小写  |
|  `--basic-regexp`  |  将限制性模式视为基本的正则表达式；这是默认的  |
|  `-E, --extended-regexp`  |  将限制性模式视为扩展的正则表达式，而不是默认的基本正则表达式  |
|  `--merges`  |  只打印合并后的提交  |
|  `--no-merges`  |  不显示合并提交  |
|  `--pretty=<format>, --format=<format>`  |  以指定的格式打印提交日志的内容  |
|  `--oneline`  |  将每个提交压缩到一行显示  |
|  `--date=<format>`  |  只对以人类可读格式显示的日期生效  |
|  `--graph`  |  以 ASCII 图形的方式显示分支和合并历史  |
|  `--output=<文件>`  |  输出到指定的文件，而不是标准输出  |
|  `-p, --patch`  |  显示每次提交的差异  |
|  `--stat`  |  显示每次提交引入或删除的文件数量统计信息  |

## 格式

### format 格式

- **oneline**

    ```shell
    git log -3 --pretty=oneline

    a159da180cd0ea822a03e81c29492a45e9828c53 (HEAD -> main, tag: v1.0.1, origin/main, origin/HEAD) change test01.txt
    a6c6aa91ec80e18add652523bf225760270a18ff (tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev) add test02.txt
    a51517a6fd3c3b53aa9a00590478442be34cda33 delete file
    ```

- **short**

    ```shell
    git log -3 --pretty=short

    commit a159da180cd0ea822a03e81c29492a45e9828c53 (HEAD -> main, tag: v1.0.1, origin/main, origin/HEAD)
    Author: Administrator <admin@example.com>

        change test01.txt

    commit a6c6aa91ec80e18add652523bf225760270a18ff (tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev)
    Author: Administrator <admin@example.com>

        add test02.txt

    commit a51517a6fd3c3b53aa9a00590478442be34cda33
    Merge: c0783a2 60f0e56
    Author: Administrator <admin@example.com>

        delete file
    ```

- **medium**

    ```shell
    git log -3 --pretty=medium

    commit a159da180cd0ea822a03e81c29492a45e9828c53 (HEAD -> main, tag: v1.0.1, origin/main, origin/HEAD)
    Author: Administrator <admin@example.com>
    Date:   Wed May 15 11:22:22 2024 +0800

        change test01.txt

        delete test02.txt

        add test03.txt

    commit a6c6aa91ec80e18add652523bf225760270a18ff (tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev)
    Author: Administrator <admin@example.com>
    Date:   Tue May 14 10:58:02 2024 +0800

        add test02.txt

    commit a51517a6fd3c3b53aa9a00590478442be34cda33
    Merge: c0783a2 60f0e56
    Author: Administrator <admin@example.com>
    Date:   Tue May 14 10:47:32 2024 +0800

        delete file
    ```

- **full**

    ```shell
    git log -3 --pretty=full

    commit a159da180cd0ea822a03e81c29492a45e9828c53 (HEAD -> main, tag: v1.0.1, origin/main, origin/HEAD)
    Author: Administrator <admin@example.com>
    Commit: Administrator <admin@example.com>

        change test01.txt

        delete test02.txt

        add test03.txt

    commit a6c6aa91ec80e18add652523bf225760270a18ff (tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev)
    Author: Administrator <admin@example.com>
    Commit: Administrator <admin@example.com>

        add test02.txt

    commit a51517a6fd3c3b53aa9a00590478442be34cda33
    Merge: c0783a2 60f0e56
    Author: Administrator <admin@example.com>
    Commit: Administrator <admin@example.com>

        delete file
    ```

- **fuller**

    ```shell
    git log -3 --pretty=fuller

    commit a159da180cd0ea822a03e81c29492a45e9828c53 (HEAD -> main, tag: v1.0.1, origin/main, origin/HEAD)
    Author:     Administrator <admin@example.com>
    AuthorDate: Wed May 15 11:22:22 2024 +0800
    Commit:     Administrator <admin@example.com>
    CommitDate: Wed May 15 11:22:22 2024 +0800

        change test01.txt

        delete test02.txt

        add test03.txt

    commit a6c6aa91ec80e18add652523bf225760270a18ff (tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev)
    Author:     Administrator <admin@example.com>
    AuthorDate: Tue May 14 10:58:02 2024 +0800
    Commit:     Administrator <admin@example.com>
    CommitDate: Tue May 14 10:58:02 2024 +0800

        add test02.txt

    commit a51517a6fd3c3b53aa9a00590478442be34cda33
    Merge: c0783a2 60f0e56
    Author:     Administrator <admin@example.com>
    AuthorDate: Tue May 14 10:47:32 2024 +0800
    Commit:     Administrator <admin@example.com>
    CommitDate: Tue May 14 10:47:32 2024 +0800

        delete file
    ```

### date 格式

- **--date=relative**：显示相对于当前时间的日期。例如：`6 hours ago`
- **--date=local**：是 `--date=default-local` 的一个别名。例如：`Wed May 15 11:22:22 2024`
- **--date=iso-local**：使用用户的本地时区。例如：`2024-05-15 11:22:22 +0800`
- **--date=iso-strict**：显示严格的 ISO 8601 格式的时间戳。例如：`2024-05-15T11:22:22+08:00`
- **--date=iso, --date=iso8601**：以类似 ISO 8601 的格式显示时间戳。例如：`2024-05-15 11:22:22 +0800`
- **--date=rfc, --date=rfc2822**：显示 RFC 2822 格式的时间戳，经常出现在电子邮件中。例如：`Wed, 15 May 2024 11:22:22 +0800`
- **--date=short**：只显示日期，而不显示时间。例如：`2024-05-15`
- **--date=raw, --date=unix**：显示日期为 Unix 纪元时间戳（自 1970-01-01 00:00:00 UTC 以来的秒数）。例如：`1715743342 +0800`
- **--date=format:"%c"**：指定以系统语言首选的格式（`%c`）显示日期。例如：`Wed 15 May 2024 11:22:22 AM GMT`

## 示例

### 显示提交历史

例如：显示所有的提交历史

```shell
git log
```

例如：显示以指定 `commit id` 开始的提交历史

```shell
git log a51517a6fd3c3b53aa9a00590478442be34cda33
```

例如：显示指定 `commit id` 提交历史

```shell
git log -1 a51517a6fd3c3b53aa9a00590478442be34cda33
```

### 显示每次提交的差异

```shell
git log -p
```

### 以简洁显示提交历史

```shell
git log -3 --oneline

a159da1 (HEAD -> main, tag: v1.0.1, origin/main, origin/HEAD) change test01.txt
a6c6aa9 (tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev) add test02.txt
a51517a delete file
```

### 显示指定作者的提交历史

作者名可以不写完，且可以指定多个作者

```shell
git log --author="admin"
git log --author="admin" --author="root"
```

### 显示最近一周的提交历史

```shell
git log --since="1 week ago"
```

### 使用图形显示分支历史

```shell
git log --graph --oneline
```

### 获取某个提交历史的作者

```shell
git log -1 --pretty=format:"%an" a51517a6fd3c3b53aa9a00590478442be34cda33
```
