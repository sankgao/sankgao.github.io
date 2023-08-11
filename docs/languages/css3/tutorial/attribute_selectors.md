---
title: 属性选择器
icon: attributes
date: 2023-05-19
category: Frontend
tag:
    - CSS3
---

可以设置带有特定属性或属性值的 HTML 元素的样式。

## [attribute] 选择器

[attribute] 选择器用于选取带有指定属性的元素。

例如：选择所有带有 `target` 属性的 `<a>` 元素。

::: normal-demo 演示

```html
<p>带有 target 属性的链接获得颜色背景：</p>

<a href="https://www.baidu.com/">baidu</a>
<a href="https://www.csdn.net/" target="_blank">CSDN</a>
<a href="https://github.com/" target="_top">GitHub</a>
```

```css
a[target] {
  background-color: yellow;
}
```

:::

## [attribute="value"] 选择器

[attribute="value"] 选择器用于选取带有指定属性和值的元素。

例如：选取所有带有 `target="_blank"` 属性的 `<a>` 元素。

::: normal-demo 演示

```html
<p>带有 target 属性的链接获得颜色背景：</p>

<a href="https://www.baidu.com/">baidu</a>
<a href="https://www.csdn.net/" target="_blank">CSDN</a>
<a href="https://github.com/" target="_top">GitHub</a>
```

```css
a[target=_blank] {
  background-color: yellow;
}
```

:::

## [attribute~="value"] 选择器

[attribute~="value"] 选择器选取属性值包含指定词的元素，且指定词前后不可以有任何字符。

例如：选取 `title` 属性包含 `flower` 单词的所有元素。

::: normal-demo 演示

```html
<p>title 属性包含 "flower" 单词的所有图像会有黄色边框。</p>

<img src="/html5/eg_cute.gif" title="eg_cute flower" />
<img src="/html5/eg_cute.gif" title="eg_cuteflower" />
<img src="/html5/eg_cute.gif" title="tree" />
```

```css
[title~=flower] {
  border: 5px solid yellow;
}
```

:::

::: note
上面的例子会匹配的属性元素：`title="flower"`、`title="summer flower"` 以及 `title="flower new"`

但不匹配：`title="my-flower"`、`title="summer_flower"` 或 `title="flowers"`
:::

## [attribute|="value"] 选择器

[attribute|="value"] 选择器用于选取指定属性以指定值开头的元素，且指定值后面只能有短横杠（`-`）字符连接其他值。

例如：选取 class 属性以 `top` 开头的所有元素。

::: normal-demo 演示

```html
<p class="top header">Welcome</p>
<p class="top-text">Hello world!</p>
<p class="top">Test!</p>
<p class="topcontent">Are you learning CSS?</p>
```

```css
[class|=top] {
  background: yellow;
}
```

:::

::: note
上面的例子会匹配的属性元素：`class="top"` 以及 `class="top-text"`

但不匹配：`class="top header"`、`class="texttop"`、`class="text_top"` 或 `class="topcontent"`
:::

## [attribute^="value"] 选择器

[attribute^="value"] 选择器用于选取指定属性以指定值开头的元素，指定值后面可以是任何字符。

例如：选取 class 属性以 `top` 开头的所有元素。

::: normal-demo 演示

```html
<p class="top header">Welcome</p>
<p class="top-text">Hello world!</p>
<p class="top_text">Test!</p>
<p class="topcontent">Are you learning CSS?</p>
```

```css
[class^="top"] {
  background: yellow;
}
```

:::

::: note
值不必是完整单词
:::

## [attribute$="value"] 选择器

[attribute$="value"] 选择器用于选取指定属性以指定值结尾的元素，且指定值前面不可以有横杠（`-`）字符连接其他值。

例如：选取 class 属性以 `test` 结尾的所有元素。

::: normal-demo 演示

```html
<p class="top header test">Welcome</p>
<p class="top-text">Hello world!</p>
<p class="top_test">Test!</p>
<p class="topcontenttest">Are you learning CSS?</p>
```

```css
[class$="test"] {
  background: yellow;
}
```

:::

::: note
值不必是完整单词

上面的例子会匹配的属性元素：`class="top header test"`、`class="top_test"` 以及 `class="topcontenttest"`

但不匹配：`class="top-text"`
:::

## [attribute*="value"] 选择器

[attribute*="value"] 选择器选取属性值包含指定词的元素，指定值前后可以是任何字符。

例如：选取 class 属性包含 `te` 的所有元素。

::: normal-demo 演示

```html
<p class="top header test">Welcome</p>
<p class="top-text">Hello world!</p>
<p class="top_test">Test!</p>
<p class="topcontenttest">Are you learning CSS?</p>
```

```css
[class*="te"] {
  background: yellow;
}
```

:::

## 设置表单样式

若需为不带 `class` 或 `id` 的表单设置样式，属性选择器会很有用。例如：

::: normal-demo 演示

```html
<form name="input" action="" method="get">
  Firstname:<input type="text" name="Name" value="Bill" size="20" />
  Lastname:<input type="text" name="Name" value="Gates" size="20" />
  <input type="button" value="Example Button" />
</form>
```

```css
input[type=text] {
  width: 150px;
  display: block;
  margin-bottom: 10px;
  background-color: yellow;
}

input[type=button] {
  width: 120px;
  margin-left: 35px;
  display: block;
}
```

:::

