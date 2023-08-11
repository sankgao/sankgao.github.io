---
title: 文本
icon: text
date: 2023-05-16
category: Frontend
tag:
    - CSS3
---

## 文本颜色

`color` 属性用于设置文本的颜色。颜色由以下值指定：

- **name**：指定颜色名。比如：`red`
- **HEX**：指定十六进制。比如：`#ff0000`
- **RGB**：指定 RGB 值。比如：`rgb(255,0,0)`

页面的默认文本颜色是在 body 选择器中定义的。例如：

::: normal-demo 演示

```html
<h1>这是标题 1</h1>

<p>这是一段普通的段落。请注意文本为蓝色。页面的默认文本颜色在 body 选择器中定义。</p>

<p>另一段文本。</p>
```

```css
body {
  color: blue;
}

h1 {
  color: green;
}
```

:::

### 文本颜色和背景色

::: tip
对于 W3C compliant CSS：如果您定义了 `color` 属性，则还必须定义 `background-color` 属性
:::

例如：

::: normal-demo 演示

```html
<h1>此标题是带黑色背景的白色文本</h1>
<p>此页面有灰色背景和蓝色文本。</p>
<p>另一段文本。</p>
```

```css
body {
  background-color: lightgrey;
  color: blue;
}

h1 {
  background-color: black;
  color: white;
}
```

:::

## 文本对齐

`text-align` 属性用于设置文本的水平对齐方式。

如果文本方向是从左到右，则默认为左对齐；如果文本方向是从右到左，则默认是右对齐。

文本可以 **左对齐**、**右对齐**、**居中对齐**。例如：

::: normal-demo 演示

```html
<h1>标题 1（居中对齐）</h1>
<h2>标题 2（左对齐）</h2>
<h3>标题 3（右对齐）</h3>

<p>上面的三个标题是居中、左和右对齐。</p>
```

```css
h1 {
  text-align: center;
}

h2 {
  text-align: left;
}

h3 {
  text-align: right;
}
```

:::

当 `text-align` 属性设置为 `justify` 后，将拉伸每一行，以使每一行具有相等的宽度，并且左右边距是直的（就像在杂志和报纸中）。例如：

::: normal-demo 演示

```html
<div>
  In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'
</div>
```

```css
div {
  border: 1px solid black;
  padding: 10px;
  width: 200px;
  height: 300px;
  text-align: justify;
}
```

:::

### 文本方向

`direction` 和 `unicode-bidi` 属性可用于更改元素的文本方向。例如：

::: normal-demo 演示

```html
<p>This is the default text direction.</p>

<p class="ex1">This is right-to-left text direction.</p>
```

```css
p.ex1 {
  direction: rtl;
  unicode-bidi: bidi-override;
}
```

:::

- **direction**：属性规定文本的书写方向

    - **rtl**：文本方向从右到左

- **unicode-bidi**：属性是否应重写文本

    - **bidi-override**：对于行内元素，该值会创建一个覆盖；对于块容器元素，该值将为不在另一个块容器元素内的行内级别的后代创建一个覆盖

### 垂直对齐

`vertical-align` 属性设置元素的垂直对齐方式。

例如：设置文本中图像的垂直对齐方式。

::: normal-demo 演示

```html
<p>一幅 <img src="/html5/eg_cute.gif" alt="eg_cute" /> 默认对齐方式的图像。</p><br />

<p>一幅 <img class="top" src="/html5/eg_cute.gif" alt="eg_cute" /> 上对齐的图像。</p><br />

<p>一幅 <img class="middle" src="/html5/eg_cute.gif" alt="eg_cute" /> 居中对齐的图像。</p><br />

<p>一幅 <img class="bottom" src="/html5/eg_cute.gif" alt="eg_cute" /> 下对齐的图像。</p>
```

```css
img.top {
  vertical-align: top;  /* 上对齐 */
}

img.middle {
  vertical-align: middle;  /* 居中对齐 */
}

img.bottom {
  vertical-align: bottom;  /* 下对齐 */
}
```

