---
title: 链接
icon: link
date: 2023-05-17
category: Frontend
tag:
    - CSS3
---

通过 CSS，可以用不同的方式设置链接的样式。

## 设置链接样式

链接可以使用任何 CSS 属性（例如：`color`、`font-family`、`background` 等）来设置样式。例如：

::: normal-demo 演示

```html
<p><b><a href="https://www.w3school.com.cn/" target="_blank">这是一个链接</a></b></p>
```

```css
a {
  color: hotpink;
}
```

:::

此外，可以根据链接处于什么状态来设置链接的不同样式。

**四种链接状态分别是：**

- **a:link**：正常的，未访问的链接
- **a:visited**：用户访问过的链接
- **a:hover**：用户将鼠标悬停在链接上时
- **a:active**：链接被点击时

例如：

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
如果为多个链接状态设置样式，请遵循如下顺序规则：

- `a:hover` 必须位于 `a:link` 和 `a:visited` 之后才能生效
- `a:active` 必须位于 `a:hover` 之后才能生效
:::

## 文本装饰

`text-decoration` 属性主要用于从链接中删除下划线。例如：

::: normal-demo 演示

```html
<p><b><a href="https://www.w3school.com.cn/" target="_blank">这是一个链接</a></b></p>
```

```css
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}
```

:::

## 背景色

`background-color` 属性可用于指定链接的背景色。例如：

::: normal-demo 演示

```html
<p><b><a href="https://www.w3school.com.cn/" target="_blank">这是一个链接</a></b></p>
```

```css
a:link {
  background-color: yellow;
}

a:visited {
  background-color: cyan;
}

a:hover {
  background-color: lightgreen;
}

a:active {
  background-color: hotpink;
} 
```

:::

## 链接按钮

组合了多个 CSS 属性，将链接显示为框/按钮。例如：

::: normal-demo 演示

```html
<p><b><a href="https://www.w3school.com.cn/" target="_blank">这是一个链接</a></b></p>
```

```css
a:link,
a:visited {
  background-color: #f44336;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover,
a:active {
  background-color: red;
}
```

:::

- **background-color**：属性设置背景颜色
- **color**：属性设置字体颜色
- **padding**：属性设置内边框边距。`14px 25px` 上下内边框边距为 14px；左右内边框边距为 25px
- **text-align**：属性用于设置文本的水平对齐方式。`center` 文本居中
- **text-decoration**：属性用于设置或删除文本装饰。`none` 用于从链接上删除下划线
- **display**：属性规定元素应该生成的框的类型。`inline-block` 行内块元素

## 链接实例

- 为超链接添加不同的样式。例如：

    ::: normal-demo 演示

    ```html
    <p>请把鼠标移到链接上并观察样式的变化：</p>

    <p><b><a class="one" href="/index.html" target="_blank">此链接改变颜色</a></b></p>
    <p><b><a class="two" href="/index.html" target="_blank">此链接改变字体大小</a></b></p>
    <p><b><a class="three" href="/index.html" target="_blank">此链接改变背景色</a></b></p>
    <p><b><a class="four" href="/index.html" target="_blank">此链接改变字体族</a></b></p>
    <p><b><a class="five" href="/index.html" target="_blank">此链接改变文本装饰</a></b></p>
    ```

    ```css
    a.one:link {
      color: #ff0000;
    }
    a.one:visited {
      color: #0000ff;
    }
    a.one:hover {
      color: #ffcc00;
    }

    a.two:link {
      color: #ff0000;
    }
    a.two:visited {
      color: #0000ff;
    }
    a.two:hover {
      font-size: 150%;
    }

    a.three:link {
      color: #ff0000;
    }
    a.three:visited {
      color: #0000ff;
    }
    a.three:hover {
      background: #66ff66;
    }

    a.four:link {
      color: #ff0000;
    }
    a.four:visited {
      color: #0000ff;
    }
    a.four:hover {
      font-family: monospace;
    }

    a.five:link {
      color: #ff0000;
      text-decoration: none;
    }
    a.five:visited {
      color: #0000ff;
      text-decoration: none;
    }
    a.five:hover {
      text-decoration: underline;
    }
    ```

    :::

- 创建带边框的链接按钮。例如：

    ::: normal-demo 演示

    ```html
    <p><b><a href="https://www.w3school.com.cn/" target="_blank">这是一个链接</a></b></p>
    ```

    ```css
    a:link,
    a:visited {
      background-color: white;
      color: black;
      border: 2px solid green;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
    }

    a:hover,
    a:active {
      background-color: green;
      color: white;
    }
    ```

    :::

- 改变光标

    `cursor` 属性指定要显示的光标类型。例如：

    ::: normal-demo 演示

    ```html
    <p>请把鼠标移动到单词上，以查看指针效果：</p>
    <span style="cursor: auto">auto</span><br />
    <span style="cursor: crosshair">crosshair</span><br />
    <span style="cursor: default">default</span><br />
    <span style="cursor: e-resize">e-resize</span><br />
    <span style="cursor: help">help</span><br />
    <span style="cursor: move">move</span><br />
    <span style="cursor: n-resize">n-resize</span><br />
    <span style="cursor: ne-resize">ne-resize</span><br />
    <span style="cursor: nw-resize">nw-resize</span><br />
    <span style="cursor: pointer">pointer</span><br />
    <span style="cursor: progress">progress</span><br />
    <span style="cursor: s-resize">s-resize</span><br />
    <span style="cursor: se-resize">se-resize</span><br />
    <span style="cursor: sw-resize">sw-resize</span><br />
    <span style="cursor: text">text</span><br />
    <span style="cursor: w-resize">w-resize</span><br />
    <span style="cursor: wait">wait</span><br />
    ```

    :::

