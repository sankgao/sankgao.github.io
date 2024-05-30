import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as t,b as n,e,d,f as s}from"./app-CyZHMtLm.js";const l={},r=s(`<p>如果有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。通常都是些自动生成的文件，比如：日志文件，或者编译过程中创建的临时文件等。在这种情况下，可以创建一个名为 <code>.gitignore</code> 的文件，列出要忽略的文件的模式。例如：</p><div class="language-gitignore line-numbers-mode" data-ext="gitignore"><pre class="language-gitignore"><code><span class="token entry string">cat .gitignore</span>

<span class="token entry string"><span class="token operator">*</span>.<span class="token regex">[oa]</span></span>
<span class="token entry string"><span class="token operator">*</span>~</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一行告诉 Git 忽略所有以 <code>.o</code> 或 <code>.a</code> 结尾的文件。一般这类对象文件和存档文件都是编译过程中出现的；第二行告诉 Git 忽略所有名字以波浪符（<code>~</code>）结尾的文件，许多文本编辑软件（比如：Emacs）都用这样的文件名保存副本。</p><p>养成一开始就为新仓库设置好 <code>.gitignore</code> 文件的习惯，以免将来误提交这类无用的文件。</p>`,4),p={class:"hint-container tip"},u=n("p",{class:"hint-container-title"},"提示",-1),v={href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"},g=s(`<h2 id="格式规范" tabindex="-1"><a class="header-anchor" href="#格式规范" aria-hidden="true">#</a> 格式规范</h2><p><code>.gitignore</code> 文件的格式规范如下：</p><ul><li>所有空行或者以 <code>#</code> 开头的行都会被 Git 忽略</li><li>可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中</li><li>匹配模式可以以（<code>/</code>）开头防止递归</li><li>匹配模式可以以（<code>/</code>）结尾指定目录</li><li>要忽略指定模式以外的文件或目录，可以在模式前加上叹号（<code>!</code>）取反</li></ul><h2 id="glob-模式" tabindex="-1"><a class="header-anchor" href="#glob-模式" aria-hidden="true">#</a> glob 模式</h2><p>glob 模式是指 shell 所使用的简化了的正则表达式。</p><ul><li>星号（<code>*</code>）匹配零个或多个任意字符</li><li><code>[abc]</code> 匹配任何一个列在方括号中的字符（这个例子要么匹配一个 <code>a</code>，要么匹配一个 <code>b</code>，要么匹配一个 <code>c</code>）</li><li>问号（<code>?</code>）只匹配一个任意字符</li><li>如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如：<code>[0-9]</code> 表示匹配所有 <code>0</code> 到 <code>9</code> 的数字）</li><li>使用两个星号（<code>**</code>）表示匹配任意中间目录，比如：<code>a/**/z</code> 可以匹配 <code>a/z</code> 、 <code>a/b/z</code> 或 <code>a/b/c/z</code> 等。</li></ul><p>例如：</p><div class="language-gitignore line-numbers-mode" data-ext="gitignore"><pre class="language-gitignore"><code><span class="token entry string">cat .gitignore</span>

<span class="token comment"># 忽略所有的 .a 文件</span>
<span class="token entry string"><span class="token operator">*</span>.a</span>

<span class="token comment"># 但跟踪所有的 lib.a，即便您在前面忽略了 .a 文件</span>
<span class="token entry string"><span class="token operator">!</span>lib.a</span>

<span class="token comment"># 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO</span>
<span class="token entry string"><span class="token punctuation">/</span>TODO</span>

<span class="token comment"># 忽略任何目录下名为 build 的文件夹</span>
<span class="token entry string">build<span class="token punctuation">/</span></span>

<span class="token comment"># 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt</span>
<span class="token entry string">doc<span class="token punctuation">/</span><span class="token operator">*</span>.txt</span>

<span class="token comment"># 忽略 doc/ 目录及其所有子目录下的 .pdf 文件</span>
<span class="token entry string">doc<span class="token punctuation">/</span><span class="token operator">**</span><span class="token punctuation">/</span><span class="token operator">*</span>.pdf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function m(b,k){const a=o("ExternalLinkIcon");return c(),t("div",null,[r,n("div",p,[u,n("p",null,[e("GitHub 有一个十分详细的针对数十种项目及语言的 "),n("a",v,[e(".gitignore 文件列表"),d(a)]),e(" 示例。")])]),g])}const f=i(l,[["render",m],["__file","ignore.html.vue"]]);export{f as default};
