import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as d,f as i}from"./app-BI-bw2qy.js";const n={},s=i(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>dir</code> 用于显示目录的文件和子目录的列表。如果使用此命令时不带参数，则将显示磁盘的卷标和序列号，后跟磁盘上的目录和文件列表（包括其名称以及上次修改每个目录和文件的日期和时间）。对于文件，此命令显示扩展名和大小（以字节为单位）。此命令还显示列出的文件和目录总数、其累积大小以及磁盘上剩余的可用空间（以字节为单位）。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>/b</code></td><td style="text-align:left;">显示纯粹的目录和文件列表，不含其他信息</td></tr><tr><td style="text-align:center;"><code>/p</code></td><td style="text-align:left;">一次显示一个列表屏幕。要查看下一个屏幕，请按任意键</td></tr><tr><td style="text-align:center;"><code>/q</code></td><td style="text-align:left;">显示文件所有权信息</td></tr><tr><td style="text-align:center;"><code>/s</code></td><td style="text-align:left;">列出指定目录及子目录中所有文件</td></tr><tr><td style="text-align:center;"><code>/w</code></td><td style="text-align:left;">以宽格式显示列表，每行最多包含五个文件名或目录名称</td></tr><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="查看当前目录" tabindex="-1"><a class="header-anchor" href="#查看当前目录" aria-hidden="true">#</a> 查看当前目录</h3><p>例如：查看当前目录列表，<code>.\\</code> 表示当前目录也可以不加。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir .\\
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\\test 的目录

2024/07/12  16:59    &lt;DIR&gt;          .
2024/07/12  16:59    &lt;DIR&gt;          ..
2024/07/11  18:15                14 hello.txt
2024/07/12  16:59    &lt;DIR&gt;          test 03
2024/07/12  13:08    &lt;DIR&gt;          test01
2024/07/12  13:08    &lt;DIR&gt;          test02
               1 个文件             14 字节
               5 个目录 697,845,600,256 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“驱动器 E 中的卷没有标签” 是因为没有对该磁盘命名标签，可以在该磁盘属性中配置磁盘的标签名。</p><h3 id="查看指定目录" tabindex="-1"><a class="header-anchor" href="#查看指定目录" aria-hidden="true">#</a> 查看指定目录</h3><p>例如：查看 <code>test01</code> 目录列表。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir test01
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\\test\\test01 的目录

2024/07/12  13:08    &lt;DIR&gt;          .
2024/07/12  13:08    &lt;DIR&gt;          ..
2024/07/11  18:46                 0 test01.txt
               1 个文件              0 字节
               2 个目录 697,849,479,168 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：显示纯粹的目录和文件列表，不含其他信息。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir /b
hello.txt
test 03
test01
test02

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：查看指定目录中文件及目录的绝对路径。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir /s /b
E:\\test\\hello.txt
E:\\test\\test 03
E:\\test\\test01
E:\\test\\test02
E:\\test\\test01\\test01.txt

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),l=[s];function a(r,c){return t(),d("div",null,l)}const u=e(n,[["render",a],["__file","dir.html.vue"]]);export{u as default};
