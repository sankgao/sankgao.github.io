import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,f as s}from"./app-DUUkceDh.js";const t={},l=s(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git log</code> 用于显示当前分支的提交历史记录。默认情况下，<code>git log</code> 会按照时间顺序（从新到旧）显示提交，并包括提交者的姓名、电子邮件地址、提交日期和时间、提交信息以及每个提交的哈希值。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>--all</code></td><td style="text-align:left;">显示所有分支的提交历史</td></tr><tr><td style="text-align:center;"><code>--reverse</code></td><td style="text-align:left;">以相反的顺序输出选择显示的提交</td></tr><tr><td style="text-align:center;"><code>--decorate[=short|full|auto|no]</code></td><td style="text-align:left;">打印显示的任何提交的引用名称。<code>short</code> 打印引用名称但不包括前缀（<code>refs/heads/</code>、<code>refs/tags/</code> 和 <code>refs/remotes</code>），默认值；<code>full</code> 打印完整的引用名称包括前缀；<code>no</code> 不打印引用名称</td></tr><tr><td style="text-align:center;"><code>-&lt;num&gt;, -n &lt;num&gt;</code></td><td style="text-align:left;">指定显示提交的 log 信息数量</td></tr><tr><td style="text-align:center;"><code>--skip=&lt;num&gt;</code></td><td style="text-align:left;">从最新提交开始，跳过指定数量再显示</td></tr><tr><td style="text-align:center;"><code>--since=&lt;date&gt;, --after=&lt;date&gt;</code></td><td style="text-align:left;">仅显示指定日期之后的提交</td></tr><tr><td style="text-align:center;"><code>--until=&lt;date&gt;, --before=&lt;date&gt;</code></td><td style="text-align:left;">仅显示指定日期之前的提交</td></tr><tr><td style="text-align:center;"><code>--author=&lt;pattern&gt;, --committer=&lt;pattern&gt;</code></td><td style="text-align:left;">仅显示由指定作者提交的提交</td></tr><tr><td style="text-align:center;"><code>--grep=&lt;pattern&gt;</code></td><td style="text-align:left;">仅显示提交信息中包含指定模式的提交</td></tr><tr><td style="text-align:center;"><code>-S&quot;String&quot;</code></td><td style="text-align:left;">在添加或删除提交中查找，匹配指定字符串的提交</td></tr><tr><td style="text-align:center;"><code>-i, --regexp-ignore-case</code></td><td style="text-align:left;">匹配正则表达式的限制模式，不考虑字母大小写</td></tr><tr><td style="text-align:center;"><code>--basic-regexp</code></td><td style="text-align:left;">将限制性模式视为基本的正则表达式；这是默认的</td></tr><tr><td style="text-align:center;"><code>-E, --extended-regexp</code></td><td style="text-align:left;">将限制性模式视为扩展的正则表达式，而不是默认的基本正则表达式</td></tr><tr><td style="text-align:center;"><code>--merges</code></td><td style="text-align:left;">只打印合并后的提交</td></tr><tr><td style="text-align:center;"><code>--no-merges</code></td><td style="text-align:left;">不显示合并提交</td></tr><tr><td style="text-align:center;"><code>--pretty=&lt;format&gt;, --format=&lt;format&gt;</code></td><td style="text-align:left;">以指定的格式打印提交日志的内容</td></tr><tr><td style="text-align:center;"><code>--oneline</code></td><td style="text-align:left;">将每个提交压缩到一行显示</td></tr><tr><td style="text-align:center;"><code>--date=&lt;format&gt;</code></td><td style="text-align:left;">只对以人类可读格式显示的日期生效</td></tr><tr><td style="text-align:center;"><code>--graph</code></td><td style="text-align:left;">以 ASCII 图形的方式显示分支和合并历史</td></tr><tr><td style="text-align:center;"><code>--output=&lt;文件&gt;</code></td><td style="text-align:left;">输出到指定的文件，而不是标准输出</td></tr><tr><td style="text-align:center;"><code>-p, --patch</code></td><td style="text-align:left;">在提交信息后，显示每次提交的差异</td></tr><tr><td style="text-align:center;"><code>--stat</code></td><td style="text-align:left;">在提交信息后，显示每次提交引入或删除的文件数量统计信息</td></tr><tr><td style="text-align:center;"><code>--shortstat</code></td><td style="text-align:left;">在提交信息后，只显示 <code>--stat</code> 中最后的行数添加、修改、删除的统计</td></tr><tr><td style="text-align:center;"><code>--name-only</code></td><td style="text-align:left;">在提交信息后，显示已修改的文件清单名称</td></tr><tr><td style="text-align:center;"><code>--name-status</code></td><td style="text-align:left;">在提交信息后，显示新增、修改、删除的文件清单</td></tr><tr><td style="text-align:center;"><code>--abbrev-commit</code></td><td style="text-align:left;">仅显示 hash 值的前几个字符，而非所有的 40 个字符</td></tr><tr><td style="text-align:center;"><code>--relative-date</code></td><td style="text-align:left;">显示相对于当前时间的日期</td></tr></tbody></table><h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>hash</code> 值就是 <code>commit id</code> 值。</p></div><h3 id="pretty-内置格式" tabindex="-1"><a class="header-anchor" href="#pretty-内置格式" aria-hidden="true">#</a> pretty 内置格式</h3><p>以指定的内置格式打印提交日志的内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span><span class="token operator">&lt;</span>format<span class="token operator">&gt;</span>
<span class="token comment"># 或</span>
<span class="token function">git</span> log <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token operator">&lt;</span>format<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果提交是一个合并，并且如果 <code>--pretty=&lt;format&gt;</code> 不是 <code>oneline</code>、<code>email</code> 或 <code>raw</code>，那么在 <code>Author:</code> 一行之前会插入一个附加行。这一行的开头是 <code>Merge:</code> 这一行以 <code>Merge:</code> 开头，并打印出祖先提交的哈希值，用空格分隔。</p><p><code>&lt;format&gt;</code> 参数如下：</p><table><thead><tr><th style="text-align:center;">值</th><th style="text-align:left;">格式</th></tr></thead><tbody><tr><td style="text-align:center;"><code>oneline</code></td><td style="text-align:left;">&lt;hash 值&gt; &lt;标题行&gt;</td></tr><tr><td style="text-align:center;"><code>short</code></td><td style="text-align:left;">commit &lt;hash 值&gt;<br>Author: &lt;作者信息&gt;<br>&lt;标题行&gt;</td></tr><tr><td style="text-align:center;"><code>medium</code></td><td style="text-align:left;">commit &lt;hash 值&gt;<br>Author: &lt;作者信息&gt;<br>Date: &lt;提交日期&gt;<br>&lt;标题行&gt;<br>&lt;完整提交信息&gt;</td></tr><tr><td style="text-align:center;"><code>full</code></td><td style="text-align:left;">commit &lt;hash 值&gt;<br>Author: &lt;作者信息&gt;<br>Commit: &lt;提交者信息&gt;<br>&lt;标题行&gt;<br>&lt;完整提交信息&gt;</td></tr><tr><td style="text-align:center;"><code>fuller</code></td><td style="text-align:left;">commit &lt;hash 值&gt;<br>Author: &lt;作者信息&gt;<br>AuthorDate: &lt;作者提交日期&gt;<br>Commit: &lt;提交者信息&gt;<br>CommitDate: &lt;提交者提交日期&gt;<br>&lt;标题行&gt;<br>&lt;完整提交信息&gt;</td></tr><tr><td style="text-align:center;"><code>reference</code></td><td style="text-align:left;">&lt;简短 hash 值&gt; (&lt;标题行&gt;, &lt;简短作者提交日期&gt;)</td></tr><tr><td style="text-align:center;"><code>email</code></td><td style="text-align:left;">From &lt;hash 值&gt; &lt;日期&gt;<br>From: &lt;作者信息&gt;<br>Date: &lt;作者提交日期&gt;<br>Subject: [PATCH] &lt;标题行&gt;<br>&lt;完整提交信息&gt;</td></tr><tr><td style="text-align:center;"><code>mboxrd</code></td><td style="text-align:left;">和 <code>email</code> 一样，但提交信息中以 <code>From</code> 开头的行（前面有零个或多个<code>&gt;</code>）用 <code>&gt;</code> 引出</td></tr><tr><td style="text-align:center;"><code>raw</code></td><td style="text-align:left;">commit &lt;hash 值&gt;<br>tree &lt;树对象 hash 值，该提交时项目目录的状态&gt;<br>parent &lt;父提交的哈希值。如果有多个父提交（比如在合并提交时），则会列出多个 parent 行&gt;<br>author &lt;作者信息&gt; &lt;作者提交时间戳&gt;<br>committer &lt;提交者提交信息&gt; &lt;提交者提交时间戳&gt;<br>&lt;标题行&gt;<br>&lt;完整提交信息&gt;</td></tr><tr><td style="text-align:center;"><code>format:&quot;&lt;format-string&gt;&quot;</code></td><td style="text-align:left;">指定想要显示的信息格式</td></tr></tbody></table><p><code>medium</code> 是 <code>git log</code> 输出的默认格式。<strong>作者</strong> 指的是实际作出修改的人，<strong>提交者</strong> 指的是最后将此工作成果提交到仓库的人。</p><ul><li><p><strong>oneline</strong></p><p>格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>hash 值<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>标题行<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline

a159da180cd0ea822a03e81c29492a45e9828c53 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, tag: v1.0.1, origin/main, origin/HEAD<span class="token punctuation">)</span> change test01.txt
a6c6aa91ec80e18add652523bf225760270a18ff <span class="token punctuation">(</span>tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev<span class="token punctuation">)</span> <span class="token function">add</span> test02.txt
a51517a6fd3c3b53aa9a00590478442be34cda33 delete <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>short</strong></p><p>格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>commit <span class="token operator">&lt;</span>hash 值<span class="token operator">&gt;</span>
Author: <span class="token operator">&lt;</span>作者信息<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>标题行<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>short

