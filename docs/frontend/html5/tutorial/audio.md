---
title: 音频
icon: audio
date: 2023-05-10
category: Frontend
tag:
    - HTML5
---

在 HTML 中播放声音的方法有很多种。

## 问题以及解决方法

在 HTML 中播放音频并不容易！

您需要确保您的音频文件在所有浏览器中（Internet Explorer、Chrome、Firefox、Safari、Opera）和所有硬件上（PC、Mac、iPad、iPhone）都能够播放。

## 使用插件

浏览器插件是一种扩展浏览器标准功能的小型计算机程序。

插件有很多用途：播放音乐、显示地图、验证银行账号，控制输入等等。

可使用 `<object>` 或 `<embed>` 标签来将插件添加到 HTML 页面。

这些标签定义资源（通常非 HTML 资源）的容器，根据类型，它们即会由浏览器显示，也会由外部插件显示。

## 使用 \<embed> 元素

`<embed>` 标签定义外部（非 HTML）内容的容器（这是一个 HTML5 标签，在 HTML4 中是非法的，但是所有浏览器中都有效）。

显示嵌入网页中的 MP3 文件。例如：

::: normal-demo 演示

```html
<embed height="200" width="300" src="/html5/horse.mp3" />
<p><b>注释：</b>浏览器可能需要安装插件以后，才能播放该文件。</p>
```

:::

**问题：**

- `<embed>` 标签在 HTML4 中是无效的。页面无法通过 HTML4 验证
- 不同的浏览器对音频格式的支持也不同
- 如果浏览器不支持该文件格式，没有插件的话就无法播放该音频
- 如果用户的计算机未安装插件，无法播放音频
- 如果把该文件转换为其他格式，仍然无法在所有浏览器中播放

**解决问题：**

使用 `<!DOCTYPE html>`（HTML5）解决验证问题

## 使用 \<object> 元素

`<object tag>` 标签也可以定义外部（非 HTML）内容的容器。

显示嵌入网页中的 MP3 文件。例如：

::: normal-demo 演示

```html
<object height="200" width="300" src="/html5/horse.mp3"></object>
<p><b>注释：</b>浏览器可能需要安装插件以后，才能播放该文件。</p>
```

:::

**问题：**

- 不同的浏览器对音频格式的支持也不同
- 如果浏览器不支持该文件格式，没有插件的话就无法播放该音频
- 如果用户的计算机未安装插件，无法播放音频
- 如果把该文件转换为其他格式，仍然无法在所有浏览器中播放

## 使用 HTML5 \<audio> 元素

`<audio>` 元素是一个 HTML5 元素，在 HTML4 中是非法的，但在所有浏览器中都有效。例如：

::: normal-demo 演示

```html
<audio controls="controls">
  <source src="/html5/song.mp3" type="audio/mp3" />
  <source src="/html5/song.ogv" type="audio/ogv" />
  <p><b>注释：</b>您的浏览器不支持音频元素。</p>
</audio>
```

:::

上面的例子使用了一个 mp3 文件，这样它在 Internet Explorer、Chrome 以及 Safari 中是有效的。

为了使这段音频在 Firefox 和 Opera 中同样有效，添加了一个 ogv 类型的文件。如果失败，会显示错误消息。

**问题：**

- `<audio>` 标签在 HTML4 中是无效的。您的页面无法通过 HTML4 验证
- 您必须把音频文件转换为不同的格式
- `<audio>` 元素在老式浏览器中不起作用

**解决问题：**

使用 `<!DOCTYPE html>`（HTML5）解决验证问题

## 最好的 HTML 解决方法

::: normal-demo 演示

```html
<audio controls="controls">
  <source src="/html5/song.mp3" type="audio/mp3" />
  <source src="/html5/song.ogv" type="audio/ogv" />
  <embed height="200" width="300" src="/html5/song.mp3" />
</audio>
```

:::

上面的例子使用了两个不同的音频格式。HTML5 `<audio>` 元素会尝试以 mp3 或 ogv 来播放音频。如果失败，代码将回退尝试 `<embed>` 元素。

**问题：**

- 您必须把音频转换为不同的格式
- `<audio>` 元素无法通过 HTML4 和 XHTML 验证
- `<embed>` 元素无法通过 HTML4 和 XHTML 验证
- `<embed>` 元素无法回退来显示错误消息

**解决问题：**

使用 `<!DOCTYPE html>`（HTML5）解决验证问题

## 向网站添加音频的最简单方法

### 雅虎媒体播放器

雅虎的媒体播放器是向网页添加音频的最简单的方法之一。

使用雅虎媒体播放器是一个不同的途径。您只需简单地让雅虎来完成歌曲播放的工作就好了。

它能播放 mp3 以及一系列其他格式。通过一行简单的代码，您就可以把它添加到网页中，轻松地将 HTML 页面转变为专业的播放列表。例如：

::: normal-demo 演示

```html
<p><a href="/html5/song.mp3">播放 mp3</a></p>
<p><a href="/html5/bird.wav">播放 wav</a></p>

<script type="text/javascript" src="http://mediaplayer.yahoo.com/js"></script>
```

:::

使用雅虎播放器是免费的。如需使用它，您需要把这段 JavaScript 插入网页底部：

`<script type="text/javascript" src="http://mediaplayer.yahoo.com/js"></script>`

然后只需简单地把 MP3 文件链接到您的 HTML 中，JavaScript 会自动地为每首歌创建播放按钮。

::: note
雅虎媒体播放器为您的用户提供的是一个小型的播放按钮，而不是完整的播放器。不过，当您点击该按钮，会弹出完整的播放器

请注意，这个播放器始终停靠在窗框底部。只需点击它，就可将其滑出
:::

### 使用超链接

如果网页包含指向媒体文件的超链接，大多数浏览器会使用 “辅助应用程序” 来播放文件。

显示指向 mp3 文件的链接。如果用户点击该链接，浏览器会启动 “辅助应用程序” 来播放该文件。例如：

::: normal-demo 演示

```html
<p>链接到一段音乐</p>
<p><a href="/html5/horse.mp3">点击这里，播放音乐</a></p>
```

:::

## 内联的声音

当您在网页中包含声音，或者作为网页的组成部分时，它被称为内联声音。

如果您打算在 web 应用程序中使用内联声音，您需要意识到很多人都觉得内联声音令人恼火。同时请注意，用户可能已经关闭了浏览器中的内联声音选项。

最好的建议是只在用户希望听到内联声音的地方包含它们。一个正面的例子是，在用户需要听到录音并点击某个链接时，会打开页面然后播放录音。

