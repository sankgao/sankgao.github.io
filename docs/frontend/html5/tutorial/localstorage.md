---
title: 本地存储
icon: storage
date: 2023-05-10
category: Frontend
tag:
    - HTML5
---

HTML 本地存储优于 `cookies`。

## 什么是 HTML 本地存储

通过本地存储（Local Storage），web 应用程序能够在用户浏览器中对数据进行本地的存储。

在 HTML5 之前，应用程序数据只能存储在 `cookie` 中，包括每个服务器请求。本地存储则更安全，并且可在不影响网站性能的前提下将大量数据存储于本地。

与 `cookie` 不同，存储限制要大得多（至少 5MB），并且信息不会被传输到服务器。

本地存储经由起源地（origin）（经由域和协议）。所有页面，从起源地，能够存储和访问相同的数据。

## HTML 本地存储对象

HTML 本地存储提供了两个在客户端存储数据的对象：

- **window.localStorage**：存储没有截止日期的数据
- **window.sessionStorage**：针对一个 `session` 来存储数据（当关闭浏览器标签页时数据会丢失）

在使用本地存储时，请检测 `localStorage` 和 `sessionStorage` 的浏览器支持。

```js
if (typeof(Storage) !== "undefined") {
    // 针对 localStorage/sessionStorage 的代码
} else {
    // 抱歉！不支持 Web Storage ..
}
```

## localStorage 对象

`localStorage` 对象存储的是没有截止日期的数据。当浏览器被关闭时数据不会被删除，在下一天、周或年中，都是可用的。例如：

::: normal-demo 演示

```html
<div id="result"></div>
```

```js
// 检查浏览器支持
if (typeof Storage !== "undefined") {
  // 存储
  localStorage.setItem("lastname", "Gates");
  // 取回
  document.getElementById("result").innerHTML = localStorage.getItem(
    "lastname"
  );
} else {
  document.getElementById("result").innerHTML =
    "抱歉！您的浏览器不支持 Web Storage ...";
}
```

:::

- 创建 `localStorage` 名称/值对 `name="lastname", value="Gates"`
- 取回 `"lastname"` 的值，并把它插到 `id="result"` 的元素中

上例也可这样写：

```js
// 存储
localStorage.lastname = "Gates";
// 取回
document.getElementById("result").innerHTML = localStorage.lastname;
```

删除 `"lastname"` localStorage 项目的语法如下：

```js
localStorage.removeItem("lastname");
```

::: tip
名称/值对始终存储为字符串。如果需要请记得把它们转换为其他格式
:::

对用户点击按钮的次数进行计数。在代码中，值字符串被转换为数值，依次对计数进行递增。例如：

::: normal-demo 演示

```html
<p><button onclick="clickCounter()" type="button">请点击这里！</button></p>
<div id="result"></div>
<p>请点击按钮使计数器递增。</p>
<p>请关闭浏览器或标签页，然后再试一次，计数器将继续计数（不会重置）。</p>
```

```js
function clickCounter() {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML =
      "您已经点击这个按钮 " + localStorage.clickcount + " 次。";
  } else {
    document.getElementById("result").innerHTML =
      "抱歉！您的浏览器不支持 Web Storage ...";
  }
}
```

:::

## sessionStorage 对象

`sessionStorage` 对象等同 `localStorage` 对象，不同之处在于只对一个 `session` 存储数据。如果用户关闭具体的浏览器标签页，数据也会被删除。

在当前 `session` 中对用户点击按钮进行计数。例如：

::: normal-demo 演示

```html
<p><button onclick="clickCounter()" type="button">请点击这里</button></p>
<div id="result"></div>
<p>请点击按钮使计数器递增。</p>
<p>请关闭浏览器或标签页，然后再试一次，计数器会重置。</p>
```

```js
function clickCounter() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
      sessionStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML =
      "在本 session 中，您已经点击这个按钮 " +
      sessionStorage.clickcount +
      " 次。";
  } else {
    document.getElementById("result").innerHTML =
      "抱歉！您的浏览器不支持 Web Storage ...";
  }
}
```

:::

