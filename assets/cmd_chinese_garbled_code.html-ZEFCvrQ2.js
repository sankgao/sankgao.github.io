import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as i,f as s}from"./app-akG07Bo0.js";const n="/assets/unicode_utf-8-NyZCsWly.jpg",c={},a=s(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>CMD 中查看中文文件，出现乱码。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>Microsoft Windows [版本 10.0.19045.4651]
(c) Microsoft Corporation。保留所有权利。

C:\\Users\\user&gt;type E:\\test\\test.txt
浣犲ソ锛屼笘鐣岋紒
Hello, World!
C:\\Users\\user&gt;chcp
活动代码页: 936

C:\\Users\\user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><p>因为 <code>chcp</code> 活动代码页编号默认设置为 <code>936</code>，<code>936</code> 代表的是 GBK 编码，‌而 GBK 编码在某些情况下可能无法正确显示中文字符，‌导致乱码现象。‌GBK 编码虽然支持简体中文，‌但在处理一些特殊字符或特定情况下可能会出现编码不匹配的问题，‌从而引起乱码。‌此外，‌如果系统的默认编码设置与应用程序或终端的编码不匹配，‌也可能会导致乱码问题。‌因此，‌当 <code>chcp</code> 设置为 <code>936</code> 时，‌如果终端或应用程序期望的是 UTF-8 编码，‌就可能出现中文乱码问题。</p><ul><li>Windows 默认支持的中文编码为：GBK、GB2312、ANSI</li><li>Linux 默认支持的中文编码为：UTF-8（Unicode）</li></ul><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><h3 id="解决方法-1" tabindex="-1"><a class="header-anchor" href="#解决方法-1" aria-hidden="true">#</a> 解决方法 1</h3><p>修改编码设置，这种方式只在当前 CMD 终端中生效，打开其它终端或重启终端都会失效。</p><p>通过在 CMD 中执行 <code>chcp 65001</code> 命令将编码切换到 UTF-8，‌这通常可以解决中文乱码问题。‌</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;chcp 65001
Active code page: 65001

C:\\Users\\user&gt;type E:\\test\\test.txt
你好，世界！
Hello, World!
C:\\Users\\user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方法-2" tabindex="-1"><a class="header-anchor" href="#解决方法-2" aria-hidden="true">#</a> 解决方法 2</h3><p>将方法 1 自动化，修改注册表实现自动运行 <code>chcp 65001</code> 命令，这种方式永久有效。</p><p>使用 <kbd>Win</kbd> + <kbd>R</kbd> 键，输入 <code>regedit</code>，打开注册表编辑器。</p><ul><li>依次点击 <em>HKEY_LOCAL_MACHINE -&gt; SOFTWARE -&gt; Microsoft -&gt; Command Processor</em></li><li>在注册表编辑器中输入 <code>计算机\\HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Command Processor</code> 路径</li></ul><p>右键依次点击 <em>新建(N) -&gt; 字符串值(S)</em>。命名为 <code>autorun</code>，右键 <em>修改(M)</em>，数值数据为 <code>chcp 65001</code>，确定。</p><p>再次打开 CMD 查看 <code>chcp</code> 编码：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>Active code page: 65001

C:\\Users\\user&gt;chcp
Active code page: 65001

C:\\Users\\user&gt;type E:\\test\\test.txt
你好，世界！
Hello, World!
C:\\Users\\user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每次打开 CMD 都会显示 <code>Active code page: 65001</code>，可以通过将注册表中 <code>autorun</code> 的值改为 <code>chcp 65001 &gt; null</code> 解决：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>
C:\\Users\\user&gt;chcp
Active code page: 65001

C:\\Users\\user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方法-3" tabindex="-1"><a class="header-anchor" href="#解决方法-3" aria-hidden="true">#</a> 解决方法 3</h3><p>修改系统设置中的语言选项，有以下两种方法，并且需要重启电脑。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>打开这个 UTF-8 默认编码，会使得一些用 <code>936（GBK）</code> 编码的文件或应用程序显示乱码。</p></div><ul><li>使用 <kbd>Win</kbd> + <kbd>I</kbd> 打开 Windows 设置。依次点击 <em>时间和语言 -&gt; 语言 -&gt; 管理语言设置 -&gt; 管理 -&gt; 更改系统区域设置</em></li><li>使用 <kbd>Win</kbd> + <kbd>R</kbd> 键，输入 <code>control</code>，打开控制面板。依次点击 <em>区域 -&gt; 管理 -&gt; 更改系统区域设置</em></li></ul><p>勾选 <em>Beta 版：使用 Unicode UTF-8 提供全球语言支持(U)</em>。</p><figure><img src="`+n+`" alt="Unicode UTF-8" tabindex="0" loading="lazy"><figcaption>Unicode UTF-8</figcaption></figure><p>重启电脑，再次打开 CMD 查看 <code>chcp</code> 编码：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>Microsoft Windows [Version 10.0.19045.4651]
(c) Microsoft Corporation。保留所有权利。

C:\\Users\\user&gt;chcp
Active code page: 65001

C:\\Users\\user&gt;type E:\\test\\test.txt
你好，世界！
Hello, World!
C:\\Users\\user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),l=[a];function r(o,t){return d(),i("div",null,l)}const m=e(c,[["render",r],["__file","cmd_chinese_garbled_code.html.vue"]]);export{m as default};
