---
title: git clone
icon: command
date: 2024-05-10
category: About
tag:
    - 命令
    - Git
---

## 描述

`git clone` 用于从远程仓库中克隆代码库到本地，创建一个新的目录，并将该仓库的内容完整地下载到这个新目录中。

Git 支持 `ssh`、`git`、`http` 和 `https` 协议（此外，可以使用 `ftp` 和 `ftps` 进行抓取，但这效率低下且不建议使用；请勿使用）。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `-b, --branch`  |  克隆指定分支  |
|  `-o <name>, --origin <name>`  |  使用指定远程名称 `<name>` 来跟踪上游存储库  |
|  `-q, --quiet`  |  不显示输出内容  |
|  `--bare`  |  创建裸仓库  |
|  `--mirror`  |  创建镜像仓库（也是裸仓库）  |
|  `--depth`  |  创建一个历史记录被截断为指定提交次数的 “浅” 克隆  |

## 示例

### 远程仓库克隆到本地

例如：从远程仓库 `test_demo.git` 中克隆代码库到本地。

```shell
git clone ssh://git@10.1.1.10/tests/test_demo.git
```

例如：从远程仓库 `test_demo.git` 中克隆代码库到本地指定 `test` 目录中。

```shell
git clone ssh://git@10.1.1.10/tests/test_demo.git test
```

例如：从远程仓库 `test_demo.git` 中克隆代码库到 **当前** 目录中。

```shell
git clone ssh://git@10.1.1.10/tests/test_demo.git .
```

### 克隆指定分支

例如：从远程仓库 `test_demo.git` 中克隆 `dev` 分支到本地。

```shell
git clone -b dev ssh://git@10.1.1.10/tests/test_demo.git
```

### 克隆指定远程名称

例如：从远程仓库 `test_demo.git` 中克隆克隆代码库到本地，并指定 `test_demo` 为远程名称。

```shell
git clone -o test_demo ssh://git@10.1.1.10/tests/test_demo.git
```

### 创建裸仓库

裸仓库是一个不包含工作目录（working directory）的仓库，只有 `.git` 目录下的内容。这意味着它只包含版本控制历史和其他元数据，但没有检出（checkout）到工作目录的文件。

例如：克隆一个裸仓库 `test_demo.git` 到本地。

```shell
git clone --bare ssh://git@10.1.1.10/tests/test_demo.git
```

- **普通存储库**：包含工作目录，即你可以看到和编辑的文件，以及一个名为 `.git` 的隐藏目录，其中包含了版本控制的元数据和对象数据库
- **裸仓库**：只包含版本控制的元数据和对象数据库，没有工作目录。裸存储库的结构类似于普通存储库中的 `.git` 目录

裸存储库通常被用作团队协作的中央仓库。由于裸存储库不包含工作目录，它们适合作为 `push` 和 `pull` 操作的目标。这避免了直接在中央仓库上工作可能导致的问题，如：未提交的更改和工作目录的冲突。

1. 创建 `test_demo.git` 裸仓库

    ```shell
    mkdir /projects/test_demo.git
    cd /projects/test_demo.git
    git init --bare
    ```

2. 创建普通库

    ```shell
    cd ../
    mkdir test
    cd test
    git init
    ```

3. 在普通库中创建文件，指定 `test_demo.git` 裸仓库为远程仓库，并上传

    ```shell
    echo 'test' > test.txt
    git add test.txt
    git commit -m 'add test.txt'
    git remote add origin /projects/test_demo.git
    git push -u origin master
    ```

4. 查看裸仓库信息

    ```shell
    cd .../test_demo.git
    git log

    commit a925932f970ea8dc91d8225883c17a4b39e6dc2b (HEAD -> master)
    Author: Administrator <admin@example.com>
    Date:   Mon May 13 17:24:06 2024 +0800

        add test.txt
    ```

5. 克隆裸仓库，查看是否有工作目录数据文件

    ```shell
    cd ../
    git clone /projects/test_demo.git

    Cloning into 'test_demo'...
    done.
    ```

6. 将裸仓库上传到新的仓库中

    ```shell
    git push --mirror new_test.git
    ```

### 创建镜像仓库

镜像克隆不仅包含了所有分支和标签的引用，而且当原始仓库更新时，镜像克隆也会自动更新以保持与原始仓库的完全同步。这意味着，如果原始仓库添加了新的分支或标签，或者已有的分支或标签被删除或更新，这些变化都会反映到镜像克隆中。这种克隆类型主要用于备份或作为其他克隆操作的源。

例如：克隆一个镜像仓库 `test_demo.git` 到本地。

```shell
git clone --mirror ssh://git@10.1.1.10/tests/test_demo.git
```

### 创建浅克隆

当代码仓库比较大的时候，可以使用浅克隆来拉取代码。

例如：克隆远程 `test_demo.git` 仓库最近两次的提交。

```shell
git clone --depth=2 ssh://git@10.1.1.10/tests/test_demo.git
```
