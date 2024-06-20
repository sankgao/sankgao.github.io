---
title: error unknown switch `e'
icon: problem
date: 2024-06-14
category: 
    - DevOps
    - 问题
tag:
    - Git
---

## 问题

在 VSCode 中，使用 `git reset --hard HEAD@{5}` 命令时，出现以下错误：

```powershell
PS E:\SourceCode\Github\project-demo\git\demo> git reset --hard HEAD@{5}

error: unknown switch `e'
usage: git reset [--mixed | --soft | --hard | --merge | --keep] [-q] [<commit>]
   or: git reset [-q] [<tree-ish>] [--] <pathspec>...
   or: git reset [-q] [--pathspec-from-file [--pathspec-file-nul]] [<tree-ish>]
   or: git reset --patch [<tree-ish>] [--] [<pathspec>...]
   or: DEPRECATED: git reset [-q] [--stdin [-z]] [<tree-ish>]
   # ......省略部分内容
```

## 原因

花括号（`{}`）在 PowerShell 中，被认为是代码块执行标识符，若想正常使用，可用反引号（`` ` ``）进行转义。

## 解决方法

使用反引号（`` ` ``）进行转义。例如：

```shell
git reset --hard HEAD@`{5`}

HEAD is now at a2da597 does main follow this new commit?
```
