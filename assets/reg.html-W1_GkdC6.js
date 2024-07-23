import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as d,f as r}from"./app-Iwq9_8Kn.js";const a={},c=r(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>reg</code> 用于对注册表项中的注册表子项信息和值执行操作。</p><p>某些操作使您能够查看或配置本地或远程计算机上的注册表项，而其他操作则允许您仅配置本地计算机。使用 <code>reg</code> 配置远程计算机的注册表会限制在某些操作中可以使用的参数。检查每个操作的语法和参数，以验证它们是否可以在远程计算机上使用。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><table><thead><tr><th style="text-align:center;">命令</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>reg add</code></td><td style="text-align:left;">将新的子项或项添加到注册表中</td></tr><tr><td style="text-align:center;"><code>reg compare</code></td><td style="text-align:left;">比较指定的注册表子项或项</td></tr><tr><td style="text-align:center;"><code>reg copy</code></td><td style="text-align:left;">将注册表项复制到本地或远程计算机上的指定位置</td></tr><tr><td style="text-align:center;"><code>reg delete</code></td><td style="text-align:left;">从注册表中删除子项或条目</td></tr><tr><td style="text-align:center;"><code>reg export</code></td><td style="text-align:left;">将本地计算机的指定子项、项和值复制到文件，以便传输到其他服务器</td></tr><tr><td style="text-align:center;"><code>reg import</code></td><td style="text-align:left;">将包含导出的注册表子项、条目和值的文件内容复制到本地计算机的注册表中</td></tr><tr><td style="text-align:center;"><code>reg load</code></td><td style="text-align:left;">将保存的子项和项写入注册表中的不同子项</td></tr><tr><td style="text-align:center;"><code>reg query</code></td><td style="text-align:left;">返回位于注册表中指定子项下的下一层子项和条目的列表</td></tr><tr><td style="text-align:center;"><code>reg restore</code></td><td style="text-align:left;">将保存的子项和项写回到注册表</td></tr><tr><td style="text-align:center;"><code>reg save</code></td><td style="text-align:left;">将注册表的指定子项、项和值的副本保存在指定的文件中</td></tr><tr><td style="text-align:center;"><code>reg unload</code></td><td style="text-align:left;">删除使用 <code>reg load</code> 操作加载的注册表部分</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>例如：要在远程计算机 ABC 上添加 <code>HKLM\\Software\\MyCo</code> 项。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;reg add \\\\ABC\\HKLM\\Software\\MyCo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：要将名为 <code>DATA</code> 的值、类型为 <code>REG_BINARY</code> 且数据为 <code>fe340ead</code> 的注册表项添加到 <code>HKLM\\Software\\MyCo</code>。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;reg add HKLM\\Software\\MyCo /v Data /t REG_BINARY /d fe340ead
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：要显示 <code>HKLM\\Software\\Microsoft\\ResKit</code> 中名称值 <code>Version</code> 的值。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;reg query HKLM\\Software\\Microsoft\\ResKit /v Version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：将配置单元 <code>MyApp</code> 以名为 <code>AppBkUp.hiv</code> 的文件保存到当前文件夹中。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;reg save HKLM\\Software\\MyCo\\MyApp AppBkUp.hiv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),l=[c];function o(s,n){return t(),d("div",null,l)}const h=e(a,[["render",o],["__file","reg.html.vue"]]);export{h as default};
