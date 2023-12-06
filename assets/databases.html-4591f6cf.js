import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as e,c as o,d as p,f as n}from"./app-fea48366.js";const c={},i=n(`<h2 id="数据库编程接口" tabindex="-1"><a class="header-anchor" href="#数据库编程接口" aria-hidden="true">#</a> 数据库编程接口</h2><p>Python 中定义的数据库 <strong>API 接口</strong> 有模块接口、连接对象、游标对象、类型对象和构造器、DB API 的可选扩展以及可选的错误处理机制等。</p><h3 id="连接对象" tabindex="-1"><a class="header-anchor" href="#连接对象" aria-hidden="true">#</a> 连接对象</h3><p>数据库连接对象（Connection Object）主要提供获取数据库游标对象和提交、回滚事务的方法，以及关闭数据库连接。</p><p>通过使用 <code>connect()</code> 函数获取连接对象，<strong>常用参数如下：</strong></p><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>dsn</strong></td><td style="text-align:left;">数据源名称，给出该参数表示数据库依赖</td></tr><tr><td style="text-align:center;"><strong>user</strong></td><td style="text-align:left;">用户名</td></tr><tr><td style="text-align:center;"><strong>password</strong></td><td style="text-align:left;">用户密码</td></tr><tr><td style="text-align:center;"><strong>host</strong></td><td style="text-align:left;">主机名</td></tr><tr><td style="text-align:center;"><strong>database</strong></td><td style="text-align:left;">数据库名称</td></tr></tbody></table><p>使用 <code>pymysql</code> 模块连接数据库。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>conn <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>
    host<span class="token operator">=</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> 
    user<span class="token operator">=</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> 
    password<span class="token operator">=</span><span class="token string">&#39;password&#39;</span><span class="token punctuation">,</span> 
    db<span class="token operator">=</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> 
    charset<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">,</span> 
    cursorclass<span class="token operator">=</span>pymysql<span class="token punctuation">.</span>cursors<span class="token punctuation">.</span>DictCursor
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过使用 <code>connect()</code> 函数获取连接对象，<strong>常用方法如下：</strong></p><table><thead><tr><th style="text-align:center;">方法</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>close()</strong></td><td style="text-align:left;">关闭数据库连接</td></tr><tr><td style="text-align:center;"><strong>commit()</strong></td><td style="text-align:left;">提交事务</td></tr><tr><td style="text-align:center;"><strong>rollback()</strong></td><td style="text-align:left;">回滚事务</td></tr><tr><td style="text-align:center;"><strong>cursor()</strong></td><td style="text-align:left;">获取游标对象，操作数据库。如：执行 DML 操作，调用存储过程等</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>commit()</code> 提交事务，事务主要用于处理数据量大、复杂度高的数据。如果操作的是一系列的动作。如：张三给李四转账，有如下两个操作，这时使用事务可以维护数据库的完整性，保证两个操作要么全部执行，要么全部不执行：</p><ul><li>张三账户金额减少</li><li>李四账户金额增加</li></ul></div><h3 id="游标对象" tabindex="-1"><a class="header-anchor" href="#游标对象" aria-hidden="true">#</a> 游标对象</h3><p>游标对象（Cursor Object）代表数据库中的游标，用于指示抓取数据操作的上下文，主要提供执行 SQL 语句、调用存储过程、获取查询结果等方法。</p><p>通过使用 <code>cursor()</code> 方法可以获取到游标对象，<strong>游标对象属性如下：</strong></p><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>description</strong></td><td style="text-align:left;">数据库列类型和值的描述信息</td></tr><tr><td style="text-align:center;"><strong>rowcount</strong></td><td style="text-align:left;">返回结果的行数统计信息。如：<code>SELECT</code>、<code>UPDATE</code>、<code>CALLPROC</code> 等</td></tr></tbody></table><p><strong>常用游标对象方法如下：</strong></p><table><thead><tr><th style="text-align:center;">方法</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>callproc(procname[, parameters])</strong></td><td style="text-align:left;">调用存储过程，需要数据库支持</td></tr><tr><td style="text-align:center;"><strong>close()</strong></td><td style="text-align:left;">关闭当前游标</td></tr><tr><td style="text-align:center;"><strong>execute(operation[, parameters])</strong></td><td style="text-align:left;">执行数据库操作，SQL 语句或者数据库命令</td></tr><tr><td style="text-align:center;"><strong>executemany(operation, seq_of_params)</strong></td><td style="text-align:left;">用于批量操作。如：批量更新</td></tr><tr><td style="text-align:center;"><strong>fetchone()</strong></td><td style="text-align:left;">获取查询结果集中的下一条记录</td></tr><tr><td style="text-align:center;"><strong>fetchmany(size)</strong></td><td style="text-align:left;">获取指定数量的记录</td></tr><tr><td style="text-align:center;"><strong>fetchall()</strong></td><td style="text-align:left;">获取结果集的所有记录</td></tr><tr><td style="text-align:center;"><strong>nextset()</strong></td><td style="text-align:left;">跳至下一个可用的结果集</td></tr><tr><td style="text-align:center;"><strong>arraysize</strong></td><td style="text-align:left;">指定使用 <code>fetchmany()</code> 获取的行数，默认为 1</td></tr><tr><td style="text-align:center;"><strong>setinputsize(sizes)</strong></td><td style="text-align:left;">设置在调用 <code>execute*()</code> 方法时分配的内存区域大小</td></tr><tr><td style="text-align:center;"><strong>setoutputsize(sizes)</strong></td><td style="text-align:left;">设置列缓冲区大小，对大数据列（如：<code>LONGS</code> 和 <code>BLOBS</code>）尤其有用</td></tr></tbody></table><h2 id="使用-sqlite" tabindex="-1"><a class="header-anchor" href="#使用-sqlite" aria-hidden="true">#</a> 使用 SQLite</h2><h3 id="创建数据库文件" tabindex="-1"><a class="header-anchor" href="#创建数据库文件" aria-hidden="true">#</a> 创建数据库文件</h3><p>Python 中已经内置了 <code>SQLite3</code> 模块，所以可以直接使用 <code>import</code> 语句导入 <code>SQLite3</code> 模块。</p><p><strong>Python 操作数据库的通用的流程图：</strong></p>`,21),l=n(`<p>创建一个 <code>mrsoft.db</code> 的数据库文件，然后执行 SQL 语句创建一个 user 表，user 表包含 id 和 name 两个字段。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sqlite3

<span class="token comment"># 连接到数据库文件，如果文件不存在会自动在当前目录创建</span>
conn <span class="token operator">=</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;mrsoft.db&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 创建一个 Cursor</span>
cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 执行 SQL 语句，创建 user 表</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;create table user (id int(10) primary key, name varcher(20))&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 关闭 Cursor 游标</span>
cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 关闭 Connection</span>
conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作-sqlite" tabindex="-1"><a class="header-anchor" href="#操作-sqlite" aria-hidden="true">#</a> 操作 SQLite</h3><p><strong>语法格式</strong>：<code>insert into 表名(字段名1, 字段名2,..., 字段名n) value (字段值1, 字段值2,..., 字段值n)</code></p><p>例如：新增用户数据信息。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sqlite3

conn <span class="token operator">=</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;mrsoft.db&#39;</span><span class="token punctuation">)</span>
cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 执行 SQL 语句，插入 user 表信息</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;insert into user (id, name) values (&quot;1&quot;, &quot;zhangsan&quot;)&#39;</span><span class="token punctuation">)</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;insert into user (id, name) values (&quot;2&quot;, &quot;lisi&quot;)&#39;</span><span class="token punctuation">)</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;insert into user (id, name) values (&quot;3&quot;, &quot;wangwu&quot;)&#39;</span><span class="token punctuation">)</span>

cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 提交事务</span>
conn<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>

conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看用户数据信息" tabindex="-1"><a class="header-anchor" href="#查看用户数据信息" aria-hidden="true">#</a> 查看用户数据信息</h3><p><strong>语法格式</strong>：<code>select 字段名1, 字段名2,..., 字段名n from 表名 where 查询条件</code></p><div class="hint-container note"><p class="hint-container-title">注</p><p>如果要查询全部的字段可以使用一个 <code>*</code> 号代替所有字段名</p></div><p><strong>查询数据时通常使用如下 3 种方式：</strong></p><ul><li><strong>fetchone()</strong>：获取查询结果集中的下一条记录</li><li><strong>fetchmany(size)</strong>：获取指定数量的记录</li><li><strong>fetchall()</strong>：获取结果集的所有记录</li></ul><p>获取查询结果集中的下一条记录。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sqlite3

conn <span class="token operator">=</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;mrsoft.db&#39;</span><span class="token punctuation">)</span>
cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 执行 SQL 语句，查询 user 表</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;select * from user&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 获取查询结果集中的下一条记录</span>
result1 <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchone<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：(1, &#39;zhangsan&#39;)</span>

cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取指定数量的记录。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sqlite3

conn <span class="token operator">=</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;mrsoft.db&#39;</span><span class="token punctuation">)</span>
cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 执行 SQL 语句，查询 user 表</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;select * from user&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 获取指定数量的记录</span>
result1 <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchmany<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：[(1, &#39;zhangsan&#39;), (2, &#39;lisi&#39;)]</span>

cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取结果集的所有记录。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sqlite3

conn <span class="token operator">=</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;mrsoft.db&#39;</span><span class="token punctuation">)</span>
cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 执行 SQL 语句，查询 user 表</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;select * from user&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 获取结果集的所有记录</span>
result1 <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：[(1, &#39;zhangsan&#39;), (2, &#39;lisi&#39;), (3, &#39;wangwu&#39;)]</span>

cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取结果集中 id 大于 1 的数据。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sqlite3

conn <span class="token operator">=</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;mrsoft.db&#39;</span><span class="token punctuation">)</span>
cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 执行 SQL 语句，查询 user 表</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;select * from user where id &gt; ?&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 获取结果集的所有记录</span>
result1 <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：[(2, &#39;lisi&#39;), (3, &#39;wangwu&#39;)]</span>

cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>使用 <code>?</code> 号占位符代替具体的数值，然后使用一个元组来替换问号。如果元组中只有一个值，不要忽略元组中最后的 <code>,</code> 号</p></div><h3 id="修改用户数据信息" tabindex="-1"><a class="header-anchor" href="#修改用户数据信息" aria-hidden="true">#</a> 修改用户数据信息</h3><p><strong>语法格式</strong>：<code>update 表名 set 要修改的字段名 = 要修改后的字段值 where 修改条件</code></p><p>例如：修改数据信息。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sqlite3

conn <span class="token operator">=</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;mrsoft.db&#39;</span><span class="token punctuation">)</span>
cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 执行 SQL 语句，修改数据信息</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;update user set name = ? where id = ?&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;zhaoliu&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;select * from user&#39;</span><span class="token punctuation">)</span>
result1 <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：[(1, &#39;zhaoliu&#39;), (2, &#39;lisi&#39;), (3, &#39;wangwu&#39;)]</span>

cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除用户数据信息" tabindex="-1"><a class="header-anchor" href="#删除用户数据信息" aria-hidden="true">#</a> 删除用户数据信息</h3><p><strong>语法格式</strong>：<code>delete from 表名 where 查询条件</code></p><p>例如：删除用户数据信息。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sqlite3

conn <span class="token operator">=</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;mrsoft.db&#39;</span><span class="token punctuation">)</span>
cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 执行 SQL 语句，删除数据信息</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;delete from user where id = ?&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;select * from user&#39;</span><span class="token punctuation">)</span>
result1 <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：[(2, &#39;lisi&#39;), (3, &#39;wangwu&#39;)]</span>

cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-mysql" tabindex="-1"><a class="header-anchor" href="#使用-mysql" aria-hidden="true">#</a> 使用 MySQL</h2><ul><li><p>下载 MySQL 到本地</p></li><li><p>安装 MySQL</p></li><li><p>设置环境变量，使在任何路径都可以使用 SQL 命令</p></li><li><p>启动 MySQL</p><ul><li>在 cmd 窗口，输入命令：<code>net start mysql57</code>，启动 MySQL</li><li>使用账户密码进入 MySQL，输入命令：<code>mysql -u root -p</code>，提示输入密码</li></ul></li><li><p>使用 Navicat for MySQL 管理软件，新建 MySQL 连接</p></li></ul><p>Python 安装 PyMySQL 模块：<code>pip install PyMySQL</code></p><h3 id="连接数据库" tabindex="-1"><a class="header-anchor" href="#连接数据库" aria-hidden="true">#</a> 连接数据库</h3><p>MySQL 数据库与 SQLite 数据库操作类似。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql

<span class="token comment"># 连接数据库。参数：主机名或 IP、用户名、密码、数据库名称</span>
db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;studyPython&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 创建 Cursor 游标对象</span>
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 执行 SQL 语句，查询版本</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;SELECT VERSION()&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 获取单条数据</span>
data <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchone<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Datebase version：%s&quot;</span> <span class="token operator">%</span> data<span class="token punctuation">)</span>  <span class="token comment"># 输出结果：Datebase version：5.7.21-log</span>

<span class="token comment"># 关闭数据库连接</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建数据表" tabindex="-1"><a class="header-anchor" href="#创建数据表" aria-hidden="true">#</a> 创建数据表</h3><p>创建 books 表，books 表包含 id（主键）、name（图书名）、category（图书分类）、price（图书价格）和 publish_time（出版时间）。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql

db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mrsoft&quot;</span><span class="token punctuation">)</span>
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;DROP TABLE IF EXISTS books&quot;</span><span class="token punctuation">)</span>

sql <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
CREATE TABLE books (
    id int(8) NOT NULL AUTO_INCREMENT, 
    name varchar(50) NOT NULL, 
    category varchar(50) NOT NULL, 
    price decimal(10, 2) DEFAULT NULL, 
    pubilsh_tiem date DEFAULT NULL, 
    PRIMARY KEY (id)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf-8;
&quot;&quot;&quot;</span>

cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>

db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作-mysql-数据表" tabindex="-1"><a class="header-anchor" href="#操作-mysql-数据表" aria-hidden="true">#</a> 操作 MySQL 数据表</h3><p>添加数据，可以使用 <code>excute()</code> 方法添加，也可以使用 <code>execuemany()</code> 方法批量添加多条数据。</p><p><strong>语法格式</strong>：<code>executemany(operation, seq_of_params)</code></p><ul><li><strong>operation</strong>：操作的 SQL 语句</li><li><strong>seq_of_params</strong>：参数序列</li></ul><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql

db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mrsoft&quot;</span><span class="token punctuation">,</span> charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;DROP TABLE IF EXISTS books&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 数据列表</span>
data <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span><span class="token string">&quot;test01&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;des&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10.2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2022-11-17&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">&quot;test02&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;des&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;12.2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2022-11-17&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">&quot;test03&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;game&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;13.2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2022-11-17&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># 执行 SQL 语句，添加多条数据</span>
    cursor<span class="token punctuation">.</span>executemany<span class="token punctuation">(</span><span class="token string">&quot;insert into books(name, category, price, publish_time) values (%s, %s, %s, %s)&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    
    <span class="token comment"># 提交数据</span>
    db<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    <span class="token comment"># 如果发生错误，进行回滚</span>
    db<span class="token punctuation">.</span>rollback<span class="token punctuation">(</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43);function u(r,d){const s=t("Mermaid");return e(),o("div",null,[i,p(s,{id:"mermaid-295",code:"eJxLy8kvT85ILCpRCHHiUgACR43op3sani7vjtVU0NW1U3Ay1HjaMfvp7l0Kyfl5eanJJZn5eVAZI40Xfduf9k9TSC4tKs4v0gTrdzKCSBprKD3rXP5iYY9CcKCPwov1a5/2L326pOX5hLb3e3qeTd3wrHfd892Tn82bowQ1zUTjaevml9PXoppmApE0hUuiOcJZIxpkzNz5sZpcAMeGU00="}),l])}const m=a(c,[["render",u],["__file","databases.html.vue"]]);export{m as default};
