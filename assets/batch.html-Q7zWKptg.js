import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c,f as i}from"./app-bjPi1agL.js";const n={},a=i(`<p>批处理（<code>Batch</code>），也称为 <strong>批处理脚本</strong>。顾名思义，批处理就是对某对象进行批量的处理，通常被认为是一种简化的脚本语言，它应用于 DOS 和 Windows 系统中。批处理文件的扩展名为 <code>.bat</code>（或 <code>.cmd</code>）。</p><p>比较常见的批处理包含两类：DOS 批处理和 PS 批处理。</p><ul><li>DOS 批处理是基于 DOS 命令的，用来自动地批量地执行 DOS 命令以实现特定操作的脚本</li><li>PS 批处理是基于微软强大的 PowerShell 的，用来批量处理一些任务的脚本</li></ul><p>更复杂的情况，需要使用 <code>if</code>、<code>for</code>、<code>goto</code> 等命令控制程式的运行过程，如同 <code>C</code>、<code>Basic</code> 等高级语言一样。如果需要实现更复杂的应用，利用外部程式是必要的，这包括系统本身提供的外部命令和第三方提供的工具或者软件。批处理程序虽然是在命令行环境中运行，但不仅仅能使用命令行软件，任何当前系统下可运行的程序都可以放在批处理文件中运行。</p><h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h2><h3 id="echo-和" tabindex="-1"><a class="header-anchor" href="#echo-和" aria-hidden="true">#</a> echo 和 @</h3><ul><li><p><strong>echo</strong>：用于显示消息或者打开或关闭命令回显功能</p><ul><li>如果不结合任何参数使用，<code>echo</code> 会显示当前回显设置</li><li>命令回显功能默认已打开</li><li><code>echo.</code> 命令用于显示空白行；<code>.</code> 也可以用 <code>,</code>、<code>:</code>、<code>;</code>、<code>/</code>、<code>\\</code>、<code>[</code>、<code>]</code>、<code>+</code> 符号代替</li><li><code>echo</code> 后显示消息如果放在双引号（<code>&quot;</code>）中，输出时双引号也会输出显示</li></ul></li><li><p><strong>@</strong>：用于关闭本行命令的回显</p><ul><li>无论此时当前 <code>echo</code> 命令回显功能是否打开，都将关闭本行命令的回显</li><li><code>@echo off</code> 命令用于关闭 <code>echo off</code> 命令的回显</li></ul></li></ul><p>例如：显示当前回显状态及输出指定文本。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;echo
ECHO is on.

E:\\batch&gt;echo Hello, World!
Hello, World!

E:\\batch&gt;echo &quot;Hello, World! 01&quot;
&quot;Hello, World! 01&quot;

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>命令回显功能打开时：</p><ul><li>代码页编码为 <code>936</code>（简体中文）时，<code>echo</code> 命令显示的提示内容为 <code>ECHO 处于打开状态。</code></li><li>代码页编码为 <code>65001</code>（UTF-8）时，<code>echo</code> 命令显示的提示内容为 <code>ECHO is on.</code></li></ul></div><p>例如：显示空白行。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;echo. 


E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：创建一个 <code>echo.cmd</code> 脚本，使用 <code>@</code> 符号，关闭本行命令的回显。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>echo Hello, World! 02
@echo Hello, World! 03
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>echo.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;echo.cmd

E:\\batch&gt;echo Hello, World! 02
Hello, World! 02
Hello, World! 03

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：创建一个 <code>echo.cmd</code> 脚本，使用 <code>echo off</code> 关闭下面命令回显功能，但 <code>echo off</code> 命令的回显依然显示。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>echo off
echo Hello, World! 04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>echo.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;echo.cmd

E:\\batch&gt;echo off
Hello, World! 04

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：创建一个 <code>echo.cmd</code> 脚本，使用 <code>@</code> 符号，将 <code>echo off</code> 的命令回显也关闭。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
echo Hello, World! 05
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>echo.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;echo.cmd
Hello, World! 05

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rem-和" tabindex="-1"><a class="header-anchor" href="#rem-和" aria-hidden="true">#</a> rem 和 ::</h3><ul><li><p><strong>rem</strong>：用于注释文本，注释语句不会被执行</p><ul><li>当命令回显功能关闭（<code>echo off</code>）时，使用 <code>rem</code> 命令不会显示注释内容</li><li>当命令回显功能打开（<code>echo on</code>）时，使用 <code>rem</code> 命令依然会显示注释内容</li><li>在 <code>rem</code> 命令前添加 <code>@</code> 字符，即使命令回显功能打开，也不会显示 <code>rem</code> 注释内容</li><li>不可以在 <code>rem</code> 中使用重定向（<code>&lt;</code>、<code>&gt;</code>）或管道（<code>|</code>）字符</li><li>使用 <code>@rem</code> 命令，不管回显是否打开（<code>echo on</code>），都不会显示注释内容</li></ul></li><li><p><strong>::</strong>：用于注释文本，注释语句不会被执行</p><ul><li>不管回显是否打开（<code>echo on</code>），使用 <code>::</code> 命令都不会显示注释内容，因为命令解释器不认为它是一个有效的命令行</li><li>可以在 <code>::</code> 中使用重定向（<code>&lt;</code>、<code>&gt;</code>）或管道（<code>|</code>）字符</li></ul></li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>::</code> 可以起到注释作用是因为，任何以冒号（<code>:</code>）开头的字符行，在批处理中都被视作 <strong>标签</strong>，而直接忽略其后的所有内容。</p><ul><li><strong>有效标签</strong>：冒号后紧跟一个以字母数字开头的字符串，<code>goto</code> 语句可以识别</li><li><strong>无效标签</strong>：冒号后紧跟一个非字母数字的一个特殊符号，<code>goto</code> 无法识别的标号，可以起到注释作用，所以 <code>::</code> 常被用作注释符号，其实 <code>:+</code> 也可起注释作用</li></ul></div><p>例如：创建一个 <code>rem.cmd</code> 脚本，分别使用 <code>rem</code> 和 <code>::</code> 命令在回显功能打开或关闭时进行注释。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo on
echo
:: 示例 1：命令回显功能打开时，不会显示 :: 命令后面的注释内容 
rem 示例 2：命令回显功能打开时，会显示 rem 命令后面的注释内容 
@rem 示例 3：在 rem 命令前添加 @ 字符，计算命令回显功能打开，也不会显示 rem 命令后面的注释内容

@echo off
echo
:: 示例 4：命令回显功能关闭时，不会显示 :: 命令后面的注释内容 
rem 示例 5：命令回显功能关闭时，不会显示 rem 命令后面的注释内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>rem.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;rem.cmd

E:\\batch&gt;echo
ECHO is on.

E:\\batch&gt;rem 示例 2：命令回显功能打开时，会显示 rem 命令后面的注释内容
ECHO is off.

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果当前 CMD 的代码页编码为 <code>936</code>（简体中文）这是默认值，执行由 UTF-8 编写的中文文本时，会出现乱码，如下所示：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;chcp
活动代码页: 936

E:\\batch&gt;rem.cmd

E:\\batch&gt;echo
ECHO 处于打开状态。

E:\\batch&gt;rem 绀轰緥 2锛氬懡浠ゅ洖鏄惧姛鑳芥墦寮€鏃讹紝浼氭樉绀?rem 鍛戒护鍚庨潰鐨勬敞閲婂唴瀹?
ECHO 处于关闭状态。

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为 <code>rem.cmd</code> 脚本中的内容由 UTF-8 字符编写（代码页编码为 <code>65001</code>），而 CMD 默认的代码页编码为 <code>936</code>（简体中文），不同代码页编码之间相互解析，所以会出现乱码。将代码页编码设置为同种类型即可解决中文乱码。</p><p>本例将代码页编码设置为 <code>65001</code>（UTF-8）即可解决中文乱码：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>chcp 65001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><p>例如：创建一个 <code>rem.cmd</code> 脚本，使用 <code>rem</code> 或 <code>::</code> 命令进行多行注释。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo on
:: 方法 1：使用 rem/||() 将多行注释写到 () 括号中。 
:: 命令回显功能打开时，需要在 rem/||() 前面添加 @ 符号； 
:: 命令回显功能关闭时，不需要在 rem/||() 前面添加 @ 符号。
@rem/||(
    这是一行注释
    这是另一行注释
)

rem 方法 2：使用多个 rem 命令 
@rem 这是一行注释 
@rem 这是另一行注释

rem 方法 3：使用多个 :: 命令 
:: 这是一行注释 
:: 这是另一行注释
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>rem.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;rem.cmd

E:\\batch&gt;rem 方法 2：使用多个 rem 命令

E:\\batch&gt;rem 方法 3：使用多个 :: 命令
E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pause" tabindex="-1"><a class="header-anchor" href="#pause" aria-hidden="true">#</a> pause</h3><div class="hint-container info"><p class="hint-container-title">相关信息</p><ul><li>代码页编码为 <code>936</code>（简体中文）时，<code>pause</code> 命令显示的提示内容为 <code>请按任意键继续. . .</code></li><li>代码页编码为 <code>65001</code>（UTF-8）时，<code>pause</code> 命令显示的提示内容为 <code>Press any key to continue . . .</code></li></ul></div><p><code>pause</code> 用于指定在某一位置暂停批处理程序的处理，显示 <code>Press any key to continue . . .</code>（或：请按任意键继续. . .）提示内容。</p><p>在双击执行 <code>bat</code> 或 <code>cmd</code> 脚本的时候，如果脚本中没有 <code>pause</code> 命令，执行脚本时桌面会出现一闪而过的【命令提示符】窗口，不知道执行的是什么就结束了；如果脚本中有 <code>pause</code> 命令，执行脚本在结束时将停留在【命令提示符】窗口中，并提示 <code>Press any key to continue . . .</code>，也可以更改提示内容。</p><p>如果用 <kbd>Ctrl</kbd> + <kbd>C</kbd> 键停止批处理程序，则会显示 <code>Terminate batch job (Y/N)?</code>（或：终止批处理操作吗(Y/N)?）提示内容。</p><p>例如：创建一个 <code>pause.cmd</code> 脚本，使用 <code>pause</code> 命令使批处理程序在执行完 <code>echo Hello, World!</code> 命令后暂停。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
echo Hello, World!
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>pause.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;pause.cmd
Hello, World!
Press any key to continue . . . 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：创建一个 <code>pause.cmd</code> 脚本，使用 <code>pause</code> 命令使批处理程序在执行完 <code>echo Hello, World!</code> 命令后暂停，但不显示提示内容。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
echo Hello, World!
pause &gt; nul
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>pause.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;pause.cmd
Hello, World!

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：创建一个 <code>pause.cmd</code> 脚本，使用 <code>pause</code> 命令使批处理程序在执行完 <code>echo Hello, World!</code> 命令后暂停，并修改提示内容为 <code>按任意键继续或退出此脚本. . .</code>。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
echo Hello, World!
echo 按任意键继续或退出此脚本. . . &amp; pause &gt; nul
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>pause.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;pause.cmd
Hello, World!
按任意键继续或退出此脚本. . .

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> call</h3><p><code>call</code> 用于从另一个批处理程序调用一个批处理程序，而不停止父批处理程序。<code>call</code> 命令接受标签作为调用的目标。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在脚本或批处理文件外部使用 call 时，它在【命令提示符】下不起作用。</p></div><p><strong>批处理参数：</strong></p><ul><li>下表列出了批处理脚本自变量引用（<code>%0</code>、<code>%1</code>、... <code>%9</code>）</li><li><code>%0</code> 表示批处理命令本身，其它参数字符串用 <code>%1</code> 到 <code>%9</code> 顺序表示</li><li>在批处理脚本中使用 <code>%*</code> 值会引用所有自变量（例如：<code>%0</code>、<code>%1</code>、... <code>%9</code>）</li><li>可以使用以下可选语法作为批处理参数的替换（<code>%n</code>）</li></ul><table><thead><tr><th style="text-align:center;">批处理参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>%~1</code></td><td style="text-align:left;">展开 <code>%1</code> 并删除周围的引号</td></tr><tr><td style="text-align:center;"><code>%~f1</code></td><td style="text-align:left;">将 <code>%1</code> 扩展为完全限定路径</td></tr><tr><td style="text-align:center;"><code>%~d1</code></td><td style="text-align:left;">仅将 <code>%1</code> 扩展为驱动器号</td></tr><tr><td style="text-align:center;"><code>%~p1</code></td><td style="text-align:left;">仅将 <code>%1</code> 扩展为路径</td></tr><tr><td style="text-align:center;"><code>%~n1</code></td><td style="text-align:left;">仅将 <code>%1</code> 扩展为文件名</td></tr><tr><td style="text-align:center;"><code>%~x1</code></td><td style="text-align:left;">仅将 <code>%1</code> 扩展为文件扩展名</td></tr><tr><td style="text-align:center;"><code>%~s1</code></td><td style="text-align:left;">将 <code>%1</code> 扩展为仅包含短名称的完全限定路径</td></tr><tr><td style="text-align:center;"><code>%~a1</code></td><td style="text-align:left;">将 <code>%1</code> 扩展为文件属性</td></tr><tr><td style="text-align:center;"><code>%~t1</code></td><td style="text-align:left;">将 <code>%1</code> 扩展为文件的日期和时间</td></tr><tr><td style="text-align:center;"><code>%~z1</code></td><td style="text-align:left;">将 <code>%1</code> 扩展为文件的大小</td></tr><tr><td style="text-align:center;"><code>%~$PATH:1</code></td><td style="text-align:left;">搜索 PATH 环境变量中列出的目录，然后将 <code>%1</code> 扩展为找到的第一个目录的完全限定名称。如果未定义环境变量名称或搜索找不到该文件，则此修饰符将扩展为空字符串</td></tr></tbody></table><p>下表显示了如何将修饰符与复合结果的批处理参数组合在一起：</p><table><thead><tr><th style="text-align:center;">带修饰符的批处理参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>%~dp1</code></td><td style="text-align:left;">仅将 <code>%1</code> 扩展为驱动器号和路径</td></tr><tr><td style="text-align:center;"><code>%~nx1</code></td><td style="text-align:left;">仅将 <code>%1</code> 扩展为文件名和扩展名</td></tr><tr><td style="text-align:center;"><code>%~dp$PATH:1</code></td><td style="text-align:left;">在 PATH 环境变量中列出的目录中搜索 <code>%1</code>，然后扩展为找到的第一个目录的驱动器号和路径</td></tr><tr><td style="text-align:center;"><code>%~ftza1</code></td><td style="text-align:left;">展开 <code>%1</code> 以显示类似于 <code>dir</code> 命令的输出</td></tr></tbody></table><p>在上述示例中，<code>%1</code> 和 <code>PATH</code> 可被替换为其他有效值。语法 <code>%~</code> 由有效的自变量编号终止。修饰符 <code>%~</code> 不能与 <code>%*</code> 一起使用。</p><p>例如：创建一个 <code>call.cmd</code> 脚本。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
echo 脚本名为：%0
echo 第一个参数为：%1
echo 第二个参数为：%2

echo 脚本名为：%0，第一个参数为：%~1，第二个参数为：%2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>call.cmd</code> 脚本，并添加两个参数：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;call.cmd &quot;Hello&quot; &quot;World&quot;
脚本名为：call.cmd
第一个参数为：&quot;Hello&quot;
第二个参数为：&quot;World&quot;
脚本名为：call.cmd，第一个参数为：Hello，第二个参数为：&quot;World&quot;

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> start</h3><p><code>start</code> 用于在单独【命令提示符】窗口中运行指定的程序或命令。批处理中调用外部程序命令，该外部程序在新的窗口中运行，批处理程序继续往下执行，不理会外部程序执行的情况；如果直接运行外部程序则必须等待外部程序完成后才可以继续执行剩余的指令。</p><p>例如：创建一个 <code>start.cmd</code> 脚本，在执行时启动单独的【命令提示符】窗口以运行指定的程序或命令。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
echo 在新【命令提示符】窗口中查看 D:\\ 盘根目录信息。
start dir D:\\

echo 运行计算器程序，等程序启动后再执行下面的命令. . .
start /wait calc.exe
echo 程序成功启动，执行下面的命令。

echo Hello, World!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>start.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;start.cmd
在新【命令提示符】窗口中查看 D:\\ 盘根目录信息。
运行计算器程序，等程序启动后再执行下面的命令. . .
程序成功启动，执行下面的命令。
Hello, World!

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h3><p><code>set</code> 用于显示、设置或删除 <code>cmd.exe</code> 环境变量。如果不结合任何参数使用，<code>set</code> 将显示当前环境变量设置。<code>set</code> 设置的变量默认只在当前【命令提示符】窗口中生效。语法：<code>set [options] [&lt;variable&gt;=[&lt;string&gt;]]</code></p><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>/a &lt;variable&gt;=&lt;expression&gt;</code></td><td style="text-align:left;">将变量的值设置为计算的数值表达式。<code>&lt;expression&gt;</code> 指定数值表达式</td></tr><tr><td style="text-align:center;"><code>/p &lt;variable&gt;=[&lt;promptString&gt;]</code></td><td style="text-align:left;">将变量的值设置为由用户输入的一行输入。<code>&lt;promptstring&gt;</code> 指定提示用户输入的消息</td></tr><tr><td style="text-align:center;"><code>/?</code></td><td style="text-align:left;">在命令提示符下显示帮助</td></tr></tbody></table><p><code>&lt;</code>、<code>&gt;</code>、<code>|</code>、<code>&amp;</code> 和 <code>^</code> 是特殊的命令 shell 字符，在 <code>&lt;string&gt;</code> 中使用这些字符时，必须在它们前面加上转义字符（<code>^</code>）或用引号将其括起来（例如：<code>&quot;StringContaining&amp;Symbol&quot;</code>）。 如果使用引号将包含某个特殊字符的字符串引起来，则引号将设置为环境变量值的一部分。</p><p>如果为 <code>&lt;variable&gt;</code> 和 <code>&lt;string&gt;</code> 指定值，则指定的 <code>&lt;variable&gt;</code> 值将添加到环境中，<code>&lt;string&gt;</code> 与该变量关联。如果环境中已存在变量，则新字符串值将替换旧的字符串值。</p><p>如果仅为 <code>set</code> 命令指定变量和等号（没有 <code>&lt;string&gt;</code>），则会清除与变量关联的 <code>&lt;string&gt;</code> 值（就好像变量不存在一样）。</p><p>如果从命令脚本外部的命令行运行 set /a，则会显示表达式的最终值。</p><p>默认情况下禁用延迟环境变量扩展支持，但可以使用 <code>cmd /v</code> 启用或禁用它。</p><p>创建批处理文件时，可以使用 <code>set</code> 来创建变量，然后以与使用编号变量<code> %0</code> 到 <code>%9</code> 相同的方式使用它们。还可以使用变量 <code>%0</code> 到 <code>%9</code> 作为 <code>set</code> 的输入。</p><p>如果调用批处理文件中的变量值，请将值用百分比符号（<code>%</code>）括起来。例如：如果批处理程序创建名为 <code>BAUD</code> 的环境变量，则可以通过在命令提示符下键入 <code>%baud%</code>，将与 BAUD 关联的字符串用作可替换参数。</p><p>例如：创建一个 <code>set.cmd</code> 脚本，将变量的值设置为计算的数值表达式。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
set /a sum=4 + 5
echo %sum%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>set.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;set.cmd
9

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：创建一个 <code>set.cmd</code> 脚本，将变量的值设置为由用户输入的一行输入，并指定提示用户输入的消息。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
set /p num=请输入一个数字：
echo %num%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>set.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>请输入一个数字：21
21

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="goto-和" tabindex="-1"><a class="header-anchor" href="#goto-和" aria-hidden="true">#</a> goto 和 :</h3><ul><li><code>goto label</code> 用于从当前位置跳转到指定的标签行，从标签位置继续向下执行。</li><li><code>:</code> 用于指定标签</li></ul><p>为 <code>label</code> 指定的值必须与批处理程序中的标签匹配。批处理程序中的标签必须以冒号（<code>:</code>）开头。如果某行以冒号开头，则系统会将此行视为标签，并忽略此行中的任何命令。如果批处理程序不包含您在 <code>label</code> 参数中指定的标签，则批处理程序将停止并显示 <code>Label not found</code> 提示信息。</p><p>可以在 <code>label</code> 参数中使用空格，但不能包含其他分隔符（例如：<code>;</code> 或 <code>=</code>）。</p><p>如果启用了命令扩展名（默认设置），并且您将 <code>goto</code> 命令与目标标签 <code>:EOF</code> 一起使用，则可以将控制权转移到当前批处理脚本文件的末尾，并且可以在不定义标签的情况下退出批处理脚本文件。将此命令与 <code>:EOF</code> 标签一起使用时，必须在标签前插入冒号。例如：<code>goto:EOF</code>。</p><p>例如：创建一个 <code>goto.cmd</code> 脚本，在执行到 <code>goto</code> 时跳转到指定的标签行，从标签位置继续向下执行。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
echo 选择您喜欢的动物： 
echo 1. 狗 
echo 2. 猫

set /p animal=输入您的选择（请输入 1 或 2）：
if %animal% == 1 goto dog
if %animal% == 2 goto cat
goto:EOF

:dog
echo 狗
goto:EOF

:cat
echo 猫
goto:EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>goto.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;goto.cmd
选择您喜欢的动物： 
1. 狗
2. 猫
输入您的选择（请输入 1 或 2）：1
狗

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>goto</code> 命令还可以用来实现循环。例如：创建一个 <code>goto.cmd</code> 脚本，输入 0~10 以内的数字（输入 exit 退出，否则一直输入）。内容如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
:nums
set /p num=请输入 0~10 以内的数字（输入 exit 退出，否则一直输入）：
if %num% LSS 10 (
    goto nums
) else if &quot;%num%&quot; == &quot;exit&quot; (
    goto:EOF
) else (
    echo 输入的不是 10 以内的数字！
    goto nums
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>goto.cmd</code> 脚本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;goto.cmd
请输入 0~10 以内的数字（输入 exit 退出，否则一直输入）：0
请输入 0~10 以内的数字（输入 exit 退出，否则一直输入）：-2
请输入 0~10 以内的数字（输入 exit 退出，否则一直输入）：10
输入的不是 10 以内的数字！
请输入 0~10 以内的数字（输入 exit 退出，否则一直输入）：fasdf
输入的不是 10 以内的数字！
请输入 0~10 以内的数字（输入 exit 退出，否则一直输入）：exit

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="assoc-和-ftype" tabindex="-1"><a class="header-anchor" href="#assoc-和-ftype" aria-hidden="true">#</a> assoc 和 ftype</h3><p><code>assoc</code> 用于显示或修改文件扩展名关联。如果不带参数使用，<code>assoc</code> 将显示所有当前文件扩展名关联的列表。若要在关联中进行更改，您需要具有管理员权限。</p><p><code>ftype</code> 用于显示或修改文件扩展名关联中使用的文件类型。如果使用此命令时不带赋值运算符（<code>=</code>），则此命令将显示指定文件类型的当前打开命令字符串。如果使用此命令时不带参数，则此命令将显示定义了打开命令字符串的文件类型。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>assoc</code> 和 <code>ftype</code> 命令仅在 <code>cmd.exe</code> 中受支持，在 PowerShell 中不可用。不过，您可以使用 <code>cmd /c assoc</code> 和 <code>cmd /c ftype</code> 作为解决方法。</p></div><p>下表介绍了 <code>ftype</code> 如何替换打开的命令字符串中的变量：</p><table><thead><tr><th style="text-align:left;">变量</th><th style="text-align:center;">替换值</th></tr></thead><tbody><tr><td style="text-align:left;"><code>%0</code> 或 <code>%1</code></td><td style="text-align:center;">替换为通过关联而启动的文件名</td></tr><tr><td style="text-align:left;"><code>%*</code></td><td style="text-align:center;">获取所有参数</td></tr><tr><td style="text-align:left;"><code>%2、%3、...</code></td><td style="text-align:center;">获取第一个参数（<code>%2</code>），第二个参数（<code>%3</code>），以此类推</td></tr><tr><td style="text-align:left;"><code>%~&lt;n&gt;</code></td><td style="text-align:center;">获取从第 <code>n</code> 个参数开始的所有剩余参数，其中 <code>n</code> 可以是 <code>2~9</code> 之间的任何数字</td></tr></tbody></table><p>例如：关联 <code>.log</code> 文本文件。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;assoc .log=txtfile

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：查看文件扩展名 <code>.txt</code> 的当前文件类型关联。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;assoc .txt
.txt=txtfile

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：删除文件扩展名 <code>.bak</code> 的文件类型关联，请通过按空格键在等号后面添加空格。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;assoc .bak=

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：将 <code>assoc</code> 的输出发送到文件 <code>assoc.txt</code>。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;assoc &gt; assoc.txt

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：将不带扩展名的文件关联到文本文件，只需使用一个点。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;assoc .=txtfile

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若要查看定义了打开命令字符串的当前文件类型，请使用 <code>ftype</code> 命令。</p><p>例如：显示 <code>txtfile</code> 文件类型的当前打开命令字符串。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;ftype txtfile
txtfile=%SystemRoot%\\system32\\NOTEPAD.EXE %1

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：删除名为 <code>example</code> 的文件类型的打开命令字符串。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;ftype example=

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：将 <code>.pl</code> 文件扩展名与 <code>PerlScript</code> 文件类型相关联，并使 <code>perlscript</code> 文件类型能够运行 PERL.EXE。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>E:\\batch&gt;assoc .pl=PerlScript

E:\\batch&gt;ftype PerlScript=perl.exe %1 %*

E:\\batch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pushd-和-popd" tabindex="-1"><a class="header-anchor" href="#pushd-和-popd" aria-hidden="true">#</a> pushd 和 popd</h2><p><code>pushd</code> 用于存储当前目录供 <code>popd</code> 命令使用，然后更改为指定目录。</p><p>每次使用 <code>pushd</code> 命令时，都会存储一个目录以供使用。但你可以通过多次使用 <code>pushd</code> 命令来存储多个目录。这些目录按顺序存储在虚拟堆栈中，如果使用一次 <code>pushd</code> 命令，使用该命令的目录将放置在堆栈底部。如果再次使用该命令，第二个目录将放置在第一个目录之上。每次使用 <code>pushd</code> 命令时都会重复该过程。</p><p>如果使用 <code>popd</code> 命令，堆栈顶部的目录将被删除，当前目录将更改为该目录。如果再次使用 <code>popd</code> 命令，堆栈中的下一个目录将被删除。如果启用了命令扩展，则 <code>popd</code> 命令会删除 <code>pushd</code> 命令创建的所有驱动器号分配。</p><h2 id="符号" tabindex="-1"><a class="header-anchor" href="#符号" aria-hidden="true">#</a> 符号</h2><h3 id="回显屏蔽" tabindex="-1"><a class="header-anchor" href="#回显屏蔽" aria-hidden="true">#</a> 回显屏蔽 @</h3><h3 id="重定向-1-与" tabindex="-1"><a class="header-anchor" href="#重定向-1-与" aria-hidden="true">#</a> 重定向 1 &gt; 与 &gt;&gt;</h3><h3 id="重定向-2" tabindex="-1"><a class="header-anchor" href="#重定向-2" aria-hidden="true">#</a> 重定向 2 &lt;</h3><h3 id="管道符" tabindex="-1"><a class="header-anchor" href="#管道符" aria-hidden="true">#</a> 管道符 |</h3><h3 id="转义符-和" tabindex="-1"><a class="header-anchor" href="#转义符-和" aria-hidden="true">#</a> 转义符 ^ 和 %</h3><h3 id="逻辑命令" tabindex="-1"><a class="header-anchor" href="#逻辑命令" aria-hidden="true">#</a> 逻辑命令</h3><h2 id="语句结构" tabindex="-1"><a class="header-anchor" href="#语句结构" aria-hidden="true">#</a> 语句结构</h2><h3 id="if-语句" tabindex="-1"><a class="header-anchor" href="#if-语句" aria-hidden="true">#</a> if 语句</h3><h3 id="for-语句" tabindex="-1"><a class="header-anchor" href="#for-语句" aria-hidden="true">#</a> for 语句</h3><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><h3 id="截取字符串" tabindex="-1"><a class="header-anchor" href="#截取字符串" aria-hidden="true">#</a> 截取字符串</h3><h3 id="替换字符串" tabindex="-1"><a class="header-anchor" href="#替换字符串" aria-hidden="true">#</a> 替换字符串</h3><h3 id="字符串合并" tabindex="-1"><a class="header-anchor" href="#字符串合并" aria-hidden="true">#</a> 字符串合并</h3><h3 id="扩充字符串" tabindex="-1"><a class="header-anchor" href="#扩充字符串" aria-hidden="true">#</a> 扩充字符串</h3><h2 id="数值计算" tabindex="-1"><a class="header-anchor" href="#数值计算" aria-hidden="true">#</a> 数值计算</h2><h2 id="批处理" tabindex="-1"><a class="header-anchor" href="#批处理" aria-hidden="true">#</a> 批处理</h2><h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h3><h3 id="用户变量" tabindex="-1"><a class="header-anchor" href="#用户变量" aria-hidden="true">#</a> 用户变量</h3><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><h3 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h3><h3 id="ascii-码" tabindex="-1"><a class="header-anchor" href="#ascii-码" aria-hidden="true">#</a> ASCII 码</h3><h2 id="arcgis-中的批处理" tabindex="-1"><a class="header-anchor" href="#arcgis-中的批处理" aria-hidden="true">#</a> ArcGIS 中的批处理</h2>`,153),l=[a];function s(o,t){return d(),c("div",null,l)}const m=e(n,[["render",s],["__file","batch.html.vue"]]);export{m as default};
