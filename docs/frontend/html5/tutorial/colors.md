---
title: 颜色
icon: colors
date: 2023-05-06
category: Frontend
tag:
    - HTML5
---

颜色由 **红色**、**绿色**、**蓝色** 混合而成。

## 颜色值

颜色由一个 **十六进制符号** 来定义，这个符号由红色、绿色和蓝色的值组成（RGB）。

每种颜色的最小值是 `0`（十六进制：`#00`）。最大值是 `255`（十六进制：`#FF`）。

以下表格给出了由三种颜色混合而成的具体效果：

::: normal-demo 演示

```html
<style>
  table,
  td,
  th {
    border: 1px solid black;
  }
  
  table {
    border-collapse: collapse;
  }
  
  td {
    text-align: center;
    width: 50%;
  }
</style>

<table>
  <tr>
    <th>颜色</th>
    <th>颜色名</th>
    <th>HEX 值</th>
    <th>RGB 值</th>
  </tr>
  <tr>
    <td style="background-color:#000000"></td>
    <td>Black（黑色）</td>
    <td>#000000</td>
    <td>rgb(0,0,0)</td>
  </tr>
  <tr>
    <td style="background-color:#FF0000"></td>
    <td>Red（红色）</td>
    <td>#FF0000</td>
    <td>rgb(255,0,0)</td>
  </tr>
  <tr>
    <td style="background-color:#FFFF00"></td>
    <td>Yellow（黄色）</td>
    <td>#FFFF00</td>
    <td>rgb(255,255,0)</td>
  </tr>
  <tr>
    <td style="background-color:#FFFFFF"></td>
    <td>White（白色）</td>
    <td>#FFFFFF</td>
    <td>rgb(255,255,255)</td>
  </tr>
  <tr>
    <td style="background-color:#00FF00"></td>
    <td>Lime（青柠色）</td>
    <td>#00FF00</td>
    <td>rgb(0,255,0)</td>
  </tr>
  <tr>
    <td style="background-color:#00FFFF"></td>
    <td>Cyan / Aqua（青色或水绿色）</td>
    <td>#00FFFF</td>
    <td>rgb(0,255,255)</td>
  </tr>
  <tr>
    <td style="background-color:#0000FF"></td>
    <td>Blue（蓝色）</td>
    <td>#0000FF</td>
    <td>rgb(0,0,255)</td>
  </tr>
  <tr>
    <td style="background-color:#FF00FF"></td>
    <td>Magenta / Fuchsia（洋红色或紫红色）</td>
    <td>#FF00FF</td>
    <td>rgb(255,0,255)</td>
  </tr>
</table>
```

:::

## 颜色名

大多数的浏览器都支持颜色名集合。

::: tip
仅仅有 `16` 种颜色名被 W3C 的 HTML4.0 标准所支持。它们是：

aqua（水绿色）、black（黑色）、blue（蓝色）、fuchsia（紫红色）、gray（灰色）、green（绿色）、lime（青柠色）、maroon（栗色）、navy（海军蓝）、olive（橄榄色）、purple（紫色）、red（红色）、silver（银色）、teal（蓝绿色）、white（白色）、yellow（黄色）。
:::

如果需要使用其它的颜色，需要使用十六进制的颜色值。

::: normal-demo 演示

```html
<style>
  table,
  td,
  th {
    border: 1px solid black;
  }
  
  table {
    border-collapse: collapse;
  }
  
  td {
    text-align: center;
    width: 50%;
  }
</style>

<table>
  <tr>
    <th>颜色</th>
    <th>颜色名</th>
    <th>HEX 值</th>
    <th>RGB 值</th>
  </tr>
  <tr>
    <td style="background-color:#00FFFF"></td>
    <td>aqua（水绿色）</td>
    <td>#00FFFF</td>
    <td>rgb(0,255,255)</td>
  </tr>
  <tr>
    <td style="background-color:#000000"></td>
    <td>black（黑色）</td>
    <td>#000000</td>
    <td>rgb(0,0,0)</td>
  </tr>
  <tr>
    <td style="background-color:#0000FF"></td>
    <td>blue（蓝色）</td>
    <td>#0000FF</td>
    <td>rgb(0,0,255)</td>
  </tr>
  <tr>
    <td style="background-color:#FF00FF"></td>
    <td>fuchsia（紫红色）</td>
    <td>#FF00FF</td>
    <td>rgb(255,0,255)</td>
  </tr>
  <tr>
    <td style="background-color:#808080"></td>
    <td>gray（灰色）</td>
    <td>#808080</td>
    <td>rgb(128,128,128)</td>
  </tr>
  <tr>
    <td style="background-color:#008000"></td>
    <td>green（绿色）</td>
    <td>#008000</td>
    <td>rgb(0,128,0)</td>
  </tr>
  <tr>
    <td style="background-color:#00FF00"></td>
    <td>lime（青柠色）</td>
    <td>#00FF00</td>
    <td>rgb(0,255,0)</td>
  </tr>
  <tr>
    <td style="background-color:#800000"></td>
    <td>maroon（栗色）</td>
    <td>#800000</td>
    <td>rgb(128,0,0)</td>
  </tr>
  <tr>
    <td style="background-color:#000080"></td>
    <td>navy（海军蓝）</td>
    <td>#000080</td>
    <td>rgb(0,0,128)</td>
  </tr>
  <tr>
    <td style="background-color:#808000"></td>
    <td>olive（橄榄色）</td>
    <td>#808000</td>
    <td>rgb(128,128,0)</td>
  </tr>
  <tr>
    <td style="background-color:#800080"></td>
    <td>purple（紫色）</td>
    <td>#800080</td>
    <td>rgb(128,0,128)</td>
  </tr>
  <tr>
    <td style="background-color:#FF0000"></td>
    <td>red（红色）</td>
    <td>#FF0000</td>
    <td>rgb(255,0,0)</td>
  </tr>
  <tr>
    <td style="background-color:#C0C0C0"></td>
    <td>silver（银色）</td>
    <td>#C0C0C0</td>
    <td>rgb(192,192,192)</td>
  </tr>
  <tr>
    <td style="background-color:#008080"></td>
    <td>teal（蓝绿色）</td>
    <td>#008080</td>
    <td>rgb(0,128,128)</td>
  </tr>
  <tr>
    <td style="background-color:#FFFFFF"></td>
    <td>white（白色）</td>
    <td>#FFFFFF</td>
    <td>rgb(255,255,255)</td>
  </tr>
  <tr>
    <td style="background-color:#FFFF00"></td>
    <td>yellow（黄色）</td>
    <td>#FFFF00</td>
    <td>rgb(255,255,0)</td>
  </tr>
</table>
```

