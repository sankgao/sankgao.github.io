---
title: Linux 系统常用命令
icon: command
date: 2023-4-12
category: Computer
tag:
  - Linux
---

## Linux 系统常用命令

### man

man 用于查看命令的作用及选项信息，使用 `q` 退出，语法格式：`man 命令`

example：

`man echo`

### echo

echo 用于在终端上输出字符串或变量提取后的值，语法格式：`echo [字符串][$变量]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -e  |  使用转义符  |

example:

```bash
echo 'Hello world!'  # 输出结果：Hello world!

echo "$SHELL"  # 输出结果：/bin/bash

echo -e "one\ttwo\tthree"  # 输出结果：one     two     three
```

### su

su 用于切换用户账户，语法格式：`su [选项] 用户名`

> 从 root 用户切换到普通用户不需要输入密码，从普通用户切换到普通用户和 root 用户需要输入密码

|  选项  |  作用  |
|  :----:  |  :----  |
|  - 或 -l  |  切换用户时重置环境变量  |
|  -c  |  变更为帐号为 USER 的使用者并执行指令（command）后再变回原来使用者  |
|  -f  |  不必读启动档（如 csh.cshrc 等），仅用于 csh 或 tcsh  |
|  -s  |  指定要执行的 shell （bash csh tcsh 等），预设值为 /etc/passwd 内的该使用者（USER） shell  |

example：

```bash
su zhangshan    # 切换到 zhangsan 用户，不重置环境变量
su - zhangshan    # 切换到 zhangsan 用户，重置环境变量
```

### sudo

sudo 用于给普通用户提供额外的权限，语法格式：`sudo [选项]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -l  |  列出当前用户可执行的命令  |
|  -u  |  以指定用户执行命令  |
|  -k  |  清空密码的有效时间，下次执行 sudo 时需要再次进行密码验证  |
|  -b  |  在后台执行指定的命令  |
|  -p  |  更改询问密码的提升语  |

example：

`sudo -l`

### date

date 用于显示或设置系统的时间与日期，语法格式：`date [+指定的格式]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  %F  |  显示年月日（example：2022-10-11）  |
|  %T  |  显示时分秒（example：19:26:26）  |
|  %S  |  秒（00-59）  |
|  %M  |  分钟（00-59）  |
|  %H  |  小时（00-23）  |
|  %l  |  小时（00-12）  |
|  %m  |  月份（1-12）  |
|  %p  |  显示出 AM 或 PM  |
|  %r  |  显示出 09:56:34 AM  |
|  %a  |  缩写的工作日名称（example：Sun）  |
|  %A  |  完整的工作日名称（example：Sunday）  |
|  %b  |  缩写的月份名称（example：Jan）  |
|  %B  |  完整的月份名称（example：January）  |
|  %q  |  季度（1-4）  |
|  %y  |  简写年份（example：22）  |
|  %Y  |  完整年份（example：2022）  |
|  %d  |  本月中的第几天  |
|  %j  |  本年中的第几天  |
|  %w  |  一个星期的第几天（0代表星期天）    |
|  %W  |  一年的第几个星期（00~53，星期一为第一天）  |
|  %n  |  换行符（相当于回车键）  |
|  %t  |  跳格（相当于 Tab 键）  |

example:

```bash
date    # 查看默认系统时间
date "+%Y-%m-%d %H:%M:%S"    # 按指定格式查看系统时间
date -s "20221101 8:30:00"    # 设置当前系统时间
date "+%F_%T"    # 显示年月日，时分秒，用 “_” 下划线分割
```

### timedatectl

timedatectl 用于查看设置系统的时区，语法格式：`timedatectl [选项]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  status  |  显示状态信息  |
|  list-timezones  |  列出已知时区  |
|  set-time  |  设置系统时间  |
|  set-timezone  |  设置生效时区  |

example：

```bash
timedatectl status    # 查看系统时间与时区

tiemedatectl set-timezone Asia/Shanghai    # 设置系统时区

timedatectl set-time 2022-9-23    # 设置系统日期

timedatectl set-time 9:30:00    # 设置系统时间
```

### reboot

reboot 用于重启系统

### poweroff

poweroff 用于关闭系统

### wget

wget 用于在终端命令行上下载网络文件，无需打开浏览器，语法格式：`wget [选项] 网址`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -b  |  后台下载模式  |
|  -P  |  下载到指定目录  |
|  -t  |  最大尝试次数。值为 0 时将强制不断进行尝试  |
|  -c  |  断点续传  |
|  -p  |  下载页面内所有资源，包括图片、视频等  |
|  -r  |  递归下载  |
|  -O  |  指定文件名  |
|  -o  |  将输出的内容保存到指定文件中  |
|  -nc  |  文件存在时，下载文件不覆盖原有文件  |
|  -mc  |  下载时只显示更新和出错信息，不显示指令的详细执行过程  |
|  --no-check-certificate  |  下载 https 网站资源时可能需要使用该选项跳过证书检测的过程  |
|  --limit-rate  |  限制下载指定带宽。可以用 k（千字节）和 m（兆字节）指定速度限制  |
|  --user  |  网站需要认证时，指定用户名  |
|  --password  |  网站需要认证时，指定密码  |
|  --ask-password  |  网站需要认证时，在网页中输入密码  |

example：

```bash
wget https://www.linuxprobe.com/docs/LinuxProbe.pdf    # 下载指定文件

wget -r -p https://www.linuxprobe.com    # 递归下载网站内的所有数据及文件
```

### curl

curl 命令的用途广泛，其功能包括下载、发送各种 HTTP 请求以及指定 HTTP 头部，语法格式：`curl  [选项] 网址`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -C -  |  推断出正确的续传位置。不需要指定准确的字节偏移使用 -C  |
|  -d  |  以 POST 方式提交用户数据。-d 的字符串参数形式类似于 GET 请求。每对 var=value 之间用 & 分隔  |
|  -O  |  指明将下载数据写入文件  |
|  -o  |  指定输出文件名  |
|  -u username:password  |  完成 HTTP 或 FTP 认证，指定用户名和密码。如果想要提示后再输入密码，则不加 password  |
|  -I 或 --head  |  只打印 HTTP 头部信息，无须下载远程文件  |
|  --silent  |  不显示进度信息  |
|  --progress  |  显示形如 # 的进度条  |
|  --referer  |  指定参照页字符串  |
|  --cookie  |  指定提供哪些 cookie，多个 cookie 之间用 ; 号分隔  |
|  --cookie-jar  |  将 cookie 另存为文件  |
|  --limit-rate  |  限制下载指定带宽。可以用 k（千字节）和 m（兆字节）指定速度限制  |
|  --max-filesize  |  指定可下载的最大文件大小  |

example：

```bash
curl www.knopper.net/index.html --silent -o test.html  # 不显示进度，并将文件名改为 test.html

curl www.knopper.net/index.html --limit-rate 20k  # 限制下载速度
```

### lsof

lsof 用于查看你进程开打的文件，打开文件的进程，进程打开的端口（TCP、UDP），语法格式：`lsof [选项]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  列出打开文件存在的进程  |
|  -c<进程名>  |  列出指定进程所打开的文件  |
|  -g  |  列出 GID 号进程详情  |
|  -d<文件号>  |  列出占用该文件号的进程  |
|  +d<目录>  |  列出目录下被打开的文件  |
|  +D<目录>  |  递归列出目录下被打开的文件  |
|  -n<目录>  |  列出使用 NFS 的文件  |
|  -i<条件>  |  列出符合条件的进程。（4、6、协议、:端口、 @ip）   |
|  -p<进程号>  |  列出指定进程号所打开的文件  |
|  -u  |  列出 UID 号进程详情  |
|  -R  |  列出父进程标识符  |
|  -h  |  显示帮助信息  |
|  -v  |  显示版本信息  |

example：

```bash
lsof

COMMAND     PID  TID TASKCMD             USER   FD      TYPE             DEVICE SIZE/OFF       NODE NAME
systemd       1                          root  cwd       DIR              253,0      224        128 /
systemd       1                          root  rtd       DIR              253,0      224        128 /
systemd       1                          root  txt       REG              253,0  1605448   67840620 /usr/lib/systemd/systemd
systemd       1                          root  mem       REG              253,0  1599024   67499916 /usr/lib64/libm-2.28.so
systemd       1                          root  mem       REG              253,0   636768   67806046 /usr/lib64/libudev.so.1.6.11
systemd       1                          root  mem       REG              253,0   735192   67500018 /usr/lib64/libsepol.so.1
......省略部分内容
```

各个列表的含义：

- COMMAND：进程的名称
- PID：进程标识符
- USER：进程所有者
- PGID：进程所属组
- FD：文件描述符，应用程序通过文件描述符识别该文件
- TYPE：是与文件关联的节点类型，例如：GDIR、GREG、VDIR、VREG 等。
- DEVICE：指定磁盘的名称
- SIZE：文件的大小
- NODE：索引节点（文件在磁盘上的标识）
- NAME：打开文件的确切名称

### ps

ps 用于查看系统中的进程状态，语法格式：`ps [选项]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  显示所有进程（包括其他用户的进程）  |
|  -u  |  用户以及其他详细信息  |
|  -x  |  显示当前用户在所有终端下的进程  |
|  -e  |  显示系统内的所有进程信息  |
|  -l  |  使用长（long）格式显示进程信息  |
|  -f  |  使用完整的（full）格式显示进程信息  |
|  -T  |  查看进程下面的子线程  |

Linux 系统常见的进程状态：

**R（运行）**：进程正在运行或在运行队列中等待
**S（中断）**：进程处于休眠中，当某个条件形成后或者接收到信号时，则脱离该状态
**D（不可中断）**：进程不响应系统异步信号，即便用 kill 命令也不能将其中断
**Z（僵死）**：进程已经终止，但进程描述符依然存在，直到父进程调用 wait4() 系统函数后将进程释放
**T（停止）**：进程收到停止信号后停止运行

