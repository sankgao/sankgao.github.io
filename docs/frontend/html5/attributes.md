---
title: 属性
icon: attributes
date: 2023-05-05
category: Frontend
tag:
    - HTML5
---

HTML 标签可以拥有属性。属性提供了有关 HTML 元素的更多的信息。

- 属性总是以 **名称=值** 对的形式出现。例如：`name="value"`
- 属性总是在 HTML 元素的 **开始标签** 中规定。例如：

    ```html
    <a href="http://www.baidu.com.cn">This is a link</a>
    ```

    ::: tip
    HTML 链接由 `<a>` 标签定义，链接的地址在 `href` 属性中指定
    :::

- 属性和属性值对大小写 **不敏感**。推荐使用 **小写的** 属性和属性值
- 始终为属性值加 **引号**，双引号是最常用的，不过使用单引号也没有问题
    - 在某些个别的情况下，比如：属性值本身就 **含有双引号**，那么您必须使用 **单引号**，例如：`name='Bill "HelloWorld" Gates'`

