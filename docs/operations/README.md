---
title: 运维
icon: operations
date: 2023-05-04
category: Operations
tag:
    - Operations
---

- 个人建议/意见<Badge text="√" type="warning" />
- 可选-选择此项或黄色<Badge text="√" type="tip" />
- 路线图中的顺序不严格（随时学习）<Badge text="√" type="info" />

::: info
查找此 [路线图](https://roadmap.sh) 的详细版本以及资源和其他路线图
:::

## 学习编程语言

选择任何用于自动化的语言。

- Python<Badge text="√" type="warning" />
- Ruby<Badge text="√" type="tip" />
- JavaScript/Node.js<Badge text="√" type="tip" />

- Go<Badge text="√" type="warning" />
- Rust<Badge text="√" type="tip" />

## 了解不同的操作系统概念

- I/O 管理<Badge text="√" type="warning" />
- 虚拟化<Badge text="√" type="warning" />
- 内存/存储<Badge text="√" type="warning" />
- 文件系统<Badge text="√" type="warning" />

- 网络<Badge text="√" type="warning" />
- Sockets<Badge text="√" type="warning" />
- 消息队列<Badge text="√" type="warning" />
- 进程<Badge text="√" type="warning" />

- 启动管理（initd）<Badge text="√" type="warning" />
- 服务管理（systemd）<Badge text="√" type="warning" />
- 线程和并发<Badge text="√" type="warning" />

## 了解管理服务器

在一些操作系统中获得一些管理知识。去使用任何 Linux 发行版。如果你有一点 Ubuntu 没有使用 Linux 的经验

### 操作系统

- Windows<Badge text="√" type="tip" />
- Linux<Badge text="√" type="warning" />

    - Ubuntu/Debian<Badge text="√" type="warning" />
    - SUSE Linux<Badge text="√" type="tip" />
    - RHEL/Derivatives<Badge text="√" type="warning" />

- Unix<Badge text="√" type="tip" />

    - FreeBSD<Badge text="√" type="warning" />
    - OpenBSD<Badge text="√" type="tip" />
    - NetBSD<Badge text="√" type="tip" />

### 学会在终端生活

- 学习 Bash 脚本<Badge text="√" type="warning" />
- Vim/Nano/PowerShell/Emacs<Badge text="√" type="warning" />
- 从源代码编译应用程序（gcc、make 和其他相关的 stu！）<Badge text="√" type="info" />
- 文本操作工具<Badge text="√" type="warning" />

    - `awk`
    - `sed`
    - `grep`
    - `sort`
    - `cut`
    - `uniq`
    - `cat`
    - `echo`
    - `fmt`
    - `tr`
    - `nl`
    - `wc`

- 其他<Badge text="√" type="warning" />

    - `strace`
    - `dtrace`
    - `systemtap`
    - `uname`
    - `df`
    - `history`
    - `du`

- 终端多路复用器<Badge text="√" type="warning" />

    - `screen`<Badge text="√" type="tip" />
    - `tmux`<Badge text="√" type="warning" />

- 进程监控<Badge text="√" type="warning" />

    - `ps`
    - `top`
    - `htop`
    - `atop`
    - `lsof`

- 系统性能<Badge text="√" type="warning" />

    - `nmon`
    - `iostat`
    - `sar`
    - `vmstat`

- 网络工具<Badge text="√" type="warning" />

    - `traceroute`
    - `mtr`
    - `ping`
    - `nmap`
    - `netstat`
    - `ufw/firewalld`
    - `tcpdump`
    - `iptables/nftables`
    - `dig`
    - `scp`

## 网络、安全和协议

- OSI 模式<Badge text="√" type="warning" />
- `DNS`<Badge text="√" type="warning" />

- `HTTP`<Badge text="√" type="warning" />
- `HTTPS`<Badge text="√" type="warning" />
- `FTP/SFTP`<Badge text="√" type="warning" />
- `SSL/TLS`<Badge text="√" type="warning" />
- `SSH`<Badge text="√" type="warning" />
- 端口转发<Badge text="√" type="warning" />

- 电子邮件<Badge text="√" type="info" />

    - `White/Grey Listing`<Badge text="√" type="warning" />
    - `SMTP`<Badge text="√" type="warning" />
    - `IMAPS`<Badge text="√" type="warning" />
    - `POP3S`<Badge text="√" type="warning" />
    - `DMARC`<Badge text="√" type="warning" />
    - `SPF`<Badge text="√" type="warning" />
    - `Domain Keys`<Badge text="√" type="warning" />

## 以下是什么以及如何设置

- 反向代理<Badge text="√" type="warning" />
- 转发代理<Badge text="√" type="warning" />
- 防火墙<Badge text="√" type="warning" />

- 高速缓存服务器<Badge text="√" type="warning" />
- 负载平衡器<Badge text="√" type="warning" />
- Web 服务器<Badge text="√" type="warning" />

    - `Nginx`<Badge text="√" type="warning" />
    - `Apache`<Badge text="√" type="tip" />
    - `Tomcat`<Badge text="√" type="tip" />
    - `IIS`<Badge text="√" type="tip" />

## 基础设施作为代码

- GitOps

    - `ArgoCD`<Badge text="√" type="warning" />
    - `FluxCD`<Badge text="√" type="tip" />

- Service Mesh

    - `Istio`<Badge text="√" type="warning" />
    - `Consul`<Badge text="√" type="warning" />
    - `Linkerd`<Badge text="√" type="tip" />
    - `Envoy`<Badge text="√" type="tip" />

- Secret Management

    - `Vault`<Badge text="√" type="warning" />
    - `SOPS`<Badge text="√" type="tip" />
    - `Sealed Secrets`<Badge text="√" type="tip" />
    - `Cloud Specific Tools`<Badge text="√" type="tip" />

- 容器编排

    - `Kubernetes`<Badge text="√" type="warning" />
    - `Docker Swarm`<Badge text="√" type="warning" />
    - `Nomad`<Badge text="√" type="tip" />

- 配置管理

    - `Ansible`<Badge text="√" type="warning" />
    - `SaltStack`<Badge text="√" type="warning" />
    - `Puppet`<Badge text="√" type="warning" />
    - `Chef`<Badge text="√" type="warning" />

### 容器

- Docker<Badge text="√" type="warning" />
- LXC<Badge text="√" type="tip" />

### 基础架构资源调配

- Terraform<Badge text="√" type="warning" />
- AWS CDK<Badge text="√" type="tip" />
- CloudFormatio<Badge text="√" type="tip" />
- Pulumi<Badge text="√" type="tip" />

## 学习一些 CI/CD 工具

- Gitlab CI<Badge text="√" type="warning" />
- GitHub Actions<Badge text="√" type="warning" />
- Jenkins<Badge text="√" type="warning" />
- Travis CI<Badge text="√" type="tip" />
- TeamCity<Badge text="√" type="tip" />
- Azure DevOps 服务<Badge text="√" type="tip" />
- Circle CI<Badge text="√" type="warning" />
- Drone<Badge text="√" type="tip" />

## 了解监控软件和基础架构

### 日志管理

- Elastic Stack<Badge text="√" type="warning" />
- Graylog<Badge text="√" type="tip" />
- Splunk<Badge text="√" type="tip" />
- Papertrail<Badge text="√" type="tip" />
- Loki<Badge text="√" type="warning" />

### 基础设施监控

- Prometheus<Badge text="√" type="warning" />
- Nagios<Badge text="√" type="tip" />
- Grafana<Badge text="√" type="warning" />
- Zabbix<Badge text="√" type="warning" />
- Monit<Badge text="√" type="tip" />
- Datadog<Badge text="√" type="warning" />

### 应用程序监控

- Jaeger<Badge text="√" type="warning" />
- New Relic<Badge text="√" type="warning" />
- AppDynamics<Badge text="√" type="tip" />
- Instana<Badge text="√" type="tip" />
- OpenTelemetry<Badge text="√" type="tip" />

## 云提供商

- AWS<Badge text="√" type="warning" />
- Alilbaba Cloud<Badge text="√" type="warning" />
- Goole Cloud<Badge text="√" type="warning" />
- Digital Ocean<Badge text="√" type="warning" />
- Azure<Badge text="√" type="tip" />
- Linode<Badge text="√" type="tip" />
- Heroku<Badge text="√" type="tip" />
- Vultr<Badge text="√" type="tip" />

## 云设计模式<Badge text="√" type="warning" />

<http://bit.ly/cloud-arch-patterns>

- 可用性
- 数据管理
- 设计和实施
- 管理和监控

继续学习

