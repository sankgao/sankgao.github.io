---
title: 关于网站
icon: website
date: 2023-04-23
index: false
article: false
breadcrumb: false
---

网站使用 [VuePress v2](https://v2.vuepress.vuejs.org/zh/) 构建，使用主题 [VuePress Theme Hope](https://theme-hope.vuejs.press/zh/)。

## 插件

为博客主题添加一些额外的 [VuePress 插件](../blog/theme_plugins.md)，构建自己的博客风格。

## 样式

- 修改字体大小，使 `code` 和 `code numbers` 在同一行 `./styles/index.scss`
- 修改页面显示大图背景 `./styles/base.scss` `./styles/theme.scss`
- 为页面图标添加鼠标悬停的跳动效果 `./styles/bounce-icon.scss`
- 获取站点的运行时间 `.vuepress/client.ts`
