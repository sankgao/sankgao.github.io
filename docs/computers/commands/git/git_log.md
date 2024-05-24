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
|  `--reverse`  |  以相反的顺序输出选择显示的提交  |
|  `--decorate[=short\|full\|auto\|no]`  |  打印显示的任何提交的引用名称。`short` 打印引用名称但不包括前缀（`refs/heads/`、`refs/tags/` 和 `refs/remotes`），默认值；`full` 打印完整的引用名称包括前缀；`no` 不打印引用名称  |
|  `-<num>, -n <num>`  |  指定显示提交的 log 信息数量  |
|  `--skip=<num>`  |  从最新提交开始，跳过指定数量再显示  |
|  `--since=<date>, --after=<date>`  |  仅显示指定日期之后的提交  |
|  `--until=<date>, --before=<date>`  |  仅显示指定日期之前的提交  |
|  `--author=<pattern>, --committer=<pattern>`  |  仅显示由指定作者提交的提交  |
|  `--grep=<pattern>`  |  仅显示提交信息中包含指定模式的提交  |
|  `-S"String"`  |  在添加或删除提交中查找，匹配指定字符串的提交  |
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
|  `-p, --patch`  |  在提交信息后，显示每次提交的差异  |
|  `--stat`  |  在提交信息后，显示每次提交引入或删除的文件数量统计信息  |
|  `--shortstat`  |  在提交信息后，只显示 `--stat` 中最后的行数添加、修改、删除的统计  |
|  `--name-only`  |  在提交信息后，显示已修改的文件清单名称  |
|  `--name-status`  |  在提交信息后，显示新增、修改、删除的文件清单  |
|  `--abbrev-commit`  |  仅显示 hash 值的前几个字符，而非所有的 40 个字符  |
|  `--relative-date`  |  显示相对于当前时间的日期  |

## 格式

::: info
`hash` 值就是 `commit id` 值。
:::

### pretty 内置格式

以指定的内置格式打印提交日志的内容。

```shell
git log --pretty=<format>
# 或
git log --format=<format>
```

如果提交是一个合并，并且如果 `--pretty=<format>` 不是 `oneline`、`email` 或 `raw`，那么在 `Author:` 一行之前会插入一个附加行。这一行的开头是 `Merge:` 这一行以 `Merge:` 开头，并打印出祖先提交的哈希值，用空格分隔。

`<format>` 参数如下：

|  值  |  格式  |
|  :----:  |  :----  |
|  `oneline`  |  <hash 值> <标题行>  |
|  `short`  |  commit <hash 值><br />Author: <作者信息><br /><标题行>  |
|  `medium`  |  commit <hash 值><br />Author: <作者信息><br />Date: <提交日期><br /><标题行><br /><完整提交信息>  |
|  `full`  |  commit <hash 值><br />Author: <作者信息><br />Commit: <提交者信息><br /><标题行><br /><完整提交信息>  |
|  `fuller`  |  commit <hash 值><br />Author: <作者信息><br />AuthorDate: <作者提交日期><br />Commit: <提交者信息><br />CommitDate: <提交者提交日期><br /><标题行><br /><完整提交信息>  |
|  `reference`  |  <简短 hash 值> (<标题行>, <简短作者提交日期>)  |
|  `email`  |  From <hash 值> <日期><br />From: <作者信息><br />Date: <作者提交日期><br />Subject: [PATCH] <标题行><br /><完整提交信息>  |
|  `mboxrd`  |  和 `email` 一样，但提交信息中以 `From` 开头的行（前面有零个或多个`>`）用 `>` 引出  |
|  `raw`  |  commit <hash 值><br />tree <树对象 hash 值，该提交时项目目录的状态><br />parent <父提交的哈希值。如果有多个父提交（比如在合并提交时），则会列出多个 parent 行><br />author <作者信息> <作者提交时间戳><br />committer <提交者提交信息> <提交者提交时间戳><br /><标题行><br /><完整提交信息>  |
|  `format:"<format-string>"`  |  指定想要显示的信息格式  |

`medium` 是 `git log` 输出的默认格式。**作者** 指的是实际作出修改的人，**提交者** 指的是最后将此工作成果提交到仓库的人。