:::

## Web 安全色

Web 安全颜色由 **红色**、**绿色** 和 **蓝色**（RGB）十六进制值 0,33H,66H,99H,CCH,FFH 的组合形成。结果是 `6*6*6=216` 种颜色。

以前，当大多数计算机 **仅支持** `256` 种颜色的时候，**Web 安全色** 作为 Web 标准被建议使用。其中的原因是，**微软** 和 **Mac** 操作系统使用了 `40` 种不同的保留的固定系统颜色（双方大约各使用 `20` 种）。

如今越来越多的计算机有能力处理数百万种颜色，不必只使用这些颜色。

最初 **web 安全色** 被用来确保，当计算机使用 `256` 色调色板时，所有的计算机能够正确地显示所有的颜色。

::: normal-demo 演示

```html
<style>
  table,
  td,
  th {
    border: 1px solid black;
  }
  
  table {
    border-collapse: collapse;
  }
  
  td {
    text-align: center;
    width: 50%;
  }
</style>

<table>
  <tr>
    <th>颜色</th>
    <th>HEX 值</th>
    <th>RGB 值</th>
  </tr>
  <tr>
    <td style="background-color:#000000"></td>
    <td>#000000</td>
    <td>rgb(0,0,0)</td>
  </tr>
  <tr>
    <td style="background-color:#000033"></td>
    <td>#000033</td>
    <td>rgb(0,0,51)</td>
  </tr>
  <tr>
    <td style="background-color:#000066"></td>
    <td>#000066</td>
    <td>rgb(0,0,102)</td>
  </tr>
  <tr>
    <td style="background-color:#000099"></td>
    <td>#000099</td>
    <td>rgb(0,0,153)</td>
  </tr>
  <tr>
    <td style="background-color:#0000CC"></td>
    <td>#0000CC</td>
    <td>rgb(0,0,204)</td>
  </tr>
  <tr>
    <td style="background-color:#0000FF"></td>
    <td>#0000FF</td>
    <td>rgb(0,0,255)</td>
  </tr>
  <tr>
    <td style="background-color:#003300"></td>
    <td>#003300</td>
    <td>rgb(0,51,0)</td>
  </tr>
  <tr>
    <td style="background-color:#003333"></td>
    <td>#003333</td>
    <td>rgb(0,51,51)</td>
  </tr>
  <tr>
    <td style="background-color:#003366"></td>
    <td>#003366</td>
    <td>rgb(0,51,102)</td>
  </tr>
  <tr>
    <td style="background-color:#003399"></td>
    <td>#003399</td>
    <td>rgb(0,51,153)</td>
  </tr>
  <tr>
    <td style="background-color:#0033CC"></td>
    <td>#0033CC</td>
    <td>rgb(0,51,204)</td>
  </tr>
  <tr>
    <td style="background-color:#0033FF"></td>
    <td>#0033FF</td>
    <td>rgb(0,51,255)</td>
  </tr>
  <tr>
    <td style="background-color:#006600"></td>
    <td>#006600</td>
    <td>rgb(0,102,0)</td>
  </tr>
  <tr>
    <td style="background-color:#006633"></td>
    <td>#006633</td>
    <td>rgb(0,102,51)</td>
  </tr>
  <tr>
    <td style="background-color:#006666"></td>
    <td>#006666</td>
    <td>rgb(0,102,102)</td>
  </tr>
  <tr>
    <td style="background-color:#006699"></td>
    <td>#006699</td>
    <td>rgb(0,102,153)</td>
  </tr>
  <tr>
    <td style="background-color:#0066CC"></td>
    <td>#0066CC</td>
    <td>rgb(0,102,204)</td>
  </tr>
  <tr>
    <td style="background-color:#0066FF"></td>
    <td>#0066FF</td>
    <td>rgb(0,102,255)</td>
  </tr>
  <tr>
    <td style="background-color:#009900"></td>
    <td>#009900</td>
    <td>rgb(0,153,0)</td>
  </tr>
  <tr>
    <td style="background-color:#009933"></td>
    <td>#009933</td>
    <td>rgb(0,153,51)</td>
  </tr>
  <tr>
    <td style="background-color:#009966"></td>
    <td>#009966</td>
    <td>rgb(0,153,102)</td>
  </tr>
  <tr>
    <td style="background-color:#009999"></td>
    <td>#009999</td>
    <td>rgb(0,153,153)</td>
  </tr>
  <tr>
    <td style="background-color:#0099CC"></td>
    <td>#0099CC</td>
    <td>rgb(0,153,204)</td>
  </tr>
  <tr>
    <td style="background-color:#0099FF"></td>
    <td>#0099FF</td>
    <td>rgb(0,153,255)</td>
  </tr>
  <tr>
    <td style="background-color:#00CC00"></td>
    <td>#00CC00</td>
    <td>rgb(0,204,0)</td>
  </tr>
  <tr>
    <td style="background-color:#00CC33"></td>
    <td>#00CC33</td>
    <td>rgb(0,204,51)</td>
  </tr>
  <tr>
    <td style="background-color:#00CC66"></td>
    <td>#00CC66</td>
    <td>rgb(0,204,102)</td>
  </tr>
  <tr>
    <td style="background-color:#00CC99"></td>
    <td>#00CC99</td>
    <td>rgb(0,204,153)</td>
  </tr>
  <tr>
    <td style="background-color:#00CCCC"></td>
    <td>#00CCCC</td>
    <td>rgb(0,204,204)</td>
  </tr>
  <tr>
    <td style="background-color:#00CCFF"></td>
    <td>#00CCFF</td>
    <td>rgb(0,204,255)</td>
  </tr>
  <tr>
    <td style="background-color:#00FF00"></td>
    <td>#00FF00</td>
    <td>rgb(0,255,0)</td>
  </tr>
  <tr>
    <td style="background-color:#00FF33"></td>
    <td>#00FF33</td>
    <td>rgb(0,255,51)</td>
  </tr>
  <tr>
    <td style="background-color:#00FF66"></td>
    <td>#00FF66</td>
    <td>rgb(0,255,102)</td>
  </tr>
  <tr>
    <td style="background-color:#00FF99"></td>
    <td>#00FF99</td>
    <td>rgb(0,255,153)</td>
  </tr>
  <tr>
    <td style="background-color:#00FFCC"></td>
    <td>#00FFCC</td>
    <td>rgb(0,255,204)</td>
  </tr>
  <tr>
    <td style="background-color:#00FFFF"></td>
    <td>#00FFFF</td>
    <td>rgb(0,255,255)</td>
  </tr>
  <tr>
    <td style="background-color:#330000"></td>
    <td>#330000</td>
    <td>rgb(51,0,0)</td>
  </tr>
  <tr>
    <td style="background-color:#330033"></td>
    <td>#330033</td>
    <td>rgb(51,0,51)</td>
  </tr>
  <tr>
    <td style="background-color:#330066"></td>
    <td>#330066</td>
    <td>rgb(51,0,102)</td>
  </tr>
  <tr>
    <td style="background-color:#330099"></td>
    <td>#330099</td>
    <td>rgb(51,0,153)</td>
  </tr>
  <tr>
    <td style="background-color:#3300CC"></td>
    <td>#3300CC</td>
    <td>rgb(51,0,204)</td>
  </tr>
  <tr>
    <td style="background-color:#3300FF"></td>
    <td>#3300FF</td>
    <td>rgb(51,0,255)</td>
  </tr>
  <tr>
    <td style="background-color:#333300"></td>
    <td>#333300</td>
    <td>rgb(51,51,0)</td>
  </tr>
  <tr>
    <td style="background-color:#333333"></td>
    <td>#333333</td>
    <td>rgb(51,51,51)</td>
  </tr>
  <tr>
    <td style="background-color:#333366"></td>
    <td>#333366</td>
    <td>rgb(51,51,102)</td>
  </tr>
  <tr>
    <td style="background-color:#333399"></td>
    <td>#333399</td>
    <td>rgb(51,51,153)</td>
  </tr>
  <tr>
    <td style="background-color:#3333CC"></td>
    <td>#3333CC</td>
    <td>rgb(51,51,204)</td>
  </tr>
  <tr>
    <td style="background-color:#3333FF"></td>
    <td>#3333FF</td>
    <td>rgb(51,51,255)</td>
  </tr>
  <tr>
    <td style="background-color:#336600"></td>
    <td>#336600</td>
    <td>rgb(51,102,0)</td>
  </tr>
  <tr>
    <td style="background-color:#336633"></td>
    <td>#336633</td>
    <td>rgb(51,102,51)</td>
  </tr>
  <tr>
    <td style="background-color:#336666"></td>
    <td>#336666</td>
    <td>rgb(51,102,102)</td>
  </tr>
  <tr>
    <td style="background-color:#336699"></td>
    <td>#336699</td>
    <td>rgb(51,102,153)</td>
  </tr>
  <tr>
    <td style="background-color:#3366CC"></td>
    <td>#3366CC</td>
    <td>rgb(51,102,204)</td>
  </tr>
  <tr>
    <td style="background-color:#3366FF"></td>
    <td>#3366FF</td>
    <td>rgb(51,102,255)</td>
  </tr>
  <tr>
    <td style="background-color:#339900"></td>
    <td>#339900</td>
    <td>rgb(51,153,0)</td>
  </tr>
  <tr>
    <td style="background-color:#339933"></td>
    <td>#339933</td>
    <td>rgb(51,153,51)</td>
  </tr>
  <tr>
    <td style="background-color:#339966"></td>
    <td>#339966</td>
    <td>rgb(51,153,102)</td>
  </tr>
  <tr>
    <td style="background-color:#339999"></td>
    <td>#339999</td>
    <td>rgb(51,153,153)</td>
  </tr>
  <tr>
    <td style="background-color:#3399CC"></td>
    <td>#3399CC</td>
    <td>rgb(51,153,204)</td>
  </tr>
  <tr>
    <td style="background-color:#3399FF"></td>
    <td>#3399FF</td>
    <td>rgb(51,153,255)</td>
  </tr>
  <tr>
    <td style="background-color:#33CC00"></td>
    <td>#33CC00</td>
    <td>rgb(51,204,0)</td>
  </tr>
  <tr>
    <td style="background-color:#33CC33"></td>
    <td>#33CC33</td>
    <td>rgb(51,204,51)</td>
  </tr>
  <tr>
    <td style="background-color:#33CC66"></td>
    <td>#33CC66</td>
    <td>rgb(51,204,102)</td>
  </tr>
  <tr>
    <td style="background-color:#33CC99"></td>
    <td>#33CC99</td>
    <td>rgb(51,204,153)</td>
  </tr>
  <tr>
    <td style="background-color:#33CCCC"></td>
    <td>#33CCCC</td>
    <td>rgb(51,204,204)</td>
  </tr>
  <tr>
    <td style="background-color:#33CCFF"></td>
    <td>#33CCFF</td>
    <td>rgb(51,204,255)</td>
  </tr>
  <tr>
    <td style="background-color:#33FF00"></td>
    <td>#33FF00</td>
    <td>rgb(51,255,0)</td>
  </tr>
  <tr>
    <td style="background-color:#33FF33"></td>
    <td>#33FF33</td>
    <td>rgb(51,255,51)</td>
  </tr>
  <tr>
    <td style="background-color:#33FF66"></td>
    <td>#33FF66</td>
    <td>rgb(51,255,102)</td>
  </tr>
  <tr>
    <td style="background-color:#33FF99"></td>
    <td>#33FF99</td>
    <td>rgb(51,255,153)</td>
  </tr>
  <tr>
    <td style="background-color:#33FFCC"></td>
    <td>#33FFCC</td>
    <td>rgb(51,255,204)</td>
  </tr>
  <tr>
    <td style="background-color:#33FFFF"></td>
    <td>#33FFFF</td>
    <td>rgb(51,255,255)</td>
  </tr>
  <tr>
    <td style="background-color:#660000"></td>
    <td>#660000</td>
    <td>rgb(102,0,0)</td>
  </tr>
  <tr>
    <td style="background-color:#660033"></td>
    <td>#660033</td>
    <td>rgb(102,0,51)</td>
  </tr>
  <tr>
    <td style="background-color:#660066"></td>
    <td>#660066</td>
    <td>rgb(102,0,102)</td>
  </tr>
  <tr>
    <td style="background-color:#660099"></td>
    <td>#660099</td>
    <td>rgb(102,0,153)</td>
  </tr>
  <tr>
    <td style="background-color:#6600CC"></td>
    <td>#6600CC</td>
    <td>rgb(102,0,204)</td>
  </tr>
  <tr>
    <td style="background-color:#6600FF"></td>
    <td>#6600FF</td>
    <td>rgb(102,0,255)</td>
  </tr>
  <tr>
    <td style="background-color:#663300"></td>
    <td>#663300</td>
    <td>rgb(102,51,0)</td>
  </tr>
  <tr>
    <td style="background-color:#663333"></td>
    <td>#663333</td>
    <td>rgb(102,51,51)</td>
  </tr>
  <tr>
    <td style="background-color:#663366"></td>
    <td>#663366</td>
    <td>rgb(102,51,102)</td>
  </tr>
  <tr>
    <td style="background-color:#663399"></td>
    <td>#663399</td>
    <td>rgb(102,51,153)</td>
  </tr>
  <tr>
    <td style="background-color:#6633CC"></td>
    <td>#6633CC</td>
    <td>rgb(102,51,204)</td>
  </tr>
  <tr>
    <td style="background-color:#6633FF"></td>
    <td>#6633FF</td>
    <td>rgb(102,51,255)</td>
  </tr>
  <tr>
    <td style="background-color:#666600"></td>
    <td>#666600</td>
    <td>rgb(102,102,0)</td>
  </tr>
  <tr>
    <td style="background-color:#666633"></td>
    <td>#666633</td>
    <td>rgb(102,102,51)</td>
  </tr>
  <tr>
    <td style="background-color:#666666"></td>
    <td>#666666</td>
    <td>rgb(102,102,102)</td>
  </tr>
  <tr>
    <td style="background-color:#666699"></td>
    <td>#666699</td>
    <td>rgb(102,102,153)</td>
  </tr>
  <tr>
    <td style="background-color:#6666CC"></td>
    <td>#6666CC</td>
    <td>rgb(102,102,204)</td>
  </tr>
  <tr>
    <td style="background-color:#6666FF"></td>
    <td>#6666FF</td>
    <td>rgb(102,102,255)</td>
  </tr>
  <tr>
    <td style="background-color:#669900"></td>
    <td>#669900</td>
    <td>rgb(102,153,0)</td>
  </tr>
  <tr>
    <td style="background-color:#669933"></td>
    <td>#669933</td>
    <td>rgb(102,153,51)</td>
  </tr>
  <tr>
    <td style="background-color:#669966"></td>
    <td>#669966</td>
    <td>rgb(102,153,102)</td>
  </tr>
  <tr>
    <td style="background-color:#669999"></td>
    <td>#669999</td>
    <td>rgb(102,153,153)</td>
  </tr>
  <tr>
    <td style="background-color:#6699CC"></td>
    <td>#6699CC</td>
    <td>rgb(102,153,204)</td>
  </tr>
  <tr>
    <td style="background-color:#6699FF"></td>
    <td>#6699FF</td>
    <td>rgb(102,153,255)</td>
  </tr>
  <tr>
    <td style="background-color:#66CC00"></td>
    <td>#66CC00</td>
    <td>rgb(102,204,0)</td>
  </tr>
  <tr>
    <td style="background-color:#66CC33"></td>
    <td>#66CC33</td>
    <td>rgb(102,204,51)</td>
  </tr>
  <tr>
    <td style="background-color:#66CC66"></td>
    <td>#66CC66</td>
    <td>rgb(102,204,102)</td>
  </tr>
  <tr>
    <td style="background-color:#66CC99"></td>
    <td>#66CC99</td>
    <td>rgb(102,204,153)</td>
  </tr>
  <tr>
    <td style="background-color:#66CCCC"></td>
    <td>#66CCCC</td>
    <td>rgb(102,204,204)</td>
  </tr>
  <tr>
    <td style="background-color:#66CCFF"></td>
    <td>#66CCFF</td>
    <td>rgb(102,255,255)</td>
  </tr>
  <tr>
    <td style="background-color:#66FF00"></td>
    <td>#66FF00</td>
    <td>rgb(102,255,0)</td>
  </tr>
  <tr>
    <td style="background-color:#66FF33"></td>
    <td>#66FF33</td>
    <td>rgb(102,255,51)</td>
  </tr>
  <tr>
    <td style="background-color:#66FF66"></td>
    <td>#66FF66</td>
    <td>rgb(102,255,102)</td>
  </tr>
  <tr>
    <td style="background-color:#66FF99"></td>
    <td>#66FF99</td>
    <td>rgb(102,255,153)</td>
  </tr>
  <tr>
    <td style="background-color:#66FFCC"></td>
    <td>#66FFCC</td>
    <td>rgb(102,255,204)</td>
  </tr>
  <tr>
    <td style="background-color:#66FFFF"></td>
    <td>#66FFFF</td>
    <td>rgb(102,255,255)</td>
  </tr>
  <tr>
    <td style="background-color:#990000"></td>
    <td>#990000</td>
    <td>rgb(153,0,0)</td>
  </tr>
  <tr>
    <td style="background-color:#990033"></td>
    <td>#990033</td>
    <td>rgb(153,0,51)</td>
  </tr>
  <tr>
    <td style="background-color:#990066"></td>
    <td>#990066</td>
    <td>rgb(153,0,102)</td>
  </tr>
  <tr>
    <td style="background-color:#990099"></td>
    <td>#990099</td>
    <td>rgb(153,0,153)</td>
  </tr>
  <tr>
    <td style="background-color:#9900CC"></td>
    <td>#9900CC</td>
    <td>rgb(153,0,204)</td>
  </tr>
  <tr>
    <td style="background-color:#9900FF"></td>
    <td>#9900FF</td>
    <td>rgb(153,0,255)</td>
  </tr>
  <tr>
    <td style="background-color:#993300"></td>
    <td>#993300</td>
    <td>rgb(153,51,0)</td>
  </tr>
  <tr>
    <td style="background-color:#993333"></td>
    <td>#993333</td>
    <td>rgb(153,51,51)</td>
  </tr>
  <tr>
    <td style="background-color:#993366"></td>
    <td>#993366</td>
    <td>rgb(153,51,102)</td>
  </tr>
  <tr>
    <td style="background-color:#993399"></td>
    <td>#993399</td>
    <td>rgb(153,51,153)</td>
  </tr>
  <tr>
    <td style="background-color:#9933CC"></td>
    <td>#9933CC</td>
    <td>rgb(153,51,204)</td>
  </tr>
  <tr>
    <td style="background-color:#9933FF"></td>
    <td>#9933FF</td>
    <td>rgb(153,51,255)</td>
  </tr>
  <tr>
    <td style="background-color:#996600"></td>
    <td>#996600</td>
    <td>rgb(153,102,0)</td>
  </tr>
  <tr>
    <td style="background-color:#996633"></td>
    <td>#996633</td>
    <td>rgb(153,102,51)</td>
  </tr>
  <tr>
    <td style="background-color:#996666"></td>
    <td>#996666</td>
    <td>rgb(153,102,102)</td>
  </tr>
  <tr>
    <td style="background-color:#996699"></td>
    <td>#996699</td>
    <td>rgb(153,102,153)</td>
  </tr>
  <tr>
    <td style="background-color:#9966CC"></td>
    <td>#9966CC</td>
    <td>rgb(153,102,204)</td>
  </tr>
  <tr>
    <td style="background-color:#9966FF"></td>
    <td>#9966FF</td>
    <td>rgb(153,102,255)</td>
  </tr>
  <tr>
    <td style="background-color:#999900"></td>
    <td>#999900</td>
    <td>rgb(153,153,0)</td>
  </tr>
  <tr>
    <td style="background-color:#999933"></td>
    <td>#999933</td>
    <td>rgb(153,153,51)</td>
  </tr>
  <tr>
    <td style="background-color:#999966"></td>
    <td>#999966</td>
    <td>rgb(153,153,102)</td>
  </tr>
  <tr>
    <td style="background-color:#999999"></td>
    <td>#999999</td>
    <td>rgb(153,153,153)</td>
  </tr>
  <tr>
    <td style="background-color:#9999CC"></td>
    <td>#9999CC</td>
    <td>rgb(153,153,204)</td>
  </tr>
  <tr>
    <td style="background-color:#9999FF"></td>
    <td>#9999FF</td>
    <td>rgb(153,153,255)</td>
  </tr>
  <tr>
    <td style="background-color:#99CC00"></td>
    <td>#99CC00</td>
    <td>rgb(153,204,0)</td>
  </tr>
  <tr>
    <td style="background-color:#99CC33"></td>
    <td>#99CC33</td>
    <td>rgb(153,204,51)</td>
  </tr>
  <tr>
    <td style="background-color:#99CC66"></td>
    <td>#99CC66</td>
    <td>rgb(153,204,102)</td>
  </tr>
  <tr>
    <td style="background-color:#99CC99"></td>
    <td>#99CC99</td>
    <td>rgb(153,204,153)</td>
  </tr>
  <tr>
    <td style="background-color:#99CCCC"></td>
    <td>#99CCCC</td>
    <td>rgb(153,204,204)</td>
  </tr>
  <tr>
    <td style="background-color:#99CCFF"></td>
    <td>#99CCFF</td>
    <td>rgb(153,204,255)</td>
  </tr>
  <tr>
    <td style="background-color:#99FF00"></td>
    <td>#99FF00</td>
    <td>rgb(153,255,0)</td>
  </tr>
  <tr>
    <td style="background-color:#99FF33"></td>
    <td>#99FF33</td>
    <td>rgb(153,255,51)</td>
  </tr>
  <tr>
    <td style="background-color:#99FF66"></td>
    <td>#99FF66</td>
    <td>rgb(153,255,102)</td>
  </tr>
  <tr>
    <td style="background-color:#99FF99"></td>
    <td>#99FF99</td>
    <td>rgb(153,255,153)</td>
  </tr>
  <tr>
    <td style="background-color:#99FFCC"></td>
    <td>#99FFCC</td>
    <td>rgb(153,255,204)</td>
  </tr>
  <tr>
    <td style="background-color:#99FFFF"></td>
    <td>#99FFFF</td>
    <td>rgb(153,255,255)</td>
  </tr>
  <tr>
    <td style="background-color:#CC0000"></td>
    <td>#CC0000</td>
    <td>rgb(204,0,0)</td>
  </tr>
  <tr>
    <td style="background-color:#CC0033"></td>
    <td>#CC0033</td>
    <td>rgb(204,0,51)</td>
  </tr>
  <tr>
    <td style="background-color:#CC0066"></td>
    <td>#CC0066</td>
    <td>rgb(204,0,102)</td>
  </tr>
  <tr>
    <td style="background-color:#CC0099"></td>
    <td>#CC0099</td>
    <td>rgb(204,0,153)</td>
  </tr>
  <tr>
    <td style="background-color:#CC00CC"></td>
    <td>#CC00CC</td>
    <td>rgb(204,0,204)</td>
  </tr>
  <tr>
    <td style="background-color:#CC00FF"></td>
    <td>#CC00FF</td>
    <td>rgb(204,0,255)</td>
  </tr>
  <tr>
    <td style="background-color:#CC3300"></td>
    <td>#CC3300</td>
    <td>rgb(204,51,0)</td>
  </tr>
  <tr>
    <td style="background-color:#CC3333"></td>
    <td>#CC3333</td>
    <td>rgb(204,51,51)</td>
  </tr>
  <tr>
    <td style="background-color:#CC3366"></td>
    <td>#CC3366</td>
    <td>rgb(204,51,102)</td>
  </tr>
  <tr>
    <td style="background-color:#CC3399"></td>
    <td>#CC3399</td>
    <td>rgb(204,51,153)</td>
  </tr>
  <tr>
    <td style="background-color:#CC33CC"></td>
    <td>#CC33CC</td>
    <td>rgb(204,51,204)</td>
  </tr>
  <tr>
    <td style="background-color:#CC33FF"></td>
    <td>#CC33FF</td>
    <td>rgb(204,51,255)</td>
  </tr>
  <tr>
    <td style="background-color:#CC6600"></td>
    <td>#CC6600</td>
    <td>rgb(204,102,0)</td>
  </tr>
  <tr>
    <td style="background-color:#CC6633"></td>
    <td>#CC6633</td>
    <td>rgb(204,102,51)</td>
  </tr>
  <tr>
    <td style="background-color:#CC6666"></td>
    <td>#CC6666</td>
    <td>rgb(204,102,102)</td>
  </tr>
  <tr>
    <td style="background-color:#CC6699"></td>
    <td>#CC6699</td>
    <td>rgb(204,102,153)</td>
  </tr>
  <tr>
    <td style="background-color:#CC66CC"></td>
    <td>#CC66CC</td>
    <td>rgb(204,102,204)</td>
  </tr>
  <tr>
    <td style="background-color:#CC66FF"></td>
    <td>#CC66FF</td>
    <td>rgb(204,102,255)</td>
  </tr>
  <tr>
    <td style="background-color:#CC9900"></td>
    <td>#CC9900</td>
    <td>rgb(204,153,0)</td>
  </tr>
  <tr>
    <td style="background-color:#CC9933"></td>
    <td>#CC9933</td>
    <td>rgb(204,153,51)</td>
  </tr>
  <tr>
    <td style="background-color:#CC9966"></td>
    <td>#CC9966</td>
    <td>rgb(204,153,102)</td>
  </tr>
  <tr>
    <td style="background-color:#CC9999"></td>
    <td>#CC9999</td>
    <td>rgb(204,153,153)</td>
  </tr>
  <tr>
    <td style="background-color:#CC99CC"></td>
    <td>#CC99CC</td>
    <td>rgb(204,153,204)</td>
  </tr>
  <tr>
    <td style="background-color:#CC99FF"></td>
    <td>#CC99FF</td>
    <td>rgb(204,153,255)</td>
  </tr>
  <tr>
    <td style="background-color:#CCCC00"></td>
    <td>#CCCC00</td>
    <td>rgb(204,204,0)</td>
  </tr>
  <tr>
    <td style="background-color:#CCCC33"></td>
    <td>#CCCC33</td>
    <td>rgb(204,204,51)</td>
  </tr>
  <tr>
    <td style="background-color:#CCCC66"></td>
    <td>#CCCC66</td>
    <td>rgb(204,204,102)</td>
  </tr>
  <tr>
    <td style="background-color:#CCCC99"></td>
    <td>#CCCC99</td>
    <td>rgb(204,204,153)</td>
  </tr>
  <tr>
    <td style="background-color:#CCCCCC"></td>
    <td>#CCCCCC</td>
    <td>rgb(204,204,204)</td>
  </tr>
  <tr>
    <td style="background-color:#CCCCFF"></td>
    <td>#CCCCFF</td>
    <td>rgb(204,204,255)</td>
  </tr>
  <tr>
    <td style="background-color:#CCFF00"></td>
    <td>#CCFF00</td>
    <td>rgb(204,255,0)</td>
  </tr>
  <tr>
    <td style="background-color:#CCFF33"></td>
    <td>#CCFF33</td>
    <td>rgb(204,255,51)</td>
  </tr>
  <tr>
    <td style="background-color:#CCFF66"></td>
    <td>#CCFF66</td>
    <td>rgb(204,255,102)</td>
  </tr>
  <tr>
    <td style="background-color:#CCFF99"></td>
    <td>#CCFF99</td>
    <td>rgb(204,255,153)</td>
  </tr>
  <tr>
    <td style="background-color:#CCFFCC"></td>
    <td>#CCFFCC</td>
    <td>rgb(204,255,204)</td>
  </tr>
  <tr>
    <td style="background-color:#CCFFFF"></td>
    <td>#CCFFFF</td>
    <td>rgb(204,255,255)</td>
  </tr>
  <tr>
    <td style="background-color:#FF0000"></td>
    <td>#FF0000</td>
    <td>rgb(255,0,0)</td>
  </tr>
  <tr>
    <td style="background-color:#FF0033"></td>
    <td>#FF0033</td>
    <td>rgb(255,0,51)</td>
  </tr>
  <tr>
    <td style="background-color:#FF0066"></td>
    <td>#FF0066</td>
    <td>rgb(255,0,102)</td>
  </tr>
  <tr>
    <td style="background-color:#FF0099"></td>
    <td>#FF0099</td>
    <td>rgb(255,0,153)</td>
  </tr>
  <tr>
    <td style="background-color:#FF00CC"></td>
    <td>#FF00CC</td>
    <td>rgb(255,0,204)</td>
  </tr>
  <tr>
    <td style="background-color:#FF00FF"></td>
    <td>#FF00FF</td>
    <td>rgb(255,0,255)</td>
  </tr>
  <tr>
    <td style="background-color:#FF3300"></td>
    <td>#FF3300</td>
    <td>rgb(255,51,0)</td>
  </tr>
  <tr>
    <td style="background-color:#FF3333"></td>
    <td>#FF3333</td>
    <td>rgb(255,51,51)</td>
  </tr>
  <tr>
    <td style="background-color:#FF3366"></td>
    <td>#FF3366</td>
    <td>rgb(255,51,102)</td>
  </tr>
  <tr>
    <td style="background-color:#FF3399"></td>
    <td>#FF3399</td>
    <td>rgb(255,51,153)</td>
  </tr>
  <tr>
    <td style="background-color:#FF33CC"></td>
    <td>#FF33CC</td>
    <td>rgb(255,51,204)</td>
  </tr>
  <tr>
    <td style="background-color:#FF33FF"></td>
    <td>#FF33FF</td>
    <td>rgb(255,51,255)</td>
  </tr>
  <tr>
    <td style="background-color:#FF6600"></td>
    <td>#FF6600</td>
    <td>rgb(255,102,0)</td>
  </tr>
  <tr>
    <td style="background-color:#FF6633"></td>
    <td>#FF6633</td>
    <td>rgb(255,102,51)</td>
  </tr>
  <tr>
    <td style="background-color:#FF6666"></td>
    <td>#FF6666</td>
    <td>rgb(255,102,102)</td>
  </tr>
  <tr>
    <td style="background-color:#FF6699"></td>
    <td>#FF6699</td>
    <td>rgb(255,102,153)</td>
  </tr>
  <tr>
    <td style="background-color:#FF66CC"></td>
    <td>#FF66CC</td>
    <td>rgb(255,102,204)</td>
  </tr>
  <tr>
    <td style="background-color:#FF66FF"></td>
    <td>#FF66FF</td>
    <td>rgb(255,102,255)</td>
  </tr>
  <tr>
    <td style="background-color:#FF9900"></td>
    <td>#FF9900</td>
    <td>rgb(255,153,0)</td>
  </tr>
  <tr>
    <td style="background-color:#FF9933"></td>
    <td>#FF9933</td>
    <td>rgb(255,153,51)</td>
  </tr>
  <tr>
    <td style="background-color:#FF9966"></td>
    <td>#FF9966</td>
    <td>rgb(255,153,102)</td>
  </tr>
  <tr>
    <td style="background-color:#FF9999"></td>
    <td>#FF9999</td>
    <td>rgb(255,153,153)</td>
  </tr>
  <tr>
    <td style="background-color:#FF99CC"></td>
    <td>#FF99CC</td>
    <td>rgb(255,153,204)</td>
  </tr>
  <tr>
    <td style="background-color:#FF99FF"></td>
    <td>#FF99FF</td>
    <td>rgb(255,153,255)</td>
  </tr>
  <tr>
    <td style="background-color:#FFCC00"></td>
    <td>#FFCC00</td>
    <td>rgb(255,204,0)</td>
  </tr>
  <tr>
    <td style="background-color:#FFCC33"></td>
    <td>#FFCC33</td>
    <td>rgb(255,204,51)</td>
  </tr>
  <tr>
    <td style="background-color:#FFCC66"></td>
    <td>#FFCC66</td>
    <td>rgb(255,204,102)</td>
  </tr>
  <tr>
    <td style="background-color:#FFCC99"></td>
    <td>#FFCC99</td>
    <td>rgb(255,204,153)</td>
  </tr>
  <tr>
    <td style="background-color:#FFCCCC"></td>
    <td>#FFCCCC</td>
    <td>rgb(255,204,204)</td>
  </tr>
  <tr>
    <td style="background-color:#FFCCFF"></td>
    <td>#FFCCFF</td>
    <td>rgb(255,204,255)</td>
  </tr>
  <tr>
    <td style="background-color:#FFFF00"></td>
    <td>#FFFF00</td>
    <td>rgb(255,255,0)</td>
  </tr>
  <tr>
    <td style="background-color:#FFFF33"></td>
    <td>#FFFF33</td>
    <td>rgb(255,255,51)</td>
  </tr>
  <tr>
    <td style="background-color:#FFFF66"></td>
    <td>#FFFF66</td>
    <td>rgb(255,255,102)</td>
  </tr>
  <tr>
    <td style="background-color:#FFFF99"></td>
    <td>#FFFF99</td>
    <td>rgb(255,255,153)</td>
  </tr>
  <tr>
    <td style="background-color:#FFFFCC"></td>
    <td>#FFFFCC</td>
    <td>rgb(255,255,204)</td>
  </tr>
  <tr>
    <td style="background-color:#FFFFFF"></td>
    <td>#FFFFFF</td>
    <td>rgb(255,255,255)</td>
  </tr>
</table>
```
