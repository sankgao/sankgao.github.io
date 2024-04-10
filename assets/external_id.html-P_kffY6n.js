import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-QvOVG9Vv.js";const i="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAABPCAYAAACZI0XKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGjSURBVHhe7dZLauNAFEDRXoP3v9cEDQRFUfrY8UCXPg8OqOoJTXIx+fd6vX6gRLTkiJYc0ZIjWnJES45oyREtOaIlR7TkiJYc0ZIjWnJOoz2a1bt37bPaja7e2efdHX2Xv7TzH38+f+Ib39icfedsR9vb0X7Dt7559p2zHW1vRTs+j3f7rO7n5/G8z34/78b71X6bT3bz3fzMs92Kdpx5d3XeZrzb78/Od+/G8/j87m6b1Y5n+tMv7bvno/v5fPduPI/Pq908q/dWZ57nT//Tzrur89H9fL57N57H56vdaN7NZ57nv4x2PI/PqzPPcxrtOKv9Zpyj+20+3W1zd7+a1e7obpz9HZ7n8pcWnka05IiWHNGSI1pyREuOaMkRLTmiJUe05IiWHNGSI1pyREuOaMkRLTmiJUe05IiWHNGSI1pyREuOaMkRLTmiJUe05IiWHNGSI1pyREuOaMkRLTmiJUe05IiWHNGSI1pyREuOaMkRLTmiJUe05IiWHNGSI1pyREuOaMkRLTmiJUe05IiWHNGSI1pyREuOaMkRLTmiJeb18wtt0y33CZ7YoAAAAABJRU5ErkJggg==",c={},t=e('<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><figure><img src="'+i+`" alt="Forbidden" tabindex="0" loading="lazy"><figcaption>Forbidden</figcaption></figure><p>查看 <code>review_site/logs/error_log</code> 日志：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ERROR com.google.gerrit.httpd.auth.container.HttpLoginServlet <span class="token builtin class-name">:</span> Unable to authenticate 
user <span class="token string">&quot;zhangsan&quot;</span> com.google.gerrit.server.account.AccountException: Cannot assign 
external ID <span class="token string">&quot;username:zhangsan&quot;</span> to account <span class="token number">1000010</span><span class="token punctuation">;</span> external ID already <span class="token keyword">in</span> use.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> .ssh/zhangsan_id_rsa.pub <span class="token operator">|</span> <span class="token function">ssh</span> gerrit gerrit create-account --full-name zhangsan <span class="token parameter variable">--email</span> zhangsan@mail.example.com --ssh-key - zhangsan
htpasswd <span class="token parameter variable">-m</span> review_site/etc/.password zhangsan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用以上顺序创建 <code>zhangsan</code> 用户，<code>zhangsan</code> 用户在登录 Gerrit 服务器时会出现上面的错误。</p><p>在用 <code>create-account</code> 命令创建用户时，会在 Gerrit 数据库中生成对应的用户名与 email 的用户 <code>external ID</code>。</p><p>正确的创建用户顺序应该是：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>htpasswd <span class="token parameter variable">-m</span> review_site/etc/.password zhangsan
<span class="token function">cat</span> .ssh/zhangsan_id_rsa.pub <span class="token operator">|</span> <span class="token function">ssh</span> gerrit gerrit set-account --full-name zhangsan --add-email zhangsan@mail.example.com --add-ssh-key - zhangsan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>用 <code>htpasswd</code> 命令创建 HTTP 认证时，并没有在 Gerrit 数据库中创建账号信息，当第一次登录成功后，Gerrit 会自动创建同名的 gerrit 用户。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><p>Gerrit 默认项目 <code>All-User.git</code> 用于管理用户信息，在 gerrit 的帮助中，提供了 <code>external ID</code> 的信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>External IDs are stored as Git Notes <span class="token keyword">in</span> the All-Users repository. The name of the notes branch is refs/meta/external-ids.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 Gerrit 管理员用户查看 <code>external-ids</code> 日志信息，使用 <code>git clone</code> 命令克隆 Gerrit 的 <code>All-User.git</code> 项目，从裸仓库克隆出一个工作仓库出来：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> project/
<span class="token builtin class-name">cd</span> project/
<span class="token function">git</span> clone ~/review_site/git/All-Users.git

