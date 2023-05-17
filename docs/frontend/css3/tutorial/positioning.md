---
title: 定位
icon: positioning
date: 2023-05-17
category: Frontend
tag:
    - CSS3
---

`position` 属性规定应用于元素的定位方法的类型。

有五个不同的位置值：

- **static**
- **relative**
- **fixed**
- **absolute**
- **sticky**

元素其实是使用 `top`、`bottom`、`left` 以及 `right` 属性定位的。但是，除非首先设置了 `position` 属性，否则这些属性将不起作用。根据不同的 `position` 值，它们的工作方式也不同。

## position: static;

HTML 元素默认情况下的定位方式为 static（静态）。

静态定位的元素不受 `top`、`bottom`、`left` 以及 `right` 属性的影响。

`position: static;` 的元素不会以任何特殊方式定位；它始终根据页面的正常流进行定位。例如：

::: normal-demo 演示

```html
<div class="static">
  这个 div 元素设置 position: static;
</div>
```

```css
div.static {
  position: static;
  left: 30px;
  border: 3px solid #73AD21;
}
```

:::

## position: relative;

`position: relative;` 的元素相对于其正常位置进行定位。

设置相对定位的元素的 `top`、`bottom`、`left` 以及 `right` 属性将导致其偏离其正常位置进行调整。不会对其余内容进行调整来适应元素留下的任何空间。例如：

::: normal-demo 演示

```html
<div class="relative">
  这个 div 元素设置 position: relative;
</div>
```

```css
div.relative {
  position: relative;
  left: 30px;
  border: 3px solid #73AD21;
}
```

:::

## position: fixed;

`position: fixed;` 的元素是相对于视口定位的，这意味着即使滚动页面，它也始终位于同一位置。`top`、`bottom`、`left` 以及 `right` 属性用于定位此元素。

固定定位的元素不会在页面中通常在放置的位置上留出空隙。

请注意页面右下角的这个固定元素。例如：

::: normal-demo 演示

```html
<div class="fixed">
  这个 div 元素设置 position: fixed;
</div>
```

```css
div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}
```

:::

## position: absolute;

`position: absolute;` 的元素相对于最近的定位祖先元素进行定位（而不是相对于视口定位。如：`fixed`）。

然而，如果绝对定位的元素没有祖先，它将使用文档主体（body），并随页面滚动一起移动。

::: tip 被定位的元素
被定位的元素是其位置除 `static` 以外的任何元素
:::

例如：

::: normal-demo 演示

```html
<div class="relative">这个 div 元素设置 position: relative;
  <div class="absolute">这个 div 元素设置 position: absolute;</div>
</div>
```

```css
div.relative {
  position: relative;
  width: 400px;
  height: 200px;
  border: 3px solid #73AD21;
} 

div.absolute {
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  height: 100px;
  border: 3px solid #73AD21;
}
```

:::

## position: sticky;

`position: sticky;` 的元素根据用户的滚动位置进行定位。

粘性元素根据滚动位置在相对（`relative`）和固定（`fixed`）之间切换。起先它会被相对定位，直到在视口中遇到给定的偏移位置为止，然后将其 “粘贴” 在适当的位置（比如：`position:fixed`）。

在到达其滚动位置时，`sticky` 元素将停留在页面顶部（`top: 0`）。例如：

::: normal-demo 演示

```html
<p>请试着在这个框架内<b>滚动</b>页面，以理解粘性定位的原理。</p>

<div class="sticky">我是有粘性的！</div>

<div style="padding-bottom: 2000px">
  <p>在此例中，当您到达元素的滚动位置时，粘性元素将停留在页面顶部（top: 0）。</p>
  <p>向上滚动以消除粘性。</p>
  <p>一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..</p>
  <p>一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..</p>
</div>
```

```css
div.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 5px;
  background-color: #cae8ca;
  border: 2px solid #4CAF50;
}
```

:::

::: tip
Internet Explorer、Edge 15 以及更早的版本不支持粘性定位。Safari 需要 `-webkit-` 前缀。您还必须至少指定 `top`、`right`、`bottom` 或 `left` 之一，以便粘性定位起作用。
:::

## 重叠元素

在对元素进行定位时，它们可以与其他元素重叠。

`z-index` 属性指定元素的堆栈顺序（哪个元素应放置在其他元素的前面或后面）。

元素可以设置正或负的堆叠顺序。例如：

::: normal-demo 演示

```html
<h1>这是标题</h1>

<img src="/html5/eg_sun.gif" />

<p>由于图像的 z-index 为 -1，它将被置于文本之后。</p>
```

```css
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```

:::

具有较高堆叠顺序的元素始终位于具有较低堆叠顺序的元素之前。

::: tip
如果两个定位的元素重叠而未指定 z-index，则位于 HTML 代码中最后的元素将显示在顶部
:::

## 定位图像中的文本

例如：

::: normal-demo 演示

```html
<div class="container">
  <img src="/background.png" alt="background" width="800" height="450" />
  <div class="topleft">Top Left</div>
  <div class="topright">Top Right</div>
  <div class="bottomleft">Bottom Left</div>
  <div class="bottomright">Bottom Right</div>
  <div class="center">Centered</div>
</div>
```

```css
.container {
  position: relative;
}

.topleft {
  position: absolute;
  top: 8px;
  left: 16px;
  font-size: 18px;
}

.topright {
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: 18px;
}

.bottomleft {
  position: absolute;
  bottom: 8px;
  left: 16px;
  font-size: 18px;
}

.bottomright {
  position: absolute;
  bottom: 8px;
  right: 16px;
  font-size: 18px;
}

.center {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  font-size: 18px;
}

img { 
  width: 100%;
  height: auto;
  opacity: 0.3;
}
```

:::

## 设置元素的形状

元素被裁剪为这种形状并显示。例如：

::: normal-demo 演示

```html
<img src="/background.png" alt="background" width="800" height="450" />
```

```css
img {
  position: absolute;
  clip: rect(0px,60px,200px,0px);
}
```

:::