- **oneline**

    格式：

    ```shell
    <hash 值> <标题行>
    ```

    例如：

    ```shell
    git log -3 --pretty=oneline

    a159da180cd0ea822a03e81c29492a45e9828c53 (HEAD -> main, tag: v1.0.1, origin/main, origin/HEAD) change test01.txt
    a6c6aa91ec80e18add652523bf225760270a18ff (tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev) add test02.txt
    a51517a6fd3c3b53aa9a00590478442be34cda33 delete file
    ```

- **short**

    格式：

    ```shell
    commit <hash 值>
    Author: <作者信息>
    <标题行>
    ```

    例如：

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

    格式：

    ```shell
    commit <hash 值>
    Author: <作者信息>
    Date: <提交日期>
    <标题行>
    <完整提交信息>
    ```

    例如：

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

    格式：

    ```shell
    commit <hash 值>
    Author: <作者信息>
    Commit: <提交者信息>
    <标题行>
    <完整提交信息>
    ```

    例如：

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

    格式：

    ```shell
    commit <hash 值>
    Author: <作者信息>
    AuthorDate: <作者提交日期>
    Commit: <提交者信息>
    CommitDate: <提交者提交日期>
    <标题行>
    <完整提交信息>
    ```

    例如：

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

- **reference**

    格式：

    ```shell
    <简短 hash 值> (<标题行>, <简短作者提交日期>)
    ```

    例如：

    ```shell
    git log -3 --pretty=reference

    a159da1 (change test01.txt, 2024-05-15)
    a6c6aa9 (add test02.txt, 2024-05-14)
    a51517a (delete file, 2024-05-14)
    ```

- **email**

    格式：

    ```shell
    From <hash 值> <日期>
    From: <作者信息>
    Date: <作者提交日期>
    Subject: [PATCH] <标题行>
    <完整提交信息>
    ```

    例如：

    ```shell
    git log -3 --pretty=email

    From a159da180cd0ea822a03e81c29492a45e9828c53 Mon Sep 17 00:00:00 2001
    From: Administrator <admin@example.com>
    Date: Wed, 15 May 2024 11:22:22 +0800
    Subject: [PATCH] change test01.txt

    delete test02.txt

    add test03.txt

    From a6c6aa91ec80e18add652523bf225760270a18ff Mon Sep 17 00:00:00 2001
    From: Administrator <admin@example.com>
    Date: Tue, 14 May 2024 10:58:02 +0800
    Subject: [PATCH] add test02.txt


    From a51517a6fd3c3b53aa9a00590478442be34cda33 Mon Sep 17 00:00:00 2001
    From: Administrator <admin@example.com>
    Date: Tue, 14 May 2024 10:47:32 +0800
    Subject: [PATCH] delete file
    ```

- **raw**

    格式：

    ```shell
    commit <hash 值>
    tree <树对象 hash 值，该提交时项目目录的状态>
    parent <父提交的哈希值。如果有多个父提交（比如在合并提交时），则会列出多个 parent 行>
    author <作者信息> <作者提交时间戳>
    committer <提交者提交信息> <提交者提交时间戳>
    <标题行>
    <完整提交信息>
    ```

    例如：

    ```shell
    git log -3 --pretty=raw
    commit a159da180cd0ea822a03e81c29492a45e9828c53
    tree 69d750f5f69080d68c6450039fa6e80dcdd38b6e
    parent a6c6aa91ec80e18add652523bf225760270a18ff
    author Administrator <admin@example.com> 1715743342 +0800
    committer Administrator <admin@example.com> 1715743342 +0800

        change test01.txt

        delete test02.txt

        add test03.txt

    commit a6c6aa91ec80e18add652523bf225760270a18ff
    tree f505e702d65613cf36cc31f095e2b0e92d86ffce
    parent a51517a6fd3c3b53aa9a00590478442be34cda33
    author Administrator <admin@example.com> 1715655482 +0800
    committer Administrator <admin@example.com> 1715655482 +0800

        add test02.txt

    commit a51517a6fd3c3b53aa9a00590478442be34cda33
    tree 3b969ab954fd723c5fb23e3c3024053c5595bbf8
    parent c0783a2f60bc50fd1a843781a1395614c2fc0dee
    parent 60f0e56d9052ed9d4b0c32fa4d8366b5edf4ae90
    author Administrator <admin@example.com> 1715654852 +0800
    committer Administrator <admin@example.com> 1715654852 +0800

        delete file
    ```

