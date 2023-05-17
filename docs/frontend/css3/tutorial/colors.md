---
title: 颜色
icon: colors
date: 2023-05-15
category: Frontend
tag:
    - CSS3
---

指定颜色是通过使用预定义的颜色名称或 `RGB`、`HEX`、`HSL`、`RGBA`、`HSLA` 值。

## CSS 颜色名

在 CSS 中，可以使用 **颜色名称** 来指定颜色

`CSS/HTML` 支持 `140` 种标准颜色名。例如：

::: normal-demo 演示

```html
<h1 style="background-color: Tomato;">番茄色</h1>
<h1 style="background-color: Orange;">橙色</h1>
<h1 style="background-color: DodgerBlue;">道奇蓝</h1>
<h1 style="background-color: MediumSeaGreen;">中海绿色</h1>
<h1 style="background-color: Gray;">灰色</h1>
<h1 style="background-color: SlateBlue;">板岩蓝</h1>
<h1 style="background-color: Violet;">紫色</h1>
<h1 style="background-color: LightGray;">浅灰</h1>
```

:::

## CSS 背景色

通过 `background-color` 属性您可以为 HTML 元素设置背景色。例如：

::: normal-demo 演示

```html
<h1 style="background-color: Tomato;">标题背景色</h1>
<p style="background-color: Orange;">段落背景色</p>
```

:::

## CSS 文本颜色

通过 `color` 属性您可以设置文本的颜色。例如：

::: normal-demo 演示

```html
<h1 style="color: Tomato;">标题文本色</h1>
<p style="color: DodgerBlue;">段落文本色</p>
```

:::

## CSS 边框颜色

通过 `border` 属性您可以设置边框的颜色。例如：

::: normal-demo 演示

```html
<h1 style="border: 2px solid Tomato;">Hello World</h1>
<h1 style="border: 2px solid DodgerBlue;">Hello World</h1>
<h1 style="border: 2px solid Violet;">Hello World</h1>
```

:::

- **border**：属性三个值分别是 **边框宽度**、**边框类型**、**边框颜色**

## CSS RGB 颜色

在 CSS 中，可以使用公式将颜色指定为 RGB 值。格式：`rgb(red, green, blue)`

每个参数（`red`、`green` 以及 `blue`）定义了 `0` 到 `255` 之间的颜色强度。

例如：`rgb(255, 0, 0)` 显示为红色，因为红色设置为最大值（`255`），其他设置为 `0`。

要显示黑色，请将所有颜色参数设置为 `0`。例如：`rgb(0, 0, 0)`。

要显示白色，请将所有颜色参数设置为 `255`。例如：`rgb(255, 255, 255)`。

::: normal-demo 演示

```html
<h1 style="background-color: rgb(255, 0, 0);">rgb(255, 0, 0)</h1>
<h1 style="background-color: rgb(0, 0, 255);">rgb(0, 0, 255)</h1>
<h1 style="background-color: rgb(60, 179, 113);">rgb(60, 179, 113)</h1>
```

:::

### RGBA 值

`RGBA` 颜色值是具有 `alpha` 通道的 `RGB` 颜色值的扩展，它指定了颜色的 **不透明度。**

RGBA 颜色值指定为：`rgba(red, green, blue, alpha)`

`alpha` 参数是介于 `0.0`（完全透明）和 `1.0`（完全不透明）之间的数字。例如：

::: normal-demo 演示

```html
<h1 style="background-color: rgba(255, 99, 71, 0);">rgba(255, 99, 71, 0)</h1>
<h1 style="background-color: rgba(255, 99, 71, 0.4);">rgba(255, 99, 71, 0.6)</h1>
<h1 style="background-color: rgba(255, 99, 71, 1);">rgba(255, 99, 71, 1)</h1>
```

:::

## CSS HEX 颜色

在 CSS 中，可以使用十六进制值的格式指定颜色。格式：`#rrggbb`

其中 `rr`（红色）、`gg`（绿色）和 `bb`（蓝色）是介于 `00` 和 `ff` 之间的 **十六进制值**（与十进制 `0-255` 相同）。

