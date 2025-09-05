import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as t,f as a}from"./app-_83A8qgi.js";const s={},n=a(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>path</code> 用于在 PATH 环境变量中设置命令路径，指定用于搜索可执行（<code>.exe</code>）文件的目录集。如果在不使用参数的情况下使用，此命令将显示当前命令路径。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>;</code></td><td style="text-align:left;">分隔命令路径中的目录。如果在不使用其他参数的情况下使用，<code>;</code> 会从 PATH 环境变量中清除现有命令路径，并指示 <code>Cmd.exe</code> 仅在当前目录中搜索</td></tr><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>例如：显示当前系统中的环境变量。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;path
PATH=D:\\VMware\\bin\\;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem
// ...省略部分内容

C:\\Users\\user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：清除现有命令路径。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;path;

C:\\Users\\user&gt;path
PATH=(null)

C:\\Users\\user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在命令行模式下设置的环境变量，属于临时的环境变量，只针对当前的 CMD 命令窗口有效，并不影响其它窗口中的环境变量，更不会影响到永久性的环境变量，要设置永久的环境变量，需要通过图形操作修改。</p>`,10),i=[n];function r(l,c){return d(),t("div",null,i)}const m=e(s,[["render",r],["__file","path.html.vue"]]);export{m as default};
