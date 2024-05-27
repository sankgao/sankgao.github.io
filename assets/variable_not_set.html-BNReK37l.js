import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-xvmiVAjY.js";const i={},o=e(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p><strong>报错日志如下：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>

WARN<span class="token punctuation">[</span>0000<span class="token punctuation">]</span> The <span class="token string">&quot;GITLAB_HOME&quot;</span> variable is not set. Defaulting to a blank string.
WARN<span class="token punctuation">[</span>0000<span class="token punctuation">]</span> The <span class="token string">&quot;GITLAB_HOME&quot;</span> variable is not set. Defaulting to a blank string.
WARN<span class="token punctuation">[</span>0000<span class="token punctuation">]</span> The <span class="token string">&quot;GITLAB_HOME&quot;</span> variable is not set. Defaulting to a blank string.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><p><code>docker-compose.yml</code> 文件中，在 <code>volumes</code> 参数中使用 <code>GITLAB_HOME</code> 环境变量。例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&#39;$GITLAB_HOME/config:/etc/gitlab&#39;</span>
  <span class="token punctuation">-</span> <span class="token string">&#39;$GITLAB_HOME/logs:/var/log/gitlab&#39;</span>
  <span class="token punctuation">-</span> <span class="token string">&#39;$GITLAB_HOME/data:/var/opt/gitlab&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>未在本地 <code>.env</code> 文件中定义 <code>GITLAB_HOME</code> 环境变量，且在 <code>docker-compose.yml</code> 文件中引用方式错误。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><p>在 <code>.env</code> 文件中定义变量：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">GITLAB_HOME</span><span class="token operator">=</span>/opt/gitlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code>docker-compose.yml</code> 文件中使用这个变量定义卷。例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># ...省略部分内容</span>
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&#39;\${GITLAB_HOME}/config:/etc/gitlab&#39;</span>
  <span class="token punctuation">-</span> <span class="token string">&#39;\${GITLAB_HOME}/logs:/var/log/gitlab&#39;</span>
  <span class="token punctuation">-</span> <span class="token string">&#39;\${GITLAB_HOME}/data:/var/opt/gitlab&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>\${GITLAB_HOME}</code> 是一个环境变量的引用，它将会被解析为在 <code>.env</code> 文件中定义的值 <code>/opt/gitlab</code>。</p><p>运行 <code>docker-compose up</code> 命令时，Docker Compose 会读取 <code>.env</code> 文件中的变量定义，并在启动服务之前将 <code>\${GITLAB_HOME}</code> 替换为 <code>/opt/gitlab</code>。这样，您就可以通过修改 <code>.env</code> 文件来控制卷的路径，而不需要编辑 <code>docker-compose.yml</code> 文件本身。</p><p>通过 <code>docker-compose config</code> 命令查看环境变量替换后的显示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>suod <span class="token function">docker-compose</span> config

<span class="token comment"># ...省略部分内容</span>
volumes:
  - type: <span class="token builtin class-name">bind</span>
    source: /opt/gitlab/config
    target: /etc/gitlab
    bind:
      create_host_path: <span class="token boolean">true</span>
<span class="token comment"># ...省略部分内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[o];function t(l,d){return s(),a("div",null,c)}const u=n(i,[["render",t],["__file","variable_not_set.html.vue"]]);export{u as default};
