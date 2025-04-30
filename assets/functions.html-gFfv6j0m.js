import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-MJnKnEaX.js";const p={},t=e(`<h2 id="函数的创建和调用" tabindex="-1"><a class="header-anchor" href="#函数的创建和调用" aria-hidden="true">#</a> 函数的创建和调用</h2><p>创建函数也称为定义函数，用于创建一个具有某种用途的工具。使用 <code>def</code> 关键字实现。</p><p><strong>语法格式：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">functionname</span><span class="token punctuation">(</span><span class="token punctuation">[</span>parameterlist<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">[</span><span class="token triple-quoted-string string">&#39;&#39;&#39;comments&#39;&#39;&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span>functionbody<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>functionname</strong>：函数名称，在调用函数时使用</li><li><strong>parameterlist</strong>：可选参数，用于指定向函数中传递的参数，如果有多个参数，各参数间使用逗号 <code>,</code> 分割，如果不指定参数，则该函数没有参数，在调用时也不指定参数</li><li><strong>comments</strong>：可选参数，表示为函数指定注释</li><li><strong>functionbody</strong>：可选参数，用于指定函数体，该函数被调用后要执行的代码。如果函数没有返回值，可以使用 <code>return</code> 语句返回</li></ul><p>调用函数也称为执行函数，如果把创建的函数理解为创建一个具有某种用途的工具，那么调用函数就是使用该工具。</p><p><strong>语法格式</strong>：<code>functionname([parametersvalue])</code></p><ul><li><strong>functionname</strong>：函数名称，要调用的函数名必须是已创建的函数</li><li><strong>parametersvalue</strong>：可选参数，用于指定各个参数的值，如果有多个参数，各参数间使用逗号 <code>,</code> 分割；如果该函数没有参数，则直接写一对小括号 <code>()</code> 即可</li></ul><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">rect_area</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    功能：用于指定计算长方形的宽和高，并返回长方形的面积
    &quot;&quot;&quot;</span>

    area <span class="token operator">=</span> width <span class="token operator">*</span> height
    <span class="token keyword">return</span> area


r_area <span class="token operator">=</span> rect_area<span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{0} x {1} 长方形的面积：{2:.2f}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> r_area<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
<span class="token number">320</span> x <span class="token number">80</span> 长方形的面积：<span class="token number">25600.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数传递" tabindex="-1"><a class="header-anchor" href="#参数传递" aria-hidden="true">#</a> 参数传递</h2><p>在调用函数时，大多数情况下，主调函数和被调函数之间有数据传递关系，这就是有参数的函数形式。函数参数的作用是传递数据给函数使用，函数利用接收的数据进行具体的操作处理。</p><h3 id="形式参数和实际参数" tabindex="-1"><a class="header-anchor" href="#形式参数和实际参数" aria-hidden="true">#</a> 形式参数和实际参数</h3><p>在使用函数时，经常会用到 <strong>形式参数</strong> 和 <strong>实际参数</strong>，二者都叫做参数，区别如下：</p><ul><li><strong>形式参数</strong>：在定义函数时，函数名后面括号中的参数为 <strong>形式参数</strong>，简称 <strong>形参</strong></li><li><strong>实际参数</strong>：在调用函数时，函数名后面括号中的参数为 <strong>实际参数</strong>，简称 <strong>实参</strong></li></ul><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">make_coffee</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;卡布奇诺&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;制作一杯{0}咖啡&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>


coffee01 <span class="token operator">=</span> make_coffee<span class="token punctuation">(</span><span class="token string">&quot;拿铁&quot;</span><span class="token punctuation">)</span>
coffee02 <span class="token operator">=</span> make_coffee<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>coffee01<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：制作一杯拿铁咖啡</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>coffee02<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：制作一杯卡布奇诺咖啡</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际参数的类型可以分为：</p><ul><li><strong>值传递</strong>：当实际参数为不可变对象时，进行的是值传递。进行值传递后，改变形式参数的值，实际参数的值不变</li><li><strong>引用传递</strong>：当实际参数为可变对象时，进行的是引用传递。进行引用传递后，改变形式参数的值，实际参数的值也会改变</li></ul><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">demo</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原值：&quot;</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span>
    obj <span class="token operator">+=</span> obj


