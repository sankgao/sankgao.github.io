---
title: 列表
icon: list
date: 2023-05-17
category: Frontend
tag:
    - CSS3
---

## HTML 列表和 CSS 列表属性

在 HTML 中，列表主要有两种类型：

- 无序列表（`<ul>`）- 列表项用的是项目符号标记
- 有序列表（`<ol>`）- 列表项用的是数字或字母标记

CSS 列表属性使您可以：

- 为有序列表设置不同的列表项标记
- 为无序列表设置不同的列表项标记
- 将图像设置为列表项标记
- 为列表和列表项添加背景色

## 不同的列表项目标记

`list-style-type` 属性指定列表项标记的类型。例如：

::: normal-demo 演示

```html
<p>无序列表实例：</p>
<ul class="a">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>

<ul class="b">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>

<p>有序列表实例：</p>
<ol class="c">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

<ol class="d">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>
```

```css
ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman;
}

ol.d {
  list-style-type: lower-alpha;
}
```

:::

## 图像作为列表项标记

`list-style-image` 属性将图像指定为列表项标记。例如：

::: normal-demo 演示

```html
<p>list-style-image 属性规定图像作为列表项标记：</p>

<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>
```

```css
ul {
  list-style-image: url('/html5/sqpurple.gif');
}
```

:::

## 定位列表项标记

`list-style-position` 属性指定列表项标记（项目符号）的位置。

- **outside**：表示项目符号点将在列表项之外。列表项每行的开头将垂直对齐。这是默认的
- **inside**：表示项目符号将在列表项内。由于它是列表项的一部分，因此它将成为文本的一部分，并在开头推开文本

例如：

::: normal-demo 演示

```html
<p>list-style-position: outside 属性规定图像作为列表项标记：</p>

<ul class="a">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>

<p>list-style-position: inside 属性规定图像作为列表项标记：</p>

<ul class="b">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>
```

```css
ul.a {
  list-style-position: outside;
}

ul.b {
  list-style-position: inside;
}
```

:::

## 删除默认设置

`list-style-type` 属性 `none` 值可以用于删除标记或项目符号。

列表还拥有默认的 **外边距** 和 **内边距**。要删除此内容，请在 `<ul>` 或 `<ol>` 中添加 `margin: 0` 和 `padding: 0`。例如：

::: normal-demo 演示

```html
<p>默认列表：</p>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>

<p>删除项目符号、外边距和内边距：</p>
<ul class="demo">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>
```

```css
ul.demo {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```

:::

## 简写属性

`list-style` 属性是一种简写属性。它用于在一条声明中设置所有列表属性。例如：

::: normal-demo 演示

```html
<p>list-style 属性是简写属性，用于在一条声明中设置所有列表属性。</p>

<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>
```

```css
ul {
  list-style: square inside url('/html5/sqpurple.gif');
}
```

:::

在使用简写属性时，属性值的顺序为：

- **list-style-type**：如果指定了 `list-style-image`，那么在由于某种原因而无法显示图像时，会显示这个属性的值
- **list-style-position**：指定列表项标记应显示在内容流的内部还是外部
- **list-style-image**：将图像指定为列表项标记

如果缺少上述属性值之一，则将插入缺失属性的默认值（如果有）。

## 设置列表的颜色样式

可以使用颜色设置列表样式，使它们看起来更有趣。

添加到 `<ol>` 或 `<ul>` 标记的任何样式都会影响整个列表，而添加到 `<li>` 标记的属性将影响各个列表项。例如：

::: normal-demo 演示

```html
<p>设置列表的颜色样式：</p>
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>
```

```css
ol {
  background: #ff9999;
  padding: 20px;
}

ul {
  background: #3399ff;
  padding: 20px;
}

ol li {
  background: #ffe5e5;
  padding: 5px;
  margin-left: 35px;
}

ul li {
  background: #cce5ff;
  margin: 5px;
}
```

:::

