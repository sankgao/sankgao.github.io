import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o,c as p,b as s,e as n,d as e,w as t,f as a}from"./app-edJli2fF.js";const r={},u=a(`<p>像其它版本控制系统（VCS）一样，Git 可以给仓库历史中的某一个提交打上标签，以示重要。比较有代表性的是人们会使用这个功能来标记发布结点（<code>v1.0.0</code>、<code>v2.0.0</code> 等等）。</p><p>在发布一个版本时，通常先在版本库中打一个标签（<code>tag</code>），这样就确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。</p><p>Git 的标签其实就是指向某个 <code>commit</code> 的指针（跟分支很像，但分支可以移动，标签不能移动），所以创建和删除标签都是瞬间完成的。</p><h2 id="创建标签" tabindex="-1"><a class="header-anchor" href="#创建标签" aria-hidden="true">#</a> 创建标签</h2><p>Git 支持两种标签：<strong>轻量标签</strong>（lightweight）与 <strong>附注标签</strong>（annotated）。</p><p>轻量标签很像一个不会改变的分支，它只是某个特定提交的引用，而附注标签是存储在 Git 数据库中的一个完整对象，它们是可以被校验的，其中包含打标签者的名字、电子邮件地址、日期时间，此外还有一个标签信息，并且可以使用 GNU Privacy Guard（GPG）签名并验证。</p><p>通常会建议创建附注标签，这样您可以拥有以上所有信息。但是如果您只是想用一个临时的标签，或者因为某些原因不想要保存这些信息，那么也可以用轻量标签。</p><h3 id="轻量标签" tabindex="-1"><a class="header-anchor" href="#轻量标签" aria-hidden="true">#</a> 轻量标签</h3><p>轻量标签本质上是将提交校验和存储到一个文件中，没有保存任何其他信息。创建轻量标签，不需要使用 <code>-a</code>、<code>-s</code> 或 <code>-m</code> 选项，只需要提供标签名字。</p><p>例如：创建 <code>v1.0.0</code> 轻量标签。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="附注标签" tabindex="-1"><a class="header-anchor" href="#附注标签" aria-hidden="true">#</a> 附注标签</h3><p>在 Git 中创建附注标签十分简单。最简单的方式是当您在运行 <code>tag</code> 命令时指定 <code>-a</code> 选项，<code>-m</code> 选项指定了一条将会存储在标签中的信息。如果没有为附注标签指定一条信息，Git 会启动编辑器要求您输入信息。</p><p>例如：创建带描述的标签。<code>-a</code> 用于创建带注释的标签；<code>-m</code> 添加注释信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.0.1 <span class="token parameter variable">-m</span> <span class="token string">&#39;Version 1.0.1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看标签" tabindex="-1"><a class="header-anchor" href="#查看标签" aria-hidden="true">#</a> 查看标签</h2>`,16),v=s("code",null,"-l, --list",-1),m=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag

v1.0.0
v1.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个命令以字母顺序列出标签，但是它们显示的顺序并不重要。</p><p>也可以按照特定的模式查找标签，但按特定模式查找标签必须带 <code>-l</code> 或 <code>--list</code> 选项。例如：查找以 <code>1</code> 结尾的标签。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-l</span> <span class="token string">&#39;*1&#39;</span>

