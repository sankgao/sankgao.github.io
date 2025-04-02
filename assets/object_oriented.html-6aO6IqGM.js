import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-aHOA9ksl.js";const p={},e=t(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><strong>类</strong> 和 <strong>对象</strong> 都是面向对象中的重要概念。面向对象（Object Oriented）的英文缩写是 <code>OO</code>，它是一种设计思想。从 20 世纪 60 年代提出面向对象的概念到现在，它已经发展成为一种比较成熟的编程思想，并且逐步成为目前软件开发领域的主流技术。</p><p>面向对象中的对象（object），通常是指客观世界中存在的对象，具有唯一性，对象之间各不相同，各有各的特点，每一个对象都有自己的运动规律和内部状态；对象与对象之间又是可以相互联系、相互作用的，每个对象都有自己的属性和行为。</p><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3><p>对象是一种抽象概念，表示任意存在的事物。世间万物皆对象！对象是事物存在的实体。</p><p>通常将对象分为两个部分：</p><ul><li><strong>静态对象</strong>：静态对象指的是对象 <strong>属性</strong>，任何对象都具备自身属性，这些属性不仅是客观存在的，而且是不能忽略的。例如：人的性别</li><li><strong>动态对象</strong>：动态对象指的是对象 <strong>行为</strong>， 即对象执行的动作。例如：人可以跑步</li></ul><p>类相当于一个模板，依据这样的模块来创建对象，就是类的实例化，所以对象也被称为 <strong>实例。</strong></p><h3 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h3><p>类是封装对象的属性和行为的载体，反过来说具有属性和行为的一类实体被称为类。在类中，可以定义每个对象共有的属性和方法。</p><h3 id="面向对象程序设计的特定" tabindex="-1"><a class="header-anchor" href="#面向对象程序设计的特定" aria-hidden="true">#</a> 面向对象程序设计的特定</h3><p>具有三大基本特征：</p><ul><li><strong>封装</strong>：将对象的属性和行为封装起来的载体就是类，类通常会对客户隐藏其实现的细节，这就是封装的思想。这种封装思想保证了类内部数据结构的完整性，使用该类的用户不能直接看到类中的数据结构，只能执行类允许公开的数据，这样就避免了外部对内部数据的影响，提高了程序的可维护性</li><li><strong>继承</strong>：继承是实现重复利用的重要手段，子类通过继承复用了父类的属性和行为的同时又添加了子类特有的属性和行为</li><li><strong>多态</strong>：将父类对象应用于子类的特征就是多态</li></ul><h2 id="类的定义和使用" tabindex="-1"><a class="header-anchor" href="#类的定义和使用" aria-hidden="true">#</a> 类的定义和使用</h2><p>在 Python 中，类表示具有相同属性和方法的对象的集合。在使用类时，需要先定义类，然后再创建类的实例，通过类的实例就可以访问类中的属性和行为。</p><h3 id="定义类" tabindex="-1"><a class="header-anchor" href="#定义类" aria-hidden="true">#</a> 定义类</h3><p>使用 <code>class</code> 关键字来实现定义类。</p><p><strong>语法格式：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">ClassName</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;类的帮助信息&quot;&quot;&quot;</span>
    statement
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>ClassName</strong>：指定类名，一般使用首字母大写的格式，这种命名方法也称为 “驼峰式命名法”</li><li><strong>&quot;&quot;&quot;类的帮助信息&quot;&quot;&quot;</strong>：指定类的说明文档</li><li><strong>statement</strong>：指定类体，主要由类变量（或类成员）、方法和属性等定义语句组成。在编程时若不想马上编写某些代码，又不想有语法错误，可以使用 <strong>pass 语句</strong> 占位，pass 语句只用于维护程序结构的完整</li></ul><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建类的实例" tabindex="-1"><a class="header-anchor" href="#创建类的实例" aria-hidden="true">#</a> 创建类的实例</h3><p><code>class</code> 语句本身并不创建该类的任何实例，在类定义完成以后创建类的实例（即实例化该类的对象）。</p><p><strong>语法格式</strong>：<code>ClassName([parameter[, parameter,[...]]])</code></p><ul><li><strong>ClassName</strong>：指定具体的类名</li><li><strong>[parameter[, parameter,[...]]]</strong>：可选参数，如果创建类时，没有创建 <code>__init__()</code> 方法或者 <code>__init__()</code> 方法只有一个 <code>self</code> 参数时，<code>parameter</code> 可以省略</li></ul><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dog<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
<span class="token operator">&lt;</span>__main__<span class="token punctuation">.</span>Dog <span class="token builtin">object</span> at <span class="token number">0x000001DDBE67B310</span><span class="token operator">&gt;</span>。dog 是 Dog 类的实例对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-init-方法" tabindex="-1"><a class="header-anchor" href="#创建-init-方法" aria-hidden="true">#</a> 创建 __init__() 方法</h3><p>创建类后，可以手动创建一个 <code>__init__()</code> 方法，这种方法就是 <strong>构造方法</strong>。该方法是一个特殊的方法，每当创建一个类的新实例时，Python 都会自动执行它。<code>__init__()</code> 方法必须包含一个 <code>self</code> 参数，并且必须是第一个参数。<code>self</code> 参数是一个指向实例本身的引用，用于访问类中属性和方法。在方法调用时会自动传递实际参数 <code>self</code>，因此当 <code>__init__()</code> 方法只有一个参数时，在创建类的实例时，就不需要指定实际参数了。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
    <span class="token comment"># 构造方法</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age


