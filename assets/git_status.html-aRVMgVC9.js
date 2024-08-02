import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,f as t}from"./app-4rUcao6b.js";const a={},i=t(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git stash</code> 用于显示工作区和暂存区的状态。可以查看当前仓库的哪些文件已经被修改、哪些文件是新添加的、哪些文件已被删除，以及哪些文件已经暂存准备提交等信息。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>-s, --short</code></td><td style="text-align:left;">以简短的形式给出输出</td></tr><tr><td style="text-align:center;"><code>-b, --branch</code></td><td style="text-align:left;">即使在简短的形式中也要显示分支和跟踪信息</td></tr><tr><td style="text-align:center;"><code>--show-stash</code></td><td style="text-align:left;">显示当前状态的条目数量</td></tr><tr><td style="text-align:center;"><code>--long</code></td><td style="text-align:left;">给出长格式的输出。这是默认的</td></tr><tr><td style="text-align:center;"><code>-v, --verbose</code></td><td style="text-align:left;">除了显示被修改的文件名外，还显示被分阶段提交的文本差异（即，像<code>git diff --cached</code>的输出）<br>如果 <code>-v</code> 被指定了两次，那么也会显示工作区中尚未分阶段的变化（即，像 <code>git diff</code> 的输出）</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="查看当前状态" tabindex="-1"><a class="header-anchor" href="#查看当前状态" aria-hidden="true">#</a> 查看当前状态</h3><p>例如：查看当前工作区和暂存区的状态。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Your branch is up to <span class="token function">date</span> with <span class="token string">&#39;origin/main&#39;</span><span class="token builtin class-name">.</span>

Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>

        modified:   test01.txt

Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

        modified:   test03.txt

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>

        test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简短的形式给出输出" tabindex="-1"><a class="header-anchor" href="#简短的形式给出输出" aria-hidden="true">#</a> 简短的形式给出输出</h3><p>例如：使用 <code>-s</code> 或 <code>--short</code> 选项，查看当前工作区和暂存区的状态，以简短的形式输出。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status <span class="token parameter variable">-s</span>

M  test01.txt
 M test03.txt
?? test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件前面有两个字段，第一个字段显示暂存区（索引）的状态；第二个字段显示工作区的状态。例如：<code>M test01.txt</code> 中 <code>M</code> 表示 <code>test01.txt</code> 文件已修改并添加到暂存区（索引）。</p><p><strong>常用字段及含义：</strong></p><ul><li><strong>??</strong>：未跟踪的文件</li><li><strong>M</strong>：修改过的文件</li><li><strong>T</strong>：文件类型已更改（常规文件、符号链接或子模块）</li><li><strong>A</strong>：新添加的文件</li><li><strong>D</strong>：已删除的文件</li><li><strong>R</strong>：重命名的文件</li><li><strong>C</strong>：已复制的文件（如果配置选项 <code>status.renames</code> 设置为 “副本”）</li><li><strong>U</strong>：已更新但未合并的文件</li></ul><h3 id="在简短的形式中显示分支和跟踪信息" tabindex="-1"><a class="header-anchor" href="#在简短的形式中显示分支和跟踪信息" aria-hidden="true">#</a> 在简短的形式中显示分支和跟踪信息</h3><p>例如：使用 <code>-b</code> 或 <code>--branch</code> 选项，即使在简短的形式中也要显示分支和跟踪信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status <span class="token parameter variable">-sb</span>

<span class="token comment">## main...origin/main</span>
M  test01.txt
 M test03.txt
?? test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示当前状态的条目数量" tabindex="-1"><a class="header-anchor" href="#显示当前状态的条目数量" aria-hidden="true">#</a> 显示当前状态的条目数量</h3><p>例如：使用 <code>--show-stash</code> 选项，显示当前状态的条目数量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status --show-stash

<span class="token comment"># ...省略部分内容</span>
Your stash currently has <span class="token number">3</span> entries
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示被分阶段提交的文本差异" tabindex="-1"><a class="header-anchor" href="#显示被分阶段提交的文本差异" aria-hidden="true">#</a> 显示被分阶段提交的文本差异</h3><p>例如：使用 <code>-v</code> 选项，显示被分阶段提交的文本差异。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23),d=[i];function l(c,r){return s(),n("div",null,d)}const h=e(a,[["render",l],["__file","git_status.html.vue"]]);export{h as default};
