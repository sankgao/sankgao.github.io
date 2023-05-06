---
title: CSS
icon: css3
date: 2023-05-06
category: Frontend
tag:
    - HTML5
---

通过使用 HTML4.0，所有的 **格式化代码** 均可移出 HTML 文档，然后移入一个独立的 **样式表。**

## 如何使用样式

当浏览器读到一个样式表，它就会按照这个样式表来对文档 **进行格式化**。有以下三种方式来插入样式表：

### 外部样式表

当样式需要被应用到很多页面的时候，外部样式表将是理想的选择。使用外部样式表，您就可以通过更改一个文件来改变整个站点的外观。

```html
<head>
  <link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

### 内部样式表

当单个文件需要特别样式时，就可以使用内部样式表。您可以在 `<head>` 标签部分通过 `<style>` 标签定义内部样式表。

```html
<head>
  <style type="text/css">
    body {
      background-color: red
    }

    p {
      margin-left: 20px
    }
  </style>
</head>
```

### 内联样式

当特殊的样式需要应用到个别元素时，就可以使用内联样式。使用内联样式的方法是在相关的标签中使用样式属性。样式属性可以包含任何 CSS 属性。例如：改变段落的颜色和左外边距。

```html
<p style="color: red; margin-left: 20px">
  This is a paragraph
</p>
```

## CSS 样式实例

- HTML 中的样式

    使用添加到 `<head>` 部分的样式信息对 HTML 进行格式化。

    ::: normal-demo 演示
    
    ```html
    <html>

    <head>
      <style type="text/css">
        h1 {
          color: red
        }

        p {
          color: blue
        }
      </style>
    </head>

    <body>
      <h1>header 1</h1>
      <p>A paragraph.</p>
    </body>

    </html>
    ```
    
    :::

- 没有下划线的链接

    使用样式属性做一个没有下划线的链接。

    ::: normal-demo 演示
    
    ```html
    <html>

    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
      <meta http-equiv="Content-Language" content="zh-cn" />
    </head>

    <body>

      <a href="http://www.w3school.com.cn" style="text-decoration:none">
        这是一个链接！
      </a>

    </body>

    </html>
    ```
    
    :::

- 链接到一个外部样式表

    使用 `<link>` 标签链接到一个外部样式表。

    ::: normal-demo 演示
    
    ```html
    <html>

    <head>
      <link rel="stylesheet" type="text/css" href="./csstest1.css">
    </head>

    <body>
      <h1>我通过外部样式表进行格式化。</h1>
      <p>我也一样！</p>
    </body>

    </html>
    ```

    ```css
    h1 {
      color: green;
      border: 1pt solid black;
    }

    p {
      color: red;
      background-color: #efe7d6;
      border: 1pt solid black;
    }

    div {
      color: #ffffff;
      background-color: #000000;
    }

    span {
      color: #000000;
      background-color: #ffffff;
    }
    ```
    
    :::

访问 CSS 教程，学习更多有关样式的知识。

