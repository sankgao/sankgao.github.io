---
title: 边框
icon: border
date: 2023-05-15
category: Frontend
tag:
    - CSS3
---

## CSS 边框

### CSS 边框属性

CSS `border` 属性允许您指定元素边框的样式、宽度和颜色。

### CSS 边框样式

`border-style` 属性指定要显示的边框类型。

允许以下值：

- **dotted**：定义点状边框
- **dashed**：定义虚线边框
- **solid**：定义实线边框
- **double**：定义双线边框
- **groove**：定义 3D 坡口边框（凹槽边框）。效果取决于 `border-color` 值
- **ridge**：定义 3D 脊线边框（垄状边框）。效果取决于 `border-color` 值
- **inset**：定义 3D inset 边框。效果取决于 `border-color` 值
- **outset**：定义 3D outset 边框。效果取决于 `border-color` 值
- **none**：定义无边框
- **hidden**：定义隐藏边框

`border-style` 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）。例如：

::: normal-demo 演示

```html
<p>border-style 属性规定要显示的边框类型：</p>

<p class="dotted">点状边框。</p>
<p class="dashed">虚线边框。</p>
<p class="solid">实线边框。</p>
<p class="double">双线边框。</p>
<p class="groove">凹槽边框。</p>
<p class="ridge">垄状边框。</p>
<p class="inset">3D inset 边框。</p>
<p class="outset">3D outset 边框。</p>
<p class="none">无边框。</p>
<p class="hidden">隐藏边框。</p>
<p class="mix">混合边框。</p>
```

```css
p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}
```

:::

::: tip
除非设置了 `border-style` 属性，否则其他 CSS 边框属性都不会有任何作用
:::

## CSS 边框宽度

`border-width` 属性指定四个边框的宽度。

可以将宽度设置为特定大小（以 `px`、`pt`、`cm`、`em`），也可以使用以下三个预定义值之一：`thin`、`medium` 或 `thick`。例如：

::: normal-demo 演示

```html
<p>border-width 属性规定四条边框的宽度：</p>

<p class="one">一些文本。</p>
<p class="two">一些文本。</p>
<p class="three">一些文本。</p>
<p class="four">一些文本。</p>
<p class="five">一些文本。</p>
<p class="six">一些文本。</p>

<p><b>注释：</b>border-color 属性单独使用时不起作用。请首先使用 border-style 属性设置样式。</p>
```

```css
p.one {
  border-style: solid;
  border-width: 5px;
}

p.two {
  border-style: solid;
  border-width: medium;
}

p.three {
  border-style: dotted;
  border-width: 2px;
}

p.four {
  border-style: dotted;
  border-width: thick;
}

p.five {
  border-style: double;
  border-width: 15px;
}

p.six {
  border-style: double;
  border-width: thick;
}
```

:::

### 特定边的宽度

`border-width` 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）。例如：

::: normal-demo 演示

```html
<p>border-width 属性规定四条边框的宽度：</p>

<p class="one">一些文本。</p>
<p class="two">一些文本。</p>
<p class="three">一些文本。</p>
<p class="four">一些文本。</p>
<p class="five">一些文本。</p>
<p class="six">一些文本。</p>

<p><b>注释：</b>border-color 属性单独使用时不起作用。请首先使用 border-style 属性设置样式。</p>
```

```css
p.one {
  border-style: solid;
  border-width: 5px 20px;  /* 上、下边框 5 像素，右、左边框 20 像素 */
}

p.two {
  border-style: solid;
  border-width: 20px 5px;  /* 上、下边框 20 像素，右、左边框 5 像素 */
}

p.three {
  border-style: solid;
  border-width: 25px 10px 4px 35px;  /* 上 25 像素、右 10 像素、下 4 像素、左 35 像素 */
}
```

:::

## CSS 边框颜色

`border-color` 属性用于设置四个边框的颜色。

可以通过以下方式设置颜色：

- **name**：指定颜色名。比如：`red`
- **HEX**：指定十六进制值。比如：`#ff0000`
- **RGB**：指定 RGB 值。比如：`rgb(255,0,0)`
- **HSL**：指定 HSL 值。比如：`hsl(0, 100%, 50%)`
- **transparent**：透明度

::: tip
如果未设置 `border-color`，则它将继承元素的颜色
:::

例如：

::: normal-demo 演示

```html
<p>border-color 属性规定四条边框的颜色：</p>

<p class="one">红色实线边框</p>
<p class="two">绿色实线边框</p>
<p class="three">蓝色点状边框</p>

<p><b>注释：</b>border-color 属性单独使用时不起作用。请首先使用 border-style 属性设置样式。</p>
```

```css
p.one {
  border-style: solid;
  border-color: red;
}

p.two {
  border-style: solid;
  border-color: green;
} 

p.three {
  border-style: dotted;
  border-color: blue;
}
```

