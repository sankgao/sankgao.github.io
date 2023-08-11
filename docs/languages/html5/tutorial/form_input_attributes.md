---
title: 输入属性
icon: attributes
date: 2023-05-10
category: Frontend
tag:
    - HTML5
---

`<input>` 元素的不同属性。

## value

`value` 属性规定输入字段的初始值。例如：

::: normal-demo 演示

```html
<form action="">
  First name:<br />
  <input type="text" name="firstname" value="Bill" />
  <br />
  Last name:<br />
  <input type="text" name="lastname" />
</form>
```

:::

## readonly

`readonly` 属性规定输入字段为只读（不能修改）。例如：

::: normal-demo 演示

```html
<form action="">
  First name:<br />
  <input type="text" name="firstname" value="Bill" readonly="readonly" />
  <br />
  Last name:<br />
  <input type="text" name="lastname" />
</form>
```

:::

## disabled

`disabled` 属性规定输入字段是禁用的。

被禁用的元素是不可用和不可点击的，且被禁用的元素不会被提交。例如：

::: normal-demo 演示

```html
<form action="https://www.w3school.com.cn/demo/html/action_page.php">
  First name:<br />
  <input type="text" name="firstname" value="Bill" disabled="disabled" />
  <br />
  Last name:<br />
  <input type="text" name="lastname" />
  <br /><br />
  <input type="submit" />
</form>
```

:::

## size

`size` 属性规定输入字段框的尺寸（以字符计）。例如：

::: normal-demo 演示

```html
<form action="">
  First name:<br />
  <input type="text" name="firstname" value="Bill" size="40" />
  <br />
  Last name:<br />
  <input type="text" name="lastname" />
</form>
```

:::

## maxlength

`maxlength` 属性规定输入字段允许的最大长度。例如：

::: normal-demo 演示

```html
<form action="">
  First name:<br />
  <input type="text" name="firstname" maxlength="10" />
  <br />
  Last name:<br />
  <input type="text" name="lastname" />
</form>
```

:::

::: tip
该属性不会提供任何反馈。如果需要提醒用户，则必须编写 `JavaScript` 代码

输入限制并非万无一失。`JavaScript` 提供了很多方法来增加非法输入。如需安全地限制输入，则接受者（服务器）必须同时对限制进行检查
:::

## HTML5 新增的输入属性

- **autocomplete**：属性规定表单或输入字段是否会基于用户之前的输入值自动填写值
- **autofocus**：属性规定当页面加载时 `<input>` 元素应该自动获得焦点
- **form**：属性规定 `<input>` 元素所属的一个或多个表单
- **formaction**：属性规定当提交表单时处理该输入控件的文件的 URL
- **formenctype**：属性规定当把表单数据（form-data）提交至服务器时如何对其进行编码（仅针对 `method="post"` 的表单）
- **formmethod**：属性定义用以向 action URL 发送表单数据（form-data）的 HTTP 方法
- **formnovalidate**：属性规定在提交表单时不对 `<input>` 元素进行验证
- **formtarget**：属性规定的名称或关键词指示提交表单后在何处显示接收到的响应
- **height 和 width**：属性规定 `<input>` 元素的高度和宽度
- **list**：属性引用的 `<datalist>` 元素中包含了 `<input>` 元素的预定义选项
- **min 和 max**：属性规定 `<input>` 元素的最小值和最大值
- **multiple**：属性规定允许用户在 `<input>` 元素中输入一个以上的值
- **pattern (regexp)**：属性规定用于检查 `<input>` 元素值的正则表达式
- **placeholder**：属性规定用以描述输入字段预期值的提示（样本值或有关格式的简短描述）
- **required**：属性规定在提交表单之前必须填写输入字段
- **step**：属性规定 `<input>` 元素的合法数字间隔

并为 `<form>` 增加属性：

- **autocomplete**：属性规定表单或输入字段是否会基于用户之前的输入值自动填写值
- **novalidate**：规定在提交表单时不对表单数据进行验证

