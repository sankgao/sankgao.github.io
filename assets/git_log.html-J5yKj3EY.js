import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,f as s}from"./app-uxayXamI.js";const t={},i=s(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git log</code> 用于显示当前分支的提交历史记录。默认情况下，<code>git log</code> 会按照时间顺序（从新到旧）显示提交，并包括提交者的姓名、电子邮件地址、提交日期和时间、提交信息以及每个提交的哈希值。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>--all</code></td><td style="text-align:left;">显示所有分支的提交历史</td></tr><tr><td style="text-align:center;"><code>-&lt;num&gt;, -n &lt;num&gt;</code></td><td style="text-align:left;">指定显示提交的 log 信息数量</td></tr><tr><td style="text-align:center;"><code>--skip=&lt;num&gt;</code></td><td style="text-align:left;">从最新提交开始，跳过指定数量再显示</td></tr><tr><td style="text-align:center;"><code>--since=&lt;date&gt;, --after=&lt;date&gt;</code></td><td style="text-align:left;">仅显示指定日期之后的提交</td></tr><tr><td style="text-align:center;"><code>--until=&lt;date&gt;, --before=&lt;date&gt;</code></td><td style="text-align:left;">仅显示指定日期之前的提交</td></tr><tr><td style="text-align:center;"><code>--author=&lt;pattern&gt;, --committer=&lt;pattern&gt;</code></td><td style="text-align:left;">仅显示由指定作者提交的提交</td></tr><tr><td style="text-align:center;"><code>--grep=&lt;pattern&gt;</code></td><td style="text-align:left;">仅显示提交信息中包含指定模式的提交</td></tr><tr><td style="text-align:center;"><code>-i, --regexp-ignore-case</code></td><td style="text-align:left;">匹配正则表达式的限制模式，不考虑字母大小写</td></tr><tr><td style="text-align:center;"><code>--basic-regexp</code></td><td style="text-align:left;">将限制性模式视为基本的正则表达式；这是默认的</td></tr><tr><td style="text-align:center;"><code>-E, --extended-regexp</code></td><td style="text-align:left;">将限制性模式视为扩展的正则表达式，而不是默认的基本正则表达式</td></tr><tr><td style="text-align:center;"><code>--merges</code></td><td style="text-align:left;">只打印合并后的提交</td></tr><tr><td style="text-align:center;"><code>--no-merges</code></td><td style="text-align:left;">不显示合并提交</td></tr><tr><td style="text-align:center;"><code>--pretty=&lt;format&gt;, --format=&lt;format&gt;</code></td><td style="text-align:left;">以指定的格式打印提交日志的内容</td></tr><tr><td style="text-align:center;"><code>--oneline</code></td><td style="text-align:left;">将每个提交压缩到一行显示</td></tr><tr><td style="text-align:center;"><code>--date=&lt;format&gt;</code></td><td style="text-align:left;">只对以人类可读格式显示的日期生效</td></tr><tr><td style="text-align:center;"><code>--graph</code></td><td style="text-align:left;">以 ASCII 图形的方式显示分支和合并历史</td></tr><tr><td style="text-align:center;"><code>--output=&lt;文件&gt;</code></td><td style="text-align:left;">输出到指定的文件，而不是标准输出</td></tr><tr><td style="text-align:center;"><code>-p, --patch</code></td><td style="text-align:left;">显示每次提交的差异</td></tr><tr><td style="text-align:center;"><code>--stat</code></td><td style="text-align:left;">显示每次提交引入或删除的文件数量统计信息</td></tr></tbody></table><h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h2><h3 id="format-格式" tabindex="-1"><a class="header-anchor" href="#format-格式" aria-hidden="true">#</a> format 格式</h3><ul><li><p><strong>oneline</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline

a159da180cd0ea822a03e81c29492a45e9828c53 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, tag: v1.0.1, origin/main, origin/HEAD<span class="token punctuation">)</span> change test01.txt
a6c6aa91ec80e18add652523bf225760270a18ff <span class="token punctuation">(</span>tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev<span class="token punctuation">)</span> <span class="token function">add</span> test02.txt
a51517a6fd3c3b53aa9a00590478442be34cda33 delete <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>short</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>short

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>medium</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>medium

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>full</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>full

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>fuller</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>fuller

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="date-格式" tabindex="-1"><a class="header-anchor" href="#date-格式" aria-hidden="true">#</a> date 格式</h3><ul><li><strong>--date=relative</strong>：显示相对于当前时间的日期。例如：<code>6 hours ago</code></li><li><strong>--date=local</strong>：是 <code>--date=default-local</code> 的一个别名。例如：<code>Wed May 15 11:22:22 2024</code></li><li><strong>--date=iso-local</strong>：使用用户的本地时区。例如：<code>2024-05-15 11:22:22 +0800</code></li><li><strong>--date=iso-strict</strong>：显示严格的 ISO 8601 格式的时间戳。例如：<code>2024-05-15T11:22:22+08:00</code></li><li><strong>--date=iso, --date=iso8601</strong>：以类似 ISO 8601 的格式显示时间戳。例如：<code>2024-05-15 11:22:22 +0800</code></li><li><strong>--date=rfc, --date=rfc2822</strong>：显示 RFC 2822 格式的时间戳，经常出现在电子邮件中。例如：<code>Wed, 15 May 2024 11:22:22 +0800</code></li><li><strong>--date=short</strong>：只显示日期，而不显示时间。例如：<code>2024-05-15</code></li><li><strong>--date=raw, --date=unix</strong>：显示日期为 Unix 纪元时间戳（自 1970-01-01 00:00:00 UTC 以来的秒数）。例如：<code>1715743342 +0800</code></li><li><strong>--date=format:&quot;%c&quot;</strong>：指定以系统语言首选的格式（<code>%c</code>）显示日期。例如：<code>Wed 15 May 2024 11:22:22 AM GMT</code></li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="显示提交历史" tabindex="-1"><a class="header-anchor" href="#显示提交历史" aria-hidden="true">#</a> 显示提交历史</h3><p>例如：显示所有的提交历史</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：显示以指定 <code>commit id</code> 开始的提交历史</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log a51517a6fd3c3b53aa9a00590478442be34cda33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：显示指定 <code>commit id</code> 提交历史</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-1</span> a51517a6fd3c3b53aa9a00590478442be34cda33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示每次提交的差异" tabindex="-1"><a class="header-anchor" href="#显示每次提交的差异" aria-hidden="true">#</a> 显示每次提交的差异</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="以简洁显示提交历史" tabindex="-1"><a class="header-anchor" href="#以简洁显示提交历史" aria-hidden="true">#</a> 以简洁显示提交历史</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-3</span> <span class="token parameter variable">--oneline</span>

