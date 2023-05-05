---
title: 样式
icon: style
date: 2023-05-05
category: Frontend
tag:
    - HTML5
---

`style` 属性用于改变 HTML 元素的样式。

## HTML 的 style 属性

提供了一种改变所有 HTML 元素的样式的通用方法。

## 不赞成使用的标签和属性

在 HTML4 中，有若干的标签和属性是被 **废弃的**。在未来版本的 HTML 和 XHTML 中将不支持这些标签和属性。

|  标签  |  描述  |
|  :----:  |  :----  |
|  \<center>  |  定义居中的内容  |
|  \<font> 和 \<basefont>  |  定义 HTML 字体  |
|  \<s> 和 \<strike>  |  定义删除线文本  |
|  \<u>  |  定义下划线文本  |

|  属性  |  描述  |
|  :----:  |  :----  |
|  align  |  定义文本的对齐方式  |
|  bgcolor  |  定义背景颜色  |
|  color  |  定义文本颜色  |

::: tip
对于以上这些标签和属性请使用 CSS 样式代替
:::

## HTML 背景颜色

`background-color` 属性为元素定义了背景颜色。例如：

::: normal-demo 演示

```html
<html>

<body style="background-color:yellow">
  <h2 style="background-color:red">This is a heading</h2>
  <p style="background-color:green">This is a paragraph.</p>
</body>

</html>
```

:::

## HTML 字体、颜色和尺寸

`font-family`、`color` 以及 `font-size` 属性分别定义元素中文本的字体系列、颜色和字体尺寸。例如：

::: normal-demo 演示

```html
<html>

<body>
  <h1 style="font-family:verdana">A heading</h1>
  <p style="font-family:arial;color:red;font-size:20px;">A paragraph.</p>
</body>

</html>
```

:::

## HTML 文本对齐

`text-align` 属性规定了元素中文本的水平对齐方式例如：

::: normal-demo 演示

```html
<html>

<body>
  <h1 style="text-align:center">This is a heading</h1>
  <p>The heading above is aligned to the center of this page.</p>
</body>

</html>
```

:::

