import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,f as n}from"./app-2v6zNUCE.js";const c={},s=n(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git cherry-pick &lt;commit&gt;</code> 用于将指定的提交（<code>commit</code>）应用于其它分支。其中 <code>&lt;commit&gt;</code> 是您想要应用的提交的哈希值或分支名。执行此命令后，指定的提交会应用到当前分支上，并创建一个新的提交。</p><p>这允许开发者将一个分支上的特定更改复制到另一个分支，而不需要合并整个分支。这对于将特定的代码改动、修复或功能从一个分支移动到另一个分支非常有用。</p><p><code>git cherry-pick</code> 也支持一次转移多个提交，通过指定一系列的 <code>commit</code> 哈希值或使用范围选择来实现。</p><p>通过 <code>git cherry-pick</code> 创建的新提交会有不同的哈希值，尽管它们包含相同的更改。这是因为每个提交都包含其创建时的元数据，如：提交者信息、时间戳等，这些元数据在每次提交时都是唯一的。</p><p>使用 <code>git cherry-pick</code> 时，请确保理解其工作原理和潜在的影响，特别是在处理复杂的代码库或进行关键更改时。如果不确定，最好在操作前备份您的代码或在一个安全的分支上先进行测试。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>-e, --edit</code></td><td style="text-align:left;">在提交前编辑提交信息</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>例如：将 <code>dev</code> 分支下的所有提交记录，复制到 <code>main</code> 分支下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout main
<span class="token function">git</span> cherry-pick dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：将 <code>dev</code> 分支下的某一个提交记录，复制到 <code>main</code> 分支下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout main
<span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：将 <code>dev</code> 分支下的多个提交记录，复制到 <code>main</code> 分支下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout main
<span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commit<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token operator">&lt;</span>commit<span class="token operator"><span class="token file-descriptor important">4</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,15),i=[s];function d(o,r){return a(),t("div",null,i)}const h=e(c,[["render",d],["__file","git_cherry_pick.html.vue"]]);export{h as default};