Cloning into <span class="token string">&#39;All-Users&#39;</span><span class="token punctuation">..</span>.
done.
Note: switching to <span class="token string">&#39;3d75731f927f36cd755b72db1b17e1e0b470142d&#39;</span><span class="token builtin class-name">.</span>

You are <span class="token keyword">in</span> <span class="token string">&#39;detached HEAD&#39;</span> state. You can <span class="token function">look</span> around, <span class="token function">make</span> experimental
changes and commit them, and you can discard any commits you <span class="token function">make</span> <span class="token keyword">in</span> this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
<span class="token keyword">do</span> so <span class="token punctuation">(</span>now or later<span class="token punctuation">)</span> by using <span class="token parameter variable">-c</span> with the switch command. Example:

  <span class="token function">git</span> switch <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>new-branch-name<span class="token operator">&gt;</span>

Or undo this operation with:

  <span class="token function">git</span> switch -

Turn off this advice by setting config variable advice.detachedHead to <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>git fetch</code> 获取并切换到 <code>external-ids</code> 分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> All-Users
<span class="token function">git</span> fetch origin refs/meta/external-ids:refs/meta/external-ids
<span class="token function">git</span> checkout refs/meta/external-ids

Warning: you are leaving <span class="token number">1</span> commit behind, not connected to
any of your branches:

  3d75731 Initialized Gerrit Code Review <span class="token number">3.9</span>.1

If you want to keep it by creating a new branch, this may be a good <span class="token function">time</span>
to <span class="token keyword">do</span> so with:

 <span class="token function">git</span> branch <span class="token operator">&lt;</span>new-branch-name<span class="token operator">&gt;</span> 3d75731

HEAD is now at a6dfc98 Create Account via API
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>git log</code> 命令查看提交记录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log

commit a6dfc98ea7c42701f43d99e9c1101e08c16338d8 <span class="token punctuation">(</span>HEAD<span class="token punctuation">)</span>
Author: gerrit <span class="token operator">&lt;</span>gerrit@10.1.1.1<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span>
Date:   Fri Mar <span class="token number">22</span> <span class="token number">17</span>:36:54 <span class="token number">2024</span> +0800

    Create Account via API

commit 97fa98fd6e3b6e3a3f43ec835ded6794adedfcf2
Author: Gerrit Code Review <span class="token operator">&lt;</span>gerrit@localhost<span class="token operator">&gt;</span>
Date:   Fri Mar <span class="token number">22</span> <span class="token number">17</span>:30:13 <span class="token number">2024</span> +0800

    Create Account on First Login

commit b65752d32198b26297a6c2ee158781390c93d3fe
Author: Gerrit Code Review <span class="token operator">&lt;</span>gerrit@localhost<span class="token operator">&gt;</span>
Date:   Tue Mar <span class="token number">19</span> <span class="token number">14</span>:28:40 <span class="token number">2024</span> +0800

    Create Account on First Login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>create-account</code> 命令创建用户的 <code>commit id</code> 为 <code>a6dfc98ea7c42701f43d99e9c1101e08c16338d8</code>。</p><p>使用 <code>git show</code> 命令查看在此 <code>commit id</code> 中有哪些文件产生：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show a6dfc98ea7c42701f43d99e9c1101e08c16338d8

