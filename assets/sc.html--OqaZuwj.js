import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as d,f as n}from"./app-PZbjESxd.js";const l={},s=n(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>sc</code> 用于与服务控制管理器和服务进行通信的命令行程序。</p><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><table><thead><tr><th style="text-align:center;">命令</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>sc config</code></td><td style="text-align:left;">修改注册表和服务控制管理器数据库中服务项的值</td></tr><tr><td style="text-align:center;"><code>sc create</code></td><td style="text-align:left;">在注册表和服务控制管理器数据库中为服务创建子项和条目</td></tr><tr><td style="text-align:center;"><code>sc delete</code></td><td style="text-align:left;">从注册表中删除服务子项。如果服务正在运行，或者另一个进程具有服务的打开句柄，则会将服务标记为删除</td></tr><tr><td style="text-align:center;"><code>sc query</code></td><td style="text-align:left;">获取并显示有关指定服务、驱动程序、服务类型或驱动程序类型的信息</td></tr><tr><td style="text-align:center;"><code>sc start</code></td><td style="text-align:left;">启动服务</td></tr><tr><td style="text-align:center;"><code>sc stop</code></td><td style="text-align:left;">向服务发送 STOP 请求</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>例如：显示 eventlog 服务的状态。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;sc query eventlog

SERVICE_NAME: eventlog
        TYPE               : 30  WIN32
        STATE              : 4  RUNNING
                                (STOPPABLE, NOT_PAUSABLE, ACCEPTS_SHUTDOWN)
        WIN32_EXIT_CODE    : 0  (0x0)
        SERVICE_EXIT_CODE  : 0  (0x0)
        CHECKPOINT         : 0x0
        WAIT_HINT          : 0x0

E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[s];function a(c,r){return t(),d("div",null,i)}const h=e(l,[["render",a],["__file","sc.html.vue"]]);export{h as default};
