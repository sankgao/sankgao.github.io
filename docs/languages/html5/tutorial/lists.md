---
title: 列表
icon: list
date: 2023-05-08
category: Frontend
tag:
    - HTML5
---

HTML 支持 **有序**、**无序** 和 **自定义** 列表

## 无序列表

无序列表是一个项目的列表，此列项目使用粗体圆点（典型的小黑圆圈）进行标记。

无序列表始于 `<ul>` 标签。每个列表项始于 `<li>`。列表还可以进行嵌套。

::: normal-demo 演示

```html
<ul>
  <li>Coffee</li>
  <li>Milk</li>
</ul>

<h4>一个嵌套列表：</h4>
<ul>
  <li>咖啡</li>
  <li>茶
    <ul>
      <li>红茶</li>
      <li>绿茶
        <ul>
          <li>中国茶</li>
          <li>非洲茶</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>牛奶</li>
</ul>
```

:::

- **ul**：定义无序列表
- **li**：定义列表项目

## 有序列表

同样，有序列表也是一列项目，列表项目使用数字进行标记。

有序列表始于 `<ol>` 标签。每个列表项始于 `<li>` 标签。

::: normal-demo 演示

```html
<ol>
  <li>咖啡</li>
  <li>牛奶</li>
  <li>茶</li>
</ol>

<ol start="50">
  <li>咖啡</li>
  <li>牛奶</li>
  <li>茶</li>
</ol>
```

:::

- **ol**：定义有序列表
- **start**：规定有序列表的起始值

## 自定义列表

自定义列表不仅仅是一列项目，而是项目及其注释的组合。

自定义列表以 `<dl>` 标签开始。每个自定义列表项以 `<dt>` 开始。每个自定义列表项的定义以 `<dd>` 开始。

::: normal-demo 演示

```html
<dl>
  <dt>计算机</dt>
  <dd>用来计算的仪器 ... ...</dd>
  <dt>显示器</dt>
  <dd>以视觉方式显示信息的装置 ... ...</dd>
</dl>
```

:::

- **dl**：定义自定义列表
- **dt**：定义列表中的项目
- **dd**：在定义列表中定义条目的定义部分

## 列表实例

- 不同类型的无序列表

    ::: normal-demo 演示

    ```html
    <h4>Disc 项目符号列表：</h4>
    <ul type="disc">
      <li>苹果</li>
      <li>香蕉</li>
      <li>柠檬</li>
      <li>桔子</li>
    </ul>

    <h4>Circle 项目符号列表：</h4>
    <ul type="circle">
      <li>苹果</li>
      <li>香蕉</li>
      <li>柠檬</li>
      <li>桔子</li>
    </ul>

    <h4>Square 项目符号列表：</h4>
    <ul type="square">
      <li>苹果</li>
      <li>香蕉</li>
      <li>柠檬</li>
      <li>桔子</li>
    </ul>
    ```

    :::

    - **type**：规定列表的项目符号的类型。**不推荐使用**，被样式所代替
        - **disc**：黑色圆形
        - **circle**：白色圆形
        - **square**：黑色正方形

- 不同类型的有序列表

    ::: normal-demo 演示

    ```html
    <h4>数字列表：</h4>
    <ol>
      <li>苹果</li>
      <li>香蕉</li>
      <li>柠檬</li>
      <li>桔子</li>
    </ol>
    ​
    <h4>字母列表：</h4>
    <ol type="A">
      <li>苹果</li>
      <li>香蕉</li>
      <li>柠檬</li>
      <li>桔子</li>
    </ol>
    ​
    <h4>小写字母列表：</h4>
    <ol type="a">
      <li>苹果</li>
      <li>香蕉</li>
      <li>柠檬</li>
      <li>桔子</li>
    </ol>
    ​
    <h4>罗马字母列表：</h4>
    <ol type="I">
      <li>苹果</li>
      <li>香蕉</li>
      <li>柠檬</li>
      <li>桔子</li>
    </ol>
    ​
    <h4>小写罗马字母列表：</h4>
    <ol type="i">
      <li>苹果</li>
      <li>香蕉</li>
      <li>柠檬</li>
      <li>桔子</li>
    </ol>
    ```

    :::

    - **type**：规定在列表中使用的标记类型
        - **1**：数字列表
        - **A**：大写字母列表
        - **a**：小写字母列表
        - **I**：大写罗马字母列表
        - **i**：小写罗马字母列表

