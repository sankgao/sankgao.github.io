import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as p,b as e,e as a,d as n,w as d,f as s}from"./app-o2rgL8_c.js";const r={},u=s(`<p>数据绑定的一个常见需求场景是操纵元素的 CSS <strong>class 列表</strong> 和 <strong>内联样式</strong>。因为 <code>class</code> 和 <code>style</code> 都是 attribute，我们可以和其他 attribute 一样使用 <code>v-bind</code> 将它们和动态的字符串绑定。但是，在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。因此，Vue 专门为 <code>class</code> 和 <code>style</code> 的 <code>v-bind</code> 用法提供了特殊的功能增强。除了字符串外，<strong>表达式</strong> 的值也可以是对象或数组。</p><h2 id="绑定-html-class" tabindex="-1"><a class="header-anchor" href="#绑定-html-class" aria-hidden="true">#</a> 绑定 HTML class</h2><h3 id="绑定对象" tabindex="-1"><a class="header-anchor" href="#绑定对象" aria-hidden="true">#</a> 绑定对象</h3><p>给 <code>:class</code>（<code>v-bind:class</code> 的缩写）传递一个对象来动态切换 class：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;div :class=&quot;{ active: isActive }&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),v=e("code",null,"active",-1),m=e("code",null,"isActive",-1),g={href:"https://developer.mozilla.org/en-US/docs/Glossary/Truthy",target:"_blank",rel:"noopener noreferrer"},b=s(`<p>你可以在对象中写多个字段来操作多个 class。此外，<code>:class</code> 指令也可以和一般的 <code>class</code> attribute 共存。例如：下面这样的状态：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> isActive <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> hasError <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配合以下模板：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;div
  class=&quot;static&quot;
  :class=&quot;{ active: isActive, &#39;text-danger&#39;: hasError }&quot;
&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染的结果会是：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;div class=&quot;static active&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当 <code>isActive</code> 或者 <code>hasError</code> 改变时，class 列表会随之更新。例如：如果 <code>hasError</code> 变为 <code>true</code>，class 列表也会变成 <code>&quot;static active text-danger&quot;</code>。</p><p>绑定的对象并不一定需要写成内联字面量的形式，也可以直接绑定一个对象：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> classObject <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;text-danger&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;div :class=&quot;classObject&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),k=s(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> isActive <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> classObject <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">active</span><span class="token operator">:</span> isActive<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>error<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
  <span class="token string-property property">&#39;text-danger&#39;</span><span class="token operator">:</span> error<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> error<span class="token punctuation">.</span>value<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;fatal&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;div :class=&quot;classObject&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="绑定数组" tabindex="-1"><a class="header-anchor" href="#绑定数组" aria-hidden="true">#</a> 绑定数组</h3><p>给 <code>:class</code> 绑定一个数组来渲染多个 CSS class：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> activeClass <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> errorClass <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;text-danger&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;div :class=&quot;[activeClass, errorClass]&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>渲染的结果是：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;div class=&quot;active text-danger&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你也想在数组中有条件地渲染某个 class，你可以使用三元表达式：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;div :class=&quot;[isActive ? activeClass : &#39;&#39;, errorClass]&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>errorClass</code> 会一直存在，但 <code>activeClass</code> 只会在 <code>isActive</code> 为真时才存在。</p><p>然而，这可能在有多个依赖条件的 class 时会有些冗长。因此也可以在数组中嵌套对象：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;div :class=&quot;[{ active: isActive }, errorClass]&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在组件上使用" tabindex="-1"><a class="header-anchor" href="#在组件上使用" aria-hidden="true">#</a> 在组件上使用</h3><p>对于只有一个根元素的组件，当你使用了 <code>class</code> attribute 时，这些 class 会被添加到根元素上，并与该元素上已有的 class 合并。</p><p>例如：如果你声明了一个组件名叫 <code>MyComponent</code>，模板如下：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;!-- 子组件模板 --&gt;
&lt;p class=&quot;foo bar&quot;&gt;Hi!&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用时添加一些 class：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;!-- 在使用组件时 --&gt;
&lt;MyComponent class=&quot;baz boo&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染出的 HTML 为：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;p class=&quot;foo bar baz boo&quot;&gt;Hi!&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Class 的绑定也是同样的：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;MyComponent :class=&quot;{ active: isActive }&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当 <code>isActive</code> 为真时，被渲染的 HTML 会是：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;p class=&quot;foo bar active&quot;&gt;Hi!&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你的组件有多个根元素，你将需要指定哪个根元素来接收这个 class。你可以通过组件的 <code>$attrs</code> 属性来实现指定：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;!-- MyComponent 模板使用 $attrs 时 --&gt;
&lt;p :class=&quot;$attrs.class&quot;&gt;Hi!&lt;/p&gt;
&lt;span&gt;This is a child component&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;MyComponent class=&quot;baz&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将被渲染为：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>baz<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hi!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is a child component<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在 <a href="">透传 Attribute</a> 中了解更多组件的 attribute 继承的细节。</p><h2 id="绑定内联样式" tabindex="-1"><a class="header-anchor" href="#绑定内联样式" aria-hidden="true">#</a> 绑定内联样式</h2><h3 id="绑定对象-1" tabindex="-1"><a class="header-anchor" href="#绑定对象-1" aria-hidden="true">#</a> 绑定对象</h3>`,33),h=e("code",null,":style",-1),f={href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"style",-1),y=s(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> activeColor <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fontSize <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;div :style=&quot;{ color: activeColor, fontSize: fontSize + &#39;px&#39; }&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>尽管推荐使用 <code>camelCase</code>，但 <code>:style</code> 也支持 <code>kebab-cased</code> 形式的 CSS 属性 key（对应其 CSS 中的实际名称）。例如：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;div :style=&quot;{ &#39;font-size&#39;: fontSize + &#39;px&#39; }&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>直接绑定一个样式对象通常是一个好主意，这样可以使模板更加简洁：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> styleObject <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&#39;13px&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;div :style=&quot;styleObject&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同样的，如果样式对象需要更复杂的逻辑，也可以使用返回样式对象的计算属性。</p><h3 id="绑定数组-1" tabindex="-1"><a class="header-anchor" href="#绑定数组-1" aria-hidden="true">#</a> 绑定数组</h3><p>给 <code>:style</code> 绑定一个包含多个样式对象的数组。这些对象会被合并后渲染到同一元素上：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;div :style=&quot;[baseStyles, overridingStyles]&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="自动前缀" tabindex="-1"><a class="header-anchor" href="#自动前缀" aria-hidden="true">#</a> 自动前缀</h3>`,12),_=e("code",null,":style",-1),q={href:"https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix",target:"_blank",rel:"noopener noreferrer"},C=s(`<h3 id="样式多值" tabindex="-1"><a class="header-anchor" href="#样式多值" aria-hidden="true">#</a> 样式多值</h3><p>你可以对一个样式属性提供多个（不同前缀的）值。例如：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;div :style=&quot;{ display: [&#39;-webkit-box&#39;, &#39;-ms-flexbox&#39;, &#39;flex&#39;] }&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>数组仅会渲染浏览器支持的最后一个值。在这个示例中，在支持不需要特别前缀的浏览器中都会渲染为 <code>display: flex</code>。</p>`,4);function j(S,w){const t=l("ExternalLinkIcon"),i=l("RouterLink");return c(),p("div",null,[u,e("p",null,[a("上面的语法表示 "),v,a(" 是否存在取决于数据属性 "),m,a(" 的 "),e("a",g,[a("真假值"),n(t)]),a("。")]),b,e("p",null,[a("这也会渲染出相同的结果。也可以绑定一个返回对象的 "),n(i,{to:"/computers/framework/vue3/computed.html"},{default:d(()=>[a("计算属性")]),_:1}),a("。这是一个常见且很有用的技巧：")]),k,e("p",null,[h,a(" 支持绑定 JavaScript 对象值，对应的是 "),e("a",f,[a("HTML 元素的 "),x,a(" 属性"),n(t)]),a("：")]),y,e("p",null,[a("当你在 "),_,a(" 中使用了需要 "),e("a",q,[a("浏览器特殊前缀"),n(t)]),a(" 的 CSS 属性时，Vue 会自动为他们加上相应的前缀。Vue 是在运行时检查该属性是否支持在当前浏览器中使用。如果浏览器不支持某个属性，那么将尝试加上各个浏览器特殊前缀，以找到哪一个是被支持的。")]),C])}const H=o(r,[["render",j],["__file","class_and_style_bind.html.vue"]]);export{H as default};