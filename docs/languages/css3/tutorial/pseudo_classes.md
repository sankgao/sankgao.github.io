---
title: 伪类
icon: classes
date: 2023-05-18
category: Frontend
tag:
    - CSS3
---

伪类用于定义元素的特殊状态。

可以用于：

- 设置鼠标悬停在元素上时的样式
- 为已访问和未访问链接设置不同的样式
- 设置元素获得焦点时的样式

## 语法

伪类的语法：

```text
selector:pseudo-class {
  property: value;
}
```

- **selector**：选择器
- **pseudo-class**：伪类
- **property**：属性
- **value**：值

## 锚伪类

链接能够以不同的方式显示。例如：

::: normal-demo 演示

```html
<p><b><a href="https://www.w3school.com.cn/" target="_blank">这是一个链接</a></b></p>
```

```css
/* 未访问的链接 */
a:link {
  color: red;
}

/* 访问过的链接 */
a:visited {
  color: green;
}

/* 鼠标悬停在链接上 */
a:hover {
  color: hotpink;
}

/* 链接被点击时 */
a:active {
  color: blue;
}
```

:::

::: tip
- `a:hover` 必须在 CSS 定义中的 `a:link` 和 `a:visited` 之后，才能生效
- `a:active` 必须在 CSS 定义中的 `a:hover` 之后才能生效
- 伪类名称对大小写不敏感
:::

### 伪类和 CSS 类

伪类可以与 CSS 类结合使用。

例如：当您将鼠标悬停在例子中的链接上时，它会改变颜色。

::: normal-demo 演示

```html
<p><b><a href="https://www.w3school.com.cn/" target="_blank">这是一个链接</a></b></p>

<p>伪类可以与 CSS 类结合使用：</p>
<p><b><a class="highlight" href="https://www.w3school.com.cn/" target="_blank">这是一个链接</a></b></p>
```

```css
/* 未访问的链接 */
a:link {
  color: red;
}

/* 访问过的链接 */
a:visited {
  color: green;
}

/* 鼠标悬停在链接上 */
a:hover {
  color: hotpink;
}

a.highlight:hover {
  color: #ff0000;
}

/* 链接被点击时 */
a:active {
  color: blue;
}
```

:::

### 悬停在 \<div> 上

在 `<div>` 元素上使用 `:hover` 伪类的实例。例如：

::: normal-demo 演示

```html
<p>请把鼠标移到下面的 div 元素上来改变其背景色：</p>

<div>把鼠标移到我上面</div>
```

```css
div {
  background-color: green;
  color: white;
  padding: 25px;
  text-align: center;
}

div:hover {
  background-color: blue;
}
```

:::

### 简单的工具提示悬停

把鼠标悬停到 `<div>` 元素以显示 `<p>` 元素（类似工具提示的效果）。例如：

::: normal-demo 演示

```html
<div>鼠标移到我上面来显示 p 元素
  <p>哈哈！我在这里！</p>
</div>
```

```css
p {
  display: none;
  background-color: yellow;
  padding: 20px;
}

div:hover p {
  display: block;
}
```

:::

## :first-child 伪类

`:first-child` 伪类与指定的元素匹配：该元素是另一个元素的第一个子元素。

选择器匹配作为任何元素的第一个子元素的任何 `<p>` 元素。例如：

::: normal-demo 演示

```html
<p>这是一段文本。</p>

<p>这是一段文本。</p>
```

```css
p:first-child {
  color: blue;
} 
```

:::

### 匹配所有 \<p> 元素中的首个 \<i> 元素

选择器匹配所有 `<p>` 元素中的第一个 `<i>` 元素。例如：

::: normal-demo 演示

```html
<p>这是<i>一段</i>文本。这是<i>一段</i>文本。</p>

<p>这是<i>一段</i>文本。这是<i>一段</i>文本。</p>
```

```css
p i:first-child {
  color: blue;
} 
```

:::

### 匹配所有首个 \<p> 元素中的所有 \<i> 元素

选择器匹配作为另一个元素的第一个子元素的 `<p>` 元素中的所有 `<i>` 元素。例如：

::: normal-demo 演示

```html
<p>这是<i>一段</i>文本。这是<i>一段</i>文本。</p>

<p>这是<i>一段</i>文本。这是<i>一段</i>文本。</p>
```

```css
p:first-child i {
  color: blue;
} 
```

:::

## :lang 伪类

`:lang` 伪类允许您为不同的语言定义特殊的规则。

`:lang` 为属性为 `lang="en"` 的 `<q>` 元素定义引号。例如：

::: normal-demo 演示

```html
<p>在本例中，:lang 为 lang="en" 的 q 元素定义引号：</p>

<p>这是 <q lang="en">一段</q> 文本。</p>
```

```css
q:lang(en) {
  quotes: "~" "~";
}
```

:::

