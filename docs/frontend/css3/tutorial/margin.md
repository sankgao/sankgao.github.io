---
title: 外边距
icon: margin
date: 2023-05-15
category: Frontend
tag:
    - CSS3
---

CSS `margin` 属性用于在任何定义的边框之外，为元素周围创建空间。例如：

::: normal-demo 演示

```html
<h1>CSS 外边距</h1>

<div>本元素的外边距为 70 像素。</div>
```

```css
div {
  margin: 70px;
  border: 1px solid #4CAF50;
}
```

:::

通过 CSS 您可以完全控制外边距。有一些属性可用于设置元素每侧（上、右、下和左）的外边距。

## 单独的边

CSS 拥有用于为元素的每一侧指定外边距的属性：

- **margin-top**：上外边距
- **margin-right**：右外边距
- **margin-bottom**：下外边距
- **margin-left**：左外边距

所有外边距属性都可以设置以下值：

- **auto**：通过浏览器来计算外边距
- **length**：以 `px`、`pt`、`cm` 等单位指定外边距
- **%**：指定以包含元素宽度的百分比计的外边距
- **inherit**：指定应从父元素继承外边距

::: tip
允许负值
:::

为四个边设置不同的外边距。例如：

::: normal-demo 演示

```html
<div>这个 div 元素的上外边距为 100 像素，右外边距是 150 像素，下外边距是 100 像素，左外边距是 80 像素。</div>
```

```css
div {
  border: 1px solid black;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
  background-color: lightblue;
}
```

:::

### 简写属性

为了缩减代码，可以在一个属性中指定所有外边距属性。

`margin` 属性是以下各外边距属性的简写属性：

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

1. `margin` 属性设置四个值。例如：

    ::: normal-demo 演示

    ```html
    <div>这个 div 元素的上外边距是 25 像素，右外边距是 50 像素，下外边距是 75 像素，左外边距是 100 像素。</div>
    ```

    ```css
    div {
      border: 1px solid black;
      margin: 25px 50px 75px 100px;
      background-color: lightblue;
    }
    ```

    :::


2. `margin` 属性设置三个值。例如：

    ::: normal-demo 演示

    ```html
    <div>div 元素的上外边距是 25 像素，右左外边距是 50 像素，而下外边距是 75 像素。</div>
    ```

    ```css
    div {
      border: 1px solid black;
      margin: 25px 50px 75px;
      background-color: lightblue;
    }
    ```

    :::

3. `margin` 属性设置两个值。例如：

    ::: normal-demo 演示

    ```html
    <div>div 元素的上下外边距是 25 像素，右左外边距是 50 像素。</div>
    ```

    ```css
    div {
      border: 1px solid black;
      margin: 25px 50px;
      background-color: lightblue;
    }
    ```

    :::

4. `margin` 属性设置一个值。例如：

    ::: normal-demo 演示

    ```html
    <div>div 元素的上、下、左、右外边距均为 25 像素。</div>
    ```

    ```css
    div {
      border: 1px solid black;
      margin: 25px;
      background-color: lightblue;
    }
    ```

    :::

### auto 值

将 `margin` 属性设置为 `auto`，以使元素在其容器中水平居中。

然后，该元素将占据指定的宽度，并且剩余空间将在左右边界之间平均分配。例如：

::: normal-demo 演示

```html
<div>由于 margin: auto;，这个 div 将水平居中。</div>
```

```css
div {
  width: 300px;
  margin: auto;
  border: 1px solid red;
}
```

:::

### inherit 值

使 `<p class="ex1">` 元素的左外边距继承自父元素（`<div>`）。例如：

::: normal-demo 演示

```html
<div>
  <p class="ex1">本段落继承了 div 元素的左外边距。</p>
  <p>这个段落没有影响</p>
</div>
```

```css
div {
  border: 1px solid red;
  margin-left: 100px;
}

p.ex1 {
  margin-left: inherit;
}
```

:::

## CSS 外边距合并

外边距合并指的是：当两个垂直外边距相遇时，它们将形成一个外边距。

合并后的外边距的高度等于两个发生合并的外边距的高度中的 **较大者。**

### 外边距合并

外边距合并（叠加）是一个相当简单的概念。但是，在实践中对网页进行布局时，它会造成许多混淆。

简单地说，外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距。合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。

### 外边距合并形成一个外边距

当一个元素出现在另一个元素上面时，第一个元素的下外边距与第二个元素的上外边距会发生合并。如下所示：

`text` 为内容区域

