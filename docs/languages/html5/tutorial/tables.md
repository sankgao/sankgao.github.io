---
title: 表格
icon: tables
date: 2023-05-08
category: Frontend
tag:
    - HTML5
---

表格由 `<table>` 标签来定义。每个表格均有若干行（由 `<tr>` 标签定义），每行被分割为若干单元格（由 `<td>` 标签定义）。字母 `td` 指表格数据（table data），即数据单元格的内容。

数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。

::: normal-demo 演示

```html
<table>
  <tr>
    <td>row 1, cell 1</td>
    <td>row 1, cell 2</td>
  </tr>
  <tr>
    <td>row 2, cell 1</td>
    <td>row 2, cell 2</td>
  </tr>
</table>
```

:::

## 表格和边框属性

如果不定义 **边框属性**，表格将 **不显示** 边框。

::: normal-demo 演示

```html
<table border="1">
  <tr>
    <td>row 1, cell 1</td>
    <td>row 1, cell 2</td>
  </tr>
  <tr>
    <td>row 2, cell 1</td>
    <td>row 2, cell 2</td>
  </tr>
</table>
```

:::

- **border**：定义图像周围的边框。**不推荐使用**，被样式所代替

## 表格的表头

表格的表头使用 `<th>` 标签进行定义。

::: normal-demo 演示

```html
<table border="1">
  <tr>
    <th>Heading</th>
    <th>Another Heading</th>
  </tr>
  <tr>
    <td>row 1, cell 1</td>
    <td>row 1, cell 2</td>
  </tr>
  <tr>
    <td>row 2, cell 1</td>
    <td>row 2, cell 2</td>
  </tr>
</table>
```

:::

## 表格中的空单元格

如果某个单元格是 **空的**（没有内容），浏览器可能无法显示出这个单元格的边框，为了避免这种情况，在空单元格中添加一个 **空格占位符**（`&nbsp;`），就可以将边框显示出来。

::: normal-demo 演示

```html
<table border="1">
  <tr>
    <td>row 1, cell 1</td>
    <td>row 1, cell 2</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>row 2, cell 2</td>
  </tr>
</table>
```

:::

## 表格实例

- 带有标题的表格

    给表格设置一个标题。

    ::: normal-demo 演示

    ```html
    <table border="1">
      <caption>我的标题</caption>
      <tr>
        <td>100</td>
        <td>200</td>
        <td>300</td>
      </tr>
      <tr>
        <td>400</td>
        <td>500</td>
        <td>600</td>
      </tr>
    </table>
    ```

    :::

    - **caption**：设置表格的标题

- 跨行或跨列的表格单元格

    ::: normal-demo 演示

    ```html
    <h4>横跨两列的单元格：</h4>
    <table border="1">
      <tr>
        <th>姓名</th>
        <th colspan="2">电话</th>
      </tr>
      <tr>
        <td>Bill Gates</td>
        <td>555 77 854</td>
        <td>555 77 855</td>
      </tr>
    </table>
    ​
    <h4>横跨两行的单元格：</h4>
    <table border="1">
      <tr>
        <th>姓名</th>
        <td>Bill Gates</td>
      </tr>
      <tr>
        <th rowspan="2">电话</th>
        <td>555 77 854</td>
      </tr>
      <tr>
        <td>555 77 855</td>
      </tr>
    </table>
    ```

    :::

    - **colspan**：设置单元格可横跨的列数
    - **rowspan**：设置单元格可横跨的行数

- 表格内的标签

    在不同的元素内显示元素。

    ::: normal-demo 演示

    ```html
    <table border="1">
      <tr>
        <td>
          <p>这是一个段落。</p>
          <p>这是另一个段落。</p>
        </td>
        <td>这个单元包含一个表格：
          <table border="1">
            <tr>
              <td>A</td>
              <td>B</td>
            </tr>
            <tr>
              <td>C</td>
              <td>D</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>这个单元包含一个列表：
          <ul>
            <li>苹果</li>
            <li>香蕉</li>
            <li>菠萝</li>
          </ul>
        </td>
        <td>HELLO</td>
      </tr>
    </table>
    ```

    :::

