import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as t,c as o,d as a,b as e,f as n}from"./app-jYSCuJZ0.js";const l={},c=n(`<h2 id="条件选择语句" tabindex="-1"><a class="header-anchor" href="#条件选择语句" aria-hidden="true">#</a> 条件选择语句</h2><p>条件选择语句主要有 3 中形式，分别为 <strong>if 语句</strong>、<strong>if···else 语句</strong> 和 <strong>if···elif···else 多分支语句。</strong></p><h3 id="if-语句" tabindex="-1"><a class="header-anchor" href="#if-语句" aria-hidden="true">#</a> if 语句</h3><p><strong>语法格式：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> 条件表达式<span class="token punctuation">:</span>
    执行的代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>if 语句的流程：</strong></p>`,6),r=n(`<p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>num <span class="token operator">=</span> <span class="token number">5</span>

<span class="token keyword">if</span> num <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;num 的值为 5&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if···else-语句" tabindex="-1"><a class="header-anchor" href="#if···else-语句" aria-hidden="true">#</a> if···else 语句</h3><p><strong>语法格式：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> 条件表达式<span class="token punctuation">:</span>
    执行的代码 <span class="token number">1</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    执行的代码 <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>if···else 语句的流程：</strong></p>`,6),d=n(`<p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>num <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">if</span> num <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;num 的值为 5&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;num 的值不为 5&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>if···else 语句</strong> 可以使用条件表达式简化：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>num <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;num 的值为 5&quot;</span><span class="token punctuation">)</span> <span class="token keyword">if</span> num <span class="token operator">==</span> <span class="token number">5</span> <span class="token keyword">else</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;num 的值不为 5&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 <code>num = 5</code>，就输出：“num 的值为 5”；否则就输出：“num 的值不为 5”</p></div><h3 id="if···elif···else-语句" tabindex="-1"><a class="header-anchor" href="#if···elif···else-语句" aria-hidden="true">#</a> if···elif···else 语句</h3><p><strong>语法格式：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> 条件表达式 <span class="token number">1</span><span class="token punctuation">:</span>
    执行的代码 <span class="token number">1</span>
<span class="token keyword">elif</span> 条件表达式 <span class="token number">2</span><span class="token punctuation">:</span>
    执行的代码 <span class="token number">2</span>
<span class="token keyword">elif</span> 条件表达式 <span class="token number">3</span><span class="token punctuation">:</span>
    执行的代码 <span class="token number">3</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    执行的代码 <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>if···elif···else 语句的流程：</strong></p>`,7),u=n(`<p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>age1 <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入您的年龄： &#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>age1 <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span>age1 <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;您的年龄是 </span><span class="token interpolation"><span class="token punctuation">{</span>age1<span class="token punctuation">}</span></span><span class="token string">，不合法，童工&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> <span class="token number">18</span> <span class="token operator">&lt;=</span> age1 <span class="token operator">&lt;=</span> <span class="token number">60</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;您的年龄是 </span><span class="token interpolation"><span class="token punctuation">{</span>age1<span class="token punctuation">}</span></span><span class="token string">，合法&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> age1 <span class="token operator">&gt;</span> <span class="token number">60</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;您的年龄是 </span><span class="token interpolation"><span class="token punctuation">{</span>age1<span class="token punctuation">}</span></span><span class="token string">，退休年龄&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;您的输入不符合语法，请输入 0 以上的数字&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">使用 if 选择语句时，尽量使用较为规范的格式</p><ul><li><p>当使用布尔型的变量作为判断条件时，假设布尔型变量为 flag，较为规范的格式：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> flag<span class="token punctuation">:</span>  <span class="token comment"># 表示为真</span>
<span class="token keyword">if</span> <span class="token keyword">not</span> flage<span class="token punctuation">:</span>  <span class="token comment"># 表示为假</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>不规范的格式：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> flag <span class="token operator">==</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
<span class="token keyword">if</span> flag <span class="token operator">==</span> Flage<span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>使用 <code>if flag:</code> 这样的格式，可以避免将 <code>if flag == True:</code>，错写成 <code>if flag = True:</code></p></div><h3 id="if-语句嵌套" tabindex="-1"><a class="header-anchor" href="#if-语句嵌套" aria-hidden="true">#</a> if 语句嵌套</h3><p><strong>语法格式：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> 条件表达式 <span class="token number">1</span><span class="token punctuation">:</span>
    执行的代码 <span class="token number">1</span>
    <span class="token keyword">if</span> 条件表达式 <span class="token number">2</span><span class="token punctuation">:</span>
        执行的代码 <span class="token number">2</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        执行的代码 <span class="token number">3</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    执行的代码 <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>if 语句嵌套的流程：</strong></p>`,7),k=n(`<p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>money <span class="token operator">=</span> <span class="token number">1</span>
seat <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">if</span> money <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;有钱，请上车&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> seat <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;有空座位，可以坐下&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;没有空座位，不可以坐下&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;没钱，不能上车&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>if 语句嵌套</strong> 有多种嵌套方式，嵌套时需要控制好不同级别代码块的缩进量</p></div><h3 id="条件表达式" tabindex="-1"><a class="header-anchor" href="#条件表达式" aria-hidden="true">#</a> 条件表达式</h3><p>条件表达式又叫：三目运算符、三元运算符或三元表达式，和上面的 <strong>if···else 语句使用条件表达式简化</strong> 原理一样。</p><p><strong>语法格式</strong>：<code>条件成立执行的代码1 if 条件表达式 else 条件不成立执行的代码2</code></p><p>使用条件表达式时，先计算 <strong>if 条件表达式</strong>，如果结果为 <code>True</code>，返回 <strong>if 条件表达式</strong> 左边的值，否则返回 <code>else</code> 右边的值</p><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">2</span>

<span class="token comment"># 如果 a &gt; b，c 就等于 a；否则 c 就等于 b</span>
c <span class="token operator">=</span> a <span class="token keyword">if</span> a <span class="token operator">&gt;</span> b <span class="token keyword">else</span> b

<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h2><ul><li><strong>while 循环</strong>：一直重复，直到条件不满足时才结束循环，又叫条件循环。只要条件为真，就会一直循环</li><li><strong>for 循环</strong>：重复一定次数的循环，又叫计次循环</li></ul><h3 id="while-循环语句" tabindex="-1"><a class="header-anchor" href="#while-循环语句" aria-hidden="true">#</a> while 循环语句</h3><p>while 循环是通过一个条件来控制是否要反复执行代码。while 循环语句中，<code>else 语句</code> 可以省略不写。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在使用 while 循环时，一定不要忘记添加将循环条件变为 <code>False</code> 的代码，否则将产生死循环</p></div><p><strong>语法格式：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">while</span> 条件表达式<span class="token punctuation">:</span>
    重复执行的代码
<span class="token punctuation">[</span><span class="token keyword">else</span><span class="token punctuation">:</span>
    执行的代码<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>while 循环语句的流程：</strong></p>`,17),v=n(`<p>例如：计算 1-100 累加和。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">1</span>
result <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">while</span> x <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">:</span>
    <span class="token comment"># result = result + x</span>
    result <span class="token operator">+=</span> x
    <span class="token comment"># x = x + 1</span>
    x <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：5050</span>

或

x <span class="token operator">=</span> <span class="token number">1</span>
result <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">while</span> x <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">:</span>
    <span class="token comment"># result = result + x</span>
    result <span class="token operator">+=</span> x
    <span class="token comment"># x = x + 1</span>
    x <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：5050</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>else 语句</strong> 只有在 while 循环语句正常退出后才会执行，异常中断或者遇到 <code>break</code> 和 <code>return</code> 时，不会执行 <code>else 语句</code></p></div><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">1</span>
result <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">while</span> x <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">:</span>
    <span class="token comment"># result = result + x</span>
    result <span class="token operator">+=</span> x
    <span class="token comment"># x = x + 1</span>
    x <span class="token operator">+=</span> <span class="token number">1</span>
    
    <span class="token keyword">if</span> x <span class="token operator">==</span> <span class="token number">20</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x 值为 20 时中断&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：x 值为 20 时中断</span>
        <span class="token keyword">break</span>
<span class="token comment"># 异常退出不执行 else 语句</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-循环语句" tabindex="-1"><a class="header-anchor" href="#for-循环语句" aria-hidden="true">#</a> for 循环语句</h3><p><strong>for 循环</strong> 是一个依次重复执行的循环。通常用于枚举或遍历序列，以及迭代对象中的元素。for 循环语句中，<strong>else 语句</strong> 可以省略不写。</p><p><strong>语法格式：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> 迭代变量 <span class="token keyword">in</span> 序列<span class="token punctuation">:</span>
    重复执行的代码
<span class="token punctuation">[</span><span class="token keyword">else</span><span class="token punctuation">:</span>
    执行的代码<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for 循环语句的流程：</p>`,10),m=n(`<p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>str1 <span class="token operator">=</span> <span class="token string">&#39;itheima&#39;</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> str1<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;for over&quot;</span><span class="token punctuation">)</span>

或

str1 <span class="token operator">=</span> <span class="token string">&#39;itheima&#39;</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> str1<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;for over&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>else 语句</strong> 只有在 for 循环语句正常退出后才会执行，异常中断或者遇到 <code>break</code> 和 <code>return</code> 时，不会执行 <strong>else 语句</strong></p></div><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>str1 <span class="token operator">=</span> <span class="token string">&#39;itheima&#39;</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> str1<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>

    <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;i 等于 e 时中断&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
<span class="token comment"># 异常中断，else 语句不执行</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;for over&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环语句嵌套" tabindex="-1"><a class="header-anchor" href="#循环语句嵌套" aria-hidden="true">#</a> 循环语句嵌套</h3>`,6),b=n(`<p><strong>while 循环语句嵌套：</strong></p><p><strong>语法格式：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">while</span> 条件表达式 <span class="token number">1</span><span class="token punctuation">:</span>
    重复执行的代码 <span class="token number">1</span>
    <span class="token keyword">while</span> 条件表达式 <span class="token number">2</span><span class="token punctuation">:</span>
        重复执行的代码 <span class="token number">2</span>
    <span class="token punctuation">[</span><span class="token keyword">else</span><span class="token punctuation">:</span>
        执行的代码 <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">else</span><span class="token punctuation">:</span>
    执行的代码 <span class="token number">2</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>while 循环语句嵌套的流程：</strong></p>`,4),g=n(`<p>例如：打印正方形的星星，一行输出星星的个数是 5 个，打印 5 行。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>j <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">while</span> j <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
    i <span class="token operator">=</span> <span class="token number">0</span>
    
    <span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        i <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    j <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h=n(`<p><strong>for 循环语句嵌套：</strong></p><p><strong>语法格式：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> 迭代变量 <span class="token keyword">in</span> 序列<span class="token punctuation">:</span>
    重复执行的代码 <span class="token number">1</span>
    <span class="token keyword">for</span> 迭代变量 <span class="token keyword">in</span> 序列<span class="token punctuation">:</span>
        重复执行的代码 <span class="token number">2</span>
    <span class="token punctuation">[</span><span class="token keyword">else</span><span class="token punctuation">:</span>
        执行的代码 <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">else</span><span class="token punctuation">:</span>
    执行的代码 <span class="token number">2</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>for 循环语句嵌套的流程：</strong></p>`,4),y=n(`<p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>str1 <span class="token operator">=</span> <span class="token string">&#39;itheima&#39;</span>
str2 <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> str1<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    
    <span class="token keyword">for</span> j <span class="token keyword">in</span> str2<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),w=n(`<h2 id="相互嵌套" tabindex="-1"><a class="header-anchor" href="#相互嵌套" aria-hidden="true">#</a> 相互嵌套</h2><ul><li><strong>while 循环</strong> 也可以嵌套 <strong>for 循环</strong> 和 <strong>if 语句</strong></li><li><strong>for 循环</strong> 也可以嵌套 <strong>while 循环</strong> 和 <strong>if 语句</strong></li></ul><h3 id="while-循环嵌套-for-循环" tabindex="-1"><a class="header-anchor" href="#while-循环嵌套-for-循环" aria-hidden="true">#</a> while 循环嵌套 for 循环</h3><p><strong>语法格式：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">while</span> 条件表达式 <span class="token number">1</span><span class="token punctuation">:</span>
    重复执行的代码 <span class="token number">1</span>
    <span class="token keyword">for</span> 迭代变量 <span class="token keyword">in</span> 序列<span class="token punctuation">:</span>
        重复执行的代码 <span class="token number">2</span>
    <span class="token punctuation">[</span><span class="token keyword">else</span><span class="token punctuation">:</span>
        执行的代码 <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">else</span><span class="token punctuation">:</span>
    执行的代码 <span class="token number">2</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while-循环嵌套-if-语句" tabindex="-1"><a class="header-anchor" href="#while-循环嵌套-if-语句" aria-hidden="true">#</a> while 循环嵌套 if 语句</h3><p><strong>语法格式：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">while</span> 条件表达式 <span class="token number">1</span><span class="token punctuation">:</span>
    重复执行的代码 <span class="token number">1</span>
    <span class="token keyword">if</span> 条件表达式 <span class="token number">2</span><span class="token punctuation">:</span>
        执行的代码 <span class="token number">1</span>
<span class="token punctuation">[</span><span class="token keyword">else</span><span class="token punctuation">:</span>
    执行的代码 <span class="token number">2</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-循环嵌套-while-循环" tabindex="-1"><a class="header-anchor" href="#for-循环嵌套-while-循环" aria-hidden="true">#</a> for 循环嵌套 while 循环</h3><p><strong>语法格式：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> 迭代变量 <span class="token keyword">in</span> 序列<span class="token punctuation">:</span>
    重复执行的代码 <span class="token number">1</span>
    <span class="token keyword">while</span> 条件表达式<span class="token punctuation">:</span>
        重复执行的代码 <span class="token number">2</span>
    <span class="token punctuation">[</span><span class="token keyword">else</span><span class="token punctuation">:</span>
        执行的代码 <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">else</span><span class="token punctuation">:</span>
    执行的代码 <span class="token number">2</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-循环嵌套-if-语句" tabindex="-1"><a class="header-anchor" href="#for-循环嵌套-if-语句" aria-hidden="true">#</a> for 循环嵌套 if 语句</h3><p><strong>语法格式：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> 迭代变量 <span class="token keyword">in</span> 序列<span class="token punctuation">:</span>
    重复执行的代码 <span class="token number">1</span>
    <span class="token keyword">if</span> 条件表达式 <span class="token number">1</span><span class="token punctuation">:</span>
        执行的代码 <span class="token number">1</span>
<span class="token punctuation">[</span><span class="token keyword">else</span><span class="token punctuation">:</span>
    执行的代码 <span class="token number">2</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function f(x,q){const s=i("Mermaid");return t(),o("div",null,[c,a(s,{id:"mermaid-16",code:"eJxLy8kvT85ILCpRCHHiUgACR43op3sani7vjtVU0NW1U3CqzkxTeDZ34ZPd214sXPFi376ne/prwSqdgPIKkanFYGXOGs86l79Y2PN8VsuT3YufL2iE6HbRiH6+e/KzufNjNRF6/PIx5ACvJTZu"}),r,a(s,{id:"mermaid-31",code:"eJxLy8kvT85ILCpRCHHiUgACR43op3sani7vjtVU0NW1U3CqzkxTeDZ34ZPd214sXPFi376ne/prwSqdgPIKkanFYGXOhhrPOpe/WNjzfFbLk92Lny9oVDCEGOCiEf189+Rnc+fHaiK0+eVDdBlh6DLC1AUAibVDWg=="}),d,a(s,{id:"mermaid-55",code:"eJxLy8kvT85ILCpRCHHiUgACR43op3sani7vjtVU0NW1U3AyrM5MU3g2d+GT3dteLFzxYt++p3v6FQxrwYqdDIFqFCJTi8FKnQ01nnUuf7Gw5/mslie7Fz9f0KhgCDHERSP6+e7Jz+bOj9VE0ueXD7HBqDo1B4sdRlA7jFDsMMKwwwiHHWB9MDuMsdthDLXDGMUOYww7jHHYAdYHtcPZBEObCaY2ADDek3g="}),u,a(s,{id:"mermaid-89",code:"eJxLy8kvT85ILCpRCHHiUgACR43op3sani7vjtVU0NW1U3AyrM5MU3g2d+GT3dteLFzxYt++p3v6FQxrwYqdDIFqFCJTi8FKnQ01nnUuf7Gw5/mslie7Fz9f0KhgCDXECJshRsiG+OVDzDDCMMNEUwEs5aIR/Xz35Gdz58dqQvQZoVhujKHRCGI5dn0w+0wwtBljagMANrF3lQ=="}),k,a(s,{id:"mermaid-148",code:"eJxLy8kvT85ILCpRCHHiUgACR43op3sani7vjtVU0NW1U3CqLs/IzElVeDZ34ZPd214sXPFi376ne/prwYqdgEoUIlOLwSqdDTVetvc+XdL7rHP5i4U9z2e1PNm9+PmCRqg5CA1++QoQDUYaWJW6aEQ/3z352dz5sZpcALngQtI="}),v,a(s,{id:"mermaid-175",code:"eJxLy8kvT85ILCpRCHHiUgACR43op3sani7vjtVU0NW1U3CqTssvUni6q/9px/QnO9Y+m7H+6YRlz+Z0Pm1tfr5lQS1YjxNQpUJkajFYg7OhxtP+aU92dD/Z0fBy4U6IuqcNe57vnvli/9onuxc/7Z/xsr0fYrqzkcbL9t6nS3qfdS5/sbDn+awWoILnCxqhdiNM98tXgGgw1sCq1EUj+vnuyc/mzo/V5AIAPBZjDA=="}),m,e("ul",null,[e("li",null,[b,a(s,{id:"mermaid-204",code:"eJxLy8kvT85ILCpRCHHiUgACR43op3sani7vjtVU0NW1U3AyrC7PyMxJVXg2d+GT3dteLFzxYt++p3v6FQxrweqdDIHKFCJTi8GqnQ01Xrb3Pl3S+6xz+YuFPc9ntTzZvfj5gkYFQ6hpRjhMM0I2zS9fAWKakQa6OUYQc1w0op/vnvxs7vxYTYg+IxRXGONwBVS3kxGSJqBlYD0mGHbB3GzIBQCmLHfq"}),g]),e("li",null,[h,a(s,{id:"mermaid-221",code:"eJxLy8kvT85ILCpRCHHiUgACR43op3sani7vjtVU0NW1U3AyrE7LL1J4uqv/acf0JzvWPpux/umEZc/mdD5tbX6+ZYGCYS1Ym5MhULVCZGoxWJOzocbT/mlPdnQ/2dHwcuFOiNKnDXue7575Yv/aJ7sXP+2f8bK9X8EQYoezkcbL9t6nS3qfdS5/sbDn+awWoJLnCxph8k5G+N1ghOwGv3wFiKHGGujGGUGMc9GIfr578rO582M1IfqMUNxuQpzboYY5m+JwO1TeyQjJDqDbdMGazDDcBvOqIRcAQgm5Mw=="}),y])]),w])}const _=p(l,[["render",f],["__file","flows_control.html.vue"]]);export{_ as default};
