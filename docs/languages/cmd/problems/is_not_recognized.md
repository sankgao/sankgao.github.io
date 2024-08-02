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
echo 03 你好，世界！
echo 04 你好，世界！
```

```cmd
@echo off

rem 输出多行非中文字符

echo test 01
echo test 02


rem 输出单行中文字符，并以中文符号结尾

echo 文件存在。
set /p input=请选择：


rem 输出多行中文字符

echo 这是第一行
echo 这是第二行
```

执行上面 CMD 脚本后，**报错日志如下：**

```cmd
E:\batch>test.cmd
test 01
test 02
文件存在。
'nput' is not recognized as an internal or external command,
operable program or batch file.
这是第一行
'�第二行' is not recognized as an internal or external command,
operable program or batch file.

E:\batch>
```

`is not recognized as an internal or external command, operable program or batch file.` 这是在代码编码为 `65001`（UTF-8）时显示的提示输出；代码编码为 `936`（简体中文）时显示的提示输出为 `不是内部或外部命令，也不是可运行的程序或批处理文件。`

## 原因

- 当有连续多行包含中文字符，且都以中文字符结尾，除了最后一行外，其它几行不能以中文字符结尾
- 当有连续多行包含中文字符，第一行以中文字符结尾，其它几行不以中文字符结尾时，第一行不能以中文字符结尾

## 解决方法

### 解决方法 1

在中文字符结尾添加至少一个空格或其它非中文字符。**注意**：除了最后一行外，其它几行后面都有一个空格。

```cmd
rem 输出连续多行包含中文字符，且都以中文字符结尾。 
echo 03 你好，世界！ 
echo 04 你好，世界！
```

### 解决方法 2

在多行命令中间添加空行。

```cmd
rem 输出连续多行包含中文字符，且都以中文字符结尾。

echo 03 你好，世界！

echo 04 你好，世界！
```

### 解决方法 3

为中文字符添加双引号（`"`），但这种方法在输出时也会将引号输出显示。

```cmd
rem "输出连续多行包含中文字符，且都以中文字符结尾。"
echo "03 你好，世界！"
echo "04 你好，世界！"
```
