import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as a,f as l}from"./app-OEeKShJw.js";const s={},n=l(`<p>超文本传输协议（Hypertext Transfer Protocol，缩写 HTTP）旨在启用客户端和服务器之间的通信。</p><p>HTTP 充当客户端和服务器之间的请求响应协议。</p><p>例如：客户端（浏览器）向服务器发送 HTTP 请求；然后服务器将响应返回客户端。响应包含有关请求的状态信息，也可能包含所请求的内容。</p><h2 id="http-请求方法" tabindex="-1"><a class="header-anchor" href="#http-请求方法" aria-hidden="true">#</a> HTTP 请求方法</h2><ul><li><strong>GET</strong></li><li><strong>POST</strong></li><li><strong>PUT</strong></li><li><strong>HEAD</strong></li><li><strong>DELETE</strong></li><li><strong>PATCH</strong></li><li><strong>OPTIONS</strong></li></ul><p>最常用的两种方法是：<code>GET</code> 和 <code>POST</code>。</p><h2 id="get-方法" tabindex="-1"><a class="header-anchor" href="#get-方法" aria-hidden="true">#</a> GET 方法</h2><p><code>GET</code> 用于 <strong>从指定资源</strong> 请求数据。</p><p>查询字符串（名称/值对）是在 GET 请求的 <strong>URL 中</strong> 发送的。例如：</p><div class="language-url line-numbers-mode" data-ext="url"><pre class="language-url"><code><span class="token path"><span class="token path-separator">/</span>test<span class="token path-separator">/</span>demo_form.php</span><span class="token query"><span class="token query-delimiter">?</span><span class="token pair"><span class="token key">name1</span>=<span class="token value">value1</span></span><span class="token pair-delimiter">&amp;</span><span class="token pair"><span class="token key">name2</span>=<span class="token value">value2</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="有关-get-请求的其他一些注释" tabindex="-1"><a class="header-anchor" href="#有关-get-请求的其他一些注释" aria-hidden="true">#</a> 有关 GET 请求的其他一些注释</h3><ul><li>GET 请求可被缓存</li><li>GET 请求保留在浏览器历史记录中</li><li>GET 请求可被收藏为书签</li><li>GET 请求不应在处理敏感数据时使用</li><li>GET 请求有长度限制</li><li>GET 请求只应当用于取回数据（不修改）</li></ul><h2 id="post-方法" tabindex="-1"><a class="header-anchor" href="#post-方法" aria-hidden="true">#</a> POST 方法</h2><p><code>POST</code> 用于 <strong>将数据发送到服务器</strong> 来创建/更新资源。</p><p>通过 POST 发送到服务器的数据存储在 HTTP 请求的 <strong>请求主体中</strong>。例如：</p><div class="language-url line-numbers-mode" data-ext="url"><pre class="language-url"><code><span class="token path">POST</span> /test/demo_form.php HTTP/1.1
<span class="token scheme">Host<span class="token scheme-delimiter">:</span></span> w3school.com.cn
<span class="token path">name1=value1&amp;name2=value2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有关-post-请求的其他一些注释" tabindex="-1"><a class="header-anchor" href="#有关-post-请求的其他一些注释" aria-hidden="true">#</a> 有关 POST 请求的其他一些注释</h3><ul><li>POST 请求不会被缓存</li><li>POST 请求不会保留在浏览器历史记录中</li><li>POST 不能被收藏为书签</li><li>POST 请求对数据长度没有要求</li></ul><h2 id="put-方法" tabindex="-1"><a class="header-anchor" href="#put-方法" aria-hidden="true">#</a> PUT 方法</h2><p><code>PUT</code> 用于 <strong>将数据发送到服务器</strong> 来创建/更新资源。</p><p>POST 和 PUT 之间的区别在于 PUT 请求是 <strong>幂等</strong> 的（idempotent）。也就是说，多次调用相同的 PUT 请求将始终产生相同的结果。相反，重复调用 POST 请求具有多次创建相同资源的副作用。</p><h2 id="head-方法" tabindex="-1"><a class="header-anchor" href="#head-方法" aria-hidden="true">#</a> HEAD 方法</h2><p>HEAD 与 GET 几乎相同，但没有响应主体。</p><p>例如：如果 GET 请求 <code>/users</code> 返回用户列表，那么 HEAD 请求 <code>/users</code> 将发出相同的请求，但不会返回用户列表。</p><p>HEAD 请求对于在实际发出 GET 请求之前（例如：在下载大文件或响应正文之前）检查 GET 请求将返回的内容很有用。</p><h2 id="delete-方法" tabindex="-1"><a class="header-anchor" href="#delete-方法" aria-hidden="true">#</a> DELETE 方法</h2><p>DELETE 方法删除指定的资源。</p><h2 id="options-方法" tabindex="-1"><a class="header-anchor" href="#options-方法" aria-hidden="true">#</a> OPTIONS 方法</h2><p>OPTIONS 方法描述目标资源的通信选项。</p><h2 id="比较-get-与-post" tabindex="-1"><a class="header-anchor" href="#比较-get-与-post" aria-hidden="true">#</a> 比较 GET 与 POST</h2><table><thead><tr><th style="text-align:center;">指令</th><th style="text-align:left;">GET</th><th style="text-align:left;">POST</th></tr></thead><tbody><tr><td style="text-align:center;">后退按钮/刷新</td><td style="text-align:left;">无害</td><td style="text-align:left;">数据会被重新提交（浏览器应该告知用户数据会被重新提交）</td></tr><tr><td style="text-align:center;">书签</td><td style="text-align:left;">可收藏为书签</td><td style="text-align:left;">不可收藏为书签</td></tr><tr><td style="text-align:center;">缓存</td><td style="text-align:left;">能被缓存</td><td style="text-align:left;">不能缓缓存</td></tr><tr><td style="text-align:center;">编码类型</td><td style="text-align:left;"><code>application/x-www-form-urlencoded</code></td><td style="text-align:left;"><code>application/x-www-form-urlencoded</code> 或 <code>multipart/form-data</code>。为二进制数据使用多重编码</td></tr><tr><td style="text-align:center;">历史</td><td style="text-align:left;">参数保留在浏览器历史中</td><td style="text-align:left;">参数不会保存在浏览器历史中</td></tr><tr><td style="text-align:center;">对数据长度的限制</td><td style="text-align:left;">当发送数据时，GET 方法向 URL 添加数据；URL 的长度是受限制的（URL 的最大长度是 2048 个字符）</td><td style="text-align:left;">无限制</td></tr><tr><td style="text-align:center;">对数据类型的限制</td><td style="text-align:left;">只允许 ASCII 字符</td><td style="text-align:left;">没有限制。也允许二进制数据</td></tr><tr><td style="text-align:center;">安全性</td><td style="text-align:left;">与 POST 相比，GET 的安全性较差，因为所发送的数据是 URL 的一部分。在发送密码或其他敏感信息时绝不要使用 GET</td><td style="text-align:left;">POST 比 GET 更安全，因为参数不会被保存在浏览器历史或 web 服务器日志中</td></tr><tr><td style="text-align:center;">可见性</td><td style="text-align:left;">数据在 URL 中对所有人都是可见的</td><td style="text-align:left;">数据不会显示在 URL 中</td></tr></tbody></table>`,31),d=[n];function r(i,o){return e(),a("div",null,d)}const h=t(s,[["render",r],["__file","methods.html.vue"]]);export{h as default};