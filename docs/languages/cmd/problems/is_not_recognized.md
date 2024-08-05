---
title: is not recognized
icon: problem
date: 2024-08-02
category: 
    - 编程语言
    - 问题
tag:
    - CMD
---

## 问题

```cmd
@echo off
rem 输出连续多行不包含中文字符。
echo Hello World! 01
echo Hello World! 02

rem 输出连续多行包含中文字符。第一行以中文字符结尾，其它几行不以中文字符结尾。
echo 你好，世界！ 01
echo 你好，世界！ 02

rem 输出连续多行包含中文字符，且都以中文字符结尾。
echo 你好，世界！
echo 你好，世界！
```

执行上面 CMD 脚本后，**报错日志如下：**

```cmd
E:\batch>test.cmd
Hello World! 01
Hello World! 02
'��世界！' is not recognized as an internal or external command,
operable program or batch file.
你好，世界！ 02
'��世界！' is not recognized as an internal or external command,
operable program or batch file.
'��世界！' is not recognized as an internal or external command,
operable program or batch file.

E:\batch>
```

`is not recognized as an internal or external command, operable program or batch file.` 这是在代码编码为 `65001`（UTF-8）时显示的提示输出；代码编码为 `936`（简体中文）时显示的提示输出为 `不是内部或外部命令，也不是可运行的程序或批处理文件。`

## 原因

- 当有连续多行包含中文字符，且都以中文字符结尾，除了最后一行外，其它几行不能以中文字符结尾
- 当有连续多行包含中文字符，第一行以中文字符结尾，其它几行不以中文字符结尾时，第一行不能以中文字符结尾

## 解决方法

### 解决方法 1

在中文字符结尾添加至少一个空格或其它非中文字符。

```cmd
rem 输出连续多行包含中文字符。第一行以中文字符结尾，其它几行不以中文字符结尾。 
echo 你好，世界！ 01
echo 你好，世界！ 02

rem 输出连续多行包含中文字符，且都以中文字符结尾。 
echo 你好，世界！ 
echo 你好，世界！
```

### 解决方法 2

在命令中间添加空行。

```cmd
rem 输出连续多行包含中文字符。第一行以中文字符结尾，其它几行不以中文字符结尾。

echo 你好，世界！ 01
echo 你好，世界！ 02

rem 输出连续多行包含中文字符，且都以中文字符结尾。

echo 你好，世界！

echo 你好，世界！
```

### 解决方法 3

为中文字符添加双引号（`"`），但这种方法在输出时也会将引号输出显示。

```cmd
rem "输出连续多行包含中文字符。第一行以中文字符结尾，其它几行不以中文字符结尾。"
echo 你好，世界！ 01
echo 你好，世界！ 02

rem "输出连续多行包含中文字符，且都以中文字符结尾。"
echo "你好，世界！"
echo "你好，世界！"
```
