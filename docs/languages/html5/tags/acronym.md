---
title: <acronym>
date: 2023-05-15
category: Frontend
tag:
    - HTML5
---

## 示例

标记一个首字母缩写：

::: normal-demo 演示

```html
<acronym title="World Wide Web">WWW</acronym>
```

:::

所有浏览器都支持 `<acronym>` 标签。

## 定义和用法

- HTML5 中不支持 `<acronym>` 标签。请使用 [\<abbr>](./abbr.md) 标签代替
- `<acronym>` 标签定义首字母缩写
- 缩写能够作为单词来朗读。例如：NATO、NASA、ASAP、GUI
- 通过对缩写进行标记，您能够为浏览器、拼写检查和搜索引擎提供有用的信息

::: note
可以在 `<acronym>` 标签中使用全局的 `title` 属性，这样就能够在鼠标指针移动到 `<acronym>` 元素上时显示出简称/缩写的完整版本
:::

## 全局属性

`<acronym>` 标签 **支持** HTML 中的 [全局属性](../references/global_attribute.md)。

## 事件属性

`<acronym>` 标签 **支持** HTML 中的 [事件属性](../references/global_attribute.md)。

