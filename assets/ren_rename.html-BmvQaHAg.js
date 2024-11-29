import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as n,f as i}from"./app-Km5fQS2n.js";const t={},s=i(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>ren</code> 或 <code>rename</code> 用于重命名目录或文件，但不能将重命名的目录或文件移动到其它路径下。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="重命名指定目录下的文件名" tabindex="-1"><a class="header-anchor" href="#重命名指定目录下的文件名" aria-hidden="true">#</a> 重命名指定目录下的文件名</h3><p>例如：将 <code>test01</code> 目录下的 <code>test01.txt</code> 文件，重命名为 <code>test02.txt</code>。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;ren test01\\test01.txt test02.txt

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>test01</code> 目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir test01
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\\test\\test01 的目录

2024/07/15  16:50    &lt;DIR&gt;          .
2024/07/15  16:50    &lt;DIR&gt;          ..
2024/07/11  18:46                 0 test02.txt
               1 个文件              0 字节
               2 个目录 696,771,907,584 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重命名目录" tabindex="-1"><a class="header-anchor" href="#重命名目录" aria-hidden="true">#</a> 重命名目录</h3><p>例如：将当前目录下的 <code>test 03</code> 目录，重命名为 <code>test02</code> 目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;ren &quot;test 03&quot; test02

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看当前目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\\test 的目录

2024/07/15  16:52    &lt;DIR&gt;          .
2024/07/15  16:52    &lt;DIR&gt;          ..
2024/07/15  10:50    &lt;DIR&gt;          a
2024/07/11  18:15                14 hello.txt
2024/07/15  16:50    &lt;DIR&gt;          test01
2024/07/15  13:20    &lt;DIR&gt;          test02
               1 个文件             14 字节
               5 个目录 696,771,907,584 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),a=[s];function l(c,r){return d(),n("div",null,a)}const u=e(t,[["render",l],["__file","ren_rename.html.vue"]]);export{u as default};