```text
       合并之前                                合并之后
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆                  ┆                    ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮ 
┆    ╭┈┈┈┈┈┈┈┈╮    ┆                    ┆                  ┆
┆    ┆  text  ┆    ┆                    ┆    ╭┈┈┈┈┈┈┈┈╮    ┆
┆    ╰┈┈┈┈┈┈┈┈╯    ┆                    ┆    ┆  text  ┆    ┆
┆                  ┆                    ┆    ╰┈┈┈┈┈┈┈┈╯    ┆
┆margin-bottom:20px┆                    ┆                  ┆
├┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┤  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈  ┆margin-bottom:20px┆
┆ margin-top: 10px ┆                    ├┈┈┈┈┬┈┈┈┈┈┈┈┈┬┈┈┈┈┤
┆    ╭┈┈┈┈┈┈┈┈╮    ┆                    ┆    ┆  text  ┆    ┆
┆    ┆  text  ┆    ┆                    ┆    ╰┈┈┈┈┈┈┈┈╯    ┆
┆    ╰┈┈┈┈┈┈┈┈╯    ┆                    ┆                  ┆
┆                  ┆                    ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
```

例如：

::: normal-demo 演示

```html
<div id="d1"></div>

<div id="d2"></div>

<p>请注意，两个 div 之间的外边距是 20px，而不是 30px（20px + 10px）。</p>
```

```css
* {
  margin: 0;
  padding: 0;
  border: 0;
}

#d1 {
  width: 100px;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: red;
}

#d2 {
  width: 100px;
  height: 100px;
  margin-top: 10px;
  background-color: blue;
}
```

:::

### 

当一个元素包含在另一个元素中时（假设没有内边距或边框把外边距分隔开），它们的上和下外边距也会发生合并。如下所示：

```text
            合并之前                                         合并之后
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆                            ┆
┆      margin-top: 20px      ┆                    ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆    ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮    ┆                    ┆                            ┆
┆    ┆ margin-top: 10px ┆    ┆                    ┆      margin-top: 20px      ┆
┆    ┆    ╭┈┈┈┈┈┈┈┈╮    ┆    ┆                    ┆    ╭┈┈┈┈┬┈┈┈┈┈┈┈┈┬┈┈┈┈╮    ┆ 
┆    ┆    ┆  text  ┆    ┆    ┆  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈  ┆    ┆    ┆  text  ┆    ┆    ┆
┆    ┆    ╰┈┈┈┈┈┈┈┈╯    ┆    ┆                    ┆    ╰┈┈┈┈┴┈┈┈┈┈┈┈┈┴┈┈┈┈╯    ┆
┆    ┆margin-bottom:10px┆    ┆                    ┆     margin-bottom:20px     ┆
┆    ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯    ┆                    ┆                            ┆
┆     margin-bottom:20px     ┆                    ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
┆                            ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
```

例如：

::: normal-demo 演示

```html
<div id="outer">
  <div id="inner"></div>
</div>

<p>注释：请注意，如果不设置 div 的内边距和边框，那么内部 div 的上外边距将与外部 div 的上外边距合并（叠加）。</p>
```

```css
* {
  margin: 0;
  padding: 0;
  border: 0;
}

#outer {
  width: 300px;
  height: 300px;
  background-color: red;
  margin-top: 20px;
}

#inner {
  width: 50px;
  height: 50px;
  background-color: blue;
  margin-top: 10px;
}
```

:::

尽管看上去有些奇怪，但是外边距甚至可以与自身发生合并。

假设有一个空元素，它有外边距，但是没有边框或填充。在这种情况下，上外边距与下外边距就碰到了一起，它们会发生合并。如下所示：

```text
            合并之前                                         合并之后
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆                            ┆
┆      margin-top: 20px      ┆                    ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆    ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮    ┆  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈  ┆                            ┆
┆    ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯    ┆                    ┆      margin-top: 20px      ┆
┆     margin-bottom:20px     ┆                    ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ 
┆                            ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
```

如果这个外边距遇到另一个元素的外边距，它还会发生合并。如下所示：

```text
            合并之前                                         合并之后
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆                            ┆
┆      margin-top: 20px      ┆
├┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┤                    ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆                            ┆                    ┆                            ┆
┆      margin-top: 20px      ┆  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈  ┆      margin-top: 20px      ┆
┆    ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮    ┆                    ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ 
┆    ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯    ┆
┆     margin-bottom:20px     ┆
┆                            ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
```

这就是一系列的段落元素 **占用空间非常小** 的原因，因为它们的所有外边距都 **合并到一起**，形成了一个 **小的外边距。**

外边距合并初看上去可能有点奇怪，但是实际上，它是有意义的。以由几个段落组成的典型文本页面为例。第一个段落上面的空间等于段落的上外边距。如果没有外边距合并，后续所有段落之间的外边距都将是相邻上外边距和下外边距的和。这意味着段落之间的空间是页面顶部的两倍。如果发生外边距合并，段落之间的上外边距和下外边距就合并在一起，这样各处的距离就一致了。

::: tip
只有普通文档流中块框的 **垂直外边距** 才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并
:::

### 外边距属性

- **margin**：用于在一条声明中设置外边距属性的简写属性
- **margin-top**：设置元素的上外边距
- **margin-right**：设置元素的右外边距
- **margin-bottom**：设置元素的下外边距
- **margin-left**：设置元素的左外边距

