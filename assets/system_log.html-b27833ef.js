import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as l,f as n}from"./app-6a670b99.js";const a={},d=n(`<h2 id="linux-系统日志级别" tabindex="-1"><a class="header-anchor" href="#linux-系统日志级别" aria-hidden="true">#</a> Linux 系统日志级别</h2><p>在 <code>rsyslog</code> 服务程序中，日志根据重要程度被分为了九个等级，这样我们不必被海啸般的输出内容淹没，可以直接看最重要的内容。</p><table><thead><tr><th style="text-align:center;">日志等级</th><th style="text-align:left;">说明介绍</th></tr></thead><tbody><tr><td style="text-align:center;"><code>emerg</code></td><td style="text-align:left;">系统出现严重故障，内核崩溃等情况</td></tr><tr><td style="text-align:center;"><code>alert</code></td><td style="text-align:left;">应立即修复的故障，数据库损坏等情况</td></tr><tr><td style="text-align:center;"><code>crit</code></td><td style="text-align:left;">危险较高的故障，硬盘损坏导致程序运行失败的情况</td></tr><tr><td style="text-align:center;"><code>err</code></td><td style="text-align:left;">一般危险的故障，某个服务启动或运行失败的情况</td></tr><tr><td style="text-align:center;"><code>warning</code></td><td style="text-align:left;">警告信息，某个服务参数或功能错误的情况</td></tr><tr><td style="text-align:center;"><code>notice</code></td><td style="text-align:left;">一般无危险的故障，只是需要处理的情况</td></tr><tr><td style="text-align:center;"><code>info</code></td><td style="text-align:left;">通用性消息，给用户提升一些有用信息</td></tr><tr><td style="text-align:center;"><code>debug</code></td><td style="text-align:left;">调试程序所产生的信息</td></tr><tr><td style="text-align:center;"><code>none</code></td><td style="text-align:left;">没有优先级，不做日志记录</td></tr></tbody></table><h2 id="linux-常见的日志文件保存路径" tabindex="-1"><a class="header-anchor" href="#linux-常见的日志文件保存路径" aria-hidden="true">#</a> Linux 常见的日志文件保存路径</h2><p>从理论上讲，日志文件分为三种类型：</p><ul><li><strong>系统日志</strong>：主要记录系统的运行情况和内核信息</li><li><strong>用户日志</strong>：主要记录用户的访问信息，包含用户名、终端名称、时间、来源和执行过的操作等信息</li><li><strong>程序日志</strong>：主要记录着服务运行过程中各种事件的信息，每个服务程序自己有独立的日志文件，但是格式相差的比较大，一般稍微大一些的服务都会保存一份与其同名的日志文件</li></ul><table><thead><tr><th style="text-align:center;">文件路径</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:center;"><code>/var/log/boot.log</code></td><td style="text-align:left;">系统开机自检事件及引导过程等信息</td></tr><tr><td style="text-align:center;"><code>/var/log/lastlog</code></td><td style="text-align:left;">用户登录成功时间、终端名称及 IP 地址等信息</td></tr><tr><td style="text-align:center;"><code>/var/log/btmp</code></td><td style="text-align:left;">记录登录失败的时间、终端名称及 IP 地址等信息</td></tr><tr><td style="text-align:center;"><code>/var/log/messages</code></td><td style="text-align:left;">系统及各个服务的运行和报错信息</td></tr><tr><td style="text-align:center;"><code>/var/log/secure</code></td><td style="text-align:left;">系统安全相关的信息</td></tr><tr><td style="text-align:center;"><code>/var/log/wtmp</code></td><td style="text-align:left;">系统启动与关机等相关信息</td></tr></tbody></table><h2 id="journalctl" tabindex="-1"><a class="header-anchor" href="#journalctl" aria-hidden="true">#</a> journalctl</h2><p><code>journalctl</code> 用于检索个管理系统日志信息，可以根据事件、类型、服务名等信息进行信息检索，大大的提高了日常排错的效率。语法格式：<code>journalctl [参数]</code></p><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:center;"><code>-k</code></td><td style="text-align:left;">内核日志</td></tr><tr><td style="text-align:center;"><code>-b</code></td><td style="text-align:left;">启动日志</td></tr><tr><td style="text-align:center;"><code>-u</code></td><td style="text-align:left;">指定服务</td></tr><tr><td style="text-align:center;"><code>-n</code></td><td style="text-align:left;">指定条数</td></tr><tr><td style="text-align:center;"><code>-p</code></td><td style="text-align:left;">指定日志等级类型</td></tr><tr><td style="text-align:center;"><code>-f</code></td><td style="text-align:left;">实时刷新（追踪日志）</td></tr><tr><td style="text-align:center;"><code>--since</code></td><td style="text-align:left;">指定时间</td></tr><tr><td style="text-align:center;"><code>--disk-usage</code></td><td style="text-align:left;">占用空间</td></tr></tbody></table><p>example：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>journalctl <span class="token parameter variable">--since</span> today  <span class="token comment"># 仅查询今日的日志信息</span>
journalctl <span class="token parameter variable">--since</span> <span class="token string">&quot;-1 hour&quot;</span>  <span class="token comment"># 仅查询最近一小时的日志信息</span>
journalctl <span class="token parameter variable">--since</span> <span class="token string">&quot;8:00&quot;</span> <span class="token parameter variable">--until</span> <span class="token string">&quot;10:00&quot;</span>  <span class="token comment"># 仅查询从上午 8 点整到 10 点整的日志信息</span>
journalctl <span class="token parameter variable">--since</span> <span class="token string">&quot;2022-08-01&quot;</span> <span class="token parameter variable">--until</span> <span class="token string">&quot;2022-09-01&quot;</span>  <span class="token comment"># 仅查询从 2022 年 8 月 1 日到 2022 年 9 月 1 日的日志信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),s=[d];function r(c,o){return e(),l("div",null,s)}const x=t(a,[["render",r],["__file","system_log.html.vue"]]);export{x as default};
