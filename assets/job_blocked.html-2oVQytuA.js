import{_ as n}from"./share_runner-2aL-vIxq.js";import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,f as t}from"./app-iuUKtJ3F.js";const i="/assets/job_blocked-8xK8XlVj.jpg",o="/assets/allow_runner_untabled_job-OSBYUA7q.jpg",l={},c=t('<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>此作业已阻塞，因为该项目没有分配任何可用 Runner。</p><figure><img src="'+i+`" alt="作业已阻塞" tabindex="0" loading="lazy"><figcaption>作业已阻塞</figcaption></figure><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><p>因为 <code>.gitlab-ci.yml</code> 文件中的作业没有指定任何标签（<code>tags</code>），且 GitLab Runner 实例被配置为只运行指定标签的作业。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><h3 id="解决方法-1" tabindex="-1"><a class="header-anchor" href="#解决方法-1" aria-hidden="true">#</a> 解决方法 1</h3><p>在 <code>.gitlab-ci.yml</code> 文件中指定 <code>tags</code>，例如：指定包含 <code>shell</code> 标签的 Runner 实例。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">build-job</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;shell&quot;</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;Hello<span class="token punctuation">,</span> $GITLAB_USER_LOGIN<span class="token tag">!</span>&quot;

<span class="token key atrule">test-job1</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This job tests something&quot;
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;shell&quot;</span>

<span class="token key atrule">test-job2</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;shell&quot;</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This job tests something<span class="token punctuation">,</span> but takes more time than test<span class="token punctuation">-</span>job1.&quot;
    <span class="token punctuation">-</span> echo &quot;After the echo commands complete<span class="token punctuation">,</span> it runs the sleep command for 20 seconds&quot;
    <span class="token punctuation">-</span> echo &quot;which simulates a test that runs 20 seconds longer than test<span class="token punctuation">-</span>job1&quot;
    <span class="token punctuation">-</span> sleep 20

<span class="token key atrule">deploy-prod</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;shell&quot;</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;This job deploys something from the $CI_COMMIT_BRANCH branch.&quot;
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方法-2" tabindex="-1"><a class="header-anchor" href="#解决方法-2" aria-hidden="true">#</a> 解决方法 2</h3><p>选择 Runner 实例，点击编辑（✏️）：</p><figure><img src="`+n+'" alt="Runner 实例" tabindex="0" loading="lazy"><figcaption>Runner 实例</figcaption></figure><p>允许 Runner 运行未打标签的作业。</p><figure><img src="'+o+'" alt="HTTP 有端口" tabindex="0" loading="lazy"><figcaption>HTTP 有端口</figcaption></figure>',14),p=[c];function u(d,r){return a(),e("div",null,p)}const b=s(l,[["render",u],["__file","job_blocked.html.vue"]]);export{b as default};
