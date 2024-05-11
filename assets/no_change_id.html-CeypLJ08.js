import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-NyIvtzDF.js";const t={},i=e(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>直接使用 <code>git push origin master</code> 命令推送到 Gerrit 服务器出现以下错误：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Enumerating objects: <span class="token number">4</span>, done.
Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">4</span>/4<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, <span class="token number">248</span> bytes <span class="token operator">|</span> <span class="token number">248.00</span> KiB/s, done.
Total <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span> <span class="token punctuation">(</span>from <span class="token number">0</span><span class="token punctuation">)</span>
remote: Processing changes: refs: <span class="token number">1</span>, <span class="token keyword">done</span>
remote: ERROR: commit e33ee12: missing Change-Id <span class="token keyword">in</span> message footer
remote:
remote: Hint: to automatically insert a Change-Id, <span class="token function">install</span> the hook:
remote:   <span class="token assign-left variable">gitdir</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> rev-parse --git-dir<span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token function">scp</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-P</span> <span class="token number">29418</span> zhangsan@10.1.1.10:hooks/commit-msg <span class="token variable">\${gitdir}</span>/hooks/
remote: <span class="token punctuation">(</span>for OpenSSH <span class="token operator">&gt;=</span> <span class="token number">9.0</span> you need to <span class="token function">add</span> the flag <span class="token string">&#39;-O&#39;</span> to the <span class="token function">scp</span> <span class="token builtin class-name">command</span><span class="token punctuation">)</span>
remote: or, <span class="token keyword">for</span> http<span class="token punctuation">(</span>s<span class="token punctuation">)</span>:
remote:   <span class="token assign-left variable">f</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> rev-parse --git-dir<span class="token variable">)</span></span>/hooks/commit-msg&quot;</span><span class="token punctuation">;</span> <span class="token function">curl</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span> http://10.1.1.10:8088/tools/hooks/commit-msg <span class="token punctuation">;</span> <span class="token function">chmod</span> +x <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span>
remote: and <span class="token keyword">then</span> amend the commit:
remote:   <span class="token function">git</span> commit <span class="token parameter variable">--amend</span> --no-edit
remote: Finally, push your changes again
remote:
To ssh://10.1.1.10:29418/test
 <span class="token operator">!</span> <span class="token punctuation">[</span>remote rejected<span class="token punctuation">]</span> master -<span class="token operator">&gt;</span> refs/for/master <span class="token punctuation">(</span>commit e33ee12: missing Change-Id <span class="token keyword">in</span> message footer<span class="token punctuation">)</span>
error: failed to push some refs to <span class="token string">&#39;ssh://10.1.1.10:29418/test&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><p>推送时需要有 <code>Change-Id</code>，而当前的推送没有 <code>Change-Id</code>。</p><p>使用 <code>git log</code> 查看 <code>log</code> 信息，没有 <code>Change-Id</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log

commit e33ee123453bf2572cb903d2b4d026e9be368128 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span>
Author: zhangsan <span class="token operator">&lt;</span>zhangsan@mail.example.com<span class="token operator">&gt;</span>
Date:   Mon Mar <span class="token number">25</span> <span class="token number">14</span>:27:22 <span class="token number">2024</span> +0800

    <span class="token function">add</span> <span class="token builtin class-name">test</span>

