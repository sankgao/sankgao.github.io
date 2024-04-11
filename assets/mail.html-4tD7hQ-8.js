import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,f as e}from"./app-4wJHauFW.js";const i={},l=e(`<h2 id="postfix-邮件" tabindex="-1"><a class="header-anchor" href="#postfix-邮件" aria-hidden="true">#</a> Postfix 邮件</h2><h3 id="安装服务" tabindex="-1"><a class="header-anchor" href="#安装服务" aria-hidden="true">#</a> 安装服务</h3><p>安装 <code>postfix</code> 服务和 <code>mailx</code> 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> postfix mailx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开启 <code>postfix</code> 服务，并设置开机自启：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start postfix
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> postfix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h3><p>修改 Postfix 邮件配置文件 <code>/etc/postfix/main.cf</code> 以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>myhostname <span class="token operator">=</span> mail.example.com  <span class="token comment"># 修改邮件服务器的主机名，使用 FQDN</span>
mydomain <span class="token operator">=</span> example.com  <span class="token comment"># 修改邮件服务器的域名</span>
myorigin <span class="token operator">=</span> <span class="token variable">$mydomain</span>  <span class="token comment"># 修改发件人所显示的域名</span>
inet_interfaces <span class="token operator">=</span> all  <span class="token comment"># 去掉注释。指定 Postfix 的监听端口</span>
mydestination <span class="token operator">=</span> <span class="token variable">$myhostname</span>, localhost.<span class="token variable">$mydomain</span>, localhost  <span class="token comment"># 去掉注释。允许哪些邮件地址在本地发送邮件</span>
mynetworks <span class="token operator">=</span> <span class="token number">10.1</span>.1.0/24  <span class="token comment"># 修改所在网络的网络地址</span>
relay_domains <span class="token operator">=</span> <span class="token variable">$mydestination</span>  <span class="token comment"># 去掉注释。指定可转发的邮件域名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启 <code>postfix</code> 服务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart postfix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="测试邮件" tabindex="-1"><a class="header-anchor" href="#测试邮件" aria-hidden="true">#</a> 测试邮件</h2><p>新建两个测试用户：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-s</span> /bin/bash zhangsan
<span class="token function">sudo</span> <span class="token function">passwd</span> zhangsan
<span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-s</span> /bin/bash lisi
<span class="token function">sudo</span> <span class="token function">passwd</span> lisi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>zhangsan</code> 给 <code>lisi</code> 发送邮件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span> - zhangsan
mail to lisi@mail.example.com

Subject: <span class="token builtin class-name">test</span>
nihao
<span class="token builtin class-name">.</span>
EOT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Subject</code> 为邮件主题；<code>nihao</code> 为邮件内容；<code>.</code> 为发送邮件或使用 <kbd>Ctrl</kbd> + <kbd>D</kbd> 快捷键发送邮件。</p><p>或使用以下命令发送邮件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;nihao&quot;</span> <span class="token operator">|</span> mail <span class="token parameter variable">-s</span> <span class="token string">&quot;test2&quot;</span> lisi@mail.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>nihao</code> 为邮件内容；<code>-s</code> 指定邮件主题。</p><p>登录 <code>lisi</code> 用户，使用 <code>mail</code> 命令查看邮件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span> - lisi
mail

Heirloom Mail version <span class="token number">12.5</span> <span class="token number">7</span>/5/10.  Type ? <span class="token keyword">for</span> help.
<span class="token string">&quot;/var/spool/mail/lisi&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span> messages <span class="token number">1</span> new
    <span class="token number">1</span> zhangsan@example.com  Fri Mar <span class="token number">22</span> <span class="token number">13</span>:01  <span class="token number">18</span>/601   <span class="token string">&quot;test&quot;</span>
<span class="token operator">&gt;</span>N  <span class="token number">2</span> zhangsan@example.com  Fri Mar <span class="token number">22</span> <span class="token number">13</span>:10  <span class="token number">18</span>/601   <span class="token string">&quot;test2&quot;</span>
<span class="token operator">&amp;</span> <span class="token number">2</span>  <span class="token comment"># 输入编号查看指定邮件</span>
Message  <span class="token number">2</span>:
From zhangsan@example.com  Fri Mar <span class="token number">22</span> <span class="token number">13</span>:10:55 <span class="token number">2024</span>
Return-Path: <span class="token operator">&lt;</span>zhangsan@example.com<span class="token operator">&gt;</span>
X-Original-To: lisi@mail.example.com
Delivered-To: lisi@mail.example.com
Date: Fri, <span class="token number">22</span> Mar <span class="token number">2024</span> <span class="token number">13</span>:10:55 +0800
To: lisi@mail.example.com, to@example.com
Subject: test2
User-Agent: Heirloom mailx <span class="token number">12.5</span> <span class="token number">7</span>/5/10
Content-Type: text/plain<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>us-ascii
From: zhangsan@example.com
Status: R

nihao

<span class="token operator">&amp;</span> q  <span class="token comment"># 使用 q 或 ctrl + d 退出</span>
<span class="token operator">&amp;</span> Held <span class="token number">2</span> messages <span class="token keyword">in</span> /var/spool/mail/lisi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),o=[l];function c(t,p){return n(),a("div",null,o)}const m=s(i,[["render",c],["__file","mail.html.vue"]]);export{m as default};
