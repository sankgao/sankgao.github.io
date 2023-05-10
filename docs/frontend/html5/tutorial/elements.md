---
title: 元素
icon: elements
date: 2023-05-05
category: Frontend
tag:
    - HTML5
---

HTML 元素指的是从开始标签（start tag）到结束标签（end tag）的所有代码。

|  开始标签  |  元素内容  |  结束标签  |
|  :----:  |  :----  |  :----:  |
|  \<p>  |  This is a paragraph  |  \</p>  |
|  \<a href="default.html">  |  This is a link  |  \</a>  |
|  \<br />  |  *none*  |  *none*  |

## HTML 元素语法

- HTML 元素以开始标签 **起始**
- HTML 元素以结束标签 **终止**
- 元素的内容是开始标签与结束标签 **之间** 的内容
- 某些 HTML 元素具有空内容（empty content）称为 **空元素**
- 空元素没有 **结束标签**，空元素在 **开始标签** 中进行关闭（以开始标签的结束而结束）。例如：`<br />`
- 大多数 HTML 元素可拥有属性

## 嵌套的 HTML 元素

大多数 HTML 元素可以嵌套（可以包含其他 HTML 元素）。HTML 文档由嵌套的 HTML 元素构成。例如：

```html
<html>

<body>
  <p>This is my first paragraph.</p>
</body>

</html>
```

- **\<html>**：`<html>` 元素定义了整个 HTML 文档
- **\<body>**：`<body>` 元素定义了 HTML 文档的主体
- **\<p>**：`<p>` 元素定义了 HTML 文档中的一个段落

## 不要忘记结束标签

不要忘记结束标签 `</p>`。即时忘记结束标签，在大多数浏览器中也会正确显示，但在未来的 HTML 版本中，**不允许省略** 结束标签

## 空的 HTML 元素

没有内容的 HTML 元素被称为 **空元素**。空元素是在开始标签中关闭的。

例如：`<br />` 就是没有关闭标签的空元素（`<br />` 标签定义换行）。

