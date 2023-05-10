---
title: 视频
icon: video
date: 2023-05-10
category: Frontend
tag:
    - HTML5
---

在 HTML 中播放视频的方法有很多种。

## 问题以及解决方法

在 HTML 中播放视频并不容易！

您需要谙熟大量技巧，以确保您的视频文件在所有浏览器中（Internet Explorer、Chrome、Firefox、Safari、Opera）和所有硬件上（PC、Mac、iPad、iPhone）都能够播放。

## 使用 \<embed> 标签

`<embed>` 标签的作用是在 HTML 页面中嵌入多媒体元素。

显示嵌入网页的 Flash 视频。例如：

::: normal-demo 演示

```html
<embed width="320" height="240" src="/html5/movie.swf" />
<p><b>注释：</b>浏览器可能需要安装插件以后，才能播放该文件。</p>
```

:::

**问题：**

- HTML4 无法识别 `<embed>` 标签。您的页面无法通过验证
- 如果浏览器不支持 Flash，那么视频将无法播放
- iPad 和 iPhone 不能显示 Flash 视频
- 如果您将视频转换为其他格式，那么它仍然不能在所有浏览器中播放

## 使用 \<object> 标签

`<object>` 标签的作用是在 HTML 页面中嵌入多媒体元素。

显示嵌入网页的一段 Flash 视频。例如：

::: normal-demo 演示

```html
<object width="320" height="240" src="/html5/movie.swf"></object>
<p><b>注释：</b>浏览器可能需要安装插件以后，才能播放该文件。</p>
```

:::

**问题：**

- 如果浏览器不支持 Flash，将无法播放视频
- iPad 和 iPhone 不能显示 Flash 视频
- 如果您将视频转换为其他格式，那么它仍然不能在所有浏览器中播放

## 使用 \<video> 标签

`<video>` 是 HTML5 中的新标签。

`<video>` 标签的作用是在 HTML 页面中嵌入视频元素。

以下 HTML 片段会显示一段嵌入网页的 ogg、mp4 或 webm 格式的视频。例如：

::: normal-demo 演示

```html
<video width="320" height="240" controls="controls" autoplay="autoplay">
  <source src="/html5/movie.ogv" type="video/ogv" />
  <source src="/html5/movie.mp4" type="video/mp4" />
  <source src="/html5/movie.webm" type="video/webm" />
</video>
```

:::

**问题：**

- 您必须把视频转换为很多不同的格式
- `<video>` 元素在老式浏览器中无效
- `<video>` 元素无法通过 HTML4 和 XHTML 验证

## 最好的 HTML 解决方法

`HTML5 + <object> + <embed>`。例如：

::: normal-demo 演示

```html
<video width="320" height="240" controls="controls" autoplay="autoplay">
  <source src="/html5/movie.ogv" type="video/ogv" />
  <source src="/html5/movie.mp4" type="video/mp4" />
  <source src="/html5/movie.webm" type="video/webm" />
  <object data="/html5/movie.mp4" width="320" height="240">
    <embed width="320" height="240" src="/html5/movie.swf" />
  </object>
</video>
```

:::

上例中使用了 4 中不同的视频格式。HTML5 `<video>` 元素会尝试播放以 mp4、ogv 或 webm 格式中的一种来播放视频。如果均失败，则回退到 `<embed>` 元素。

**问题：**

- 您必须把视频转换为很多不同的格式
- `<video>` 元素无法通过 HTML 4 和 XHTML 验证
- `<embed>` 元素无法通过 HTML 4 和 XHTML 验证

**解决问题：**

使用 `<!DOCTYPE html>`（HTML5）解决验证问题

## 优酷解决方案

在 HTML 中显示视频的最简单的方法是使用优酷等视频网站。

如果您希望在网页中播放视频，那么您可以把视频上传到优酷等视频网站，然后在您的网页中插入 HTML 代码即可播放视频。例如：

::: normal-demo 演示

```html
<embed src="http://player.youku.com/player.php/sid/XMzI2NTc4NTMy/v.swf" width="480" height="400" type="application/x-shockwave-flash">
</embed>
```

:::

## 使用超链接

如果网页包含指向媒体文件的超链接，大多数浏览器会使用 “辅助应用程序” 来播放文件。

显示指向 AVI 文件的链接。如果用户点击该链接，浏览器会启动 “辅助应用程序”。比如：Windows Media Player 来播放这个 AVI 文件。

::: normal-demo 演示

```html
<p>点击该链接来播放这个对象</p>
<a href="/html5/movie.mp4">播放视频文件</a>
```

:::

## 关于内联视频的一段注释

当视频被包含在网页中时，它被称为内联视频。

如果您打算在 web 应用程序中使用内联视频，您需要意识到很多人都觉得内联视频令人恼火。

同时请注意，用户可能已经关闭了浏览器中的内联视频选项。

最好的建议是只在用户希望看到内联视频的地方包含它们。一个正面的例子是，在用户需要看到视频并点击某个链接时，会打开页面然后播放视频。

