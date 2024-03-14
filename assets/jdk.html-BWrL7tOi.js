import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as d,c as l,b as n,e as a,d as i,f as s}from"./app-ofF1RE9O.js";const t={},p=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),a(" 介绍")],-1),r=n("h3",{id:"jdk",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jdk","aria-hidden":"true"},"#"),a(" JDK")],-1),u={href:"https://www.oracle.com/cn/java/",target:"_blank",rel:"noopener noreferrer"},v=s('<p><code>JDK</code>（Java Development Kit）是 <code>Java</code> 语言的软件开发工具包（<code>SDK</code>）。主要用于移动设备、嵌入式设备上的 <code>java</code> 应用程序。</p><p><code>JDK</code> 提供了 Java 编程语言的编译器（<code>javac</code>）、Java 运行时环境（<code>JRE</code>）、类库以及其他工具，这样开发者可以编写、编译、测试和运行 Java 应用程序。<code>JDK</code> 是开发任何基于 Java 技术的应用程序不可或缺的工具集。<code>2009</code> 年，甲骨文公司（<code>Oracle</code>）收购 Sun 公司，之后所说的 <code>JDK</code> 都是 <code>OracleJDK</code>。</p><p>没有 <code>JDK</code> 的话，无法编译 Java 程序（指 java 源码 <code>.java</code> 文件），如果想只运行 Java 程序（指 <code>class</code> 或 <code>jar</code> 或其它归档文件），要确保已安装相应的 <code>JRE</code>。</p><h3 id="openjdk" tabindex="-1"><a class="header-anchor" href="#openjdk" aria-hidden="true">#</a> OpenJDK</h3>',4),b={href:"https://openjdk.org/",target:"_blank",rel:"noopener noreferrer"},m=s('<p><code>OpenJDK</code>（Open Java Development Kit）是 <code>JDK</code> 的开源版本，由 Sun 公司在 <code>2006</code> 年发布。使 <code>Java</code> 更加开放和广泛可访问，提供一个免费和开源的 <code>Java</code> 开发平台。</p><h2 id="jdk-和-openjdk-区别" tabindex="-1"><a class="header-anchor" href="#jdk-和-openjdk-区别" aria-hidden="true">#</a> JDK 和 OpenJDK 区别</h2><ul><li><strong>协议</strong>：<code>JDK</code> 是 <code>Oracle</code> 公司发行的，遵循 <code>Oracle JRL</code>（Java Research License）许可协议。<code>OpenJDK</code> 是开源项目，遵循 <code>GNU GPL</code>（General Public License）许可协议。</li><li><strong>代码</strong>：<code>JDK</code> 包含闭源代码，加了一些 <code>Oracle</code> 公司的商业技术。<code>OpenJDK</code> 代码完全开源，没有闭源代码。</li></ul><h2 id="jdk-安装" tabindex="-1"><a class="header-anchor" href="#jdk-安装" aria-hidden="true">#</a> JDK 安装</h2><p>根据您的系统选择需要的软件安装包。</p><h3 id="linux-安装" tabindex="-1"><a class="header-anchor" href="#linux-安装" aria-hidden="true">#</a> Linux 安装</h3>',6),k=n("p",null,"使用软件包安装",-1),h={href:"https://www.oracle.com/java/technologies/downloads/archive/",target:"_blank",rel:"noopener noreferrer"},g=s(`<ul><li><p>RedHat 系统</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> /opt/jdk
<span class="token builtin class-name">cd</span> /opt/jdk
<span class="token function">sudo</span> <span class="token function">wget</span> https://download.oracle.com/java/17/archive/jdk-17.0.10_linux-x64_bin.rpm
<span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> jdk-17.0.10_linux-x64_bin.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>java</code> 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>

<span class="token function">java</span> version <span class="token string">&quot;17.0.10&quot;</span> <span class="token number">2024</span>-01-16 LTS
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">17.0</span>.10+11-LTS-240<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">17.0</span>.10+11-LTS-240, mixed mode, sharing<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>javac</code> 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>javac <span class="token parameter variable">-version</span>

javac <span class="token number">17.0</span>.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Debian 系统</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> /opt/jdk
<span class="token builtin class-name">cd</span> /opt/jdk
<span class="token function">sudo</span> <span class="token function">wget</span> https://download.oracle.com/java/17/archive/jdk-17.0.10_linux-x64_bin.deb
<span class="token function">sudo</span> dpkg <span class="token parameter variable">-i</span> jdk-17.0.10_linux-x64_bin.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>java</code> 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>

<span class="token function">java</span> version <span class="token string">&quot;17.0.10&quot;</span> <span class="token number">2024</span>-01-16 LTS
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">17.0</span>.10+11-LTS-240<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">17.0</span>.10+11-LTS-240, mixed mode, sharing<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>javac</code> 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>javac <span class="token parameter variable">-version</span>

javac <span class="token number">17.0</span>.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,1),j=n("p",null,[a("使用 "),n("code",null,"tar.gz"),a(" 包安装")],-1),_={href:"https://www.oracle.com/java/technologies/downloads/archive/",target:"_blank",rel:"noopener noreferrer"},f=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> /opt/jdk
<span class="token builtin class-name">cd</span> /opt/jdk
<span class="token function">sudo</span> <span class="token function">wget</span> https://download.oracle.com/java/17/archive/jdk-17.0.10_linux-x64_bin.tar.gz
<span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-zxf</span> jdk-17.0.10_linux-x64_bin.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>java</code> 版本，没有配置环境变量前，只能到 <code>java</code> 命令所在目录下执行 <code>java</code> 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/jdk/jdk-17.0.10/bin
./java <span class="token parameter variable">-version</span>

<span class="token function">java</span> version <span class="token string">&quot;17.0.10&quot;</span> <span class="token number">2024</span>-01-16 LTS
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">17.0</span>.10+11-LTS-240<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">17.0</span>.10+11-LTS-240, mixed mode, sharing<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>javac</code> 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./javac <span class="token parameter variable">-version</span>

javac <span class="token number">17</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置环境变量，使用 <code>sudo vim /etc/profile</code> 命令打开文件，并在最后添加以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/opt/jdk/jdk-17
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>$:CLASSPATH:<span class="token variable">$JAVA_HOME</span>/lib/
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>/etc/profile</code> 文件，使配置立即生效：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置环境变量后，就可以在任意目录下使用 <code>java</code> 命令。</p>`,10),x=n("h3",{id:"windows-安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#windows-安装","aria-hidden":"true"},"#"),a(" Windows 安装")],-1),J={href:"https://www.oracle.com/java/technologies/downloads/archive/",target:"_blank",rel:"noopener noreferrer"},A=s(`<p>将 <code>jdk-17.0.10_windows-x64_bin.zip</code> 包解压到您要存放的位置。例如：<code>E:\\Software\\JDK\\</code> 文件夹下。</p><p>按 <kbd>Win</kbd> + <kbd>X</kbd> 键，依次点击 <em>系统 -&gt; 高级系统设置 -&gt; 环境变量</em>。</p><p>在 <em>系统变量</em> 中，点击 <em>新建</em>，新建以下两个变量：</p><ul><li><p>变量名：<code>JAVA_HOME</code>，变量值：<code>E:\\Software\\JDK\\jdk-17.0.10</code></p><ul><li><code>JAVA_HOME</code> 变量值指定解压缩 JDK 的目录</li></ul></li><li><p>变量名：<code>CLASSPATH</code>，变量值：<code>.;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar;</code></p><ul><li><code>CLASSPATH</code> 变量值指定类文件的位置</li></ul></li></ul><p>在 <em>系统变量</em> 中，点击 <em>Path</em> 变量进行编辑，点击 <em>新建</em>，新建以下两个值：</p><ul><li><code>%JAVA_HOME%\\bin</code></li><li><code>%JAVA_HOME%\\jre\\bin</code></li></ul><p>以上操作完成，依次点击 <em>确认</em> 保存。</p><p>按 <kbd>Win</kbd> + <kbd>R</kbd> 键，在运行中输入 <code>cmd</code> 打开终端控制器。</p><p>在终端控制器中输入 <code>java -version</code> 命令，查看 <code>java</code> 版本。输入 <code>javac -version</code> 命令，查看 <code>javac</code> 版本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token operator">&gt;</span>java <span class="token parameter variable">-version</span>
<span class="token function">java</span> version <span class="token string">&quot;17.0.10&quot;</span> <span class="token number">2024</span>-01-16 LTS
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">17.0</span>.10+11-LTS-240<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">17.0</span>.10+11-LTS-240, mixed mode, sharing<span class="token punctuation">)</span>

