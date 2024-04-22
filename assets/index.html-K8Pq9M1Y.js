import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as s,c,a as l,b as e,e as t,d as o,f as i}from"./app-D20DHzg5.js";const d={},g=e("p",null,"记录一些 Docker 相关的信息。",-1),h=i('<h2 id="docker-简介" tabindex="-1"><a class="header-anchor" href="#docker-简介" aria-hidden="true">#</a> Docker 简介</h2><p>Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的镜像中，然后发布到任何流行的 Linux 或 Windows 操作系统的机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。</p><p>Docker 是 PaaS 提供商 dotCloud 开源的一个基于 LXC（内核虚拟化）的高级容器引擎，源代码托管在 Github 上，基于 Go 语言并遵从 Apache2.0 协议开源。</p><h2 id="gitlab-特点" tabindex="-1"><a class="header-anchor" href="#gitlab-特点" aria-hidden="true">#</a> GitLab 特点</h2><ul><li><strong>性能开销极低</strong>：Docker 容器与虚拟机不同，它们共享宿主机的内核，因此启动速度快、占用资源少</li><li><strong>隔离性</strong>：每个容器都是一个独立的沙箱运行，在隔离的环境中互不干扰</li><li><strong>可移植性</strong>：Docker 容器可以在任何安装了 Docker 的机器上运行，无论是开发测试还是生产环境</li><li><strong>版本控制</strong>：Docker 镜像可以通过版本控制进行管理，方便追踪和回滚</li><li><strong>自动化</strong>：Docker 支持自动化构建和部署</li><li><strong>资源管理</strong>：Docker 可以对容器的资源使用进行限制和控制，如：CPU、内存、磁盘等</li><li><strong>网络和存储</strong>：Docker 提供了网络和存储的抽象，使得容器可以灵活地进行网络通信和数据持久化</li><li><strong>可扩展性</strong>：Docker 支持容器的快速创建和销毁，适合需要频繁扩展和缩减的应用场景</li></ul><p>Docker 容器运行速度很快，启动和停止可以在秒级实现，比传统虚拟机要快很多；Docker 核心解决的问题是利用容器来实现类似虚拟机的功能，从而利用更加节省的硬件资源提供给用户更多的计算资源。因此，Docker 容器除了运行其中的应用之外，基本不消耗额外的系统资源，在保证应用性能的同时，又减小了系统开销，使得一台主机上同时运行数千个 Docker 容器成为可能。Docker 操作方便，可以通过 Dockerfile 配置文件支持灵活的自动化创建和部署。</p><p>Docker 容器技术与传统虚拟机的特性比较如下：</p><table><thead><tr><th style="text-align:center;">特性</th><th style="text-align:center;">Docker 容器</th><th style="text-align:center;">虚拟机</th></tr></thead><tbody><tr><td style="text-align:center;">启动速度</td><td style="text-align:center;">秒级</td><td style="text-align:center;">分钟级</td></tr><tr><td style="text-align:center;">计算能力损耗</td><td style="text-align:center;">几乎无</td><td style="text-align:center;">损耗 50% 左右</td></tr><tr><td style="text-align:center;">性能</td><td style="text-align:center;">接近原生</td><td style="text-align:center;">弱于</td></tr><tr><td style="text-align:center;">系统支持量（单机）</td><td style="text-align:center;">上千个</td><td style="text-align:center;">几十个</td></tr><tr><td style="text-align:center;">隔离性</td><td style="text-align:center;">资源限制</td><td style="text-align:center;">完全隔离</td></tr></tbody></table><h2 id="docker-架构" tabindex="-1"><a class="header-anchor" href="#docker-架构" aria-hidden="true">#</a> Docker 架构</h2><p>Docker 使用 <strong>客户端/服务器</strong>（C/S）架构模式，使用远程 API 来管理和创建 Docker 容器。Docker 容器通过 Docker 镜像来创建。容器与镜像的关系类似于面向对象编程中的对象与类。</p><p>Docker 采用 C/S 架构 Docker daemon 作为服务端接受来自客户的请求，并处理这些请求（创建、运行、分发容器）。客户端和服务端既可以运行在一个机器上，也可通过 socket 或者 RESTful API 来进行通信。</p><p>Docker daemon 一般在宿主主机后台运行，等待接收来自客户端的消息。Docker 客户端则为用户提供一系列可执行命令，用户用这些命令实现跟 Docker daemon 交互。</p><ul><li><strong>Docker Client</strong>：客户端</li><li><strong>Docker Daemon</strong>：守护进程</li><li><strong>Docker Image</strong>：镜像</li><li><strong>Docker Container</strong>：容器</li></ul><h2 id="docker-原理" tabindex="-1"><a class="header-anchor" href="#docker-原理" aria-hidden="true">#</a> Docker 原理</h2><p>Docker 核心解决的问题是利用 LXC 来实现类似 VM 的功能，从而利用更加节省的硬件资源提供给用户更多的计算资源。同 VM 的方式不同，LXC 其并不是一套硬件虚拟化方法——无法归属到全虚拟化、部分虚拟化和半虚拟化中的任意一个，而是一个操作系统级虚拟化方法。</p><p>用户需要考虑虚拟化方法，尤其是硬件虚拟化方法，需要借助其解决的主要是以下四个问题:</p><ul><li><strong>隔离性</strong>：每个用户实例之间相互隔离，互不影响。硬件虚拟化方法给出的方法是 <strong>VM</strong>；LXC 给出的方法是 <strong>container</strong>，更细一点是 <strong>kernel namespace</strong></li><li><strong>可配额/可度量</strong>：每个用户实例可以按需提供其计算资源，所使用的资源可以被计量。硬件虚拟化方法因为虚拟了 <strong>CPU</strong>、<strong>memory</strong> 可以方便实现；LXC 则主要是利用 <strong>cgroups</strong> 来控制资源</li><li><strong>移动性</strong>：用户的实例可以很方便地复制、移动和重建。硬件虚拟化方法提供 <strong>snapshot</strong> 和 <strong>image</strong> 来实现；Docker 主要利用 <strong>AUFS</strong> 实现</li><li><strong>安全性</strong>：这个话题比较大，这里强调是 host 主机的角度尽量保护 container。硬件虚拟化的方法因为虚拟化的水平比较高，用户进程都是在 <strong>KVM</strong> 等虚拟机容器中翻译运行的；LXC 用户的进程是 <strong>lxc-start</strong> 进程的子进程，只是在 Kernel 的 <strong>namespace</strong> 中隔离的，因此需要一些 kernel 的 <strong>patch</strong> 来保证用户的运行环境不会受到来自 host 主机的恶意入侵；dotcloud 主要是利用 kernel <strong>grsec patch</strong> 解决的</li></ul><h2 id="docker-三个基本概念" tabindex="-1"><a class="header-anchor" href="#docker-三个基本概念" aria-hidden="true">#</a> Docker 三个基本概念</h2><h3 id="镜像-image" tabindex="-1"><a class="header-anchor" href="#镜像-image" aria-hidden="true">#</a> 镜像（Image）</h3><p>Docker 镜像（Image），就相当于是一个 root 文件系统。比如：官方镜像 <code>ubuntu:16.04</code> 就包含了完整的一套 Ubuntu16.04 最小系统的 root 文件系统。</p><p>Docker 提供了简单的机制来创建和更新现有的镜像，用户也可以从网上下载已经创建好的镜像直接使用。</p><h3 id="容器-container" tabindex="-1"><a class="header-anchor" href="#容器-container" aria-hidden="true">#</a> 容器（Container）</h3><p>镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的类和实例一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。</p><p>所创建的每一个容器都是相互隔离、互不可见，以保证安全性的平台。可以将容器看作是一个简易版的 Linux 环境，Docker 利用容器来运行和隔离应用。</p><h3 id="仓库-repository" tabindex="-1"><a class="header-anchor" href="#仓库-repository" aria-hidden="true">#</a> 仓库（Repository）</h3><p>仓库可看成一个代码控制中心，用来保存镜像。</p><p>Docker 仓库是用来集中保存镜像的地方，当创建了自己的镜像之后，可以使用 <code>push</code> 命令将它上传到公有仓库（Public）或者私有仓库（Private）。当下次要在另外一台机器上使用这个镜像时，只需从仓库获取。</p>',27),k=e("code",null,"tag",-1),p={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},u=e("h2",{id:"相关文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#相关文档","aria-hidden":"true"},"#"),t(" 相关文档")],-1),D={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/docker/docs",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"};function f(y,C){const r=a("ExternalLinkIcon");return s(),c("div",null,[g,l(" more "),h,e("p",null,[t("仓库注册服务器（Registry）是存放仓库的地方，其中包含了多个仓库。每个仓库集中存放某一类镜像，并且使用不同的标签（"),k,t("）来区分它们。目前最大的公共仓库是 "),e("a",p,[t("Docker Hub"),o(r)]),t("，存放了数量庞大的镜像供用户下载使用。")]),u,e("ul",null,[e("li",null,[e("a",D,[t("Docker 官网"),o(r)])]),e("li",null,[e("a",_,[t("Docker 官网文档"),o(r)])]),e("li",null,[e("a",x,[t("Docker Hub 地址"),o(r)])]),e("li",null,[e("a",m,[t("Docker GitHub 地址"),o(r)])]),e("li",null,[e("a",b,[t("Docker Compose GitHub 地址"),o(r)])])])])}const I=n(d,[["render",f],["__file","index.html.vue"]]);export{I as default};