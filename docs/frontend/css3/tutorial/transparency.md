---
title: 透明度
icon: transparency
date: 2023-05-19
category: Frontend
tag:
    - CSS3
---

`opacity` 属性指定元素的透明度。

## 透明图像

`opacity` 属性的取值范围为 `0.0-1.0`。值越低，越透明。例如：

::: normal-demo 演示

```html
<p>50% 不透明度的图像：</p>

<img src="/background.png" alt="background" width="600" height="400" />
```

```css
img {
  opacity: 0.5;
}
```

:::

## 透明悬停效果

`opacity` 属性通常与 `:hover` 选择器一同使用，这样就可以在鼠标悬停时更改不透明度。例如：

::: normal-demo 演示

```html
<img src="/background.png" alt="background" width="600" height="400" />
```

```css
img {
  opacity: 0.5;
}

img:hover {
  opacity: 1.0;
}
```

:::

## 透明盒

使用 `opacity` 属性为元素的背景添加透明度时，其所有子元素都继承相同的透明度。这可能会使完全透明的元素内的文本难以阅读。例如：

::: normal-demo 演示

```html
<div class="first">
  <p>opacity 0.1</p>
</div>
<div class="second">
  <p>opacity 0.3</p>
</div>
<div class="third">
  <p>opacity 0.6</p>
</div>
<div>
  <p>opacity 1 (default)</p>
</div>
```

```css
div {
  background-color: #4CAF50;
  padding: 10px;
}

div.first {
  opacity: 0.1;
}

div.second {
  opacity: 0.3;
}

div.third {
  opacity: 0.6;
}
```

:::

## 使用 RGBA 的透明度

如果您不希望对子元素应用不透明度，请使用 `RGBA` 颜色值。

例如：设置背景色而不是文本的不透明度。

::: normal-demo 演示

```html
<div class="first">
  <p>opacity 0.1</p>
</div>
<div class="second">
  <p>opacity 0.3</p>
</div>
<div class="third">
  <p>opacity 0.6</p>
</div>
<div>
  <p>opacity 1 (default)</p>
</div>
```

```css
div {
  background: rgb(76, 175, 80);
  padding: 10px;
}

div.first {
  background: rgba(76, 175, 80, 0.1);
}

div.second {
  background: rgba(76, 175, 80, 0.3);
}

div.third {
  background: rgba(76, 175, 80, 0.6);
}
```

:::

## 透明盒中的文本

首先，创建一个带有背景图像和边框的 `<div>` 元素（class="background"）。

然后，在第一个 `<div>` 中创建另一个 `<div>`（class="transbox"）。

`<div class="transbox">` 有背景色和边框，这个 div 是透明的。

在透明的 `<div>` 内，并在 `<p>` 元素内添加了一些文本。

例如：

::: normal-demo 演示

```html
<div class="background">
  <div class="transbox">
    <p>这段文本被放置在一个透明框中。</p>
  </div>
</div>
```

```css
div.background {
  background: url(/html5/eg_sun.gif) repeat;
  border: 2px solid black;
}

div.transbox {
  margin: 30px;
  background-color: #ffffff;
  border: 1px solid black;
  opacity: 0.6;
}

div.transbox p {
  margin: 5%;
  font-weight: bold;
  color: #000000;
}
```

:::

