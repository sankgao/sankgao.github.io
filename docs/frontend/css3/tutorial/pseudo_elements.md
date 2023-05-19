---
title: 伪元素
icon: elements
date: 2023-05-18
category: Frontend
tag:
    - CSS3
---

CSS 伪元素用于设置元素指定部分的样式。

它可用于：

- 设置元素的首字母、首行的样式
- 在元素的内容之前或之后插入内容

## 语法

伪元素的语法：

```text
selector::pseudo-element {
  property: value;
}
```

- **selector**：选择器
- **pseudo-element**：伪类
- **property**：属性
- **value**：值

### ::first-line 伪元素

`::first-line` 伪元素用于向文本的首行添加特殊样式。

例如：为所有 `<p>` 元素中的首行添加样式。

::: normal-demo 演示

```html
<p>您可以使用 ::first-line 伪元素将特殊效果添加到文本的第一行。一些更多的文字。越来越多，越来越多，越来越多，越来越多，越来越多，越来越多，越来越多，越来越多，越来越多，越来越多。</p>
```

```css
p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}
```

:::

::: tip
`::first-line` 伪元素只能应用于块级元素

以下属性适用于 ::first-line 伪元素：

- 字体属性
- 颜色属性
- 背景属性
- word-spacing
- letter-spacing
- text-decoration
- vertical-align
- text-transform
- line-height
- clear

:::

在 CSS3 中，双冒号取代了伪元素的单冒号表示法。这是 W3C 试图区分伪类和伪元素的尝试。

在 CSS2 和 CSS1 中，伪类和伪元素都使用了单冒号语法。

为了向后兼容，CSS2 和 CSS1 伪元素可接受单冒号语法。

### ::first-letter 伪元素

`::first-letter` 伪元素用于向文本的首字母添加特殊样式。

例如：设置所有 `<p>` 元素中文本的首字母格式。

::: normal-demo 演示

```html
<p>您可以使用 ::first-letter 伪元素为文本的第一个字符添加特殊效果！</p>
```

```css
p::first-letter {
  color: #ff0000;
  font-size: xx-large;
}
```

:::

::: tip
`::first-letter` 伪元素只能应用于块级元素

以下属性适用于 ::first-letter 伪元素：

- 字体属性
- 颜色属性
- 背景属性
- 外边距属性
- 内边距属性
- 边框属性
- text-decoration
- vertical-align（仅当 "float" 为 "none"）
- text-transform
- line-height
- float
- clear

:::

## 伪元素和 CSS 类

伪元素可以与 CSS 类结合使用。

例如：将以红色和较大的字体显示 `class="intro"` 的段落的首字母。

::: normal-demo 演示

```html
<p class="intro">这是一段简介！</p>
<p>这是一段文字。以及更多的文字。</p>
```

```css
p.intro::first-letter {
  color: #ff0000;
  font-size: 200%;
}  
```

:::

## 多个伪元素

也可以组合几个伪元素。

例如：段落的第一个字母将是红色，字体大小为 `xx-large`。第一行的其余部分将变为蓝色，并使用小型大写字母。该段的其余部分将是默认的字体大小和颜色。

::: normal-demo 演示

```html
<p>您可以结合 ::first-letter 和 ::first-line 伪元素来为文本的首字母和首行添加特殊效果！</p>
```

```css
p::first-letter {
  color: #ff0000;
  font-size: xx-large;
}

p::first-line {
  color: #0000ff;
  font-variant: small-caps;
}
```

:::

## 其他伪元素

### ::before 伪元素

`::before` 伪元素可用于在元素内容之前插入一些内容。

例如：在每个 `<h1>` 元素的内容之前插入一幅图像。

::: normal-demo 演示

```html
<h1>这是一个标题</h1>
<h1>这是一个标题</h1>
<h2>这是另一个标题</h2>
```

```css
h1::before {
  content: url(/html5/eg_cute.gif);
}
```

:::

- **content**：属性用于定义元素之前或之后放置的生成内容

### ::after 伪元素

`::after` 伪元素可用于在元素内容之后插入一些内容。

例如：在每个 `<h1>` 元素的内容之后插入一幅图像。

::: normal-demo 演示

```html
<h1>这是一个标题</h1>
<h1>这是一个标题</h1>
<h2>这是另一个标题</h2>
```

```css
h1::after {
  content: url(/html5/eg_cute.gif);
}
```

:::

### ::selection 伪元素

`::selection` 伪元素匹配用户选择的元素部分。

以下 CSS 属性可以应用于 `::selection`：

- color
- background
- cursor
- outline

例如：所选文本在黄色背景上显示为红色。

::: normal-demo 演示

```html
<h1>请选择本页中的文本：</h1>

<p>这是一个段落。</p>
<div>这是 div 元素中的文本。</div>

<p><b>注释：</b>Firefox 支持可供替代的 ::-moz-selection 属性。</p>
```

```css
::-moz-selection { /* 针对 Firefox 的代码 */
  color: red;
  background: yellow;
}

::selection {
  color: red;
  background: yellow;
}
```

:::

