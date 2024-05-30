import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as d,c as l,b as s,e as n,d as e,w as t,f as i}from"./app-i0zF7vkB.js";const p={},r=i(`<p>几乎所有的版本控制系统都以某种形式支持分支，使用分支意味着您可以把您的工作从开发主线上分离开来，以免影响开发主线。在很多版本控制系统中，这是一个略微低效的过程——常常需要完全创建一个源代码目录的副本，对于大项目来说，这样的过程会耗费很多时间。</p><p>而 Git 可以轻量的处理分支，创建新分支这一操作几乎能在瞬间完成，并且在不同分支之间的切换操作也是一样便捷。与许多其它版本控制系统不同，Git 鼓励在工作流程中频繁地使用分支与合并，哪怕一天之内进行许多次。</p><h2 id="分支简介" tabindex="-1"><a class="header-anchor" href="#分支简介" aria-hidden="true">#</a> 分支简介</h2><p>Git 保存数据的方式，不是文件的变化或者差异，而是一系列不同时刻的 <strong>快照。</strong></p><p>在进行提交（<code>commit id</code>）操作时，Git 会保存一个提交对象。该提交对象会包含一个指向暂存内容快照的指针，还包含了作者的姓名和邮箱、提交时输入的信息以及指向它的父对象的指针。首次提交产生的提交对象没有父对象，普通提交操作产生的提交对象有一个父对象，而由多个分支合并产生的提交对象有多个父对象。</p><p>暂存（<code>git add</code>）操作会为每一个文件计算校验和（SHA-1 哈希算法），然后会把当前版本的文件快照保存到 Git 仓库中（Git 使用 <strong>blob 对象</strong> 来保存它们），最终将校验和加入到暂存区域等待提交。</p><p>当使用 <code>git commit</code> 进行提交操作时，Git 会先计算每一个子目录（本例中只有项目根目录）的校验和，然后在 Git 仓库中这些校验和保存为 <strong>树对象</strong>。随后，Git 便会创建一个提交对象，它除了包含上面提到的那些信息外，还包含指向这个树对象（项目根目录）的指针。如此一来，Git 就可以在需要的时候重现此次保存的快照。</p><p>首次提交没有父对象指针，但之后的提交，产生的提交对象会包含一个指向上次提交对象（父对象）的指针。</p><p>当前 Git 仓库中有四个对象：两个 <strong>blob 对象</strong>（保存着文件快照）、一个 <strong>树对象</strong>（记录着目录结构和 <code>blob</code> 对象索引）以及一个 <strong>提交对象</strong>（包含着指向前述树对象的指针和所有提交信息）。</p><p>例如：使用 <code>git log -3 --pretty=raw</code> 查看当前仓库前三个的提交对象（<code>commit</code>）和树对象（<code>tree</code>）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>raw

commit 7333fb5d96fab255ef780add57a41ffb1d3fbfe1
tree 53f69acb505bf9bfce1a4d9299b79df6d2e1c6be
parent 99114d61ea731daf4d5663aa77d83810a8c38680
author Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span> <span class="token number">1716518590</span> +0800
committer Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span> <span class="token number">1716533017</span> +0800

    将 test01.txt 文件重命名为 test02.txt，并修改文件内容

commit 99114d61ea731daf4d5663aa77d83810a8c38680
tree 74eeee4b7421028201d7fb950b9d66c8aff22937
parent 232657552142c8fe97ac32f5801c70137ed95246
author Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span> <span class="token number">1716452905</span> +0800
committer Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span> <span class="token number">1716452905</span> +0800

    modified test01.txt

commit 232657552142c8fe97ac32f5801c70137ed95246
tree 678664884292fb792d418030055ace3c8dcc5d91
parent f3b964575a8a1d6919e591173d8a788f968a4140
author Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span> <span class="token number">1716445579</span> +0800
committer Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span> <span class="token number">1716445579</span> +0800

    change <span class="token function">file</span>

    <span class="token function">add</span> README.md

    modified test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：使用 <code>git ls-tree</code> 查看当前仓库指定树对象（<code>tree</code>）的 blob 对象。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ls-tree 53f69acb505bf9bfce1a4d9299b79df6d2e1c6be

<span class="token number">100644</span> blob e6249324cb83b7d63fa664f4fb4dd1ada0133053    README.md
<span class="token number">100644</span> blob b4682767c489896d37957a8b81d946d262ffbe3e    test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git 的分支，其实本质上仅仅是指向提交对象的可变指针。Git 的默认分支名字是 <code>main</code> 或 <code>master</code>。在多次提交操作之后，您其实已经有一个指向最后那个提交对象的 <code>master</code> 分支。<code>master</code> 分支会在每次提交时自动向前移动。</p>`,14),u={class:"hint-container info"},v=s("p",{class:"hint-container-title"},"相关信息",-1),m=s("code",null,"master",-1),b=s("code",null,"master",-1),g=s("h2",{id:"创建分支",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#创建分支","aria-hidden":"true"},"#"),n(" 创建分支")],-1),k=i(`<p>例如：要开发一个新功能，一般会以主分支（<code>main</code>）为基础，创建一个新分支（<code>dev</code>），并在新分支中开发新功能。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看提交对象指针，<code>main</code> 分支和 <code>dev</code> 分支都指向同一个提交对象指针（<code>7333fb5</code>）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-1</span> <span class="token parameter variable">--oneline</span>

7333fb5 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, origin/main, dev<span class="token punctuation">)</span> 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git 有一个名为 HEAD 的特殊指针。请注意它和许多其它版本控制系统（如：Subversion 或 CVS）里的 HEAD 概念完全不同。在 Git 中，它是一个指针，指向当前所在的本地分支（将 HEAD 想象为当前分支的别名）。在本例中，HEAD 指针仍然在 <code>main</code> 分支上。因为 <code>git branch</code> 命令仅仅 <strong>创建</strong> 一个新分支，并不会自动切换到新分支中去。</p><h2 id="分支切换" tabindex="-1"><a class="header-anchor" href="#分支切换" aria-hidden="true">#</a> 分支切换</h2><h3 id="head-指向当前所在的分支" tabindex="-1"><a class="header-anchor" href="#head-指向当前所在的分支" aria-hidden="true">#</a> HEAD 指向当前所在的分支</h3>`,7),h=i(`<p>例如：切换到新创建的 <code>dev</code> 分支，且 HEAD 指针指向 <code>dev</code> 分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 HEAD 指针，HEAD 指针指向 <code>dev</code> 分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-1</span> <span class="token parameter variable">--oneline</span>

7333fb5 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> dev, origin/main, main<span class="token punctuation">)</span> 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="head-指针随着提交操作自动向前移动" tabindex="-1"><a class="header-anchor" href="#head-指针随着提交操作自动向前移动" aria-hidden="true">#</a> HEAD 指针随着提交操作自动向前移动</h3><p>如果再次执行提交（<code>git commit</code>）操作，您的 <code>dev</code> 分支向前移动了，但是 <code>main</code> 分支却没有，HEAD 仍然指向运行 <code>git checkout</code> 时所指的对象。</p><p>例如：在 <code>dev</code> 分支中开发新功能，并执行提交（<code>git commit</code>）操作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;test01&#39;</span> <span class="token operator">&gt;</span> test01.txt
<span class="token function">git</span> <span class="token function">add</span> test01.txt
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;add test01.txt&#39;</span>

