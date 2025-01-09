import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,f as e}from"./app-FKbiDJQH.js";const r={},i=e(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>直接使用 <code>git push origin master</code> 命令推送到远程 Git 仓库会出现以下错误：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Enumerating objects: <span class="token number">4</span>, done.
Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">4</span>/4<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, <span class="token number">248</span> bytes <span class="token operator">|</span> <span class="token number">248.00</span> KiB/s, done.
Total <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span> <span class="token punctuation">(</span>from <span class="token number">0</span><span class="token punctuation">)</span>
remote: error: branch refs/heads/master:
remote: Push to refs/for/master to create a review, or get <span class="token string">&#39;Push&#39;</span> rights to update the branch.
remote: User: zhangsan
remote: Contact an administrator to fix the permissions
remote: Processing changes: refs: <span class="token number">1</span>, <span class="token keyword">done</span>
To ssh://10.1.1.10:29418/test
 <span class="token operator">!</span> <span class="token punctuation">[</span>remote rejected<span class="token punctuation">]</span> master -<span class="token operator">&gt;</span> master <span class="token punctuation">(</span>prohibited by Gerrit: not permitted: update<span class="token punctuation">)</span>
error: failed to push some refs to <span class="token string">&#39;ssh://10.1.1.10:29418/test&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><p>使用 <code>git config --list</code> 命令查看当前 <code>remote.origin</code> 信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--list</span>

<span class="token assign-left variable">core.repositoryformatversion</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">core.filemode</span><span class="token operator">=</span>true
<span class="token assign-left variable">core.bare</span><span class="token operator">=</span>false
<span class="token assign-left variable">core.logallrefupdates</span><span class="token operator">=</span>true
<span class="token assign-left variable">remote.origin.url</span><span class="token operator">=</span>ssh://zhangsan@10.1.1.10:29418/test
<span class="token assign-left variable">remote.origin.fetch</span><span class="token operator">=</span>+refs/heads/*:refs/remotes/origin/*
<span class="token assign-left variable">branch.master.remote</span><span class="token operator">=</span>origin
<span class="token assign-left variable">branch.master.merge</span><span class="token operator">=</span>refs/heads/master
<span class="token assign-left variable">user.name</span><span class="token operator">=</span>zhangsan
<span class="token assign-left variable">user.email</span><span class="token operator">=</span>zhangsan@mail.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当前使用 <code>git push</code> 命令时，是直接提交到远程 Git 仓库 <code>refs/heads/master</code> 分支中进行合并。</p><p>由于需要 Gerrit 进行审核代码，不能直接提交到远程 Git 仓库中，而是提交到 Gerrit 特有的 <code>refs/for/*</code> 分支中。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><p>修改推送远程的默认分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config remote.origin.push refs/heads/*:refs/for/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code>git config --list</code> 命令查看当前 <code>remote.origin</code> 信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--list</span>

<span class="token assign-left variable">core.repositoryformatversion</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">core.filemode</span><span class="token operator">=</span>true
<span class="token assign-left variable">core.bare</span><span class="token operator">=</span>false
<span class="token assign-left variable">core.logallrefupdates</span><span class="token operator">=</span>true
<span class="token assign-left variable">remote.origin.url</span><span class="token operator">=</span>ssh://zhangsan@10.1.1.10:29418/test
<span class="token assign-left variable">remote.origin.fetch</span><span class="token operator">=</span>+refs/heads/*:refs/remotes/origin/*
<span class="token assign-left variable">remote.origin.push</span><span class="token operator">=</span>refs/heads/*:refs/for/*
<span class="token assign-left variable">branch.master.remote</span><span class="token operator">=</span>origin
<span class="token assign-left variable">branch.master.merge</span><span class="token operator">=</span>refs/heads/master
<span class="token assign-left variable">user.name</span><span class="token operator">=</span>zhangsan
<span class="token assign-left variable">user.email</span><span class="token operator">=</span>zhangsan@mail.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当前使用 <code>git push</code> 命令时，是推送到 Gerrit 特有的 <code>refs/for/*</code> 分支中，然后由 Gerrit 审核完代码后再进行提交合并。</p><p>修改完提交的分支后再次使用 <code>git push</code> 命令推送即可。</p>`,15),t=[i];function o(l,p){return a(),n("div",null,t)}const u=s(r,[["render",o],["__file","push_gerrit_branch.html.vue"]]);export{u as default};
