import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as d,f as i}from"./app-owOuNWt9.js";const s={},t=i(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>ipconfig</code> 用于显示所有当前的 TCP/IP 网络配置值，并刷新动态主机配置协议（DHCP）和域名系统（DNS）设置。在没有参数的情况下使用时，<code>ipconfig</code> 会显示 Internet IPv4 和 IPv6 地址、子网掩码以及所有适配器的默认网关。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>/all</code></td><td style="text-align:left;">显示所有适配器的完整 TCP/IP 配置。适配器可表示物理接口（例如：已安装的网络适配器）或逻辑接口（如：拨号连接）</td></tr><tr><td style="text-align:center;"><code>/flushdns</code></td><td style="text-align:left;">刷新和重置 DNS 客户端解析程序缓存的内容</td></tr><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>例如：显示所有适配器的基本 TCP/IP 配置。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;ipconfig

Windows IP 配置


以太网适配器 以太网:

   连接特定的 DNS 后缀 . . . . . . . :
   本地链接 IPv6 地址. . . . . . . . : fe80::d003:479e:9df0:259d%19
   IPv4 地址 . . . . . . . . . . . . : 192.168.10.12
   子网掩码  . . . . . . . . . . . . : 255.255.255.0
   默认网关. . . . . . . . . . . . . : 192.168.10.1
// ...省略部分内容

C:\\Users\\user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：刷新 DNS 解析器缓存。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;ipconfig /flushdns

Windows IP 配置

已成功刷新 DNS 解析缓存。

C:\\Users\\user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[t];function a(r,c){return n(),d("div",null,l)}const u=e(s,[["render",a],["__file","ipconfig.html.vue"]]);export{u as default};
