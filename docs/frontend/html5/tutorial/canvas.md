---
title: Canvas
icon: canvas
date: 2023-05-10
category: Frontend
tag:
    - HTML5
---

`canvas` 元素用于在网页上绘制图形。

## 什么是 canvas

HTML5 的 `canvas` 元素使用 `JavaScript` 在网页上绘制图像。

画布是一个矩形区域，您可以控制其每一像素。

`canvas` 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。例如：

::: normal-demo 演示

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

```js
var c = document.getElementById("myCanvas");
var cxt = c.getContext("2d");
cxt.fillStyle = "#FF0000";
cxt.fillRect(0, 0, 150, 75);
```

:::

## 创建 canvas 元素

向 HTML5 页面添加 canvas 元素。

规定元素的 **id**、**宽度** 和 **高度：**

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

## 通过 JavaScript 来绘制

`canvas` 元素本身是没有绘图能力的。所有的绘制工作必须在 `JavaScript` 内部完成：

```html
<script type="text/javascript">
  var c = document.getElementById("myCanvas");
  var cxt = c.getContext("2d");
  cxt.fillStyle = "#FF0000";
  cxt.fillRect(0, 0, 150, 75);
</script>
```

JavaScript 使用 **id** 来寻找 canvas 元素：

```javascript
var c = document.getElementById("myCanvas");
```

然后，创建 **context 对象：**

```javascript
var cxt = c.getContext("2d");
```

`getContext("2d")` 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

下面的两行代码 **绘制** 一个红色的矩形：

```javascript
cxt.fillStyle = "#FF0000";
cxt.fillRect(0, 0, 150, 75);
```

`fillStyle` 方法将其染成红色，`fillRect` 方法规定了形状、位置和尺寸。

## 理解坐标

上面的 `fillRect` 方法拥有参数 `(0, 0, 150, 75)`。

**意思是**：在画布上绘制 `150 x 75` 的矩形，从左上角开始 `(0, 0)`。

画布的 `X` 和 `Y` 坐标用于在画布上对绘画进行定位。例如：

::: normal-demo 演示

```html
<div id="coordiv" style="float:left;width:199px;height:99px;border:1px solid #c3c3c3" onmousemove="cnvs_getCoordinates(event)" onmouseout="cnvs_clearCoordinates()"></div>
<br />
<br />
<br />
<div id="xycoordinates"></div>
<br />
<br />
<br />
<p>把鼠标悬停在上面的矩形上可以看到坐标：</p>
```

```css
body {
  margin: 0px;
  font-size: 70%;
  font-family: verdana, helvetica, arial, sans-serif;
}
```

```js
function cnvs_getCoordinates(e) {
  x = e.clientX;
  y = e.clientY;
  document.getElementById("xycoordinates").innerHTML = "Coordinates: (" + x + "," + y + ")";
}

function cnvs_clearCoordinates() {
  document.getElementById("xycoordinates").innerHTML = "";
}
```

:::

## Canvas 实例

- 线条

    通过指定从何处开始，在何处结束，来绘制一条线。例如：

    ::: normal-demo 演示

    ```html
    <canvas id="myCanvas" width="200" height="100" style="border:1px solid #c3c3c3;">
      您的浏览器不支持画布元素。
    </canvas>
    ```

    ```js
    var c=document.getElementById("myCanvas");
    var cxt=c.getContext("2d");
    cxt.moveTo(10,10);
    cxt.lineTo(150,50);
    cxt.lineTo(10,50);
    cxt.stroke();
    ```

    :::

- 圆形

    通过规定尺寸、颜色和位置，来绘制一个圆。例如：
    
    ::: normal-demo 演示
    
    ```html
    <canvas id="myCanvas" width="200" height="100" style="border:1px solid #c3c3c3;">
      您的浏览器不支持画布元素。
    </canvas>
    ```
    
    ```js
    var c=document.getElementById("myCanvas");
    var cxt=c.getContext("2d");
    cxt.fillStyle="#FF0000";
    cxt.beginPath();
    cxt.arc(70,18,15,0,Math.PI*2,true);
    cxt.closePath();
    cxt.fill();
    ```
    
    :::

- 渐变

    使用您指定的颜色来绘制渐变背景。例如：
    
    ::: normal-demo 演示
    
    ```html
    <canvas id="myCanvas" width="200" height="100" style="border:1px solid #c3c3c3;">
      您的浏览器不支持画布元素。
    </canvas>
    ```
    
    ```js
    var c=document.getElementById("myCanvas");
    var cxt=c.getContext("2d");
    var grd=cxt.createLinearGradient(0,0,175,50);
    grd.addColorStop(0,"#FF0000");
    grd.addColorStop(1,"#00FF00");
    cxt.fillStyle=grd;
    cxt.fillRect(0,0,175,50);
    ```
    
    :::

- 图像

    把一幅图像放置到画布上。例如：
    
    ::: normal-demo 演示
    
    ```html
    <p>要使用的图像：</p>

    <img id="scream" width="215" height="260" src="https://sankgao.github.io/html5/eg_planets.jpg" alt="The Scream">

    <p>Canvas:</p>

    <canvas id="myCanvas" width="235" height="280" style="border:1px solid #d3d3d3;">
      您的浏览器不支持画布元素。
    </canvas>
    ```
    
    ```js
    window.onload = function () {
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      var img = document.getElementById("scream");
      ctx.drawImage(img, 10, 10);
    };
    ```
    
    :::