<span class="token punctuation">[</span>dev 0f59771<span class="token punctuation">]</span> <span class="token function">add</span> test01.txt
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>dev</code> 分支，HEAD 指针指向新的提交对象 <code>0f59771</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-2</span> <span class="token parameter variable">--oneline</span>

0f59771 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> dev<span class="token punctuation">)</span> <span class="token function">add</span> test01.txt
7333fb5 <span class="token punctuation">(</span>origin/main, main<span class="token punctuation">)</span> 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检出时-head-随之移动" tabindex="-1"><a class="header-anchor" href="#检出时-head-随之移动" aria-hidden="true">#</a> 检出时 HEAD 随之移动</h3><p>再切换回 <code>main</code> 分支，使 HEAD 指针指回 <code>main</code> 分支，并将工作目录恢复成 <code>main</code> 分支所指向的快照内容。</p><p>先查看 <code>dev</code> 分支内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span>

README.md  test01.txt  test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换回 <code>main</code> 分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 <code>main</code> 分支，HEAD 指针指向的提交对象依旧是 <code>7333fb5</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-1</span> <span class="token parameter variable">--oneline</span>

7333fb5 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, origin/main<span class="token punctuation">)</span> 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>main</code> 分支内容，已恢复成 <code>main</code> 分支所指向的快照内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span>

README.md  test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目分叉历史" tabindex="-1"><a class="header-anchor" href="#项目分叉历史" aria-hidden="true">#</a> 项目分叉历史</h3><p>如果您正在 <code>dev</code> 分支中开发新功能，突然在之前的（主分支 <code>main</code>）环境中有一个紧急问题需要解决，但又不想放弃 <code>dev</code> 分支中的修改，可以通过 Git 回到 <code>main</code> 分支环境。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在您这么做之前，要留意您的工作目录和暂存区里那些还没有被提交的修改，它可能会和您即将检出的分支产生冲突从而阻止 Git 切换到该分支。最好的方法是，在您切换分支之前，保持好一个干净的状态。有一些方法可以绕过这个问题，即 <strong>贮藏</strong>（stashing） 和 <strong>修补提交</strong>（commit amending）。</p></div><p>现在，假设您已经把您的修改全部提交了，这时您可以切换回 <code>main</code> 分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个时候，您的工作目录和您开始在 <code>dev</code> 分支上开发新功能之前一模一样，现在您可以专心修复紧急问题了。<strong>注意</strong>：当您切换分支的时候，Git 会重置您的工作目录，使其看起来像回到了您在那个分支上最后一次提交的样子。Git 会自动添加、删除、修改文件以确保此时您的工作目录和这个分支最后一次提交时的样子一模一样。</p><p>接下来，您要修复这个紧急问题。建立一个 <code>hotfix</code> 分支，在该分支上工作直到问题解决。</p><p>创建并切换到 <code>hotfix</code> 分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> hotfix

Switched to a new branch <span class="token string">&#39;hotfix&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>hotfix</code> 分支中修改，解决问题：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;test02\\ntest02test02&#39;</span> <span class="token operator">&gt;</span> test02.txt
<span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&#39;modified test02.txt&#39;</span>

<span class="token punctuation">[</span>hotfix 6a63f37<span class="token punctuation">]</span> modified test02.txt
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>hotfix</code> 分支，HEAD 指针指向新的提交对象 <code>6a63f37</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-2</span> <span class="token parameter variable">--oneline</span>

6a63f37 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> hotfix<span class="token punctuation">)</span> modified test02.txt
7333fb5 <span class="token punctuation">(</span>origin/main, main<span class="token punctuation">)</span> 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，这个项目的提交历史已经产生了分叉。因为刚才您创建了一个新分支，并切换过去进行了一些工作，随后又切换回 <code>main</code> 分支进行了另外一些工作。上述两次改动针对的是不同分支，您可以在不同分支间不断地来回切换和工作，并在时机成熟时将它们合并起来。</p><p>使用 <code>git log -5 --oneline --graph --all</code> 命令查看分叉历史，显示所有分支中前五个提交记录，并以简短的 ASCII 图形的方式显示。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-5</span> <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--graph</span> <span class="token parameter variable">--all</span>

