---
title: <applet>
date: 2023-05-15
category: Frontend
tag:
    - HTML5
---

## 示例

一个嵌入的 Java applet（插件）：

::: normal-demo 演示

```html
<applet code="Bubbles.class" width="350" height="350">
  Java applet that draws animated bubbles.
</applet>
```

:::

某些浏览器中依然存在对 `<applet>` 标签的一些支持，但是需要额外的插件和安装过程才能起作用。

## 定义和用法

- HTML5 中不支持 `<applet>` 标签。请使用 `object` 标签代替
- HTML4.01 中不赞成使用 `<applet>` 元素
- `<applet>` 标签定义嵌入的 applet

## 属性

|  属性  |  值  |  描述  |
|  :----:  |  :----  |  :----  |
|  code  |  URL  |  规定 Java applet 的文件名  |
|  object  |  name  |  定义了包含该 applet 的一系列版本的资源名称  |
|  align  |  left<br />right<br />top<br />bottom<br />middle<br />baseline<br />texttop<br />absmiddle<br />absbottom  |  定义 applet 相对于周围元素的对齐方式  |
|  alt  |  text  |  规定 applet 的替换文本  |
|  archive  |  URL  |  规定档案文件的位置  |
|  codebase  |  URL  |  规定 code 属性中指定的 applet 的基准 URL  |
|  height  |  pixels  |  定义 applet 的高  |
|  hspace  |  pixels  |  定义围绕 applet 的水平间隔  |
|  name  |  unique_name  |  规定 applet 的名称（用在脚本中的）  |
|  vspace  |  pixels  |  定义围绕 applet 的垂直间隔  |
|  width  |  pixels  |  定义 applet 的宽度  |

## 全局属性

`<applet>` 标签 **支持** HTML 中的 [全局属性](../references/global_attribute.md)。

## 事件属性

`<applet>` 标签 **支持** HTML 中的 [事件属性](../references/global_attribute.md)。

