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

GitLab 共有三个版本：**GitLab CE（社区版）**、**GitLab EE（企业版）** 和 **极狐GitLab（JH）。**

### GitLab CE

GitLab CE（社区版）是 [GitLab Inc.](https://about.gitlab.com/) 提供的核心产品，采用 MIT 许可证，完全免费且开源。它的核心目标是通过提供一个集成化的工作环境，让开发者可以更高效地协作，包括但不限于版本控制、代码审查、持续集成/持续部署（CI/CD）、问题追踪、项目管理等功能。

### GitLab EE

GitLab EE（企业版）比 GitLab CE 功能多一些。

### 极狐GitLab

极狐GitLab 是在中国发行的企业级 GitLab 版本，一套完备的一站式 DevOps 平台，从根本上改变了开发、安全和运维团队协作和软件构建方式。极狐GitLab 从构思到生产发布，帮助团队提高生产效率，将迭代周期从数周缩短至几分钟，加快软件创新发布速度，节省开发成本。

极狐GitLab 通过提供一体化的 CI/CD、源代码管理和安全工具组等帮助企业快速创新。

极狐GitLab 优点如下：

- **安全**：极狐GitLab 的客户数据保存在中国本地，极狐(GitLab)的 SaaS 服务，不会与 [GitLab Inc.](https://about.gitlab.com/) 共享任何基础设施、网络连接、系统、服务、数据或者资源，保障了中国公司的数据独立与隐私安全
- **快速**：极狐GitLab 的服务器都在国内，与网络、网速的相关的瓶颈点也将不复存在，用户的拉取使用体验会大大提升
- **可靠**：极狐GitLab 产品的企业级订阅许可证、源代码管理、支付系统等均在中国本地管理
- **开源**：极狐GitLab 产品遵循 “核心开放” 原则，企业级源码对客户开放。客户可基于企业版进行自主创新和二次开发，避免厂商锁定，降低企业对外部技术的依赖，促进企业自身数字化能力升级，降低国际环境变动对企业发展的影响
- **丰富**：极狐GitLab 不仅功能强大，内容丰富，同时支持多种部署方式（self-managed 和 SaaS）、多种收费方式，能满足不同规模、不同业务需求的企业或组织的使用需求
- **轻松协作**：打破孤岛式的工作模式，无缝串联开发、运维和安全管理，贯穿整个开发生命周期的协调一致体验
- **快速反馈**：补救代码质量问题，并通过集中报告和单一视图实时报告开发和安全方面的变化
- **节省开发成本**：简化软件开发工具链，以降低总体拥有成本，极狐GitLab 可自动伸缩以满足性能和成本需求

## 使用哪个 GitLab 发行版

GitLab 有两种发行版：企业版和社区版。建议下载并安装 GitLab 企业版。

企业版免费提供，包含社区版中提供的所有功能，无需注册或获取许可证。如果您决定升级到付费层并解锁附加功能，并且您已经使用了企业版，那么您将能够更轻松地完成此操作。

参考官网 [哪个 GitLab 发行版适合您](https://gitlab.cn/install/ce-or-ee/)。

### 社区版

如果您只想下载开源软件，社区版是最佳选择。该发行版不包含专有代码。从功能上讲，它将具有与企业版中的免费层相同的功能。

::: tip
将来如果您决定迁移到企业版，则需要升级并且可能需要停机
:::

### 企业版

如果您安装了 GitLab 企业版的免费层，您将获得社区版发行版中的所有相同功能，但您还有其他优势：

- 如果您在任何时候想要试用付费功能，则无需设置新实例或升级现有实例即可执行此操作。您只需在 GitLab 中启用试用即可。如果您对付费功能不满意，您的实例将在试用期结束后自动恢复为免费套餐功能
- 要从社区版升级到企业版，您必须确保使用相同的版本并遵循特定步骤，这通常需要停机。如果您使用的是企业版，只需单击一下即可升级到付费功能

## 代码托管平台对比

市面上常见的与代码托管有关的平台对比分析：极狐GitLab、GitLab、GitHub、Gitee。

### 四个 Giter 的发展历史

- **GitHub**：在 2008 年 4 月 10 日正式上线；2018 年 6 月 4 日被微软收购
- **GitLab**：在 2011 年 10 月 8 日进行了第一次代码提交；2013 年 7 月产品被拆分为：GitLab CE（社区版）和 GitLab EE（企业版）
- **Gitee**：在 2013 年 5 月 27 日由开源中国推出；2016 年 Gitee 推出企业版；2018 年 Gitee 高校版上线；2019 年，专注于企业私有化部署的 Gitee 专业版上线；2020 年，针对超大规模企业私有化部署 Gitee 旗舰版上线
- **极狐GitLab**：在 2021 年 3 月 18 日正式上线；2022 年 2 月，极狐GitLab SaaS 正式上线 

### 产品定位

- **极狐GitLab**：是一个一体化的 DevOps 平台。关于极狐GitLab 和 GitLab 的关系，可以查看 [极狐GitLab 与 GitLab 的协作模式](https://gitlab.cn/is-it-any-good/#%E6%9E%81%E7%8B%90gitlab-%E4%B8%8E-gitlab-%E7%9A%84%E5%8D%8F%E4%BD%9C%E6%A8%A1%E5%BC%8F)
- **GitLab**：是一个一体化的 DevOps 平台。提供覆盖软件全开发生命周期的管理功能。提高企业 DevOps 能力
- **GitHub**：是一个开发者平台。目前是开源项目的主要集散地
- **Gitee**：是一个代码托管平台

### 代码是否开源

GitLab 是采取 “核心开放” 的开源模式（即核心代码开源，企业版代码源码可见），采用的是 MIT license ；极狐GitLab 和 GitLab 采取同样的核心开放模式，但是使用的是极狐 license；GitHub 和 Gitee 是代码托管平台，但本身产品是闭源的。

### 文档完备情况

极狐GitLab、GitLab、GitHub 都有很完整、详细的文档，能够帮助用户快速理解、使用产品；而 Gitee 的完备情况不如前述的三种产品，仅有部分帮助文档。

### 私有化部署

极狐GitLab 和 GitLab 都支持私有化部署，用户可以在各自的官方下载页面下载安装包，安装部署即可完成私有化部署；而 GitHub 和 Gitee 不支持私有化部署。

### 高可用 & 多地域部署

极狐GitLab 或 GitLab 的 Geo 是一种高可用架构，能够在多地域部署（尤其符合现在常见的两地三中心场景）。Geo 还有其他很多功能，例如：在两个实例之间实现负载均衡；让只读操作在第二个实例进行，写操作在主实例进行，这样能够提升代码的上传、拉去等效率，同时不影响团队成员通过极狐GitLab 或 GitLab 来进行协作；还可以为其他区域 “研发中心” 就某些操作（如：拉取或克隆）提供就近加速访问，极大的提升效率。私有部署配合 Geo 就能够打造高可用的自建极狐GitLab 或 GitLab 平台来供团队使用。

GitHub 也有高可用服务，但是却不支持私有部署，对于用户来说意义不大，只需要 GitHub 自身保持足够的高可用性即可；对于 Gitee 目前没看到提供有类似的服务。

### CI/CD

这四种产品推出 CI/CD 功能的时间不一样：

- **GitLab**：在 2015 年推出 CI/CD 功能
- **GitHub**：在 2018 年 10 月份推出 Beta 版 CI/CD 功能（GitHub Action）
- **Gitee**：在 2020 年推出 CI/CD 功能

所以，极狐GitLab 或 GitLab 已经在 CI/CD 领域沉淀了多年，而且每月迭代版本都会有关于 CI/CD 相关的特性发布，目前功能比较强大，使用方式也很灵活。此外，极狐GitLab、GitLab 和 GitHub 都使用 Runner 来实现 CI/CD Pipeline 的执行，Runner 可以使用产品默认提供的，也可以自主安装到用户自己所在的服务器上。而 Gitee 推出 CI/CD 功能较晚，目前没有类似的功能实现 CI/CD Pipeline 的灵活执行。

此外，GitHub Action 采用了 Marketplace 的策略来方便用户灵活构建自己的 CI/CD Pipeline，但是由于 Marketplace 缺乏安全保证机制，使用 Marketplace 上面的组件需要保持安全警惕。

### GitOps 支持

GitOps 是云原生应用程序部署和管理的新模式，能够极大的简化云原生应用程序的部署，提高开发人员和运维人员之间的协作效率。极狐GitLab 和 GitLab 在 13.x 版本中引入了对 GitOps workflow 的支持；而 GitHub、Gitee 暂时没有对 GitOps 的支持能力。

### DevSecOps

从 Anchore 2021 年软件供应链安全报告中可以看出，安全将会是众多公司或者组织的首要工作，与软件供应链是否安全密切相关。

在安全方面，极狐GitLab 和 GitLab 有七大安全利剑：容器镜像扫描、静态应用安全测试 (SAST)、动态应用安全扫描（DAST）、密钥检测、License合规、依赖项扫描以及模糊测试。DevSecOps 能力覆盖整个软件开发生命周期的各个阶段。

GitHub 的安全能力是通过 [Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security) 来提供的，包含 Code scanning、Secret scanning、Dependency review 等，但并不是覆盖软件开发全生命周期的。

而 Gitee 仅仅通过 [Gitee Scan](https://gitee.com/CodeGenerates/CodeGenerate/gitee_scans) 来对代码缺陷、代码规范等做一些扫描，安全能力同样不是覆盖软件开发生命周期的。

### 内置集成

极狐GitLab、GitLab 提供很多内置的第三方集成（如：Jenkins、Slack、Jira 等），而 GitHub 不提供内置的第三方集成，都是第三方提供对 GitHub 的集成。Gitee 介于 极狐GitLab、GitLab 和 GitHub 之间，有少量的内置集成（如：Jenkins）。

### 云原生安装

极狐GitLab 或 GtiLab 均支持云原生的安装方式（Docker、Helm 或 Operator），而且均有官方的镜像和 Chart，能够方便用户在云原生的环境中运行极狐GitLab 或 GitLab 实例；GitHub 与 Gitee 由于不支持自主私有化，目前并不提供相关的镜像、Chart、Operator。

### 开发者云环境

极狐GitLab 或 GitLab 已经和 Gitpod 做了集成，能够帮助开发者快速构建云上的开发环境，提升开发效率和开发体验。GitHub 也可以与 Gitpod 完成集成，同时 GitHub 在被微软收购后也和自家的产品 Visual Studio Code 在融合，为开发者提供云开发环境。而 Gitee 到目前为止，没看到类似的功能特性。

## 相关文档

- [GitLab 官网](https://about.gitlab.com/)
- [GitLab 官网文档](https://docs.gitlab.com/)
- [GitLab 项目代码](https://gitlab.com/gitlabcn)
- [GitLab 包仓库](https://packages.gitlab.com/gitlab)
- [极狐GitLab 官网](https://gitlab.cn/)
- [极狐GitLab 文档](https://docs.gitlab.cn/)
- [GitLab GitHub 地址](https://github.com/gitlabhq/gitlabhq)
- [GitLab university 学习](https://university.gitlab.com/)
