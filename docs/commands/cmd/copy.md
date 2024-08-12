---
title: copy
icon: command
date: 2024-07-15
category: 命令集
tag:
    - CMD
---

## 描述

`copy` 用于将一个或多个文件从一个位置复制到另一个位置。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `/b`  |  指示二进制文件  |
|  `/v`  |  验证是否已正确写入新文件  |
|  `/y`  |  禁止提示您确认覆盖现有目标文件  |
|  `/-y`  |  提示您确认覆盖现有目标文件  |
|  `/z`  |  如果在复制阶段断开连接（如：服务器脱机），可在重新建立连接后使用 `copy /z` 恢复；`/z` 还会显示百分比  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

### 复制文件

例如：将 `test01` 目录下的 `test01.txt` 文件复制到 `test02` 目录中。

```cmd
E:\test>copy test01\test01.txt test02
已复制         1 个文件。

E:\test>
```

### 显示百分比

例如：将 `test01` 目录下的 `test01.txt` 文件复制到 `test02` 目录中，并显示百分比。

```cmd
E:\test>copy /z test01\test01.txt test04
100% 已复制 已复制         1 个文件。

E:\test>
```