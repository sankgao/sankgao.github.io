import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,f as a}from"./app-PVD15qjF.js";const i={},t=a(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git bisect</code> 用于帮助用户确定引入错误的提交（<code>commit</code>）的强大工具。当您发现代码中的某个问题，但不确定是哪个提交引入的，<code>git bisect</code> 可以帮助您自动或半自动地定位到那个特定的提交。</p><p><code>git bisect</code> 这个命令使用 <strong>二分搜索算法</strong> 来查找项目历史中哪个提交引入了一个错误。使用该命令时，首先告诉它一个已知包含错误的 <strong>坏</strong> 提交（包含错误的提交）和一个已知在错误出现之前的 <strong>好</strong> 提交（没有错误的提交）。然后 <code>git bisect</code> 在这两个端点之间挑选一个提交，并询问您所选的提交是 <strong>好</strong> 还是 <strong>坏</strong>。它继续缩小范围，直到找到引入错误的提交。</p><p><strong>注意事项</strong></p><ul><li>在使用 <code>git bisect</code> 时，确保您的测试环境是干净的，并且您的测试是可靠的</li><li><code>git bisect</code> 不会修改您的工作目录或任何文件，它只是检出不同的提交</li><li>在 bisect 过程中，您可能需要多次构建和测试您的代码，所以确保这个过程是自动化的，以节省时间</li></ul><p>总之，<code>git bisect</code> 是一个强大的工具，可以帮助您快速定位到引入错误的提交。如果您经常需要调试代码并确定错误的来源，那么掌握这个工具会非常有用。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>--no-checkout</code></td><td style="text-align:left;">在二分查找过程的每个迭代中，不要检出新的工作区</td></tr><tr><td style="text-align:center;"><code>--first-parent</code></td><td style="text-align:left;">在看到合并提交时，只跟随第一个父提交</td></tr></tbody></table><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><table><thead><tr><th style="text-align:center;">命令</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>start</code></td><td style="text-align:left;">启动 bisect 会话</td></tr><tr><td style="text-align:center;"><code>bad</code></td><td style="text-align:left;">指定坏提交</td></tr><tr><td style="text-align:center;"><code>good</code></td><td style="text-align:left;">指定好提交</td></tr><tr><td style="text-align:center;"><code>reset</code></td><td style="text-align:left;">重置二分查找并返回到原来的 HEAD</td></tr><tr><td style="text-align:center;"><code>old</code></td><td style="text-align:left;">指定旧提交</td></tr><tr><td style="text-align:center;"><code>new</code></td><td style="text-align:left;">指定新提交</td></tr><tr><td style="text-align:center;"><code>terms</code></td><td style="text-align:left;">获得当前使用的术语的提醒</td></tr><tr><td style="text-align:center;"><code>visualize</code></td><td style="text-align:left;">视觉化、视图的二分查找</td></tr><tr><td style="text-align:center;"><code>log</code></td><td style="text-align:left;">二分查找日志</td></tr><tr><td style="text-align:center;"><code>replay</code></td><td style="text-align:left;">重启二分查找</td></tr><tr><td style="text-align:center;"><code>skip</code></td><td style="text-align:left;">跳过二分查找</td></tr><tr><td style="text-align:center;"><code>run</code></td><td style="text-align:left;">运行二分查找</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>克隆 <code>https://github.com/ossxp-com/gitdemo-commit-tree.git</code> 项目到本地。</p><h3 id="二分查找手动测试" tabindex="-1"><a class="header-anchor" href="#二分查找手动测试" aria-hidden="true">#</a> 二分查找手动测试</h3><p>例如：如果在 <code>doc</code> 目录中包含文件 <code>B.txt</code>，则此版本是 “坏” 的。</p><ol><li><p>首先确认工作在 <code>master</code> 分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch

master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开始二分查找</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> bisect start

status: waiting <span class="token keyword">for</span> both good and bad commits
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>当前版本已经是 “坏提交”，因为存在文件 <code>doc/B.txt</code>。而 G 版本是 “好提交”，因为不存在文件 <code>doc/B.txt</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> cat-file <span class="token parameter variable">-t</span> master:doc/B.txt

blob

$ <span class="token function">git</span> cat-file <span class="token parameter variable">-t</span> G:doc/B.txt

fatal: path <span class="token string">&#39;doc/B.txt&#39;</span> exists on disk, but not <span class="token keyword">in</span> <span class="token string">&#39;G&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将当前版本（HEAD）标记为 “坏提交”，将 G 版本标记为 “好提交”</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> bisect bad

status: waiting <span class="token keyword">for</span> good commit<span class="token punctuation">(</span>s<span class="token punctuation">)</span>, bad commit known

$ <span class="token function">git</span> bisect good G

Bisecting: <span class="token number">5</span> revisions left to <span class="token builtin class-name">test</span> after this <span class="token punctuation">(</span>roughly <span class="token number">2</span> steps<span class="token punctuation">)</span>
<span class="token punctuation">[</span>0cd7f2ea245d90d414e502467ac749f36aa32cc4<span class="token punctuation">]</span> commit C.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>自动定位到 C 提交。没有文件 <code>doc/B.txt</code>，也是一个好提交</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> describe

C

$ <span class="token function">ls</span> doc

C.txt  F.txt  I.txt  J.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>标记当前版本（C 提交）为 “好提交”</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> bisect good

Bisecting: <span class="token number">3</span> revisions left to <span class="token builtin class-name">test</span> after this <span class="token punctuation">(</span>roughly <span class="token number">2</span> steps<span class="token punctuation">)</span>
<span class="token punctuation">[</span>212efce1548795a1edb08e3708a50989fcd73cce<span class="token punctuation">]</span> Commit D: merge G with H
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>现在定位到 D 版本，这也是一个 “好提交”</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> describe

D

$ <span class="token function">ls</span> doc

D.txt  G.txt  H.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>标记当前版本（D 提交）为 “好提交”</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> bisect good

Bisecting: <span class="token number">1</span> revision left to <span class="token builtin class-name">test</span> after this <span class="token punctuation">(</span>roughly <span class="token number">1</span> step<span class="token punctuation">)</span>
<span class="token punctuation">[</span>776c5c9da9dcbb7e463c061d965ea47e73853b6e<span class="token punctuation">]</span> Commit B: merge D with E and F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>现在定位到 B 版本，存在 <code>doc/B.txt</code> 文件，标记 B 提交为 “坏提交”</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> describe

B

$ <span class="token function">ls</span> doc

B.txt  D.txt  E.txt  F.txt  G.txt  H.txt  I.txt  J.txt

$ <span class="token function">git</span> bisect bad

Bisecting: <span class="token number">0</span> revisions left to <span class="token builtin class-name">test</span> after this <span class="token punctuation">(</span>roughly <span class="token number">0</span> steps<span class="token punctuation">)</span>
<span class="token punctuation">[</span>83be36956c007d7bfffe13805dd2081839fd3603<span class="token punctuation">]</span> commit E.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>现在定位到 E 版本，这是一个 “好提交”。当标记 E为好提交之后，输出显示已经成功定位到引入坏提交的最接近的版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> describe

E

$ <span class="token function">ls</span> doc

E.txt

$ <span class="token function">git</span> bisect good

776c5c9da9dcbb7e463c061d965ea47e73853b6e is the first bad commit
commit 776c5c9da9dcbb7e463c061d965ea47e73853b6e
Merge: 212efce 83be369 beb30ca
Author: Jiang Xin <span class="token operator">&lt;</span>jiangxin@ossxp.com<span class="token operator">&gt;</span>
Date:   Thu Dec <span class="token number">9</span> <span class="token number">14</span>:27:31 <span class="token number">2010</span> +0800

    Commit B: merge D with E and F

    Signed-off-by: Jiang Xin <span class="token operator">&lt;</span>jiangxin@ossxp.com<span class="token operator">&gt;</span>

 README    <span class="token operator">|</span> <span class="token number">5</span> +++++
 doc/B.txt <span class="token operator">|</span> <span class="token number">1</span> +
 doc/E.txt <span class="token operator">|</span> <span class="token number">1</span> +
 doc/F.txt <span class="token operator">|</span> <span class="token number">1</span> +
 doc/I.txt <span class="token operator">|</span> <span class="token number">1</span> +
 doc/J.txt <span class="token operator">|</span> <span class="token number">1</span> +
 <span class="token number">6</span> files changed, <span class="token number">10</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> doc/B.txt
 create mode <span class="token number">100644</span> doc/E.txt
 create mode <span class="token number">100644</span> doc/F.txt
 create mode <span class="token number">100644</span> doc/I.txt
 create mode <span class="token number">100644</span> doc/J.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>最终定位的坏提交用引用 <code>refs/bisect/bad</code> 标识。可以用如下方法切换到该版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout bisect/bad

Previous HEAD position was 83be369 commit E.
HEAD is now at 776c5c9 Commit B: merge D with E and F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>当对 Bug 定位和修复后，撤销二分查找在版本库中遗留的临时文件和引用。撤销二分查找后，版本库切换回执行二分查找之前所在的分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> bisect reset

Previous HEAD position was 776c5c9 Commit B: merge D with E and F
Switched to branch <span class="token string">&#39;master&#39;</span>
Your branch is up to <span class="token function">date</span> with <span class="token string">&#39;origin/master&#39;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="重启二分查找" tabindex="-1"><a class="header-anchor" href="#重启二分查找" aria-hidden="true">#</a> 重启二分查找</h3><p>在将修订标记为好的或坏的之后，发出以下命令来显示到目前为止所做的事情：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> bisect log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果您发现您在指定修订版的状态时犯了错误，您可以把这个命令的输出保存到一个文件中，编辑它以删除不正确的条目，然后发出下面的命令来返回到一个正确的状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> bisect log <span class="token operator">&gt;</span> bisectlog
<span class="token function">git</span> bisect reset
<span class="token function">git</span> bisect replay bisectlog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二分查找自动化测试" tabindex="-1"><a class="header-anchor" href="#二分查找自动化测试" aria-hidden="true">#</a> 二分查找自动化测试</h3><p>Git 的二分查找命令支持 <code>run</code> 子命令，可以运行一个自动化测试脚本，实现自动的二分查找。</p><ul><li>如果脚本的退出码是 <code>0</code>，正在测试的版本是一个好版本</li><li>如果脚本的退出码是 <code>125</code>，正在测试的版本被跳过</li><li>如果脚本的退出码是 <code>1~127</code>（<code>125</code> 除外），正在测试的版本是一个坏版本</li></ul><p>例如：判断文件是否存在，存在则返回退出码 <code>1</code>，不存在则返回退出码 <code>0</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> good-or-bad.sh <span class="token operator">&lt;&lt;</span><span class="token string">EOF
#! /bin/sh

[ -f doc/B.txt ] &amp;&amp; exit 1
exit 0
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用此脚本实现自动化二分查找的过程非常简单，具体操作步骤如下：</p><ol><li><p>从已知的坏版本 master 和好版本 G 开始新一轮的二分查找</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> bisect start master G

Bisecting: <span class="token number">5</span> revisions left to <span class="token builtin class-name">test</span> after this <span class="token punctuation">(</span>roughly <span class="token number">2</span> steps<span class="token punctuation">)</span>
<span class="token punctuation">[</span>0cd7f2ea245d90d414e502467ac749f36aa32cc4<span class="token punctuation">]</span> commit C.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>自动化测试，使用脚本 <code>good-or-bad.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> bisect run <span class="token function">sh</span> good-or-bad.sh

running <span class="token string">&#39;sh&#39;</span> <span class="token string">&#39;good-or-bad.sh&#39;</span>
Bisecting: <span class="token number">3</span> revisions left to <span class="token builtin class-name">test</span> after this <span class="token punctuation">(</span>roughly <span class="token number">2</span> steps<span class="token punctuation">)</span>
<span class="token punctuation">[</span>212efce1548795a1edb08e3708a50989fcd73cce<span class="token punctuation">]</span> Commit D: merge G with H
running <span class="token string">&#39;sh&#39;</span> <span class="token string">&#39;good-or-bad.sh&#39;</span>
Bisecting: <span class="token number">1</span> revision left to <span class="token builtin class-name">test</span> after this <span class="token punctuation">(</span>roughly <span class="token number">1</span> step<span class="token punctuation">)</span>
<span class="token punctuation">[</span>776c5c9da9dcbb7e463c061d965ea47e73853b6e<span class="token punctuation">]</span> Commit B: merge D with E and F
running <span class="token string">&#39;sh&#39;</span> <span class="token string">&#39;good-or-bad.sh&#39;</span>
Bisecting: <span class="token number">0</span> revisions left to <span class="token builtin class-name">test</span> after this <span class="token punctuation">(</span>roughly <span class="token number">0</span> steps<span class="token punctuation">)</span>
<span class="token punctuation">[</span>83be36956c007d7bfffe13805dd2081839fd3603<span class="token punctuation">]</span> commit E.
running <span class="token string">&#39;sh&#39;</span> <span class="token string">&#39;good-or-bad.sh&#39;</span>
776c5c9da9dcbb7e463c061d965ea47e73853b6e is the first bad commit
commit 776c5c9da9dcbb7e463c061d965ea47e73853b6e
Merge: 212efce 83be369 beb30ca
Author: Jiang Xin <span class="token operator">&lt;</span>jiangxin@ossxp.com<span class="token operator">&gt;</span>
Date:   Thu Dec <span class="token number">9</span> <span class="token number">14</span>:27:31 <span class="token number">2010</span> +0800

    Commit B: merge D with E and F

    Signed-off-by: Jiang Xin <span class="token operator">&lt;</span>jiangxin@ossxp.com<span class="token operator">&gt;</span>

 README    <span class="token operator">|</span> <span class="token number">5</span> +++++
 doc/B.txt <span class="token operator">|</span> <span class="token number">1</span> +
 doc/E.txt <span class="token operator">|</span> <span class="token number">1</span> +
 doc/F.txt <span class="token operator">|</span> <span class="token number">1</span> +
 doc/I.txt <span class="token operator">|</span> <span class="token number">1</span> +
 doc/J.txt <span class="token operator">|</span> <span class="token number">1</span> +
 <span class="token number">6</span> files changed, <span class="token number">10</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> doc/B.txt
 create mode <span class="token number">100644</span> doc/E.txt
 create mode <span class="token number">100644</span> doc/F.txt
 create mode <span class="token number">100644</span> doc/I.txt
 create mode <span class="token number">100644</span> doc/J.txt
bisect found first bad commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定位到的 “坏版本” 是 B</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> describe refs/bisect/bad

B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,27),l=[t];function d(c,o){return s(),e("div",null,l)}const u=n(i,[["render",d],["__file","git_bisect.html.vue"]]);export{u as default};
