---
title: 图片库
icon: pic
date: 2023-05-19
category: Frontend
tag:
    - CSS3
---

## 图片库

CSS 可用于创建图片库。例如：

::: normal-demo 演示

```html
<div class="gallery">
  <a target="_blank" href="/html5/eg_merglobe.gif">
    <img src="/html5/eg_merglobe.gif" alt="Cinque Terre" width="600" height="400" />
  </a>
  <div class="desc">在此处添加图像描述</div>
</div>

<div class="gallery">
  <a target="_blank" href="/html5/eg_sun.gif">
    <img src="/html5/eg_sun.gif" alt="Forest" width="600" height="400" />
  </a>
  <div class="desc">在此处添加图像描述</div>
</div>

<div class="gallery">
  <a target="_blank" href="/html5/eg_venus.gif">
    <img src="/html5/eg_venus.gif" alt="Northern Lights" width="600" height="400" />
  </a>
  <div class="desc">在此处添加图像描述</div>
</div>
```

```css
div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}
```

:::

## 图像精灵

图像精灵是单个图像中包含的图像集合。

包含许多图像的网页可能需要很长时间才能加载，同时会生成多个服务器请求。

使用图像精灵将减少服务器请求的数量并节约带宽。

使用以下单幅图像（`navsprites.gif`）而不是使用三幅单独的图像：

<img src="/html5/navsprites.gif" alt="navsprites" />

例如：CSS 指定了显示 `navsprites.gif` 图像的哪部分。

::: normal-demo 演示

```html
<img id="home" src="/css/trans.gif" width="1" height="1" />
<img id="next" src="/css/trans.gif" width="1" height="1" />
```

```css
#home {
  width: 46px;
  height: 44px;
  background: url(/html5/navsprites.gif) 0 0;
}

#next {
  width: 43px;
  height: 44px;
  background: url(/html5/navsprites.gif) -91px 0;
}
```

:::

- **\<img id="home" src="trans.gif" />**：仅定义小的透明图像，因为 `src` 属性不能为空。而实际显示的图像将是在 CSS 中指定的背景图像
- **width: 46px; height: 44px;**：定义我们要使用的图像部分
- **background: url(navsprites.gif) 0 0;**：定义背景图片及其位置（`left 0px`, `top 0px`）

### 创建导航列表

使用精灵图片（`navsprites.gif`）来创建一个导航列表。

使用 HTML 列表，因为它可以是链接，同时还支持背景图片。例如：CSS 指定了显示 `navsprites.gif` 图像的哪部分。

::: normal-demo 演示

```html
<ul id="navlist">
  <li id="home"><a href="https://www.baidu.com/"></a></li>
  <li id="prev"><a href="https://www.csdn.net/"></a></li>
  <li id="next"><a href="https://github.com/"></a></li>
</ul>
```

```css
#navlist {
  position: relative;
}

#navlist li {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  top: 0;
}

#navlist li, #navlist a {
  height: 44px;
  display: block;
}

#home {
  left: 0px;
  width: 43px;
  background: url("/html5/navsprites.gif") 0 0;
}

#prev {
  left: 63px;
  width: 42px;
  background: url("/html5/navsprites.gif") -47px 0;
}

#next {
  left: 129px;
  width: 42px;
  background: url("/html5/navsprites.gif") -91px 0;
}
```

:::

### 悬停效果

向导航列表中添加悬停效果。

::: tip
`:hover` 选择器可用于所有元素，而不仅限于链接
:::

使用新图像（`navsprites_hover.gif`）包含三幅导航图像和三幅用于悬停效果的图像：

<img src="/html5/navsprites_hover.gif" alt="navsprites_hover" />

因为这是一幅图像，而不是六个单独的文件，所以当用户将鼠标悬停在图像上时，不会有加载延迟。

仅添加三行代码来实现悬停效果。例如：

::: normal-demo 演示

```html
<ul id="navlist">
  <li id="home"><a href="https://www.baidu.com/"></a></li>
  <li id="prev"><a href="https://www.csdn.net/"></a></li>
  <li id="next"><a href="https://github.com/"></a></li>
</ul>
```

```css
#navlist {
  position: relative;
}

#navlist li {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  top: 0;
}

#navlist li,
#navlist a {
  height: 44px;
  display: block;
}

#home {
  left: 0px;
  width: 43px;
  background: url('/html5/navsprites_hover.gif') 0 0;
}

#prev {
  left: 63px;
  width: 42px;
  background: url('/html5/navsprites_hover.gif') -47px 0;
}

#next {
  left: 129px;
  width: 42px;
  background: url('/html5/navsprites_hover.gif') -91px 0;
}

#home a:hover {
  background: url('/html5/navsprites_hover.gif') 0 -45px;
}

#prev a:hover {
  background: url('/html5/navsprites_hover.gif') -47px -45px;
}

#next a:hover {
  background: url('/html5/navsprites_hover.gif') -91px -45px;
}
```

:::

