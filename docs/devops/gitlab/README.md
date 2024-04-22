---
title: GitLab
icon: gitlab
date: 2024-04-22
category: DevOps
tag:
    - GitLab
---

记录一些 GitLab 相关的信息。

<!-- more -->

## GitLab 简介

GitLab 由乌克兰程序员 *DmitriyZaporozhets* 和 *ValerySizov* 开发，它使用 Ruby 语言写成。后来，一些部分用 Go 语言重写。GitLab 使用 MIT 许可证的基于网络的 Git 仓库管理工具，且具有 `wiki` 和 `issue` 跟踪功能。

GitLab 是一个用于仓库管理系统的开源项目，使用 Git 作为代码管理工具，并在此基础上搭建起来的 Web 服务。Gitlab 是被广泛使用的基于 Git 的开源代码管理平台，GitLab 由 GitLab Inc 开发，基于 Ruby on Rails 构建，主要针对软件开发过程中产生的代码和文档进行管理，Gitlab 主要针对 `group` 和 `project` 两个维度进行代码和文档管理，其中 `group` 是群组；`project` 是工程项目，一个 `group` 可以管理多个 `project`，可以理解为一个群组中有多项软件开发任务，而一个 `project` 中可能包含多个 `branch`，意为每个项目中有多个分支，分支间相互独立，不同分支可以进行归并。

## GitLab 特点

GitLab 是一个开源的在线代码托管平台，主要特点如下：

- **版本控制**：GitLab 基于 Git，提供强大的版本控制功能，包括分支创建、代码合并和冲突处理
- **代码评审**：支持代码评审流程，允许团队成员对提交的代码进行评论和讨论
- **项目管理**：通过 Issue 跟踪功能管理开发过程中的任务和问题
- **持续集成/持续部署（CI/CD）**：提供 CI/CD 功能，支持自动化的构建、测试和部署流程
- **自托管与云服务**：GitLab 既可以在本地服务器上部署，也可以使用 GitLab 提供的云服务
- **内置工具**：提供一系列内置工具，如：容器扫描、安全性报告、性能分析等，增强开发流程的安全性和效率
- **社区版和企业版**：提供社区版（CE）和企业版（EE），社区版免费开放，企业版提供更多高级功能
- **协作工具**：包括 Wiki 文档、评论提醒等，帮助团队成员协作和沟通
- **问题管理**：允许跟踪和管理各种问题，如：bug 和 feature，使用 issue 功能进行问题的创建和操作
- **访问权限管理**：允许通过 Web 界面访问公开或私有的项目，并能管理团队对仓库的访问权限
- **代码片段收集**：便于代码复用和日后查找
- **内置聊天程序**：允许团队成员进行交流

## GitLab 版本

GitLab 共有三个版本：

- **GitLab 社区版（CE）**：可根据 MIT Expat 许可证免费获得
- **GitLab 企业版（EE）**：包含对于拥有 100 名以上用户的组织提供更多高级功能
- **极狐 GitLab（JH）**：专为中国市场量身定制

## 相关文档

- [GitLab 官网](https://about.gitlab.com/)
- [GitLab 官网文档](https://docs.gitlab.com/)
- [GitLab 项目代码](https://gitlab.com/gitlabcn)
- [GitLab 包仓库](https://packages.gitlab.com/gitlab)
- [极狐 GitLab 官网](https://gitlab.cn/)
- [极狐 GitLab 文档](https://docs.gitlab.cn/)
- [GitLab GitHub 地址](https://github.com/gitlabhq/gitlabhq)
