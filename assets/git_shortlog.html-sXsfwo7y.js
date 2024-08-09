import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as a,f as s}from"./app-pi3g2Iwn.js";const t={},i=s(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git shortlog</code> 用于总结仓库中的提交历史，并按照提交者进行分组和汇总。这个命令主要用于生成一个简洁的报告，显示每个提交者所做的提交数量以及相关的提交信息。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>-n, --numbered</code></td><td style="text-align:left;">根据每个作者的提交数量对输出进行排序，而不是按照作者的字母顺序</td></tr><tr><td style="text-align:center;"><code>-s, --summary</code></td><td style="text-align:left;">抑制提交描述，只提供提交计数摘要</td></tr><tr><td style="text-align:center;"><code>-e, --email</code></td><td style="text-align:left;">显示每个作者的电子邮件地址</td></tr><tr><td style="text-align:center;"><code>--format[=&lt;格式&gt;]</code></td><td style="text-align:left;">代替提交主题，使用一些其他信息来描述每个提交</td></tr><tr><td style="text-align:center;"><code>--group=&lt;type&gt;</code></td><td style="text-align:left;">根据 <code>&lt;type&gt;</code> 对提交进行分组。如：<code>author</code>、<code>committer</code>、<code>trailer:&lt;field&gt;</code>、<code>format:&lt;format&gt;</code></td></tr><tr><td style="text-align:center;"><code>-c, --committer</code></td><td style="text-align:left;">这是 <code>--group=committer</code> 的一个别名</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="按提交者数量显示" tabindex="-1"><a class="header-anchor" href="#按提交者数量显示" aria-hidden="true">#</a> 按提交者数量显示</h3><p>例如：按提交者数量显示，由大到小排序。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> shortlog <span class="token parameter variable">-8</span> <span class="token parameter variable">-n</span>

Administrator <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>:
      change test01.txt
      <span class="token function">add</span> test03.txt
      解决合并冲突
      change <span class="token function">file</span>

zhang san <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>:
      change test01.txt
      change test01.txt
      change <span class="token function">file</span>

qingshan <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>:
      change test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="只提供提交计数摘要" tabindex="-1"><a class="header-anchor" href="#只提供提交计数摘要" aria-hidden="true">#</a> 只提供提交计数摘要</h3><p>例如：抑制提交描述，只提供提交计数摘要。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> shortlog <span class="token parameter variable">-8</span> <span class="token parameter variable">-s</span>
     <span class="token number">4</span>  Administrator
     <span class="token number">1</span>  qingshan
     <span class="token number">3</span>  zhang san
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="按指定格式显示" tabindex="-1"><a class="header-anchor" href="#按指定格式显示" aria-hidden="true">#</a> 按指定格式显示</h3><p>例如：只显示简短的 <code>commit id</code> 和标题行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> shortlog <span class="token parameter variable">-8</span> <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token string">&quot;%h %s&quot;</span>
Administrator <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>:
      114fbb1 change test01.txt
      097351d <span class="token function">add</span> test03.txt
      453f5ff 解决合并冲突
      0d01fc1 change <span class="token function">file</span>

qingshan <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>:
      0f16cb6 change test01.txt

zhang san <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>:
      1d6b44c change test01.txt
      b82b21c change test01.txt
      52e58a9 change <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),d=[i];function l(c,r){return e(),a("div",null,d)}const u=n(t,[["render",l],["__file","git_shortlog.html.vue"]]);export{u as default};