* 6a63f37 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> hotfix<span class="token punctuation">)</span> modified test02.txt
<span class="token operator">|</span> * 0f59771 <span class="token punctuation">(</span>dev<span class="token punctuation">)</span> <span class="token function">add</span> test01.txt
<span class="token operator">|</span>/
* 7333fb5 <span class="token punctuation">(</span>origin/main, main<span class="token punctuation">)</span> 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
* 99114d6 modified test01.txt
* <span class="token number">2326575</span> change <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">创建新分支的同时切换过去</p><p>通常会在创建一个新分支后立即切换过去，这可以用 <code>git checkout -b &lt;newbranchname&gt;</code> 一条命令搞定。</p></div><h2 id="分支合并" tabindex="-1"><a class="header-anchor" href="#分支合并" aria-hidden="true">#</a> 分支合并</h2><h3 id="快进合并" tabindex="-1"><a class="header-anchor" href="#快进合并" aria-hidden="true">#</a> 快进合并</h3>`,39),f=s("code",null,"hotfix",-1),x=s("code",null,"main",-1),_=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout main
<span class="token function">git</span> merge hotfix

Updating 7333fb5<span class="token punctuation">..</span>6a63f37
Fast-forward
 test02.txt <span class="token operator">|</span> <span class="token number">3</span> ++-
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在合并的时候，您应该注意到了 <strong>快进</strong>（<code>fast-forward</code>）这个词。由于要合并的分支 <code>hotfix</code> 所指向的提交 <code>6a63f37</code> 是您所在的提交 <code>7333fb5</code> 的直接后继，因此 Git 会直接将指针向前移动。换句话说，当您试图合并两个分支时，如果顺着一个分支走下去能够到达另一个分支，那么 Git 在合并两者的时候，只会简单的将指针向前推进（指针右移），因为这种情况下的合并操作没有需要解决的分歧——这就叫做 <strong>快进</strong>（<code>fast-forward</code>）。</p><p>现在，最新的修改已经在 <code>main</code> 分支所指向的提交快照中，您可以着手发布该修复了。查看 <code>main</code> 分支，HEAD 指针指向 <code>hotfix</code> 分支的提交对象 <code>6a63f37</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-2</span> <span class="token parameter variable">--oneline</span>

6a63f37 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, hotfix<span class="token punctuation">)</span> modified test02.txt
7333fb5 <span class="token punctuation">(</span>origin/main<span class="token punctuation">)</span> 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),A=s("code",null,"hotfix",-1),E=s("code",null,"main",-1),G=s("code",null,"-d",-1),D=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-d</span> hotfix

Deleted branch hotfix <span class="token punctuation">(</span>was 6a63f37<span class="token punctuation">)</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在可以切换回 <code>dev</code> 分支继续开发新功能：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout dev
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;test02test02\\ntest02&#39;</span> <span class="token operator">&gt;&gt;</span> test02.txt
<span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&#39;modified test02.txt&#39;</span>

<span class="token punctuation">[</span>dev ad6950e<span class="token punctuation">]</span> modified test02.txt
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>dev</code> 分支，HEAD 指针指向新的提交对象 <code>ad6950e</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--oneline</span>

ad6950e <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> dev<span class="token punctuation">)</span> modified test02.txt
0f59771 <span class="token function">add</span> test01.txt
7333fb5 <span class="token punctuation">(</span>origin/main<span class="token punctuation">)</span> 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三方合并" tabindex="-1"><a class="header-anchor" href="#三方合并" aria-hidden="true">#</a> 三方合并</h3><p>有时候合并操作不会如此顺利。如果您在两个不同的分支中，对同一个文件的同一个部分进行了不同的修改，Git 就没法自动的合并它们。这种情况称为 <strong>合并冲突。</strong></p><p>例如：已经在 <code>dev</code> 分支中开发完新功能，将 <code>dev</code> 分支合并到 <code>main</code> 分支中。在 <code>dev</code> 和 <code>main</code> 分支中，同时修改了 <code>test02.txt</code> 文件的同一个部分。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout main
<span class="token function">git</span> merge dev

Auto-merging test02.txt
CONFLICT <span class="token punctuation">(</span>content<span class="token punctuation">)</span>: Merge conflict <span class="token keyword">in</span> test02.txt
Automatic merge failed<span class="token punctuation">;</span> fix conflicts and <span class="token keyword">then</span> commit the result.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),H=s("code",null,"unmerged",-1),w=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
You have unmerged paths.
  <span class="token punctuation">(</span>fix conflicts and run <span class="token string">&quot;git commit&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git merge --abort&quot;</span> to abort the merge<span class="token punctuation">)</span>

Changes to be committed:
        new file:   test01.txt

Unmerged paths:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to mark resolution<span class="token punctuation">)</span>
        both modified:   test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>任何因包含合并冲突而有待解决的文件，都会以未合并状态标识出来。Git 会在有冲突的文件中加入标准的冲突解决标记（<code>Unmerged paths</code>），这样您可以打开这些包含冲突的文件然后手动解决冲突。出现冲突的文件会包含一些特殊区段，看起来如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;</span> HEAD
test02
test02test02
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
test02.txt
test02test02
test02
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这表示 HEAD 所指示的版本（也就是您 <code>main</code> 分支所在的位置，因为您在运行 <code>merge</code> 命令的时候已经检出到了这个分支）在这个区段的上半部分（<code>=======</code> 的上半部分），而 <code>dev</code> 分支所指示的版本在 <code>=======</code> 的下半部分。为了解决冲突，您必须选择使用由 <code>=======</code> 分割的两部分中的一个，或者您也可以自行合并这些内容。例如：您可以通过把这段内容换成下面的样子来解决冲突。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>test02
test02test02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),q=s("code",null,"<<<<<<<",-1),C=s("code",null,"=======",-1),S=s("code",null,">>>>>>>",-1),y=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> test02.txt
<span class="token function">git</span> status

On branch main
All conflicts fixed but you are still merging.
  <span class="token punctuation">(</span>use <span class="token string">&quot;git commit&quot;</span> to conclude merge<span class="token punctuation">)</span>

