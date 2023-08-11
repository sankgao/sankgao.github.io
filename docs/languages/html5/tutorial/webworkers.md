---
title: Web Workers
icon: backstage
date: 2023-05-11
category: Frontend
tag:
    - HTML5
---

`Web worker` 是运行在后台的 JavaScript，不会影响页面的性能。

## 什么是 Web Worker

当在 HTML 页面中执行脚本时，页面是不可响应的，直到脚本已完成。

`Web worker` 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情。例如：点击、选取内容等等。而此时 web worker 运行在后台。

例如：创建一个简单的 web worker 在后台计数。

```html
<p>计数: <output id="result"></output></p>
<button onclick="startWorker()">开始 Worker</button>
<button onclick="stopWorker()">停止 Worker</button>

<form action="">
  First name:<br />
  <input type="text" name="firstname" value="Bill" />
  <br />
  Last name:<br />
  <input type="text" name="lastname" />
</form>

<script>
  var w;
  
  function startWorker() {
    if (typeof Worker !== "undefined") {
      if (typeof w == "undefined") {
        w = new Worker("./demo_workers.js");
      }
      w.onmessage = function (event) {
        document.getElementById("result").innerHTML = event.data;
      };
    } else {
      document.getElementById("result").innerHTML =
        "您的浏览器不支持 Web Worker";
    }
  }
  
  function stopWorker() {
    w.terminate();
  }
</script>
```

## 检测 Web Worker 支持

在创建 web worker 之前，请检测用户浏览器是否支持。例如：

```js
if (typeof(Worker) !== "undefined") {
    // 是的！支持 Web worker！
    // 一些代码.....
} else {
    // 抱歉！不支持 Web Worker！
}
```

## 创建 Web Worker 文件

在一个外部 JavaScript 文件中创建 web worker。

在此处创建了一个计数脚本。该脚本存储于 `demo_workers.js` 文件中。例如：

```js
var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();
```

以上代码中重要的部分是 `postMessage()` 方法，用于向 HTML 页面传回一段消息。

::: note
web worker 通常不用于如此简单的脚本，而是用于更耗费 CPU 资源的任务
:::

## 创建 Web Worker 对象

从 HTML 页面调用，检测是否存在 `worker`，如果不存在，创建一个新的 web worker 对象，然后运行 `demo_workers.js` 中的代码。例如：

```js
if (typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
}
```

然后就可以从 web worker 发生和接收消息了。

再向 web worker 添加一个 `onmessage` 事件监听器。例如：

```js
w.onmessage = function(event){
    document.getElementById("result").innerHTML = event.data;
};
```

当 web worker 传送消息时，会执行事件监听器中的代码。来自 web worker 的数据会存储于 `event.data` 中。

## 终止 Web Worker

当创建 web worker 后，它会继续监听消息（即使在外部脚本完成后）直到其被终止为止。

如需终止 web worker，并释放浏览器或计算机资源，请使用 `terminate()` 方法。例如：

```js
w.terminate();
```

## 复用 Web Worker

如果您把 worker 变量设置为 `undefined`，在其被终止后，可以重复使用该代码。

```js
w = undefined;
```

例如：

```html
<p>计数: <output id="result"></output></p>
<button onclick="startWorker()">开始 Worker</button>
<button onclick="stopWorker()">停止 Worker</button>

<form action="">
  First name:<br />
  <input type="text" name="firstname" value="Bill" />
  <br />
  Last name:<br />
  <input type="text" name="lastname" />
</form>

<script>
  var w;
  
  function startWorker() {
    if (typeof Worker !== "undefined") {
      if (typeof w == "undefined") {
        w = new Worker("./demo_workers.js");
      }
      w.onmessage = function (event) {
        document.getElementById("result").innerHTML = event.data;
      };
    } else {
      document.getElementById("result").innerHTML =
        "您的浏览器不支持 Web Worker";
    }
  }
  
  function stopWorker() {
    w.terminate();
    w = undefined;
  }
</script>
```

## Web Worker 和 DOM

由于 web worker 位于外部文件中，它们无法访问下例 JavaScript 对象：

- window 对象
- document 对象
- parent 对象

