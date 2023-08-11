---
title: 浮动和清除
icon: float
date: 2023-05-17
category: Frontend
tag:
    - CSS3
---

- **float**：属性规定元素如何浮动
- **clear**：属性规定哪些元素可以在清除的元素旁边以及在哪一侧浮动

## float 属性

`float` 属性用于定位和格式化内容。例如：让图像向左浮动到容器中的文本那里。

`float` 属性可以设置以下值之一：

- **left**：元素浮动到其容器的左侧
- **right**：元素浮动在其容器的右侧
- **none**：元素不会浮动（将显示在文本中刚出现的位置）。默认值
- **inherit**：元素继承其父级的 `float` 值

最简单的用法是，实现（报纸上）文字包围图片的效果。

### float: right;

指定图像应在文本中向右浮动。例如：

::: normal-demo 演示

```html
<p><img src="/html5/eg_cute.gif" alt="eg_sun" />这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本</p>
```

```css
img {
  float: right;
}
```

:::

### float: left;

指定图像应在文本中向左浮动。例如：

::: normal-demo 演示

```html
<p><img src="/html5/eg_cute.gif" alt="eg_sun" />这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本</p>
```

```css
img {
  float: left;
}
```

:::

### float: none;

图像将显示在文本中刚出现的位置。例如：

::: normal-demo 演示

```html
<p><img src="/html5/eg_cute.gif" alt="eg_sun" />这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本</p>
```

```css
img {
  float: none;
}
```

:::

## clear 属性

`clear` 属性规定元素的哪一侧不允许其他浮动元素。

- **left**：在左侧不允许浮动元素
- **right**：在右侧不允许浮动元素
- **both**：在左右两侧均不允许浮动元素
- **none**：允许浮动元素出现在两侧。默认值
- **inherit**：元素继承其父级的 `clear` 值

使用 `clear` 属性的最常见用法是在元素上使用了 `float` 属性之后。

在清除浮动时，应该对清除与浮动进行匹配：如果某个元素浮动到左侧，则应清除左侧。您的浮动元素会继续浮动，但是被清除的元素将显示在其下方。

例如：将清除向左的浮动。表示在（div 的）左侧不允许出现浮动元素。

::: normal-demo 演示

```html
<h1>不使用 clear</h1>
<div class="div1">div1</div>
<div class="div2">div2 - 请注意，在 HTML 代码中 div2 在 div1 之后。不过，由于 div1 向左浮动，div2 中的文本会流动到 div1 周围。</div>
<br /><br />

<h1>使用 clear</h1>
<div class="div3">div3</div>
<div class="div4">div4 - 在此处，clear: left; 把 div4 移动到浮动的 div3 下方。值 "left" 会清除向左浮动的元素。您也可以清除 "right" 和 "both"。</div>
```

```css
.div1 {
  float: left;
  width: 100px;
  height: 50px;
  margin: 10px;
  border: 3px solid #73AD21;
}

.div2 {
  border: 1px solid red;
}

.div3 {
  float: left;
  width: 100px;
  height: 50px;
  margin: 10px;
  border: 3px solid #73AD21;
}

.div4 {
  border: 1px solid red;
  clear: left;
}
```

:::

### clearfix Hack

如果一个元素比包含它的元素高，并且它是浮动的，它将 “溢出” 到其容器之外。

向包含元素添加 `overflow: auto;`，来解决此问题。例如：

::: normal-demo 演示

```html
<p>在本例中，图像高于包含它的元素，然而它被浮动了，所以它会在容器之外溢出：</p>

<div>
  <img class="img1" src="/html5/eg_cute.gif" alt="eg_sun" width="180" height="180" />
  这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本
</div>

<p style="clear: right">请为包含元素添加一个带有 overflow: auto; 的 clearfix 类，以解决此问题：</p>

<div class="clearfix">
  <img class="img2" src="/html5/eg_cute.gif" alt="eg_sun" width="180" height="180" />
  这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本
</div>
```

```css
div {
  border: 3px solid #4CAF50;
  padding: 5px;
}

.img1,
.img2 {
  float: right;
}

.clearfix {
  overflow: auto;
}
```

:::

只要您能够控制外边距和内边距（否则您可能会看到滚动条），`overflow: auto` clearfix 就会很好地工作。

但是，新的现代 clearfix hack 技术使用起来更安全，被应用于多数网站。例如：

::: normal-demo 演示

```html
<p>在本例中，图像高于包含它的元素，然而它被浮动了，所以它会在容器之外溢出：</p>

<div>
  <h1>Without Clearfix</h1>
  <img class="img1" src="/html5/eg_cute.gif" alt="eg_sun" width="180" height="180" />
  这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本
</div>

<p style="clear: right">请为包含元素添加 clearfix hack，以解决此问题：</p>

<div class="clearfix">
  <h1>With Clearfix</h1>
  <img class="img2" src="/html5/eg_cute.gif" alt="eg_sun" width="180" height="180" />
  这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本
</div>
```

```css
div {
  border: 3px solid #4CAF50;
  padding: 5px;
}

.img1,
.img2 {
  float: right;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
```

:::

- **::after**：伪元素可用于在元素内容之后插入一些内容
- **content**：属性用于定义元素之前或之后放置的生成内容
- **display**：属性规定元素应该生成的框的类型。`table` 此元素会作为块级表格来显示（类似 `<table>`），表格前后带有换行符

## 浮动实例

