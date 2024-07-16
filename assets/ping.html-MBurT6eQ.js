import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as n,f as i}from"./app-b0e8gSvu.js";const t={},s=i(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>ping</code> 用于通过发送 Internet 控制消息协议（ICMP）回显请求消息，验证与另一台 TCP/IP 计算机的 IP 级别连接情况。会显示接收到的相应回显回复消息和往返时间。<code>ping</code> 是用于排查连接性、可访问性和名称解析问题的主要 TCP/IP 命令。如果在没有参数的情况下使用，此命令会显示帮助内容。</p><p>还可以使用此命令来测试计算机名称和计算机的 IP 地址。如果针对 IP 地址的 <code>ping</code> 操作成功，但针对计算机名称的 <code>ping</code> 操作失败，则可能是名称解析问题。在这种情况下，请确保可通过本地 Hosts 文件、域名系统（DNS）查询或 NetBIOS 名称解析技术来解析你指定的计算机名称。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>仅当 Internet 协议（TCP/IP）协议作为组件安装在网络连接的网络适配器的属性中时，此命令才可用。</p></div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>/a</code></td><td style="text-align:left;">指定对目标 IP 地址执行反向名称解析。如果此操作成功，ping 会显示相应的主机名</td></tr><tr><td style="text-align:center;"><code>/l &lt;size&gt;</code></td><td style="text-align:left;">指定回显请求消息中 “数据” 字段的长度（以字节为单位）。默认值为 <code>32</code>。最大大小为 <code>65,500</code></td></tr><tr><td style="text-align:center;"><code>/n &lt;count&gt;</code></td><td style="text-align:left;">指定要发送的回显请求消息数。默认值为 <code>4</code></td></tr><tr><td style="text-align:center;"><code>/t</code></td><td style="text-align:left;">指定 <code>ping</code> 继续向目标发送回显请求消息，直到被中断为止。要中断并显示统计信息，请按 Ctrl+Break。要中断并退出此命令，请按 Ctrl+C</td></tr><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>例如：对目标 <code>10.1.1.10</code> 执行 <code>ping</code> 操作并将 <code>10.1.1.10</code> 解析为其主机名。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;ping /a 10.1.1.10

正在 Ping example.com [10.1.1.10] 具有 32 字节的数据:
来自 10.1.1.10 的回复: 字节=32 时间&lt;1ms TTL=64
来自 10.1.1.10 的回复: 字节=32 时间&lt;1ms TTL=64
来自 10.1.1.10 的回复: 字节=32 时间=1ms TTL=64
来自 10.1.1.10 的回复: 字节=32 时间=1ms TTL=64

10.1.1.10 的 Ping 统计信息:
    数据包: 已发送 = 4，已接收 = 4，丢失 = 0 (0% 丢失)，
往返行程的估计时间(以毫秒为单位):
    最短 = 0ms，最长 = 1ms，平均 = 0ms

C:\\Users\\user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：用 <code>6</code> 条回显请求消息对目标 <code>10.1.1.10</code> 执行 <code>ping</code> 操作（其中每条消息的 “数据” 字段为 <code>1000</code> 字节）。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;ping /n 6 /l 1000 10.1.1.10

正在 Ping 10.1.1.10 具有 1000 字节的数据:
来自 10.1.1.10 的回复: 字节=1000 时间=13ms TTL=64
来自 10.1.1.10 的回复: 字节=1000 时间=1ms TTL=64
来自 10.1.1.10 的回复: 字节=1000 时间&lt;1ms TTL=64
来自 10.1.1.10 的回复: 字节=1000 时间&lt;1ms TTL=64
来自 10.1.1.10 的回复: 字节=1000 时间&lt;1ms TTL=64
来自 10.1.1.10 的回复: 字节=1000 时间&lt;1ms TTL=64

10.1.1.10 的 Ping 统计信息:
    数据包: 已发送 = 6，已接收 = 6，丢失 = 0 (0% 丢失)，
往返行程的估计时间(以毫秒为单位):
    最短 = 0ms，最长 = 13ms，平均 = 2ms

C:\\Users\\user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[s];function c(a,r){return d(),n("div",null,l)}const m=e(t,[["render",c],["__file","ping.html.vue"]]);export{m as default};
