import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c as i,b as s,e as n,d as c,f as a}from"./app-HgYDRmp_.js";const l={},r=a(`<p>在 Python 中，一个扩展名为 <code>.py</code> 的文件就称为一个 <strong>模块。</strong></p><p>通常情况下，把能够实现某一特定功能的代码放置在一个文件中作为一个模块，从而方便其它程序和脚本导入使用。另外使用模块也可以避免函数名和变量名冲突。</p><p>模块可以提高代码的可维护性和可用性。</p><h2 id="自定义模块" tabindex="-1"><a class="header-anchor" href="#自定义模块" aria-hidden="true">#</a> 自定义模块</h2><p>自定义模块有两个作用：</p><ul><li>规范代码，让代码更易于阅读</li><li>方便其它程序使用已经编写好的代码，提高开发效率</li></ul><p>自定义模块主要分为两部分：<strong>创建模块</strong> 和 <strong>导入模块。</strong></p><h3 id="创建模块" tabindex="-1"><a class="header-anchor" href="#创建模块" aria-hidden="true">#</a> 创建模块</h3><p>创建模块时，可以将模块中相关的代码（变量定义和函数定义等）编写在一个单独的文件中，并且将该文件命名为 <strong>模块名+.py</strong> 的形式。</p><p>创建一个用于根据身高、体重计算 BMI 指数的模块，命名为 <code>bmi.py</code>，其中 <code>bmi</code> 为模块名，<code>.py</code> 为扩展名。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fun_bmi</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> height<span class="token punctuation">,</span> weight<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    功能：根据身高和体重计算 BMI 指数
    :param person: 姓名
    :param height: 身高，单位：米
    :param weight: 体重，单位：千克
    &quot;&quot;&quot;</span>
    
    <span class="token keyword">print</span><span class="token punctuation">(</span>person <span class="token operator">+</span> <span class="token string">&quot; 的身高：&quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 米 \\t体重：&quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>weight<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 千克&quot;</span><span class="token punctuation">)</span>
    
    bmi <span class="token operator">=</span> weight <span class="token operator">/</span> <span class="token punctuation">(</span>height <span class="token operator">*</span> height<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>person <span class="token operator">+</span> <span class="token string">&quot; 的 BMI 指数为：&quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>bmi<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">fun_bmi_upgrade</span><span class="token punctuation">(</span><span class="token operator">*</span>person<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    功能：根据身高和体重计算 BMI 指数（升级版）
    :*param *person: 可变参数，该参数中需要传递带 3 个元素 列表，分别为：姓名、身高（单位：米）和体重（单位：千克）
    :return: 
    &quot;&quot;&quot;</span>
    <span class="token comment"># 此处省略了函数主体代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-import-语句导入模块" tabindex="-1"><a class="header-anchor" href="#使用-import-语句导入模块" aria-hidden="true">#</a> 使用 import 语句导入模块</h3><p>使用模块需要先以模块的形式加载模块中的代码。</p><p><strong>语法格式</strong>：<code>import modulename [as alias]</code></p><ul><li><strong>modulename</strong>：要导入的模块名</li><li><strong>as alias</strong>：如果模块名太长，可以给模块起一个别名，通过别名也可以使用模块</li></ul><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导入模块</span>
<span class="token keyword">import</span> bmi

bmi<span class="token punctuation">.</span>fun_bmi<span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">1.75</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span>  <span class="token comment"># 执行模块中的 fun_bmi 函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>使用 import 语句导入模块时，模块名是区分字母大小写的</p></div><h3 id="使用-from-import-语句导入模块" tabindex="-1"><a class="header-anchor" href="#使用-from-import-语句导入模块" aria-hidden="true">#</a> 使用 from...import 语句导入模块</h3><p>在使用 <code>import</code> 语句导入模块时，每执行一条 <code>import</code> 语句都会创建一个新的命名空间（namespace），并且在该命名空间中执行与 <code>.py</code> 文件相关的所有语。在执行时，需在具体的变量、函数和类名前加上 <strong>模块名.</strong> 前缀。如果不想在每次导入模块时都创建一个新的命名空间，而是将具体的定义导入到当前命名空间中，可以使用 <strong>from...import 语句</strong>，使用 <strong>from...import 语句</strong> 导入模块后，不需要再添加前缀，直接通过具体的变量、函数和类名等访问即可。</p><p><strong>语法格式</strong>：<code>from modulename import member</code></p><ul><li><strong>modulename</strong>：模块名，区分字母大小写</li><li><strong>member</strong>：指定要导入的变量、函数或者类等，可以同时导入多个定义，各个定义之间用逗号 <code>,</code> 分隔，也可以使用 <code>*</code> 号</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在使用 <strong>from...import 语句</strong> 导入模块中的定义时，需要保证所导入的内容在当前的命名空间中是唯一的，否则将出现冲突，后导入的同名变量、函数或者类会覆盖先导入的</p></div><p>例如：导入两个包括同名的函数模块。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
创建矩形模块，对应的文件名为 rectangle.py
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">girth</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    功能：计算矩形周长
    :param widgh: 宽度
    :param height: 高
    :return:
    &quot;&quot;&quot;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>width <span class="token operator">+</span> height<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span>


<span class="token keyword">def</span> <span class="token function">area</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    功能：计算矩形面积
    :param width: 宽度
    :param height: 高
    :return:
    &quot;&quot;&quot;</span>

    <span class="token keyword">return</span> width <span class="token operator">*</span> height


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>area<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
创建圆形模块，对应的文件名 circular.py
&quot;&quot;&quot;</span>

<span class="token keyword">import</span> math

PI <span class="token operator">=</span> math<span class="token punctuation">.</span>pi


<span class="token keyword">def</span> <span class="token function">girth</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    功能：计算圆形周长
    :param r: 半径
    :return:
    &quot;&quot;&quot;</span>

    <span class="token keyword">return</span> <span class="token builtin">round</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> PI <span class="token operator">*</span> r<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">area</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    功能：计算圆形面积
    :param r: 半径
    :return:
    &quot;&quot;&quot;</span>

    <span class="token keyword">return</span> <span class="token builtin">round</span><span class="token punctuation">(</span>PI <span class="token operator">*</span> r <span class="token operator">*</span> r<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>girth<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
创建 computc.py 文件，导入矩形模块和圆形模块
&quot;&quot;&quot;</span>

<span class="token comment"># 使用 from...import 导入</span>
<span class="token keyword">from</span> rectangle <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> circular <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;矩形的周长为；&quot;</span><span class="token punctuation">,</span> girth<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;圆形的周长为：&quot;</span><span class="token punctuation">,</span> girth<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
TypeError<span class="token punctuation">:</span> girth<span class="token punctuation">(</span><span class="token punctuation">)</span> takes <span class="token number">1</span> positional argument but <span class="token number">2</span> were given。参数为 <span class="token number">1</span> 个，但指定了 <span class="token number">2</span> 个参数
圆形的周长为： <span class="token number">62.83</span>


<span class="token comment"># 使用 import 语句导入</span>
<span class="token keyword">import</span> rectangle <span class="token keyword">as</span> r
<span class="token keyword">import</span> circular <span class="token keyword">as</span> c

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;矩形的周长为：&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>girth<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;圆形的周长为：&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>girth<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
矩形的周长为： <span class="token number">60</span>
圆形的周长为： <span class="token number">62.83</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模块搜索目录" tabindex="-1"><a class="header-anchor" href="#模块搜索目录" aria-hidden="true">#</a> 模块搜索目录</h3><p>当使用 import 语句导入模块时，默认情况下，会按照以下顺序进行查找：</p><ol><li>在当前目录（即执行的 Python 脚本文件所在的目录）下查找</li><li>到 PYTHONATH（环境变量）下的每个目录中查找</li><li>到 Python 的默认安装目录下查找</li></ol><p>以上各个目录的具体位置保存在标准模块 <code>sys</code> 的 <code>sys.path</code> 变量中。可以通过以下代码输出具体的目录：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">print</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>path<span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
<span class="token punctuation">[</span><span class="token string">&#39;E:\\\\SourceCode\\\\Python\\\\PythonProject&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;E:\\\\SourceCode\\\\Python\\\\PythonProject&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;E:\\\\Software\\\\PyCharm\\\\PyCharm 2022.1.2\\\\plugins\\\\python\\\\helpers\\\\pycharm_display&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;E:\\\\Software\\\\Python3\\\\python310.zip&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;E:\\\\Software\\\\Python3\\\\DLLs&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;E:\\\\Software\\\\Python3\\\\lib&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;E:\\\\Software\\\\Python3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;E:\\\\Software\\\\PyCharm\\\\pythonProject\\\\venv&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;E:\\\\Software\\\\PyCharm\\\\pythonProject\\\\venv\\\\lib\\\\site-packages&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;E:\\\\Software\\\\PyCharm\\\\PyCharm 2022.1.2\\\\plugins\\\\python\\\\helpers\\\\pycharm_matplotlib_backend&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下三种方法，添加指定模块目录到 <code>sys.path</code>：</p><ul><li><p><strong>临时添加</strong></p><p>只在当前执行文件的窗口有效，窗口关闭后失效。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

sys<span class="token punctuation">.</span>path<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&quot;E:\\\\SourcdCode\\\\Python\\\\demo&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>增加 .pth 文件</strong>（推荐）</p><p>通过该方法添加的目录只在当前版本的 Python 中有效，并且创建完成后，要重新打开要执行的 Python 文件。</p><p>例如：在 Python 安装目录下的 <code>Lib\\site-packages</code> 子目录中，创建扩展名为 <code>.pth</code> 文件，在该文件中添加要导入模块所在的目录。</p><div class="language-pth line-numbers-mode" data-ext="pth"><pre class="language-pth"><code>E:\\\\SourcdCode\\\\Python\\\\demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>在 PYTHONPATH 环境变量中添加</strong></p><p>通过该方法添加的目录可以再不同版本的 Python 中共享，并且创建完成后，要重新打开要执行的 Python 文件。</p><p>例如：打开 <strong>环境变量</strong> 框，如果没有 <strong>PYTHONPATH 系统变量</strong>，则需要先创建一个，否则直接选中 <strong>PYTHONPATH 系统变量</strong>，再点击 <strong>编辑</strong> 按钮，并且再弹出的对话框 <strong>变量值</strong> 文本中添加新的模块目录</p></li></ul><h2 id="以主程序的形式执行" tabindex="-1"><a class="header-anchor" href="#以主程序的形式执行" aria-hidden="true">#</a> 以主程序的形式执行</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
创建名为 christmastree 模块
&quot;&quot;&quot;</span>

pinetree <span class="token operator">=</span> <span class="token string">&quot;我是一颗松树&quot;</span>


<span class="token keyword">def</span> <span class="token function">fun_christmastree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    功能：一个梦
    :return:
    &quot;&quot;&quot;</span>

    pinetree <span class="token operator">=</span> <span class="token string">&quot;挂上彩灯、礼物...我变成一颗圣诞树\\n&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>pinetree<span class="token punctuation">)</span>


<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\n下雪了...\\n&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;开始做梦&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
fun_christmastree<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;梦醒了...&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
pinetree <span class="token operator">=</span> <span class="token string">&quot;我身上落满雪花，&quot;</span> <span class="token operator">+</span> pinetree
<span class="token keyword">print</span><span class="token punctuation">(</span>pinetree<span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
创建名为 main.py 的文件，导入 christmastree 模块并执行
&quot;&quot;&quot;</span>

<span class="token keyword">import</span> christmastree

<span class="token keyword">print</span><span class="token punctuation">(</span>christmastree<span class="token punctuation">.</span>pinetree<span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
下雪了<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> 开始做梦 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
挂上彩灯、礼物<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>我变成一颗圣诞树
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> 梦醒了<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
我身上落满雪花，我是一颗松树
我身上落满雪花，我是一颗松树
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入模块后，不仅输出了全局变量的值，而且模块中原有的测试代码也被执行了，这个结果不是想要的。在模块中将原本直接执行的测试代码放在一个 if 语句中，修改后的代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
创建名为 christmastree 模块
&quot;&quot;&quot;</span>

pinetree <span class="token operator">=</span> <span class="token string">&quot;我是一颗松树&quot;</span>


<span class="token keyword">def</span> <span class="token function">fun_christmastree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    功能：一个梦
    :return:
    &quot;&quot;&quot;</span>

    pinetree <span class="token operator">=</span> <span class="token string">&quot;挂上彩灯、礼物...我变成一颗圣诞树\\n&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>pinetree<span class="token punctuation">)</span>


<span class="token comment"># 使用此方法时，下面的语句在导入到其他文件中时不执行</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\n下雪了...\\n&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;开始做梦&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fun_christmastree<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;梦醒了...&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    pinetree <span class="token operator">=</span> <span class="token string">&quot;我身上落满雪花，&quot;</span> <span class="token operator">+</span> pinetree
    <span class="token keyword">print</span><span class="token punctuation">(</span>pinetree<span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
创建名为 main.py 的文件，导入 christmastree 模块并执行
&quot;&quot;&quot;</span>

<span class="token keyword">import</span> christmastree

<span class="token keyword">print</span><span class="token punctuation">(</span>christmastree<span class="token punctuation">.</span>pinetree<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：我是一颗松树</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在每个模块的定义中都包括一个记录模块名称的变量 <code>__name__</code>，程序可以检查该变量，以确定它们在哪个模块中执行。如果一个模块不是被导入到其它程序中执行，那么它可能在解释器的顶级模块中执行。顶级模块的 <code>__name__</code> 变量的值为 <code>__main__</code></p></div><h2 id="python-中的包" tabindex="-1"><a class="header-anchor" href="#python-中的包" aria-hidden="true">#</a> Python 中的包</h2><p>包是一个分层次的目录结构，它将一组功能相近的模块组织在一个目录下。这样即可以起到规范代码的作用，又能避免模块名重名引起的冲突。简单理解就是 <strong>文件夹</strong>，只不过在该文件夹下必须存在一个名称为 <code>__init__.py</code> 的文件。</p><h3 id="包结构" tabindex="-1"><a class="header-anchor" href="#包结构" aria-hidden="true">#</a> 包结构</h3><p>先创建名为 <code>shop</code> 项目，然后在该包下又创建了 <code>admin</code>、<code>home</code> 和 <code>templates</code> 包和一个 <code>manage.py</code> 的文件，最后在每个包中，又创建了相应的模块。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>shop  # 项目名
├── admin  # 用于保存后台文件的包
│   ├── forms.py
│   ├── __init__.py
│   └── views.py
├── home  # 用于保存前台文件的包
│   ├── forms.py
│   ├── __init__.py
│   └── views.py
├── templates  # 用于保存模板文件的包
│   ├── __init__.py
│   └── models.py
└── manage.py  # 入口程序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建和使用包" tabindex="-1"><a class="header-anchor" href="#创建和使用包" aria-hidden="true">#</a> 创建和使用包</h3><p>创建包，实际上就是创建一个文件夹，并且在该文件夹中创建一个名称为 <code>__init__.py</code> 的文件。<code>__init__.py</code> 文件是一个模块文件，模块名为对应的包名。例如：在 <code>settings</code> 包中创建的 <code>__init__.py</code> 文件，对应的模块名为 <code>settings</code>。在 <code>__init__.py</code> 文件中可以不写任何代码，也可以编写一些 Python 代码，在 <code>__init__.py</code> 文件中所编写的代码，在导入包时会自动执行。</p><ol><li><p>创建名为 <code>settings</code> 的文件夹</p></li><li><p>在 <code>settings</code> 文件夹中创建 <code>__init__.py</code> 文件</p></li><li><p>在 <code>settings</code> 包中创建名为 <code>size</code> 的模块，在模块中定义两个变量。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>width <span class="token operator">=</span> <span class="token number">800</span>
height <span class="token operator">=</span> <span class="token number">600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>在创建包之后就可以在包中创建相应的模块，然后再使用 <code>import</code> 语句从包中加载模块，加载模块通常有以下三种方式：</p><ul><li><p>通过 <strong>import + 完整包名 + 模块名</strong> 形式加载指定模块</p><p>通过该方法导入模块，在使用时需要在变量名前加入 <code>settings.size</code> 前缀。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> settings<span class="token punctuation">.</span>size

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;宽度：&quot;</span><span class="token punctuation">,</span> settings<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：宽度： 800</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;高度：&quot;</span><span class="token punctuation">,</span> settings<span class="token punctuation">.</span>size<span class="token punctuation">.</span>height<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：高度： 600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过 <strong>from + 完整包名 + import + 模块名</strong> 形式加载指定模块</p><p>通过该方法导入模块，在使用时不需要带包前缀，但是需要带模块名。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> settings <span class="token keyword">import</span> size

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;宽度：&quot;</span><span class="token punctuation">,</span> size<span class="token punctuation">.</span>width<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：宽度： 800</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;高度：&quot;</span><span class="token punctuation">,</span> size<span class="token punctuation">.</span>height<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：高度： 600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过 <strong>from + 完整包名 + 模块名 + import + 定义名</strong> 形式加载指定模块</p><p>通过该方法导入模块的函数、变量或类后，在使用时直接使用函数、变量或类名即可。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> settings<span class="token punctuation">.</span>size <span class="token keyword">import</span> width<span class="token punctuation">,</span> height

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;宽度：&quot;</span><span class="token punctuation">,</span> width<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：宽度： 800</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;高度：&quot;</span><span class="token punctuation">,</span> height<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：高度： 600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>通过 <strong>from + 完整包名 + 模块名 + import + 定义名</strong> 形式加载指定模块时，可以使用 <code>*</code> 号代替定义名，表示加载该模块下的全部定义</p></div></li></ul><p>定义 <code>size</code> 模块，在该模块中定义两个保护类型的全局变量，定义 <code>change()</code> 函数，用于修改两个全局变量的值，再定义两个函数，分别用于获取两个保护类型的全局变量。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>_width <span class="token operator">=</span> <span class="token number">800</span>
_height <span class="token operator">=</span> <span class="token number">600</span>


<span class="token keyword">def</span> <span class="token function">change</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> h<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> _width
    _width <span class="token operator">=</span> w
    <span class="token keyword">global</span> _height
    _height <span class="token operator">=</span> h


<span class="token keyword">def</span> <span class="token function">getwidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> _width
    <span class="token keyword">return</span> _width


<span class="token keyword">def</span> <span class="token function">getheight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> _height
    <span class="token keyword">return</span> _height
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>settings</code> 包的上层目录创建名为 <code>main.py</code> 的文件，在该文件中导入 <code>settings</code> 包下的 <code>size</code> 模块的全部定义。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> settings<span class="token punctuation">.</span>size <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    change<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">,</span> <span class="token number">768</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;宽度：&quot;</span><span class="token punctuation">,</span> getwidth<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：宽度： 800</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;高度：&quot;</span><span class="token punctuation">,</span> getheight<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：高度： 600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引入其它模块" tabindex="-1"><a class="header-anchor" href="#引入其它模块" aria-hidden="true">#</a> 引入其它模块</h2><p>在 Python 中，除了可以自定义模块外，还可以引用其它模块，主要包括使用标准模块和第三方模块。</p><h3 id="导入标准模块" tabindex="-1"><a class="header-anchor" href="#导入标准模块" aria-hidden="true">#</a> 导入标准模块</h3><p>直接使用 import 语句导入 Python 文件中即可，导入后通过模块名调用其提供的函数。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> random

<span class="token keyword">print</span><span class="token punctuation">(</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出结果：7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用第三方模块" tabindex="-1"><a class="header-anchor" href="#使用第三方模块" aria-hidden="true">#</a> 使用第三方模块</h3>`,57),u={href:"http://pypi.python.org/pypi",target:"_blank",rel:"noopener noreferrer"},d=a(`<p>下载和安装第三方模块可以使用 Python 提供的 <code>pip</code> 命令实现。</p><p><strong>语法格式</strong>：<code>pip &lt;command&gt; [modulename]</code></p><ul><li><strong>command</strong>：指定要执行的命令。常用的参数值有 <code>install</code>（用于安装第三方模块）、<code>uninstall</code>（用于卸载已经安装的第三方模块）、<code>list</code>（用于显示已经安装的第三方模块）等</li><li><strong>modulename</strong>：可选参数，用于指定要安装或者卸载的模块名，当 <code>command</code> 为 <code>install</code> 或 <code>uninstall</code> 时不能忽略</li></ul><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> numpy  <span class="token comment"># 安装 numpy 模块</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function k(v,m){const e=p("ExternalLinkIcon");return o(),i("div",null,[r,s("p",null,[n("可以在 Python 官方推出的 "),s("a",u,[n("http://pypi.python.org/pypi"),c(e)]),n(" 中找到第三方模块。使用第三方模块，需要先下载并安装该模块，然后就可以像使用标准模块一样导入并使用了。")]),d])}const h=t(l,[["render",k],["__file","modules.html.vue"]]);export{h as default};
