---
title: 导航栏
icon: navbar
date: 2023-05-19
category: Frontend
tag:
    - CSS3
---

易用的导航对于任何网站都很重要。

通过使用 CSS，您可以将无聊的 HTML 菜单转换为美观的导航栏。

## 导航栏 = 链接列表

导航栏需要标准 HTML 作为基础。

在实例中，将用标准的 HTML 列表构建导航栏。

导航栏基本上就是链接列表，因此使用 `<ul>` 和 `<li>` 元素会很有意义。例如：

::: normal-demo 演示

```html
<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

<p class="note"><b>注释：</b>将 href="#" 用于测试链接。在实际的网站中，用的是 URL。</p>
```

:::

现在，从列表中删除项目符号以及外边距和内边距（填充）。例如：

::: normal-demo 演示

```html
<ul>
  <li><a href="#home">Home</a></li>
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
}
```

:::

## 垂直导航栏

创建背景色为灰色的基础垂直导航栏，并在用户将鼠标移到链接上时改变链接的背景色。例如：

::: normal-demo 演示

```html
<ul>
  <li><a href="#home">Home</a></li>
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
  width: 200px;
  background-color: #f1f1f1;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

/* 悬停时更改链接颜色 */
li a:hover {
  background-color: #555;
  color: white;
}
```

:::

- **display: block;**：将链接显示为块元素可以使整个链接区域都可以被单击（而不仅仅是文本）

### 活动或当前的导航链接

向当前链接添加 `active` 类，以使用户知道他在哪个页面上。例如：

::: normal-demo 演示

```html
<ul>
  <li><a class="active" href="#home">Home</a></li>
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
  width: 200px;
  background-color: #f1f1f1;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

li a.active {
  background-color: #4CAF50;
  color: white;
}

li a:hover:not(.active) {
  background-color: #555;
  color: white;
}
```

:::

### 居中链接以及添加边框

把 `text-align: center` 添加到 `<li>` 或 `<a>`，使链接居中。

将 `border` 属性添加到 `<ul>`，在导航栏周围添加边框。如果您还希望在导航栏内添加边框，请为所有 `<li>` 元素添加 `border-bottom`，最后一个元素除外。例如：

::: normal-demo 演示

```html
<ul>
  <li><a class="active" href="#home">Home</a></li>
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
  width: 200px;
  background-color: #f1f1f1;
  border: 1px solid #555;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

li {
  text-align: center;
  border-bottom: 1px solid #555;
}

li:last-child {
  border-bottom: none;
}

li a.active {
  background-color: #4CAF50;
  color: white;
}

li a:hover:not(.active) {
  background-color: #555;
  color: white;
}
```

:::

### 全高固定垂直导航栏

创建全高的 “粘性” 侧面导航。例如：

::: normal-demo 演示

```html
<ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

<div style="margin-left: 25%; padding: 1px 16px; height: 1000px;">
  <h1>全高的固定侧导航栏</h1>
  <h2>请尝试滚动此区域，并查看 sidenav 如何粘在页面上。</h2>
  <p>请注意，此 div 元素的左外边距为 25%。这是因为侧导航栏被设置为 25% 宽。如果删除这个外边距，则 sidenav 将叠加到该 div 上。</p>
  <p>还要注意，已为 sidenav 设置 overflow：auto。如果 sidenav 太长时（例如，如果其中有超过 50 个链接），会添加滚动条。</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
</div>
```

```css
body {
  margin: 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 25%;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

li a.active {
  background-color: #4CAF50;
  color: white;
}

li a:hover:not(.active) {
  background-color: #555;
  color: white;
}
```

:::

## 水平导航栏

有两种创建水平导航栏的方法：使用行内或浮动列表项。

### 行内列表项

构建水平导航栏的一种方法是，需要将 `<li>` 元素指定为 `inline`。例如：

::: normal-demo 演示

```html
<ul>
  <li><a href="#home">Home</a></li>
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
}

li {
  display: inline;
}
```

:::

- **display: inline;**：默认情况下，`<li>` 元素是块元素。在这里，需要删除每个列表项之前和之后的换行符，这样它们才能显示在一行。