```bash
ps -aux

USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root           1  0.0  0.7 176264 14616 ?        Ss   Sep23   0:09 /usr/lib/systemd/systemd --switched-root --system --deserialize 18
root           2  0.0  0.0      0     0 ?        S    Sep23   0:00 [kthreadd]
root           3  0.0  0.0      0     0 ?        I<   Sep23   0:00 [rcu_gp]
root           4  0.0  0.0      0     0 ?        I<   Sep23   0:00 [rcu_par_gp]
root           6  0.0  0.0      0     0 ?        I<   Sep23   0:00 [kworker/0:0H-events_highpri]
root           9  0.0  0.0      0     0 ?        I<   Sep23   0:00 [mm_percpu_wq]
root          10  0.0  0.0      0     0 ?        S    Sep23   0:00 [rcu_tasks_rude_]
root          11  0.0  0.0      0     0 ?        S    Sep23   0:00 [rcu_tasks_trace]
......（省略部分信息）
```

各个列表的含义：

- `USER`：进程的属主
- `PID`：进程的 PID
- `%CPU`：进程占用的 CPU 百分比
- `%MEM`：占用内存的百分比
- `VSZ`：进程使用的虚拟內存量（KB）
- `RSS`：该进程占用的固定內存量（KB）（驻留中页的数量）
- `TTY`：该进程在哪个终端上运行（登陆者的终端位置），若与终端无关，则显示（？）。若为 pts/0 等，则表示由网络连接主机进程
- `STAT`：状态位常见的状态字符
    - `D`：无法中断的休眠状态（通常 IO 的进程）
    - `R`：正在运行可中在队列中可过行的
    - `S`：处于休眠状态
    - `T`：停止或被追踪
    - `W`：进入内存交换 （从内核2.6开始无效）
    - `X`：死掉的进程 （基本很少見）
    - `Z`：僵尸进程
    - `<`：优先级高的进程
    - `N`：优先级较低的进程
    - `L`：有些页被锁进内存
    - `s`：进程的领导者（在它之下有子进程）
    - `l`：多进程的（使用 CLONE_THREAD, 类似 NPTL pthreads）
    - `+`：位于前台的进程组
- `START`：该进程被触发启动时间
- `TIME`：该进程实际使用 CPU 运行时间
- `COMMAND`：命令的名称和参

### pstree

pstree 用于以树状图的形式展示进程之间的关系

|  选项  |  作用  |
|  :----:  |  :----  |
|  -A  |  各进程树之间的连接以 ASCII 码字符来连接  |
|  -U  |  各进程树之间的连接以 utf8 字符来连接，某些终端可能会有错误  |
|  -p  |  同时列出每个进程的 PID  |
|  -u  |  同时列出每个进程的所属账号名称  |

```bash
pstree

systemd─┬─NetworkManager───2*[{NetworkManager}]
        ├─VGAuthService
        ├─agetty
        ├─atd
        ├─auditd─┬─sedispatch
        │        └─2*[{auditd}]
        ├─chronyd
        ├─crond
        ├─dbus-daemon───{dbus-daemon}
        ├─firewalld───{firewalld}
        ├─irqbalance───{irqbalance}
        ├─lsmd
        ├─mcelog
        ├─polkitd───5*[{polkitd}]
        ├─rsyslogd───2*[{rsyslogd}]
        ├─smartd
        ├─sshd─┬─sshd───sshd───bash───pstree
        │      └─sshd───sshd───sftp-server
        ├─sssd─┬─sssd_be
        │      └─sssd_nss
        ├─systemd───(sd-pam)
        ├─systemd-journal
        ├─systemd-logind
        ├─systemd-udevd
        ├─tuned───4*[{tuned}]
        └─vmtoolsd───3*[{vmtoolsd}]
```

### top

top 用于动态地监视进程活动及系统负载等信息，语法格式：`top | top [-d number] | top [-bn 3 -p 1712]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -d  |  number 表示页面更新的间隔秒数，默认是 5 秒  |
|  -b  |  以批次的方式执行 top  |
|  -n  |  与 -b 配合使用，表示输出的 top 结果次数  |
|  -p  |  指定特定的 pid 进程号  |

top 命令显示的页面还可以输入以下按键执行相应的功能（注意大小写区分的）：

- ?：在 top 当中可以输入的命令
- d：指定 top 页面的刷新间隔
- P：以 CPU 的使用资源排序显示 
- M：以内存的使用资源排序显示
- N：以 pid 排序显示
- T：由进程使用的时间累计排序显示
- k：给某一个 pid 一个信号。可以用来杀死进程
- r：给某个 pid 重新定制一个 nice 值（即优先级）
- q：退出 top（用 ctrl+c 也可以退出 top）

top 前 5 行统计信息：

**第一行**：top - 10:33:20 up 3 days, 17:19,  1 user,  load average: 0.00, 0.00, 0.00

- 10:33:20：系统时间
- up 3 days：运行时间
- 1 user：登录终端数
- load average: 0.00, 0.00, 0.00：系统负载（三个值分别为 1 分钟、5 分钟、15 分钟内的平均值，数值越小负载越低）

> load average: 如果这个数除以逻辑 CPU 的数量，结果高于 5 的时候就表明系统在超负荷运转了

**第二行**：Tasks: 162 total,   1 running, 161 sleeping,   0 stopped,   0 zombie

- 162 total：进程总数
- 1 running：运行中的进程数
- 161 sleeping：睡眠中的进程数
- 0 stopped：停止的进程数
- 0 zombie：僵死的进程数

**第三行**：%Cpu(s):  0.2 us,  0.0 sy,  0.0 ni, 99.7 id,  0.0 wa,  0.2 hi,  0.0 si,  0.0 st

- 0.2 us：用户空间占用 CPU 百分比
- 0.0 sy：内核空间占用 CPU 百分比
- 0.0 ni：用户进程空间内改变过优先级的进程占用 CPU 百分比
- 99.7 id：空闲 CPU 百分比
- 0.0 wa：等待输入输出的 CPU 时间百分比
- 0.2 hi：硬中断（Hardware IRQ）占用 CPU 的百分比
- 0.0 si：软中断（Software Interrupts）占用 CPU 的百分比
- 0.0 st：用于有虚拟 CPU 的情况，用来指示被虚拟机偷掉的 CPU 时间

**第四行**：MiB Mem :   1785.3 total,    684.9 free,    309.6 used,    790.9 buff/cache

- 1785.3 total：物理内存总量
- 684.9 free：空闲内存总量
- 309.6 used：使用的物理内存总量
- 790.9 buff/cache：作为内核缓存的内存量

**第五行**：MiB Swap:   2076.0 total,   2076.0 free,      0.0 used.   1276.2 avail Mem

- 2076.0 total：交换区总量
- 2076.0 free：空闲交换区总量
- 0.0 used：使用的交换区总量
- 1276.2 avail Mem：可用于进程下一次分配的物理内存数量

> 缓冲的交换区总量：所谓缓冲的交换区总量，即内存中的内容被换出到交换区，而后又被换入到内存，但使用过的交换区尚未被覆盖，该数值即为这些内容已存在于内存中的交换区的大小。相应的内存再次被换出时可不必再对交换区写入。

进程信息：

- PID：进程 PID
- PPID：父进程 PID
- RUSER：真实用户名
- UID：进程所有者的用户 UID
- USER：进程所有者的用户名
- GROUP：进程所有者的组名
- TTY：启动进程的终端名。
- PR：优先级
- NI：nice 值。负值表示高优先级，正值表示低优先级
- P：最后使用的 CPU，仅在多 CPU 环境下有意义
- %CPU：上次更新到现在的 CPU 时间占用百分比
- TIME：进程使用的 CPU 时间总计，单位秒
- TIME+：进程使用的 CPU 时间总计，单位 1/100 秒
- %MEM：进程使用的物理内存百分比
- VIRT：进程使用的虚拟内存总量，单位 kb。VIRT=SWAP+RES
- SWAP：进程使用的虚拟内存中，被换出的大小，单位 kb
- RES：进程使用的、未被换出的物理内存大小，单位 kb。RES=CODE+DATA
- CODE：可执行代码占用的物理内存大小，单位 kb
- DATA：可执行代码以外的部分(数据段 + 栈)占用的物理内存大小，单位 kb
- SHR：共享内存大小，单位 kb
- nFLT：页面错误次数
- nDRT：最后一次写入到现在，被修改过的页面数。
- S：进程状态。D=不可中断的睡眠状态 R=运行 S=睡眠 T=跟踪/停止 Z=僵尸进程
- COMMAND：命令名/命令行
- WCHAN：若该进程在睡眠，则显示睡眠中的系统函数名
- Flags：任务标志

### nice

nice 用于调整进程的优先级，语法格式：`nice 优先级数字 服务名称`

> 优先级的范围：-20 — 19。共 40 个等级，其中数值越小优先级越高，数值越大优先级越低，即 -20 的优先级最高，19 的优先级最低

-n：指定优先级数

example：

`nice -n -20 sshd`

### pidof

pidof 用于查询某个指定服务进程的 PID 值，语法格式：`pidof [选项] 服务名称`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -s  |  仅返回一个进程号  |
|  -c  |  仅显示具有相同 “root” 目录的进程  |
|  -x  |  显示由脚本开启的进程  |
|  -o  |  指定不显示的进程 ID  |

example：

`pidof sshd`

### kill

kill 用于终止指定 PID 值的服务进程，语法格式：`kill [选项] 进程的PID`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -l  |  信号，如果不加信号的编号选项，则使用 “-l” 选项会列出全部的信号名称  |
|  -a  |  当处理当前进程时，不限制命令名和进程号的对应关系  |
|  -p  |  指定 kill 命令只打印相关进程的进程号，而不发送任何信号  |
|  -s  |  指定发送信号  |
|  -u  |  指定用户  |

信号值：

```bash
 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL       5) SIGTRAP
 6) SIGABRT      7) SIGBUS       8) SIGFPE       9) SIGKILL     10) SIGUSR1
