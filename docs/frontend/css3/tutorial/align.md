---
title: 对齐
icon: align
date: 2023-05-18
category: Frontend
tag:
    - CSS3
---

## 居中对齐元素

要使块元素（例如：`<div>` ）水平居中，请使用 `margin: auto;`。

设置元素的宽度将防止其延伸到容器的边缘。

然后，元素将占用指定的宽度，剩余空间将在两个外边距之间平均分配。例如：

::: normal-demo 演示

```html
<div class="center">
  <p>Hello World!</p>
</div>
```

```css
.center {
  margin: auto;
  width: 60%;
  border: 3px solid #73AD21;
  padding: 10px;
}
```

:::

::: tip
如果未设置 `width` 属性（或将其设置为 `100%`），则居中对齐无效
:::

## 居中对齐文本

如果仅需在元素内居中文本，请使用 `text-align: center;`。例如：

::: normal-demo 演示

```html
<div class="center">
  <p>这段文本是居中的。</p>
</div>
```

```css
.center {
  text-align: center;
  border: 3px solid green;
}
```

:::

## 居中对齐图像

将左右外边距设置为 `auto`，并将其设置为块元素。例如：

::: normal-demo 演示

```html
<img src="/html5/eg_cute.gif" alt="eg_sun" />
```

```css
img {
  width: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
```

:::

## 左和右对齐

对齐元素的一种方法是使用 `position: absolute;`。例如：

::: normal-demo 演示

```html
<p>如何用 position 属性将元素右对齐的例子：</p>

<div class="right">
  <p>这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本。</p>
</div>
```

```css
.right {
  position: absolute;
  right: 0px;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 10px;
}
```

:::

- **position**：属性定义建立元素布局所用的定位机制。`absolute` 值生成绝对定位的元素

::: tip
绝对定位的元素将从正常流中删除，并可能出现元素重叠
:::

对齐元素的另一种方法是使用 `float` 属性。例如：

::: normal-demo 演示

```html
<p>如何用 float 属性将元素右对齐的例子：</p>

<div class="right">
  <p>这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本。</p>
</div>
```

```css
.right {
  float: right;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 10px;
}
```

:::

:::: tip
如果一个元素比包含它的元素高，并且它是浮动的，它将溢出其容器。您可以使用 `clearfix hack` 来解决此问题。例如：。

::: normal-demo 演示

```html
<p>在本例中，图像高于包含它的元素，然而它被浮动了，所以它会在容器之外溢出：</p>

<div>
  <h1>Without Clearfix</h1>
  <img class="img1" src="/html5/eg_cute.gif" alt="eg_sun" width="180" height="180" />
  这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本
</div>

<p style="clear: right">请为包含元素添加 clearfix hack，以解决此问题：</p>

<div class="clearfix">
  <h1>With Clearfix</h1>
  <img class="img2" src="/html5/eg_cute.gif" alt="eg_sun" width="180" height="180" />
  这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本
</div>
```

```css
div {
  border: 3px solid #4CAF50;
  padding: 5px;
}

.img1,
.img2 {
  float: right;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
```

:::

::::

## 垂直对齐

有很多方法可以在 CSS 中垂直对齐元素。一个简单的解决方案是使用 `padding` 属性设置上下内边距。例如：

::: normal-demo 演示

```html
<p>在此例中，使用 padding 属性将 div 元素垂直居中：</p>

<div class="center">
  <p>我是垂直居中的。</p>
</div>
```

```css
.center {
  padding: 70px 0;
  border: 3px solid green;
}
```

:::

如需同时垂直和水平对齐，请使用 `padding` 和 `text-align: center;`。例如：

::: normal-demo 演示

```html
<p>在此例中，使用 padding 和 text-align 将 div 元素垂直和水平居中：</p>

<div class="center">
  <p>我是垂直居中的。</p>
</div>
```

```css
.center {
  padding: 70px 0;
  border: 3px solid green;
  text-align: center;
}
```

:::

另一个技巧是使用其值等于 `height` 属性值的 `line-height` 属性。例如：

::: normal-demo 演示

```html
<p>在此例中，使用 line-height 属性，其值等于 height 属性，以使 div 元素居中：</p>

<div class="center">
  <p>我是垂直和水平居中。</p>
</div>
```

```css
.center {
  line-height: 200px;
  height: 200px;
  border: 3px solid green;
  text-align: center;
}

.center p {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
}
```

:::

如果您的选择不是 `padding` 和 `line-height`，则另一种解决方案是使用 `position` 和 `transform` 属性。例如：

::: normal-demo 演示

```html
<p>在此例中，使用 position 和 transform 属性将 div 元素垂直和水平居中：</p>

<div class="center">
  <p>我是垂直和水平居中。</p>
</div>
```

```css
.center { 
  height: 200px;
  position: relative;
  border: 3px solid green; 
}

.center p {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
```

:::

您还可以使用 `flexbox` 将内容居中。请注意，IE10 以及更早的版本不支持 `flexbox`。例如：

::: normal-demo 演示

```html
<p>同时将 justify-content 和 align-items 属性设置为 <em>center</em> 的容器将使项目在中心（在两个轴上）对齐。</p>

<div class="center">
  <p>我是垂直和水平居中。</p>
</div>
```

```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 3px solid green;
}
```

:::

