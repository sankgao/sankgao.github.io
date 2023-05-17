---
title: 轮廓
icon: outline
date: 2023-05-16
category: Frontend
tag:
    - CSS3
---

**轮廓** 是在元素周围绘制的一条线，在边框之外，以凸显元素。

CSS 拥有如下轮廓属性：

- **outline-style**：规定轮廓的样式
- **outline-color**：规定轮廓的颜色
- **outline-width**：规定轮廓的宽度
- **outline-offset**：对轮廓进行偏移
- **outline**：是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用

::: tip 轮廓与边框不同
不同之处在于：轮廓是在元素边框之外绘制的，并且可能与其他内容重叠。同样，轮廓也不是元素尺寸的一部分；元素的总宽度和高度不受轮廓线宽度的影响
:::

## 轮廓样式

`outline-style` 属性指定轮廓的样式，并可设置如下值：

- **dotted**：定义点状的轮廓
- **dashed**：定义虚线的轮廓
- **solid**：定义实线的轮廓
- **double**：定义双线的轮廓
- **groove**：定义 3D 凹槽轮廓
- **ridge**：定义 3D 凸槽轮廓
- **inset**：定义 3D 凹边轮廓
- **outset**：定义 3D 凸边轮廓
- **none**：定义无轮廓
- **hidden**：定义隐藏的轮廓

例如：

::: normal-demo 演示

```html
<p class="dotted">点状轮廓</p>
<p class="dashed">虚线轮廓</p>
<p class="solid">实线轮廓</p>
<p class="double">双线轮廓</p>
<p class="groove">凹槽轮廓。效果取决于 outline-color 值。</p>
<p class="ridge">凸脊轮廓。效果取决于 outline-color 值。</p>
<p class="inset">凹边轮廓。效果取决于 outline-color 值。</p>
<p class="outset">凸边轮廓。效果取决于 outline-color 值。</p>
```

```css
p {
  outline-color: red;
}

p.dotted {
  outline-style: dotted;
}

p.dashed {
  outline-style: dashed;
}

p.solid {
  outline-style: solid;
}

p.double {
  outline-style: double;
}

p.groove {
  outline-style: groove;
}

p.ridge {
  outline-style: ridge;
}

p.inset {
  outline-style: inset;
}

p.outset {
  outline-style: outset;
}
```

:::

::: warning
除非设置了 `outline-style` 属性，否则其他轮廓属性都不会有任何作用
:::

## 轮廓宽度

`outline-width` 属性指定轮廓的宽度，并可设置如下值之一：

- `thin`（通常为 1px）
- `medium`（通常为 3px）
- `thick` （通常为 5px）
- 特定尺寸（以 `px`、`pt`、`cm`、`em` 计）

例如：

::: normal-demo 演示

```html
<p class="ex1">细的轮廓。</p>
<p class="ex2">中等的轮廓。</p>
<p class="ex3">粗的轮廓。</p>
<p class="ex4">4 像素的粗轮廓。</p>
```

```css
p.ex1 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: thin;
}

p.ex2 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: medium;
}

p.ex3 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: thick;
}

p.ex4 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: 4px;
}
```

:::

## 轮廓颜色

`outline-color` 属性用于设置轮廓的颜色。

可以通过以下方式设置颜色：

- **name**：指定颜色名。比如：`red`
- **HEX**：指定十六进制。比如：`#ff0000`
- **RGB**：指定 RGB 值。比如：`rgb(255,0,0)`
- **HSL**：指定 HSL 值。比如：`hsl(0, 100%, 50%)`
- **invert**：执行颜色反转（确保轮廓可见，无论是什么颜色背景）

例如：

::: normal-demo 演示

```html
<p>使用颜色名规定轮廓颜色：</p>

<p class="ex1">红色的实线轮廓。</p>
<p class="ex2">蓝色的点状轮廓。</p>
<p class="ex3">灰色的实线轮廓。</p>
```

```css
p.ex1 {
  border: 2px solid black;
  outline-style: solid;
  outline-color: red;
}

p.ex2 {
  border: 2px solid black;
  outline-style: dotted;
  outline-color: blue;
}

p.ex3 {
  border: 2px solid black;
  outline-style: outset;
  outline-color: grey;
}
```

