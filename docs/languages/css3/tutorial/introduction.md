---
title: 简介
icon: introduction
date: 2023-05-15
category: Frontend
tag:
    - CSS3
---

CSS 是一种描述 HTML 文档 **样式** 的语言。

CSS 描述应该如何显示 HTML 元素。

## 什么是 CSS

- CSS 指的是 **层叠样式表**（Cascading Style Sheets）是一种 **样式表** 语言
- CSS 描述了如何在屏幕、纸张或其他媒体上的元素应该如何 **被渲染** 的问题
- CSS 节省了大量工作。它可以同时控制多张网页的布局
- 外部样式表存储在 **CSS 文件** 中
- 层叠样式表也称 **级联样式表**

## CSS 解决了一个大问题

HTML 从未打算包含用于格式化网页的标签。

创建 HTML 的目的是描述网页的内容。例如：

```html
<h1>这是一个标题。</h1>

<p>这是一个段落。</p>
```

将 `<font>` 之类的标签和 `color` 属性添加到 HTML3.2 规范后，Web 开发人员的噩梦开始了。大型网站的开发将字体和颜色信息添加到每个页面中，这演变为一个漫长而昂贵的过程。

CSS 从 HTML 页面中删除了样式格式。

## CSS 节省了大量工作

样式定义通常保存在外部 `.css` 文件中。

通过使用外部样式表文件，您只需更改一个文件即可更改整个网站的外观。

## 实例

::: normal-demo 演示

```html
<h1>我的第一个 CSS 实例</h1>
<p>这是一个段落。</p>
```

```css
body {
  background-color: lightblue;
}

h1 {
  color: red;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
```

:::

