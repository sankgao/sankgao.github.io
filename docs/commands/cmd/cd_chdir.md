---
title: cd 或 chdir
icon: command
date: 2024-07-12
category: 命令集
tag:
    - CMD
---

## 描述

`cd` 或 `chdir` 用于显示当前目录的名称或更改当前目录。如果仅与磁盘号一起使用（例如：`cd C:`），cd 将显示指定磁盘中当前目录的名称。如果使用时不带参数，cd 将显示当前磁盘和目录。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `/d`  |  切换当前磁盘以及磁盘的当前目录  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

### 只显示当前磁盘和目录

例如：显示当前磁盘和目录。

```cmd
C:\Users\user>cd
C:\Users\user

C:\Users\user>
```

### 切换磁盘

例如：从 C 盘切换到 E 盘。

```cmd
C:\Users\user>e:

E:\>
```

或使用 `cd` 命令 `/d` 参数：

```cmd
C:\Users\user>cd /d E:\

E:\>
```

### 显示指定磁盘中当前目录的名称

例如：显示 C 磁盘中当前目录的名称。

```cmd
E:\>cd c:
C:\Users\user

E:\>
```

### 切换到指定目录

例如：切换到 `E:\test\test 03` 目录中。

```cmd
E:\>cd "test\test 03"

E:\test\test 03>
```

Windows 系统不会将空格视为分隔符，因此路径中可以包含不带引号的空格。例如：`cd test\test 03`。

```cmd
E:\>cd test\test 03

E:\test\test 03>
```

例如：切换到上一级目录。

```cmd
E:\test\test 03>cd ..

E:\test>
```

例如：切换到磁盘的根目录。

```cmd
E:\test>cd \

E:\>
```
