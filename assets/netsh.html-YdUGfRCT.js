import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,f as d}from"./app-PZbjESxd.js";const s={},l=d(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>netsh</code> Network Shell 是命令行脚本实用工具，可让您以本地或远程方式显示或修改当前正在运行的计算机的网络配置。可以在命令提示符处或在 Windows PowerShell 中启动此实用工具。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>-a &lt;aliasfile&gt;</code></td><td style="text-align:left;">指定在运行 Aliasfile 后返回到 <code>netsh</code> 提示符，并指定包含一个或多个 <code>netsh</code> 命令的文本文件的名称</td></tr><tr><td style="text-align:center;"><code>-c &lt;Context&gt;</code></td><td style="text-align:left;">指定 <code>netsh</code> 输入指定的 <code>netsh</code> 上下文和要输入的 <code>netsh</code> 上下文</td></tr><tr><td style="text-align:center;"><code>-r &lt;Remotecomputer&gt;</code></td><td style="text-align:left;">指定要配置的远程计算机 重要提示：如果使用此参数，必须确保远程注册表服务在远程计算机上运行。如果未运行，Windows 将显示 “找不到网络路径” 错误消息</td></tr><tr><td style="text-align:center;"><code>-u &lt;domainname&gt;\\&lt;username&gt;</code></td><td style="text-align:left;">指定在用户帐户下运行 <code>netsh</code> 命令时要使用的域和用户帐户名称。如果省略域，则默认使用本地域</td></tr><tr><td style="text-align:center;"><code>-p &lt;Password&gt;</code></td><td style="text-align:left;">指定 <code>-u &lt;username&gt;</code> 参数指定的用户帐户的密码</td></tr><tr><td style="text-align:center;"><code>&lt;NetshCommand&gt;</code></td><td style="text-align:left;">指定要运行的 <code>netsh</code> 命令</td></tr><tr><td style="text-align:center;"><code>-f &lt;scriptfile&gt;</code></td><td style="text-align:left;">运行指定的脚本文件后退出 <code>netsh</code> 命令</td></tr><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="netsh-帮助信息" tabindex="-1"><a class="header-anchor" href="#netsh-帮助信息" aria-hidden="true">#</a> netsh 帮助信息</h3><p>例如：在命令提示符下显示帮助。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;netsh /?

用法: netsh [-a AliasFile] [-c Context] [-r RemoteMachine] [-u [DomainName\\]UserName] [-p Password | *]
             [Command | -f ScriptFile]

下列指令有效:

此上下文中的命令:
?              - 显示命令列表。
add            - 在项目列表上添加一个配置项目。
advfirewall    - 更改到 \`netsh advfirewall&#39; 上下文。
branchcache    - 更改到 \`netsh branchcache&#39; 上下文。
bridge         - 更改到 \`netsh bridge&#39; 上下文。
delete         - 在项目列表上删除一个配置项目。
dhcpclient     - 更改到 \`netsh dhcpclient&#39; 上下文。
dnsclient      - 更改到 \`netsh dnsclient&#39; 上下文。
dump           - 显示一个配置脚本。
exec           - 运行一个脚本文件。
firewall       - 更改到 \`netsh firewall&#39; 上下文。
help           - 显示命令列表。
http           - 更改到 \`netsh http&#39; 上下文。
interface      - 更改到 \`netsh interface&#39; 上下文。
ipsec          - 更改到 \`netsh ipsec&#39; 上下文。
lan            - 更改到 \`netsh lan&#39; 上下文。
mbn            - 更改到 \`netsh mbn&#39; 上下文。
namespace      - 更改到 \`netsh namespace&#39; 上下文。
netio          - 更改到 \`netsh netio&#39; 上下文。
p2p            - 更改到 \`netsh p2p&#39; 上下文。
ras            - 更改到 \`netsh ras&#39; 上下文。
rpc            - 更改到 \`netsh rpc&#39; 上下文。
set            - 更新配置设置。
show           - 显示信息。
trace          - 更改到 \`netsh trace&#39; 上下文。
wcn            - 更改到 \`netsh wcn&#39; 上下文。
wfp            - 更改到 \`netsh wfp&#39; 上下文。
winhttp        - 更改到 \`netsh winhttp&#39; 上下文。
winsock        - 更改到 \`netsh winsock&#39; 上下文。
wlan           - 更改到 \`netsh wlan&#39; 上下文。

下列的子上下文可用:
 advfirewall branchcache bridge dhcpclient dnsclient firewall http interface ipsec lan mbn namespace netio p2p ras rpc trace wcn wfp winhttp winsock wlan

若需要命令的更多帮助信息，请键入命令，接着是空格，
后面跟 ?。

C:\\Users\\user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示指定命令帮助信息" tabindex="-1"><a class="header-anchor" href="#显示指定命令帮助信息" aria-hidden="true">#</a> 显示指定命令帮助信息</h3><p>例如：显示 <code>wlan</code> 命令的使用方法。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;netsh wlan /?

下列指令有效:

此上下文中的命令:
?              - 显示命令列表。
add            - 在一个表格中添加一个配置项。
connect        - 连接到无线网络。
delete         - 从一个表格中删除一个配置项。
disconnect     - 从无线网络断开连接。
dump           - 显示一个配置脚本。
export         - 将 WLAN 配置文件保存为 XML 文件。
help           - 显示命令列表。
IHV            - 用于 IHV 记录的命令。
refresh        - 刷新承载网络设置。
reportissues   - 生成 WLAN 智能跟踪报告。
set            - 设置配置信息。
show           - 显示信息。
start          - 启动承载网络。
stop           - 停止承载网络。

若需要命令的更多帮助信息，请键入命令，接着是空格，
后面跟 ?。


C:\\Users\\user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="net-wlan" tabindex="-1"><a class="header-anchor" href="#net-wlan" aria-hidden="true">#</a> net wlan</h3><p>例如：列出所有存储的 Wi-Fi 配置文件。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;netsh wlan show profiles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：查看 Wi-Fi 密码。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;netsh wlan show profile name=&quot;NetworkName&quot; key=clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：显示无线网络适配器的详细信息。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;netsh wlan show interface
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：删除特定的 Wi-Fi 网络记录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\user&gt;netsh wlan delete profile name=&quot;NetworkName&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20),t=[l];function a(c,r){return n(),i("div",null,t)}const u=e(s,[["render",a],["__file","netsh.html.vue"]]);export{u as default};
