import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-b3fab041.js";const t={},p=e(`<p>变量是存放数据值的容器。</p><p>与其他编程语言不同，Python 没有声明变量的命令。</p><p>首次为其赋值时，才会创建变量。</p><p>语法格式：<code>variablename = value</code>。</p><p>字符串变量可以使用单引号或双引号进行声明。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>my_name <span class="token operator">=</span> <span class="token string">&#39;TOM&#39;</span>
schoolName <span class="token operator">=</span> <span class="token string">&quot;存储数据&quot;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>my_name<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：TOM</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>schoolName<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：存储数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python-变量命名规则" tabindex="-1"><a class="header-anchor" href="#python-变量命名规则" aria-hidden="true">#</a> Python 变量命名规则</h2><ul><li>变量名必须以字母或下划线字符开头</li><li>变量名称不能以数字开头</li><li>变量名只能包含字母、数字字符和下划线（<code>A-z</code>、<code>0-9</code> 和 <code>_</code>）</li><li>变量名称区分大小写（<code>age</code>、<code>Age</code> 和 <code>AGE</code> 是三个不同的变量）</li></ul><h2 id="向多个变量赋值" tabindex="-1"><a class="header-anchor" href="#向多个变量赋值" aria-hidden="true">#</a> 向多个变量赋值</h2><p>Python 允许您在一行中为多个变量赋值。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token operator">=</span> <span class="token string">&quot;Orange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Cherry&quot;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：Orange</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：Banana</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：Cherry</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h2><p>在函数外部创建的变量（如上述所有实例所示）称为全局变量。</p><p>全局变量可以被函数内部和外部使用。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token string">&quot;awesome&quot;</span>


<span class="token keyword">def</span> <span class="token function">myfunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Python is &quot;</span> <span class="token operator">+</span> x<span class="token punctuation">)</span>


myfunc<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：Python is awesome</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在函数内部创建具有相同名称的变量，则该变量将是局部变量，并且只能在函数内部使用。具有相同名称的全局变量将保留原样，并拥有原始值。</p><p>例如：在函数内部创建一个与全局变量同名的变量。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token string">&quot;awesome&quot;</span>


<span class="token keyword">def</span> <span class="token function">myfunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> <span class="token string">&quot;fantastic&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Python is &quot;</span> <span class="token operator">+</span> x<span class="token punctuation">)</span>


myfunc<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：Python is fantastic</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Python is &quot;</span> <span class="token operator">+</span> x<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：Python is awesome</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="global-关键字" tabindex="-1"><a class="header-anchor" href="#global-关键字" aria-hidden="true">#</a> global 关键字</h2><p>通常，在函数内部创建变量时，该变量是局部变量，只能在该函数内部使用。</p><p>要在函数内部创建全局变量，您可以使用 <code>global</code> 关键字。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">myfunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> x
    x <span class="token operator">=</span> <span class="token string">&quot;fantastic&quot;</span>


myfunc<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Python is &quot;</span> <span class="token operator">+</span> x<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：Python is fantastic</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","variables.html.vue"]]);export{r as default};