例如：`#ff0000` 显示为红色，因为红色设置为最大值（`ff`），其他设置为最小值（`00`）。

::: normal-demo 演示

```html
<h1 style="background-color: #ff0000;">#ff0000</h1>
<h1 style="background-color: #0000ff;">#0000ff</h1>
<h1 style="background-color: #3cb371;">#3cb371</h1>
```

:::

## CSS HSL 颜色

在 CSS 中，可以使用色相、饱和度和明度（`HSL`）来指定颜色。格式：`hsla(hue, saturation, lightness)`

色相（`hue`）是色轮上从 `0` 到 `360` 的度数。`0` 是红色，`120` 是绿色，`240` 是蓝色。

饱和度（`saturation`）是一个百分比值，`0%` 表示灰色阴影，而 `100%` 是全色。

亮度（`lightness`）也是百分比，`0%` 是黑色，`50%` 是既不明也不暗，`100%` 是白色。

### 饱和度

饱和度可以描述为颜色的强度。

- **100%**：是纯色，没有灰色阴影
- **50%**：是 `50%` 灰色，但是您仍然可以看到颜色
- **0%**：是完全灰色，您无法再看到颜色

例如：

::: normal-demo 演示

```html
<h1 style="background-color: hsl(0, 100%, 50%);">hsl(0, 100%, 50%)</h1>
<h1 style="background-color: hsl(0, 80%, 50%);">hsl(0, 80%, 50%)</h1>
<h1 style="background-color: hsl(0, 60%, 50%);">hsl(0, 60%, 50%)</h1>
<h1 style="background-color: hsl(0, 40%, 50%);">hsl(0, 40%, 50%)</h1>
<h1 style="background-color: hsl(0, 20%, 50%);">hsl(0, 20%, 50%)</h1>
<h1 style="background-color: hsl(0, 0%, 50%);">hsl(0, 0%, 50%)</h1>
```

:::

## 亮度

颜色的明暗度可以描述为要赋予颜色多少光。

- **0%**：表示不亮（黑色）
- **50%**：表示 `50%` 亮（既不暗也不亮）
- **100%**：表示全明（白）

例如：

::: normal-demo 演示

```html
<h1 style="background-color: hsl(0, 100%, 0%);">hsl(0, 100%, 0%)</h1>
<h1 style="background-color: hsl(0, 100%, 25%);">hsl(0, 100%, 20%)</h1>
<h1 style="background-color: hsl(0, 100%, 50%);">hsl(0, 100%, 50%)</h1>
<h1 style="background-color: hsl(0, 100%, 75%);">hsl(0, 100%, 75%)</h1>
<h1 style="background-color: hsl(0, 100%, 90%);">hsl(0, 100%, 90%)</h1>
<h1 style="background-color: hsl(0, 100%, 100%);">hsl(0, 100%, 100%)</h1>
```

:::

### HSLA 值

`HSLA` 颜色值是带有 `Alpha` 通道的 `HSL` 颜色值的扩展，它指定了颜色的不透明度。

`HSLA` 颜色值指定为：`hsla(hue, saturation, lightness, alpha)`

`alpha` 参数是介于 `0.0`（完全透明）和 `1.0`（完全不透明）之间的数字。例如：

::: normal-demo 演示

```html
<h1 style="background-color: hsla(9, 100%, 64%, 0);">hsla(9, 100%, 64%, 0)</h1>
<h1 style="background-color: hsla(9, 100%, 64%, 0.2);">hsla(9, 100%, 64%, 0.2)</h1>
<h1 style="background-color: hsla(9, 100%, 64%, 0.4);">hsla(9, 100%, 64%, 0.4)</h1>
<h1 style="background-color: hsla(9, 100%, 64%, 0.6);">hsla(9, 100%, 64%, 0.6)</h1>
<h1 style="background-color: hsla(9, 100%, 64%, 0.8);">hsla(9, 100%, 64%, 0.8)</h1>
<h1 style="background-color: hsla(9, 100%, 64%, 1);">hsla(9, 100%, 64%, 1)</h1>
```

:::
