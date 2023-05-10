---
title: JavaScript
icon: javascript
date: 2023-05-08
category: Frontend
tag:
    - HTML5
---

JavaScript 使 HTML 页面更具动态性和交互性。

## HTML \<script> 标签

HTML `<script>` 标签用于定义客户端脚本（JavaScript）。

`<script>` 元素即可包含脚本语句，也可通过 `src` 属性指向外部脚本文件。

JavaScript 的常见用途是图像处理、表单验证和内容的动态更改。

如需选取 HTML 元素，JavaScript 最常用 `document.getElementById()` 方法。

例如：向 `id="demo"` 的 HTML 元素内写入 `"Hello JavaScript!"`

::: normal-demo 演示

```html
<p>本例把 "Hello JavaScript!" 写入 id="demo" 的 HTML 元素内：</p>

<p id="demo"></p>
```

```js
document.getElementById("demo").innerHTML = "Hello JavaScript!";
```

:::

## HTML \<noscript> 标签

HTML `<noscript>` 标签定义了 **替代内容**，这些内容将显示给在浏览器中禁用了脚本或浏览器不支持脚本的用户。

::: normal-demo 演示

```html
<p id="demo"></p>

<noscript>抱歉，您的浏览器不支持 JavaScript！</noscript>

<p>不支持 JavaScript 的浏览器将显示 noscript 元素内的文本。</p>
```

```js
document.getElementById("demo").innerHTML = "Hello JavaScript!";
```

:::

## JavaScript 实例

- JavaScript 更改内容

    ::: normal-demo 演示

    ```html
    <p>JavaScript 可以更改 HTML 元素的内容：</p>

    <button type="button" onclick="myFunction()">点击我！</button>

    <p id="demo1">这是一个演示。</p>
    ```

    ```js
    function myFunction() {
      document.getElementById("demo1").innerHTML = "Hello JavaScript!";
    }
    ```

    :::

- JavaScript 更改样式

    ::: normal-demo 演示

    ```html
    <p id="demo">JavaScript 可以更改 HTML 元素的样式。</p>

    <button type="button" onclick="myFunction1()">点击我！</button>
    ```

    ```js
    function myFunction1() {
      document.getElementById("demo").style.fontSize = "25px";
      document.getElementById("demo").style.color = "red";
      document.getElementById("demo").style.backgroundColor = "yellow";
    }
    ```

    :::

- JavaScript 更改属性

    ::: normal-demo 演示

    ```html
    <p>在这里，JavaScript 更改了图像的 src 属性。</p>

    <img id="myImage" src="/html5/eg_bulboff.gif" width="109" height="180" />

    <p>
      <button type="button" onclick="light(1)">开灯</button>
      <button type="button" onclick="light(0)">关灯</button>
    </p>
    ```

    ```js
    function light(sw) {
      var pic;
      if (sw == 0) {
        pic = "/html5/eg_bulboff.gif"
      } else {
        pic = "/html5/eg_bulbon.gif"
      }
      document.getElementById('myImage').src = pic;
    }
    ```

    :::

