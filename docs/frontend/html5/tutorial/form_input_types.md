---
title: 输入类型
icon: classes
date: 2023-05-09
category: Frontend
tag:
    - HTML5
---

`<input>` 元素的不同类型。

## text

`<input type="text">` 定义供文本输入的单行输入字段。例如：

::: normal-demo 演示

```html
<form action="https://www.w3school.com.cn/demo/html/action_page.php">
  First name:<br />
  <input type="text" name="firstname" />
  <br />
  Last name:<br />
  <input type="text" name="lastname" />
  <br /><br />
  <input type="submit" />
</form>
```

:::

## password

`<input type="password">` 定义密码字段。例如：

::: normal-demo 演示

```html
<form action="">
  User name:<br />
  <input type="text" name="userid" />
  <br />
  User password:<br />
  <input type="password" name="psw" />
</form>

<p>密码字段中的字符被掩码（显示为星号或圆点）。</p>
```

:::

## submit

`<input type="submit">` 定义提交表单数据至表单处理程序的按钮。

表单处理程序（form-handler）通常是包含处理输入数据的脚本的服务器页面。例如：

::: normal-demo 演示

```html
<form action="https://www.w3school.com.cn/demo/html/action_page.php">
  First name:<br />
  <input type="text" name="firstname" value="Mickey" />
  <br />
  Last name:<br />
  <input type="text" name="lastname" value="Mouse" />
  <br /><br />
  <input type="submit" value="Submit" />
</form>
```

:::

## radio

`<input type="radio">` 定义单选按钮。

单选按钮允许用户仅从有限的选项中选择一个。例如：

::: normal-demo 演示

```html
<form action="https://www.w3school.com.cn/demo/html/action_page.php">
  <input type="radio" name="sex" value="male" checked />Male
  <br />
  <input type="radio" name="sex" value="female" />Female
  <br /><br />
  <input type="submit" />
</form>
```

:::

## checkbox

`<input type="checkbox">` 定义复选框。

复选框允许用户在有限数量的选项中选择零个或多个选项。例如：

::: normal-demo 演示

```html
<form action="https://www.w3school.com.cn/demo/html/action_page.php">
  <input type="checkbox" name="vehicle" value="Bike" />I have a bike
  <br />
  <input type="checkbox" name="vehicle" value="Car" />I have a car
  <br /><br />
  <input type="submit" />
</form>
```

:::

## button

`<input type="button">` 定义按钮。例如：

::: normal-demo 演示

```html
<button type="button" onclick="alert('Hello World!')">点击我！</button>
```

:::

## HTML5 新增加的输入类型

- **color**：用于应该包含颜色的输入字段
- **date**：用于应该包含日期的输入字段
- **datetime**：允许用户选择日期和时间（有时区）
- **datetime-local**：允许用户选择日期和时间（无时区）
- **email**：用于应该包含电子邮件地址的输入字段
- **month**：允许用户选择月份和年份
- **number**：用于应该包含数字值的输入字段
- **range**：用于应该包含一定范围内的值的输入字段
- **search**：用于搜索字段（搜索字段的表现类似常规文本字段）
- **tel**：用于应该包含电话号码的输入字段
- **time**：允许用户选择时间（无时区）
- **url**：用于应该包含 URL 地址的输入字段
- **week**：允许用户选择周和年

::: note
老式 web 浏览器不支持的输入类型，会被视为输入类型 `text`
:::