### 浮动列表项

创建水平导航栏的另一种方法是浮动 `<li>` 元素，并为导航链接规定布局。例如：

::: normal-demo 演示

```html
<ul>
  <li><a href="#home">Home</a></li>
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
}

li {
  float: left;
}

li a {
  display: block;
  padding: 8px;
  background-color: #dddddd;
}
```

:::

::: note
如需全宽的背景色，请将 `background-color` 添加到 `<ul>` 而不是每个 `<a>` 元素
:::

### 水平导航栏实例

- 基础水平导航栏

    创建具有深色背景色的基础水平导航栏，并在用户将鼠标移到链接上方时改变链接的背景色。例如：

    ::: normal-demo 演示

    ```html
    <ul>
      <li><a href="#home">Home</a></li>
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
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    li a:hover {
      background-color: #111;
    }
    ```

    :::

- 活动或当前的导航链接

    向当前链接添加 `active` 类，这样用户就知道他在哪个页面上。例如：

    ::: normal-demo 演示

    ```html
    <ul>
      <li><a class="active" href="#home">Home</a></li>
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
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    li a:hover:not(.active) {
      background-color: #111;
    }

    .active {
      background-color: #4CAF50;
    }
    ```

    :::

- 右对齐链接

    通过将列表项向右浮动来右对齐链接（`float: right;`）。例如：

    ::: normal-demo 演示

    ```html
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li style="float: right"><a class="active" href="#about">About</a></li>
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
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    li a:hover:not(.active) {
      background-color: #111;
    }

    .active {
      background-color: #4CAF50;
    }
    ```

    :::

- 边框分隔栏

    将 `border-right` 属性添加到 `<li>`，以创建链接分隔符。例如：

    ::: normal-demo 演示

    ```html
    <ul>
      <li><a class="active" href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li style="float: right"><a href="#about">About</a></li>
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
      border-right: 1px solid #bbb;
    }

    li:last-child {
      border-right: none;
    }

    li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    li a:hover:not(.active) {
      background-color: #111;
    }

    .active {
      background-color: #4CAF50;
    }
    ```

    :::

- 固定的导航栏

    使导航栏保持在页面的顶部或底部，即使用户滚动页面也是如此。例如：

    ::: normal-demo 演示

    ```html
    <ul>
      <li><a class="active" href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#about">About</a></li>
    </ul>

    <div style="padding: 20px; margin-top: 30px; background-color: #1abc9c; height: 1500px;">
      <h1>固定的顶部导航栏</h1>
      <h2>请滚动页面以查看效果。</h2>
      <h2>页面滚动时导航栏将位于页面顶部。</h2>

      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
      <p>Some text some text some text some text..</p>
    </div>
    ```

    ```css
    body {
      margin: 0;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333;
      position: fixed;
      top: 0;
      width: 100%;
    }

    li {
      float: left;
    }

    li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    li a:hover:not(.active) {
      background-color: #111;
    }

    .active {
      background-color: #4CAF50;
    }
    ```

    :::

- 粘性导航栏

    为 `<ul>` 添加 `position: sticky;`，以创建粘性导航栏。

    粘性元素会根据滚动位置在相对和固定之间切换。它是相对定位的，直到在视口中遇到给定的偏移位置为止，然后将其 “粘贴” 在适当的位置（比如：`position: fixed`）。例如：

    ::: normal-demo 演示

    ```html
    <div class="header">
      <h1>向下滚动</h1>
      <p>请向下滚动以查看粘性效果。</p>
    </div>

    <ul>
      <li><a class="active" href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#about">About</a></li>
    </ul>

    <h1>固定的顶部导航栏</h1>
    <h2>请滚动页面以查看效果。</h2>
    <h2>页面滚动时导航栏将位于页面顶部。</h2>

    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    ```

    ```css
    body {
      font-size: 28px;
    }
    
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333;
      position: -webkit-sticky; /* Safari */
      position: sticky;
      top: 0;
    }
    
    li {
      float: left;
    }
    
    li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    
    li a:hover {
      background-color: #111;
    }
    
    .active {
      background-color: #4caf50;
    }
    ```

    :::

