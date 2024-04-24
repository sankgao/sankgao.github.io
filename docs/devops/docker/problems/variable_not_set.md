---
title: variable is not set.
icon: problem
date: 2024-04-24
category: 
    - DevOps
    - 问题
tag:
    - Docker
---

## 问题

**报错日志如下：**

```bash
sudo docker compose up -d

WARN[0000] The "GITLAB_HOME" variable is not set. Defaulting to a blank string.
WARN[0000] The "GITLAB_HOME" variable is not set. Defaulting to a blank string.
WARN[0000] The "GITLAB_HOME" variable is not set. Defaulting to a blank string.
```

## 原因

`docker-compose.yml` 文件中，在 `volumes` 参数中使用 `GITLAB_HOME` 环境变量。例如：

```yaml
volumes:
  - '$GITLAB_HOME/config:/etc/gitlab'
  - '$GITLAB_HOME/logs:/var/log/gitlab'
  - '$GITLAB_HOME/data:/var/opt/gitlab'
```

未在本地 `.env` 文件中定义 `GITLAB_HOME` 环境变量，且在 `docker-compose.yml` 文件中引用方式错误。

## 解决方法

在 `.env` 文件中定义变量：

```bash
GITLAB_HOME=/opt/gitlab
```

在 `docker-compose.yml` 文件中使用这个变量定义卷。例如：

```yml
......
volumes:
  - '${GITLAB_HOME}/config:/etc/gitlab'
  - '${GITLAB_HOME}/logs:/var/log/gitlab'
  - '${GITLAB_HOME}/data:/var/opt/gitlab'
```

`${GITLAB_HOME}` 是一个环境变量的引用，它将会被解析为在 `.env` 文件中定义的值 `/opt/gitlab`。

运行 `docker-compose up` 命令时，Docker Compose 会读取 `.env` 文件中的变量定义，并在启动服务之前将 `${GITLAB_HOME}` 替换为 `/opt/gitlab`。这样，您就可以通过修改 `.env` 文件来控制卷的路径，而不需要编辑 `docker-compose.yml` 文件本身。

通过 `docker-compose config` 命令查看环境变量替换后的显示：

```bash
suod docker-compose config

volumes:
  - type: bind
    source: /opt/gitlab/config
    target: /etc/gitlab
    bind:
      create_host_path: true
......
```
