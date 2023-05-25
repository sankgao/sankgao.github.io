---
title: 框模型
icon: box-model
date: 2023-05-16
category: Frontend
tag:
    - CSS3
---

所有 HTML 元素都可以视为方框。在 CSS 中，在谈论设计和布局时，会使用术语 “盒模型” 或 “框模型”。

CSS 框模型实质上是一个包围每个 HTML 元素的框。它包括：外边距、边框、内边距以及实际的内容。框模型如下所示：

```text
      border
    ╰┈┈┈┬┈┈┈┈╯ 
╭┈┈┈┈┈┈┈┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆       ┆       margin              ┆
┆    ╭┈┈┴┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮    ┆
┆    ┆         padding         ┆    ┆
┆    ┆    ┬  ╭┈┈┈┈┈┈┈┈┈╮       ┆    ┆
┆    ┆       ┆         ┆       ┆    ┆
┆    ┆ height┆  text   ┆       ┆    ┆
┆    ┆       ┆         ┆       ┆    ┆
┆    ┆    ┴  ╰┈┈┈┈┈┈┈┈┈╯       ┆    ┆
┆    ┆       ├  width  ┤       ┆    ┆
┆    ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯    ┆
┆                                   ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ 
```

- **text（内容）**：框的内容，其中显示文本和图像
- **padding（内边距）**：清除内容周围的区域。内边距是透明的
- **border（边框）**：围绕内边距和内容的边框
- **margin（外边距）**：清除边界外的区域。外边距是透明的
- **heigh（高度）**：内容区域的高度
- **width（宽度）**：内容区域的宽度

框模型允许在元素周围添加边框，并定义元素之间的空间。

元素框的 **最内部分是实际的内容**，直接包围内容的是内边距。内边距呈现了元素的背景。内边距的边缘是边框。边框以外是外边距，外边距默认是透明的，因此不会遮挡其后的任何元素。

::: tip
背景应用于由内容和内边距、边框组成的区域
:::

内边距、边框和外边距都是可选的，默认值是零。但是，许多元素将由用户代理样式表设置外边距和内边距。可以通过将元素的 `margin` 和 `padding` 设置为零来覆盖这些浏览器样式。这可以分别进行，也可以使用通用选择器对所有元素进行设置。例如：

```css
* {
  margin: 0;
  padding: 0;
}
```

在 CSS 中，`width` 和 `height` 指的是内容区域的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。

假设框的每个边上有 10 个像素的外边距和 5 个像素的内边距。如果希望这个元素框达到 100 个像素，就需要将内容的宽度设置为 70 像素。如下所示：

```text
  10px  5px        70px        5px  10px
←┈┈┈┈┈→←┈┈→←┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈→←┈┈→←┈┈┈┈┈→
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆              argin: 10px              ┆
┆      ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮      ┆
┆      ┆      padding: 5px       ┆      ┆
┆      ┆   ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮   ┆      ┆
┆      ┆   ┆                 ┆   ┆      ┆
┆      ┆   ┆      text       ┆   ┆      ┆
┆      ┆   ┆                 ┆   ┆      ┆
┆      ┆   ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯   ┆      ┆
┆      ┆   ├   width: 70px   ┤   ┆      ┆
┆      ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯      ┆
┆                                       ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ 
```

```css
#box {
  width: 70px;
  margin: 10px;
  padding: 5px;
}
```

::: tip
内边距、边框和外边距可以应用于一个元素的所有边，也可以应用于单独的边

外边距可以是负值，而且在很多情况下都要使用负值的外边距

内边距不可以是负值
:::

例如：演示框模型。

::: normal-demo 演示

```html
<p>CSS 盒模型（框模型）实质上是一个包装每个 HTML 元素的盒子。它包括：边框、内边距（填充）、外边距以及实际的内容。</p>

<div>
  此文本是盒子里的内容。添加了 50px 的内边距，20px 的外边距和 15px 的绿色边框。<br />
  此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。此文本是盒子里的内容。
</div>
```

```css
div {
  background-color: lightgrey;
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
```

:::

## 元素的宽度和高度

为了在所有浏览器中正确设置元素的宽度和高度，您需要了解框模型如何工作。

::: warning
使用 CSS 设置元素的 `width` 和 `height` 属性时，只需设置内容区域的宽度和高度。要计算元素的完整大小，还必须把内边距、边框和外边距加起来
:::

例如：`<div>` 元素的总宽度将是 `350px`。

::: normal-demo 演示

```html
<img src="/background.png" width="350" height="263" alt="background" />

<div>上面的图片宽 350 像素。此因素的总宽也是 350 像素。</div>
```

```css
div {
  width: 320px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}
```

:::

**计算如下：**

- **元素总宽度** = 320px（宽度） + 10px（左内边距） + 10px（右内边距） + 5px（左边框） + 5px（右边框） + 0px（左外边距） + 0px（右外边距）
- **元素总高度** = 高度 + 上内边距 + 下内边距 + 上边框 + 下边框 + 上外边距 + 下外边距
