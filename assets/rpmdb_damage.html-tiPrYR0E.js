import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,f as s}from"./app-QHX7eKIM.js";const r={},d=s(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p><strong>报错日志如下：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span>

error: rpmdb: BDB0113 Thread/process <span class="token number">1384218</span>/140542473127808 failed: BDB1507 Thread died <span class="token keyword">in</span> Berkeley DB library
error: db5 error<span class="token punctuation">(</span>-30973<span class="token punctuation">)</span> from dbenv-<span class="token operator">&gt;</span>failchk: BDB0087 DB_RUNRECOVERY: Fatal error, run database recovery
error: cannot <span class="token function">open</span> Packages index using db5 -  <span class="token punctuation">(</span>-30973<span class="token punctuation">)</span>
error: cannot <span class="token function">open</span> Packages database <span class="token keyword">in</span> /var/lib/rpm
Error: Error: rpmdb <span class="token function">open</span> failed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><p>一般是因为强制删除，损坏了 <code>rpm</code> 数据库。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><p>删除数据库文件（<code>__db*</code>）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/rpm/__db*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重新构建 <code>rpm</code> 数据库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">--rebuilddb</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),i=[d];function o(c,t){return n(),e("div",null,i)}const u=a(r,[["render",o],["__file","rpmdb_damage.html.vue"]]);export{u as default};
