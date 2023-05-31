import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as v,c as k,a as m,d as n,e as s,b as a,w as l,f as t}from"./app-0eda5218.js";const g={},b=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"相关信息"),n("p",null,"如果想拥有更多丰富的笔记表现力，让自己阅读时，不处于大片黑白的世界里，本内容会让您的笔记句句深入记忆的深处😸"),n("div",{style:{"text-align":"right"}},[n("p",null,"2023-04-19 @Sankgao")])],-1),h={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},_=t(`<h2 id="使用-emoji-表情" tabindex="-1"><a class="header-anchor" href="#使用-emoji-表情" aria-hidden="true">#</a> 使用 emoji 表情</h2><p>阅读大片大片的文字难免产生视觉疲劳，而使用 <code>emoji</code> 表情，不仅缓解精神的渐眠，也会胜过千言。</p><p>在 <code>Markdown</code> 里，使用 <code>:表情:</code> 输入表情，如：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>您好 :smile:，我喜欢 :dog:，我小时候经常拿 :100:分哦~~~，欢迎来到我的博客 :heart:，一起学习吧 :muscle:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>效果：</strong></p><blockquote><p>您好 😄，我喜欢 🐶，我小时候经常拿💯分哦~~~，欢迎来到我的博客 ❤️，一起学习吧 💪</p></blockquote><p>很多指令肯定是记不了的，我们可以也可以去特定的网站获取表情的格式。也可以 copy 一个表情过来，Markdown 自动解析表情。</p><p>分享一些 emoji 网站：</p>`,8),x={href:"https://www.webfx.com/tools/emoji-cheat-sheet",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,":表情:",-1),w={href:"https://emojipedia.org/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/carloscuesta/gitmoji",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.emojiall.com/zh-hans",target:"_blank",rel:"noopener noreferrer"},q=t(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>windows 系统下按 <kbd>Win</kbd> + <kbd>.</kbd> 快速打开表情选择框（不是右侧小键盘的 <kbd>.</kbd>）</p></div><h2 id="外部链接" tabindex="-1"><a class="header-anchor" href="#外部链接" aria-hidden="true">#</a> 外部链接</h2><p>使用外部链接，文字会变色，并且可以点击跳转，格式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[VuePress-v2 官网](https://v2.vuepress.vuejs.org/zh/)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>效果：</strong></p>`,5),B={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},E=t(`<h2 id="文本高亮" tabindex="-1"><a class="header-anchor" href="#文本高亮" aria-hidden="true">#</a> 文本高亮</h2><p>使用 <code>&lt;mark&gt;</code> 标签或者 <code>\`</code> 让文本高亮。</p><p><code>&lt;mark&gt;</code> 标签经常用于文字的突出；如果是一段字符串，用的是 <code>\`</code> 包裹起来。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code-snippet code keyword">\`Vdoing\`</span> 是一款简洁高效的 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mark</span><span class="token punctuation">&gt;</span></span>知识管理&amp;博客<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mark</span><span class="token punctuation">&gt;</span></span> 主题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><code>Vdoing</code> 是一款简洁高效的 <mark>知识管理&amp;博客</mark> 主题</p><h2 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h2><h3 id="行高亮" tabindex="-1"><a class="header-anchor" href="#行高亮" aria-hidden="true">#</a> 行高亮</h3><p>突出代码块的某些行，使用 <code>{行数-行数}</code>、<code>{行数,行数}</code> 格式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">js {2,5-7,13}
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 行号默认是启用的</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，<code>[]</code>内的第二部分会被作为代码块标记来处理，因此在上面 <a href="#%E4%BB%A3%E7%A0%81%E5%9D%97">代码块</a> 中提到的语法在这里都可以支持：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 行高亮 --&gt;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="徽章" tabindex="-1"><a class="header-anchor" href="#徽章" aria-hidden="true">#</a> 徽章</h2><h3 id="内置" tabindex="-1"><a class="header-anchor" href="#内置" aria-hidden="true">#</a> 内置</h3>`,37),V={href:"https://vuepress.vuejs.org/zh/guide/using-vue.html#badge",target:"_blank",rel:"noopener noreferrer"},F=t(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">####</span> 《沁园春·雪》 &lt;Badge text=&quot;摘&quot;/&gt;</span>
北国风光<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>注释<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>，千里冰封，万里雪飘。

<span class="token blockquote punctuation">&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>译文<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>middle<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>: 北方的风光。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>type 有三个参数：<code>tip</code>、<code>warning</code>、<code>error</code>。默认是 <code>tip</code></li><li>vertical 有两个参数：<code>top</code>、<code>middle</code>。默认是 <code>top</code></li></ul><p>直接在 Markdown 文件使用，效果如下：</p>`,3),G={id:"《沁园春·雪》",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#《沁园春·雪》","aria-hidden":"true"},"#",-1),A=n("h3",{id:"外置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#外置","aria-hidden":"true"},"#"),s(" 外置")],-1),M={href:"https://shields.io/",target:"_blank",rel:"noopener noreferrer"},P=t(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">stars</span>](<span class="token url">https://img.shields.io/github/stars/Kele-Bingtang/notes-blog</span>)</span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">stars</span>](<span class="token url">https://img.shields.io/github/stars/Kele-Bingtang/notes-blog?style=social</span>)</span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">kbt</span>](<span class="token url">https://img.shields.io/badge/kbt-冰糖-green</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img.shields.io/github/stars/Kele-Bingtang/notes-blog" alt="访问量" loading="lazy"> <img src="https://img.shields.io/github/stars/Kele-Bingtang/notes-blog?style=social" alt="stars" loading="lazy"> <img src="https://img.shields.io/badge/kbt-冰糖-green" alt="name" loading="lazy"></p>`,2),K={href:"https://shields.io/",target:"_blank",rel:"noopener noreferrer"},N=t(`<h2 id="信息框容器" tabindex="-1"><a class="header-anchor" href="#信息框容器" aria-hidden="true">#</a> 信息框容器</h2><p>以下一些内容是 Vdoing 主题提供，并非官方提供。</p><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tip
这是一条提示
:::

::: warning
这是一条注意
:::

::: danger
这是一条警告
:::

::: note
这是笔记容器，主题自带，官方没有
:::

::: tip 我的自定义标题
自定义标题的提示框
:::


::: info
信息容器。
:::

::: note
注释容器。
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
一个有 <span class="token code-snippet code keyword">\`代码\`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#演示</span>)</span> 的信息容器。

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这是一条提示</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这是一条注意</p></div><div class="hint-container danger"><p class="hint-container-title">警告</p><p>这是一条警告</p></div><div class="hint-container note"><p class="hint-container-title">注</p><p>这是笔记容器，主题自带，官方没有</p></div><div class="hint-container tip"><p class="hint-container-title">我的自定义标题</p><p>自定义标题的提示框</p></div><p>如果想要折叠的容器，如下：<mark>也可以自定义标题</mark></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: details
这是一个详情块，在 IE/Edge 中不生效

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这是一个详情块&#39;</span><span class="token punctuation">)</span></span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>详情</summary><p>这是一个详情块，在 IE / Edge 中不生效</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这是一个详情块&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><h2 id="布局容器" tabindex="-1"><a class="header-anchor" href="#布局容器" aria-hidden="true">#</a> 布局容器</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: center
<span class="token title important"><span class="token punctuation">###</span> 我是居中的内容</span>
（可用于标题、图片等的居中）
:::

::: right
我是右浮动的内容
:::

::: theorem VuePress
Vue 驱动的静态网站生成器
::: right
来自 <span class="token url">[<span class="token content">官网</span>](<span class="token url">https://vuepress.vuejs.org/zh/</span>)</span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div style="text-align:center;"><h3 id="我是居中的内容" tabindex="-1"><a class="header-anchor" href="#我是居中的内容" aria-hidden="true">#</a> 我是居中的内容</h3><p>（可用于标题、图片等的居中）</p></div><div style="text-align:right;"><p>我是右浮动的内容</p></div><p>::: theorem VuePress Vue 驱动的静态网站生成器</p>`,18),z={style:{"text-align":"right"}},D={href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},L=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"没有 left 和 top、bottom")],-1),T={id:"代码块选项卡",tabindex:"-1"},R=n("a",{class:"header-anchor",href:"#代码块选项卡","aria-hidden":"true"},"#",-1),Y=t(`<p>在 <code>&lt;code-group&gt;</code> 中嵌套 <code>&lt;code-block&gt;</code> 来配合使用。在 <code>&lt;code-block&gt;</code> 标签添加 <code>title</code> 来指定 tab 标题，<code>active</code> 指定当前 tab：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code-group</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code-block</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>YARN<span class="token punctuation">&quot;</span></span> <span class="token attr-name">active</span><span class="token punctuation">&gt;</span></span>
  \`\`\`bash
  yarn add vuepress-theme-vdoing -D
  \`\`\`
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code-block</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code-block</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>NPM<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  \`\`\`bash
  npm install vuepress-theme-vdoing -D
  \`\`\`
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code-block</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code-group</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p>`,3),S=t(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>请在 <code>&lt;code-group&gt;</code> 标签与 Markdown 内容之间使用空行隔开，否则可能会解析不出来</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>Vdoing</code> 解释该组件仅适用于放置代码块，放其他内容在体验上并不友好。经过测试，我放入文字也是可以的</p><p>而且 <code>&lt;code-block&gt;</code> 放在 <code>&lt;code-group&gt;</code>; 里时，<strong>首行需要缩进两个空格</strong>，经过测试，四个空格出问题</p></div><p>如果您喜欢 <code>::: tabs</code> 代替 <code>&lt;code-group&gt;</code>，那么我们可以下载 <code>vuepress-plugin-tabs</code> 插件。<a href="#tabs%E6%8F%92%E4%BB%B6">点击跳到 Tabs 插件安装</a>。</p><p>在 <code>&lt;CodeGroup&gt;</code> 中嵌套 <code>&lt;CodeGroupItem&gt;</code> 来配合使用。在 <code>&lt;CodeGroupItem&gt;</code> 标签添加 <code>title</code> 来指定 <code>tab</code> 标题，<code>active</code> 指定当前 <code>tab</code>：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeGroup</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeGroupItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>PNPM<span class="token punctuation">&quot;</span></span> <span class="token attr-name">active</span><span class="token punctuation">&gt;</span></span>
  
  \`\`\`bash
  pnpm install
  \`\`\`
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CodeGroupItem</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeGroupItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>YARN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  
  \`\`\`bash
  yarn install
  \`\`\`
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CodeGroupItem</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeGroupItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>NPM<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  
  \`\`\`bash
  npm install
  \`\`\`
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CodeGroupItem</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CodeGroup</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p>`,6),J=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"install"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"install"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),W={class:"hint-container warning"},H=n("p",{class:"hint-container-title"},"注意",-1),Q=n("p",null,[s("您必须在 "),n("code",null,"<CodeGroupItem>"),s(" 的开始标签和代码块之间添加一个空行，否则代码块无法被 Markdown 正确解析")],-1),X=n("p",null,[s("所有内容首先都必须是合法的 Markdown，然后才是一个 "),n("code",null,"Vue SFC"),s("。")],-1),Z={href:"https://v2.vuepress.vuejs.org/zh/advanced/cookbook/markdown-and-vue-sfc.html",target:"_blank",rel:"noopener noreferrer"},$=n("p",null,"或者您可以选择使用自定义容器",-1),nn=t(`<h2 id="普通卡片列表" tabindex="-1"><a class="header-anchor" href="#普通卡片列表" aria-hidden="true">#</a> 普通卡片列表</h2><p>如果想使用 <mark>友链</mark> 功能，但是 vdoing 主题并没有直接在首页实现该功能，要么使用 <strong>卡片列表</strong>，要么自己手动实现html。而 <strong>卡片列表</strong> 目前只能使用在 Markdown 文档里，下方介绍。</p><p>普通卡片列表容器，可用于 <code>友情链接</code>、<code>项目推荐</code>、<code>诗词展示</code> 等。</p><p>输入：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">::</span><span class="token punctuation">:</span> cardList
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,17),sn={id:"图文卡片列表",tabindex:"-1"},an=n("a",{class:"header-anchor",href:"#图文卡片列表","aria-hidden":"true"},"#",-1),en=t(`<p>图文卡片列表容器，可用于 <code>项目展示</code>、<code>产品展示</code> 等。</p><p>先看效果：</p><p>::: cardImgList</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200529162253.jpg
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&lt;每行显示数量&gt;</code> 数字，表示每行最多显示多少个，选值范围 1~4，默认 3。在小屏时会根据屏幕宽度减少每行显示数量。</li><li>代码块需指定语言为 <code>yaml</code></li><li>代码块内是一个 <code>yaml</code> 格式的数组列表</li><li>数组成员的属性有： <ul><li><code>img</code>：图片地址</li><li><code>link</code>：链接地址</li><li><code>name</code>：标题</li><li><code>desc</code>：描述，可选</li><li><code>author</code>：作者名称，可选</li><li><code>avatar</code>：作者头像，可选</li></ul></li></ul><h2 id="tabs-插件" tabindex="-1"><a class="header-anchor" href="#tabs-插件" aria-hidden="true">#</a> Tabs 插件</h2>`,10),tn={href:"https://github.com/pskordilakis/vuepress-plugin-tabs",target:"_blank",rel:"noopener noreferrer"},ln=t(`<p>安装插件：</p><p>:::: tabs :options=&quot;{ useUrlFragment: false }&quot; ::: tab yarn</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> vuepress-plugin-tabs vue-tabs-component
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::::</p>`,18);function pn(cn,on){const e=i("ExternalLinkIcon"),p=i("Badge"),o=i("code-block"),d=i("code-group"),c=i("CodeGroupItem"),u=i("CodeGroup");return v(),k("div",null,[b,m(" more "),n("p",null,[s("本内容来自 "),n("a",h,[s("VuePress-v2 官网"),a(e)]),s(" 和 "),n("a",y,[s("vuepress-theme-hope 主题官网"),a(e)]),s("，有部分是自己总结的")]),_,n("ul",null,[n("li",null,[n("a",x,[s("emoji 表情备忘录"),a(e)]),s("：有很多表情的格式("),f,s(")")]),n("li",null,[n("a",w,[s("emoji 表情"),a(e)]),s("：有很多表情可以 copy")]),n("li",null,[n("a",j,[s("gitmoji"),a(e)]),s("：通过 emoji 表达 git 的操作内容")]),n("li",null,[n("a",C,[s("EMOJI 中文网"),a(e)]),s("：这是一本全面的 EMOJI 字典")])]),q,n("p",null,[n("a",B,[s("VuePress-v2 官网"),a(e)])]),E,n("p",null,[s("官方自带。详细使用可前往官网 "),n("a",V,[s("Badge"),a(e)]),s("。")]),F,n("h4",G,[I,s(" 《沁园春·雪》 "),a(p,{text:"摘"})]),n("p",null,[s("北国风光"),a(p,{text:"注释",type:"warning"}),s("，千里冰封，万里雪飘。")]),n("blockquote",null,[a(p,{text:"译文",type:"error",vertical:"middle"}),s(": 北方的风光。")]),A,n("p",null,[s("如果想用更多的自定义徽章，可使用 "),n("a",M,[s("Shields"),a(e)]),s(" 来生成")]),P,n("p",null,[s("如果没接触过 Shields，"),n("a",K,[s("Shields 官网"),a(e)])]),N,n("div",z,[n("p",null,[s("来自 "),n("a",D,[s("VuePress 官网"),a(e)])])]),L,n("h2",T,[R,s(" 代码块选项卡"),a(p,{text:"v1.8.0+"})]),Y,a(d,null,{default:l(()=>[a(o,{title:"YARN",active:""},{default:l(()=>[s(" ```bash yarn add vuepress-theme-vdoing -D ``` ")]),_:1}),a(o,{title:"NPM"},{default:l(()=>[s(" ```bash npm install vuepress-theme-vdoing -D ``` ")]),_:1})]),_:1}),S,a(u,null,{default:l(()=>[a(c,{title:"PNPM",active:""},{default:l(()=>[J]),_:1}),a(c,{title:"YARN"},{default:l(()=>[U]),_:1}),a(c,{title:"NPM"},{default:l(()=>[O]),_:1})]),_:1}),n("div",W,[H,Q,X,n("p",null,[s("了解更多："),n("a",Z,[s("Cookbook > Markdown 与 Vue SFC"),a(e)])]),$]),nn,n("h2",sn,[an,s(" 图文卡片列表"),a(p,{text:"v1.1.0 +"})]),en,n("p",null,[s("官网："),n("a",tn,[s("https://github.com/pskordilakis/vuepress-plugin-tabs"),a(e)])]),ln])}const rn=r(g,[["render",pn],["__file","blog_notes.html.vue"]]);export{rn as default};