11) SIGSEGV     12) SIGUSR2     13) SIGPIPE     14) SIGALRM     15) SIGTERM
16) SIGSTKFLT   17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP
21) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU     25) SIGXFSZ
26) SIGVTALRM   27) SIGPROF     28) SIGWINCH    29) SIGIO       30) SIGPWR
31) SIGSYS      34) SIGRTMIN    35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3
38) SIGRTMIN+4  39) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+8
43) SIGRTMIN+9  44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12 47) SIGRTMIN+13
48) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-14 51) SIGRTMAX-13 52) SIGRTMAX-12
53) SIGRTMAX-11 54) SIGRTMAX-10 55) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7
58) SIGRTMAX-6  59) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-2
63) SIGRTMAX-1  64) SIGRTMAX
```

 1) SIGHUP：终端的控制进程结束，通知 session 内的各个作业，脱离关系 
 2) SIGINT：中断（同 Ctrl + C）
 3) SIGQUIT：退出（同 Ctrl + \），产生 core 文件
 4) SIGILL：执行了非法指令，可执行文件本身出现错误
 5) SIGTRAP：有断点指令或其他 trap 指令产生，有 debugger 使用
 6) SIGABRT：调用 abort 函数生成的信号
 7) SIGBUS：非法地址（内存地址对齐出错）
 8) SIGFPE：致命的算术错误（浮点数运算，溢出，及除数为 0 错误）
 9) SIGKILL：强制终止，用来立即结束程序的运行（不能为阻塞，处理，忽略）
10) SIGUSR1：用户使用
11) SIGSEGV：访问内存错误
12) SIGUSR2：用户使用
13) SIGPIPE：管道破裂
14) SIGALRM：时钟定时信号
15) SIGTERM：终止（正常停止一个进程），程序结束信号（可被阻塞，处理）
16) SIGSTKFLT：协处理器栈堆错误
17) SIGCHLD：子进程结束，父进程收到这个信号并进行处理，（wait 也可以）否则僵尸进程
18) SIGCONT：让一个停止的进程继续执行（不能被阻塞）
19) SIGSTOP：让一个进程停止执行（不能被阻塞，处理，忽略）
20) SIGTSTP：停止进程的运行（可以被处理和忽略）
21) SIGTTIN：当后台作业要从用户终端读数据时, 该作业中的所有进程会收到 SIGTTIN 信号，缺省时这些进程会停止执行
22) SIGTTOU：类似 SIGTTIN，但在写终端时收到
23) SIGURG：有紧急数据或者 out—of—band 数据到达 socket 时产生
24) SIGXCPU：超过 CPU 资源限定，这个限定可改变
25) SIGXFSZ：当进程企图扩大文件以至于超过文件大小资源限制
26) SIGVTALRM：虚拟时钟信号（计算的是该进程占用的 CPU 时间）
27) SIGPROF：时钟信号（进程用的 CPU 时间及系统调用时间）
28) SIGWINCH：窗口大小改变时发出
29) SIGIO：文件描述符准备就绪，可以进行读写操作
30) SIGPWR：power failure
31) SIGSYS：非法的系统调用

> linux 的 kill 命令是向进程发送信号，kill 不是杀死的意思，-9 表示无条件退出，但由进程自行决定是否退出，这就是为什么 kill -9 终止不了系统进程和守护进程的原因。

example：

`kill -9 1050`

### killall

killall 用于终止指定名称服务所对应的全部进程，语法格式：`killall [选项] 服务名称`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -e 或 --exact  |  进程需要和名字完全相符  |
|  -I 或 --ignore-case  |  忽略大小写  |
|  -g 或 --process-group  |  结束进程组  |
|  -i 或 --interactive  |  结束之前询问  |
|  -l 或 --list  |  列出所有的信号名称  |
|  -q 或 --quite  |  进程没有结束时，不输出任何信息  |
|  -r 或 --regexp  |  将进程名模式解释为扩展的正则表达式  |
|  -s 或 --signal  |  发送指定信号  |
|  -u 或 --user  |  结束指定用户的进程  |
|  -v 或 --verbose  |  显示详细执行过程  |
|  -w 或 --wait  |  等待所有的进程都结束  |
|  -V 或 --version  |  显示版本信息  |
|  --help  |  显示帮助信息  |

example：

`killall sshd`

### ln

ln 用于创建文件的软硬链接，语法格式：`ln [选项] 原始文件名 链接文件名`

> 软链接可以对文件、目录做软链接，也可以跨文件系统；硬链接只能对文件做硬链接，不能跨文件系统

|  选项  |  作用  |
|  :----:  |  :----  |
|  -s  |  创建 “软连接（符号链接）”，如果不带 -s 选项，则默认创建硬链接  |
|  -f  |  强制创建文件或目录的链接  |
|  -i  |  覆盖前先询问  |
|  -v  |  显示创建链接的过程  |

example：

`ln -s aaa.txt bbb.txt`

### tee

tee 用于从标准输入读取，再写入标准输出和文件，语法格式：`tee [OPTION] [FILE]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  追加到文件  |
|  -i  |  忽略终端信号  |
|  -P  |  诊断写入非管道的错误  |
|  --output-error[=MODE]  |  设置输出错误的方式  |

- MODE:
  - warn：写入遇到错误时诊断
  - warn-nopipe：写入非管道遇到错误时诊断
  - exit：写入遇到错误时退出
  - exit-nopipe：写入非管道遇到错误时退出

如果没有指定 --output-error，tee 会在写入管道发生错误时立即退出，写入非管道时诊断

example：

```bash
[root@localhost shell]# echo "one" | tee test.txt
one

[root@localhost shell]# cat test.txt
one

[root@localhost shell]# echo "two" | tee -a test.txt
two

[root@localhost shell]# cat test.txt
one
two
```

### eval

eval 会对后面的 cmdLine 进行两遍扫描，如果第一遍扫描后，cmdLine 是个普通命令，则执行此命令；如果 cmdLine 中含有变量，则进行对变量的替换再执行命令。语法格式：`eval cmdLine`

example：

```bash
NAME=ZONE

eval echo $NAME 等价于 echo $NAME  # 输出结果：ZONE

[root@localhost shell]# echo "Hello shell world!" > test.txt
[root@localhost shell]# myfile="cat test.txt"
[root@localhost shell]# echo $myfile  # 输出结果：cat test.txt
[root@localhost shell]# eval $myfile  # 输出结果：hello shell world!
```

> 执行 `eval $myfile` 命令时，先将 `$myfile` 替换成 `cat test.txt`，执行 `eval cat test.txt` 此命令

### bc

bc 是一种支持任意精度数字的语言，支持语句的交互式执行。语法格式：`bc [OPTION] [FILE]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -h,–help  |  打印此用法并退出  |
|  -i,–interactive  |  强制交互模式  |
|  -l,–mathlib  |  使用预定义的数学例程  |
|  -q,–quiet  |  不要打印初始横幅  |
|  -s,–standard  |  非标准 bc 构造是错误的  |
|  -w,–warn  |  警告非标准 bc 构造  |
|  -v,–version  |  打印版本信息并退出  |

**支持的运算包括：**

- \+ 加法
- \- 减法
- \* 乘法
- / 除法
- ^ 指数
- % 余数

**特殊变量说明**

- 浮点数精度变量，scale=10; 设置之后的 scale 为 10，默认为 0（及整数除法会返回整数）
- 进制变量，obase=16;ibase=16; 设置输入和输出都为 16 进制，默认值为 10。**注意**：为 10 时可不设置ibaseobase 的值，obase 要尽量放在 ibase 前，因为 ibase 设置后，后面的数字都是以 ibase 的进制来换算的
- last，是指上一次返回出来的数字
- quit，退出计算

example：

```bash
[root@localhost shell]# bc -q
100 / 3
33
scale = 4
100 /3
33.3333

a=3
b=4
a+b
7
c=100
c * last
700
quit

[root@localhost shell]# echo "sqrt(100)" | bc
10
[root@localhost shell]#
[root@localhost shell]# echo "3^3" | bc
27
[root@localhost shell]# echo "obase=2;10" | bc  # 十进制转二进制
1010
[root@localhost shell]# echo "obase=16;10" | bc  # 十进制转十六进制
A
[root@localhost shell]# echo "obase=8;10" | bc  # 十进制转八进制
12
[root@localhost shell]# echo "obase=10;ibase=16;A" | bc  # 十六进制转十进制
10
[root@localhost shell]# echo "obase=10;ibase=2;1010" | bc  # 二进制转十进制
10
```

## Linux 系统管理 SELinux 服务命令

### getenforce

getenforce 用于查看当前 SELinux 服务的运行模式，语法格式：`getenforce`

SELinux 运行模式：

- enforce：启用
- permissive：发出警告不拦截
- disabled：禁用

example：

`getenforce`

### setenforce

setenforce 用于设置 SELinux 服务的运行模式，语法格式：`setenforce [0|1]`

> 0 为禁用，1 为启用

example：

`setenforce 0`

### semanage

semanage 用于管理 SELinux 的策略，语法格式：`semanage [位置参数] [选项] 文件名`

> 可以使用 `semanage -h` 查看

|  位置参数  |  作用  |
|  :----:  |  :----  |
|  import  |  导入本地自定义  |
|  export  |  输出本地自定义  |
|  login  |  管理 linux 用户和 SELinux 之间的登录映射受限用户  |
|  user  |  管理 SELinux 受限用户（角色和级别 SELinux 用户）  |
|  port  |  管理网络端口类型定义  |
|  ibpkey  |  管理 infiniband ibpkey 类型定义  |
|  ibendport  |  管理 infiniband 端端口类型定义  |
|  interface  |  管理网络接口类型定义  |
|  module  |  管理 SELinux 策略模块  |
|  node  |  节点管理网络节点类型定义  |
|  fcontext  |  管理文件上下文映射定义  |
|  boolean  |  管理布尔值以选择性地启用功能  |
|  permissive  |  管理进程类型强制模式  |
|  dontaudit  |  在策略中禁用/启用 dontauedit 规则  |

> 可以使用 `semanage [位置参数] -h` 查看

|  选项  |  作用  |
|  :----:  |  :----  |
|  -l  |  查询  |
|  -a  |  添加  |
|  -m  |  修改  |
|  -d  |  删除  |
|  -t  |  SELinux 的对象类型  |

example：

```bash
ls -Zd /var/www/html    # 查看 /var/www/html 目录的安全上下文值

drwxr-xr-x. root root system_u:object_r:httpd_sys_content_t:s0 /var/www/html

