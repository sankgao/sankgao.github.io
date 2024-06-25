import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,f as s}from"./app-BMJBhAfC.js";const t={},d=s(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git tag</code> 用于给特定的提交（commit）打上标签（tag）的命令。标签在 Git 中是一种静态引用，指向某个特定的提交。标签主要有两种类型：<strong>轻量标签</strong>（lightweight tag）和 <strong>附注标签</strong>（annotated tag）。</p><p>轻量标签只是一个指向特定提交的引用，没有额外的信息。而附注标签则是一个独立的 Git 对象，它除了包含指向特定提交的指针外，还包含了标签创建者的名字、邮箱、日期以及可选的注释信息，这些信息会被存储在 Git 数据库中并经过 GPG 签名验证。</p><p>使用 <code>git tag</code> 可以帮助开发者清晰地标记项目的重大版本、发布点或其他重要标签。例如：当开发团队完成一个稳定版本或重要开发标签时，他们可以使用 <code>git tag</code> 命令为该版本的提交打上标签，如 <code>v1.0.0</code>，以便后续可以方便地回溯、查看和管理代码库的历史状态。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>-a, --annotate</code></td><td style="text-align:left;">创建一个无符号、有注释的标签对象</td></tr><tr><td style="text-align:center;"><code>-d, --delete</code></td><td style="text-align:left;">删除指定标签</td></tr><tr><td style="text-align:center;"><code>-n&lt;num&gt;</code></td><td style="text-align:left;">指定在使用 <code>-l</code> 时打印多少行注释，默认是不打印任何注释行</td></tr><tr><td style="text-align:center;"><code>-l, --list</code></td><td style="text-align:left;">查看标签列表</td></tr><tr><td style="text-align:center;"><code>-m &lt;msg&gt;, --message=&lt;msg&gt;</code></td><td style="text-align:left;">给标签添加注释信息，如果给出多个 <code>-m</code> 选项，它们的值将作为单独的段落连接起来</td></tr><tr><td style="text-align:center;"><code>-s, --sign</code></td><td style="text-align:left;">制作一个 GPG 签名的标签，使用默认电子邮件地址的密钥</td></tr><tr><td style="text-align:center;"><code>-u &lt;key-id&gt;, --local-user=&lt;key-id&gt;</code></td><td style="text-align:left;">制作一个 GPG 签名的标签，使用给定的密钥</td></tr><tr><td style="text-align:center;"><code>-v, --verify</code></td><td style="text-align:left;">验证给定标签名称的 GPG 签名</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="创建标签" tabindex="-1"><a class="header-anchor" href="#创建标签" aria-hidden="true">#</a> 创建标签</h3><p>例如：创建 <code>v1.0.0</code> 标签。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：为指定 <code>commit id</code> 创建 <code>v1.0.0</code> 标签。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag v1.0.0 <span class="token operator">&lt;</span>commit id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建带描述的标签" tabindex="-1"><a class="header-anchor" href="#创建带描述的标签" aria-hidden="true">#</a> 创建带描述的标签</h3><p>例如：创建带描述的标签。<code>-a</code> 用于创建带注释的标签；<code>-m</code> 添加注释信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.0.0 <span class="token parameter variable">-m</span> <span class="token string">&quot;Version 1.0.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建带签名的标签" tabindex="-1"><a class="header-anchor" href="#创建带签名的标签" aria-hidden="true">#</a> 创建带签名的标签</h3><p>例如：创建带签名的标签。<code>-s</code> 用于制作一个 GPG 签名的标签；<code>-m</code> 添加注释信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-s</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;GPG-signed tag.&quot;</span> v3.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>验证标签签名的有效性：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-v</span> v3.0.0

object 435f67c85d077d2ea31b4b0a3ea17ca0118194a5
<span class="token builtin class-name">type</span> commit
tag v3.0.0
tagger zhangsan <span class="token operator">&lt;</span>zhangsan@example.com<span class="token operator">&gt;</span> <span class="token number">1719298048</span> +0800

GPG-signed tag<span class="token punctuation">..</span>
gpg: Signature made Tue <span class="token number">25</span> Jun <span class="token number">2024</span> 02:47:28 PM CST
gpg:                using RSA key 152CC437FCE6EC964E67BD33DEE43202523B1835
gpg:                issuer <span class="token string">&quot;zhangsan@example.com&quot;</span>
gpg: Good signature from <span class="token string">&quot;zhangsan &lt;zhangsan@example.com&gt;&quot;</span> <span class="token punctuation">[</span>ultimate<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除指定标签" tabindex="-1"><a class="header-anchor" href="#删除指定标签" aria-hidden="true">#</a> 删除指定标签</h3><p>例如：删除 <code>v1.0.0</code> 标签。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-d</span> v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看标签列表" tabindex="-1"><a class="header-anchor" href="#查看标签列表" aria-hidden="true">#</a> 查看标签列表</h3><p>例如：查看本地所有标签。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-l</span>
<span class="token comment"># 或</span>
<span class="token function">git</span> tag

v1.0.0
v1.0.1
v1.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：查看本地以 <code>v1.0</code> 开头的标签。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-l</span> v1.0*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：查看标签列表时打印注释行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-n1</span>

v1.0.0          Version <span class="token number">1.0</span>.0
v1.0.1          Version <span class="token number">1.0</span>.1
v1.1.0          <span class="token function">add</span> test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定提交创建标签" tabindex="-1"><a class="header-anchor" href="#指定提交创建标签" aria-hidden="true">#</a> 指定提交创建标签</h3><p>例如：为前一个提交，创建标签。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag v1.1 HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：为第五个提交，创建标签。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag v1.0 HEAD~5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,35),i=[d];function l(c,r){return a(),n("div",null,i)}const g=e(t,[["render",l],["__file","git_tag.html.vue"]]);export{g as default};
