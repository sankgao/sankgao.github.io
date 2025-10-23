import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as d,f as n}from"./app-3VlYw40w.js";const t={},s=n(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>xcopy</code> 用于复制文件和目录，包括子目录。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>/e</code></td><td style="text-align:left;">复制所有子目录，即使它们是空的</td></tr><tr><td style="text-align:center;"><code>/f</code></td><td style="text-align:left;">复制时显示源文件名和目标文件名</td></tr><tr><td style="text-align:center;"><code>/h</code></td><td style="text-align:left;">复制具有隐藏文件和系统文件属性的文件。默认情况下，<code>xcopy</code> 不会复制隐藏文件或系统文件</td></tr><tr><td style="text-align:center;"><code>/l</code></td><td style="text-align:left;">生成要复制的文件列表，但不主动复制文件</td></tr><tr><td style="text-align:center;"><code>/q</code></td><td style="text-align:left;">禁止显示 <code>xcopy</code> 消息</td></tr><tr><td style="text-align:center;"><code>/t</code></td><td style="text-align:left;">仅复制子目录结构（即树），而不复制文件。若要复制空目录，必须包含 <code>/e</code> 命令行选项</td></tr><tr><td style="text-align:center;"><code>/w</code></td><td style="text-align:left;">在开始复制文件之前显示以下消息并等待您的响应：准备开始复制文件时，请按任意键</td></tr><tr><td style="text-align:center;"><code>/s</code></td><td style="text-align:left;">复制目录和子目录，除非它们是空的。如果省略 <code>/s</code>，则 <code>xcopy</code> 在单个目录中运行</td></tr><tr><td style="text-align:center;"><code>/y</code></td><td style="text-align:left;">禁止提示您确认覆盖现有目标文件</td></tr><tr><td style="text-align:center;"><code>/-y</code></td><td style="text-align:left;">提示您确认覆盖现有目标文件</td></tr><tr><td style="text-align:center;"><code>/z</code></td><td style="text-align:left;">如果在复制阶段断开连接（如：服务器脱机），可在重新建立连接后使用 <code>/z</code> 恢复；<code>/z</code> 还会显示百分比</td></tr><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="复制时显示源文件名和目标文件名" tabindex="-1"><a class="header-anchor" href="#复制时显示源文件名和目标文件名" aria-hidden="true">#</a> 复制时显示源文件名和目标文件名</h3><p>查看 D 盘根目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir D:\\
 驱动器 D 中的卷没有标签。
 卷的序列号是 FED4-A346

 D:\\ 的目录

2024/03/13  15:32    &lt;DIR&gt;          System
2024/03/13  09:52    &lt;DIR&gt;          VMware
               0 个文件              0 字节
               2 个目录 216,650,141,696 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看当前目录下的 <code>test01</code> 目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir test01
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\\test\\test01 的目录

2024/07/16  18:24    &lt;DIR&gt;          .
2024/07/16  18:24    &lt;DIR&gt;          ..
2024/07/11  18:46                 0 test01.txt
2024/07/16  18:22    &lt;DIR&gt;          test02
2024/07/16  18:24                 0 test02.txt
               2 个文件              0 字节
               3 个目录 696,717,549,568 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制 <code>test01</code> 目录下的所有文件，不包括子目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;xcopy /f test01 D:\\
E:\\test\\test01\\test01.txt -&gt; D:\\test01.txt
E:\\test\\test01\\test02.txt -&gt; D:\\test02.txt
复制了 2 个文件

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 D 盘根目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir D:\\
 驱动器 D 中的卷没有标签。
 卷的序列号是 FED4-A346

 D:\\ 的目录

2024/03/13  15:32    &lt;DIR&gt;          System
2024/07/11  18:46                 0 test01.txt
2024/07/16  18:24                 0 test02.txt
2024/03/13  09:52    &lt;DIR&gt;          VMware
               2 个文件              0 字节
               2 个目录 216,650,141,696 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复制目录和子目录" tabindex="-1"><a class="header-anchor" href="#复制目录和子目录" aria-hidden="true">#</a> 复制目录和子目录</h3><p>查看 D 盘根目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir D:\\
 驱动器 D 中的卷没有标签。
 卷的序列号是 FED4-A346

 D:\\ 的目录

2024/03/13  15:32    &lt;DIR&gt;          System
2024/03/13  09:52    &lt;DIR&gt;          VMware
               0 个文件              0 字节
               2 个目录 216,650,141,696 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看当前目录下的 <code>test01</code> 目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir test01
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\\test\\test01 的目录

2024/07/16  18:24    &lt;DIR&gt;          .
2024/07/16  18:24    &lt;DIR&gt;          ..
2024/07/11  18:46                 0 test01.txt
2024/07/16  18:22    &lt;DIR&gt;          test02
2024/07/16  18:24                 0 test02.txt
               2 个文件              0 字节
               3 个目录 696,717,549,568 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制 <code>test01</code> 目录下的所有文件，包括子目录，但不包括空子目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;xcopy /s test01 D:\\
test01\\test01.txt
test01\\test02.txt
test01\\test02\\test01.txt
复制了 3 个文件

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 D 盘根目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir D:\\
 驱动器 D 中的卷没有标签。
 卷的序列号是 FED4-A346

 D:\\ 的目录

2024/03/13  15:32    &lt;DIR&gt;          System
2024/07/11  18:46                 0 test01.txt
2024/07/16  18:57    &lt;DIR&gt;          test02
2024/07/16  18:24                 0 test02.txt
2024/03/13  09:52    &lt;DIR&gt;          VMware
               2 个文件              0 字节
               3 个目录 216,650,141,696 可用字节

E:\\test&gt;dir D:\\test02
 驱动器 D 中的卷没有标签。
 卷的序列号是 FED4-A346

 D:\\test02 的目录

2024/07/16  18:57    &lt;DIR&gt;          .
2024/07/16  18:57    &lt;DIR&gt;          ..
2024/07/16  17:52                 0 test01.txt
               1 个文件              0 字节
               2 个目录 216,650,141,696 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成要复制的文件列表" tabindex="-1"><a class="header-anchor" href="#生成要复制的文件列表" aria-hidden="true">#</a> 生成要复制的文件列表</h3><p>查看 D 盘根目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir D:\\
 驱动器 D 中的卷没有标签。
 卷的序列号是 FED4-A346

 D:\\ 的目录

2024/03/13  15:32    &lt;DIR&gt;          System
2024/03/13  09:52    &lt;DIR&gt;          VMware
               0 个文件              0 字节
               2 个目录 216,650,141,696 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成要复制的文件列表，但不主动复制文件：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;xcopy /l test01\\ D:\\
test01\\test01.txt
1 个文件

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 D 盘根目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir D:\\
 驱动器 D 中的卷没有标签。
 卷的序列号是 FED4-A346

 D:\\ 的目录

2024/03/13  15:32    &lt;DIR&gt;          System
2024/03/13  09:52    &lt;DIR&gt;          VMware
               0 个文件              0 字节
               2 个目录 216,650,141,696 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),l=[s];function a(c,v){return i(),d("div",null,l)}const u=e(t,[["render",a],["__file","xcopy.html.vue"]]);export{u as default};
