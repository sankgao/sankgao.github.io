import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,f as e}from"./app-6H9zQLzr.js";const i={},t=e(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>在使用 <code>git commit</code> 时出现的错误：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Author identity unknown

*** Please tell me <span class="token function">who</span> you are.

Run

  <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;you@example.com&quot;</span>
  <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Your Name&quot;</span>

to <span class="token builtin class-name">set</span> your account&#39;s default identity.
Omit <span class="token parameter variable">--global</span> to <span class="token builtin class-name">set</span> the identity only <span class="token keyword">in</span> this repository.

fatal: empty ident name <span class="token punctuation">(</span>for <span class="token operator">&lt;</span>zhangsan@localhost.localdomain<span class="token operator">&gt;</span><span class="token punctuation">)</span> not allowed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><p>当前存储库没有设置用户身份，即不知道提交的用户身份信息。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><p>在当前存储库中设置用户身份信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Your Name&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;you@example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>--global</strong>：用于设置全局用户身份；不带此选项只在当前存储库中设置用户身份</li><li><strong>user.name</strong>：设置用户名</li><li><strong>user.email</strong>：设置用户邮箱</li></ul><p>执行以上命令后再次使用 <code>git commit</code> 提交即可。</p>`,10),l=[t];function o(r,c){return a(),s("div",null,l)}const p=n(i,[["render",o],["__file","no_author_identity.html.vue"]]);export{p as default};
