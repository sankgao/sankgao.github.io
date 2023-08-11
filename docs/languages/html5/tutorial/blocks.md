---
title: 块
icon: block
date: 2023-05-08
category: Frontend
tag:
    - HTML5
---

可以通过 `<div>` 和 `<span>` 将 HTML 元素组合起来。

## HTML 块元素

大多数 HTML 元素被定义为块级元素或内联元素。

::: note
“块级元素” 译为 block level element，“内联元素” 译为 inline element。
:::

块级元素在浏览器显示时，通常会以新行来开始（和结束）。

例如：`<h1>`、`<p>`、`<ul>`、`<table>`

## HTML 内联元素

内联元素在显示时通常不会以新行开始。

例子：`<b>`、`<td>`、`<a>`、`<img>`

## HTML \<div> 元素

HTML `<div>` 元素是块级元素，可用于组合其他 HTML 元素的容器。

`<div>` 元素没有特定的含义。由于它属于块级元素，浏览器会在其前后显示折行。

如果与 CSS 一同使用，`<div>` 元素可用于对大的内容块设置样式属性。

`<div>` 元素的另一个常见的用途是文档布局。它取代了使用表格定义布局的老式方法。使用 `<table>` 元素进行文档布局不是表格的正确用法。`<table>` 元素的作用是显示表格化的数据。

::: normal-demo 演示

```html
<h3>This is a header</h3>
<p>This is a paragraph.</p>

<div style="color:#00FF00">
  <h3>This is a header</h3>
  <p>This is a paragraph.</p>
</div>
```

:::

## HTML \<span> 元素

HTML `<span>` 元素是内联元素，可用作文本的容器。

`<span>` 元素也没有特定的含义。用来组合文档中的行内元素。

当与 CSS 一同使用时，`<span>` 元素可用于为部分文本设置样式属性。

::: normal-demo 演示

```html
<p class="tip"><span>some text.</span>some other text.</p>
```

```css
p.tip span {
  font-weight: bold;
  color: #ff9955;
}
```

:::

::: note
如果不对 `span` 应用 **样式**，那么 `span` 元素中的文本与其他文本不会感觉有任何视觉上的差异
:::

