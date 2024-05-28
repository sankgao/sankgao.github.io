import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as a,f as t}from"./app-HgYDRmp_.js";const s={},n=t(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git ls-remote</code> 用于列出给定远程仓库中所有可用的引用（通常是分支和标签）以及它们对应的最新提交对象的 SHA-1 哈希值。这个命令非常有用，尤其是当您想要查看远程仓库中所有分支的最新提交而不克隆整个仓库时。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>&lt;repo&gt;</code></td><td style="text-align:left;">查询的 “远程” 版本库。这个参数可以是一个 URL，也可以是一个远程的名称</td></tr><tr><td style="text-align:center;"><code>-h, --heads</code></td><td style="text-align:left;">显示存储在 <code>refs/heads</code> 中的引用</td></tr><tr><td style="text-align:center;"><code>-t, --tags</code></td><td style="text-align:left;">显示存储在 <code>refs/tags</code> 中的引用</td></tr><tr><td style="text-align:center;"><code>--refs</code></td><td style="text-align:left;">在输出中不显示剥离的标签或像 HEAD 这样的伪引用</td></tr><tr><td style="text-align:center;"><code>-q, --quiet</code></td><td style="text-align:left;">不将远程 URL 打印到标准错误流</td></tr><tr><td style="text-align:center;"><code>&lt;patterns&gt;</code></td><td style="text-align:left;">显示匹配一个或多个给定模式的引用</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>例如：列出本地仓库所有引用，包括标签和伪引用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ls-remote

From https://github.com/schacon/ticgit.git
847256809a3d518cd36b8f81859401416fe8d945        HEAD
847256809a3d518cd36b8f81859401416fe8d945        refs/heads/master
c6edfec5c46cc0d7447d6d6db388a76d56ad3342        refs/heads/ticgit
e2a0853642175388ab282d8b64a14ef24c6b8d29        refs/pull/10/head
e2a0853642175388ab282d8b64a14ef24c6b8d29        refs/pull/11/head
af5d713ba28c4ae79c6d324b638b8495488c66f9        refs/pull/13/merge
c6edfec5c46cc0d7447d6d6db388a76d56ad3342        refs/pull/20/head
8d04e20c1cb0be8852f3be28a7b1d99962841354        refs/pull/20/merge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：列出指定仓库的所有分支和标签及其最新的提交哈希值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ls-remote https://github.com/schacon/ticgit.git

847256809a3d518cd36b8f81859401416fe8d945        HEAD
847256809a3d518cd36b8f81859401416fe8d945        refs/heads/master
c6edfec5c46cc0d7447d6d6db388a76d56ad3342        refs/heads/ticgit
e2a0853642175388ab282d8b64a14ef24c6b8d29        refs/pull/10/head
e2a0853642175388ab282d8b64a14ef24c6b8d29        refs/pull/11/head
af5d713ba28c4ae79c6d324b638b8495488c66f9        refs/pull/13/merge
c6edfec5c46cc0d7447d6d6db388a76d56ad3342        refs/pull/20/head
8d04e20c1cb0be8852f3be28a7b1d99962841354        refs/pull/20/merge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：列出指定仓库与给定模式匹配的所有引用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ls-remote https://github.com/schacon/ticgit.git master <span class="token number">20</span> *head

847256809a3d518cd36b8f81859401416fe8d945        HEAD
847256809a3d518cd36b8f81859401416fe8d945        refs/heads/master
e2a0853642175388ab282d8b64a14ef24c6b8d29        refs/pull/10/head
e2a0853642175388ab282d8b64a14ef24c6b8d29        refs/pull/11/head
c6edfec5c46cc0d7447d6d6db388a76d56ad3342        refs/pull/20/head
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),i=[n];function l(c,r){return d(),a("div",null,i)}const u=e(s,[["render",l],["__file","git_ls-remote.html.vue"]]);export{u as default};
