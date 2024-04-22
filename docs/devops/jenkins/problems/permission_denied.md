---
title: 权限被拒绝
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

使用 `/opt/jenkins_home` 作为 Jenkins 服务的挂载数据目录时，权限被拒绝。

```bash
sudo docker run -d -v /opt/jenkins_home:/var/jenkins_home -u jenkins --name jenkins jenkins/jenkins:latest
```

**报错日志如下：**

```bash
docker logs jenkins

touch: cannot touch '/var/jenkins_home/copy_reference_file.log': Permission denied
INSTALL WARNING: User:  missing rw permissions on JENKINS_HOME: /var/jenkins_home
Can not write to /var/jenkins_home/copy_reference_file.log. Wrong volume permissions?
```

## 原因

当前 `/opt/jenkins_home` 目录的属主 UID 和容器中的 `jenkins` 用户的 UID 值不同，导致的权限拒绝。

通过以下命令查看 `/opt/jenkins_home` 目录的属主 UID：

```bash
$ ls -l /opt | grep jenkins_home

drwxr-xr-x 11 jenkins jenkins 4096 Apr 22 02:03 jenkins_home

$ cat /etc/passwd | grep jenkins

jenkins:x:1002:1002::/opt/jenkins_home:/bin/bash
```

::: warning
参考官网：<https://github.com/jenkinsci/docker?tab=readme-ov-file#usage>

避免使用从主机上的文件夹（`/opt/jenkins_home`）到 `/var/jenkins_home` 的绑定装载，因为这可能会导致文件权限问题（在容器中使用的用户可能没有访问主机上文件夹的权限）。如果您真的需要绑定 `jenkins_home`，请确保容器内的 `jenkins` 用户可以访问主机上的目录（容器内 `jenkins` 用户 UID 是 `1000`），或者在 `docker run` 中使用 `-u some_other_user` 参数。
:::

## 解决方法

### 解决方法 1

修改 `/opt/jenkins_home` 目录属主属组权限为 `1000`，使挂载目录权限和容器内用户权限一样。例如：

```bash
sudo chown -R 1000:1000 /ope/jenkins_home
```

### 解决方法 2

在 `docker run` 中使用 `-u uid:gid` 参数，指定容器内使用的用户。例如：

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
