---
title: 简介
icon: introduction
date: 2024-03-10
category: DevOpos
tag:
    - Gerrit
---

## Gerrit 历史

[Gerrit](https://www.gerritcodereview.com/index.html) 名字来自于荷兰设计师 **赫里特·里特费尔德**（Gerrit Rietveld）。

`Gerrit Code Review` 最初是 [Rietveld](https://github.com/rietveld-codereview/rietveld) 的一组简单补丁，最初是为了服务 Android 开源项目（AOSP）而构建的。因为对访问控制（ACL）相关的修正，而没有被集成到 `Rietveld` 中，由于功能和代码开始变得截然不同，因此需要不同的名称。

## Gerrit 简介

`Gerrit` 一种开放源代码的代码审查软件，使用网页界面。利用网页浏览器，同一个团队的软件开发者，可以相互审阅彼此修改后的代码，决定是否能够提交，回退或是继续修改。它使用版本控制系统 `Git` 作为底层。

## Gerrit 技术迭代

最早它是由 `Python` 写成，在 `Gerrit 2.x` 后，改成用 `Java` 与 `SQL`。使用 **Google Web Toolkit**（GWT） 来产生前端的 `JavaScript`。由于 `Gerrit 3.x` 中 `NoteDb` 取代了 `SQL` 数据库，所有元数据现在都存储在 `Git` 中。用户界面从 `GWT` 迁移到 `Polymer`。
