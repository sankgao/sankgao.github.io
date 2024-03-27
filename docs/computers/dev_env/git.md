---
title: Git 安装
icon: git
date: 2024-02-23
category: Computer
tag:
    - 开发环境
---

## 介绍

### 版本控制

版本控制（VCS）是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。

### 本地版本控制系统

刚开始采用复制整个项目目录的方式来保存不同的版本，或许还会改名加上备份时间以示区别。这么做唯一的好处就是简单，但是特别容易犯错。

为了解决这个问题，开发了本地版本控制系统（LVCS）。采用某种简单的数据库来记录文件的历次更新差异。其中最流行的一种叫 `RCS`，现今许多计算机系统上都还看得到它的踪影。`RCS` 的工作原理是在硬盘上保存补丁集（补丁是指文件修订前后的变化）；通过应用所有的补丁，可以重新计算出各个版本的文件内容。

### 集中化版本控制系统

本地版本控制系统只能让开发者在相同系统上协同工作，不同系统上开发者之间不能协同工作。

为了解决这个问题，开发了集中化版本控制系统（CVCS）。这类系统，如：`CVS`、`Subversion` 以及 `Perforce` 等，都有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的开发者都通过客户端连到这台服务器，取出最新的文件或者提交更新。多年以来，这已成为版本控制系统的标准做法。

优点：每个人都可以在一定程度上看到项目中的其他人正在做些什么。而管理员也可以轻松掌控每个开发者的权限，并且管理一个 CVCS 要远比在各个客户端上维护本地数据库来得轻松容易。

缺点：中央服务器的单点故障。如果宕机一小时，那么在这一小时内，谁都无法提交更新，也就无法协同工作。如果中心数据库所在的磁盘发生损坏，又没有做恰当备份，毫无疑问您将丢失所有数据——包括项目的整个变更历史，只剩下人们在各自机器上保留的单独快照。本地版本控制系统也存在类似问题，只要整个项目的历史记录被保存在单一位置，就有丢失所有历史更新记录的风险。

### 分布式版本控制

为了解决中央服务器的单点故障，开发了分布式版本控制系统（DVCS）。在这类系统中，如：`Git`、`Mercurial` 以及 `Darcs` 等，客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来，包括完整的历史记录。这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。

许多这类系统都可以指定和若干不同的远端代码仓库进行交互。籍此，您就可以在同一个项目中，分别和不同工作小组的人相互协作。您可以根据需要设定不同的协作流程，比如：层次模型式的工作流，而这在以前的集中式系统中是无法实现的。

### Git 由来

`Linux` 内核开源项目有着为数众多的参与者。绝大多数的 `Linux` 内核维护工作都花在了提交补丁和保存归档的繁琐事务上（`1991~2002` 年间）。到 `2002` 年，整个项目组开始启用一个专有的分布式版本控制系统 `BitKeeper` 来管理和维护代码。

到了 `2005` 年，开发 `BitKeeper` 的商业公司同 `Linux` 内核开源社区的合作关系结束，他们收回了 `Linux` 内核社区免费使用 `BitKeeper` 的权力。这就迫使 `Linux` 开源社区（特别是 `Linux` 的缔造者 `Linus Torvalds`）基于使用 `BitKeeper` 时的经验教训，开发出自己的版本系统（`Git`）。

他们对新的系统制订了若干目标：

- 速度
- 简单的设计
- 对非线性开发模式的强力支持（允许成千上万个并行开发的分支）
- 完全分布式
- 有能力高效管理类似 `Linux` 内核一样的超大规模项目（速度和数据量）

自诞生于 `2005` 年以来，`Git` 日臻成熟完善，在高度易用的同时，仍然保留着初期设定的目标。它的速度飞快，极其适合管理大项目，有着令人难以置信的非线性分支管理系统。

### Git 介绍

