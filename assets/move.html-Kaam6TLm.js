import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as t,f as i}from"./app-5uwca8c6.js";const n={},s=i(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>move</code> 用于将一个或多个文件从一个目录移动到另一个目录。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>/y</code></td><td style="text-align:left;">停止确认是否要覆盖现有目标文件的提示</td></tr><tr><td style="text-align:center;"><code>-y</code></td><td style="text-align:left;">启动确认是否要覆盖现有目标文件的提示</td></tr><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="移动文件" tabindex="-1"><a class="header-anchor" href="#移动文件" aria-hidden="true">#</a> 移动文件</h3><p>例如：移动 <code>test01</code> 目录下的 <code>test02.txt</code> 文件到 <code>test02</code> 目录中。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;move test01\\test02.txt test02
移动了         1 个文件。

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>test02</code> 目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir test02
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\\test\\test02 的目录

2024/07/15  17:23    &lt;DIR&gt;          .
2024/07/15  17:23    &lt;DIR&gt;          ..
2024/07/11  18:46                 0 test02.txt
               1 个文件              0 字节
               2 个目录 696,771,379,200 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：移动 <code>test02</code> 目录下的 <code>test02.txt</code> 文件到 <code>test01</code> 目录中，并修改文件名为 <code>test01.txt</code>。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;move test02\\test02.txt test01\\test01.txt
移动了         1 个文件。

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>test01</code> 目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir test01
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\\test\\test01 的目录

2024/07/15  17:25    &lt;DIR&gt;          .
2024/07/15  17:25    &lt;DIR&gt;          ..
2024/07/11  18:46                 0 test01.txt
               1 个文件              0 字节
               2 个目录 696,771,379,200 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移动目录" tabindex="-1"><a class="header-anchor" href="#移动目录" aria-hidden="true">#</a> 移动目录</h3><p>例如：移动当前目录下的 <code>test02</code> 目录到 <code>test01</code> 目录下。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;move test02 test01
移动了　        1 个目录。

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>test01</code> 目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir test01
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\\test\\test01 的目录

2024/07/15  17:26    &lt;DIR&gt;          .
2024/07/15  17:26    &lt;DIR&gt;          ..
2024/07/11  18:46                 0 test01.txt
2024/07/15  17:25    &lt;DIR&gt;          test02
               1 个文件              0 字节
               3 个目录 696,771,379,200 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),l=[s];function a(c,r){return d(),t("div",null,l)}const u=e(n,[["render",a],["__file","move.html.vue"]]);export{u as default};
