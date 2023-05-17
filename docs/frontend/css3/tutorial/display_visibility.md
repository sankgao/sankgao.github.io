---
title: Display
icon: display
date: 2023-05-17
category: Frontend
tag:
    - CSS3
---

- **display**：指定应如何显示元素
- **visibility**：指定元素是否应该可见

每个 HTML 元素都有一个默认的 `display` 值，具体取决于它的元素类型。大多数元素的默认 `display` 值为 `block` 或 `inline`。

## 块级元素（block element）

块级元素总是从新行开始，并占据可用的全部宽度（尽可能向左和向右伸展）。例如：

::: normal-demo 演示

```html
<div>
  这个 &lt;div&gt; 元素属于块级元素。
</div>
```

```css
div {
  border: 2px solid red;
}
```

:::

块级元素的一些例子：

- **\<div>**
- **\<h1> - \<h6>**
- **\<p>**
- **\<form>**
- **\<header>**
- **\<footer>**
- **\<section>**

## 行内元素（inline element）

内联元素不从新行开始，仅占用所需的宽度。例如：

::: normal-demo 演示

```html
这是段落中的<span>行内 &lt;span&gt; 元素</span>。
```

```css
span {
  border: 2px solid red;
}
```

:::

行内元素的一些例子：

- **\<span>**
- **\<a>**
- **\<img>**

## Display

`display: none;` 通常与 JavaScript 一起使用，以隐藏和显示元素，而无需删除和重新创建它们。

默认情况下，`<script>` 元素使用 `display: none;`。

## 覆盖默认的 Display 值

如前所述，每个元素都有一个默认 `display` 值。但是，您可以覆盖它。

将行内元素更改为块元素，反之亦然，对于使页面以特定方式显示同时仍遵循 Web 标准很有用。

例如：为实现水平导航栏菜单而生成行内的 `<li>` 元素。

::: normal-demo 演示

```html
<ul>
  <li><a href="https://www.baidu.com/" target="_blank">百度</a></li>
  <li><a href="https://www.csdn.net/" target="_blank">CSDN</a></li>
  <li><a href="https://github.com/" target="_blank">GitHub</a></li>
</ul>
```

```css
li {
  display: inline;
}
```

:::

::: tip
设置元素的 `display` 属性仅会更改元素的显示方式，而不会更改元素的种类。因此，带有 `display: block;` 的行内元素不允许在其中包含其他块元素
:::

例如：将 `<span>` 元素显示为块元素。

::: normal-demo 演示

```html
<span>值为 block 的 display 属性会导致</span><span>两元素间的换行。</span>
```

```css
span {
  display: block;
}
```

:::

例如：下例将 `<a>` 元素显示为块元素。

::: normal-demo 演示

```html
<a href="https://www.baidu.com/" target="_blank">百度</a>
<a href="https://www.csdn.net/" target="_blank">CSDN</a>
<a href="https://github.com/" target="_blank">GitHub</a>
```

```css
a {
  display: block;
}
```

:::

## 隐藏元素

通过将 `display` 属性设置为 `none` 可以隐藏元素。该元素将被隐藏，并且页面将显示为好像该元素不在其中，不会占用任何空间。例如：

::: normal-demo 演示

```html
<h1>这是一个可见的标题</h1>
<h1 class="hidden">这是一个隐藏的标题</h1>
<p>请注意，display: none; 的标题不会占用任何空间。</p>
```

```css
h1.hidden {
  display: none;
}
```

:::

`visibility: hidden;` 也可以隐藏元素。但是，该元素仍将占用与之前相同的空间。元素将被隐藏，但仍会影响布局。例如：

::: normal-demo 演示

```html
<h1>这是一个可见的标题</h1>
<h1 class="hidden">这是一个隐藏的标题</h1>
<p>请注意，visibility: hidden; 的标题仍然占据空间。</p>
```

```css
h1.hidden {
  visibility: hidden;
}
```

:::

## 布局实例

- `display: none;` 与 `visibility: hidden;` 之间的差异。例如：

::: normal-demo 演示

```html
<p><b>visibility: hidden</b> 隐藏元素，但仍占据布局中的空间。</p>
<p><b>display: none</b> 从文档中删除元素。它不会占据任何空间。</p>

<div class="imgbox" id="imgbox1">Box 1<br>
  <img src="/html5/eg_merglobe.gif" alt="Box 1" style="width: 100%" />
  <button onclick="removeElement()">删除</button>
</div>

<div class="imgbox" id="imgbox2">Box 2<br>
  <img src="/html5/eg_sun.gif" alt="Box 2" style="width: 100%" />
  <button onclick="changeVisibility()">隐藏</button>
</div>

<div class="imgbox">Box 3<br>
  <img src="/html5/eg_venus.gif" alt="Box 3" style="width: 100%" />
  <button onclick="resetElement()">重置所有</button>
</div>
```

```css
.imgbox {
  float: left;
  text-align: center;
  width: 185px;
  border: 1px solid gray;
  margin: 4px;
  padding: 6px;
}

button {
  width: 100%;
}
```

```js
function removeElement() {
  document.getElementById("imgbox1").style.display = "none";
}

function changeVisibility() {
  document.getElementById("imgbox2").style.visibility = "hidden";
}

function resetElement() {
  document.getElementById("imgbox1").style.display = "block";
  document.getElementById("imgbox2").style.visibility = "visible";
}
```

:::

- 结合使用 CSS 和 JavaScript 来显示内容。例如：

::: normal-demo 演示

```html
<p class="flip" onclick="myFunction()">点击这里来显示面板</p>

<div id="panel">
  <p>该面板包含一个 div 元素，默认情况下该元素是隐藏的（display: none）。</p>
  <p>它使用 CSS 进行样式设置，我们使用 JavaScript 来显示它（display: block）。</p>
  <p>工作原理：请注意，带有 class="flip" 的 p 元素有 onclick 属性。当用户单击 p 元素时，将执行一个名为 myFunction() 的函数，该函数将 id="panel" 的 div 样式从 display:none（隐藏）更改为 display:block（可见）。</p>
  <p>您将在我们的 JavaScript 教程中学到有关 JavaScript 的更多知识。</p>
</div>
```

```css
#panel,
.flip {
  font-size: 16px;
  padding: 10px;
  text-align: center;
  background-color: #4CAF50;
  color: white;
  border: solid 1px #a6d8a8;
  margin: auto;
}

#panel {
  display: none;
}
```

```js
function myFunction() {
  document.getElementById("panel").style.display = "block";
}
```

:::

