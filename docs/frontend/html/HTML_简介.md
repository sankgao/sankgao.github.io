<!-- TOC -->

- [HTML 简介](#html-简介)
- [HTML 发展史](#html-发展史)
- [HTML 标签](#html-标签)
- [HTML 元素](#html-元素)
    - [HTML 元素语法](#html-元素语法)
    - [嵌套的 HTML 元素](#嵌套的-html-元素)
- [HTML 属性](#html-属性)
- [语法规范](#语法规范)
- [HTML 文档声明](#html-文档声明)

<!-- /TOC -->

# HTML 简介

超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用来结构化 Web 网页及其内容的标记语言。网页内容可以是：一组段落、一个重点信息列表、也可以含有图片和数据表。您可以使用 HTML 来建立自己的 WEB 站点，HTML 运行在浏览器上，由浏览器来解析。

HTML 不是一门编程语言，而是一种用于定义内容结构的标记语言。HTML 由一系列的元素组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。一对标签可以为一段文字或者一张图片添加超链接，将文字设置为斜体，改变字号，等等。

# HTML 发展史

1990 年，由于对 Web 未来发展的远见，Tim Berners-Lee 提出了超文本（Hypertext）的概念，Hypertext 包含了指向其他文本的链接，而不是像小说中的单一线性流。并在第二年在 SGML (en-US) 的基础上将其正式定义为一个标记语言。IETF (en-US) 于 1993 年正式开始制定 HTML 规范，并在经历了几个版本的草案后于 1995 年发布了 HTML 2.0 版本。1994 年，Berners-Lee 为了 Web 发展而成立了 W3C (en-US)。1996 年，W3C 接管了 HTML 的标准化工作，并在 1 年后发布了 HTML 3.2 推荐标准。1999 年，HTML 4.0 发布，并在 2000 年成为 ISO (en-US) 标准。

自那以后，W3C 几乎放弃了 HTML 而转向 XHTML，并于 2004 年成立了另一个独立的小组 WHATWG。幸运的是，WHATWG 后来又转回来参与了 HTML5 标准的制定，两个组织（译注：即 W3C 和 WHATWG）在 2008 年发布了第一份草案，并在 2014 年发布了 HTML5 标准的最终版。

# HTML 标签

HTML 标记标签通常被称为 HTML 标签 (HTML tag)。

- HTML 标签是由尖括号包围的关键词，比如：\<html>
- HTML 标签通常是成对出现的称为 **双标签**，比如：\<b> 和 \</b>
- HTML 标签只有一个尖括号的称为 **单标签**，比如：\<br />
- 标签对中的第一个标签是 **开始标签**，第二个标签是 **结束标签**
- 开始和结束标签也被称为 **开放标签** 和 **闭合标签**

# HTML 元素

HTML 元素指的是从开始标签（start tag）到结束标签（end tag）的所有代码。

|  开始标签  |  元素内容  |  结束标签  |
|  :----:  |  :----  |  :----:  |
|  \<p>  |  This is a paragraph  |  \</p>  |
|  \<a href="default.htm" >  |  This is a link  |  \</a>  |
|  \<br />  |    |    |

> 开始标签常被称为 **开放标签**（opening tag），结束标签常称为 **闭合标签**（closing tag）

## HTML 元素语法

HTML 元素以开始标签起始。

- HTML 元素以结束标签终止
- 元素的内容是开始标签与结束标签之间的内容
- 某些 HTML 元素具有空内容（empty content）
- 空元素在开始标签中进行关闭（以开始标签的结束而结束）
- 大多数 HTML 元素可拥有属性

## 嵌套的 HTML 元素

大多数 HTML 元素可以嵌套（可以包含其他 HTML 元素）。HTML 文档由嵌套的 HTML 元素构成。

example：

```html
<html>

<body>
  <p>This is my first paragraph.</p>
</body>

</html>
```

# HTML 属性

HTML 标签可以拥有属性。属性提供了有关 HTML 元素的更多的信息。

属性总是以 **名称=值** 对的形式出现，比如：`name="value"`。

属性总是在 HTML 元素的开始标签中规定。

example：

```html
<a href="http://www.baidu.com.cn">This is a link</a>
```

HTML 链接由 `<a>` 标签定义，链接的地址在 `href` 属性中指定。

# 语法规范

- 始终在文档的首行声明文档类型
- 不要忘记结束标签
- 没有内容的 HTML 元素被称为空元素。空元素是在开始标签中关闭的，比如：\<br />
- 使用小写标签
- 使用小写属性/属性值，始终为属性值加引号
- 使用小写元素名
- 添加必需的属性
- 等号两边尽量不要有空格
- 属性间用空格分隔
- 避免长代码行
- 增加空行来分隔大型或逻辑代码块。增加两个空格的缩进。请勿使用 TAB
- HTML 文件名应该使用扩展名 `.html`（而不是 `.htm`）

# HTML 文档声明

- HTML5
    ```html
    <!DOCTYPE html>
    ```
- HTML 4.01
    ```html
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">
    ```
- XHTML 1.0
    ```html
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    ```

