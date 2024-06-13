import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,b as n,e as s,d as a,w as t,f as i}from"./app-S0qF8aU1.js";const r={},p=i(`<p>在任何一个阶段（如：当前工作区文件修改、暂存区、仓库），您都有可能想要撤消某些操作。注意，有些撤消操作是不可逆的。这是在使用 Git 的过程中，会因为操作失误而导致之前的工作丢失的少有的几个地方之一。</p><h2 id="重新提交" tabindex="-1"><a class="header-anchor" href="#重新提交" aria-hidden="true">#</a> 重新提交</h2><p>有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。此时，可以使用 <code>git commit --amend</code> 命令重新提交（完全用一个 <strong>新的提交</strong> 替换 <strong>旧的提交</strong>）。</p><p>例如：忘记修改 <code>test02.txt</code> 文件内容就提交到本地仓库。</p><p>先查看上次提交的 <code>commit id</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-2</span>

commit 7df306b180568b13a9f7782f3575c8f06e4b1ed5 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main<span class="token punctuation">)</span>
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">24</span> <span class="token number">10</span>:43:10 <span class="token number">2024</span> +0800

    将 test01.txt 重命名为 test02.txt

commit 99114d61ea731daf4d5663aa77d83810a8c38680
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Thu May <span class="token number">23</span> <span class="token number">16</span>:28:25 <span class="token number">2024</span> +0800

    modified test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 <code>test02.txt</code> 文件内容，并添加到暂存区。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;test02.txt&#39;</span> <span class="token operator">&gt;</span> test02.txt
<span class="token function">git</span> <span class="token function">add</span> test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>git commit --amend</code> 命令，文本编辑器启动后，可以看到之前的提交信息，编辑后保存。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--amend</span>

<span class="token punctuation">[</span>main 7333fb5<span class="token punctuation">]</span> 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
 Date: Fri May <span class="token number">24</span> <span class="token number">10</span>:43:10 <span class="token number">2024</span> +0800
 <span class="token number">2</span> files changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">3</span> deletions<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
 delete mode <span class="token number">100644</span> test01.txt
 create mode <span class="token number">100644</span> test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看提交信息，覆盖原来的提交信息，<code>commit id</code> 也会改变。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-2</span>

commit 7333fb5d96fab255ef780add57a41ffb1d3fbfe1 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main<span class="token punctuation">)</span>
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">24</span> <span class="token number">10</span>:43:10 <span class="token number">2024</span> +0800

    将 test01.txt 文件重命名为 test02.txt，并修改文件内容

commit 99114d61ea731daf4d5663aa77d83810a8c38680
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Thu May <span class="token number">23</span> <span class="token number">16</span>:28:25 <span class="token number">2024</span> +0800

    modified test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),u=n("code",null,"commit id",-1),m=i(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>--amend</code> 选项可以和 <code>-m</code> 选项一起使用，这样就不用在文本编辑器中修改提交信息。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;将 test01.txt 文件重命名为 test02.txt，并修改文件内容&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h2 id="撤销已修改的文件" tabindex="-1"><a class="header-anchor" href="#撤销已修改的文件" aria-hidden="true">#</a> 撤销已修改的文件</h2>`,2),v=i(`<p>例如：修改 <code>test02.txt</code> 文件，并删除 <code>README.md</code> 文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;test02test02&#39;</span> <span class="token operator">&gt;&gt;</span> test02.txt
<span class="token function">rm</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看当前文件状态，更改的文件都已放在未暂存清单中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add/rm &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        deleted:    README.md
        modified:   test02.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),b=n("code",null,"README.md",-1),g=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> restore README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次查看当前文件状态，<code>README.md</code> 文件已经不在未暂存清单中，成功恢复 <code>README.md</code> 文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        modified:   test02.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),h={class:"hint-container tip"},k=n("p",{class:"hint-container-title"},"提示",-1),f=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout -- README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),_=n("h2",{id:"撤销已暂存的文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#撤销已暂存的文件","aria-hidden":"true"},"#"),s(" 撤销已暂存的文件")],-1),x=i(`<h3 id="依次撤销" tabindex="-1"><a class="header-anchor" href="#依次撤销" aria-hidden="true">#</a> 依次撤销</h3><p>先将指定文件从暂存区撤销到未暂存清单中，再撤销对指定文件的修改。</p><p>例如：不小心将 <code>test02.txt</code> 文件，提交到暂存区。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看当前文件状态，<code>test02.txt</code> 文件已放在已暂存清单中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        modified:   test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),q=n("code",null,"--staged",-1),E=n("code",null,"test02.txt",-1),w=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> restore <span class="token parameter variable">--staged</span> test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次查看当前文件状态，<code>test02.txt</code> 文件已经不在已暂存清单中，而在未暂存清单中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        modified:   test02.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),D={class:"hint-container tip"},A=n("p",{class:"hint-container-title"},"提示",-1),y=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset HEAD test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),M=i(`<p>再撤销 <code>test02.txt</code> 文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> restore test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="直接撤销" tabindex="-1"><a class="header-anchor" href="#直接撤销" aria-hidden="true">#</a> 直接撤销</h3><p>上面的两个步骤可以用一步实现。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> restore <span class="token parameter variable">-WS</span> test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-W</code> 或 <code>--worktree</code> 选项用于撤销工作区内容，默认选项</li><li><code>-S</code> 或 <code>--staged</code> 选项用于撤销暂存区内容</li></ul><p><code>-W</code> 和 <code>-S</code> 选项一起使用，可以同时撤销工作区和暂存区所有文件的修改。</p>`,7);function R(G,S){const e=o("RouterLink");return c(),l("div",null,[p,n("p",null,[s("现在您有了一个新的提交，它有一个新的 "),u,s("，而旧的提交则保留在仓库的引用日志中，可以通过 "),a(e,{to:"/computers/commands/git/git_reflog.html"},{default:t(()=>[s("git reflog")]),_:1}),s(" 命令查看。")]),m,n("p",null,[s("如果工作区的文件被修改了但还没有提交到暂存区，但又不想保存工作区的修改，可以使用 "),a(e,{to:"/computers/commands/git/git_restore.html"},{default:t(()=>[s("git restore")]),_:1}),s(" 命令撤销对指定文件的修改。")]),v,n("p",null,[s("根据提示，可以使用 "),a(e,{to:"/computers/commands/git/git_restore.html"},{default:t(()=>[s("git restore")]),_:1}),s(" 命令撤销对指定文件的修改。例如：撤销对 "),b,s(" 文件的修改。")]),g,n("div",h,[k,n("p",null,[a(e,{to:"/computers/commands/git/git_restore.html"},{default:t(()=>[s("git restore")]),_:1}),s(" 这个命令在 Git V2.23 版本以后被引入，如果在 Git V2.23 版本之前，则使用 "),a(e,{to:"/computers/commands/git/git_checkout.html"},{default:t(()=>[s("git checkout")]),_:1}),s(" 命令撤销已修改的文件。例如：")]),f]),_,n("p",null,[s("如果工作区的文件还没修改完就被提交到暂存区，可以使用 "),a(e,{to:"/computers/commands/git/git_restore.html"},{default:t(()=>[s("git restore")]),_:1}),s(" 命令撤销对指定文件的暂存。")]),x,n("p",null,[s("根据提示，可以使用 "),a(e,{to:"/computers/commands/git/git_restore.html"},{default:t(()=>[s("git restore")]),_:1}),s(" 命令的 "),q,s(" 选项撤销对指定文件的暂存。例如：撤销对 "),E,s(" 文件的暂存。")]),w,n("div",D,[A,n("p",null,[a(e,{to:"/computers/commands/git/git_restore.html"},{default:t(()=>[s("git restore")]),_:1}),s(" 这个命令在 Git V2.23 版本以后被引入，如果在 Git V2.23 版本之前，则使用 "),a(e,{to:"/computers/commands/git/git_reset.html"},{default:t(()=>[s("git reset")]),_:1}),s(" 命令撤销已暂存的文件。例如：")]),y]),M])}const N=d(r,[["render",R],["__file","cancel.html.vue"]]);export{N as default};
