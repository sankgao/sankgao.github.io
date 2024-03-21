import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,f as i}from"./app-XZ1tNeRt.js";const a={},r=i(`<h2 id="debain-系统" tabindex="-1"><a class="header-anchor" href="#debain-系统" aria-hidden="true">#</a> Debain 系统</h2><p>将 <code>gerrit.sh</code> 脚本链接到 <code>rc3.d</code> 目录下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-snf</span> /home/gerrit/review_site/bin/gerrit.sh /etc/init.d/gerrit
<span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-snf</span> /etc/init.d/gerrit /etc/rc3.d/S90gerrit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>/etc/default/</code> 目录下创建 <code>gerritcodereview</code> 文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">touch</span> /etc/default/gerritcodereview
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code>gerritcodereview</code> 文件输入以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">GERRIT_SITE</span><span class="token operator">=</span>/home/gerrit/review_site
<span class="token assign-left variable">NO_START</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>GERRIT_SITE</strong>：运行 Gerrit 站点的路径</li><li><strong>NO_START</strong>：是否启动 Gerrit 服务</li></ul><h2 id="redhat-系统" tabindex="-1"><a class="header-anchor" href="#redhat-系统" aria-hidden="true">#</a> RedHat 系统</h2><p>在 <code>/usr/lib/systemd/system/</code> 目录下创建 <code>gerrit.service</code> 文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">touch</span> /usr/lib/systemd/system/gerrit.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code>gerrit.service</code> 文件输入以下内容：</p><div class="language-service line-numbers-mode" data-ext="service"><pre class="language-service"><code>[Unit]
Description=Gerrit Code Review
After=network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
PIDFile=/home/gerrit/review_site/logs/gerrit.pid
ExecStop=/home/gerrit/review_site/bin/gerrit.sh stop
ExecStart=/home/gerrit/review_site/bin/gerrit.sh start
ExecReload=/home/gerrit/review_site/bin/gerrit.sh restart
PrivateTmp=true

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新加载系统管理守护进程（<code>systemd</code>）的配置文件，并设置开机自启：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> gerrit.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,15),d=[r];function t(l,c){return s(),n("div",null,d)}const u=e(a,[["render",t],["__file","self_start.html.vue"]]);export{u as default};
