---
title: 硬件资源管理
icon: hardware
date: 2023-04-12
category: Computer
tag:
    - Linux
---

## 查看系统 PCI 设备

`lspci` 用于列出所有的 PCI 设备，比如主板、声卡、显卡和网卡等，也会把 USB 接口设备显示出来。语法格式：`lspci [参数]`

基本显示模式：

|  参数  |  作用  |
|  :----:  |  :----  |
|  `-mm`  |  生成机器可读输出（单个 `-m` 表示过时的格式）  |
|  `-t` |  显示总线树  |

显示选项：

|  参数  |  作用  |
|  :----:  |  :----  |
|  `-v`  |  冗余（-vv 或 -vvv 用于更高的冗余度）  |
|  `-k`  |  显示处理每个设备的内核驱动程序  |
|  `-x`  |  显示配置空间标准部分的十六进制转储  |
|  `-xxx` |  显示整个配置空间的十六进制转储（危险；仅限 root）  |
|  `-xxxx`  |  显示 4096 字节扩展配置空间的十六进制转储（仅限 root）  |
|  `-b`  |  总线中心视图（总线看到的地址和 IRQ）  |
|  `-D`  |  始终显示域名  |
|  `-P`  |  除显示总线和设备编号外，还显示网桥路径  |
|  `-PP`  |  除显示总线和设备编号外，还显示总线路径  |

将设备 ID 解析为名称：

|  参数  |  作用  |
|  :----:  |  :----  |
|  `-n`  |  显示数字 ID  |
|  `-nn`  |  显示文本和数字 ID（名称和数字）  |
|  `-q`  |  通过 DNS 查询 PCI ID 数据库中的未知 ID  |
|  `-qq`  |  同上，但重新查询本地缓存的条目  |
|  `-Q`  |  通过 DNS 查询 PCI ID 数据库中的所有 ID  |

设备选择：

|  参数  |  作用  |
|  :----:  |  :----  |
|  `-s[[[[<domain>]：]<bus>]：][<slot>][.[<func>]]`  |  仅显示选定插槽中的设备  |
|  `-d[<vendor>]：[<device>][：<class>]`  |  仅显示具有指定 ID 的设备  |

其他选项：

|  参数  |  作用  |
|  :----:  |  :----  |
|  `-i<file>`  |  使用指定的 ID 数据库，而不是 `/usr/share/hwdata/pci.ids`  |
|  `-p<file>`  |  在给定文件中查找内核模块，而不是默认 `mode.pcimap`  |
|  `-M`  |  启用 “总线映射” 模式（危险；仅限 root）  |

PCI 访问选项：

|  参数  |  作用  |
|  :----:  |  :----  |
|  `-A<method>`  |  使用指定的 PCI 访问方法（有关列表，请参见 `-A help`）  |
|  `-O<par>=<val>`  |  设置 PCI 访问参数（有关列表，请参见 `-O help`）  |
|  `-G`  |  启用 PCI 访问调试  |
|  `-H<mode>`  |  使用直接硬件访问（`<mode>=1` 或 2）  |
|  `-F<file>`  |  从给定文件读取 PCI 配置转储  |

example：

```bash
lspci

00:00.0 Host bridge: Intel Corporation 440BX/ZX/DX - 82443BX/ZX/DX Host bridge (rev 01)  # 集成主板设备的类型
00:01.0 PCI bridge: Intel Corporation 440BX/ZX/DX - 82443BX/ZX/DX AGP bridge (rev 01)
00:07.0 ISA bridge: Intel Corporation 82371AB/EB/MB PIIX4 ISA (rev 08)
00:07.1 IDE interface: Intel Corporation 82371AB/EB/MB PIIX4 IDE (rev 01)
00:07.3 Bridge: Intel Corporation 82371AB/EB/MB PIIX4 ACPI (rev 08)
00:07.7 System peripheral: VMware Virtual Machine Communication Interface (rev 10)
00:0f.0 VGA compatible controller: VMware SVGA II Adapter  # VGA 显卡设备
00:1b.0 Class 0403: Intel Corporation 82801G (ICH7 Family) High Definition Audio Controller (rev 01)  # Intel 声卡设备
00:10.0 SCSI storage controller: LSI Logic / Symbios Logic 53c1030 PCI-X Fusion-MPT Dual Ultra320 SCSI (rev 01)
00:11.0 PCI bridge: VMware PCI bridge (rev 02)
00:15.0 PCI bridge: VMware PCI Express Root Port (rev 01)
00:15.1 PCI bridge: VMware PCI Express Root Port (rev 01)
......省略部分内容
02:00.0 USB controller: VMware USB1.1 UHCI Controller  # USB 接口设备
02:01.0 USB controller: VMware USB2 EHCI Controller
02:02.0 SATA controller: VMware SATA AHCI controller  # SATA 控制器，表明系统是 SATA 系列硬盘
03:00.0 Ethernet controller: VMware VMXNET3 Ethernet Controller (rev 01)  # 百兆网卡设备
```

