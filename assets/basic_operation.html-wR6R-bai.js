import{_ as t}from"./terminal-UOc6y68-.js";import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as v,c as r,b as d,e,d as n,w as s,f as l}from"./app-iDhMpT-8.js";const m="/assets/change_dir-n5G9__cz.jpg",u={},o=l('<figure><img src="'+t+`" alt="Windows 终端" tabindex="0" loading="lazy"><figcaption>Windows 终端</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>Windows 命令行中命令、命令选项以及命令参数是不区分大小写的</li><li>在大于号的前边的是系统给出的提示，表示当前所在的位置</li><li>Windows 的目录表示法用反斜杠（<code>\\</code>），而 Linux 或 Mac 用的是斜杠（<code>/</code>）</li><li>目录使用 <code>..</code> 表示上一级目录，使用 <code>.</code> 表示当前目录，使用 <code>\\</code> 表示当前驱动器（又叫 “磁盘”）的根目录</li><li>命令和选项以及参数之间的分隔符是空白符（包括 Tab 键、Space 键等），某些特定情况下空白符可以省略</li><li>命令行的执行快捷键是 <kbd>Enter</kbd> 键，强制终止的快捷键是 <kbd>Ctrl</kbd> + <kbd>C</kbd> 键</li></ul></div><h2 id="切换磁盘" tabindex="-1"><a class="header-anchor" href="#切换磁盘" aria-hidden="true">#</a> 切换磁盘</h2><p>默认刚打开的 <code>cmd</code> 所在目录是当前用户的家目录，当前用户的家目录在 C 盘中。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),b=d("code",null,"test",-1),g=d("code",null,"E:\\test",-1),p=d("code",null,"test",-1),h=l(`<p>切换到其它磁盘的根目录下，直接输入磁盘名加冒号（<code>:</code>）即可。例如：切换到 E 盘根目录下。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;e:

E:\\&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>根目录就是磁盘的 <strong>顶级目录</strong></li></ul><h2 id="切换到指定目录" tabindex="-1"><a class="header-anchor" href="#切换到指定目录" aria-hidden="true">#</a> 切换到指定目录</h2>`,4),_={class:"hint-container info"},E=d("p",{class:"hint-container-title"},"相关信息",-1),x=l(`<p>例如：切换到 E 盘根目录下的 <code>test</code> 目录中。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\&gt;cd test

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：切换到磁盘的根目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;cd \\

E:\\&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：切换到上一级目录，<code>..</code> 表示上一级目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;cd ..

E:\\&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在资源管理器中，定位到要切换的目录中，在路径中输入 <code>cmd</code> 或在目录空白地方，右键选择 <em>在终端中打开（T）</em>，也可以切换到指定目录。</p><figure><img src="`+m+`" alt="资源管理器中" tabindex="0" loading="lazy"><figcaption>资源管理器中</figcaption></figure><h2 id="查看目录列表" tabindex="-1"><a class="header-anchor" href="#查看目录列表" aria-hidden="true">#</a> 查看目录列表</h2><p>例如：查看当前目录列表，<code>.\\</code> 表示当前目录也可以不加。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir .\\
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“驱动器 E 中的卷没有标签” 是因为没有对该磁盘命名标签，可以在该磁盘属性中配置磁盘的标签名。</p><p>例如：查看 <code>test01</code> 目录列表。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir test01
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\\test\\test01 的目录

2024/07/12  13:08    &lt;DIR&gt;          .
2024/07/12  13:08    &lt;DIR&gt;          ..
2024/07/11  18:46                 0 test01.txt
               1 个文件              0 字节
               2 个目录 697,849,479,168 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建目录" tabindex="-1"><a class="header-anchor" href="#创建目录" aria-hidden="true">#</a> 创建目录</h2>`,15),f={class:"hint-container info"},R=d("p",{class:"hint-container-title"},"相关信息",-1),D=l(`<p>例如：在当前目录中创建 <code>test04</code> 目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir test04

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：在当前目录中递归创建 <code>a\\b\\c</code> 目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;md a\\b\\c

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看当前目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir /b
a
hello.txt
test 03
test01
test02
test04

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="复制文件" tabindex="-1"><a class="header-anchor" href="#复制文件" aria-hidden="true">#</a> 复制文件</h2>`,7),I=l(`<p>例如：将 <code>test01</code> 目录下的 <code>test01.txt</code> 文件复制到 <code>test02</code> 目录中。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;copy test01\\test01.txt test02
已复制         1 个文件。

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看文件内容" tabindex="-1"><a class="header-anchor" href="#查看文件内容" aria-hidden="true">#</a> 查看文件内容</h2><p>例如：查看当前目录下的 <code>hello.txt</code> 文件内容。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;type hello.txt
hello world

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建文件" tabindex="-1"><a class="header-anchor" href="#创建文件" aria-hidden="true">#</a> 创建文件</h2><p>创建文件可以使用三种方法，但只能在当前目录中创建文件。</p>`,7),C=l(`<div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;cd . &gt; file01.txt

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k=l(`<div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;type null &gt; file02.txt
系统找不到指定的文件。

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),y=d("kbd",null,"Ctrl",-1),w=d("kbd",null,"Z",-1),N=d("kbd",null,"Enter",-1),q=l(`<div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;copy con file03.txt
test file03.txt
^Z
已复制         1 个文件。

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),V=l(`<p>查看创建的文件：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\\test 的目录

2024/07/15  15:23    &lt;DIR&gt;          .
2024/07/15  15:23    &lt;DIR&gt;          ..
2024/07/15  10:50    &lt;DIR&gt;          a
2024/07/15  15:22                 0 file01.txt
2024/07/15  15:23                 0 file02.txt
2024/07/15  15:23                17 file03.txt
2024/07/11  18:15                14 hello.txt
2024/07/15  13:20    &lt;DIR&gt;          test 03
2024/07/12  13:08    &lt;DIR&gt;          test01
2024/07/15  13:56    &lt;DIR&gt;          test02
2024/07/15  13:56    &lt;DIR&gt;          test04
               3 个文件             14 字节
               7 个目录 696,791,732,224 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h2>`,3),W={class:"hint-container info"},z=d("p",{class:"hint-container-title"},"相关信息",-1),B=d("p",null,[e("使用 "),d("code",null,"rd"),e(" 或 "),d("code",null,"rmdir"),e(" 从磁盘中删除某个文件，则无法检索该文件（即回收站中没有此文件）。")],-1),L=l(`<p>例如：删除当前目录下的 <code>file01.txt</code> 文件。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;del file01.txt

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：删除当前目录下的 <code>file02.txt</code> 文件，使用 <code>/p</code> 选项提示用户确认。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;del /p file02.txt
E:\\test\\file02.txt，要删除(Y/N)吗? y

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看当前目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\\test 的目录

2024/07/15  15:23    &lt;DIR&gt;          .
2024/07/15  15:23    &lt;DIR&gt;          ..
2024/07/15  10:50    &lt;DIR&gt;          a
2024/07/15  15:23                17 file03.txt
2024/07/11  18:15                14 hello.txt
2024/07/15  13:20    &lt;DIR&gt;          test 03
2024/07/12  13:08    &lt;DIR&gt;          test01
2024/07/15  13:56    &lt;DIR&gt;          test02
2024/07/15  13:56    &lt;DIR&gt;          test04
               3 个文件             14 字节
               7 个目录 696,791,732,224 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除目录" tabindex="-1"><a class="header-anchor" href="#删除目录" aria-hidden="true">#</a> 删除目录</h2>`,7),T={class:"hint-container info"},S=d("p",{class:"hint-container-title"},"相关信息",-1),U=d("p",null,[e("使用 "),d("code",null,"rd"),e(" 或 "),d("code",null,"rmdir"),e(" 从磁盘中删除某个目录，则无法检索该目录（即回收站中没有此目录）。")],-1),Y=l(`<p>例如：删除当前目录下的 <code>test04</code> 目录，如果此目录不是空目录，则需要使用 <code>/s</code> 选项并提示用户确认。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;rd /s test04
test04, 是否确认(Y/N)? y

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：删除当前目录下的 <code>test02</code> 目录，如果此目录不是空目录，则需要使用 <code>/s</code> 选项，使用 <code>/q</code> 选项指定安静模式不提示进行确认。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;rd /s /q test02

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看当前目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\\test 的目录

2024/07/15  16:24    &lt;DIR&gt;          .
2024/07/15  16:24    &lt;DIR&gt;          ..
2024/07/15  10:50    &lt;DIR&gt;          a
2024/07/15  15:23                17 file03.txt
2024/07/11  18:15                14 hello.txt
2024/07/15  13:20    &lt;DIR&gt;          test 03
2024/07/12  13:08    &lt;DIR&gt;          test01
               1 个文件             14 字节
               5 个目录 696,772,440,064 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重命名目录或文件" tabindex="-1"><a class="header-anchor" href="#重命名目录或文件" aria-hidden="true">#</a> 重命名目录或文件</h2><p>例如：将 <code>test01</code> 目录下的 <code>test01.txt</code> 文件，重命名为 <code>test02.txt</code>。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;ren test01\\test01.txt test02.txt

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：将当前目录下的 <code>test 03</code> 目录，重命名为 <code>test02</code> 目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;ren &quot;test 03&quot; test02

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看当前目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;dir
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\\test 的目录

2024/07/15  16:52    &lt;DIR&gt;          .
2024/07/15  16:52    &lt;DIR&gt;          ..
2024/07/15  10:50    &lt;DIR&gt;          a
2024/07/15  15:23                17 file03.txt
2024/07/11  18:15                14 hello.txt
2024/07/15  16:50    &lt;DIR&gt;          test01
2024/07/15  13:20    &lt;DIR&gt;          test02
               1 个文件             14 字节
               5 个目录 696,771,907,584 可用字节

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移动目录或文件" tabindex="-1"><a class="header-anchor" href="#移动目录或文件" aria-hidden="true">#</a> 移动目录或文件</h2><p>例如：移动 <code>test01</code> 目录下的 <code>test02.txt</code> 文件到 <code>test02</code> 目录中。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;move test01\\test02.txt test02
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：移动当前目录下的 <code>test02</code> 目录到 <code>test01</code> 目录下。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;move test02 test01
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function Z(j,G){const i=c("RouterLink");return v(),r("div",null,[o,d("p",null,[e("如果当前在 C 盘，但要切换到 E 盘根目录下的 "),b,e(" 目录（"),g,e("）中，不能直接使用 "),n(i,{to:"/commands/cmd/cd_chdir.html"},{default:s(()=>[e("cd")]),_:1}),e(" 命令进行切换，需要先切换到 E 盘根目录下后，再使用 "),n(i,{to:"/commands/cmd/cd_chdir.html"},{default:s(()=>[e("cd")]),_:1}),e(" 命令到 "),p,e(" 目录中。")]),h,d("div",_,[E,d("p",null,[e("切换目录使用 "),n(i,{to:"/commands/cmd/cd_chdir.html"},{default:s(()=>[e("cd")]),_:1}),e(" 或 "),n(i,{to:"/commands/cmd/cd_chdir.html"},{default:s(()=>[e("chdir")]),_:1}),e(" 效果一样。")])]),x,d("div",f,[R,d("p",null,[e("创建目录使用 "),n(i,{to:"/commands/cmd/md_mkdir.html"},{default:s(()=>[e("md")]),_:1}),e(" 或 "),n(i,{to:"/commands/cmd/md_mkdir.html"},{default:s(()=>[e("mkdir")]),_:1}),e(" 效果一样。")])]),D,d("p",null,[n(i,{to:"/commands/cmd/copy.html"},{default:s(()=>[e("copy")]),_:1}),e(" 命令只能复制文件，不能复制目录。")]),I,d("ul",null,[d("li",null,[d("p",null,[e("使用 "),n(i,{to:"/commands/cmd/cd_chdir.html"},{default:s(()=>[e("cd 或 chdir")]),_:1}),e(" 命令创建文件")]),C]),d("li",null,[d("p",null,[e("使用 "),n(i,{to:"/commands/cmd/type.html"},{default:s(()=>[e("type")]),_:1}),e(" 命令创建文件")]),k]),d("li",null,[d("p",null,[e("使用 "),n(i,{to:"/commands/cmd/copy.html"},{default:s(()=>[e("copy con")]),_:1}),e(" 命令创建文件，此命令可以直接输入文件内容，输入完后执行 "),y,e(" + "),w,e(" 命令，再按 "),N,e(" 回车键结束")]),q])]),V,d("div",W,[z,d("p",null,[e("删除文件使用 "),n(i,{to:"/commands/cmd/del_erase.html"},{default:s(()=>[e("del")]),_:1}),e(" 或 "),n(i,{to:"/commands/cmd/del_erase.html"},{default:s(()=>[e("erase")]),_:1}),e(" 效果一样。")]),B]),L,d("div",T,[S,d("p",null,[e("删除目录使用 "),n(i,{to:"/commands/cmd/rd_rmdir.html"},{default:s(()=>[e("rd")]),_:1}),e(" 或 "),n(i,{to:"/commands/cmd/rd_rmdir.html"},{default:s(()=>[e("erase")]),_:1}),e(" 效果一样。")]),U]),Y])}const H=a(u,[["render",Z],["__file","basic_operation.html.vue"]]);export{H as default};
