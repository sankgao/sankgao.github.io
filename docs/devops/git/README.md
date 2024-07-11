---
title: Git
icon: git
date: 2024-05-22
category: DevOps
tag:
    - Git
---

记录一些 Git 相关的信息。

<!-- more -->

## 版本控制

版本控制（VCS）是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。

### 本地版本控制系统

刚开始采用复制整个项目目录的方式来保存不同的版本，或许还会改名加上备份时间以示区别。这么做唯一的好处就是简单，但是特别容易犯错。

为了解决这个问题，开发了本地版本控制系统（LVCS）。采用某种简单的数据库来记录文件的历次更新差异。其中最流行的一种叫 `RCS`，现今许多计算机系统上都还看得到它的踪影。`RCS` 的工作原理是在硬盘上保存补丁集（补丁是指文件修订前后的变化）；通过应用所有的补丁，可以重新计算出各个版本的文件内容。

![本地版本控制系统](./assets/local.png)

### 集中化版本控制系统

本地版本控制系统只能让开发者在相同系统上协同工作，不同系统上开发者之间不能协同工作。

为了解决这个问题，开发了集中化版本控制系统（CVCS）。这类系统，如：`CVS`、`Subversion` 以及 `Perforce` 等，都有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的开发者都通过客户端连到这台服务器，取出最新的文件或者提交更新。多年以来，这已成为版本控制系统的标准做法。

优点：每个人都可以在一定程度上看到项目中的其他人正在做些什么。而管理员也可以轻松掌控每个开发者的权限，并且管理一个 CVCS 要远比在各个客户端上维护本地数据库来得轻松容易。

缺点：中央服务器的单点故障。如果宕机一小时，那么在这一小时内，谁都无法提交更新，也就无法协同工作。如果中心数据库所在的磁盘发生损坏，又没有做恰当备份，毫无疑问您将丢失所有数据——包括项目的整个变更历史，只剩下人们在各自机器上保留的单独快照。本地版本控制系统也存在类似问题，只要整个项目的历史记录被保存在单一位置，就有丢失所有历史更新记录的风险。

![集中化版本控制系统](./assets/centralized.png)

### 分布式版本控制

为了解决中央服务器的单点故障，开发了分布式版本控制系统（DVCS）。在这类系统中，如：`Git`、`Mercurial` 以及 `Darcs` 等，客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来，包括完整的历史记录。这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。

许多这类系统都可以指定和若干不同的远端代码仓库进行交互。籍此，您就可以在同一个项目中，分别和不同工作小组的人相互协作。您可以根据需要设定不同的协作流程，比如：层次模型式的工作流，而这在以前的集中式系统中是无法实现的。

![分布式版本控制](./assets/distributed.png)

## Git 由来

`Linux` 内核开源项目有着为数众多的参与者。绝大多数的 `Linux` 内核维护工作都花在了提交补丁和保存归档的繁琐事务上（`1991~2002` 年间）。到 `2002` 年，整个项目组开始启用一个专有的分布式版本控制系统 `BitKeeper` 来管理和维护代码。

到了 `2005` 年，开发 `BitKeeper` 的商业公司同 `Linux` 内核开源社区的合作关系结束，他们收回了 `Linux` 内核社区免费使用 `BitKeeper` 的权力。这就迫使 `Linux` 开源社区（特别是 `Linux` 的缔造者 `Linus Torvalds`）基于使用 `BitKeeper` 时的经验教训，开发出自己的版本系统（`Git`）。

他们对新的系统制订了若干目标：

- 速度
- 简单的设计
- 对非线性开发模式的强力支持（允许成千上万个并行开发的分支）
- 完全分布式
- 有能力高效管理类似 `Linux` 内核一样的超大规模项目（速度和数据量）

自诞生于 `2005` 年以来，`Git` 日臻成熟完善，在高度易用的同时，仍然保留着初期设定的目标。它的速度飞快，极其适合管理大项目，有着令人难以置信的非线性分支管理系统。

## Git 介绍

[Git](https://git-scm.com/) 是一个免费的开源分布式版本控制系统，旨在快速高效地处理从小到大的项目。

`Git` 易于学习，占用空间小，性能快如闪电。它凭借廉价的本地分支、方便的暂存区域和多个工作流程等功能，超越了 `Subversion`、`CVS`、`Perforce` 和 `ClearCase` 等 `SCM` 工具。

### Git 保证完整性

Git 中所有的数据在存储前都计算校验和，然后以校验和来引用。这意味着不可能在 Git 不知情时更改任何文件内容或目录内容。这个功能建构在 Git 底层，是构成 Git 不可或缺的部分。若您在传送过程中丢失信息或损坏文件，Git 就能发现。

Git 用以计算校验和的机制叫做 SHA-1 散列（hash，哈希），也称 `commit id`。这是一个由 `40` 个十六进制字符（`0-9` 和 `a-f`）组成的字符串，基于 Git 中文件的内容或目录结构计算出来。SHA-1 哈希看起来是这样：

```shell
24b9da6552252987aa493b52f8696cd6d3b00373
```

Git 中使用这种哈希值的情况很多，您将经常看到这种哈希值。实际上，Git 数据库中保存的信息都是以文件内容的哈希值来索引，而不是文件名。

### Git 特性

- 直接记录快照，而非差异比较
- 近乎所有操作都是本地执行
- `Git` 保证完整性
- `Git` 一般只添加数据
- 三种状态
    - **已修改（modified）**：表示修改了文件，但还没保存到数据库中
    - **已暂存（staged）**：表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中
    - **已提交（committed）**：表示数据已经安全地保存在本地数据库中

### Git 三个阶段

`Git` 的三种状态这会让我们的 `Git` 项目拥有三个阶段：工作区、暂存区以及 `Git` 仓库目录。

- **工作区**：是对项目的某个版本独立提取出来的内容。这些从 `Git` 仓库的压缩数据库中提取出来的文件，放在磁盘上供您使用或修改
- **暂存区**：是一个文件，保存了下次将要提交的文件列表信息，一般在 `Git` 仓库目录中。按照 `Git` 的术语叫做 “索引”，不过一般说法还是叫 “暂存区”
- **Git 仓库目录**：是 `Git` 用来保存项目的元数据和对象数据库的地方。这是 `Git` 中最重要的部分，从其它计算机克隆仓库时，复制的就是这里的数据

### 基本 Git 工作流程

1. 在工作区中修改文件
2. 将您想要下次提交的更改选择性地暂存，这样只会将更改的部分添加到暂存区
3. 提交更新，找到暂存区的文件，将快照永久性存储到 `Git` 目录

如果 `Git` 目录中保存着特定版本的文件，就属于 **已提交** 状态。如果文件已修改并放入暂存区，就属于 **已暂存** 状态。如果自上次检出后，作了修改但还没有放到暂存区域，就是 **已修改** 状态。

## 相关文档

- [Git 官网](https://git-scm.com/)
- [Git 官网 Pro Git 书籍教程](https://git-scm.com/book/zh/v2)
- [Git 官网参考手册](https://git-scm.com/docs)
- [Git 官网下载](https://git-scm.com/downloads)
- [Git GitHub 地址](https://github.com/git/git)
- [在线交互式 Git 分支可视化教程及练习](https://learngitbranching.js.org/)
- 《Git 权威指南》 [GitHub 地址](https://github.com/gotgit/gotgit/tree/master)