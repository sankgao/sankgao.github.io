---
title: inline_block
icon: inline-block
date: 2023-05-18
category: Frontend
tag:
    - CSS3
---

与 `display: inline` 相比，主要区别在于 `display: inline-block` 允许在元素上设置宽度和高度。

同样，如果设置了 `display: inline-block`，将保留上下外边距或内边距，而 `display: inline` 则不会。

与 `display: block` 相比，主要区别在于 `display：inline-block` 在元素之后不添加换行符，因此该元素可以位于其他元素旁边。

例如：下例展示 `display: inline`、`display: inline-block` 以及 `display: block` 的不同行为。

::: normal-demo 演示

```html
<h2>display: inline</h2>
<div>Shanghai is one of the four direct-administered municipalities of <span class="a">the People's Republic of China</span>. Welcome to <span class="a">Shanghai</span>!</div>

<h2>display: inline-block</h2>
<div>Shanghai is one of the four direct-administered municipalities of <span class="b">the People's Republic of China</span>. Welcome to <span class="b">Shanghai</span>!</div>

<h2>display: block</h2>
<div>Shanghai is one of the four direct-administered municipalities of <span class="c">the People's Republic of China</span>. Welcome to <span class="c">Shanghai</span>!</div>
```

```css
span.a {
  display: inline; /* the default for span */
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue;  
  background-color: yellow; 
}

span.b {
  display: inline-block;
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue;    
  background-color: yellow; 
}

span.c {
  display: block;
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue;    
  background-color: yellow; 
}
```

:::


