---
title: shutdown
icon: command
date: 2024-07-16
category: 命令集
tag:
    - CMD
---

## 描述

`shutdown` 用于让您一次关闭或重启一台本地或远程计算机。

## 选项

|  选项  |  描述  |
|  :----:  |  :----  |
|  `/a`  |  中止系统关机，只能在超时期间使用  |
|  `/l`  |  立即注销当前用户  |
|  `/r`  |  默认一分钟后重启计算机  |
|  `/p`  |  立即关闭本地计算机，没有超时或警告  |
|  `/s`  |  默认一分钟后关闭计算机  |
|  `/t <num>`  |  将关机之前的超时期限设置为 `xxx` 秒  |
|  `/s`  |  关闭计算机  |
|  `/s`  |  关闭计算机  |
|  `/?`  |  在命令提示符下显示帮助  |

## 示例

### 关机

例如：默认一分钟后关机。

```cmd
C:\Users\user>shutdown /s

C:\Users\user>
```

例如：立即关闭本地计算机，没有超时或警告。

```cmd
C:\Users\user>shutdown /p
```

或

```cmd
C:\Users\user>shutdown /s /t 0
```

![关机](./assets/shutdown01.jpg)

### 终止关机

例如：终止之前的关机任务。

```cmd
C:\Users\user>shutdown /a

C:\Users\user>
```

![终止关机](./assets/shutdown02.jpg)
