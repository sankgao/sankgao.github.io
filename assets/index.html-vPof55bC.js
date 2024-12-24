import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as n,c as o,a as l,b as e,e as s,d as r,f as i}from"./app-sOlc-oBJ.js";const d="/assets/continuous_integration-KeTV726M.jpg",h="/assets/continuous_delivery-vrR7Y-4t.jpg",c="/assets/continuous_deployment-EouEEEeM.jpg",g={},v=e("p",null,"记录一些 DevOps 相关的信息。",-1),D=i('<div class="hint-container info"><p class="hint-container-title">传统开发和部署流程</p><p>要了解什么是 DevOps，首先需要了解传统的开发和部署流程。传统开发和部署流程：</p><ol><li>开发团队开发应用程序、安全性和错误修复的代码</li><li>一旦开发的代码准备好发布，它将 <strong>移交给运维团队</strong> 进行部署</li><li>由于环境配置和审批方面存在一些挑战，开发团队必须等待数天到数周才能将新代码部署到生产环境中</li><li>运维团队将开始将代码部署到 QA/性能环境</li><li>应用程序 <strong>可能无法</strong> 像在开发环境中那样工作。当开发环境与部署（QA/Perf/Stage/Prod）环境不同时，就会发生这种情况。可能是平台版本问题、配置更改、模块版本更改等</li><li>运维团队可能认为问题是由代码中的错误引起的</li><li>开发团队可能认为运维团队所做的配置存在一些问题</li></ol><p>应该有一些东西可以让开发和运维团队更好地工作，这就是 DevOps 发挥作用的地方。</p></div><h2 id="devops" tabindex="-1"><a class="header-anchor" href="#devops" aria-hidden="true">#</a> DevOps</h2><p>DevOps 将开发（<code>Development</code>）和运维（<code>Operations</code>）结合起来，它强调软件开发人员和信息技术（IT）操作人员之间的沟通、协作和集成。与传统流程相比，提高软件开发和交付的效率、速度和安全性。</p><p>DevOps 是一种文化或理念，旨在消除 <a href="#%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">软件开发生命周期</a> 中开发和运维之间的隔阂，通过自动化基础设施、代码部署和应用程序的持续监控来提高生产力和协作。</p><p>DevOps 为人们共同努力以最快的速度构思、构建和交付安全的软件。DevOps 流程源于软件开发的敏捷方法，扩展了构建的跨职能方法并以更快、更迭代的方式交付应用程序。</p><h3 id="软件开发生命周期" tabindex="-1"><a class="header-anchor" href="#软件开发生命周期" aria-hidden="true">#</a> 软件开发生命周期</h3><p><strong>软件开发生命周期</strong>（Software Development Life Cycle，SDLC）又称软件生存周期或系统开发生命周期，是指软件从产生直到报废或停止使用的全过程。这个周期包括了多个阶段，每个阶段都有明确的任务和定义，以下是软件开发生命周期的阶段及相应特点：</p><ul><li><strong>问题定义</strong>：这项一阶段涉及确定软件目的需求和目标，进行可行性分析，确保项目有实现的可能性和必要性</li><li><strong>需求分析</strong>：在确定项目可行性后，对软件需要实现的功能进行详细分析，生成需求规格说明书，为后续开发奠定基础</li><li><strong>系统设计</strong>：根据需求分析的结果，对整个软件系统进行设计，包括系统框架设计、数据库设计等</li><li><strong>编码</strong>：将设计结果转换成计算机可运行的程序代码，制定编写规范以保证程序的可读性和维护性</li><li><strong>软件测试</strong>：在编码完成后，对软件进行严密的测试，以发现并纠正设计中存在的问题</li><li><strong>验收与运行</strong>：软件进入使用前的最后测试和验证阶段，确保软件符合用户需求</li><li><strong>维护升级</strong>：软件投入使用后，进行持续的维护和升级，包括纠错性维护和改进性维护，以确保软件能够长期稳定运行</li><li><strong>废弃</strong>：当软件不再满足使用需求或技术上已过时时，软件将被废弃或停止维护</li></ul><p><strong>软件开发方法</strong>：</p>',9),u=i("<li><p>瀑布模型</p><p>瀑布模型是一种传统的软件开发模型。瀑布模型将软件开发过程分为顺序的阶段，如：<em>需求分析 -&gt; 系统设计 -&gt; 编码 -&gt; 测试 -&gt; 运维</em>，每个阶段都有明确的输出，并且严格控制每个阶段的工作流程。这种模型适用于需求稳定且变化不大的项目，因为它能够提供较好的进度和成本控制。对于经常变化的项目而言，瀑布模型毫无价值。</p><p><strong>瀑布的优势：</strong></p><ul><li>具有容易理解的线性结构</li><li>为项目提供了按阶段划分的检查节点</li><li>当前一阶段完成后，您只需要去关注后续阶段</li></ul><p><strong>瀑布的缺点：</strong></p><ul><li>不适应用户需求的变化</li><li>用户只有等到整个过程的末期才能见到开发成果，从而增加了开发风险</li><li>各个阶段的划分完全固定，阶段之间产生大量的文档，极大地增加了工作量</li><li>任何阶段一旦出现延迟，都会导致项目无法推进</li></ul></li>",1),O=e("p",null,"敏捷开发方法",-1),f=e("p",null,"敏捷开发方法是一种迭代、循序渐进的软件开方法，以用户需求进化为核心，将软件项目切分为多个子项目，每个子项目的成果都经过测试，具备集成和可运行的特征。",-1),C=e("p",null,[e("strong",null,"敏捷开发特征：")],-1),b=e("ul",null,[e("li",null,"敏捷开发强调快速开发和有效适应需求变化，与传统的瀑布开发模式相比，它更注重适应性和灵活性"),e("li",null,"敏捷开发的方法包括极限编程（XP）、测试驱动开发、Scrum 和 Kanban 等，这些方法强调团队成员间的紧密协作、面对面的沟通、频繁交付新的软件版本"),e("li",null,"敏捷开发继承了软件工程中的多种方法，如：迭代与增量开发、瀑布式与快速原型法，通过整合这些方法，敏捷开发旨在提高开发效率，同时为需求的调整提供更多机会")],-1),_={href:"https://agilemanifesto.org/iso/zhchs/manifesto.html",target:"_blank",rel:"noopener noreferrer"},x=e("strong",null,"四种核心价值",-1),G=e("strong",null,"十二条原则",-1),I=i('<h3 id="devops-核心原则" tabindex="-1"><a class="header-anchor" href="#devops-核心原则" aria-hidden="true">#</a> DevOps 核心原则</h3><ul><li><strong>软件开发生命周期的自动化</strong>：这包括自动化测试、构建、发布、开发环境的配置以及其他可能会减慢软件交付过程或在软件交付过程中引入人为错误的手动任务</li><li><strong>协作与沟通</strong>：一个好的 DevOps 团队具有自动化，但一个优秀的 DevOps 团队还具有有效的协作和沟通</li><li><strong>持续改进并最大限度地减少浪费</strong>：从自动化重复性任务到观察性能指标以寻找减少发布时间或平均恢复时间的方法，高绩效的 DevOps 团队会定期寻找可以改进的领域</li><li><strong>高度关注用户需求，反馈周期短</strong>：通过自动化、改进的沟通和协作以及持续改进，DevOps 团队可以花一些时间专注于真正的用户真正想要什么，以及如何将其提供给他们</li></ul><p>通过采用这些原则，组织可以提高代码质量、缩短上市时间并进行更好的应用程序规划。</p><h3 id="devops-的四个阶段" tabindex="-1"><a class="header-anchor" href="#devops-的四个阶段" aria-hidden="true">#</a> DevOps 的四个阶段</h3><p>DevOps 的发展经历了四个不同的阶段，每个阶段都以技术和组织实践的转变为标志。这一进展反映了 DevOps 中日益增长的复杂性，主要由两个关键趋势驱动：</p><ul><li><strong>向微服务过渡</strong>：随着组织从整体架构转向更灵活的微服务架构，对专业 DevOps 工具的需求激增。这一转变旨在适应微服务提供的更高的粒度和敏捷性</li><li><strong>工具集成的增加</strong>：项目的激增以及对更多 DevOps 工具的相应需求导致项目和工具之间的集成数量显着增加。这种复杂性促使组织重新考虑采用和集成 DevOps 工具的方法</li></ul><p>DevOps 的发展经历了四个不同的阶段，每个阶段都解决软件开发和交付不断增长的需求和复杂性。这四个阶段如下：</p><ul><li><p><strong>第一阶段：自带 DevOps（BYOD）</strong></p><p>在 “自带 DevOps” 阶段，每个团队选择了自己的工具。当团队由于不熟悉其他团队的工具而试图一起工作时，这种方法会引起问题。此阶段强调需要更统一的工具集，以促进更顺畅的团队集成和项目管理。</p></li><li><p><strong>第二阶段：一流的 DevOps</strong></p><p>为了解决使用不同工具的挑战，组织进入了第二阶段，即一流的 DevOps。在此阶段，组织对同一组工具进行标准化，并为 DevOps 生命周期的每个阶段提供一个首选工具。它帮助团队相互协作，但问题就变成了通过每个阶段的工具来移动软件更改。</p></li><li><p><strong>第三阶段：自己动手（DIY）DevOps</strong></p><p>为了解决这个问题，组织采用了自己动手（DIY）DevOps，在其工具之上和工具之间进行构建。他们执行了大量自定义工作，将 DevOps 单点解决方案集成在一起。然而，由于这些工具是独立开发的，没有考虑集成，因此它们永远不会完全合适。对于许多组织来说，维护 DIY DevOps 是一项巨大的工作，并且会导致更高的成本，因为工程师需要维护工具集成而不是开发其核心软件产品。</p></li><li><p><strong>第四阶段：DevOps 平台</strong></p><p>单一应用程序平台方法可提高团队体验和业务效率。DevOps 平台取代了 DIY DevOps，允许整个 DevOps 生命周期的所有阶段的可见性和控制。</p><p>通过使所有团队（开发、运维、IT、安全和业务）能够在端到端统一系统中协作规划、构建、保护和部署软件，DevOps 平台代表了实现全面交付的根本性变革。</p></li></ul><h3 id="devops-文化的好处" tabindex="-1"><a class="header-anchor" href="#devops-文化的好处" aria-hidden="true">#</a> DevOps 文化的好处</h3><p>DevOps 的商业价值和 DevOps 文化的好处在于能够改善生产环境，以便通过持续改进更快地交付软件。您需要能够立即预测并响应行业颠覆者。这在敏捷软件开发过程中成为可能，团队被授权自主并更快地交付，从而减少正在进行的工作。一旦发生这种情况，团队就能够以市场的速度响应需求。</p><p>为了使 DevOps 按设计发挥作用，需要将一些基本概念付诸实践，包括需要：</p><ul><li>消除导致障碍和限制的制度化孤岛和交接，特别是在一个团队的成功衡量标准与另一个团队的关键绩效指标 (KPI) 直接不一致的情况下</li><li>使用单个应用程序实施统一的工具链，允许多个团队共享和协作。这将使团队能够加快交付速度并相互提供快速反馈</li></ul><h3 id="devops-生命周期" tabindex="-1"><a class="header-anchor" href="#devops-生命周期" aria-hidden="true">#</a> DevOps 生命周期</h3><p>DevOps 生命周期从软件开发开始一直延伸到交付、维护和安全。DevOps 生命周期的阶段包括：</p><ul><li><strong>计划</strong>（Planning）：确定项目目标和需求</li><li><strong>开发</strong>（Development）：编码、单元测试、集成测试等</li><li><strong>构建</strong>（Build）：将代码编译、打包</li><li><strong>测试</strong>（Testing）：自动化测试，包括单元测试、集成测试、系统测试和验收测试</li><li><strong>配置</strong>（Configuration）：将软件部署到准备好的环境中</li><li><strong>发布</strong>（Release）：将软件发布到生产环境</li><li><strong>监控</strong>（Monitoring）：检查软件的运行情况，及时发现和解决问题</li><li><strong>反馈</strong>（Feedback）：对软件的性能和用户反馈进行改进</li><li><strong>运维</strong>（Improvement）：持续改进开发和部署过程</li></ul><h3 id="开发运维工具" tabindex="-1"><a class="header-anchor" href="#开发运维工具" aria-hidden="true">#</a> 开发运维工具</h3><p>团队如何完成 DevOps 实践？</p><p>使用从开发到生产环境的正确工具将创建完整的 DevOps 工具链，以更快更好地交付应用程序。工具只是 DevOps 的推动者。您必须了解自动化不是 DevOps。</p><p>Jenkins 就是一个例子。使用 Jenkins，您可以从 Github 等版本控制系统获取最新代码并持续测试，无需任何人工干预，我们称之为 <strong>持续集成。</strong></p><p>接下来是应用程序部署，可以使用 Puppet、Chef、Ansible 和 Saltstack 等配置管理工具。使用这些工具，您可以对基础架构进行编码并定义基础架构的外观和行为方式。这种方法通常被称为 <strong>基础设施即代码。</strong></p><p>该代码决定了您的基础设施的状态。这些工具可帮助团队配置成百上千台服务器、自动配置自身并部署应用程序代码。</p><p>DevOps 运动的下一个转变是容器化。Kubernetes 等容器技术可帮助 DevOps 团队构建应用程序并将其运送到任何环境，而不会产生太多配置偏差。</p><p>DevOps 实践使软件开发和运维团队能够通过自动化、协作、快速反馈和迭代改进来加速交付。</p><h3 id="适合-devops-脚本语言" tabindex="-1"><a class="header-anchor" href="#适合-devops-脚本语言" aria-hidden="true">#</a> 适合 DevOps 脚本语言</h3><ul><li><strong>Golang</strong>：Golang 是为了速度而开发的，该语言强调精益、网络高效的运行时对于 DevOps 来说意味着伟大的事情，很多 DevOps 工具是使用 Golang 编写的</li><li><strong>Python</strong>：Python 已成为 DevOps 中最流行的编程语言。它对于初学者来说很容易学习，并且拥有庞大的模块库，用于在 DevOps 中执行各种任务</li><li><strong>Bash</strong>：Bash 脚本（Linux Shell 脚本）用于执行各种 DevOps 项目，包括自动化安装和配置管理。例如：DevOps 工程师使用 Bash 创建部署脚本来完成新应用程序版本中涉及的繁重工作</li><li><strong>Powershell</strong>：Powershell 是 Microsoft 的任务自动化、脚本编写和配置管理框架，构建于 .NET Framework 之上。它提供了用于管理 Windows 系统的命令行 shell 和脚本环境</li><li><strong>Groovy</strong>：Groovy 基于 Java，它通常用于自动化软件开发任务。Groovy 在 Jenkins 中被大量使用。凭借对 Groovy 脚本的良好了解，您可以轻松地将 Jenkins 管道编写为代码和 Jenkins 共享库</li><li><strong>JavaScript</strong>：JavaScript 在 DevOps 方面要复杂一些，但这并不意味着它们不能一起工作。Pulumi 等 IaaC 工具支持 Javascript 和 Typescript，用于构建基础设施即代码</li></ul><h2 id="devsecops" tabindex="-1"><a class="header-anchor" href="#devsecops" aria-hidden="true">#</a> DevSecOps</h2><p>传统上，安全性是在开发生命周期的最后阶段出现的，当代码不可避免地被发送回开发人员进行修复时，会增加成本和时间。有效的 DevOps 可确保快速且频繁的开发周期（有时为数周或数天），但过时的安全实践甚至可能使最高效的 DevOps 计划付诸东流。</p><p>DevSecOps 是开发（<code>Development</code>）、安全（<code>Security</code>）和运维（<code>Operations</code>）的组合。它是一种在整个开发生命周期中集成安全性的软件开发方法，意味着从一开始就考虑应用程序和基础设施的安全性。</p><h3 id="devsecops-与-devops" tabindex="-1"><a class="header-anchor" href="#devsecops-与-devops" aria-hidden="true">#</a> DevSecOps 与 DevOps</h3><p>DevSecOps 是 DevOps 的演变，DevSecOps 包括软件开发每个阶段的应用程序安全实践。现在，在 DevOps 的协作框架中，安全是端到端集成的共同责任。这种心态非常重要，以至于一些人创造了 “DevSecOps” 一词来强调在 DevOps 计划中构建安全基础的必要性。</p>',30),m={href:"https://www.redhat.com/en/topics/devops/shift-left-vs-shift-right",target:"_blank",rel:"noopener noreferrer"},S=i('<h3 id="内置安全性" tabindex="-1"><a class="header-anchor" href="#内置安全性" aria-hidden="true">#</a> 内置安全性</h3><p>DevSecOps 是关于内置安全性，而不是作为应用程序和数据边界的安全性。如果安全性仍然存在于开发流程的末端，那么采用 DevOps 的组织可能会发现自己又回到了他们最初试图避免的漫长开发周期。</p><p>在某种程度上，DevSecOps 强调需要在 DevOps 计划一开始就邀请安全团队和合作伙伴来构建信息安全并制定安全自动化计划。它强调需要帮助开发人员在编码时牢记安全性，这一过程涉及安全团队共享已知威胁（如：内部威胁或潜在恶意软件）的可见性、反馈和见解。</p><p>在整个开发过程中，工具和方法会保护和监控您的实时应用程序。新的攻击面，如：容器和编排器，也必须受到监控和保护。DevSecOps 工具可自动化安全工作流程，为您的开发和安全团队创建适应性强的流程，从而改善协作并打破孤岛。通过将安全性嵌入到软件开发生命周期中，您可以始终如一地保护快速移动和迭代的流程，从而在不牺牲质量的情况下提高效率。</p><h2 id="gitops" tabindex="-1"><a class="header-anchor" href="#gitops" aria-hidden="true">#</a> GitOps</h2><p>GitOps 是一个运维框架，它吸纳了用于应用程序开发的 DevOps 最佳实践，例如：版本控制、协作、合规、和 CI/CD 等，并将它们用于基础架构自动化。</p><p>虽然软件开发生命周期的大部分已经自动化，但基础设施仍然主要是手动过程，需要专门的团队。GitOps 的核心思想是拥有一个 Git 存储库，该存储库始终包含生产环境中当前所需的基础设施的声明性描述，以及使生产环境与存储库中描述的状态相匹配的自动化流程。如果您想部署新应用程序或更新现有应用程序，您只需更新存储库，自动化流程会处理其他所有事情。这就像使用巡航控制来管理生产中的应用程序一样。</p><h3 id="gitops-实践" tabindex="-1"><a class="header-anchor" href="#gitops-实践" aria-hidden="true">#</a> GitOps 实践</h3><p>GitOps 不是一个单一的产品、插件或平台。这个问题没有一个准确的答案，因为团队将 GitOps 付诸实践的最佳方式会根据团队的具体需求和目标而有所不同。但是，有关如何开始使用 GitOps 的一些技巧包括为所有团队成员使用专用的 GitOps 存储库来共享配置和代码、自动部署代码更改以及设置警报以在发生更改时通知团队。</p><p>GitOps 需要三个核心组件：</p><ul><li><p><strong>IaC</strong></p><p>GitOps 使用 Git 存储库作为基础设施定义的单一事实来源。Git 是一个开源版本控制系统，用于跟踪代码管理更改，Git 存储库是项目中的 <code>.git</code> 文件夹，用于跟踪一段时间内对项目中文件所做的所有更改。基础设施即代码（IaC）是将所有基础设施配置存储为代码的做法。实际所需状态可能会或可能不会存储为代码（例如：副本或 Pod 的数量）。</p></li><li><p><strong>MRs</strong></p><p>GitOps 使用合并请求（MRs）或拉取请求（PRs）作为所有基础设施更新的变更机制。MR 或 PR 是团队可以通过审查和意见进行协作以及进行正式批准的地方。合并提交到您的主（或主干）分支并用作审核日志或审核跟踪。</p></li><li><p><strong>CI/CD</strong></p><p>GitOps 使用具有持续集成和持续交付（CI/CD）的 Git 工作流程来自动化基础设施更新。合并新代码时，CI/CD 管道会在环境中实施更改。任何配置偏差（例如：手动更改或错误）都会被 GitOps 自动化覆盖，以便环境收敛到 Git 中定义的所需状态。GitLab 使用 CI/CD 管道来管理和实现 GitOps 自动化，但也可以使用其他形式的自动化，例如：定义运算符。</p></li></ul><h3 id="gitops-的好处" tabindex="-1"><a class="header-anchor" href="#gitops-的好处" aria-hidden="true">#</a> GitOps 的好处</h3><p>GitOps 有很多好处，包括提高效率和安全性、更好的开发人员体验、降低成本和更快的部署。</p><p>借助 GitOps，组织可以使用单一、统一的工具来管理整个基础设施和应用程序开发生命周期。这使得团队之间能够更好地协作和协调，从而减少错误并更快地解决问题。</p><p>此外，GitOps 可以帮助组织利用容器和微服务，并保持所有基础设施的一致性——从 Kubernetes 集群配置和 Docker 镜像到云实例和任何本地部署。</p><h3 id="gitops-与-devops" tabindex="-1"><a class="header-anchor" href="#gitops-与-devops" aria-hidden="true">#</a> GitOps 与 DevOps</h3><p>GitOps 和 DevOps 之间存在一些关键区别：</p><ul><li>GitOps 严重依赖自动化和工具来管理和部署代码更改，而 DevOps 更注重团队之间的沟通和协作</li><li>GitOps 通常与 Kubernetes 等容器化技术结合使用，而 DevOps 可以与任何类型的应用程序一起使用</li></ul><p>GitOps 是 DevOps 的一个分支，专注于使用 Git 代码存储库来管理基础设施和应用程序代码部署。两者之间的主要区别在于，在 GitOps 中，Git 存储库是部署状态的真实来源，而在 DevOps 中，它是应用程序或服务器配置文件。</p><h3 id="gitops-工作流程" tabindex="-1"><a class="header-anchor" href="#gitops-工作流程" aria-hidden="true">#</a> GitOps 工作流程</h3><p>GitOps 工作流程围绕四个基本组件构建，每个组件在简化应用程序的部署和管理方面都发挥着至关重要的作用。</p><ol><li><p>Git 存储库</p><p>这是基础元素，充当应用程序代码及其配置的中心事实来源。通过将所有关键信息存储在 Git 存储库中，团队可以确保整个开发生命周期的一致性和透明度。</p></li><li><p>持续交付（CD）管道</p><p>CD 管道自动执行构建、测试和部署应用程序的过程。它消除在软件开发生命周期中开发和运维之间的隔阂，促进从开发环境到生产环境的平稳过渡，同时确保应用程序符合质量标准。</p></li><li><p>应用程序部署工具</p><p>该工具负责将应用程序部署到所需的环境中。它负责应用程序资源的编排和管理，确保根据 Git 存储库中定义的配置正确、高效地部署应用程序。</p></li><li><p>监控系统</p><p>监控系统对应用程序性能保持警惕，对于维护应用程序健康至关重要。它收集数据并为开发团队提供可行的见解和反馈，使他们能够做出明智的决策并快速解决可能出现的任何问题。</p></li></ol><p>这些组件共同创建了一个有凝聚力的 GitOps 工作流程，不仅提高了应用程序部署的效率和可靠性，而且还通过强调自动化、监控和持续改进来与现代 DevOps 实践保持一致。</p><h2 id="ci-cd" tabindex="-1"><a class="header-anchor" href="#ci-cd" aria-hidden="true">#</a> CI/CD</h2><p>CI/CD 代表持续集成和持续交付/部署，旨在简化和加速软件开发生命周期，提早发现风险、减少 QA 的测试时长、减少运维的人工干预。</p><p>CI/CD 中的 “CI” 始终指的是持续集成（Continuous Integration），通过持续集成，应用程序的新代码更改会定期构建、测试并合并到共享存储库中。它解决了同时开发应用程序的多个分支可能相互冲突的问题。</p><p>CI/CD 中的 “CD” 指的是持续交付（Continuous Delivery）或持续部署（Continuous Deployment），是指自动且频繁地将代码更改集成到共享源代码存储库中的实践。持续交付或持续部署（CD）是一个由两部分组成的过程，指的是代码更改的集成、测试和交付。持续交付无法实现自动生产部署，而持续部署会自动将更新发布到生产环境中。</p><h3 id="持续集成" tabindex="-1"><a class="header-anchor" href="#持续集成" aria-hidden="true">#</a> 持续集成</h3><p>持续集成是一种将集成阶段置于开发周期早期的实践，以便更定期地进行构建、测试和集成代码。</p><p>在传统的软件开发中，集成过程通常发生在项目结束时，每个人都完成了自己的工作。整合通常需要数周或数月的时间，并且可能会非常痛苦。持续集成的出现就是为了定位和解决同时开发应用程序的多个分支可能相互冲突的问题。</p><p>持续集成，就其最简单的形式来讲，就是一个能监控您版本控制系统变化的工具。无论任何时候，只要检测到有变化，这个工具就会自动编译和测试（通常是单元测试和集成测试）您的应用程序，以确保更改不会破坏应用程序。如果出现问题，它就马上通知开发人员，以便他们可以立即着手解决这个问题。</p><p>CI 的好处是集成变得轻而易举。软件一直在编写和集成。在 CI 之前，集成发生在创建过程的最后，一次性完成，并且需要花费未知的时间；现在有了 CI，它每天都会发生，只需要几分钟。</p><figure><img src="'+d+'" alt="持续集成" tabindex="0" loading="lazy"><figcaption>持续集成</figcaption></figure><p>两名或多名开发人员分别为同一产品软件编写代码，将他们的更改集成到一个叫做 <strong>源代码存储库</strong> 的地方。然后，他们可以根据各自编写的代码构建组合软件，并测试它是否按照他们期望的方式工作。</p><p>开发人员通常使用称为 <strong>CI Server</strong> 的工具来为其进行构建和集成。CI 要求开发人员有自测试代码。这是测试自身以确保其按预期工作的代码，这些测试通常称为 <strong>单元测试</strong>。当所有单元测试都通过后，代码被集成，开发人员将得到一个 <strong>绿色构建</strong>。这表明他们已经验证了他们的更改已成功集成在一起，并且代码按照测试的预期工作。然而，虽然集成代码可以成功地协同工作，但它尚未准备好用于生产，因为它尚未在类似生产的环境中进行测试和验证。您可以在下面的持续交付部分详细了解 CI 之后发生的情况。</p><h3 id="持续交付" tabindex="-1"><a class="header-anchor" href="#持续交付" aria-hidden="true">#</a> 持续交付</h3><p>持续交付是持续集成的扩展，持续交付意味着每次开发人员对代码进行更改、集成和构建代码时，他们也会在与生产非常相似的环境中自动测试此代码。将这种部署到不同环境并在不同环境上进行测试的过程称为 <strong>部署管道</strong>。部署管道通常具有开发环境、测试环境和临时环境，但这些阶段名称因团队、产品和组织而异。</p><figure><img src="'+h+'" alt="持续交付" tabindex="0" loading="lazy"><figcaption>持续交付</figcaption></figure><p>在每个不同的环境中，开发人员编写的代码经过不同的测试。如果代码通过了前一个环境的测试，则只会将其提升到部署管道中的下一个环境（在其上进行测试）。这样，开发人员就可以从每个环境的测试中获得新的反馈，如果出现故障，他们可以更轻松地了解问题可能出在哪里，并在代码进入生产环境之前修复它。</p><p>在此过程结束时，运维团队能够快速将应用程序部署到生产环境中。为此，持续交付的目的是拥有一个随时可以部署到生产环境的代码库，并确保以最少的努力来部署新代码。</p><p>理论上，通过持续交付，您可以按需要进行发布，可以是每天、每周、每两周或任意时刻。但是，如果您真的想得到持续交付的好处，则应尽早将变更部署到生产环境中，这样可以确保小批量发布，以便在出现问题时易于排查。</p><h3 id="持续部署" tabindex="-1"><a class="header-anchor" href="#持续部署" aria-hidden="true">#</a> 持续部署</h3><p>持续部署是持续交付的扩展，指将开发人员的更改从存储库自动发布到可供客户使用的生产环境。没有人为干预，只有测试失败时才会阻止将新的变更部署到生产中。</p><figure><img src="'+c+'" alt="持续部署" tabindex="0" loading="lazy"><figcaption>持续部署</figcaption></figure><p>持续部署解决了手动流程导致运维团队超载、减慢应用交付速度的问题。在这种做法中，开发人员所做的每项更改，只要通过了所有测试阶段，就会自动投入生产。</p><p>持续部署是加速与客户的反馈循环并减轻团队压力的绝佳方式，因为不再需要规划发布日期。开发人员可以专注于编写软件，他们会在完成工作后的几分钟内看到他们的成果立即上线。</p><h3 id="ci-cd-与-devops" tabindex="-1"><a class="header-anchor" href="#ci-cd-与-devops" aria-hidden="true">#</a> CI/CD 与 DevOps</h3><p>CI/CD 是 DevOps 方法的重要组成部分，旨在促进开发和运维团队之间的协作。CI/CD 和 DevOps 都专注于代码集成过程的自动化，从而加快一个想法（如：新功能、增强请求或 BUG 修复）从开发到部署到可为用户提供价值的生产环境中的整个流程。</p><h3 id="引进持续集成到您的公司" tabindex="-1"><a class="header-anchor" href="#引进持续集成到您的公司" aria-hidden="true">#</a> 引进持续集成到您的公司</h3><p>持续集成并不是一个一蹴而就的事物。把持续集成引进到一个公司需要通过几个不同的发展阶段：</p><ul><li><p><strong>第一阶段：无构建服务器</strong></p><p>最初，团队没有任何形式的中央构建服务器。软件是在开发人员的机器上手工触发构建的，尽管这个构建可能使用了 Ant 脚本或者其他类似的东西。源代码可能存储在一个中央源代码仓库中，但开发人员却不需要定期提交其代码变更。在计划发布一个新版本之前的那段时间里，开发人员需要手动集成他的代码改动，这个过程是非常痛苦的。</p></li><li><p><strong>第二阶段：夜间构建</strong></p><p>在这个阶段，团队有一个构建服务器，并且会按计划定期（通常是夜间）触发自动化构建过程。这种构建只是简单的代码编译，没有可靠的或可重复的单元测试。事实上，如果写了自动化测试的话，它也不是强制性地要作为构建过程的一部分，并很可能运行的不正确。在这个阶段，开发人员至少会在每天结束之前定期提交他们的更改。假如开发人员提交的代码改动与另外一个开发人员的代码改动发生冲突，构建服务器会在第二天早上通过发送邮件的形式向团队报警。不过，在这个阶段，团队仍然倾向于只使用构建服务器的消息通知机制——他们不觉得有义务去立即修复一个构建服务器出现的问题，所以有些构建可能一直坏在构建服务器上没人处理。</p></li><li><p><strong>第三阶段：夜间构建加自动化测试</strong></p><p>在这个阶段，团队开始更认真地对待持续集成和自动化测试了。无论任何时候，只要有代码更新提交到版本控制系统中，构建服务器就会触发一个构建，团队成员可以轻易地看到是哪些源代码变化触发了这个特定的构建，以及这些变化是想要处理哪些问题的。此外，构建运行脚本去编译应用程序并且运行一系列的自动化单元和集成测试。除了发送邮件以外，构建服务器也会使用更积极主动的渠道（比如：即时通信）来提醒团队成员在集成的过程中出现了哪些问题。运行失败的构建在这个阶段一般都可以很快地得到修复。</p></li><li><p><strong>第四阶段：加入度量指标</strong></p><p>在这个阶段，构建中会运行自动化的代码质量和代码覆盖率检查，来帮助评估代码库的质量和（至少在一定程度上）测试的相关性以及有效性。检查代码质量的构建也会自动为应用程序生成 API 文档。所有这些都会帮助团队保持一个高质量的代码库，也会对测试质量的下降提出警报。团队一般还会建立 “构建展示器”，它是一个项目状态的仪表盘视图，可以放在屏幕的一个突出位置上让所有团队成员看到。</p></li><li><p><strong>第五阶段：更认真地对待测试</strong></p><p>持续集成的好处是可以和可靠的测试实践紧密结合。现在，驱动测试开发模式被广泛应用，以至于自动化构建的结果越来越值得信赖。应用程序不再只是简单地被编译和测试，如果测试通过了的话，它会被自动部署到一个应用服务器上来进行更全面的端到端测试和性能测试。</p></li><li><p><strong>第六阶段：自动化验收测试和自动化部署</strong></p><p>这个阶段的开发工作是由验收测试驱动的，能更好地指导开发工作和提供高水准的项目状态报告。这些自动化测试采用行为驱动开发和验收测试驱动开发工具作为交流和文档工具以及文档测试工具，最后用非开发人员都可以理解的业务术语来发布测试结果报告。在整个开发过程的早期阶段就使用了这些高级的自动化测试，它们清晰地展示出哪些功能特性已经完成了，哪些还有待完成。不管是有改动提交，还是定期在夜间触发构建，应用程序都会被自动部署到测试环境当中以便 QA 团队进行测试。当测试人员认为可以的时候，就可以手动触发构建来部署一个新的版本去进行用户验收测试或者直接交付到生产环境。如果当前版本中出现了严重的问题，团队还可以使用构建服务器把当前版本回滚到上一个版本。</p></li><li><p><strong>第七阶段：持续部署</strong></p><p>在这个阶段，团队对于自动化的单元、集成和验收测试已经非常有信心了，在上个阶段开发的自动化部署技术现在可以用来将一些新的变化直接推送到生产中去。</p></li></ul><p>上述可能与现实情况并不匹配。比如：在集成了代码质量和代码覆盖率报告之前，您可能已经很了解自动化 Web 测试。然而，应该给出一个常用的思路，就是怎么做才能在现实世界里的公司中实现持续集成策略。</p><h2 id="术语介绍" tabindex="-1"><a class="header-anchor" href="#术语介绍" aria-hidden="true">#</a> 术语介绍</h2><h3 id="check-in" tabindex="-1"><a class="header-anchor" href="#check-in" aria-hidden="true">#</a> Check in</h3><p>将本地开发代码更改推送到公共源存储库的过程。</p><h3 id="ci-server" tabindex="-1"><a class="header-anchor" href="#ci-server" aria-hidden="true">#</a> CI server</h3><p>用于构建和测试源代码的工具。CI 服务器将告诉开发人员他们最新的代码构建是否成功以及是否继续通过测试。</p><h3 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h3><p>开发人员创建、集成、构建和测试代码的地方。</p><h3 id="部署管道-管道" tabindex="-1"><a class="header-anchor" href="#部署管道-管道" aria-hidden="true">#</a> 部署管道/管道</h3><p>这是开发人员的代码更改在完成并准备交付生产之前经历的一组阶段。通常这些是 “构建”、“单元测试”、“功能测试”、“性能测试” 和 “部署”。不同的自动化测试将在不同的阶段运行。只有当代码通过整个部署管道后，软件才能交付到生产环境。</p><h3 id="绿色建筑" tabindex="-1"><a class="header-anchor" href="#绿色建筑" aria-hidden="true">#</a> 绿色建筑</h3><p>绿色是成功的标志。绿色版本或构建版本是指已通过开发和交付过程特定阶段的测试的版本或版本。通常，软件的构建或版本不会升级到部署管道的下一阶段，除非它是 “绿色” 的。</p><h3 id="增量开发" tabindex="-1"><a class="header-anchor" href="#增量开发" aria-hidden="true">#</a> 增量开发</h3><p>增量开发是指一次构建一小部分产品，直到全部完成。在每个增量中添加零件，这些增量可能很小也可能很大。您可以将 CI 与增量开发结合使用，但通过增量开发实现持续交付或持续部署可能会比较困难，因为您必须等到所有增量完成才能交付价值。</p><h3 id="一体化" tabindex="-1"><a class="header-anchor" href="#一体化" aria-hidden="true">#</a> 一体化</h3><p>所有由个人或团队编写的代码都需要组合起来称之为 <strong>集成</strong>。在持续集成中，通常意味着个人的软件需要定期进行整合。在持续交付中，通常意味着来自不同团队的软件被集成在一起以创建整个产品。</p><h3 id="迭代开发" tabindex="-1"><a class="header-anchor" href="#迭代开发" aria-hidden="true">#</a> 迭代开发</h3><p>迭代开发是指一次构建一小部分产品，然后不断完善直至完成。该产品是迭代构建的，每次迭代都会对相同的部分进行重新设计。不同迭代中的功能之间的变化是预期和计划的。您可以将 CI、持续交付或持续部署与迭代开发结合使用。</p><h3 id="主线-干线-主线" tabindex="-1"><a class="header-anchor" href="#主线-干线-主线" aria-hidden="true">#</a> 主线/干线/主线</h3><p><code>master</code>、<code>trunk</code> 或 <code>mainline</code> 分支是源存储库的主要分支。大多数人都进行基于主干的开发，这意味着他们总是将更改集成到主线中。当个别开发人员拥有自己的分支，或者团队拥有不同功能的分支时，其他人会进行基于分支的开发。</p><h3 id="生产环境" tabindex="-1"><a class="header-anchor" href="#生产环境" aria-hidden="true">#</a> 生产环境</h3><p>这是部署或发布软件的地方，使用您的产品或网站的客户很可能正在使用此环境。</p><h3 id="红色构建" tabindex="-1"><a class="header-anchor" href="#红色构建" aria-hidden="true">#</a> 红色构建</h3><p>红色表示失败。红色版本或版本是指尚未通过开发和交付过程的特定阶段的测试的版本或版本。通常，如果软件的构建或版本是 “红色”，则不会将其提升到部署管道的下一阶段。</p><h3 id="源代码库" tabindex="-1"><a class="header-anchor" href="#源代码库" aria-hidden="true">#</a> 源代码库</h3><p>这是源代码所在的地方。开发人员拥有他们正在处理的代码的本地版本（即在他们自己的计算机上），但在开发人员签入对其所做的更改后，源代码存储库将包含所有代码。</p><h3 id="测试自动化" tabindex="-1"><a class="header-anchor" href="#测试自动化" aria-hidden="true">#</a> 测试自动化</h3><p>持续集成和持续交付需要高质量的测试自动化。测试是检查软件是否按预期工作的方法。自动化测试是经过编码并在代码签入公共源存储库后自动运行的测试。</p><p>每次集成和构建软件时都会运行单元测试。如果测试未通过，该版本的软件将被确定为失败红色。</p><p>在构建损坏的情况下，开发人员需要修复使其绿色。可以通过更改代码来修复它或删除之前破坏它的更改来实现此目的。</p><h3 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试" aria-hidden="true">#</a> 单元测试</h3><p>单元测试是代码中的自动化测试，用于测试低级的单段代码，以确保它们可用并按预期工作。单元测试被认为是实践 CI 和 CD 的先决条件。</p>',83);function k(y,E){const p=t("ExternalLinkIcon");return n(),o("div",null,[v,l(" more "),D,e("ol",null,[u,e("li",null,[O,f,C,b,e("p",null,[e("strong",null,[e("a",_,[s("敏捷开发宣言"),r(p)])]),s("：在 2001 年由 17 位敏捷方法论的拥护者和倡议者在犹他州的雪鸟滑雪场起草的，正式宣布了 "),x,s(" 和 "),G,s("，旨在指导以人为中心的迭代软件开发方法。")])])]),I,e("p",null,[s("这种从规划和开发的最早阶段到整个运行时优先考虑安全性的做法通常称为 "),e("a",m,[s("左移和右移"),r(p)]),s(" 安全性。使用左移方法实施和自动化 DevSecOps 提供了开发人员友好的护栏，可以减少构建和部署阶段的用户错误并在运行时保护工作负载。右移就是继续在后期制作环境中进行测试、质量保证和性能评估的实践。")]),S])}const A=a(g,[["render",k],["__file","index.html.vue"]]);export{A as default};