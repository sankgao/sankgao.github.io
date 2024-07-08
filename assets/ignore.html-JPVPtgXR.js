import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as d,b as e,e as n,d as t,f as s}from"./app-5tldNxZo.js";const l={},r=s(`<p>如果有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。通常都是些自动生成的文件，比如：日志文件，或者编译过程中创建的临时文件等。在这种情况下，可以创建一个名为 <code>.gitignore</code> 的文件，列出要忽略的文件的模式。例如：</p><div class="language-gitignore line-numbers-mode" data-ext="gitignore"><pre class="language-gitignore"><code><span class="token entry string">cat .gitignore</span>

<span class="token entry string"><span class="token operator">*</span>.<span class="token regex">[oa]</span></span>
<span class="token entry string"><span class="token operator">*</span>~</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一行告诉 Git 忽略所有以 <code>.o</code> 或 <code>.a</code> 结尾的文件。一般这类对象文件和存档文件都是编译过程中出现的；第二行告诉 Git 忽略所有名字以波浪符（<code>~</code>）结尾的文件，许多文本编辑软件（比如：Emacs）都用这样的文件名保存副本。</p><p>养成一开始就为新仓库设置好 <code>.gitignore</code> 文件的习惯，以免将来误提交这类无用的文件。</p>`,4),p={class:"hint-container tip"},g=e("p",{class:"hint-container-title"},"提示",-1),u={href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"},v=s(`<h2 id="格式规范" tabindex="-1"><a class="header-anchor" href="#格式规范" aria-hidden="true">#</a> 格式规范</h2><p><code>.gitignore</code> 文件的格式规范如下：</p><ul><li>所有空行或者以 <code>#</code> 开头的行都会被 Git 忽略</li><li>可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中</li><li>匹配模式可以以（<code>/</code>）开头防止递归</li><li>匹配模式可以以（<code>/</code>）结尾指定目录</li><li>要忽略指定模式以外的文件或目录，可以在模式前加上叹号（<code>!</code>）取反</li></ul><h2 id="glob-模式" tabindex="-1"><a class="header-anchor" href="#glob-模式" aria-hidden="true">#</a> glob 模式</h2><p>glob 模式是指 shell 所使用的简化了的正则表达式。</p><ul><li>星号（<code>*</code>）匹配零个或多个任意字符</li><li><code>[abc]</code> 匹配任何一个列在方括号中的字符（这个例子要么匹配一个 <code>a</code>，要么匹配一个 <code>b</code>，要么匹配一个 <code>c</code>）</li><li>问号（<code>?</code>）只匹配一个任意字符</li><li>如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如：<code>[0-9]</code> 表示匹配所有 <code>0</code> 到 <code>9</code> 的数字）</li><li>使用两个星号（<code>**</code>）表示匹配任意中间目录，比如：<code>a/**/z</code> 可以匹配 <code>a/z</code> 、 <code>a/b/z</code> 或 <code>a/b/c/z</code> 等。</li></ul><p>例如：</p><div class="language-gitignore line-numbers-mode" data-ext="gitignore"><pre class="language-gitignore"><code><span class="token entry string">cat .gitignore</span>

<span class="token comment"># 忽略所有以 .a 结尾的文件</span>
<span class="token entry string"><span class="token operator">*</span>.a</span>

<span class="token comment"># 但跟踪所有的 lib.a，即便您在前面忽略了 .a 文件</span>
<span class="token entry string"><span class="token operator">!</span>lib.a</span>

<span class="token comment"># 只忽略当前目录下的 TODO 文件，而不忽略子目录中的 TODO 文件。例如：subdir/TODO</span>
<span class="token entry string"><span class="token punctuation">/</span>TODO</span>

<span class="token comment"># 忽略所有 build 目录下的文件</span>
<span class="token entry string">build<span class="token punctuation">/</span></span>

<span class="token comment"># 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt</span>
<span class="token entry string">doc<span class="token punctuation">/</span><span class="token operator">*</span>.txt</span>

<span class="token comment"># 忽略 doc/ 目录及其所有子目录下的 .pdf 文件</span>
<span class="token entry string">doc<span class="token punctuation">/</span><span class="token operator">**</span><span class="token punctuation">/</span><span class="token operator">*</span>.pdf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="共享式和独享式忽略文件" tabindex="-1"><a class="header-anchor" href="#共享式和独享式忽略文件" aria-hidden="true">#</a> 共享式和独享式忽略文件</h2><p>忽略文件 <code>.gitignore</code> 有 <strong>共享式</strong> 和 <strong>独享式。</strong></p><h3 id="共享式" tabindex="-1"><a class="header-anchor" href="#共享式" aria-hidden="true">#</a> 共享式</h3><p><code>.gitignore</code> 被添加到版本库后成为了版本库的一部分，当版本库共享给他人（克隆），或者把版本库推送（push）到集中式的服务器（或他人的版本库）时，这个忽略文件就会出现在他人的工作区中，文件忽略在他人的工作区中同样生效。</p><h3 id="独享式" tabindex="-1"><a class="header-anchor" href="#独享式" aria-hidden="true">#</a> 独享式</h3><p>独享式忽略就是不会因为版本库共享，或者版本库之间的推送传递给他人的文件忽略。</p><p>独享式忽略有两种方式：</p><ul><li>一种是针对 <strong>具体版本库</strong> 的独享式忽略。即在版本库 <code>.git</code> 目录下的一个文件 <code>.git/info/exclude</code> 来设置文件忽略</li><li>另外一种是 <strong>全局</strong> 的独享式忽略。即通过 Git 的配置变量 <code>core.excludesfile</code> 指定的一个忽略文件，其设置的忽略对所有本地版本库均有效</li></ul><p>例如：本地设置一个全局的独享文件忽略列表（这个文件名可以随意设置）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> core.excludesfile /home/sankgao/.gitignore
<span class="token function">git</span> config core.excludesfile

/home/sankgao/.gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function m(b,h){const a=o("ExternalLinkIcon");return c(),d("div",null,[r,e("div",p,[g,e("p",null,[n("GitHub 有一个十分详细的针对数十种项目及语言的 "),e("a",u,[n(".gitignore 文件列表"),t(a)]),n(" 示例。")])]),v])}const _=i(l,[["render",m],["__file","ignore.html.vue"]]);export{_ as default};