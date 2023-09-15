import{_ as v}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as k,c as m,b as n,e as s,d as a,w as t,n as g,g as b,f as l}from"./app-7574c8a5.js";const h={},y={href:"https://theme-hope.vuejs.press/zh/guide/markdown/intro.html",target:"_blank",rel:"noopener noreferrer"},q=l(`<h2 id="使用-emoji-表情" tabindex="-1"><a class="header-anchor" href="#使用-emoji-表情" aria-hidden="true">#</a> 使用 Emoji 表情</h2><p>使用 Emoji 表情可以使笔记在阅读的时候更加生动，不那么的枯燥。</p><ul><li><p><strong>格式</strong></p><ul><li><code>:语义化文本:</code></li></ul></li><li><p><strong>说明</strong></p><ul><li>用一对 <code>:</code> 包裹，里面是 <strong>Emoji</strong> 符号的 <strong>语义化文本</strong></li><li>不支持上述方式的 Markdown 编辑器或笔记软件，直接用 <strong>输入法</strong> 输入也是可以的</li></ul></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:smile: :sweat: :cat: :woman_cartwheeling:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p>😄 😓 🐱 🤸‍♀️</p><p>分享一些 Emoji 网站：</p>`,7),f={href:"https://www.webfx.com/tools/emoji-cheat-sheet",target:"_blank",rel:"noopener noreferrer"},w={href:"https://emojipedia.org/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://gitmoji.dev/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.emojiall.com/zh-hans",target:"_blank",rel:"noopener noreferrer"},j=l(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>Windows 系统下按 <kbd>Win</kbd> + <kbd>.</kbd> 快速打开表情选择框（不是右侧小键盘的 <kbd>.</kbd>）</p></div><h2 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h2><h3 id="代码块行高亮" tabindex="-1"><a class="header-anchor" href="#代码块行高亮" aria-hidden="true">#</a> 代码块行高亮</h3><p>突出代码块的某些行，使用 <code>{行数-行数}</code>、<code>{行数,行数}</code> 格式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">js {2,5-7,13}
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
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>行数区间</strong>：例如 <code>{5-8}</code>, <code>{3-10}</code>, <code>{10-17}</code></li><li><strong>多个单行</strong>：例如 <code>{4,7,9}</code></li><li><strong>行数区间与多个单行</strong>：例如 <code>{4,7-13,16,23-27,40}</code></li></ul><h3 id="行号" tabindex="-1"><a class="header-anchor" href="#行号" aria-hidden="true">#</a> 行号</h3><p>您肯定已经注意到在代码块的最左侧会展示行号。这个功能是默认启用的，您可以通过配置来禁用它。</p><p>您可以在代码块添加 <code>:line-numbers</code> 和 <code>:no-line-numbers</code> 标记来覆盖配置项中的设置。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
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
</code></pre></div><h3 id="导入代码块" tabindex="-1"><a class="header-anchor" href="#导入代码块" aria-hidden="true">#</a> 导入代码块</h3><p>从文件中导入代码块：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 最简单的语法 --&gt;</span>
@<span class="token url">[<span class="token content">code</span>](<span class="token url">../../.vuepress/client.ts</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> setupRunningTimeFooter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./components/footerRunningTime.ts&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setupRunningTimeFooter</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&quot;2023-04-13&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;已运行 :day 天 :hour 小时 :minute 分钟 :second 秒&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;/en/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Running time: :day days :hour hours :minute minutes :second seconds&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token boolean">true</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入这个文件的一部分：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 仅导入第 6 行至第 13 行 --&gt;</span>
@<span class="token url">[<span class="token content">code{6-13}</span>](<span class="token url">../../.vuepress/client.ts</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>    <span class="token function">setupRunningTimeFooter</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&quot;2023-04-13&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;已运行 :day 天 :hour 小时 :minute 分钟 :second 秒&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;/en/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Running time: :day days :hour hours :minute minutes :second seconds&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token boolean">true</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码语言会根据文件扩展名进行推断，但建议您显式指定：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 指定代码语言 --&gt;</span>
@<span class="token url">[<span class="token content">code ts</span>](<span class="token url">../../.vuepress/client.ts</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> setupRunningTimeFooter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./components/footerRunningTime.ts&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setupRunningTimeFooter</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&quot;2023-04-13&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;已运行 :day 天 :hour 小时 :minute 分钟 :second 秒&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;/en/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Running time: :day days :hour hours :minute minutes :second seconds&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token boolean">true</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，<code>[]</code> 内的第二部分会被作为代码块标记来处理，因此在上面 <a href="#%E4%BB%A3%E7%A0%81%E5%9D%97%E8%A1%8C%E9%AB%98%E4%BA%AE">代码块行高亮</a> 中提到的语法在这里都可以支持：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 行高亮 --&gt;</span>
@<span class="token url">[<span class="token content">code ts{2,4-5}</span>](<span class="token url">../../.vuepress/client.ts</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> setupRunningTimeFooter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./components/footerRunningTime.ts&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setupRunningTimeFooter</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&quot;2023-04-13&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;已运行 :day 天 :hour 小时 :minute 分钟 :second 秒&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;/en/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Running time: :day days :hour hours :minute minutes :second seconds&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token boolean">true</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个复杂的例子：</p><ul><li>导入 <code>&#39;../../.vuepress/client.ts&#39;</code> 文件的第 4 行至第 15 行</li><li>指定语言为 <code>&#39;ts&#39;</code></li><li>对导入代码的第 3 行进行高亮，即对原 <code>&#39;../../.vuepress/client.ts&#39;</code> 文件的第 6 行代码进行高亮</li><li>禁用行号</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@<span class="token url">[<span class="token content">code{4-15} ts{3}:no-line-numbers</span>](<span class="token url">../../.vuepress/client.ts</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>效果：</strong></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setupRunningTimeFooter</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&quot;2023-04-13&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;已运行 :day 天 :hour 小时 :minute 分钟 :second 秒&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;/en/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Running time: :day days :hour hours :minute minutes :second seconds&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token boolean">true</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br></div></div><p>需要注意的是，路径别名在导入代码语法中不会生效。您可以通过下面的配置来自行处理路径别名：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/utils&#39;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="徽章" tabindex="-1"><a class="header-anchor" href="#徽章" aria-hidden="true">#</a> 徽章</h2><h3 id="内置" tabindex="-1"><a class="header-anchor" href="#内置" aria-hidden="true">#</a> 内置</h3><ul><li><p><strong>格式</strong></p><ul><li><code>&lt;Badge text=&quot;string&quot; type=&quot;tip&quot; vertical=&quot;undefined&quot; /&gt;</code></li></ul></li><li><p><strong>说明</strong></p><ul><li><p><strong>text</strong>：为文本内容，默认为空</p></li><li><p><strong>type</strong>：提示类型</p><ul><li><strong>info</strong>：相关信息，默认值</li><li><strong>note</strong>：注释</li><li><strong>tip</strong>：提示</li><li><strong>warning</strong>：警告</li><li><strong>danger</strong>：危险</li></ul></li><li><p><strong>vertical</strong>：</p><ul><li><strong>top</strong>：顶部</li><li><strong>middle</strong>：中间</li><li><strong>bottom</strong>：底部</li><li><strong>undefined</strong>：未定义，默认值</li></ul></li></ul></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>《沁园春·雪》<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>摘<span class="token punctuation">&quot;</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

北国风光<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>注释<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>note<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>，千里冰封，万里雪飘。

<span class="token blockquote punctuation">&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>译文<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>note<span class="token punctuation">&quot;</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>middle<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>: 北方的风光。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p>`,45),T=n("h3",{id:"外置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#外置","aria-hidden":"true"},"#"),s(" 外置")],-1),R={href:"https://shields.io/",target:"_blank",rel:"noopener noreferrer"},C=l(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">stars</span>](<span class="token url">https://img.shields.io/github/stars/sankgao/sankgao.github.io</span>)</span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">blog</span>](<span class="token url">https://img.shields.io/badge/vuepress-VuePress%20Theme%20Hope-green</span>)</span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">name</span>](<span class="token url">https://img.shields.io/badge/name-Sank%20Gao-blue</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img.shields.io/github/stars/sankgao/sankgao.github.io" alt="stars" loading="lazy"><img src="https://img.shields.io/badge/vuepress-VuePress Theme Hope-green" alt="blog" loading="lazy"><img src="https://img.shields.io/badge/name-Sank Gao-blue" alt="name" loading="lazy"></p><h2 id="信息框容器" tabindex="-1"><a class="header-anchor" href="#信息框容器" aria-hidden="true">#</a> 信息框容器</h2><p>添加信息、注释、提示、注意、警告和详情自定义容器的支持。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: info
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p>安装 VuePress Theme Hope:</p>`,29),E=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),B=l(`<h2 id="普通卡片列表" tabindex="-1"><a class="header-anchor" href="#普通卡片列表" aria-hidden="true">#</a> 普通卡片列表</h2><p>可以在 Markdown 中添加卡片，可以用于配置 <strong>友联</strong> 功能。</p><p><strong>title</strong>：卡片标题 <strong>desc</strong>：卡片描述 <strong>logo</strong>：卡片图标 <strong>link</strong>：卡片链接地址 <strong>color</strong>：卡片颜色</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">card</span>
<span class="token code-block language-card">title: Sank Gao
desc: 我是世界上的独一无二，百句空言不如一个行动。
logo: https://sankgao.github.io/logo.png
link: https://sankgao.github.io
color: rgba(93, 175, 241, 0.15)</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p>`,5),F=l(`<h2 id="图文卡片列表" tabindex="-1"><a class="header-anchor" href="#图文卡片列表" aria-hidden="true">#</a> 图文卡片列表</h2><p>站点信息，可用于友情链接或项目展示。</p><p><strong>name</strong>：站点名称 <strong>desc</strong>：站点描述 <strong>url</strong>：站点 URL <strong>logo</strong>：站点图标 <strong>repo</strong>：站点 GitHub 地址 <strong>preview</strong>：站点预览图，必须为绝对路径或完整 URL</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteInfo</span>
  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Sank Gao<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">desc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>我是世界上的独一无二，百句空言不如一个行动。<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://sankgao.github.io<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">logo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://sankgao.github.io/logo.png<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">repo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://github.com/sankgao/sankgao.github.io<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">preview</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/links/my.jpg<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p>`,5);function P(S,V){const e=p("ExternalLinkIcon"),c=p("Badge"),u=p("CodeTabs"),d=p("VPCard"),r=p("SiteInfo");return k(),m("div",null,[n("p",null,[s("本内容中的一些效果是来自 "),n("a",y,[s("VuePress Theme Hope 主题"),a(e)]),s("。")]),q,n("ul",null,[n("li",null,[n("a",f,[s("Emoji 符号备忘单"),a(e)]),s("：轻松单击即可将表情符号复制")]),n("li",null,[n("a",w,[s("Emoji 表情"),a(e)]),s("：📙 表情图标百科 — 😃 表情符号含义主页 💁👌🎍😍")]),n("li",null,[n("a",x,[s("gitmoji"),a(e)]),s("：通过 Emoji 表达 GitHub 提交消息上表情符号使用")]),n("li",null,[n("a",_,[s("EMOJI 中文网"),a(e)]),s("：这是一本全面的 EMOJI 字典")])]),j,n("p",null,[s("《沁园春·雪》"),a(c,{text:"摘",vertical:"top"})]),n("p",null,[s("北国风光"),a(c,{text:"注释1",type:"note",vertical:"top"}),s("，千里冰封，万里雪飘。")]),n("blockquote",null,[a(c,{text:"注释1",type:"note",vertical:"middle"}),s(": 北方的风光。")]),T,n("p",null,[s("如果想用更多的自定义徽章，可使用 "),n("a",R,[s("Shields"),a(e)]),s(" 来生成")]),C,a(u,{id:"414",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2,"tab-id":"shell"},{title0:t(({value:i,isActive:o})=>[s("pnpm")]),title1:t(({value:i,isActive:o})=>[s("yarn")]),title2:t(({value:i,isActive:o})=>[s("npm")]),tab0:t(({value:i,isActive:o})=>[E]),tab1:t(({value:i,isActive:o})=>[A]),tab2:t(({value:i,isActive:o})=>[D]),_:1}),B,a(d,g(b({title:"Sank Gao",desc:"我是世界上的独一无二，百句空言不如一个行动。",logo:"https://sankgao.github.io/logo.png",link:"https://sankgao.github.io",color:"rgba(93, 175, 241, 0.15)"})),null,16),F,a(r,{name:"Sank Gao",desc:"我是世界上的独一无二，百句空言不如一个行动。",url:"https://sankgao.github.io",logo:"https://sankgao.github.io/logo.png",repo:"https://github.com/sankgao/sankgao.github.io",preview:"/links/my.jpg"})])}const H=v(h,[["render",P],["__file","blog_notes.html.vue"]]);export{H as default};
