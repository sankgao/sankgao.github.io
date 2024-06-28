---
title: 命令
icon: command
date: 2024-06-28
order: 3
category: DevOps
tag:
    - 命令
    - SVN
---

## svn checkout

用于将仓库提取（`checkout`）到本地。

```shell
svn checkout <URL>
# 简写
svn co <URL>
```

- **URL**：仓库地址

## svn add

用于添加新文件或文件夹。

```shell
svn add <file/dir>
```

## svn commit

用于提交到 SVN 服务器。

```shell
svn commit -m "messages"
# 简写
svn ci -m "messages"
```

- **messages**：描述信息

## svn delete

用于删除文件或文件夹。

```shell
svn delete <file/dir>
```

## svn update

用于从远程仓库更新代码到本地仓库。

```shell
svn update
```

## svn log

用于查看 log 日志。

例如：显示文件或文件夹所有修改记录。

```shell
svn log <file/dir>
```

例如：显示文件或文件夹所有修改记录详细信息。

```shell
svn log -v <file/dir>
```

例如：显示文件或文件夹某个版本的修改记录详细信息。

```shell
svn log -v -r <num> <file/dir>
```

- **num**：版本号

## svn info

用于查看文件或文件夹详细信息。

```shell
svn info <file/dir>
```

## svn diff

用于比较差异。

例如：比较本地文件或文件夹和某个版本之间的差异。

```shell
svn diff -r <num> <file/dir>
```

例如：比较本地文件或文件夹和某两个版本之间的差异。

```shell
svn diff -r <num:num> <file/dir>
```

- `num`：版本号

## svn list

用于查看仓库下的文件和目录列表。

```shell
svn list <URL>
```

- **URL**：仓库地址

