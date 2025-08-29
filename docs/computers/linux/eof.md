---
title: EOF（Here Document，此处文档）用法对比
icon: banner
date: 2025-08-27
category: Computer
tag:
    - Linux
---

`cat > test.txt <<"EOF"`、`cat <<EOF > test.txt`、`cat > test.txt <<-EOF` 区别。

## 核心概念 Here Document

这三个命令都使用了 Here Document（此处文档）语法，它允许在脚本中直接嵌入一段文本，并将其作为标准输入传递给一个命令。`EOF`（End Of File，或任何你指定的词）是这段文本的开始和结束标记。

`<<` 是 Here Document 的关键操作符。

## cat > test.txt << "EOF"

分解：

- `cat > test.txt`：将 cat 命令的输出重定向到 test.txt 文件（覆盖写入）
- `<< "EOF"`：使用带引号的 Here Document

关键特性：

- 引号的作用：禁用文本内容中的变量替换和命令替换
- 文本中的所有 `$变量`、`$(命令)` 等都会被当作普通文字处理

示例：

```shell
name="World"
cat > test.txt << "EOF"
Hello, $name!
Today is $(date).
User is $USER
EOF
```

test.txt 内容：

```text
Hello, $name!
Today is $(date).
User is $USER
```

所有特殊字符都原样保留，没有被替换。

## cat << EOF > test.txt

分解：

- `cat << EOF`：使用不带引号的 Here Document
- `> test.txt`：将输出重定向到 test.txt 文件

关键特性：

- 启用变量和命令替换
- 文本中的 `$变量`、`$(命令)` 会被 Shell 解析和替换

示例：

```shell
name="World"
cat << EOF > test.txt
Hello, $name!
Today is $(date).
User is $USER
EOF
```

test.txt 内容：

```text
Hello, World!
Today is Wed Aug 27 10:30:45 CST 2025.
User is root
```

所有变量和命令都被替换为实际值。

## cat > test.txt <<- EOF

分解：

- `cat > test.txt`：输出重定向到文件
- `<<- EOF`：使用带短横线的 Here Document

关键特性：

- `<<-` 的作用：忽略 Here Document 内容中每行开头的制表符（Tab）
- 变量替换仍然启用（因为标记没有加引号）
- 允许在脚本中为了代码美观而缩进，但不会将缩进字符写入文件
- 标记 `EOF` 本身前面的制表符也会被 `<<-` 忽略

示例：

```shell
name="World"
cat > test.txt <<- EOF
	Hello, $name!
	Today is $(date).
	User is $USER
EOF
```

test.txt 内容：

```text
Hello, World!
Today is Wed Aug 27 10:30:45 CST 2025.
User is root
```

行首的制表符被移除，但变量仍然被替换。

## 对比总结

|  特性  |  `cat > test.txt << "EOF"`  |  `cat << EOF > test.txt`  |  `cat > test.txt <<- EOF`  |
|  :----  |  :----  |  :----  |  :----  |
|  变量替换  |  ❌ 禁用（原样输出）  |  ✅ 启用（动态替换）  |  ✅ 启用（动态替换）  |
|  忽略制表符  |  ❌ 不忽略  |  ❌ 不忽略  |  ✅ 忽略行首制表符  |
|  语法顺序  |  先指定输出文件  |  后指定输出文件  |  先指定输出文件  |
|  主要用途  |  写入模板、保留特殊字符  |  生成动态配置文件  |  美化脚本缩进+动态内容  |

## 重要注意事项

1. `<<-` 只忽略制表符（Tab），不忽略空格。
2. 标记 `EOF` 本身前面的制表符也会被 `<<-` 忽略。
3. 功能上，`cat > file << EOF` 和 `cat << EOF > file` 完全等价，只是个人编码风格偏好。
4. 选择哪种方式取决于你的需求：
    - 需要原样保留文本？用 `<<"EOF"`
    - 需要变量替换？用 `<<EOF` 或 `<<-EOF`
    - 需要美化脚本缩进？用 `<<-EOF`

## <<-EOF 和 <<- EOF

- `<<-EOF` 和 `<<- EOF` 在功能上完全没有区别，两者是等价的
- `<<-` 是一个整体的操作符，后面的空格被视为分隔符，而不是操作符的一部分