:::

## 文字装饰

`text-decoration` 属性用于设置或删除文本装饰。

`text-decoration: none;` 通常用于从链接上删除下划线。例如：

::: normal-demo 演示

```html
<p>没有下划线的链接：<a href="https://www.w3school.com.cn">W3School</a></p>
```

```css
a {
  text-decoration: none;
}
```

:::

其他 `text-decoration` 值用于装饰文本。例如：

::: normal-demo 演示

```html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
```

```css
h1 {
  text-decoration: overline;
}

h2 {
  text-decoration: line-through;
}

h3 {
  text-decoration: underline;
}
```

:::

- **overline**：上划线
- **line-through**：划线
- **underline**：下划线

## 文本转换

`text-transform` 属性用于指定文本中的大写和小写字母。

用于将所有内容转换为大写或小写字母，或将每个单词的首字母大写。例如：

::: normal-demo 演示

```html
<p class="uppercase">This is some text.</p>
<p class="lowercase">This is some text.</p>
<p class="capitalize">This is some text.</p>
```

```css
p.uppercase {
  text-transform: uppercase;
}

p.lowercase {
  text-transform: lowercase;
}

p.capitalize {
  text-transform: capitalize;
}
```

:::

- **uppercase**：定义全部转换为大写字母
- **lowercase**：定义全部转换为小写字母
- **capitalize**：定义全部转换为首字母大写

## 文字间距

### 文字缩进

`text-indent` 属性用于指定文本第一行的缩进。例如：

::: normal-demo 演示

```html
<p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'</p>
```

```css
p {
  text-indent: 50px;
}
```

:::

### 字母间距

`letter-spacing` 属性用于指定文本中字符之间的间距。例如：

::: normal-demo 演示

```html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
```

```css
h1 {
  letter-spacing: 3px;
}

h2 {
  letter-spacing: -3px;
}
```

:::

### 行高

`line-height` 属性用于指定行之间的间距。例如：

::: normal-demo 演示

```html
<p>
  这是有标准行高的段落<br />
  大多数浏览器中的默认行高大概是 110% 到 120%。<br />
</p>

<p class="small">
  这是行高更小的段落。<br />
  这是行高更小的段落。<br />
</p>

<p class="big">
  这是行高更大的段落。<br />
  这是行高更大的段落。<br />
</p>
```

```css
p.small {
  line-height: 0.7;
}

p.big {
  line-height: 1.8;
}
```

:::

### 字间距

`word-spacing` 属性用于指定文本中单词之间的间距。例如：

::: normal-demo 演示

```html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
```

```css
h1 {
  word-spacing: 10px;
}

h2 {
  word-spacing: -5px;
}
```

:::

### 空白

`white-space` 属性指定元素内部空白的处理方式。

例如：禁用元素内的文本换行。

::: normal-demo 演示

```html
<p>
  This is some text. This is some text. This is some text.
  This is some text. This is some text. This is some text.
  This is some text. This is some text. This is some text.
  This is some text. This is some text. This is some text.
  This is some text. This is some text. This is some text.
</p>
```

```css
p {
  white-space: nowrap;
}
```

:::

## 文本阴影

`text-shadow` 属性为文本添加阴影。

最简单的用法是只指定水平阴影（2px）和垂直阴影（2px）。例如：

::: normal-demo 演示

```html
<h1>文本阴影效果！</h1>
```

```css
h1 {
  text-shadow: 2px 2px;
}
```

:::

向阴影添加颜色（红色）。例如：

::: normal-demo 演示

```html
<h1>文本阴影效果！</h1>
```

```css
h1 {
  text-shadow: 2px 2px red;
}
```

:::

向阴影添加模糊效果（5px）。例如：

::: normal-demo 演示

```html
<h1>文本阴影效果！</h1>
```

```css
h1 {
  text-shadow: 2px 2px 5px red;
}
```

:::