commit a6dfc98ea7c42701f43d99e9c1101e08c16338d8 <span class="token punctuation">(</span>HEAD<span class="token punctuation">)</span>
Author: gerrit <span class="token operator">&lt;</span>gerrit@10.1.1.1<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span>
Date:   Fri Mar <span class="token number">22</span> <span class="token number">17</span>:36:54 <span class="token number">2024</span> +0800

    Create Account via API

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/067ecad3e57b04170c4a24e1e9e5e09b150dfa8c b/067ecad3e57b04170c4a24e1e9e5e09b150dfa8c
new <span class="token function">file</span> mode <span class="token number">100644</span>
index 0000000<span class="token punctuation">..</span>d1d525e
--- /dev/null
+++ b/067ecad3e57b04170c4a24e1e9e5e09b150dfa8c
@@ -0,0 +1,3 @@
+<span class="token punctuation">[</span>externalId <span class="token string">&quot;mailto:zhangsan@mail.example.com&quot;</span><span class="token punctuation">]</span>
+       accountId <span class="token operator">=</span> <span class="token number">1000002</span>
+       email <span class="token operator">=</span> zhangsan@mail.example.com
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/13bcf42f9ed6cab205e0437a6d38cb32432dfd12 b/13bcf42f9ed6cab205e0437a6d38cb32432dfd12
new <span class="token function">file</span> mode <span class="token number">100644</span>
index 0000000<span class="token punctuation">..</span>2f32b58
--- /dev/null
+++ b/13bcf42f9ed6cab205e0437a6d38cb32432dfd12
@@ -0,0 +1,2 @@
+<span class="token punctuation">[</span>externalId <span class="token string">&quot;username:zhangsan&quot;</span><span class="token punctuation">]</span>
+       accountId <span class="token operator">=</span> <span class="token number">1000002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除在此 <code>commit id</code> 中产生的文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> 067ecad3e57b04170c4a24e1e9e5e09b150dfa8c
<span class="token function">rm</span> 13bcf42f9ed6cab205e0437a6d38cb32432dfd12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>git commit</code> 命令将暂存区的内容添加到本地仓库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&quot;remove user zhangsan&quot;</span>

<span class="token punctuation">[</span>detached HEAD eaae658<span class="token punctuation">]</span> remove user zhangsan
 <span class="token number">2</span> files changed, <span class="token number">5</span> deletions<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
 delete mode <span class="token number">100644</span> 067ecad3e57b04170c4a24e1e9e5e09b150dfa8c
 delete mode <span class="token number">100644</span> 13bcf42f9ed6cab205e0437a6d38cb32432dfd12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>git update-ref</code> 命令更新引用，应用到 <code>NoteDb</code> 数据库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> update-ref refs/meta/external-ids <span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> rev-parse HEAD<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code>git push</code> 命令将本地仓库推送到远程仓库中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin HEAD:refs/meta/external-ids

Enumerating objects: <span class="token number">3</span>, done.
Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, done.
Delta compression using up to <span class="token number">2</span> threads
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2</span>/2<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2</span>/2<span class="token punctuation">)</span>, <span class="token number">229</span> bytes <span class="token operator">|</span> <span class="token number">229.00</span> KiB/s, done.
Total <span class="token number">2</span> <span class="token punctuation">(</span>delta <span class="token number">1</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span> <span class="token punctuation">(</span>from <span class="token number">0</span><span class="token punctuation">)</span>
To /home/gerrit/project/<span class="token punctuation">..</span>/review_site/git/All-Users.git/
   a6dfc98<span class="token punctuation">..</span>eaae658  HEAD -<span class="token operator">&gt;</span> refs/meta/external-ids
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用以下命令修改 <code>zhangsan</code> 用户信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> .ssh/wangwu_id_rsa.pub <span class="token operator">|</span> <span class="token function">ssh</span> gerrit gerrit set-account --full-name zhangsan --add-email zhangsan@mail.example.com --add-ssh-key - wangzhangsanwu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次登录 Gerrit 服务器即可。</p>`,34),l=[t];function d(o,r){return s(),a("div",null,l)}const v=n(c,[["render",d],["__file","external_id.html.vue"]]);export{v as default};
