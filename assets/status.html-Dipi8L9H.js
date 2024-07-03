import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as o,b as s,e as n,d as e,w as t,f as i}from"./app-flZQmeo3.js";const p={},r=i('<p>工作目录下的每一个文件都不外乎这两种状态：<strong>已跟踪</strong> 或 <strong>未跟踪</strong>。</p><ul><li><strong>已跟踪的文件</strong>：是指那些被纳入了 Git 版本控制的文件，在上一次快照中有它们的记录，在工作一段时间后，它们的状态可能是未修改，已修改或已放入暂存区</li><li><strong>未跟踪的文件</strong>：除已跟踪文件外的其它所有文件都属于未跟踪的文件，它们既不存在于上次快照的记录中，也没有被放入暂存区</li></ul><p>初次克隆某个仓库的时候，工作目录中的所有文件都属于已跟踪文件，并处于未修改状态，因为 Git 刚刚检出了它们，而您尚未编辑过它们。</p><p>编辑过某些文件之后，由于自上次提交后您对它们做了修改，Git 将它们标记为已修改文件。在工作时，您可以选择性地将这些修改过的文件放入暂存区，然后提交所有已暂存的修改，如此反复。</p><h2 id="查看当前文件状态" tabindex="-1"><a class="header-anchor" href="#查看当前文件状态" aria-hidden="true">#</a> 查看当前文件状态</h2>',5),u=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch main
nothing to commit, working directory clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这说明您当前的工作目录相当干净，所有已跟踪文件在上次提交（不管是提交到本地还是远程仓库）后都未被更改过。</p><p>在项目目录中创建一个新文件（<code>README.md</code>）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;# Git Tutorials&#39;</span> <span class="token operator">&gt;</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时用 <code>git status</code> 命令查看当前文件状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        README.md

nothing added to commit but untracked files present <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> to track<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示 <code>README.md</code> 文件是未跟踪文件，Git 不会跟踪管理这个文件。只要在 <code>Untracked files</code> 这行下面的文件，就是未跟踪状态。</p><h2 id="跟踪新文件" tabindex="-1"><a class="header-anchor" href="#跟踪新文件" aria-hidden="true">#</a> 跟踪新文件</h2>`,8),m=s("code",null,"README.md",-1),v=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时再运行 <code>git status</code> 命令，会看到 <code>README.md</code> 文件已被跟踪，并处于已暂存状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        new file:   README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示 <code>README.md</code> 文件是已暂存文件。只要在 <code>Changes to be committed</code> 这行下面的文件，就是 <strong>已暂存状态</strong>（对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中）。</p><p><code>git add</code> 命令后面参数既可以是文件也可以是目录，如果参数是目录，则该命令将递归跟踪该目录下的所有文件及目录。</p><h2 id="暂存已修改的文件" tabindex="-1"><a class="header-anchor" href="#暂存已修改的文件" aria-hidden="true">#</a> 暂存已修改的文件</h2><p>修改一个已被跟踪的文件（<code>test01.txt</code>），然后运行 <code>git status</code> 命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;test01test01&#39;</span> <span class="token operator">&gt;&gt;</span> test01.txt
<span class="token function">git</span> status

On branch main
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        new file:   README.md

Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        modified:   test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示已暂存的 <code>test01.txt</code> 文件内容已修改，但还没放到暂存区。只要在 <code>Changes not staged for commit</code> 这行下面的文件，就是 <strong>已修改状态</strong>（已跟踪文件的内容发生了变化，但还没有放到暂存区）。</p><p>将暂存已修改的 <code>test01.txt</code> 文件，放到暂存区后，再查看文件状态。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> test01.txt
<span class="token function">git</span> status

On branch main
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        new file:   README.md
        modified:   test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简短输出状态" tabindex="-1"><a class="header-anchor" href="#简短输出状态" aria-hidden="true">#</a> 简短输出状态</h2><p><code>git status</code> 命令的输出十分详细，但其用语有些繁琐。使用 <code>-s</code> 或 <code>--short</code> 选项可以缩短状态的输出，以简洁的方式查看更改。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status <span class="token parameter variable">-s</span>

