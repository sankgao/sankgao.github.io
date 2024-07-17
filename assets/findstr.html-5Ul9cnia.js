import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as d,f as l}from"./app-fbQfU1-Y.js";const n={},i=l(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>findstr</code> 用于搜索文件中的文本模式，<strong>注意</strong>：搜索的正则表达式要用双引号（<code>&quot;</code>）引起来。</p><p>正则表达式使用文本字符和元字符查找文本模式，而不是确切的字符串。</p><ul><li>文本字符是在正则表达式语法中没有特殊含义的字符，它只是匹配该字符的出现。例如：字母和数字是文本字符</li><li>元字符是正则表达式语法中具有特殊含义的符号（运算符或分隔符）</li></ul><p>元字符如下表所示：</p><table><thead><tr><th style="text-align:center;">元字符</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>.</code></td><td style="text-align:left;">通配符 - 任意字符</td></tr><tr><td style="text-align:center;"><code>*</code></td><td style="text-align:left;">重复 - 上一个字符或类的零次或多次出现</td></tr><tr><td style="text-align:center;"><code>^</code></td><td style="text-align:left;">起始行位置 - 行的开头</td></tr><tr><td style="text-align:center;"><code>$</code></td><td style="text-align:left;">结束行位置 - 行的末尾</td></tr><tr><td style="text-align:center;"><code>[class]</code></td><td style="text-align:left;">字符类 - 集中的任何一个字符</td></tr><tr><td style="text-align:center;"><code>[^class]</code></td><td style="text-align:left;">逆向类 - 不在集中的任何一个字符</td></tr><tr><td style="text-align:center;"><code>[x-y]</code></td><td style="text-align:left;">范围 - 指定范围内的任何字符</td></tr><tr><td style="text-align:center;"><code>\\x</code></td><td style="text-align:left;">转义 - 元字符的文本使用</td></tr><tr><td style="text-align:center;"><code>\\&lt;string</code></td><td style="text-align:left;">起始单词位置 - 单词的开头</td></tr><tr><td style="text-align:center;"><code>string\\&gt;</code></td><td style="text-align:left;">结束单词位置 - 单词的结尾</td></tr></tbody></table><p>一起使用时，正则表达式语法中的特殊字符具有最高优先级。例如：使用通配符（<code>.</code>）和重复字符（<code>*</code>）的组合来匹配任何字符串：<code>.*</code>。</p><p>将以下表达式用作较大表达式的一部分，以匹配以 <code>b</code> 开头且以 <code>ing</code> 结尾的任何字符串：<code>b.*ing</code></p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>/b</code></td><td style="text-align:left;">如果文本模式位于行的开头，则匹配该模式</td></tr><tr><td style="text-align:center;"><code>/e</code></td><td style="text-align:left;">如果文本模式位于行的末尾，则匹配该模式</td></tr><tr><td style="text-align:center;"><code>/l</code></td><td style="text-align:left;">逐字处理搜索字符串</td></tr><tr><td style="text-align:center;"><code>/r</code></td><td style="text-align:left;">将搜索字符串作为正则表达式进行处理。这是默认设置</td></tr><tr><td style="text-align:center;"><code>/s</code></td><td style="text-align:left;">搜索当前目录和所有子目录</td></tr><tr><td style="text-align:center;"><code>/i</code></td><td style="text-align:left;">在搜索字符串时忽略字符大小写</td></tr><tr><td style="text-align:center;"><code>/x</code></td><td style="text-align:left;">打印完全匹配的行</td></tr><tr><td style="text-align:center;"><code>/v</code></td><td style="text-align:left;">仅打印不包含匹配项的行</td></tr><tr><td style="text-align:center;"><code>/n</code></td><td style="text-align:left;">打印匹配的每一行的行号</td></tr><tr><td style="text-align:center;"><code>/m</code></td><td style="text-align:left;">如果文件包含匹配项，则仅打印文件名</td></tr><tr><td style="text-align:center;"><code>/f:&lt;file&gt;</code></td><td style="text-align:left;">从指定文件获取文件列表</td></tr><tr><td style="text-align:center;"><code>/c:&lt;string&gt;</code></td><td style="text-align:left;">使用指定的文本作为文本搜索字符串</td></tr><tr><td style="text-align:center;"><code>/g:&lt;file&gt;</code></td><td style="text-align:left;">从指定文件获取搜索字符串</td></tr><tr><td style="text-align:center;"><code>/d:&lt;dirlist&gt;</code></td><td style="text-align:left;">搜索指定的目录列表。每个目录都必须用分号（<code>;</code>）分隔，例如：<code>dir1;dir2;dir3</code></td></tr><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="搜索指定字符" tabindex="-1"><a class="header-anchor" href="#搜索指定字符" aria-hidden="true">#</a> 搜索指定字符</h3><p>例如：在文件 <code>hello.txt</code> 中搜索 <code>hello</code> 或 <code>test</code>。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;findstr &quot;hello test&quot; hello.txt
hello world
testTest
aaahelloaaa

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="搜索结果存储到其它文件" tabindex="-1"><a class="header-anchor" href="#搜索结果存储到其它文件" aria-hidden="true">#</a> 搜索结果存储到其它文件</h3><p>例如：列出要在文本文件中搜索的确切文件，请使用文件 <code>stringlist.txt</code> 中的搜索条件，搜索在 <code>filelist.txt</code> 中列出的文件，然后将结果存储在文件 <code>results.out</code> 中。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;type stringlist.txt
hello
test
E:\\test&gt;type filelist.txt
hello.txt
E:\\test&gt;findstr /g:stringlist.txt /f:filelist.txt &gt; results.out

E:\\test&gt;type results.txt
hello.txt:hello world
hello.txt:testTest
hello.txt:aaahelloaaa

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列出文件列表" tabindex="-1"><a class="header-anchor" href="#列出文件列表" aria-hidden="true">#</a> 列出文件列表</h3><p>例如：列出当前目录及子目录中，所有文件中包含以 <code>test</code> 开头字符的文件列表。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;findstr /s /m &quot;^test&quot; .\\*
.\\hello.txt
.\\stringlist.txt
.\\test01\\test01.txt

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),s=[i];function a(r,c){return e(),d("div",null,s)}const x=t(n,[["render",a],["__file","findstr.html.vue"]]);export{x as default};
