---
title: git bisect
icon: command
date: 2024-06-19
category: 命令集
tag:
    - Git
---

## 描述

`git bisect` 用于帮助用户确定引入错误的提交（`commit`）的强大工具。当您发现代码中的某个问题，但不确定是哪个提交引入的，`git bisect` 可以帮助您自动或半自动地定位到那个特定的提交。

`git bisect` 这个命令使用 **二分搜索算法** 来查找项目历史中哪个提交引入了一个错误。使用该命令时，首先告诉它一个已知包含错误的 **坏** 提交（包含错误的提交）和一个已知在错误出现之前的 **好** 提交（没有错误的提交）。然后 `git bisect` 在这两个端点之间挑选一个提交，并询问您所选的提交是 **好** 还是 **坏**。它继续缩小范围，直到找到引入错误的提交。

**注意事项**

- 在使用 `git bisect` 时，确保您的测试环境是干净的，并且您的测试是可靠的
- `git bisect` 不会修改您的工作目录或任何文件，它只是检出不同的提交
- 在 bisect 过程中，您可能需要多次构建和测试您的代码，所以确保这个过程是自动化的，以节省时间

总之，`git bisect` 是一个强大的工具，可以帮助您快速定位到引入错误的提交。如果您经常需要调试代码并确定错误的来源，那么掌握这个工具会非常有用。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `--no-checkout`  |  在二分查找过程的每个迭代中，不要检出新的工作区  |
|  `--first-parent`  |  在看到合并提交时，只跟随第一个父提交  |

## 命令

|  命令  |  描述  |
|  :----:  |  :----  |
|  `start`  |  启动 bisect 会话  |
|  `bad`  |  指定坏提交  |
|  `good`  |  指定好提交  |
|  `reset`  |  重置二分查找并返回到原来的 HEAD  |
|  `old`  |  指定旧提交  |
|  `new`  |  指定新提交  |
|  `terms`  |  获得当前使用的术语的提醒  |
|  `visualize`  |  视觉化、视图的二分查找  |
|  `log`  |  二分查找日志  |
|  `replay`  |  重启二分查找  |
|  `skip`  |  跳过二分查找  |
|  `run`  |  运行二分查找  |

## 示例

克隆 `https://github.com/ossxp-com/gitdemo-commit-tree.git` 项目到本地。

### 二分查找手动测试

例如：如果在 `doc` 目录中包含文件 `B.txt`，则此版本是 “坏” 的。

1. 首先确认工作在 `master` 分支

    ```shell
    git branch
    
    master
    ```

2. 开始二分查找

    ```shell
    git bisect start

    status: waiting for both good and bad commits
    ```

3. 当前版本已经是 “坏提交”，因为存在文件 `doc/B.txt`。而 G 版本是 “好提交”，因为不存在文件 `doc/B.txt`

    ```shell
    $ git cat-file -t master:doc/B.txt
    
    blob
    
    $ git cat-file -t G:doc/B.txt

    fatal: path 'doc/B.txt' exists on disk, but not in 'G'
    ```

4. 将当前版本（HEAD）标记为 “坏提交”，将 G 版本标记为 “好提交”

    ```shell
    $ git bisect bad

    status: waiting for good commit(s), bad commit known

    $ git bisect good G

    Bisecting: 5 revisions left to test after this (roughly 2 steps)
    [0cd7f2ea245d90d414e502467ac749f36aa32cc4] commit C.
    ```

5. 自动定位到 C 提交。没有文件 `doc/B.txt`，也是一个好提交

    ```shell
    $ git describe

    C

    $ ls doc

    C.txt  F.txt  I.txt  J.txt
    ```

6. 标记当前版本（C 提交）为 “好提交”

    ```shell
    git bisect good

    Bisecting: 3 revisions left to test after this (roughly 2 steps)
    [212efce1548795a1edb08e3708a50989fcd73cce] Commit D: merge G with H
    ```

7. 现在定位到 D 版本，这也是一个 “好提交”

    ```shell
    $ git describe

    D

    $ ls doc

    D.txt  G.txt  H.txt
    ```

8. 标记当前版本（D 提交）为 “好提交”

    ```shell
    git bisect good

    Bisecting: 1 revision left to test after this (roughly 1 step)
    [776c5c9da9dcbb7e463c061d965ea47e73853b6e] Commit B: merge D with E and F
    ```

9. 现在定位到 B 版本，存在 `doc/B.txt` 文件，标记 B 提交为 “坏提交”

    ```shell
    $ git describe

    B

    $ ls doc

    B.txt  D.txt  E.txt  F.txt  G.txt  H.txt  I.txt  J.txt

    $ git bisect bad

    Bisecting: 0 revisions left to test after this (roughly 0 steps)
    [83be36956c007d7bfffe13805dd2081839fd3603] commit E.
    ```

