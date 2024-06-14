import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,f as i}from"./app-edJli2fF.js";const n={},d=i(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git init</code> 用于初始化一个新的 Git 仓库。Git 会在当前目录下创建一个新的 <code>.git</code> 子目录，该目录包含了 Git 仓库所需要的所有必要文件。如：元数据对象、HEAD 文件、索引文件、配置信息等。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>--bare</code></td><td style="text-align:left;">创建一个裸仓库</td></tr><tr><td style="text-align:center;"><code>-q, --quiet</code></td><td style="text-align:left;">只显示错误和警告信息，其它输出都不显示</td></tr><tr><td style="text-align:center;"><code>-b &lt;branch name&gt;</code></td><td style="text-align:left;">指定初始分支名称</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="初始化-git-仓库" tabindex="-1"><a class="header-anchor" href="#初始化-git-仓库" aria-hidden="true">#</a> 初始化 Git 仓库</h3><p>例如：在当前目录下初始化一个新的 Git 仓库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="初始化一个裸仓库" tabindex="-1"><a class="header-anchor" href="#初始化一个裸仓库" aria-hidden="true">#</a> 初始化一个裸仓库</h3><p>裸仓库是一个不包含工作树的仓库，通常用于共享和中央存储库。</p><p>例如：创建一个裸仓库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init <span class="token parameter variable">--bare</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="指定初始分支名" tabindex="-1"><a class="header-anchor" href="#指定初始分支名" aria-hidden="true">#</a> 指定初始分支名</h3><p>指定初始分支名称。如果没有指定，则使用默认名称 <code>master</code>。</p><p>例如：指定初始分支名为 <code>main</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init <span class="token parameter variable">-b</span> main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),s=[d];function r(c,l){return a(),t("div",null,s)}const p=e(n,[["render",r],["__file","git_init.html.vue"]]);export{p as default};