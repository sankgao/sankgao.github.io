---
title: 类
icon: classes
date: 2023-05-08
category: Frontend
tag:
    - HTML5
---

对 HTML 进行分类（设置类），使能够为元素的类定义 CSS 样式。

为相同的类设置相同的样式，或者为不同的类设置不同的样式。

类的语法是：写一个点号（`.`），后跟一个类名称。然后，在花括号 `{}` 中定义 CSS 属性

在 HTML 元素中使用 `class` 应用类定义的 CSS 样式。

## 分类块级元素

HTML `<div>` 元素是块级元素。它能够用作其他 HTML 元素的容器。

设置 `<div>` 元素的类，使我们能够为相同的 `<div>` 元素设置相同的类。

::: normal-demo 演示

```html
<head>
  <style>
    .cities {
      background-color: black;
      color: white;
      margin: 20px;
      padding: 20px;
    }
  </style>
</head>

<div class="cities">
  <h2>London</h2>

  <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>

  <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
</div>

<div class="cities">
  <h2>Paris</h2>

  <p>Paris is the capital and most populous city of France.</p>

  <p>Situated on the Seine River, it is at the heart of the 蝜e-de-France region, also known as the r間ion parisienne.</p>

  <p>Within its metropolitan area is one of the largest population centers in Europe, with over 12 million inhabitants.</p>
</div>

<div class="cities">
  <h2>Tokyo</h2>

  <p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p>

  <p>It is the seat of the Japanese government and the Imperial Palace, and the home of the Japanese Imperial Family.</p>

  <p>The Tokyo prefecture is part of the world's most populous metropolitan area with 38 million people and the world's largest urban economy.</p>
</div>
```

:::

- **class**：应用额外的样式

## 分类行内元素

HTML `<span>` 元素是行内元素，能够用作文本的容器。

设置 `<span>` 元素的类，能够为相同的 `<span>` 元素设置相同的样式。

::: normal-demo 演示

```html
<head>
  <style>
    span.red {
      color: red;
    }
  </style>
</head>

<h1>我的<span class="red">重要的</span>标题</h1>
```

:::

