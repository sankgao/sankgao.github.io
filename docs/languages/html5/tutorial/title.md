---
title: 标题
icon: title
date: 2023-05-05
category: Frontend
tag:
    - HTML5
---

HTML 标题（Heading）是通过 `<h1>`~`<h6>` 标签进行定义的。

`<h1>` 定义最大的标题，`<h6>` 定义最小的标题。例如：

::: normal-demo 演示

```html
<h1>This is a heading</h1>
<h2>This is a heading</h2>
<h3>This is a heading</h3>
<h4>This is a heading</h4>
<h5>This is a heading</h5>
<h6>This is a heading</h6>
```

:::

::: tip
浏览器会自动地在标题的前后添加空行

默认情况下，HTML 会自动地在块级元素前后添加一个额外的空行。比如：段落、标题元素前后
:::

## 标题很重要

请确保将 `<h1>`~`<h6>` 标签只用于标题。不要仅仅是为了产生粗体或大号的文本而使用标题。

搜索引擎使用标题为您网页的结构和内容编制索引。

通过标题可以快速浏览您的网页，所以用标题来呈现文档结构是很重要的。

应该将 `<h1>` 用作主标题（最重要的），其后是 `<h2>`（次重要的），再其次是 `<h3>`，以此类推。

## HTML 水平线

`<hr />` 标签在 HTML 页面中创建水平线。例如：

::: normal-demo 演示

```html
<p>This is a paragraph</p>
<hr />
<p>This is a paragraph</p>
<hr />
<p>This is a paragraph</p>
```

:::

## HTML 注释

将注释（`<!-- 注释 -->`）插入 HTML 代码中，这样可以提高其 **可读性**，使代码更易被人理解。浏览器会忽略注释，也不会显示它们。例如：

::: normal-demo 演示

```html
<!-- This is a comment -->
<p>这是一段普通的段落。</p>
```

:::

::: tip
这里不显示 This is a comment 这句话，通过 `<!-- This is a comment -->` 语法进行注释
:::

