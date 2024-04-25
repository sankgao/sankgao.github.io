---
title: 安装
icon: install
date: 2024-04-25
category: DevOps
tag:
    - Docker
---

Docker Engine 是一种开源容器化技术，用于构建和容器化应用程序。Docker Engine 充当客户端-服务器应用程序，具有以下功能：

- 具有长时间运行的守护进程的服务器 `dockerd`
- API 指定程序可用于与 Docker 守护进程通信并指示其的接口
- 命令行界面（CLI）客户端 `docker`

CLI 使用 Docker API 通过脚本或直接 CLI 命令来控制 Docker 守护程序或与之交互。许多其他 Docker 应用程序使用底层 API 和 CLI。守护进程创建并管理 Docker 对象，例如：映像、容器、网络和卷。

## Linux 安装

分别在 Debian/Ubuntu-18.04 和 RedHat/CentOS-Stream-8 系统中安装。

### 卸载旧版本

- Debian/Ubuntu 系统

    在安装 Docker Engine 之前，您需要卸载所有冲突的软件包。

    ```shell
    for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
    ```

- RedHat/CentOS 系统

    旧版本的 Docker 采用 `docker` 或 `docker-engine`。在尝试安装新版本之前卸载任何此类旧版本以及相关的依赖项。

    ```shell
    sudo yum remove docker \
                    docker-client \
                    docker-client-latest \
                    docker-common \
                    docker-latest \
                    docker-latest-logrotate \
                    docker-logrotate \
                    docker-engine
    ```

可能会报告您没有安装这些软件包。

卸载 Docker 时，存储在 `/var/lib/docker/` 其中的映像、容器、卷和网络不会自动删除。

### Debian/Ubuntu 系统

在新主机上首次安装 Docker Engine 之前，需要设置 Docker 存储库。之后，您可以从存储库安装和更新 Docker。

```shell
# Add Docker's official GPG key:
sudo apt install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
```

安装 Docker 最新最新版本。

```bash
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### RedHat/CentOS 系统

在新主机上首次安装 Docker Engine 之前，需要设置 Docker 存储库。之后，您可以从存储库安装和更新 Docker。

安装 `yum-utils` 软件包（提供 `yum-config-manager` 实用程序）并设置存储库。

```shell
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

安装最新版本 Docker 引擎、`containerd` 和 `Docker Compose`：

```shell
sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

如果提示接受 GPG 密钥，请验证指纹是否匹配 `060A 61C5 1B55 8A7F 742B 77AA C52F EB6B 621E 9F35`，如果匹配，则接受。

此命令会安装 Docker，但不会启动 Docker。它还创建一个 `docker` 组，但是默认情况下不会将任何用户添加到该组。

启动 Docker 服务。

```shell
sudo systemctl start docker
```

## 卸载 Docker Engine

卸载 Docker Engine、CLI、containerd 和 Docker Compose 软件包。

- Debian/Ubuntu 系统

    ```shell
    sudo apt purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
    ```

- RedHat/CentOS 系统

    ```shell
    sudo yum remove docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
    ```

主机上的映像、容器、卷或自定义配置文件不会自动删除。要删除所有映像、容器和卷：

```shell
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```

您必须手动删除任何编辑的配置文件。

## 控制 Docker 服务

使用 `systemd` 控制 Docker 服务命令：

|  命令  |  描述  |
|  :----  |  :----  |
|  `sudo systemctl start docker`  |  启动服务  |
|  `sudo systemctl stop docker`  |  停止服务  |
|  `sudo systemctl restart docker`  |  重启服务  |
|  `sudo systemctl status docker`  |  显示所有服务状态  |
|  `sudo systemctl enable docker`  |  开机自启  |
|  `sudo systemctl disable docker`  |  禁止开机自启  |
