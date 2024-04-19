---
title: Java 不识别类文件版本
icon: problem
date: 2024-04-19
category: 
    - DevOps
    - 问题
tag:
    - jenkins
---

## 问题

**报错日志如下：**

```bash
sudo systemctl status jenkins.service

● jenkins.service - Jenkins Continuous Integration Server
   Loaded: loaded (/lib/systemd/system/jenkins.service; enabled; vendor preset: enabled)
   Active: failed (Result: exit-code) since Fri 2024-04-19 05:11:00 UTC; 1min 20s ago
  Process: 71810 ExecStart=/usr/bin/jenkins (code=exited, status=1/FAILURE)
 Main PID: 71810 (code=exited, status=1/FAILURE)

Apr 19 05:11:00 localhost.localdomain systemd[1]: Failed to start Jenkins Continuous Integration Server.
Apr 19 05:11:00 localhost.localdomain systemd[1]: jenkins.service: Service hold-off time over, scheduling restart.
Apr 19 05:11:00 localhost.localdomain systemd[1]: jenkins.service: Scheduled restart job, restart counter is at 8.
Apr 19 05:11:00 localhost.localdomain systemd[1]: Stopped Jenkins Continuous Integration Server.
Apr 19 05:11:00 localhost.localdomain systemd[1]: jenkins.service: Start request repeated too quickly.
Apr 19 05:11:00 localhost.localdomain systemd[1]: jenkins.service: Failed with result 'exit-code'.
Apr 19 05:11:00 localhost.localdomain systemd[1]: Failed to start Jenkins Continuous Integration Server.
```

```bash
journalctl -xe

-- Unit jenkins.service has begun starting up.
Apr 19 05:11:00 localhost.localdomain jenkins[71810]: jenkins: failed to find a valid Java installation
Apr 19 05:11:00 localhost.localdomain systemd[1]: jenkins.service: Main process exited, code=exited, status=1/FAILURE
Apr 19 05:11:00 localhost.localdomain systemd[1]: jenkins.service: Failed with result 'exit-code'.
Apr 19 05:11:00 localhost.localdomain systemd[1]: Failed to start Jenkins Continuous Integration Server.
-- Subject: Unit jenkins.service has failed
-- Defined-By: systemd
-- Support: http://www.ubuntu.com/support
--
-- Unit jenkins.service has failed.
```

## 原因

Jenkins 当前版本依赖的 Java 版本和已安装的 Java 版本不同；或找不到 Java 位置。

## 解决方法

### 解决方法 1

安装支持 Jenkins 版本依赖的 Java 版本。

```bash
sudo yum install -y java-17-openjdk-devel.x86_64
```

### 解决方法 2

修改 `jenkins.service` 文件中 `JAVA_HOME` 的值。

```bash
Environment="JAVA_HOME=/opt/jdk/jdk-17.0.10"
```

重新加载 systemd 管理器的配置，并重启 Jenkins 服务：

```bash
sudo systemctl daemon-reload
sudo systemctl restart jenkins
```