:::

### 特定边框的颜色

`border-color` 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）。例如：

::: normal-demo 演示

```html
<p>border-color 属性可接受一到四个值（依次对应上、右、下、左边框）：</p>

<p class="one">多色的实线边框</p>
```

```css
p.one {
  border-style: solid;
  border-color: red green blue yellow; /* 上红、右绿、下蓝、左黄 */
}
```

:::

### HEX 值

边框的颜色也可以使用十六进制值（HEX）来指定。例如：

::: normal-demo 演示

```html
<p>border-color 边框颜色也可以使用十六进制值（HEX）指定：</p>

<p class="one">红色实线边框</p>
```

```css
p.one {
  border-style: solid;
  border-color: #ff0000; /* 红色 */
}
```

:::

### RGB 值

或者使用 RGB 值。例如：

::: normal-demo 演示

```html
<p>border-color 边框颜色也可以使用 RGB 值指定：</p>

<p class="one">红色实线边框</p>
```

```css
p.one {
  border-style: solid;
  border-color: rgb(255, 0, 0); /* 红色 */
}
```

:::

### HSL 值

也可以使用 HSL 值。例如：

::: normal-demo 演示

```html
<p>border-color 边框颜色也可以使用 HSL 值指定：</p>

<p class="one">红色实线边框</p>
```

```css
p.one {
  border-style: solid;
  border-color: hsl(0, 100%, 50%); /* 红色 */
}
```

:::

## CSS 边框各边

在 CSS 中，还有一些属性可用于指定每个边框（上、右、下和左边框）的类型。例如：

::: normal-demo 演示

```html
<p>两种不同的边框样式。</p>
```

```css
p {
  border-top-style: dotted;
  border-right-style: solid;
  border-bottom-style: dotted;
  border-left-style: solid;
}
```

:::

- **border-top-style**：上边框类型
- **border-right-style**：右边框类型
- **border-bottom-style**：下边框类型
- **border-left-style**：左边框类型

### 简写边框各边样式

使用 `border-style` 属性设置四个值（用于上边框、右边框、下边框和左边框）。例如：

::: normal-demo 演示

```html
<p class="four">四种不同的边框样式。</p>
<p class="three">三种不同的边框样式。</p>
<p class="two">两种不同的边框样式。</p>
<p class="one">一种边框样式。</p>
```

```css
p.four {
  border-style: dotted solid double dashed;
}

/* 三个值 */
p.three {
  border-style: dotted solid double;
}

/* 两个值 */
p.two {
  border-style: dotted solid;
}

/* 一个值 */
p.one {
  border-style: dotted;
}
```

:::

- `border-style` 属性设置四个值：`border-style: dotted solid double dashed;` 为上边框点线、右边框实线、下边框双线、左边框虚线
- `border-style` 属性设置三个值：`border-style: dotted solid double;` 为上边框点线、右和左边框实线、下边框双线
- `border-style` 属性设置两个值：`border-style: dotted solid;` 为上和下边框点线、右和左边框实线
- `border-style` 属性设置一个值：`border-style: dotted;` 四条边均为点线

## 简写边框属性

为了缩减代码，也可以在一个属性中指定所有单独的边框属性。

`border` 属性是以下各个边框属性的简写属性：

- `border-width`
- `border-style`（必需）
- `border-color`

例如：

::: normal-demo 演示

```html
<p>border 属性是 border-width、border-style 以及 border-color 的简写属性。</p>
```

```css
p {
  border: 5px solid red;
}
```

:::

您还可以只为一个边指定所有单个边框属性。

例如：左边框。

::: normal-demo 演示

```html
<p>border-left 属性是 border-left-width、border-left-style 以及 border-left-color 的简写属性。</p>
```

```css
p {
  border-left: 6px solid red;
  background-color: lightgrey;
}
```

:::

- **border-top**：简写属性把上边框的所有属性设置到一个声明中
- **border-right**：简写属性把右边框的所有属性设置到一个声明中
- **border-bottom**：简写属性把下边框的所有属性设置到一个声明中
- **border-left**：简写属性把左边框的所有属性设置到一个声明中

## 圆角边框

`border-radius` 属性用于向元素添加圆角边框。例如：

::: normal-demo 演示

```html
<p>border-radius 属性用于为元素添加圆角：</p>

<p class="normal">普通边框</p>
<p class="round1">圆角边框</p>
<p class="round2">角更圆的边框</p>
<p class="round3">角最圆的边框</p>
```

```css
p.normal {
  border: 2px solid red;
}

p.round1 {
  border: 2px solid red;
  border-radius: 5px;
}

p.round2 {
  border: 2px solid red;
  border-radius: 8px;
}

p.round3 {
  border: 2px solid red;
  border-radius: 12px;
}
```

:::

