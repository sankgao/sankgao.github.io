import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as i,f as c}from"./app-83XRFzu1.js";const n={},a=c(`<p>批处理（<code>Batch</code>），也称为 <strong>批处理脚本</strong>。顾名思义，批处理就是对某对象进行批量的处理，通常被认为是一种简化的脚本语言，它应用于 DOS 和 Windows 系统中。批处理文件的扩展名为 <code>.bat</code>（或 <code>.cmd</code>）。</p><p>比较常见的批处理包含两类：DOS 批处理和 PS 批处理。</p><ul><li>DOS 批处理是基于 DOS 命令的，用来自动地批量地执行 DOS 命令以实现特定操作的脚本</li><li>PS 批处理是基于微软强大的 PowerShell 的，用来批量处理一些任务的脚本</li></ul><p>更复杂的情况，需要使用 <code>if</code>、<code>for</code>、<code>goto</code> 等命令控制程式的运行过程，如同 <code>C</code>、<code>Basic</code> 等高级语言一样。如果需要实现更复杂的应用，利用外部程式是必要的，这包括系统本身提供的外部命令和第三方提供的工具或者软件。批处理程序虽然是在命令行环境中运行，但不仅仅能使用命令行软件，任何当前系统下可运行的程序都可以放在批处理文件中运行。</p><h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h2><h3 id="echo-和" tabindex="-1"><a class="header-anchor" href="#echo-和" aria-hidden="true">#</a> echo 和 @</h3><ul><li><p><strong>echo</strong>：用于显示消息或者打开或关闭命令回显功能</p><ul><li>如果不结合任何参数使用，<code>echo</code> 会显示当前回显设置</li><li>命令回显功能默认已打开</li><li><code>echo.</code> 命令用于显示空白行</li></ul></li><li><p><strong>@</strong>：用于关闭本行命令的回显</p><ul><li>无论此时当前 <code>echo</code> 命令回显功能是否打开，都将关闭本行命令的回显</li><li><code>@echo off</code> 命令用于关闭 <code>echo off</code> 命令的回显</li></ul></li></ul><p>例如：创建一个 <code>echo.cmd</code> 脚本，显示当前回显状态及输出指定文本。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>echo
echo &quot;Hello, World! 01&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>echo.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;echo
ECHO 处于打开状态。

E:\\batch&gt;echo &quot;Hello, World! 01&quot;
&quot;Hello, World! 01&quot;

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：创建一个 <code>echo.cmd</code> 脚本，显示空白行。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>echo.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行 <code>echo.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;echo.cmd

E:\\batch&gt;echo.


E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：创建一个 <code>echo.cmd</code> 脚本，使用 <code>@</code> 符号，关闭本行命令的回显。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>echo &quot;Hello, World! 02&quot;
@echo &quot;Hello, World! 03&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>echo.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;echo.cmd

E:\\batch&gt;echo &quot;Hello, World! 02&quot;
&quot;Hello, World! 02&quot;
&quot;Hello, World! 03&quot;

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：创建一个 <code>echo.cmd</code> 脚本，使用 <code>echo off</code> 关闭下面命令回显功能，但 <code>echo off</code> 命令的回显依然显示。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>echo off
echo &quot;Hello, World! 04&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>echo.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;echo.cmd

E:\\batch&gt;echo off
&quot;Hello, World! 04&quot;

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：创建一个 <code>echo.cmd</code> 脚本，使用 <code>@</code> 符号，将 <code>echo off</code> 的命令回显也关闭。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
echo &quot;Hello, World! 05&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>echo.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;echo.cmd
&quot;Hello, World! 05&quot;

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rem-和" tabindex="-1"><a class="header-anchor" href="#rem-和" aria-hidden="true">#</a> rem 和 ::</h3><ul><li><p><strong>rem</strong>：用于注释文本，注释语句不会被执行</p><ul><li>当命令回显功能关闭（<code>echo off</code>）时，使用 <code>rem</code> 命令不会显示注释内容</li><li>当命令回显功能打开（<code>echo on</code>）时，使用 <code>rem</code> 命令依然会显示注释内容</li><li>在 <code>rem</code> 命令前添加 <code>@</code> 字符，即使命令回显功能打开，也不会显示 <code>rem</code> 注释内容</li><li>不可以在 <code>rem</code> 中使用重定向（<code>&lt;</code>、<code>&gt;</code>）或管道（<code>|</code>）字符</li><li>使用 <code>@rem</code> 命令，不管回显是否打开（<code>echo on</code>），都不会显示注释内容</li></ul></li><li><p><strong>::</strong>：用于注释文本，注释语句不会被执行</p><ul><li>不管回显是否打开（<code>echo on</code>），使用 <code>::</code> 命令都不会显示注释内容，因为命令解释器不认为它是一个有效的命令行</li><li>可以在 <code>::</code> 中使用重定向（<code>&lt;</code>、<code>&gt;</code>）或管道（<code>|</code>）字符</li></ul></li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>::</code> 可以起到注释作用是因为，任何以冒号（<code>:</code>）开头的字符行，在批处理中都被视作 <strong>标号</strong>，而直接忽略其后的所有内容。</p><ul><li><strong>有效标号</strong>：冒号后紧跟一个以字母数字开头的字符串，goto 语句可以识别</li><li><strong>无效标号</strong>：冒号后紧跟一个非字母数字的一个特殊符号，goto 无法识别的标号，可以起到注释作用，所以 <code>::</code> 常被用作注释符号，其实 <code>:+</code> 也可起注释作用</li></ul></div><p>例如：创建一个 <code>rem.cmd</code> 脚本，分别使用 <code>rem</code> 和 <code>::</code> 命令在回显功能打开或关闭时进行注释。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>echo on
echo
:: 示例 1：命令回显功能打开时，不会显示 :: 注释内容
rem 示例 2：命令回显功能打开时，会显示 rem 注释内容
@rem 示例 3：在 rem 命令前添加 @ 字符，计算命令回显功能打开，也不会显示 rem 注释内容

echo off
echo
:: 示例 3：命令回显功能关闭时，不会显示 :: 注释内容
rem 示例 4：命令回显功能关闭时，不会显示 rem 注释内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>rem.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;rem.cmd

E:\\batch&gt;echo on

E:\\batch&gt;echo
ECHO is on.

E:\\batch&gt;rem 示例 2：命令回显功能打开时，会显示 rem 注释内容

E:\\batch&gt;echo off
ECHO is off.

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果当前 CMD 的代码页编码为 <code>936</code>（简体中文）这是默认值，执行由 UTF-8 编写的中文文本时，会出现乱码，如下所示：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;chcp
活动代码页: 936

E:\\batch&gt;rem.cmd

E:\\batch&gt;echo on

E:\\batch&gt;echo
ECHO 处于打开状态。

E:\\batch&gt;rem 绀轰緥 2锛氬懡浠ゅ洖鏄惧姛鑳芥墦寮€鏃讹紝浼氭樉绀?rem 娉ㄩ噴鍐呭

E:\\batch&gt;echo off
ECHO 处于关闭状态。

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将代码页编码设置为 <code>65001</code>（UTF-8）即可解决中文乱码：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>chcp 65001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><p>例如：创建一个 <code>rem.cmd</code> 脚本，使用 <code>rem</code> 命令进行多行注释。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>rem 方法 1：使用 rem/||() 命令
@rem/||(
    这是一行注释
    这是另一行注释
)

rem 方法 2：使用双引号 &quot;&quot; 将内容引起来
@rem &quot;这是一行注释&quot;
@rem &quot;这是另一行注释&quot;

rem 方法 3：使用小括号 () 将内容引起来
@rem (这是一行注释)
@rem (这是另一行注释)

rem 方法 4：使用 rem 命令将内容隔开
@rem 这是一行注释
@rem
@rem 这是另一行注释

rem &quot;:: 命令除了 rem 方法 1 不能使用，其它使用方法和 rem 一样&quot;
:: &quot;这是一行注释&quot;
:: &quot;这是另一行注释&quot;

:: (这是一行注释)
:: (这是另一行注释)

:: 这是一行注释
:: 
:: 这是另一行注释
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>rem.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;test.cmd

E:\\batch&gt;rem 方法 1：使用 rem/||() 将多行注释写到 () 括号中

E:\\batch&gt;rem 方法 2：使用双引号 &quot;&quot; 将内容引起来

E:\\batch&gt;rem 方法 3：使用小括号 () 将内容引起来

E:\\batch&gt;rem 方法 4：使用 rem 命令将内容隔开

E:\\batch&gt;rem &quot;:: 命令除了 rem 方法 1 不能使用，其它使用方法和 rem 一样&quot;
E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pause" tabindex="-1"><a class="header-anchor" href="#pause" aria-hidden="true">#</a> pause</h3><p><code>pause</code> 用于指定在某一位置暂停批处理程序的处理，显示 <code>Press any key to continue . . .</code>（或：请按任意键继续. . .）提示内容。</p><p>在双击执行 <code>bat</code> 或 <code>cmd</code> 脚本的时候，如果脚本中没有 <code>pause</code> 命令，执行脚本时桌面会出现一闪而过的 CMD 控制台窗口，不知道执行的是什么就结束了；如果脚本中有 <code>pause</code> 命令，执行脚本在结束时将停留在 CMD 控制台窗口中，并提示 <code>Press any key to continue . . .</code>，也可以更改提示内容。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><ul><li>代码页编码为 <code>936</code>（简体中文）时，<code>pause</code> 命令显示的提示内容为 <code>请按任意键继续. . .</code></li><li>代码页编码为 <code>65001</code>（UTF-8）时，<code>pause</code> 命令显示的提示内容为 <code>Press any key to continue . . .</code></li></ul></div><p>例如：创建一个 <code>pause.cmd</code> 脚本，使用 <code>pause</code> 命令使批处理程序在执行完 <code>echo &quot;Hello, World!</code> 命令后暂停。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
echo &quot;Hello, World!&quot;
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>pause.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;pause.cmd
&quot;Hello, World!&quot;
Press any key to continue . . . 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：创建一个 <code>pause.cmd</code> 脚本，使用 <code>pause</code> 命令使批处理程序在执行完 <code>echo &quot;Hello, World!</code> 命令后暂停，但不显示提示内容。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
echo &quot;Hello, World!&quot;
pause &gt; null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>pause.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;pause.cmd
&quot;Hello, World!&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：创建一个 <code>pause.cmd</code> 脚本，使用 <code>pause</code> 命令使批处理程序在执行完 <code>echo &quot;Hello, World!</code> 命令后暂停，并修改提示内容为 <code>按任意键继续或退出此脚本. . .</code>。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
echo &quot;Hello, World!&quot;
echo 按任意键继续或退出此脚本. . . &amp; pause &gt; nul
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>pause.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;pause.cmd
&quot;Hello, World!&quot;
按任意键继续或退出此脚本. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> call</h3><p><code>call</code> 用于从另一个批处理程序调用一个批处理程序，而不停止父批处理程序。<code>call</code> 命令接受标签作为调用的目标。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在脚本或批处理文件外部使用 call 时，它在命令提示符下不起作用。</p></div><p><strong>批处理参数：</strong></p><ul><li>下表列出了批处理脚本自变量引用（<code>%0</code>、<code>%1</code>、... <code>%9</code>）</li><li><code>%0</code> 表示批处理命令本身，其它参数字符串用 <code>%1</code> 到 <code>%9</code> 顺序表示</li><li>在批处理脚本中使用 <code>%*</code> 值会引用所有自变量（例如：<code>%0</code>、<code>%1</code>、... <code>%9</code>）</li><li>可以使用以下可选语法作为批处理参数的替换（<code>%n</code>）</li></ul><table><thead><tr><th style="text-align:center;">批处理参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>%~1</code></td><td style="text-align:left;">展开 <code>%1</code> 并删除周围的引号</td></tr><tr><td style="text-align:center;"><code>%~f1</code></td><td style="text-align:left;">将 <code>%1</code> 扩展为完全限定路径</td></tr><tr><td style="text-align:center;"><code>%~d1</code></td><td style="text-align:left;">仅将 <code>%1</code> 扩展为驱动器号</td></tr><tr><td style="text-align:center;"><code>%~p1</code></td><td style="text-align:left;">仅将 <code>%1</code> 扩展为路径</td></tr><tr><td style="text-align:center;"><code>%~n1</code></td><td style="text-align:left;">仅将 <code>%1</code> 扩展为文件名</td></tr><tr><td style="text-align:center;"><code>%~x1</code></td><td style="text-align:left;">仅将 <code>%1</code> 扩展为文件扩展名</td></tr><tr><td style="text-align:center;"><code>%~s1</code></td><td style="text-align:left;">将 <code>%1</code> 扩展为仅包含短名称的完全限定路径</td></tr><tr><td style="text-align:center;"><code>%~a1</code></td><td style="text-align:left;">将 <code>%1</code> 扩展为文件属性</td></tr><tr><td style="text-align:center;"><code>%~t1</code></td><td style="text-align:left;">将 <code>%1</code> 扩展为文件的日期和时间</td></tr><tr><td style="text-align:center;"><code>%~z1</code></td><td style="text-align:left;">将 <code>%1</code> 扩展为文件的大小</td></tr><tr><td style="text-align:center;"><code>%~$PATH:1</code></td><td style="text-align:left;">搜索 PATH 环境变量中列出的目录，然后将 <code>%1</code> 扩展为找到的第一个目录的完全限定名称。如果未定义环境变量名称或搜索找不到该文件，则此修饰符将扩展为空字符串</td></tr></tbody></table><p>下表显示了如何将修饰符与复合结果的批处理参数组合在一起：</p><table><thead><tr><th style="text-align:center;">带修饰符的批处理参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>%~dp1</code></td><td style="text-align:left;">仅将 <code>%1</code> 扩展为驱动器号和路径</td></tr><tr><td style="text-align:center;"><code>%~nx1</code></td><td style="text-align:left;">仅将 <code>%1</code> 扩展为文件名和扩展名</td></tr><tr><td style="text-align:center;"><code>%~dp$PATH:1</code></td><td style="text-align:left;">在 PATH 环境变量中列出的目录中搜索 <code>%1</code>，然后扩展为找到的第一个目录的驱动器号和路径</td></tr><tr><td style="text-align:center;"><code>%~ftza1</code></td><td style="text-align:left;">展开 <code>%1</code> 以显示类似于 <code>dir</code> 命令的输出</td></tr></tbody></table><p>在上述示例中，<code>%1</code> 和 <code>PATH</code> 可被替换为其他有效值。语法 <code>%~</code> 由有效的自变量编号终止。修饰符 <code>%~</code> 不能与 <code>%*</code> 一起使用。</p><p>例如：创建一个 <code>call.cmd</code> 脚本，使用 <code>call</code> 命令执行脚本，并添加两个参数。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
echo 脚本名为：%0
echo 第一个参数为：%1
echo 第二个参数为：%2

echo &quot;脚本名为：%0，第一个参数为：%1，第二个参数为：%2&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>call</code> 命令执行 <code>call.cmd</code> 脚本，并添加两个参数：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;call call.cmd &quot;Hello&quot; &quot;World&quot;
脚本名为：call.cmd
第一个参数为：&quot;Hello&quot;
第二个参数为：&quot;World&quot;
&quot;脚本名为：call.cmd，第一个参数为：&quot;Hello&quot;，第二个参数为：&quot;World&quot;&quot;

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> start</h3><p><code>start</code> 用于在单独 CMD 控制台窗口中运行指定的程序或命令。批处理中调用外部程序命令（该外部程序在新的窗口中运行，批处理程序继续往下执行，不理会外部程序执行的情况），如果直接运行外部程序则必须等待外部程序完成后才可以继续执行剩余的指令。</p><p>例如：创建一个 <code>start.cmd</code> 脚本，启动单独的命令提示符窗口以运行指定的程序或命令。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
echo &quot;在新 CMD 控制台窗口中查看 D:\\ 盘目录&quot;
start dir D:\\

echo &quot;运行计算器程序，等程序启动后再执行下面的命令. . .&quot;
start /wait calc.exe

echo &quot;程序成功启动，执行下面的命令&quot;
echo &quot;Hello, World!&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>start.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;start.cmd
&quot;在新 CMD 控制台窗口中查看 D:\\ 盘目录&quot;
&quot;运行计算器程序，等程序启动后再执行下面的命令. . .&quot;
&quot;程序成功启动，执行下面的命令&quot;
&quot;Hello, World!&quot;

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="goto" tabindex="-1"><a class="header-anchor" href="#goto" aria-hidden="true">#</a> goto</h3><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h3><h3 id="assoc" tabindex="-1"><a class="header-anchor" href="#assoc" aria-hidden="true">#</a> assoc</h3><h2 id="符号" tabindex="-1"><a class="header-anchor" href="#符号" aria-hidden="true">#</a> 符号</h2><h3 id="回显屏蔽" tabindex="-1"><a class="header-anchor" href="#回显屏蔽" aria-hidden="true">#</a> 回显屏蔽 @</h3><h3 id="重定向-1-与" tabindex="-1"><a class="header-anchor" href="#重定向-1-与" aria-hidden="true">#</a> 重定向 1 &gt; 与 &gt;&gt;</h3><h3 id="重定向-2" tabindex="-1"><a class="header-anchor" href="#重定向-2" aria-hidden="true">#</a> 重定向 2 &lt;</h3><h3 id="管道符" tabindex="-1"><a class="header-anchor" href="#管道符" aria-hidden="true">#</a> 管道符 |</h3><h3 id="转义符-和" tabindex="-1"><a class="header-anchor" href="#转义符-和" aria-hidden="true">#</a> 转义符 ^ 和 %</h3><h3 id="逻辑命令" tabindex="-1"><a class="header-anchor" href="#逻辑命令" aria-hidden="true">#</a> 逻辑命令</h3><h2 id="语句结构" tabindex="-1"><a class="header-anchor" href="#语句结构" aria-hidden="true">#</a> 语句结构</h2><h3 id="if-语句" tabindex="-1"><a class="header-anchor" href="#if-语句" aria-hidden="true">#</a> if 语句</h3><h3 id="for-语句" tabindex="-1"><a class="header-anchor" href="#for-语句" aria-hidden="true">#</a> for 语句</h3><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><h3 id="截取字符串" tabindex="-1"><a class="header-anchor" href="#截取字符串" aria-hidden="true">#</a> 截取字符串</h3><h3 id="替换字符串" tabindex="-1"><a class="header-anchor" href="#替换字符串" aria-hidden="true">#</a> 替换字符串</h3><h3 id="字符串合并" tabindex="-1"><a class="header-anchor" href="#字符串合并" aria-hidden="true">#</a> 字符串合并</h3><h3 id="扩充字符串" tabindex="-1"><a class="header-anchor" href="#扩充字符串" aria-hidden="true">#</a> 扩充字符串</h3><h2 id="数值计算" tabindex="-1"><a class="header-anchor" href="#数值计算" aria-hidden="true">#</a> 数值计算</h2><h2 id="批处理" tabindex="-1"><a class="header-anchor" href="#批处理" aria-hidden="true">#</a> 批处理</h2><h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h3><h3 id="用户变量" tabindex="-1"><a class="header-anchor" href="#用户变量" aria-hidden="true">#</a> 用户变量</h3><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><h3 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h3><h3 id="ascii-码" tabindex="-1"><a class="header-anchor" href="#ascii-码" aria-hidden="true">#</a> ASCII 码</h3><h2 id="arcgis-中的批处理" tabindex="-1"><a class="header-anchor" href="#arcgis-中的批处理" aria-hidden="true">#</a> ArcGIS 中的批处理</h2>`,100),l=[a];function s(o,t){return d(),i("div",null,l)}const v=e(n,[["render",s],["__file","batch.html.vue"]]);export{v as default};