- 网格或等宽的框。例如：

    ::: normal-demo 演示

    ```html
    <p>浮动的框：</p>

    <div class="clearfix">
      <div class="box" style="background-color: #bbb">
        <p>框中的一些文本。</p>
      </div>
      <div class="box" style="background-color: #ccc">
        <p>框中的一些文本。</p>
      </div>
      <div class="box" style="background-color: #ddd">
        <p>框中的一些文本。</p>
      </div>
    </div>
    ```

    ```css
    .box {
      float: left;
      width: 33.33%;
      padding: 50px;
    }

    .clearfix::after {
      content: "";
      clear: both;
      display: table;
    }
    ```

    :::

- box-sizing

    您可以轻松地并排创建三个浮动框。但是，当您添加一些内容来扩大每个框的宽度（例如上个例子：内边距或边框）时，这个框会损坏。`box-sizing` 属性允许在框的总宽度（和高度）中包括内边距和边框，确保内边距留在框内而不会破裂。例如：

    ::: normal-demo 演示

    ```html
    <p>并排浮动的框：</p>

    <div class="clearfix">
      <div class="box" style="background-color: #bbb">
        <p>框中的一些文本。</p>
      </div>
      <div class="box" style="background-color: #ccc">
        <p>框中的一些文本。</p>
      </div>
      <div class="box" style="background-color: #ddd">
        <p>框中的一些文本。</p>
      </div>
    </div>
    ```

    ```css
    * {
      box-sizing: border-box;
    }

    .box {
      float: left;
      width: 33.33%;
      padding: 50px;
    }

    .clearfix::after {
      content: "";
      clear: both;
      display: table;
    }
    ```

    :::

    - **box-sizing**：属性允许您以特定的方式定义匹配某个区域的特定元素。`border-box` 值为元素设定的宽度和高度决定了元素的边框盒

- 等宽的框

    在上例中，以相等的宽度并排浮动框。但是，创建具有相同高度的浮动框并不容易。不过，快速解决方案是设置一个固定的高度。例如：

    ::: normal-demo 演示

    ```html
    <p>有相同高度的浮动框：</p>

    <div class="clearfix">
      <div class="box" style="background-color:#bbb">
        <h2>Box 1</h2>
        <p>框中的一些文本。框中的一些文本。</p>
      </div>
      <div class="box" style="background-color:#ccc">
        <h2>Box 2</h2>
        <p>框中的一些文本。框中的一些文本。</p>
        <p>框中的一些文本。框中的一些文本。</p>
        <p>框中的一些文本。框中的一些文本。</p>
      </div>
    </div>
    ```

    ```css
    * {
      box-sizing: border-box;
    }

    .box {
      float: left;
      width: 50%;
      padding: 50px;
      height: 300px;
    }

    .clearfix::after {
      content: "";
      clear: both;
      display: table;
    }
    ```

    :::

    ::: tip
    但是，这么做就失去了弹性。如果可以保证框中始终有相同数量的内容，那是可以的。但是很多时候，内容是不一样的。如果您在手机上尝试上例，则会看到第二个框的内容将显示在框的外部
    :::

- Flexbox

    自动拉伸框使其与最长的框一样长。例如：

    ::: normal-demo 演示

    ```html
    <h1>弹性框</h1>

    <div class="flex-container">
      <div class="box">框 1 - 这是一些文本，以确保内容真的很高。这是一些文本，以确保内容真的很高。这是一些文本，以确保内容真的很高。这是一些文本，以确保内容真的很高。</div>
      <div class="box">框 2 - 我的高度与框 1 保持一致。</div>
    </div>

    <p>请尝试调整浏览器窗口的大小，以查看弹性布局。</p>
    <p><b>注释：</b>Internet Explorer 10 或更早的版本不支持 Flexbox。</p>
    ```

    ```css
    .flex-container {
      display: flex;
      flex-wrap: nowrap;
      background-color: DodgerBlue;
    }

    .flex-container .box {
      background-color: #f1f1f1;
      width: 50%;
      margin: 10px;
      text-align: center;
      line-height: 75px;
      font-size: 30px;
    }
    ```

    :::

    - **flex-wrap**：属性规定弹性项目是否应换行

- 导航菜单

    将 `float` 与超链接列表一起使用，来创建水平菜单。例如：

    ::: normal-demo 演示

    ```html
    <ul>
      <li><a href="#home" class="active">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#about">About</a></li>
    </ul>
    ```

    ```css
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333;
    }

    li {
      float: left;
    }

    li a {
      display: inline-block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    li a:hover {
      background-color: #111;
    }

    .active {
      background-color: red;
    }
    ```

    :::

- Web 布局实例

    使用 `float` 属性完成整个 Web 布局也很常见。例如：

    ::: normal-demo 演示

    ```html
    <div class="header">
      <h1>Shanghai</h1>
    </div>
    
    <div class="clearfix">
      <div class="column menu">
        <ul>
          <li>The Flight</li>
          <li>The City</li>
          <li>The Island</li>
          <li>The Food</li>
        </ul>
      </div>
    
      <div class="column content">
        <h1>The City</h1>
        <p>Shanghai is one of the four direct-administered municipalities of the People's Republic of China. Welcome to Shanghai!
        </p>
        <p>You will learn more about web layout and responsive web pages in a later chapter.</p>
      </div>
    </div>
    
    <div class="footer">
      <p>Footer Text</p>
    </div>
    ```

    ```css
    * {
      box-sizing: border-box;
    }

    .header,
    .footer {
      background-color: grey;
      color: white;
      padding: 15px;
    }

    .column {
      float: left;
      padding: 15px;
    }

    .clearfix::after {
      content: "";
      clear: both;
      display: table;
    }

    .menu {
      width: 25%;
    }

    .content {
      width: 75%;
    }

    .menu ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    .menu li {
      padding: 8px;
      margin-bottom: 8px;
      background-color: #33b5e5;
      color: #ffffff;
    }

    .menu li:hover {
      background-color: #0099cc;
    }
    ```

    :::