Changes to be committed:
        new file:   test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您对结果感到满意，并且确定之前有冲突的文件都已经暂存了，这时您可以输入 <code>git commit</code> 来完成合并提交。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;merge dev&#39;</span>

<span class="token punctuation">[</span>main 4b0390e<span class="token punctuation">]</span> merge dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>git log -5 --oneline --graph --all</code> 命令查看分叉历史，显示所有分支中前五个提交记录，并以简短的 ASCII 图形的方式显示。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-5</span> <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--graph</span> <span class="token parameter variable">--all</span>

*   4b0390e <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main<span class="token punctuation">)</span> merge dev
<span class="token operator">|</span><span class="token punctuation">\\</span>
<span class="token operator">|</span> * ad6950e <span class="token punctuation">(</span>dev<span class="token punctuation">)</span> modified test02.txt
<span class="token operator">|</span> * 0f59771 <span class="token function">add</span> test01.txt
* <span class="token operator">|</span> 6a63f37 modified test02.txt
<span class="token operator">|</span>/
* 7333fb5 <span class="token punctuation">(</span>origin/main<span class="token punctuation">)</span> 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这和您之前合并 <code>hotfix</code> 分支的时候看起来有一点不一样。在这种情况下，您的开发历史从一个更早的地方开始分叉开来（<code>diverged</code>）。因为，<code>main</code> 分支所在提交并不是 <code>dev</code> 分支所在提交的直接祖先，Git 不得不做一些额外的工作。出现这种情况的时候，Git 会使用两个分支的末端所指的快照（<code>6a63f37</code> 和 <code>ad6950e</code>）以及这两个分支的公共祖先（<code>7333fb5</code>），做一个简单的三方合并。</p><p>和之前将分支指针向前推进所不同的是，Git 将此次三方合并的结果做了一个新的快照并且自动创建一个新的提交指向它。这个被称作一次合并提交，它的特别之处在于他有不止一个父提交。</p><p>既然您的修改已经合并进来了，就不再需要 <code>dev</code> 分支了。现在您可以在任务追踪系统中关闭此项任务，并删除这个分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-d</span> dev

Deleted branch dev <span class="token punctuation">(</span>was ad6950e<span class="token punctuation">)</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想使用图形化工具来解决冲突，可以运行 <code>git mergetool</code>，该命令会为您启动一个合适的可视化合并工具，并带领您一步一步解决这些冲突。</p><h2 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理" aria-hidden="true">#</a> 分支管理</h2>`,11),I=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch

* main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>main</code> 分支前的 <code>*</code> 字符表示现在检出的那一个分支（也就是说，当前 HEAD 指针所指向的分支）。</p><p>如果需要查看每一个分支的最后一次提交，可以运行 <code>git branch -v</code> 命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-v</span>

* main 4b0390e merge dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请牢记，当您做这么多操作的时候，这些分支全部都存于本地。当您新建和合并分支的时候，所有这一切都只发生在您本地的 Git 版本库中，没有与服务器发生交互。</p><h2 id="远程分支" tabindex="-1"><a class="header-anchor" href="#远程分支" aria-hidden="true">#</a> 远程分支</h2>`,6),T=s("strong",null,"远程跟踪分支。",-1),j=i(`<p>远程跟踪分支是远程分支状态的引用。远程跟踪分支是您无法移动的本地引用。一旦您进行了网络通信，Git 就会为您移动远程跟踪分支以精确反映远程仓库的状态，远程跟踪分支以 <code>&lt;remote&gt;/&lt;branch&gt;</code> 的形式命名。</p><p>例如：上面创建分支时，查看的提交对象指针。本地分支（<code>main</code>、<code>dev</code>）和远程分支（<code>origin/main</code>）都指向 <code>7333fb5</code> 提交对象。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-1</span> <span class="token parameter variable">--oneline</span>

7333fb5 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, origin/main, dev<span class="token punctuation">)</span> 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>远程仓库名字 <code>origin</code> 与分支名字 <code>main</code> 一样，在 Git 中并没有任何特别的含义一样。同时 <code>main</code> 是当您运行 <code>git init</code> 时默认的起始分支名字，原因仅仅是它的广泛使用，<code>origin</code> 是当您运行 <code>git clone</code> 时默认的远程仓库名字。如果您运行 <code>git clone -o booyah</code>，那么您默认的远程分支名字将会是 <code>booyah/main</code>。</p></div><p>如果您在本地的 <code>main</code> 分支做了一些工作，在同一段时间内有其他人推送提交到远程 <code>main</code> 分支（<code>origin/main</code>）并且更新了它的 <code>main</code> 分支，这就是说您们的提交历史已走向不同的方向。即便这样，只要您保持不与 <code>origin</code> 服务器连接（并拉取数据），您的 <code>origin/master</code> 指针就不会移动。</p><p>例如：查看当前提交对象。本地分支（<code>main</code>）指向 <code>4b0390e</code>，而远程分支（<code>origin/main</code>）依然指向 <code>7333fb5</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-5</span> <span class="token parameter variable">--oneline</span>

