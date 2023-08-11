---
title: 计算机代码
icon: code
date: 2023-05-08
category: Frontend
tag:
    - HTML5
---

HTML 计算机代码格式：

- 通常 HTML 使用 **可变的** 字母尺寸，以及可变的字母间距
- 在显示计算机代码示例时，并不需要如此
- `<kbd>`、`<samp>` 以及 `<code>` 元素全都支持固定的字母尺寸和间距

## HTML 键盘格式

HTML `<kbd>` 元素定义键盘输入。例如：

::: normal-demo 演示

```html
<p>To open a file, select:</p>

<p><kbd>File | Open...</kbd></p>
```

:::

## HTML 输出示例

HTML `<samp>` 元素定义计算机输出示例。例如：

::: normal-demo 演示

```html
<samp>
  demo.example.com login: Apr 12 09:10:17
  Linux 2.6.10-grsec+gg3+e+fhs6b+nfs+gr0501+++p3+c4a+gr2b-reslog-v6.189
</samp>
```

:::

:::: tip
`<samp>` 元素不保留多余的空格和折行。如需解决该问题，您必须在 `<pre>` 元素中包围代码

::: normal-demo 演示

```html
<samp>
  <pre>
demo.example.com login: Apr 12 09:10:17
Linux 2.6.10-grsec+gg3+e+fhs6b+nfs+gr0501+++p3+c4a+gr2b-reslog-v6.189
  </pre>
</samp>
```

:::
::::

## HTML 代码格式

HTML `<code>` 元素定义编程代码示例。例如：

::: normal-demo 演示

```html
<code>
  var person = {
    firstName:"Bill",
    lastName:"Gates",
    age:50,
    eyeColor:"blue"
  }
</code>
```

:::

::: tip
`<code>` 元素不保留多余的空格和折行。如需解决该问题，您必须在 `<pre>` 元素中包围代码
:::

## HTML 变量格式化

- `<var>` 元素定义数学变量
- `<sup>` 元素定义上标文本

例如：

::: normal-demo 演示

```html
<p>Einstein wrote:</p>

<p><var>E = m c<sup>2</sup></var></p>
```

:::