A  README.md
M  test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的状态显示：<code>README.md</code> 是新添加且已暂存的文件；<code>test01.txt</code> 是已修改且已暂存的文件。</p><p>新添加的未跟踪文件前面有 <code>??</code> 标记，新添加到暂存区中的文件前面有 <code>A</code> 标记，修改过的文件前面有 <code>M</code> 标记。输出文件前面有两个字段，第一个字段显示暂存区（索引）的状态；第二个字段显示工作区的状态。</p><p><strong>常用字段及含义：</strong></p><ul><li><strong>??</strong>：未跟踪的文件</li><li><strong>M</strong>：修改过的文件</li><li><strong>T</strong>：文件类型已更改（常规文件、符号链接或子模块）</li><li><strong>A</strong>：新添加的文件</li><li><strong>D</strong>：已删除的文件</li><li><strong>R</strong>：重命名的文件</li><li><strong>C</strong>：已复制的文件（如果配置选项 <code>status.renames</code> 设置为 “副本”）</li><li><strong>U</strong>：已更新但未合并的文件</li></ul><h2 id="查看已暂存和未暂存的修改" tabindex="-1"><a class="header-anchor" href="#查看已暂存和未暂存的修改" aria-hidden="true">#</a> 查看已暂存和未暂存的修改</h2>`,19),b=i(`<p>再次修改 <code>README.md</code> 文件后暂存，然后编辑 <code>test01.txt</code> 文件后先不暂存，然后运行 <code>git status</code> 命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;git tutorials demo&#39;</span> <span class="token operator">&gt;&gt;</span> README.md
<span class="token function">git</span> <span class="token function">add</span> README.md
<span class="token builtin class-name">echo</span> <span class="token string">&#39;test01&#39;</span> <span class="token operator">&gt;&gt;</span> test01.txt
<span class="token function">git</span> status

On branch main
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        new file:   README.md
        modified:   test01.txt

Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        modified:   test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看未暂存的文件更新了哪些部分，不加参数直接输入 <code>git diff</code> 命令。</p><p>使用 <code>git diff</code> 命令，查看工作区已修改（包括已修改的文件或已删除的文件，不包括新文件）但未暂存（<code>git add</code>）到暂存区文件与暂存区文件之间的差异。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span>

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test01.txt b/test01.txt
index fea590a<span class="token punctuation">..</span>f437e2d <span class="token number">100644</span>
--- a/test01.txt
+++ b/test01.txt
@@ -1,2 +1,3 @@
 test01
 test01test01
+test01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>git diff --cached</code> 或 <code>git diff --staged</code> 命令，查看工作区已暂存（包括已修改的文件、已删除的文件或新文件）到暂存区文件与最后一次提交（<code>git commit</code>）文件之间的差异。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span>

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/README.md b/README.md
new <span class="token function">file</span> mode <span class="token number">100644</span>
index 0000000<span class="token punctuation">..</span>e624932
--- /dev/null
+++ b/README.md
@@ -0,0 +1,2 @@
+<span class="token comment"># Git Tutorials</span>
+git tutorials demo
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test01.txt b/test01.txt
index 4c19859<span class="token punctuation">..</span>fea590a <span class="token number">100644</span>
--- a/test01.txt
+++ b/test01.txt
@@ <span class="token parameter variable">-1</span> +1,2 @@
 test01
+test01test01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>git diff</code> 本身只显示尚未暂存的改动，而不是自上次提交以来所做的所有改动。所以有时候暂存了所有更新过的文件，运行 <code>git diff</code> 后却什么也没有，就是这个原因。</p></div><h2 id="提交更新" tabindex="-1"><a class="header-anchor" href="#提交更新" aria-hidden="true">#</a> 提交更新</h2><p>现在的暂存区已经准备就绪，可以提交了。在此之前，请务必确认还有什么已修改或新建的文件还没有暂存（<code>git add</code>）过，否则提交的时候不会记录这些尚未暂存的文件，这些已修改但未暂存的文件只会保留在本地磁盘。所以，每次准备提交前，先查看下当前文件状态（<code>git status</code>），确认您所需要的文件是不是都已暂存起来了，然后再运行 <code>git commit</code> 命令提交。</p><p>查看当前文件状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        new file:   README.md
        modified:   test01.txt

Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        modified:   test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只有 <code>test01.txt</code> 文件尚未暂存，暂且先不暂存，直接使用 <code>git commit</code> 命令提交。</p><p><code>git commit</code> 命令可以给定多个 <code>-m</code> 选项，第一个 <code>-m</code> 值为 <strong>标题行</strong>，后面的 <code>-m</code> 值为单独段落串联起来的提交信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;change file&#39;</span> <span class="token parameter variable">-m</span> <span class="token string">&#39;add README.md&#39;</span> <span class="token parameter variable">-m</span> <span class="token string">&#39;modified test01.txt&#39;</span>

<span class="token punctuation">[</span>main <span class="token number">2326575</span><span class="token punctuation">]</span> change <span class="token function">file</span>
 <span class="token number">2</span> files changed, <span class="token number">3</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提交后它会告诉您，当前是在哪个分支（<code>main</code>）提交的，本次提交的完整 SHA-1 校验和是什么（<code>2326575</code>），以及在本次提交中，有多少文件修订过，多少行添加和删改过。通过提交（<code>git commit</code>）后，已暂存的文件状态变成 <strong>已提交状态</strong>（数据已经安全地保存在本地数据库中）。</p><p>提交时记录的是放在暂存区域的快照。任何还未暂存文件的仍然保持已修改状态，可以在下次提交时纳入版本管理。每一次运行提交操作，都是对您项目作一次快照，以后可以回到这个状态，或者进行比较。</p><p>此时再查看文件状态，<code>test01.txt</code> 文件尚未暂存且仍然保持已修改状态，已暂存的文件已经提交到本地仓库中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        modified:   test01.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),g=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log