semanage fcontext -a -t httpd_sys_content_t /home/wwwroot
```

### restorecon

restorecon 用于将设置好的 SELinux 安全上下文立即生效，语法格式：`restorecon [选项] 文件名`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -R  |  递归  |
|  -v  |  显示修改过程  |

example：

`restorecon -Rv /home/wwwroot/`

### getsebool

getsebool 用于查询 SELinux 安全策略的布尔值，语法格式：`getsebool [选项] [布尔值条款] `

> getsebool 显示所有 SELinux 布尔值，其中 off 为禁止状态，on 为允许状态

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  显示所有 SELinux 布尔值  |
|  -P  |  将修改后的 SELinux 策略永久生效且立即生效  |

example：

```bash
getsebool -a | grep http    # 查看 http 协议相关的安全策略
getsebool -P httpd_enable_homedirs=on    # 开启 http 服务的个人用户主页功能
```

## Linux 系统查看磁盘信息

### mount

mount 用于挂载文件系统，语法格式：`mount [选项] 文件系统 挂载目录`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  自动挂载所有在 /etc/fstab 中定义的文件系统  |
|  -c  |  不规范化路径  |
|  -l  |  显示文件系统标签  |
|  -n  |  不要写入 /etc/mtab  |
|  -r  |  以只读方式装载文件系统（与 -oro 相同）  |
|  -t  |  指定文件系统类型  |
|  -w  |  挂载文件系统读写（默认）  |
|  -o<选项>  |  指定加载文件系统选项  |

example：

`mount -t ext4 /dev/sdb2 /backup`

-o 选项如下：

- async：以非同步的方式执行文件系统的输入、输出动作。
- atime：每次存取都更新 inode 的存取时间，默认设置，取消选项为 noatime。
- auto：必须在 /etc/fstab 文件中指定此选项。指定 -a 选项时，会加载设置为 auto 的设备，取消选项为 noauto。
- dev：可读文件系统上的字符或块设备，取消选项为 nodev。
- exec：可执行二进制文件，取消选项为 noexec。
- noatime：每次存取时不更新 inode 的存取时间。
- noauto：加入此选项，就无法使用 -a 选项来加载。
- nodev：不读文件系统上的字符或块设备。
- noexec：无法执行二进制文件。
- nosuid：关闭 set-user-identifier（设置用户 ID）与 set-group-identifer（设置组 ID）设置位。
- nouser：使用户无法执行加载操作，默认设置。
- iocharset=XXX：指定 mount 分区时使用的字符集。
- codepage=XXX：指定 mount 分区时使用的内码表。
- remount：重新加载设备。通常用于改变设备的设置状态。
- ro：以只读模式加载。
- rw：以可读写模式加载。
- suid：启动 set-user-identifier（设置用户 ID）与 set-group-identifer（设置组 ID）设置位，取消选项为 nosuid。
- sync：以同步方式执行文件系统的输入、输出动作。
- user：可以让一般用户加载设备。
- defaults：使用默认选项。默认选项为 rw、suid、dev、exec、anto、nouser 与 async。3）-t<文件系统类型>：指定设备的文件系统类型，常用选项如下：
    - ext3/ext2：Linux 目前的常用文件系统。
    - msdos：MS-DOS 的 FAT。
    - vfat：Windows 95/98 的 VFAT。
    - nfs：网络文件系统。
    - iso9660：CD-ROM 光盘的标准文件系统。
    - ntfs：Windows NT 的文件系统。

### umount

umount 用于卸载设备或文件系统，语法格式：`umount [设备文件/挂载目录]`

> 如果当前就处在设备所挂载的目录时，系统会提升该设备繁忙，只需退出到其它目录在使用 umount 命令即可

example：

`umount /dev/sdb2`

### blkid

blkid 用于显示设备的属性信息，语法格式：`blkid [设备名]`

example：

```bash
blkid    # 查看所有设备信息
blkid /dev/nvme0n1p1    # 查看指定设备信息
```

### df

df 用于查看已挂载的磁盘空间使用情况，语法格式：`df [选项]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  查看所有文件系统，包括伪、重复、不可访问的文件系统  |
|  -h  |  人类可读的显示大小，1024 次方（例如：1023M）  |
|  -H  |  显示大小为 1000 次方（例如：1.1G）  |
|  -i  |  列出索引节点信息  |
|  -l  |  本地文件系统列表  |
|  -T  |  显示文件系统类型  |

example：

`df -hT`

### fdisk

fdisk 用于新建、修改及删除磁盘的分区表信息，语法格式：`fdisk 磁盘名称`

> fdisk 命令中的选项作用

|  选项  |  作用  |
|  :----:  |  :----  |
|  m  |  查看全部可用的选项  |
|  n  |  添加新的分区  |
|  d  |  删除某个分区信息  |
|  l  |  列出所有可用的分区类型  |
|  t  |  改变某个分区的类型  |
|  p  |  查看分区表信息  |
|  w  |  保存并退出  |
|  q  |  不保存直接退出  |

example：

`fdisk /dev/sdb`

### mkfs

mkfs 用于格式化文件系统，语法格式：`mkfs.文件类型 磁盘名称`

example：

`mkfs.xfs /dev/sdb2`

### du

du 用于查看分区或目录所占用的磁盘容量大小，语法格式：`du [选项] 目录名称`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  显示目录中所有文件的大小  |
|  -b  |  显示目录或文件大小时，以 byte 为单位  |
|  -c  |  除了显示个别目录或文件的大小外，同时也显示所有目录或文件的总和  |
|  -D  |  显示指定符号连接的源文件大小  |
|  -h  |  以 K，M，G 为单位，提高信息的可读性  |
|  -H  |  与 -h 选项相同，但是 K，M，G 是以 1000 为换算单位  |
|  -k  |  以 1024 bytes 为单位  |
|  -l  |  重复计算硬件连接的文件  |
|  -m  |  以 1MB 为单位  |
|  -s  |  仅显示总计  |
|  --max-depth  |  限制 du 应该遍历多少层子目录  |

example：

`du -sh /etc`

### fsck

fsck 用于检查文件系统并尝试修复错误，语法格式：`fsck [选项] [-t <文件系统类型>] [设备名]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  `-A`  |  检查所有文件系统  |
|  `-C[<fd>]`  |  显示进度条；文件描述符用于 GUI  |
|  `-l`  |  锁定设备以保证独占访问  |
|  `-M`  |  不检查已装载的文件系统  |
|  `-N`  |  不执行，只显示将要执行的操作  |
|  `-P`  |  并行检查文件系统，包括根  |
|  `-R`  |  跳过根文件系统；仅与 “-A” 一起使用  |
|  `-r[<fd>]`  |  报告检查的每个设备的统计信息；文件描述符用于 GUI  |
|  `-s`  |  序列化检查操作  |
|  `-T`  |  启动时不显示标题  |
|  `-t<type>`  |  指定要检查的文件系统类型；`<type>` 允许是逗号分隔的列表  |
|  `-V`  |  显示过程  |

example：

```bash
fsck -rV -t ext3 /dev/sda2    # 检查并尝试修复出问题的磁盘分区 /dev/sda2，在执行修复时进行询问，让用户得以确认并决定处理方式
```

### sync

sync 用于强制将内存缓冲区中的数据立即写入磁盘，语法格式：`sync [选项] [文件]`

> 用户通常无需执行 sync 命令，系统会自动执行 update 或 bdflush 操作，将缓冲区的数据写入磁盘。

|  选项  |  作用  |
|  :----:  |  :----  |
|  -d  |  只同步文件数据，没有不需要的元数据  |
|  -f  |  同步包含文件的文件系统  |

example：

`sync`

## Linux 系统状态检测命令

### ifconfig

ifconfig 用于获取网卡配置与网络状态等信息，语法格式：`ifconfig [选项] [网络设备]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  显示所有接口信息  |
|  -s  |  显示简要信息  |
|  -a  |  显示所有接口信息  |
|  -a  |  显示所有接口信息  |

example：

```bash
ifconfig ens160

ens160: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.4.151  netmask 255.255.255.0  broadcast 192.168.4.255
        inet6 fe80::20c:29ff:fe6a:447a  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:6a:44:7a  txqueuelen 1000  (Ethernet)
        RX packets 57848  bytes 47691039 (45.4 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 45972  bytes 3837385 (3.6 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

启动或关闭指定网卡

```bash
ifconfig ens160 up
ifconfig ens160 down
ifup ens160
ifdow ens160
```

-promisc 设置是否支持网卡的 promiscuous 模式，选择此选项，网卡将接收网络中发给它所有的数据包

```bash
ifconfig ens160 promisc    //设置
ifconfig ens160 -promisc    //取消设置
```

-allmulti 设置是否支持多播模式，选择此选项，网卡将接受网络中所有的多播数据包

```bash
ifconfig ens160 allmulti    //设置
ifconfig ens160 -allmulti    //取消设置
```

配置 IP 地址

```bash
ifconfig ens160 192.168.4.120
ifconfig ens160 192.168.4.120 netmask 255.255.255.0
ifconfig ens160 192.168.4.120 netmask 255.255.255.0 broadcast 192.168.4.255
```

单网卡添加多个 IP 地址

```bash
ifconfig ens160:0 192.168.4.130 netmask 255.255.255.0
ifconfig ens160:1 192.168.4.131 netmask 255.255.255.0
```

删除 IP 地址

```bash
ifconfig ens160 del 192.168.4.120
```

启动或关闭 ARP 协议

```bash
ifconfig ens160 arp
ifconfig ens160 -arp
```

### nslookup

nslookup 用于域名与 IP 地址的解析记录，语法格式：`nslookup [域名 | IP]`

example：

```bash
nslookup www.baidu.com
nslookup 192.168.10.10
```

### nmcli

nmcli 网络管理，查看设备信息，并进行配置，语法格式：`nmcli [选项] 对象 { COMMAND | help }`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  询问缺少的选项  |
|  -c  |  是否在输出中使用颜色  |
|  -e  |  值中的转义列分隔符  |
|  -f  |  指定要输出的字段  |
|  -h  |  打印此帮助  |
|  -m  |  输出模式  |
|  -o  |  概览模式  |
|  -p  |  漂亮输出  |
|  -s  |  允许显示密码  |
|  -t  |  简洁输出  |
|  -v  |  显示程序版本  |
|  -w  |  设置等待完成操作的超时  |

> 对象，可以只写对象的前几个字母，或只写对象的第一个字母

|  对象  |  作用  |
|  :----:  |  :----  |
|  general  |  NetworkManager 的常规状态和操作  |
|  networking  |  整体联网控制  |
|  radio  |  NetworkManager radio 开关  |
|  connection  |  NetworkManager 的连接  |
|  device  |  由 NetworkManager 管理的设备  |
|  agent  |  NetworkManager secret agent or polkit agent  |
|  monitor  |  监视 NetworkManager 更改  |

example：

```bash
nmcli con show    # 查看网卡信息
nmcli con show eth0    # 查看指定网卡的详细信息
nmcli con show -active    # 查看活动的网络连接
nmcli status    # 显示设备的连接状态
nmcli dev show    # 显示所有设备网络设备详情信息
nmcli dev show eth0    # 显示指定设备网络设备详情信息

