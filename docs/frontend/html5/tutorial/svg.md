---
title: SVG
icon: svg
date: 2023-05-10
category: Frontend
tag:
    - HTML5
---

HTML5 支持内联 SVG。

## 什么是 SVG

- SVG 指可伸缩矢量图形（Scalable Vector Graphics）
- SVG 用于定义用于网络的基于矢量的图形
- SVG 使用 XML 格式定义图形
- SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失
- SVG 是万维网联盟的标准

## SVG 的优势

与其他图像格式相比（比如：JPEG 和 GIF），使用 SVG 的优势在于：

- SVG 图像可通过文本编辑器来创建和修改
- SVG 图像可被搜索、索引、脚本化或压缩
- SVG 是可伸缩的
- SVG 图像可在任何的分辨率下被高质量地打印
- SVG 可在图像质量不下降的情况下被放大

## SVG 实例

SVG 有几种绘制路径、框、圆、文本和图形图像的方法。

- 画一个圆

    ::: normal-demo 演示

    ```html
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
      抱歉，您的浏览器不支持嵌入式 SVG。
    </svg>
    ```

    :::

    - **circle**：定义圆

- 画一个矩形

    ::: normal-demo 演示
    
    ```html
    <svg width="400" height="100">
      <rect width="400" height="100" style="fill:rgb(0, 0, 255);stroke-width:10;stroke:rgb(0, 0, 0)" />
      抱歉，您的浏览器不支持嵌入式 SVG。
    </svg>
    ```
    
    :::

    - **rect**：定义矩形

- 画一个带有圆角的正方形

    ::: normal-demo 演示
    
    ```html
    <svg width="400" height="180">
      <rect x="50" y="20" rx="20" ry="20" width="150" height="150" style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />
      抱歉，您的浏览器不支持嵌入式 SVG。
    </svg>
    ```
    
    :::

- 画一个星

    ::: normal-demo 演示

    ```html
    <svg height="200">
      <polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:red;stroke:blue;stroke-width:3;fill-rule:evenodd;" />
    </svg>
    ```

    :::

    - **polygon**：定义由一系列连接的直线组成的封闭形状

- 画一个 SVG logo

    ::: normal-demo 演示

    ```html
    <svg height="130" width="500">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />
      <text fill="#ffffff" font-size="45" font-family="Verdana" x="50" y="86">SVG</text>
      抱歉，您的浏览器不支持嵌入式 SVG。
    </svg>
    ```

    :::

    - **defs**：被引用元素的容器
    - **linearGradient**：定义线性渐变
    - **ellipse**：定义椭圆
    - **text**：定义文本

