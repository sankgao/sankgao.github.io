import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as t,f as s}from"./app-as9jNl_I.js";const a={},i=s(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git rm</code> 用于从工作目录和暂存区中删除文件，并将这次删除的操作记录下来。在删除成功完成后，索引（暂存区）就会被更新，但更改仍需要进行提交才能生效。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>-f, --force</code></td><td style="text-align:left;">强制删除文件</td></tr><tr><td style="text-align:center;"><code>-n, --dry-run</code></td><td style="text-align:left;">只显示要删除的文件，而不做任何改变</td></tr><tr><td style="text-align:center;"><code>-r</code></td><td style="text-align:left;">删除目录</td></tr><tr><td style="text-align:center;"><code>--</code></td><td style="text-align:left;">用于分离命令行选项和文件列表（当文件名可能被误认为命令行选项时非常有用）</td></tr><tr><td style="text-align:center;"><code>--cached</code></td><td style="text-align:left;">从 Git 版本控制中删除对文件的跟踪，但保留在当前工作区中</td></tr><tr><td style="text-align:center;"><code>-q, --quiet</code></td><td style="text-align:left;">不显示输出内容</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h3><p>要删除的文件或目录不能正在更改，否则无法删除。</p><p>例如：从工作区和暂存区中删除 <code>test01.txt</code> 文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> test01.txt

<span class="token function">rm</span> <span class="token string">&#39;test01.txt&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看文件状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        deleted:    test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制删除文件" tabindex="-1"><a class="header-anchor" href="#强制删除文件" aria-hidden="true">#</a> 强制删除文件</h3><p>例如：强制删除 <code>test01.txt</code> 文件，不管该文件是否正在更改。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> test01.txt

<span class="token function">rm</span> <span class="token string">&#39;test01.txt&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除目录" tabindex="-1"><a class="header-anchor" href="#删除目录" aria-hidden="true">#</a> 删除目录</h3><p>例如：从工作区和暂存区中删除 <code>demo</code> 目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> demo

<span class="token function">rm</span> <span class="token string">&#39;demo&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除跟踪文件" tabindex="-1"><a class="header-anchor" href="#删除跟踪文件" aria-hidden="true">#</a> 删除跟踪文件</h3><p>例如：从 Git 版本控制中删除对 <code>test01.txt</code> 文件的跟踪，但保留在工作区中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> test01.txt

<span class="token function">rm</span> <span class="token string">&#39;test01.txt&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看文件状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        deleted:    test01.txt

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),d=[i];function l(c,r){return n(),t("div",null,d)}const p=e(a,[["render",l],["__file","git_rm.html.vue"]]);export{p as default};
