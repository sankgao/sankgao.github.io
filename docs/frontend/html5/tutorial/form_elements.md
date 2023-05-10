---
title: 表单元素
icon: elements
date: 2023-05-09
category: Frontend
tag:
    - HTML5
---

`<form>` 的不同元素。

## \<input> 元素

最重要的表单元素是 `<input>` 元素。

`<input>` 元素根据不同的 `type` 属性，可以变化为多种形态。

## \<select> 元素

`<select>` 元素定义下拉列表。例如：

::: normal-demo 演示

```html
<form action="https://www.w3school.com.cn/demo/html/action_page.php">
  <select name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab" selected="selected">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
  <br /><br />
  <input type="submit" />
</form>
```

:::

- **\<select>**：元素定义下拉列表

    - **name**：属性规定下拉列表的名称

- **\<option>**：元素定义待选择的选项

    - **value**：属性定义送往服务器的选项值
    - **selected**：属性定义预定义选项

## \<textarea> 元素

`<textarea>` 元素定义多行输入字段（文本域）。例如：

::: normal-demo 演示

```html
<form action="https://www.w3school.com.cn/demo/html/action_page.php">
  <textarea name="message" rows="10" cols="30">The cat was playing in the garden.</textarea>
  <br /><br />
  <input type="submit" />
</form>
```

:::

- **name**：规定文本区的名称
- **rows**：规定文本区内的可见行数
- **cols**：规定文本区内的可见宽度

## \<button> 元素

`<button>` 元素定义可点击的按钮。例如：

::: normal-demo 演示

```html
<button type="button" onclick="alert('Hello World!')">点击我！</button>
```

:::

## HTML5 新增加表单元素

- \<datalist> 元素

    `<datalist>` 元素为 `<input>` 元素规定预定义选项列表。

    用户会在他们输入数据时看到预定义选项的下拉列表。

    `<input>` 元素的 `list` 属性必须引用 `<datalist>` 元素的 `id` 属性。例如：

    ::: normal-demo 演示

    ```html
    <form action="https://www.w3school.com.cn/demo/html/action_page.php">

      <input list="browsers" name="browser">
      <datalist id="browsers">
        <option value="Internet Explorer">
        <option value="Firefox">
        <option value="Chrome">
        <option value="Opera">
        <option value="Safari">
      </datalist>
      <input type="submit" />
    </form>
    ```

    :::

- \<keygen> 元素
    `<keygen>` 标签规定用于表单的密钥对生成器字段。

    当提交表单时，私钥存储在本地，公钥发送到服务器。例如：

    ::: normal-demo 演示

    ```html
    <form action="https://www.w3school.com.cn/demo/html/action_page.php" method="get">
      用户名：<input type="text" name="usr_name" />
      加密：<keygen name="security" keytype="rsa" />
      <input type="submit" />
    </form>
    ```

    :::

- \<output> 元素

    `<output>` 标签定义不同类型的输出。比如：执行计算然后在 `<output>` 元素中显示结果。

    ::: normal-demo 演示

    ```html
    <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
      <input type="range" id="a" value="50" />100
      +<input type="number" id="b" value="50" />
      =<output name="x" for="a b"></output>
    </form>
    ```

    :::

