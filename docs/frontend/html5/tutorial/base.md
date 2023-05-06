---
title: 基础
icon: base
date: 2023-05-05
category: Frontend
tag:
    - HTML5
---

## HTML 基础结构

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>

</body>

</html>
```

- **\<!DOCTYPE html>**：声明文档的解析类型（document.compatMode），避免浏览器用 **怪异模式**（浏览器使用自己的怪异模式解析渲染页面，会导致不同浏览器渲染的效果不一样）来解析渲染页面。添加 `<!DOCTYPE html>` 这个声明将文档解析类型设置为 **标准模式**（浏览器使用 W3C 的标准解析渲染页面）。`<!DOCTYPE html>` 声明必须是 HTML 文档的第一行，位于 `<html>` 标签之前
- **\<html>**：此元素可告知浏览器其自身是一个 **HTML 文档**
- **lang="en"**：设置网页站点为英文站点，中文为 `zh`。这个主要是给搜索引擎看的，搜索引擎会去判断该站点是中文站点还是英文站点，如果 `lang` 设置为 `en` 或其他语言，无论网页中是什么语言，在访问页面的时候都会提示您是否需要翻译，可以不设置 `lang` 属性
- **\<head>**：用于定义文档的头部，它是所有头部元素的容器。`<head>` 中的元素可以 **引用脚本**、指示浏览器在哪里找到 **样式表**、**提供元信息** 等
- **\<meta>**：提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词
- **charset="UTF-8"**：设置文档字符编码为 `utf-8`，如果不写可能中文会出现乱码
- **http-equiv="X-UA-Compatible" content="IE=edge"**：`Edge` 模式通知 Windows Internet Explorer 以最高级别的可用模式显示内容，这实际上破坏了 “锁定” 模式。即如果您有 `IE9` 的话说明您有 `IE7`、`IE8`、`IE9`，那么就调用高版本也就是 `IE9`
- **name="viewport"**：`name` 指定了 `meta` 元素的类型，说明该元素包含了什么类型的信息。`viewport` 就是设备的屏幕上能用来显示网页的那一块区域。`viewport` 标记，用于指定用户是否可以缩放 Web 页面，并对相关的选项进行设定
- **content="width=device-width, initial-scale=1.0"**：`content` 指定了实际的元数据内容。`width` 和 `height` 指令分别指定视区的逻辑宽度和高度。它们的值可以是以 **像素** 为单位的数字，也可以是一个特殊的标记符号。如上文代码中 `device-width` 即表示视区宽度应为设备的屏幕宽度，`device-height` 即表示设备的屏幕高度；`initial-scale` 用于设置 Web 页面的初始缩放比例。默认的初始缩放比例值因智能手机浏览器的不同而有所差异，通常情况下，设备会在浏览器中呈现出整个 Web 页面。设为 `1.0` 则显示未经缩放的 Web 页面
- **\<title>Document\</title>**：定义浏览器工具栏中的标题
- **\<body>**：定义文档的主体。包含文档的所有内容（比如文本、超链接、图像、表格和列表等等。）

::: info
以下为 HTML 常用的标签
:::

## HTML 标题

HTML 标题（Heading）是通过 `<h1>`~`<h6>` 标签进行定义的。例如：

::: normal-demo 演示

```html
<h1>This is a heading</h1>
<h2>This is a heading</h2>
<h3>This is a heading</h3>
<h4>This is a heading</h4>
<h5>This is a heading</h5>
<h6>This is a heading</h6>
```

:::

## HTML 段落

HTML 段落是通过 `<p>` 标签进行定义的。例如：

::: normal-demo 演示

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

:::

## HTML 链接

HTML 链接是通过 `<a>` 标签进行定义的。例如：

::: normal-demo 演示

```html
<a href="http://www.w3school.com.cn">This is a link</a>
```

:::

- **href**：指定链接到页面的 URL

## HTML 图像

HTML 图像是通过 `<img>` 标签进行定义的。例如：

::: normal-demo 演示

```html
<img src="https://sankgao.github.io/background.png" width="104" height="42" />
```

:::

- **src**：图像地址
- **width**：图像宽度
- **height**：图像高度