<span class="token comment"># 创建实例化对象，调用构造方法</span>
dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">&quot;球球&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我们家的狗狗叫：{0}，{1} 岁了。&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>name<span class="token punctuation">,</span> dog<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
我们家的狗狗叫：球球，<span class="token number">2</span> 岁了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问限制" tabindex="-1"><a class="header-anchor" href="#访问限制" aria-hidden="true">#</a> 访问限制</h3><p>为了保证类内部的某些属性或方法不被外部所访问，可以在属性或方法名前面添加单下划线 <code>_</code>、双下划线 <code>__</code>、或首尾加双下划线 <code>__</code>，从而限制访问权限，作用如下：</p><ul><li><p><strong>单下划线 _</strong>：表示 protected（保护）类型的成员，只允许类本身和子类进行访问，不能使用 <code>from module import *</code> 语句导入</p><p>创建 <code>Swan</code> 类，定义保护属性 <code>_neck_swan</code>，并使用 <code>__init__()</code> 方法访问该属性，例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Swan</span><span class="token punctuation">:</span>
    _neck_swan <span class="token operator">=</span> <span class="token string">&quot;天鹅的脖子很长&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;__init__：&quot;</span><span class="token punctuation">,</span> Swan<span class="token punctuation">.</span>_neck_swan<span class="token punctuation">)</span>

swan <span class="token operator">=</span> Swan<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;直接访问：&quot;</span><span class="token punctuation">,</span> swan<span class="token punctuation">.</span>_neck_swan<span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
__init__： 天鹅的脖子很长
直接访问： 天鹅的脖子很长
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>双下划线 __</strong>：表示 private（私有）类型的成员，只允许定义该方法的类本身进行访问，而且也不能通过类的实例进行访问，但是可以使用 <strong>类的实例名._类名__xx</strong> 方式访问</p><p>创建 <code>Swan</code> 类，定义私有属性 <code>__neck_swan</code>，并使用 <code>__init__()</code> 方法访问该属性，例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Swan</span><span class="token punctuation">:</span>
    __neck_swan <span class="token operator">=</span> <span class="token string">&quot;天鹅的脖子很长&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;__init__：&quot;</span><span class="token punctuation">,</span> Swan<span class="token punctuation">.</span>__neck_swan<span class="token punctuation">)</span>

swan <span class="token operator">=</span> Swan<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;加入类名访问：&quot;</span><span class="token punctuation">,</span> swan<span class="token punctuation">.</span>_Swan__neck_swan<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;直接访问：&quot;</span><span class="token punctuation">,</span> swan<span class="token punctuation">.</span>__neck_swan<span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
__init__： 天鹅的脖子很长
加入类名访问： 天鹅的脖子很长
AttributeError<span class="token punctuation">:</span> <span class="token string">&#39;Swan&#39;</span> <span class="token builtin">object</span> has no attribute <span class="token string">&#39;__neck_swan&#39;</span>。“Swan” 对象没有属性 “__neck_Swan”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>首尾加双下划线 __</strong>：表示定义特殊方法</p></li></ul><h2 id="类的成员" tabindex="-1"><a class="header-anchor" href="#类的成员" aria-hidden="true">#</a> 类的成员</h2><p><strong>类的成员：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                          （类的成员）
            ╭┈┈┈┈┈┈┈┈┈┈┈┬┈┈┈┈┈┈┴┈┈┈┈┈┈┈┬┈┈┈┈┈┈┈┈┈┈┈┈╮
       （成员变量） （构造方法）    （成员方法）    （属性）
     ╭┈┈┈┈┈┈┴┈┈┈┈┈┈╮            ╭┈┈┈┈┈┈┴┈┈┈┈┈┈╮