commit a159da180cd0ea822a03e81c29492a45e9828c53 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, tag: v1.0.1, origin/main, origin/HEAD<span class="token punctuation">)</span>
Author: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>

    change test01.txt

commit a6c6aa91ec80e18add652523bf225760270a18ff <span class="token punctuation">(</span>tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev<span class="token punctuation">)</span>
Author: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>

    <span class="token function">add</span> test02.txt

commit a51517a6fd3c3b53aa9a00590478442be34cda33
Merge: c0783a2 60f0e56
Author: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>

    delete <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>medium</strong></p><p>格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>commit <span class="token operator">&lt;</span>hash 值<span class="token operator">&gt;</span>
Author: <span class="token operator">&lt;</span>作者信息<span class="token operator">&gt;</span>
Date: <span class="token operator">&lt;</span>提交日期<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>标题行<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>完整提交信息<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>medium

commit a159da180cd0ea822a03e81c29492a45e9828c53 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, tag: v1.0.1, origin/main, origin/HEAD<span class="token punctuation">)</span>
Author: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
Date:   Wed May <span class="token number">15</span> <span class="token number">11</span>:22:22 <span class="token number">2024</span> +0800

    change test01.txt

    delete test02.txt

    <span class="token function">add</span> test03.txt

commit a6c6aa91ec80e18add652523bf225760270a18ff <span class="token punctuation">(</span>tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev<span class="token punctuation">)</span>
Author: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
Date:   Tue May <span class="token number">14</span> <span class="token number">10</span>:58:02 <span class="token number">2024</span> +0800

    <span class="token function">add</span> test02.txt

