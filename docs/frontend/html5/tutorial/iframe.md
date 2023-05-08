---
title: 内联框架
icon: iframe
date: 2023-05-08
category: Frontend
tag:
    - HTML5
---

`iframe` 标签用于在网页内显示网页。

## 语法

```html
<iframe src="URL"></iframe>
```

- **src**：指向隔离页面的位置

## 设置高度和宽度

`height` 和 `width` 属性用于规定 `iframe` 的 **高度** 和 **宽度。**

属性值的默认单位是像素，但也可以用百分比来设定（比如：`"80%"`）。例如：

::: normal-demo 演示

```html
<iframe src="https://www.w3school.com.cn/" width="600" height="300"></iframe>
```

:::

## 删除边框

`frameborder` 属性规定是否显示 `iframe` 周围的 **边框。**

设置属性值为 `"0"` 就可以移除边框。例如：

::: normal-demo 演示

```html
<iframe src="https://www.w3school.com.cn/" width="600" height="300" frameborder="0"></iframe>
```

:::

## 使用 iframe 作为链接的目标

`iframe` 可用作链接的目标（target）。

链接的 `target` 属性必须引用 `iframe` 的 `name` 属性。例如：

::: normal-demo 演示

```html
<iframe src="./venus.html" name="iframe_a"></iframe>

<p><a href="https://www.w3school.com.cn/" target="iframe_a">W3School.com.cn</a></p>

<p><b>注释：</b>由于链接的目标匹配 iframe 的名称，所以链接会在 iframe 中打开。</p>

```

:::

