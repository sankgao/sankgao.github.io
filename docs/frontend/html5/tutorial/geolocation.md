---
title: 地理定位
icon: terminalgeolocation
date: 2023-05-10
category: Frontend
tag:
    - HTML5
---

HTML5 Geolocation（地理定位）用于定位用户的位置。

## 定位用户的位置

HTML5 Geolocation API 用于获得用户的地理位置。

鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。

## 使用地理定位

请使用 `getCurrentPosition()` 方法来获得用户的位置。

返回用户位置的经度和纬度。例如：

::: normal-demo 演示

```html
<p id="demo">点击这个按钮，获得您的坐标：</p>
<button onclick="getLocation()">试一下</button>
```

```js
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "此浏览器不支持地理定位。";
  }
}

function showPosition(position) {
  x.innerHTML = "纬度：" + position.coords.latitude +
    "<br />经度：" + position.coords.longitude;
}
```

:::

- 检测是否支持地理定位
- 如果支持，则运行 `getCurrentPosition()` 方法。如果不支持，则向用户显示一段消息。
- 如果 `getCurrentPosition()` 运行成功，则向参数 `showPosition` 中规定的函数返回一个 `coordinates` 对象
- `showPosition()` 函数获得并显示经度和纬度

上面的例子是一个非常基础的地理定位脚本，不含错误处理。

## 处理错误和拒绝

`getCurrentPosition()` 方法的第二个参数用于处理错误。它规定当获取用户位置失败时运行的函数。例如：

::: normal-demo 演示

```html
<p id="demo">点击这个按钮，获得您的坐标：</p>
<button onclick="getLocation()">试一下</button>
```

```js
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "此浏览器不支持地理定位。";
  }
}

function showPosition(position) {
  x.innerHTML =
    "纬度：" +
    position.coords.latitude +
    "<br />经度：" +
    position.coords.longitude;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "用户拒绝了地理定位请求。";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "位置信息不可用。";
      break;
    case error.TIMEOUT:
      x.innerHTML = "获取用户位置的请求超时。";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "出现未知错误。";
      break;
  }
}
```

:::

- Permission `PERMISSION_DENIED`：用户不允许地理定位
- Position `POSITION_UNAVAILABLE`：无法获取当前位置
- `TIMEOUT`：操作超时

## 在地图中显示结果

如需在地图中显示结果，您需要访问可使用经纬度的地图服务。比如：谷歌地图或百度地图。

::: normal-demo 演示

```html
<p id="demo">点击这个按钮，获得您的位置：</p>
<button onclick="getLocation()">试一下</button>
<div id="mapholder"></div>
```

```js
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "此浏览器不支持地理定位。";
  }
}

function showPosition(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;

  var img_url =
    "http://maps.googleapis.com/maps/api/staticmap?center=" +
    latlon +
    "&zoom=14&size=400x300&sensor=false";
  document.getElementById("mapholder").innerHTML =
    "<img src='" + img_url + "' />";
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "用户拒绝了地理定位请求。";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "位置信息不可用。";
      break;
    case error.TIMEOUT:
      x.innerHTML = "获取用户位置的请求超时。";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "出现未知错误。";
      break;
  }
}
```

:::

上例中使用返回的经纬度数据在谷歌地图中显示位置（使用静态图像）。

使用脚本来显示带有标记、缩放和拖曳选项的交互式地图。例如：

::: normal-demo 演示

```html
<p id="demo">点击这个按钮，获得您的位置：</p>
<button onclick="getLocation()">试一下</button>
<div id="mapholder"></div>
<script src="http://maps.google.com/maps/api/js?sensor=false"></script>
```

```js
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "此浏览器不支持地理定位。";
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  latlon = new google.maps.LatLng(lat, lon);
  mapholder = document.getElementById("mapholder");
  mapholder.style.height = "250px";
  mapholder.style.width = "500px";

  var myOptions = {
    center: latlon,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    navigationControlOptions: {
      style: google.maps.NavigationControlStyle.SMALL
    }
  };
  var map = new google.maps.Map(
    document.getElementById("mapholder"),
    myOptions
  );
  var marker = new google.maps.Marker({
    position: latlon,
    map: map,
    title: "You are here!"
  });
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "用户拒绝了地理定位请求。";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "位置信息不可用。";
      break;
    case error.TIMEOUT:
      x.innerHTML = "获取用户位置的请求超时。";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "出现未知错误。";
      break;
  }
}
```

:::

## 给定位置的信息

本页演示的是如何在地图上显示用户的位置。不过，地理定位对于给定位置的信息同样很有用处。

案例：

- 更新本地信息
- 显示用户周围的兴趣点
- 交互式车载导航系统（GPS）

## getCurrentPosition() 方法返回数据

若成功，则 `getCurrentPosition()` 方法返回对象。始终会返回 `latitude`、`longitude` 以及 `accuracy` 属性。如果可用，则会返回其他下面的属性。

|  属性  |  描述  |
|  :----:  |  :----:  |
|  coords.latitude  |  十进制数的纬度  |
|  coords.longitude  |  十进制数的经度  |
|  coords.accuracy  |  位置精度  |
|  coords.altitude  |  海拔，海平面以上以米计  |
|  coords.altitudeAccuracy  |  位置的海拔精度  |
|  coords.heading  |  方向，从正北开始以度计  |
|  coords.speed  |  速度，以米/每秒计  |
|  timestamp  |  响应的日期/时间  |

## Geolocation 对象其他有趣的方法

`watchPosition()` 返回用户的当前位置，并继续返回用户移动时的更新位置（就像汽车上的 GPS）。

`clearWatch()` 停止 `watchPosition()` 方法

下面的例子展示 `watchPosition()` 方法。您需要一台精确的 GPS 设备来测试该例（比如：iPhone）。例如：

::: normal-demo 演示

```html
<p id="demo">点击这个按钮，获得您的坐标：</p>
<button onclick="getLocation()">试一下</button>
```

```js
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "此浏览器不支持地理定位。";
  }
}

function showPosition(position) {
  x.innerHTML =
    "纬度：" +
    position.coords.latitude +
    "<br />经度：" +
    position.coords.longitude;
}
```

:::

