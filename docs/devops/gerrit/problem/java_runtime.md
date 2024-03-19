---
title: Java 不识别类文件版本
icon: problem
date: 2024-03-19
category: 
    - DevOpos
    - 问题
tag:
    - Gerrit
---

## 问题

`Java Runtime` 识别的类文件版本为 `61.0`，但当前 Java 版本只识别的类文件版本为 `52.0`。

**报错日志如下：**

```bash
Exception in thread "main" java.lang.UnsupportedClassVersionError: Main : 
Unsupported major.minor version 61.0
```

```bash
Error: A JNI error has occurred, please check your installation and try again
Exception in thread "main" java.lang.UnsupportedClassVersionError: 
Main has been compiled by a more recent version of the Java Runtime (class file version 61.0), 
this version of the Java Runtime only recognizes class file versions up to 52.0
```

```bash
Error: LinkageError occurred while loading main class Main
        java.lang.UnsupportedClassVersionError: Main has been compiled by a more recent 
        version of the Java Runtime (class file version 61.0), this version of the 
        Java Runtime only recognizes class file versions up to 52.0
```

## 原因

当前 Java 版本的 `Java Runtime` 只识别 `52.0` 以下的类文件版本，而执行的程序需要识别 `61.0` 版本的类文件。

## 解决方法

### 解决方法 1

将 Java 版本提升到可识别当前类文件版本即可。

`Java 17` 版本的 `Java Runtime` 识别 `61.0` 版本的类文件。

查看当前 Java 版本：

```bash
java -version

# 输出内容
openjdk version "1.8.0_312"
OpenJDK Runtime Environment (build 1.8.0_312-b07)
OpenJDK 64-Bit Server VM (build 25.312-b07, mixed mode)

javac -version

# 输出内容
javac 1.8.0_312
```

卸载当前 Java 8 版本：

```bash
yum -y remove java-1.8.0-openjdk*
```

安装 Java 17 版本：

```bash
yum -y install java-11-openjdk-devel.x86_64
```

### 解决方法 2

降低执行程序版本为支持当前系统的 Java 版本即可。

## Java 版本对应的特定 Java 类文件版本号

在 Java 中，每个 Java 源文件都会被编译成字节码文件（`.class`）。这些字节码文件包含了与 Java 语言相关的信息，其中之一就是所使用的 Java 版本对应的特定 Java 类文件版本号。

以下是常见的 Java 版本及其对应的特定 Java 类文件版本号：

- Java 1.1 对应的类文件版本号为 `45.3`
- Java 1.2 对应的类文件版本号为 `46.0`
- Java 1.3 对应的类文件版本号为 `47.0`
- Java 1.4 对应的类文件版本号为 `48.0`
- Java 5 对应的类文件版本号为 `49.0`
- Java 6 对应的类文件版本号为 `50.0`
- Java 7 对应的类文件版本号为 `51.0`
- Java 8 对应的类文件版本号为 `52.0`
- Java 9 对应的类文件版本号为 `53.0`
- Java 10 对应的类文件版本号为 `54.0`
- Java 11 对应的类文件版本号为 `55.0`
- Java 12 对应的类文件版本号为 `56.0`
- Java 13 对应的类文件版本号为 `57.0`
- Java 14 对应的类文件版本号为 `58.0`
- Java 15 对应的类文件版本号为 `59.0`
- Java 16 对应的类文件版本号为 `60.0`
- Java 17 对应的类文件版本号为 `61.0`
- Java 18 对应的类文件版本号为 `62.0`
- Java 19 对应的类文件版本号为 `63.0`

在低版本的 Java 环境中运行高版本的类文件，则会出现上面的错误。