- **format:"\<format-string\>"**

    例如：

    ```shell
    git log -3 --pretty=format:"作者：%an 邮箱：%ae"

    作者：Administrator 邮箱：admin@example.com
    作者：Administrator 邮箱：Administrator@example.com
    作者：Administrator 邮箱：Administrator@example.com
    ```

### format 常用格式占位符

`--pretty=format:"<format-string>` 中常用格式占位符列表如下：

- **%n**：换行
- **%%**：输出 `%` 符号
- **%Cred**：后面输出将颜色改为红色
- **%Cgreen**：后面输出将颜色改为绿色
- **%Cblue**：后面输出将颜色改为蓝色
- **%Creset**：重置后面输出颜色
- **%C(…​)**：自定义后面输出颜色
- **%m**：左（`<`）、右（`>`）或边界（`-`）标记
- **%<(N[\,trunc\|ltrunc\|mtrunc\])**：使下一个占位符至少占用 `N` 列宽，必要时在右侧填充空格。如果输出超过 `N` 列，可选择在左侧（ltrunc）`..ft`、中间（mtrunc）`mi..le` 或末尾（trunc）`rig..` 截断（用 `..` 符号）。例如：作者名至少占 `5` 个字符宽度并在超出时用末尾截断 `--pretty=format:"%<(5,trunc)%an %h - %s"`
- **%H**：提交哈希值
- **%h**：简短的提交哈希值
- **%T**：目录树哈希值
- **%t**：简短的目录树哈希值
- **%P**：父类哈希值
- **%p**：简短的父类哈希值
- **%an**：作者名称。通常不会进行任何特殊的处理或格式化。如果作者的名字中有空格或其他特殊字符，它们将原样输出
- **%aN**：作者名称。会对作者的名字进行特殊的处理，主要是尝试将名字中的空格和其他分隔符替换为单个空格，并可能进行其他形式的规范化。有助于在输出中更一致地表示作者的名字，特别是在名字中包含多个单词或特殊字符的情况下
- **%ae**：作者电子邮箱。将其转换为小写形式输出，无论原始的电子邮件地址是大写、小写还是混合大小写
- **%aE**：作者电子邮箱。保持原始的电子邮件地址大小写不变
- **%al**：作者电子邮件的本地部分（`@` 符号之前的部分）
- **%aL**：作者电子邮件的本地部分（`@` 符号之前的部分）
- **%ad**：作者修订日期。显示默认日期格式。例如：`Wed May 15 11:22:22 2024 +0800`
- **%aD**：作者修订日期。显示 RFC 2822 格式。例如：`Wed, 15 May 2024 11:22:22 +0800`
- **%ar**：作者修订日期。显示相对于当前时间的日期。例如：`28 hours ago`
- **%at**：作者修订日期。显示日期为 Unix 纪元时间戳。例如：`1715743342`
- **%ai**：作者修订日期。显示类似的 ISO 8601 格式。例如：`2024-05-15 11:22:22 +0800`
- **%aI**：作者修订日期。显示严格的 ISO 8601 格式。例如：`2024-05-15T11:22:22+08:00`
- **%as**：作者修订日期。只显示日期，而不显示时间。例如：`2024-05-15`
- **%ah**：作者修订日期。以易读形式显示。例如：`Wed 11:22`
- **%cn**：提交者名称。通常不会进行任何特殊的处理或格式化。如果提交者的名字中有空格或其他特殊字符，它们将原样输出
- **%cN**：提交者名称。会对提交者的名字进行特殊的处理，主要是尝试将名字中的空格和其他分隔符替换为单个空格，并可能进行其他形式的规范化。有助于在输出中更一致地表示提交者的名字，特别是在名字中包含多个单词或特殊字符的情况下
- **%ce**：提交者电子邮箱。将其转换为小写形式输出，无论原始的电子邮件地址是大写、小写还是混合大小写
- **%cE**：提交者电子邮箱。保持原始的电子邮件地址大小写不变
- **%cl**：提交者电子邮件的本地部分（`@` 符号之前的部分）
- **%cL**：提交者电子邮件的本地部分（`@` 符号之前的部分）
- **%cd**：提交日期。显示默认日期格式。例如：`Wed May 15 11:22:22 2024 +0800`
- **%cD**：提交日期。显示 RFC 2822 格式。例如：`Wed, 15 May 2024 11:22:22 +0800`
- **%cr**：提交日期。显示相对于当前时间的日期。例如：`28 hours ago`
- **%ct**：提交日期。显示日期为 Unix 纪元时间戳。例如：`1715743342`
- **%ci**：提交日期。显示类似的 ISO 8601 格式。例如：`2024-05-15 11:22:22 +0800`
- **%cI**：提交日期。显示严格的 ISO 8601 格式。例如：`2024-05-15T11:22:22+08:00`
- **%cs**：提交日期。只显示日期，而不显示时间。例如：`2024-05-15`
- **%ch**：提交日期。以易读形式显示。例如：`Wed 11:22`
- **%d**：`ref` 名称
- **%D**：`ref` 名称，不带括号（`()`）包围
- **%(decorate:[:\<选项\>])**：自定义装饰的引用名称，`decorate` 字符串后面可以是冒号和零个或多个以逗号分隔的选项
    - **prefix=<值>**：显示在引用名称列表之前。默认为 `(`
    - **suffix=<值>**：显示在引用名称列表之后。默认为 `)`
    - **separator=<值>**：显示在引用名称之间。默认为 `,`
    - **point=<值>**：显示在 HEAD 和其指向的分支（如果有）之间。默认为 `->`
    - **tag=<值>**：显示在标记名称之前。默认为 `tag:`

