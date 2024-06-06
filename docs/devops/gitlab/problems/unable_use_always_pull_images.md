---
title: 无法使用 always 策略拉取镜像
icon: problem
date: 2024-06-06
category: 
    - DevOps
    - 问题
tag:
    - GitLab
---

## 问题

无法使用 `always` 策略拉取镜像。

**报错日志如下：**

```shell
WARNING: Failed to pull image with policy "always": error pulling image configuration: download failed after attempts=6: dial tcp [2a03:2880:f11f:83:face:b00c:0:25de]:443: connect: network is unreachable (manager.go:250:108s)
ERROR: Job failed: failed to pull image "docker:latest" with specified policies [always]: error pulling image configuration: download failed after attempts=6: dial tcp [2a03:2880:f11f:83:face:b00c:0:25de]:443: connect: network is unreachable (manager.go:250:108s)
```

## 原因

`config.toml` 配置中的拉取策略 `pull_policy` 以定义运行器如何从注册表中拉取 Docker 镜像。默认为 `always` 即使本地镜像存在，也会拉取镜像。

查看 [官网解释](https://docs.gitlab.com/runner/executors/docker.html#configure-how-runners-pull-images)。

## 解决方法

将 `/etc/gitlab-runner/config.toml` 文件中 `pull_policy` 配置为 `if-not-present`。

```shell
[[runners]]
  # ......省略部分内容
  [runners.docker]
    pull_policy = ["if-not-present", "always"]
    # ......省略部分内容
```
