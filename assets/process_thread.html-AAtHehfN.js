import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as p}from"./app-5tldNxZo.js";const t={},e=p(`<ul><li><strong>进程</strong>：操作系统可以执行多个任务，进程就是任务，一个进程就相当于一个任务，是操作系统分配资源的最小单位。在 python 中，想要实现多任务可以使用进程来完成，进程是实现多任务的一种方式</li><li><strong>线程</strong>：进程的多个子任务就称之为线程，线程是进程的最小执行单位，一个进程可以有很多线程，每个线程执行的任务都不一样</li></ul><h2 id="多进程-multiprocessing-包" tabindex="-1"><a class="header-anchor" href="#多进程-multiprocessing-包" aria-hidden="true">#</a> 多进程 multiprocessing 包</h2><p>要想更多利用 CPU 资源，可以利用多进程，Python 多进程常用的包 <code>multiprocessing</code>，它拥有很多的功能。比如：子进程、通讯、共享、执行不同的形式等等。</p><h3 id="process——进程类" tabindex="-1"><a class="header-anchor" href="#process——进程类" aria-hidden="true">#</a> Process——进程类</h3><p><code>Process</code> 是 <code>multiprocessing</code> 里面的一个进程类，通过它就能实现多进程。</p><p><strong>语法格式：</strong><code>Process(target[, name[, args[, kwargs]]])</code></p><ul><li><strong>target</strong>：目标，在哪里新开进程让系统去执行，给系统一个目标</li><li><strong>name</strong>：进程的名字，您可以设置也可以不设置，默认是 <code>Process-N</code>，<code>N</code> 是从 <code>1,2,3…N</code>，系统默认从小到大取名</li><li><strong>args</strong> 和 <strong>kwargs</strong>：是参数，可用于传递到目标</li></ul><p>Process 里面有很多方法，其中最常用的就是 <code>start()</code> 方法用于启动进程：<code>进程名.start()</code></p><p>例如：在没有开启多进程时。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">music</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 执行 3 次</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;听音乐中...&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># 延迟 0.2s，目的是让效果对比更明显一些</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">movie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;看视频中...&quot;</span><span class="token punctuation">)</span>

        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span>


music<span class="token punctuation">(</span><span class="token punctuation">)</span>
movie<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;主进程执行完毕&quot;</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
听音乐中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
听音乐中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
听音乐中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
看视频中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
看视频中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
看视频中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
主进程执行完毕
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序从上运行到下，逐行运行，<code>music()</code> 里面的三次循环没有执行完毕就不会执行 <code>movie()</code>，以及这两个函数如果没有执行完毕，就不会执行最后一行的 <code>print</code> 语句。</p><p>例如：开启多进程时。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> multiprocessing


<span class="token keyword">def</span> <span class="token function">music</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;听音乐中...&quot;</span><span class="token punctuation">)</span>

        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">movie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;看视频中...&quot;</span><span class="token punctuation">)</span>

        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span>


<span class="token comment"># 解决 Windows 系统下调用包时的递归问题</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建子进程</span>
    music_process <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>music<span class="token punctuation">)</span>
    movie_process <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>movie<span class="token punctuation">)</span>

    <span class="token comment"># 启用进程</span>
    music_process<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    movie_process<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;主进程执行完毕&quot;</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
主进程执行完毕
听音乐中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
看视频中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
听音乐中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
看视频中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
听音乐中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
看视频中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码运行时是有三个进程同时进行的，一个是从上往下执行的主进程，执行到 <code>print</code> 输出 <strong>主进程执行完毕</strong>，另外两个子进程去执行 <code>music()</code> 和 <code>movie()</code> 进程，从他们的执行速度来看，它们是同时在进行的，所以没有像刚才那样非要等其中一个函数里面的代码执行完成才开始第二个函数。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>代码中加入了一个 if 语句来判断 <code>__name__</code> 这个。因为在 Windows 系统下，<code>multiprocessing</code> 这个包会发生递归现象，就是会在 “导入模块—调用模块” 之间反复执行，可以把 if 语句去掉，把里面的代码全部放到外面来执行试试（报错），这是 Windows 系统下会发生的一个现象，mac、linux 等系统是不用加 if 来做判断的</p></div><h3 id="获取当前进程的编号" tabindex="-1"><a class="header-anchor" href="#获取当前进程的编号" aria-hidden="true">#</a> 获取当前进程的编号</h3><ol><li><p>获取当前进程的编号：</p><p>需要用到一个 os 模块里面的 <code>getpid()</code> 方法。</p><p><strong>语法格式</strong>：<code>os.getpid()</code></p></li><li><p>获取当前进程的名字</p><p>这里用的还是 <code>multiprocessing</code> 包，里面有个 <code>current_process()</code> 的方法。</p><p><strong>语法格式</strong>：<code>multiprocessing.current_process()</code></p></li><li><p>获取当前父进程（主进程）的编号</p><p>子进程是属于哪个父进程。这个用的是 os 模块里面的 <code>getppid()</code>。</p><p><strong>语法格式</strong>：<code>os.getppid()</code></p></li></ol><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> multiprocessing
<span class="token keyword">import</span> os


<span class="token keyword">def</span> <span class="token function">music</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;music 子进程名字：&quot;</span><span class="token punctuation">,</span> multiprocessing<span class="token punctuation">.</span>current_process<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;music 子进程编号：&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;music 所属主进程的编号：&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>getppid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;听音乐中...&quot;</span><span class="token punctuation">)</span>

        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">movie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;movie 子进程名字：&quot;</span><span class="token punctuation">,</span> multiprocessing<span class="token punctuation">.</span>current_process<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;movie 子进程编号：&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;movie 所属主进程的编号：&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>getppid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;看视频中...&quot;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建子进程</span>
    music_process <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>music<span class="token punctuation">)</span>
    movie_process <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>movie<span class="token punctuation">)</span>

    <span class="token comment"># 启用进程</span>
    music_process<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    movie_process<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;主进程编号：&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
主进程编号： <span class="token number">37956</span>
music 子进程名字： <span class="token operator">&lt;</span>Process name<span class="token operator">=</span><span class="token string">&#39;Process-1&#39;</span> parent<span class="token operator">=</span><span class="token number">37956</span> started<span class="token operator">&gt;</span>
music 子进程编号： <span class="token number">44436</span>
movie 子进程名字： <span class="token operator">&lt;</span>Process name<span class="token operator">=</span><span class="token string">&#39;Process-2&#39;</span> parent<span class="token operator">=</span><span class="token number">37956</span> started<span class="token operator">&gt;</span>
movie 子进程编号： <span class="token number">31024</span>
music 所属主进程的编号： <span class="token number">37956</span>
听音乐中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
movie 所属主进程的编号： <span class="token number">37956</span>
看视频中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
听音乐中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
看视频中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
听音乐中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
看视频中<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多线程-threading-模块" tabindex="-1"><a class="header-anchor" href="#多线程-threading-模块" aria-hidden="true">#</a> 多线程 Threading 模块</h2><p>线程也同样可以进行多个任务。如果一个进程只有一个任务（主进程），那么也可以说是只有一个线程。</p><h3 id="多线程-thread-类" tabindex="-1"><a class="header-anchor" href="#多线程-thread-类" aria-hidden="true">#</a> 多线程 Thread 类</h3><p>多线程常用的一个模块是 <code>threading</code>，里面有个 <code>Thread</code> 的类，跟前面多进程时用到的 <code>Process</code> 类差不多。</p><p><strong>语法格式：</strong><code>Thread(target=None, name=None, args=(), kwargs=None)</code></p><ul><li><strong>target</strong>：可执行目标</li><li><strong>name</strong>：线程的名字默认 <code>Thread-N</code></li><li><strong>args</strong> 和 <strong>kwargs</strong>：目标参数</li></ul><p>多线程开启的方法：<code>start()</code></p><p>获取线程名字的方法：<code>threading.current_thread()</code></p><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> threading


<span class="token keyword">def</span> <span class="token function">music</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> loop<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>loop<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;听音乐：%s, 第 %s 次&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span>

        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">movie</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> loop<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>loop<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;看电影：%s, 第 %s 次&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span>

        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    music_thread <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>music<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&quot;最亲的人&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    movie_thread <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>movie<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&quot;唐探2&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    music_thread<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    movie_thread<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;主线程执行完毕&quot;</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
听音乐：最亲的人<span class="token punctuation">,</span> 第 <span class="token number">0</span> 次
看电影：唐探<span class="token number">2</span><span class="token punctuation">,</span> 第 <span class="token number">0</span> 次主线程执行完毕

看电影：唐探<span class="token number">2</span><span class="token punctuation">,</span> 第 <span class="token number">1</span> 次
听音乐：最亲的人<span class="token punctuation">,</span> 第 <span class="token number">1</span> 次
听音乐：最亲的人<span class="token punctuation">,</span> 第 <span class="token number">2</span> 次看电影：唐探<span class="token number">2</span><span class="token punctuation">,</span> 第 <span class="token number">2</span> 次
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承-thread-类" tabindex="-1"><a class="header-anchor" href="#继承-thread-类" aria-hidden="true">#</a> 继承 Thread 类</h3><p>除了用上面的方法实现多线程任务，还可以用继承类的方式去实现多线程。</p><p>通过多线程的方式，打印 “凉凉” 和 “头发没了” 各三次。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> threading


<span class="token keyword">class</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 初始化</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 调用父类 Thread 的初始化方法</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># name 变成实例属性</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 线程要做的事情</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span>


<span class="token comment"># 实例化子线程</span>
t1 <span class="token operator">=</span> MyThread<span class="token punctuation">(</span><span class="token string">&quot;凉凉&quot;</span><span class="token punctuation">)</span>
t2 <span class="token operator">=</span> MyThread<span class="token punctuation">(</span><span class="token string">&quot;头发没了&quot;</span><span class="token punctuation">)</span>

t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># 输出结果</span>
凉凉
头发没了
凉凉头发没了

头发没了凉凉
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),o=[e];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","process_thread.html.vue"]]);export{d as default};
