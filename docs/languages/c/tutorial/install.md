---
title: 安装
icon: install
date: 2024-02-22
category: Languages
tag:
    - C
---

## 本地环境设置

设置 C 语言环境，需要确保电脑上有 **文本编辑器** 和 **C 编译器** 两款可用的软件。

### 文本编辑器

文本编辑器用于输入您的程序。文本编辑器包括 Windows Notepad、OS Edit command、Brief、Epsilon、EMACS 、sublime、VSCode（推荐）和 vim/vi。

文本编辑器的名称和版本在不同的操作系统上可能会有所不同。例如：Notepad 通常用于 Windows 操作系统上，vim/vi 可用于 Windows 和 Linux/UNIX 操作系统上。

VSCode 拥有多平台支持，Windows，linux 和 mac 都可以找到对应的安装包。

通过编辑器创建的文件通常称为源文件，源文件包含程序源代码。C 程序的源文件通常使用 `.c` 为扩展名。

### C 编译器

写在源文件中的源代码是人类可读的。它需要 “编译”，转为机器语言，这样 CPU 才可以按给定指令执行程序。

C 语言编译器用于把源代码编译成最终的可执行程序。最常用的免费可用的编译器是 GNU 的 C/C++ 编译器，GNU 的 gcc 编译器适合于 C 和 C++ 编程语言。

## 安装环境

### Linux 系统安装

在 Debian 系统终端中输入：`sudo apt install gcc*` 命令安装。

在 RedHat 系统终端中输入：`sudo yum install gcc*` 命令安装。

执行 `gcc -v` 命令检查 gcc 是否安装成功。

### Mac OS 系统安装

在苹果官网上下载 [Xcode 开发环境](https://developer.apple.com/xcode/)，安装后就可以使用 GCC 编辑器了。

### Windows 系统安装

在 Windiows 中安装 GCC，需要安装 MinGW 工具，具体查看 [MinGW 工具安装](../README.md)。

## VS Code 环境配置

[VS Code 官网](https://code.visualstudio.com/) 下载。[VS Code 教程](../../../about/tools/vscode.md)

在 VS Code 中安装以下两个扩展插件：

- [C/C++ Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack)
- [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

安装后重启 VS Code 后就可以运行 C 脚本。

## Hello World 示例

### 写程序

下面是一个简单的 C 程序 `hello.c`，用于在屏幕上显示 “Hello World”。它就是一个普通的文本文件，任何文本编译器都能用来写。

```c
#include <stdio.h>

int main(void) {
    printf("Hello World\n");

    return 0;
}
```

### 编译并执行

::: tip
在 Windows 系统中生成的可执行文件后缀为 `.exe`，Linux 系统中生成的可执行文件后缀为 `.out`
:::

- **在 Windows 系统中的 cmd 终端编译并执行**

    在文件存放的目录中按 <kbd>Shift</kbd> + <kbd>鼠标右键</kbd>，点击 *在终端中打开。*
    
    在终端中输入以下命令进行编译：

    ```c
    gcc hello.c
    ```

    使用 gcc 编译器，将源文件 `hello.c` 编译成二进制文件。运行这个命令后，默认在当前目录下生成一个编译执行文件 `a.exe`（assembler executable 的缩写）。
    
    输入以下命令执行该文件，屏幕上会输出 “Hello World”。

    ```c
    .\a.exe
    ```

    GCC 的 `-o` 参数（output 的缩写）可以指定编译产物的文件名。

    ```c
    gcc -o hello hello.c
    ```

    `-o hello` 指定编译产物的文件名为 `hello`，默认后缀为 `.exe`。执行该文件也会输出 “Hello World”。

- **在 Linux 系统终端编译并执行**

    在命令行中输入以下命令进行编译：

    ```c
    gcc hello.c
    ```

    使用 gcc 编译器，将源文件 `hello.c` 编译成二进制文件。运行这个命令后，默认在当前目录下生成一个编译执行文件 `a.out`（assembler output 的缩写）。
    
    输入以下命令执行该文件，屏幕上会输出 “Hello World”。

    ```c
    ./a.out
    ```

    GCC 的 `-o` 参数（output 的缩写）可以指定编译产物的文件名。

    ```c
    gcc -o hello hello.c
    ```

    `-o hello` 指定编译产物的文件名为 `hello`，执行该文件也会输出 “Hello World”。

- **在 VS Code 中执行**

    打开 `hello.c` 文件，鼠标右键选择 *Run Code* 运行代码。在终端面板中输出以下内容：

    ```shell
    [Running] cd "e:\project-demo\c\hello-world\" && gcc hello.c -o hello && "e:\project-demo\c\hello-world\"hello
    Hello World
    
    [Done] exited with code=0 in 1.641 seconds
    ```

    终端也会输出 “Hello World”，在点击 *Run Code* 时，VS Code 执行以下三个命令：

    1. cd 到 `hello.c` 文件所在的目录
    2. 执行 `gcc hello.c -o hello` 命令。使用 gcc 编译 `hello.c` 文件并使用 `-o hello` 指定编译产物文件名为 `hello`，默认后缀为 `.exe`
    3. 执行编译后的 `hello` 文件，并在终端屏幕中输出 “Hello World”
