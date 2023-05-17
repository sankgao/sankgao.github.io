---
title: <!--...-->
date: 2023-05-15
category: Frontend
tag:
    - HTML5
---

## 示例

::: normal-demo 演示

```html
<!--这是一段注释。注释不会在浏览器中显示。-->

<p>这是一段普通的段落。</p>
```

:::

所有浏览器都支持 **注释** 标签。

## 定义和用法

- 注释标签用于在源代码中插入注释。注释 **不会显示** 在浏览器中
- 您可使用注释对您的代码进行解释，这样做有助于您在以后的时间对代码的编辑。当您编写了大量代码时尤其有用

使用注释标签来隐藏浏览器不支持的脚本也是一个好习惯（这样就不会把脚本显示为纯文本）。例如：

```html
<script type="text/javascript">
  <!--
  function displayMsg() {
    alert("Hello World!")
  }
  //-->
</script>
```

::: tip
注释行结尾处的两条斜杠（`//`）是 JavaScript 注释符号。这可以避免 JavaScript 执行 `-->` 标签
:::

## 全局属性

`<!--...-->` 标签 **不支持** HTML 中的 [全局属性](../references/global_attribute.md)。

## 事件属性

`<!--...-->` 标签 **不支持** HTML 中的 [事件属性](../references/global_event.md)。
