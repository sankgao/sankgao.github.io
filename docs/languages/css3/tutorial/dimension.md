---
title: 高度和宽度
icon: dimensions
date: 2023-05-16
category: Frontend
tag:
    - CSS3
---

`height` 和 `width` 属性用于设置元素的高度和宽度。

`height` 和 `width` 属性不包括内边距、边框或外边距。它设置的是元素内边距、边框以及外边距内的区域的高度或宽度。例如：

::: normal-demo 演示

```html
<div>这个 div 元素的高度为 200 像素，宽度为 50%</div>
```

```css
div {
  height: 200px;
  width: 50%;
  background-color: powderblue;
}
```

:::

## CSS 高度和宽度值

`height` 和 `width` 属性可设置如下值：

- **auto**：浏览器计算高度和宽度。默认
- **length**：以 `px`、`cm` 等定义高度或宽度
- **%**：以包含块的百分比定义高度或宽度
- **initial**：将高度或宽度设置为默认值
- **inherit**：从其父值继承高度或宽度

## 设置 max-width

`max-width` 属性用于设置元素的最大宽度。

可以用长度值（例如：`px`、`cm` 等）或包含块的百分比（`％`）来指定 `max-width`（最大宽度），也可以将其设置为 `none`（默认值。意味着没有最大宽度）。

当浏览器窗口小于元素的宽度（500px）时，会发生之前那个 `<div>` 的问题。然后，浏览器会将水平滚动条添加到页面。

在这种情况下，使用 `max-width` 能够改善浏览器对小窗口的处理。

将浏览器窗口拖动到小于 500px 的宽度，以查看两个 `div` 之间的区别。例如：

::: normal-demo 演示

```html
<p>这个 div 元素的高度为 100 像素，最大宽度为 500 像素：</p>
<div></div>

<p>请调整浏览器窗口来查看效果。</p>
```

```css
div {
  max-width: 500px;
  height: 100px;
  background-color: powderblue;
}
```

:::

::: tip
`max-width` 属性的值将覆盖 `width`（宽度）
:::

## 设置 CSS 尺寸属性

- **height**：设置元素的高度
- **max-height**：设置元素的最大高度
- **min-height**：设置元素的最小高度
- **width**：设置元素的宽度
- **max-width**：设置元素的最大宽度
- **min-width**：设置元素的最小宽度

