---
title: 简介
icon: introduction
date: 2024-06-28
order: 1
category: DevOps
tag:
    - SVN
---

**[SVN（Subversion）](https://subversion.apache.org/)** 是一个自由开源的版本控制系统。SVN 采用客户端/服务器体系，项目的各种版本都存储在服务器上，程序开发人员首先将从服务器上获得一份项目的最新版本，并将其复制到本机，然后在此基础上，每个开发人员可以在自己的客户端进行独立的开发工作，并且可以随时将新代码提交给服务器。当然也可以通过更新操作获取服务器上的最新代码，从而保持与其他开发者所使用版本的一致性。

## SVN 的一些概念

- **repository（源代码库）**：源代码统一存放的地方
- **Checkout（提取）**：当您手上没有源代码的时候，您需要从源代码库（`repository`）提取（`checkout`）一份
- **Commit（提交）**：当您已经修改了代码，您就需要提交（`commit`）到源代码库（`repository`）
- **Update（更新）**：当您已经提取（`checkout`）了一份源代码，更新（`update`）一下您就可以和 Repository 上的源代码同步，您手上的代码就会有最新的变更

## 相关文档

- [SVN 官网](https://subversion.apache.org/)
- [SVN 官网文档](https://svnbook.red-bean.com/)
- [SVN GitHub 地址](https://github.com/apache/subversion)
