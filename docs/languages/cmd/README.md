---
title: CMD
icon: command
date: 2024-07-11
dir:
    order: 1
    link: true
category: 编程语言
tag:
    - CMD
---

记录一些 CMD 相关的信息。

<!-- more -->

Windows 操作系统提供了两种主要的命令行界面：**命令 Shell** 和 **PowerShell**。这两种命令行工具都是软件程序，它们在用户与操作系统或应用程序之间提供直接通信，从而为用户提供自动化 IT 操作的环境。

- **命令 Shell**：是 Windows 系统中较为传统的命令行界面，也称为 **命令提示符**，命令行程序为 `cmd.exe`，是一个 32 位的命令行程序，cmd 是 `command` 的缩写。它提供了基本的命令行功能，使用户能够通过输入命令来执行各种操作，使用批处理（`batch`）文件自动执行日常任务
- **PowerShell**：是 Windows 系统中的一个更强大的命令行工具，它提供了比传统命令行更多的功能和更丰富的脚本支持。PowerShell 具有更强大的功能，可以配置更多的参数，使得它成为执行复杂任务和自动化脚本的理想选择

这两个命令行工具都是 Windows 系统内置的，用户可以根据需要选择使用哪一个。PowerShell 通常被认为是更现代、更强大的工具，适合需要执行高级任务的用户，而命令 Shell 则更适合那些只需要执行基本命令的用户。可以在 PowerShell 中运行 cmd 命令，但在 cmd 中不能运行 PowerShell 命令。

批处理文件用 `.bat` 或 `.cmd` 为后缀名，`.bat` 是老版本的后缀，`.cmd` 是新版本的后缀。

## 相关文档

- [CMD 官网](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands)
- [CMD 教程](https://steve-jansen.github.io/guides/windows-batch-scripting/index.html)