commit a51517a6fd3c3b53aa9a00590478442be34cda33
Merge: c0783a2 60f0e56
Author: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
Date:   Tue May <span class="token number">14</span> <span class="token number">10</span>:47:32 <span class="token number">2024</span> +0800

    delete <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>full</strong></p><p>格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>commit <span class="token operator">&lt;</span>hash 值<span class="token operator">&gt;</span>
Author: <span class="token operator">&lt;</span>作者信息<span class="token operator">&gt;</span>
Commit: <span class="token operator">&lt;</span>提交者信息<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>标题行<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>完整提交信息<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>full

commit a159da180cd0ea822a03e81c29492a45e9828c53 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, tag: v1.0.1, origin/main, origin/HEAD<span class="token punctuation">)</span>
Author: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
Commit: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>

    change test01.txt

    delete test02.txt

    <span class="token function">add</span> test03.txt

commit a6c6aa91ec80e18add652523bf225760270a18ff <span class="token punctuation">(</span>tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev<span class="token punctuation">)</span>
Author: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
Commit: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>

    <span class="token function">add</span> test02.txt

commit a51517a6fd3c3b53aa9a00590478442be34cda33
Merge: c0783a2 60f0e56
Author: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
Commit: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>

    delete <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>fuller</strong></p><p>格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>commit <span class="token operator">&lt;</span>hash 值<span class="token operator">&gt;</span>
Author: <span class="token operator">&lt;</span>作者信息<span class="token operator">&gt;</span>
AuthorDate: <span class="token operator">&lt;</span>作者提交日期<span class="token operator">&gt;</span>
Commit: <span class="token operator">&lt;</span>提交者信息<span class="token operator">&gt;</span>
CommitDate: <span class="token operator">&lt;</span>提交者提交日期<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>标题行<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>完整提交信息<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>fuller

commit a159da180cd0ea822a03e81c29492a45e9828c53 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, tag: v1.0.1, origin/main, origin/HEAD<span class="token punctuation">)</span>
Author:     Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
AuthorDate: Wed May <span class="token number">15</span> <span class="token number">11</span>:22:22 <span class="token number">2024</span> +0800
Commit:     Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
CommitDate: Wed May <span class="token number">15</span> <span class="token number">11</span>:22:22 <span class="token number">2024</span> +0800

    change test01.txt

    delete test02.txt

    <span class="token function">add</span> test03.txt

