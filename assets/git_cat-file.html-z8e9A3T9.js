import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,f as n}from"./app-edJli2fF.js";const s={},d=n(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git cat-file</code> 用于查看 Git 仓库中的对象（如：文件内容（<code>blob</code>）、目录树（<code>tree</code>）、提交（<code>commit</code>）等）的内容、类型以及大小。这个命令提供了对 Git 仓库内部对象直接访问的能力，使得用户能够查看和操作这些对象，而无需使用更高层级的 Git 命令。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>-t</code></td><td style="text-align:left;">不显示内容，而是显示由 <code>&lt;对象&gt;</code> 标识的对象类型</td></tr><tr><td style="text-align:center;"><code>-s</code></td><td style="text-align:left;">不显示内容，而是显示由 <code>&lt;对象&gt;</code> 标识的对象大小</td></tr><tr><td style="text-align:center;"><code>-e</code></td><td style="text-align:left;">如果 <code>&lt;对象&gt;</code> 存在且是有效对象，则以零状态退出</td></tr><tr><td style="text-align:center;"><code>-p</code></td><td style="text-align:left;">根据 <code>&lt;对象&gt;</code> 的类型以可读的格式打印其内容。对于 blob 对象，这会直接显示文件内容；对于 tree 和 commit 对象，这会以一种格式化的方式显示其详细信息</td></tr><tr><td style="text-align:center;"><code>-k, --killed</code></td><td style="text-align:left;">显示那些被 Git 忽略的文件</td></tr><tr><td style="text-align:center;"><code>-s, --stage</code></td><td style="text-align:left;">显示暂存文件的暂存信息</td></tr><tr><td style="text-align:center;"><code>-u, --unmerged</code></td><td style="text-align:left;">显示那些存在未解决冲突的文件</td></tr><tr><td style="text-align:center;"><code>-x &lt;pattern&gt;, --exclude=&lt;pattern&gt;</code></td><td style="text-align:left;">排除与指定模式匹配的文件</td></tr><tr><td style="text-align:center;"><code>-X &lt;file&gt;, --exclude-from=&lt;file&gt;</code></td><td style="text-align:left;">从给定文件中读取排除模式</td></tr><tr><td style="text-align:center;"><code>--exclude-standard</code></td><td style="text-align:left;">添加 Git 默认的标准排除模式</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>查看日志的详细信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-1</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>raw

commit ffda3db0af4761b39ffb0ec382ec97629b9ac8d2
tree f58da9a820e3fd9d84ab2ca2f1b467ac265038f9
parent 2a53fa42f95ab1bb3ee93b8282fe61703553893f
author Sank Gao <span class="token operator">&lt;</span>sankgao@163.com<span class="token operator">&gt;</span> <span class="token number">1718332249</span> +0800
committer Sank Gao <span class="token operator">&lt;</span>sankgao@163.com<span class="token operator">&gt;</span> <span class="token number">1718332249</span> +0800

    <span class="token function">which</span> version checked in?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：查看 <code>&lt;对象&gt;</code> 的类型。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> cat-file <span class="token parameter variable">-t</span> ffda3db 

commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：查看 <code>commit</code> 对象内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> cat-file <span class="token parameter variable">-p</span> ffda3db

tree f58da9a820e3fd9d84ab2ca2f1b467ac265038f9
parent 2a53fa42f95ab1bb3ee93b8282fe61703553893f
author Sank Gao <span class="token operator">&lt;</span>sankgao@163.com<span class="token operator">&gt;</span> <span class="token number">1718332249</span> +0800
committer Sank Gao <span class="token operator">&lt;</span>sankgao@163.com<span class="token operator">&gt;</span> <span class="token number">1718332249</span> +0800

<span class="token function">which</span> version checked in?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：查看 <code>tree</code> 对象内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> cat-file <span class="token parameter variable">-p</span> f58da9a

<span class="token number">100644</span> blob fd3c069c1de4f4bc9b15940f490aeb48852f3c42    welcome.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：查看 <code>parent</code> 对象内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> cat-file <span class="token parameter variable">-p</span> 2a53fa4

tree 1ee1c14db52826f21b98290d42133064110b03e5
parent 81e37d1daa98fb2085396a0d310dbce718552247
author Sank Gao <span class="token operator">&lt;</span>sankgao@163.com<span class="token operator">&gt;</span> <span class="token number">1718331148</span> +0800
committer Sank Gao <span class="token operator">&lt;</span>sankgao@163.com<span class="token operator">&gt;</span> <span class="token number">1718331148</span> +0800

<span class="token function">who</span> does commit?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：查看 <code>blob</code> 对象内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> cat-file <span class="token parameter variable">-p</span> fd3c069

Hello.
Nice to meet you.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[d];function i(c,r){return a(),t("div",null,l)}const b=e(s,[["render",i],["__file","git_cat-file.html.vue"]]);export{b as default};
