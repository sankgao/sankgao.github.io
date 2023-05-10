---
title: 拖放
icon: drag_and_drop
date: 2023-05-10
category: Frontend
tag:
    - HTML5
---

## 拖放

拖放（Drag 和 Drop）是很常见的特性。指您抓取某物并拖入不同的位置。

拖放是 HTML5 标准的组成部分，任何元素都是可拖放的。例如：

::: normal-demo 演示

```html
<p>请把 W3School 的图片拖放到矩形中：</p>

<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<br />
<img id="drag1" src="/html5/eg_dragdrop_w3school.gif" draggable="true" ondragstart="drag(event)" />
```

```css
#div1 {
  width: 198px;
  height: 66px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
```

```js
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(data));
}
```

:::

## 把元素设置为可拖放

首先，为了把一个元素设置为可拖放，请把 `draggable` 属性设置为 `true`。

```html
<img draggable="true" />
```

- **draggable**：规定元素是否可拖动

## 拖放的内容

然后，规定当元素被拖动时发生的事情。

在上面的例子中，`ondragstart` 属性调用了一个 `drag(event)` 函数，规定拖动什么数据。

```html
<img ondragstart="drag(event)" />
```

- **ondragstart**：在拖动操作开端运行的脚本

`dataTransfer.setData()` 方法设置被拖动数据的数据类型和值。

```js
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
```

在本例中，数据类型是 `"text"`，而值是这个可拖动元素的 id（`"drag1"`）。

## 拖到何处

`ondragover` 事件规定被拖动的数据能够被放置到何处。

```html
<div ondragover="allowDrop(event)"></div>
```

- **ondragover**：当元素在有效拖放目标上正在被拖动时运行的脚本

默认地，数据或元素无法被放置到其他元素中。为了实现拖放，必须阻止元素的这种默认的处理方式。

这个任务由 `ondragover` 事件的 `event.preventDefault()` 方法完成：

```js
function allowDrop(ev) {
  ev.preventDefault();
}
```

## 进行放置

当放开被拖数据时，会发生 `drop` 事件。

```html
<div ondrop="drop(event)"></div>
```

- **ondrop**：当被拖元素正在被拖放时运行的脚本。

在上面的例子中，`ondrop` 属性调用了一个函数 `drop(event)`。

```js
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
```

- 调用 `preventDefault()` 来阻止数据的浏览器默认处理方式（drop 事件的默认行为是以链接形式打开）
- 通过 `dataTransfer.getData()` 方法获得被拖的数据。该方法将返回在 `setData()` 方法中设置为相同类型的任何数据
- 被拖数据是被拖元素的 id（`"drag1"`）
- 把被拖元素追加到放置元素中

## 拖放实例

在两个 `<div>` 元素之间来回拖放图像。例如：

::: normal-demo 演示

```html
<p>来回拖放图像。</p>

<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img id="drag1" src="/html5/eg_dragdrop_w3school.gif" draggable="true" ondragstart="drag(event)" />
</div>
<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
```

```css
#div1,
#div2 {
  float: left;
  width: 198px;
  height: 66px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}

```

```js
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(data));
}
```

:::

