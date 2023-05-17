---
title: 选择器
icon: selector
date: 2023-05-15
category: Frontend
tag:
    - CSS3
---

CSS 选择器用于 “查找”（或选取）要设置样式的 HTML 元素。

可以将 CSS 选择器分为五类：

- **简单选择器**（根据名称、id、类来选取元素）
- **组合器选择器**（根据它们之间的特定关系来选取元素）
- **伪类选择器**（根据特定状态选取元素）
- **伪元素选择器**（选取元素的一部分并设置其样式）
- **属性选择器**（根据属性或属性值来选取元素）

::: tip
以下为简单选择器
:::

## CSS 元素选择器

**元素选择器** 根据 **元素名称** 来选择 HTML 元素。例如：

所有 `<p>` 元素都将居中对齐，并带有红色文本颜色。

::: normal-demo 演示

```html
<p>Hello World!</p>
<p>这些段 落是通过 CSS 设置样式的。</p>
```

```css
p {
  color: red;
  text-align: center;
}
```

:::

## CSS id 选择器

**id 选择器** 使用 HTML 元素的 **id 属性** 来选择特定元素。

元素的 `id` 在页面中是唯一的，因此 id 选择器用于选择一个唯一的元素。

要选择具有特定 id 的元素，请写一个井号（`#`），后跟该元素的 `id`。例如：

::: normal-demo 演示

```html
<p id="para1">Hello World!</p>
<p>本段不受样式的影响。</p>
```

```css
#para1 {
  text-align: center;
  color: red;
}
```

:::

::: note
id 名称不能以数字开头
:::

## CSS 类选择器

**类选择器** 选择有特定 **class 属性** 的 HTML 元素。

选择拥有特定 `class` 的元素，请写一个句点（`.`）字符，后面跟类名。例如：

::: normal-demo 演示

```html
<h1 class="center">居中的红色标题</h1>
<p class="center">居中的红色段落。</p>
```

```css
.center {
  text-align: center;
  color: red;
}
```

:::

还可以指定只有特定的 HTML 元素会受类的影响。例如：

下面只有具有 `class="center"` 的 `<p>` 元素会居中对齐。

::: normal-demo 演示

```html
<h1 class="center">这个标题不受影响</h1>
<p class="center">居中的红色段落。</p>
```

```css
p.center {
  text-align: center;
  color: red;
}
```

:::

HTML 元素也可以引用多个类。例如：

下面 `<p>` 元素将根据 `class="center"` 和 `class="large"` 进行样式设置。

::: normal-demo 演示

```html
<h1 class="center">这个标题不受影响</h1>
<p class="center">居中的红色段落。</p>
<p class="center large">居中的红色大字体段落。</p> 
```

```css
p.center {
  text-align: center;
  color: red;
}

p.large {
  font-size: 300%;
}
```

:::

::: note
类名不能以数字开头
:::

## CSS 通用选择器

通用选择器（`*`）选择页面上的所有的 HTML 元素。例如：

下面的 CSS 规则会影响页面上的每个 HTML 元素。

::: normal-demo 演示

```html
<p>页面上的每个元素都会受到样式的影响。</p>
<p id="para1">我也是！</p>
<p>还有我！</p>
```

```css
* {
  text-align: center;
  color: blue;
}
```

:::

## CSS 分组选择器

分组选择器选取所有具有相同样式定义的 HTML 元素。例如：

下面的 CSS 代码（`h1`、`h2` 和 `p` 元素具有 **相同** 的样式定义）。

```css
h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: red;
}

p {
  text-align: center;
  color: red;
}
```

最好对选择器进行分组，以最大程度地 **缩减代码。**

如需对选择器进行分组，请用 **逗号** 来分隔每个选择器。例如：

::: normal-demo 演示

```html
<h1>Hello World!</h1>
<h2>更小的标题</h2>
<p>这是一个段落。</p>
```

```css
h1, h2, p {
  text-align: center;
  color: red;
}
```

:::

