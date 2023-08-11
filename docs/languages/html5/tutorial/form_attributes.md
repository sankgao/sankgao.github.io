---
title: 表单属性
icon: attributes
date: 2023-05-09
category: Frontend
tag:
    - HTML5
---

`<form>` 元素的不同属性。

## action 属性

`action` 属性定义提交表单时要执行的操作。

通常当用户单击 “提交” 按钮时，表单数据将发送到服务器上的文件中。

`<label>` 标签为 input 元素定义标注（标记）。例如：

::: normal-demo 演示

```html
<form action="https://www.w3school.com.cn/demo/html/action_page.php">
  <label for="fname">First name:</label><br />
  <input type="text" id="fname" name="fname" value="Bill" /><br />
  <label for="lname">Last name:</label><br />
  <input type="text" id="lname" name="lname" value="Gates" /><br /><br />
  <input type="submit" value="Submit" />
</form>
```

:::

::: note
如果省略 `action` 属性，则将 `action` 设置为当前页面

`for` 属性可把 `label` 元素绑定到另外一个元素。请把 `for` 属性的值设置为相关元素的 `id` 属性的值
:::

## Target 属性

`target` 属性规定提交表单后在何处显示响应。

`target` 属性可设置以下值，默认值为 `_self`。

|  值  |  描述  |
|  :----:  |  :----  |
|  _blank  |  响应显示在新窗口或选项卡中  |
|  _self  |  响应显示在当前窗口中  |
|  _parent  |  响应显示在父框架中  |
|  _top  |  响应显示在窗口的整个 body 中  |
|  framename  |  响应显示在命名的 iframe 中  |

例如：

::: normal-demo 演示

```html
<form action="https://www.w3school.com.cn/demo/html/action_page.php" target="_blank">
  <label for="fname">First name:</label><br />
  <input type="text" id="fname" name="fname" value="Bill" /><br />
  <label for="lname">Last name:</label><br />
  <input type="text" id="lname" name="lname" value="Gates" /><br /><br />
  <input type="submit" value="Submit" />
</form> 
```

:::

## method 属性

`method` 属性指定提交表单数据时要使用的 HTTP 方法。

表单数据可以作为 URL 变量（使用 `method="get"`）或作为 HTTP post 事务（使用 `method="post"`）发送。

提交表单数据时，默认的 HTTP 方法是 `GET`。

- 在提交表单数据时使用 `GET` 方法。例如：

    ::: normal-demo 演示

    ```html
    <form action="https://www.w3school.com.cn/demo/html/action_page.php" target="_blank" method="get">
      <label for="fname">First name:</label><br />
      <input type="text" id="fname" name="fname" value="Bill" /><br />
      <label for="lname">Last name:</label><br />
      <input type="text" id="lname" name="lname" value="Gates" /><br /><br />
      <input type="submit" value="Submit" />
    </form>
    ```

    :::

- 在提交表单数据时使用 `POST` 方法。例如：

    ::: normal-demo 演示

    ```html
    <form action="https://www.w3school.com.cn/demo/html/action_page.php" target="_blank" method="post">
      <label for="fname">First name:</label><br />
      <input type="text" id="fname" name="fname" value="Bill" /><br />
      <label for="lname">Last name:</label><br />
      <input type="text" id="lname" name="lname" value="Gates" /><br /><br />
      <input type="submit" value="Submit" />
    </form>
    ```

    :::

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

## autocomplete 属性

`autocomplete` 属性规定表单是否应打开自动完成功能。

启用自动完成功能后，浏览器会根据用户之前输入的值自动填写值。例如：

::: normal-demo 演示

```html
<form action="https://www.w3school.com.cn/demo/html/action_page.php" autocomplete="on">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" /><br /><br />
  <label for="email">Email:</label>
  <input type="text" id="email" name="email" /><br /><br />
  <input type="submit" />
</form>
```

:::

## novalidate 属性

`novalidate` 属性是一个布尔属性。

如果已设置，它规定提交时不应验证表单数据。例如：

::: normal-demo 演示

```html
<form action="https://www.w3school.com.cn/demo/html/action_page.php" novalidate>
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email" /><br /><br />
  <input type="submit" />
</form>
```

:::

::: note
HTML5 中在 `input` 元素中使用 `formnovalidate` 覆盖 `form` 元素的 `novalidate` 属性。例如：

`<input formnovalidate="formnovalidate" />`
:::

