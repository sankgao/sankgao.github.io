import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,f as t}from"./app-FolHsyMV.js";const d={},i=t(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git reset</code> 用于重置当前 <code>HEAD</code> 到指定的状态。这个命令可以用来撤销提交、重新整理提交历史，或者改变分支的指向。</p><p><code>git reset</code> 有三种主要的工作模式，每种模式的行为略有不同：</p><ol><li><p><code>git reset --soft [commit]</code></p><p>将 HEAD 指向指定的提交，但是索引（staging area）和工作目录的内容保持不变。这意味着所有自指定提交以来的更改都被视为已暂存，准备进行下一次提交。这个模式通常用于重新组织提交历史，而不改变工作目录中的实际文件。</p></li><li><p><code>git reset --mixed [commit]</code> 或 <code>git reset [commit]</code>（默认模式）</p><p>将 HEAD 和索引都指向指定的提交，但是工作目录中的文件保持不变。这会导致自指定提交以来的更改全部变为未暂存状态（即，它们会出现在 <code>git status</code> 的未跟踪文件列表中）。这个模式常用于撤销提交，但不立即丢弃工作目录中的更改。</p></li><li><p><code>git reset --hard [commit]</code></p><p>将 HEAD、索引和工作目录都重置为指定提交的状态。这会丢弃自指定提交以来的所有更改，包括暂存的和未暂存的。使用这个模式时要特别小心，因为它会删除所有未提交的更改。</p></li></ol><p><strong>注意事项：</strong></p><ul><li>在使用 <code>git reset</code> 时，请确保您了解当前的工作目录状态，以及您希望达到的最终状态。错误的 <code>git reset</code> 命令可能会导致数据丢失</li><li>在执行任何可能导致数据丢失的操作之前，最好先使用 <code>git status</code> 查看当前的状态，并使用 <code>git log</code> 查看提交历史</li><li>如果您想撤销某个提交，但又不想丢失该提交中的更改，可以先使用 <code>git reset</code> 将 HEAD 移动到该提交之前，然后再手动应用所需的更改并提交</li><li>如果您只想撤销最近的一次提交，并保留更改以便进行新的提交，那么 <code>git reset --soft HEAD^</code> 或 <code>git reset --mixed HEAD^</code> 可能是合适的命令</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>-q, --quiet</code></td><td style="text-align:left;">不显示输出内容</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="使用-soft-模式" tabindex="-1"><a class="header-anchor" href="#使用-soft-模式" aria-hidden="true">#</a> 使用 soft 模式</h3><p>例如：重置到上一次提交，不更改工作区和暂存区。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用-mixed-模式" tabindex="-1"><a class="header-anchor" href="#使用-mixed-模式" aria-hidden="true">#</a> 使用 mixed 模式</h3><p>例如：重置到上一次提交，更改暂存区以匹配当前工作区，不更改工作区。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--mixed</span> HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用-hard-模式" tabindex="-1"><a class="header-anchor" href="#使用-hard-模式" aria-hidden="true">#</a> 使用 hard 模式</h3><p>例如：重置到上一次提交，更改暂存区和工作区以匹配当前 HEAD。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：放弃本地的所有修改，包括已修改和已暂存的文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重置到特定的提交" tabindex="-1"><a class="header-anchor" href="#重置到特定的提交" aria-hidden="true">#</a> 重置到特定的提交</h3><p>例如：重置到指定的 <code>commit id</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token operator">&lt;</span>commit id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重置单个文件" tabindex="-1"><a class="header-anchor" href="#重置单个文件" aria-hidden="true">#</a> 重置单个文件</h3><p>例如：取消已暂存的 <code>test01.txt</code> 文件，但保留文件的更改。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset test01.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,26),n=[i];function r(c,o){return a(),s("div",null,n)}const p=e(d,[["render",r],["__file","git_reset.html.vue"]]);export{p as default};
