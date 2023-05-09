---
title: 语义
icon: semantic
date: 2023-05-09
category: Frontend
tag:
    - HTML5
---

语义学（源自古希腊）可定义为对语言意义的研究。

语义元素是拥有语义的元素。

## 什么是语义元素

语义元素清楚地向浏览器和开发者描述其意义。

非语义元素的例子：`<div>` 和 `<span>` 无法提供关于其内容的信息。

语义元素的例子：`<form>`、`<table>` 以及 `<img>` 清晰地定义其内容。

## HTML5 中新的语义元素

许多网站包含了 **指示导航**、**页眉** 以及 **页脚** 的 HTML 代码，例如这些：`<div id="nav">`、`<div class="header">`、`<div id="footer">`。

HTML5 提供了定义页面不同部分的新语义元素：

```text
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆         <header>        ┆
├┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┤
┆           <nav>         ┆
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┬┈┈┈┈┈┈┈┈┈┈┈┤
┆  <section>  ┆           ┆
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┤  <aside>  ┆
┆  <article>  ┆           ┆
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┴┈┈┈┈┈┈┈┈┈┈┈┤
┆         <footer>        ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
```

|  标签  |  描述  |
|  :----:  |  :----  |
|  \<article>  |  定义文章  |
|  \<aside>  |  定义页面内容以外的内容  |
|  \<details>  |  定义用户能够查看或隐藏的额外细节  |
|  \<figcaption>  |  定义 `<figure>` 元素的标题  |
|  \<figure>  |  规定自包含内容，比如：图示、图表、照片、代码清单等  |
|  \<footer>  |  定义文档或节的页脚  |
|  \<header>  |  规定文档或节的页眉  |
|  \<main>  |  规定文档的主内容  |
|  \<mark>  |  定义重要的或强调的文本  |
|  \<nav>  |  定义导航链接  |
|  \<section>  |  定义文档中的节  |
|  \<summary>  |  定义 `<details>` 元素的可见标题  |
|  \<time>  |  定义日期/时间  |

## \<section> 元素

`<section>` 元素定义文档中的节。节（section）是有主题的内容组，通常具有标题。

可以将网站首页划分为简介、内容、联系信息等节。例如：

::: normal-demo 演示

```html
<section>
  <h1>WWF</h1>
  <p>
    The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.
  </p>
</section>

<section>
  <h1>WWF's Panda symbol</h1>
  <p>
    The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.
  </p>
</section>
```

:::

## \<article> 元素

`<article>` 元素规定独立的自包含内容。

文档有其自身的意义，并且可以独立于网站其他内容进行阅读。

`<article>` 元素的应用场景：论坛、博客、新闻。例如：

::: normal-demo 演示

```html
<article>
  <h1>What Does WWF Do?</h1>
  <p>WWF's mission is to stop the degradation of our planet's natural environment, and build a future in which humans live in harmony with nature.</p>
</article>
```

:::

### 嵌套语义元素

在 HTML5 标准中，`<article>` 元素定义完整的相关元素自包含块，`<section>` 元素被定义为相关元素块。

`<article>` 和 `<section>` 元素可以随意嵌套

- `<section>` 元素包含 `<article>` 元素
- `<article>` 元素包含 `<sections>` 元素
- `<section>` 元素包含 `<section>` 元素
- `<article>` 元素包含 `<article>` 元素

## \<header> 元素

`<header>` 元素为文档或节规定页眉。

`<header>` 元素应该被用作介绍性内容的容器。

一个文档中可以有多个 `<header>` 元素。例如：

::: normal-demo 演示

```html
<article>
  <header>
    <h1>What Does WWF Do?</h1>
    <p>WWF's mission:</p>
  </header>
  <p>WWF's mission is to stop the degradation of our planet's natural environment, and build a future in which humans live in harmony with nature.</p>
</article>
```

:::

## \<footer> 元素

`<footer>` 元素为文档或节规定页脚。

`<footer>` 元素应该提供有关其包含元素的信息。

页脚通常包含文档的作者、版权信息、使用条款链接、联系信息等等。

您可以在一个文档中使用多个 `<footer>` 元素。例如：

::: normal-demo 演示

```html
<footer>
  <p>Posted by: Hege Refsnes</p>
  <p>Contact information: <a href="mailto:someone@example.com">
      someone@example.com</a>.</p>
</footer>
```

:::

## \<nav> 元素

`<nav>` 元素定义导航链接集合。

`<nav>` 元素旨在定义大型的导航链接块。

::: note
并非文档中所有链接都应该位于 `<nav>` 元素中
:::

例如：

::: normal-demo 演示

```html
<nav>
  <a href="https://www.w3school.com.cn/html/html5_intro.asp">HTML</a> |
  <a href="https://www.w3school.com.cn/css/index.asp">CSS</a> |
  <a href="https://www.w3school.com.cn/js/index.asp">JavaScript</a>
</nav>
```

:::

## \<aside> 元素

`<aside>` 元素页面主内容之外的某些内容（比如：侧栏）。

aside 内容应该与周围内容相关。例如：

::: normal-demo 演示

```html
<aside>
  <h4>Epcot Center</h4>
  <p>The Epcot Center is a theme park in Disney World, Florida.</p>
</aside>
```

:::

## \<figure> 和 \<figcaption> 元素

在书籍和报纸中，与图片搭配的标题很常见。

标题（caption）的作用是为图片添加可见的解释。

通过 HTML5，图片和标题能够被组合在 `<figure>` 元素中。例如：

::: normal-demo 演示

```html
<p>The Epcot Center is a theme park in Disney World, Florida.</p>

<figure>
  <img src="img_pulpit.jpg" alt="The Pulpit Rock" width="304" height="228">
  <figcaption>Fig.1 - The Pulpit Rock, Norway.</figcaption>
</figure>
```

:::

::: tip
`<img>` 元素定义图像，`<figcaption>` 元素定义标题。
:::

## 为何使用 HTML5 元素

如果使用 HTML4 的话，开发者会使用他们喜爱的属性名来设置页面元素的样式：

`header`、`top`、`bottom`、`footer`、`menu`、`navigation`、`main`、`container`、`content`、`article`、`sidebar`、`topnav` 等等

如此，浏览器便无法识别正确的网页内容。

而通过 HTML5 元素，比如：`<header>`、`<footer>`、`<nav>`、`<section>`、`<article>`，此问题迎刃而解。

::: info
根据 W3C，语义网：“允许跨应用程序、企业和团体对数据进行分享和重用。”
:::

