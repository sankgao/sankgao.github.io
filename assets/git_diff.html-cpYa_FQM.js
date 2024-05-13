import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,f as e}from"./app-t0MCKbLW.js";const i={},t=e(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git diff</code> 用于显示工作目录或暂存区与最新提交之间的差异。通过查看这些差异，您可以知道哪些文件被修改过，以及这些文件中具体哪些行被添加、删除或修改。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>-b, --branch</code></td><td style="text-align:left;">克隆指定分支</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="查看工作目录与暂存区的差异" tabindex="-1"><a class="header-anchor" href="#查看工作目录与暂存区的差异" aria-hidden="true">#</a> 查看工作目录与暂存区的差异</h3><p><code>git diff</code> 显示工作区与最后一次 <code>commit</code> 提交到本地仓库的共同文件的差异。</p><p>例如：只修改工作区，不添加到暂存区（<code>git add</code>）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> <span class="token builtin class-name">test</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;test02&#39;</span> <span class="token operator">&gt;</span> test02.txt
<span class="token function">git</span> <span class="token function">diff</span>

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test b/test
index 37f703f<span class="token punctuation">..</span>fc320c1 <span class="token number">100644</span>
--- a/test
+++ b/test
@@ -1,4 +1,5 @@
 <span class="token builtin class-name">test</span>
+test
 testtest
 testtest
 testtest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看工作目录与最新提交的差异" tabindex="-1"><a class="header-anchor" href="#查看工作目录与最新提交的差异" aria-hidden="true">#</a> 查看工作目录与最新提交的差异</h3><p>显示工作目录与最后一次提交之间的差异，包括暂存区的更改。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">vim</span> <span class="token builtin class-name">test</span>
<span class="token function">git</span> <span class="token function">diff</span> HEAD

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test b/test
index 37f703f<span class="token punctuation">..</span>491b04f <span class="token number">100644</span>
--- a/test
+++ b/test
@@ -1,3 +1,4 @@
+testtest
 <span class="token builtin class-name">test</span>
 testtest
 testtest
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test02.txt b/test02.txt
new <span class="token function">file</span> mode <span class="token number">100644</span>
index 0000000<span class="token punctuation">..</span>48fdd5c
--- /dev/null
+++ b/test02.txt
@@ -0,0 +1 @@
+test02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看暂存区与最新提交的差异" tabindex="-1"><a class="header-anchor" href="#查看暂存区与最新提交的差异" aria-hidden="true">#</a> 查看暂存区与最新提交的差异</h3><p>显示已经暂存（通过 <code>git add</code> 命令）但尚未提交的更改。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span>
<span class="token comment"># 或</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--staged</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看两个提交之间的差异" tabindex="-1"><a class="header-anchor" href="#查看两个提交之间的差异" aria-hidden="true">#</a> 查看两个提交之间的差异</h3><p>显示两个提交之间的差异。<code>&lt;commit1&gt;</code> 和 <code>&lt;commit2&gt;</code> 是您想要比较的提交的哈希值或引用（如：分支名或标签）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>commit<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>commit<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看指定文件的差异" tabindex="-1"><a class="header-anchor" href="#查看指定文件的差异" aria-hidden="true">#</a> 查看指定文件的差异</h3><p>在 <code>git diff</code> 命令后添加文件名来只查看特定文件的差异。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="以更简洁的格式显示差异" tabindex="-1"><a class="header-anchor" href="#以更简洁的格式显示差异" aria-hidden="true">#</a> 以更简洁的格式显示差异</h3><p>使用 <code>--summary</code> 选项可以以更简洁的方式显示差异，只列出有更改的文件名。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--summary</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="以更详细的格式显示差异" tabindex="-1"><a class="header-anchor" href="#以更详细的格式显示差异" aria-hidden="true">#</a> 以更详细的格式显示差异</h3><p>使用 <code>--patch</code> 或 <code>-p</code> 选项可以以补丁格式显示差异，这对于详细分析文件的每一行更改很有用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--patch</span>
<span class="token comment"># 或</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示差异统计信息" tabindex="-1"><a class="header-anchor" href="#显示差异统计信息" aria-hidden="true">#</a> 显示差异统计信息</h3><p>使用 <code>--stat</code> 或 <code>-s</code> 选项可以显示差异统计信息，如：每个文件中插入、删除和修改的行数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--stat</span>
<span class="token comment"># 或</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">-s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),d=[t];function c(l,r){return a(),s("div",null,d)}const u=n(i,[["render",c],["__file","git_diff.html.vue"]]);export{u as default};
