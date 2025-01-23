import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as a,f as i}from"./app-T6B7uwvV.js";const s={},n=i(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>cd</code> 或 <code>chdir</code> 用于显示当前目录的名称或更改当前目录。如果仅与磁盘号一起使用（例如：<code>cd C:</code>），cd 将显示指定磁盘中当前目录的名称。如果使用时不带参数，cd 将显示当前磁盘和目录。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>/d</code></td><td style="text-align:left;">切换当前磁盘以及磁盘的当前目录</td></tr><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="只显示当前磁盘和目录" tabindex="-1"><a class="header-anchor" href="#只显示当前磁盘和目录" aria-hidden="true">#</a> 只显示当前磁盘和目录</h3><p>例如：显示当前磁盘和目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;cd
C:\\Users\\user

C:\\Users\\user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换磁盘" tabindex="-1"><a class="header-anchor" href="#切换磁盘" aria-hidden="true">#</a> 切换磁盘</h3><p>例如：从 C 盘切换到 E 盘。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;e:

E:\\&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或使用 <code>cd</code> 命令 <code>/d</code> 参数：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;cd /d E:\\

E:\\&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示指定磁盘中当前目录的名称" tabindex="-1"><a class="header-anchor" href="#显示指定磁盘中当前目录的名称" aria-hidden="true">#</a> 显示指定磁盘中当前目录的名称</h3><p>例如：显示 C 磁盘中当前目录的名称。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\&gt;cd c:
C:\\Users\\user

E:\\&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换到指定目录" tabindex="-1"><a class="header-anchor" href="#切换到指定目录" aria-hidden="true">#</a> 切换到指定目录</h3><p>例如：切换到 <code>E:\\test\\test 03</code> 目录中。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\&gt;cd &quot;test\\test 03&quot;

E:\\test\\test 03&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Windows 系统不会将空格视为分隔符，因此路径中可以包含不带引号的空格。例如：<code>cd test\\test 03</code>。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\&gt;cd test\\test 03

E:\\test\\test 03&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：切换到上一级目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test\\test 03&gt;cd ..

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：切换到磁盘的根目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;cd \\

E:\\&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),c=[n];function t(r,l){return d(),a("div",null,c)}const m=e(s,[["render",t],["__file","cd_chdir.html.vue"]]);export{m as default};
