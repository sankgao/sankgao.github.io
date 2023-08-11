---
title: 表格
icon: tables
date: 2023-05-17
category: Frontend
tag:
    - CSS3
---

使用 CSS 可以极大地改善 HTML 表格的外观。例如：

::: normal-demo 演示

```html
<table id="customers">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Address</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Alibaba</td>
    <td>Ma Yun</td>
    <td>No. 699, Wangshang Road, Binjiang District</td>
    <td>Hangzhou</td>
  </tr>
  <tr>
    <td>APPLE</td>
    <td>Tim Cook</td>
    <td>1 Infinite Loop Cupertino, CA 95014</td>
    <td>Cupertino</td>
  </tr>
  <tr>
    <td>BAIDU</td>
    <td>Li YanHong</td>
    <td>Lixiang guoji dasha,No 58, beisihuanxilu</td>
    <td>Beijing</td>
  </tr>
  <tr>
    <td>Canon</td>
    <td>Tsuneji Uchida</td>
    <td>One Canon Plaza Lake Success, NY 11042</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Google</td>
    <td>Larry Page</td>
    <td>1600 Amphitheatre Parkway Mountain View, CA 94043</td>
    <td>Mountain View</td>
  </tr>
  <tr>
    <td>HUAWEI</td>
    <td>Ren Zhengfei</td>
    <td>Putian Huawei Base, Longgang District</td>
    <td>Shenzhen</td>
  </tr>
  <tr>
    <td>Microsoft</td>
    <td>Bill Gates</td>
    <td>15700 NE 39th St Redmond, WA 98052</td>
    <td>Redmond</td>
  </tr>
  <tr>
    <td>Nokia</td>
    <td>Olli-Pekka Kallasvuo</td>
    <td>P.O. Box 226, FIN-00045 Nokia Group</td>
    <td>Helsinki</td>
  </tr>
  <tr>
    <td>SONY</td>
    <td>Kazuo Hirai</td>
    <td>Park Ridge, NJ 07656</td>
    <td>Park Ridge</td>
  </tr>
  <tr>
    <td>Tencent</td>
    <td>Ma Huateng</td>
    <td>Tencent Building, High-tech Park, Nanshan District</td>
    <td>Shenzhen</td>
  </tr>
</table>
```

```css
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
```

:::

## 表格边框

如需在 CSS 中设置表格边框，请使用 `border` 属性。

例如：为 `<table>`、`<th>` 和 `<td>` 元素规定了黑色边框。

::: normal-demo 演示

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr>
    <td>Bill</td>
    <td>Gates</td>
  </tr>
  <tr>
    <td>Steve</td>
    <td>Jobs</td>
  </tr>
</table>
```

```css
table,
th,
td {
  border: 1px solid black;
}
```

:::

## 全宽表格

上表似乎很小。如果您需要一个可以覆盖整个屏幕（全宽）的表格，请为 `<table>` 元素添加 `width: 100%`。例如：

::: normal-demo 演示

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr>
    <td>Bill</td>
    <td>Gates</td>
  </tr>
  <tr>
    <td>Steve</td>
    <td>Jobs</td>
  </tr>
</table>
```

```css
table,
th,
td {
  border: 1px solid black;
}

table {
  width: 100%;
}
```

:::

::: tip
上例中的表格拥有双边框。这是因为 `table` 和 `<th>` 和 `<td>` 元素都有单独的边框
:::

## 合并表格边框

`border-collapse` 属性设置是否将表格边框折叠为单一边框。例如：

::: normal-demo 演示

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr>
    <td>Bill</td>
    <td>Gates</td>
  </tr>
  <tr>
    <td>Steve</td>
    <td>Jobs</td>
  </tr>
</table>
```

```css
table,
th,
td {
  border: 1px solid black;
}

table {
  border-collapse: collapse;
}
```

:::

如果只希望表格周围有边框，则仅需为 `<table>` 指定 `border` 属性。例如：

::: normal-demo 演示

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr>
    <td>Bill</td>
    <td>Gates</td>
  </tr>
  <tr>
    <td>Steve</td>
    <td>Jobs</td>
  </tr>
</table>
```

```css
table {
  border: 1px solid black;
}
```

:::

## 表格宽度和高度

表格的宽度和高度由 `width` 和 `height` 属性定义。

例如：将表的宽度设置为 `100%`，将 `<th>` 元素的高度设置为 `50px`。

::: normal-demo 演示

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>Bill</td>
    <td>Gates</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>Steve</td>
    <td>Jobs</td>
    <td>$150</td>
  </tr>
  <tr>
    <td>Elon</td>
    <td>Musk</td>
    <td>$300</td>
  </tr>
  <tr>
    <td>Mark</td>
    <td>Zuckerberg</td>
    <td>$250</td>
  </tr>