nmcli con up eth0    # 启用网络连接
nmcli con down eth0    # 停用网络连接（可以被自动激活）
nmcli device disconnect eth0    # 禁用网卡，防止自动被激活
nmcli con delete eth0    # 删除网络连接的配置文件
nmcli con reload    # 重新加载网络配置文件
```

### route

route 用于查看网络信息，操作和显示 IP 路由表，语法格式：`route [选项] [-A family |-4|-6]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -n |  不解析名字  |
|  -v |  显示详细的处理信息  |
|  -F |  显示转发信息库（默认）  |
|  -C |  显示路由缓存  |
|  del  |  删除路由  |
|  add  |  添加新的路由  |
|  -net  |  目标地址是一个网络  |
|  -host  |  目标地址是一个主机  |
|  netmask  |  添加网络路由时，要使用的网络掩码  |
|  gw  |  通过网关路由数据包  |
|  metric  |  设置路由跳数  |

```bash
route -n    # 以 IP 地址的形式显示
route add -net 192.56.76.0 netmask 255.255.255.0 metric 1024 dev eth0    # 通过 “eth0” 向本地网络 192.56.76.x 添加路由。这里可以省略单词 “dev”
route del default    # 删除当前默认路由，该路由在当前路由表的目标字段中标记为“default”或0.0.0.0
```

### uname

uname 用于查看系统内核版本与系统架构等信息，语法格式：`uname [选项]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  显示全部的信息  |
|  -m  |  显示电脑类型  |
|  -n  |  显示在网络上的主机名称  |
|  -r  |  显示操作系统的发行编号  |
|  -s  |  显示操作系统名称  |

example：

```bash
uname -a

Linux localhost.localdomain 4.18.0-408.el8.x86_64 #1 SMP Mon Jul 18 17:42:52 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux
```

### uptime

uptime 用于查看系统的负载信息，语法格式：`uptime [选项]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -p  |  采用可读友好的格式输出系统已运行时长  |
|  -s  |  以格式 2022-09-23 17:13:50 输出系统  |
|  -h  |  显示帮助信息  |
|  -v  |  显示版本信息  |

example：

```bash
uptime

 13:31:26 up 2 days, 20:17,  1 user,  load average: 0.00, 0.00, 0.00
Swap:         2.0Gi          0B       2.0Gi
```

- 13:31:26：显示当前系统时间
- up 2 days, 20:17：系统已运行时间
- 1 user：启用终端数量
- load average: 0.00, 0.00, 0.00：平均负载值（三个值分别为 1 分钟、5 分钟、15 分钟内的平均值，数值越小负载越低）

### free

free 用于显示当前系统中内存的使用量，语法格式：`free [选项]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -b  |  以 bytes 为单位来显示内存的信息  |
|  -k  |  以 kb 为单位来显示内存的信息  |
|  -m  |  以 m 为单位来显示内存的信息  |
|  -h  |  以 G 为单位来显示内存的信息  |
|  -h  |  以适于人类可读方式显示内存信息。-h 与其他命令最大不同是 -h 选项会在数字后面加上适于人类可读的单位  |
|  -l  |  显示高低内存的利用率  |
|  -t  |  显示 linux 的全部内存  |
|  -s N  |  表示每隔 N 秒打印一次内存信息，直到用 ctrl + c 结束  |
|  -c N  |  表示重复打印内存信息 N 次  |
|  -w  |  输出样式为：宽输出  |
|  -V  |  显示版本信息  |

example：

```bash
free -h

              total        used        free      shared  buff/cache   available
Mem:          1.7Gi       308Mi       699Mi        16Mi       777Mi       1.2Gi
Swap:         2.0Gi          0B       2.0Gi
```

- total：总计内存的大小
- used：已使用内存的大小
- free：空闲内存的大小
- shared：多个进程共享的内存总额
- buff/cache：磁盘的缓存大小
- available：可以被新应用程序使用的内存大小

### who

who 用于查看当前登入主机的用户终端信息，语法格式：`who [选项]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  显示所有用户的所有信息  |
|  -m  |  显示运行该程序的用户名，和 “who am I” 的作用一样  |
|  -q  |  只显示用户的登陆帐号和登陆用户的数量，该选项优先级高于其他任何选项  |
|  -u  |  在登陆用户后面显示该用户最后一次对系统进行操作距今的时间  |
|  -H  |  显示列标题  |

example：

```bash
who

root     pts/0        2022-09-23 17:14 (192.168.4.1)
```

### last

last 用于调取主机的被访记录，语法格式：`who [选项]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  把从何处登入系统的主机名称或 IP 地址，显示在最后一行  |
|  -d  |  将 IP 地址转换成主机名称  |
|  -f <记录文件>  |  指定记录文件  |
|  -n <显示列数>或-<显示列数>  |  设置列出名单的显示列数  |
|  -R  |  不显示登入系统的主机名称或 IP 地址  |
|  -x  |  显示系统关机，重新开机，以及执行等级的改变等信息  |

example：

```bash
last

root     pts/0        192.168.4.1      Fri Sep 23 17:14   still logged in
reboot   system boot  4.18.0-408.el8.x Fri Sep 23 17:14   still running
root     pts/0        192.168.4.1      Mon Sep 19 21:49 - 16:14 (2+18:24)
root     pts/2        192.168.4.1      Mon Sep 19 20:10 - 23:50  (03:39)
root     pts/1        192.168.4.1      Mon Sep 19 20:08 - 21:49  (01:41)
root     pts/0        192.168.4.1      Mon Sep 19 19:14 - 21:49  (02:35)
reboot   system boot  4.18.0-408.el8.x Mon Sep 19 19:09 - 16:14 (2+21:04)
root     pts/0        192.168.4.1      Mon Sep 19 18:48 - 19:09  (00:20)
root     tty1                          Mon Sep 19 18:48 - 19:09  (00:21)
reboot   system boot  4.18.0-408.el8.x Mon Sep 19 18:38 - 19:09  (00:31)

wtmp begins Mon Sep 19 18:38:23 2022
```

### ping

ping 用于测试主机之间的网络连通性，语法格式：`ping [选项] 主机地址`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -c  |  总共发送次数  |
|  -f  |  极限检测，快速连续 ping 一台主机，ping 的速度达到 100 次每秒  |
|  -I  |  指定网卡名称  |
|  -i  |  每次间隔时间（秒）  |
|  -n  |  不要将 IP 地址转换成主机名  |
|  -s  |  指定每次 ping 发送的数据字节数，默认为 “56 字节” + “28 字节” 的 ICMP 头，一共是 84 字节；包头 + 内容不能大于 65535，所以最大值为 65507（linux:65507, windows:65500）  |
|  -W  |  最长等待时间（秒）  |

example：

`ping www.baidu.com`

### tracepath

tracepath 用于显示数据包达到主机途中所经过的路由信息，语法格式：`tracepath [选项] 域名`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -n  |  主要以数字形式打印 IP 地址  |
|  -b  |  打印主机名和 IP 地址  |
|  -l  |  将 tracepath 的初始数据包长度设置为 pktlen，而不是 65535 或 tracepath6 的 128000  |
|  -m  |  将最大跃点（或最大 TTL）设置为 max_hops，而不是 30  |
|  -p  |  设置要使用的初始目标端口  |

example：

```bash
tracepath www.baidu.com

 1?: [LOCALHOST]                      pmtu 1500
 1:  _gateway                                              0.301ms
 1:  _gateway                                              0.256ms
 2:  no reply
 3:  no reply
 4:  no reply
 5:  no reply
 6:  no reply
 7:  no reply
 8:  no reply
 9:  no reply
10:  no reply
11:  no reply
......（省略部分内容）
```

### netstat

netstat 用于显示网络连接、路由表、接口状态等网络相关信息，语法格式：`netstat [选项]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  显示所有连接中的 Socket  |
|  -p  |  显示正在使用的 Socket 信息  |
|  -t  |  显示 TCP 协议的连接信息  |
|  -u  |  显示 UDP 协议的连接信息  |
|  -n  |  使用 IP 地址，不使用域名  |
|  -l  |  仅列出正在监听的服务状态  |
|  -i  |  现在网卡列表信息  |
|  -r  |  显示路由表信息  |

example：

```bash
netstat -anpt

Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1050/sshd
tcp        0    208 192.168.4.151:22        192.168.4.1:52934       ESTABLISHED 1690/sshd: root [pr
tcp        0      0 192.168.4.151:22        192.168.4.1:52936       ESTABLISHED 1697/sshd: root [pr
tcp6       0      0 :::22                   :::*                    LISTEN      1050/sshd
```

State 链接状态：

- ESTABLISHED：指 TCP 连接已建立，双方可以进行方向数据传递
- CLOSE_WAIT：表示在等待关闭
- LISTENING：指 TCP 正在监听端口，可以接受链接
- TIME_WAIT：指连接已准备关闭
- FIN_WAIT_1：表示等待对方的 FIN 报文。SOCKET 在 ESTABLISHED 状态时，它想主动关闭连接，向对方发送了FIN 报文
- FIN_WAIT_2：表示等待对方的 FIN 报文。SOCKET 在 ESTABLISHED 状态时，它想主动关闭连接，向对方发送了FIN 报文，并对方回应 ACK 报文后
- LAST_ACK：是被动关闭一方在发送 FIN 报文后，最后等待对方的 ACK 报文
- SYNC_RECEIVED：收到对方的连接建立请求
- SYNC_SEND：已经主动发出连接建立请求

### history

history 用于显示执行过的命令历史，语法格式：`history [选项]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -c  |  清空当前用户在本机上执行的 Linux 命令历史记录信息  |
|  -n  |  显示历史记录中最近的 N 个记录，例如 history 5  |

example：

`history`

### sosreport

sosreport 用于收集系统配置及架构信息并输出诊断文档，收集好的资料压缩文件以及校验码，在输出内容的最下面显示，语法格式：`sosreport [选项]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -l  |  列出所有可用的插件及其选项  |
|  -n  |  禁用指定的插件  |
|  -e  |  启用指定的插件  |
|  -a  |  对于所有的插件启用，将所有布尔选项设置为 True  |
|  -v  |  增加日志记录的详细程度  |
|  --no-report  |  禁用 HTML 报告写入  |
|  --config-file  |  CONFIG：指定备用配置文件  |

