import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as t,c as i,b as l,e as n,d as o,w as d,f as r}from"./app-_83A8qgi.js";const c={},p=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log

commit 7df306b180568b13a9f7782f3575c8f06e4b1ed5 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main<span class="token punctuation">)</span>
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">24</span> <span class="token number">10</span>:43:10 <span class="token number">2024</span> +0800

    将 test01.txt 重命名为 test02.txt

commit 99114d61ea731daf4d5663aa77d83810a8c38680
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不传入任何参数的默认情况下，<code>git log</code> 会按时间先后顺序列出所有的提交，最近的更新排在最上面。这个命令会列出每个提交的 SHA-1 校验和、作者的名字和电子邮件地址、提交时间以及提交说明。</p><p><code>git log</code> 有许多选项，下面介绍几个常用的选项。</p><h2 id="限制显示的日志条目数量" tabindex="-1"><a class="header-anchor" href="#限制显示的日志条目数量" aria-hidden="true">#</a> 限制显示的日志条目数量</h2><p>使用 <code>-&lt;num&gt;</code> 或 <code>-n &lt;num&gt;</code> 选项，指定显示提交的 log 信息数量。</p><p>例如：只显示最近两次的提交。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-2</span>
<span class="token comment"># 或</span>
<span class="token function">git</span> log <span class="token parameter variable">-n</span> <span class="token number">2</span>

commit 7df306b180568b13a9f7782f3575c8f06e4b1ed5 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main<span class="token punctuation">)</span>
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">24</span> <span class="token number">10</span>:43:10 <span class="token number">2024</span> +0800

    将 test01.txt 重命名为 test02.txt

commit 99114d61ea731daf4d5663aa77d83810a8c38680
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Thu May <span class="token number">23</span> <span class="token number">16</span>:28:25 <span class="token number">2024</span> +0800

    modified test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="显示每次提交所引入的差异" tabindex="-1"><a class="header-anchor" href="#显示每次提交所引入的差异" aria-hidden="true">#</a> 显示每次提交所引入的差异</h2><p>使用 <code>-p</code> 或 <code>--patch</code> 选项，在提交信息后，显示每次提交的差异（按 <strong>补丁</strong> 的格式输出）。例如：显示最近两次提交所引入的差异</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-2</span> <span class="token parameter variable">-p</span>

commit 7df306b180568b13a9f7782f3575c8f06e4b1ed5 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main<span class="token punctuation">)</span>
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">24</span> <span class="token number">10</span>:43:10 <span class="token number">2024</span> +0800

    将 test01.txt 重命名为 test02.txt

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test01.txt b/test02.txt
similarity index <span class="token number">100</span>%
<span class="token function">rename</span> from test01.txt
<span class="token function">rename</span> to test02.txt

commit 99114d61ea731daf4d5663aa77d83810a8c38680
Author: Sank Gao <span class="token operator">&lt;</span>sankgao@example.com<span class="token operator">&gt;</span>
Date:   Thu May <span class="token number">23</span> <span class="token number">16</span>:28:25 <span class="token number">2024</span> +0800

    modified test01.txt

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test01.txt b/test01.txt
index fea590a<span class="token punctuation">..</span>f437e2d <span class="token number">100644</span>
--- a/test01.txt
+++ b/test01.txt
@@ -1,2 +1,3 @@
 test01
 test01test01
+test01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义记录的显示格式" tabindex="-1"><a class="header-anchor" href="#自定义记录的显示格式" aria-hidden="true">#</a> 自定义记录的显示格式</h2><p>使用 <code>--pretty=&lt;format&gt;</code> 或 <code>--format=&lt;format&gt;</code> 选项，可以自定义记录的显示格式。<code>format</code> 接受的常用格式占位符如下：</p><ul><li><strong>%n</strong>：换行</li><li><strong>%h</strong>：简短的提交哈希值</li><li><strong>%an</strong>：作者名称。通常不会进行任何特殊的处理或格式化。如果作者的名字中有空格或其他特殊字符，它们将原样输出</li><li><strong>%ae</strong>：作者电子邮箱。将其转换为小写形式输出，无论原始的电子邮件地址是大写、小写还是混合大小写</li><li><strong>%ad</strong>：作者修订日期。显示默认日期格式。例如：<code>Wed May 15 11:22:22 2024 +0800</code></li><li><strong>%ar</strong>：作者修订日期。显示相对于当前时间的日期。例如：<code>28 hours ago</code></li><li><strong>%cn</strong>：提交者名称。通常不会进行任何特殊的处理或格式化。如果提交者的名字中有空格或其他特殊字符，它们将原样输出</li><li><strong>%ce</strong>：提交者电子邮箱。将其转换为小写形式输出，无论原始的电子邮件地址是大写、小写还是混合大小写</li><li><strong>%cd</strong>：提交日期。显示默认日期格式。例如：<code>Wed May 15 11:22:22 2024 +0800</code></li><li><strong>%cr</strong>：提交日期。显示相对于当前时间的日期。例如：<code>28 hours ago</code></li><li><strong>%s</strong>：显示标题行</li><li><strong>%b</strong>：显示完整提交信息。如果只有标题行，没有完整提交信息，则显示空</li><li><strong>%B</strong>：显示标题行及完整提交信息</li></ul><p><strong>作者</strong> 指的是实际作出修改的人，<strong>提交者</strong> 指的是最后将此工作成果提交到仓库的人。</p><p>例如：自定义的格式历史记录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%h - %an - %ar: %s&quot;</span>

7df306b - Sank Gao - <span class="token number">45</span> minutes ago: 将 test01.txt 重命名为 test02.txt
99114d6 - Sank Gao - <span class="token number">19</span> hours ago: modified test01.txt
<span class="token number">2326575</span> - Sank Gao - <span class="token number">21</span> hours ago: change <span class="token function">file</span>
f3b9645 - Sank Gao - <span class="token number">25</span> hours ago: <span class="token function">add</span> test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function m(u,v){const s=e("RouterLink");return t(),i("div",null,[l("p",null,[n("在提交了若干更新，或者克隆了某个项目之后，如果想回顾提交历史。可以使用 "),o(s,{to:"/commands/git/git_log.html"},{default:d(()=>[n("git log")]),_:1}),n(" 命令。例如：")]),p])}const g=a(c,[["render",m],["__file","log.html.vue"]]);export{g as default};
