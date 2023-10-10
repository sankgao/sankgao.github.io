import{_ as n,a as s}from"./ipconfig_flushdns-6daef4d0.js";import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as a,c as r,b as o,e,d as i,f as d}from"./app-d71d2a3e.js";const g="/assets/github_cannot_access-ef042f7e.jpg",p="/assets/image_loading_failed-6cc32bf6.jpg",u={},_=o("h2",{id:"问题",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),e(" 问题")],-1),h={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},f=o("figure",null,[o("img",{src:g,alt:"GitHub 无法访问",tabindex:"0",loading:"lazy"}),o("figcaption",null,"GitHub 无法访问")],-1),b=o("li",null,[o("p",null,"GitHub 图片加载失败"),o("figure",null,[o("img",{src:p,alt:"GitHub 图片加载失败",tabindex:"0",loading:"lazy"}),o("figcaption",null,"GitHub 图片加载失败")])],-1),m=o("h2",{id:"解决方法",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#解决方法","aria-hidden":"true"},"#"),e(" 解决方法")],-1),x=o("p",null,[o("strong",null,"DNS 查询 Github 地址")],-1),N={href:"https://tool.chinaz.com/dns/",target:"_blank",rel:"noopener noreferrer"},k=o("strong",null,"DNS 查询",-1),S=o("code",null,"github.com",-1),D=d('<li><p><strong>复制 IP 地址</strong></p><p>复制 DNS 解析出来的 IP 地址。如：<code>20.205.243.166</code>。</p></li><li><p><strong>添加到 hosts 文件</strong></p><p>将解析的 IP 地址添加到 <code>C:\\Windows\\System32\\drivers\\etc</code> 目录下的 <code>hosts</code> 文件中。如：<code>20.205.243.166 github.com</code></p><ul><li><strong>20.205.243.166</strong>：指 DNS 解析出来的 IP 地址</li><li><strong><code>github.com</code></strong>：指域名</li></ul></li><li><p><strong>刷新 DNS 解析缓存</strong></p><p>在 Windows 中按 <kbd>Win</kbd> + <kbd>R</kbd> 键，在运行中输入 <code>cmd</code> 打开终端控制器。</p><figure><img src="'+n+'" alt="终端控制器" tabindex="0" loading="lazy"><figcaption>终端控制器</figcaption></figure><p>在终端控制器中输入 <code>ipconfig /flushdns</code> 命令，刷新 DNS 解析缓存。</p><figure><img src="'+s+'" alt="ipconfig /flushdns" tabindex="0" loading="lazy"><figcaption>ipconfig /flushdns</figcaption></figure></li><li><p>在 A 类型中填写 <code>github.githubassets.com</code>，再点击监测按钮</p></li><li><p>复制 DNS 解析出来的 IP 地址。如：<code>185.199.110.154</code></p></li><li><p>将解析的 IP 地址添加到 <code>hosts</code> 文件中。如：<code>185.199.110.154 github.githubassets.com</code></p></li><li><p>刷新 DNS 解析缓存</p></li>',7);function I(G,H){const t=c("ExternalLinkIcon");return a(),r("div",null,[_,o("ul",null,[o("li",null,[o("p",null,[o("a",h,[e("GitHub"),i(t)]),e(" 网页在国内加载慢，而且有时还加载失败")]),f]),b]),m,o("ol",null,[o("li",null,[x,o("p",null,[e("打开网站 "),o("a",N,[e("站长工具"),i(t)]),e(" 并选择 "),k,e("，在 A 类型中填写 "),S,e("，再点击监测按钮。")])]),D])])}const v=l(u,[["render",I],["__file","github_loading.html.vue"]]);export{v as default};