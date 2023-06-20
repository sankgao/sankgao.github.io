import{_ as t,o as e,c as d,f as n}from"./app-38dd5a76.js";const c={},l=n(`<p>HTML 中的预留字符必须被替换为 <strong>字符实体。</strong> 键盘上不存在的字符也可以由实体代替。 如果不存在实体名称，则可使用 <strong>实体编号</strong>、<strong>十进制</strong> 或 <strong>十六进制</strong> 的引用。</p><h2 id="html-实体" tabindex="-1"><a class="header-anchor" href="#html-实体" aria-hidden="true">#</a> HTML 实体</h2><p>在 HTML 中某些字符是预留的。</p><p>在 HTML 中不能使用小于号（<code>&lt;</code>）和大于号（<code>&gt;</code>），这是因为浏览器会误认为它们是标签。</p><p>如果希望 <strong>正确地显示</strong> 预留字符，我们必须在 HTML 源代码中使用字符实体（character entities）。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&amp;entity_name;

或者

&amp;#entity_number;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示小于号，必须这样写：<code>&amp;lt;</code>（实体名称） 或 <code>&amp;#60;</code>（实体数字）。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>使用实体名而不是数字的好处是，名称易于记忆。不过坏处是，浏览器也许并不支持所有实体名称（对实体数字的支持却很好）</p></div><h2 id="不间断空格" tabindex="-1"><a class="header-anchor" href="#不间断空格" aria-hidden="true">#</a> 不间断空格</h2><p>HTML 中的常用字符实体是不间断空格 <code>&amp;nbsp;</code>（non-breaking space）。</p><p>浏览器总是会截短 HTML 页面中的空格。如果您在文本中写 <code>10 </code>个空格，在显示该页面之前，浏览器会删除它们中的 <code>9</code> 个。</p><p>如需在页面中增加空格的数量，您需要使用 <code>&amp;nbsp;</code> 字符实体。</p><h2 id="html-中有用的字符实体" tabindex="-1"><a class="header-anchor" href="#html-中有用的字符实体" aria-hidden="true">#</a> HTML 中有用的字符实体</h2><p>实体名称对大小写敏感！</p><table><thead><tr><th style="text-align:center;">显示结果</th><th style="text-align:center;">描述</th><th style="text-align:center;">实体名称</th><th style="text-align:center;">实体编号</th></tr></thead><tbody><tr><td style="text-align:center;"></td><td style="text-align:center;">空格</td><td style="text-align:center;"><code>&amp;nbsp;</code></td><td style="text-align:center;"><code>&amp;#160;</code></td></tr><tr><td style="text-align:center;">&lt;</td><td style="text-align:center;">小于号</td><td style="text-align:center;"><code>&amp;lt;</code></td><td style="text-align:center;"><code>&amp;#60;</code></td></tr><tr><td style="text-align:center;">&gt;</td><td style="text-align:center;">大于号</td><td style="text-align:center;"><code>&amp;gt;</code></td><td style="text-align:center;"><code>&amp;#62;</code></td></tr><tr><td style="text-align:center;">&amp;</td><td style="text-align:center;">和号</td><td style="text-align:center;"><code>&amp;amp;</code></td><td style="text-align:center;"><code>&amp;#38;</code></td></tr><tr><td style="text-align:center;">&quot;</td><td style="text-align:center;">引号</td><td style="text-align:center;"><code>&amp;quot;</code></td><td style="text-align:center;"><code>&amp;#34;</code></td></tr><tr><td style="text-align:center;">&#39;</td><td style="text-align:center;">撇号</td><td style="text-align:center;"><code>&amp;apos; (IE不支持)</code></td><td style="text-align:center;"><code>&amp;#39;</code></td></tr><tr><td style="text-align:center;">￠</td><td style="text-align:center;">分（cent）</td><td style="text-align:center;"><code>&amp;cent;</code></td><td style="text-align:center;"><code>&amp;#162;</code></td></tr><tr><td style="text-align:center;">£</td><td style="text-align:center;">镑（pound）</td><td style="text-align:center;"><code>&amp;pound;</code></td><td style="text-align:center;"><code>&amp;#163;</code></td></tr><tr><td style="text-align:center;">¥</td><td style="text-align:center;">元（yen）</td><td style="text-align:center;"><code>&amp;yen;</code></td><td style="text-align:center;"><code>&amp;#165;</code></td></tr><tr><td style="text-align:center;">€</td><td style="text-align:center;">欧元（euro）</td><td style="text-align:center;"><code>&amp;euro;</code></td><td style="text-align:center;"><code>&amp;#8364;</code></td></tr><tr><td style="text-align:center;">§</td><td style="text-align:center;">小节</td><td style="text-align:center;"><code>&amp;sect;</code></td><td style="text-align:center;"><code>&amp;#167;</code></td></tr><tr><td style="text-align:center;">©</td><td style="text-align:center;">版权（copyright）</td><td style="text-align:center;"><code>&amp;copy;</code></td><td style="text-align:center;"><code>&amp;#169;</code></td></tr><tr><td style="text-align:center;">®</td><td style="text-align:center;">注册商标</td><td style="text-align:center;"><code>&amp;reg;</code></td><td style="text-align:center;"><code>&amp;#174;</code></td></tr><tr><td style="text-align:center;">™</td><td style="text-align:center;">商标</td><td style="text-align:center;"><code>&amp;trade;</code></td><td style="text-align:center;"><code>&amp;#8482;</code></td></tr><tr><td style="text-align:center;">×</td><td style="text-align:center;">乘号</td><td style="text-align:center;"><code>&amp;times;</code></td><td style="text-align:center;"><code>&amp;#215;</code></td></tr><tr><td style="text-align:center;">÷</td><td style="text-align:center;">除号</td><td style="text-align:center;"><code>&amp;divide;</code></td><td style="text-align:center;"><code>&amp;#247;</code></td></tr></tbody></table>`,15),a=[l];function r(i,s){return e(),d("div",null,a)}const g=t(c,[["render",r],["__file","entities.html.vue"]]);export{g as default};