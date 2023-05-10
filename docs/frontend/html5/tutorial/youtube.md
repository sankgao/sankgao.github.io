---
title: YouTube
icon: youtube
date: 2023-05-10
category: Frontend
tag:
    - HTML5
---

在 HTML 中包含视频的最简单的方法是，使用 YouTube。

## 纠结视频格式

将视频转换为不同的格式可能既困难又耗时。

一个更简单的解决方案是让 YouTube 在您的网页中播放视频。

## YouTube Video Id

保存（或播放）视频时，YouTube 会显示一个 `id`（例如：ih1l6wb7LhU）。

您可以使用这个 `id`，并在 HTML 代码中引用您的视频。

## 在 HTML 中保费 YouTube 视频

如需在网页上播放视频，请执行以下操作：

- 将视频上传到 YouTube
- 记下视频 `id`
- 在您的网页中定义 `<iframe>` 元素
- 让 `src` 属性指向视频的 URL
- 使用 `width` 和 `height` 属性来规定播放器的尺寸
- 向 URL 添加其他参数

例如：

::: normal-demo 演示

```html
<iframe width="420" height="345" src="https://www.youtube.com/embed/ih1l6wb7LhU"></iframe>
```

:::

## YouTube Autoplay + Mute

您可以通过在 YouTube URL 上添加 `autoplay=1` 来让视频在用户访问页面时自动开始播放。但是，自动开始播放视频会让您的访问者感到烦恼！

::: note
在大多数情况下，Chromium 浏览器都不允许自动播放。但始终允许静音自动播放

在 `autoplay=1` 之后添加 `mute=1`，可让您的视频自动开始播放（但已静音）
:::

例如：

::: normal-demo 演示

```html
<iframe width="420" height="345" src="https://www.youtube.com/embed/ih1l6wb7LhU?autoplay=1&mute=1"></iframe>
```

:::

## YouTube Playlist

以逗号分隔的要播放的视频列表（原始 URL 除外）。

## YouTube loop

添加 `loop=1` 会让您的视频永远循环。

- 值 `0`（默认）：视频将播放一次
- 值 `1`：视频将循环（永远）

例如：

::: normal-demo 演示

```html
<iframe width="420" height="345" src="https://www.youtube.com/embed/ih1l6wb7LhU?playlist=ih1l6wb7LhU&loop=1"></iframe>
```

:::

## YouTube Controls

添加 `controls=0` 会使视频播放器不显示控件。

- 值 `0`：播放器控件不显示
- 值 `1`（默认）：播放器控件显示

例如：

::: normal-demo 演示

```html
<iframe width="420" height="345" src="https://www.youtube.com/embed/ih1l6wb7LhU?controls=0"></iframe>
```

:::