example：

```bash
sosreport

Please note the 'sosreport' command has been deprecated in favor of the new 'sos' command, E.G. 'sos report'.
Redirecting to 'sos report '


sosreport (version 4.3)

......（省略部分内容）

Your sosreport has been generated and saved in:
        /var/tmp/sosreport-localhost-2022-09-26-vdphrie.tar.xz

 Size   14.34MiB
 Owner  root
 sha256 96cd338ec557b41681041449d9ea402dcf2959573c254b1bd067da0441c2556c

Please send this file to your support representative.
```

### watch

watch 命令会按照指定的间隔时间来执行命令并显示其输出，命令默认每 2 秒更新一次输出

|  选项  |  作用  |
|  :----:  |  :----  |
|  -n  |  指定更新输出的时间间隔  |
|  -d  |  重标记出连续的命令输出之间的差异  |

example：

```bash
watch -n 5 'ls -l'
watch -n 30 -d 'ss | grep ESTAB'
```

## Linux 查找定位文件命令

### pwd

pwd 用于显示用户当前所处的工作目录

example：

`pwd`

### cd

cd 用于切换当前的工作路径，语法格式：`cd [选项] [目录]`

`cd -`：返回到上一次所处的目录
`cd ../`：进入当前目录的上一级目录
`cd ./`：进入当前目录
`cd ~`：返回到当前用户的家目录

example：

`cd /opt`

### ls

ls 用于显示目录中文件信息，语法格式：`ls [选项] [文件名称]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  查看目录下的所有文件，包括隐藏文件  |
|  -l  |  查看文件属性、大小等详细信息  |
|  -r  |  对文件反向排序  |
|  -t  |  对文件以时间排序  |
|  -Z  |  查看文件的安全上下文值  |

example：

```bash
ls -al

total 40
dr-xr-x---.  4 root root   184 Sep 26 10:43 .
dr-xr-xr-x. 17 root root   224 Sep 19 18:30 ..
-rw-------.  1 root root  1247 Sep 19 18:37 anaconda-ks.cfg
-rw-------.  1 root root  3921 Sep 22 16:14 .bash_history
-rw-r--r--.  1 root root    18 May 11  2019 .bash_logout
-rw-r--r--.  1 root root   176 May 11  2019 .bash_profile
-rw-r--r--.  1 root root   176 May 11  2019 .bashrc
drwx------.  3 root root    20 Sep 21 18:47 .config
-rw-r--r--.  1 root root   100 May 11  2019 .cshrc
drwxr-xr-x.  3 root root    19 Sep 26 10:43 .systemtap
-rw-r--r--.  1 root root   129 May 11  2019 .tcshrc
-rw-------.  1 root root 11371 Sep 22 11:26 .viminfo
```

### tree

tree 用于以树状图的形式列出目录内容及结构，语法格式：`tree [选项]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  打印所有文件,包括隐藏文件、目录  |
|  -C  |  在文件和目录清单上加上色彩，便于区分文件类型  |
|  -d  |  仅列出目录名称，而非内容  |
|  -D  |  列出文件或目录更改时间  |
|  -L  |  目录树的最大显示深度  |
|  -p  |  打印结构同时打印文件权限  |
|  -l  |  跟随目录的符号链接，就像它们是目录一样。 避免了导致递归循环的链接  |
|  -f  |  打印每个文件的完整路径前缀  |
|  -F  |  在每个条目后加上文件类型的指示符（如目录是/）  |

example：

```bash
tree
.
└── anaconda-ks.cfg

0 directories, 1 file
```

### find

find 用于按照指定条件来查找文件所对应的位置，语法格式：`find [查找范围] [选项]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -name  |  匹配名称  |
|  -perm  |  匹配权限（mode 为完全匹配，-mode 为包含即可）  |
|  -user  |  匹配所有者  |
|  -group  |  匹配所有组  |
|  -mtime -n +n  |  匹配修改内容的时间（-n 指 n 天以内，+n 指 n 天以前）  |
|  -atime -n +n  |  匹配访问文件的时间（-n 指 n 天以内，+n 指 n 天以前）  |
|  -ctime -n +n  |  匹配修改文件权限的时间（-n 指 n 天以内，+n 指 n 天以前）  |
|  -nouser  |  匹配无所有者的文件  |
|  -nogroup  |  匹配无所有组的文件  |
|  -newer f1 !f2  |  匹配比文件 f1 新但比 f2 旧的文件  |
|  --type b/d/c/p/l/f  |  匹配文件类型（后面的字幕字母依次表示块设备、目录、字符设备、管道、链接文件、文本文件）  |
|  -size  |  匹配文件的大小（+50KB 为查找超过 50KB 的文件，而 -50KB 为查找小于 50KB 的文件）  |
|  -prune  |  忽略某个目录  |
|  -exec .....{}\;  |  后面可跟用于进一步处理搜索结构的命令  |

example：

`find / -name anaconda-ks.cfg`

### locate

locate 用于按照名称快速搜索文件所对应的位置，语法格式：`locate 文件名称`

> find 命令进行全盘搜索虽然更准确，但是效率有点低，如果仅仅是想找一些常见的、又知道大概名称的文件，不如试试 locate 命令。  
> locate 命令是将一些常用的目录作成一个索引库文件，一般叫做 `/var/lib/mlocate/mlocate.db`，后续再搜索文件的时候就是根据这个数据库中所包含的路径查找，速度会快很多 

> 第一次使用 locate 命令前，先执行 updatedb 命令来生成索引数据库，然后再进行查找

example：

```bash
updatedb
locate anaconda-ks.cfg
```

### whereis

whereis 用于按照名称快速搜索二进制程序（命令）、源代码以及帮助手册文件所对应的位置，语法格式：`whereis 命令名称`

example：

`whereis cd`

### which

which 用于按照名称快速搜索二进制程序（命令）所对应的位置，语法格式：`which 命令名称`

example：

`which cd`

### cat

cat 用于查看纯文本文件（内容较少的），语法格式：`cat [选项] 文件名称`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -n  |  显示行号  |
|  -b  |  显示行号，空白行不显示行号  |
|  -s  |  当遇到有连续两行或两行以上的空白行，就代换为一行的空白行  |
|  -e  |  在输出内容的每一行后面加一个 $ 符号。（包括空白行）  |

example：

`cat anaconda-ks.cfg`

### more

more 用于查看纯文本文件（内容较多的），语法格式：`more [选项] 文件名称`

|  选项  |  作用  |
|  :----:  |  :----  |
|  `+<number>`  |  从第 n 行开始显示  |
|  `-<number>`  |  定义屏幕大小为 n 行  |
|  `+/pattern`  |  在每个档案显示前搜寻该字串（pattern），然后从该字串前两行之后开始显示   |
|  `-c`  |  从顶部清屏，然后显示  |
|  `-d`  |  提示 “Press space to continue，’q’ to quit（按空格键继续，按 q 键退出）”，禁用响铃功能  |
|  `-l`  |  忽略 Ctrl+l（换页）字符  |
|  `-p`  |  通过清除窗口而不是滚屏来对文件进行换页，与 -c 选项相似  |
|  `-s`  |  把连续的多个空行显示为一行  |
|  `-u`  |  把文件内容中的下画线去掉  |

example：

`more anaconda-ks.cfg`

### head

head 用于查看纯文本文件的前 N 行，语法格式：`head [选项] 文件名称`

> 默认查看文本文件的前 10 行

|  选项  |  作用  |
|  :----:  |  :----  |
|  -n  |  指定前 N 行  |
|  -c  |  输出文件前面的 K 个字节  |

example：

`head -n 5 anaconda-ks.cfg`

### tail

tail 用于查看纯文本文件的后 N 行或持续刷新文件的最新内容，语法格式：`tail [选项] 文件名称`

> 默认查看文本文件的后 10 行

|  选项  |  作用  |
|  :----:  |  :----  |
|  -n  |  指定后 N 行  |
|  -c  |  输出文件最后的 K 个字节  |
|  -f  |  持续刷新文件内容  |

example：

`tail -n 5 anaconda-ks.cfg`

### tr

tr 用于替换文本内容中的字符，语法格式：`tr [原始字符] [目标字符]`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -d  |  删除指定字符串  |
|  -s  |  删除所有重复出现字符序列，只保留一个；即将重复出现字符串压缩为一个字符串  |

example：

```bash
cat anaconda-ks.cfg | tr [a-z] [A-Z]
tr -d '\n\t' anaconda-ks.cfg  # 删除空格和制表符
tr -s ' ' anaconda-ks.cfg  # 将多个空格保留一个
```

### wc

wc 用于统计指定文本文件的行数、字数或字节数，语法格式：`wc [选项] 文件名称`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -l  |  只显示行数  |
|  -w  |  只显示单词数  |
|  -c  |  只显示字节数  |

example：

```bash
wc anaconda-ks.cfg

  52  105 1247 anaconda-ks.cfg
```

### stat

stat 用于查看文件的具体存储细节和时间等信息，语法格式：`stat 文件名称`

example：

```bash
stat anaconda-ks.cfg

  File: anaconda-ks.cfg
  Size: 1247            Blocks: 8          IO Block: 4096   regular file
Device: fd00h/64768d    Inode: 201326724   Links: 1
Access: (0600/-rw-------)  Uid: (    0/    root)   Gid: (    0/    root)
Context: system_u:object_r:admin_home_t:s0
Access: 2022-09-26 10:43:41.301895665 +0800
Modify: 2022-09-19 18:37:33.175123857 +0800
Change: 2022-09-19 18:37:33.175123857 +0800
 Birth: 2022-09-19 18:37:33.073120718 +0800
```

### grep

grep 用于按行提取文本内容，语法格式：`grep [选项] 文件名称`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -b  |  将可执行文件（binary）当作文本文件（text）来搜索  |
|  -c  |  仅显示找到的行数  |
|  -i  |  忽略大小写  |
|  -n  |  显示行号  |
|  -v  |  取反  |
|  -E  |  扩展 grep  |

example：

```bash
grep "root" /etc/passwd

root:x:0:0:root:/root:/bin/bash
operator:x:11:0:operator:/root:/sbin/nologin
```

### cut

cut 用于案列提取文本内容，语法格式：`cut [选项] 文件名称`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -b  |  以字节为单位进行分割  |
|  -c  |  以字符为单位进行分割  |
|  -d  |  自定义分隔符，默认为制表符  |
|  -f  |  设置需要查看的列数  |

example：

```bash
cut -d : -f 1 /etc/passwd

