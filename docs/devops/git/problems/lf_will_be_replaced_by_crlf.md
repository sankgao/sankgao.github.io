---
title: LF will be replaced by CRLF
icon: problem
date: 2024-07-08
category: 
    - DevOps
    - 问题
tag:
    - Git
---

## 问题

在 VSCode 中，使用 `git add` 命令时，出现以下错误：

```powershell
warning: LF will be replaced by CRLF in test1.txt. The file will have its original line endings in working directory
```

## 原因

在 Windows 平台编辑过的代码文本的换行默认都是 CRLF，所以一般 `git add` 不会出错。但是如果发生以下两种情况，那再进行 `git add` 这个 LF 换行的文件时，会出现这个警告 `LF will be replaced by CRLF in …`。

- 有人使用 Linux/Mac 平台并参与了项目的 git 提交
- Windows 平台的某些软件会生成换行是 LF 的代码文本

## 解决方法

### Window 平台出现该警告

如果是 Window 平台出现该警告，啥也别做就行，虽然这个警告难看，但这个警告能保证我们项目团队正常跨系统 `git` 操作代码。

因为 Git 的 Windows 客户端基本都会默认设置 `core.autocrlf=true`（通过 `git config core.autocrlf` 命令查询 Windows 上该属性是否默认 `true`。如不是 `true`，执行 `config --global core.autocrlf true` 命令设置该属性为 `true`），而 `core.autocrlf=true` 有以下三个功能来避免我们出错：

- 在 “把 modified 修改过的文件 `git add` 到暂存区” 时，Git 自动把 LF 转换成 CRLF，并给出那条警告 `LF will be replaced by CRLF`
- 在 “把 modified 修改过的文件由暂存区提交到版本库/仓库” 时，Git 自动把 CRLF 转换成 LF
- 在 “用 检出/`git checkout` 切换到指定分支或克隆远程版本库” 来加载代码时，Git 自动把 LF 转换成 CRLF

### Linux 或 Mac 平台出现该警告

如果是 Linux 或 Mac 平台，当一个 CRLF 作为行结束符的文件出现在 Linux 或 Mac 平台中，可以通过执行 `config --global core.autocrlf input` 命令把 `core.autocrlf` 设置成 `input` 来告诉 Git 在提交时把 CRLF 转换成 LF，检出时不转换。

这样在 Windows 上的检出文件中会保留 CRLF，而在 Mac 和 Linux 上，以及版本库中会保留 LF，从而保证我们项目团队正常跨系统 `git` 操作代码。