v1.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),b=a(`<ul><li><p>查看轻量标签，不会看到额外的标签信息，只显示提交信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show v1.0.0

commit d624805693044bc4921d1224327638549231e616 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, tag: v1.0.1, tag: v1.0.0, dev<span class="token punctuation">)</span>
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Wed May <span class="token number">29</span> <span class="token number">17</span>:27:42 <span class="token number">2024</span> +0800

    modified <span class="token function">file</span> all, dev rebase main

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test01.txt b/test01.txt

<span class="token comment"># ......省略部分内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看附注标签，可以看到标签信息和与之对应的提交信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show v1.0.0

tag v1.0.1
Tagger: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Wed May <span class="token number">29</span> <span class="token number">18</span>:25:51 <span class="token number">2024</span> +0800

Version <span class="token number">1.0</span>.1

commit d624805693044bc4921d1224327638549231e616 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, tag: v1.0.1, tag: v1.0.0, dev<span class="token punctuation">)</span>
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Wed May <span class="token number">29</span> <span class="token number">17</span>:27:42 <span class="token number">2024</span> +0800

    modified <span class="token function">file</span> all, dev rebase main
<span class="token comment"># ......省略部分内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="后期打标签" tabindex="-1"><a class="header-anchor" href="#后期打标签" aria-hidden="true">#</a> 后期打标签</h2><p>也可以对过去的提交打标签。假设提交历史是这样的：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-8</span> <span class="token parameter variable">--oneline</span>

d624805 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, tag: v1.0.1, tag: v1.0.0, dev<span class="token punctuation">)</span> modified <span class="token function">file</span> all, dev rebase main
5a1d206 modified test01.txt
4b0390e <span class="token punctuation">(</span>origin/main, origin/dev, test, develop<span class="token punctuation">)</span> merge dev
ad6950e modified test02.txt
6a63f37 modified test02.txt
0f59771 <span class="token function">add</span> test01.txt
7333fb5 将 test01.txt 文件重命名为 test02.txt，并修改文件内容
99114d6 modified test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：在 <code>add test01.txt</code> 提交处忘记打标签了，需要在 <code>git tag</code> 命令的末尾指定提交的校验和（或部分校验和）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.0 <span class="token parameter variable">-m</span> <span class="token string">&#39;Version 1.0&#39;</span> 0f59771
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看在那次提交上打的标签：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag

v1.0
v1.0.0
v1.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show v1.0

tag v1.0
Tagger: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Wed May <span class="token number">29</span> <span class="token number">18</span>:55:34 <span class="token number">2024</span> +0800

Version <span class="token number">1.0</span>

commit 0f59771b62084472aad9d4cd4b8799a8b1889794 <span class="token punctuation">(</span>tag: v1.0<span class="token punctuation">)</span>
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Tue May <span class="token number">28</span> 09:56:52 <span class="token number">2024</span> +0800

    <span class="token function">add</span> test01.txt
<span class="token comment"># ......省略部分内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="共享标签" tabindex="-1"><a class="header-anchor" href="#共享标签" aria-hidden="true">#</a> 共享标签</h2>`,10),g=s("code",null,"git push origin <tagname>",-1),k=a(`<p>例如：指定推送 <code>v1.0</code> 标签。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin v1.0

Enumerating objects: <span class="token number">1</span>, done.
Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">1</span>/1<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">1</span>/1<span class="token punctuation">)</span>, <span class="token number">163</span> bytes <span class="token operator">|</span> <span class="token number">163.00</span> KiB/s, done.
Total <span class="token number">1</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span> <span class="token punctuation">(</span>from <span class="token number">0</span><span class="token punctuation">)</span>
To /home/sankgao/projects/git_tutorials.git
 * <span class="token punctuation">[</span>new tag<span class="token punctuation">]</span>         v1.0 -<span class="token operator">&gt;</span> v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：指定推送所有标签。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin <span class="token parameter variable">--tags</span>

Enumerating objects: <span class="token number">11</span>, done.
Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">11</span>/11<span class="token punctuation">)</span>, done.
Delta compression using up to <span class="token number">2</span> threads
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">5</span>/5<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">8</span>/8<span class="token punctuation">)</span>, <span class="token number">779</span> bytes <span class="token operator">|</span> <span class="token number">779.00</span> KiB/s, done.
Total <span class="token number">8</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span> <span class="token punctuation">(</span>from <span class="token number">0</span><span class="token punctuation">)</span>
To /home/sankgao/projects/git_tutorials.git
 * <span class="token punctuation">[</span>new tag<span class="token punctuation">]</span>         v1.0.0 -<span class="token operator">&gt;</span> v1.0.0
 * <span class="token punctuation">[</span>new tag<span class="token punctuation">]</span>         v1.0.1 -<span class="token operator">&gt;</span> v1.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看远程标签：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ls-remote <span class="token parameter variable">--tags</span> origin

5a893e8974ad8972aa13ed61a19329c6b6317651        refs/tags/v1.0
0f59771b62084472aad9d4cd4b8799a8b1889794        refs/tags/v1.0^<span class="token punctuation">{</span><span class="token punctuation">}</span>
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.0
cdb44ad37126f01cd0cd3bfbfd5c6c52ec9ba6c0        refs/tags/v1.0.1
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.1^<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),h={class:"hint-container info"},f=s("p",{class:"hint-container-title"},"相关信息",-1),x=s("code",null,"^{}",-1),_={href:"https://mirrors.edge.kernel.org/pub/software/scm/git/docs/gitrevisions.html#_specifying_revisions",target:"_blank",rel:"noopener noreferrer"},w=a(`<p>现在，当其他人从仓库中克隆或拉取，他们也能得到您的那些标签。</p><h2 id="删除标签" tabindex="-1"><a class="header-anchor" href="#删除标签" aria-hidden="true">#</a> 删除标签</h2><p>要删除本地仓库上的标签，可以使用命令 <code>git tag -d &lt;tagname&gt;</code>。例如：删除一个轻量标签 <code>v1.0</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-d</span> v1.0

Deleted tag <span class="token string">&#39;v1.0&#39;</span> <span class="token punctuation">(</span>was 5a893e8<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述命令并不会从任何远程仓库中移除这个标签，可以使用 <code>git push &lt;remote&gt; :refs/tags/&lt;tagname&gt;</code> 命令来更新您的远程仓库。</p><p>例如：更新远程仓库，使远程仓库删除 <code>v1.0</code> 标签。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin :refs/tags/v1.0

To /home/sankgao/projects/git_tutorials.git
 - <span class="token punctuation">[</span>deleted<span class="token punctuation">]</span>         v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这种操作的含义是，将冒号前面的空值推送到远程标签名，从而高效地删除它。</p><p>也可以使用另一种方式删除远程标签，例如：直接删除远程 <code>v1.0.1</code> 标签。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> v1.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="检出标签" tabindex="-1"><a class="header-anchor" href="#检出标签" aria-hidden="true">#</a> 检出标签</h2><p>如果您想查看某个标签所指向的文件版本，可以使用 <code>git checkout</code> 命令，虽然这会使您的仓库处于 “分离头指针（detached HEAD）” 的状态——这个状态有些不好的副作用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout v1.0.0

Note: switching to <span class="token string">&#39;v1.0.0&#39;</span><span class="token builtin class-name">.</span>

You are <span class="token keyword">in</span> <span class="token string">&#39;detached HEAD&#39;</span> state. You can <span class="token function">look</span> around, <span class="token function">make</span> experimental
changes and commit them, and you can discard any commits you <span class="token function">make</span> <span class="token keyword">in</span> this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
<span class="token keyword">do</span> so <span class="token punctuation">(</span>now or later<span class="token punctuation">)</span> by using <span class="token parameter variable">-c</span> with the switch command. Example:

  <span class="token function">git</span> switch <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>new-branch-name<span class="token operator">&gt;</span>

Or undo this operation with:

  <span class="token function">git</span> switch -

Turn off this advice by setting config variable advice.detachedHead to <span class="token boolean">false</span>

HEAD is now at d624805 modified <span class="token function">file</span> all, dev rebase main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看当前分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch

* <span class="token punctuation">(</span>HEAD detached at v1.0.0<span class="token punctuation">)</span>
  dev
  develop
  main
  <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 “分离头指针” 状态下，如果您做了某些更改然后提交它们，标签不会发生变化，但您的新提交将不属于任何分支，并且将无法访问，除非通过确切的提交哈希才能访问。因此，如果您需要进行更改，例如：您要修复旧版本中的错误，那么通常需要创建一个新分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> version2 v2.0.0

Switched to a new branch <span class="token string">&#39;version2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在这之后又进行了一次提交，<code>version2</code> 分支就会因为这个改动向前移动，此时它就会和 <code>v2.0.0</code> 标签稍微有些不同，这时就要当心了。</p>`,18);function y(G,D){const i=l("RouterLink"),d=l("ExternalLinkIcon");return o(),p("div",null,[u,s("p",null,[n("在 Git 中列出已有的标签非常简单，只需要输入 "),e(i,{to:"/computers/commands/git/git_tag.html"},{default:t(()=>[n("git tag")]),_:1}),n(" 命令（可带上可选的 "),v,n(" 选项）。例如：查看当前仓库标签列表。")]),m,s("p",null,[n("通过使用 "),e(i,{to:"/computers/commands/git/git_show.html"},{default:t(()=>[n("git show")]),_:1}),n(" 命令可以看到标签信息和与之对应的提交信息。")]),b,s("p",null,[n("默认情况下，"),e(i,{to:"/computers/commands/git/git_push.html"},{default:t(()=>[n("git push")]),_:1}),n(" 命令并不会传送标签到远程仓库服务器上。在创建完标签后您必须显式地用 "),g,n(" 命令推送标签到共享服务器上。")]),k,s("div",h,[f,s("p",null,[x,n(" 表示该对象可能是一个标签，并递归地取消引用该标签，直到找到非标签对象。在 "),s("a",_,[n("gitrevisions"),e(d)]),n(" 中有描述。")])]),w])}const A=c(r,[["render",y],["__file","tag.html.vue"]]);export{A as default};
