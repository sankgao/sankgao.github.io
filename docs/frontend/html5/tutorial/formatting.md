---
title: 格式化
icon: formatting
date: 2023-05-05
category: Frontend
tag:
    - HTML5
---

HTML 可定义很多供格式化输出的元素，比如 **粗体** 和 **斜体字。**

下面有很多例子，您可以亲自试试：

## HTML 文本格式化实例

- 文本格式化

    在一个 HTML 文件中对文本进行格式化。

    ::: normal-demo 演示
    
    ```html
    <b>This text is bold</b>
    <br />
    <strong>This text is strong</strong>
    <br />
    <big>This text is big</big>
    <br />
    <em>This text is emphasized</em>
    <br />
    <i>This text is italic</i>
    <br />
    <small>This text is small</small>
    <br />
    This text contains
    <sub>subscript</sub>
    <br />
    This text contains
    <sup>superscript</sup>
    ```
    
    :::

    - **\<b>**：定义粗体字
    - **\<strong>**：定义强调文本
    - **\<big>**：定义大号文本。HTML5 中不支持。请使用 CSS 代替
    - **\<em>**：定义强调文本
    - **\<i>**：定义斜体字
    - **\<small>**：定义小号文本
    - **\<sub>**：定义下标文本
    - **\<sup>**：定义上标文本

- 预格式文本

    使用 `<pre>` 标签对空行和空格进行控制。
    
    ::: normal-demo 演示
    
    ```html
    <pre>
    这是
    预格式文本。
    它保留了      空格
    和换行。
    </pre>

    <p>pre 标签很适合显示计算机代码：</p>

    <pre>
    for i = 1 to 10
         print i
    next i
    </pre>
    ```
    
    :::

    - **\<pre>**：定义预格式文本

- 计算机输出标签

    不同的 “计算机输出” 标签的显示效果。
    
    ::: normal-demo 演示
    
    ```html
    <code>Computer code</code>
    <br />
    <kbd>Keyboard input</kbd>
    <br />
    <tt>Teletype text</tt>
    <br />
    <samp>Sample text</samp>
    <br />
    <var>Computer variable</var>
    <br />

    <p>
      <b>注释：</b>这些标签常用于显示计算机/编程代码。
    </p>
    ```
    
    :::

    - **\<code>**：定义计算机代码文本
    - **\<kbd>**：定义键盘文本
    - **\<tt>**：定义打字机文本。HTML5 中不支持。请使用 CSS 代替
    - **\<samp>**：定义计算机代码样本
    - **\<var>**：定义文本的变量部分

- 地址

    在 HTML 文件中写地址。
    
    ::: normal-demo 演示
    
    ```html
    <address>
      Written by <a href="mailto:webmaster@example.com">Donald Duck</a>.<br />
      Visit us at:<br />
      Example.com<br />
      Box 564, Disneyland<br />
      USA
    </address>
    ```
    
    :::

    - **\<address>**：定义文档作者或拥有者的联系信息

- 缩写和首字母缩写

    对文本缩写或首字母缩写。
    
    ::: normal-demo 演示
    
    ```html
    <abbr title="etcetera">etc.</abbr>
    <br />
    <acronym title="World Wide Web">WWW</acronym>

    <p>在某些浏览器中，当您把鼠标移至缩略词语上时，title 可用于展示表达的完整版本。</p>
    ```
    
    :::

    - **\<abbr>**：定义缩写
    - **\<acronym>**：定义只取首字母的缩写。HTML5 中不支持。请使用 `<abbr>` 代替

- 文字方向

    改变文字的方向。
    
    ::: normal-demo 演示
    
    ```html
    <p>
      如果您的浏览器支持 bi-directional override（bdo），下一行会从右向左输出（rtl）。
    </p>

    <bdo dir="rtl">
      Here is some Hebrew text
    </bdo>
    ```
    
    :::

    - **\<bdo>**：定义文字方向
        - **ltr**：定义文字从左向右输出
        - **rtl**：定义文字从右向左输出

- 块引用

    实现长短不一的引用语。
    
    ::: normal-demo 演示
    
    ```html
    这是长的引用：
    <blockquote>
      这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。
    </blockquote>

    这是短的引用：
    <q>
      这是短的引用。
    </q>

    <p>
      使用 blockquote 元素的话，浏览器会插入换行和外边距，而 q 元素不会有任何特殊的呈现。
    </p>
    ```
    
    :::

    - **\<blockquote>**：定义长的引用
    - **\<q>**：定义短的引用

- 删除字效果和插入字效果

    标记删除文本和插入文本。
    
    ::: normal-demo 演示
    
    ```html
    <p>一打有 <del>二十</del> <ins>十二</ins> 件。</p>

    <p>大多数浏览器会改写为删除文本和下划线文本。</p>

    <p>一些老式的浏览器会把删除文本和下划线文本显示为普通文本。</p>
    ```
    
    :::

    - **\<del>**：定义被删除文本
    - **\<ins>**：定义被插入文本

- 特殊术语或短语的定义

    标记那些对特殊术语或短语的定义。
    
    ::: normal-demo 演示
    
    ```html
    <p>The <dfn title="World Health Organization">WHO</dfn> was founded in 1948.</p>

    <p>对缩写进行标记能够为浏览器、翻译系统以及搜索引擎提供有用的信息。</p>
    ```
    
    :::

    - **\<dfn>**：定义特殊术语或短语

- 著作的标题

    通常表示它所包含的文本对某个参考文献的引用。
    
    ::: normal-demo 演示
    
    ```html
    <p>HTML cite 元素定义著作的标题。</p>
    <p>浏览器通常会以斜体显示 cite 元素。</p>

    <img src="img_the_scream.jpg" width="220" height="277" alt="The Scream" />
    <p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>
    ```
    
    :::

    - **\<cite>**：定义引用（citation）

## 查看 HTML 源码

鼠标右键单击浏览器页面，选择 “查看网页源代码” 即可。随后您会看到一个弹出的窗口，窗口内就是实际的 HTML 代码。