4b0390e <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main<span class="token punctuation">)</span> merge dev
ad6950e modified test02.txt
6a63f37 modified test02.txt
0f59771 <span class="token function">add</span> test01.txt
7333fb5 <span class="token punctuation">(</span>origin/main<span class="token punctuation">)</span> 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),N=s("code",null,"git fetch origin",-1),R=s("code",null,"origin",-1),M=s("code",null,"/home/sankgao/projects/git_tutorials.git",-1),L=s("code",null,"origin/main",-1),U=s("h3",{id:"推送",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#推送","aria-hidden":"true"},"#"),n(" 推送")],-1),V=s("p",null,[n("当您想要公开分享一个分支时，需要将其推送到有写入权限的远程仓库上。本地的分支并不会自动与远程仓库同步——您必须显式地推送想要分享的分支。这样，您就可以把不愿意分享的内容放到私人分支上，而将需要和别人协作的内容推送到公开分支。运行 "),s("code",null,"git push <remote> <branch>"),n(" 命令，将本地指定分支推送到远程仓库中。")],-1),B=s("code",null,"main",-1),F=s("code",null,"origin/main",-1),O=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin main

Enumerating objects: <span class="token number">13</span>, done.
Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">13</span>/13<span class="token punctuation">)</span>, done.
Delta compression using up to <span class="token number">2</span> threads
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">8</span>/8<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">11</span>/11<span class="token punctuation">)</span>, <span class="token number">899</span> bytes <span class="token operator">|</span> <span class="token number">899.00</span> KiB/s, done.
Total <span class="token number">11</span> <span class="token punctuation">(</span>delta <span class="token number">4</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span> <span class="token punctuation">(</span>from <span class="token number">0</span><span class="token punctuation">)</span>
To /home/sankgao/projects/git_tutorials.git
   7333fb5<span class="token punctuation">..</span>4b0390e  main -<span class="token operator">&gt;</span> main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看提交对象，本地分支（<code>main</code>）和远程分支（<code>origin/main</code>）都指向 <code>4b0390e</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-5</span> <span class="token parameter variable">--oneline</span>

4b0390e <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, origin/main<span class="token punctuation">)</span> merge dev
ad6950e modified test02.txt
6a63f37 modified test02.txt
0f59771 <span class="token function">add</span> test01.txt
7333fb5 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跟踪分支" tabindex="-1"><a class="header-anchor" href="#跟踪分支" aria-hidden="true">#</a> 跟踪分支</h3><p>从一个远程跟踪分支检出一个本地分支会自动创建所谓的 <strong>跟踪分支</strong>（它跟踪的分支叫做 <strong>上游分支</strong>），跟踪分支是与远程分支有直接关系的本地分支。如果在一个跟踪分支上输入 <code>git pull</code>，Git 能自动地识别去哪个服务器上抓取、合并到哪个分支。</p><p>当前远程只有 <code>origin/main</code> 分支，先创建远程 <code>origin/dev</code> 和 <code>origin/test</code> 分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> dev
<span class="token function">git</span> push origin dev

Total <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span> <span class="token punctuation">(</span>from <span class="token number">0</span><span class="token punctuation">)</span>
To /home/sankgao/projects/git_tutorials.git
 * <span class="token punctuation">[</span>new branch<span class="token punctuation">]</span>      dev -<span class="token operator">&gt;</span> dev


<span class="token function">git</span> checkout main
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token builtin class-name">test</span>
<span class="token function">git</span> push origin <span class="token builtin class-name">test</span>

Total <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span> <span class="token punctuation">(</span>from <span class="token number">0</span><span class="token punctuation">)</span>
To /home/sankgao/projects/git_tutorials.git
 * <span class="token punctuation">[</span>new branch<span class="token punctuation">]</span>      <span class="token builtin class-name">test</span> -<span class="token operator">&gt;</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看本地和远程跟踪分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-a</span>

  dev
  main
* <span class="token builtin class-name">test</span>
  remotes/origin/dev
  remotes/origin/main
  remotes/origin/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除本地 <code>dev</code> 和 <code>test</code> 分支，并查看本地和远程跟踪分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout main
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> dev
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token builtin class-name">test</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

* main
  remotes/origin/dev
  remotes/origin/main
  remotes/origin/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当克隆一个仓库时，它通常会自动地创建一个跟踪 <code>origin/main</code> 的 <code>main</code> 分支。然而，如果您愿意的话可以设置其它的跟踪分支，或是一个在其它远程仓库上的跟踪分支，又或者不跟踪 <code>main</code> 分支。最简单的方式就是运行 <code>git checkout -b &lt;branch&gt; &lt;remote&gt;/&lt;branch&gt;</code> 命令。这是一个十分常用的操作所以 Git 提供了 <code>--track</code> 快捷方式，这两种方式前提是远程分支已存在。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">--track</span> origin/test

branch <span class="token string">&#39;test&#39;</span> <span class="token builtin class-name">set</span> up to track <span class="token string">&#39;origin/test&#39;</span><span class="token builtin class-name">.</span>
Switched to a new branch <span class="token string">&#39;test&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于这个操作太常用了，该捷径本身还有一个捷径。如果要切换的本地分支（<code>dev</code>）不存在但在远程分支（<code>origin/dev</code>）存在，那么 Git 就会创建一个跟踪分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout dev

branch <span class="token string">&#39;dev&#39;</span> <span class="token builtin class-name">set</span> up to track <span class="token string">&#39;origin/dev&#39;</span><span class="token builtin class-name">.</span>
Switched to a new branch <span class="token string">&#39;dev&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要将本地分支与远程分支设置为不同的名字，可以使用 <code>git checkout -b</code> 命令增加一个不同名字的本地分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> develop origin/dev

branch <span class="token string">&#39;develop&#39;</span> <span class="token builtin class-name">set</span> up to track <span class="token string">&#39;origin/dev&#39;</span><span class="token builtin class-name">.</span>
Switched to a new branch <span class="token string">&#39;develop&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，本地分支 <code>develop</code> 会自动从 <code>origin/dev</code> 拉取。</p><p>设置已有的本地分支跟踪一个刚刚拉取下来的远程分支，或者想要修改正在跟踪的上游分支，您可以在任意时间使用 <code>-u</code> 或 <code>--set-upstream-to</code> 选项运行 <code>git branch</code> 来显式地设置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-u</span> origin/dev

branch <span class="token string">&#39;develop&#39;</span> <span class="token builtin class-name">set</span> up to track <span class="token string">&#39;origin/dev&#39;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拉取" tabindex="-1"><a class="header-anchor" href="#拉取" aria-hidden="true">#</a> 拉取</h3>`,21),Y=s("code",null,"clone",-1),K=s("code",null,"checkout",-1),W=s("code",null,"git pull",-1),z=s("code",null,"fetch",-1),J=s("code",null,"merge",-1),P=s("h3",{id:"删除远程分支",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#删除远程分支","aria-hidden":"true"},"#"),n(" 删除远程分支")],-1),Q=s("code",null,"main",-1),X=s("code",null,"--delete",-1),Z=i(`<p>例如：如果从服务器上删除 <code>test</code> 分支，运行下面的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token builtin class-name">test</span>

To /home/sankgao/projects/git_tutorials.git
 - <span class="token punctuation">[</span>deleted<span class="token punctuation">]</span>         <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本上这个命令做的只是从服务器上移除这个指针。Git 服务器通常会保留数据一段时间直到垃圾回收运行，所以如果不小心删除掉了，通常是很容易恢复的。</p><h2 id="变基" tabindex="-1"><a class="header-anchor" href="#变基" aria-hidden="true">#</a> 变基</h2><p>在 Git 中整合来自不同分支的修改主要有两种方法：合并（<code>merge</code>）和变基（<code>rebase</code>）。</p><p>整合分支最容易的方法是 <code>merge</code> 命令。它会把两个分支的最新快照以及二者最近的共同祖先进行三方合并，合并的结果是生成一个新的快照（并提交）。</p><ul><li><strong>合并</strong>：使用 <code>merge</code> 命令，会把两个分支的最新快照以及二者最近的共同祖先进行三方合并，合并的结果是生成一个新的快照（并提交）</li><li><strong>变基</strong>：使用 <code>rebase</code> 命令，将提交到某一分支上的所有修改都移至另一分支上，就好像 “重新播放” 一样</li></ul><p>还有一种方法：您可以提取在 C4 中引入的补丁和修改，然后在 C3 的基础上应用一次。在 Git 中，这种操作就叫做 <strong>变基</strong>（<code>rebase</code>）。您可以使用 rebase 命令将提交到某一分支上的所有修改都移至另一分支上，就好像 “重新播放” 一样。</p><p>例如：将 <code>dev</code> 分支变基到 <code>main</code> 分支上。</p><p>先在 <code>dev</code> 分支上提交信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout dev
<span class="token builtin class-name">echo</span> <span class="token string">&#39;test01test01&#39;</span> <span class="token operator">&gt;&gt;</span> test01.txt
<span class="token builtin class-name">echo</span> <span class="token string">&#39;test02&#39;</span> <span class="token operator">&gt;&gt;</span> test02.txt
<span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&#39;modified file all&#39;</span>

<span class="token punctuation">[</span>dev 835d939<span class="token punctuation">]</span> modified <span class="token function">file</span> all
 <span class="token number">2</span> files changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>main</code> 分支上提交信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout main
<span class="token builtin class-name">echo</span> <span class="token string">&#39;test01&#39;</span> <span class="token operator">&gt;&gt;</span> test01.txt
<span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&#39;modified test01.txt&#39;</span>

<span class="token punctuation">[</span>main 5a1d206<span class="token punctuation">]</span> modified test01.txt
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>git log -5 --oneline --graph --all</code> 命令查看分叉历史，显示所有分支中前五个提交记录，并以简短的 ASCII 图形的方式显示。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-5</span> <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--graph</span> <span class="token parameter variable">--all</span>

* 5a1d206 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main<span class="token punctuation">)</span> modified test01.txt
<span class="token operator">|</span> * 835d939 <span class="token punctuation">(</span>dev<span class="token punctuation">)</span> modified <span class="token function">file</span> all
<span class="token operator">|</span>/
*   4b0390e <span class="token punctuation">(</span>origin/main, origin/dev, test, develop<span class="token punctuation">)</span> merge dev
<span class="token operator">|</span><span class="token punctuation">\\</span>
<span class="token operator">|</span> * ad6950e modified test02.txt
<span class="token operator">|</span> * 0f59771 <span class="token function">add</span> test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>dev</code> 分支变基到 <code>main</code> 分支上：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout dev
<span class="token function">git</span> rebase main