10. 现在定位到 E 版本，这是一个 “好提交”。当标记 E为好提交之后，输出显示已经成功定位到引入坏提交的最接近的版本

    ```shell
    $ git describe

    E

    $ ls doc

    E.txt

    $ git bisect good

    776c5c9da9dcbb7e463c061d965ea47e73853b6e is the first bad commit
    commit 776c5c9da9dcbb7e463c061d965ea47e73853b6e
    Merge: 212efce 83be369 beb30ca
    Author: Jiang Xin <jiangxin@ossxp.com>
    Date:   Thu Dec 9 14:27:31 2010 +0800

        Commit B: merge D with E and F

        Signed-off-by: Jiang Xin <jiangxin@ossxp.com>

     README    | 5 +++++
     doc/B.txt | 1 +
     doc/E.txt | 1 +
     doc/F.txt | 1 +
     doc/I.txt | 1 +
     doc/J.txt | 1 +
     6 files changed, 10 insertions(+)
     create mode 100644 doc/B.txt
     create mode 100644 doc/E.txt
     create mode 100644 doc/F.txt
     create mode 100644 doc/I.txt
     create mode 100644 doc/J.txt
    ```

11. 最终定位的坏提交用引用 `refs/bisect/bad` 标识。可以用如下方法切换到该版本

    ```shell
    git checkout bisect/bad

    Previous HEAD position was 83be369 commit E.
    HEAD is now at 776c5c9 Commit B: merge D with E and F
    ```

12. 当对 Bug 定位和修复后，撤销二分查找在版本库中遗留的临时文件和引用。撤销二分查找后，版本库切换回执行二分查找之前所在的分支

    ```shell
    git bisect reset

    Previous HEAD position was 776c5c9 Commit B: merge D with E and F
    Switched to branch 'master'
    Your branch is up to date with 'origin/master'.
    ```

### 重启二分查找

在将修订标记为好的或坏的之后，发出以下命令来显示到目前为止所做的事情：

```shell
git bisect log
```

如果您发现您在指定修订版的状态时犯了错误，您可以把这个命令的输出保存到一个文件中，编辑它以删除不正确的条目，然后发出下面的命令来返回到一个正确的状态：

```shell
git bisect log > bisectlog
git bisect reset
git bisect replay bisectlog
```

### 二分查找自动化测试

Git 的二分查找命令支持 `run` 子命令，可以运行一个自动化测试脚本，实现自动的二分查找。

- 如果脚本的退出码是 `0`，正在测试的版本是一个好版本
- 如果脚本的退出码是 `125`，正在测试的版本被跳过
- 如果脚本的退出码是 `1~127`（`125` 除外），正在测试的版本是一个坏版本

例如：判断文件是否存在，存在则返回退出码 `1`，不存在则返回退出码 `0`。

```shell
cat > good-or-bad.sh <<EOF
#! /bin/sh

[ -f doc/B.txt ] && exit 1
exit 0
EOF
```

用此脚本实现自动化二分查找的过程非常简单，具体操作步骤如下：

1. 从已知的坏版本 master 和好版本 G 开始新一轮的二分查找

    ```shell
    git bisect start master G

    Bisecting: 5 revisions left to test after this (roughly 2 steps)
    [0cd7f2ea245d90d414e502467ac749f36aa32cc4] commit C.
    ```

2. 自动化测试，使用脚本 `good-or-bad.sh`

    ```shell
    git bisect run sh good-or-bad.sh

    running 'sh' 'good-or-bad.sh'
    Bisecting: 3 revisions left to test after this (roughly 2 steps)
    [212efce1548795a1edb08e3708a50989fcd73cce] Commit D: merge G with H
    running 'sh' 'good-or-bad.sh'
    Bisecting: 1 revision left to test after this (roughly 1 step)
    [776c5c9da9dcbb7e463c061d965ea47e73853b6e] Commit B: merge D with E and F
    running 'sh' 'good-or-bad.sh'
    Bisecting: 0 revisions left to test after this (roughly 0 steps)
    [83be36956c007d7bfffe13805dd2081839fd3603] commit E.
    running 'sh' 'good-or-bad.sh'
    776c5c9da9dcbb7e463c061d965ea47e73853b6e is the first bad commit
    commit 776c5c9da9dcbb7e463c061d965ea47e73853b6e
    Merge: 212efce 83be369 beb30ca
    Author: Jiang Xin <jiangxin@ossxp.com>
    Date:   Thu Dec 9 14:27:31 2010 +0800

        Commit B: merge D with E and F

        Signed-off-by: Jiang Xin <jiangxin@ossxp.com>

     README    | 5 +++++
     doc/B.txt | 1 +
     doc/E.txt | 1 +
     doc/F.txt | 1 +
     doc/I.txt | 1 +
     doc/J.txt | 1 +
     6 files changed, 10 insertions(+)
     create mode 100644 doc/B.txt
     create mode 100644 doc/E.txt
     create mode 100644 doc/F.txt
     create mode 100644 doc/I.txt
     create mode 100644 doc/J.txt
    bisect found first bad commit
    ```

3. 定位到的 “坏版本” 是 B

    ```shell
    git describe refs/bisect/bad

    B
    ```