- **%S**：在命令行中给出的提交 `ref` 名称
- **%s**：显示标题行
- **%b**：显示完整提交信息。如果只有标题行，没有完整提交信息，则显示空
- **%B**：显示标题行及完整提交信息

### date 格式

- **--date=relative**：显示相对于当前时间的日期。例如：`6 hours ago`
- **--date=local**：是 `--date=default-local` 的一个别名。例如：`Wed May 15 11:22:22 2024`
- **--date=iso-local**：使用用户的本地时区。例如：`2024-05-15 11:22:22 +0800`
- **--date=iso-strict**：显示严格的 ISO 8601 格式的时间戳。例如：`2024-05-15T11:22:22+08:00`
- **--date=iso, --date=iso8601**：以类似 ISO 8601 的格式显示时间戳。例如：`2024-05-15 11:22:22 +0800`
- **--date=rfc, --date=rfc2822**：显示 RFC 2822 格式的时间戳，经常出现在电子邮件中。例如：`Wed, 15 May 2024 11:22:22 +0800`
- **--date=short**：只显示日期，而不显示时间。例如：`2024-05-15`
- **--date=raw, --date=unix**：显示日期为 Unix 纪元时间戳（自 1970-01-01 00:00:00 UTC 以来的秒数）。例如：`1715743342 +0800`
- **--date=human**：如果时区与当前时区不匹配，则显示时区；如果匹配则不打印整个日期（对于今年的日期，跳过打印年份；但如果是最近几天的日期，也跳过整个日期本身，只显示哪个工作日）。对于较早的日期，小时和分钟也被省略了。例如：`Wed 11:22`
- **--date=format:"%c"**：指定以系统语言首选的格式（`%c`）显示日期。例如：`Wed 15 May 2024 11:22:22 AM GMT`

`--date=format:"<format-string>` 中常用占位符列表如下：