commit 9cb4e0bbcd27a7f9fb5ff62dc0aca34cdc9c1874 <span class="token punctuation">(</span>origin/master, origin/HEAD<span class="token punctuation">)</span>
Author: gerrit <span class="token operator">&lt;</span>gerrit@mail.example.com<span class="token operator">&gt;</span>
Date:   Mon Mar <span class="token number">25</span> <span class="token number">14</span>:00:22 <span class="token number">2024</span> +0800

    Initial empty repository
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在第一次克隆项目时，使用提交消息挂钩进行克隆（Clone with commit-msg hook）会直接拉取 <code>hooks</code> 文件，之后使用 <code>git commit</code> 时会自动生成 <code>Change-Id</code></p></div><h3 id="解决方法1" tabindex="-1"><a class="header-anchor" href="#解决方法1" aria-hidden="true">#</a> 解决方法1</h3><p>根据提示从 Gerrit 服务器上拉取 <code>hooks</code> 文件。<code>hooks</code> 文件下的 <code>commit-msg</code> 脚本会自动生成 <code>Change-Id</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">gitdir</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> rev-parse --git-dir<span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token function">scp</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-P</span> <span class="token number">29418</span> zhangsan@10.1.1.10:hooks/commit-msg <span class="token variable">\${gitdir}</span>/hooks/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重新 <code>git push</code> 发现一样的错误，因为当前的 <code>commit</code> 没有生成 <code>Change-Id</code>。</p><p>使用 <code>git reset --hard</code> 命令回退到上一次，重新更新并提交文件。</p><p>使用 <code>git log</code> 查看上一次的 <code>commit id</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log

commit e33ee123453bf2572cb903d2b4d026e9be368128 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span>
Author: zhangsan <span class="token operator">&lt;</span>zhangsan@mail.example.com<span class="token operator">&gt;</span>
Date:   Mon Mar <span class="token number">25</span> <span class="token number">14</span>:27:22 <span class="token number">2024</span> +0800

    <span class="token function">add</span> <span class="token builtin class-name">test</span>

commit 9cb4e0bbcd27a7f9fb5ff62dc0aca34cdc9c1874 <span class="token punctuation">(</span>origin/master, origin/HEAD<span class="token punctuation">)</span>
Author: gerrit <span class="token operator">&lt;</span>gerrit@mail.example.com<span class="token operator">&gt;</span>
Date:   Mon Mar <span class="token number">25</span> <span class="token number">14</span>:00:22 <span class="token number">2024</span> +0800

    Initial empty repository
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>git reset --hard</code> 命令回退到上一次：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 9cb4e0bbcd27a7f9fb5ff62dc0aca34cdc9c1874

HEAD is now at 9cb4e0b Initial empty repository
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新更新并提交文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello World!&quot;</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">test</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">test</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add test&quot;</span>

<span class="token punctuation">[</span>master e33ee12<span class="token punctuation">]</span> <span class="token function">add</span> <span class="token builtin class-name">test</span>
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方法2" tabindex="-1"><a class="header-anchor" href="#解决方法2" aria-hidden="true">#</a> 解决方法2</h3><p>使用 <code>git commit --amend --no-edit</code> 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--amend</span> --no-edit

<span class="token punctuation">[</span>master e8cc59b<span class="token punctuation">]</span> <span class="token function">add</span> test01
 Date: Mon Mar <span class="token number">25</span> <span class="token number">16</span>:01:15 <span class="token number">2024</span> +0800
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git commit --amend --no-edit</code> 命令用于追加提交，且不修改 <code>message</code> 信息。</p><p>查看本次 <code>log</code> 信息是否带 <code>Change-Id</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log

commit e564c39767b949b77814ff6ca9fd319d12b43857 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span>
Author: zhangsan <span class="token operator">&lt;</span>zhangsan@mail.example.com<span class="token operator">&gt;</span>
Date:   Mon Mar <span class="token number">25</span> <span class="token number">15</span>:45:23 <span class="token number">2024</span> +0800

    <span class="token function">add</span> <span class="token builtin class-name">test</span>

    Change-Id: Ic8e2f63e1be2a00f42dd97513e91902754a057c7

commit 9cb4e0bbcd27a7f9fb5ff62dc0aca34cdc9c1874 <span class="token punctuation">(</span>origin/master, origin/HEAD<span class="token punctuation">)</span>
Author: gerrit <span class="token operator">&lt;</span>gerrit@mail.example.com<span class="token operator">&gt;</span>
Date:   Mon Mar <span class="token number">25</span> <span class="token number">14</span>:00:22 <span class="token number">2024</span> +0800

    Initial empty repository
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次使用 <code>git push</code> 推送到 Gerrit 服务器中。</p>`,27),o=[i];function c(p,l){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","no_change_id.html.vue"]]);export{u as default};
