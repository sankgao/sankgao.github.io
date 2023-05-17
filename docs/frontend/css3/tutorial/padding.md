---
title: 内边距
icon: padding
date: 2023-05-16
category: Frontend
tag:
    - CSS3
---

CSS `padding` 属性用于在任何定义的边界内的元素内容周围生成空间。

通过 CSS，您可以完全控制内边距（填充）。有一些属性可以为元素的每一侧（上、右、下和左侧）设置内边距。

## 单独的边

CSS 拥有用于为元素的每一侧指定内边距的属性：

- **padding-top**：上内边距
- **padding-right**：右内边距
- **padding-bottom**：下内边距
- **padding-left**：左内边距

所有内边距属性都可以设置以下值：

- **length**：以 `px`、`pt`、`cm` 等单位指定内边距
- **%**：指定以包含元素宽度的百分比计的内边距
- **inherit**：指定应从父元素继承内边距

::: tip
不允许负值
:::

为四个边设置不同的内边距。例如：

::: normal-demo 演示

```html
<div>这个 div 元素的上内边距是 50px，右内边距是 30px，下内边距是 50px，左内边距是 80px。</div>
```

```css
div {
  border: 1px solid black;
  background-color: lightblue;
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
```

:::

### 简写属性

为了缩减代码，可以在一个属性中指定所有内边距属性。

`padding` 属性是以下各内边距属性的简写属性：

- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

1. `padding` 属性设置四个值。例如：

    ::: normal-demo 演示

    ```html
    <div>这个 div 元素的上内边距是 25px，右内边距是 50px，下内边距是 75px，而左内边距是 100px。</div>
    ```

    ```css
    div {
      border: 1px solid black;
      padding: 25px 50px 75px 100px;
      background-color: lightblue;
    }
    ```

    :::


2. `padding` 属性设置三个值。例如：

    ::: normal-demo 演示

    ```html
    <div>这个 div 元素的上内边距是 25px，左右内边距是 50px，下内边距是 75px。</div>
    ```

    ```css
    div {
      border: 1px solid black;
      padding: 25px 50px 75px;
      background-color: lightblue;
    }
    ```

    :::

3. `padding` 属性设置两个值。例如：

    ::: normal-demo 演示

    ```html
    <div>这个 div 元素的上、下内边距为 25 像素，左、右内边距为 50 像素。</div>
    ```

    ```css
    div {
      border: 1px solid black;
      padding: 25px 50px;
      background-color: lightblue;
    }
    ```

    :::

4. `padding` 属性设置一个值。例如：

    ::: normal-demo 演示

    ```html
    <div>这个 div 元素的上、下、左、右内边距均为 25 像素。</div>
    ```

    ```css
    div {
      border: 1px solid black;
      padding: 25px;
      background-color: lightblue;
    }
    ```

    :::

### 内边距和元素宽度

CSS `width` 属性指定元素内容区域的 **宽度**。内容区域是元素（盒模型）的内边距、边框和外边距内的部分。

因此，如果元素拥有指定的宽度，则添加到该元素的内边距会添加到元素的总宽度中。这通常是不希望的结果。

例如：`<div>` 元素的宽度为 `300px`。但是，`<div>` 元素的实际宽度将是 `350px`（300px + 左内边距 25px + 右内边距 25px）。

::: normal-demo 演示

```html
<div class="ex1">这个 div 是 300 像素宽。</div>
<br />
<div class="ex2">这个 div 是 350 像素宽，即使在 CSS 中它被定义为 300 像素。</div>
```

```css
div.ex1 {
  width: 300px;
  background-color: yellow;
}

div.ex2 {
  width: 300px;
  padding: 25px;
  background-color: lightblue;
}
```

:::

若要将宽度保持为 `300px`，无论填充量如何，那么您可以使用 `box-sizing` 属性。这将导致元素保持其宽度。如果增加内边距，则可用的内容空间会减少。

例如：使用 `box-sizing` 属性将宽度保持为 `300px`，无论填充量如何。

::: normal-demo 演示

```html
<div class="ex1">这个 div 是 300 像素宽。</div>
<br />
<div class="ex2">div 的宽度保持在 300 像素，尽管总的左右内边距为 50 像素，因为设置了 box-sizing: border-box 属性。</div>
```

```css
div.ex1 {
  width: 300px;
  background-color: yellow;
}

div.ex2 {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
  background-color: lightblue;
}
```

:::

