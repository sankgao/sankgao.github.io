---
title: 安装
icon: install
date: 2024-04-23
category: DevOps
tag:
    - GitLab
---

## 安装环境

- GitLab CE/EE 官网 [安装需求](https://docs.gitlab.com/ee/install/requirements.html)
- 极狐 GitLab 官网 [安装需求](https://docs.gitlab.cn/jh/install/requirements.html)

### CPU

CPU（中央处理器）要求取决于用户数量和预期工作负载求。您的具体需可能更多，具体取决于您的工作量。您的工作负载受到多种因素的影响，例如但不限于您的用户活跃程度、您使用的自动化程度、镜像以及存储库/更改大小。

以下是针对少数 GitLab 用户群规模示例的建议最低 CPU 硬件指南：

- **4 核** 是建议的最小核心数，最多支持 `500` 个用户
- **8 核** 支持多达 `1000` 个用户
- 更多用户，请参阅 [参考架构页面](https://docs.gitlab.com/ee/administration/reference_architectures/index.html)

### RAM

RAM（内存）要求取决于用户数量和预期工作负载。您的具体需求可能更多，具体取决于您的工作量。您的工作负载受到多种因素的影响，例如但不限于您的用户活跃程度、您使用的自动化程度、镜像以及存储库/更改大小。

以下是针对少数 GitLab 用户群大小示例的建议最低内存硬件指南：

- **4 GB** 是所需的最小内存大小，最多支持 `500` 个用户
- **8 GB** 支持多达 `1000` 个用户
- 更多用户，请参阅 [参考架构页面](https://docs.gitlab.com/ee/administration/reference_architectures/index.html)

## Linux 安装

### GitLab EE 安装

访问 [GitLab 包仓库](https://packages.gitlab.com/gitlab)，选择需要安装的 GitLab 版本。

![GitLab 包仓库](../assets/gitlab_repos.jpg)

使用 Bash 脚本安装 GPG 密钥、GitLab 存储库等，选择支持您系统的脚本。

![Bash 脚本](../assets/scripts_install.jpg)

安装和配置所需的依赖：

::: code-tabs#shell

@tab apt

```bash
sudo apt install -y curl openssh-server ca-certificates tzdata perl postfix
```

@tab yum

```bash
sudo yum install -y curl policycoreutils-python3 openssh-server perl postfix
```

:::

安装脚本：

::: code-tabs#shell

@tab apt

```bash
curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

@tab yum

```bash
curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

:::

接下来安装 `gitlab-ee`。此外，还需要通过设置 `EXTERNAL_URL` 环境变量来指定 GitLab EE 实例的 `URL`：

::: code-tabs#shell

@tab apt

```bash
sudo EXTERNAL_URL="http://gitlab.example.com" apt install -y gitlab-ee
```

@tab yum

```bash
sudo EXTERNAL_URL="http://gitlab.example.com" yum install -y gitlab-ee
```

:::

- Debian 系统

    安装和配置所需的依赖：

    ```bash
    sudo apt install -y curl openssh-server ca-certificates tzdata perl postfix
    ```

    安装脚本：

    ```bash
    curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
    ```

    接下来安装 `gitlab-ee`。此外，还需要通过设置 `EXTERNAL_URL` 环境变量来指定 GitLab EE 实例的 `URL`：

    ```bash
    sudo EXTERNAL_URL="http://gitlab.example.com" apt install -y gitlab-ee
    ```

- RedHat 系统

    安装和配置所需的依赖：

    ```bash
    sudo yum install -y curl policycoreutils-python3 openssh-server perl postfix
    ```

    安装脚本：

    ```bash
    curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
    ```

    接下来安装 `gitlab-ee`。此外，还需要通过设置 `EXTERNAL_URL` 环境变量来指定 GitLab EE 实例的 `URL`：

    ```bash
    sudo EXTERNAL_URL="http://gitlab.example.com" yum install -y gitlab-ee
    ```

### 极狐 GitLab 安装

安装和配置所需的依赖：

::: code-tabs#shell

@tab apt

```bash
sudo apt install -y curl openssh-server ca-certificates tzdata perl postfix
```

@tab yum

```bash
sudo yum install -y curl policycoreutils-python openssh-server perl postfix
```

:::

执行以下命令配置极狐GitLab 软件源镜像：

```bash
curl -fsSL https://get.gitlab.cn | /bin/bash
```

接下来，安装极狐GitLab。此外，还需要通过设置 `EXTERNAL_URL` 环境变量来指定极狐GitLab 实例的 `URL`：

::: code-tabs#shell

@tab apt

```bash
sudo EXTERNAL_URL="http://gitlab.example.com" apt install -y gitlab-jh
```

@tab yum

```bash
sudo EXTERNAL_URL="http://gitlab.example.com" yum install -y gitlab-jh
```

:::

- Debian 系统
    
    安装和配置所需的依赖：
    
    ```bash
    sudo apt install -y curl openssh-server ca-certificates tzdata perl postfix
    ```

    执行以下命令配置极狐GitLab 软件源镜像：

    ```bash
    curl -fsSL https://get.gitlab.cn | /bin/bash
    ```

    接下来，安装极狐GitLab。此外，还需要通过设置 `EXTERNAL_URL` 环境变量来指定极狐GitLab 实例的 `URL`：

    ```bash
    sudo EXTERNAL_URL="http://gitlab.example.com" apt install -y gitlab-jh
    ```

- RedHat 系统

    安装和配置所需的依赖：

    ```bash
    sudo yum install -y curl policycoreutils-python openssh-server perl postfix
    ```

    执行以下命令配置极狐GitLab 软件源镜像：

    ```bash
    curl -fsSL https://get.gitlab.cn | /bin/bash
    ```

    接下来，安装极狐GitLab。此外，还需要通过设置 `EXTERNAL_URL` 环境变量来指定极狐GitLab 实例的 `URL`：

    ```bash
    sudo EXTERNAL_URL="http://gitlab.example.com" yum install -y gitlab-jh
    ```

安装和配置所需的依赖：

::: tabs#system

@tab Debian

```bash
sudo apt install -y curl openssh-server ca-certificates tzdata perl postfix
```

@tab RedHat

```bash
sudo yum install -y curl policycoreutils-python openssh-server perl postfix
```

:::

执行以下命令配置极狐GitLab 软件源镜像：

```bash
curl -fsSL https://get.gitlab.cn | /bin/bash
```

接下来，安装极狐GitLab。此外，还需要通过设置 `EXTERNAL_URL` 环境变量来指定极狐GitLab 实例的 `URL`：

::: tabs#system

@tab Debian

```bash
sudo EXTERNAL_URL="http://gitlab.example.com" apt install -y gitlab-jh
```

@tab RedHat

```bash
sudo EXTERNAL_URL="http://gitlab.example.com" yum install -y gitlab-jh
```

:::

出现以下提示说明 GitLab 安装成功：

```bash
It looks like GitLab has not been configured yet; skipping the upgrade script.

       *.                  *.
      ***                 ***
     *****               *****
    .******             *******
    ********            ********
   ,,,,,,,,,***********,,,,,,,,,
  ,,,,,,,,,,,*********,,,,,,,,,,,
  .,,,,,,,,,,,*******,,,,,,,,,,,,
      ,,,,,,,,,*****,,,,,,,,,.
         ,,,,,,,****,,,,,,
            .,,,***,,,,
                ,*,.



     _______ __  __          __
    / ____(_) /_/ /   ____ _/ /_
   / / __/ / __/ /   / __ `/ __ \
  / /_/ / / /_/ /___/ /_/ / /_/ /
  \____/_/\__/_____/\__,_/_.___/


Thank you for installing GitLab!
GitLab was unable to detect a valid hostname for your instance.
Please configure a URL for your GitLab instance by setting `external_url`
configuration in /etc/gitlab/gitlab.rb file.
Then, you can start your GitLab instance by running the following command:
  sudo gitlab-ctl reconfigure

For a comprehensive list of configuration options please see the Omnibus GitLab readme
https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/README.md

Help us improve the installation experience, let us know how we did with a 1 minute survey:
https://gitlab.fra1.qualtrics.com/jfe/form/SV_6kVqZANThUQ1bZb?installation=omnibus&release=16-11
```

修改配置文件（`/etc/gitlab/gitlab.rb`）中 `external_url` 参数：

```bash
sudo vim /etc/gitlab/gitlab.rb

# external_url 'http://gitlab.example.com'
external_url 'http://localhost:8080'
```

重新配置并启动：

```bash
sudo gitlab-ctl reconfigure
sudo gitlab-ctl restart
```
