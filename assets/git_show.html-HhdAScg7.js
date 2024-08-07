import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,f as s}from"./app-6H9zQLzr.js";const i={},d=s(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git show</code> 用于查看提交历史和展示特定提交的详细信息。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>--stat</code></td><td style="text-align:left;">显示某次提交的统计信息</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="显示最后一次提交的详细信息" tabindex="-1"><a class="header-anchor" href="#显示最后一次提交的详细信息" aria-hidden="true">#</a> 显示最后一次提交的详细信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show

commit 52e58a9d5a1e0f8f88842b2919d5c08d6e7111ad <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, origin/main, origin/HEAD<span class="token punctuation">)</span>
Merge: b82b21c 0d01fc1
Author: zhang san <span class="token operator">&lt;</span>zhang san@email.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">17</span> <span class="token number">17</span>:00:36 <span class="token number">2024</span> +0800

    change <span class="token function">file</span>

<span class="token function">diff</span> <span class="token parameter variable">--cc</span> test01.txt
index 42cd9bc,27ca57f<span class="token punctuation">..</span>169e37f
--- a/test01.txt
+++ b/test01.txt
@@@ -1,4 -1,2 +1,3 @@@
  test01
  test01
 +test01
- test01test01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示特定提交的详细信息" tabindex="-1"><a class="header-anchor" href="#显示特定提交的详细信息" aria-hidden="true">#</a> 显示特定提交的详细信息</h3><p>例如：显示 <code>52e58a</code> 提交的详细信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show 52e58a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示某个文件的改动" tabindex="-1"><a class="header-anchor" href="#显示某个文件的改动" aria-hidden="true">#</a> 显示某个文件的改动</h3><p>例如：显示 <code>test01.txt</code> 文件最后一次提交的详细信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示指定标签信息" tabindex="-1"><a class="header-anchor" href="#显示指定标签信息" aria-hidden="true">#</a> 显示指定标签信息</h3><p>例如：显示 <code>v1.0.0</code> 标签详细信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show v1.0.0

tag v1.0.0
Tagger: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
Date:   Wed May <span class="token number">15</span> <span class="token number">13</span>:24:55 <span class="token number">2024</span> +0800

Version <span class="token number">1.0</span>.0
commit a6c6aa91ec80e18add652523bf225760270a18ff <span class="token punctuation">(</span>tag: v1.1.0, tag: v1.0.0, origin/test, <span class="token builtin class-name">test</span><span class="token punctuation">)</span>
Author: Administrator <span class="token operator">&lt;</span>admin@sis.sh.cn<span class="token operator">&gt;</span>
Date:   Tue May <span class="token number">14</span> <span class="token number">10</span>:58:02 <span class="token number">2024</span> +0800

    <span class="token function">add</span> test02.txt

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/test02.txt b/test02.txt
new <span class="token function">file</span> mode <span class="token number">100644</span>
index 0000000<span class="token punctuation">..</span>48fdd5c
--- /dev/null
+++ b/test02.txt
@@ -0,0 +1 @@
+test02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示特定提交中某个文件的改动" tabindex="-1"><a class="header-anchor" href="#显示特定提交中某个文件的改动" aria-hidden="true">#</a> 显示特定提交中某个文件的改动</h3><p>例如：显示 <code>52e58a</code> 提交中 <code>test01.txt</code> 文件的详细信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show 52e58a:test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示最近的几次提交" tabindex="-1"><a class="header-anchor" href="#显示最近的几次提交" aria-hidden="true">#</a> 显示最近的几次提交</h3><p>例如：显示最近的 <code>3</code> 次的提交。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show <span class="token parameter variable">-3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示某个分支的最后一次提交" tabindex="-1"><a class="header-anchor" href="#显示某个分支的最后一次提交" aria-hidden="true">#</a> 显示某个分支的最后一次提交</h3><p>例如：显示 <code>dev</code> 分支的最后一次提交。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示某个标签的信息" tabindex="-1"><a class="header-anchor" href="#显示某个标签的信息" aria-hidden="true">#</a> 显示某个标签的信息</h3><p>例如：显示 <code>v1.0.0</code> 标签的信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示某次提交的统计信息" tabindex="-1"><a class="header-anchor" href="#显示某次提交的统计信息" aria-hidden="true">#</a> 显示某次提交的统计信息</h3><p>例如：显示 <code>52e58a</code> 提交的统计信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show <span class="token parameter variable">--stat</span> 52e58a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="从历史中恢复文件" tabindex="-1"><a class="header-anchor" href="#从历史中恢复文件" aria-hidden="true">#</a> 从历史中恢复文件</h3><p>例如：从历史（前一次提交）中恢复 <code>welcome.txt</code> 文件到当前工作区中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show HEAD~1:welcome.txt <span class="token operator">&gt;</span> welcome.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,34),t=[d];function l(c,r){return e(),n("div",null,t)}const p=a(i,[["render",l],["__file","git_show.html.vue"]]);export{p as default};
