---
title: 响应式
icon: responsive
date: 2023-05-08
category: Frontend
tag:
    - HTML5
---

响应式网页设计是关于创建在所有设备上看起来都不错的网页！

响应式网页设计将自动调整不同的屏幕尺寸和视口。

## 什么是 RWD

- RWD 指的是 **响应式 Web 设计**（Responsive Web Design）
- RWD 能够以可变尺寸传递网页
- RWD 对于平板和移动设备是必需的

## 创建您自己的响应式设计

通过类样式创建响应式设计。例如：

::: normal-demo 演示

```html
<head>
  <style>
    .city {
      float: left;
      margin: 5px;
      padding: 15px;
      width: 300px;
      height: 300px;
      border: 1px solid black;
    }
  </style>
</head>

<h1>W3School Demo</h1>
<h2>Resize this responsive page!</h2>
<br>

<div class="city">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>It is the most populous city in the United Kingdom,
    with a metropolitan area of over 13 million inhabitants.</p>
</div>

<div class="city">
  <h2>Paris</h2>
  <p>Paris is the capital and most populous city of France.</p>
</div>

<div class="city">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area,
    and the most populous metropolitan area in the world.</p>
</div>
```

:::

## 使用 Bootstrap

另一个创建响应式设计的方法，是使用现成的 CSS 框架。

`Bootstrap` 是最流行的开发响应式 web 的 HTML、CSS 和 JS 框架。

`Bootstrap` 帮助您开发在任何尺寸都外观出众的站点：显示器、笔记本电脑、平板电脑或手机。例如：

::: normal-demo 演示

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
</head>

<div class="container">
  <div class="jumbotron">
    <h1>W3School Demo</h1>
    <p>Resize this responsive page!</p>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-4">
      <h2>London</h2>
      <p>London is the capital city of England.</p>
      <p>It is the most populous city in the United Kingdom,
        with a metropolitan area of over 13 million inhabitants.</p>
    </div>
    <div class="col-md-4">
      <h2>Paris</h2>
      <p>Paris is the capital and most populous city of France.</p>
    </div>
    <div class="col-md-4">
      <h2>Tokyo</h2>
      <p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area,
        and the most populous metropolitan area in the world.</p>
    </div>
  </div>
</div>
```

:::


