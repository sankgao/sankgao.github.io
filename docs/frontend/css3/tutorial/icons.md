---
title: 图标
icon: icon
date: 2023-05-16
category: Frontend
tag:
    - CSS3
---

## 如何添加图标

向 HTML 页面添加图标的最简单方法是使用图标库。比如：Font Awesome。

将指定的图标类的名称添加到任何行内 HTML 元素（如：`<i>` 或 `<span>`）。

下面的图标库中的所有图标都是可缩放矢量，可以使用 CSS 进行自定义（大小、颜色、阴影等）。

## Font Awesome 图标

如需使用 Font Awesome 图标，请访问 [fontawesome](https://fontawesome.com/)，登录并获取代码添加到 HTML 页面的 `<head>` 部分：

```html
<head>
  <script src="https://kit.fontawesome.com/yourcode.js"></script>
</head>
```

例如：

::: normal-demo 演示

```html
<head>
  <title>Font Awesome Icons</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://kit.fontawesome.com/a076d05399.js"></script>
  <!--Get your own code at fontawesome.com-->
</head>

<body>

  <p>一些 Font Awesome 图标：</p>
  <i class="fas fa-cloud"></i>
  <i class="fas fa-heart"></i>
  <i class="fas fa-car"></i>
  <i class="fas fa-file"></i>
  <i class="fas fa-bars"></i>

  <p>有样式的 Font Awesome 图标（尺寸和颜色）：</p>
  <i class="fas fa-cloud" style="font-size: 24px;"></i>
  <i class="fas fa-cloud" style="font-size: 36px;"></i>
  <i class="fas fa-cloud" style="font-size: 48px; color: red;"></i>
  <i class="fas fa-cloud" style="font-size: 60px; color: lightblue;"></i>

</body>
```

:::

## Bootstrap 图标

如需使用 [Bootstrap 图标](https://v5.bootcss.com/)，请在 HTML 页面的 `<head>` 部分内添加这行引用 MAX CDN 链接：

```html
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
```

例如：

::: normal-demo 演示

```html
<head>
  <title>Bootstrap Icons</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>

<body class="container">

  <p>一些 Bootstrap 图标：</p>
  <i class="glyphicon glyphicon-cloud"></i>
  <i class="glyphicon glyphicon-remove"></i>
  <i class="glyphicon glyphicon-user"></i>
  <i class="glyphicon glyphicon-envelope"></i>
  <i class="glyphicon glyphicon-thumbs-up"></i>
  <br><br>

  <p>有样式的 Bootstrap 图标（尺寸和颜色）：</p>
  <i class="glyphicon glyphicon-cloud" style="font-size: 24px;"></i>
  <i class="glyphicon glyphicon-cloud" style="font-size: 36px;"></i>
  <i class="glyphicon glyphicon-cloud" style="font-size: 48px; color: red;"></i>
  <i class="glyphicon glyphicon-cloud" style="font-size: 60px; color: lightblue;"></i>

</body>
```

:::

## Google 图标

如需使用 [Google 图标](https://www.mdui.org/docs/material_icon)，请在 HTML 页面的 `<head>` 部分中添加以下行引用 Google CDN 链接：

```html
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
```

例如：

::: normal-demo 演示

```html
<head>
  <title>Google Icons</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>

<body>

  <p>一些 Google 图标：</p>
  <i class="material-icons">cloud</i>
  <i class="material-icons">favorite</i>
  <i class="material-icons">attachment</i>
  <i class="material-icons">computer</i>
  <i class="material-icons">traffic</i>
  <br><br>

  <p>有样式的 Google 图标（尺寸和颜色）：</p>
  <i class="material-icons" style="font-size: 24px;">cloud</i>
  <i class="material-icons" style="font-size: 36px;">cloud</i>
  <i class="material-icons" style="font-size: 48px; color: red;">cloud</i>
  <i class="material-icons" style="font-size: 60px; color: lightblue;">cloud</i>

</body>
```

:::

