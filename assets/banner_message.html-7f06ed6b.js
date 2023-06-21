import{_ as o,r as l,o as i,c,d as s,e,b as t,f as n}from"./app-b7b4f124.js";const p={},r=n(`<p><code>OpenSSH</code> 有一个名为 <code>Banner</code> 的内置选项。在允许身份验证之前，将指定文件的内容发送给远程用户。如果 <code>Banner</code> 选项设置为 <code>none</code>，那么在 ssh 登录时就不会显示任何 <code>Banner</code> 消息。默认情况下不显示横幅，并且禁用该选项。</p><h2 id="开启-banner-选项" tabindex="-1"><a class="header-anchor" href="#开启-banner-选项" aria-hidden="true">#</a> 开启 Banner 选项</h2><ol><li><p>打开 <code>/etc/ssh/sshd_config</code> 配置文件</p><p>在配置文件末尾添加 <code>Banner /etc/ssh/my_banner</code> 这一行内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;Banner /etc/ssh/my_banner&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ssh/sshd_config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>退出并保存配置文件</p></li><li><p>创建 <code>/etc/ssh/my_banner</code> 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> /etc/ssh/my_banner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>重启 sshd 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="设置横幅消息" tabindex="-1"><a class="header-anchor" href="#设置横幅消息" aria-hidden="true">#</a> 设置横幅消息</h2>`,4),d=n(`<p>横幅消息文字</p><p>安装 <code>figlet</code> 命令并生成普通字符的放大版。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在 centos 中需要安装 epel 源，然后才可以安装 figlet 程序</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> figlet

figlet <span class="token builtin class-name">test</span>

 _            _
<span class="token operator">|</span> <span class="token operator">|</span>_ ___  ___<span class="token operator">|</span> <span class="token operator">|</span>_
<span class="token operator">|</span> __/ _ <span class="token punctuation">\\</span>/ __<span class="token operator">|</span> __<span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">||</span>  __/<span class="token punctuation">\\</span>__ <span class="token punctuation">\\</span> <span class="token operator">|</span>_
 <span class="token punctuation">\\</span>__<span class="token punctuation">\\</span>___<span class="token operator">||</span>___/<span class="token punctuation">\\</span>__<span class="token operator">|</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以在网上搜索 <code>ASCII art</code>，会有许多生成 ascii 艺术字的网站，还可以将图片转换成 ASCII 类型的。</p><p><code>ASCII art</code> 网站：</p>`,6),u={href:"https://asciiart.website/",target:"_blank",rel:"noopener noreferrer"},_={href:"http://1lineart.kulaone.com/#/",target:"_blank",rel:"noopener noreferrer"},v=n(`<li><p>将 figlet 生成的艺术字体写入 <code>/etc/ssh/my_banner</code> 文件中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>figlet <span class="token builtin class-name">test</span> <span class="token operator">&gt;</span> /etc/ssh/my_banner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>ssh 登录 linux 操作系统测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> root@localhost
 _            _
<span class="token operator">|</span> <span class="token operator">|</span>_ ___  ___<span class="token operator">|</span> <span class="token operator">|</span>_
<span class="token operator">|</span> __/ _ <span class="token punctuation">\\</span>/ __<span class="token operator">|</span> __<span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">||</span>  __/<span class="token punctuation">\\</span>__ <span class="token punctuation">\\</span> <span class="token operator">|</span>_
 <span class="token punctuation">\\</span>__<span class="token punctuation">\\</span>___<span class="token operator">||</span>___/<span class="token punctuation">\\</span>__<span class="token operator">|</span>

Activate the web console with: systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> cockpit.socket

Last login: Tue Jan <span class="token number">10</span> <span class="token number">10</span>:44:15 <span class="token number">2023</span> from ::1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2);function b(h,m){const a=l("ExternalLinkIcon");return i(),c("div",null,[r,s("ol",null,[s("li",null,[d,s("ul",null,[s("li",null,[s("a",u,[e("https://asciiart.website/"),t(a)])]),s("li",null,[s("a",_,[e("http://1lineart.kulaone.com/#/"),t(a)])])])]),v])])}const g=o(p,[["render",b],["__file","banner_message.html.vue"]]);export{g as default};