[git 官网](https://git-scm.com/)

`Git` 是一个免费的开源分布式版本控制系统，旨在快速高效地处理从小到大的项目。

`Git` 易于学习，占用空间小，性能快如闪电。它凭借廉价的本地分支、方便的暂存区域和多个工作流程等功能，超越了 `Subversion`、`CVS`、`Perforce` 和 `ClearCase` 等 `SCM` 工具。

`Git` 特性：

- 直接记录快照，而非差异比较
- 近乎所有操作都是本地执行
- `Git` 保证完整性
- `Git` 一般只添加数据
- 三种状态
    - **已修改（modified）**：表示修改了文件，但还没保存到数据库中
    - **已暂存（staged）**：表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中
    - **已提交（committed）**：表示数据已经安全地保存在本地数据库中

`Git` 的三种状态这会让我们的 `Git` 项目拥有三个阶段：工作区、暂存区以及 `Git` 仓库目录。

- **工作区**：是对项目的某个版本独立提取出来的内容。这些从 `Git` 仓库的压缩数据库中提取出来的文件，放在磁盘上供您使用或修改
- **暂存区**：是一个文件，保存了下次将要提交的文件列表信息，一般在 `Git` 仓库目录中。按照 `Git` 的术语叫做 “索引”，不过一般说法还是叫 “暂存区”
- **Git 仓库目录**：是 `Git` 用来保存项目的元数据和对象数据库的地方。这是 `Git` 中最重要的部分，从其它计算机克隆仓库时，复制的就是这里的数据

基本的 `Git` 工作流程如下：

- 在工作区中修改文件
- 将您想要下次提交的更改选择性地暂存，这样只会将更改的部分添加到暂存区
- 提交更新，找到暂存区的文件，将快照永久性存储到 `Git` 目录

如果 `Git` 目录中保存着特定版本的文件，就属于 **已提交** 状态。如果文件已修改并放入暂存区，就属于 **已暂存** 状态。如果自上次检出后，作了修改但还没有放到暂存区域，就是 **已修改** 状态。

## Git 安装

根据您的系统选择需要的软件安装包。

### Linux 安装

- 使用 `YUM` 或 `APT` 安装
    - RedHat 系统
        
        ```bash
        sudo yum install -y git
        ```
        
        查看 `git` 版本：
        
        ```bash
        git --version
        
        git version 2.43.0
        ```
    
    - Debian 系统
        
        ```bash
        sudo apt install -y git
        ```
        
        查看 `git` 版本：
        
        ```bash
        git --version
        
        git version 2.17.1
        ```

- 使用源代码安装
    
    从源码安装 `Git` 您能得到最新的版本。二进制安装程序倾向于有一些滞后，当然近几年 `Git` 已经成熟，这个差异不再显著。
    
    从源码安装 `Git`，需要安装 `Git` 一些依赖的库。
    
    ::: info
    使用 RedHat 系统，需要安装 [EPEL 库](https://docs.fedoraproject.org/en-US/epel/#How_can_I_use_these_extra_packages.3F) 以便下载 `docbook2X` 等包。
    
    `CentOS-Stream-8` 安装 `EPEL` 库：
    
    ```bash
    sudo dnf config-manager --set-enabled powertools
    sudo dnf install -y epel-release epel-next-release
    ```
    :::
    
    RedHat 系统：
    
    ```bash
    sudo yum install -y dh-autoreconf curl-devel expat-devel gettext-devel \
    openssl-devel perl-devel zlib-devel asciidoc xmlto docbook2X getopt
    sudo ln -s /usr/bin/db2x_docbook2texi /usr/bin/docbook2x-texi  # 解决二进制文件名的不同
    ```
    
    Debian 系统：
    
    ```bash
    sudo apt install -y dh-autoreconf libcurl4-gnutls-dev libexpat1-dev \
    gettext libz-dev libssl-dev asciidoc xmlto docbook2x install-info
    ```
    
    下载 `tar` 包。可以从 [Kernel.org](https://www.kernel.org/pub/software/scm/git) 网站获取，也可以从 [GitHub](https://github.com/git/git/tags) 网站上获得。通常在 `GitHub` 上的是最新版本；`Kernel.org` 上包含有文件下载签名，如果您想验证下载正确性的话会用到。
    
    ```bash
    sudo mkdir /opt/git
    cd /opt/git
    sudo tar -zxf git-2.44.0.tar.gz
    cd git-2.44.0
    sudo make configure
    sudo ./configure --prefix=/usr
    sudo make all doc info
    sudo make install install-doc install-html install-info
    ```
    
    完成后，您可以使用 `Git` 来获取 `Git` 的更新：
    
    ```bash
    git clone git://git.kernel.org/pub/scm/git/git.git
    ```
    
    查看 Git 版本：
    
    ```bash
    git --version
    
    git version 2.44.0
    ```

### Windows 安装

需要配置环境变量。[Git 下载地址](https://git-scm.com/download/win)

将 `Git-2.44.0-64-bit.exe` 包解压到您要存放的位置。例如：`E:\Software\Git\` 文件夹下。

双击 `Git-2.44.0-64-bit.exe` 程序包开始安装。并点击 *Next*。

![许可申明](./assets/git_license.jpg)

点击 *Browse*，选择 `Git` 安装路径。并点击 *Next*。

![选择安装路径](./assets/git_install_position.jpg)

选择安装组件，保存默认选择，额外选择 *Additional icons 和 (NEW!) Add a Git Bash Profile to Windows Termainal*。并点击 *Next*。

- **Additional icons**：在桌面上添加图标
- **Windows Explorer intergration**：Windows 资源管理器集成 `Git Bash`、`git GUI`
- **Git LFS (Large File Support)**：`Git LFS` 大文件支持
- **Associate .git\* configuration files with the default text editor**：将 `.git*` 配置文件与默认文本编辑器关联
- **Associate .sh files to be run with Bash**：将要运行的 `.sh` 文件与 `Bash` 关联
- **Check daily for Git for Windows updates**：每天检查 Windows 上 Git 的更新
- **(NEW!) Add a Git Bash Profile to Windows Termainal**：将 `Git Bash` 配置文件添加到 `Windows` 终端
- **(NEW!) Scalar (Git add-on to manage large-scale repositories)**：`Scalar` 用于管理大型存储库的 `Git` 插件

![选择安装组件](./assets/git_set_components.jpg)

选择开始菜单目录，保持默认即可。并点击 *Next*。

![选择开始菜单目录](./assets/git_start_menu.jpg)

选择 `Git` 默认编辑器，保持默认即可，默认使用 `Vim`。并点击 *Next*。

![选择默认编辑器](./assets/git_default_editor.jpg)

选择 `Git` 初始化分支名称，选择 *Override the default branch name for new repositories* 值为 `main`。并点击 *Next*。

- **Let Git decide**：由 `Git` 决定，默认值为 `master`
- **Override the default branch name for new repositories**：覆盖新存储库的默认分支名称，自定义值

![选择 Git 初始化分支名称](./assets/git_initial_branch.jpg)

设置环境变量，保持默认即可。并点击 *Next*。

- **Use Git from Git Bash only**：只能从 `Git Bash` 中使用 `Git` 命令
- **Git from the command line and also from 3rd-party software**：允许从命令行或第三方软件进使用 `Git`
- **Use Git and optional Unix tools from the Command Prompt**：覆盖 `Windows` 的一些工具如：`find`

![设置环境变量](./assets/git_env_variable.jpg)

选择 `ssh` 执行文件，保持默认即可。并点击 *Next*。

- **Use Bundled OpenSSH**：使用 `Git` 自带的 `OpenSSH`
- **Use external OpenSSH**：使用外部 `OpenSSH`

![选择 ssh 执行文件](./assets/git_ssh_executable.jpg)

选择 `https` 传输后端，保持默认即可。并点击 *Next*。

- **Use the OpenSSH library**：使用公共 `OpenSSH` 库
- **Use the native Windows Secure Channel library**：使用本机 `Windows` 安全通道库

![选择 https 传输后端](./assets/git_https_transport.jpg)

配置结束行转换方式，保持默认即可。并点击 *Next*。

- **Checkout Windows-style, commit Unix-style line endings**：行结尾下拉转换为 Windows 样式，提交转换为 Unix 样式
- **Checkout as-is, commit Unix-style line endings**：行结尾按原样下拉，提交转换为 Unix 风格
- **Checkout as-is, commit as-is**：行结尾按原样下拉，按原样提交

![结束行转换方式](./assets/git_line_ending.jpg)

配置终端模拟器，保持默认即可。并点击 *Next*。

- **Use MinlrY (the default terminal of MsYs2)**：`Git Bash` 将使用 `MinTTY` 作为终端模拟器，该模拟器具有可调整大小的窗口
- **Use windows’ default console window**：使用 `Windows` 的默认控制台窗口（`cmd.exe`）

![配置终端模拟器](./assets/git_bash_terminal.jpg)

选择 `Git` 下拉默认行为，保持默认即可。并点击 *Next*。

- **Default (fast-forward or merge)**：默认值（快进或合并）。尽可能快进当前分支到一个被捕获的分支，否则创建合并提交
- **Rebase**：将当前分支改为获取的分支。如果没有要重基的本地提交，这相当于快进
- **Only ever fast-forward**：只有快速前进，快进到获取的分支。如果不可能，就失败

![下拉默认行为](./assets/git_pull.jpg)

选择凭据帮助程序，保持默认即可。并点击 *Next*。

- **Git Credential Manager**：使用凭据帮助程序
- **None**：不使用凭据帮助程序

![选择凭据帮助程序](./assets/git_credential.jpg)

配置额外特性选项，保持默认即可。并点击 *Next*。

- **Enable file system caching**：批量读取文件系统数据并将其缓存在内存中进行某些操作
- **Enable symbolic links**：启用符号链接

![配置额外特性选项](./assets/git_extra_options.jpg)

配置实验选项，保持默认即可。并点击 *Install*。

- **Enable experimental support for pseudo consoles**：支持伪控制台的实验性支持
- **Enable experimental built-in file system monitor**：启用实验性内置文件系统监视器

![配置实验选项](./assets/git_extra_options.jpg)

等待安装，取消勾选，点击 *Finish*，完成 `Git` 安装。

- **launch git bash**：启动 `git bash`
- **view release notes**：查看发行说明

![安装完成](./assets/git_install_complete.jpg)
    
按 <kbd>Win</kbd> + <kbd>R</kbd> 键，在运行中输入 `cmd` 打开终端控制器。

在终端控制器中输入 `git --version` 命令，查看 `Git` 版本。

```bash
C:\Users\user>git --version
git version 2.44.0.windows.1
```
