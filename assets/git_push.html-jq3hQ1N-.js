import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,f as n}from"./app-edJli2fF.js";const d={},i=n(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git push</code> 用于将本地分支的更改推送到远程仓库。默认情况下，它推送当前活动的本地分支到与其同名的远程分支。您也可以指定要推送的本地分支和远程分支，以及推送的内容（例如：标签或特定的提交）。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>--all, --branches</code></td><td style="text-align:left;">推送所有分支到远程仓库</td></tr><tr><td style="text-align:center;"><code>--tags</code></td><td style="text-align:left;">推送所有标签到远程仓库</td></tr><tr><td style="text-align:center;"><code>-d, --delete</code></td><td style="text-align:left;">删除远程分支</td></tr><tr><td style="text-align:center;"><code>-f, --force</code></td><td style="text-align:left;">即使远程仓库中有冲突或更新，也强制推送更改</td></tr><tr><td style="text-align:center;"><code>-u, --set-upstream</code></td><td style="text-align:left;">添加上游（跟踪）分支引用</td></tr><tr><td style="text-align:center;"><code>-n, --dry-run</code></td><td style="text-align:left;">查看将要推送的远程分支，但不实际推送</td></tr><tr><td style="text-align:center;"><code>--progress</code></td><td style="text-align:left;">显示推送进度</td></tr><tr><td style="text-align:center;"><code>--porcelain</code></td><td style="text-align:left;">输出一个简化的格式，通常用于脚本</td></tr><tr><td style="text-align:center;"><code>-v, --verbose</code></td><td style="text-align:left;">显示详细的输出</td></tr><tr><td style="text-align:center;"><code>--mirror</code></td><td style="text-align:left;">将本地仓库的所有引用（包括分支和标签）推送到另一个仓库</td></tr><tr><td style="text-align:center;"><code>-q, --quiet</code></td><td style="text-align:left;">不显示输出内容</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="直接推送" tabindex="-1"><a class="header-anchor" href="#直接推送" aria-hidden="true">#</a> 直接推送</h3><p>当命令行没有用 <code>--repo=&lt;repository&gt;</code> 参数指定推送位置时，会参考当前分支的 <code>branch.*.remote</code> 配置来决定推送位置。如果配置丢失，则默认为 <code>origin</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="推送当前分支" tabindex="-1"><a class="header-anchor" href="#推送当前分支" aria-hidden="true">#</a> 推送当前分支</h3><p>当前的本地分支与远程分支同名，可以直接推送。</p><p>例如：推送本地仓库的 <code>main</code> 分支到远程仓库的 <code>main</code> 分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>origin</code> 是远程仓库的默认名称，通常用于标识您的远程仓库</li><li><code>main</code> 通常指的是您想要推送到的远程仓库的分支名</li></ul><p>如果您当前的本地分支名是 <code>main</code>，但远程仓库中没有名为 <code>main</code> 的分支，它将在远程仓库中被创建；如果您当前的本地分支名不是 <code>main</code>，而您想要推送到远程仓库的 <code>main</code> 分支，您需要先切换到您的本地目标分支，然后执行推送命令。</p><h3 id="推送到远程指定分支" tabindex="-1"><a class="header-anchor" href="#推送到远程指定分支" aria-hidden="true">#</a> 推送到远程指定分支</h3><p>当前的本地分支与远程分支不同名，需要指定远程分支。</p><p>例如：推送本地仓库的 <code>main</code> 分支到远程仓库的 <code>test</code> 分支。如果指定的远程分支不存在，则远程仓库会自动创建此分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin main:tset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：推送指定 <code>commit id</code> 到远程仓库的 <code>test</code> 分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin <span class="token operator">&lt;</span>commit id<span class="token operator">&gt;</span>:tset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="推送所有分支" tabindex="-1"><a class="header-anchor" href="#推送所有分支" aria-hidden="true">#</a> 推送所有分支</h3><p>例如：使用 <code>--all</code> 选项，推送所有本地分支到远程仓库。如果远程仓库中不存在相应的分支，它们也会被创建。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">--all</span> origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="推送标签" tabindex="-1"><a class="header-anchor" href="#推送标签" aria-hidden="true">#</a> 推送标签</h3><p>例如：将标签 <code>v1.0.0</code> 推送到远程仓库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="推送所有标签" tabindex="-1"><a class="header-anchor" href="#推送所有标签" aria-hidden="true">#</a> 推送所有标签</h3><p>例如：使用 <code>--tags</code> 选项，将所有本地标签推送到远程仓库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">--tags</span> origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除远程分支" tabindex="-1"><a class="header-anchor" href="#删除远程分支" aria-hidden="true">#</a> 删除远程分支</h3><p>例如：使用 <code>-d</code> 或 <code>--delete</code> 选项，删除远程 <code>test</code> 分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin <span class="token parameter variable">-d</span> <span class="token builtin class-name">test</span>
<span class="token comment"># 或</span>
<span class="token function">git</span> push origin :test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只会删除远程分支，本地分支依然存在。</p><h3 id="强制推送" tabindex="-1"><a class="header-anchor" href="#强制推送" aria-hidden="true">#</a> 强制推送</h3><p>这通常是不推荐的，因为它可能会丢失其他人的工作。</p><p>例如：使用 <code>-f</code> 或 <code>--force</code> 选项，强制推送到远程 <code>main</code> 分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-f</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者更安全地，您可以使用 <code>--force-with-lease</code> 选项，它会检查远程分支是否包含您的本地更改，从而避免覆盖其他人的工作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push --force-with-lease origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="推送并设置上游分支" tabindex="-1"><a class="header-anchor" href="#推送并设置上游分支" aria-hidden="true">#</a> 推送并设置上游分支</h3><p>当第一次推送一个本地分支到远程仓库时，可能想要设置该远程分支作为此本地分支的上游（<code>upstream</code>）分支。这样，将来使用 <code>git pull</code> 和 <code>git push</code> 而不必指定远程仓库和分支名称。</p><p>例如：使用 <code>-u</code> 或 <code>--set-upstream</code> 选项，指定 <code>test</code> 远程分支作为此本地分支的上游分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token builtin class-name">test</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>git config -l</code> 命令查看是否引用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">-l</span>

<span class="token assign-left variable">branch.test.remote</span><span class="token operator">=</span>origin
<span class="token assign-left variable">branch.test.merge</span><span class="token operator">=</span>refs/heads/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置跟踪关系之后，下次您只需调用 <code>git push</code> 即可将更改推送到关联的远程分支。</p><h3 id="显示将要推送的远程分支" tabindex="-1"><a class="header-anchor" href="#显示将要推送的远程分支" aria-hidden="true">#</a> 显示将要推送的远程分支</h3><p>例如：使用 <code>-n</code> 或 <code>--dry-run</code> 选项，查看将要推送的远程分支，但不实际推送。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-n</span> origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示推送进度" tabindex="-1"><a class="header-anchor" href="#显示推送进度" aria-hidden="true">#</a> 显示推送进度</h3><p>对于推送大量数据或慢速网络连接时特别有用，因为它可以让用户更好地了解推送操作的进度和预期剩余时间。</p><p>例如：使用 <code>--progress</code> 选项，显示推送进度。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">--progress</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="简化推送输出" tabindex="-1"><a class="header-anchor" href="#简化推送输出" aria-hidden="true">#</a> 简化推送输出</h3><p>例如：使用 <code>--porcelain</code> 选项，为了让脚本和其他程序更容易地解析 git 命令的输出。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">--porcelain</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示详细输出" tabindex="-1"><a class="header-anchor" href="#显示详细输出" aria-hidden="true">#</a> 显示详细输出</h3><p>例如：使用 <code>-v</code> 或 <code>--verbose</code> 选项，显示详细的 git 输出。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-v</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="迁移" tabindex="-1"><a class="header-anchor" href="#迁移" aria-hidden="true">#</a> 迁移</h3><p>例如：使用 <code>--mirror</code> 选项，将本地仓库的所有引用（包括分支和标签）推送到另一个仓库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">--bare</span> oldproject.git
<span class="token builtin class-name">cd</span> oldproject.git
<span class="token function">git</span> push <span class="token parameter variable">--mirror</span> newproject.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果新仓库有保护分支，取消保护分支再推送，否则出现以下错误：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>remote: GitLab: You are not allowed to force push code to a protected branch on this project.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>`,63),t=[i];function r(c,l){return a(),s("div",null,t)}const h=e(d,[["render",r],["__file","git_push.html.vue"]]);export{h as default};