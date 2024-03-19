---
title: 端口被 SELinux 禁用
icon: problem
date: 2024-03-19
category: 
    - DevOpos
    - 问题
tag:
    - Gerrit
---

## 问题

**报错日志如下：**

```log
2024/03/19 15:32:54 [emerg] 3874#0: bind() to 0.0.0.0:8081 failed (13: Permission denied)
```

## 原因

SELinux 默认是启动的，SELinux 影响端口的开放。SELinux 只使用标准的端口，非标准的端口被 SELinux 禁用。

## 解决方法

端口小于 `1024`。例如：端口为 `80`。

```log
[emerg] 3874#0: bind() to 0.0.0.0:80 failed (13: Permission denied)
```

Nginx 用 `1024` 以下端口启动时需要 `root` 用户权限，所以使用 `root` 启动 Nginx 服务即可。

此次端口为 `8081` 大于 `1024`，使用以下方法解决。

### 解决方法 1

关闭 `SELinux`。此方法对端口小于 `1024` 也有用。

- 临时配置，重启后失效
    
    ```bash
    sudo setenforce 0
    ```

- 写入配置文件，永久生效
    
    ```bash
    sudo sed -i 's/\(^SELINUX=\).*/\SELINUX=disabled/' /etc/selinux/config
    ```

### 解决方法 2

::: info semanage 命令安装
`semanage` 命令用于管理 SELinux。

安装 `semanage` 命令：

```bash
sudo yum install -y semanage
```

返回 `Error: Unable to find a match: semanage` 错误，表示找不到此包，使用 `sudo yum provides semanage` 命令查看 `semanage` 此命令在哪个软件包中：

```bash
sudo yum provides semanage

policycoreutils-python-utils-2.9-24.el8.noarch : SELinux policy core python utilities
Repo        : baseos
Matched from:
Filename    : /usr/sbin/semanage
```

安装 `policycoreutils-python-utils-2.9-24.el8.noarch` 此包，即可使用 `semanage` 命令：

```bash
sudo yum install -y policycoreutils-python-utils-2.9-24.el8.noarch
```

`semanage` 命令常用选项：

- **-a**：添加端口
- **-t**：添加端口到哪个端口列表
- **-p**：添加端口到哪个协议
- **-m**：修改端口
- **-l**：查看所有端口

:::

查看 `http` 允许访问的端口：

```bash
sudo semanage port -l | grep http_port_t

http_port_t                    tcp      80, 81, 443, 488, 8008, 8009, 8443, 9000
pegasus_http_port_t            tcp      5988
```

将要启动的端口加入到 `http_port_t` 端口列表中：

```bash
sudo semanage port -a -t http_port_t -p tcp 8081
```

返回 `ValueError: Port tcp/8081 already defined` 错误，表示 `tcp/8081` 端口已定义，两种解决方法：

- **更换没有使用过的端口添加**
    
    查看已使用过的端口：
    
    ```bash
    sudo semanage port -l
    ```

    添加没有使用过的端口：

    ```bash
    sudo semanage port -a -t http_port_t -p tcp 8085
    ```

    ::: tip
    使用此方法，不要忘记修改 Nginx 的监听端口
    :::

- **重新定义 8081 端口**
    
    ```bash
    sudo semanage port -m -t http_port_t -p tcp 8081
    ```

重启 Nginx 服务：

```bash
sudo systemctl restart nginx
```

再次访问 `http://localhost:8085` 地址：

![502 Bad Gateway](../assets/bad_gateway.jpg)

**报错日志如下：**

```log
2024/03/19 16:16:26 [crit] 13490#0: *1 connect() to 10.1.1.10:8088 
failed (13: Permission denied) while connecting to upstream, client: 10.1.1.1, 
server: localhost, request: "GET /favicon.ico HTTP/1.1", 
upstream: "http://10.1.1.10:8088/favicon.ico", host: "10.1.1.10:8085", 
referrer: "http://10.1.1.10:8085/dashboard/self"
```

`SELinux` 拒绝 `httpd` 网络访问。设置 `SELinux` 允许 `httpd` 连接到网络。

- **临时配置，重启后失效**
    
    ```bash
    sudo setsebool httpd_can_network_connect=1
    ```

- **写入配置文件，永久生效**
    
    ```bash
    sudo setsebool -P httpd_can_network_connect 1
    ```

再次访问 `http://localhost:8085` 地址即可。
