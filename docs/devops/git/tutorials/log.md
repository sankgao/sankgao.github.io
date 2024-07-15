---
title: 提交历史
icon: log
date: 2024-05-24
order: 6
category: DevOps
tag:
    - Git
---

在提交了若干更新，或者克隆了某个项目之后，如果想回顾提交历史。可以使用 [git log](../../../commands/git/git_log.md) 命令。例如：

```shell
git log

commit 7df306b180568b13a9f7782f3575c8f06e4b1ed5 (HEAD -> main)
Author: Sank Gao <sankgao@example.com>
Date:   Fri May 24 10:43:10 2024 +0800

    将 test01.txt 重命名为 test02.txt

commit 99114d61ea731daf4d5663aa77d83810a8c38680
Author: Sank Gao <sankgao@example.com>
Date:   Thu May 23 16:28:25 2024 +0800

    modified test01.txt

commit 232657552142c8fe97ac32f5801c70137ed95246
Author: Sank Gao <sankgao@example.com>
Date:   Thu May 23 14:26:19 2024 +0800

    change file

    add README.md

    modified test01.txt

commit f3b964575a8a1d6919e591173d8a788f968a4140
Author: Sank Gao <sankgao@example.com>
Date:   Thu May 23 10:17:40 2024 +0800

    add test01.txt
```

不传入任何参数的默认情况下，`git log` 会按时间先后顺序列出所有的提交，最近的更新排在最上面。这个命令会列出每个提交的 SHA-1 校验和、作者的名字和电子邮件地址、提交时间以及提交说明。

`git log` 有许多选项，下面介绍几个常用的选项。

## 限制显示的日志条目数量

使用 `-<num>` 或 `-n <num>` 选项，指定显示提交的 log 信息数量。

例如：只显示最近两次的提交。

```shell
git log -2
# 或
git log -n 2

commit 7df306b180568b13a9f7782f3575c8f06e4b1ed5 (HEAD -> main)
Author: Sank Gao <sankgao@example.com>
Date:   Fri May 24 10:43:10 2024 +0800

    将 test01.txt 重命名为 test02.txt

commit 99114d61ea731daf4d5663aa77d83810a8c38680
Author: Sank Gao <sankgao@example.com>
Date:   Thu May 23 16:28:25 2024 +0800

    modified test01.txt
```

## 显示每次提交所引入的差异

使用 `-p` 或 `--patch` 选项，在提交信息后，显示每次提交的差异（按 **补丁** 的格式输出）。例如：显示最近两次提交所引入的差异

```shell
git log -2 -p

commit 7df306b180568b13a9f7782f3575c8f06e4b1ed5 (HEAD -> main)
Author: Sank Gao <sankgao@example.com>
Date:   Fri May 24 10:43:10 2024 +0800

    将 test01.txt 重命名为 test02.txt

diff --git a/test01.txt b/test02.txt
similarity index 100%
rename from test01.txt
rename to test02.txt

commit 99114d61ea731daf4d5663aa77d83810a8c38680
Author: Sank Gao <sankgao@example.com>
Date:   Thu May 23 16:28:25 2024 +0800

    modified test01.txt

diff --git a/test01.txt b/test01.txt
index fea590a..f437e2d 100644
--- a/test01.txt
+++ b/test01.txt
@@ -1,2 +1,3 @@
 test01
 test01test01
+test01
```

## 自定义记录的显示格式

使用 `--pretty=<format>` 或 `--format=<format>` 选项，可以自定义记录的显示格式。`format` 接受的常用格式占位符如下：

- **%n**：换行
- **%h**：简短的提交哈希值
- **%an**：作者名称。通常不会进行任何特殊的处理或格式化。如果作者的名字中有空格或其他特殊字符，它们将原样输出
- **%ae**：作者电子邮箱。将其转换为小写形式输出，无论原始的电子邮件地址是大写、小写还是混合大小写
- **%ad**：作者修订日期。显示默认日期格式。例如：`Wed May 15 11:22:22 2024 +0800`
- **%ar**：作者修订日期。显示相对于当前时间的日期。例如：`28 hours ago`
- **%cn**：提交者名称。通常不会进行任何特殊的处理或格式化。如果提交者的名字中有空格或其他特殊字符，它们将原样输出
- **%ce**：提交者电子邮箱。将其转换为小写形式输出，无论原始的电子邮件地址是大写、小写还是混合大小写
- **%cd**：提交日期。显示默认日期格式。例如：`Wed May 15 11:22:22 2024 +0800`
- **%cr**：提交日期。显示相对于当前时间的日期。例如：`28 hours ago`
- **%s**：显示标题行
- **%b**：显示完整提交信息。如果只有标题行，没有完整提交信息，则显示空
- **%B**：显示标题行及完整提交信息

**作者** 指的是实际作出修改的人，**提交者** 指的是最后将此工作成果提交到仓库的人。

例如：自定义的格式历史记录。

```shell
git log --pretty=format:"%h - %an - %ar: %s"

7df306b - Sank Gao - 45 minutes ago: 将 test01.txt 重命名为 test02.txt
99114d6 - Sank Gao - 19 hours ago: modified test01.txt
2326575 - Sank Gao - 21 hours ago: change file
f3b9645 - Sank Gao - 25 hours ago: add test01.txt
```
