---
title: move
icon: command
date: 2024-07-15
category: 命令集
tag:
    - CMD
---

## 描述

`move` 用于将一个或多个文件从一个目录移动到另一个目录。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `/y`  |  停止确认是否要覆盖现有目标文件的提示  |
|  `-y`  |  启动确认是否要覆盖现有目标文件的提示  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

### 移动文件

例如：移动 `test01` 目录下的 `test02.txt` 文件到 `test02` 目录中。

```cmd
E:\test>move test01\test02.txt test02
移动了         1 个文件。

E:\test>
```

查看 `test02` 目录：

```cmd
E:\test>dir test02
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\test\test02 的目录

2024/07/15  17:23    <DIR>          .
2024/07/15  17:23    <DIR>          ..
2024/07/11  18:46                 0 test02.txt
               1 个文件              0 字节
               2 个目录 696,771,379,200 可用字节

E:\test>
```

例如：移动 `test02` 目录下的 `test02.txt` 文件到 `test01` 目录中，并修改文件名为 `test01.txt`。

```cmd
E:\test>move test02\test02.txt test01\test01.txt
移动了         1 个文件。

E:\test>
```

查看 `test01` 目录：

```cmd
E:\test>dir test01
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\test\test01 的目录

2024/07/15  17:25    <DIR>          .
2024/07/15  17:25    <DIR>          ..
2024/07/11  18:46                 0 test01.txt
               1 个文件              0 字节
               2 个目录 696,771,379,200 可用字节

E:\test>
```

### 移动目录

例如：移动当前目录下的 `test02` 目录到 `test01` 目录下。

```cmd
E:\test>move test02 test01
移动了　        1 个目录。

E:\test>
```

查看 `test01` 目录：

```cmd
E:\test>dir test01
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\test\test01 的目录

2024/07/15  17:26    <DIR>          .
2024/07/15  17:26    <DIR>          ..
2024/07/11  18:46                 0 test01.txt
2024/07/15  17:25    <DIR>          test02
               1 个文件              0 字节
               3 个目录 696,771,379,200 可用字节

E:\test>
```