C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token operator">&gt;</span>javac <span class="token parameter variable">-version</span>
javac <span class="token number">17.0</span>.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="openjdk-安装" tabindex="-1"><a class="header-anchor" href="#openjdk-安装" aria-hidden="true">#</a> OpenJDK 安装</h2><p>根据您的系统选择需要的软件安装包。</p><h3 id="linux-安装-1" tabindex="-1"><a class="header-anchor" href="#linux-安装-1" aria-hidden="true">#</a> Linux 安装</h3>`,13),S=s(`<li><p>使用本地软件源安装</p><p>此方法不需要配置环境变量。</p><ul><li><p>RedHat 系统</p><p>安装带有 <code>devel</code> 的是 <code>JDK</code>；安装不带有 <code>devel</code> 的是 <code>JRE</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> java-17-openjdk-devel.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 <code>java</code> 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>

openjdk version <span class="token string">&quot;17.0.6-ea&quot;</span> <span class="token number">2023</span>-01-17 LTS
OpenJDK Runtime Environment <span class="token punctuation">(</span>Red_Hat-17.0.6.0.9-0.3.ea.el8<span class="token punctuation">)</span> <span class="token punctuation">(</span>build <span class="token number">17.0</span>.6-ea+9-LTS<span class="token punctuation">)</span>
OpenJDK <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>Red_Hat-17.0.6.0.9-0.3.ea.el8<span class="token punctuation">)</span> <span class="token punctuation">(</span>build <span class="token number">17.0</span>.6-ea+9-LTS, mixed mode, sharing<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>javac</code> 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>javac <span class="token parameter variable">-version</span>

javac <span class="token number">17.0</span>.6-ea
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Debian 系统</p><p>直接安装 jdk。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> openjdk-17-jdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 <code>java</code> 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>

openjdk version <span class="token string">&quot;17.0.7&quot;</span> <span class="token number">2023</span>-04-18
OpenJDK Runtime Environment <span class="token punctuation">(</span>build <span class="token number">17.0</span>.7+7-Ubuntu-0ubuntu118.04<span class="token punctuation">)</span>
OpenJDK <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">17.0</span>.7+7-Ubuntu-0ubuntu118.04, mixed mode, sharing<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>javac</code> 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>javac <span class="token parameter variable">-version</span>

javac <span class="token number">17.0</span>.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li>`,1),D=n("p",null,[a("使用 "),n("code",null,"tar.gz"),a(" 包安装")],-1),w={href:"https://jdk.java.net/archive/",target:"_blank",rel:"noopener noreferrer"},K=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> /opt/jdk
<span class="token builtin class-name">cd</span> /opt/jdk
<span class="token function">sudo</span> <span class="token function">wget</span> https://download.java.net/java/GA/jdk17/0d483333a00540d886896bac774ff48b/35/GPL/openjdk-17_linux-x64_bin.tar.gz
<span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-zxf</span> openjdk-17+35_linux-x64_bin.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>java</code> 版本，没有配置环境变量前，只能到 <code>java</code> 命令所在目录下执行 <code>java</code> 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/jdk/jdk-17/bin
./java <span class="token parameter variable">-version</span>

openjdk version <span class="token string">&quot;17&quot;</span> <span class="token number">2021</span>-09-14
OpenJDK Runtime Environment <span class="token punctuation">(</span>build <span class="token number">17</span>+35-2724<span class="token punctuation">)</span>
OpenJDK <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">17</span>+35-2724, mixed mode, sharing<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <code>javac</code> 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./javac <span class="token parameter variable">-version</span>

javac <span class="token number">17</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置环境变量，使用 <code>sudo vim /etc/profile</code> 命令打开文件，并在最后添加以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/opt/jdk/jdk-17
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>$:CLASSPATH:<span class="token variable">$JAVA_HOME</span>/lib/
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>/etc/profile</code> 文件，使配置立即生效：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置环境变量后，就可以在任意目录下使用 <code>java</code> 命令。</p>`,10),O=n("h3",{id:"windows-安装-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#windows-安装-1","aria-hidden":"true"},"#"),a(" Windows 安装")],-1),E={href:"https://jdk.java.net/archive/",target:"_blank",rel:"noopener noreferrer"},H=s(`<p>将 <code>openjdk-17+35_windows-x64_bin.zip</code> 包解压到您要存放的位置。例如：<code>E:\\Software\\JDK\\</code> 文件夹下。</p><p>按 <kbd>Win</kbd> + <kbd>X</kbd> 键，依次点击 <em>系统 -&gt; 高级系统设置 -&gt; 环境变量</em>。</p><p>在 <em>系统变量</em> 中，点击 <em>新建</em>，新建以下两个变量：</p><ul><li><p>变量名：<code>JAVA_HOME</code>，变量值：<code>E:\\Software\\JDK\\openjdk-17+35_windows-x64_bin\\jdk-17</code></p><ul><li><code>JAVA_HOME</code> 变量值指定解压缩 JDK 的目录</li></ul></li><li><p>变量名：<code>CLASSPATH</code>，变量值：<code>.;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar;</code></p><ul><li><code>CLASSPATH</code> 变量值指定类文件的位置</li></ul></li></ul><p>在 <em>系统变量</em> 中，点击 <em>Path</em> 变量进行编辑，点击 <em>新建</em>，新建以下两个值：</p><ul><li><code>%JAVA_HOME%\\bin</code></li><li><code>%JAVA_HOME%\\jre\\bin</code></li></ul><p>以上操作完成，依次点击 <em>确认</em> 保存。</p><p>按 <kbd>Win</kbd> + <kbd>R</kbd> 键，在运行中输入 <code>cmd</code> 打开终端控制器。</p><p>在终端控制器中输入 <code>java -version</code> 命令，查看 <code>java</code> 版本。输入 <code>javac -version</code> 命令，查看 <code>javac</code> 版本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token operator">&gt;</span>java <span class="token parameter variable">-version</span>
openjdk version <span class="token string">&quot;17&quot;</span> <span class="token number">2021</span>-09-14
OpenJDK Runtime Environment <span class="token punctuation">(</span>build <span class="token number">17</span>+35-2724<span class="token punctuation">)</span>
OpenJDK <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">17</span>+35-2724, mixed mode, sharing<span class="token punctuation">)</span>

C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token operator">&gt;</span>javac <span class="token parameter variable">-version</span>
javac <span class="token number">17</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function T(M,L){const e=c("ExternalLinkIcon");return d(),l("div",null,[p,r,n("p",null,[n("a",u,[a("OracleJDK 官网"),i(e)])]),v,n("p",null,[n("a",b,[a("OpenJDK 官网"),i(e)])]),m,n("ul",null,[n("li",null,[k,n("p",null,[a("此方法不需要配置环境变量。"),n("a",h,[a("JDK 下载地址"),i(e)])]),g]),n("li",null,[j,n("p",null,[a("此方法需要配置环境变量。"),n("a",_,[a("JDK 下载地址"),i(e)])]),f])]),x,n("p",null,[a("需要配置环境变量。"),n("a",J,[a("JDK 下载地址"),i(e)])]),A,n("ul",null,[S,n("li",null,[D,n("p",null,[a("此方法需要配置环境变量。"),n("a",w,[a("OpenJDK 下载地址"),i(e)])]),K])]),O,n("p",null,[a("需要配置环境变量。"),n("a",E,[a("OpenJDK 下载地址"),i(e)])]),H])}const P=o(t,[["render",T],["__file","jdk.html.vue"]]);export{P as default};