Auto-merging test01.txt
CONFLICT <span class="token punctuation">(</span>content<span class="token punctuation">)</span>: Merge conflict <span class="token keyword">in</span> test01.txt
error: could not apply 835d939<span class="token punctuation">..</span>. modified <span class="token function">file</span> all
hint: Resolve all conflicts manually, mark them as resolved with
hint: <span class="token string">&quot;git add/rm &lt;conflicted_files&gt;&quot;</span>, <span class="token keyword">then</span> run <span class="token string">&quot;git rebase --continue&quot;</span><span class="token builtin class-name">.</span>
hint: You can instead skip this commit: run <span class="token string">&quot;git rebase --skip&quot;</span><span class="token builtin class-name">.</span>
hint: To abort and get back to the state before <span class="token string">&quot;git rebase&quot;</span>, run <span class="token string">&quot;git rebase --abort&quot;</span><span class="token builtin class-name">.</span>
Could not apply 835d939<span class="token punctuation">..</span>. modified <span class="token function">file</span> all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),$=s("code",null,"test01.txt",-1),nn=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

interactive rebase <span class="token keyword">in</span> progress<span class="token punctuation">;</span> onto 5a1d206
Last <span class="token builtin class-name">command</span> <span class="token keyword">done</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token builtin class-name">command</span> <span class="token keyword">done</span><span class="token punctuation">)</span>:
   pick 835d939 modified <span class="token function">file</span> all
No commands remaining.
You are currently rebasing branch <span class="token string">&#39;dev&#39;</span> on <span class="token string">&#39;5a1d206&#39;</span><span class="token builtin class-name">.</span>
  <span class="token punctuation">(</span>fix conflicts and <span class="token keyword">then</span> run <span class="token string">&quot;git rebase --continue&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git rebase --skip&quot;</span> to skip this patch<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git rebase --abort&quot;</span> to check out the original branch<span class="token punctuation">)</span>

Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        modified:   test02.txt

