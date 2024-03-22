---
title: 开机自启
icon: quickstart
date: 2024-03-21
category: DevOpos
tag:
    - Gerrit
---

## Debain 系统

将 `gerrit.sh` 脚本链接到 `rc3.d` 目录下：

```bash
sudo ln -snf /home/gerrit/review_site/bin/gerrit.sh /etc/init.d/gerrit
sudo ln -snf /etc/init.d/gerrit /etc/rc3.d/S90gerrit
```

在 `/etc/default/` 目录下创建 `gerritcodereview` 文件：

```bash
sudo touch /etc/default/gerritcodereview
```

在 `gerritcodereview` 文件输入以下内容：

```bash
GERRIT_SITE=/home/gerrit/review_site
NO_START=0
```

- **GERRIT_SITE**：运行 Gerrit 站点的路径
- **NO_START**：是否启动 Gerrit 服务

## RedHat 系统

在 `/usr/lib/systemd/system/` 目录下创建 `gerrit.service` 文件：

```bash
sudo touch /usr/lib/systemd/system/gerrit.service
```

在 `gerrit.service` 文件输入以下内容：

```bash
[Unit]
Description=Gerrit Code Review
After=network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
PIDFile=/home/gerrit/review_site/logs/gerrit.pid
ExecStop=/home/gerrit/review_site/bin/gerrit.sh stop
ExecStart=/home/gerrit/review_site/bin/gerrit.sh start
ExecReload=/home/gerrit/review_site/bin/gerrit.sh restart
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

重新加载系统管理守护进程（`systemd`）的配置文件，并设置开机自启：

```bash
sudo systemctl daemon-reload
sudo systemctl enable gerrit.service
```
