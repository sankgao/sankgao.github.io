import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as d,f as l}from"./app-Iwq9_8Kn.js";const a={},r=l(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>tskill</code> 用于结束在远程桌面会话主机服务器上的会话中运行的进程。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>&lt;processID&gt;</code></td><td style="text-align:left;">指定要结束的进程 ID</td></tr><tr><td style="text-align:center;"><code>&lt;processname&gt;</code></td><td style="text-align:left;">指定要结束的进程名称。此参数可以包含通配符</td></tr><tr><td style="text-align:center;"><code>/server:&lt;servername&gt;</code></td><td style="text-align:left;">指定包含要结束的进程的终端服务器。如果未指定 <code>/server</code>，则使用当前远程桌面会话主机服务器</td></tr><tr><td style="text-align:center;"><code>/id:&lt;sessionID&gt;</code></td><td style="text-align:left;">结束在指定会话中运行的进程</td></tr><tr><td style="text-align:center;"><code>/a</code></td><td style="text-align:left;">结束在所有会话中运行的进程</td></tr><tr><td style="text-align:center;"><code>/v</code></td><td style="text-align:left;">显示有关正在执行的操作的信息</td></tr><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>例如：结束进程 6543。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;tskill 6543
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：结束在会话 5 上运行的进程资源管理器。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;tskill explorer /id:5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),s=[r];function c(n,i){return t(),d("div",null,s)}const g=e(a,[["render",c],["__file","tskill.html.vue"]]);export{g as default};