- **%c**：适用于区域设置的日期和时间表示。例如：`Tue 14 May 2024 10:58:02 AM GMT`
- **%Y**：带世纪的年份，用十进制数字（`0000~9999`）表示
- **%y**：无世纪的年份，用十进制数字（`00~99`）表示，也就是年份没有前两位
- **%m**：月份用十进制数字（`01~12`）表示
- **%B**：月份英文的全称
- **%b**：月份英文的缩写
- **%j**：年中天数用十进制数字（`001~366`）表示
- **%d**：月中天数用十进制数字（`01~31`）表示
- **%I**：12 小时制的小时（`01~12`）
- **%H**：24 小时制的小时（`00~23`）
- **%p**：12 小时制的指示器。上午用 `AM` 表示；下午用 `PM` 表示
- **%M**：分钟用十进制数字（`00~59`）表示
- **%S**：秒用十进制数字（`00~59`）表示
- **%w**：星期用十进制数字（`0~6`；星期日为 `0`）
- **%A**：星期英文的全称
- **%a**：星期英文的缩写
- **%W**：年中星期用十进制数字（`00~53`）表示，星期一作为星期的第一天
- **%U**：年中周数用十进制数字（`00~53`）表示，周日为一周的第一天
- **%x**：当前语言环境的日期表示。例如：`05/14/2024`
- **%X**：当前语言环境的时间表示。例如：`10:58:02 AM`
- **%z, %Z**：时区名称或时区缩写，如果时区未知，则没有字符。例如：`+0800`
- **%%**：表示百分号

## 示例

### 显示提交历史

例如：显示所有的提交历史。

```shell
git log
```

例如：以相反的顺序输出选择显示的提交。

```shell
git log --reverse
```

例如：显示以指定 `commit id` 开始的提交历史。

```shell
git log a51517a6fd3c3b53aa9a00590478442be34cda33
```

例如：显示指定 `dev` 分支的提交历史。

```shell
git log dev
```

例如：显示以指定 `v1.0.0` 标签开始的提交历史。

```shell
git log v1.0.0
```

例如：显示指定 `commit id` 提交历史。

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

作者名可以不写完，且可以指定多个作者。

```shell
git log --author="admin"
git log --author="admin" --author="root"
```

### 显示最近一周的提交历史

```shell
git log --since="1 week ago"
```

### 显示提交历史指定匹配信息

显示在指定匹配 `test01.txt` 提交历史。

例如：在提交历史记录中匹配 `test01.txt` 的提交历史。

```shell
git log -3 --grep='test01.txt'

commit 66c3923d32a89ab9c24d95c31aee2cd67c25e8f3
Author: Administrator <admin@example.com>
Date:   Thu May 9 13:34:22 2024 +0800

    add test01.txt

commit b5505b7f1702bce009eb002ba9a43e0088e1a189
Author: Administrator <admin@example.com>
Date:   Wed May 8 15:38:41 2024 +0800

    change test delete test01.txt

commit d050c5d9b420c41e8d34657e6129eff36854258e
Author: Administrator <admin@example.com>
Date:   Wed May 8 15:35:07 2024 +0800

    add test01.txt test02.txt
```

### 查找自首次出现以来的历史记录

例如：查找 `test` 字符串自首次出现以来的历史记录。

```shell
git log -S"test"
```

### 使用图形显示分支历史

```shell
git log --graph --oneline
```

### 获取某个提交历史的作者

```shell
git log -1 --pretty=format:"%an" a51517a6fd3c3b53aa9a00590478442be34cda33
```

### 显示已修改的文件清单名称

在提交信息后，显示已修改的文件清单名称。

```shell
git log -3 --name-only

commit a159da180cd0ea822a03e81c29492a45e9828c53 (HEAD -> main, tag: v1.0.1)
Author: Administrator <admin@example.com>
Date:   Wed May 15 11:22:22 2024 +0800

    change test01.txt

    delete test02.txt

    add test03.txt

test01.txt
test02.txt
test03.txt

commit a6c6aa91ec80e18add652523bf225760270a18ff (tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev)
Author: Administrator <admin@example.com>
Date:   Tue May 14 10:58:02 2024 +0800

    add test02.txt

test02.txt

commit a51517a6fd3c3b53aa9a00590478442be34cda33
Merge: c0783a2 60f0e56
Author: Administrator <admin@example.com>
Date:   Tue May 14 10:47:32 2024 +0800

    delete file
```
