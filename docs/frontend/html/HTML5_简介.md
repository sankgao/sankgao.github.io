<!-- TOC -->

- [HTML5 简介](#html5-简介)
    - [什么是 HTML5](#什么是-html5)
    - [HTML5 中的新内容](#html5-中的新内容)
    - [HTML5 新的属性语法](#html5-新的属性语法)
    - [HTML5 新特性](#html5-新特性)
    - [HTML5 被删元素](#html5-被删元素)

<!-- /TOC -->

# HTML5 简介

## 什么是 HTML5

- HTML5 是最新的 HTML 标准
- HTML5 是专门为承载丰富的 web 内容而设计的，并且无需额外插件
- HTML5 拥有新的语义、图形以及多媒体元素
- HTML5 提供的新元素和新的 API 简化了 web 应用程序的搭建
- HTML5 是跨平台的，被设计为在不同类型的硬件（PC、平板、手机、电视机等等）之上运行

## HTML5 中的新内容

HTML5 的新的文档类型（DOCTYPE）声明非常简单：

```html
<!DOCTYPE html>
The new character encoding (charset) declaration is also very simple:

<meta charset="UTF-8">
```

**HTML5 实例：**

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Title of the document</title>
</head>

<body>
  Content of the document......
</body>

</html>
```

> HTML5 中默认的字符编码是 UTF-8

## HTML5 新的属性语法

HTML5 标准允许 4 种不同的属性语法。

例如：在 `<input>` 标签中使用的不同语法：

|  类型  |  示例  |
|  :----:  |  :----  |
|  Empty  |  \<input type="text" value="Bill Gates" disabled>  |
|  Unquoted  |  \<input type="text" value=Bill Gates>  |
|  Double-quoted  |  \<input type="text" value="Bill Gates">  |
|  Single-quoted  |  \<input type="text" value='Bill Gates'>  |

在 HTML5 标准中，根据对属性的需求，可能会用到所有 4 种语法。

## HTML5 新特性

HTML5 的一些最有趣的新特性：

- 新的语义元素，比如：`<header>`、`<footer>`、`<article>`、and `<section>`
- 新的表单控件，比如：数字、日期、时间、日历和滑块
- 强大的图像支持（借由 `<canvas>` 和 `<svg>`）
- 强大的多媒体支持（借由 `<video>` 和 `<audio>`）
- 强大的新 API，比如用本地存储取代 cookie

## HTML5 被删元素

以下 HTML 4.01 元素已从 HTML5 中删除：

- \<acronym>
- \<applet>
- \<basefont>
- \<big>
- \<center>
- \<dir>
- \<font>
- \<frame>
- \<frameset>
- \<noframes>
- \<strike>
- \<tt>
