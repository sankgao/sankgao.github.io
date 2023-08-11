---
title: <a>
date: 2023-05-15
category: Frontend
tag:
    - HTML5
---

## 示例

指向 w3school 的超链接：

::: normal-demo 演示

```html
<a href="http://www.w3school.com.cn">W3School</a>
```

:::

所有浏览器都支持 `<a>` 标签。

## 定义和用法

- `<a>` 标签定义超链接，用于从一张页面链接到另一张页面
- `<a>` 元素最重要的属性是 `href` 属性，它指示链接的目标
- 如果不使用 `href` 属性，则不可以使用如下属性：`download`、`hreflang`、`media`、`rel`、`target` 以及 `type` 属性
- 被链接页面通常显示在 **当前浏览器窗口** 中，除非您规定了另一个目标（target 属性）

::: tip 什么是超文本
超文本的基本特征就是可以 **超链接文档**。你可以指向其他位置，该位置可以在当前的文档中、局域网中的其他文档，也可以在因特网上的任何位置的文档中。这些文档组成了一个杂乱的信息网。目标文档通常与其来源有某些关联，并且丰富了来源，来源中的链接元素则将这种关系传递给浏览者

**超链接**（hyper text），或者按照标准叫法称为 **锚**（anchor），是使用 `<a>` 标签标记的，可以用两种方式表示。锚的一种类型是在文档中创建一个热点，当用户激活或选中（通常是使用鼠标）这个热点时，会导致浏览器进行链接。浏览器会自动加载并显示同一文档或其他文档中的某个部分，或触发某些与因特网服务相关的操作，例如：发送电子邮件或下载特殊文件等；锚的另一种类型会在文档中创建一个标记，该标记可以被超链接引用

锚的这两种类型都使用同样的标签，也许这就是它们拥有同样的名称的原因。如果将它们区分开，把 **提供热点** 和 **超链接地址** 的锚看作 “链接”，而用于 **标记文档的目标部分** 的锚称为 “锚”，那么您将更容易理解这两种类型的锚
:::

## 属性

|  属性  |  值  |  描述  |
|  :----:  |  :----  |  :----  |
|  download  |  filename  |  规定被下载的超链接目标。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  charset  |  char_encoding  |  规定被链接文档的字符集。:warning: <span style="color: red">HTML5 中不支持</span>  |
|  coords  |  coordinates  |  规定链接的坐标。:warning: <span style="color: red">HTML5 中不支持</span>  |
|  href  |  URL  |  规定链接指向的页面的 URL  |
|  hreflang  |  language_code  |  规定被链接文档的语言  |
|  media  |  media_query  |  规定被链接文档是为何种媒介/设备优化的。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  referrerpolicy  |  no-referrer<br />no-referrer-when-downgrade<br />origin<br />origin-when-cross-origin<br />same-origin<br />strict-origin-when-cross-origin<br />unsafe-url  |  规定用户单击超链接时要发送哪些引荐来源信息。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  ping  |  list_of_URLs  |  规定以空格分隔的 URL 列表，当点击链接时，浏览器将发送带有正文 ping 的 post 请求（在后台），通常用于跟踪。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  name  |  section_name  |  规定锚的名称。:warning: <span style="color: red">HTML5 中不支持</span>  |
|  rel  |  text  |  规定当前文档与被链接文档之间的关系  |
|  rev  |  text  |  规定被链接文档与当前文档之间的关系。:warning: <span style="color: red">HTML5 中不支持</span>  |
|  shape  |  default<br />rect<br />circle<br />poly  |  规定链接的形状。:warning: <span style="color: red">HTML5 中不支持</span>  |
|  target  |  _blank<br />_parent<br />_self<br />_to  |  规定在何处打开链接文档  |
|  type  |  MIME type  |  规定被链接文档的的 MIME 类型。:warning: <span style="color: red">HTML5 中添加的属性</span>  |

## 全局属性

`<a>` 标签 **支持** HTML 中的 [全局属性](../references/global_attribute.md)。

## 事件属性

`<a>` 标签 **支持** HTML 中的 [事件属性](../references/global_attribute.md)。

## 实例

- 将图像作为链接

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

- 链接到同一个页面的不同位置

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

- 在新的浏览器窗口打开链接

    将链接的 `target` 属性设置为 `_blank`

    ::: normal-demo 演示

    ```html
    <a href="http://www.w3school.com.cn/" target="_blank">Visit W3School!</a>
    ```

    :::

- 创建电子邮件链接

    ::: normal-demo 演示

    ```html
    <p>
      这是邮件链接：
      <a href="mailto:someone@microsoft.com;sometwo@microsoft.com?cc=somethree@microsoft.com&bcc=somefour@microsoft.com&subject=this%20is%20title&body=this%20is%20body">发送邮件</a>
    </p>
    ```

    :::