root
bin
daemon
adm
lp
sync
shutdown
halt
mail
operator
......（省略部分内容）
```

### diff

diff 用于比较多个文件之间内容的差异，语法格式：`diff [选项] 文件名称A 文件名称B`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  diff 只会逐行比较文本文件  |
|  -b  |  不检查空格字符的不同  |
|  -c  |  描述文件内容具体的不同  |
|  -H  |  比较大文件时，可加快速度  |

diff 命令的显示结果有以下两种方式：

- `<`：表示第一个文件中的数据行。
- `>`：表示第二个文件中的数据行。

example：

```bash
diff -c A.txt B.txt

*** A.txt       2022-09-26 13:52:21.734094906 +0800
--- B.txt       2022-09-26 13:52:35.845517696 +0800
***************
*** 1,6 ****
  aaaa
! bbb
! ccc
! ddd
! eeee
! ffff
--- 1,6 ----
  aaaa
! bbbbbbb
! cccc
! d
! eee
! fffff
```

### uniq

uniq 用于去除文本中连续重复的行，语法格式：`uniq [选项] 文件名称`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -c, --count  |  打印每行出现的次数  |
|  -d, --repeated  |  只打印重复出现的行  |
|  -D  |  打印所有重复行  |
|  --all-repeated[=METHOD]  |  类似 -D，使用空行分隔每个组，METHOD=none,prepend,separate  |
|  -f, --skip-fields=N  |  不比较前 N 个字段  |
|  --group[=METHOD]  |  使用空行分隔每个组，METHOD=separate,prepend,append,both  |
|  -i, --ignore-case  |  忽略大小写  |
|  -s, --skip-chars=N  |  不比较前 N 个字符  |
|  -u, --unique  |  只打印出现一次的行  |
|  -z, --zero-terminated  |  行分隔符是 NUL 而不是换行符  |
|  -w, --check-chars=N  |  比较不多于 N 个字符  |
|  --help  |  帮助文档  |
|  --version  |  版本信息  |

example：

```bash
uniq B.txt

aaaa
bbbbbbb
cccc
d
eee
fffff
```

### sort

sort 用于对文本内容进行排序，默认为正序排序，语法格式：`sort [选项] 文件名称`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -f  |  忽略大小写  |
|  -b  |  忽略缩进与空格  |
|  -n  |  以数值型排序  |
|  -r  |  反向排序  |
|  -u  |  去除重复行  |
|  -t  |  指定间隔符  |
|  -k  |  设置字段范围  |

example：

```bash
sort -r C.txt

www
jjj
gg
ee
ddd
ccc
aaa
```

### split

split 用于将一个文件分割成数个，语法格式：`split [选项] 文件名`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  生成长度为 N 的后缀（默认值为 2）  |
|  --additional-suffix=SUFFIX  |  将附加后缀添加到分割后的文件名  |
|  -b  |  为每个输出文件输入 SIZE 字节  |
|  -C  |  每个输出文件最多放置行的大小字节  |
|  -d  |  使用从 0 开始的数字后缀，而不是字母后缀  |
|  --numeric-suffixes[=FROM]  |  与 -d 相同，但允许设置起始值  |
|  -x  |  使用从 0 开始的十六进制后缀，而不是字母后缀  |
|  --hex-suffixes[=FROM]  |  与 -x 相同，但允许设置起始值  |
|  -e  |  不会生成带有 “-n” 的空输出文件  |
|  --filter=COMMAND  |  写入 shel 命令；文件名为 $file  |
|  -l  |  指定分割每个文件的长度（默认为 1000 行）  |
|  -n  |  指定分割多少个文件  |
|  -u  |  使用 “-n r/…” 立即将输入复制到输出  |

example：

```bash
split -b 100M aaa.txt    # 将文件分割为 100M 大小的文件
split -l 10 aaa.txt    # 将文件分割为 10 行大小的文件
split -n 3 aaa.txt    # 将文件分割为 3 个文件
```

### touch

touch 用于创建空白文件或设置文件的时间，语法格式：`touch [选项] 文件名称`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  仅修改 “读取时间”（atime）  |
|  -m  |  仅修改 “修改时间”（mtime）  |
|  -d  |  同时修改 atime 和 mtime  |
|  -c  |  仅修改文件的时间，若该文件不存在则不建立新文件  |
|  -t  |  后面可以接想要修改的时间而不用目前时间，格式为[YYMMDDhhmm]  |

example：

`touch -d "2022-05-06" 15:21 anaconda-ks.cfg`

### mkdir

mkdir 用于创建目录，语法格式：`mkdir [选项] 目录名称`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -p  |  递归创建目录  |
|  -m  |  在创建目录的同时设定权限  |
|  -v  |  显示创建目录的过程信息  |
|  -Z  |  将每个创建的目录的 SELinux 安全环境设置为 CTX  |

example：

`mkdir aaa`

### chmod

chmod 用于修改文件属主、属组和其它用户访问权限，语法格式：`chmod [选项] 文件名`

> 读、写、执行的权限可以分别用：`4、2、1` 数字表示  
> 属主、属组、其它用户可以分别用：`u、g、o` 表示  
> 字母 `a` 包括属主、属组、其它用户

|  选项  |  作用  |
|  :----:  |  :----  |
|  -c  |  若该文件权限确实已经更改，才显示其更改动作  |
|  -f  |  若该文件权限无法被更改也不要显示错误信息  |
|  -v  |  显示权限变更的详细信息  |
|  -R  |  递归更改文件和目录  |

example：

`drwxr-xr-x. 110 root root 8192 Oct 10 14:50 etc`

- `d`：这个 “`d`” 表示这是一个目录文件（“`-`” 表示普通文件；“`l`” 表示链接文件；“`p`” 表示管道文件；“`b`” 表示块设备文件；“`c`” 表示字符设备文件）
- `rwx`：第一个 “`rwx`” 表示属主具有读、写、执行的权限
- `r-x`：第二个 “`r-x`” 表示属组具有读、执行的权限（读、写、执行，没有哪一个权限，就用 “`-`” 代替）
- `r-x`：第三个 “`r-x`” 表示其它用户具有读、执行的权限
- `.`：最后的 “`.`” 表示 SELinux 安全机制打开

```bash
chmod 754 aaa.txt    ### 第一个 7 表示属主具有读、写、执行权限，即 4+2+1=7；第二个 5 表示属组具有读、执行权限，即 4+1=5；第三个 4 表示其它用户具有读权限，即 4

chmod u-wx,g+w aaa.txt    ### u-wx 表示属主在原有的权限上，取消写、执行权限；g+w 表示属组在原有的权限上，添加写的权限