Unmerged paths:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to mark resolution<span class="token punctuation">)</span>
        both modified:   test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>任何因包含合并冲突而有待解决的文件，都会以未合并状态标识出来。<code>test01.txt</code> 冲突的文件内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>test01
<span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;</span> HEAD
test01
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
test01test01
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 835d939 <span class="token punctuation">(</span>modified <span class="token function">file</span> all<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将文件改为以下内容解决冲突：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>test01
test01test01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),sn=s("code",null,"<<<<<<<",-1),an=s("code",null,"=======",-1),en=s("code",null,">>>>>>>",-1),tn=i(`<p>将冲突文件 <code>test01.txt</code> 暂存，并继续变基：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> test01.txt
<span class="token function">git</span> rebase <span class="token parameter variable">--continue</span>

<span class="token punctuation">[</span>detached HEAD d624805<span class="token punctuation">]</span> modified <span class="token function">file</span> all, dev rebase main
 <span class="token number">2</span> files changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
Successfully rebased and updated refs/heads/dev.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>git log -5 --oneline --graph --all</code> 命令查看分叉历史，显示所有分支中前五个提交记录，并以简短的 ASCII 图形的方式显示。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-5</span> <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--graph</span> <span class="token parameter variable">--all</span>

* d624805 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> dev<span class="token punctuation">)</span> modified <span class="token function">file</span> all, dev rebase main
* 5a1d206 <span class="token punctuation">(</span>main<span class="token punctuation">)</span> modified test01.txt
*   4b0390e <span class="token punctuation">(</span>origin/main, origin/dev, test, develop<span class="token punctuation">)</span> merge dev
<span class="token operator">|</span><span class="token punctuation">\\</span>
<span class="token operator">|</span> * ad6950e modified test02.txt
<span class="token operator">|</span> * 0f59771 <span class="token function">add</span> test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看当前的分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch

* dev
  develop
  main
  <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>变基原理</strong> 是首先找到这两个分支（即当前分支 <code>dev</code>、变基操作的目标基底分支 <code>main</code>）的最近共同祖先 <code>4b0390e</code>，然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件，然后将当前分支指向目标基底 <code>5a1d206</code>，最后以此将之前另存为临时文件的修改依序应用。</p><p>现在回到 <code>main</code> 分支，进行一次快进合并。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout main
<span class="token function">git</span> merge dev

Updating 5a1d206<span class="token punctuation">..</span>d624805
Fast-forward
 test01.txt <span class="token operator">|</span> <span class="token number">2</span> +-
 test02.txt <span class="token operator">|</span> <span class="token number">1</span> +
 <span class="token number">2</span> files changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>git log -5 --oneline --graph --all</code> 命令查看分叉历史，显示所有分支中前五个提交记录，并以简短的 ASCII 图形的方式显示。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-5</span> <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--graph</span> <span class="token parameter variable">--all</span>

* d624805 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, dev<span class="token punctuation">)</span> modified <span class="token function">file</span> all, dev rebase main
* 5a1d206 modified test01.txt
*   4b0390e <span class="token punctuation">(</span>origin/main, origin/dev, test, develop<span class="token punctuation">)</span> merge dev
<span class="token operator">|</span><span class="token punctuation">\\</span>
<span class="token operator">|</span> * ad6950e modified test02.txt
<span class="token operator">|</span> * 0f59771 <span class="token function">add</span> test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两种整合方法的最终结果没有任何区别，但是变基使得提交历史更加整洁。您在查看一个经过变基的分支的历史记录时会发现，尽管实际的开发工作是并行的，但它们看上去就像是串行的一样，提交历史是一条直线没有分叉。</p><p>一般我们这样做的目的是为了确保在向远程分支推送时能保持提交历史的整洁——例如：向某个其他人维护的项目贡献代码时。在这种情况下，您首先在自己的分支里进行开发，当开发完成时您需要先将您的代码变基到 <code>origin/main</code> 上，然后再向主项目提交修改。这样的话，该项目的维护者就不再需要进行整合工作，只需要快进合并便可。</p><p>无论是通过变基，还是通过三方合并，整合的最终结果所指向的快照始终是一样的，只不过提交历史不同罢了。变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起。</p><p><strong>变基遵守一条准则</strong>：如果提交存在于您的仓库之外，而别人可能基于这些提交进行开发，那么不要执行变基。</p>`,15);function cn(on,dn){const a=o("RouterLink");return d(),l("div",null,[r,s("div",u,[v,s("p",null,[n("Git 的 "),m,n(" 分支并不是一个特殊分支，它跟其它分支完全没有区别。之所以几乎每一个仓库都有 "),b,n(" 分支，是因为 "),e(a,{to:"/computers/commands/git/git_init.html"},{default:t(()=>[n("git init")]),_:1}),n(" 命令默认创建它，并且大多数人都懒得去改动它。")])]),g,s("p",null,[n("分支只是为您创建了一个可以移动的新的指针。使用 "),e(a,{to:"/computers/commands/git/git_branch.html"},{default:t(()=>[n("git branch")]),_:1}),n(" 命令，创建一个新分支，这会在当前所在的提交对象上创建一个指针。")]),k,s("p",null,[n("使用 "),e(a,{to:"/computers/commands/git/git_checkout.html"},{default:t(()=>[n("git checkout")]),_:1}),n(" 或 "),e(a,{to:"/computers/commands/git/git_switch.html"},{default:t(()=>[n("git switch")]),_:1}),n(" 命令，将切换到已存在的其它分支，HEAD 也会指向指定的分支。分支切换会改变您工作目录中的文件。")]),h,s("p",null,[n("您可以运行您的测试，确保您的修改是正确的。使用 "),e(a,{to:"/computers/commands/git/git_merge.html"},{default:t(()=>[n("git merge")]),_:1}),n(" 命令将 "),f,n(" 分支合并到 "),x,n(" 分支来部署到线上。")]),_,s("p",null,[n("关于这个紧急问题的解决方案发布之后，您准备回到被打断之前时的工作中。然而，您应该先删除 "),A,n(" 分支，因为您已经不再需要它了，"),E,n(" 分支已经指向了同一个位置。您可以使用带 "),G,n(" 选项的 "),e(a,{to:"/computers/commands/git/git_branch.html"},{default:t(()=>[n("git branch")]),_:1}),n(" 命令来删除分支。")]),D,s("p",null,[n("此时 Git 做了合并，但是没有自动地创建一个新的合并提交。Git 会暂停下来，等待您去解决合并产生的冲突。在合并冲突后使用 "),e(a,{to:"/computers/commands/git/git_status.html"},{default:t(()=>[n("git status")]),_:1}),n(" 命令来查看那些因包含合并冲突而处于未合并（"),H,n("）状态的文件。")]),w,s("p",null,[n("上述的冲突解决方案仅保留了其中一个分支的修改，并且 "),q,n(" 、"),C,n(" 和 "),S,n(" 这些行被完全删除了。在您解决了所有文件里的冲突之后，对每个文件使用 "),e(a,{to:"/computers/commands/git/git_add.html"},{default:t(()=>[n("git add")]),_:1}),n(" 命令来将其标记为冲突已解决。一旦暂存这些原本有冲突的文件，Git 就会将它们标记为冲突已解决。")]),y,s("p",null,[e(a,{to:"/computers/commands/git/git_branch.html"},{default:t(()=>[n("git branch")]),_:1}),n(" 命令不只是可以创建与删除分支。如果不加任何参数运行它，会得到当前所有分支的一个列表：")]),I,s("p",null,[n("远程引用是对远程仓库的引用（指针），包括分支、标签等等。使用 "),e(a,{to:"/computers/commands/git/git_ls-remote.html"},{default:t(()=>[n("git ls-remote <remote>")]),_:1}),n(" 命令来获取远程引用的完整列表，或者通过 "),e(a,{to:"/computers/commands/git/git_remote.html"},{default:t(()=>[n("git remote show <remote>")]),_:1}),n(" 获得远程分支的更多信息。然而，一个更常见的做法是利用 "),T]),j,s("p",null,[n("如果要与给定的远程仓库同步数据，运行 "),e(a,{to:"/computers/commands/git/git_fetch.html"},{default:t(()=>[n("git fetch <remote>")]),_:1}),n(" 命令（在本例中为 "),N,n("）。这个命令查找 "),R,n(" 是哪一个服务器（在本例中，它是 "),M,n("），从中抓取本地没有的数据，并且更新本地数据库，移动 "),L,n(" 指针到更新之后的位置。")]),U,V,s("p",null,[n("例如：使用 "),e(a,{to:"/computers/commands/git/git_push.html"},{default:t(()=>[n("git push")]),_:1}),n(" 命令，推送本地 "),B,n(" 分支到远程仓库的 "),F,n(" 分支中。")]),O,s("p",null,[n("当 "),e(a,{to:"/computers/commands/git/git_fetch.html"},{default:t(()=>[n("git fetch")]),_:1}),n(" 命令从服务器上抓取本地没有的数据时，它并不会修改工作目录中的内容。它只会获取数据然后让您自己合并。而 "),e(a,{to:"/computers/commands/git/git_pull.html"},{default:t(()=>[n("git pull")]),_:1}),n(" 命令在大多数情况下它的含义是一个 "),e(a,{to:"/computers/commands/git/git_fetch.html"},{default:t(()=>[n("git fetch")]),_:1}),n(" 紧接着一个 "),e(a,{to:"/computers/commands/git/git_merge.html"},{default:t(()=>[n("git merge")]),_:1}),n(" 命令。 如果有一个设置好的跟踪分支，不管它是显式地设置还是通过 "),Y,n(" 或 "),K,n(" 命令为您创建的，"),W,n(" 都会查找当前分支所跟踪的服务器与分支，从服务器上抓取数据然后尝试合并入那个远程分支。")]),s("p",null,[n("由于 "),e(a,{to:"/computers/commands/git/git_pull.html"},{default:t(()=>[n("git pull")]),_:1}),n(" 的魔法经常令人困惑所以通常单独显式地使用 "),z,n(" 与 "),J,n(" 命令会更好一些。")]),P,s("p",null,[n("假设您已经通过远程分支做完所有的工作了——也就是说您和您的协作者已经完成了一个特性，并且将其合并到了远程仓库的 "),Q,n(" 分支（或任何其他稳定代码分支）。可以运行带有 "),X,n(" 选项的 "),e(a,{to:"/computers/commands/git/git_pull.html"},{default:t(()=>[n("git push")]),_:1}),n(" 命令来删除一个远程分支。")]),Z,s("p",null,[n("提示 "),$,n(" 文件合并冲突，也可以通过 "),e(a,{to:"/computers/commands/git/git_status.html"},{default:t(()=>[n("git status")]),_:1}),n(" 命令查看：")]),nn,s("p",null,[n("上述的冲突解决方案仅保留了其中一个分支的修改，并且 "),sn,n(" 、"),an,n(" 和 "),en,n(" 这些行被完全删除了。在您解决了所有文件里的冲突之后，对每个文件使用 "),e(a,{to:"/computers/commands/git/git_add.html"},{default:t(()=>[n("git add")]),_:1}),n(" 命令来将其标记为冲突已解决。一旦暂存这些原本有冲突的文件，Git 就会将它们标记为冲突已解决。")]),tn])}const rn=c(p,[["render",cn],["__file","branch.html.vue"]]);export{rn as default};
