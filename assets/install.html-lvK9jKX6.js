import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c as r,b as n,e as s,d as a,w as o,f as c}from"./app-PCpcZlGE.js";const d="/assets/sign_in-nDIQZjm6.jpg",u="/assets/account-5eRXzyd2.png",v="/assets/admin_front_page-DbpTPQB9.jpg",m="/assets/authorization-gnYuTMqA.jpg",k="/assets/authentication-OsYqIDe6.jpg",b="/assets/server_error-d8Fsw7QS.jpg",g="/assets/gerrit_front_page-4qw11ypZ.jpg",h={},f={class:"hint-container info"},_=n("p",{class:"hint-container-title"},"相关信息",-1),y=n("p",null,[s("此次安装的是 "),n("code",null,"Gerrit-3.9.1"),s(" 版本，需要 "),n("code",null,"Java 17"),s(" 版本环境")],-1),w=n("code",null,"Gerrit-3.9.1",-1),x={href:"https://gerrit-releases.storage.googleapis.com/index.html",target:"_blank",rel:"noopener noreferrer"},G=n("code",null,"Java 17",-1),I={href:"https://www.oracle.com/cn/java/technologies/downloads/#java17",target:"_blank",rel:"noopener noreferrer"},S=n("h2",{id:"基础环境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础环境","aria-hidden":"true"},"#"),s(" 基础环境")],-1),T=n("p",null,[s("安装 "),n("code",null,"Gerrit-3.9.1"),s(" 需要 "),n("code",null,"Java 17"),s(" 和 "),n("code",null,"git"),s(" 环境。")],-1),N=c(`<p>创建 <code>gerrit</code> 用户密码，并加入 <code>sudoers</code> 组。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">-s</span> /bin/bash <span class="token parameter variable">-m</span> gerrit
<span class="token function">sudo</span> <span class="token function">passwd</span> gerrit

<span class="token function">sudo</span> <span class="token function">vim</span> /etc/sudoers  <span class="token comment"># 以下内容添加到最后</span>
gerrit <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span> NOPASSWD:ALL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速安装" tabindex="-1"><a class="header-anchor" href="#快速安装" aria-hidden="true">#</a> 快速安装</h2><p>快速安装的 Gerrit 仅供演示，不得在生产环境中使用。</p><p>在 <code>gerrit</code> 用户下，下载 <code>gerrit-3.9.1.war</code> 包。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span> - gerrit
<span class="token function">wget</span> https://gerrit-releases.storage.googleapis.com/gerrit-3.9.1.war
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装并初始化 Gerrit：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> gerrit-3.9.1.war init <span class="token parameter variable">--batch</span> <span class="token parameter variable">--dev</span> <span class="token parameter variable">-d</span> ./gerrit_site
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>--batch</strong>：为多个 Gerrit 配置选项分配默认值</li><li><strong>--dev</strong>：将 Gerrit 服务器配置为使用身份验证选项 <code>DEVELOPMENT_BECOME_ANY_ACCOUNT</code>，这使您能够在不同用户之间切换以探索 Gerrit 的工作原理</li></ul><p>输出以下内容表示安装并启动成功：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Executing /home/gerrit/gerrit_site/bin/gerrit.sh start
Starting Gerrit Code Review: WARNING: Could not adjust Gerrit<span class="token string">&#39;s process for the kernel&#39;</span>s out-of-memory killer.
         This may be caused by /home/gerrit/gerrit_site/bin/gerrit.sh not being run as root.
         Consider changing the OOM score adjustment manually <span class="token keyword">for</span> Gerrit<span class="token string">&#39;s PID=32039 with e.g.:
         echo &#39;</span>-1000&#39; <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /proc/32039/oom_score_adj
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问 <code>http://localhost:8080/</code> 地址。点击右上角 <code>Sign in</code> 登录。</p><figure><img src="`+d+'" alt="登录" tabindex="0" loading="lazy"><figcaption>登录</figcaption></figure><p>直接点击 <code>admin</code> 访问，<code>admin</code> 是管理员用户。也可以输入 <strong>用户名</strong> 和 <strong>邮箱</strong>，创建普通用户访问。</p><figure><img src="'+u+'" alt="访问" tabindex="0" loading="lazy"><figcaption>访问</figcaption></figure><p>使用 <code>admin</code> 用户登录 Gerrit 首页：</p><figure><img src="'+v+`" alt="首页" tabindex="0" loading="lazy"><figcaption>首页</figcaption></figure><h2 id="生产环境安装" tabindex="-1"><a class="header-anchor" href="#生产环境安装" aria-hidden="true">#</a> 生产环境安装</h2><p>在 <code>gerrit</code> 用户下，下载 <code>gerrit-3.9.1.war</code> 包。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span> - gerrit
<span class="token function">wget</span> https://gerrit-releases.storage.googleapis.com/gerrit-3.9.1.war
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装并初始化 Gerrit：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> gerrit-3.9.1.war init <span class="token parameter variable">-d</span> ./review_site
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details class="hint-container details"><summary>初始化配置</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>*** Gerrit Code Review <span class="token number">3.9</span>.1
***

Create <span class="token string">&#39;/home/gerrit/review_site&#39;</span> <span class="token punctuation">[</span>Y/n<span class="token punctuation">]</span>? y  <span class="token comment"># 创建安装目录</span>

*** Git Repositories
***

Location of Git repositories   <span class="token punctuation">[</span>git<span class="token punctuation">]</span>:  <span class="token comment"># 指定 Git 存储库的位置。使用默认位置</span>

*** JGit Configuration
***

Auto-configured <span class="token string">&quot;receive.autogc = false&quot;</span> to disable auto-gc after git-receive-pack.

*** Index
***

Type                           <span class="token punctuation">[</span>lucene<span class="token punctuation">]</span>:  <span class="token comment"># 索引类型。使用默认索引</span>

*** User Authentication
***

Authentication method          <span class="token punctuation">[</span>openid/?<span class="token punctuation">]</span>: ?  <span class="token comment"># 用户身份验证类型。? 号输出提示</span>
       Supported options are:
         openid
         openid_sso
         http
         http_ldap
         client_ssl_cert_ldap
         ldap
         ldap_bind
         custom_extension
         development_become_any_account
         oauth
Authentication method          <span class="token punctuation">[</span>openid/?<span class="token punctuation">]</span>: http  <span class="token comment"># 选择 http 类型</span>
Get username from custom HTTP header <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>?  <span class="token comment"># 是否从自定义 HTTP 标头获取用户名。使用默认值</span>
SSO <span class="token builtin class-name">logout</span> URL                 <span class="token builtin class-name">:</span>
Enable signed push support     <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>?  
Use <span class="token keyword">case</span> insensitive usernames <span class="token punctuation">[</span>Y/n<span class="token punctuation">]</span>?

*** Review Labels
***

Install Verified label         <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>? y  <span class="token comment"># 是否安装 Verified label，用于 Jenkins 做 CI 审查。选择安装</span>

*** Email Delivery
***

SMTP server <span class="token function">hostname</span>           <span class="token punctuation">[</span>localhost<span class="token punctuation">]</span>:  <span class="token comment"># SMTP 邮件地址</span>
SMTP server port               <span class="token punctuation">[</span><span class="token punctuation">(</span>default<span class="token punctuation">)</span><span class="token punctuation">]</span>:  <span class="token comment"># 端口号</span>
SMTP encryption                <span class="token punctuation">[</span>none/?<span class="token punctuation">]</span>: ?  <span class="token comment"># SMTP 加密。? 号输出提示</span>
       Supported options are:
         none
         ssl
         tls
SMTP encryption                <span class="token punctuation">[</span>none/?<span class="token punctuation">]</span>:
SMTP username                  <span class="token builtin class-name">:</span>  <span class="token comment"># 自动发送邮箱地址，如果输入，后面需要输入邮箱的 SMTP 授权码，非邮箱用户密码</span>

*** Container Process
***

Run as                         <span class="token punctuation">[</span>gerrit<span class="token punctuation">]</span>:  <span class="token comment"># 运行进程名。使用默认值</span>
Java runtime                   <span class="token punctuation">[</span>/opt/jdk/jdk-17.0.10<span class="token punctuation">]</span>:  <span class="token comment"># Java 路径</span>
Copy gerrit-3.9.1.war to review_site/bin/gerrit.war <span class="token punctuation">[</span>Y/n<span class="token punctuation">]</span>?  <span class="token comment"># 是否拷贝。使用默认值</span>
Copying gerrit-3.9.1.war to review_site/bin/gerrit.war

*** SSH Daemon
***

Listen on address              <span class="token punctuation">[</span>*<span class="token punctuation">]</span>: <span class="token number">10.1</span>.1.10  <span class="token comment"># SSH 监听地址。* 表示所有地址</span>
Listen on port                 <span class="token punctuation">[</span><span class="token number">29418</span><span class="token punctuation">]</span>:  <span class="token comment"># SSH 监听端口。使用默认值</span>
Generating SSH <span class="token function">host</span> key <span class="token punctuation">..</span>. rsa<span class="token punctuation">..</span>. ed25519<span class="token punctuation">..</span>. ecdsa <span class="token number">256</span><span class="token punctuation">..</span>. ecdsa <span class="token number">384</span><span class="token punctuation">..</span>. ecdsa <span class="token number">521</span><span class="token punctuation">..</span>. <span class="token keyword">done</span>

*** HTTP Daemon
***

Behind reverse proxy           <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>? y  <span class="token comment"># 是否使用反向代理。选择 y</span>
Proxy uses SSL <span class="token punctuation">(</span>https://<span class="token punctuation">)</span>      <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>?  <span class="token comment"># 是否使用 SSL。使用默认值</span>
Subdirectory on proxy server   <span class="token punctuation">[</span>/<span class="token punctuation">]</span>:  <span class="token comment"># 代理服务器的子目录。使用默认值</span>
Listen on address              <span class="token punctuation">[</span>*<span class="token punctuation">]</span>: <span class="token number">10.1</span>.1.10  <span class="token comment"># 指定 Gerrit 监听地址</span>
Listen on port                 <span class="token punctuation">[</span><span class="token number">8081</span><span class="token punctuation">]</span>: <span class="token number">8088</span>  <span class="token comment"># 指定 Gerrit 监听端口</span>
Canonical URL                  <span class="token punctuation">[</span>http://10.1.1.10/<span class="token punctuation">]</span>: http://10.1.1.10:8088/  <span class="token comment"># 指定 Gerrit 基础连接</span>

*** Cache
***


*** Plugins
***

Installing plugins.
Install plugin codemirror-editor version v3.9.1 <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>? y  <span class="token comment"># 是否安装插件。选择 y</span>
Installed codemirror-editor v3.9.1
Install plugin commit-message-length-validator version v3.9.1 <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>? y
Installed commit-message-length-validator v3.9.1
Install plugin delete-project version v3.9.1 <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>? y
Installed delete-project v3.9.1
Install plugin download-commands version v3.9.1 <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>? y
Installed download-commands v3.9.1
Install plugin gitiles version v3.9.1 <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>? y
Installed gitiles v3.9.1
Install plugin hooks version v3.9.1 <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>? y
Installed hooks v3.9.1
Install plugin plugin-manager version v3.9.1 <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>? y
Installed plugin-manager v3.9.1
Install plugin replication version v3.9.1 <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>? y
Installed replication v3.9.1
Install plugin reviewnotes version v3.9.1 <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>? y
Installed reviewnotes v3.9.1
Install plugin singleusergroup version v3.9.1 <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>? y
Installed singleusergroup v3.9.1
Install plugin webhooks version v3.9.1 <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>? y
Installed webhooks v3.9.1
Initializing plugins.

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
Welcome to the Gerrit community

Find <span class="token function">more</span> information on the homepage: https://www.gerritcodereview.com
Discuss Gerrit on the mailing list: https://groups.google.com/g/repo-discuss
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
Initialized /home/gerrit/review_site
Init complete, reindexing accounts,changes,groups,projects with: reindex --site-path review_site <span class="token parameter variable">--threads</span> <span class="token number">1</span> <span class="token parameter variable">--index</span> accounts <span class="token parameter variable">--index</span> changes <span class="token parameter variable">--index</span> <span class="token function">groups</span> <span class="token parameter variable">--index</span> projectsReindexed <span class="token number">0</span> documents <span class="token keyword">in</span> accounts index <span class="token keyword">in</span> <span class="token number">0</span>.0s <span class="token punctuation">(</span><span class="token number">0.0</span>/s<span class="token punctuation">)</span>
Index accounts <span class="token keyword">in</span> version <span class="token number">13</span> is ready
Reindexing groups:      <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2</span>/2<span class="token punctuation">)</span>
Reindexed <span class="token number">2</span> documents <span class="token keyword">in</span> <span class="token function">groups</span> index <span class="token keyword">in</span> <span class="token number">0</span>.5s <span class="token punctuation">(</span><span class="token number">4.1</span>/s<span class="token punctuation">)</span>
Index <span class="token function">groups</span> <span class="token keyword">in</span> version <span class="token number">10</span> is ready
Reindexing changes: Slicing projects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2</span>/2<span class="token punctuation">)</span>, <span class="token keyword">done</span>
Reindexed <span class="token number">0</span> documents <span class="token keyword">in</span> changes index <span class="token keyword">in</span> <span class="token number">0</span>.0s <span class="token punctuation">(</span><span class="token number">0.0</span>/s<span class="token punctuation">)</span>
Index changes <span class="token keyword">in</span> version <span class="token number">84</span> is ready
Reindexing projects:    <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2</span>/2<span class="token punctuation">)</span>
Reindexed <span class="token number">2</span> documents <span class="token keyword">in</span> projects index <span class="token keyword">in</span> <span class="token number">0</span>.2s <span class="token punctuation">(</span><span class="token number">12.0</span>/s<span class="token punctuation">)</span>
Index projects <span class="token keyword">in</span> version <span class="token number">8</span> is ready
Executing /home/gerrit/review_site/bin/gerrit.sh start
Starting Gerrit Code Review: WARNING: Could not adjust Gerrit<span class="token string">&#39;s process for the kernel&#39;</span>s out-of-memory killer.
         This may be caused by /home/gerrit/review_site/bin/gerrit.sh not being run as root.
         Consider changing the OOM score adjustment manually <span class="token keyword">for</span> Gerrit<span class="token string">&#39;s PID=41520 with e.g.:
         echo &#39;</span>-1000&#39; <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /proc/41520/oom_score_adj
OK
Waiting <span class="token keyword">for</span> server on <span class="token number">10.1</span>.1.10:8088 <span class="token punctuation">..</span>. OK
Please <span class="token function">open</span> the following URL <span class="token keyword">in</span> the browser: http://10.1.1.10:8088/<span class="token comment">#/admin/projects/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>由于 Gerrit 使用反向代理，直接访问 Gerrit 监听的 <code>http://10.1.1.10:8088/</code> 地址失败。</p><figure><img src="`+m+`" alt="访问失败" tabindex="0" loading="lazy"><figcaption>访问失败</figcaption></figure><p>使用 Nginx 做 Gerrit 反向代理。</p><p>安装 Nginx：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 Nginx 中配置 Gerrit 代理，创建 <code>gerrit.conf</code> 文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/nginx/conf.d/
<span class="token function">sudo</span> <span class="token function">vim</span> gerrit.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>gerrit.conf</code> 文件中添加以下内容：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>server {
    listen 8081;
    server_name localhost;
    allow all;
    deny all;

    auth_basic &quot;Welcome to Gerrit Code Review Site!&quot;;
    auth_basic_user_file /home/gerrit/review_site/etc/.password;

    location / {
        proxy_pass http://10.1.1.10:8088;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header Host $host;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>listen</strong>：Nginx 监听端口</li><li><strong>auth_basic_user_file</strong>：HTTP 认证文件地址，用于 Gerrit 登录</li><li><strong>proxy_pass</strong>：需要代理 Gerrit 的地址及端口</li></ul><p>创建 <code>/home/gerrit/review_site/etc/.password</code> 文件，并新增用户密码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span> - gerrit
<span class="token builtin class-name">cd</span> /home/gerrit/review_site/etc
htpasswd <span class="token parameter variable">-cm</span> .password gerrit
htpasswd <span class="token parameter variable">-m</span> .password lisi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>htpasswd</code> 命令用来创建和更新用于基本认证的用户认证密码文件。如果没有此命令，RedHat 系统需要安装 <code>httpd-tools.x86_64</code> 软件包；Debian 系统需要安装 <code>apache2-utils</code> 软件包。</p><ul><li><strong>-c</strong>：创建密码文件，如果文件存在，那么内容被清空重写</li><li><strong>-m</strong>：使用 <code>MD5</code> 加密</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>.password</code> 是隐藏文件，需要使用 <code>ls -a</code> 命令才可以显示</p></div><p>检查并修改 Gerrit 配置文件 <code>gerrit.config</code> 以下内容：</p><div class="language-config line-numbers-mode" data-ext="config"><pre class="language-config"><code>[gerrit]
        basePath = git
        canonicalWebUrl = http://10.1.1.10:8088/
        ...
[auth]
        type = HTTP
        ...
[httpd]
        listenUrl = proxy-http://10.1.1.10:8088/
        ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>canonicalWebUrl</strong>：要访问的 Gerrit 的默认 URL</li><li><strong>type</strong>：Gerrit 采用的用户身份验证类型为 HTTP</li><li><strong>listenUrl</strong>：内部 HTTP 守护程序的侦听套接字的配置。使用 <code>proxy-http://</code> 反向代理</li></ul><p>重启 Gerrit 和 Nginx 服务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/gerrit/review_site/bin
./gerrit.sh restart
<span class="token function">sudo</span> systemctl restart nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问 <code>http://10.1.1.10:8081/</code> 代理地址，并用 <code>gerrit</code> 账号登录。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>浏览器打开后，通过 Web 界面登录 <code>Gerrit</code>。第一个登录并注册帐户的用户将自动被设置为管理员用户并加入的管理员组中，允许通过 Web 和 <code>SSH</code> 进行服务器管理。后续用户将自动注册为普通用户</p><p>HTTP 认证方式的缺点除了在用户密码文件管理上需要管理员手工维护比较麻烦之外，还有一个缺点就是用户一旦登录成功后，想退出登录或者更换其他用户帐号登录变得非常麻烦，除非关闭浏览器。<strong>关于切换用户有一个小窍门</strong>：例如：Gerrit 登录 URL 为 <code>http://localhost:port/login/</code>，则用浏览器访问 <code>http://user:passwd@localhost:port/login/</code>，即用错误的用户名和密码覆盖掉浏览器缓存的认证用户名和密码，这样就可以重新认证了</p></div><figure><img src="`+k+'" alt="身份认证" tabindex="0" loading="lazy"><figcaption>身份认证</figcaption></figure><p>输入用户密码点击 <em>登录</em> 后，出现以下问题：</p><figure><img src="'+b+`" alt="500 Internal Server Error" tabindex="0" loading="lazy"><figcaption>500 Internal Server Error</figcaption></figure><p>使用 <code>sudo cat /var/log/nginx/error.log</code> 命令查看 Nginx 错误 <code>log</code>：</p><div class="language-log line-numbers-mode" data-ext="log"><pre class="language-log"><code><span class="token date number">2024/03/19</span> <span class="token time number">10:43:14</span> <span class="token punctuation">[</span>crit<span class="token punctuation">]</span> <span class="token number">462000</span><span class="token operator">#</span><span class="token number">0</span><span class="token operator">:</span> <span class="token operator">*</span><span class="token number">19</span> open<span class="token operator">(</span><span class="token operator">)</span> <span class="token string">&quot;/home/gerrit/review_site/etc/.password&quot;</span> 
<span class="token property">failed (13:</span> Permission denied<span class="token operator">)</span><span class="token punctuation">,</span> client<span class="token operator">:</span> <span class="token ip-address constant">10.1.1.1</span><span class="token punctuation">,</span> server<span class="token operator">:</span> localhost<span class="token punctuation">,</span> request<span class="token operator">:</span> 
<span class="token string">&quot;GET /favicon.ico HTTP/1.1&quot;</span><span class="token punctuation">,</span> host<span class="token operator">:</span> <span class="token string">&quot;10.1.1.10:8081&quot;</span><span class="token punctuation">,</span> referrer<span class="token operator">:</span> <span class="token string">&quot;http://10.1.1.10:8081/&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此错误说明没有 <code>/home/gerrit/review_site/etc/.password (13: Permission denied)</code> 的访问权限。</p><p>由于 <code>/home/gerrit/review_site/etc/.password</code> 文件是在 <code>gerrit</code> 用户下创建的，只有 <code>gerrit</code> 用户有访问权限，<code>nginx</code> 用户没有访问权限。</p><ul><li><p><strong>解决方法 1</strong></p><p>用 <code>setfacl</code> 命令使 <code>nginx</code> 组对 <code>/home/gerrit</code> 目录有读（<code>r</code>）和执行（<code>x</code>）的权限：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>setfacl <span class="token parameter variable">-m</span> g:nginx:rx /home/gerrit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>解决方法 2</strong></p><p>直接修改 <code>/home/gerrit</code> 目录的访问权限：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">755</span> /home/gerrit/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>再次访问 <code>http://10.1.1.10:8081/</code> 代理地址：</p><figure><img src="`+g+'" alt="首页" tabindex="0" loading="lazy"><figcaption>首页</figcaption></figure>',55);function j(P,R){const e=t("ExternalLinkIcon"),i=t("RouterLink");return p(),r("div",null,[n("div",f,[_,y,n("ul",null,[n("li",null,[w,s(),n("a",x,[s("下载地址"),a(e)]),s("，根据版本下载")]),n("li",null,[G,s(),n("a",I,[s("下载地址"),a(e)])])])]),S,T,n("ul",null,[n("li",null,[a(i,{to:"/computers/dev_env/jdk.html"},{default:o(()=>[s("Java 安装教程")]),_:1})]),n("li",null,[a(i,{to:"/computers/dev_env/git.html"},{default:o(()=>[s("Git 安装教程")]),_:1})])]),N])}const q=l(h,[["render",j],["__file","install.html.vue"]]);export{q as default};
