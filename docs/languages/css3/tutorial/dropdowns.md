---
title: 下拉菜单
icon: dropdown
date: 2023-05-19
category: Frontend
tag:
    - CSS3
---

使用 CSS 创建可悬停的下拉列表。

## 基础的下拉菜单

创建当用户将鼠标移到元素上时出现的下拉框。例如：

::: normal-demo 演示

```html
<h1>可悬停的下拉菜单</h1>

<div class="dropdown">
  <span>把鼠标移到我上面</span>
  <div class="dropdown-content">
    <p>Hello World!</p>
  </div>
</div>
```

```css
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
```

:::

使用任何元素打开下拉菜单内容。例如：`<span>` 或 `<button>` 元素。

使用容器元素（如：`<div>`）创建下拉内容，并在其中添加任何内容。

用 `<div>` 元素包围这些元素，使用 CSS 正确定位下拉内容。

`.dropdown` 类使用 `position:relative`，当我们希望将下拉内容放置在下拉按钮的正下方（使用 `position:absolute`）时，需要使用该类。

`.dropdown-content` 类保存实际的下拉菜单内容。默认情况下它是隐藏的，并将在悬停时显示。请注意，`min-width` 设置为 `160px`。可随时更改此设置。如果您希望下拉内容的宽度与下拉按钮的宽度一样，请将宽度设置为 `100%`（设置 `overflow: auto` 可实现在小屏幕上滚动）。

我们用了 CSS `box-shadow` 属性，而不是边框，这样下拉菜单看起来像一张 “卡片”。

当用户将鼠标移到下拉按钮上时，`:hover` 选择器用于显示下拉菜单。

## 下拉式菜单

创建一个下拉菜单，并允许用户从列表中选择一个选项。例如：

::: normal-demo 演示

```html
<h1>下拉菜单</h1>

<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
```

```css
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
```

:::

