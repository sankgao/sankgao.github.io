import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as l,b as s,e as n,d as i,f as o}from"./app-CD979e7B.js";const p={},d=s("code",null,".gitlab-ci.yml",-1),u={href:"https://docs.gitlab.cn/jh/ci/yaml/index.html",target:"_blank",rel:"noopener noreferrer"},r=o(`<h2 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h2><p>您可以为某些关键字设置全局默认值。例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">default</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> ruby<span class="token punctuation">:</span><span class="token number">3.0</span>

<span class="token key atrule">rspec</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span> bundle exec rspec

<span class="token key atrule">rspec 2.7</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> ruby<span class="token punctuation">:</span><span class="token number">2.7</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span> bundle exec rspec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例将 <code>ruby:3.0</code> 镜像设置为流水线中所有作业的默认镜像。<code>rspec 2.7</code> 作业不使用默认值，因为它使用特定于作业的 <code>image:</code> 部分覆盖了默认值。</p><p><strong>额外细节：</strong></p><ul><li>创建流水线时，每个默认值都会复制到所有未定义该关键字的作业</li><li>如果作业已经配置了其中一个关键字，则作业中的配置优先，不会被默认替换</li><li>使用 <code>inherit:default</code> 控制作业中默认关键字的继承</li></ul><h2 id="stages" tabindex="-1"><a class="header-anchor" href="#stages" aria-hidden="true">#</a> stages</h2><p>使用 <code>stages</code> 来定义包含作业组的阶段，<code>stages</code> 是为流水线全局定义的。在作业中使用 <code>stage</code> 来定义作业属于哪个阶段，一般在 <code>.gitlab-ci.yml</code> 文件的顶部定义。</p><p>如果 <code>.gitlab-ci.yml</code> 文件中没有定义 <code>stages</code>，那么默认的流水线阶段是：</p><ul><li><code>.pre</code></li><li><code>build</code></li><li><code>test</code></li><li><code>deploy</code></li><li><code>.post</code></li></ul><p>如果流水线仅包含 <code>.pre</code> 或 <code>.post</code> 阶段的作业，则它不会运行。在不同的阶段必须至少有一项其他作业。</p><p><code>stages</code> 项的顺序定义了作业的执行顺序：</p><ul><li>同一阶段的作业并行运行</li><li>下一阶段的作业在上一阶段的作业成功完成后运行</li></ul><p>例如：也可以自定义 <code>stages</code> 值。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> check
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>build</code> 中的所有作业并行执行，如果 <code>build</code> 中的所有作业都成功，<code>test</code> 作业将并行执行；如果 <code>test</code> 中的所有作业都成功，<code>deploy</code> 作业将并行执行；如果 <code>deploy</code> 中的所有作业都成功，则流水线被标记为 <code>passed</code>。</p><p>如果任何作业失败，流水线将被标记为 <code>failed</code> 并且后续阶段的作业不会启动，当前阶段的作业不会停止并继续运行。</p><p>如果作业未指定 <code>stage</code>，则作业被分配到 <code>test</code> 阶段。</p><p>如果定义了一个阶段，但没有作业使用它，则该阶段在流水线中不可见。这对合规流水线配置很有用，因为：</p><ul><li>阶段可以在合规性配置中定义，但如果不使用则保持隐藏</li><li>当开发人员在作业定义中使用它们时，定义的阶段变得可见</li></ul><p>要使作业更早开始并忽略阶段顺序，请使用 <code>needs</code> 关键字。</p><h2 id="stage" tabindex="-1"><a class="header-anchor" href="#stage" aria-hidden="true">#</a> stage</h2><p>使用 <code>stage</code> 定义作业在哪个 <code>stage</code> 中运行。同一个 <code>stage</code> 中的作业可以并行执行。</p><p>如果没有定义 <code>stage</code>，则作业默认使用 <code>test</code> 阶段。</p><ul><li><strong>关键字类型</strong>：作业关键字。您只能将其用作作业的一部分</li><li><strong>可能的输入</strong>：字符串 <ul><li>默认阶段</li><li>用户定义的阶段</li></ul></li></ul><p>例如：依次执行 <code>build</code>、<code>test</code> 和 <code>deploy</code> 阶段，<code>job2</code> 和 <code>job3</code> 会在 <code>test</code> 阶段中并行执行。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>额外细节：</strong></p><ul><li>如果作业在不同的 Runner 上运行，则它们可以并行运行</li><li>如果您只有一个 Runner，如果 Runner 的 <code>concurrent</code> 设置大于 <code>1</code>，作业可以并行运行</li></ul><p>使用 <code>stage: .pre</code> 阶段在流水线开始时运行作业。<code>.pre</code> 始终是流水线的第一阶段。用户定义的阶段在 <code>.pre</code> 之后执行。您不必在 <code>stages</code> 中定义 <code>.pre</code>。</p><p>使用 <code>stage: .post</code> 阶段在流水线末尾时运行作业。<code>.post</code> 始终是流水线的最后阶段。用户定义的阶段在 <code>.post</code> 之前执行。您不必在 <code>stages</code> 中定义 <code>.post</code>。</p><p>如果流水线仅包含 <code>.pre</code> 或 <code>.post</code> 阶段的作业，则它不会运行。在不同的阶段必须至少有一项其他作业。</p><p><strong>关键字类型</strong>：您只能将它与作业的 <code>stage</code> 关键字一起使用</p><p>例如：分别在流水线开始和末尾时运行作业。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
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
  <span class="token key atrule">script</span><span class="token punctuation">:</span> echo &quot;job1&quot;

<span class="token key atrule">job2</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> uname <span class="token punctuation">-</span>a
    <span class="token punctuation">-</span> echo &quot;job2&quot;

<span class="token key atrule">job3</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This command executes after the job&#39;s &#39;before_script&#39; commands.&quot;
    <span class="token punctuation">-</span> echo &quot;An example script section.&quot;
  <span class="token key atrule">after_script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;Execute this command after the script section completes.&quot;
  <span class="token key atrule">before_script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;Execute this command before any &#39;script<span class="token punctuation">:</span>&#39; commands.&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>额外细节：</strong></p><ul><li>当您使用 <code>script</code> 中的特殊字符时，必须使用单引号（<code>&#39;</code>）或双引号（<code>&quot;</code>）</li><li>您在 <code>before_script</code> 中指定的脚本与您在主 <code>script</code> 中指定的任何脚本连接在一起。组合脚本在单个 <code>shell</code> 中一起执行</li><li>不推荐在 <a href="#default">default</a> 中使用 <code>before_script</code> 和 <code>after_script</code></li><li>您在 <code>after_script</code> 中指定的脚本在一个新的 <code>shell</code> 中执行，与任何 <code>before_script</code> 或 <code>script</code> 命令分开。结果： <ul><li>将当前工作目录设置回默认值（根据定义运行程序如何处理 Git 请求的变量）</li><li>无权访问由 <code>before_script</code> 或 <code>script</code> 中定义的命令完成的更改，包括 <ul><li>在 <code>script</code> 脚本中导出的命令别名和变量</li><li>作业树之外的更改（取决于 runner），例如：由 <code>before_script</code> 或 <code>script</code> 脚本安装的软件</li></ul></li><li>有一个单独的超时，它被硬编码为 <code>5</code> 分钟</li><li>不要影响作业的退出代码。如果 <code>script</code> 部分成功并且 <code>after_script</code> 超时或失败，作业将退出，代码为 0（Job Succeeded）</li></ul></li></ul><p>如果作业超时或被取消，则不会执行 <code>after_script</code> 命令。存在一个问题，即为超时或取消的作业添加对执行 <code>after_script</code> 命令的支持。</p><h2 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache</h2><p>使用 <code>cache</code> 指定要在作业之间缓存的文件和目录列表，您只能使用本地工作副本中的路径。</p><p>流水线中的每个作业都是独立运行的，如果没有缓存，运行上一个作业时安装的项目依赖包，运行下一个作业还需要安装一次。如果将上一个作业安装的依赖包缓存起来，在下一个作业运行时将其恢复到工作目录中，就可以大大减少资源的浪费。缓存用的最多的场景就是缓存项目的依赖包。</p><p>缓存：</p><ul><li>在流水线和作业之间共享</li><li>默认情况下，不在受保护和未受保护的分支之间共享</li><li>在产物之前恢复</li><li>限制为最多四个不同的缓存</li></ul><p>您可以禁用特定作业的缓存，例如覆盖：</p><ul><li>使用 <code>default</code> 定义的默认缓存</li><li>添加了 <code>include</code> 的作业的配置</li></ul><h3 id="cache-key" tabindex="-1"><a class="header-anchor" href="#cache-key" aria-hidden="true">#</a> cache:key</h3><p>使用 <code>cache:key</code> 关键字为每个缓存提供唯一的标识键。使用相同缓存键的所有作业都使用相同的缓存，包括在不同的流水线中。</p><p>如果未设置，则默认键为 <code>default</code>。所有带有 <code>cache</code> 关键字但没有 <code>cache:key</code> 的作业共享 <code>default</code> 缓存。</p><p>必须与 <a href="#cachepaths">cache:paths</a> 一起使用，否则不会缓存任何内容。</p><ul><li><strong>关键字类型</strong>：作业关键字。您只能将其用作作业的一部分或在 <a href="#default">default</a> 部分中使用</li><li><strong>可能的输入：</strong><ul><li>一个字符串</li><li>预定义变量</li><li>两者的结合</li></ul></li></ul><p>例如：项目有多个分支，想要设置多个缓存。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cache-job</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This job uses a cache.&quot;
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">key</span><span class="token punctuation">:</span> binaries<span class="token punctuation">-</span>cache<span class="token punctuation">-</span>$CI_COMMIT_REF_SLUG
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> binaries/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>额外细节：</strong></p><ul><li>如果您使用 <code>Windows Batch</code> 运行您的 <code>shell</code> 脚本，您需要用 <code>%</code> 替换 <code>$</code>。例如：<code>key：%CI_COMMIT_REF_SLUG%</code></li><li><code>cache:key</code> 值不能包含： <ul><li><code>/</code> 字符，或等效的 URI 编码的 <code>%2F</code></li><li>只有 <code>.</code> 字符（任何数字），或等效的 URI 编码的 <code>%2E</code></li></ul></li><li>缓存在作业之间共享，因此如果您为不同的作业使用不同的路径，您还应该设置不同的 <code>cache:key</code>，否则缓存内容可能会被覆盖</li></ul><h3 id="cache-paths" tabindex="-1"><a class="header-anchor" href="#cache-paths" aria-hidden="true">#</a> cache:paths</h3><p>缓存 <code>binaries</code> 中以 <code>.apk</code> 和当前目录中以 <code>.config</code> 结尾的所有文件：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">rspec</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This job uses a cache.&quot;
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">key</span><span class="token punctuation">:</span> binaries<span class="token punctuation">-</span>cache
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> binaries/<span class="token important">*.apk</span>
      <span class="token punctuation">-</span> .config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>额外细节：</strong></p><ul><li><code>cache:paths</code> 关键字包括文件，即使它们未被跟踪或在您的 <code>.gitignore</code> 文件中。</li></ul><h3 id="cachefile" tabindex="-1"><a class="header-anchor" href="#cachefile" aria-hidden="true">#</a> cache🔑file</h3><p>使用 <code>cache:key:files</code> 关键字在一两个特定文件更改时生成新密钥。<code>cache:key:files</code> 可让您重用一些缓存，并减少重建它们的频率，从而加快后续流水线运行的速度。</p><ul><li><strong>关键字类型</strong>：作业关键字。您只能将其用作作业的一部分或在 <a href="#default">default</a> 部分中使用</li><li><strong>可能的输入</strong>：一个或两个文件路径的数组</li></ul><p>例如：缓存绑定到当前版本的 <code>Gemfile.lock</code> 和 <code>package.json</code> 文件。当这些文件之一发生变化时，将计算一个新的缓存键并创建一个新的缓存。任何使用相同的 <code>Gemfile.lock</code> 和 <code>package.json</code> 以及 <code>cache:key:files</code> 的未来作业都会使用新的缓存，而不是重建依赖项。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cache-job</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This job uses a cache.&quot;
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">key</span><span class="token punctuation">:</span>
      <span class="token key atrule">files</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> Gemfile.lock
        <span class="token punctuation">-</span> package.json
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> vendor/ruby
      <span class="token punctuation">-</span> node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>额外信息</strong>：缓存 key 是根据最近更改了每个列出的文件的提交计算得出的 SHA。如果在任何提交中都没有更改任何文件，则回退键是 <code>default</code>。</p><h2 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h2><p>使用 <code>image</code> 指定运行作业的 Docker 镜像。对特定的 Runner 执行器有用（如：docker 执行器），对其它 Runner 执行器无效（如：shell 执行器）。</p><ul><li><strong>关键字类型</strong>：作业关键字。您只能将其用作作业的一部分或在 <a href="#default">default</a> 部分中使用</li><li><strong>可能的输入</strong>：镜像的名称，包括镜像库路径（如果需要），采用以下格式之一： <ul><li><code>&lt;image-name&gt;</code>（与使用带有 <code>latest</code> 标签的 <code>&lt;image-name&gt;</code> 相同）</li><li><code>&lt;image-name&gt;:&lt;tag&gt;</code></li><li><code>&lt;image-name&gt;@&lt;digest&gt;</code></li></ul></li></ul><p>例如：流水线中所有作业默认使用 <code>ruby:3.0</code> 镜像。<code>rspec 2.7</code> 作业不使用默认值，因为它使用特定于作业的 <code>image</code> 部分覆盖了默认值。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">default</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> ruby<span class="token punctuation">:</span><span class="token number">3.0</span>

<span class="token key atrule">rspec</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span> bundle exec rspec

<span class="token key atrule">rspec 2.7</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.example.com/my<span class="token punctuation">-</span>group/my<span class="token punctuation">-</span>project/ruby<span class="token punctuation">:</span><span class="token number">2.7</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span> bundle exec rspec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="image-name" tabindex="-1"><a class="header-anchor" href="#image-name" aria-hidden="true">#</a> image:name</h3><p>作业运行所在的 Docker 镜像的名称。与自身使用的 <code>image</code> 类似。</p><ul><li><strong>关键字类型</strong>：作业关键字。您只能将其用作作业的一部分或在 <a href="#default">default</a> 部分中使用</li><li><strong>可能的输入</strong>：镜像的名称，包括镜像库路径（如果需要），采用以下格式之一 <ul><li><code>&lt;image-name&gt;</code>（与使用带有 <code>latest</code> 标签的 <code>&lt;image-name&gt;</code> 相同）</li><li><code>&lt;image-name&gt;:&lt;tag&gt;</code></li><li><code>&lt;image-name&gt;@&lt;digest&gt;</code></li></ul></li></ul><p>例如：使用 <code>registry.example.com/my/image:latest</code> 镜像。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">image</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;registry.example.com/my/image:latest&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="image-pull-policy" tabindex="-1"><a class="header-anchor" href="#image-pull-policy" aria-hidden="true">#</a> image:pull_policy</h3><p>引入于 15.1 版本，功能标志为 <code>ci_docker_image_pull_policy</code>，默认禁用。Runner 用于获取 Docker 镜像的拉取策略。</p><ul><li><strong>关键字类型</strong>：作业关键字。您只能将其用作作业的一部分或在 <a href="#default">default</a> 部分中使用</li><li><strong>可能的输入</strong>：单个拉取策略或数组中的多个拉取策略。可以是 <code>always</code>、<code>if-not-present</code> 或 <code>never</code><ul><li><strong>always</strong>：即使本地镜像存在也拉取镜像。默认</li><li><strong>if-not-present</strong>：仅在本地版本不存在时拉取镜像</li><li><strong>never</strong>：从不拉取镜像，只使用本地镜像</li></ul></li></ul><p>例如：<code>job1</code> 作业使用 <code>if-not-present</code> 拉取策略；<code>job2</code> 作业先使用 <code>always</code> 作为第一拉取策略，如果 <code>always</code> 拉取策略失败，再使用 <code>if-not-present</code> 第二拉取策略。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">job1</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span> echo &quot;A single pull policy.&quot;
  <span class="token key atrule">image</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> ruby<span class="token punctuation">:</span><span class="token number">3.0</span>
    <span class="token key atrule">pull_policy</span><span class="token punctuation">:</span> if<span class="token punctuation">-</span>not<span class="token punctuation">-</span>present

<span class="token key atrule">job2</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span> echo &quot;Multiple pull policies.&quot;
  <span class="token key atrule">image</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> ruby<span class="token punctuation">:</span><span class="token number">3.0</span>
    <span class="token key atrule">pull_policy</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>always<span class="token punctuation">,</span> if<span class="token punctuation">-</span>not<span class="token punctuation">-</span>present<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>额外细节：</strong></p><ul><li>如果 Runner 不支持定义的拉取策略，则作业将失败并出现类似此错误：<code>ERROR: Job failed (system failure): the configured PullPolicies ([always]) are not allowed by AllowedPullPolicies ([never])</code></li></ul><h3 id="image-entrypoint" tabindex="-1"><a class="header-anchor" href="#image-entrypoint" aria-hidden="true">#</a> image:entrypoint</h3><p>作为容器入口点执行的命令或脚本。</p><p>创建 Docker 容器时，<code>entrypoint</code> 被转换为 Docker 的 <code>--entrypoint</code> 选项。语法类似于 Dockerfile <code>ENTRYPOINT</code> 指令，其中每个 <code>shell</code> 令牌都是数组中的一个单独字符串。</p><ul><li><strong>关键字类型</strong>：作业关键字。您只能将其用作作业的一部分或在 <a href="#default">default</a> 部分中使用</li><li><strong>可能的输入</strong>：一个字符串</li></ul><p>例如：容器启动时运行 <code>/bin/bash</code> 命令。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">image</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> super/sql<span class="token punctuation">:</span>experimental
  <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/bash&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="services" tabindex="-1"><a class="header-anchor" href="#services" aria-hidden="true">#</a> services</h3><p>使用 <code>services</code> 指定您的脚步成功运行所需的任何其他 Docker 镜像。<code>services</code> 镜像链接到 <code>image</code> 关键字中指定的镜像。</p><ul><li><strong>关键字类型</strong>：作业关键字。您只能将其用作作业的一部分或在 <a href="#default">default</a> 部分中使用</li><li><strong>可能的输入</strong>：服务镜像的名称，包括镜像库路径（如果需要），采用以下格式之一 <ul><li><code>&lt;image-name&gt;</code>（与使用带有 <code>latest</code> 标签的 <code>&lt;image-name&gt;</code> 相同）</li><li><code>&lt;image-name&gt;:&lt;tag&gt;</code></li><li><code>&lt;image-name&gt;@&lt;digest&gt;</code></li></ul></li></ul><p>例如：作业启动一个 Ruby 容器。然后，该作业从该容器启动另一个运行 PostgreSQL 的容器。然后该作业在该容器中运行脚本。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">default</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> ruby<span class="token punctuation">:</span><span class="token number">2.6</span>
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/bash&quot;</span><span class="token punctuation">]</span>

  <span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>postgres<span class="token punctuation">:</span><span class="token number">11.7</span>
      <span class="token key atrule">alias</span><span class="token punctuation">:</span> db<span class="token punctuation">-</span>postgres
      <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/usr/local/bin/db-postgres&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">]</span>

  <span class="token key atrule">before_script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> bundle install

<span class="token key atrule">test</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> bundle exec rake spec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此示例中，极狐GitLab 为作业启动了两个容器：</p><ul><li>运行 <code>script</code> 命令的 Ruby 容器</li><li>一个 PostgreSQL 容器。Ruby 容器中的 <code>script</code> 命令可以连接到位于 <code>db-postgres</code> 主机名的 PostgreSQL 数据库</li></ul><h2 id="tags" tabindex="-1"><a class="header-anchor" href="#tags" aria-hidden="true">#</a> tags</h2><p>使用 <code>tags</code> 从项目可用的所有 Runner 列表中选择一个特定的 Runner。开发者可以为一条流水线指定一个 Runner，也可以针对某一个作业指定一个 Runner。</p><p>注册 Runner 时，您可以指定 Runner 的标签，例如：<code>ruby</code>、<code>postgres</code> 或 <code>development</code>。</p><ul><li><strong>关键字类型</strong>：作业关键字。您只能将其用作作业的一部分或在 <a href="#default">default</a> 部分中使用</li><li><strong>可能的输入：</strong><ul><li>标签名称数组</li><li>14.1 及更高版本中的 CI/CD 变量</li></ul></li></ul><p>例如：只有同时具有 <code>ruby</code> 和 <code>postgres</code> 标签的 Runner 才能运行该作业。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">job</span><span class="token punctuation">:</span>
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ruby
    <span class="token punctuation">-</span> postgres
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>额外细节：</strong></p><ul><li>在 14.3 及更高版本中，标签数量必须小于 <code>50</code></li><li>如果指定的 <code>tags</code> 找到多个 Runner，作业会在多个 Runner 之间进行调度。建议使用同一个 Runner 执行整条流水线</li><li>如果没有指定 <code>tags</code>，在执行时系统会去寻找那些可用、公共的 Runner 执行</li></ul><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> variables</h2><p>使用 <code>variables</code> 为作业定义自定义变量。变量在 <code>script</code>、<code>before_script</code> 和 <code>after_script</code> 命令中可用。您还可以在某些作业关键字中使用变量作为输入。</p><ul><li><strong>关键字类型</strong>：全局和工作关键字</li><li><strong>可能的输入</strong>：变量名和值对 <ul><li>名称只能使用数字、字母和下划线（<code>_</code>）</li><li>值必须是字符串</li></ul></li></ul><p>例如：分别在全局和作业中定义变量。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">variables</span><span class="token punctuation">:</span>
  <span class="token key atrule">DEPLOY_SITE</span><span class="token punctuation">:</span> <span class="token string">&quot;https://example.com/&quot;</span>

<span class="token key atrule">deploy_job</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> deploy<span class="token punctuation">-</span>script <span class="token punctuation">-</span><span class="token punctuation">-</span>url $DEPLOY_SITE <span class="token punctuation">-</span><span class="token punctuation">-</span>path &quot;/&quot;
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> production

<span class="token key atrule">deploy_review_job</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">variables</span><span class="token punctuation">:</span>
    <span class="token key atrule">REVIEW_PATH</span><span class="token punctuation">:</span> <span class="token string">&quot;/review&quot;</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> deploy<span class="token punctuation">-</span>review<span class="token punctuation">-</span>script <span class="token punctuation">-</span><span class="token punctuation">-</span>url $DEPLOY_SITE <span class="token punctuation">-</span><span class="token punctuation">-</span>path $<span class="token punctuation">{</span>REVIEW_PATH<span class="token punctuation">}</span>
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>额外细节：</strong></p><ul><li>所有 YAML 定义的变量也设置为任何链接的 Docker 服务容器</li><li>YAML 定义的变量用于非敏感项目配置。将敏感信息存储在受保护变量或 CI/CD secrets 中</li><li>手动流水线变量和计划流水线变量默认情况下不传递给下游流水线。使用 <code>trigger:forward</code> 将这些变量转发到下游流水线</li><li>变量名在使用时，既可以使用 <code>$VariableName</code> 形式，也可以使用 <code>\${VariableName}</code> 形式</li><li>变量在全局中定义，则所有作业都可以使用；变量在作业中定义，则只能在当前作业中使用</li><li>如果作业中定义了全局中的变量，则作业级别变量优先</li></ul>`,119);function k(v,m){const e=t("ExternalLinkIcon");return c(),l("div",null,[s("p",null,[d,n(" 文件中关键字示例，查看官网 "),s("a",u,[n(".gitlab-ci.yml"),i(e)]),n(" 语法参考。")]),r])}const y=a(p,[["render",k],["__file","yaml_keyword.html.vue"]]);export{y as default};
