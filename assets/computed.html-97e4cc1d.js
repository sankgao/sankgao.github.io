import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,d as n,e as c,b as l,f as s}from"./app-3bc8cc96.js";const i={},u=s(`<h2 id="基础示例" tabindex="-1"><a class="header-anchor" href="#基础示例" aria-hidden="true">#</a> 基础示例</h2><p>模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。例如：有这样一个包含嵌套数组的对象：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> author <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John Doe&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;Vue 2 - Advanced Guide&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Vue 3 - Basic Guide&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Vue 4 - The Mystery&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据 <code>author</code> 是否已有一些书籍来展示不同的信息：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;p&gt;Has published books:&lt;/p&gt;
&lt;span&gt;{{ author.books.length &gt; 0 ? &#39;Yes&#39; : &#39;No&#39; }}&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的模板看起来有些复杂。必须认真看好一会儿才能明白它的计算依赖于 <code>author.books</code>。更重要的是，如果在模板中需要不止一次这样的计算，又不想将这样的代码在模板里重复好多遍。</p><p>因此推荐使用 <strong>计算属性</strong> 来描述依赖响应式状态的复杂逻辑。这是重构后的示例：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> author <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John Doe&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;Vue 2 - Advanced Guide&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Vue 3 - Basic Guide&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Vue 4 - The Mystery&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 一个计算属性 ref</span>
<span class="token keyword">const</span> publishedBooksMessage <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> author<span class="token punctuation">.</span>books<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;Yes&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;No&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Has published books:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ publishedBooksMessage }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d={href:"https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlYWN0aXZlLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYXV0aG9yID0gcmVhY3RpdmUoe1xuICBuYW1lOiAnSm9obiBEb2UnLFxuICBib29rczogW1xuICAgICdWdWUgMiAtIEFkdmFuY2VkIEd1aWRlJyxcbiAgICAnVnVlIDMgLSBCYXNpYyBHdWlkZScsXG4gICAgJ1Z1ZSA0IC0gVGhlIE15c3RlcnknXG4gIF1cbn0pXG5cbi8vIGEgY29tcHV0ZWQgcmVmXG5jb25zdCBwdWJsaXNoZWRCb29rc01lc3NhZ2UgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiBhdXRob3IuYm9va3MubGVuZ3RoID4gMCA/ICdZZXMnIDogJ05vJ1xufSlcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxwPkhhcyBwdWJsaXNoZWQgYm9va3M6PC9wPlxuICA8c3Bhbj57eyBwdWJsaXNoZWRCb29rc01lc3NhZ2UgfX08L3NwYW4+XG48L3RlbXBsYXRlPiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiXG4gIH1cbn0ifQ==",target:"_blank",rel:"noopener noreferrer"},r=s(`<p>在这里定义了一个计算属性 <code>publishedBooksMessage</code>。<code>computed()</code> 方法期望接收一个 <code>getter</code> 函数，返回值为一个 <strong>计算属性 ref</strong>。和其他一般的 ref 类似，通过 <code>publishedBooksMessage.value</code> 访问计算结果。计算属性 ref 也会在模板中自动解包，因此在模板表达式中引用时无需添加 <code>.value</code>。</p><p>Vue 的计算属性会自动追踪响应式依赖。它会检测到 <code>publishedBooksMessage</code> 依赖于 <code>author.books</code>，所以当 <code>author.books</code> 改变时，任何依赖于 <code>publishedBooksMessage</code> 的绑定都会同时更新。</p><p>也可参考：<a href="">为计算属性标注类型</a> <sup class="vt-badge ts"></sup></p><h2 id="计算属性缓存-vs-方法" tabindex="-1"><a class="header-anchor" href="#计算属性缓存-vs-方法" aria-hidden="true">#</a> 计算属性缓存 VS 方法</h2><p>在表达式中像这样调用一个函数也会获得和计算属性相同的结果：</p><div class="language-template line-numbers-mode" data-ext="template"><pre class="language-template"><code>&lt;p&gt;{{ calculateBooksMessage() }}&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 组件中</span>
<span class="token keyword">function</span> <span class="token function">calculateBooksMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> author<span class="token punctuation">.</span>books<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;Yes&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;No&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若将同样的函数定义为一个方法而不是计算属性，两种方式在结果上确实是完全相同的，然而，不同之处在于 <strong>计算属性值会基于其响应式依赖被缓存</strong>。一个计算属性仅会在其响应式依赖更新时才重新计算。这意味着只要 <code>author.books</code> 不改变，无论多少次访问 <code>publishedBooksMessage</code> 都会立即返回先前的计算结果，而不用重复执行 <code>getter</code> 函数。</p><p>这也解释了为什么下面的计算属性永远不会更新，因为 <code>Date.now()</code> 并不是一个响应式依赖：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相比之下，方法调用 <strong>总是</strong> 会在重渲染发生时再次执行函数。</p><p>为什么需要缓存呢？想象一下如果有一个非常耗性能的计算属性 <code>list</code>，需要循环一个巨大的数组并做许多计算逻辑，并且可能也有其他计算属性依赖于 <code>list</code>。没有缓存的话，会重复执行非常多次 <code>list</code> 的 <code>getter</code>，然而这实际上没有必要！如果您确定不需要缓存，那么也可以使用方法调用。</p><h2 id="可写计算属性" tabindex="-1"><a class="header-anchor" href="#可写计算属性" aria-hidden="true">#</a> 可写计算属性</h2><p>计算属性默认是只读的。当您尝试修改一个计算属性时，您会收到一个运行时警告。只在某些特殊场景中您可能才需要用到 “可写” 的属性，您可以通过同时提供 <code>getter</code> 和 <code>setter</code> 来创建：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> firstName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> lastName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Doe&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> fullName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// getter</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> firstName<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> lastName<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// setter</span>
  <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注意：这里使用的是解构赋值语法</span>
    <span class="token punctuation">[</span>firstName<span class="token punctuation">.</span>value<span class="token punctuation">,</span> lastName<span class="token punctuation">.</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> newValue<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在当您再运行 <code>fullName.value = &#39;John Doe&#39;</code> 时，setter 会被调用而 <code>firstName</code> 和 <code>lastName</code> 会随之更新。</p><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><h3 id="getter-不应有副作用" tabindex="-1"><a class="header-anchor" href="#getter-不应有副作用" aria-hidden="true">#</a> Getter 不应有副作用</h3><p>计算属性的 <code>getter</code> 应只做计算而没有任何其他的副作用，这一点非常重要，请务必牢记。举例来说，<strong>不要在 getter 中做异步请求或者更改 DOM</strong>！</p><p>一个计算属性的声明中描述的是如何根据其他值派生一个值。因此 <code>getter</code> 的职责应该仅为计算和返回该值。</p><h3 id="避免直接修改计算属性值" tabindex="-1"><a class="header-anchor" href="#避免直接修改计算属性值" aria-hidden="true">#</a> 避免直接修改计算属性值</h3><p>从计算属性返回的值是派生状态。可以把它看作是一个 “临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。</p>`,22);function k(v,g){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[n("a",d,[c("在演练场中尝试一下"),l(a)])]),r])}const h=e(i,[["render",k],["__file","computed.html.vue"]]);export{h as default};