- 单元格边距

    创建单元格内容与其边框之间的空白。

    ::: normal-demo 演示

    ```html
    <table border="1" cellpadding="10">
      <tr>
        <td>First</td>
        <td>Row</td>
      </tr>
      <tr>
        <td>Second</td>
        <td>Row</td>
      </tr>
    </table>
    ```

    :::

    - **cellpadding**：规定单元格内容与其边框之间的距离

- 向表格添加背景颜色或背景图像

    ::: normal-demo 演示

    ```html
    <h4>背景颜色：</h4>
    <table border="1" bgcolor="red">
      <tr>
        <td>First</td>
        <td>Row</td>
      </tr>
      <tr>
        <td>Second</td>
        <td>Row</td>
      </tr>
    </table>

    <h4>背景图像：</h4>
    <table border="1" background="/html5/eg_background.jpg">
      <tr>
        <td>First</td>
        <td>Row</td>
      </tr>
      <tr>
        <td>Second</td>
        <td>Row</td>
      </tr>
    </table>
    ```

    :::

    - **bgcolor**：规定表格的背景颜色。**不推荐使用**，被样式所代替
    - **background**：规定表格的背景图像

- 向表格单元添加背景颜色或者背景图像

    ::: normal-demo 演示

    ```html
    <h4>单元背景：</h4>
    <table border="1">
      <tr>
        <td bgcolor="red">First</td>
        <td>Row</td>
      </tr>
      <tr>
        <td background="/html5/eg_background.jpg">Second</td>
        <td>Row</td>
      </tr>
    </table>
    ```

    :::

- 在表格单元中排列内容

    ::: normal-demo 演示

    ```html
    <table width="400" border="1">
      <tr>
        <th align="left">消费项目....</th>
        <th align="right">一月</th>
        <th align="right">二月</th>
      </tr>
      <tr>
        <td align="left">衣服</td>
        <td align="right">$241.10</td>
        <td align="right">$50.20</td>
      </tr>
      <tr>
        <td align="left">化妆品</td>
        <td align="right">$30.00</td>
        <td align="right">$44.45</td>
      </tr>
      <tr>
        <td align="left">食物</td>
        <td align="right">$730.40</td>
        <td align="right">$650.00</td>
      </tr>
      <tr>
        <th align="left">总计</th>
        <th align="right">$1001.50</th>
        <th align="right">$744.65</th>
      </tr>
    </table>
    ```

    :::

    - **align**：规定表格相对周围元素的对齐方式。**不推荐使用**，被样式所代替
        - **left**：向左对齐
        - **center**：中间对齐
        - **right**：向右对齐

- 框架属性

    控制围绕表格的边框。

    ::: normal-demo 演示

    ```html
    <p><b>注释：</b>frame 属性无法在 Internet Explorer 中正确地显示。</p>

    <p>Table with frame="box":</p>
    <table frame="box">
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
    </table>

    <p>Table with frame="above":</p>
    <table frame="above">
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
    </table>

    <p>Table with frame="below":</p>
    <table frame="below">
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
    </table>

    <p>Table with frame="hsides":</p>
    <table frame="hsides">
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
    </table>

    <p>Table with frame="vsides":</p>
    <table frame="vsides">
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
    </table>
    ```

    :::

    - **frame**：规定外侧边框的哪个部分是可见的	
        - **void**：外侧所有边框不可见
        - **above**：上边框可见
        - **below**：下边框可见
        - **hsides**：上下边框可见
        - **lhs**：左边框可见
        - **rhs**：右边框可见
        - **vsides**：左右边框可见
        - **box**：外侧所有边框可见
        - **border**：外侧所有边框可见

