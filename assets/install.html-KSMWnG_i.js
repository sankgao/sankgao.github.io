import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as d,b as n,e,d as a,f as s}from"./app-tWdy4GVC.js";const r="/assets/git_license-XnAoLg_J.jpg",p="/assets/git_install_position-8HtASqfQ.jpg",g="/assets/git_set_components-8saWKb9X.jpg",u="/assets/git_start_menu-zpZ_yE1T.jpg",m="/assets/git_default_editor-fB3dHE_r.jpg",f="/assets/git_initial_branch-tVDrEFBN.jpg",b="/assets/git_env_variable-bH2nT7NG.jpg",h="/assets/git_ssh_executable-e2kNfNvD.jpg",v="/assets/git_https_transport-zM-4MVR0.jpg",_="/assets/git_line_ending-2SdJiehF.jpg",k="/assets/git_bash_terminal-m7vAkDco.jpg",x="/assets/git_pull-s1hf2v6a.jpg",G="/assets/git_credential-RexOYFjt.jpg",t="/assets/git_extra_options-Z3dQeOK6.jpg",w="/assets/git_install_complete-5Kpb4B1o.jpg",y={},S=s(`<h2 id="linux-安装" tabindex="-1"><a class="header-anchor" href="#linux-安装" aria-hidden="true">#</a> Linux 安装</h2><p>分别在 Debian/Ubuntu-18.04 和 RedHat/CentOS-Stream-8 系统中安装。</p><p>以下两种方法都不需要配置系统环境变量。</p><h3 id="使用-apt-或-yum-安装" tabindex="-1"><a class="header-anchor" href="#使用-apt-或-yum-安装" aria-hidden="true">#</a> 使用 APT 或 YUM 安装</h3><ul><li><p>Debian/Ubuntu 系统</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 <code>git</code> 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token parameter variable">--version</span>

<span class="token function">git</span> version <span class="token number">2.17</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>RedHat/CentOS 系统</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 <code>git</code> 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token parameter variable">--version</span>

<span class="token function">git</span> version <span class="token number">2.43</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="使用源代码安装" tabindex="-1"><a class="header-anchor" href="#使用源代码安装" aria-hidden="true">#</a> 使用源代码安装</h3><p>从源码安装 <code>Git</code> 您能得到最新的版本。二进制安装程序倾向于有一些滞后，当然近几年 <code>Git</code> 已经成熟，这个差异不再显著。</p><p>从源码安装 <code>Git</code>，需要安装 <code>Git</code> 一些依赖的库。</p>`,8),N={class:"hint-container info"},z=n("p",{class:"hint-container-title"},"相关信息",-1),U={href:"https://docs.fedoraproject.org/en-US/epel/#How_can_I_use_these_extra_packages.3F",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"docbook2X",-1),W=s(`<p><code>CentOS-Stream-8</code> 安装 <code>EPEL</code> 库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dnf config-manager --set-enabled powertools
<span class="token function">sudo</span> dnf <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release epel-next-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),j=s(`<ul><li><p>Debian/Ubuntu 系统：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> dh-autoreconf libcurl4-gnutls-dev libexpat1-dev <span class="token punctuation">\\</span>
gettext libz-dev libssl-dev asciidoc xmlto docbook2x install-info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>RedHat/CentOS 系统：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> dh-autoreconf curl-devel expat-devel gettext-devel <span class="token punctuation">\\</span>
openssl-devel perl-devel zlib-devel asciidoc xmlto docbook2X getopt
<span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/bin/db2x_docbook2texi /usr/bin/docbook2x-texi  <span class="token comment"># 解决二进制文件名的不同</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,1),B=n("code",null,"tar",-1),H={href:"https://www.kernel.org/pub/software/scm/git",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/git/git/tags",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"GitHub",-1),A=n("code",null,"Kernel.org",-1),L=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> /opt/git
<span class="token builtin class-name">cd</span> /opt/git
<span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-zxf</span> git-2.44.0.tar.gz
<span class="token builtin class-name">cd</span> git-2.44.0
<span class="token function">sudo</span> <span class="token function">make</span> configure
<span class="token function">sudo</span> ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr
<span class="token function">sudo</span> <span class="token function">make</span> all doc info
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span> install-doc install-html install-info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成后，您可以使用 <code>Git</code> 来获取 <code>Git</code> 的更新：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone git://git.kernel.org/pub/scm/git/git.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 Git 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token parameter variable">--version</span>

<span class="token function">git</span> version <span class="token number">2.44</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="windows-安装" tabindex="-1"><a class="header-anchor" href="#windows-安装" aria-hidden="true">#</a> Windows 安装</h2><p>不需要配置系统环境变量。</p>`,7),F={href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"E:\\Software\\Git\\",-1),T=s('<p>双击 <code>Git-2.44.0-64-bit.exe</code> 程序包开始安装。并点击 <em>Next</em>。</p><figure><img src="'+r+'" alt="许可申明" tabindex="0" loading="lazy"><figcaption>许可申明</figcaption></figure><p>点击 <em>Browse</em>，选择 <code>Git</code> 安装路径。并点击 <em>Next</em>。</p><figure><img src="'+p+'" alt="选择安装路径" tabindex="0" loading="lazy"><figcaption>选择安装路径</figcaption></figure><p>选择安装组件，保存默认选择，额外选择 <em>Additional icons 和 (NEW!) Add a Git Bash Profile to Windows Termainal</em>。并点击 <em>Next</em>。</p><ul><li><strong>Additional icons</strong>：在桌面上添加图标</li><li><strong>Windows Explorer intergration</strong>：Windows 资源管理器集成 <code>Git Bash</code>、<code>git GUI</code></li><li><strong>Git LFS (Large File Support)</strong>：<code>Git LFS</code> 大文件支持</li><li><strong>Associate .git* configuration files with the default text editor</strong>：将 <code>.git*</code> 配置文件与默认文本编辑器关联</li><li><strong>Associate .sh files to be run with Bash</strong>：将要运行的 <code>.sh</code> 文件与 <code>Bash</code> 关联</li><li><strong>Check daily for Git for Windows updates</strong>：每天检查 Windows 上 Git 的更新</li><li><strong>(NEW!) Add a Git Bash Profile to Windows Termainal</strong>：将 <code>Git Bash</code> 配置文件添加到 <code>Windows</code> 终端</li><li><strong>(NEW!) Scalar (Git add-on to manage large-scale repositories)</strong>：<code>Scalar</code> 用于管理大型存储库的 <code>Git</code> 插件</li></ul><figure><img src="'+g+'" alt="选择安装组件" tabindex="0" loading="lazy"><figcaption>选择安装组件</figcaption></figure><p>选择开始菜单目录，保持默认即可。并点击 <em>Next</em>。</p><figure><img src="'+u+'" alt="选择开始菜单目录" tabindex="0" loading="lazy"><figcaption>选择开始菜单目录</figcaption></figure><p>选择 <code>Git</code> 默认编辑器，保持默认即可，默认使用 <code>Vim</code>。并点击 <em>Next</em>。</p><figure><img src="'+m+'" alt="选择默认编辑器" tabindex="0" loading="lazy"><figcaption>选择默认编辑器</figcaption></figure><p>选择 <code>Git</code> 初始化分支名称，选择 <em>Override the default branch name for new repositories</em> 值为 <code>main</code>。并点击 <em>Next</em>。</p><ul><li><strong>Let Git decide</strong>：由 <code>Git</code> 决定，默认值为 <code>master</code></li><li><strong>Override the default branch name for new repositories</strong>：覆盖新存储库的默认分支名称，自定义值</li></ul><figure><img src="'+f+'" alt="选择 Git 初始化分支名称" tabindex="0" loading="lazy"><figcaption>选择 Git 初始化分支名称</figcaption></figure><p>设置环境变量，保持默认即可。并点击 <em>Next</em>。</p><ul><li><strong>Use Git from Git Bash only</strong>：只能从 <code>Git Bash</code> 中使用 <code>Git</code> 命令</li><li><strong>Git from the command line and also from 3rd-party software</strong>：允许从命令行或第三方软件进使用 <code>Git</code></li><li><strong>Use Git and optional Unix tools from the Command Prompt</strong>：覆盖 <code>Windows</code> 的一些工具如：<code>find</code></li></ul><figure><img src="'+b+'" alt="设置环境变量" tabindex="0" loading="lazy"><figcaption>设置环境变量</figcaption></figure><p>选择 <code>ssh</code> 执行文件，保持默认即可。并点击 <em>Next</em>。</p><ul><li><strong>Use Bundled OpenSSH</strong>：使用 <code>Git</code> 自带的 <code>OpenSSH</code></li><li><strong>Use external OpenSSH</strong>：使用外部 <code>OpenSSH</code></li></ul><figure><img src="'+h+'" alt="选择 ssh 执行文件" tabindex="0" loading="lazy"><figcaption>选择 ssh 执行文件</figcaption></figure><p>选择 <code>https</code> 传输后端，保持默认即可。并点击 <em>Next</em>。</p><ul><li><strong>Use the OpenSSH library</strong>：使用公共 <code>OpenSSH</code> 库</li><li><strong>Use the native Windows Secure Channel library</strong>：使用本机 <code>Windows</code> 安全通道库</li></ul><figure><img src="'+v+'" alt="选择 https 传输后端" tabindex="0" loading="lazy"><figcaption>选择 https 传输后端</figcaption></figure><p>配置结束行转换方式，保持默认即可。并点击 <em>Next</em>。</p><ul><li><strong>Checkout Windows-style, commit Unix-style line endings</strong>：行结尾下拉转换为 Windows 样式，提交转换为 Unix 样式</li><li><strong>Checkout as-is, commit Unix-style line endings</strong>：行结尾按原样下拉，提交转换为 Unix 风格</li><li><strong>Checkout as-is, commit as-is</strong>：行结尾按原样下拉，按原样提交</li></ul><figure><img src="'+_+'" alt="结束行转换方式" tabindex="0" loading="lazy"><figcaption>结束行转换方式</figcaption></figure><p>配置终端模拟器，保持默认即可。并点击 <em>Next</em>。</p><ul><li><strong>Use MinlrY (the default terminal of MsYs2)</strong>：<code>Git Bash</code> 将使用 <code>MinTTY</code> 作为终端模拟器，该模拟器具有可调整大小的窗口</li><li><strong>Use windows’ default console window</strong>：使用 <code>Windows</code> 的默认控制台窗口（<code>cmd.exe</code>）</li></ul><figure><img src="'+k+'" alt="配置终端模拟器" tabindex="0" loading="lazy"><figcaption>配置终端模拟器</figcaption></figure><p>选择 <code>Git</code> 下拉默认行为，保持默认即可。并点击 <em>Next</em>。</p><ul><li><strong>Default (fast-forward or merge)</strong>：默认值（快进或合并）。尽可能快进当前分支到一个被捕获的分支，否则创建合并提交</li><li><strong>Rebase</strong>：将当前分支改为获取的分支。如果没有要重基的本地提交，这相当于快进</li><li><strong>Only ever fast-forward</strong>：只有快速前进，快进到获取的分支。如果不可能，就失败</li></ul><figure><img src="'+x+'" alt="下拉默认行为" tabindex="0" loading="lazy"><figcaption>下拉默认行为</figcaption></figure><p>选择凭据帮助程序，保持默认即可。并点击 <em>Next</em>。</p><ul><li><strong>Git Credential Manager</strong>：使用凭据帮助程序</li><li><strong>None</strong>：不使用凭据帮助程序</li></ul><figure><img src="'+G+'" alt="选择凭据帮助程序" tabindex="0" loading="lazy"><figcaption>选择凭据帮助程序</figcaption></figure><p>配置额外特性选项，保持默认即可。并点击 <em>Next</em>。</p><ul><li><strong>Enable file system caching</strong>：批量读取文件系统数据并将其缓存在内存中进行某些操作</li><li><strong>Enable symbolic links</strong>：启用符号链接</li></ul><figure><img src="'+t+'" alt="配置额外特性选项" tabindex="0" loading="lazy"><figcaption>配置额外特性选项</figcaption></figure><p>配置实验选项，保持默认即可。并点击 <em>Install</em>。</p><ul><li><strong>Enable experimental support for pseudo consoles</strong>：支持伪控制台的实验性支持</li><li><strong>Enable experimental built-in file system monitor</strong>：启用实验性内置文件系统监视器</li></ul><figure><img src="'+t+'" alt="配置实验选项" tabindex="0" loading="lazy"><figcaption>配置实验选项</figcaption></figure><p>等待安装，取消勾选，点击 <em>Finish</em>，完成 <code>Git</code> 安装。</p><ul><li><strong>launch git bash</strong>：启动 <code>git bash</code></li><li><strong>view release notes</strong>：查看发行说明</li></ul><figure><img src="'+w+`" alt="安装完成" tabindex="0" loading="lazy"><figcaption>安装完成</figcaption></figure><p>按 <kbd>Win</kbd> + <kbd>R</kbd> 键，在运行中输入 <code>cmd</code> 打开终端控制器。</p><p>在终端控制器中输入 <code>git --version</code> 命令，查看 <code>Git</code> 版本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token operator">&gt;</span>git <span class="token parameter variable">--version</span>
<span class="token function">git</span> version <span class="token number">2.44</span>.0.windows.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,47);function D(M,V){const i=l("ExternalLinkIcon");return c(),d("div",null,[S,n("div",N,[z,n("p",null,[e("使用 RedHat 系统，需要安装 "),n("a",U,[e("EPEL 库"),a(i)]),e(" 以便下载 "),E,e(" 等包。")]),W]),j,n("p",null,[e("下载 "),B,e(" 包。可以从 "),n("a",H,[e("Kernel.org"),a(i)]),e(" 网站获取，也可以从 "),n("a",O,[e("GitHub"),a(i)]),e(" 网站上获得。通常在 "),C,e(" 上的是最新版本；"),A,e(" 上包含有文件下载签名，如果您想验证下载正确性的话会用到。")]),L,n("p",null,[e("将 "),n("a",F,[e("Git-2.44.0-64-bit.exe"),a(i)]),e(" 包解压到您要存放的位置。例如："),R,e(" 文件夹下。")]),T])}const K=o(y,[["render",D],["__file","install.html.vue"]]);export{K as default};
