import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as l,c,b as s,e as n,d as i,f as o}from"./app-PBbMhy-d.js";const p={},d=s("code",null,".gitlab-ci.yml",-1),u={href:"https://docs.gitlab.cn/jh/ci/yaml/index.html",target:"_blank",rel:"noopener noreferrer"},r=o(`<h2 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h2><p>您可以为某些关键字设置全局默认值。例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">default</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> ruby<span class="token punctuation">:</span><span class="token number">3.0</span>

<span class="token key atrule">rspec</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span> bundle exec rspec

<span class="token key atrule">rspec 2.7</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> ruby<span class="token punctuation">:</span><span class="token number">2.7</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span> bundle exec rspec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例将 <code>ruby:3.0</code> 镜像设置为流水线中所有作业的默认镜像。<code>rspec 2.7</code> 作业不使用默认值，因为它使用特定于作业的 <code>image:</code> 部分覆盖了默认值。</p><p><strong>额外细节：</strong></p><ul><li>创建流水线时，每个默认值都会复制到所有未定义该关键字的作业</li><li>如果作业已经配置了其中一个关键字，则作业中的配置优先，不会被默认替换</li><li>使用 <code>inherit:default</code> 控制作业中默认关键字的继承</li></ul><h2 id="stages" tabindex="-1"><a class="header-anchor" href="#stages" aria-hidden="true">#</a> stages</h2><p>使用 <code>stages</code> 来定义包含作业组的阶段，<code>stages</code> 是为流水线全局定义的。在作业中使用 <code>stage</code> 来定义作业属于哪个阶段，一般在 <code>.gitlab-ci.yml</code> 文件的顶部定义。</p><p>如果 <code>.gitlab-ci.yml</code> 文件中没有定义 <code>stages</code>，那么默认的流水线阶段是：</p><ul><li><code>.pre</code></li><li><code>build</code></li><li><code>test</code></li><li><code>deploy</code></li><li><code>.post</code></li></ul><p>如果流水线仅包含 <code>.pre</code> 或 <code>.post</code> 阶段的作业，则它不会运行。在不同的阶段必须至少有一项其他作业。</p><p><code>stages</code> 项的顺序定义了作业的执行顺序：</p><ul><li>同一阶段的作业并行运行</li><li>下一阶段的作业在上一阶段的作业成功完成后运行</li></ul><p>例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>build</code> 中的所有作业并行执行，如果 <code>build</code> 中的所有作业都成功，<code>test</code> 作业将并行执行；如果 <code>test</code> 中的所有作业都成功，<code>deploy</code> 作业将并行执行；如果 <code>deploy</code> 中的所有作业都成功，则流水线被标记为 <code>passed</code>。</p><p>如果任何作业失败，流水线将被标记为 <code>failed</code> 并且后续阶段的作业不会启动，当前阶段的作业不会停止并继续运行。</p><p>如果作业未指定 <code>stage</code>，则作业被分配到 <code>test</code> 阶段。</p><p>如果定义了一个阶段，但没有作业使用它，则该阶段在流水线中不可见。这对合规流水线配置很有用，因为：</p><ul><li>阶段可以在合规性配置中定义，但如果不使用则保持隐藏</li><li>当开发人员在作业定义中使用它们时，定义的阶段变得可见</li></ul><p>要使作业更早开始并忽略阶段顺序，请使用 <code>needs</code> 关键字。</p><h2 id="stage" tabindex="-1"><a class="header-anchor" href="#stage" aria-hidden="true">#</a> stage</h2><p>使用 <code>stage</code> 定义作业在哪个 <code>stage</code> 中运行。同一个 <code>stage</code> 中的作业可以并行执行。</p><p>如果没有定义 <code>stage</code>，则作业默认使用 <code>test</code> 阶段。</p><ul><li><strong>关键字类型</strong>：作业关键字。您只能将其用作作业的一部分</li><li><strong>可能的输入</strong>：字符串 <ul><li>默认阶段</li><li>用户定义的阶段</li></ul></li></ul><p>例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy

<span class="token key atrule">job1</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This job compiles code.&quot;

<span class="token key atrule">job2</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This job tests the compiled code. It runs when the build stage completes.&quot;

<span class="token key atrule">job3</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This job also runs in the test stage&quot;.

<span class="token key atrule">job4</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This job deploys the code. It runs when the test stage completes.&quot;
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>额外细节：</strong></p><ul><li>如果作业在不同的 Runner 上运行，则它们可以并行运行</li><li>如果您只有一个 Runner，如果 Runner 的 <code>concurrent</code> 设置大于 <code>1</code>，作业可以并行运行</li></ul><p>使用 <code>stage: .pre</code> 阶段在流水线开始时运行作业。<code>.pre</code> 始终是流水线的第一阶段。用户定义的阶段在 <code>.pre</code> 之后执行。您不必在 <code>stages</code> 中定义 <code>.pre</code>。</p><p>使用 <code>stage: .post</code> 阶段在流水线末尾时运行作业。<code>.post</code> 始终是流水线的最后阶段。用户定义的阶段在 <code>.post</code> 之前执行。您不必在 <code>stages</code> 中定义 <code>.post</code>。</p><p>如果流水线仅包含 <code>.pre</code> 或 <code>.post</code> 阶段的作业，则它不会运行。在不同的阶段必须至少有一项其他作业。</p><p>关键字类型：您只能将它与作业的 <code>stage</code> 关键字一起使用。例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test

<span class="token key atrule">job1</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This job runs in the build stage.&quot;

<span class="token key atrule">first-job</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> .pre
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This job runs in the .pre stage<span class="token punctuation">,</span> before all other stages.&quot;

<span class="token key atrule">last-job</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> .post
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This job runs in the .post stage<span class="token punctuation">,</span> after all other stages.&quot;

<span class="token key atrule">job2</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This job runs in the test stage.&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>额外细节：</strong></p><ul><li>如果流水线有包含 <code>needs: []</code> 的作业和 <code>.pre</code> 阶段的作业，它们将在流水线创建后立即启动。具有 <code>needs: []</code> 的作业会立即启动，忽略任何阶段配置。</li></ul><h2 id="script" tabindex="-1"><a class="header-anchor" href="#script" aria-hidden="true">#</a> script</h2><p>使用 <code>script</code> 指定 Runner 要执行的命令。</p><p>除了 <code>trigger</code> 之外的所有作业都需要一个 <code>script</code> 关键字。</p><ul><li><strong>关键字类型</strong>：作业关键字。您只能将其用作作业的一部分</li><li><strong>可能的输入</strong>：一个数组，包括： <ul><li>单行命令</li><li>长命令拆分多行，使用 <code>-</code> 开头表示每一行脚本</li><li>YAML 锚点</li></ul></li></ul><p>例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">job1</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span> <span class="token string">&quot;bundle exec rspec&quot;</span>

<span class="token key atrule">job2</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> uname <span class="token punctuation">-</span>a
    <span class="token punctuation">-</span> bundle exec rspec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>额外细节：</strong></p><ul><li>当您使用 <code>script</code> 中的特殊字符时，必须使用单引号（<code>&#39;</code>）或双引号（<code>&quot;</code>）</li></ul><h2 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache</h2><p>使用 <code>cache</code> 指定要在作业之间缓存的文件和目录列表。您只能使用本地工作副本中的路径。</p><p>缓存：</p><ul><li>在流水线和作业之间共享</li><li>默认情况下，不在受保护和未受保护的分支之间共享</li><li>在产物之前恢复</li><li>限制为最多四个不同的缓存</li></ul><p>您可以禁用特定作业的缓存，例如覆盖：</p><ul><li>使用 <code>default</code> 定义的默认缓存</li><li>添加了 <code>include</code> 的作业的配置</li></ul>`,50);function v(k,b){const e=t("ExternalLinkIcon");return l(),c("div",null,[s("p",null,[d,n(" 文件中关键字示例，查看官网 "),s("a",u,[n(".gitlab-ci.yml"),i(e)]),n(" 语法参考。")]),r])}const h=a(p,[["render",v],["__file","yaml_keyword.html.vue"]]);export{h as default};
