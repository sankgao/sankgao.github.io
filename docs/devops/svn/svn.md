---
title: SVN
icon: svn
date: 2023-07-28
category: Tools
tag:
    - SVN
---

## 简介

**[SVN（Subversion）](https://subversion.apache.org/)** 是一个自由开源的版本控制系统。SVN 采用客户端/服务器体系，项目的各种版本都存储在服务器上，程序开发人员首先将从服务器上获得一份项目的最新版本，并将其复制到本机，然后在此基础上，每个开发人员可以在自己的客户端进行独立的开发工作，并且可以随时将新代码提交给服务器。当然也可以通过更新操作获取服务器上的最新代码，从而保持与其他开发者所使用版本的一致性。

## VisualSVN

### 安装服务端

`Windows` 上安装 [VisualSVN](https://subversion.apache.org/packages.html#windows) 服务端，按照步骤进行安装。其它操作系统找到相应位置进行下载。

1. 点击 `Next`

    ![visualsvn_01](./assets/visualsvn_01.jpg)

2. 勾选接受许可协议中的条款

    ![visualsvn_02](./assets/visualsvn_02.jpg)

3. 选择要安装的组件

    ![visualsvn_03](./assets/visualsvn_03.jpg)

    - **visualsvn server and administration tools**：VisualSVN 服务器和管理工具
    - **administration tools only**：仅限管理工具
    - **add subversion command-line tools to the PATH environment variable**：将 Subversion 命令行工具添加到 `PATH` 环境变量

4. 修改配置

    ![visualsvn_04](./assets/visualsvn_04.jpg)

    - **Location**：安装位置
    - **Repo stories**：SVN 仓库位置
    - **Server Port**：端口。后面是否使用安全链接
    - **Backups**：备份文件位置

5. 配置存储库搜索索引，最好在安装位置下面

    ![visualsvn_05](./assets/visualsvn_05.jpg)

6. 身份认证模式

    ![visualsvn_06](./assets/visualsvn_06.jpg)

    - **Use Subversion authentication**：使用 Subversion 身份验证
    - **Use Windows authentication(recommended for Active Directory environments)**：使用 Windows 身份验证（建议用于 Active Directory 环境）

7. 许可证（VisualSVN Server 是免费的，而 VisualSVN 是收费的）

    ![visualsvn_07](./assets/visualsvn_07.jpg)

8. 开始安装

    ![visualsvn_08](./assets/visualsvn_08.jpg)

### 新建存储库

1. 右键 `Repositores` 新建存储库

    ![visualsvn_09](./assets/visualsvn_09.jpg)

2. 选择存储库类型

    ![visualsvn_10](./assets/visualsvn_10.jpg)

    - **Regular FSFS repository**：常规 FSFS 存储库
    - **Dstributed VDFS repository**：分布式 VDFS 存储库

3. 创建存储库名称

    ![visualsvn_11](./assets/visualsvn_11.jpg)

4. 选择存储库结构

    ![visualsvn_12](./assets/visualsvn_12.jpg)

    - **Empty repository(recommended option)**：空存储库（推荐选项）
    - **single-project repostory(with the top-evel 'trunk','branches'and'tags'folders)**：单个项目仓库（带有顶级的 “主干”、“分支” 和 “标签” 文件夹）

5. 选择存储库访问权限

    ![visualsvn_13](./assets/visualsvn_13.jpg)

    - **Nobody has access**：没有人可以访问
    - **All Subversion users have Read/Write acess**：所有 Subversion 用户都具有读/写权限
    - **Customize permissions**：自定义权限

6. 是否运行存储库搜索索引

    ![visualsvn_14](./assets/visualsvn_14.jpg)

7. 创建完成

    ![visualsvn_15](./assets/visualsvn_15.jpg)

### 创建用户和组

1. 右键 `Users` 新建用户

    ![visualsvn_16](./assets/visualsvn_16.jpg)

2. 输入用户名和密码

    ![visualsvn_17](./assets/visualsvn_17.jpg)

    - **User name**：用户名
    - **Password**：密码
    - **Confirm password**：确认密码

3. 右键 `Groups` 新建用户组

    ![visualsvn_18](./assets/visualsvn_18.jpg)

4. 输入组名，点击 `Add` 选择用户添加到这个组中

    ![visualsvn_19](./assets/visualsvn_19.jpg)

### 给用户组设置权限

1. 右键刚才创建的存储库，选择 `Properties`。

    ![visualsvn_20](./assets/visualsvn_20.jpg)

2. 设置只有 `admins` 组成员可以访问

    选择 `Security` 选项，点击 `Add` 添加 `admins` 组，并移除 `Everyone`。

    ![visualsvn_21](./assets/visualsvn_21.jpg)

## TortoiseSVN

### 安装客户端

`Windows` 上安装 [TortoiseSVN](https://subversion.apache.org/packages.html#windows) 客户端，按照步骤进行安装。其它操作系统找到相应位置进行下载。

1. 点击 `Next`

    ![tortoisesvn_01](./assets/tortoisesvn_01.jpg)

    ![tortoisesvn_02](./assets/tortoisesvn_02.jpg)

2. 自定义安装

    ![tortoisesvn_03](./assets/tortoisesvn_03.jpg)

3. 是否选择使用命令行操作

    `command line dient tools` 建议安装，如果不安装则之后在 `IDEA` 里面配置时找不到 `svn.exe` 文件

    ![tortoisesvn_04](./assets/tortoisesvn_04.jpg)

    - **Will be installed on local hard drive**：将安装在本地硬盘上
    - **Entire feature will be installed don local hard drive**：整个功能将安装在本地硬盘上
    - **Feature will be installed when required**：功能将在需要时安装
    - **Entire feature will be unavailable**：整个功能将不可用

4. 开始安装

    ![tortoisesvn_05](./assets/tortoisesvn_05.jpg)

### 浏览仓库

1. 点击鼠标右键，选择 **TortoiseSVN -> Repo-browser**

    ![tortoisesvn_06](./assets/tortoisesvn_06.jpg)

2. 输入要访问的仓库 URL

    ![tortoisesvn_07](./assets/tortoisesvn_07.jpg)

3. 进行认证

    由于这个仓库设置了只有 `admins` 组的用户才可以访问，输入 `admins` 组中一个用户名和密码进行认证。

    ![tortoisesvn_08](./assets/tortoisesvn_08.jpg)

4. 查看仓库

    ![tortoisesvn_09](./assets/tortoisesvn_09.jpg)

    这个仓库还没有添加任何文件。

### 将仓库 checkout 到本地

1. 点击鼠标右键，选择 **SVN Checkout**

    ![tortoisesvn_10](./assets/tortoisesvn_10.jpg)

2. 选择要 `checkout` 的仓库

    ![tortoisesvn_11](./assets/tortoisesvn_11.jpg)

    - **URL of repository**：要 `checkout` 的仓库 URL
    - **Checkout directory**：存放到本地的位置
    - **Revision**：仓库版本

    由于这个仓库没有任何文件，所以 `checkout` 到本地后只有一个 `.svn` 隐藏文件。`.svn` 用于保存文件或文件夹版本状态等数据

    ![tortoisesvn_12](./assets/tortoisesvn_12.jpg)

### 创建文件并 commit 到 SVN

1. 创建一个文件

    ![tortoisesvn_13](./assets/tortoisesvn_13.jpg)

2. 添加文件

    选中添加的文件，右键选择 **TortoiseSVN -> Add。**

    ![tortoisesvn_14](./assets/tortoisesvn_14.jpg)

3. 提交到 SVN

    添加文件后，右键选择 **SVN Commit。**

    ![tortoisesvn_15](./assets/tortoisesvn_15.jpg)

    在 Message 中填入提交的描述信息，方便以后查看 log 日志。

    ![tortoisesvn_16](./assets/tortoisesvn_16.jpg)

4. 完成提交

    提交后文件标识会变成绿色。

    ![tortoisesvn_17](./assets/tortoisesvn_17.jpg)

    服务端刷新后也会有对应的文件。

    ![tortoisesvn_18](./assets/tortoisesvn_18.jpg)

### Update 操作

`checkout` 仓库到本地后，每次操作这个仓库前都需要 `Update` 一下，将 SVN 服务器上的内容更新到本地。

::: warning
如果不进行 `Update` 操作，如果修改文件时，可能会将其它人做过的修改进行覆盖
:::

### Delete 操作

选择要删除的文件或文件夹，右键选择 **TortoiseSVN -> Delete** 标记删除，这时只是在本地文件删除，还需要进行 `commit` 操作，SVN 服务端上文件才会删除。

### 提交冲突

当多个用户同时操作同一个文件，其他人比自己先 `commit` 到 SVN 服务器上，自己再 `commit` 时
当多个用户同时操作同一个文件，自己进行 `commit` 到 SVN 服务器上，但有其他人提前进行 `commit` 操作时，就会产生冲突情况。

这时可以采用手动 `Merge`，解决冲突后，重新进行 `commit` 操作。

例如：`test.txt` 文件产生冲突。在进行 `commit` 操作后，提示 `Commit Failed!` 后会产生以下文件：

- **test.txt**：SVN 服务器上的文件和本地文件合并后，产生的文件
- **text.txt.mine**：本地修改后的文件
- **text.txt.r4**：修改前的文件
- **text.txt.r5**：其他人修改后的文件

选择产生冲突的文件，右键选择 **TortoiseSVN -> Edit conflicts**，手动 `merge` 后再次 `commit`。

### 查看 log 日志

选中仓库，或仓库中的某个文件，右键选择 **TortoiseSVN -> Show log。**

### 回退版本

如果想要回退到之前的版本，选中要回退的文件，右键选择 **TortoiseSVN -> Update to revision**，点击 `Show log` 查看具体要回退到哪个版本。

## VS Code 配置 SVN

1. 本地提前安装 [TortoiseSVN](#安装客户端) 客户端

2. `VS Code` 安装 SVN 插件

3. 配置 SVN 路径

    打开 `VS Code` 设置或使用快捷键 <kbd>Ctrl</kbd> + <kbd>,</kbd> 打开。

    在搜索框中输入 `svn:path`，在 `settin.json` 文件中修改。将本地安装的 `TortoiseSVN` 路径输入到对应的位置。

    ```json
    "svn.path": "E:\\Software\\TortoiseSVN\\bin\\svn.exe",
    ```

    ::: tip
    如果在本地安装的 `TortoiseSVN\bin` 下找不到 `svn.exe` 文件。找到 `TortoiseSVN` 包进行 `Modify` 修改包，如果

    依次点击 **控制面板 -> 程序和功能**，找到 `TortoiseSVN` 包进行 `Modify` 修改，修改 `Command line tools` 选项。参考：[安装客户端中的第三项（3.）](#安装客户端)
    :::

4. 重新打开 `VS Code`，SVN 配置生效

### SVN 命令

1. 将仓库 `checkout` 到本地

    `svn checkout <URL>`。简写：`svn co <URL>`
    
    `URL`：仓库地址。

2. 添加新文件或文件夹

    `svn add <file/dir>`。

3. 提交到 SVN 服务器

    `svn commit -m "messages"`。简写：`svn ci -m "messages"`

    `messages`：描述信息。

4. 删除文件或文件夹

    `svn delete <file/dir>`。

5. 更新仓库

    `svn update`。

6. 查看 log 日志

    `svn log <file/dir>` 显示文件或文件夹所有修改记录。

    `svn log -v <file/dir>` 显示文件或文件夹所有修改记录详细信息。

    `svn log -v -r <num> <file/dir>` 显示文件或文件夹某个版本的修改记录详细信息。

    `num`：版本号。

7. 查看文件或文件夹详细信息

    `svn info <file/dir>`。

8. 比较差异

    `svn diff -r <num> <file/dir>` 比较本地文件或文件夹和某个版本之间的差异。

    `svn diff -r <num:num> <file/dir>` 比较本地文件或文件夹和某两个版本之间的差异。

    `num`：版本号。

9. 查看仓库下的文件和目录列表

    `svn list <URL>`。

    `URL`：仓库地址。
