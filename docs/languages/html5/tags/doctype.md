---
title: <!DOCTYPE>
date: 2023-05-15
category: Frontend
tag:
    - HTML5
---

## 示例

```html
<!DOCTYPE html>
<html>

<head>
  <title>文档的标题</title>
</head>

<body>
  文档的内容......
</body>

</html>
```

所有浏览器都支持 `<!DOCTYPE>` 声明。

## 定义和用法

- `<!DOCTYPE>` 声明必须是 HTML 文档的第一行，位于 `<html>` 标签之前
- `<!DOCTYPE>` 声明 **不是 HTML 标签**，它是指示 web 浏览器关于页面使用哪个 **HTML 版本** 进行编写的指令
- `<!DOCTYPE>` 声明 **没有** 结束标签
- `<!DOCTYPE>` 声明对 **大小写** 不敏感

在 HTML4.01 中，`<!DOCTYPE>` 声明引用 `DTD`，因为 HTML4.01 基于 `SGML`。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。

HTML5 不基于 SGML，所以不需要引用 DTD。

::: note
请始终向 HTML 文档添加 `<!DOCTYPE>` 声明，这样浏览器才能获知文档类型
:::

## 常用的 DOCTYPE 声明

### HTML5

```html
<!DOCTYPE html>
```

### HTML4.01

#### HTML4.01 Strict

该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如：font）。不允许框架集（Framesets）。

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

#### HTML4.01 Transitional

该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如：font）。不允许框架集（Framesets）。

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

#### HTML4.01 Frameset

该 DTD 等同于 HTML4.01 Transitional，但允许框架集内容。

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

### XHTML1.0

#### XHTML1.0 Strict

该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如：font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

#### XHTML1.0 Transitional

该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如：font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

#### XHTML1.0 Frameset

该 DTD 等同于 XHTML 1.0 Transitional，但允许框架集内容。

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```

#### XHTML1.1

该 DTD 等同于 XHTML 1.0 Strict，但允许添加模型（例如提供对东亚语系的 ruby 支持）。

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```