（实例变量）    （类变量）   （实例方法）    （类方法）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>类的成员解释：</strong></p><ul><li><strong>成员变量</strong>：保存了类或对象的数据</li><li><strong>构造方法</strong>：是一种特殊的函数，用于初始化类的成员变量</li><li><strong>成员方法</strong>：是在类中定义的函数</li><li><strong>属性</strong>：是对类进行封装而提供的特殊方法</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>实例变量和实例方法属于对象，通过对象调用；类变量和类方法属于类，通过类调用</p></div><h3 id="实例变量" tabindex="-1"><a class="header-anchor" href="#实例变量" aria-hidden="true">#</a> 实例变量</h3><p>实例变量是对象个体特有的 <strong>数据</strong>，以 <code>self</code> 为前缀的变量都可供类中的所有方法使用，还可以通过类的任何实例来访问这些变量。实例变量通过 <strong>实例对象.实例变量</strong> 形式访问。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
    <span class="token comment"># 构造方法</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age


<span class="token comment"># 创建实例化对象，调用构造方法</span>
dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">&quot;球球&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我们家的狗狗叫：{0}，{1} 岁了。&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>name<span class="token punctuation">,</span> dog<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
我们家的狗狗叫：球球，<span class="token number">2</span> 岁了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h3><p>实例方法与实例变量一样，都是某个实例（或对象）个体特有的方法。定义实例方法时，它的第一个参数也应该是 <code>self</code>，这会将当前实例与该方法绑定起来，说明该方法属于实例，在调用方法时不需要传入 <code>self</code>，类似与构造方法。实例方法通过 <strong>实例对象.实例方法</strong> 形式访问。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
    <span class="token comment"># 构造方法</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span class="token operator">=</span><span class="token string">&quot;雌性&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age
        self<span class="token punctuation">.</span>sex <span class="token operator">=</span> sex

    <span class="token comment"># 实例方法</span>
    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{}在跑...&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># 实例方法</span>
    <span class="token keyword">def</span> <span class="token function">speak</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> sound<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{}在叫，{}！&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> sound<span class="token punctuation">)</span><span class="token punctuation">)</span>


dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">&quot;球球&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
dog<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：球球在跑...</span>
dog<span class="token punctuation">.</span>speak<span class="token punctuation">(</span><span class="token string">&quot;汪 汪 汪&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：球球在叫，汪 汪 汪！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类变量" tabindex="-1"><a class="header-anchor" href="#类变量" aria-hidden="true">#</a> 类变量</h3><p>类变量是属于类的变量，不属于单个对象。类变量通过 <strong>类名.类变量</strong> 形式访问。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Account</span><span class="token punctuation">:</span>
    interest_rate <span class="token operator">=</span> <span class="token number">0.0568</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> owner<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>owner <span class="token operator">=</span> owner
        self<span class="token punctuation">.</span>amount <span class="token operator">=</span> amount


account <span class="token operator">=</span> Account<span class="token punctuation">(</span><span class="token string">&#39;Tony&#39;</span><span class="token punctuation">,</span> <span class="token number">800000.0</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;账户名：{0}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>account<span class="token punctuation">.</span>owner<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：账户名：Tony</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;账户金额：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>account<span class="token punctuation">.</span>amount<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：账户金额：800000.0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;利率：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>Account<span class="token punctuation">.</span>interest_rate<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：利率：0.0568</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类方法" tabindex="-1"><a class="header-anchor" href="#类方法" aria-hidden="true">#</a> 类方法</h3><p>类方法与类变量类似，属于类不属于个体实例，在定义类方法时，它的第一个参数不是 <code>self</code>，而是类本身。类方法通过 <strong>类名.类方法</strong> 形式访问</p><p>定义类方法需要以装饰器 <code>@</code> 符号开头修饰函数、方法和类，用来约束它们。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Account</span><span class="token punctuation">:</span>
    interest_rate <span class="token operator">=</span> <span class="token number">0.0668</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> owner<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>owner <span class="token operator">=</span> owner
        self<span class="token punctuation">.</span>amount <span class="token operator">=</span> amount

    <span class="token comment"># 类方法，cls 表示类自身（即 Account 类），可用 Account 代替</span>
    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">interest_by</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> amt<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>interest_rate <span class="token operator">*</span> amt


interest <span class="token operator">=</span> Account<span class="token punctuation">.</span>interest_by<span class="token punctuation">(</span><span class="token number">12000.0</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;计算利息：{0:.4f}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>interest<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：计算利息：801.6000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>类方法可用访问类变量和其它类方法，但不能访问其它实例方法和实例变量</p></div><h2 id="封装性" tabindex="-1"><a class="header-anchor" href="#封装性" aria-hidden="true">#</a> 封装性</h2><p>封装性是面向对象重要的基本特征之一。封装隐藏了对象的内部细节，只保留有限的对外接口，外部调用者不用关心对象的内部细节，使操作对象变得简单。</p><h3 id="私有变量" tabindex="-1"><a class="header-anchor" href="#私有变量" aria-hidden="true">#</a> 私有变量</h3><p>为了防止外部调用者随意存取类的内部数据（成员变量），内部数据会被封装为 <strong>私有变量</strong>。外部调用者只能通过方法调用私有变量。</p><p>默认情况下，Python 中的变量是公有的，可以在类的外部访问它们，如果想让它们成为私有变量，则在变量前加上双下划线 <code>__</code> 即可。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Account</span><span class="token punctuation">:</span>
    <span class="token comment"># 定义私有变量</span>
    __interest_rate <span class="token operator">=</span> <span class="token number">0.0568</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> owner<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>owner <span class="token operator">=</span> owner
        <span class="token comment"># 定义私有变量</span>
        self<span class="token punctuation">.</span>__amount <span class="token operator">=</span> amount

    <span class="token keyword">def</span> <span class="token function">desc</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 在类的内部可以访问私有变量</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{0} 金额：{1} 利率：{2}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>owner<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__amount<span class="token punctuation">,</span> Account<span class="token punctuation">.</span>__interest_rate<span class="token punctuation">)</span><span class="token punctuation">)</span>


account <span class="token operator">=</span> Account<span class="token punctuation">(</span><span class="token string">&#39;Tony&#39;</span><span class="token punctuation">,</span> <span class="token number">800000.0</span><span class="token punctuation">)</span>
account<span class="token punctuation">.</span>desc<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;账户名：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>account<span class="token punctuation">.</span>owner<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;账户金额：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>account<span class="token punctuation">.</span>__amount<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;利率：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>Account<span class="token punctuation">.</span>__interest_rate<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
Tony 金额：<span class="token number">800000.0</span> 利率：<span class="token number">0.0568</span>
账户名：Tony
AttributeError<span class="token punctuation">:</span> <span class="token string">&#39;Account&#39;</span> <span class="token builtin">object</span> has no attribute <span class="token string">&#39;__amount&#39;</span>。“Account” 对象没有 “__amount” 属性
AttributeError<span class="token punctuation">:</span> <span class="token builtin">type</span> <span class="token builtin">object</span> <span class="token string">&#39;Account&#39;</span> has no attribute <span class="token string">&#39;__interest_rate&#39;</span>。类型对象 “Account” 没有属性 “__interest_rate”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在类的外部不可以访问私有变量</p></div><h3 id="私有方法" tabindex="-1"><a class="header-anchor" href="#私有方法" aria-hidden="true">#</a> 私有方法</h3><p>私有方法与私有变量的封装是类似的，在方法前面加上双下划线 <code>__</code> 就是私有方法了。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Account</span><span class="token punctuation">:</span>
    __interest_rate <span class="token operator">=</span> <span class="token number">0.0568</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> owner<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>owner <span class="token operator">=</span> owner
        self<span class="token punctuation">.</span>__amount <span class="token operator">=</span> amount

    <span class="token comment"># 定义私有方法</span>
    <span class="token keyword">def</span> <span class="token function">__get_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;{0} 金额：{1} 利率：{2}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>owner<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__amount<span class="token punctuation">,</span> Account<span class="token punctuation">.</span>__interest_rate<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">desc</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 在类的内部可以调用私有方法</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>__get_info<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


account <span class="token operator">=</span> Account<span class="token punctuation">(</span><span class="token string">&#39;Tony&#39;</span><span class="token punctuation">,</span> <span class="token number">800000.0</span><span class="token punctuation">)</span>
account<span class="token punctuation">.</span>desc<span class="token punctuation">(</span><span class="token punctuation">)</span>
account<span class="token punctuation">.</span>__get_info<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
Tony 金额：<span class="token number">800000.0</span> 利率：<span class="token number">0.0568</span>
AttributeError<span class="token punctuation">:</span> <span class="token string">&#39;Account&#39;</span> <span class="token builtin">object</span> has no attribute <span class="token string">&#39;__get_info&#39;</span>。“Account” 对象没有属性 “__get_info”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在类的外部不可以调用私有方法</p></div><h3 id="使用属性" tabindex="-1"><a class="header-anchor" href="#使用属性" aria-hidden="true">#</a> 使用属性</h3><p>为了实现对象的封装，在一个类中不应该有公有的成员变量，这些成员变量应该被设计为私有的，然后通过公有的 <code>set</code>（赋值）和 <code>get</code>（取值）方法访问。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span class="token operator">=</span><span class="token string">&quot;雌性&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>__age <span class="token operator">=</span> age

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{}在跑...&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># 定义 get() 方法，返回私有实例变量 __age</span>
    <span class="token keyword">def</span> <span class="token function">get_age</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__age

    <span class="token comment"># 定义 set() 方法，通过 age 参数更新私有实例变量 __age</span>
    <span class="token keyword">def</span> <span class="token function">set_age</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__age <span class="token operator">=</span> age


dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">&quot;球球&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;狗狗的年龄：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>get_age<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：狗狗的年龄：2</span>

dog<span class="token punctuation">.</span>set_age<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;修改后狗狗的年龄：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>get_age<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：修改后狗狗的年龄：3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当外部调用者通过两个公有方法访问被封装的私有变量时，比较麻烦。这时可以在类中定义属性，属性可以替代 <code>get()</code> 和 <code>set()</code> 这两个公有方法，在调用时比较简单。</p><ul><li>属性通过 <strong>实例对象.属性名</strong> 形式访问</li><li>属性赋值通过 <strong>实例对象.属性名</strong> 形式赋值</li></ul><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span class="token operator">=</span><span class="token string">&quot;雌性&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token comment"># 私有变量 __age，对应的属性名应该去除前面双下划线之后的名称即 age</span>
        self<span class="token punctuation">.</span>__age <span class="token operator">=</span> age

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{}在跑...&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># 类方法</span>
    <span class="token decorator annotation punctuation">@property</span>
    <span class="token comment"># 定义 age 属性的 get() 方法，使用 @property 装饰器进行修饰，方法名就是属性名即 age</span>
    <span class="token keyword">def</span> <span class="token function">age</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__age

    <span class="token comment"># 类方法</span>
    <span class="token decorator annotation punctuation">@age<span class="token punctuation">.</span>setter</span>
    <span class="token comment"># 定义 age 属性的 set() 方法，使用 @age.setter 装饰器进行修饰，方法名就是属性名即 age</span>
    <span class="token keyword">def</span> <span class="token function">age</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__age <span class="token operator">=</span> age


dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">&quot;球球&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;狗狗的年龄：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：狗狗的年龄：2</span>

dog<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;修改后狗狗的年龄：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：修改后狗狗的年龄：3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>属性在本质上就是两个方法，在方法前添加上装饰器使得方法成为属性。属性使用起来类似于公有变量，可以在赋值符 <code>=</code> 左边或右边，左边被赋值，右边取值</p></div><h2 id="继承性" tabindex="-1"><a class="header-anchor" href="#继承性" aria-hidden="true">#</a> 继承性</h2><p>继承性也是面向对象重要的基本特性之一。在程序设计中实现继承，表示这个类拥有它所继承的类的所有公有成员或受保护成员，在面向对象编程中，被继承的类称为 <strong>父类</strong>，继承的新类称为 <strong>子类。</strong></p><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><p>子类继承父类，在类的定义语句中，类名右侧使用一对小括号指定它的父类就可以了。</p><p><strong>语法格式：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">ClassName</span><span class="token punctuation">(</span>baseclasslist<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;类的帮助信息&quot;&quot;&quot;</span>
    statement
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>ClassName</strong>：指定类名</li><li><strong>baseclasslist</strong>：指定要继承的父类，如果有多个，类名之间用逗号 <code>,</code> 分隔</li><li><strong>statement</strong>：指定类体，主要由类变量（类成员）、方法和属性等定义语句组成</li></ul><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">show_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;动物的名字：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">move</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;动一动...&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age


cat <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
cat<span class="token punctuation">.</span>move<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：动一动...</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cat<span class="token punctuation">.</span>show_info<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：动物的名字：Tom</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>子类继承父类时，只将父类公有的成员变量和方法才可以被继承</p></div><h3 id="多继承" tabindex="-1"><a class="header-anchor" href="#多继承" aria-hidden="true">#</a> 多继承</h3><p>在 Python 中，当子类继承多个父类时，如果在多个父类中有相同的成员方法或成员变量，则子类优先继承左边父类中的成员方法或成员变量，从左到右继承级别从高到低。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Horse</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">show_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;马的名字：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;马跑...&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Donkey</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__int__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">show_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;驴的名字：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;驴跑...&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">roll</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;驴打滚...&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Mule</span><span class="token punctuation">(</span>Horse<span class="token punctuation">,</span> Donkey<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age


m <span class="token operator">=</span> Mule<span class="token punctuation">(</span><span class="token string">&quot;骡宝莉&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：马跑...</span>
m<span class="token punctuation">.</span>roll<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：驴打滚...</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>show_info<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：马的名字：骡宝莉</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法重写" tabindex="-1"><a class="header-anchor" href="#方法重写" aria-hidden="true">#</a> 方法重写</h3><p>如果子类的方法名与父类的方法名相同，则在这种情况下，子类的方法会重写（Override）父类的同名方法。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Horse</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">show_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;马的名字：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;马跑...&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Donkey</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">show_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;驴的名字：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;驴跑...&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">roll</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;驴打滚...&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Mule</span><span class="token punctuation">(</span>Horse<span class="token punctuation">,</span> Donkey<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age

    <span class="token keyword">def</span> <span class="token function">show_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;骡：{}，{} 岁了&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>age<span class="token punctuation">)</span>


m <span class="token operator">=</span> Mule<span class="token punctuation">(</span><span class="token string">&quot;骡宝莉&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：马跑...</span>
m<span class="token punctuation">.</span>roll<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：驴打滚...</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>show_info<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：骡：骡宝莉，1 岁了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多态性" tabindex="-1"><a class="header-anchor" href="#多态性" aria-hidden="true">#</a> 多态性</h2><p>多态性也是面向对象重要的基本特性之一。“多态” 指对象可以表现出多种形态。</p><h3 id="继承与多态" tabindex="-1"><a class="header-anchor" href="#继承与多态" aria-hidden="true">#</a> 继承与多态</h3><p>在多个子类继承父类，并重写父类方法后，这些子类所创建的对象之间就是多态的，这些对象采用不同的方式实现父类方法。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">speak</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;动物叫，但不指定是哪种动物叫！&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">speak</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;小狗：汪汪汪叫...&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">speak</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;小猫：喵喵喵叫...&quot;</span><span class="token punctuation">)</span>


an01 <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
an02 <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token punctuation">)</span>
an01<span class="token punctuation">.</span>speak<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：小狗：汪汪汪叫...</span>
an02<span class="token punctuation">.</span>speak<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：小猫：喵喵喵叫...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="鸭子类型测试与多态" tabindex="-1"><a class="header-anchor" href="#鸭子类型测试与多态" aria-hidden="true">#</a> 鸭子类型测试与多态</h3><p>Python 的多态性更加灵活，支持 <strong>鸭子类型测试</strong>。鸭子类型测试是指：若看到一只鸟走起来像鸭子、游泳起来像鸭子、叫起来也像鸭子，那么这只鸟可以称为鸭子。</p><p>由于支持鸭子类型测试，所以 Python 解释器不检查发生多态的对象是否继承了同一个父类，只要它们有相同的行为（方法），它们之间就是多态的。</p><p>例如：定义一个函数 <code>start()</code>，它接收具有 <code>speak()</code> 方法的对象。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">:</span>
    obj<span class="token punctuation">.</span>speak<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">speak</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;动物叫，但不指定是哪种动物叫！&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">speak</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;小狗：汪汪汪叫...&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">speak</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;小猫：喵喵喵叫...&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Car</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">speak</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;小汽车：嘀嘀叫...&quot;</span><span class="token punctuation">)</span>


start<span class="token punctuation">(</span>Dog<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：小狗：汪汪汪叫...</span>
start<span class="token punctuation">(</span>Cat<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：小猫：喵喵喵叫...</span>
start<span class="token punctuation">(</span>Car<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：小汽车：嘀嘀叫...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,99),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","object_oriented.html.vue"]]);export{r as default};
