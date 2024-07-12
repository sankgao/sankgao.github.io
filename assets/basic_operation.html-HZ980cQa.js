import{_ as s}from"./terminal-UOc6y68-.js";import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,f as t}from"./app-WTf8Na7i.js";const i={},l=t('<figure><img src="'+s+`" alt="Windows 终端" tabindex="0" loading="lazy"><figcaption>Windows 终端</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>Windows 命令行中命令、命令选项以及命令参数是不区分大小写的</li><li>在大于号的前边的是系统给出的提示，表示当前所在的位置</li><li>Windows 的目录表示法用反斜杠（<code>\\</code>），而 Linux 或 Mac 用的是斜杠（<code>/</code>）</li><li>使用 <code>..</code> 表示上一级目录，使用 <code>.</code> 表示当前目录，使用 <code>\\</code> 表示当前磁盘的根目录</li><li>命令和选项以及参数之间的分隔符是空白符（包括 Tab 键、Space 键等），某些特定情况下空白符可以省略</li><li>命令行的执行快捷键是 <kbd>Enter</kbd> 键，强制终止的快捷键是 <kbd>Ctrl</kbd> + <kbd>C</kbd> 键</li></ul></div><h2 id="切换磁盘" tabindex="-1"><a class="header-anchor" href="#切换磁盘" aria-hidden="true">#</a> 切换磁盘</h2><p>默认刚打开的 <code>cmd</code> 所在目录是当前用户的家目录，当前用户的家目录在 C 盘中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果当前在 C 盘，但要切换到 E 盘根目录下的 <code>test</code> 目录（<code>E:\\test</code>）中，不能直接使用 <code>cd</code> 命令进行切换，需要先切换到 E 盘根目录下后，再使用 <code>cd</code> 命令到 <code>test</code> 目录中。</p><p>切换到其它磁盘的根目录下，直接输入磁盘名加冒号（<code>:</code>）即可，例如：切换到 E 盘根目录下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token operator">&gt;</span>e:

E:<span class="token punctuation">\\</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>根目录就是磁盘的 <strong>顶级目录</strong></li></ul><h2 id="切换到指定目录" tabindex="-1"><a class="header-anchor" href="#切换到指定目录" aria-hidden="true">#</a> 切换到指定目录</h2><p>例如：切换到 E 盘根目录下的 <code>test</code> 目录中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>E:<span class="token punctuation">\\</span><span class="token operator">&gt;</span>cd <span class="token builtin class-name">test</span>

E:<span class="token punctuation">\\</span>test<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：切换到磁盘的根目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>E:<span class="token punctuation">\\</span>test<span class="token operator">&gt;</span>cd <span class="token punctuation">\\</span>

E:<span class="token punctuation">\\</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看当前目录列表" tabindex="-1"><a class="header-anchor" href="#查看当前目录列表" aria-hidden="true">#</a> 查看当前目录列表</h2><p>例如：查看 <code>test</code> 目录列表。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>E:<span class="token punctuation">\\</span>test<span class="token operator">&gt;</span>dir
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:<span class="token punctuation">\\</span>test 的目录

<span class="token number">2024</span>/07/12  <span class="token number">13</span>:08    <span class="token operator">&lt;</span>DIR<span class="token operator">&gt;</span>          <span class="token builtin class-name">.</span>
<span class="token number">2024</span>/07/12  <span class="token number">13</span>:08    <span class="token operator">&lt;</span>DIR<span class="token operator">&gt;</span>          <span class="token punctuation">..</span>
<span class="token number">2024</span>/07/11  <span class="token number">18</span>:15                <span class="token number">14</span> hello.txt
<span class="token number">2024</span>/07/12  <span class="token number">13</span>:08    <span class="token operator">&lt;</span>DIR<span class="token operator">&gt;</span>          test01
<span class="token number">2024</span>/07/12  <span class="token number">13</span>:08    <span class="token operator">&lt;</span>DIR<span class="token operator">&gt;</span>          test02
               <span class="token number">1</span> 个文件             <span class="token number">14</span> 字节
               <span class="token number">4</span> 个目录 <span class="token number">697,864</span>,912,896 可用字节

E:<span class="token punctuation">\\</span>test<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“驱动器 E 中的卷没有标签” 是因为没有对该磁盘命名标签，可以在该磁盘属性中配置磁盘的标签名。</p><p>例如：查看 <code>test01</code> 目录列表。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>E:<span class="token punctuation">\\</span>test<span class="token operator">&gt;</span>dir test01
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:<span class="token punctuation">\\</span>test<span class="token punctuation">\\</span>test01 的目录

<span class="token number">2024</span>/07/12  <span class="token number">13</span>:08    <span class="token operator">&lt;</span>DIR<span class="token operator">&gt;</span>          <span class="token builtin class-name">.</span>
<span class="token number">2024</span>/07/12  <span class="token number">13</span>:08    <span class="token operator">&lt;</span>DIR<span class="token operator">&gt;</span>          <span class="token punctuation">..</span>
<span class="token number">2024</span>/07/11  <span class="token number">18</span>:46                 <span class="token number">0</span> test01.txt
               <span class="token number">1</span> 个文件              <span class="token number">0</span> 字节
               <span class="token number">2</span> 个目录 <span class="token number">697,849</span>,479,168 可用字节

E:<span class="token punctuation">\\</span>test<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),c=[l];function p(o,d){return a(),e("div",null,c)}const v=n(i,[["render",p],["__file","basic_operation.html.vue"]]);export{v as default};
