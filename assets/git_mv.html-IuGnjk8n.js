import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as a,f as n}from"./app-5tldNxZo.js";const s={},d=n(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git mv</code> 用于移动或重命名文件或目录，并将这次的操作记录下来。在移动成功完成后，索引（暂存区）就会被更新，但更改仍需要进行提交才能生效。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>-f, --force</code></td><td style="text-align:left;">强制移动或重命名文件，会覆盖目标文件</td></tr><tr><td style="text-align:center;"><code>-n, --dry-run</code></td><td style="text-align:left;">只显示要移动或重命名的文件，而不做任何改变</td></tr><tr><td style="text-align:center;"><code>-v, --verbose</code></td><td style="text-align:left;">显示详细信息</td></tr><tr><td style="text-align:center;"><code>-k</code></td><td style="text-align:left;">跳过可能导致错误条件的移动或重命名操作</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="重命名文件" tabindex="-1"><a class="header-anchor" href="#重命名文件" aria-hidden="true">#</a> 重命名文件</h3><p>例如：将 <code>test01.txt</code> 文件重命名为 <code>test02.txt</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">mv</span> test01.txt test02.txt 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看文件状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        renamed:    test01.txt -<span class="token operator">&gt;</span> test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移动文件" tabindex="-1"><a class="header-anchor" href="#移动文件" aria-hidden="true">#</a> 移动文件</h3><p>例如：将 <code>test01.txt</code> 文件移动到 <code>demo</code> 目录中，且 <code>demo</code> 目录必须存在。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">mv</span> test01.txt demo/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看文件状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

On branch main
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        renamed:    test01.txt -<span class="token operator">&gt;</span> demo/test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),i=[d];function c(l,r){return t(),a("div",null,i)}const h=e(s,[["render",c],["__file","git_mv.html.vue"]]);export{h as default};