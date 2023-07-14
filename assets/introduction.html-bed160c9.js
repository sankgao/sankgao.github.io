import{_ as n,o as e,c as t,f as s}from"./app-e7350bc1.js";const a={},l=s(`<p><strong>超文本标记语言</strong>（英语：HyperText Markup Language，简称：HTML）是一种用来结构化 Web 网页及其内容的标记语言。网页内容可以是：一组段落、一个重点信息列表、也可以含有图片和数据表。您可以使用 HTML 来建立自己的 WEB 站点，HTML 运行在浏览器上，由浏览器来解析。</p><p>HTML 不是一门编程语言，而是一种用于定义内容结构的标记语言。HTML 由一系列的元素组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。一对标签可以为一段文字或者一张图片添加超链接，将文字设置为斜体，改变字号，等等。</p><h2 id="html-发展史" tabindex="-1"><a class="header-anchor" href="#html-发展史" aria-hidden="true">#</a> HTML 发展史</h2><p>1990 年，由于对 Web 未来发展的远见，Tim Berners-Lee 提出了 <strong>超文本</strong>（Hypertext）的概念，<code>Hypertext</code> 包含了指向其他文本的链接，而不是像小说中的单一线性流。并在第二年在 <code>SGML</code>（en-US）的基础上将其正式定义为一个标记语言。<code>IETF</code>（en-US）于 1993 年正式开始制定 <strong>HTML 规范</strong>，并在经历了几个版本的草案后于 1995 年发布了 HTML2.0 版本。1994 年，Berners-Lee 为了 Web 发展而成立了 <code>W3C</code>（en-US）。1996 年，W3C 接管了 HTML 的标准化工作，并在一年后发布了 HTML3.2 推荐标准。1999 年，HTML4.0 发布，并在 2000 年成为 <code>ISO</code>（en-US）标准。</p><p>自那以后，W3C 几乎放弃了 HTML 而转向 XHTML，并于 2004 年成立了另一个独立的小组 WHATWG。幸运的是，WHATWG 后来又转回来参与了 HTML5 标准的制定，两个组织（译注：即 W3C 和 WHATWG）在 2008 年发布了第一份草案，并在 2014 年发布了 HTML5 标准的最终版。</p><h2 id="html-标签" tabindex="-1"><a class="header-anchor" href="#html-标签" aria-hidden="true">#</a> HTML 标签</h2><p>HTML 标记标签通常被称为 HTML 标签（HTML tag）。</p><ul><li>HTML 标签是由 <strong>尖括号包围</strong> 的关键词。比如：<code>&lt;html&gt;</code></li><li>HTML 标签通常是 <strong>成对出现</strong> 的称为 <strong>双标签</strong>。比如：<code>&lt;b&gt;</code> 和 <code>&lt;/b&gt;</code></li><li>HTML 标签只有一个尖括号的称为 <strong>单标签</strong>。比如：<code>&lt;br /&gt;</code></li><li>标签对中的第一个标签是 <strong>开始标签</strong>，第二个标签是 <strong>结束标签</strong></li></ul><div class="hint-container note"><p class="hint-container-title">注</p><p>开始标签常被称为 <strong>开放标签</strong>（opening tag），结束标签常称为 <strong>闭合标签</strong>（closing tag）</p></div><h2 id="html-元素" tabindex="-1"><a class="header-anchor" href="#html-元素" aria-hidden="true">#</a> HTML 元素</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                    ╭┈┈┈┈┈┈┈┈┈┈┈╮
                    ┆  Element  ┆
                    ╰┈┈┈┈┈┬┈┈┈┈┈╯
                          ▼ 
     ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┴┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
  开始标签              文本内容               结束标签
     ▼               ╰┈┈┈┈┬┈┈┈┈╯               ▼
╭┈┈┈┈┴┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┴┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┴┈┈┈┈╮
┆ &lt;div class=&quot;ab&quot;&gt;   this my content        &lt;/div&gt;  ┆
╰┈┈┈┈┈┈╱┈┈┈┈┈┈┈┈╲┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
   属性名称      属性值
    name        value
     ╰┈┈┈┈┈┈┬┈┈┈┈┈╯
     Attribute（属性）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HTML 元素指的是从开始标签（start tag）到结束标签（end tag）的所有代码。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>一些 HTML 元素没有内容（如 <code>&lt;br /&gt;</code> 元素）。这些元素称为 <strong>空元素</strong>。空元素没有 <strong>结束标签</strong></p></div><h2 id="html-属性" tabindex="-1"><a class="header-anchor" href="#html-属性" aria-hidden="true">#</a> HTML 属性</h2><p>HTML 标签可以拥有属性。属性提供了有关 HTML 元素的更多的信息。</p><ul><li>属性总是以 <strong>名称=值</strong> 对的形式出现。比如：<code>name=&quot;value&quot;</code></li><li>属性总是在 HTML 元素的开始标签中规定</li></ul><h2 id="语法规范" tabindex="-1"><a class="header-anchor" href="#语法规范" aria-hidden="true">#</a> 语法规范</h2><ul><li>始终在文档的 <strong>首行</strong> 声明文档类型</li><li>不要忘记 <strong>结束标签</strong></li><li>没有内容的 HTML 元素被称为 <strong>空元素</strong>。空元素是在开始标签中关闭的。比如：<code>&lt;br /&gt;</code></li><li>使用 <strong>小写</strong> 标签</li><li>使用 <strong>小写</strong> 属性和属性值，始终为属性值加 <strong>引号</strong></li><li>使用 <strong>小写</strong> 元素名</li><li>添加必需的属性</li><li>等号两边尽量 <strong>不要有空格</strong></li><li>属性间用 <strong>空格</strong> 分隔</li><li>避免 <strong>长代码行</strong>，避免代码行超过 <code>80</code> 个字符</li><li>增加空行来分隔大型或逻辑代码块。增加 <strong>两个空格</strong> 的缩进。请 <strong>勿使用</strong> <kbd>Tab</kbd> 键</li><li><strong>不推荐</strong> 省略 <code>&lt;html&gt;</code> 和 <code>&lt;body&gt;</code> 标签</li><li>可以省略 <code>&lt;head&gt;</code> 标签。默认地，浏览器会把 <code>&lt;body&gt;</code> 之前的所有元素添加到默认的 <code>&lt;head&gt;</code> 元素</li><li>HTML 文件名应该使用扩展名 <code>.html</code>（而不是 <code>.htm</code>）</li></ul><h2 id="html-文档声明" tabindex="-1"><a class="header-anchor" href="#html-文档声明" aria-hidden="true">#</a> HTML 文档声明</h2><ul><li><p>XHTML1.0</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot;</span>
<span class="token string">&quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>HTML4.01</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;</span>
<span class="token string">&quot;http://www.w3.org/TR/html4/loose.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>HTML5</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,20),i=[l];function o(d,r){return e(),t("div",null,i)}const g=n(a,[["render",o],["__file","introduction.html.vue"]]);export{g as default};