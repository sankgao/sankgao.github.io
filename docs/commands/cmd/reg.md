---
title: reg
icon: command
date: 2024-07-23
category: 命令集
tag:
    - CMD
---

## 描述

`reg` 用于对注册表项中的注册表子项信息和值执行操作。

某些操作使您能够查看或配置本地或远程计算机上的注册表项，而其他操作则允许您仅配置本地计算机。使用 `reg` 配置远程计算机的注册表会限制在某些操作中可以使用的参数。检查每个操作的语法和参数，以验证它们是否可以在远程计算机上使用。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `/?`  |  在命令提示符下显示帮助  |

## 命令

|  命令  |  描述  |
|  :----:  |  :----  |
|  `reg add`  |  将新的子项或项添加到注册表中  |
|  `reg compare`  |  比较指定的注册表子项或项  |
|  `reg copy`  |  将注册表项复制到本地或远程计算机上的指定位置  |
|  `reg delete`  |  从注册表中删除子项或条目  |
|  `reg export`  |  将本地计算机的指定子项、项和值复制到文件，以便传输到其他服务器  |
|  `reg import`  |  将包含导出的注册表子项、条目和值的文件内容复制到本地计算机的注册表中  |
|  `reg load`  |  将保存的子项和项写入注册表中的不同子项  |
|  `reg query`  |  返回位于注册表中指定子项下的下一层子项和条目的列表  |
|  `reg restore`  |  将保存的子项和项写回到注册表  |
|  `reg save`  |  将注册表的指定子项、项和值的副本保存在指定的文件中  |
|  `reg unload`  |  删除使用 `reg load` 操作加载的注册表部分  |

## 示例

例如：要在远程计算机 ABC 上添加 `HKLM\Software\MyCo` 项。

```cmd
C:\Users\user>reg add \\ABC\HKLM\Software\MyCo
```

例如：要将名为 `DATA` 的值、类型为 `REG_BINARY` 且数据为 `fe340ead` 的注册表项添加到 `HKLM\Software\MyCo`。

```cmd
C:\Users\user>reg add HKLM\Software\MyCo /v Data /t REG_BINARY /d fe340ead
```

例如：要显示 `HKLM\Software\Microsoft\ResKit` 中名称值 `Version` 的值。

```cmd
C:\Users\user>reg query HKLM\Software\Microsoft\ResKit /v Version
```

例如：将配置单元 ``MyApp`` 以名为 `AppBkUp.hiv` 的文件保存到当前文件夹中。

```cmd
C:\Users\user>reg save HKLM\Software\MyCo\MyApp AppBkUp.hiv
```
