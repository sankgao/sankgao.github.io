import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-c7c7a199.js";const t={},p=e(`<h2 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h2><p>标识符就是变量、函数、属性、类、模块等可以由程序员指定名称的代码元素。</p><p>构成标识符的统一命名规则：</p><ul><li>区分大小写：<code>Myname</code> 与 <code>myname</code> 是两个不同的标识符</li><li>首字符可以是下画线（<code>_</code>）或字母，但不能是数字</li><li>除首字符外的其他字符必须是下画线、字母和数字</li><li>关键字不能作为标识符</li><li>不要使用 Python 的内置函数作为自己的标识符</li></ul><h2 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h2><p>关键字是由语言本身定义好的有特殊含义的代码元素，可以使用 <code>keyword</code> 内置函数打印出所有的关键字。关键字如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导入 keyword 函数</span>
<span class="token keyword">import</span> keyword

<span class="token comment"># 打印出所有的关键字</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>keyword<span class="token punctuation">.</span>kwlist<span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
<span class="token punctuation">[</span><span class="token string">&#39;False&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;None&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;True&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;and&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;as&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;assert&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;async&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;await&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;break&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;continue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;def&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;del&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;elif&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;else&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;except&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;finally&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;for&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;from&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;global&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;if&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;import&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;in&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;is&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lambda&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;nonlocal&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;not&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;or&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pass&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;raise&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;return&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;try&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;while&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;with&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yield&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>在 Python 中为一个变量赋值的同时就声明了该变量，该变量的数据类型就是赋值数据所属的类型，该变量还可以接收其他类型的数据。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">20</span>

<span class="token comment"># x 数据类型为 int</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>

x <span class="token operator">=</span> <span class="token boolean">True</span>

<span class="token comment"># x 数据类型为 bool</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语句" tabindex="-1"><a class="header-anchor" href="#语句" aria-hidden="true">#</a> 语句</h2><p>Python 代码是由关键字、标识符、表达式和语句等构成的，语句是代码的重要组成部分。</p><p>在 Python 中，一行代码表示一条语句，在一般情况下语句结束时不加分号（<code>;</code>）。</p><h2 id="代码注释" tabindex="-1"><a class="header-anchor" href="#代码注释" aria-hidden="true">#</a> 代码注释</h2><ul><li>添加的注释应该有一定的意义，可以充分的解释代码的功能及用途</li><li>临时注释掉不想执行的代码</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在 Python 中三引号（<code>&#39;&#39;&#39;</code>）或（<code>&quot;&quot;&quot;</code>）是字符串定界符，如果三引号作为语句的一部分出现时，就不是注释，而是作为字符串输出</p></div><ol><li><p>单行注释</p><p><code>#</code> 号位于行的开头，或者是代码最后加空格再写 <code>#</code> 号注释，<code>#</code> 号后面有一个空格。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># print(&#39;Hello, World!&#39;)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, World!&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 打印 Hello, World!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>多行注释</p><p>使用（<code>&#39;&#39;&#39;</code>）或（<code>&quot;&quot;&quot;</code>）进行注释。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&#39;&#39;&#39;
第一行注释
第二行注释
第三行注释
&#39;&#39;&#39;</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
第一行注释
第二行注释
第三行注释
&quot;&quot;&quot;</span>

<span class="token comment"># 三引号内的内容作为字符串输出</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;你好，我的名字叫张三&quot;&quot;&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>特殊注释</p></li></ol><p><code># coding=utf-8</code> 或 <code># -*- coding: utf-8 -*-</code> 该注释必须写在代码的第一行或者第二行，该注释告诉 Python 解释器该文件的编码集是 <code>UTF-8</code>，可以避免代码中的中文等文字无法解析的问题。</p><h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h2><p>Python 中一个模块就是一个文件，模块是保存代码的最小单位，在模块中可以声明变量、函数、属性和类等 Python 代码元素。</p><p>导入模块的方式：</p><ul><li><p><code>import &lt;模块名&gt;</code></p><p>会导入模块中的所有代码元素，在访问时需要加模块名前缀。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> keyword

<span class="token keyword">print</span><span class="token punctuation">(</span>keyword<span class="token punctuation">.</span>kwlist<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>from &lt;模块名&gt; import &lt;代码元素&gt;</code></p><p>会导入模块中的指定代码元素，在访问时不需要加模块名前缀。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> keyword <span class="token keyword">import</span> kwlist

<span class="token keyword">print</span><span class="token punctuation">(</span>kwlist<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>form &lt;模块名&gt; import &lt;代码元素&gt; as &lt;代码元素别名&gt;</code></p><p>会导入模块中的指定代码元素，在访问时不需要加模块名前缀，并设置代码元素别名，可以解决代码元素名称冲突。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> keyword <span class="token keyword">import</span> kwlist <span class="token keyword">as</span> kwlist2

kwlist <span class="token operator">=</span> <span class="token string">&quot;Hello, World!&quot;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>kwlist<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>kwlist2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>一个模块就是一个文件，在模块中封装了很多代码元素，在实际的项目开发过程中，避免不了会使用别人的模块，如果想导入所有代码元素，则使用 <code>import &lt;模块名&gt;</code> 语句；如果只是导入一个代码元素，则使用 <code>from &lt;模块名&gt; import &lt;代码元素&gt;</code> 语句；如果名称有冲突，则使用 <code>form &lt;模块名&gt; import &lt;代码元素&gt; as &lt;代码元素别名&gt;</code> 语句</p></div><h2 id="两个模块间的代码元素访问" tabindex="-1"><a class="header-anchor" href="#两个模块间的代码元素访问" aria-hidden="true">#</a> 两个模块间的代码元素访问</h2><p>在同一文件夹下创建两个模块 hello 和 world，即两个代码文件：hello.py 和 world.py</p><ul><li><p>world 模块的代码如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># 代码文件：E:/SourceCode/Python/world.py</span>

x <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span>
y <span class="token operator">=</span> <span class="token boolean">True</span>
z <span class="token operator">=</span> <span class="token number">20.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>hello 模块的代码如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># 代码文件：E:/SourceCode/Python/hello.py</span>

<span class="token keyword">import</span> world
<span class="token keyword">from</span> world <span class="token keyword">import</span> z
<span class="token keyword">from</span> world <span class="token keyword">import</span> x <span class="token keyword">as</span> x2

x <span class="token operator">=</span> <span class="token number">100</span>
y <span class="token operator">=</span> <span class="token number">20</span>

<span class="token comment"># 访问当前模块变量 y</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
<span class="token comment"># 访问 world 模块变量 y</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>world<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
<span class="token comment"># 访问 world 模块变量 z</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span>
<span class="token comment"># 访问 world 模块变量 x，x2 是 world 模块 x 的别名</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x2<span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
<span class="token number">20</span>
<span class="token boolean">True</span>
<span class="token number">20.0</span>
Hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,26),i=[p];function o(l,c){return s(),a("div",null,i)}const u=n(t,[["render",o],["__file","base.html.vue"]]);export{u as default};
