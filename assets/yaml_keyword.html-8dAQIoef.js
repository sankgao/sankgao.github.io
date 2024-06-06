import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as t,c as l,b as s,e,d as i,f as o}from"./app-aVABroIW.js";const p={},d=s("code",null,".gitlab-ci.yml",-1),u={href:"https://docs.gitlab.cn/jh/ci/yaml/index.html",target:"_blank",rel:"noopener noreferrer"},r=o(`<h2 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h2><p>您可以为某些关键字设置全局默认值。例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">default</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>额外细节：</strong></p><ul><li>如果流水线有包含 <code>needs: []</code> 的作业和 <code>.pre</code> 阶段的作业，它们将在流水线创建后立即启动。具有 <code>needs: []</code> 的作业会立即启动，忽略任何阶段配置。</li></ul><h2 id="script" tabindex="-1"><a class="header-anchor" href="#script" aria-hidden="true">#</a> script</h2><p>使用 <code>script</code> 指定 Runner 要执行的命令。除了 <code>trigger</code> 之外的所有作业都需要一个 <code>script</code> 关键字。</p><p>使用 <code>before_script</code> 定义在每个作业的 <code>script</code> 命令之前运行，但在 <code>artifacts</code> 恢复之后。</p><p>使用 <code>after_script</code> 定义在每个作业之后运行的命令，包括失败的作业。</p><ul><li><strong>关键字类型</strong>：作业关键字。您只能将其用作作业的一部分</li><li><strong>可能的输入</strong>：一个数组，包括： <ul><li>单行命令</li><li>长命令拆分多行，使用 <code>-</code> 开头表示每一行脚本</li><li>YAML 锚点</li></ul></li></ul><p>例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">job1</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span> <span class="token string">&quot;bundle exec rspec&quot;</span>

<span class="token key atrule">job2</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> uname <span class="token punctuation">-</span>a
    <span class="token punctuation">-</span> bundle exec rspec

<span class="token key atrule">job3</span><span class="token punctuation">:</span>
  <span class="token key atrule">before_script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;Execute this command before any &#39;script<span class="token punctuation">:</span>&#39; commands.&quot;
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This command executes after the job&#39;s &#39;before_script&#39; commands.&quot;
    <span class="token punctuation">-</span> echo &quot;An example script section.&quot;
  <span class="token key atrule">after_script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;Execute this command after the \`script\` section completes.&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>额外细节：</strong></p><ul><li>当您使用 <code>script</code> 中的特殊字符时，必须使用单引号（<code>&#39;</code>）或双引号（<code>&quot;</code>）</li><li>您在 <code>before_script</code> 中指定的脚本与您在主 <code>script</code> 中指定的任何脚本连接在一起。组合脚本在单个 <code>shell</code> 中一起执行</li><li>不推荐在 <a href="#default">default</a> 中使用 <code>before_script</code> 和 <code>after_script</code></li><li>您在 <code>after_script</code> 中指定的脚本在一个新的 <code>shell</code> 中执行，与任何 <code>before_script</code> 或 <code>script</code> 命令分开。结果： <ul><li>将当前工作目录设置回默认值（根据定义运行程序如何处理 Git 请求的变量）</li><li>无权访问由 <code>before_script</code> 或 <code>script</code> 中定义的命令完成的更改，包括 <ul><li>在 <code>script</code> 脚本中导出的命令别名和变量</li><li>作业树之外的更改（取决于 runner），例如：由 <code>before_script</code> 或 <code>script</code> 脚本安装的软件</li></ul></li><li>有一个单独的超时，它被硬编码为 <code>5</code> 分钟</li><li>不要影响作业的退出代码。如果 <code>script</code> 部分成功并且 <code>after_script</code> 超时或失败，作业将退出，代码为 0（Job Succeeded）</li></ul></li></ul><p>如果作业超时或被取消，则不会执行 <code>after_script</code> 命令。存在一个问题，即为超时或取消的作业添加对执行 <code>after_script</code> 命令的支持。</p><h2 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache</h2><p>使用 <code>cache</code> 指定要在作业之间缓存的文件和目录列表。您只能使用本地工作副本中的路径。</p><p>缓存：</p><ul><li>在流水线和作业之间共享</li><li>默认情况下，不在受保护和未受保护的分支之间共享</li><li>在产物之前恢复</li><li>限制为最多四个不同的缓存</li></ul><p>您可以禁用特定作业的缓存，例如覆盖：</p><ul><li>使用 <code>default</code> 定义的默认缓存</li><li>添加了 <code>include</code> 的作业的配置</li></ul><h3 id="cache-key" tabindex="-1"><a class="header-anchor" href="#cache-key" aria-hidden="true">#</a> cache:key</h3><p>使用 <code>cache:key</code> 关键字为每个缓存提供唯一的标识键。使用相同缓存键的所有作业都使用相同的缓存，包括在不同的流水线中。</p><p>如果未设置，则默认键为 <code>default</code>。所有带有 <code>cache</code> 关键字但没有 <code>cache:key</code> 的作业共享 <code>default</code> 缓存。</p><p>必须与 <a href="#cachepaths">cache:paths</a> 一起使用，否则不会缓存任何内容。</p><ul><li><strong>关键字类型</strong>：作业关键字。您只能将其用作作业的一部分或在 <a href="#default">default</a> 部分中使用</li><li><strong>可能的输入：</strong><ul><li>一个字符串</li><li>预定义变量</li><li>两者的结合</li></ul></li></ul><p>例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cache-job</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This job uses a cache.&quot;
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">key</span><span class="token punctuation">:</span> binaries<span class="token punctuation">-</span>cache<span class="token punctuation">-</span>$CI_COMMIT_REF_SLUG
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> binaries/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>额外细节：</strong></p><ul><li>如果你使用 <code>Windows Batch</code> 运行你的 <code>shell</code> 脚本，你需要用 <code>%</code> 替换 <code>$</code>。例如：<code>key：%CI_COMMIT_REF_SLUG%</code></li><li><code>cache:key</code> 值不能包含： <ul><li><code>/</code> 字符，或等效的 URI 编码的 <code>%2F</code></li><li>只有 <code>.</code> 字符（任何数字），或等效的 URI 编码的 <code>%2E</code></li></ul></li><li>缓存在作业之间共享，因此如果您为不同的作业使用不同的路径，您还应该设置不同的 <code>cache:key</code>，否则缓存内容可能会被覆盖</li></ul><h3 id="cache-paths" tabindex="-1"><a class="header-anchor" href="#cache-paths" aria-hidden="true">#</a> cache:paths</h3><p>缓存 <code>binaries</code> 中以 <code>.apk</code> 和 <code>.config</code> 文件结尾的所有文件：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">rspec</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This job uses a cache.&quot;
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">key</span><span class="token punctuation">:</span> binaries<span class="token punctuation">-</span>cache
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> binaries/<span class="token important">*.apk</span>
      <span class="token punctuation">-</span> .config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>额外细节：</strong></p><ul><li><code>cache:paths</code> 关键字包括文件，即使它们未被跟踪或在您的 <code>.gitignore</code> 文件中。</li></ul>`,66);function k(v,b){const n=c("ExternalLinkIcon");return t(),l("div",null,[s("p",null,[d,e(" 文件中关键字示例，查看官网 "),s("a",u,[e(".gitlab-ci.yml"),i(n)]),e(" 语法参考。")]),r])}const g=a(p,[["render",k],["__file","yaml_keyword.html.vue"]]);export{g as default};