commit 232657552142c8fe97ac32f5801c70137ed95246 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main<span class="token punctuation">)</span>
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Thu May <span class="token number">23</span> <span class="token number">14</span>:26:19 <span class="token number">2024</span> +0800

    change <span class="token function">file</span>

    <span class="token function">add</span> README.md

    modified test01.txt

commit f3b964575a8a1d6919e591173d8a788f968a4140
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Thu May <span class="token number">23</span> <span class="token number">10</span>:17:40 <span class="token number">2024</span> +0800

    <span class="token function">add</span> test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>只运行 <code>git commit</code> 命令不加 <code>-m</code> 选项，会启动您选择的文本编辑器来输入提交说明，启动的编辑器是通过 Shell 的环境变量 <code>core.editor</code> 指定的。</p><p>例如：使用 <code>vim</code> 编辑器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># Please enter the commit message for your changes. Lines starting</span>
<span class="token comment"># with &#39;#&#39; will be ignored, and an empty message aborts the commit.</span>
<span class="token comment">#</span>
<span class="token comment"># On branch main</span>
<span class="token comment"># Changes to be committed:</span>
<span class="token comment">#       new file:   README.md</span>
<span class="token comment">#       modified:   test01.txt</span>
<span class="token comment">#</span>
<span class="token comment"># Changes not staged for commit:</span>
<span class="token comment">#       modified:   test01.txt</span>
<span class="token comment">#</span>
~
~
~
~
.git/COMMIT_EDITMSG&quot; 12L, 293C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，默认的提交消息包含最后一次运行 <code>git status</code> 的输出放在注释行里，另外开头还有一个空行供您输入提交说明。您完全可以去掉这些注释行，不过留着也没关系，多少能帮您回想起这次更新的内容有哪些。</p><p>退出编辑器时，Git 会丢弃注释行，用您输入的提交说明生成一次提交。</p></div><h2 id="跳过使用暂存区" tabindex="-1"><a class="header-anchor" href="#跳过使用暂存区" aria-hidden="true">#</a> 跳过使用暂存区</h2><p>Git 提供了一个跳过使用暂存区域的方式，只要在提交的时候，给 <code>git commit</code> 命令加上 <code>-a</code> 选项添加所有更改的文件，Git 就会自动把所有 <strong>已经跟踪过的文件</strong> 暂存起来一并提交，从而跳过 <code>git add</code> 步骤。</p><p>例如：先查看当前文件状态，再使用 <code>git commit -a -m</code> 命令，直接提交到本地仓库。<code>-a -m</code> 可以简写成 <code>-am</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        modified:   test01.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>

<span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&#39;modified test01.txt&#39;</span>

<span class="token punctuation">[</span>main 99114d6<span class="token punctuation">]</span> modified test01.txt
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),k=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log

commit 99114d61ea731daf4d5663aa77d83810a8c38680 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main<span class="token punctuation">)</span>
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Thu May <span class="token number">23</span> <span class="token number">16</span>:28:25 <span class="token number">2024</span> +0800

    modified test01.txt

commit 232657552142c8fe97ac32f5801c70137ed95246
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Thu May <span class="token number">23</span> <span class="token number">14</span>:26:19 <span class="token number">2024</span> +0800

    change <span class="token function">file</span>

    <span class="token function">add</span> README.md

    modified test01.txt

commit f3b964575a8a1d6919e591173d8a788f968a4140
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Thu May <span class="token number">23</span> <span class="token number">10</span>:17:40 <span class="token number">2024</span> +0800

    <span class="token function">add</span> test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h2><h3 id="从工作区和暂存区中删除文件" tabindex="-1"><a class="header-anchor" href="#从工作区和暂存区中删除文件" aria-hidden="true">#</a> 从工作区和暂存区中删除文件</h3>`,3),h=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> test01.txt
<span class="token function">git</span> status

On branch main
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        deleted:    test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从工作区中手动删除文件" tabindex="-1"><a class="header-anchor" href="#从工作区中手动删除文件" aria-hidden="true">#</a> 从工作区中手动删除文件</h3>`,2),f=s("code",null,"test01.txt",-1),x=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> restore <span class="token parameter variable">-SW</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只是简单地从工作目录中手动删除文件，运行 <code>git status</code> 时就会在 <code>Changes not staged for commit</code> 部分（也就是 <strong>未暂存清单</strong>）看到该文件。</p><p>从工作目录中手动删除 <code>test01.txt</code> 文件，并查看当前文件状态。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> test01.txt
<span class="token function">git</span> status

