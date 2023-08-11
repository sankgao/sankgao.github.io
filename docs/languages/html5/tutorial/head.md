---
title: 头部
icon: head
date: 2023-05-08
category: Frontend
tag:
    - HTML5
---

## HTML \<head> 元素

`<head>` 元素是所有头部元素的容器。`<head>` 内的元素可包含脚本，指示浏览器在何处可以找到样式表，提供元信息，等等。

以下标签都可以添加到 head 部分：`<title>`、`<base>`、`<link>`、`<meta>`、`<script>` 以及 `<style>`。

## HTML \<title> 元素

`<title>` 标签定义文档的标题。

`title` 元素在所有 HTML/XHTML 文档中都是必需的。

`title` 元素能够：

- 定义浏览器工具栏中的标题
- 提供页面被添加到收藏夹时显示的标题
- 显示在搜索引擎结果中的页面标题

例如：

```html
<head>
  <title>Title of the document</title>
</head>
```

## HTML \<base> 元素

`<base>` 标签为页面上的所有链接规定默认地址或默认目标。例如：

```html
<head>
  <base href="https://www.w3school.com.cn/images/" />
  <base target="_blank" />
</head>
```

- **href**：规定页面中所有相对链接的基准 URL
- **taget**：在何处打开页面中所有的链接

## HTML \<link> 元素

`<link>` 标签定义文档与外部资源之间的关系。例如：

```html
<head>
  <link rel="stylesheet" type="text/css" href="mystyle.css" />
</head>
```

- **rel**：规定当前文档与被链接文档之间的关系
- **type**：规定被链接文档的 MIME 类型
- **href**：规定被链接文档的位置

## HTML \<style> 元素

`<style>` 标签用于为 HTML 文档定义样式信息。

分别定义 `<body>` 和 `<p>` 标签样式。例如：

```html
<head>
  <style type="text/css">
    body {
      background-color: yellow
    }

    p {
      color: blue
    }
  </style>
</head>
```

## HTML \<meta> 元素

元数据（metadata）是关于数据的信息。

- `<meta>` 标签提供关于 HTML 文档的元数据。元数据不会显示在页面上，但是对于机器是可读的
- `<meta>` 标签始终位于 head 元素中

典型的情况是，`meta` 元素被用于规定页面的描述、关键词、文档的作者、最后修改时间以及其他元数据。

元数据可用于浏览器（如何显示内容或重新加载页面）、搜索引擎（关键词）或其他 web 服务。

针对搜索引擎的关键词，一些搜索引擎会利用 `meta` 元素的 `name` 和 `content` 属性来索引您的页面。

`name` 和 `content` 属性的作用是描述页面的内容。例如：

```html
<meta name="description" content="Free Web tutorials on HTML, CSS, XML" />
```

## HTML \<script> 元素

`<script>` 标签用于定义客户端脚本。例如：

```html
<script type="text/javascript">
  document.write("Hello World!")
</script>
```
