import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,f as a}from"./app-bjPi1agL.js";const t={},c=a(`<p>Docker Engine 是一种开源容器化技术，用于构建和容器化应用程序。Docker Engine 充当客户端-服务器应用程序，具有以下功能：</p><ul><li>具有长时间运行的守护进程的服务器 <code>dockerd</code></li><li>API 指定程序可用于与 Docker 守护进程通信并指示其的接口</li><li>命令行界面（CLI）客户端 <code>docker</code></li></ul><p>CLI 使用 Docker API 通过脚本或直接 CLI 命令来控制 Docker 守护程序或与之交互。许多其他 Docker 应用程序使用底层 API 和 CLI。守护进程创建并管理 Docker 对象，例如：映像、容器、网络和卷。</p><h2 id="linux-安装" tabindex="-1"><a class="header-anchor" href="#linux-安装" aria-hidden="true">#</a> Linux 安装</h2><p>分别在 Debian/Ubuntu-18.04 和 RedHat/CentOS-Stream-8 系统中安装。</p><h3 id="卸载旧版本" tabindex="-1"><a class="header-anchor" href="#卸载旧版本" aria-hidden="true">#</a> 卸载旧版本</h3><ul><li><p>Debian/Ubuntu 系统</p><p>在安装 Docker Engine 之前，您需要卸载所有冲突的软件包。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">pkg</span> <span class="token keyword">in</span> docker.io docker-doc <span class="token function">docker-compose</span> docker-compose-v2 podman-docker containerd runc<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">sudo</span> <span class="token function">apt-get</span> remove <span class="token variable">$pkg</span><span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>RedHat/CentOS 系统</p><p>旧版本的 Docker 采用 <code>docker</code> 或 <code>docker-engine</code>。在尝试安装新版本之前卸载任何此类旧版本以及相关的依赖项。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                docker-client <span class="token punctuation">\\</span>
                docker-client-latest <span class="token punctuation">\\</span>
                docker-common <span class="token punctuation">\\</span>
                docker-latest <span class="token punctuation">\\</span>
                docker-latest-logrotate <span class="token punctuation">\\</span>
                docker-logrotate <span class="token punctuation">\\</span>
                docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>可能会报告您没有安装这些软件包。</p><p>卸载 Docker 时，存储在 <code>/var/lib/docker/</code> 其中的映像、容器、卷和网络不会自动删除。</p><h3 id="debian-ubuntu-系统" tabindex="-1"><a class="header-anchor" href="#debian-ubuntu-系统" aria-hidden="true">#</a> Debian/Ubuntu 系统</h3><p>在新主机上首次安装 Docker Engine 之前，需要设置 Docker 存储库。之后，您可以从存储库安装和更新 Docker。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Add Docker&#39;s official GPG key:</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> ca-certificates <span class="token function">curl</span>
<span class="token function">sudo</span> <span class="token function">install</span> <span class="token parameter variable">-m</span> 0755 <span class="token parameter variable">-d</span> /etc/apt/keyrings
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/ubuntu/gpg <span class="token parameter variable">-o</span> /etc/apt/keyrings/docker.asc
<span class="token function">sudo</span> <span class="token function">chmod</span> a+r /etc/apt/keyrings/docker.asc

<span class="token comment"># Add the repository to Apt sources:</span>
<span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>
  <span class="token string">&quot;deb [arch=<span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span> signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \\
  <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">.</span> /etc/os-release <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$VERSION_CODENAME</span>&quot;</span><span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span> <span class="token punctuation">\\</span>
  <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null
<span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装 Docker 最新最新版本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="redhat-centos-系统" tabindex="-1"><a class="header-anchor" href="#redhat-centos-系统" aria-hidden="true">#</a> RedHat/CentOS 系统</h3><p>在新主机上首次安装 Docker Engine 之前，需要设置 Docker 存储库。之后，您可以从存储库安装和更新 Docker。</p><p>安装 <code>yum-utils</code> 软件包（提供 <code>yum-config-manager</code> 实用程序）并设置存储库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
<span class="token function">sudo</span> yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装最新版本 Docker 引擎、<code>containerd</code> 和 <code>Docker Compose</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果提示接受 GPG 密钥，请验证指纹是否匹配 <code>060A 61C5 1B55 8A7F 742B 77AA C52F EB6B 621E 9F35</code>，如果匹配，则接受。</p><p>此命令会安装 Docker，但不会启动 Docker。它还创建一个 <code>docker</code> 组，但是默认情况下不会将任何用户添加到该组。</p><p>启动 Docker 服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="卸载-docker-engine" tabindex="-1"><a class="header-anchor" href="#卸载-docker-engine" aria-hidden="true">#</a> 卸载 Docker Engine</h2><p>卸载 Docker Engine、CLI、containerd 和 Docker Compose 软件包。</p><ul><li><p>Debian/Ubuntu 系统</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>RedHat/CentOS 系统</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>主机上的映像、容器、卷或自定义配置文件不会自动删除。要删除所有映像、容器和卷：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>您必须手动删除任何编辑的配置文件。</p><h2 id="控制-docker-服务" tabindex="-1"><a class="header-anchor" href="#控制-docker-服务" aria-hidden="true">#</a> 控制 Docker 服务</h2><p>使用 <code>systemd</code> 控制 Docker 服务命令：</p><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>sudo systemctl start docker</code></td><td style="text-align:left;">启动服务</td></tr><tr><td style="text-align:left;"><code>sudo systemctl stop docker</code></td><td style="text-align:left;">停止服务</td></tr><tr><td style="text-align:left;"><code>sudo systemctl restart docker</code></td><td style="text-align:left;">重启服务</td></tr><tr><td style="text-align:left;"><code>sudo systemctl status docker</code></td><td style="text-align:left;">显示所有服务状态</td></tr><tr><td style="text-align:left;"><code>sudo systemctl enable docker</code></td><td style="text-align:left;">开机自启</td></tr><tr><td style="text-align:left;"><code>sudo systemctl disable docker</code></td><td style="text-align:left;">禁止开机自启</td></tr></tbody></table>`,33),o=[c];function d(i,l){return n(),s("div",null,o)}const u=e(t,[["render",d],["__file","install.html.vue"]]);export{u as default};