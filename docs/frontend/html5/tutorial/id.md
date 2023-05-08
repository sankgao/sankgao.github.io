---
title: Id 属性
icon: id
date: 2023-05-08
category: Frontend
tag:
    - HTML5
---

HTML `id` 属性用于为 HTML 元素指定唯一的 `id`。

一个 HTML 文档中不能存在相同 `id` 的元素。

## 使用 id 属性

- `id` 属性指定 HTML 元素的唯一 ID。`id` 属性的值在 HTML 文档中必须是唯一的
- `id` 属性用于指向样式表中的特定样式声明。JavaScript 也可使用它来访问和操作拥有特定 ID 的元素
- `id` 的语法是：写一个井号（`#`），后跟一个 id 名称。然后，在花括号 `{}` 中定义 CSS 属性
- 在 HTML 元素中使用 `id` 应用 id 定义的 CSS 样式

::: normal-demo 演示

```html
<head>
  <style>
    #myHeader {
      background-color: lightblue;
      color: black;
      padding: 40px;
      text-align: center;
    }
  </style>
</head>

<h1 id="myHeader">My Header</h1>
```

:::

::: tip
`id` 名称对大小写敏感

`id` 必须包含至少一个字符，且不能包含空白字符（空格、制表符等）
:::

## Class 与 ID 的差异

**同一个类名** 可以由多个 HTML 元素使用，而一个 `id` 名称只能由页面中的 **一个 HTML 元素** 使用

::: normal-demo 演示

```html
<head>
  <style>
    /* 设置 id 为 "myHeader" 的元素的样式 */
    #myHeader {
      background-color: lightblue;
      color: black;
      padding: 40px;
      text-align: center;
    }

    /* 设置类名为 "city" 的所有元素的样式 */
    .city {
      background-color: tomato;
      color: white;
      padding: 10px;
    }
  </style>
</head>

<!-- 拥有唯一 id 的元素 -->
<h1 id="myHeader">我的城市</h1>

<!-- 拥有相同类名的多个元素 -->
<h2 class="city">上海</h2>
<p>中国最大的经济城市。</p>

<h2 class="city">深圳</h2>
<p>中国最具创新力的城市。</p>

<h2 class="city">北京</h2>
<p>中国的首都。</p>
```

:::

## 通过 ID 和链接实现 HTML 书签

HTML 书签用于让读者跳转至网页的特定部分，如果页面很长，那么书签可能很有用。

要使用书签，您必须首先创建它，然后为它添加链接，然后，当单击链接时，页面将滚动到带有书签的位置。

```html
<!-- 首先，用 id 属性创建书签 -->
<h2 id="C7">第七章</h2>

<!-- 然后，在同一张页面中，向这个书签添加一个链接（“跳转到第四章”） -->
<a href="#C7">跳转到第七章</a>
```

::: normal-demo 演示

```html
<p>
  <a href="#C7">跳转到第七章</a>
</p>

<h2>第一章</h2>
<p>This chapter explains ba bla bla</p>

<h2>第二章</h2>
<p>This chapter explains ba bla bla</p>

<h2>第三章</h2>
<p>This chapter explains ba bla bla</p>

<h2>第四章</a></h2>
<p>This chapter explains ba bla bla</p>

<h2>第五章</h2>
<p>This chapter explains ba bla bla</p>

<h2>第六章</h2>
<p>This chapter explains ba bla bla</p>

<h2><a name="C7">第七章</h2>
<p>This chapter explains ba bla bla</p>

<h2>第八章</h2>
<p>This chapter explains ba bla bla</p>

<h2>第九章</h2>
<p>This chapter explains ba bla bla</p>

<h2>第十章</h2>
<p>This chapter explains ba bla bla</p>

<h2>第十一章</h2>
<p>This chapter explains ba bla bla</p>

<h2>第十二章</h2>
<p>This chapter explains ba bla bla</p>

<h2>第十三章</h2>
<p>This chapter explains ba bla bla</p>

<h2>第十四章</h2>
<p>This chapter explains ba bla bla</p>

<h2>第十五章</h2>
<p>This chapter explains ba bla bla</p>

<h2>第十六章</h2>
<p>This chapter explains ba bla bla</p>

<h2>第十七章</h2>
<p>This chapter explains ba bla bla</p>
```

:::

## 在 JavaScript 中使用 id 属性

JavaScript 也可以使用 `id` 属性为特定元素执行某些任务。

JavaScript 可以使用 `getElementById()` 方法访问拥有特定 `id` 的元素。

::: normal-demo 演示

```html
<p>JavaScript 可以使用 getElementById() 方法访问具有指定 ID 的元素：</p>

<h2 id="myHeader">Hello World!</h2>
<button onclick="displayResult()">改变文本</button>
```

```js
function displayResult() {
  document.getElementById("myHeader").innerHTML = "Have a nice day!";
}
```

:::

