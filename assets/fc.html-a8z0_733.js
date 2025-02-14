import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as d,f as l}from"./app-v7KFd7r1.js";const n={},c=l(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>fc</code> 用于比较两个文件或文件集并显示它们之间的差异。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>/a</code></td><td style="text-align:left;">缩短 ASCII 比较输出。<code>fc</code> 不会显示所有不同的行，而是仅显示每组差异的第一行和最后一行</td></tr><tr><td style="text-align:center;"><code>/c</code></td><td style="text-align:left;">忽略字母大小写</td></tr><tr><td style="text-align:center;"><code>/lb&lt;n&gt;</code></td><td style="text-align:left;">将内部行缓冲区的行数设置为 <code>N</code>。行缓冲区的默认长度为 <code>100</code> 行。如果要比较的文件具有 <code>100</code> 多个连续的不同行，<code>fc</code> 将取消比较</td></tr><tr><td style="text-align:center;"><code>/n</code></td><td style="text-align:left;">ASCII 比较过程中将显示行号</td></tr><tr><td style="text-align:center;"><code>/w</code></td><td style="text-align:left;">在比较过程中压缩空格（即制表符和空格）。如果一行包含许多连续的空格或制表符，<code>/w</code> 会将这些字符视为单个空格。如果与 <code>/w</code> 一起使用，<code>fc</code> 会忽略行首和行尾的空格</td></tr><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>例如：比较当前目录下的 <code>hello.txt</code> 和 <code>hello01.txt</code> 文件，并显示行号。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;fc /n hello.txt hello01.txt
正在比较文件 hello.txt 和 HELLO01.TXT
***** hello.txt
    1:  hello world
    2:  Hello World
    3:
    4:  testTest
    5:
    6:  aaahelloaaa
    7:  bbbworldbbb
***** HELLO01.TXT
    1:  hello world
    2:  aaa
    3:  bbb
*****


E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[c];function a(s,r){return t(),d("div",null,i)}const h=e(n,[["render",a],["__file","fc.html.vue"]]);export{h as default};
