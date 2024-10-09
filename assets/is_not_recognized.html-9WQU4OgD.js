import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,f as d}from"./app-EhtggJM6.js";const a={},l=d(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
rem 输出连续多行不包含中文字符。
echo Hello World! 01
echo Hello World! 02

rem 输出连续多行包含中文字符。第一行以中文字符结尾，其它几行不以中文字符结尾。
echo 你好，世界！ 01
echo 你好，世界！ 02

rem 输出连续多行包含中文字符，且都以中文字符结尾。
echo 你好，世界！
echo 你好，世界！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面 CMD 脚本后，<strong>报错日志如下：</strong></p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;test.cmd
Hello World! 01
Hello World! 02
&#39;��世界！&#39; is not recognized as an internal or external command,
operable program or batch file.
你好，世界！ 02
&#39;��世界！&#39; is not recognized as an internal or external command,
operable program or batch file.
&#39;��世界！&#39; is not recognized as an internal or external command,
operable program or batch file.

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>is not recognized as an internal or external command, operable program or batch file.</code> 这是在代码编码为 <code>65001</code>（UTF-8）时显示的提示输出；代码编码为 <code>936</code>（简体中文）时显示的提示输出为 <code>不是内部或外部命令，也不是可运行的程序或批处理文件。</code></p><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><ul><li>当有连续多行包含中文字符，且都以中文字符结尾，除了最后一行外，其它几行不能以中文字符结尾</li><li>当有连续多行包含中文字符，第一行以中文字符结尾，其它几行不以中文字符结尾时，第一行不能以中文字符结尾</li></ul><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><h3 id="解决方法-1" tabindex="-1"><a class="header-anchor" href="#解决方法-1" aria-hidden="true">#</a> 解决方法 1</h3><p>在中文字符结尾添加至少一个空格或其它非中文字符。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>rem 输出连续多行包含中文字符。第一行以中文字符结尾，其它几行不以中文字符结尾。 
echo 你好，世界！ 01
echo 你好，世界！ 02

rem 输出连续多行包含中文字符，且都以中文字符结尾。 
echo 你好，世界！ 
echo 你好，世界！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方法-2" tabindex="-1"><a class="header-anchor" href="#解决方法-2" aria-hidden="true">#</a> 解决方法 2</h3><p>在命令中间添加空行。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>rem 输出连续多行包含中文字符。第一行以中文字符结尾，其它几行不以中文字符结尾。

echo 你好，世界！ 01
echo 你好，世界！ 02

rem 输出连续多行包含中文字符，且都以中文字符结尾。

echo 你好，世界！

echo 你好，世界！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方法-3" tabindex="-1"><a class="header-anchor" href="#解决方法-3" aria-hidden="true">#</a> 解决方法 3</h3><p>为中文字符添加双引号（<code>&quot;</code>），但这种方法在输出时也会将引号输出显示。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>rem &quot;输出连续多行包含中文字符。第一行以中文字符结尾，其它几行不以中文字符结尾。&quot;
echo 你好，世界！ 01
echo 你好，世界！ 02

rem &quot;输出连续多行包含中文字符，且都以中文字符结尾。&quot;
echo &quot;你好，世界！&quot;
echo &quot;你好，世界！&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),s=[l];function r(c,o){return n(),i("div",null,s)}const u=e(a,[["render",r],["__file","is_not_recognized.html.vue"]]);export{u as default};
