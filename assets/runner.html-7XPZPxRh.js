import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as c,c as p,b as n,e as a,d as s,w as o,f as i}from"./app-AcsUkZay.js";const u={},d=n("p",null,"极狐GitLab Runner 是在流水线中运行作业的应用，与极狐GitLab CI/CD 配合运作。",-1),b=n("h2",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),a(" 安装")],-1),v=n("p",null,"极狐GitLab Runner 是开源的，用 Go 编写。它可以作为单个二进制文件运行，且没有特定于语言的要求。",-1),m=n("p",null,"极狐GitLab Runner 还可以在 Docker 容器内运行或部署到 Kubernetes 集群。",-1),k={href:"https://docs.gitlab.cn/runner/install/",target:"_blank",rel:"noopener noreferrer"},g=i(`<ul><li>在容器中</li><li>通过手动下载二进制文件</li><li>使用 rpm/deb 软件包仓库</li></ul><p>极狐GitLab Runner 官方支持的二进制文件在以下架构中可用：</p><ul><li>x86、AMD64、ARM64、ARM、s390x 和 ppc64le</li></ul><p>官方软件包在以下 Linux 发行版中可用：</p><ul><li>CentOS、Debian、Ubuntu、RHEL、Fedora、Mint、Oracle 和 Amazon</li></ul><p>极狐GitLab Runner 官方支持以下操作系统。如果您喜欢使用非官方支持的操作系统，则其必须能够编译 Go 二进制文件。</p><ul><li>Linux、Windows、macOS 和 FreeBSD</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>出于安全和性能原因，您不应该在托管 极狐GitLab 实例的机器上安装 极狐GitLab Runner。</p></div><h3 id="linux-安装" tabindex="-1"><a class="header-anchor" href="#linux-安装" aria-hidden="true">#</a> Linux 安装</h3><p>由于兼容性原因，极狐GitLab Runner 的 <strong>主版本.小版本</strong> 应和 极狐GitLab 的 <strong>主版本.小版本</strong> 保持同步。老版本的 极狐GitLab Runner 可能适用于新版本的 极狐 GitLab，反之亦然。但是如果存在版本差异，功能特性可能不可用或无法正常工作。</p><p>在小版本更新之间保证向后兼容。但是有时小版本更新会引入要求 极狐GitLab Runner 处于相同版本的新特性功能。</p><p>添加官方 极狐GitLab 仓库：</p><ul><li><p>Debian/Ubuntu 系统</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>RHEL/CentOS 系统</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.rpm.sh&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>安装最新版本的 极狐GitLab Runner，或跳到下一步，安装特定版本。</p><ul><li><p>Debian/Ubuntu 系统</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gitlab-runner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>RHEL/CentOS 系统</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> gitlab-runner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>安装特定版本的 极狐GitLab Runner：</p><ul><li><p>Debian/Ubuntu 系统</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-cache</span> madison gitlab-runner
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gitlab-runner<span class="token operator">=</span><span class="token number">16.11</span>.1-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>RHEL/CentOS 系统</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum list gitlab-runner <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> gitlab-runner-16.11.1-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="docker-安装" tabindex="-1"><a class="header-anchor" href="#docker-安装" aria-hidden="true">#</a> Docker 安装</h3><p>一般来说，Docker Engine 的版本和 极狐GitLab Runner 容器镜像的版本不需要匹配。极狐GitLab Runner 镜像应该向后和向前兼容。然而，为确保您拥有最新的功能和安全更新，您应该使用最新的稳定 Docker 引擎版本。</p><p>一般规则是每个 极狐GitLab Runner 命令通常会被执行为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gitlab-runner <span class="token operator">&lt;</span>runner <span class="token builtin class-name">command</span> and options<span class="token punctuation">..</span>.<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以使用以下命令执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token operator">&lt;</span>chosen <span class="token function">docker</span> options<span class="token punctuation">..</span>.<span class="token operator">&gt;</span> gitlab/gitlab-runner <span class="token operator">&lt;</span>runner <span class="token builtin class-name">command</span> and options<span class="token punctuation">..</span>.<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如，可以执行以下命令获取最高级别的 极狐GitLab Runner 的帮助信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-i</span> gitlab/gitlab-runner <span class="token parameter variable">--help</span>

NAME:
   gitlab-runner - a GitLab Runner

USAGE:
   gitlab-runner <span class="token punctuation">[</span>global options<span class="token punctuation">]</span> <span class="token builtin class-name">command</span> <span class="token punctuation">[</span>command options<span class="token punctuation">]</span> <span class="token punctuation">[</span>arguments<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

VERSION:
   <span class="token number">15.11</span>.0 <span class="token punctuation">(</span>436955cb<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token punctuation">..</span>.<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简而言之，命令的 <code>gitlab-runner</code> 部分由 <code>docker run [docker options] gitlab/gitlab-runner</code> 替代，剩余部分保持与注册文档中描述的内容相一致。唯一区别是 <code>gitlab-runner</code> 命令是在 Docker 容器中执行的。</p>`,26),h=i(`<p>如果想在 Docker 容器内运行 <code>gitlab-runner</code>，您需要确保重启容器时配置没有丢失。为此，以下描述两个选项：</p><ul><li><p>选项一：使用本地系统卷挂载，启动 Runner 容器</p><p>以下示例使用挂载到 <code>gitlab-runner</code> 容器的配置卷的本地系统。这个卷用于配置资源和其他资源。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> gitlab-runner <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /srv/gitlab-runner/config:/etc/gitlab-runner <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>
  gitlab/gitlab-runner:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 macOS 上，使用 <code>/Users/Shared</code> 而不是 <code>/srv</code>。</p></li><li><p>选项二：使用 Docker 卷启动 Runner 容器</p><p>在这个例子中，您可以使用配置容器挂载您的自定义数据卷。</p><ol><li>创建 Docker 卷：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> volume create gitlab-runner-config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用刚创建的卷启动 极狐GitLab Runner 容器：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> gitlab-runner <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> gitlab-runner-config:/etc/gitlab-runner <span class="token punctuation">\\</span>
    gitlab/gitlab-runner:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="注册-runner" tabindex="-1"><a class="header-anchor" href="#注册-runner" aria-hidden="true">#</a> 注册 Runner</h2><p>极狐GitLab Runner 容器在注册之前不会处理任何作业。</p><p>引入于 极狐GitLab Runner 15.0，对注册请求格式做了更改，防止 极狐GitLab Runner 与低于 14.8 版本的 极狐GitLab 通信。您必须使用适合 极狐GitLab 版本的 Runner 版本，或升级 极狐GitLab 应用程序。</p><p>Runner 注册是将 Runner 与一个或多个 极狐GitLab 实例连接起来的过程。</p><p>您可以通过重复 <code>register</code> 命令，在同一台主机上注册多个 Runner，每个都有不同的配置。</p><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h3><p>以下步骤描述了启动暂时的 gitlab-runner 容器以注册您在安装期间创建的容器。注册完成后，生成的配置将写入您选择的配置卷（例如：<code>/srv/gitlab-runner/config</code>）并且由 Runner 使用配置卷进行加载。</p><p>使用 Docker 容器注册 Runner：</p><ol><li><p>基于挂载类型运行注册命令：</p><ul><li><p>对于本地系统卷挂载：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span> /srv/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果您在安装过程中使用了 <code>/srv/gitlab-runner/config</code> 以外的配置卷，请务必使用正确的卷更新命令。</p></div></li><li><p>对于 Docker 卷挂载：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span> gitlab-runner-config:/etc/gitlab-runner gitlab/gitlab-runner:latest register
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>输入您的 极狐GitLab 实例 URL（例如：<code>https://gitlab.com</code>）</p></li><li><p>输入注册 Runner 时获取的令牌</p></li><li><p>输入 Runner 描述。您可以在 极狐GitLab UI 中进行变更</p></li><li><p>输入以逗号隔开的与 Runner 有关的标签，您可以后续在 极狐GitLab UI 中进行变更</p></li><li><p>为 Runner 输入可选的维护记录</p></li><li><p>提供 Runner 执行器。对于大多数用例来说，输入 docker</p></li><li><p>如果您输入 docker 作为执行器。对于在 <code>.gitlab-ci.yml</code> 中没有定义镜像的项目，系统会要求您使用默认镜像</p></li></ol>`,12);function f(L,R){const r=e("ExternalLinkIcon"),l=e("RouterLink");return c(),p("div",null,[d,b,v,m,n("p",null,[a("极狐GitLab Runner 可以在 GNU/Linux、macOS、FreeBSD 和 Windows 上安装和使用。您可以通过以下方式 "),n("a",k,[a("安装"),s(r)]),a(" 极狐GitLab Runner：")]),g,n("p",null,[a("开始之前，请确保已经 "),s(l,{to:"/devops/docker/tutorials/install.html"},{default:o(()=>[a("安装 Docker")]),_:1}),a("。")]),h])}const _=t(u,[["render",f],["__file","runner.html.vue"]]);export{_ as default};
