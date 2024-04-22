---
title: docker run 传递用户名
icon: problem
date: 2024-04-22
category: 
    - DevOps
    - 问题
tag:
    - jenkins
    - dockers
---

## 问题

以指定用户启动 docker 容器。

**报错日志如下：**

```bash
sudo docker run -d -u test --name jenkins jenkins/jenkins:latest

docker: Error response from daemon: unable to find user test: no matching entries in passwd file.
```

## 原因

容器中的默认用户是 `root`（`uid = 0`）。您可以设置默认用户以使用 Dockerfile `USER` 指令运行第一个进程。启动容器时，可以通过传递 `-u` 选项来覆盖 `USER` 指令。

`docker run` 命令 `-u` 参数，传递的用户名必须存在与容器中，如果用户名不存在容器中，则会报此错误。

以下示例均有效：

```bash
-u, --user=[ user | user:group | uid | uid:gid | user:gid | uid:group ]
```

参考官网：<https://docs.docker.com/engine/reference/run/#user>

## 解决方法

传递用户时，使用数字用户 ID，此用户不必存在于容器中，但此用户 ID 必须在 `0-2147483647` 范围内。

通过以下命令查看 `test` 用户的 UID：

```bash
cat /etc/passwd | grep test

test:x:1002:1002::/opt/jenkins_home:/bin/bash
```

例如：

```bash
sudo docker run -d -u 1002:1002 --name jenkins jenkins/jenkins:latest
```

由于该 ID 不存在于容器内的 `/etc/passwd` 文件中，所以进入容器后，容器名显示为 `I have no name!`。例如：

```bash
sudo docker exec -it jenkins /bin/bash

I have no name!@87396e208b2e:/$
```

可以进入容器中，通过修改容器内 jenkins 用户 UID 和 GID 解决。例如：

```bash
sudo docker exec -it -u 0 jenkins /bin/bash

root@87396e208b2e:/$ usermod -u 1002 jenkins
root@87396e208b2e:/$ groupmod -u 1002 jenkins
```
