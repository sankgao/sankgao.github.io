<!-- TOC -->

- [HTML 多媒体](#html-多媒体)
    - [什么是多媒体](#什么是多媒体)
    - [多媒体格式](#多媒体格式)
    - [视频格式](#视频格式)
    - [声音格式](#声音格式)
    - [使用哪种格式](#使用哪种格式)
- [HTML 插件](#html-插件)
    - [插件](#插件)
    - [\<object> 元素](#\object-元素)
    - [\<embed> 元素](#\embed-元素)
- [HTML 音频](#html-音频)
    - [问题，问题，以及解决方法](#问题问题以及解决方法)
    - [使用插件](#使用插件)
    - [使用 \<embed> 元素](#使用-\embed-元素)
    - [使用 \<object> 元素](#使用-\object-元素)
    - [使用 HTML5 \<audio> 元素](#使用-html5-\audio-元素)
    - [最好的 HTML 解决方法](#最好的-html-解决方法)
    - [向网站添加音频的最简单方法](#向网站添加音频的最简单方法)
    - [使用超链接](#使用超链接)
    - [内联的声音](#内联的声音)
- [HTML 视频](#html-视频)
    - [问题，问题，以及解决方法](#问题问题以及解决方法)
    - [使用 \<embed> 标签](#使用-\embed-标签)
    - [问题](#问题)
    - [使用 \<object> 标签](#使用-\object-标签)
    - [问题](#问题)
    - [使用 `<video>` 标签](#使用-video-标签)
    - [问题](#问题)
    - [最好的 HTML 解决方法](#最好的-html-解决方法)
    - [问题](#问题)
    - [优酷解决方案](#优酷解决方案)
    - [使用超链接](#使用超链接)
    - [关于内联视频的一段注释](#关于内联视频的一段注释)
- [HTML YouTube 视频](#html-youtube-视频)
    - [纠结视频格式](#纠结视频格式)
    - [YouTube Video Id](#youtube-video-id)
    - [在 HTML 中保费 YouTube 视频](#在-html-中保费-youtube-视频)
    - [YouTube Autoplay + Mute](#youtube-autoplay--mute)
    - [YouTube Playlist](#youtube-playlist)
    - [YouTube Loop](#youtube-loop)
    - [YouTube Controls](#youtube-controls)

<!-- /TOC -->

# HTML 多媒体

Web 上的多媒体指的是音效、音乐、视频和动画。

现代网络浏览器已支持很多多媒体格式。

## 什么是多媒体

多媒体来自多种不同的格式。它可以是您听到或看到的任何内容，文字、图片、音乐、音效、录音、电影、动画等等。

在因特网上，您会经常发现嵌入网页中的多媒体元素，现代浏览器已支持多种多媒体格式。

## 多媒体格式

多媒体元素（比如：视频和音频）存储于媒体文件中。

确定媒体类型的最常用的方法是查看文件扩展名。当浏览器得到文件扩展名 `.htm` 或 `.html` 时，它会假定该文件是 HTML 页面。`.xml` 扩展名指示 XML 文件，而 `.css` 扩展名指示样式表。图片格式则通过 `.gif` 或 `.jpg` 来识别。

多媒体元素元素也拥有带有不同扩展名的文件格式，比如：`.swf`、`.wmv`、`.mp3` 以及 `.mp4`。

## 视频格式

MP4 格式是一种新的即将普及的因特网视频格式。HTML5、Flash 播放器以及优酷等视频网站均支持它。

|  格式  |  文件  |  描述  |
|  :----:  |  :----:  | :----  |
|  AVI  |  .avi  |  AVI（Audio Video Interleave）格式是由微软开发的。所有运行 Windows 的计算机都支持 AVI 格式。它是因特网上很常见的格式，但非 Windows 计算机并不总是能够播放  |
|  WMV  |  .wmv  |  Windows Media 格式是由微软开发的。Windows Media 在因特网上很常见，但是如果未安装额外的（免费）组件，就无法播放 Windows Media 电影。一些后期的 Windows Media 电影在所有非 Windows 计算机上都无法播放，因为没有合适的播放器  |
|  MPEG  |   .mpg<br />.mpeg  |  MPEG（Moving Pictures Expert Group）格式是因特网上最流行的格式。它是跨平台的，得到了所有最流行的浏览器的支持  |
|  QuickTime  |  .mov  |  QuickTime 格式是由苹果公司开发的。QuickTime 是因特网上常见的格式，但是 QuickTime 电影不能在没有安装额外的（免费）组件的 Windows 计算机上播放  |
|  RealVideo  |   .rm<br />.ram  |  RealVideo 格式是由 Real Media 针对因特网开发的。该格式允许低带宽条件下（在线视频、网络电视）的视频流。由于是低带宽优先的，质量常会降低  |
|  Flash  |   .swf<br />.flv  |  Flash（Shockwave）格式是由 Macromedia 开发的。Shockwave 格式需要额外的组件来播放。但是该组件会预装到 Firefox 或 IE 之类的浏览器上  |
|  Mpeg-4  |  .mp4  |  Mpeg-4（with H.264 video compression）是一种针对因特网的新格式。事实上，YouTube 推荐使用 MP4。YouTube 接收多种格式，然后全部转换为 .flv 或 .mp4 以供分发。越来越多的视频发布者转到 MP4，将其作为 Flash 播放器和 HTML5 的因特网共享格式  |

## 声音格式

|  格式  |  文件  |  描述  |
|  :----:  |  :----:  | :----  |
|  MIDI  |  .mid<br />.midi  |  MIDI（Musical Instrument Digital Interface）是一种针对电子音乐设备（比如：合成器和声卡）的格式。MIDI 文件不含有声音，但包含可被电子产品（比如：声卡）播放的数字音乐指令。因为 MIDI 格式仅包含指令，所以 MIDI 文件极其小巧。MIDI 得到了广泛的平台上的大量软件的支持。大多数流行的网络浏览器都支持 MIDI  |
|  RealAudio  |   .rm<br />.ram  |  RealAudio 格式是由 Real Media 针对因特网开发的。该格式也支持视频。该格式允许低带宽条件下的音频流（在线音乐、网络音乐）。由于是低带宽优先的，质量常会降低  |
|  Wave  |  .wav  |  Wave（waveform）格式是由 IBM 和微软开发的。所有运行 Windows 的计算机和所有网络浏览器（除了 Google Chrome）都支持它  |
|  WMA  |  .wma  |  WMA 格式（Windows Media Audio），质量优于 MP3，兼容大多数播放器，除了 iPod。WMA 文件可作为连续的数据流来传输，这使它对于网络电台或在线音乐很实用  |
|  MP3  |  .mp3<br />.mpga  |  MP3 文件实际上是 MPEG 文件的声音部分。MPEG 格式最初是由运动图像专家组开发的。MP3 是其中最受欢迎的针对音乐的声音格式。期待未来的软件系统都支持它  |

## 使用哪种格式

WAVE 是因特网上最受欢迎的无压缩声音格式，所有流行的浏览器都支持它。如果您需要未经压缩的声音（音乐或演讲），那么您应该使用 WAVE 格式。

MP3 是最新的压缩录制音乐格式。MP3 这个术语已经成为数字音乐的代名词。如果您的网址从事录制音乐，那么 MP3 是一个选项。

# HTML 插件

插件（Plug-in）是扩展浏览器标准功能的计算机程序。

## 插件

插件被设计用于许多不同的目的：

- 运行 Java 小程序
- 运行 ActiveX 控件
- 显示 Flash 电影
- 显示地图
- 扫描病毒
- 验证银行账号

**警告：**

> 大多数浏览器不再支持 Java Applet 和插件
> 
> 所有浏览器均不再支持 ActiveX 控件
> 
> 在现代浏览器中，对 Shockwave Flash 的支持也已关闭

## \<object> 元素

所有浏览器均支持 `<object>` 元素。

`<object>` 元素定义 HTML 文档中的嵌入式对象。

它旨在将插件（例如：Java applet、PDF 阅读器和 Flash 播放器）嵌入网页中，但也可以用于将 HTML 包含在 HTML 中或者您喜爱的图像。

example：

```html
<!DOCTYPE html>
<html>

<body>

  <object width="100%" height="100px" data="images/eg_cute.gif"></object>

</body>

</html>
```

**效果：**

![eg_cute](images/eg_cute.gif)

## \<embed> 元素

所有主要浏览器均支持 `<embed>` 元素。

`<embed>` 元素也可定义了 HTML 文档中的嵌入式对象。

Web 浏览器长期以来一直支持 `<embed>` 元素。但是，`<embed>` 元素是 HTML5 中的新标签。

example：

```html
<!DOCTYPE html>
<html>

<body>

  <embed src="images/eg_cute.gif" />

</body>

</html>
```

**效果：**

![eg_cute](images/eg_cute.gif)

# HTML 音频

## 问题，问题，以及解决方法

在 HTML 中播放音频并不容易！

您需要确保您的音频文件在所有浏览器中（Internet Explorer、Chrome、Firefox、Safari、Opera）和所有硬件上（PC、Mac、iPad、iPhone）都能够播放。

## 使用插件

浏览器插件是一种扩展浏览器标准功能的小型计算机程序。

插件有很多用途：播放音乐、显示地图、验证银行账号，控制输入等等。

可使用 `<object>` 或 `<embed>` 标签来将插件添加到 HTML 页面。

这些标签定义资源（通常非 HTML 资源）的容器，根据类型，它们即会由浏览器显示，也会由外部插件显示。

## 使用 \<embed> 元素

`<embed>` 标签定义外部（非 HTML）内容的容器（这是一个 HTML5 标签，在 HTML4 中是非法的，但是所有浏览器中都有效）。

下面的代码片段能够显示嵌入网页中的 MP3 文件：

```html
<!DOCTYPE html>
<html>

<body>

  <embed height="200" width="300" src="https://www.w3school.com.cn/i/horse.ogg" />

</body>

</html>
```

**效果：**

<audio controls="controls" preload="none" src="https://www.w3school.com.cn/i/horse.ogg"></audio>

**问题：**

- `<embed>` 标签在 HTML4 中是无效的。页面无法通过 HTML4 验证
- 不同的浏览器对音频格式的支持也不同
- 如果浏览器不支持该文件格式，没有插件的话就无法播放该音频
- 如果用户的计算机未安装插件，无法播放音频
- 如果把该文件转换为其他格式，仍然无法在所有浏览器中播放

> 使用 `<!DOCTYPE html>`（HTML5）解决验证问题

## 使用 \<object> 元素

`<object tag>` 标签也可以定义外部（非 HTML）内容的容器。

下面的代码片段能够显示嵌入网页中的 MP3 文件：

```html
<!DOCTYPE html>
<html>

<body>

  <object height="100" width="100" data="https://www.w3school.com.cn/i/horse.ogg"></object>

</body>

</html>
```

**效果：**

<audio controls="controls" preload="none" src="https://www.w3school.com.cn/i/horse.ogg"></audio>

**问题：**

- 不同的浏览器对音频格式的支持也不同
- 如果浏览器不支持该文件格式，没有插件的话就无法播放该音频
- 如果用户的计算机未安装插件，无法播放音频
- 如果把该文件转换为其他格式，仍然无法在所有浏览器中播放

## 使用 HTML5 \<audio> 元素

`<audio>` 元素是一个 HTML5 元素，在 HTML4 中是非法的，但在所有浏览器中都有效。

```html
<!DOCTYPE html>
<html>

<body>

  <audio controls="controls">
      <source src="https://www.w3school.com.cn/i/horse.ogg" type="audio/mp3" />
      <source src="https://www.w3school.com.cn/i/horse.ogg" type="audio/ogg" />
  </audio>

</body>

</html>
```

**效果：**

<audio controls="controls">
  <source src="https://www.w3school.com.cn/i/horse.ogg" type="audio/mp3" />
  <source src="https://www.w3school.com.cn/i/horse.ogg" type="audio/ogg" />
</audio>

上面的例子使用了一个 mp3 文件，这样它在 Internet Explorer、Chrome 以及 Safari 中是有效的。

为了使这段音频在 Firefox 和 Opera 中同样有效，添加了一个 ogg 类型的文件。如果失败，会显示错误消息。

**问题：**

- `<audio>` 标签在 HTML4 中是无效的。您的页面无法通过 HTML4 验证
- 您必须把音频文件转换为不同的格式
- `<audio>` 元素在老式浏览器中不起作用

> 使用 `<!DOCTYPE html>`（HTML5）解决验证问题

## 最好的 HTML 解决方法

example：

```html
<!DOCTYPE html>
<html>

<body>

  <audio controls="controls" height="100" width="100">
      <source src="https://www.w3school.com.cn/i/horse.ogg" type="audio/mp3" />
      <source src="https://www.w3school.com.cn/i/horse.ogg" type="audio/ogg" />
      <embed height="100" width="100" src="song.mp3" />
  </audio>

</body>

</html>
```

**效果：**

<audio controls="controls" height="100" width="100">
    <source src="https://www.w3school.com.cn/i/horse.ogg" type="audio/mp3" />
    <source src="https://www.w3school.com.cn/i/horse.ogg" type="audio/ogg" />
    <embed height="100" width="100" src="https://www.w3school.com.cn/i/horse.ogg" />
</audio>

上面的例子使用了两个不同的音频格式。HTML5 `<audio>` 元素会尝试以 mp3 或 ogg 来播放音频。如果失败，代码将回退尝试 `<embed>` 元素。

**问题：**

- 您必须把音频转换为不同的格式
- `<audio>` 元素无法通过 HTML4 和 XHTML 验证
- `<embed>` 元素无法通过 HTML4 和 XHTML 验证
- `<embed>` 元素无法回退来显示错误消息

> 使用 `<!DOCTYPE html>`（HTML5）解决验证问题

## 向网站添加音频的最简单方法

向网页添加音频的最简单的方法是什么？

雅虎的媒体播放器绝对算其中之一。

使用雅虎媒体播放器是一个不同的途径。您只需简单地让雅虎来完成歌曲播放的工作就好了。

它能播放 mp3 以及一系列其他格式。通过一行简单的代码，您就可以把它添加到网页中，轻松地将 HTML 页面转变为专业的播放列表。

example：

```html
<!DOCTYPE html>
<html>

<body>

  <p><a href="https://www.w3school.com.cn/i/horse.ogg">播放 mp3</a></p>
  <p><a href="https://www.w3school.com.cn/i/bird.wav">播放 wav</a></p>
  
  <script type="text/javascript" src="http://mediaplayer.yahoo.com/js"></script>

</body>

</html>
```

**效果：**

<p><a href="https://www.w3school.com.cn/i/horse.ogg">播放 mp3</a></p>
<p><a href="https://www.w3school.com.cn/i/bird.wav">播放 wav</a></p>

<script type="text/javascript" src="http://mediaplayer.yahoo.com/js"></script>

使用雅虎播放器是免费的。如需使用它，您需要把这段 JavaScript 插入网页底部：

`<script type="text/javascript" src="http://mediaplayer.yahoo.com/js"></script>`

然后只需简单地把 MP3 文件链接到您的 HTML 中，JavaScript 会自动地为每首歌创建播放按钮：

```html
<a href="song1.mp3">Play Song 1</a>
<a href="song2.mp3">Play Song 2</a>
...
```

雅虎媒体播放器为您的用户提供的是一个小型的播放按钮，而不是完整的播放器。不过，当您点击该按钮，会弹出完整的播放器。

请注意，这个播放器始终停靠在窗框底部。只需点击它，就可将其滑出。

## 使用超链接

如果网页包含指向媒体文件的超链接，大多数浏览器会使用 “辅助应用程序” 来播放文件。

以下代码片段显示指向 mp3 文件的链接。如果用户点击该链接，浏览器会启动 “辅助应用程序” 来播放该文件：

example：

```html

<!DOCTYPE html>
<html>

<body>

  <p><a href="https://www.w3school.com.cn/i/horse.mp3">点击这里，播放音乐</a></p>

</body>

</html>
```

**效果：**

<p><a href="https://www.w3school.com.cn/i/horse.mp3">点击这里，播放音乐</a></p>

## 内联的声音

当您在网页中包含声音，或者作为网页的组成部分时，它被称为内联声音。

如果您打算在 web 应用程序中使用内联声音，您需要意识到很多人都觉得内联声音令人恼火。同时请注意，用户可能已经关闭了浏览器中的内联声音选项。

我们最好的建议是只在用户希望听到内联声音的地方包含它们。一个正面的例子是，在用户需要听到录音并点击某个链接时，会打开页面然后播放录音。

# HTML 视频

## 问题，问题，以及解决方法

在 HTML 中播放视频并不容易！

您需要谙熟大量技巧，以确保您的视频文件在所有浏览器中（Internet Explorer、Chrome、Firefox、Safari、Opera）和所有硬件上（PC、Mac、iPad、iPhone）都能够播放。

## 使用 \<embed> 标签

`<embed>` 标签的作用是在 HTML 页面中嵌入多媒体元素。

下面的 HTML 代码显示嵌入网页的 Flash 视频：

example：

```html
<!DOCTYPE html>
<html>

<body>

  <embed width="320" height="240" src="https://www.w3school.com.cn/i/bookmark.swf" />

</body>

</html>
```

**效果：**

<embed width="320" height="240" src="https://www.w3school.com.cn/i/bookmark.swf" />

## 问题

- HTML4 无法识别 `<embed>` 标签。您的页面无法通过验证
- 如果浏览器不支持 Flash，那么视频将无法播放
- iPad 和 iPhone 不能显示 Flash 视频
- 如果您将视频转换为其他格式，那么它仍然不能在所有浏览器中播放

## 使用 \<object> 标签

`<object>` 标签的作用是在 HTML 页面中嵌入多媒体元素。

下面的 HTML 片段显示嵌入网页的一段 Flash 视频：

example：

```html
<!DOCTYPE html>
<html>

<body>

  <object width="320" height="240" data="https://www.w3school.com.cn/i/bookmark.swf"></object>

</body>

</html>
```

**效果：**

<object width="320" height="240" data="https://www.w3school.com.cn/i/bookmark.swf"></object>

## 问题

- 如果浏览器不支持 Flash，将无法播放视频
- iPad 和 iPhone 不能显示 Flash 视频
- 如果您将视频转换为其他格式，那么它仍然不能在所有浏览器中播放

## 使用 `<video>` 标签

`<video>` 是 HTML5 中的新标签。

`<video>` 标签的作用是在 HTML 页面中嵌入视频元素。

以下 HTML 片段会显示一段嵌入网页的 ogg、mp4 或 webm 格式的视频：

example：

```html
<!DOCTYPE html>
<html>

<body>

  <video width="320" height="240" controls="controls" autoplay="autoplay">
    <source src="https://www.w3school.com.cn/i/movie.mp4" type="video/mp4" />
    <source src="https://www.w3school.com.cn/i/movie.ogg" type="video/ogg" />
    <source src="https://www.w3school.com.cn/i/movie.webm" type="video/webm" />
  </video>

</body>

</html>
```

**效果：**

<video width="320" height="240" controls="controls" autoplay="autoplay">
  <source src="https://www.w3school.com.cn/i/movie.mp4" type="video/mp4" />
  <source src="https://www.w3school.com.cn/i/movie.ogg" type="video/ogg" />
  <source src="https://www.w3school.com.cn/i/movie.webm" type="video/webm" />
</video>

## 问题

- 您必须把视频转换为很多不同的格式
- `<video>` 元素在老式浏览器中无效
- `<video>` 元素无法通过 HTML4 和 XHTML 验证

## 最好的 HTML 解决方法

`HTML5 + <object> + <embed>`

example：

```html
<!DOCTYPE html>
<html>

<body>

  <video width="320" height="240" controls="controls" autoplay="autoplay">
    <source src="https://www.w3school.com.cn/i/movie.mp4" type="video/mp4" />
    <source src="https://www.w3school.com.cn/i/movie.ogg" type="video/ogg" />
    <source src="https://www.w3school.com.cn/i/movie.webm" type="video/webm" />
    <object data="https://www.w3school.com.cn/i/movie.mp4" width="320" height="240">
      <embed width="320" height="240" src="https://www.w3school.com.cn/i/movie.swf" />
    </object>
  </video>

</body>

</html>
```

**效果：**

<video width="320" height="240" controls="controls" autoplay="autoplay">
  <source src="https://www.w3school.com.cn/i/movie.mp4" type="video/mp4" />
  <source src="https://www.w3school.com.cn/i/movie.ogg" type="video/ogg" />
  <source src="https://www.w3school.com.cn/i/movie.webm" type="video/webm" />
  <object data="https://www.w3school.com.cn/i/movie.mp4" width="320" height="240">
    <embed width="320" height="240" src="https://www.w3school.com.cn/i/movie.swf" />
  </object>
</video>

上例中使用了 4 中不同的视频格式。HTML5 `<video>` 元素会尝试播放以 mp4、ogg 或 webm 格式中的一种来播放视频。如果均失败，则回退到 `<embed>` 元素。

## 问题

- 您必须把视频转换为很多不同的格式
- `<video>` 元素无法通过 HTML 4 和 XHTML 验证
- `<embed>` 元素无法通过 HTML 4 和 XHTML 验证

> 使用 `<!DOCTYPE html>`（HTML5）解决验证问题

## 优酷解决方案

在 HTML 中显示视频的最简单的方法是使用优酷等视频网站。

如果您希望在网页中播放视频，那么您可以把视频上传到优酷等视频网站，然后在您的网页中插入 HTML 代码即可播放视频：

example：

```html
<!DOCTYPE html>
<html>

<body>

  <embed src="http://player.youku.com/player.php/sid/XMzI2NTc4NTMy/v.swf" width="320" height="240"
    type="application/x-shockwave-flash"  />

</body>

</html>
```

**效果：**

<embed src="http://player.youku.com/player.php/sid/XMzI2NTc4NTMy/v.swf" width="320" height="240"
    type="application/x-shockwave-flash"  />

## 使用超链接

如果网页包含指向媒体文件的超链接，大多数浏览器会使用 “辅助应用程序” 来播放文件。

以下代码片段显示指向 AVI 文件的链接。如果用户点击该链接，浏览器会启动 “辅助应用程序”，比如：Windows Media Player 来播放这个 AVI 文件：

example：

```html
<!DOCTYPE html>
<html>

<body>

  <a href="https://www.w3school.com.cn/i/bookmark.swf">播放视频文件</a>

</body>

</html>
```

**效果：**

<a href="https://www.w3school.com.cn/i/bookmark.swf">播放视频文件</a>

## 关于内联视频的一段注释

当视频被包含在网页中时，它被称为内联视频。

如果您打算在 web 应用程序中使用内联视频，您需要意识到很多人都觉得内联视频令人恼火。

同时请注意，用户可能已经关闭了浏览器中的内联视频选项。

我们最好的建议是只在用户希望看到内联视频的地方包含它们。一个正面的例子是，在用户需要看到视频并点击某个链接时，会打开页面然后播放视频。

# HTML YouTube 视频

在 HTML 中包含视频的最简单的方法是，使用 YouTube。

## 纠结视频格式

将视频转换为不同的格式可能既困难又耗时。

一个更简单的解决方案是让 YouTube 在您的网页中播放视频。

## YouTube Video Id

保存（或播放）视频时，YouTube 会显示一个 id（例如 ih1l6wb7LhU）。

您可以使用这个 id，并在 HTML 代码中引用您的视频。

## 在 HTML 中保费 YouTube 视频

如需在网页上播放视频，请执行以下操作：

- 将视频上传到 YouTube
- 记下视频 id
- 在您的网页中定义 `<iframe>` 元素
- 让 src 属性指向视频的 URL
- 使用 width 和 height 属性来规定播放器的尺寸
- 向 URL 添加其他参数（参阅下文）

example：

```html
<!DOCTYPE html>
<html>

<body>

  <iframe width="420" height="345" src="https://www.youtube.com/embed/ih1l6wb7LhU"></iframe>

</body>

</html>
```

**效果：**

<iframe width="420" height="345" src="https://www.youtube.com/embed/ih1l6wb7LhU"></iframe>

## YouTube Autoplay + Mute

您可以通过在 YouTube URL 上添加 `autoplay=1` 来让视频在用户访问页面时自动开始播放。但是，自动开始播放视频会让您的访问者感到烦恼！

> 在大多数情况下，Chromium 浏览器都不允许自动播放。但始终允许静音自动播放
> 
> 在 `autoplay=1` 之后添加 `mute=1`，可让您的视频自动开始播放（但已静音）

example：

```html
<!DOCTYPE html>
<html>

<body>

  <iframe width="420" height="345" src="https://www.youtube.com/embed/ih1l6wb7LhU?autoplay=1&mute=1"></iframe>

</body>

</html>
```

**效果：**

<iframe width="420" height="345" src="https://www.youtube.com/embed/ih1l6wb7LhU?autoplay=1&mute=1"></iframe>

## YouTube Playlist

以逗号分隔的要播放的视频列表（原始 URL 除外）。

## YouTube Loop

添加 `loop=1` 会让您的视频永远循环。

值 0（默认）：视频将播放一次；值 1：视频将循环（永远）。

example：

```html
<!DOCTYPE html>
<html>

<body>

  <iframe width="420" height="345" src="https://www.youtube.com/embed/ih1l6wb7LhU?playlist=ih1l6wb7LhU&loop=1"></iframe>

</body>

</html>
```

**效果：**

<iframe width="420" height="345" src="https://www.youtube.com/embed/ih1l6wb7LhU?playlist=ih1l6wb7LhU&loop=1"></iframe>

## YouTube Controls

添加 `controls=0` 会使视频播放器不显示控件。

值 0：播放器控件不显示；值 1（默认）：播放器控件显示。

example：

```html
<!DOCTYPE html>
<html>

<body>

  <iframe width="420" height="345" src="https://www.youtube.com/embed/ih1l6wb7LhU?controls=0"></iframe>

</body>

</html>
```

**效果：**

<iframe width="420" height="345" src="https://www.youtube.com/embed/ih1l6wb7LhU?controls=0"></iframe>

