---
title: 表单
icon: form
date: 2023-05-09
category: Frontend
tag:
    - HTML5
---

HTML 表单用于搜集不同类型的用户输入。

## \<form> 元素

HTML 表单用于收集用户输入。`<form>` 元素定义 HTML 表单

## HTML 表单包含表单元素

表单元素指的是不同类型的 **input 元素**、**复选框**、**单选按钮**、**提交按钮** 等等。

### \<input> 元素

`<input>` 元素是最重要的表单元素。`<input>` 元素有很多形态，根据不同的 type 属性。

## 文本输入

`<input type="text">` 定义用于文本输入的单行输入字段。例如：

::: normal-demo 演示

```html
<form>
  First name:<br />
  <input type="text" name="firstname">
  <br />
  Last name:<br />
  <input type="text" name="lastname">
</form>
```

:::

- **type**：规定 input 元素的类型。`type` 属性常用类型：

    - **text**：定义常规文本输入
    - **radio**：定义单选按钮输入（选择多个选择之一）
    - **submit**：定义提交按钮（提交表单）

- **name**：定义 input 元素的名称
- **checked**：规定此 input 元素首次加载时应当被选中

::: tip
表单本身并不可见。还要注意文本字段的 **默认宽度** 是 20 个字符
:::

## 单选按钮输入

`<input type="radio">` 定义单选按钮，允许用户在有限数量的选项中选择其中之一。例如：

::: normal-demo 演示

```html
<form>
  <input type="radio" name="sex" value="male" checked>Male
  <br />
  <input type="radio" name="sex" value="female">Female
</form>
```

:::

- **value**：规定 input 元素的值

## 提交按钮

`<input type="submit">` 定义用于向表单处理程序（form-handler）提交表单的按钮。

`action` 属性规定当提交表单时向何处发送表单数据。

表单处理程序通常是包含用来处理输入数据的脚本的服务器页面。例如：

::: normal-demo 演示

```html
<form action="https://www.w3school.com.cn/demo/html/action_page.php">
  First name:<br>
  <input type="text" name="firstname" value="Mickey">
  <br>
  Last name:<br>
  <input type="text" name="lastname" value="Mouse">
  <br><br>
  <input type="submit" value="Submit">
</form>

<p>如果您点击提交，表单数据会被发送到名为 demo_form.asp 的页面。</p>
```

:::

