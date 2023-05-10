---
title: 布局
icon: layout
date: 2023-05-08
category: Frontend
tag:
    - HTML5
---

网站常常以多列显示内容（就像杂志和报纸）。

## 使用 \<div> 元素的 HTML 布局

`<div>` 元素常用作布局工具，因为能够轻松地通过 CSS 对其进行定位。例如：

::: normal-demo 演示

```html
<head>
  <style>
    #header {
      background-color: black;
      color: white;
      text-align: center;
      padding: 5px;
    }

    #nav {
      line-height: 30px;
      background-color: #eeeeee;
      height: 300px;
      width: 100px;
      float: left;
      padding: 5px;
    }

    #section {
      width: 350px;
      float: left;
      padding: 10px;
    }

    #footer {
      background-color: black;
      color: white;
      clear: both;
      text-align: center;
      padding: 5px;
    }
  </style>
</head>

<div id="header">
  <h1>City Gallery</h1>
</div>

<div id="nav">
  London<br />
  Paris<br />
  Tokyo<br />
</div>

<div id="section">
  <h2>London</h2>
  <p>
    London is the capital city of England. It is the most populous city in the United Kingdom,
    with a metropolitan area of over 13 million inhabitants.
  </p>
  <p>
    Standing on the River Thames, London has been a major settlement for two millennia,
    its history going back to its founding by the Romans, who named it Londinium.
  </p>
</div>

<div id="footer">
  Copyright ? W3Schools.com
</div>
```

:::

## 使用 HTML5 的网站布局

HTML5 提供的新语义元素定义了网页的不同部分。HTML5 语义元素如下：

|  标签  |  说明  |
|  :----:  |  :----  |
|  header  |  定义文档或节的页眉  |
|  nav  |  定义导航链接的容器  |
|  section  |  定义文档中的节  |
|  article  |  定义独立的自包含文章  |
|  aside  |  定义内容之外的内容（比如：侧栏）  |
|  footer  |  定义文档或节的页脚  |
|  details  |  定义额外的细节  |
|  summary  |  定义 `details` 元素的标题  |

::: normal-demo 演示

```html
<head>
  <style>
    header {
      background-color: black;
      color: white;
      text-align: center;
      padding: 5px;
    }

    nav {
      line-height: 30px;
      background-color: #eeeeee;
      height: 300px;
      width: 100px;
      float: left;
      padding: 5px;
    }

    section {
      width: 350px;
      float: left;
      padding: 10px;
    }

    footer {
      background-color: black;
      color: white;
      clear: both;
      text-align: center;
      padding: 5px;
    }
  </style>
</head>

<header>
  <h1>City Gallery</h1>
</header>

<nav>
  London<br />
  Paris<br />
  Tokyo<br />
</nav>

<section>
  <h1>London</h1>
  <p>
    London is the capital city of England. It is the most populous city in the United Kingdom,
    with a metropolitan area of over 13 million inhabitants.
  </p>
  <p>
    Standing on the River Thames, London has been a major settlement for two millennia,
    its history going back to its founding by the Romans, who named it Londinium.
  </p>
</section>

<footer>
  Copyright W3Schools.com
</footer>
```

:::

## 使用表格的 HTML 布局

::: tip
`<table>` 元素不是作为布局工具而设计的

`<table>` 元素的作用是显示表格化的数据
:::

使用 `<table>` 元素能够取得布局效果，因为能够通过 CSS 设置表格元素的样式。例如：

::: normal-demo 演示

```html
<head>
  <style>
    table.lamp {
      width: 100%;
      border: 1px solid #d4d4d4;
    }

    table.lamp th,
    td {
      padding: 10px;
    }

    table.lamp th {
      width: 40px;
    }
  </style>
</head>

<table class="lamp">
  <tr>
    <th>
      <img src="/html5/eg_cute.gif" alt="Note" style="height:32px;width:32px">
    </th>
    <td>
      The table element was not designed to be a layout tool.
    </td>
  </tr>
</table>
```

:::

