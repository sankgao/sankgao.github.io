---
title: GitLab Runner
icon: tutorial
date: 2024-06-03
order: 3
category: DevOps
tag:
    - GitLab
---

极狐GitLab Runner 是在流水线中运行作业的应用，与极狐GitLab CI/CD 配合运作。

## 安装

极狐GitLab Runner 是开源的，用 Go 编写。它可以作为单个二进制文件运行，且没有特定于语言的要求。

极狐GitLab Runner 还可以在 Docker 容器内运行或部署到 Kubernetes 集群。

极狐GitLab Runner 可以在 GNU/Linux、macOS、FreeBSD 和 Windows 上安装和使用。您可以通过以下方式 [安装](https://docs.gitlab.cn/runner/install/) 极狐GitLab Runner：

- 在容器中
- 通过手动下载二进制文件
- 使用 rpm/deb 软件包仓库

极狐GitLab Runner 官方支持的二进制文件在以下架构中可用：

- x86、AMD64、ARM64、ARM、s390x 和 ppc64le

官方软件包在以下 Linux 发行版中可用：

- CentOS、Debian、Ubuntu、RHEL、Fedora、Mint、Oracle 和 Amazon

极狐GitLab Runner 官方支持以下操作系统。如果您喜欢使用非官方支持的操作系统，则其必须能够编译 Go 二进制文件。

- Linux、Windows、macOS 和 FreeBSD

::: tip
出于安全和性能原因，您不应该在托管 极狐GitLab 实例的机器上安装 极狐GitLab Runner。
:::

### Linux 安装

由于兼容性原因，极狐GitLab Runner 的 **主版本.小版本** 应和 极狐GitLab 的 **主版本.小版本** 保持同步。老版本的 极狐GitLab Runner 可能适用于新版本的 极狐 GitLab，反之亦然。但是如果存在版本差异，功能特性可能不可用或无法正常工作。

在小版本更新之间保证向后兼容。但是有时小版本更新会引入要求 极狐GitLab Runner 处于相同版本的新特性功能。

添加官方 极狐GitLab 仓库：

- Debian/Ubuntu 系统

    ```shell
    curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash
    ```

- RHEL/CentOS 系统

    ```shell
    curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.rpm.sh" | sudo bash
    ```

安装最新版本的 极狐GitLab Runner，或跳到下一步，安装特定版本。

- Debian/Ubuntu 系统

    ```shell
    sudo apt-get install gitlab-runner
    ```

- RHEL/CentOS 系统

    ```shell
    sudo yum install gitlab-runner
    ```

安装特定版本的 极狐GitLab Runner：

- Debian/Ubuntu 系统

    ```shell
    apt-cache madison gitlab-runner
    sudo apt-get install gitlab-runner=16.11.1-1
    ```

- RHEL/CentOS 系统

    ```shell
    yum list gitlab-runner --showduplicates | sort -r
    sudo yum install gitlab-runner-16.11.1-1
    ```

### Docker 安装

一般来说，Docker Engine 的版本和 极狐GitLab Runner 容器镜像的版本不需要匹配。极狐GitLab Runner 镜像应该向后和向前兼容。然而，为确保您拥有最新的功能和安全更新，您应该使用最新的稳定 Docker 引擎版本。

一般规则是每个 极狐GitLab Runner 命令通常会被执行为：

```shell
gitlab-runner <runner command and options...>
```

可以使用以下命令执行：

```shell
docker run <chosen docker options...> gitlab/gitlab-runner <runner command and options...>
```

例如，可以执行以下命令获取最高级别的 极狐GitLab Runner 的帮助信息：

```shell
docker run --rm -t -i gitlab/gitlab-runner --help

NAME:
   gitlab-runner - a GitLab Runner

USAGE:
   gitlab-runner [global options] command [command options] [arguments...]

VERSION:
   15.11.0 (436955cb)

(...)
```

简而言之，命令的 `gitlab-runner` 部分由 `docker run [docker options] gitlab/gitlab-runner` 替代，剩余部分保持与注册文档中描述的内容相一致。唯一区别是 `gitlab-runner` 命令是在 Docker 容器中执行的。

开始之前，请确保已经 [安装 Docker](../../docker/tutorials/install.md)。

如果想在 Docker 容器内运行 `gitlab-runner`，您需要确保重启容器时配置没有丢失。为此，以下描述两个选项：

- 选项一：使用本地系统卷挂载，启动 Runner 容器

    以下示例使用挂载到 `gitlab-runner` 容器的配置卷的本地系统。这个卷用于配置资源和其他资源。

    ```shell
    docker run -d --name gitlab-runner --restart always \
      -v /srv/gitlab-runner/config:/etc/gitlab-runner \
      -v /var/run/docker.sock:/var/run/docker.sock \
      gitlab/gitlab-runner:latest
    ```

    在 macOS 上，使用 `/Users/Shared` 而不是 `/srv`。

- 选项二：使用 Docker 卷启动 Runner 容器

    在这个例子中，您可以使用配置容器挂载您的自定义数据卷。

    1. 创建 Docker 卷：

    ```shell
    docker volume create gitlab-runner-config
    ```

    2. 使用刚创建的卷启动 极狐GitLab Runner 容器：

    ```shell
    docker run -d --name gitlab-runner --restart always \
        -v /var/run/docker.sock:/var/run/docker.sock \
        -v gitlab-runner-config:/etc/gitlab-runner \
        gitlab/gitlab-runner:latest
    ```

## 注册 Runner

极狐GitLab Runner 容器在注册之前不会处理任何作业。

引入于 极狐GitLab Runner 15.0，对注册请求格式做了更改，防止 极狐GitLab Runner 与低于 14.8 版本的 极狐GitLab 通信。您必须使用适合 极狐GitLab 版本的 Runner 版本，或升级 极狐GitLab 应用程序。

Runner 注册是将 Runner 与一个或多个 极狐GitLab 实例连接起来的过程。

您可以通过重复 `register` 命令，在同一台主机上注册多个 Runner，每个都有不同的配置。

### Linux



### Docker

以下步骤描述了启动暂时的 gitlab-runner 容器以注册您在安装期间创建的容器。注册完成后，生成的配置将写入您选择的配置卷（例如：`/srv/gitlab-runner/config`）并且由 Runner 使用配置卷进行加载。

使用 Docker 容器注册 Runner：

1. 基于挂载类型运行注册命令：

    - 对于本地系统卷挂载：

        ```shell
        docker run --rm -it -v /srv/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register
        ```

        ::: tip
        如果您在安装过程中使用了 `/srv/gitlab-runner/config` 以外的配置卷，请务必使用正确的卷更新命令。
        :::

    - 对于 Docker 卷挂载：

        ```shell
        docker run --rm -it -v gitlab-runner-config:/etc/gitlab-runner gitlab/gitlab-runner:latest register
        ```

2. 输入您的 极狐GitLab 实例 URL（例如：`https://gitlab.com`）
3. 输入注册 Runner 时获取的令牌
4. 输入 Runner 描述。您可以在 极狐GitLab UI 中进行变更
5. 输入以逗号隔开的与 Runner 有关的标签，您可以后续在 极狐GitLab UI 中进行变更
6. 为 Runner 输入可选的维护记录
7. 提供 Runner 执行器。对于大多数用例来说，输入 docker
8. 如果您输入 docker 作为执行器。对于在 `.gitlab-ci.yml` 中没有定义镜像的项目，系统会要求您使用默认镜像
