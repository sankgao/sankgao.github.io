import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-pdzDnNX6.js";const i={},c=e(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>没有管理员账号。</p><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><p>不小心删除唯一的管理员账号；时间太久忘记管理员账号密码。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><p>停止 Gerrit 服务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>review_site/bin/gerrit.sh stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code>git clone</code> 命令克隆 Gerrit 的 <code>All-User.git</code> 项目，从裸仓库克隆出一个工作仓库出来：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> project/
<span class="token builtin class-name">cd</span> project/
<span class="token function">git</span> clone ~/review_site/git/All-Users.git

Cloning into <span class="token string">&#39;All-Users&#39;</span><span class="token punctuation">..</span>.
done.
Note: switching to <span class="token string">&#39;b1452ac39d369a1e99296f9801d3b5b89b054f85&#39;</span><span class="token builtin class-name">.</span>

You are <span class="token keyword">in</span> <span class="token string">&#39;detached HEAD&#39;</span> state. You can <span class="token function">look</span> around, <span class="token function">make</span> experimental
changes and commit them, and you can discard any commits you <span class="token function">make</span> <span class="token keyword">in</span> this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
<span class="token keyword">do</span> so <span class="token punctuation">(</span>now or later<span class="token punctuation">)</span> by using <span class="token parameter variable">-c</span> with the switch command. Example:

  <span class="token function">git</span> switch <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>new-branch-name<span class="token operator">&gt;</span>

Or undo this operation with:

  <span class="token function">git</span> switch -

Turn off this advice by setting config variable advice.detachedHead to <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从 <code>All-Users/groups</code> 中得到 <code>Administrators</code> 群组的 <code>UUID</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> All-Users/
<span class="token function">cat</span> <span class="token function">groups</span>

<span class="token comment"># UUID                                          Group Name</span>
<span class="token comment">#</span>
dd67898a2a89433ad8b9145f9e0f60f8de580c7b        Administrators
global:Registered-Users                         Registered Users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>git fetch</code> 获取并切换到 <code>Administrators</code> 群组的 <code>UUID</code> 分支：</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>refs/groups/dd/</code> 中的 <code>dd</code> 是根据您自己 <code>UUID</code> 的前两个字符。</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> fetch origin refs/groups/dd/dd67898a2a89433ad8b9145f9e0f60f8de580c7b:refs/groups/dd/dd67898a2a89433ad8b9145f9e0f60f8de580c7b
<span class="token function">git</span> checkout refs/groups/dd/dd67898a2a89433ad8b9145f9e0f60f8de580c7b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>members</code> 文件中添加成为管理员用户的 ID 值，例如：<code>100002</code>。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>用户的 ID 值可以在 Gerrit web 界面用户设置中查看</p></div><p>使用 <code>git commit</code> 命令将暂存区的内容添加到本地仓库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&quot;change administrator ID&quot;</span>

<span class="token punctuation">[</span>Separation <span class="token function">head</span> pointer fad9310<span class="token punctuation">]</span> change administrator ID
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>git update-ref</code> 命令更新引用，应用到 <code>NoteDb</code> 数据库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> update-ref refs/groups/dd/dd67898a2a89433ad8b9145f9e0f60f8de580c7b <span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> rev-parse HEAD<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code>git push</code> 命令将本地仓库推送到远程仓库中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin refs/groups/dd/dd67898a2a89433ad8b9145f9e0f60f8de580c7b

Counting objects: <span class="token number">5</span>, done.
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2</span>/2<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, <span class="token number">286</span> bytes <span class="token operator">|</span> <span class="token number">0</span> bytes/s, done.
Total <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>
To /home/gerrit/project/<span class="token punctuation">..</span>/review_site/git/All-Users.git/
   ac1792c<span class="token punctuation">..</span>fad9310  refs/groups/dd/dd67898a2a89433ad8b9145f9e0f60f8de580c7b -<span class="token operator">&gt;</span> refs/groups/dd/dd67898a2a89433ad8b9145f9e0f60f8de580c7b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新启动 Gerrit 服务器，新用户就成为管理员用户了，也添加到 Administrators 组里了。</p>`,23),t=[c];function d(o,l){return s(),a("div",null,t)}const u=n(i,[["render",d],["__file","no_admin_account.html.vue"]]);export{u as default};
