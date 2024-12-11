import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-jYSCuJZ0.js";const t={},o=e(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git help</code> 用于显示 Git 常用命令列表。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>git --help</code> 与 <code>git help</code> 相同，因为 <code>git --help</code> 在内部会转换为 <code>git help</code>。</p></div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>-a | --all</code></td><td style="text-align:left;">输出 Git 所有可用的命令</td></tr><tr><td style="text-align:center;"><code>-g | --guides</code></td><td style="text-align:left;">输出 Git 概念指南的列表</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>查看 Git 帮助信息列表。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token builtin class-name">help</span>

usage: <span class="token function">git</span> <span class="token punctuation">[</span>-v <span class="token operator">|</span> --version<span class="token punctuation">]</span> <span class="token punctuation">[</span>-h <span class="token operator">|</span> --help<span class="token punctuation">]</span> <span class="token punctuation">[</span>-C <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-c <span class="token operator">&lt;</span>name<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>value<span class="token operator">&gt;</span><span class="token punctuation">]</span>
        <span class="token punctuation">[</span>--exec-path<span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>path<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--html-path<span class="token punctuation">]</span> <span class="token punctuation">[</span>--man-path<span class="token punctuation">]</span> <span class="token punctuation">[</span>--info-path<span class="token punctuation">]</span>
        <span class="token punctuation">[</span>-p <span class="token operator">|</span> <span class="token parameter variable">--paginate</span> <span class="token operator">|</span> <span class="token parameter variable">-P</span> <span class="token operator">|</span> --no-pager<span class="token punctuation">]</span> <span class="token punctuation">[</span>--no-replace-objects<span class="token punctuation">]</span> <span class="token punctuation">[</span>--bare<span class="token punctuation">]</span>
        <span class="token punctuation">[</span>--git-dir<span class="token operator">=</span><span class="token operator">&lt;</span>path<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--work-tree<span class="token operator">=</span><span class="token operator">&lt;</span>path<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--namespace<span class="token operator">=</span><span class="token operator">&lt;</span>name<span class="token operator">&gt;</span><span class="token punctuation">]</span>
        <span class="token punctuation">[</span>--config-env<span class="token operator">=</span><span class="token operator">&lt;</span>name<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>envvar<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>args<span class="token operator">&gt;</span><span class="token punctuation">]</span>

These are common Git commands used <span class="token keyword">in</span> various situations:

start a working area <span class="token punctuation">(</span>see also: <span class="token function">git</span> <span class="token builtin class-name">help</span> tutorial<span class="token punctuation">)</span>
clone     Clone a repository into a new directory
init      Create an empty Git repository or reinitialize an existing one

work on the current change <span class="token punctuation">(</span>see also: <span class="token function">git</span> <span class="token builtin class-name">help</span> everyday<span class="token punctuation">)</span>
<span class="token function">add</span>       Add <span class="token function">file</span> contents to the index
<span class="token function">mv</span>        Move or <span class="token function">rename</span> a file, a directory, or a symlink
restore   Restore working tree files
<span class="token function">rm</span>        Remove files from the working tree and from the index

examine the <span class="token function">history</span> and state <span class="token punctuation">(</span>see also: <span class="token function">git</span> <span class="token builtin class-name">help</span> revisions<span class="token punctuation">)</span>
bisect    Use binary search to <span class="token function">find</span> the commit that introduced a bug
<span class="token function">diff</span>      Show changes between commits, commit and working tree, etc
<span class="token function">grep</span>      Print lines matching a pattern
log       Show commit logs
show      Show various types of objects
status    Show the working tree status

grow, mark and tweak your common <span class="token function">history</span>
branch    List, create, or delete branches
commit    Record changes to the repository
merge     Join two or <span class="token function">more</span> development histories together
rebase    Reapply commits on <span class="token function">top</span> of another base tip
reset     Reset current HEAD to the specified state
switch    Switch branches
tag       Create, list, delete or verify a tag object signed with GPG

collaborate <span class="token punctuation">(</span>see also: <span class="token function">git</span> <span class="token builtin class-name">help</span> workflows<span class="token punctuation">)</span>
fetch     Download objects and refs from another repository
pull      Fetch from and integrate with another repository or a <span class="token builtin class-name">local</span> branch
push      Update remote refs along with associated objects

<span class="token string">&#39;git help -a&#39;</span> and <span class="token string">&#39;git help -g&#39;</span> list available subcommands and some
concept guides. See <span class="token string">&#39;git help &lt;command&gt;&#39;</span> or <span class="token string">&#39;git help &lt;concept&gt;&#39;</span>
to <span class="token builtin class-name">read</span> about a specific subcommand or concept.
See <span class="token string">&#39;git help git&#39;</span> <span class="token keyword">for</span> an overview of the system.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[o];function p(c,l){return s(),a("div",null,i)}const u=n(t,[["render",p],["__file","git_help.html.vue"]]);export{u as default};
