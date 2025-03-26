import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as i,f as n}from"./app-xuuV9zjV.js";const s={},l=n(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>ftp</code> 用于在运行文件传输协议（FTP）服务器服务的计算机之间双向传输文件。此命令可以通过处理 ASCII 文本文件以交互方式或批处理方式使用。</p><ul><li><code>ftp</code> 命令行参数区分大小写</li><li>仅当 Internet 协议（TCP/IP）协议作为组件安装在网络连接的网络适配器的属性中时，此命令才可用</li><li><code>ftp</code> 命令可以交互使用。启动之后，FTP 会创建一个子环境，您可以在其中使用 <code>ftp</code> 命令。可以键入 <code>quit</code> 命令返回到命令提示符。当 FTP 子环境正在运行时，<code>ftp&gt;</code> 命令提示符会表明这一点</li><li>安装了 IPv6 协议时，<code>ftp</code> 命令支持使用 IPv6</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>-a</code></td><td style="text-align:left;">指定在绑定 FTP 数据连接时可以使用任何本地接口</td></tr><tr><td style="text-align:center;"><code>-d</code></td><td style="text-align:left;">启用调试，显示在 FTP 客户端和 FTP 服务器之间传递的所有命令</td></tr><tr><td style="text-align:center;"><code>-i</code></td><td style="text-align:left;">在多个文件传输过程中禁用交互式提示</td></tr><tr><td style="text-align:center;"><code>-n</code></td><td style="text-align:left;">禁止在初始连接时自动登录</td></tr><tr><td style="text-align:center;"><code>-v</code></td><td style="text-align:left;">禁止显示远程服务器响应</td></tr><tr><td style="text-align:center;"><code>-s:filename</code></td><td style="text-align:left;">指定包含 <code>ftp</code> 命令的文本文件，命令在 FTP 服务启动后自动运行</td></tr><tr><td style="text-align:center;"><code>-A</code></td><td style="text-align:left;">以匿名身份登录到 FTP 服务器</td></tr><tr><td style="text-align:center;"><code>&lt;host&gt;</code></td><td style="text-align:left;">指定要连接的 FTP 服务器的计算机名称、IP 地址或 IPv6 地址。如果指定了主机名或地址，则必须是该行的最后一个参数</td></tr><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><p>在 FTP 环境中使用的命令如下表所示：</p><table><thead><tr><th style="text-align:center;">命令</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><a href="#append">append</a></td><td style="text-align:left;">将本地文件内容追加到 FTP 远程服务器指定文件中</td></tr><tr><td style="text-align:center;"><a href="#bye-%E6%88%96-quit">bye 或 quit</a></td><td style="text-align:left;">结束 FTP 远程服务器上的会话，然后退出 FTP 子环境</td></tr><tr><td style="text-align:center;"><a href="#cd">cd</a></td><td style="text-align:left;">更改 FTP 远程服务器中的工作目录</td></tr><tr><td style="text-align:center;"><a href="#close">close</a></td><td style="text-align:left;">结束与 FTP 远程服务器的会话并保持在 <code>ftp&gt;</code> 提示符处</td></tr><tr><td style="text-align:center;"><a href="#debug">debug</a></td><td style="text-align:left;">切换调试模式</td></tr><tr><td style="text-align:center;"><a href="#delete">delete</a></td><td style="text-align:left;">删除 FTP 远程服务器中的指定文件</td></tr><tr><td style="text-align:center;"><a href="#dir">dir</a></td><td style="text-align:left;">显示 FTP 远程服务器指定工作目录中文件和子目录的详细列表</td></tr><tr><td style="text-align:center;"><a href="#disconnect">disconnect</a></td><td style="text-align:left;">断开与 FTP 远程服务器的连接并留在 <code>ftp&gt;</code> 提示符处</td></tr><tr><td style="text-align:center;"><a href="#get-%E6%88%96-recv">get 或 recv</a></td><td style="text-align:left;">使用当前文件传输类型将 FTP 远程服务器中的指定文件复制到本地指定工作目录中</td></tr><tr><td style="text-align:center;"><a href="#lcd">lcd</a></td><td style="text-align:left;">更改本地工作目录</td></tr><tr><td style="text-align:center;"><a href="#ls">ls</a></td><td style="text-align:left;">显示 FTP 远程服务器指定工作目录中文件和子目录的缩略列表</td></tr><tr><td style="text-align:center;"><a href="#mdelete">mdelete</a></td><td style="text-align:left;">删除 FTP 远程服务器中的指定文件</td></tr><tr><td style="text-align:center;"><a href="#mdir">mdir</a></td><td style="text-align:left;">显示 FTP 远程服务器指定工作目录中文件和子目录的详细列表</td></tr><tr><td style="text-align:center;"><a href="#mget">mget</a></td><td style="text-align:left;">使用当前文件传输类型将 FTP 远程服务器中的指定文件复制到本地指定工作目录中</td></tr><tr><td style="text-align:center;"><a href="#mkdir">mkdir</a></td><td style="text-align:left;">在 FTP 远程服务器中创建工作目录</td></tr><tr><td style="text-align:center;"><a href="#mls">mls</a></td><td style="text-align:left;">显示 FTP 远程服务器指定工作目录中文件和子目录的缩略列表</td></tr><tr><td style="text-align:center;"><a href="#mput">mput</a></td><td style="text-align:left;">使用当前文件传输类型将本地工作目录中指定文件复制到 FTP 远程服务器指定工作目录中</td></tr><tr><td style="text-align:center;"><a href="#open">open</a></td><td style="text-align:left;">连接到指定 FTP 远程服务器</td></tr><tr><td style="text-align:center;"><a href="#prompt">prompt</a></td><td style="text-align:left;">打开和关闭 “提示” 模式</td></tr><tr><td style="text-align:center;"><a href="#put-%E6%88%96-send">put 或 send</a></td><td style="text-align:left;">使用当前文件传输类型将本地工作目录中指定文件复制到 FTP 远程服务器指定工作目录中</td></tr><tr><td style="text-align:center;"><a href="#pwd">pwd</a></td><td style="text-align:left;">显示当前 FTP 远程服务器工作目录</td></tr><tr><td style="text-align:center;"><a href="#remotehelp">remotehelp</a></td><td style="text-align:left;">显示远程命令列表及帮助信息</td></tr><tr><td style="text-align:center;"><a href="#rename">rename</a></td><td style="text-align:left;">重命名 FTP 远程服务器指定文件</td></tr><tr><td style="text-align:center;"><a href="#rmdir">rmdir</a></td><td style="text-align:left;">删除 FTP 远程服务器中指定工作目录，只能删除空工作目录</td></tr><tr><td style="text-align:center;"><a href="#status">status</a></td><td style="text-align:left;">显示 FTP 远程服务器连接的当前状态</td></tr><tr><td style="text-align:center;"><a href="#type">type</a></td><td style="text-align:left;">设置或显示文件传输类型</td></tr><tr><td style="text-align:center;"><a href="#user">user</a></td><td style="text-align:left;">指定远程服务器的用户及密码</td></tr><tr><td style="text-align:center;"><a href="#verbose">verbose</a></td><td style="text-align:left;">切换详细模式</td></tr><tr><td style="text-align:center;"><a href="#help">help</a></td><td style="text-align:left;">显示 <code>ftp</code> 命令列表及帮助信息</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="登录服务器" tabindex="-1"><a class="header-anchor" href="#登录服务器" aria-hidden="true">#</a> 登录服务器</h3><p>例如：登录到 <code>192.168.10.10</code> FTP 远程服务器。</p><p>查看当前 <code>E:\\ftp</code> 目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\ftp&gt;dir /b

E:\\ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从当前 <code>E:\\ftp</code> 目录登录到 FTP 远程服务器。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\ftp&gt;ftp 192.168.10.10
连接到 192.168.10.10。
220 Microsoft FTP Service
200 OPTS UTF8 command successful - UTF8 encoding now ON.
用户(192.168.10.10:(none)): username
331 Password required
密码:

230 User logged in.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="open" tabindex="-1"><a class="header-anchor" href="#open" aria-hidden="true">#</a> open</h3><p>如果只输入 <code>ftp</code> 命令则会进入到 FTP 子环境中，使用 <code>open</code> 命令可以连接到指定 FTP 远程服务器。</p><p>例如：连接到 <code>192.168.10.10</code> FTP 远程服务器。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\ftp&gt;ftp
ftp&gt; open 192.168.10.10
连接到 192.168.10.10。
220 Microsoft FTP Service
200 OPTS UTF8 command successful - UTF8 encoding now ON.
用户(192.168.10.10:(none)): username
331 Password required
密码:

230 User logged in.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> user</h3><p>指定 FTP 远程服务器的用户及密码。</p><p>例如：如果已经连接到远程服务器，但还没有登录，可以使用 <code>user</code> 命令进行登录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; open 192.168.10.10
连接到 192.168.10.10。
220 Microsoft FTP Service
200 OPTS UTF8 command successful - UTF8 encoding now ON.
用户(192.168.10.10:(none)):
501 Invalid number of parameters.
登录失败。
ftp&gt; 
ftp&gt; ls
530 Please login with USER and PASS.
530 Please login with USER and PASS.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>user</code> 命令进行登录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; user username password
331 Password required
230 User logged in.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="status" tabindex="-1"><a class="header-anchor" href="#status" aria-hidden="true">#</a> status</h3><p>显示 FTP 远程服务器连接的当前状态。</p><p>例如：显示当前远程服务器连接状态。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; status
连接到 192.168.10.10。
类型: ascii；详细: 开 ；铃声: 关 ；提示: 开 ；通配: 开
调试: 关 ；哈希标记打印: 关 。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3><p>设置或显示文件传输类型。<code>ftp</code> 命令支持 ASCII（默认）和二进制（<code>binary</code>）映像文件传输类型：</p><ul><li>建议在传输文本文件时使用 ASCII。在 ASCII 模式下，将执行与网络标准字符集之间的字符转换。例如：根据目标操作系统，在必要时转换行尾字符</li><li>建议在传输可执行文件时使用二进制。在二进制模式下，文件以单字节为单位传输</li></ul><p>例如：设置为二进制文件传输类型，并查看当前文件传输类型。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; type binary
200 Type set to I.
ftp&gt; 
ftp&gt; type
使用 binary 模式传送文件。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：设置为 ASCII 文件传输类型，并查看当前文件传输类型。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; type ascii
200 Type set to A.
ftp&gt; 
ftp&gt; type
使用 ascii 模式传送文件。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pwd" tabindex="-1"><a class="header-anchor" href="#pwd" aria-hidden="true">#</a> pwd</h3><p>例如：显示当前 FTP 远程服务器工作目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; pwd
257 &quot;/&quot; is current directory.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>/</code> 表示当前位于远程服务器的根目录。</p><h3 id="dir" tabindex="-1"><a class="header-anchor" href="#dir" aria-hidden="true">#</a> dir</h3><p>显示 FTP 远程服务器指定工作目录中文件和子目录的详细列表。</p><ul><li>只能指定一个远程工作目录</li><li>如果未指定工作目录，则使用远程服务器中的当前工作目录</li><li>保存到的本地文件可以不存在</li><li>可以提前切换到要保存的本地工作目录中，这样可以不用指定本地工作目录的绝对路径，直接指定文件名即可</li></ul><p>例如：显示远程服务器根目录中文件和子目录的详细列表。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  04:46PM                    4 file.txt
07-18-24  07:39PM                   11 hello.txt
07-19-24  04:56PM       &lt;DIR&gt;          test01
226 Transfer complete.
ftp: 收到 149 字节，用时 0.00秒 49.67千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：将远程服务器根目录的详细列表保存在本地 <code>D:\\ftp\\dirlist.txt</code> 文件中。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; dir / D:\\ftp\\dirlist.txt
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 收到 146 字节，用时 0.00秒 146000.00千字节/秒。
ftp&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看本地 <code>D:\\ftp\\dirlist.txt</code> 文件内容：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>D:\\ftp&gt;type dirlist.txt
07-19-24  04:46PM                    4 file.txt
07-18-24  07:39PM                   11 hello.txt
07-19-24  04:56PM       &lt;DIR&gt;          test01

D:\\ftp&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mdir" tabindex="-1"><a class="header-anchor" href="#mdir" aria-hidden="true">#</a> mdir</h3><p>显示 FTP 远程服务器指定工作目录中文件和子目录的详细列表。</p><ul><li>可以一次显示一个或多个远程工作目录</li><li>如果不将结果保存到本地文件中，必须以连字符（<code>-</code>）结尾</li><li>保存到的本地文件可以不存在</li><li>可以提前切换到要保存的本地工作目录中，这样可以不用指定本地工作目录的绝对路径，直接指定文件名即可</li></ul><p>例如：显示远程服务器中 <code>hello.txt</code> 文件和 <code>test01</code> 工作目录下文件的详细列表。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; mdir hello.txt test01 -
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-18-24  07:39PM                   11 hello.txt
226 Transfer complete.
ftp: 收到 53 字节，用时 0.00秒 53.00千字节/秒。
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  04:46PM                    6 test01.txt
07-19-24  04:47PM                    6 test02.txt
226 Transfer complete.
ftp: 收到 105 字节，用时 0.00秒 52.50千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果使用 <code>mdir</code> 命令不以连字符（<code>-</code>）结尾，且最后一个文件或目录不存在本地工作目录，则最后一个文件或目录默认指定为保存在本地工作目录的文件名：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; mdir hello.txt test01
output to local-file: test01? y
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 收到 50 字节，用时 0.00秒 50000.00千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看本地 <code>test01</code> 文件内容，只保存了前一个远程服务器的文件信息：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\ftp&gt;type test01
07-18-24  07:39PM                   11 hello.txt

E:\\ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先删除 <code>E:\\ftp</code> 目录下的 <code>test01</code> 文件再创建 <code>test01</code> 目录，否则创建 <code>test01</code> 目录失败：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\ftp&gt;dir
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\\ftp 的目录

2024/07/19  17:13    &lt;DIR&gt;          .
2024/07/19  17:13    &lt;DIR&gt;          ..
2024/07/19  17:13                51 test01
               1 个文件             51 字节
               2 个目录 697,204,674,560 可用字节

E:\\ftp&gt;
E:\\ftp&gt;md test01
子目录或文件 test01 已经存在。

E:\\ftp&gt;
E:\\ftp&gt;del test01

E:\\ftp&gt;md test01

E:\\ftp&gt;dir
 驱动器 E 中的卷没有标签。
 卷的序列号是 02E3-C833

 E:\\ftp 的目录

2024/07/19  17:14    &lt;DIR&gt;          .
2024/07/19  17:14    &lt;DIR&gt;          ..
2024/07/19  17:14    &lt;DIR&gt;          test01
               0 个文件              0 字节
               3 个目录 697,204,674,560 可用字节

E:\\ftp&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用 <code>mdir</code> 命令不以连字符（<code>-</code>）结尾，且最后一个文件或目录已存在本地工作目录，则会报以下错误：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; mdir hello.txt test01
output to local-file: test01? y
200 PORT command successful.
打开本地文件 test01 出错。
&gt; t:权限被拒绝
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h3><p>显示 FTP 远程服务器指定工作目录中文件和子目录的缩略列表。</p><ul><li>只能指定一个远程工作目录</li><li>如果未指定工作目录，则使用远程服务器中的当前工作目录</li><li>保存到的本地文件可以不存在</li><li>可以提前切换到要保存的本地工作目录中，这样可以不用指定本地工作目录的绝对路径，直接指定文件名即可</li></ul><p>例如：显示远程服务器根目录中文件和子目录的缩略列表。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; ls
200 PORT command successful.
125 Data connection already open; Transfer starting.
file.txt
hello.txt
test01
226 Transfer complete.
ftp: 收到 32 字节，用时 0.00秒 32.00千字节/秒。
ftp&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：将远程服务器根目录的缩略列表保存在本地 <code>D:\\ftp\\lslist.txt</code> 文件中。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; ls / D:\\ftp\\lslist.txt
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 收到 32 字节，用时 0.00秒 32000.00千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看本地 <code>D:\\ftp\\lslist.txt</code> 文件内容：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>D:\\ftp&gt;type lslist.txt
/file.txt
/hello.txt
/test01

D:\\ftp&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mls" tabindex="-1"><a class="header-anchor" href="#mls" aria-hidden="true">#</a> mls</h3><p>显示 FTP 远程服务器指定工作目录中文件和子目录的缩略列表。</p><ul><li>可以一次显示一个或多个远程工作目录</li><li>如果不将结果保存到本地文件中，必须以连字符（<code>-</code>）结尾</li><li>保存到的本地文件可以不存在</li><li>可以提前切换到要保存的本地工作目录中，这样可以不用指定本地工作目录的绝对路径，直接指定文件名即可</li></ul><p>例如：显示远程服务器中 <code>hello.txt</code> 文件和 <code>test01</code> 工作目录下文件的缩略列表。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; mls hello.txt test01 -
200 PORT command successful.
125 Data connection already open; Transfer starting.
hello.txt
226 Transfer complete.
ftp: 收到 14 字节，用时 0.00秒 14000.00千字节/秒。
200 PORT command successful.
125 Data connection already open; Transfer starting.
test01.txt
test02.txt
226 Transfer complete.
ftp: 收到 27 字节，用时 0.00秒 27.00千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果使用 <code>mls</code> 命令不以连字符（<code>-</code>）结尾，和使用 <a href="#mdir">mdir</a> 命令不以连字符（<code>-</code>）结尾效果一样。</p></div><h3 id="cd" tabindex="-1"><a class="header-anchor" href="#cd" aria-hidden="true">#</a> cd</h3><p>更改 FTP 远程服务器中的工作目录。</p><p>例如：切换到远程服务器的 <code>test01</code> 工作目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; pwd
257 &quot;/&quot; is current directory.
ftp&gt; 
ftp&gt; cd test01
250 CWD command successful.
ftp&gt; 
ftp&gt; pwd
257 &quot;/test01&quot; is current directory.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：切换到远程服务器的上一级工作目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; cd ../
250 CWD command successful.
ftp&gt;
ftp&gt; pwd
257 &quot;/&quot; is current directory.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lcd" tabindex="-1"><a class="header-anchor" href="#lcd" aria-hidden="true">#</a> lcd</h3><p>更改本地工作目录。默认情况下，本地工作目录是启动 <code>ftp</code> 命令的目录。</p><p>例如：在 FTP 子环境中切换到本地 <code>D:\\ftp</code> 工作目录。</p><p>查看当前本地工作目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; lcd
目前的本地目录 E:\\ftp。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换到本地 <code>D:\\ftp</code> 工作目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; lcd D:\\ftp
目前的本地目录 D:\\ftp。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次执行 <code>lcd</code> 命令，切换回启动 <code>ftp</code> 命令的工作目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; lcd
目前的本地目录 E:\\ftp。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mkdir" tabindex="-1"><a class="header-anchor" href="#mkdir" aria-hidden="true">#</a> mkdir</h3><p>在 FTP 远程服务器中创建工作目录。</p><ul><li>一次只能创建一个工作目录</li><li>如果创建多个工作目录（如：<code>mkdir a b c</code>），只会创建第一个工作目录（<code>a</code>），其它工作目录（<code>b 和 c</code>）不会创建</li><li>不能创建递归工作目录（如：<code>mkdir a\\b\\c</code>）</li></ul><p>例如：在远程服务器根目录中创建 <code>test02</code> 工作目录。</p><p>查看远程服务器根目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; pwd
257 &quot;/&quot; is current directory.
ftp&gt; 
ftp&gt; dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  04:46PM                    4 file.txt
07-18-24  07:39PM                   11 hello.txt
07-19-24  04:56PM       &lt;DIR&gt;          test01
226 Transfer complete.
ftp: 收到 149 字节，用时 0.00秒 49.67千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在远程服务器根目录中创建 <code>test02</code> 工作目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; mkdir test02
257 &quot;test02&quot; directory created.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看远程服务器根目录，<code>test02</code> 工作目录已存在：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; pwd
257 &quot;/&quot; is current directory.
ftp&gt; 
ftp&gt; dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  04:46PM                    4 file.txt
07-18-24  07:39PM                   11 hello.txt
07-19-24  04:56PM       &lt;DIR&gt;          test01
07-19-24  05:34PM       &lt;DIR&gt;          test02
226 Transfer complete.
ftp: 收到 196 字节，用时 0.01秒 28.00千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果使用 <code>mkdir</code> 命令创建递归工作目录，则会报以下错误：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; mkdir a/b/c
550-The system cannot find the path specified.
 Win32 error:   The system cannot find the path specified.
 Error details: File system returned an error.
550 End
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="get-或-recv" tabindex="-1"><a class="header-anchor" href="#get-或-recv" aria-hidden="true">#</a> get 或 recv</h3><p>使用当前文件传输类型将 FTP 远程服务器中的指定文件复制到本地指定工作目录中。</p><ul><li>一次只能复制一个远程文件</li><li>如果指定本地工作目录，则必须指定文件名；如果未指定本地工作目录，则默认复制到当前本地工作目录中</li><li>本地文件名可以和远程文件名不同</li><li>可以提前切换到要复制的本地工作目录中，这样可以不用指定本地工作目录的绝对路径，直接指定文件名即可</li><li>如果要复制到当前本地工作目录且文件名不变，则可以省略文件名（如：<code>get hello.txt hello.txt</code> 可以简写为 <code>get hello.txt</code>）</li></ul><p>例如：将远程根目录下的 <code>hello.txt</code> 文件复制到本地 <code>D:\\ftp\\test</code> 工作目录下，并指定文件名为 <code>hello01.txt</code>。</p><p>查看本地 <code>D:\\ftp\\test</code> 工作目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>D:\\ftp&gt;dir /b test
test.txt

D:\\ftp&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将远程根目录下的 <code>hello.txt</code> 文件复制到本地 <code>D:\\ftp\\test</code> 工作目录下，并指定文件名为 <code>hello01.txt</code>：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; get hello.txt D:\\ftp\\test\\hello01.txt
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 收到 11 字节，用时 0.00秒 11000.00千字节/秒。
ftp&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看本地 <code>D:\\ftp\\test</code> 工作目录，<code>hello01.txt</code> 文件已存在：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>D:\\ftp&gt;dir /b test
hello01.txt
test.txt

D:\\ftp&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果使用 <code>get</code> 或 <code>recv</code> 命令只指定本地工作目录路径不指定文件名，则会报以下错误：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; get hello.txt D:\\ftp\\test
200 PORT command successful.
打开本地文件 D:\\ftp\\test 出错。
&gt; D:未知错误编号
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="mget" tabindex="-1"><a class="header-anchor" href="#mget" aria-hidden="true">#</a> mget</h3><p>使用当前文件传输类型将 FTP 远程服务器中的指定文件复制到本地指定工作目录中。</p><ul><li>可以一次复制一个或多个文件</li><li>不能指定本地工作目录，需要提前切换到要复制的本地工作目录中。默认复制到当前的本地工作目录</li><li>不能修改本地文件名</li><li>可以指定远程工作目录（如：<code>mget test01/</code>），指定远程工作目录时，可以对目录中的文件依次选择是否要复制</li><li>不能指定远程工作目录下的某一个文件（如：<code>mget test01/test01.txt</code>）</li></ul><p>例如：将远程根目录下的 <code>file.txt</code> 文件和 <code>test01</code> 工作目录下的 <code>test01.txt</code> 文件复制到本地 <code>D:\\ftp\\test</code> 工作目录下。</p><p>查看本地 <code>D:\\ftp\\test</code> 工作目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>D:\\ftp&gt;dir /b test
hello01.txt
test.txt

D:\\ftp&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先切换到要复制的本地 <code>D:\\ftp\\test</code> 工作目录中：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; lcd
目前的本地目录 E:\\ftp。
ftp&gt; 
ftp&gt; lcd D:\\ftp\\test
目前的本地目录 D:\\ftp\\test。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将远程根目录下的 <code>file.txt</code> 文件和 <code>test01</code> 工作目录下的 <code>test01.txt</code> 文件复制到本地 <code>D:\\ftp\\test</code> 工作目录下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; mget file.txt test01/
200 Type set to A.
mget file.txt? y
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 收到 4 字节，用时 0.00秒 4.00千字节/秒。
mget test01/test01.txt? y
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 收到 6 字节，用时 0.00秒 6000.00千字节/秒。
mget test01/test02.txt? n
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看本地 <code>D:\\ftp\\test</code> 目录，<code>file.txt</code> 和 <code>test01.txt</code> 文件已存在：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>D:\\ftp&gt;dir /b test\\
file.txt
hello01.txt
test.txt
test01.txt

D:\\ftp&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="put-或-send" tabindex="-1"><a class="header-anchor" href="#put-或-send" aria-hidden="true">#</a> put 或 send</h3><p>使用当前文件传输类型将本地工作目录中指定文件复制到 FTP 远程服务器指定工作目录中。</p><ul><li>一次只能复制一个远程文件</li><li>如果指定远程工作目录，则必须指定文件名；如果未指定远程工作目录，则默认复制到当前远程工作目录中</li><li>远程文件名可以和本地文件名不同</li><li>可以提前切换到本地工作目录中，这样可以不用指定本地工作目录的绝对路径，直接指定文件名即可</li><li>如果要复制到当前远程工作目录且文件名不变，则可以省略文件名（如：<code>put dirlist.txt dirlist.txt</code> 可以简写为 <code>put dirlist.txt</code>）</li></ul><p>例如：将本地 <code>D:\\ftp\\dirlist.txt</code> 文件复制到远程服务器根目录中，并指定文件名为 <code>dirlist01.txt</code>。</p><p>查看远程服务器根目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; pwd
257 &quot;/&quot; is current directory.
ftp&gt; 
ftp&gt; dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  04:46PM                    4 file.txt
07-18-24  07:39PM                   11 hello.txt
07-19-24  04:56PM       &lt;DIR&gt;          test01
07-19-24  05:34PM       &lt;DIR&gt;          test02
226 Transfer complete.
ftp: 收到 196 字节，用时 0.01秒 39.20千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将本地 <code>D:\\ftp</code> 工作目录下的 <code>dirlist.txt</code> 文件复制到远程服务器根目录中，并指定文件名为 <code>dirlist01.txt</code>：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; lcd D:\\ftp
目前的本地目录 D:\\ftp。
ftp&gt; 
ftp&gt; put dirlist.txt dirlist01.txt
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 发送 146 字节，用时 0.00秒 146000.00千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看远程服务器根目录，<code>dirlist01.txt</code> 文件已存在：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; pwd
257 &quot;/&quot; is current directory.
ftp&gt; 
ftp&gt; dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  06:07PM                  146 dirlist01.txt
07-19-24  04:46PM                    4 file.txt
07-18-24  07:39PM                   11 hello.txt
07-19-24  04:56PM       &lt;DIR&gt;          test01
07-19-24  05:34PM       &lt;DIR&gt;          test02
226 Transfer complete.
ftp: 收到 250 字节，用时 0.01秒 41.67千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果使用 <code>put</code> 或 <code>send</code> 命令只指定远程服务器工作目录路径不指定文件名，则会报以下错误：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; put D:\\ftp\\dirlist.txt ./
200 PORT command successful.
550-Access is denied.
 Win32 error:   Access is denied.
 Error details: Write access for the root of the virtual directory is forbidden.
550 End
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="mput" tabindex="-1"><a class="header-anchor" href="#mput" aria-hidden="true">#</a> mput</h3><p>使用当前文件传输类型将本地工作目录中指定文件复制到 FTP 远程服务器指定工作目录中。</p><ul><li>可以一次复制一个或多个文件</li><li>不能指定远程服务器工作目录，需要提前切换到要复制的远程服务器工作目录中。默认复制到当前的本地工作目录</li><li>不能修改远程文件名</li><li>不能指定本地工作目录（如：<code>mput test/</code>）</li><li>可以指定远程工作目录下的某一个文件（如：<code>mput test/test.txt</code>）</li></ul><p>例如：将本地 <code>D:\\ftp</code> 工作目录下的 <code>dirlist.txt</code> 文件和 <code>test</code> 工作目录下的 <code>test.txt</code> 文件复制到远程服务器 <code>test01</code> 工作目录中。</p><p>查看远程服务器 <code>test01</code> 工作目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; dir test01
200 PORT command successful.
150 Opening ASCII mode data connection.
07-19-24  04:46PM                    6 test01.txt
07-19-24  04:47PM                    6 test02.txt
226 Transfer complete.
ftp: 收到 105 字节，用时 0.01秒 13.13千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换到远程服务器 <code>test01</code> 工作目录中：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; cd test01
250 CWD command successful.
ftp&gt; 
ftp&gt; pwd
257 &quot;/test01&quot; is current directory.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将本地 <code>D:\\ftp</code> 工作目录下的 <code>dirlist.txt</code> 文件和 <code>test</code> 目录下的 <code>test.txt</code> 文件复制到远程服务器 <code>test01</code> 工作目录中：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; lcd D:\\ftp
目前的本地目录 D:\\ftp。
ftp&gt; 
ftp&gt; mput dirlist.txt test\\test.txt
mput dirlist.txt? y
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 发送 146 字节，用时 0.00秒 146.00千字节/秒。
mput test\\test.txt? y
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 发送 4 字节，用时 0.00秒 4000.00千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看远程服务器 <code>test01</code> 工作目录，<code>dirlist.txt</code> 和 <code>test.txt</code> 文件已存在：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; pwd
257 &quot;/test01&quot; is current directory.
ftp&gt; 
ftp&gt; dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  06:33PM                  146 dirlist.txt
07-19-24  06:33PM                    4 test.txt
07-19-24  04:46PM                    6 test01.txt
07-19-24  04:47PM                    6 test02.txt
226 Transfer complete.
ftp: 收到 206 字节，用时 0.00秒 51.50千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prompt" tabindex="-1"><a class="header-anchor" href="#prompt" aria-hidden="true">#</a> prompt</h3><p>打开和关闭 “提示” 模式。默认情况下，“提示” 模式处于打开状态。如果打开 “提示” 模式，<code>ftp</code> 命令会在传输多个文件期间提示，允许您有选择性地检索或存储文件。</p><p>“提示” 模式处于关闭状态时，可以使用 <a href="#mget">mget</a> 和 <a href="#mput">mput</a> 命令传输所有文件。</p><p>例如：关闭 “提示” 模式，将本地 <code>D:\\ftp</code> 工作目录下的 <code>dirlist.txt</code> 和 <code>lslist.txt</code> 文件复制到远程服务器 <code>test02</code> 工作目录中。</p><p>查看远程服务器 <code>test02</code> 工作目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; pwd
257 &quot;/test01&quot; is current directory.
ftp&gt; 
ftp&gt; cd /
250 CWD command successful.
ftp&gt; 
ftp&gt; dir test02
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换到远程服务器 <code>test02</code> 工作目录中：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; cd test02
250 CWD command successful.
ftp&gt; 
ftp&gt; pwd
257 &quot;/test02&quot; is current directory.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭 “提示” 模式：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; prompt
交互模式 关 。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将本地 <code>D:\\ftp</code> 工作目录下的 <code>dirlist.txt</code> 和 <code>lslist.txt</code> 文件复制到远程服务器 <code>test02</code> 工作目录中：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; lcd D:\\ftp
目前的本地目录 D:\\ftp。
ftp&gt; 
ftp&gt; mput dirlist.txt lslist.txt
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 发送 146 字节，用时 0.00秒 146000.00千字节/秒。
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 发送 35 字节，用时 0.00秒 35000.00千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看远程服务器 <code>test02</code> 工作目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; pwd
257 &quot;/test02&quot; is current directory.
ftp&gt; 
ftp&gt; dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  06:44PM                  146 dirlist.txt
07-19-24  06:44PM                   35 lslist.txt
226 Transfer complete.
ftp: 收到 106 字节，用时 0.00秒 35.33千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：打开 “提示” 模式。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; prompt
交互模式 开 。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="append" tabindex="-1"><a class="header-anchor" href="#append" aria-hidden="true">#</a> append</h3><p>将本地文件内容追加到 FTP 远程服务器指定文件中。</p><p>例如：将本地 <code>D:\\ftp\\test</code> 目录下的 <code>test.txt</code> 文件内容，追加到远程服务器根目录下的 <code>hello.txt</code> 文件中。</p><p>查看本地 <code>D:\\ftp\\test</code> 目录下的 <code>test.txt</code> 文件内容：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>D:\\ftp&gt;type test\\test.txt
test
D:\\ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看远程服务器根目录下的 <code>hello.txt</code> 文件内容：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;type hello.txt
hello world
E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将本地 <code>D:\\ftp\\test</code> 目录下的 <code>test.txt</code> 文件内容，追加到远程服务器根目录下的 <code>hello.txt</code> 文件中：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; cd /
250 CWD command successful.
ftp&gt; 
ftp&gt; pwd
257 &quot;/&quot; is current directory.
ftp&gt; 
ftp&gt; lcd D:\\ftp\\test
目前的本地目录 D:\\ftp\\test。
ftp&gt; 
ftp&gt; append test.txt hello.txt
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 发送 4 字节，用时 0.00秒 4.00千字节/秒。
ftp&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或使用以下方式：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; append
本地文件 D:\\ftp\\test\\test.txt
远程文件 hello.txt
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp: 发送 4 字节，用时 0.00秒 4.00千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看远程服务器根目录下的 <code>hello.txt</code> 文件内容，<code>test.txt</code> 文件内容已追加到文件末尾：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\test&gt;type hello.txt
hello worldtest
E:\\test&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rename" tabindex="-1"><a class="header-anchor" href="#rename" aria-hidden="true">#</a> rename</h3><p>重命名 FTP 远程服务器指定文件。</p><p>例如：将远程服务器根目录下的 <code>file.txt</code> 文件重命名为 <code>file01.txt</code>。</p><p>查看远程服务器根目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; pwd
257 &quot;/&quot; is current directory.
ftp&gt;
ftp&gt; dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  06:07PM                  146 dirlist01.txt
07-19-24  04:46PM                    4 file.txt
07-19-24  06:55PM                   15 hello.txt
07-19-24  06:33PM       &lt;DIR&gt;          test01
07-19-24  06:44PM       &lt;DIR&gt;          test02
226 Transfer complete.
ftp: 收到 250 字节，用时 0.01秒 35.71千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将远程服务器根目录下的 <code>file.txt</code> 文件重命名为 <code>file01.txt</code>：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; rename file.txt file01.txt
350 Requested file action pending further information.
250 RNTO command successful.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看远程服务器根目录，<code>file.txt</code> 文件已重命名为 <code>file01.txt</code>：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; pwd
257 &quot;/&quot; is current directory.
ftp&gt;
ftp&gt; dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  06:07PM                  146 dirlist01.txt
07-19-24  04:46PM                    4 file01.txt
07-19-24  06:55PM                   15 hello.txt
07-19-24  06:33PM       &lt;DIR&gt;          test01
07-19-24  06:44PM       &lt;DIR&gt;          test02
226 Transfer complete.
ftp: 收到 252 字节，用时 0.01秒 36.00千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> delete</h3><p>删除 FTP 远程服务器中的指定文件。</p><ul><li>一次只能删除一个文件</li><li>如果删除多个文件（如：<code>delete a b c</code>），只会删除第一个文件（<code>a</code>），其它文件（<code>b 和 c</code>）不会删除</li></ul><p>例如：删除远程服务器 <code>test02</code> 工作目录下的 <code>dirlist.txt</code> 文件。</p><p>查看远程服务器 <code>test02</code> 工作目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; dir test02
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  06:44PM                  146 dirlist.txt
07-19-24  06:44PM                   35 lslist.txt
226 Transfer complete.
ftp: 收到 106 字节，用时 0.00秒 35.33千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除远程服务器 <code>test02</code> 工作目录下的 <code>dirlist.txt</code> 文件：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; delete test02/dirlist.txt
250 DELE command successful.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看远程服务器 <code>test02</code> 工作目录，<code>dirlist.txt</code> 文件已删除：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; dir test02
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  06:44PM                   35 lslist.txt
226 Transfer complete.
ftp: 收到 54 字节，用时 0.00秒 54.00千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mdelete" tabindex="-1"><a class="header-anchor" href="#mdelete" aria-hidden="true">#</a> mdelete</h3><p>删除 FTP 远程服务器中的指定文件。</p><ul><li>可以一次删除多个文件</li><li>可以指定远程工作目录（如：<code>mdelete test01/</code>），指定远程工作目录时，可以对目录中的文件依次选择是否要删除</li><li>不能指定远程工作目录下的某一个文件（如：<code>mdelete test01/dirlist.txt</code>）</li></ul><p>例如：删除远程服务器 <code>test01</code> 工作目录下的 <code>dirlist.txt</code> 和 <code>test.txt</code> 文件和 <code>test02</code> 工作目录下的 <code>lslist.txt</code> 文件。</p><p>查看远程 <code>test01</code> 和 <code>test02</code> 工作目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; mdir test01/ test02/ -
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  06:33PM                  146 dirlist.txt
07-19-24  06:33PM                    4 test.txt
07-19-24  04:46PM                    6 test01.txt
07-19-24  04:47PM                    6 test02.txt
226 Transfer complete.
ftp: 收到 206 字节，用时 0.01秒 34.33千字节/秒。
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  06:44PM                   35 lslist.txt
226 Transfer complete.
ftp: 收到 54 字节，用时 0.00秒 27.00千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除远程服务器 <code>test01</code> 工作目录下的 <code>dirlist.txt</code> 和 <code>test.txt</code> 文件和 <code>test02</code> 工作目录下的 <code>lslist.txt</code> 文件：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; mdelete test01/ test02/
200 Type set to A.
mdelete test01/dirlist.txt? y
250 DELE command successful.
mdelete test01/test.txt? y
250 DELE command successful.
mdelete test01/test01.txt? n
mdelete test01/test02.txt? n
mdelete test02/lslist.txt? y
250 DELE command successful.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看远程 <code>test01</code> 和 <code>test02</code> 工作目录，文件都已删除：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; mdir test01/ test02/ -
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  04:46PM                    6 test01.txt
07-19-24  04:47PM                    6 test02.txt
226 Transfer complete.
ftp: 收到 105 字节，用时 0.00秒 26.25千字节/秒。
200 PORT command successful.
125 Data connection already open; Transfer starting.
226 Transfer complete.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rmdir" tabindex="-1"><a class="header-anchor" href="#rmdir" aria-hidden="true">#</a> rmdir</h3><p>删除 FTP 远程服务器中指定工作目录，只能删除空工作目录。</p><p>例如：删除远程服务器根目录下的 <code>test02</code> 空工作目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; rmdir test02
250 XRMD command successful.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看远程服务器根目录：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  06:07PM                  146 dirlist01.txt
07-19-24  04:46PM                    4 file01.txt
07-19-24  06:55PM                   15 hello.txt
07-19-24  07:28PM       &lt;DIR&gt;          test01
226 Transfer complete.
ftp: 收到 205 字节，用时 0.00秒 51.25千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果使用 <code>rmdir</code> 命令删除的不是远程空目录，则会报以下错误：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; rmdir test01
550-The directory is not empty.
 Win32 error:   The directory is not empty.
 Error details: File system returned an error.
550 End
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="close" tabindex="-1"><a class="header-anchor" href="#close" aria-hidden="true">#</a> close</h3><p>结束与 FTP 远程服务器的会话并保持在 <code>ftp&gt;</code> 提示符处。</p><p>例如：结束与远程服务器的 ftp 会话并保持在 <code>ftp&gt;</code> 提示符处。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; close
221 Goodbye.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="disconnect" tabindex="-1"><a class="header-anchor" href="#disconnect" aria-hidden="true">#</a> disconnect</h3><p>断开与 FTP 远程服务器的连接并留在 <code>ftp&gt;</code> 提示符处。</p><p>例如：断开与远程服务器的连接，并留在 <code>ftp&gt;</code> 提示符。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; close
221 Goodbye.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bye-或-quit" tabindex="-1"><a class="header-anchor" href="#bye-或-quit" aria-hidden="true">#</a> bye 或 quit</h3><p>结束 FTP 远程服务器上的会话，然后退出 FTP 子环境。</p><p>例如：使用 <code>bye</code> 命令退出 FTP 会话。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; bye
221 Goodbye.

E:\\ftp&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> debug</h3><p>切换调试模式。默认情况下，调试模式处于关闭状态。如果 “调试模式” 处于打开状态，您将看到每个命令都发送到远程服务器，前面带 <code>&gt;</code> 字符。</p><p>例如：开启调试模式时，显示当前远程服务器工作目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; debug
调试 开 。
ftp&gt; 
ftp&gt; pwd
---&gt; XPWD
257 &quot;/&quot; is current directory.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：关闭调试模式时，显示当前远程服务器工作目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; debug
调试 关 。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示当前远程服务器工作目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; pwd
---&gt; XPWD
257 &quot;/&quot; is current directory.
ftp&gt; 
ftp&gt; pwd
257 &quot;/&quot; is current directory.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="verbose" tabindex="-1"><a class="header-anchor" href="#verbose" aria-hidden="true">#</a> verbose</h3><p>切换详细模式。默认情况下，详细模式处于打开状态。启用详细模式时，将显示所有 <code>ftp</code> 命令响应。当文件传输完成时，还会显示有关传输效率的统计信息。</p><p>例如：关闭详细模式时，显示远程服务器根目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; verbose
详细模式 关 。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：开启详细模式时，显示远程服务器根目录。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; verbose
详细模式 开 。
ftp&gt; 
ftp&gt; dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  06:07PM                  146 dirlist01.txt
07-19-24  04:46PM                    4 file01.txt
07-19-24  06:55PM                   15 hello.txt
07-19-24  07:28PM       &lt;DIR&gt;          test01
226 Transfer complete.
ftp: 收到 205 字节，用时 0.00秒 51.25千字节/秒。
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="remotehelp" tabindex="-1"><a class="header-anchor" href="#remotehelp" aria-hidden="true">#</a> remotehelp</h3><p>显示远程命令列表及帮助信息。</p><ul><li>只能对以下远程命令列表中的命令提供帮助</li><li>远程命令列表中的命令不能写错</li></ul><p>例如：显示所有远程命令的列表。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; remotehelp
214-The following commands are recognized (* ==&gt;&#39;s unimplemented).
    ABOR
    ACCT
    ADAT *
    ALLO
    APPE
    AUTH
    CCC
    CDUP
    CWD
    DELE
    ENC *
    EPRT
    EPSV
    FEAT
    HELP
    HOST
    LANG
    LIST
    MDTM
    MIC *
    MKD
    MODE
    NLST
    NOOP
    OPTS
    PASS
    PASV
    PBSZ
    PORT
    PROT
    PWD
    QUIT
    REIN
    REST
    RETR
    RMD
    RNFR
    RNTO
    SITE
    SIZE
    SMNT
    STAT
    STOR
    STOU
    STRU
    SYST
    TYPE
    USER
    XCUP
    XCWD
    XMKD
    XPWD
    XRMD
214 HELP command successful.
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：显示 <code>DELE</code> 命令帮助。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; remotehelp dele
214 Syntax: dele &lt;sp&gt; file-name - (delete file)
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="help" tabindex="-1"><a class="header-anchor" href="#help" aria-hidden="true">#</a> help</h3><p>显示 <code>ftp</code> 命令列表及帮助信息。</p><p>例如：显示所有 <code>ftp</code> 命令的列表。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; help
命令可能是缩写的。  命令为:

!               delete          literal         prompt          send
?               debug           ls              put             status
append          dir             mdelete         pwd             trace
ascii           disconnect      mdir            quit            type
bell            get             mget            quote           user
binary          glob            mkdir           recv            verbose
bye             hash            mls             remotehelp
cd              help            mput            rename
close           lcd             open            rmdir
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：显示 <code>delete</code> 命令帮助。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>ftp&gt; help delete
delete          删除远程文件
ftp&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-ftp-命令文本文件" tabindex="-1"><a class="header-anchor" href="#使用-ftp-命令文本文件" aria-hidden="true">#</a> 使用 ftp 命令文本文件</h3><p>指定包含 <code>ftp</code> 命令的文本文件。这些命令在 <code>ftp</code> 启动后自动运行。此参数不允许使用空格。请使用此参数，而不要使用重定向（<code>&lt;</code>）。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在 Windows 8 和 Windows Server 2012 或更高版本的操作系统中，文本文件必须以 UTF-8 格式编写。</p></div><p>例如：查看远程服务器根目录详细列表。</p><p>创建 <code>FtpDirList.txt</code> 文件，并写入以下内容：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>open 192.168.10.10
user username password
dir
bye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>ftp</code> 命令执行此文件：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\ftp&gt;ftp -n -s:FtpDirList.txt
ftp&gt; open 192.168.10.10
连接到 192.168.10.10。
220 Microsoft FTP Service
200 OPTS UTF8 command successful - UTF8 encoding now ON.
ftp&gt; user user abcd.1234
331 Password required
230 User logged in.
ftp&gt; dir
200 PORT command successful.
125 Data connection already open; Transfer starting.
07-19-24  06:07PM                  146 dirlist01.txt
07-19-24  04:46PM                    4 file01.txt
07-19-24  06:55PM                   15 hello.txt
07-19-24  07:28PM       &lt;DIR&gt;          test01
226 Transfer complete.
ftp: 收到 205 字节，用时 0.00秒 51.25千字节/秒。
ftp&gt; bye
221 Goodbye.

E:\\ftp&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,254),t=[l];function a(c,r){return d(),i("div",null,t)}const u=e(s,[["render",a],["__file","ftp.html.vue"]]);export{u as default};