a159da1 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, tag: v1.0.1, origin/main, origin/HEAD<span class="token punctuation">)</span> change test01.txt
a6c6aa9 <span class="token punctuation">(</span>tag: v1.1.0, tag: v1.0.0, origin/test, origin/dev, test02, test01, test, dev<span class="token punctuation">)</span> <span class="token function">add</span> test02.txt
a51517a delete <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示指定作者的提交历史" tabindex="-1"><a class="header-anchor" href="#显示指定作者的提交历史" aria-hidden="true">#</a> 显示指定作者的提交历史</h3><p>作者名可以不写完，且可以指定多个作者</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;admin&quot;</span>
<span class="token function">git</span> log <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;admin&quot;</span> <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示最近一周的提交历史" tabindex="-1"><a class="header-anchor" href="#显示最近一周的提交历史" aria-hidden="true">#</a> 显示最近一周的提交历史</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">&quot;1 week ago&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用图形显示分支历史" tabindex="-1"><a class="header-anchor" href="#使用图形显示分支历史" aria-hidden="true">#</a> 使用图形显示分支历史</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--graph</span> <span class="token parameter variable">--oneline</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取某个提交历史的作者" tabindex="-1"><a class="header-anchor" href="#获取某个提交历史的作者" aria-hidden="true">#</a> 获取某个提交历史的作者</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-1</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%an&quot;</span> a51517a6fd3c3b53aa9a00590478442be34cda33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30),l=[i];function d(r,o){return e(),n("div",null,l)}const m=a(t,[["render",d],["__file","git_log.html.vue"]]);export{m as default};
