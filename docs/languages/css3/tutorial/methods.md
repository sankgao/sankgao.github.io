---
title: 添加 CSS 方法
icon: method
date: 2023-05-15
category: Frontend
tag:
    - CSS3
---

当浏览器读到样式表时，它将根据样式表中的信息来格式化 HTML 文档。

有三种插入 CSS 样式表的方法：

- **外部 CSS**
- **内部 CSS**
- **行内 CSS**

## 外部 CSS

通过使用外部样式表，您只需修改一个文件即可改变整个网站的外观。

每张 HTML 页面必须在 `head` 部分的 `<link>` 元素内 **包含** 对外部样式表文件的引用。

**外部样式** 在 HTML 页面 `<head>` 部分内的 `<link>` 元素中进行定义。例如：

::: normal-demo 演示

```html
<head>
  <link rel="stylesheet" href="./mystyle.css" />
</head>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>
```

:::

- **\<link>**：标签定义文档与外部资源的关系
- **rel**：规定当前文档与被链接文档之间的关系
- **href**：规定被链接文档的位置

`mystyle.css` 文件是这样的：

```css
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
```

::: tip
外部样式表可以在任何文本编辑器中编写，并且必须以 `.css` 扩展名保存

外部 `.css` 文件不应包含任何 HTML 标签

请勿在 **属性值** 和 **单位** 之间添加空格（例如：`margin-left: 20px;`）。正确的写法是：（`margin-left: 20px;`）
:::

## 内部 CSS

如果一张 HTML 页面拥有 **唯一** 的样式，那么可以使用 **内部样式表。**

内部样式是在 `head` 部分的 `<style>` 元素中进行定义。

内部样式在 HTML 页面的 `<head>` 部分内的 `<style>` 元素中进行定义。例如：

::: normal-demo 演示

```html
<head>
  <style>
    body {
      background-color: linen;
    }
    
    h1 {
      color: maroon;
      margin-left: 40px;
    }
  </style>
</head>

<h1>这是一个标题</h1>
<p>这是一个段落。</p>
```

:::

## 行内 CSS

**行内样式**（也称内联样式）可用于为单个元素应用唯一的样式。

使用行内样式将 `style` 属性添加到相关元素。`style` 属性 **可包含** 任何 `CSS` 属性。

行内样式在相关元素的 `style` 属性中定义。例如：

::: normal-demo 演示

```html
<h1 style="color: blue; text-align: center;">这是标题</h1>
<p style="color: red;">这是一个段落。</p>
```

:::

::: warning
行内样式失去了样式表的许多优点（通过将内容与呈现混合在一起）。请谨慎使用此方法
:::

## 多个样式表

在不同样式表中为同一选择器（元素）定义了一些属性，则将使用最后读取的样式表中的值。

例如：

某个外部样式表为 `<h1>` 元素设定的如下样式：

```css
h1 {
  color: navy;
}
```

然后，某个内部样式表也为 `<h1>` 元素设置了如下样式：

```css
h1 {
  color: navy;
}
```

- 如果内部样式是在链接到外部样式表之后定义的，则应用 **内部样式**

    ::: normal-demo 演示

    ```html
    <head>
      <link rel="stylesheet" type="text/css" href="./mystyle.css" />
      <style>
        h1 {
          color: orange;
        }
      </style>
    </head>

    <h1>这是一个标题</h1>
    <p>本文档的样式是外部样式表和内部样式的组合。</p>
    ```

    :::

- 如果在链接到外部样式表之前定义了内部样式，则应用 **外部样式**

    ::: normal-demo 演示
    
    ```html
    <head>
      <style>
        h1 {
          color: orange;
        }
      </style>
      <link rel="stylesheet" type="text/css" href="./mystyle.css" />
    </head>
    
    <h1>这是一个标题</h1>
    <p>本文档的样式是外部样式表和内部样式的组合。</p>
    ```

    ```css
    body {
      background-color: lightblue;
    }
    
    h1 {
      color: navy;
      margin-left: 20px;
    }
    ```
    
    :::

## 层叠顺序

当为某个 HTML 元素指定了多个样式时，会使用哪种样式呢？

页面中的所有样式将按照以下规则 **层叠** 为新的 **虚拟** 样式表，其中优先级从上到下依次降低：

1. 行内样式（在 HTML 元素中）
2. 外部和内部样式表（在 head 部分）
3. 浏览器默认样式

行内样式具有最高优先级，并且将覆盖外部和内部样式以及浏览器默认样式。例如：

::: normal-demo 演示

```html
<link rel="stylesheet" type="text/css" href="./mystyle.css" />
<style>
  h1 {
    color: orange;
  }
</style>

<h1 style="color:red;">多重样式会层叠为一</h1>
<p>这个标题同时由行内 CSS、内部 CSS 或外部 CSS 设置。</p>
<p>请尝试通过删除样式来查看级联样式表的工作方式（尝试首先删除行内 CSS，然后是内部，最后是外部）。</p>
```

```css
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
```

:::

