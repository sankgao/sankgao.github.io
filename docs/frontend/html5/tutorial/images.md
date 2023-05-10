---
title: 图像
icon: pic
date: 2023-05-08
category: Frontend
tag:
    - HTML5
---

## 图像标签 \<img> 和源属性 src

在 HTML 中，图像由 `<img>` 标签定义。

`<img>` 是 **空标签**，它只包含属性，并且 **没有** 闭合标签，在结尾记得添加 `/` 斜杠，如：`<img />`。

要在页面上显示图像，需要使用 **源属性** `src`。源属性的值是图像的 **URL 地址。**

`width` 和 `height` 可以调整图像的大小

## 替换文本属性 alt

如果无法显示图像，将显示 `alt` 属性中的文本。

::: normal-demo 演示

```html
<img src="boat.gif" alt="Big Boat" />
```

:::

## 图像实例

- 插入图像

    在网页中显示图像。

    ::: normal-demo 演示

    ```html
    <p>
      一幅图像：
      <img src="/html5/eg_mouse.jpg" width="128" height="128" />
    </p>

    <p>
      一幅动画图像：
      <img src="/html5/eg_cute.gif" width="50" height="50" />
    </p>

    <p><b>请注意</b>：插入动画图像的语法与插入普通图像的语法没有区别。</p>
    ```

    :::

- 背景图片

    向 HTML 页面添加背景图片。

    ::: normal-demo 演示

    ```html
    <body background="/html5/eg_background.jpg">

      <h3>图像背景</h3>

      <p>gif 和 jpg 文件均可用作 HTML 背景。</p>

      <p>如果图像小于页面，图像会进行重复。</p>

    </body>
    ```

    :::

    - **background**：规定文档的背景图像。请使用 **样式** 取代它。

- 排列图片

    在文字中排列图像。

    ::: normal-demo 演示

    ```html
    <p>图像 <img src="/html5/eg_cute.gif" align="bottom" /> 在文本中</p>
    <p>图像 <img src ="/html5/eg_cute.gif" align="middle" /> 在文本中</p>
    <p>图像 <img src ="/html5/eg_cute.gif" align="top" /> 在文本中</p>
    ```

    :::

    - **align**：不推荐使用，更好的方案是使用 CSS 样式
      - **bottom**：文字底部对齐
      - **middle**：文字中间对齐
      - **top**：文字上部对齐

- 浮动图像

    使图片浮动至段落的左边或右边。

    ::: normal-demo 演示

    ```html
    <p>
      <img src="/html5/eg_cute.gif" align="left" />
      带有图像的一个段落。图像的 align 属性设置为 "left"。图像将浮动到文本的左侧。
    </p>

    <p>
      <img src="/html5/eg_cute.gif" align="right" />
      带有图像的一个段落。图像的 align 属性设置为 "right"。图像将浮动到文本的右侧。
    </p>
    ```

    :::

    - **left**：图像将浮动到文本的左侧
    - **right**：图像将浮动到文本的右侧

- 调整图像尺寸

    将图片调整到不同的尺寸。

    ::: normal-demo 演示

    ```html
    <img src="/html5/eg_mouse.jpg" width="50" height="50" />
    <br />
    <img src="/html5/eg_mouse.jpg" width="100" height="100" />
    <br />
    <img src="/html5/eg_mouse.jpg" width="200" height="200" />
    ```

    :::

    - **width**：改变图像的宽
    - **height**：改变图像的高

- 创建图像映射

    创建带有可供点击区域的图像地图。其中的每个区域都是一个超级链接。

    ::: normal-demo 演示

    ```html
    <p>请点击图像上的星球，把它们放大。</p>

    <img src="/html5/eg_planets.jpg" border="0" usemap="#planetmap" alt="Planets" />

    <map name="planetmap" id="planetmap">
      <area shape="circle" coords="180,139,14" href="./venus.html" target="_blank" alt="Venus" />
      <area shape="circle" coords="129,161,10" href="./mercur.html" target="_blank" alt="Mercury" />
      <area shape="rect" coords="0,0,110,260" href="./sun.html" target="_blank" alt="Sun" />
    </map>
    ```

    :::

    - **\<area>**：`<area>` 标签定义图像映射中的区域（注：图像映射指得是带有可点击区域的图像）

        `area` 元素总是嵌套在 `<map>` 标签中。

        `<img>` 标签中的 `usemap` 属性与 `map` 标签中的 `name` 属性相关联，创建图像与映射之间的联系

        - **shape**：定义区域的形状
        - **coords**：定义可点击区域（对鼠标敏感的区域）的坐标
        - **href**：定义此区域的目标 URL
        - **target**：规定在何处打开 href 属性指定的目标 URL
        - **alt**：定义此区域的替换文本

    - **\<map>**：`<map>` 标签定义一个客户端图像映射。图像映射（image-map）指带有可点击区域的一幅图像

        `<img>` 标签中的 `usemap` 属性可引用 `<map>` 标签中的 `id` 或 `name` 属性（取决于浏览器），所以应同时向 `<map>` 标签添加 `id` 和 `name` 属性

        - **name**：为图像映射（image-map）规定的名称
        - **id**：为 `map` 标签定义唯一的名称

