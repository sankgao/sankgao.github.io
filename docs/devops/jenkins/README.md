---
title: Jenkins
icon: jenkins
date: 2024-04-18
category: DevOps
tag:
    - Jenkins
---

记录一些 Jenkins 相关的信息。

<!-- more -->

Jenkins，最开始被称作 Hudson，是一个 Java 语言编写的开源的持续集成工具。Jenkins 在持续集成领域的市场份额居于主导地位，其被各种规模的团队用于各种语言和技术的项目中，比如：.NET、Ruby、Groovy、Grails、PHP 等，当然还有 Java。

## 为什么要使用 Jenkins

首先，Jenkins 是易于使用的。用户界面非常简单、直观，增加了视觉上的吸引力，而且 Jenkins 作为一个整体，具有平滑的学习曲线。

其次，Jenkins 拥有良好的扩展性，能够极其灵活和方便地迎合您的想法。它有数以百计的开源插件可供使用，而且每周会有更多的开源插件贡献进来。这些开源插件覆盖系统版本控制、构建工具、代码质量度量、构建通知、外部系统集成、用户界面定制化、游戏等。而且这些插件的安装都非常快捷和简单。

最后，Jenkins 之所以受大众喜欢，得益于其开源社区的规模和活跃度。Jenkins 社区包含一个有规模的、流动的、响应式且开放态的讨论群、活跃的邮件列表、IRC 频道、有知名度的博客区和 Twitter 账户。Jenkins 社区的发展速度非常快，每周都会有新功能、新特性、以及 bug 修复和插件更新发布出来。

当然，Jenkins 也满足那些不想每周都进行产品升级的用户的需求。对于那些更喜欢尽量减少版本改动的需求，Jenkins 提供一个长期支持的版本，也就是所谓的 **长期支持版本**（`LTS`）版本，这个版本落后于最新发布的 Jenkins 版本，却提供更加稳定的功能和较慢的更新变化。`LTS` 版本每三个月发布一次新版本，新版本主要包含重要的 bug 修复和关键补丁。这个概念类似于 Ubuntu LTS 版本。

## Jenkins 和 Hudson

Jenkins 从开始直到最近都以 Hudson 而被熟知。在 2009 年，甲骨文收购了 Sun 并继承了 Hudson 代码库。

在 2011 年年初，甲骨文和开源社区之间的关系破裂，该项目被分成两个独立的项目：

- **Jenkins**：由大部分原始 Hudson 开发人员组成
- **Hudson**：甲骨文管理

### 从 Hudson 到 Jenkins 一个简短的故事

Jenkins 始于 2004 年 Sun 公司员工（**Kohsuke Kawaguchi**）基于个人爱好开发的一个名字叫 **Hudson** 的项目。经过几年的发展，Sun 公司内部越来越多的团队开始在各种各样的项目中使用 Hudson。2008 年年初，Sun 公司认可了这个工具的质量和价值，要求 *Kohsuke* 把全部时间都投入到 Hudson 上，并且为 Hudson 提供专业的服务和技术支持。到 2010 年，Hudson 已经成为持续集成解决方案领域内的领头羊并拥有超过 `70%` 的市场份额。

2009 年，Oracle 收购了 Sun 公司。直到 2010 年年底，Hudson 开发者社区和 Oracle 之间出现了紧张关系，最初是由于 Java.net 的基础设施问题引起的，后来 Hudson 的商标问题加剧了相互之间的不愉快。这些紧张的关系也反映出大家关于把项目放在 Oracle 公司的管理之下这种方式的根本分歧。Oracle 是想要 Hudson 走向一个版本发布更慢的、更严格控制的开发过程，而以 *Kohsuke* 为首的大多数核心开发人员更希望像过去 Hudson 稳定工作的那样，继续维持开放、灵活、快节奏的社区主导型模式。

2011 年 1 月，Hudson 开发者社区投票通过，正式将这个项目更名为 **Jenkins**。随后他们把原始的 Hudson 代码迁移为一个新的 GitHub 项目（<https://github.com/jenkinsci>），并在 GitHub 上继续他们的工作。绝大多数的核心开发人员和插件开发人员都跟随 *Kohsuke* 以及其他核心贡献者到了 Jenkins 阵营，也就是我们今天能看到大量的开发活动的地方。

经过这次事件，大部分用户也跟着 Jenkins 开发者社区转向 Jenkins。有调查显示，`75%` 的 Hudson 用户已经转向 Jenkins；`13%` 的用户依旧在使用 Hudson；另外 `12%` 的用户既使用 Hudson 又使用 Jenkins，或者正在迁移到 Jenkins 的过程中。

不过，Oracle 和 Sonatype（开发 Maven 和 Nexus 的公司）仍在继续开发和维护 Hudson 代码库（现在也放在 GitHub 上（<https://github.com/hudson>），但是关注的重点跟之前相比有很大不同。Sonatype 的开发人员主要把精力集中在底层基础设施的变化和管理依赖关系注入框架以及插件体系架构的 Maven 集成上。

### 应该使用 Jenkins 还是 Hudson

- 选择 Jenkins 的原因：

    - **Jenkins 就是新版的 Hudson**：Jenkins 使用 Hudson 的代码库，开发团队和项目管理保持不变。简而言之，最开始编写了 Hudson 核心部分的绝大部分开发人员，只是重新像以前那样在 Jenkins 上恢复了他们的工作
    - **Jenkins 社区**：就像很多其他成功的开源项目一样，Hudson 的力量来源于它有一个规模庞大的、有流动性的社区以及大规模的应用。bug 的认定（修复）非常快，并且如果您遇到一些问题，别人也可能会遇到和您同样的问题。如果您遇到了自己解决不了的问题，可以把这个问题发到邮件列表里或者 IRC 频道上，一定会有人能帮助您
    - **开发速度快**：和之前的 Hudson 一样，Jenkins 延续使用众多开发人员喜欢的快速发布周期。每周都会发布新功能、新特性，以及新插件和 bug 修复；bug 修复的周转期实际上是非常短的。如果您喜欢更稳定，可以使用 LTS 版本

- 选择 Hudson 的原因：

    - **稳定**：除非它坏了，否则您根本不用去修复它。您已经安装部署了一套令您满意的 Hudson，并且觉得没有必要升级到最新的版本
    - **企业集成以及 Sonatype 产品自带工具**：Hudson 可能非常看重跟企业级工具的集成，比如：LDAP/Active Directory，还有 Sonatype 公司的产品，比如：Maven3、Nexus 和 M2Ecipse；而 Jenkins 相对于那些与其有竞争的工具来说却更加开放，比如：Artifactory 和 Gradle
    - **插件体系架构**：假如您打算编写自己的 Jenkins/Hudson 插件，您要意识到 Sonatype 公司正在为 Hudson 插件提供 JSR-330 依赖项注入。尽管这将来会在 Jenkins 和 Hudson 之间产生插件兼容性的一系列问题，但对于新的开发人员来讲却是非常易用的

无论使用 Jenkins 还是 Hudson，它们仍然非常类似，绝大多数讨论的技术和技巧都适用于两者。

## 相关信息

- [官方网站](https://www.jenkins.io/)
- Jenkins 权威指南 [GitHub 地址](https://github.com/wakaleo/jenkins-the-definitive-guide-book)
