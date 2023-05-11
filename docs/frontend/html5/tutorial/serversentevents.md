---
title: Server-Sent 事件
icon: eventstore
date: 2023-05-11
category: Frontend
tag:
    - HTML5
---

## Server-Sent 事件

**Server-Sent 事件** 指的是网页自动从服务器获得更新。

以前也可能做到这一点，前提是网页不得不询问是否有可用的更新。通过 Server-Sent 事件，更新能够自动到达。

例如：Facebook/Twitter 更新、股价更新、新的博文、赛事结果，等等。

## 接收 Server-Sent 事件通知

**EventSource 对象** 用于接收服务器发送事件通知。例如：

```html
<h1>获得服务器更新</h1>
<div id="result"></div>

<script>
  if (typeof EventSource !== "undefined") {
    var source = new EventSource("/example/html5/demo_sse.php");
    source.onmessage = function (event) {
      document.getElementById("result").innerHTML += event.data + "<br />";
    };
  } else {
    document.getElementById("result").innerHTML =
      "抱歉，您的浏览器不支持 server-sent 事件 ...";
  }
</script>
```

- 创建一个新的 **EventSource 对象**，然后规定发送更新的页面的 URL（本例中是 `demo_sse.php`）
- 每当接收到一次更新，就会发生 **onmessage 事件**
- 当 **onmessage 事件** 发生时，把已接收的数据推入 id 为 `result` 的元素中

## 检测 Server-Sent 事件支持

编写了一段额外的代码来检测服务器发送事件的浏览器支持。例如：

```js
if(typeof(EventSource) !== "undefined") {
    // 是的！支持服务器发送事件！
    // 一些代码.....
} else {
    // 抱歉！不支持服务器发送事件！
}
```

## 服务器端代码实例

为了使上例运行，您需要能够发送数据更新的服务器（比如 PHP 或 ASP）。

服务器端事件流的语法非常简单。把 `Content-Type` 报头设置为 `text/event-stream` 后就可以开始发送事件流了。例如：

`PHP` 中的代码（demo_sse.php）：

```php
<?php
  header('Content-Type: text/event-stream');
  header('Cache-Control: no-cache');
  
  $time = date('r');
  echo "data: The server time is: {$time}\n\n";
  flush();
?>
```

`ASP` 中的代码（VB）（demo_sse.asp）：

```asp
<%
  Response.ContentType = "text/event-stream"
  Response.Expires = -1
  Response.Write("data: The server time is: " & now())
  Response.Flush()
%>
```

- 把 `Content-Type` 报头设置为 `text/event-stream`
- 规定不对页面进行缓存
- 输出要发送的日期（始终以 `data: ` 开头）
- 向网页刷新输出数据