## 查看 CPU 信息

:::tip
在 `siblings` 和 `cpu cores` 值之间有个对应关系，如果 `siblings` 是 `cpu cores` 的两倍，则说明系统支持超线程，并且超线程已打开；如果 `siblings` 和 `cpu cores` 一致，则说明系统不支持超线程，或者超线程未打开
:::

```bash
cat /proc/cpuinfo

processor       : 0  # 逻辑处理器的唯一标识符
vendor_id       : GenuineIntel  # 处理器类型
cpu family      : 6
model           : 85
model name      : Intel(R) Xeon(R) Silver 4214R CPU @ 2.40GHz  # cpu 的名称，型号，主频
stepping        : 7  # 位于相同物理封装中的逻辑处理器的数量
microcode       : 0x5003302
cpu MHz         : 2394.374
cache size      : 16896 KB
physical id     : 0  # 物理封装的唯一标识符
siblings        : 2  # 单 cpu 的逻辑核数
core id         : 0  # 每个内核的唯一标识符
cpu cores       : 2  # 位于相同物理封装中的内核数量
apicid          : 0
initial apicid  : 0
fpu             : yes
fpu_exception   : yes
cpuid level     : 22
wp              : yes
flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss ht syscall nx pdpe1gb rdtscp lm constant_tsc arch_perfmon nopl xtopology tsc_reliable nonstop_tsc cpuid pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch invpcid_single ssbd ibrs ibpb stibp ibrs_enhanced fsgsbase tsc_adjust bmi1 avx2 smep bmi2 invpcid avx512f avx512dq rdseed adx smap clflushopt clwb avx512cd avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves arat pku ospke avx512_vnni md_clear flush_l1d arch_capabilities
bugs            : spectre_v1 spectre_v2 spec_store_bypass
bogomips        : 4788.74
clflush size    : 64
cache_alignment : 64
address sizes   : 45 bits physical, 48 bits virtual
power management:
```

### 查看物理 CPU 的个数

```bash
cat /proc/cpuinfo | grep "physical id" | uniq | wc -l
```

### 查看每个物理 CPU 中内核的个数

```bash
cat /proc/cpuinfo | grep "cpu cores" | uniq
```

### 查看系统所有逻辑 CPU 个数

所有物理 CPU 中内核的个数加上超线程个数

```bash
cat /proc/cpuinfo | grep "processor" | wc -l
```

## 查看系统内存信息

```bash
cat /proc/meminfo

MemTotal:       24656144 kB  # 系统的物理内存
MemFree:        20415000 kB  # 物理内存
MemAvailable:   23038032 kB
Buffers:          194668 kB  # 缓冲区
Cached:          2575064 kB  # 缓存
SwapCached:            0 kB
Active:          1785688 kB
Inactive:        1789328 kB
Active(anon):     795436 kB
Inactive(anon):    18024 kB
Active(file):     990252 kB
Inactive(file):  1771304 kB
......省略部分内容
```

## 查看磁盘分区信息

```bash
fdisk -l

Disk /dev/nvme0n1: 100 GiB, 107374182400 bytes, 209715200 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xfa430a69

Device         Boot   Start       End   Sectors Size Id Type
/dev/nvme0n1p1 *       2048   2099199   2097152   1G 83 Linux
/dev/nvme0n1p2      2099200 209715199 207616000  99G 8e Linux LVM

Disk /dev/mapper/cs-root: 65.2 GiB, 69960990720 bytes, 136642560 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

Disk /dev/mapper/cs-swap: 2 GiB, 2176843776 bytes, 4251648 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

Disk /dev/mapper/cs-home: 31.8 GiB, 34158411776 bytes, 66715648 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```
