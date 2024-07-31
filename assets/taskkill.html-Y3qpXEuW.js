import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as n,c as s,b as e,e as t,d as i,w as r,f as c}from"./app-83XRFzu1.js";const o={},g=e("h2",{id:"描述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),t(" 描述")],-1),x=e("code",null,"taskkill",-1),f=c(`<h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>/s &lt;computer&gt;</code></td><td style="text-align:left;">指定远程计算机的名称或 IP 地址（请勿使用反斜杠）。默认为本地计算机</td></tr><tr><td style="text-align:center;"><code>/u &lt;domain&gt;\\&lt;username&gt;</code></td><td style="text-align:left;">使用 <code>&lt;username&gt;</code> 或 <code>&lt;domain&gt;\\&lt;username&gt;</code> 指定的用户的帐户权限运行该命令。仅当还指定了 <code>/s</code> 时，才能指定 <code>/u</code> 参数。默认值是当前登录到发出该命令的计算机的用户的权限</td></tr><tr><td style="text-align:center;"><code>/p &lt;password&gt;</code></td><td style="text-align:left;">指定 <code>/u</code> 参数中指定的用户帐户的密码</td></tr><tr><td style="text-align:center;"><code>/fi &lt;filter&gt;</code></td><td style="text-align:left;">应用筛选器以选择一组任务。可以使用多个筛选器或使用通配符（<code>*</code>）指定所有任务或映像名称。本文的 “筛选器名称、运算符和值” 部分列出了有效的筛选器</td></tr><tr><td style="text-align:center;"><code>/pid &lt;processID&gt;</code></td><td style="text-align:left;">指定要终止的进程的进程 ID</td></tr><tr><td style="text-align:center;"><code>/im &lt;imagename&gt;</code></td><td style="text-align:left;">指定要终止的进程的映像名称。使用通配符（<code>*</code>）指定所有映像名称</td></tr><tr><td style="text-align:center;"><code>/f</code></td><td style="text-align:left;">指定强制结束进程。对于远程进程，将忽略此参数；所有远程进程都会被强制结束</td></tr><tr><td style="text-align:center;"><code>/t</code></td><td style="text-align:left;">结束指定的进程及其启动的任何子进程</td></tr><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><h2 id="筛选器名称、运算符和值" tabindex="-1"><a class="header-anchor" href="#筛选器名称、运算符和值" aria-hidden="true">#</a> 筛选器名称、运算符和值</h2><table><thead><tr><th style="text-align:left;">筛选器名称</th><th style="text-align:left;">有效运算符</th><th style="text-align:left;">有效值</th></tr></thead><tbody><tr><td style="text-align:left;">STATUS</td><td style="text-align:left;">eq、ne</td><td style="text-align:left;">RUNNING | NOT RESPONDING | UNKNOWN</td></tr><tr><td style="text-align:left;">IMAGENAME</td><td style="text-align:left;">eq、ne</td><td style="text-align:left;">映像名称</td></tr><tr><td style="text-align:left;">PID</td><td style="text-align:left;">eq、ne、gt、lt、ge、le</td><td style="text-align:left;">PID 值</td></tr><tr><td style="text-align:left;">SESSION</td><td style="text-align:left;">eq、ne、gt、lt、ge、le</td><td style="text-align:left;">会话号</td></tr><tr><td style="text-align:left;">CPUtime</td><td style="text-align:left;">eq、ne、gt、lt、ge、le</td><td style="text-align:left;">采用 HH:MM:SS 格式的 CPU 时间，其中 MM 和 SS 介于 0 到 59 之间，HH 是任何无符号数字</td></tr><tr><td style="text-align:left;">MEMUSAGE</td><td style="text-align:left;">eq、ne、gt、lt、ge、le</td><td style="text-align:left;">内存使用量（KB）</td></tr><tr><td style="text-align:left;">USERNAME</td><td style="text-align:left;">eq、ne</td><td style="text-align:left;">任何有效的用户名（<code>&lt;user&gt;</code> 或 <code>&lt;domain\\user&gt;</code>）</td></tr><tr><td style="text-align:left;">SERVICES</td><td style="text-align:left;">eq、ne</td><td style="text-align:left;">服务名称</td></tr><tr><td style="text-align:left;">WINDOWTITLE</td><td style="text-align:left;">eq、ne</td><td style="text-align:left;">窗口标题。如果指定远程系统，则不支持此筛选器</td></tr><tr><td style="text-align:left;">MODULES</td><td style="text-align:left;">eq、ne</td><td style="text-align:left;">DLL name</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>例如：结束进程 ID 为 1230、1241 和 1253 的进程。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;taskkill /pid 1230 /pid 1241 /pid 1253
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：如果进程 <code>Notepad.exe</code> 是由系统启动的，要强行结束它。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;taskkill /f /fi &quot;USERNAME eq NT AUTHORITY\\SYSTEM&quot; /im notepad.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9);function y(h,m){const l=a("RouterLink");return n(),s("div",null,[g,e("p",null,[x,t(" 用于结束一个或多个任务或进程。可以通过进程 ID 或图像名称结束进程。可以使用 "),i(l,{to:"/commands/cmd/tasklist.html"},{default:r(()=>[t("tasklist")]),_:1}),t(" 命令来确定要结束的进程的进程 PID。")]),f])}const _=d(o,[["render",y],["__file","taskkill.html.vue"]]);export{_ as default};