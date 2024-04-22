import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as i,b as e,e as s,d as t,f as n}from"./app-D20DHzg5.js";const d={},p=n(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>以指定用户启动 docker 容器。</p><p><strong>报错日志如下：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-u</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">--name</span> jenkins jenkins/jenkins:latest

docker: Error response from daemon: unable to <span class="token function">find</span> user test: no matching entries <span class="token keyword">in</span> <span class="token function">passwd</span> file.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><p>容器中的默认用户是 <code>root</code>（<code>uid = 0</code>）。您可以设置默认用户以使用 Dockerfile <code>USER</code> 指令运行第一个进程。启动容器时，可以通过传递 <code>-u</code> 选项来覆盖 <code>USER</code> 指令。</p><p><code>docker run</code> 命令 <code>-u</code> 参数，传递的用户名必须存在与容器中，如果用户名不存在容器中，则会报此错误。</p><p>以下示例均有效：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-u, <span class="token parameter variable">--user</span><span class="token operator">=</span><span class="token punctuation">[</span> user <span class="token operator">|</span> user:group <span class="token operator">|</span> uid <span class="token operator">|</span> uid:gid <span class="token operator">|</span> user:gid <span class="token operator">|</span> uid:group <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),l={href:"https://docs.docker.com/engine/reference/run/#user",target:"_blank",rel:"noopener noreferrer"},u=n(`<h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><p>传递用户时，使用数字用户 ID，此用户不必存在于容器中，但此用户 ID 必须在 <code>0-2147483647</code> 范围内。</p><p>通过以下命令查看 <code>test</code> 用户的 UID：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> <span class="token builtin class-name">test</span>

test:x:1002:1002::/opt/jenkins_home:/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-u</span> <span class="token number">1002</span>:1002 <span class="token parameter variable">--name</span> jenkins jenkins/jenkins:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于该 ID 不存在于容器内的 <code>/etc/passwd</code> 文件中，所以进入容器后，容器名显示为 <code>I have no name!</code>。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> jenkins /bin/bash

I have no name<span class="token operator">!</span>@87396e208b2e:/$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以进入容器中，通过修改容器内 jenkins 用户 UID 和 GID 解决。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token parameter variable">-u</span> <span class="token number">0</span> jenkins /bin/bash

root@87396e208b2e:/$ <span class="token function">usermod</span> <span class="token parameter variable">-u</span> <span class="token number">1002</span> jenkins
root@87396e208b2e:/$ <span class="token function">groupmod</span> <span class="token parameter variable">-u</span> <span class="token number">1002</span> jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function k(m,b){const a=o("ExternalLinkIcon");return c(),i("div",null,[p,e("p",null,[s("参考官网："),e("a",l,[s("https://docs.docker.com/engine/reference/run/#user"),t(a)])]),u])}const g=r(d,[["render",k],["__file","docker_run_user.html.vue"]]);export{g as default};
