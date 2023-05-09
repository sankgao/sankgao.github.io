---
title: 框架
icon: iframe
date: 2023-05-09
category: Frontend
tag:
    - HTML5
---

通过使用框架，您可以在同一个浏览器窗口中显示不止一个页面。

每份 HTML 文档称为一个框架，并且每个框架都独立于其他的框架。

使用框架的坏处：

- 开发人员必须同时跟踪更多的 HTML 文档
- 很难打印整张页面

## 框架结构标签 \<frameset>

- 框架结构标签（`<frameset>`）定义一个框架集。它被用来组织多个窗口（框架）。HTML5 中不支持
- 每个 `<frameset>` 定义了一系列 **行** 或 **列**
- **rows**、**cols** 的值规定了每行或每列占据屏幕的面积

## 框架标签 \<frame>

`<frame>` 标签定义 `<frameset>` 中的一个特定的窗口（框架）。HTML5 中不支持

::: warning
不能将 `<body></body>` 标签与 `<frameset></frameset>` 标签同时使用！不过，假如您添加包含一段文本的 `<noframes>` 标签，就必须将这段文字嵌套于 `<body></body>` 标签内
:::

## 框架实例

- 垂直框架

    使用三份不同的文档制作一个垂直框架。

    ```html
    <frameset cols="25%,50%,25%">

      <frame src="/example/html/frame_a.html">
      <frame src="/example/html/frame_b.html">
      <frame src="/example/html/frame_c.html">

    </frameset>
    ```

- 水平框架

    使用三份不同的文档制作一个水平框架。

    ```html
    <frameset rows="25%,50%,25%">

      <frame src="/example/html/frame_a.html">
      <frame src="/example/html/frame_b.html">
      <frame src="/example/html/frame_c.html">

    </frameset>
    ```

- 混合框架结构

    制作含有三份文档的框架结构，同时将他们混合置于行和列之中。

    ```html
    <frameset rows="50%,50%">
    
      <frame src="/example/html/frame_a.html">
    
        <frameset cols="25%,75%">
          <frame src="/example/html/frame_b.html">
            <frame src="/example/html/frame_c.html">
        </frameset>
    
    </frameset>
    ```

