import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as n,f as i}from"./app-beI3qTez.js";const t={},s=i(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>tree</code> 用于以图形方式显示路径或磁盘的目录结构。此命令显示的结构取决于在命令提示符处指定的参数，如果未指定磁盘或路径，此命令将显示以当前磁盘的当前目录开头的树结构。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>/a</code></td><td style="text-align:left;">指定使用文本字符而不是图形字符来显示链接子目录的行</td></tr><tr><td style="text-align:center;"><code>/f</code></td><td style="text-align:left;">显示每个目录中的文件名</td></tr><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>例如：显示当前目录树结构。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;tree
文件夹 PATH 列表
卷序列号为 02E3-C833
E:.
├─a
│  └─b
│      └─c
└─test01
    └─test02

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：显示指定目录树结构。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;tree test01
文件夹 PATH 列表
卷序列号为 02E3-C833
E:\\TEST\\TEST01
└─test02

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：指定使用文本字符而不是图形字符来显示链接子目录的行。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;tree /a
文件夹 PATH 列表
卷序列号为 02E3-C833
E:.
+---a
|   \\---b
|       \\---c
\\---test01
    \\---test02

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),a=[s];function l(r,c){return d(),n("div",null,a)}const u=e(t,[["render",l],["__file","tree.html.vue"]]);export{u as default};
