---
title: 安装
icon: install
date: 2024-02-22
category: Languages
tag:
    - C
---

## 本地环境设置

如果您想要设置 C 语言环境，您需要确保电脑上有以下两款可用的软件，文本编辑器和 C 编译器。

### 文本编辑器

这将用于输入您的程序。文本编辑器包括 Windows Notepad、OS Edit command、Brief、Epsilon、EMACS 、sublime、VSCode（推荐）和 vim/vi。

文本编辑器的名称和版本在不同的操作系统上可能会有所不同。例如，Notepad 通常用于 Windows 操作系统上，vim/vi 可用于 Windows 和 Linux/UNIX 操作系统上。

VSCode 拥有多平台支持，Windows，linux 和 mac 都可以找到对应的安装包。

通过编辑器创建的文件通常称为源文件，源文件包含程序源代码。C 程序的源文件通常使用扩展名 `.c。`

在开始编程之前，请确保您有一个文本编辑器，且有足够的经验来编写一个计算机程序，然后把它保存在一个文件中，编译并执行它。

### C 编译器

写在源文件中的源代码是人类可读的。它需要 “编译”，转为机器语言，这样 CPU 才可以按给定指令执行程序。

C 语言编译器用于把源代码编译成最终的可执行程序。最常用的免费可用的编译器是 GNU 的 C/C++ 编译器，GNU 的 gcc 编译器适合于 C 和 C++ 编程语言。

## 安装环境

### Linux 系统安装

在 Debian 系统终端中输入：`sudo apt install gcc*` 命令安装

在 RedHat 系统终端中输入：`sudo yum install gcc*` 命令安装

### Mac OS 系统安装

在苹果官网上下载 [Xcode 开发环境](https://developer.apple.com/xcode/)，安装后就可以使用 GCC 编辑器了。

### Windows 系统安装

在 Windiows 中安装 GCC，需要安装 MinGW 工具，具体查看 [MinGW 工具安装](../README.md)。

## VS Code 环境配置

下载：[VS Code](../../../about/tools/vscode.md)

在 VS Code 中安装 [C/C++ Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack) 扩展程序，此扩展程序包含以下一组扩展：

- [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
- [C/C++ Themes](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-themes)
- [CMake](https://marketplace.visualstudio.com/items?itemName=twxs.cmake)
- [CMake Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools)

安装后重启 VS Code 后就可以运行 C 脚本。
