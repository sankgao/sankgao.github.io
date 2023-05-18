---
title: 选择器
icon: selector
date: 2023-05-18
category: Frontend
tag:
    - CSS3
---

## CSS 选择器

在 CSS 中，选择器是选取需设置样式的元素的模式。

|  选择器  |  例子  |  例子描述  |
|  :----:  |  :----  |  :----  |
|  .class  |  .intro  |  选择 class="intro" 的所有元素  |
|  .class1.class2  |  .name1.name2  |  选择 class 属性中同时有 name1 和 name2 的所有元素  |
|  .class1 .class2  |  .name1 .name2  |  选择作为类名 name1 元素后代的所有类名 name2 元素  |
|  #id  |  #firstname  |  选择 id="firstname" 的元素  |
|  *  |  *  |  选择所有元素  |
|  element  |  p  |  选择所有 `<p>` 元素  |
|  element.class  |  p.intro  |  选择 class="intro" 的所有 `<p>` 元素  |
|  element,element  |  div, p  |  选择所有 `<div>` 元素和所有 `<p>` 元素  |
|  element element  |  div p  |  选择 `<div>` 元素内的所有 `<p>` 元素  |
|  element>element  |  div > p  |  选择父元素是 `<div>` 的所有 `<p>` 元素  |
|  element+element  |  div + p  |  选择紧跟 `<div>` 元素的首个 `<p>` 元素  |
|  element1~element2  |  p ~ ul  |  选择前面有 `<p>` 元素的每个 `<ul>` 元素  |
|  [attribute]  |  [target]  |  选择带有 target 属性的所有元素  |
|  [attribute=value]  |  [target=_blank]  |  选择带有 target="_blank" 属性的所有元素  |
|  [attribute~=value]  |  [title~=flower]  |  选择 title 属性包含单词 "flower" 的所有元素  |
|  [attribute|=value]  |  [lang|=en]  |  选择 lang 属性值以 "en" 开头的所有元素  |
|  [attribute^=value]  |  a[href^="https"]  |  选择其 src 属性值以 "https" 开头的每个 `<a>` 元素  |
|  [attribute$=value]  |  a[href$=".pdf"]  |  选择其 src 属性以 ".pdf" 结尾的所有 `<a>` 元素  |
|  [attribute*=value]  |  a[href*="w3school"]  |  选择其 href 属性值中包含 "abc" 子串的每个 `<a>` 元素  |

