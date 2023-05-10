---
title: 对象
icon: elements
date: 2023-05-10
category: Frontend
tag:
    - HTML5
---

插件（Plug-in）是扩展浏览器标准功能的计算机程序。

## 插件

插件被设计用于许多不同的目的：

- 运行 Java 小程序
- 运行 ActiveX 控件
- 显示 Flash 电影
- 显示地图
- 扫描病毒
- 验证银行账号

::: danger
大多数浏览器不再支持 Java Applet 和插件

所有浏览器均不再支持 ActiveX 控件

在现代浏览器中，对 Shockwave Flash 的支持也已关闭
:::

## \<object> 元素

所有浏览器均支持 `<object>` 元素。

`<object>` 元素定义 HTML 文档中的嵌入式对象。

它旨在将插件（例如：Java applet、PDF 阅读器和 Flash 播放器）嵌入网页中，但也可以用于将 HTML 包含在 HTML 中。例如：

::: normal-demo 演示

```html
<object width="100%" height="500px" data="./venus.html"></object>
```

:::

或者您喜爱的图像。例如：

::: normal-demo 演示

```html
<object data="/html5/eg_cute.gif"></object>
```

:::

## \<embed> 元素

所有主要浏览器均支持 `<embed>` 元素。

`<embed>` 元素也可定义了 HTML 文档中的嵌入式对象。

`<embed>` 元素是 HTML5 中的新标签。例如：

::: normal-demo 演示

```html
<embed src="/html5/eg_cute.gif" />
```

:::

`<embed>` 元素没有结束标记，它无法包含替代文本。

`<embed>` 元素也可用于在 HTML 中包含 HTML。例如：

::: normal-demo 演示

```html
<embed width="100%" height="500px" src="./venus.html">
```

:::