<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;值传递&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

mot <span class="token operator">=</span> <span class="token string">&quot;唯有在被追赶的时候，您才能真正地奔跑！&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;函数调用前：&quot;</span><span class="token punctuation">,</span> mot<span class="token punctuation">)</span>

demo<span class="token punctuation">(</span>mot<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;函数调用后：&quot;</span><span class="token punctuation">,</span> mot<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;引用传递&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

list01 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;王五&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;函数调用前：&quot;</span><span class="token punctuation">,</span> list01<span class="token punctuation">)</span>

demo<span class="token punctuation">(</span>list01<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;函数调用后：&quot;</span><span class="token punctuation">,</span> list01<span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> 值传递 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
函数调用前： 唯有在被追赶的时候，您才能真正地奔跑！
原值： 唯有在被追赶的时候，您才能真正地奔跑！
函数调用后： 唯有在被追赶的时候，您才能真正地奔跑！
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> 引用传递 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
函数调用前： <span class="token punctuation">[</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;王五&#39;</span><span class="token punctuation">]</span>
原值： <span class="token punctuation">[</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;王五&#39;</span><span class="token punctuation">]</span>
函数调用后： <span class="token punctuation">[</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;王五&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;王五&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="位置参数" tabindex="-1"><a class="header-anchor" href="#位置参数" aria-hidden="true">#</a> 位置参数</h3><p>位置参数也称必备参数，是必须按照正确的顺序传到函数中。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>参数数量和参数位置必须与定义时一致</p></div><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">rect_area</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    功能：用于指定计算长方形的宽和高，并返回长方形的面积
    &quot;&quot;&quot;</span>

    area <span class="token operator">=</span> width <span class="token operator">*</span> height
    <span class="token keyword">return</span> area


r_area <span class="token operator">=</span> rect_area<span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{0} x {1} 长方形的面积：{2:.2f}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> r_area<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
<span class="token number">320</span> x <span class="token number">80</span> 长方形的面积：<span class="token number">25600.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关键字参数" tabindex="-1"><a class="header-anchor" href="#关键字参数" aria-hidden="true">#</a> 关键字参数</h3><p>关键字参数是指使用形式参数的名字来确定参数值，通过这种方式指定实际参数时，不再需要与形式参数的位置完全一致。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">rect_area</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    功能：用于指定计算长方形的宽和高，并返回长方形的面积
    &quot;&quot;&quot;</span>

    area <span class="token operator">=</span> width <span class="token operator">*</span> height
    <span class="token keyword">return</span> area


r_area <span class="token operator">=</span> rect_area<span class="token punctuation">(</span>width<span class="token operator">=</span><span class="token number">320</span><span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">80</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{0} x {1} 长方形的面积：{2:.2f}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> r_area<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
<span class="token number">320</span> x <span class="token number">80</span> 长方形的面积：<span class="token number">25600.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认参数" tabindex="-1"><a class="header-anchor" href="#默认参数" aria-hidden="true">#</a> 默认参数</h3><p>在调用参数时，如果没有指定某个参数将抛出异常，为了解决这个问题，可以在定义函数时为形参指定默认值。</p><p><strong>语法格式：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">functionname</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>parameter01<span class="token operator">=</span>defaultvalue01<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">[</span>functionbody<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>functionname</strong>：函数名，调用函数时使用</li><li><strong>parameter01=defaultvalue</strong>：可选参数，用于指定向函数中传递的默认的形参</li><li><strong>functionbody</strong>：可选参数，用于指定函数体，该函数被调用后，要执行的代码</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在定义函数时，指定默认的形式参数必须在所有参数的最后，否则将产生语法错误，且默认参数必须指向不可变对象</p></div><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">rect_area</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    功能：用于指定计算长方形的宽和高，并返回长方形的面积
    &quot;&quot;&quot;</span>

    area <span class="token operator">=</span> width <span class="token operator">*</span> height
    <span class="token keyword">return</span> area


r_area <span class="token operator">=</span> rect_area<span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{0} x {1} 长方形的面积：{2:.2f}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> r_area<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
<span class="token number">320</span> x <span class="token number">40</span> 长方形的面积：<span class="token number">12800.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在 Python 中可以使用 <code>functionname.__defaults__</code> 查看函数的默认值参数的当前值，其结果是一个元组；使用 <code>functionname.__doc__</code> 查看函数的注释信息。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">rect_area</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    功能：用于指定计算长方形的宽和高，并返回长方形的面积
    &quot;&quot;&quot;</span>

    area <span class="token operator">=</span> width <span class="token operator">*</span> height
    <span class="token keyword">return</span> area


r_area <span class="token operator">=</span> rect_area<span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{0} x {1} 长方形的面积：{2:.2f}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> r_area<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rect_area<span class="token punctuation">.</span>__defaults__<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：(40,)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rect_area<span class="token punctuation">.</span>__doc__<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：功能：用于指定计算长方形的宽和高，并返回长方形的面积</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="可变参数" tabindex="-1"><a class="header-anchor" href="#可变参数" aria-hidden="true">#</a> 可变参数</h3><p>可变参数也称为不定长参数，即传入函数中的实际参数可以是任意多个，主要有两种形式：</p><ul><li><strong>*parameter</strong>：表示接收任意多个实际参数并将其放到一个元组中</li><li><strong>**parameter</strong>：表示接收任意多个类似关键字参数一样显示赋值的实际参数，并将其放到一个字典中</li></ul><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token operator">*</span>numbers<span class="token punctuation">)</span><span class="token punctuation">:</span>
    total <span class="token operator">=</span> <span class="token number">0.0</span>
    <span class="token keyword">for</span> number <span class="token keyword">in</span> numbers<span class="token punctuation">:</span>
        total <span class="token operator">+=</span> number
    <span class="token keyword">return</span> total


<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token number">100.0</span><span class="token punctuation">,</span> <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：150.0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token number">30.0</span><span class="token punctuation">,</span> <span class="token number">80.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：110.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">show_info</span><span class="token punctuation">(</span><span class="token operator">**</span>info<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;show_info&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> info<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;{0} - {1}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span>


show_info<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&#39;Tony&#39;</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">18</span><span class="token punctuation">,</span> sex<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
show_info<span class="token punctuation">(</span>sutdent_name<span class="token operator">=</span><span class="token string">&#39;Tony&#39;</span><span class="token punctuation">,</span> sutdent_no<span class="token operator">=</span><span class="token string">&#39;1000&#39;</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> show_info <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
name <span class="token operator">-</span> Tony
age <span class="token operator">-</span> <span class="token number">18</span>
sex <span class="token operator">-</span> <span class="token boolean">True</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> show_info <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
sutdent_name <span class="token operator">-</span> Tony
sutdent_no <span class="token operator">-</span> <span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>可以在函数体中使用 <code>return</code> 语句为函数指定返回值，该返回值可以是任意类型，并且无论 <code>return</code> 语句出现在函数的什么位置，只要得到执行就会直接结束函数。</p><p><strong>语法格式</strong>：<code>return [value]</code></p><ul><li><strong>value</strong>：可选参数，用于指定要返回的值，可以返回一个值，也可以是多个值</li></ul><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token operator">*</span>numbers<span class="token punctuation">)</span><span class="token punctuation">:</span>
    total <span class="token operator">=</span> <span class="token number">0.0</span>
    <span class="token keyword">for</span> number <span class="token keyword">in</span> numbers<span class="token punctuation">:</span>
        total <span class="token operator">+=</span> number
    <span class="token keyword">return</span> total


<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token number">100.0</span><span class="token punctuation">,</span> <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：150.0</span>


<span class="token keyword">def</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token operator">*</span>numbers<span class="token punctuation">)</span><span class="token punctuation">:</span>
    total <span class="token operator">=</span> <span class="token number">0.0</span>
    <span class="token keyword">for</span> number <span class="token keyword">in</span> numbers<span class="token punctuation">:</span>
        total <span class="token operator">+=</span> number


<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token number">100.0</span><span class="token punctuation">,</span> <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当函数中没有 return 语句时，或者忽略了 return 语句的参数时，将返回 None 空值</p></div><h2 id="变量的作用域" tabindex="-1"><a class="header-anchor" href="#变量的作用域" aria-hidden="true">#</a> 变量的作用域</h2><h3 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量" aria-hidden="true">#</a> 局部变量</h3><p>局部变量是指在函数内部定义并使用的变量，它只在函数内部有效。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;函数内访问局部变量：&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>


demo<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：函数内访问局部变量： 10</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;函数外访问局部变量：&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：NameError: name &#39;x&#39; is not defined。没有这个名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h3><p>全局变量能够作用于函数内外。</p><p>在函数外定义变量。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">20</span>


<span class="token keyword">def</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;函数内访问全局变量：&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>


demo<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：函数内访问全局变量： 10</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;函数外访问全局变量：&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：函数外访问全局变量： 20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>global</code> 关键字在函数内定义全局变量。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">20</span>


<span class="token keyword">def</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> x
    x <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;函数内访问全局变量：&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>


demo<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：函数内访问全局变量： 10</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;函数外访问全局变量：&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：函数外访问全局变量： 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="匿名函数-lambda" tabindex="-1"><a class="header-anchor" href="#匿名函数-lambda" aria-hidden="true">#</a> 匿名函数（lambda）</h2><p>匿名函数是指没有名字的函数，应用在需要一个函数，但是又不想命名这个函数的场合，使用 <code>lambda</code> 表达式创建匿名函数。</p><p><strong>语法格式</strong>：<code>result = lambda [arg01[, arg02[,... [, argn]]]]: expression</code></p><ul><li><strong>result</strong>：用于调用 <code>lambda</code> 表达式</li><li><strong>[arg01[, arg02[,... [, argn]]]]</strong>：可选参数，指定要传递的参数列表，多个参数间使用逗号 <code>,</code> 分隔</li><li><strong>expression</strong>：用于指定一个实现具体功能的表达式。如果有参数，那么在该表达式中将应用这些参数</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>通常情况下，这样的函数只使用一次，使用 <code>lambda</code> 表达式时，需要定义一个变量，用于调用该 <code>lambda</code> 表达式</p></div><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> math


<span class="token keyword">def</span> <span class="token function">circlearea</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">:</span>
    result <span class="token operator">=</span> math<span class="token punctuation">.</span>pi<span class="token operator">*</span>r<span class="token operator">*</span>r
    <span class="token keyword">return</span> result


r <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;半径为：&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">,</span> <span class="token string">&quot;圆的面积为：&quot;</span><span class="token punctuation">,</span> circlearea<span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
半径为： <span class="token number">10</span> 圆的面积为： <span class="token number">314.1592653589793</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 lambda 表达式后：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> math

r <span class="token operator">=</span> <span class="token number">10</span>
result <span class="token operator">=</span> <span class="token keyword">lambda</span> r<span class="token punctuation">:</span> math<span class="token punctuation">.</span>pi<span class="token operator">*</span>r<span class="token operator">*</span>r

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;半径为：&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">,</span> <span class="token string">&quot;圆的面积为：&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
半径为： <span class="token number">10</span> 圆的面积为： <span class="token number">314.1592653589793</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2><p>闭包是函数式编程的重要语法结构。一种编程范式，对代码进行提炼和抽象概括，使得重用性更高。</p><p><strong>闭包的条件：</strong></p><ul><li>必须是一个内嵌函数</li><li>外部函数必须返回内部函数的函数对象</li><li>内部函数必须使用外部函数的局部变量</li></ul><p>如果内部函数调用了外部函数的局部变量，并外部函数返回内部函数的函数对象（函数名）。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> <span class="token number">100</span>

    <span class="token keyword">def</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token string">&quot;哈哈&quot;</span>

    <span class="token keyword">return</span> fun2


<span class="token keyword">print</span><span class="token punctuation">(</span>fun1<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
<span class="token number">100</span>
哈哈
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就形成了闭包，闭包的作用是可以传递更少的形参，可以传递更多的实参——更加安全，间接性的访问内部函数。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fun1</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> <span class="token number">100</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">fun2</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token string">&quot;哈哈&quot;</span>

    <span class="token keyword">return</span> fun2


<span class="token keyword">print</span><span class="token punctuation">(</span>fun1<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
<span class="token number">200</span>
<span class="token number">300</span>
哈哈
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,78),o=[t];function i(c,l){return s(),a("div",null,o)}const d=n(p,[["render",i],["__file","functions.html.vue"]]);export{d as default};
