import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,f as a}from"./app-6T10gXTy.js";const i={},t=a(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git diff</code> 用于显示工作区或暂存区与 <code>commit id</code>（默认是最新提交 <code>HEAD</code>） 之间的差异。通过查看这些差异，您可以知道哪些文件被修改过，以及这些文件中具体哪些行被添加、删除或修改。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>--cached, --staged</code></td><td style="text-align:left;">查看为下一次提交所做的相对于 <code>&lt;commit&gt;</code> 的修改，默认是 <code>HEAD</code></td></tr><tr><td style="text-align:center;"><code>--summary</code></td><td style="text-align:left;">摘要输出新添加、删除、重命名和复制的文件</td></tr><tr><td style="text-align:center;"><code>--stat</code></td><td style="text-align:left;">对输出内容进行统计</td></tr><tr><td style="text-align:center;"><code>--shortstat</code></td><td style="text-align:left;">只输出使用 <code>--stat</code> 选项输出的最后一行</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>Git 仓库目录有 <code>README.md</code>、<code>test01.txt</code> 和 <code>test02.txt</code> 三个文件，文件内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> README.md

<span class="token comment"># test_demo</span>

测试示例
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> test01.txt

test01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> test02.txt

test02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看工作区已修改文件的差异" tabindex="-1"><a class="header-anchor" href="#查看工作区已修改文件的差异" aria-hidden="true">#</a> 查看工作区已修改文件的差异</h3><p>查看工作区已修改（包括已修改的文件或已删除的文件，不包括新文件）但未暂存（<code>git add</code>）到暂存区文件的差异。</p><ol><li><p>删除 <code>test02.txt</code> 文件，修改 <code>test01.txt</code> 文件，添加新 <code>test03.txt</code> 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> test02.txt
<span class="token builtin class-name">echo</span> <span class="token string">&#39;test01&#39;</span> <span class="token operator">&gt;&gt;</span> test01.txt
<span class="token builtin class-name">echo</span> <span class="token string">&#39;test03&#39;</span> <span class="token operator">&gt;&gt;</span> test03.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看当前 <code>git</code> 状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Your branch is up to <span class="token function">date</span> with <span class="token string">&#39;origin/main&#39;</span><span class="token builtin class-name">.</span>

Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add/rm &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

        modified:   test01.txt
        deleted:    test02.txt

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>

        test03.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看工作区已修改文件的差异</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span>

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test01.txt b/test01.txt
index 4c19859<span class="token punctuation">..</span>27ca57f <span class="token number">100644</span>
--- a/test01.txt
+++ b/test01.txt
@@ <span class="token parameter variable">-1</span> +1,2 @@
 test01
+test01
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test02.txt b/test02.txt
deleted <span class="token function">file</span> mode <span class="token number">100644</span>
index 48fdd5c<span class="token punctuation">..</span>0000000
--- a/test02.txt
+++ /dev/null
@@ <span class="token parameter variable">-1</span> +0,0 @@
<span class="token parameter variable">-test02</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>输出描述</p><ul><li><strong>diff --git a/test01.txt b/test01.txt</strong>：表示文件版本。<code>a/test01.txt</code> 原文件版本；<code>b/test01.txt</code> 修改后文件版本</li><li><strong>index 4c19859..27ca57f 100644</strong>：文件 hash 值。<code>4c19859</code> 暂存区 hash 值；<code>27ca57f</code> 工作区 hash 值，<code>100644</code> 中 <code>100</code> 表示普通文件；<code>644</code> 表示权限</li><li><strong>--- a/test01.txt</strong>：表示原文件</li><li><strong>+++ b/test01.txt</strong>：表示修改后文件</li><li><strong>@@ -1 +1,2 @@</strong>：从第几行到第几行。<code>-1</code> 表示原文件从第一行到第一行；<code>+1,2</code> 表示修改后文件从第一行到第二行</li><li><strong>原文件和修改后文件合并显示</strong>：<code>-</code> 表示删除行；<code>+</code> 表示添加行</li><li><strong>deleted file mode 100644</strong>：表示删除文件</li></ul></li></ol><h3 id="查看工作区已暂存文件的差异" tabindex="-1"><a class="header-anchor" href="#查看工作区已暂存文件的差异" aria-hidden="true">#</a> 查看工作区已暂存文件的差异</h3><p>使用 <code>--cached</code> 或 <code>--staged</code> 选项，查看工作区通过 <code>git add</code> 添加到暂存区（包括已修改的文件、已删除的文件或新文件）文件的差异。不包括未添加到暂存区文件。</p><ol><li>将上面的更改都添加到暂存区并查看 <code>git</code> 状态</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> status

On branch main
Your branch is up to <span class="token function">date</span> with <span class="token string">&#39;origin/main&#39;</span><span class="token builtin class-name">.</span>

Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>

        modified:   test01.txt
        deleted:    test02.txt
        new file:   test03.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>查看工作区已暂存文件的差异</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span>

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test01.txt b/test01.txt
index 4c19859<span class="token punctuation">..</span>27ca57f <span class="token number">100644</span>
--- a/test01.txt
+++ b/test01.txt
@@ <span class="token parameter variable">-1</span> +1,2 @@
 test01
+test01
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test02.txt b/test02.txt
deleted <span class="token function">file</span> mode <span class="token number">100644</span>
index 48fdd5c<span class="token punctuation">..</span>0000000
--- a/test02.txt
+++ /dev/null
@@ <span class="token parameter variable">-1</span> +0,0 @@
<span class="token parameter variable">-test02</span>
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test03.txt b/test03.txt
new <span class="token function">file</span> mode <span class="token number">100644</span>
index 0000000<span class="token punctuation">..</span>23bc844
--- /dev/null
+++ b/test03.txt
@@ -0,0 +1 @@
+test03
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除 <code>README.md</code> 文件，修改 <code>test01.txt</code> 文件，添加新 <code>test04.txt</code> 文件，但不添加到暂存区</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> README.md
<span class="token builtin class-name">echo</span> <span class="token string">&#39;test01&#39;</span> <span class="token operator">&gt;&gt;</span> test01.txt
<span class="token builtin class-name">echo</span> <span class="token string">&#39;test04&#39;</span> <span class="token operator">&gt;&gt;</span> test04.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看当前 <code>git</code> 状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Your branch is up to <span class="token function">date</span> with <span class="token string">&#39;origin/main&#39;</span><span class="token builtin class-name">.</span>

Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>

        modified:   test01.txt
        deleted:    test02.txt
        new file:   test03.txt

Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add/rm &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

        deleted:    README.md
        modified:   test01.txt

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>

        test04.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看工作区已修改文件的差异</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span>

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/README.md b/README.md
deleted <span class="token function">file</span> mode <span class="token number">100644</span>
index 6a177fc<span class="token punctuation">..</span>0000000
--- a/README.md
+++ /dev/null
@@ -1,3 +0,0 @@
-<span class="token comment"># test_demo</span>
-
-测试示例
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test01.txt b/test01.txt
index 27ca57f<span class="token punctuation">..</span>169e37f <span class="token number">100644</span>
--- a/test01.txt
+++ b/test01.txt
@@ -1,2 +1,3 @@
 test01
 test01
+test01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看工作区已暂存文件的差异</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span>

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test01.txt b/test01.txt
index 4c19859<span class="token punctuation">..</span>27ca57f <span class="token number">100644</span>
--- a/test01.txt
+++ b/test01.txt
@@ <span class="token parameter variable">-1</span> +1,2 @@
 test01
+test01
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test02.txt b/test02.txt
deleted <span class="token function">file</span> mode <span class="token number">100644</span>
index 48fdd5c<span class="token punctuation">..</span>0000000
--- a/test02.txt
+++ /dev/null
@@ <span class="token parameter variable">-1</span> +0,0 @@
<span class="token parameter variable">-test02</span>
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test03.txt b/test03.txt
new <span class="token function">file</span> mode <span class="token number">100644</span>
index 0000000<span class="token punctuation">..</span>23bc844
--- /dev/null
+++ b/test03.txt
@@ -0,0 +1 @@
+test03
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="查看工作区与指定-commit-id-之间文件的差异" tabindex="-1"><a class="header-anchor" href="#查看工作区与指定-commit-id-之间文件的差异" aria-hidden="true">#</a> 查看工作区与指定 commit id 之间文件的差异</h3><p>使用 <code>git diff &lt;commit id&gt;</code> 命令，查看工作区已修改（包括已修改的文件或已删除的文件，不包括新文件）及已暂存（包括已修改的文件、已删除的文件或新文件）到暂存区与指定的 <code>commit id</code> 之间文件的差异。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>第一个 <code>commit id</code> 可以用 <code>HEAD</code> 代替。</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> a6c6aa91ec80e18add652523bf225760270a18ff
<span class="token comment"># 或</span>
<span class="token function">git</span> <span class="token function">diff</span> HEAD

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/README.md b/README.md
deleted <span class="token function">file</span> mode <span class="token number">100644</span>
index 6a177fc<span class="token punctuation">..</span>0000000
--- a/README.md
+++ /dev/null
@@ -1,3 +0,0 @@
-<span class="token comment"># test_demo</span>
-
-测试示例
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test01.txt b/test01.txt
index 4c19859<span class="token punctuation">..</span>169e37f <span class="token number">100644</span>
--- a/test01.txt
+++ b/test01.txt
@@ <span class="token parameter variable">-1</span> +1,3 @@
 test01
+test01
+test01
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test02.txt b/test02.txt
deleted <span class="token function">file</span> mode <span class="token number">100644</span>
index 48fdd5c<span class="token punctuation">..</span>0000000
--- a/test02.txt
+++ /dev/null
@@ <span class="token parameter variable">-1</span> +0,0 @@
<span class="token parameter variable">-test02</span>
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test03.txt b/test03.txt
new <span class="token function">file</span> mode <span class="token number">100644</span>
index 0000000<span class="token punctuation">..</span>23bc844
--- /dev/null
+++ b/test03.txt
@@ -0,0 +1 @@
+test03
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看两个-commit-id-之间的差异" tabindex="-1"><a class="header-anchor" href="#查看两个-commit-id-之间的差异" aria-hidden="true">#</a> 查看两个 commit id 之间的差异</h3><p>使用 <code>git diff &lt;commit id1&gt; &lt;commit id2&gt;</code> 命令，查看从 <code>&lt;commit id1&gt;</code> 到 <code>&lt;commit id2&gt;</code> 之间所有文件的差异。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>&lt;commit id&gt;</code> 顺序不同，显示的差异也会不同。</p></div><ul><li><p>从 <code>557a</code> 到 <code>f084</code> 之间文件的差异：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> 557a f084

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/hello.sh b/hello.sh
index cd16289<span class="token punctuation">..</span>d2b0ce8 <span class="token number">100755</span>
--- a/hello.sh
+++ b/hello.sh
@@ -1,3 +1,4 @@
 <span class="token comment">#!/bin/bash</span>

 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello World!&quot;</span>
+echo <span class="token string">&quot;Hello World!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>从 <code>f084</code> 到 <code>557a</code> 之间文件的差异：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> f084 557a

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/hello.sh b/hello.sh
index d2b0ce8<span class="token punctuation">..</span>cd16289 <span class="token number">100755</span>
--- a/hello.sh
+++ b/hello.sh
@@ -1,4 +1,3 @@
 <span class="token comment">#!/bin/bash</span>

 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello World!&quot;</span>
<span class="token parameter variable">-echo</span> <span class="token string">&quot;Hello World!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="查看两个分支之间的差异" tabindex="-1"><a class="header-anchor" href="#查看两个分支之间的差异" aria-hidden="true">#</a> 查看两个分支之间的差异</h3><p>使用 <code>git diff &lt;branch1&gt; &lt;branch2&gt;</code> 命令，查看从 <code>&lt;branch1&gt;</code> 到 <code>&lt;branch2&gt;</code> 之间所有文件的差异。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> origin/main origin/dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看两个标签之间的差异" tabindex="-1"><a class="header-anchor" href="#查看两个标签之间的差异" aria-hidden="true">#</a> 查看两个标签之间的差异</h3><p>使用 <code>git diff &lt;tag1&gt; &lt;tag2&gt;</code> 命令，查看从 <code>&lt;tag1&gt;</code> 到 <code>&lt;tag2&gt;</code> 之间所有文件的差异。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> v1.0.0 v1.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看指定文件的差异" tabindex="-1"><a class="header-anchor" href="#查看指定文件的差异" aria-hidden="true">#</a> 查看指定文件的差异</h3><p>使用 <code>git diff &lt;file name&gt;</code> 命令，查看指定文件的差异。</p><ul><li><p>查看工作区已修改 <code>test01.txt</code> 文件的差异</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> test01.txt

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test01.txt b/test01.txt
index 27ca57f<span class="token punctuation">..</span>169e37f <span class="token number">100644</span>
--- a/test01.txt
+++ b/test01.txt
@@ -1,2 +1,3 @@
 test01
 test01
+test01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看工作区已暂存 <code>test01.txt</code> 文件的差异</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span> test01.txt

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test01.txt b/test01.txt
index 4c19859<span class="token punctuation">..</span>27ca57f <span class="token number">100644</span>
--- a/test01.txt
+++ b/test01.txt
@@ <span class="token parameter variable">-1</span> +1,2 @@
 test01
+test01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看两个 <code>commit id</code> 之间 <code>hello.sh</code> 文件的差异</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> f084 557a hello.sh

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/hello.sh b/hello.sh
index d2b0ce8<span class="token punctuation">..</span>cd16289 <span class="token number">100755</span>
--- a/hello.sh
+++ b/hello.sh
@@ -1,4 +1,3 @@
 <span class="token comment">#!/bin/bash</span>

 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello World!&quot;</span>
<span class="token parameter variable">-echo</span> <span class="token string">&quot;Hello World!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="摘要输出" tabindex="-1"><a class="header-anchor" href="#摘要输出" aria-hidden="true">#</a> 摘要输出</h3><ul><li><p>使用 <code>--summary</code> 选项可以摘要输出新添加、删除、重命名和复制的文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span> <span class="token parameter variable">--summary</span>

 delete mode <span class="token number">100644</span> test02.txt
 create mode <span class="token number">100644</span> test03.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 <code>--stat</code> 选项对输出内容进行统计</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span> <span class="token parameter variable">--stat</span>

 test01.txt <span class="token operator">|</span> <span class="token number">1</span> +
 test02.txt <span class="token operator">|</span> <span class="token number">1</span> -
 test03.txt <span class="token operator">|</span> <span class="token number">1</span> +
 <span class="token number">3</span> files changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>只输出使用 <code>--shortstat</code> 选项输出的最后一行，包含修改的文件总数，添加和删除的行数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span> <span class="token parameter variable">--shortstat</span>

 <span class="token number">3</span> files changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,36),l=[t];function d(c,o){return s(),e("div",null,l)}const u=n(i,[["render",d],["__file","git_diff.html.vue"]]);export{u as default};
