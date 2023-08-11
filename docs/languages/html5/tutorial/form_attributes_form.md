---
title: Input 表单属性
icon: attributes
date: 2023-05-10
category: Frontend
tag:
    - HTML5
---

`<input>` 元素的不同 `form*` 属性。

## form

`input` 的 `form` 属性规定 `<input>` 元素所属的表单。

此属性的值必须等于它所属的 `<form>` 元素的 `id` 属性。例如：

::: normal-demo 演示

```html
<p>form 属性指定输入元素所属的表单。</p>

<form action="https://www.w3school.com.cn/demo/html/action_page.php" id="form1">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" /><br /><br />
  <input type="submit" value="提交" />
</form>

<p>下面的 "Last name" 字段在 form 元素之外，但仍是表单的一部分。</p>

<label for="lname">Last name:</label>
<input type="text" id="lname" name="lname" form="form1" />
```

:::

## formaction

`input` 的 `formaction` 属性规定当提交表单时，对输入（数据）进行处理的文件的 URL。

::: tip
该属性会覆盖 `<form>` 元素的 `action` 属性
:::

`formaction` 属性适用于以下输入类型：`submit` 和 `image`。例如：

::: normal-demo 演示

```html
<p>formaction 属性规定提交表单时对输入进行处理的的文件的 URL。</p>

<form action="https://www.w3school.com.cn/demo/html/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" /><br /><br />
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" /><br /><br />
  <input type="submit" value="提交" />
  <input type="submit" formaction="https://www.w3school.com.cn/demo/html/action_page_2.php" value="以管理员提交" />
</form>
```

:::

## formenctype

`input` 的 `formenctype` 属性指定提交时应如何编码表单数据（仅适用于 `method="post"` 的表单）。

::: tip
此属性将覆盖 `<form>` 元素的 `enctype` 属性
:::

`formenctype` 属性适用于以下输入类型：`submit` 和 `image`。例如：

::: normal-demo 演示

```html
<p>formenctype 属性规定提交表单数据时应如何编码。</p>

<form action="https://www.w3school.com.cn/demo/html/action_page.php" method="post">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" /><br /><br />
  <input type="submit" value="提交" />
  <input type="submit" formenctype="multipart/form-data" value="以 Multipart/form-data 提交" />
</form>
```

:::

## formmethod

`input` 的 `formmethod` 属性定义了将表单数据发送到 action URL 的 HTTP 方法。

::: tip
此属性将覆盖 `<form>` 元素的 `method` 属性
:::

`formmethod` 属性适用于以下输入类型：`submit` 和 `image`。

表单数据可以作为 URL 变量（`method="get"`）或作为 HTTP post 事务（`method="post"`）发送。

**关于 GET 的注意事项：**

- 以 **名称/值** 对的形式将表单数据追加到 `URL`
- 永远不要使用 GET 发送敏感数据！（提交的表单数据在 URL 中 **可见**！）
- URL 的长度受到限制（2048 个字符）
- 对于用户希望将结果添加为书签的表单提交很有用
- GET 适用于非安全数据。例如：Google 中的查询字符串

**关于 POST 的注意事项：**

- 将表单数据附加在 HTTP 请求的正文中（提交的表单数据在 URL 中 **不可见**！）
- POST 没有大小限制，可用于发送大量数据
- 带有 POST 的表单提交无法添加书签

::: warning
如果表单数据包含敏感信息或个人信息，请务必使用 POST
:::

例如：

::: normal-demo 演示

```html
<p>formmethod 属性定义了将表单数据发送到 URL 的两个 HTTP 方法。</p>

<form action="https://www.w3school.com.cn/demo/html/action_page.php" method="get" target="_blank">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" /><br /><br />
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" /><br /><br />
  <input type="submit" value="使用 GET 提交" />
  <input type="submit" formmethod="post" value="使用 POST 提交" />
</form>
```

:::

## formtarget

`input` 的 `formtarget` 属性指定一个名称或关键字，该名称或关键字规定在提交表单后在何处显示收到的响应。

::: tip
此属性将覆盖 `<form>` 元素的 `target` 属性
:::

`formtarget` 属性适用于以下输入类型：`submit` 和 `image`。例如：

::: normal-demo 演示

```html
<p>formtarget 属性指定一个名称或关键字，该名称或关键字规定在提交表单后在何处显示收到的响应。</p>

<form action="https://www.w3school.com.cn/demo/html/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" /><br /><br />
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" /><br /><br />
  <input type="submit" value="input" />
  <input type="submit" formtarget="_blank" value="提交到新窗口/标签页" />
</form>
```

:::

## formnovalidate

`input` 的 `formnovalidate` 属性规定提交时不应验证 `<input>` 元素。

::: tip
此属性将覆盖 `<form>` 元素的 `novalidate` 属性
:::

`formnovalidate` 属性适用于以下输入类型：`submit`。例如：

::: normal-demo 演示

```html
<p>formnovalidate 属性提交时不应验证 input 元素。</p>

<form action="https://www.w3school.com.cn/demo/html/action_page.php">
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email" required="required" /><br /><br />
  <input type="submit" value="提交" />
  <input type="submit" formnovalidate="formnovalidate" value="不做验证的提交" />
</form>

<p><b>注释：</b>Safari 10 或更早的版本不支持 input 标签的 formnovalidate 属性。</p>
```

:::

## novalidate

`novalidate` 属性是 `<form>` 属性。

如果已设置，`novalidate` 属性规定在提交时不应验证所有表单数据。例如：

::: normal-demo 演示

```html
<p>novalidate 属性规定提交表单时不应验证表单数据。</p>

<form action="https://www.w3school.com.cn/demo/html/action_page.php" novalidate="novalidate">
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email" required="required" /><br /><br />
  <input type="submit" value="提交" />
</form>

<p><b>注释：</b>Safari 10 或更早的版本不支持 form 标签的 novalidate 属性。</p>
```

:::

