import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,f as a}from"./app-RoVHjHDk.js";const d={},i=a(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>git add &lt;pathspec&gt;</code> 用于将工作目录中的更改（包括新文件、已修改的文件或已删除的文件）添加到暂存区（也称为索引或缓存区），以便在后续的提交操作中包含这些更改。</p><p><code>&lt;pathspec&gt;</code> 可以是文件，也可以是目录。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>-A, --all</code></td><td style="text-align:left;">添加所有更改的文件（包括新文件、已修改的文件和已删除的文件）</td></tr><tr><td style="text-align:center;"><code>-u, --update</code></td><td style="text-align:left;">添加已更改的文件（包括已修改的文件和已删除的文件），不包括新文件</td></tr><tr><td style="text-align:center;"><code>-f, --force</code></td><td style="text-align:left;">强制添加忽略的文件，即使文件被 <code>.gitignore</code> 文件忽略，也可以使用此选项将其添加到暂存区</td></tr><tr><td style="text-align:center;"><code>-i, --interactive</code></td><td style="text-align:left;">以交互方式将工作树中的修改内容添加到索引</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="添加单个文件" tabindex="-1"><a class="header-anchor" href="#添加单个文件" aria-hidden="true">#</a> 添加单个文件</h3><p>例如：添加 <code>test</code> 文件到暂存区。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> ./test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加多个文件" tabindex="-1"><a class="header-anchor" href="#添加多个文件" aria-hidden="true">#</a> 添加多个文件</h3><p>例如：添加 <code>test</code> 和 <code>hello.sh</code> 文件到暂存区。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> ./test ./hello.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加所有文件" tabindex="-1"><a class="header-anchor" href="#添加所有文件" aria-hidden="true">#</a> 添加所有文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token comment"># 或</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><code>git add .</code> 后有一个 <strong>点</strong>（<code>.</code>）不要忘记</li><li><code>git add .</code> 和 <code>git add -A</code> 在 git 2.x 版本中没有区别；在 git 1.x 版本中使用 <code>git add .</code> 命令不包括已删除的文件</li><li><code>git add .</code> 只能添加当前目录及子目录下所有更改的文件；<code>git add -A</code> 添加 git 仓库中所有目录更改的文件</li></ul></div><h3 id="交互式添加文件" tabindex="-1"><a class="header-anchor" href="#交互式添加文件" aria-hidden="true">#</a> 交互式添加文件</h3><p>例如：以交互式添加指定文件。</p><p>执行 <code>git add -i</code> 命令，进入一个交互式界面，首先显示的是工作区状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-i</span>

*** Commands ***
  <span class="token number">1</span>: status       <span class="token number">2</span>: update       <span class="token number">3</span>: revert       <span class="token number">4</span>: <span class="token function">add</span> untracked
  <span class="token number">5</span>: patch        <span class="token number">6</span>: <span class="token function">diff</span>         <span class="token number">7</span>: quit         <span class="token number">8</span>: <span class="token builtin class-name">help</span>
What now<span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>交互式界面显示了命令列表，可以使用数字或加亮显示的命令首字母，选择相应的功能。对于此例需要将新文件加入到版本库中，所以选择 <code>4</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>What now<span class="token operator">&gt;</span> <span class="token number">4</span>
           staged     unstaged path
  <span class="token number">1</span>: src/Makefile
  <span class="token number">2</span>: src/hello
  <span class="token number">3</span>: src/main.c
  <span class="token number">4</span>: src/main.o
  <span class="token number">5</span>: src/version.h
  <span class="token number">6</span>: src/version.h.in
Add untracked<span class="token operator">&gt;&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当选择了 <code>4</code> 之后，就进入了 <code>Add untracked</code> 的界面，显示了本地新增（尚不在版本库中）的文件列表，而且提示符也变了，由 <code>What now&gt;</code> 变为 <code>Add untracked&gt;&gt;</code>。依次输入 <code>1</code>、<code>3</code>、<code>6</code> 将源代码添加到版本库中。输入 <code>1</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Add untracked<span class="token operator">&gt;&gt;</span> <span class="token number">1</span>
           staged     unstaged path
* <span class="token number">1</span>: src/Makefile
  <span class="token number">2</span>: src/hello
  <span class="token number">3</span>: src/main.c
  <span class="token number">4</span>: src/main.o
  <span class="token number">5</span>: src/version.h
  <span class="token number">6</span>: src/version.h.in
Add untracked<span class="token operator">&gt;&gt;</span> <span class="token number">3</span>
           staged     unstaged path
* <span class="token number">1</span>: src/Makefile
  <span class="token number">2</span>: src/hello
* <span class="token number">3</span>: src/main.c
  <span class="token number">4</span>: src/main.o
  <span class="token number">5</span>: src/version.h
  <span class="token number">6</span>: src/version.h.in
Add untracked<span class="token operator">&gt;&gt;</span> <span class="token number">6</span>
           staged     unstaged path
* <span class="token number">1</span>: src/Makefile
  <span class="token number">2</span>: src/hello
* <span class="token number">3</span>: src/main.c
  <span class="token number">4</span>: src/main.o
  <span class="token number">5</span>: src/version.h
* <span class="token number">6</span>: src/version.h.in
Add untracked<span class="token operator">&gt;&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每次输入文件序号，对应的文件前面都添加一个 <strong>星号</strong>，代表将此文件添加到暂存区。在提示符 <code>Add untracked&gt;&gt;</code> 处按回车键，完成文件添加，返回主界面：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Add untracked<span class="token operator">&gt;&gt;</span>
added <span class="token number">3</span> paths

*** Commands ***
  <span class="token number">1</span>: status       <span class="token number">2</span>: update       <span class="token number">3</span>: revert       <span class="token number">4</span>: <span class="token function">add</span> untracked
  <span class="token number">5</span>: patch        <span class="token number">6</span>: <span class="token function">diff</span>         <span class="token number">7</span>: quit         <span class="token number">8</span>: <span class="token builtin class-name">help</span>
What now<span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时输入 <code>1</code> 查看状态，可以看到三个文件添加到暂存区中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>What now<span class="token operator">&gt;</span> <span class="token number">1</span>
           staged     unstaged path
  <span class="token number">1</span>:       +27/-0      nothing src/Makefile
  <span class="token number">2</span>:       +12/-0      nothing src/main.c
  <span class="token number">3</span>:        +7/-0      nothing src/version.h.in

*** Commands ***
  <span class="token number">1</span>: status       <span class="token number">2</span>: update       <span class="token number">3</span>: revert       <span class="token number">4</span>: <span class="token function">add</span> untracked
  <span class="token number">5</span>: patch        <span class="token number">6</span>: <span class="token function">diff</span>         <span class="token number">7</span>: quit         <span class="token number">8</span>: <span class="token builtin class-name">help</span>
What now<span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入 <code>7</code> 退出交互界面：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>What now<span class="token operator">&gt;</span> <span class="token number">7</span>
Bye.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看文件状态，可以发现三个文件被添加到暂存区中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status <span class="token parameter variable">-s</span>

A  Makefile
A  main.c
A  version.h.in
?? hello
?? main.o
?? version.h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),t=[i];function l(c,r){return s(),e("div",null,t)}const u=n(d,[["render",l],["__file","git_add.html.vue"]]);export{u as default};