chmod a+x aaa.txt    ### a+x 表示属主、属组、其它用户在原有的权限上，都添加执行权限
```

> 以上几种修改权限方式都可以

#### 特殊权限

|  选项  |  作用  |
|  :----:  |  :----  |
|  u+s  |  设置 SUID 权限  |
|  u-s  |  取消 SUID 权限  |
|  g+s  |  设置 SGID 权限  |
|  g-s  |  取消 SGID 权限  |
|  o+t  |  设置 SBIT 权限  |
|  o-t  |  取消 SBIT 权限  |

- SUID：可以让执行者临时拥有文件属主的权限，如果原有文件有 `x` 执行权，赋予特殊权限后为 `rws`，如果原有文件没有 `x` 执行权，赋予特殊权限后为 `rwS`（例如：-`rws`r-xr-x.）
  - 执行者可以临时获得文件属主的身份，进行操作
- SGID：可以让执行者临时拥有文件属组的权限，如果原有文件有 `x` 执行权，赋予特殊权限后为 `rws`，如果原有文件没有 `x` 执行权，赋予特殊权限后为 `rwS`（例如：-rwx`r-s`r-x.）
  - 对普通文件设置时，让执行者临时拥有文件属组的权限；而对目录进行设置时，让目录内新创建的文件属组自动继承该目录原有的属组
- SBIT：可以确保用户只能删除自己的文件，不能删除其它用户的文件，如果原有文件有 `x` 执行权，赋予特殊权限后为 `rwt`，如果原有文件没有 `x` 执行权，赋予特殊权限后为 `rwT`（例如：-rwxr-x`r-t`.）
  - 当某个目录设置了 SBIT 权限后，该目录中的文件就只能被其属主用户删除，其它用户没有删除权限
- X：特殊执行权限，只有当文件为目录文件，或者其他类型的用户有可执行权限时，才将文件权限设置可执行

example：

`chmod u+s aaa.txt`

### chattr

chattr 用于设置文件的隐藏权限，语法格式：`chattr [选项] 文件名`

|  选项  |  作用  |
|  :----:  |  :----  |
|  i  |  无法对文件进行修改，若对目录设置该选项，则仅能修改其中的子文件内容而不能新建或删除文件  |
|  a  |  仅允许补充（追加）内容，无法覆盖/删除内容（Append Only）  |
|  S  |  文件内容在变更后立即同步到硬盘（sync）  |
|  s  |  彻底从硬盘中删除，不可恢复（用 0 填充原文件所在硬盘区域）  |
|  A  |  不再修改这个文件或目录的最后访问时间（atime）  |
|  b  |  不再修改文件或目录的存取时间  |
|  D  |  检查压缩文件中的错误  |
|  d  |  使用 dump 命令备份时忽略本文件/目录  |
|  c  |  默认将文件或目录进行压缩  |
|  U  |  当删除该文件后依然保留其在硬盘中的数据，方便日后恢复  |
|  t  |  让文件系统支持尾部合并（tail-merging）  |
|  x  |  可以直接访问压缩文件中的内容  |

example：

`chattr +i aaa.txt`

### lsattr

lsattr 用于查看文件的隐藏权限，语法格式：`lsattr [选项] 文件名`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -R  |  递归列出目录及其内容的属性  |
|  -V  |  显示程序版本  |
|  -a  |  列出目录中的所有文件，包括以 “.” 开头的文件  |
|  -d  |  列出目录，而不是列出其内容  |
|  -l  |  使用长名称而不是单字符缩写打印选项  |
|  -p  |  列出文件的项目编号  |
|  -v  |  列出文件的版本/生成编号  |

example：

`lsattr aaa.txt`

### setfacl

setfacl 用于管理文件的 ACL 权限规则，语法格式：`setfacl [选项] 文件名`

> 查看文件是否设置 ACL 权限，可以通过 `ls` 命令查看文件最后的 “`.`”，如果变成 “`+`” 号，则这个文件已经设置了 ACL 权限

|  选项  |  作用  |
|  :----:  |  :----  |
|  -m  |  修改权限  |
|  -M  |  从文件中读取权限  |
|  -x  |  删除某个权限  |
|  -b  |  删除全部权限  |
|  -R  |  递归子目录  |

example：

```bash
setfacl -Rm u:zhangsan:rwx /root    # 为某个用户设置访问 /root 权限
setfacl -Rm g:zhangsan:rwx /root    # 为某个组中的所有用户设置访问 /root 权限
```

### getfacl

getfacl 用于查看文件的 ACL 权限规则，语法格式：`getfacl [选项] 文件名`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -a  |  仅显示文件访问控制列表  |
|  -d  |  仅显示默认访问控制列表  |
|  -c  |  不显示注释标题  |
|  -e  |  打印所有有效权限  |
|  -E  |  打印无有效权限  |
|  -s  |  只包含基本项的跳过文件  |
|  -R  |  递归到子目录中  |
|  -L  |  逻辑行走，遵循符号链接  |
|  -P  |  物理行走，不遵循符号链接  |
|  -t  |  使用表格输出格式  |
|  -n  |  打印数字用户/组标识符  |
|  -p  |  不去除路径名中的前导 “/”  |

example：

```bash
getfacl -a aaa.txt    # 查看 /root ACL 权限
getfacl -R /root > root_backup.acl    # 将 /root 目录 ACL 权限进行备份
```

### cp

cp 用于本地复制文件或目录，语法格式：`cp [选项] 源文件 目标文件`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -p  |  保留原始文件的属性  |
|  -d  |  若对象为 “链接文件”，则保留该 “链接文件” 的属性  |
|  -r  |  递归复制目录  |
|  -i  |  若目标文件存在，则询问是否覆盖  |
|  -a  |  向当于 -pdr  |

example：

`cp anaconda-ks.cfg /opt/`

### scp

scp 用于跨主机传输数据，而且所有的数据都进行加密处理，语法格式：`scp [选项] 本地文件 远程账户@远程IP地址:远程目录 | scp [选项] 远程账户@远程IP地址:远程目录 本地文件`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -v  |  显示详细的连接进度  |
|  -P  |  指定远程主机的 sshd 端口号  |
|  -r  |  用于传送文件夹  |
|  -6  |  使用 IPv6 协议  |

example：

```bash
scp aaa.txt zhangsan@192.168.10.10:/home/zhangsan    # 将本地的 aaa.txt 文件传送到 192.168.10.10 主机的 zhangsan 用户的 /home/zhangsan 目录下
scp zhangsan@192.168.10.10:/home/zhangsan/bbb.txt ./    # 将 192.168.10.10 主机的 zhangsan 用户的 /home/zhangsan 目录下的 bbb.txt 文件，传送到本地的 ./ 当前目录下
```

### mv

mv 用于移动或重命名文件，语法格式：`mv [选项] 源文件 目标文件`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -b  |  当文件存在时，覆盖前，为其创建一个备份  |
|  -f  |  强制覆盖前不提示  |
|  -i  |  覆盖前的交互式提示  |
|  -n  |  无清除不覆盖现有文件  |
|  -S  |  为备份文件指定后缀，而不使用默认的后缀  |
|  -u  |  仅当 SOURCE 文件较新时更新移动目标文件  |

example：

`mv anaconda-ks.cfg /opt/`

### rm

rm 用于删除文件或目录，语法格式：`rm [选项] 文件名称`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -f  |  强制执行  |
|  -i  |  删除前询问  |
|  -r  |  删除目录  |
|  -v  |  显示过程  |

example：

`rm C.txt`

### dd

dd 用于按照指定大小的数据块个数来复制文件或转换文件，语法格式：`dd if=参数值 of=参数值 count=参数值 bs=参数值`

|  选项  |  作用  |
|  :----:  |  :----  |
|  if  |  输入的文件名称  |
|  of  |  输出的文件名称  |
|  bs  |  设置每个 “块” 的大小  |
|  count  |  设置要复制 “块” 的个数  |

example：

`dd if=/dev/zero of=560_file count=1 bs=560M`

### file

file 用于查看文件的类型，语法格式：`file 文件名称`

example：

`file anaconda-ks.cfg`

### tar

tar 用于对文件进行打包压缩或解压，语法格式：`tar [选项] 压缩名 文件名称`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -c  |  创建压缩文件  |
|  -x  |  解开压缩文件  |
|  -t  |  查看压缩包内的文件  |
|  -z  |  用 Gzip 压缩或解压  |
|  -j  |  用 bzip2 压缩或解压  |
|  -v  |  显示压缩或解压的过程  |
|  -f  |  目标文件名  |
|  -p  |  保留原始的权限与属性  |
|  -P  |  使用绝对路径来压缩  |
|  -C  |  指定解压到的目录  |
|  -r  |  指定的任意文件加入到归档文件中  |
|  --exclude  |  将匹配通配符模式的文件排除在归档过程之外  |

example：

`tar zcvf anaconda-ks.cfg.tar.gz anaconda-ks.cfg`

### zip

zip 用于对文件或目录进行压缩，语法格式：`zip [选项] 压缩名 文件名`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -d  |  删除 zip 文件中的条目  |
|  -m  |  移动到 zip 文件中（删除操作系统文件）  |
|  -r  |  递归到目录  |
|  -q  |  不显示过程  |
|  -v  |  详细信息  |
|  -c  |  添加一行注释  |
|  -z  |  添加 zip 文件注释  |
|  -x "文件列表"  |  排除 "文件列表" 中文件  |
|  -i "文件列表"  |  仅包括 "文件列表" 中文件  |
|  -F  |  修复 zip 文件（-FF 更努力）  |
|  -D  |  不添加目录项  |
|  -T  |  测试 zip 文件完整性  |
|  -e  |  加密  |
|  -压缩级别  |  -1 压缩更快 -9 次压缩更好  |

example：

```bash
zip -r etc.zip /etc    # 压缩 /etc 目录文件，压缩名为 etc.zip
zip -e etc.zip /etc    # 加密压缩，需要输入密码
```

### unzip

unzip 用于解压以 `.zip` 为后缀的压缩包文件，语法格式：`unzip [选项] 压缩包文件`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -d  |  删除 zip 文件中的条目  |
|  -l  |  查看压缩包文件  |
|  -t  |  测试压缩包是否正确  |
|  -z  |  仅显示压缩包注释  |
|  -v  |  详细信息  |
|  -x "文件列表"  |  解压时排除 "文件列表" 中文件  |
|  -d  |  将文件解压缩到指定目录中  |
|  -n  |  从不覆盖现有文件  |
|  -q  |  不显示过程  |
|  -o  |  在没有提示的情况下覆盖文件  |
|  -a  |  自动转换任何文本文件  |
|  -C  |  匹配文件名不区分大小写  |
|  -L  |  使（某些）名称小写  |

example：

```bash
unzip -d etc.zip /home/zhangsan/aaa/    # 将 etc.zip 解压缩到 aaa 目录下
unzip -l etc.zip    # 查看压缩文件里的内容
```

## Linux 系统用户命令

### id

id 用于显示用户详细信息，语法格式：`id 用户名`

example：

```bash
id root

uid=0(root) gid=0(root) groups=0(root)
```

### useradd

useradd 用于创建用户账户，语法格式：`useradd [选项] 用户名`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -d  |  指定用户家目录（默认为 /home/ 目录下）  |
|  -e  |  账户的到期时间，格式为：YYYY-MM-DD  |
|  -u  |  指定该用户的默认 UID  |
|  -g  |  指定一个初始的用户组（该组必须存在）  |
|  -G  |  指定一个或多个扩展用户组  |
|  -N  |  不创建与用户同名的基本用户组  |
|  -s  |  指定该用户的默认 Shell 解释器  |
|  -M  |  不创建用户家目录  |
|  -r  |  创建系统用户  |

example：

`useradd -M -s /sbin/nologin nginx`

### groupadd

groupadd 用于创建用户组，语法格式：`groupadd [选项] 用户组名`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -g  |  指定新建工作组的 id  |
|  -r  |  创建系统工作组，系统工作组的组 ID 小于 500  |
|  -K  |  覆盖配置文件 /etc/login.defs  |
|  -o  |  允许添加组 ID 号不唯一的工作组  |
|  -f  |  如果指定的组已经存在，此选项将失明了仅以成功状态退出。当与 -g 一起使用，并且指定的 GID_MIN 已经存在时，选择另一个唯一的 GID（即 -g 关闭）  |

example：

`groupadd nginx`

### usermod

usermod 用于修改用户的属性，语法格式：`usermod [选项] 用户名`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -c  |  填写用户账户的备注信息  |
|  -d -m  |  选项 -m 与 -d 连用，可重新指定用户的家目录并自动把旧的数据转移过去  |
|  -e  |  账户的到期时间，格式为 YYYY-MM-DD  |
|  -g  |  变更所属用户组  |
|  -G  |  变更扩展用户组  |
|  -L  |  锁定用户禁止其登录系统  |
|  -U  |  解锁用户，允许其登录系统  |
|  -u  |  修改用户的 UID  |
|  -s  |  变更默认终端  |

example：

`usermod -G root zhangsan`

### passwd

passwd 用于修改用户的密码、过期时间等信息，语法格式：`passwd [选项] 用户名`

|  选项  |  作用  |
|  :----:  |  :----  |
|  -l  |  锁定用户，禁止用户登录  |
|  -u  |  解除锁定，运行用户登录  |
|  -d  |  使该用户可用空密码登录系统  |
|  -e  |  强制用户在下次登录时修改密码  |
|  -S  |  显示用户的密码是否被锁定，以及密码所采用的加密算法名称  |
|  --stdin  |  允许通过标准输入修改密码  |

example：

```bash
passwd root

echo "root123" | passwd --stdin root
```

### userdel

userdel 用于删除已有的用户，语法格式：`userdel [选项] 用户名`

> 默认保留用户家目录

|  选项  |  作用  |
|  :----:  |  :----  |
|  -f  |  强制删除用户  |
|  -r  |  同时删除用户及用户家目录  |

example：

`userdel zhangsan`
