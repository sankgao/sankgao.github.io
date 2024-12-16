import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as t,c as r,b as n,e,d as c,f as l}from"./app-OEeKShJw.js";const d="/assets/bad_request-0cmTOMAQ.jpg",o="/assets/phpldapadmin_page-A9fmEKSw.jpg",p="/assets/phpldapadmin_login-hEuCaq3D.jpg",u="/assets/phpldapadmin_page1-hvhznEU3.jpg",v="/assets/create_child_entry-SJ8X968R.jpg",m="/assets/courier_mail_account-LrUoj_DQ.jpg",g="/assets/create_user-G_v0sv5Q.jpg",b="/assets/commit_ldap-67o_BpT_.jpg",k="/assets/gerrit_login-sxCawW3y.jpg",h="/assets/gerrit_page-yPqjvYKn.jpg",f={},_={href:"https://github.com/GerritCodeReview/docker-gerrit",target:"_blank",rel:"noopener noreferrer"},x=l(`<h2 id="快速安装" tabindex="-1"><a class="header-anchor" href="#快速安装" aria-hidden="true">#</a> 快速安装</h2><p>快速启动 Gerrit Code Review 示例（开箱即用），如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-ti</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token parameter variable">-p</span> <span class="token number">29418</span>:29418 docker.io/gerritcodereview/gerrit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待几分钟，直到 <code>Gerrit Code Review NNN ready</code> 消息出现，其中 <code>NNN</code> 是您当前的 Gerrit 版本，然后打开浏览器进行 <code>http://localhost:8080</code>，您将进入 Gerrit Code Review。</p><p>如果运行以前的 Gerrit Code Review 版本，例如：要运行 <code>3.8.0</code> 版本，请使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-ti</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token parameter variable">-p</span> <span class="token number">29418</span>:29418 docker.io/gerritcodereview/gerrit:3.8.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="生产环境安装" tabindex="-1"><a class="header-anchor" href="#生产环境安装" aria-hidden="true">#</a> 生产环境安装</h2><p>生产环境中在 Docker 上运行 Gerrit 时，最好依赖比 Docker 内部 AUFS 性能和可靠性更好的物理外部存储，以及外部配置目录（<code>etc</code>）以实现更好的变更管理可追溯性。此外，您可能希望使用适当的外部身份验证（例如：<code>ldap</code>）。</p><h3 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像" aria-hidden="true">#</a> 拉取镜像</h3><p>拉取 Gerrit 服务需要的镜像。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull gerritcodereview/gerrit 
<span class="token function">docker</span> pull osixia/openldap 
<span class="token function">docker</span> pull osixia/phpldapadmin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建挂载目录" tabindex="-1"><a class="header-anchor" href="#创建挂载目录" aria-hidden="true">#</a> 创建挂载目录</h3><p>创建挂载数据存储目录。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>挂载目录也可以不存在，在构建 docker 容器时会自动创建。</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/gerrit/<span class="token punctuation">{</span>etc,git,db,index,cache,.ssh<span class="token punctuation">}</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/gerrit/ldap/<span class="token punctuation">{</span>var,etc<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-gerrit-config-文件" tabindex="-1"><a class="header-anchor" href="#配置-gerrit-config-文件" aria-hidden="true">#</a> 配置 gerrit.config 文件</h3><div class="hint-container tip"><p class="hint-container-title">修改以下参数值</p><ul><li><code>canonicalWebUrl</code></li></ul></div><p>配置 Gerrit 管理文件：<code>/opt/gerrit/etc/gerrit.config</code>。</p><div class="language-config line-numbers-mode" data-ext="config"><pre class="language-config"><code>[gerrit]
  basePath = git
  # 要访问的 Gerrit 的默认 URL。注意端口号要跟 docker-compose 一致
  canonicalWebUrl = http://localhost:port

[index]
  type = LUCENE

[auth]
  type = ldap
  gitBasicAuth = true

[ldap]
  server = ldap://ldap
  username=cn=admin,dc=example,dc=org
  accountBase = dc=example,dc=org
  accountPattern = (&amp;(objectClass=person)(uid=\${username}))
  accountFullName = displayName
  accountEmailAddress = mail

[sendemail]
  smtpServer = localhost  # 使用本地邮箱服务

[sshd]
  listenAddress = *:29418

[httpd]
  listenUrl = http://*:8080/

[cache]
  directory = cache

[container]
  user = root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他邮箱服务配置。例如：配置 163 邮箱服务。</p><div class="language-config line-numbers-mode" data-ext="config"><pre class="language-config"><code>[sendemail]
  smtpServer = smtp.163.com  # SMTP 邮箱地址
  smtpUser = username@163.com  # SMTP 身份验证用户邮箱地址
  smtpServerPort = 25  # SMTP 监听端口。需要在容器内宿主机上都要开放该端口
  from = username@163.com  # 指定 Gerrit 将在任何生成的电子邮件的 “发件人” 字段中放置的名称和地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-secure-config-文件" tabindex="-1"><a class="header-anchor" href="#配置-secure-config-文件" aria-hidden="true">#</a> 配置 secure.config 文件</h3><div class="hint-container tip"><p class="hint-container-title">修改以下参数值</p><ul><li><code>password</code></li><li><code>smtpPass</code></li></ul></div><p>配置认证文件：<code>/opt/gerrit/etc/secure.config</code>。</p><div class="language-config line-numbers-mode" data-ext="config"><pre class="language-config"><code>[ldap]
  password = secret  # ldap 管理员密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果配置的有邮箱，认证文件如下：</p><div class="language-config line-numbers-mode" data-ext="config"><pre class="language-config"><code>[ldap]
  password = secret  # ldap 管理员密码
[sendemail]
  smtpPass = XXXXXXXXXXXXXXXX # 配置 SMTP 邮箱 16 位的授权码，不是邮箱密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-docker-compose-文件" tabindex="-1"><a class="header-anchor" href="#配置-docker-compose-文件" aria-hidden="true">#</a> 配置 docker-compose 文件</h3><div class="hint-container tip"><p class="hint-container-title">修改以下参数值</p><ul><li><code>CANONICAL_WEB_URL</code></li><li><code>LDAP_ADMIN_PASSWORD</code></li></ul></div><p>配置 Gerrit docker-compose 文件：<code>/opt/gerrit/docker-compose.yml</code>。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">gerrit</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.io/gerritcodereview/gerrit
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;29418:29418&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ldap  <span class="token comment"># ldap 服务启动成功后，再启动 gerrit 服务</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /opt/gerrit/etc<span class="token punctuation">:</span>/var/gerrit/etc
      <span class="token punctuation">-</span> /opt/gerrit/git<span class="token punctuation">:</span>/var/gerrit/git
      <span class="token punctuation">-</span> /opt/gerrit/db<span class="token punctuation">:</span>/var/gerrit/db
      <span class="token punctuation">-</span> /opt/gerrit/index<span class="token punctuation">:</span>/var/gerrit/index
      <span class="token punctuation">-</span> /opt/gerrit/cache<span class="token punctuation">:</span>/var/gerrit/cache
      <span class="token punctuation">-</span> /opt/gerrit/.ssh<span class="token punctuation">:</span>/var/gerrit/.ssh
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> CANONICAL_WEB_URL=http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>port
    <span class="token key atrule">command</span><span class="token punctuation">:</span> init  <span class="token comment"># 初始化 Gerrit 服务配置，启动完成后注释该项</span>

  <span class="token key atrule">ldap</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.io/osixia/openldap
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;389:389&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;636:636&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> LDAP_ADMIN_PASSWORD=secret
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /opt/gerrit/ldap/var<span class="token punctuation">:</span>/var/lib/ldap
      <span class="token punctuation">-</span> /opt/gerrit/ldap/etc<span class="token punctuation">:</span>/etc/ldap/slapd.d

  <span class="token key atrule">ldap-admin</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.io/osixia/phpldapadmin
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6443:443&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PHPLDAPADMIN_LDAP_HOSTS=ldap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化-gerrit" tabindex="-1"><a class="header-anchor" href="#初始化-gerrit" aria-hidden="true">#</a> 初始化 Gerrit</h3><p>外部文件系统需要事先使用 <code>gerrit.war</code> 进行初始化：</p><ul><li>在 Gerrit 中创建的所有项目和所有用户 Git 存储库</li><li>在 Git 存储库中创建的系统组 UUID</li></ul><p>初始化可以作为启动所有容器之前的一次性操作来完成。</p><ol><li><p>从 docker 运行 Gerrit docker init setup</p><p>取消注释 <code>docker-compose.yaml</code> 中的 <code>command: init</code> 选项，并在前台使用 <code>docker compase</code> 运行 Gerrit 服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose up gerrit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等到您在输出中看到该消息 <code>Initialized /var/gerrit</code>，然后容器就会退出。</p><div class="hint-container info"><p class="hint-container-title">如果出现以下错误</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gerrit-gerrit-1  <span class="token operator">|</span> fatal: /var/gerrit/etc/mail
gerrit-gerrit-1  <span class="token operator">|</span> fatal: Cannot <span class="token function">make</span> directory /var/gerrit/etc/mail
gerrit-gerrit-1 exited with code <span class="token number">128</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 gerrit 挂载目录权限，再重新使用 <code>docker compase</code> 运行 Gerrit 服务即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token number">1000</span>:1000 /opt/gerrit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></li><li><p>以守护进程模式启动 Gerrit</p><p>注释掉 <code>docker-compose.yaml</code> 中的 <code>command: init</code> 选项并启动所有节点服务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/command/# command/g&quot;</span> docker-compose.yml
<span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="创建-gerrit-账号" tabindex="-1"><a class="header-anchor" href="#创建-gerrit-账号" aria-hidden="true">#</a> 创建 Gerrit 账号</h2><p>第一个登录 Gerrit 的用户被视为初始管理员。</p><p>使用 PhpLdapAdmin 在 OpenLDAP 中注册用户，访问 phpldapadmin 服务：<code>http://localhost:6443</code>。</p><figure><img src="`+d+'" alt="Bad Request" tabindex="0" loading="lazy"><figcaption>Bad Request</figcaption></figure><p>此错误是因为使用 HTTP 访问造成，应使用 HTTPS 访问 phpldapadmin 服务：<code>https://localhost:6443</code>。</p><figure><img src="'+o+'" alt="phpldapadmin 首页" tabindex="0" loading="lazy"><figcaption>phpldapadmin 首页</figcaption></figure><p>点击 <em>login</em>，使用 <code>cn=admin,dc=example,dc=org</code> 用户名和 <code>secret</code> 密码登录 PhpLdapAdmin。</p><figure><img src="'+p+'" alt="phpldapadmin 登录" tabindex="0" loading="lazy"><figcaption>phpldapadmin 登录</figcaption></figure><figure><img src="'+u+'" alt="phpldapadmin 首页" tabindex="0" loading="lazy"><figcaption>phpldapadmin 首页</figcaption></figure><p>为 Gerrit 管理员创建一个类型为 “Courier Mail Account” 的新子节点。依次点击 <em>dc=example,dc=org -&gt; Create a child entry -&gt; Courier Mail Account</em></p><figure><img src="'+v+'" alt="Create a child entry" tabindex="0" loading="lazy"><figcaption>Create a child entry</figcaption></figure><figure><img src="'+m+'" alt="Courier Mail Account" tabindex="0" loading="lazy"><figcaption>Courier Mail Account</figcaption></figure><p>创建 Gerrit 管理员账号信息。例如：</p><ul><li><strong>Given Name</strong>：gerrit</li><li><strong>Last Name</strong>：admin</li><li><strong>Common Name</strong>：Gerrit Admin</li><li><strong>User ID</strong>：gerritadmin</li><li><strong>Email</strong>：gerritadmin@example.com</li><li><strong>Password</strong>：secret</li></ul><p>验证您的数据是否正确，然后将更改提交到 LDAP。</p><figure><img src="'+g+'" alt="创建 Gerrit 管理员账号" tabindex="0" loading="lazy"><figcaption>创建 Gerrit 管理员账号</figcaption></figure><figure><img src="'+b+'" alt="提交" tabindex="0" loading="lazy"><figcaption>提交</figcaption></figure><h2 id="登录-gerrit-服务" tabindex="-1"><a class="header-anchor" href="#登录-gerrit-服务" aria-hidden="true">#</a> 登录 Gerrit 服务</h2><p>访问 Gerrit 服务：<code>http://localhost:port</code>，<code>localhost</code> 为 Gerrit 服务地址，<code>port</code> 为 Gerrit 服务端口。</p><figure><img src="'+k+'" alt="登录 Gerrit 服务" tabindex="0" loading="lazy"><figcaption>登录 Gerrit 服务</figcaption></figure><figure><img src="'+h+'" alt="Gerrit 首页" tabindex="0" loading="lazy"><figcaption>Gerrit 首页</figcaption></figure>',57);function y(G,A){const a=i("ExternalLinkIcon");return t(),r("div",null,[n("ul",null,[n("li",null,[e("docker-gerrit "),n("a",_,[e("GitHub 地址"),c(a)])])]),x])}const N=s(f,[["render",y],["__file","docker_install.html.vue"]]);export{N as default};