commit a6c6aa91ec80e18add652523bf225760270a18ff <span class="token punctuation">(</span>tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev<span class="token punctuation">)</span>
Author:     Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
AuthorDate: Tue May <span class="token number">14</span> <span class="token number">10</span>:58:02 <span class="token number">2024</span> +0800
Commit:     Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
CommitDate: Tue May <span class="token number">14</span> <span class="token number">10</span>:58:02 <span class="token number">2024</span> +0800

    <span class="token function">add</span> test02.txt

commit a51517a6fd3c3b53aa9a00590478442be34cda33
Merge: c0783a2 60f0e56
Author:     Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
AuthorDate: Tue May <span class="token number">14</span> <span class="token number">10</span>:47:32 <span class="token number">2024</span> +0800
Commit:     Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
CommitDate: Tue May <span class="token number">14</span> <span class="token number">10</span>:47:32 <span class="token number">2024</span> +0800

    delete <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>reference</strong></p><p>格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>简短 <span class="token builtin class-name">hash</span> 值<span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>标题行<span class="token operator">&gt;</span>, <span class="token operator">&lt;</span>简短作者提交日期<span class="token operator">&gt;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>reference

a159da1 <span class="token punctuation">(</span>change test01.txt, <span class="token number">2024</span>-05-15<span class="token punctuation">)</span>
a6c6aa9 <span class="token punctuation">(</span>add test02.txt, <span class="token number">2024</span>-05-14<span class="token punctuation">)</span>
a51517a <span class="token punctuation">(</span>delete file, <span class="token number">2024</span>-05-14<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>email</strong></p><p>格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>From <span class="token operator">&lt;</span>hash 值<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>日期<span class="token operator">&gt;</span>
From: <span class="token operator">&lt;</span>作者信息<span class="token operator">&gt;</span>
Date: <span class="token operator">&lt;</span>作者提交日期<span class="token operator">&gt;</span>
Subject: <span class="token punctuation">[</span>PATCH<span class="token punctuation">]</span> <span class="token operator">&lt;</span>标题行<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>完整提交信息<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>email

From a159da180cd0ea822a03e81c29492a45e9828c53 Mon Sep <span class="token number">17</span> 00:00:00 <span class="token number">2001</span>
From: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
Date: Wed, <span class="token number">15</span> May <span class="token number">2024</span> <span class="token number">11</span>:22:22 +0800
Subject: <span class="token punctuation">[</span>PATCH<span class="token punctuation">]</span> change test01.txt

delete test02.txt

<span class="token function">add</span> test03.txt

From a6c6aa91ec80e18add652523bf225760270a18ff Mon Sep <span class="token number">17</span> 00:00:00 <span class="token number">2001</span>
From: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
Date: Tue, <span class="token number">14</span> May <span class="token number">2024</span> <span class="token number">10</span>:58:02 +0800
Subject: <span class="token punctuation">[</span>PATCH<span class="token punctuation">]</span> <span class="token function">add</span> test02.txt


From a51517a6fd3c3b53aa9a00590478442be34cda33 Mon Sep <span class="token number">17</span> 00:00:00 <span class="token number">2001</span>
From: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
Date: Tue, <span class="token number">14</span> May <span class="token number">2024</span> <span class="token number">10</span>:47:32 +0800
Subject: <span class="token punctuation">[</span>PATCH<span class="token punctuation">]</span> delete <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>raw</strong></p><p>格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>commit <span class="token operator">&lt;</span>hash 值<span class="token operator">&gt;</span>
tree <span class="token operator">&lt;</span>树对象 <span class="token builtin class-name">hash</span> 值，该提交时项目目录的状态<span class="token operator">&gt;</span>
parent <span class="token operator">&lt;</span>父提交的哈希值。如果有多个父提交（比如在合并提交时），则会列出多个 parent 行<span class="token operator">&gt;</span>
author <span class="token operator">&lt;</span>作者信息<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>作者提交时间戳<span class="token operator">&gt;</span>
committer <span class="token operator">&lt;</span>提交者提交信息<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>提交者提交时间戳<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>标题行<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>完整提交信息<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>raw
commit a159da180cd0ea822a03e81c29492a45e9828c53
tree 69d750f5f69080d68c6450039fa6e80dcdd38b6e
parent a6c6aa91ec80e18add652523bf225760270a18ff
author Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span> <span class="token number">1715743342</span> +0800
committer Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span> <span class="token number">1715743342</span> +0800

    change test01.txt

    delete test02.txt

    <span class="token function">add</span> test03.txt

commit a6c6aa91ec80e18add652523bf225760270a18ff
tree f505e702d65613cf36cc31f095e2b0e92d86ffce
parent a51517a6fd3c3b53aa9a00590478442be34cda33
author Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span> <span class="token number">1715655482</span> +0800
committer Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span> <span class="token number">1715655482</span> +0800

    <span class="token function">add</span> test02.txt

commit a51517a6fd3c3b53aa9a00590478442be34cda33
tree 3b969ab954fd723c5fb23e3c3024053c5595bbf8
parent c0783a2f60bc50fd1a843781a1395614c2fc0dee
parent 60f0e56d9052ed9d4b0c32fa4d8366b5edf4ae90
author Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span> <span class="token number">1715654852</span> +0800
committer Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span> <span class="token number">1715654852</span> +0800

    delete <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>format:&quot;&lt;format-string&gt;&quot;</strong></p><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;作者：%an 邮箱：%ae&quot;</span>

作者：Administrator 邮箱：admin@example.com
作者：Administrator 邮箱：Administrator@example.com
作者：Administrator 邮箱：Administrator@example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="format-常用格式占位符" tabindex="-1"><a class="header-anchor" href="#format-常用格式占位符" aria-hidden="true">#</a> format 常用格式占位符</h3><p><code>--pretty=format:&quot;&lt;format-string&gt;</code> 中常用格式占位符列表如下：</p><ul><li><p><strong>%n</strong>：换行</p></li><li><p><strong>%%</strong>：输出 <code>%</code> 符号</p></li><li><p><strong>%Cred</strong>：后面输出将颜色改为红色</p></li><li><p><strong>%Cgreen</strong>：后面输出将颜色改为绿色</p></li><li><p><strong>%Cblue</strong>：后面输出将颜色改为蓝色</p></li><li><p><strong>%Creset</strong>：重置后面输出颜色</p></li><li><p><strong>%C(…​)</strong>：自定义后面输出颜色</p></li><li><p><strong>%m</strong>：左（<code>&lt;</code>）、右（<code>&gt;</code>）或边界（<code>-</code>）标记</p></li><li><p><strong>%&lt;(N[,trunc|ltrunc|mtrunc])</strong>：使下一个占位符至少占用 <code>N</code> 列宽，必要时在右侧填充空格。如果输出超过 <code>N</code> 列，可选择在左侧（ltrunc）<code>..ft</code>、中间（mtrunc）<code>mi..le</code> 或末尾（trunc）<code>rig..</code> 截断（用 <code>..</code> 符号）。例如：作者名至少占 <code>5</code> 个字符宽度并在超出时用末尾截断 <code>--pretty=format:&quot;%&lt;(5,trunc)%an %h - %s&quot;</code></p></li><li><p><strong>%H</strong>：提交哈希值</p></li><li><p><strong>%h</strong>：简短的提交哈希值</p></li><li><p><strong>%T</strong>：目录树哈希值</p></li><li><p><strong>%t</strong>：简短的目录树哈希值</p></li><li><p><strong>%P</strong>：父类哈希值</p></li><li><p><strong>%p</strong>：简短的父类哈希值</p></li><li><p><strong>%an</strong>：作者名称。通常不会进行任何特殊的处理或格式化。如果作者的名字中有空格或其他特殊字符，它们将原样输出</p></li><li><p><strong>%aN</strong>：作者名称。会对作者的名字进行特殊的处理，主要是尝试将名字中的空格和其他分隔符替换为单个空格，并可能进行其他形式的规范化。有助于在输出中更一致地表示作者的名字，特别是在名字中包含多个单词或特殊字符的情况下</p></li><li><p><strong>%ae</strong>：作者电子邮箱。将其转换为小写形式输出，无论原始的电子邮件地址是大写、小写还是混合大小写</p></li><li><p><strong>%aE</strong>：作者电子邮箱。保持原始的电子邮件地址大小写不变</p></li><li><p><strong>%al</strong>：作者电子邮件的本地部分（<code>@</code> 符号之前的部分）</p></li><li><p><strong>%aL</strong>：作者电子邮件的本地部分（<code>@</code> 符号之前的部分）</p></li><li><p><strong>%ad</strong>：作者修订日期。显示默认日期格式。例如：<code>Wed May 15 11:22:22 2024 +0800</code></p></li><li><p><strong>%aD</strong>：作者修订日期。显示 RFC 2822 格式。例如：<code>Wed, 15 May 2024 11:22:22 +0800</code></p></li><li><p><strong>%ar</strong>：作者修订日期。显示相对于当前时间的日期。例如：<code>28 hours ago</code></p></li><li><p><strong>%at</strong>：作者修订日期。显示日期为 Unix 纪元时间戳。例如：<code>1715743342</code></p></li><li><p><strong>%ai</strong>：作者修订日期。显示类似的 ISO 8601 格式。例如：<code>2024-05-15 11:22:22 +0800</code></p></li><li><p><strong>%aI</strong>：作者修订日期。显示严格的 ISO 8601 格式。例如：<code>2024-05-15T11:22:22+08:00</code></p></li><li><p><strong>%as</strong>：作者修订日期。只显示日期，而不显示时间。例如：<code>2024-05-15</code></p></li><li><p><strong>%ah</strong>：作者修订日期。以易读形式显示。例如：<code>Wed 11:22</code></p></li><li><p><strong>%cn</strong>：提交者名称。通常不会进行任何特殊的处理或格式化。如果提交者的名字中有空格或其他特殊字符，它们将原样输出</p></li><li><p><strong>%cN</strong>：提交者名称。会对提交者的名字进行特殊的处理，主要是尝试将名字中的空格和其他分隔符替换为单个空格，并可能进行其他形式的规范化。有助于在输出中更一致地表示提交者的名字，特别是在名字中包含多个单词或特殊字符的情况下</p></li><li><p><strong>%ce</strong>：提交者电子邮箱。将其转换为小写形式输出，无论原始的电子邮件地址是大写、小写还是混合大小写</p></li><li><p><strong>%cE</strong>：提交者电子邮箱。保持原始的电子邮件地址大小写不变</p></li><li><p><strong>%cl</strong>：提交者电子邮件的本地部分（<code>@</code> 符号之前的部分）</p></li><li><p><strong>%cL</strong>：提交者电子邮件的本地部分（<code>@</code> 符号之前的部分）</p></li><li><p><strong>%cd</strong>：提交日期。显示默认日期格式。例如：<code>Wed May 15 11:22:22 2024 +0800</code></p></li><li><p><strong>%cD</strong>：提交日期。显示 RFC 2822 格式。例如：<code>Wed, 15 May 2024 11:22:22 +0800</code></p></li><li><p><strong>%cr</strong>：提交日期。显示相对于当前时间的日期。例如：<code>28 hours ago</code></p></li><li><p><strong>%ct</strong>：提交日期。显示日期为 Unix 纪元时间戳。例如：<code>1715743342</code></p></li><li><p><strong>%ci</strong>：提交日期。显示类似的 ISO 8601 格式。例如：<code>2024-05-15 11:22:22 +0800</code></p></li><li><p><strong>%cI</strong>：提交日期。显示严格的 ISO 8601 格式。例如：<code>2024-05-15T11:22:22+08:00</code></p></li><li><p><strong>%cs</strong>：提交日期。只显示日期，而不显示时间。例如：<code>2024-05-15</code></p></li><li><p><strong>%ch</strong>：提交日期。以易读形式显示。例如：<code>Wed 11:22</code></p></li><li><p><strong>%d</strong>：<code>ref</code> 名称</p></li><li><p><strong>%D</strong>：<code>ref</code> 名称，不带括号（<code>()</code>）包围</p></li><li><p><strong>%(decorate:[:&lt;选项&gt;])</strong>：自定义装饰的引用名称，<code>decorate</code> 字符串后面可以是冒号和零个或多个以逗号分隔的选项</p><ul><li><strong>prefix=&lt;值&gt;</strong>：显示在引用名称列表之前。默认为 <code>(</code></li><li><strong>suffix=&lt;值&gt;</strong>：显示在引用名称列表之后。默认为 <code>)</code></li><li><strong>separator=&lt;值&gt;</strong>：显示在引用名称之间。默认为 <code>,</code></li><li><strong>point=&lt;值&gt;</strong>：显示在 HEAD 和其指向的分支（如果有）之间。默认为 <code>-&gt;</code></li><li><strong>tag=&lt;值&gt;</strong>：显示在标记名称之前。默认为 <code>tag:</code></li></ul></li><li><p><strong>%S</strong>：在命令行中给出的提交 <code>ref</code> 名称</p></li><li><p><strong>%s</strong>：显示标题行</p></li><li><p><strong>%b</strong>：显示完整提交信息。如果只有标题行，没有完整提交信息，则显示空</p></li><li><p><strong>%B</strong>：显示标题行及完整提交信息</p></li></ul><h3 id="date-格式" tabindex="-1"><a class="header-anchor" href="#date-格式" aria-hidden="true">#</a> date 格式</h3><ul><li><strong>--date=relative</strong>：显示相对于当前时间的日期。例如：<code>6 hours ago</code></li><li><strong>--date=local</strong>：是 <code>--date=default-local</code> 的一个别名。例如：<code>Wed May 15 11:22:22 2024</code></li><li><strong>--date=iso-local</strong>：使用用户的本地时区。例如：<code>2024-05-15 11:22:22 +0800</code></li><li><strong>--date=iso-strict</strong>：显示严格的 ISO 8601 格式的时间戳。例如：<code>2024-05-15T11:22:22+08:00</code></li><li><strong>--date=iso, --date=iso8601</strong>：以类似 ISO 8601 的格式显示时间戳。例如：<code>2024-05-15 11:22:22 +0800</code></li><li><strong>--date=rfc, --date=rfc2822</strong>：显示 RFC 2822 格式的时间戳，经常出现在电子邮件中。例如：<code>Wed, 15 May 2024 11:22:22 +0800</code></li><li><strong>--date=short</strong>：只显示日期，而不显示时间。例如：<code>2024-05-15</code></li><li><strong>--date=raw, --date=unix</strong>：显示日期为 Unix 纪元时间戳（自 1970-01-01 00:00:00 UTC 以来的秒数）。例如：<code>1715743342 +0800</code></li><li><strong>--date=human</strong>：如果时区与当前时区不匹配，则显示时区；如果匹配则不打印整个日期（对于今年的日期，跳过打印年份；但如果是最近几天的日期，也跳过整个日期本身，只显示哪个工作日）。对于较早的日期，小时和分钟也被省略了。例如：<code>Wed 11:22</code></li><li><strong>--date=format:&quot;%c&quot;</strong>：指定以系统语言首选的格式（<code>%c</code>）显示日期。例如：<code>Wed 15 May 2024 11:22:22 AM GMT</code></li></ul><p><code>--date=format:&quot;&lt;format-string&gt;</code> 中常用占位符列表如下：</p><ul><li><strong>%c</strong>：适用于区域设置的日期和时间表示。例如：<code>Tue 14 May 2024 10:58:02 AM GMT</code></li><li><strong>%Y</strong>：带世纪的年份，用十进制数字（<code>0000~9999</code>）表示</li><li><strong>%y</strong>：无世纪的年份，用十进制数字（<code>00~99</code>）表示，也就是年份没有前两位</li><li><strong>%m</strong>：月份用十进制数字（<code>01~12</code>）表示</li><li><strong>%B</strong>：月份英文的全称</li><li><strong>%b</strong>：月份英文的缩写</li><li><strong>%j</strong>：年中天数用十进制数字（<code>001~366</code>）表示</li><li><strong>%d</strong>：月中天数用十进制数字（<code>01~31</code>）表示</li><li><strong>%I</strong>：12 小时制的小时（<code>01~12</code>）</li><li><strong>%H</strong>：24 小时制的小时（<code>00~23</code>）</li><li><strong>%p</strong>：12 小时制的指示器。上午用 <code>AM</code> 表示；下午用 <code>PM</code> 表示</li><li><strong>%M</strong>：分钟用十进制数字（<code>00~59</code>）表示</li><li><strong>%S</strong>：秒用十进制数字（<code>00~59</code>）表示</li><li><strong>%w</strong>：星期用十进制数字（<code>0~6</code>；星期日为 <code>0</code>）</li><li><strong>%A</strong>：星期英文的全称</li><li><strong>%a</strong>：星期英文的缩写</li><li><strong>%W</strong>：年中星期用十进制数字（<code>00~53</code>）表示，星期一作为星期的第一天</li><li><strong>%U</strong>：年中周数用十进制数字（<code>00~53</code>）表示，周日为一周的第一天</li><li><strong>%x</strong>：当前语言环境的日期表示。例如：<code>05/14/2024</code></li><li><strong>%X</strong>：当前语言环境的时间表示。例如：<code>10:58:02 AM</code></li><li><strong>%z, %Z</strong>：时区名称或时区缩写，如果时区未知，则没有字符。例如：<code>+0800</code></li><li><strong>%%</strong>：表示百分号</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="显示提交历史" tabindex="-1"><a class="header-anchor" href="#显示提交历史" aria-hidden="true">#</a> 显示提交历史</h3><p>例如：显示所有的提交历史。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：以相反的顺序输出选择显示的提交。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--reverse</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：显示以指定 <code>commit id</code> 开始的提交历史。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log a51517a6fd3c3b53aa9a00590478442be34cda33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：显示指定 <code>dev</code> 分支的提交历史。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：显示以指定 <code>v1.0.0</code> 标签开始的提交历史。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：显示指定 <code>commit id</code> 提交历史。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-1</span> a51517a6fd3c3b53aa9a00590478442be34cda33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示每次提交的差异" tabindex="-1"><a class="header-anchor" href="#显示每次提交的差异" aria-hidden="true">#</a> 显示每次提交的差异</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="以简洁显示提交历史" tabindex="-1"><a class="header-anchor" href="#以简洁显示提交历史" aria-hidden="true">#</a> 以简洁显示提交历史</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--oneline</span>

a159da1 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, tag: v1.0.1, origin/main, origin/HEAD<span class="token punctuation">)</span> change test01.txt
a6c6aa9 <span class="token punctuation">(</span>tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev<span class="token punctuation">)</span> <span class="token function">add</span> test02.txt
a51517a delete <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示指定作者的提交历史" tabindex="-1"><a class="header-anchor" href="#显示指定作者的提交历史" aria-hidden="true">#</a> 显示指定作者的提交历史</h3><p>作者名可以不写完，且可以指定多个作者。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;admin&quot;</span>
<span class="token function">git</span> log <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;admin&quot;</span> <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示最近一周的提交历史" tabindex="-1"><a class="header-anchor" href="#显示最近一周的提交历史" aria-hidden="true">#</a> 显示最近一周的提交历史</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">&quot;1 week ago&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示提交历史指定匹配信息" tabindex="-1"><a class="header-anchor" href="#显示提交历史指定匹配信息" aria-hidden="true">#</a> 显示提交历史指定匹配信息</h3><p>显示在指定匹配 <code>test01.txt</code> 提交历史。</p><p>例如：在提交历史记录中匹配 <code>test01.txt</code> 的提交历史。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--grep</span><span class="token operator">=</span><span class="token string">&#39;test01.txt&#39;</span>