</table>
```

```css
table,
td,
th {
  border: 1px solid black;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th {
  height: 70px;
}
```

:::

要创建仅占页面一半的表，请使用 `width: 50%`。例如：

::: normal-demo 演示

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>Bill</td>
    <td>Gates</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>Steve</td>
    <td>Jobs</td>
    <td>$150</td>
  </tr>
  <tr>
    <td>Elon</td>
    <td>Musk</td>
    <td>$300</td>
  </tr>
  <tr>
    <td>Mark</td>
    <td>Zuckerberg</td>
    <td>$250</td>
  </tr>
</table>
```

```css
table,
td,
th {
  border: 1px solid black;
}

table {
  border-collapse: collapse;
  width: 50%;
}

th {
  height: 70px;
}
```

:::

## 水平对齐

`text-align` 属性设置 `<th>` 或 `<td>` 中内容的水平对齐方式（左、右或居中）。

- **left**：水平左对齐
- **right**：水平右对齐
- **center**：水平居中对齐

默认情况下，`<th>` 元素的内容居中对齐，而 `<td>` 元素的内容左对齐。

要使 `<td>` 元素的内容也居中对齐，请使用 `text-align: center`。例如：

::: normal-demo 演示

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>Bill</td>
    <td>Gates</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>Steve</td>
    <td>Jobs</td>
    <td>$150</td>
  </tr>
  <tr>
    <td>Elon</td>
    <td>Musk</td>
    <td>$300</td>
  </tr>
  <tr>
    <td>Mark</td>
    <td>Zuckerberg</td>
    <td>$250</td>
  </tr>
</table>
```

```css
table,
td,
th {
  border: 1px solid black;
}

table {
  border-collapse: collapse;
  width: 100%;
}

td {
  text-align: center;
}
```

:::

## 垂直对齐

`vertical-align` 属性设置 `<th>` 或 `<td>` 中内容的垂直对齐方式（上、下或居中）。

- **top**：垂直上对齐
- **bottom**：垂直下对齐
- **middle**：垂直居中对齐

默认情况下，表中内容的垂直对齐是居中（`<th>` 和 `<td>` 元素都是）。

例如：将 `<td>` 元素的垂直文本对齐方式设置为下对齐。

::: normal-demo 演示

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>Bill</td>
    <td>Gates</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>Steve</td>
    <td>Jobs</td>
    <td>$150</td>
  </tr>
  <tr>
    <td>Elon</td>
    <td>Musk</td>
    <td>$300</td>
  </tr>
  <tr>
    <td>Mark</td>
    <td>Zuckerberg</td>
    <td>$250</td>
  </tr>
</table>
```

```css
table,
td,
th {
  border: 1px solid black;
}

table {
  border-collapse: collapse;
  width: 100%;
}

td {
  height: 50px;
  vertical-align: bottom;
}
```

:::

## 表格内边距

如需控制边框和表格内容之间的间距，请在 `<td>` 和 `<th>` 元素上使用 `padding` 属性。例如：

::: normal-demo 演示

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>Bill</td>
    <td>Gates</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>Steve</td>
    <td>Jobs</td>
    <td>$150</td>
  </tr>
  <tr>
    <td>Elon</td>
    <td>Musk</td>
    <td>$300</td>
  </tr>
  <tr>
    <td>Mark</td>
    <td>Zuckerberg</td>
    <td>$250</td>
  </tr>
</table>
```

```css
table,
td,
th {
  border: 1px solid black;
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 15px;
}
```

:::

## 水平分隔线

向 `<th>` 和 `<td>` 添加 `border-bottom` 属性，以实现水平分隔线。例如：

::: normal-demo 演示

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>Bill</td>
    <td>Gates</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>Steve</td>
    <td>Jobs</td>
    <td>$150</td>
  </tr>
  <tr>
    <td>Elon</td>
    <td>Musk</td>
    <td>$300</td>
  </tr>
  <tr>
    <td>Mark</td>
    <td>Zuckerberg</td>
    <td>$250</td>
  </tr>
</table>
```

```css
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
```

:::

## 可悬停表格

在 `<tr>` 元素上使用 `:hover` 选择器，以突出显示鼠标悬停时的表格行。例如：

::: normal-demo 演示

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>Bill</td>
    <td>Gates</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>Steve</td>
    <td>Jobs</td>
    <td>$150</td>
  </tr>
  <tr>
    <td>Elon</td>
    <td>Musk</td>
    <td>$300</td>
  </tr>
  <tr>
    <td>Mark</td>
    <td>Zuckerberg</td>
    <td>$250</td>
  </tr>
</table>
```

```css
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tr:hover {background-color: #f5f5f5;}
```

:::

## 条状表格

为了实现斑马纹表格效果，请使用 `nth-child()` 选择器，并为所有偶数（或奇数）表行添加 `background-color`。例如：

::: normal-demo 演示

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>Bill</td>
    <td>Gates</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>Steve</td>
    <td>Jobs</td>
    <td>$150</td>
  </tr>
  <tr>
    <td>Elon</td>
    <td>Musk</td>
    <td>$300</td>
  </tr>
  <tr>
    <td>Mark</td>
    <td>Zuckerberg</td>
    <td>$250</td>
  </tr>
</table>
```

```css
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {background-color: #f2f2f2;}
```

:::

## 表格颜色

指定 `<th>` 元素的背景颜色和文本颜色。例如：

::: normal-demo 演示

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>Bill</td>
    <td>Gates</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>Steve</td>
    <td>Jobs</td>
    <td>$150</td>
  </tr>
  <tr>
    <td>Elon</td>
    <td>Musk</td>
    <td>$300</td>
  </tr>
  <tr>
    <td>Mark</td>
    <td>Zuckerberg</td>
    <td>$250</td>
  </tr>
</table>
```

```css
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
  background-color: #4CAF50;
  color: white;
}
```

:::

## 响应式表格

如果屏幕太小而无法显示全部内容，则响应式表格会显示水平滚动条。

在 `<table>` 元素周围添加带有 `overflow-x: auto` 的容器元素（例如 `<div>`），以实现响应式效果。例如：

::: normal-demo 演示

```html
<div style="overflow-x: auto;">
  <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
    </tr>
    <tr>
      <td>Bill</td>
      <td>Gates</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Steve</td>
      <td>Jobs</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
    </tr>
    <tr>
      <td>Elon</td>
      <td>Musk</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
    </tr>
  </table>
</div>
```

```css
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {background-color: #f2f2f2;}
```

:::

