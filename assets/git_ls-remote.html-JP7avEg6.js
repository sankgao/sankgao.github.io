import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,f as n}from"./app-zEmCQ_vD.js";const t={},d=n(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git ls-remote</code> 用于列出给定远程仓库中所有可用的引用（通常是分支和标签）以及它们对应的最新提交对象的 SHA-1 哈希值。这个命令非常有用，尤其是当您想要查看远程仓库中所有分支的最新提交而不克隆整个仓库时。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>&lt;repo&gt;</code></td><td style="text-align:left;">查询的 “远程” 版本库。这个参数可以是一个 URL，也可以是一个远程的名称</td></tr><tr><td style="text-align:center;"><code>-h, --heads</code></td><td style="text-align:left;">显示存储在 <code>refs/heads</code> 中的引用</td></tr><tr><td style="text-align:center;"><code>-t, --tags</code></td><td style="text-align:left;">显示存储在 <code>refs/tags</code> 中的引用</td></tr><tr><td style="text-align:center;"><code>--refs</code></td><td style="text-align:left;">在输出中不显示剥离的标签或像 HEAD 这样的伪引用</td></tr><tr><td style="text-align:center;"><code>-q, --quiet</code></td><td style="text-align:left;">不将远程 URL 打印到标准错误流</td></tr><tr><td style="text-align:center;"><code>&lt;patterns&gt;</code></td><td style="text-align:left;">显示匹配一个或多个给定模式的引用</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>例如：列出本地仓库所有引用，包括标签和伪引用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ls-remote

From /home/qingshan/projects/git_tutorials.git
4b0390e8a8a24305d1a54fb8c2c2b1b06b7f78af        HEAD
4b0390e8a8a24305d1a54fb8c2c2b1b06b7f78af        refs/heads/dev
4b0390e8a8a24305d1a54fb8c2c2b1b06b7f78af        refs/heads/main
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.0
cdb44ad37126f01cd0cd3bfbfd5c6c52ec9ba6c0        refs/tags/v1.0.1
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.1^<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：列出指定仓库的所有分支和标签及其最新的提交哈希值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ls-remote /home/qingshan/projects/git_tutorials.git

4b0390e8a8a24305d1a54fb8c2c2b1b06b7f78af        HEAD
4b0390e8a8a24305d1a54fb8c2c2b1b06b7f78af        refs/heads/dev
4b0390e8a8a24305d1a54fb8c2c2b1b06b7f78af        refs/heads/main
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.0
cdb44ad37126f01cd0cd3bfbfd5c6c52ec9ba6c0        refs/tags/v1.0.1
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.1^<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：列出指定仓库与给定模式匹配的所有引用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ls-remote /home/qingshan/projects/git_tutorials.git *<span class="token punctuation">}</span>

d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.1^<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：列出存储在 <code>refs/tags</code> 中的引用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ls-remote <span class="token parameter variable">-t</span>

From /home/qingshan/projects/git_tutorials.git
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.0
cdb44ad37126f01cd0cd3bfbfd5c6c52ec9ba6c0        refs/tags/v1.0.1
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.1^<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：列出存储在 <code>refs/tags</code> 中的引用，但不显示剥离的标签或像 HEAD 这样的伪引用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ls-remote <span class="token parameter variable">-t</span> <span class="token parameter variable">--refs</span>

From /home/qingshan/projects/git_tutorials.git
d624805693044bc4921d1224327638549231e616        refs/tags/v1.0.0
cdb44ad37126f01cd0cd3bfbfd5c6c52ec9ba6c0        refs/tags/v1.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),i=[d];function c(l,r){return a(),s("div",null,i)}const v=e(t,[["render",c],["__file","git_ls-remote.html.vue"]]);export{v as default};
