import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as d,f as s}from"./app-FolHsyMV.js";const n={},i=s(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git rev-parse</code> 用于获取和处理各种 Git 对象（如：提交、树、标签等）的 SHA-1 哈希值或其他信息。这个命令在多种场景下都非常有用，特别是当您需要获取当前 HEAD 的哈希值、解析分支名或标签名到对应的哈希值、或检查 Git 仓库的状态时。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>--abbrev-ref</code></td><td style="text-align:left;">获取当前所在分支名，不包括命名空间</td></tr><tr><td style="text-align:center;"><code>--symbolic-full-name</code></td><td style="text-align:left;">输出完全限定的引用名，包括命名空间</td></tr><tr><td style="text-align:center;"><code>--git-dir</code></td><td style="text-align:left;">获取 <code>.git</code> 目录的相对路径</td></tr><tr><td style="text-align:center;"><code>--absolute-git-dir</code></td><td style="text-align:left;">获取 <code>.git</code> 目录的绝对路径</td></tr><tr><td style="text-align:center;"><code>--show-toplevel</code></td><td style="text-align:left;">获取工作区的绝对路径</td></tr><tr><td style="text-align:center;"><code>--show-prefix</code></td><td style="text-align:left;">获取相对于工作区根目录的相对目录</td></tr><tr><td style="text-align:center;"><code>--show-cdup</code></td><td style="text-align:left;">获取从当前目录（<code>cd</code>）后退到工作区的根的深度</td></tr><tr><td style="text-align:center;"><code>--short[=length]</code></td><td style="text-align:left;">获取当前 HEAD 的哈希值简短格式，默认 <code>6</code> 字符</td></tr><tr><td style="text-align:center;"><code>--verify</code></td><td style="text-align:left;">验证引用是否存在，并打印解析后的哈希值</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="获取当前-head-的哈希值" tabindex="-1"><a class="header-anchor" href="#获取当前-head-的哈希值" aria-hidden="true">#</a> 获取当前 HEAD 的哈希值</h3><p>例如：返回当前 HEAD 指向的提交的 SHA-1 哈希值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rev-parse HEAD

0d01fc15e2e250c67ef151bea3adbb90ae5471cf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：返回当前 HEAD 指向的提交的 SHA-1 哈希值简短格式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rev-parse <span class="token parameter variable">--short</span> HEAD

0d01fc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取特定分支的哈希值" tabindex="-1"><a class="header-anchor" href="#获取特定分支的哈希值" aria-hidden="true">#</a> 获取特定分支的哈希值</h3><p>例如：返回 <code>origin/main</code> 分支最新提交的哈希值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rev-parse origin/main

0d01fc15e2e250c67ef151bea3adbb90ae5471cf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解析标签到哈希值" tabindex="-1"><a class="header-anchor" href="#解析标签到哈希值" aria-hidden="true">#</a> 解析标签到哈希值</h3><p>例如：返回 <code>v1.0.0</code> 该标签指向的提交的哈希值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rev-parse v1.0.0

4637c7d9d5ed2aa5695366d1daa011bd57fc4fe9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查当前所在分支名" tabindex="-1"><a class="header-anchor" href="#检查当前所在分支名" aria-hidden="true">#</a> 检查当前所在分支名</h3><p>例如：返回当前所在的分支名（如果 HEAD 指向一个分支的话）。如果 HEAD 指向一个特定的提交（例如：在 detached HEAD 状态下），则返回 HEAD。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rev-parse --abbrev-ref HEAD

main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：输出完全限定的引用名，包括命名空间。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rev-parse --symbolic-full-name HEAD

refs/heads/main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取-git-目录的路径" tabindex="-1"><a class="header-anchor" href="#获取-git-目录的路径" aria-hidden="true">#</a> 获取 Git 目录的路径</h3><p>例如：返回 Git 仓库的 <code>.git</code> 目录的路径。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rev-parse --git-dir

.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取工作区的绝对路径" tabindex="-1"><a class="header-anchor" href="#获取工作区的绝对路径" aria-hidden="true">#</a> 获取工作区的绝对路径</h3><p>例如：返回 Git 仓库的绝对路径。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rev-parse --show-toplevel

/opt/projects/test_demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证引用是否存在" tabindex="-1"><a class="header-anchor" href="#验证引用是否存在" aria-hidden="true">#</a> 验证引用是否存在</h3><p>例如：检测指定提交是否存在。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rev-parse <span class="token parameter variable">--verify</span> 0d01fc15e2e250c67ef151bea3adbb90ae5471cf

0d01fc15e2e250c67ef151bea3adbb90ae5471cf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：检测指定分支是否存在。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rev-parse <span class="token parameter variable">--verify</span> dev

097351db8d74f9a0eeb5d80cababbd2f7fd5b787
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：检测指定 <code>tag</code> 是否存在。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rev-parse <span class="token parameter variable">--verify</span> v1.0.0

4637c7d9d5ed2aa5695366d1daa011bd57fc4fe9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：检测指定远程 <code>tag</code> 是否存在。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rev-parse <span class="token parameter variable">--verify</span> refs/tags/v1.0.0

4637c7d9d5ed2aa5695366d1daa011bd57fc4fe9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),t=[i];function r(l,c){return a(),d("div",null,t)}const b=e(n,[["render",r],["__file","git_rev-parse.html.vue"]]);export{b as default};
