import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as v,a as k,b as n,e as s,d as a,w as i,f as t}from"./app-a18d427e.js";const m={},b=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"相关信息"),n("p",null,"如果想拥有更多丰富的笔记表现力，让自己阅读时，不处于大片黑白的世界里，本内容会让您的笔记句句深入记忆的深处😸"),n("div",{style:{"text-align":"right"}},[n("p",null,"2023-04-19 @Sankgao")])],-1),g=t(`<h2 id="使用-emoji-表情" tabindex="-1"><a class="header-anchor" href="#使用-emoji-表情" aria-hidden="true">#</a> 使用 emoji 表情</h2><ul><li><p><strong>格式</strong></p><ul><li><code>:语义化文本:</code></li></ul></li><li><p><strong>说明</strong></p><ul><li>用一对 <code>:</code> 包裹，里面是 <strong>Emoji</strong> 符号的 <strong>语义化文本</strong>（<strong>Typora 编辑器</strong> 中，输入 <code>:</code> 就会带提示器）</li><li>不支持上述方式的 Markdown 编辑器或笔记软件，直接用 <strong>输入法</strong> 输入也是可以的</li></ul></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:smile:

:sweat:

:cat:

:woman_cartwheeling:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p>😄</p><p>😓</p><p>🐱</p><p>🤸‍♀️</p><p>分享一些 emoji 网站：</p>`,9),h={href:"https://www.webfx.com/tools/emoji-cheat-sheet",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,":表情:",-1),x={href:"https://emojipedia.org/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/carloscuesta/gitmoji",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.emojiall.com/zh-hans",target:"_blank",rel:"noopener noreferrer"},w=t(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>windows 系统下按 <kbd>Win</kbd> + <kbd>.</kbd> 快速打开表情选择框（不是右侧小键盘的 <kbd>.</kbd>）</p></div><h2 id="外部链接" tabindex="-1"><a class="header-anchor" href="#外部链接" aria-hidden="true">#</a> 外部链接</h2><p>使用外部链接，文字会变色，并且可以点击跳转。<strong>格式如下：</strong></p><ul><li><a href=""></a></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[vuepress-theme-hope 主题官网](https://theme-hope.vuejs.press/zh/)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>效果：</strong></p>`,6),j={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},C=t(`<h2 id="文本高亮" tabindex="-1"><a class="header-anchor" href="#文本高亮" aria-hidden="true">#</a> 文本高亮</h2><p>使用 <code>\`</code>、<code>==文本内容==</code> 或 <code>&lt;mark&gt;</code> 标签让文本高亮。<strong>格式如下：</strong></p><ul><li><code>\`文本内容\`</code></li><li><code>==文本内容==</code></li><li><code>&lt;mark&gt;文本内容&lt;/mark&gt;</code></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>这是一段 <span class="token code-snippet code keyword">\`高亮\`</span> 文本，这是一段 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mark</span><span class="token punctuation">&gt;</span></span>高亮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mark</span><span class="token punctuation">&gt;</span></span> 文本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p>这是一段 <code>高亮</code> 文本，这是一段 <mark>高亮</mark> 文本</p><h2 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h2><h3 id="行高亮" tabindex="-1"><a class="header-anchor" href="#行高亮" aria-hidden="true">#</a> 行高亮</h3><p>突出代码块的某些行，使用 <code>{行数-行数}</code>、<code>{行数,行数}</code> 格式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">js {2,5-7,13}
return {
  // 数据
  options,
  activeKey,
  sourceLabels,
  sourceForm,
  addForm,
  addRules,
  sourceRules,
  // 函数
  displayRender,
  submitProdoce,
  onAddClose,
};
</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">{</span>
  <span class="token comment">// 数据</span>
  options<span class="token punctuation">,</span>
  activeKey<span class="token punctuation">,</span>
  sourceLabels<span class="token punctuation">,</span>
  sourceForm<span class="token punctuation">,</span>
  addForm<span class="token punctuation">,</span>
  addRules<span class="token punctuation">,</span>
  sourceRules<span class="token punctuation">,</span>
  <span class="token comment">// 函数</span>
  displayRender<span class="token punctuation">,</span>
  submitProdoce<span class="token punctuation">,</span>
  onAddClose<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>行数区间</strong>: 例如 <code>{5-8}</code>, <code>{3-10}</code>, <code>{10-17}</code></li><li><strong>多个单行</strong>: 例如 <code>{4,7,9}</code></li><li><strong>行数区间与多个单行</strong>: 例如 <code>{4,7-13,16,23-27,40}</code></li></ul><h3 id="行号" tabindex="-1"><a class="header-anchor" href="#行号" aria-hidden="true">#</a> 行号</h3><p>您肯定已经注意到在代码块的最左侧会展示行号。这个功能是默认启用的，您可以通过配置来禁用它。</p><p>您可以在代码块添加 <code>:line-numbers</code> 和 <code>:no-line-numbers</code> 标记来覆盖配置项中的设置。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts"><span class="token comment">// 行号默认是启用的</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">&#39;This is line 2&#39;</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">&#39;This is line 3&#39;</span></span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts:no-line-numbers</span>
<span class="token code-block language-ts"><span class="token comment">// 行号被禁用</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">&#39;This is line 2&#39;</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">&#39;This is line 3&#39;</span></span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 行号默认是启用的</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">&#39;This is line 2&#39;</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">&#39;This is line 3&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 行号被禁用</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">&#39;This is line 2&#39;</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">&#39;This is line 3&#39;</span>
</code></pre></div><h2 id="导入代码块" tabindex="-1"><a class="header-anchor" href="#导入代码块" aria-hidden="true">#</a> 导入代码块</h2><p>您可以使用下面的语法，从文件中导入代码块：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 最简单的语法 --&gt;</span>
@<span class="token url">[<span class="token content">code</span>](<span class="token url">../foo.js</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您只想导入这个文件的一部分：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 仅导入第 1 行至第 10 行 --&gt;</span>
@<span class="token url">[<span class="token content">code{1-10}</span>](<span class="token url">../foo.js</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>代码语言会根据文件扩展名进行推断，但建议您显式指定：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 指定代码语言 --&gt;</span>
@<span class="token url">[<span class="token content">code js</span>](<span class="token url">../foo.js</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，<code>[]</code> 内的第二部分会被作为代码块标记来处理，因此在上面 <a href="#%E4%BB%A3%E7%A0%81%E5%9D%97">代码块</a> 中提到的语法在这里都可以支持：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 行高亮 --&gt;</span>
@<span class="token url">[<span class="token content">code js{2,4-5}</span>](<span class="token url">../foo.js</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个复杂的例子：</p><ul><li>导入 <code>&#39;../foo.js&#39;</code> 文件的第 3 行至第 10 行</li><li>指定语言为 <code>&#39;js&#39;</code></li><li>对导入代码的第 3 行进行高亮，即 <code>&#39;../foo.js&#39;</code> 文件的第 5 行</li><li>禁用行号</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@<span class="token url">[<span class="token content">code{3-10} js{3}:no-line-numbers</span>](<span class="token url">../foo.js</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是，路径别名在导入代码语法中不会生效。您可以通过下面的配置来自行处理路径别名：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/utils&#39;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
    importCode<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">handleImportPath</span><span class="token operator">:</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^@src</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;path/to/src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 会被解析至 &#39;path/to/src/foo.js&#39; --&gt;</span>
@<span class="token url">[<span class="token content">code</span>](<span class="token url">@src/foo.js</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="徽章" tabindex="-1"><a class="header-anchor" href="#徽章" aria-hidden="true">#</a> 徽章</h2><h3 id="内置" tabindex="-1"><a class="header-anchor" href="#内置" aria-hidden="true">#</a> 内置</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>《沁园春·雪》<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>摘<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
北国风光<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>注释<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>note<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>，千里冰封，万里雪飘。

<span class="token blockquote punctuation">&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>译文<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>note<span class="token punctuation">&quot;</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>middle<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>: 北方的风光。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>type</strong> 默认是 <code>info</code></p><ul><li><code>info</code></li><li><code>note</code></li><li><code>tip</code></li><li><code>warning</code></li><li><code>danger</code></li></ul></li><li><p><strong>vertical</strong> 默认是 <code>top</code></p><ul><li><code>top</code></li><li><code>middle</code></li></ul></li></ul><p><strong>效果：</strong></p>`,40),q=n("h3",{id:"外置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#外置","aria-hidden":"true"},"#"),s(" 外置")],-1),B={href:"https://shields.io/",target:"_blank",rel:"noopener noreferrer"},A=t(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">stars</span>](<span class="token url">https://img.shields.io/github/stars/Kele-Bingtang/notes-blog</span>)</span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">stars</span>](<span class="token url">https://img.shields.io/github/stars/Kele-Bingtang/notes-blog?style=social</span>)</span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">kbt</span>](<span class="token url">https://img.shields.io/badge/kbt-冰糖-green</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img.shields.io/github/stars/Kele-Bingtang/notes-blog" alt="访问量" loading="lazy"> <img src="https://img.shields.io/github/stars/Kele-Bingtang/notes-blog?style=social" alt="stars" loading="lazy"> <img src="https://img.shields.io/badge/kbt-冰糖-green" alt="name" loading="lazy"></p>`,2),F={href:"https://shields.io/",target:"_blank",rel:"noopener noreferrer"},E=t(`<h2 id="信息框容器" tabindex="-1"><a class="header-anchor" href="#信息框容器" aria-hidden="true">#</a> 信息框容器</h2><p>添加信息、注释、提示、注意、警告和详情自定义容器的支持。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: info
信息容器
:::

::: note
注释容器
:::

::: tip
提示容器
:::

::: warning
警告容器
:::

::: danger
危险容器
:::

::: details
详情容器
:::

::: info 自定义标题
一个有 <span class="token code-snippet code keyword">\`代码\`</span> 的信息容器。

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>信息容器</p></div><div class="hint-container note"><p class="hint-container-title">注</p><p>注释容器</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>警告容器</p></div><div class="hint-container danger"><p class="hint-container-title">警告</p><p>危险容器</p></div><details class="hint-container details"><summary>详情</summary><p>详情容器</p></details><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 的信息容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h2 id="布局容器" tabindex="-1"><a class="header-anchor" href="#布局容器" aria-hidden="true">#</a> 布局容器</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: center
居中的内容
:::

::: right
右对齐的内容
:::

::: justify
两端对齐的内容
:::

嵌套容器：

:::: center
居中的内容
::: right
右对齐的内容
:::
居中的内容
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><div style="text-align:center;"><p>居中的内容</p></div><div style="text-align:right;"><p>右对齐的内容</p></div><div style="text-align:justify;"><p>两端对齐的内容</p></div><p>嵌套容器：</p><div style="text-align:center;"><p>居中的内容</p><div style="text-align:right;"><p>右对齐的内容</p></div><p>居中的内容</p></div><h2 id="代码块选项卡" tabindex="-1"><a class="header-anchor" href="#代码块选项卡" aria-hidden="true">#</a> 代码块选项卡</h2><p>将选项卡包装在 <code>code-tabs</code> 容器中。</p><p>在 <code>code-tabs</code> 容器中添加一个 <code>id</code> 后缀，该后缀将用作选项卡 <code>id</code>。所有具有相同 <code>id</code> 的选项卡将共享相同的切换事件。</p><p>在这个容器内，使用 <code>@tab</code> 标记来标记和分隔选项卡内容。</p><p>在 <code>@tab</code> 标记后，可以添加文本 <code>:active</code> 默认激活选项卡，之后的文本将被解析为此选项卡标题。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>安装 VuePress Theme Hope:

::: code-tabs#language

@tab pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash">pnpm add -D vuepress-theme-hope</span>
<span class="token punctuation">\`\`\`</span></span>

@tab yarn

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash">yarn add -D vuepress-theme-hope</span>
<span class="token punctuation">\`\`\`</span></span>

@tab:active npm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash">npm i -D vuepress-theme-hope</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p>安装 VuePress Theme Hope:</p>`,27),K=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),V=t(`<h2 id="普通卡片列表" tabindex="-1"><a class="header-anchor" href="#普通卡片列表" aria-hidden="true">#</a> 普通卡片列表</h2><p>如果想使用 <mark>友链</mark> 功能，但是 vdoing 主题并没有直接在首页实现该功能，要么使用 <strong>卡片列表</strong>，要么自己手动实现html。而 <strong>卡片列表</strong> 目前只能使用在 Markdown 文档里，下方介绍。</p><p>普通卡片列表容器，可用于 <code>友情链接</code>、<code>项目推荐</code>、<code>诗词展示</code> 等。</p><p>输入：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">::</span><span class="token punctuation">:</span> cardList
\`\`\`yaml
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> George Chan
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 让我给您讲讲他的传奇故事吧
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//z3.ax1x.com/2021/09/30/4oKMVI.jpg
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cyc0819.top/
  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#FFB6C1&#39;</span> <span class="token comment"># 可选，默认 var(--bodyBg)。颜色值有 # 号时请添加单引号</span>
  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#621529&#39;</span> <span class="token comment"># 可选，默认 var(--textColor)</span>
  
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> butcher2000
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 即使再小的帆，也能远航
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/Kele<span class="token punctuation">-</span>Bingtang/static@master/user/20211029181901.png
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//blog.csdn.net/weixin_46827107
  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#CBEAFA&#39;</span> 
  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#6854A1&#39;</span> 
  
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Evan&#39;s blog
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 前端的小学生
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200103123203.jpg
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xugaoyi.com/
  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#B9D59C&#39;</span>
  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#3B551F&#39;</span>
\`\`\`
<span class="token key atrule">::</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p>::: cardList</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> George Chan
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 让我给您讲讲他的传奇故事吧
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//z3.ax1x.com/2021/09/30/4oKMVI.jpg
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cyc0819.top/
  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#FFB6C1&#39;</span> <span class="token comment"># 可选，默认 var(--bodyBg)。颜色值有 # 号时请添加单引号</span>
  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#621529&#39;</span> <span class="token comment"># 可选，默认 var(--textColor)</span>
  
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> butcher2000
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 即使再小的帆，也能远航
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/Kele<span class="token punctuation">-</span>Bingtang/static@master/user/20211029181901.png
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//blog.csdn.net/weixin_46827107
  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#CBEAFA&#39;</span> 
  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#6854A1&#39;</span> 
  
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Evan&#39;s blog
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 前端的小学生
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200103123203.jpg
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xugaoyi.com/
  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#B9D59C&#39;</span>
  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#3B551F&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">::</span><span class="token punctuation">:</span> cardList &lt;每行显示数量<span class="token punctuation">&gt;</span>
\`\`\` yaml
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 名称
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xxx.jpg <span class="token comment"># 头像，可选</span>
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xxx/ <span class="token comment"># 链接，可选</span>
  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#CBEAFA&#39;</span> <span class="token comment"># 背景色，可选，默认 var(--bodyBg)。颜色值有 # 号时请添加引号</span>
  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#6854A1&#39;</span> <span class="token comment"># 文本色，可选，默认 var(--textColor)</span>
\`\`\`
<span class="token key atrule">::</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&lt;每行显示数量&gt;</code>：一行内显示多少个卡片，值范围 1~4，默认是 3 个，上方的卡片正好是三个，如果再多一个卡片，就会被换到下一行</li><li>代码块需指定语言为 <code>yaml</code></li><li>代码块内是一个 <code>yaml</code> 格式的数组列表</li><li>数组成员的属性有： <ul><li><code>name</code>：名称</li><li><code>desc</code>：描述</li><li><code>avatar</code>：头像，可选</li><li><code>link</code>：链接，可选</li><li><code>bgColor</code>：背景色，可选，默认 <code>var(--bodyBg)</code>。颜色值有 <code>#</code> 号时请添加引号</li><li><code>textColor</code>：文本色，可选，默认 <code>var(--textColor)</code></li></ul></li></ul><p>不指定颜色，默认为白色，如下演示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">::</span><span class="token punctuation">:</span> cardList 2
\`\`\`yaml
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 《静夜思》
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 床前明月光，疑是地上霜。举头望明月，低头思故乡。
  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#F0DFB1&#39;</span>
  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#242A38&#39;</span>
  
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Vdoing
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 🚀一款简洁高效的VuePress 知识管理<span class="token important">&amp;博客(blog)</span> 主题
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/xugaoyi/vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>vdoing
  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#DFEEE7&#39;</span>
  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#2A3344&#39;</span>
\`\`\`
<span class="token key atrule">::</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: cardList 2</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 《静夜思》
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 床前明月光，疑是地上霜。举头望明月，低头思故乡。
  
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Vdoing
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 🚀一款简洁高效的VuePress 知识管理<span class="token important">&amp;博客(blog)</span> 主题
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/xugaoyi/vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>vdoing
  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#DFEEE7&#39;</span>
  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#2A3344&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,17),L={id:"图文卡片列表",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#图文卡片列表","aria-hidden":"true"},"#",-1),z=t(`<p>图文卡片列表容器，可用于 <code>项目展示</code>、<code>产品展示</code> 等。</p><p>先看效果：</p><p>::: cardImgList</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200529162253.jpg
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xugaoyi.com/
  <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容 <span class="token comment"># 描述，可选</span>
  <span class="token key atrule">author</span><span class="token punctuation">:</span> Young Gqs <span class="token comment"># 作者，可选</span>
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/Kele<span class="token punctuation">-</span>Bingtang/static@master/user/avatar2.png <span class="token comment"># 头像，可选</span>
  
<span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200530100256.jpg
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xugaoyi.com/
  <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
  <span class="token key atrule">author</span><span class="token punctuation">:</span> Young Gqs
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/Kele<span class="token punctuation">-</span>Bingtang/static@master/user/avatar2.png
  
<span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200530100257.jpg
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xugaoyi.com/
  <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
  <span class="token key atrule">author</span><span class="token punctuation">:</span> Young Gqs
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/Kele<span class="token punctuation">-</span>Bingtang/static@master/user/avatar2.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">::</span><span class="token punctuation">:</span> cardImgList
\`\`\`yaml
<span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200529162253.jpg
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xugaoyi.com/
  <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容 <span class="token comment"># 描述，可选</span>
  <span class="token key atrule">author</span><span class="token punctuation">:</span> Young Gqs <span class="token comment"># 作者，可选</span>
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/Kele<span class="token punctuation">-</span>Bingtang/static@master/user/avatar2.png <span class="token comment"># 头像，可选</span>
  
<span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200530100256.jpg
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xugaoyi.com/
  <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
  <span class="token key atrule">author</span><span class="token punctuation">:</span> Young Gqs
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/Kele<span class="token punctuation">-</span>Bingtang/static@master/user/avatar2.png
  
<span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200530100257.jpg
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xugaoyi.com/
  <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
  <span class="token key atrule">author</span><span class="token punctuation">:</span> Young Gqs
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/Kele<span class="token punctuation">-</span>Bingtang/static@master/user/avatar2.png
\`\`\`
<span class="token key atrule">::</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">::</span><span class="token punctuation">:</span> cardImgList &lt;每行显示数量<span class="token punctuation">&gt;</span>
\`\`\` yaml
<span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xxx.jpg <span class="token comment"># 图片地址</span>
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xxx.com <span class="token comment"># 链接地址</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> 标题
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 描述 <span class="token comment"># 可选</span>
  <span class="token key atrule">author</span><span class="token punctuation">:</span> 作者名称 <span class="token comment"># 可选</span>
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//xxx.jpg <span class="token comment"># 作者头像，可选</span>
\`\`\`
<span class="token key atrule">::</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&lt;每行显示数量&gt;</code> 数字，表示每行最多显示多少个，选值范围 1~4，默认 3。在小屏时会根据屏幕宽度减少每行显示数量。</li><li>代码块需指定语言为 <code>yaml</code></li><li>代码块内是一个 <code>yaml</code> 格式的数组列表</li><li>数组成员的属性有： <ul><li><code>img</code>：图片地址</li><li><code>link</code>：链接地址</li><li><code>name</code>：标题</li><li><code>desc</code>：描述，可选</li><li><code>author</code>：作者名称，可选</li><li><code>avatar</code>：作者头像，可选</li></ul></li></ul><h2 id="tabs-插件" tabindex="-1"><a class="header-anchor" href="#tabs-插件" aria-hidden="true">#</a> Tabs 插件</h2>`,10),G={href:"https://github.com/pskordilakis/vuepress-plugin-tabs",target:"_blank",rel:"noopener noreferrer"},M=t(`<p>安装插件：</p><p>:::: tabs :options=&quot;{ useUrlFragment: false }&quot; ::: tab yarn</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> vuepress-plugin-tabs vue-tabs-component
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p><p>::: tab npm</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vuepress-plugin-tabs vue-tabs-component
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>::: ::::</p><p>在 <code>.vuepress/styles/index.styl</code> 添加如下内容：</p><div class="language-stylus line-numbers-mode" data-ext="styl"><pre class="language-stylus"><code><span class="token atrule-declaration"><span class="token atrule">@require</span> <span class="token string">&#39;~vuepress-plugin-tabs/dist/themes/default.styl&#39;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code>.vuepress/config.js</code> 中添加如下内容：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;tabs&#39;</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动项目，下面是使用的 demo。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: tabs cache-lifetime=&quot;5&quot; :options=&quot;{ useUrlFragment: false }&quot;
::: tab title 
<span class="token bold"><span class="token punctuation">**</span><span class="token content">Markdown content</span><span class="token punctuation">**</span></span>
:::
::: tab javascript 
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language"> javascript</span>
<span class="token code-block language-javascript"><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Javascript code example&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>
:::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>cache-lifetime</code> 是存活时间，默认 5 分钟，即关闭网页五分钟内回来，当时选中的哪个 tabs，就会显示该内容，5 分钟后默认回到到第一个 tabs</li><li><code>:options=&quot;{ useUrlFragment: false }&quot;</code> 建议写上，不然每次点击任意 tabs，都会刷新一次当前页面，没有必要</li></ul><p>效果：</p><p>:::: tabs cache-lifetime=&quot;5&quot; :options=&quot;{ useUrlFragment: false }&quot; ::: tab title <strong>Markdown content</strong> ::: ::: tab javascript</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Javascript code example&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::::</p>`,18);function P(R,Y){const e=o("ExternalLinkIcon"),c=o("Badge"),d=o("CodeTabs");return r(),v("div",null,[b,k(" more "),g,n("ul",null,[n("li",null,[n("a",h,[s("emoji 表情备忘录"),a(e)]),s("：有很多表情的格式("),y,s(")")]),n("li",null,[n("a",x,[s("emoji 表情"),a(e)]),s("：有很多表情可以 copy")]),n("li",null,[n("a",_,[s("gitmoji"),a(e)]),s("：通过 emoji 表达 git 的操作内容")]),n("li",null,[n("a",f,[s("EMOJI 中文网"),a(e)]),s("：这是一本全面的 EMOJI 字典")])]),w,n("p",null,[n("a",j,[s("vuepress-theme-hope 主题官网"),a(e)])]),C,n("p",null,[s("《沁园春·雪》"),a(c,{text:"摘"}),s(" 北国风光"),a(c,{text:"注释",type:"note"}),s("，千里冰封，万里雪飘。")]),n("blockquote",null,[a(c,{text:"译文",type:"note",vertical:"middle"}),s(": 北方的风光。")]),q,n("p",null,[s("如果想用更多的自定义徽章，可使用 "),n("a",B,[s("Shields"),a(e)]),s(" 来生成")]),A,n("p",null,[s("如果没接触过 Shields，"),n("a",F,[s("Shields 官网"),a(e)])]),E,a(d,{id:"424",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2,"tab-id":"shell"},{title0:i(({value:l,isActive:p})=>[s("pnpm")]),title1:i(({value:l,isActive:p})=>[s("yarn")]),title2:i(({value:l,isActive:p})=>[s("npm")]),tab0:i(({value:l,isActive:p})=>[K]),tab1:i(({value:l,isActive:p})=>[T]),tab2:i(({value:l,isActive:p})=>[D]),_:1}),V,n("h2",L,[I,s(" 图文卡片列表"),a(c,{text:"v1.1.0 +"})]),z,n("p",null,[s("官网："),n("a",G,[s("https://github.com/pskordilakis/vuepress-plugin-tabs"),a(e)])]),M])}const J=u(m,[["render",P],["__file","blog_notes.html.vue"]]);export{J as default};
