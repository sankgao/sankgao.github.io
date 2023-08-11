---
title: max-width
icon: max-width
date: 2023-05-17
category: Frontend
tag:
    - CSS3
---

## 使用 width、max-width 和 margin: auto;

块级元素始终占用可用的全部宽度（尽可能向左和向右伸展）。

设置块级元素的 `width` 将防止其延伸到其容器的边缘。然后，您可以将外边距设置为 `auto`，以将元素在其容器中水平居中。元素将占用指定的宽度，剩余空间将在两个外边距之间平均分配。例如：

::: normal-demo 演示

```html
<div>这个 div 元素的宽度是：500px;</div>
```

```css
div {
  width: 500px;
  margin: auto;
  border: 3px solid #73AD21;
}
```

:::

::: tip
当浏览器窗口小于元素的宽度时，上面这个 `<div>` 会发生问题。浏览器会将水平滚动条添加到页面
:::

在这种情况下，使用 `max-width` 可以改善浏览器对小窗口的处理。为了使网站在小型设备上可用，这一点很重要。例如：

::: normal-demo 演示

```html
<div>这个 div 元素的最大宽度是：500px;</div>
```

```css
div {
  max-width: 500px;
  margin: auto;
  border: 3px solid #73AD21;
}
```

:::

::: tip
将浏览器窗口的大小调整为小于 500 像素，以查看两个 div 之间的区别
:::