:::

::: note
这些元素在轮廓内还有黑色细边框
:::

### HEX 值

也可以使用十六进制值（HEX）指定轮廓颜色。例如：

::: normal-demo 演示

```html
<p>也可以使用十六进制值（HEX）规定轮廓颜色：</p>

<p class="ex1">红色的实线轮廓。</p>
<p class="ex2">蓝色的点状轮廓。</p>
<p class="ex3">灰色的实线轮廓。</p>
```

```css
p.ex1 {
  border: 2px solid black;
  outline-style: solid;
  outline-color: #ff0000;  /* red */
}

p.ex2 {
  border: 2px solid black;
  outline-style: dotted;
  outline-color: #0000ff;  /* blue */
}

p.ex3 {
  border: 2px solid black;
  outline-style: solid;
  outline-color: #bbbbbb;  /* grey */
}
```

:::

### RGB 值

或者通过使用 RGB 值。例如：

::: normal-demo 演示

```html
<p>也可以使用 RGB 值规定轮廓颜色：</p>

<p class="ex1">红色的实线轮廓。</p>
<p class="ex2">蓝色的点状轮廓。</p>
<p class="ex3">灰色的实线轮廓。</p>
```

```css
p.ex1 {
  border: 2px solid black;
  outline-style: solid;
  outline-color: rgb(255, 0, 0);  /* red */
}

p.ex2 {
  border: 2px solid black;
  outline-style: dotted;
  outline-color: rgb(0, 0, 255);  /* blue */
}

p.ex3 {
  border: 2px solid black;
  outline-style: solid;
  outline-color: rgb(187, 187, 187);  /* grey */
}
```

:::

### HSL 值

还可以使用 HSL 值。例如：

::: normal-demo 演示

```html
<p>也可以使用 HSL 值规定轮廓颜色：</p>

<p class="ex1">红色的实线轮廓。</p>
<p class="ex2">蓝色的点状轮廓。</p>
<p class="ex3">灰色的实线轮廓。</p>
```

```css
p.ex1 {
  border: 2px solid black;
  outline-style: solid;
  outline-color: hsl(0, 100%, 50%);  /* red */
}

p.ex2 {
  border: 2px solid black;
  outline-style: dotted;
  outline-color: hsl(240, 100%, 50%);  /* blue */
}

p.ex3 {
  border: 2px solid black;
  outline-style: solid;
  outline-color: hsl(0, 0%, 73%);  /* grey */
}
```

:::

### 反转颜色

使用 `outline-color: invert`，执行了颜色反转。这样可以确保无论颜色背景如何，轮廓都是可见的。例如：

::: normal-demo 演示

```html
<p class="ex1">invert 实线轮廓</p>
```

```css
p.ex1 {
  border: 1px solid yellow;
  outline-style: solid;
  outline-color: invert;
}
```

:::

## 轮廓简写

`outline` 属性是用于设置以下各个轮廓属性的简写属性：

- **outline-width**
- **outline-style**（必需）
- **outline-color**

从上面的列表中，outline 属性可指定一个、两个或三个值。值的顺序无关紧要。

例如：

::: normal-demo 演示

```html
<p class="ex1">点状轮廓。</p>
<p class="ex2">红色的点状轮廓。</p>
<p class="ex3">5 像素的黄色实线轮廓。</p>
<p class="ex4">粗的粉色凸脊轮廓。</p>
```

```css
p.ex1 {
  outline: dashed;
}

p.ex2 {
  outline: dotted red;
}

p.ex3 {
  outline: 5px solid yellow;
}

p.ex4 {
  outline: thick ridge pink;
}
```

:::

## 轮廓偏移

`outline-offset` 属性在元素的轮廓与边框之间添加空间。元素及其轮廓之间的空间是透明的。

例如：指定边框边缘外 `25px` 的轮廓。

::: normal-demo 演示

```html
<p>本段落在边框边缘外 15 像素处有一条轮廓线。</p>
```

```css
p {
  margin: 30px;
  border: 1px solid black;
  outline: 1px solid red;
  outline-offset: 15px;
}
```

:::

