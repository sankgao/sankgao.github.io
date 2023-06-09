---
title: 链接
icon: link
date: 2023-05-07
category: Frontend
tag:
    - HTML5
---

HTML 使用 **超级链接** 与网络上的另一个文档相连。

几乎可以在所有的网页中找到链接。点击链接可以从一张页面 **跳转** 到另一张页面。

## HTML 超链接（链接）

超链接可以是 **一个字**、**一个词** 或者 **一组词**，也可以是 **一幅图像**，您可以点击这些内容来跳转到新的文档或者当前文档中的某个部分。

当您把鼠标指针移动到网页中的某个链接上时，箭头会变为一只小手。

通过使用 `<a>` 标签在 HTML 中创建链接。有两种使用 `<a>` 标签的方式：

1. 通过使用 `href` 属性：创建指向另一个文档的链接
2. 通过使用 `name` 属性：创建文档内的书签

## HTML 链接语法

链接的 HTML 代码很简单。例如：

```html
<a href="url">Link text</a>
```

- **href**：规定链接的目标

开始标签和结束标签 **之间的文字** 被作为超级链接来显示。

::: normal-demo 演示

```html
<a href="https://www.w3school.com.cn/">Visit W3School</a>

<p>点击这个超链接会把用户带到 W3School 的首页。</p>
```

:::

::: tip
**链接文本** 不必一定是文本。图片或其他 HTML 元素都可以成为链接
:::

## HTML 链接 target 属性

使用 `target` 属性，您可以定义被链接的文档在何处显示。默认在 **当前窗口** 打开文档。

::: normal-demo 演示

```html
<a href="https://www.w3school.com.cn/" target="_blank">Visit Baidu!</a>

<p>在新窗口打开文档。</p>
```

:::

- **target**：规定在何处打开链接文档
    - **_blank**：在 **新窗口** 中打开链接文档
    - **_parent**：当前浏览环境的 **父级浏览** 上下文。如果没有父级框架，行为与 `_self` 相同
    - **_self**：在 **当前窗口** 中打开链接文档（默认）
    - **_top**：**最顶级** 的浏览上下文（当前浏览上下文中最 “高” 的祖先）。如果没有祖先，行为与 `_self` 相同

## HTML 链接 name 属性

`name` 属性规定锚（anchor）的名称。

您可以使用 `name` 属性创建 HTML 页面中的书签。

书签不会以任何特殊方式显示，它对读者是不可见的。

当使用命名锚（named anchors）时，可以创建直接跳至该命名锚（比如页面中某个小节）的链接，这样使用者就无需不停地滚动页面来寻找他们需要的信息了。

**语法：**

```html
<a name="label">锚（显示在页面上的文本）</a>
```

- 首先，在 HTML 文档中对锚进行命名（创建一个书签）：

    ```html
    <a name="tips">基本的注意事项 - 有用的提示</a>
    ```

- 然后，在同一个文档中创建指向该锚的链接：

    ```html
    <a href="#tips">有用的提示</a>
    ```

    您也可以在其他页面中创建指向该锚的链接：

    ```html
    <a href="https://www.w3school.com.cn/html/html_links.asp#tips">有用的提示</a>
    ```

在上面的代码中，将 `#` 符号和锚名称添加到 URL 的末端，就可以直接链接到 `tips` 这个命名锚了。

::: normal-demo 演示

```html
<p>
  <a href="#C7">查看 Chapter 7。</a>
</p>

<h2>Chapter 1</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 2</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 3</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 4</a></h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 5</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 6</h2>
<p>This chapter explains ba bla bla</p>

<h2><a name="C7">Chapter 7</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 8</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 9</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 10</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 11</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 12</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 13</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 14</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 15</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 16</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 17</h2>
<p>This chapter explains ba bla bla</p>
```

:::

::: tip
锚的名称可以是任何您喜欢的名字

您可以使用 `id` 属性来替代 `name` 属性，命名锚同样有效
:::

## 链接实例

- 将图像作为链接

    使用图像作为链接。

    ::: normal-demo 演示

    ```html
    <p>
      您也可以使用图像来作链接：
      <a href="https://www.w3school.com.cn/">
        <img src="/background.png" width="104" height="42" />
      </a>
    </p>
    ```

    :::

- 创建电子邮件链接

    链接到一个邮件。

    ::: normal-demo 演示

    ```html
    <p>
      这是邮件链接：
      <a href="mailto:someone@microsoft.com;sometwo@microsoft.com?cc=somethree@microsoft.com&bcc=somefour@microsoft.com&subject=this%20is%20title&body=this%20is%20body">发送邮件</a>
    </p>
    ```

    :::

    - **mailto**：指定收件人（多人中间分号 `;` 间隔）
    - **cc**：指定抄送人员（多人中间分号间隔）
    - **bcc**：指定密送人员（多人中间分号间隔）
    - **subject**：指定邮件主题
    - **body**：指定邮件内容
    - **?**：在 `mailto` 紧贴着的区块写完之后加上问号，就可以使用 `key=value` 的方式来写其它属性
    - **&**：对于其他属性来说，第一个必须和 `mailto` 区块之间使用 `?` 进行连接。而从第二个开始，需要指定其他属性的，必须使用 `&` 符号分割
    - **%20**：来替换单词之间的空格，这样浏览器就可以正确地显示文本了

