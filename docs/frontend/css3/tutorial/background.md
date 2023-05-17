---
title: 背景
icon: background
date: 2023-05-15
category: Frontend
tag:
    - CSS3
---

CSS 背景属性用于定义元素的背景效果。

## CSS 指定元素的背景色

`background-color` 属性指定元素的背景色。

例如：

::: normal-demo 演示

```html
<h1>Hello World!</h1>

<p>此页面拥有浅蓝色背景色！</p>
```

```css
body {
  background-color: lightblue;
}
```

:::

通过 CSS，颜色通常由以下方式指定：

- **颜色名称**。例如：`red`
- **十六进制值**。例如：`#ff0000`
- **RGB 值**。例如：`rgb(255,0,0)`

### 其他元素

您可以为任何 HTML 元素设置背景颜色。

例如：以下 `<h1>`、`<p>` 和 `<div>` 元素将拥有不同的背景色。

::: normal-demo 演示

```html
<h1>CSS background-color 实例</h1>

<div>
  这是 div 元素内的文本。
  <p>本段有其自己的背景色。</p>
  我们仍然在 div 元素中。
</div>
```

```css
h1 {
  background-color: green;
}

div {
  background-color: lightblue;
}

p {
  background-color: yellow;
}
```

:::

### 不透明度/透明度

`opacity` 属性指定元素的 **不透明度/透明度**。取值范围为 `0.0-1.0`。值越低，越透明。例如：

::: normal-demo 演示

```html
<h1 class="first">opacity 0.1</h1>
<h1 class="second">opacity 0.3</h1>
<h1 class="third">opacity 0.6</h1>
<h1>opacity 1（默认）</h1>
```

```css
h1 {
  background-color: green;
}

h1.first {
  opacity: 0.1;
}

h1.second {
  opacity: 0.3;
}

h1.third {
  opacity: 0.6;
}
```

:::

::: tip
使用 `opacity` 属性为元素的背景添加透明度时，其所有子元素都继承相同的透明度。这可能会使完全透明的元素内的文本难以阅读
:::

### 使用 RGBA 的透明度

如果您不希望对子元素应用不透明度，请使用 `RGBA` 颜色值。例如：

::: normal-demo 演示

```html
<h1 class="first">opacity 0.1</h1>
<h1 class="second">opacity 0.3</h1>
<h1 class="third">opacity 0.6</h1>
<h1>opacity 1（默认）</h1>
```

```css
h1 {
  background: rgb(0, 128, 0);
}

h1.first {
  background: rgba(0, 128, 0, 0.1);
}

h1.second {
  background: rgba(0, 128, 0, 0.3);
}

h1.third {
  background: rgba(0, 128, 0, 0.6);
}
```

:::

## CSS 背景图像

`background-image` 属性指定用作元素背景的图像。还可以为特定元素设置背景图像。例如：`<p>` 元素。

默认情况下，图像会重复，以覆盖整个元素。例如：

::: normal-demo 演示

```html
<h1>Hello World!</h1>

<p>此页面以图像为背景！</p>
```

```css
body {
  background-image: url("https://www.w3school.com.cn/i/css/bgdesert.jpg");
}
```

:::

::: tip
使用背景图像时，请使用不会干扰文本的图像
:::

还可以为特定元素设置背景图像。例如：`<p>` 元素。

::: normal-demo 演示

```html
<h1>Hello World!</h1>

<p>本段以一幅图像作为背景！</p>
```

```css
p {
  background-image: url("https://www.w3school.com.cn/i/paper.jpg");
}
```

:::

## CSS 背景重复

默认情况下，`background-image` 属性在水平和垂直方向上都重复图像。

某些图像应只适合水平或垂直方向上重复，否则它们看起来会很奇怪。例如：

::: normal-demo 演示

```html
<h1>Hello World!</h1>

<p>奇怪的背景图片...</p>
```

```css
body {
  background-image: url("https://www.w3school.com.cn/i/css/gradient_bg.png");
}
```

:::

### 水平方向重复

使用 `background-repeat` 属性可以让背景看起来会更好。例如：

::: normal-demo 演示

```html
<h1>Hello World!</h1>

<p>在这里，背景图像仅在水平方向上重复！</p>
```

```css
body {
  background-image: url("https://www.w3school.com.cn/i/css/gradient_bg.png");
  background-repeat: repeat-x;
}
```

:::

- **background-repeat**：属性设置是否及如何重复背景图像
    - **repeat-x**：图像仅在水平方向重复
    - **repeat-y**：图像仅在垂直方向重复
    - **no-repeat**：背景图像将仅显示一次

### CSS 指定背景图像的位置

使用 `background-position` 属性可以指定图像的位置。例如：

::: normal-demo 演示

```html
<h1>Hello World!</h1>

<p>在这里，背景图像仅在水平方向上重复！</p>
```

```css
body {
  background-image: url("https://www.w3school.com.cn/i/photo/tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  margin-right: 200px;
}
```

:::

- **background-position**：属性用于指定背景图像的位置，值的位置 **可以互换**

    - **top left**：上左角
    - **top center**：上中角
    - **top right**：上右角
    - **center left**：中左角
    - **center center**：中中角
    - **center right**：中右角
    - **bottom left**：下左角
    - **bottom center**：下中角
    - **bottom right**：下右角

- **margin-right**：属性设置元素的右外边距，使文本不会覆盖背景图片

## CSS 背景附着

### CSS 指定背景图像是否固定

指定应该固定背景图像。例如：

::: normal-demo 演示

```html
<h1>background-attachment 属性</h1>

<p>background-attachment 属性指定背景图像是应该滚动还是固定的（不会随页面的其余部分滚动）。</p>

<p><b>提示：</b>如果看不到任何滚动条，请尝试调整浏览器窗口的大小。</p>

<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
<p>背景图像是固定的。请尝试向下滚动页面。</p>
```

```css
body {
  background-image: url("https://www.w3school.com.cn/i/photo/tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  margin-right: 200px;
  background-attachment: fixed;
}
```

:::

- **background-attachment**：属性指定背景图像是应该 **滚动** 还是 **固定** 的（不会随页面的其余部分一起滚动）
    - **fixed**：当页面的其余部分滚动时，背景图像 **不会移动**
    - **scroll**：背景图像会 **随着页面** 其余部分的滚动而 **移动**

## CSS 背景简写

### CSS background 简写属性

如需缩短代码，也可以在一个 `background` 属性中指定所有背景属性。它被称为 **简写属性。**

而不是这样写：

```css
body {
  background-color: #ffffff;
  background-image: url("tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}
```

使用简写属性在一条声明中设置背景属性。例如：

::: normal-demo 演示

```html
<h1>background 属性</h1>

<p>background 属性是在一条声明中指定所有背景属性的简写属性。</p>

<p>在这里，背景图像只显示一次，并位于右上角。</p>

<p>我们还添加了右外边距，以使文本不会覆盖背景图片。</p>
```

```css
body {
  background: #ffffff url("https://www.w3school.com.cn/i/photo/tree.png") no-repeat right top;
  margin-right: 200px;
}
```

:::

在使用简写属性时，属性值的顺序为：

- `background-color`
- `background-image`
- `background-repeat`
- `background-attachment`
- `background-position`

属性值之一缺失并不要紧，只要按照此顺序设置其他值即可。请注意，在上面的例子中，没有使用 `background-attachment` 属性，因为它没有值。