commit 66c3923d32a89ab9c24d95c31aee2cd67c25e8f3
Author: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
Date:   Thu May <span class="token number">9</span> <span class="token number">13</span>:34:22 <span class="token number">2024</span> +0800

    <span class="token function">add</span> test01.txt

commit b5505b7f1702bce009eb002ba9a43e0088e1a189
Author: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
Date:   Wed May <span class="token number">8</span> <span class="token number">15</span>:38:41 <span class="token number">2024</span> +0800

    change <span class="token builtin class-name">test</span> delete test01.txt

commit d050c5d9b420c41e8d34657e6129eff36854258e
Author: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
Date:   Wed May <span class="token number">8</span> <span class="token number">15</span>:35:07 <span class="token number">2024</span> +0800

    <span class="token function">add</span> test01.txt test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找自首次出现以来的历史记录" tabindex="-1"><a class="header-anchor" href="#查找自首次出现以来的历史记录" aria-hidden="true">#</a> 查找自首次出现以来的历史记录</h3><p>例如：查找 <code>test</code> 字符串自首次出现以来的历史记录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log -S<span class="token string">&quot;test&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用图形显示分支历史" tabindex="-1"><a class="header-anchor" href="#使用图形显示分支历史" aria-hidden="true">#</a> 使用图形显示分支历史</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--graph</span> <span class="token parameter variable">--oneline</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取某个提交历史的作者" tabindex="-1"><a class="header-anchor" href="#获取某个提交历史的作者" aria-hidden="true">#</a> 获取某个提交历史的作者</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-1</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%an&quot;</span> a51517a6fd3c3b53aa9a00590478442be34cda33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示已修改的文件清单名称" tabindex="-1"><a class="header-anchor" href="#显示已修改的文件清单名称" aria-hidden="true">#</a> 显示已修改的文件清单名称</h3><p>在提交信息后，显示已修改的文件清单名称。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> --name-only

commit a159da180cd0ea822a03e81c29492a45e9828c53 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, tag: v1.0.1<span class="token punctuation">)</span>
Author: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
Date:   Wed May <span class="token number">15</span> <span class="token number">11</span>:22:22 <span class="token number">2024</span> +0800

    change test01.txt

    delete test02.txt

    <span class="token function">add</span> test03.txt

test01.txt
test02.txt
test03.txt

commit a6c6aa91ec80e18add652523bf225760270a18ff <span class="token punctuation">(</span>tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev<span class="token punctuation">)</span>
Author: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
Date:   Tue May <span class="token number">14</span> <span class="token number">10</span>:58:02 <span class="token number">2024</span> +0800

    <span class="token function">add</span> test02.txt

test02.txt

commit a51517a6fd3c3b53aa9a00590478442be34cda33
Merge: c0783a2 60f0e56
Author: Administrator <span class="token operator">&lt;</span>admin@example.com<span class="token operator">&gt;</span>
Date:   Tue May <span class="token number">14</span> <span class="token number">10</span>:47:32 <span class="token number">2024</span> +0800

    delete <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58),i=[l];function o(r,d){return a(),e("div",null,i)}const m=n(t,[["render",o],["__file","git_log.html.vue"]]);export{m as default};
