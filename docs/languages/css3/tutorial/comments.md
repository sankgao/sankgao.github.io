---
title: 注释
icon: comments
date: 2023-05-15
category: Frontend
tag:
    - CSS3
---

注释用于解释代码，以后在您编辑源代码时可能会有所帮助。

- 可以在代码中的任何位置添加注释
- 注释能横跨多行
- 浏览器会忽略注释

位于 `<style>` 元素内的 CSS 注释，以 `/*` 开始，以 `*/` 结束。例如：

::: normal-demo 演示

```html
<head>
  <style>
    /* 这是单行注释 */
    p {
      color: red;
    } 
  </style>
</head>

<p>这段文本由 CSS 设置样式。</p>
<p>CSS 注释不会在输出中显示。</p>
```

:::

## 实例

- 在代码中的任何位置添加注释

    ::: normal-demo 演示

    ```html
    <head>
      <style>
        p {
          color: red;  /* 这是单行注释 */
        } 
      </style>
    </head>

    <p>这段文本由 CSS 设置样式。</p>
    <p>CSS 注释不会在输出中显示。</p>
    ```

    :::

- 注释能横跨多行

    ::: normal-demo 演示

    ```html
    <head>
      <style>
        /* 
          这是
          一条多行的
          注释
        */ 
        p {
          color: red;
        } 
      </style>
    </head>

    <p>这段文本由 CSS 设置样式。</p>
    <p>CSS 注释不会在输出中显示。</p>
    ```

    :::

