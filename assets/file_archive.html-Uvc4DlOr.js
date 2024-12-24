import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as t,c,b as a,e,d as r,w as i,f as l}from"./app-sOlc-oBJ.js";const d={},p=a("p",null,[e("如果使用压缩工具（"),a("code",null,"tar"),e("、"),a("code",null,"7zip"),e("、"),a("code",null,"winzip"),e("、"),a("code",null,"rar"),e(" 等）将工作区文件归档，一不小心会把版本库（"),a("code",null,".git"),e(" 目录）包含其中，甚至将工作区中的忽略文件、临时文件也包含其中。")],-1),u=l(`<p>例如：基于最新提交建立归档文件 <code>latest.zip</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> archive <span class="token parameter variable">-o</span> latest.zip HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：只将目录 <code>src</code> 和 <code>doc</code> 建立到归档 <code>partial.tar</code> 中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> archive <span class="token parameter variable">-o</span> partial.tar HEAD src doc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：基于里程碑 <code>v1.0</code> 建立归档，并且为归档中的文件添加目录前缀 <code>1.0</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> archive <span class="token parameter variable">--format</span><span class="token operator">=</span>tar <span class="token parameter variable">--prefix</span><span class="token operator">=</span><span class="token number">1.0</span>/ v1.0 <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> foo-1.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在建立归档时，如果使用树对象 ID 进行归档，则使用当前时间作为归档中文件的修改时间，而如果使用提交 ID 或里程碑等，则使用提交建立的时间作为归档中文件的修改时间。</p><p>此外，如果使用 <code>tar</code> 格式，提交 ID 会存储在全局扩展 <code>pax</code> 标头中；可以使用 <code>git get-tar-commit-id</code> 提取。在 ZIP 文件中，它被存储为文件注释。</p>`,8);function v(m,h){const s=o("RouterLink");return t(),c("div",null,[p,a("p",null,[e("Git 提供了一个归档命令 "),r(s,{to:"/commands/git/git_archive.html"},{default:i(()=>[e("git archive")]),_:1}),e("，可以对任意提交对应的目录树建立归档。")]),u])}const b=n(d,[["render",v],["__file","file_archive.html.vue"]]);export{b as default};