On branch main
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add/rm &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        deleted:    test01.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再运行 <code>git rm</code> 命令，记录此次移除文件的操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> test01.txt

<span class="token function">rm</span> <span class="token string">&#39;test01.txt&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看此时文件状态，<code>test01.txt</code> 文件已在暂存区中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        deleted:    test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移动或重命名文件" tabindex="-1"><a class="header-anchor" href="#移动或重命名文件" aria-hidden="true">#</a> 移动或重命名文件</h2>`,9),_=s("code",null,"test01.txt",-1),E=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> restore <span class="token parameter variable">-SW</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),q=s("code",null,"test01.txt",-1),w=s("code",null,"test02.txt",-1),A=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">mv</span> test01.txt test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看文件状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        renamed:    test01.txt -<span class="token operator">&gt;</span> test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实，运行 <code>git mv</code> 就相当于运行了下面三条命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mv</span> README.md README
<span class="token function">git</span> <span class="token function">rm</span> README.md
<span class="token function">git</span> <span class="token function">add</span> README
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如此分开操作，Git 也会意识到这是一次重命名，所以不管何种方式结果都一样。</p><p>将此次修改提交到本地仓库中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;将 test01.txt 重命名为 test02.txt&quot;</span>

<span class="token punctuation">[</span>main 7df306b<span class="token punctuation">]</span> 将 test01.txt 重命名为 test02.txt
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">0</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">0</span> deletions<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
 <span class="token function">rename</span> test01.txt <span class="token operator">=</span><span class="token operator">&gt;</span> test02.txt <span class="token punctuation">(</span><span class="token number">100</span>%<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function M(D,R){const a=l("RouterLink");return c(),o("div",null,[r,s("p",null,[n("使用 "),e(a,{to:"/computers/commands/git/git_status.html"},{default:t(()=>[n("git status")]),_:1}),n(" 命令查看哪些文件处于什么状态。如果在克隆仓库后立即使用此命令，会看到类似这样的输出：")]),u,s("p",null,[n("使用 "),e(a,{to:"/computers/commands/git/git_add.html"},{default:t(()=>[n("git add")]),_:1}),n(" 命令跟踪 "),m,n(" 文件到暂存区。")]),v,s("p",null,[n("虽然 "),e(a,{to:"/computers/commands/git/git_status.html"},{default:t(()=>[n("git status")]),_:1}),n(" 已经通过在相应栏下列出当前做的哪些更新尚未暂存、有哪些更新已暂存并准备好下次提交，但 "),e(a,{to:"/computers/commands/git/git_diff.html"},{default:t(()=>[n("git diff")]),_:1}),n(" 能通过文件补丁的格式更加具体地显示哪些行发生了改变。")]),b,s("p",null,[n("使用 "),e(a,{to:"/computers/commands/git/git_log.html"},{default:t(()=>[n("git log")]),_:1}),n(" 命令查看 Git 历史记录。")]),g,s("p",null,[n("使用 "),e(a,{to:"/computers/commands/git/git_log.html"},{default:t(()=>[n("git log")]),_:1}),n(" 命令查看 Git 历史记录。")]),k,s("p",null,[n("要从 Git 中删除某个文件，就必须要从已跟踪文件清单中删除（确切地说，是从暂存区删除）然后提交。可以用 "),e(a,{to:"/computers/commands/git/git_rm.html"},{default:t(()=>[n("git rm")]),_:1}),n(" 命令，并连带从工作目录中删除指定的文件，这样以后就不会出现在未跟踪文件清单中了。例如：")]),h,s("p",null,[n("由于上面删除了 "),f,n(" 文件并在已暂存清单中，首先使用 "),e(a,{to:"/computers/commands/git/git_restore.html"},{default:t(()=>[n("git restore")]),_:1}),n(" 命令同时撤销对工作区和暂存区所有文件的修改。")]),x,s("p",null,[n("由于上面删除了 "),_,n(" 文件并在已暂存清单中，首先使用 "),e(a,{to:"/computers/commands/git/git_restore.html"},{default:t(()=>[n("git restore")]),_:1}),n(" 命令同时撤销对工作区和暂存区所有文件的修改。")]),E,s("p",null,[n("要在 Git 中对文件改名，使用 "),e(a,{to:"/computers/commands/git/git_mv.html"},{default:t(()=>[n("git mv")]),_:1}),n(" 命令。例如：重命名 "),q,n(" 文件为 "),w,n(" 文件。")]),A])}const G=d(p,[["render",M],["__file","status.html.vue"]]);export{G as default};
