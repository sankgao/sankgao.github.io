---
title: VuePress 插件
icon: plugins
date: 2023-04-19
category: About
tag:
    - Blog
---

为博客主题添加一些额外的 VuePress 插件。

::: tip
`vuepress-theme-hope` 主题默认提供了一些 [插件](https://theme-hope.vuejs.press/zh/config/plugins/intro.html#%E6%8F%92%E4%BB%B6%E5%88%97%E8%A1%A8)：

- [vuepress-plugin-auto-catalog](https://plugin-auto-catalog.vuejs.press/zh/)：VuePress2 的目录自动生成插件
- [vuepress-plugin-blog2](https://plugin-blog2.vuejs.press/zh/)：VuePress2 的博客插件
- [vuepress-plugin-comment2](https://plugin-comment2.vuejs.press/zh/)：提供评论与浏览量功能
- [vuepress-plugin-components](https://plugin-components.vuejs.press/zh/)：提供一些开箱即用的插件
- [vuepress-plugin-copy-code2](https://plugin-copy-code2.vuejs.press/zh/)：提供一键复制代码块功能
- [vuepress-plugin-copyright2](https://plugin-copyright2.vuejs.press/zh/)：在用户复制时追加版权信息，或禁用站点的复制与选择
- [vuepress-plugin-feed2](https://plugin-feed2.vuejs.press/zh/)：`Feed` 支持
- [vuepress-plugin-md-enhance](https://plugin-md-enhance.vuejs.press/zh/)：提供更多 `Markdown` 语法
- [vuepress-plugin-photo-swipe](https://plugin-photo-swipe.vuejs.press/zh/)：基于 `Photo Swipe` 的图片浏览插件
- [vuepress-plugin-pwa2](https://plugin-pwa2.vuejs.press/zh/)：增强的 `PWA` 支持
- [vuepress-plugin-reading-time2](https://plugin-reading-time2.vuejs.press/zh/)：阅读时间与字数统计
- [vuepress-plugin-sass-palette](https://plugin-sass-palette.vuejs.press/zh/)：面向全部插件和主题的 `Sass` 配置插件
- [vuepress-plugin-seo2](https://plugin-seo2.vuejs.press/zh/)：`SEO` 增强插件
- [vuepress-plugin-sitemap2](https://plugin-sitemap2.vuejs.press/zh/)：`Sitemap` 插件
:::

## 动态标题

::: info
在主题中额外添加 [@vuepress-denaro/vuepress-plugin-dynamic-title@next](https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-dynamic-title/v/1.1.1-beta.0?activeTab=readme) 插件，为 `VuePress-v2` 版本提供了动态标题功能
:::

### 安装

::: code-tabs#language

@tab:active pnpm

```pnpm
pnpm add -D @vuepress-denaro/vuepress-plugin-dynamic-title@next
```

@tab yarn

```yarn
yarn add -D @vuepress-denaro/vuepress-plugin-dynamic-title@next
```

@tab npm

```npm
npm install -D @vuepress-denaro/vuepress-plugin-dynamic-title@next
```
:::

### 用法

将依赖包导入配置文件 `config` 文件。

::: code-tabs#language

@tab:active TS

```ts
import { dynamicTitlePlugin } from "@vuepress-denaro/vuepress-plugin-dynamic-title";

export default defineUserConfig({
  // 插件配置
  plugins: [
    dynamicTitlePlugin({
      showIcon: "/favicon.ico",  // 文档在当前标签时显示的图标
      showText: "ヾ(≧▽≦*)o欢迎回来！",  // 文档在当前标签时显示的标题
      hideIcon: "/failure.ico",  // 文档不在当前标签时显示的图标
      hideText: "ಥ_ಥ不要走呀！",  // 文档不在当前标签时显示的标题
      recoverTime: 2000,  // 标签改变后恢复标题的时间
    }),
  ],
})
```

@tab JS

```js
const { dynamicTitlePlugin, } = require("@vuepress-denaro/vuepress-plugin-dynamic-title")

module.exports = {
  plugins: [
    dynamicTitlePlugin({
      showIcon: "/favicon.ico",  // 文档在当前标签时显示的图标
      showText: "ヾ(≧▽≦*)o欢迎回来！",  // 文档在当前标签时显示的标题
      hideIcon: "/failure.ico",  // 文档不在当前标签时显示的图标
      hideText: "ಥ_ಥ不要走呀！",  // 文档不在当前标签时显示的标题
      recoverTime: 2000,  // 标签改变后恢复标题的时间
    }),
  ],
}
```

:::

### 配置参数类型声明

- **showIcon**：文档在当前标签时显示的图标。默认：`""`
- **showText**：文档在当前标签时显示的标题。默认：`"(/≧▽≦/)咦！又好了！"`
- **hideIcon**：文档不在当前标签时显示的图标。默认：`""`
- **hideText**：文档不在当前标签时显示的标题。默认：`"(●—●)喔哟, 崩溃啦！"`
- **recoverTime**：标签改变后恢复标题的时间。默认：`"2000"`（毫秒）

## 鼠标点击

::: info
在主题中额外添加由 `Oragekk` 提供的本地插件 [vuepress-plugin-popper](https://github.com/OrageKK/oragekk.github.io/tree/main/src/.vuepress/plugins/vuepress-plugin-popper)，`vuepress-plugin-popper` 基于 [@moefy-canvas/theme-popper](https://moefy-canvas.nyakku.moe/themes/popper.html) 插件，为 `VuePress-v2` 版本提供了鼠标点击特效功能
:::

### 安装

```bash
pnpm add @moefy-canvas/theme-popper
```

### 用法

将依赖包导入配置文件 `config` 文件，并将 `vuepress-plugin-popper` 目录导入到 `plugins` 目录下（`plugins` 目录与 `config` 文件在同级目录下）。

```ts
import { PopperShape } from "@moefy-canvas/theme-popper";
import { popperPlugin } from "./plugins/vuepress-plugin-popper";

export default defineUserConfig({
  // 插件配置
  plugins: [
    popperPlugin({
      config: {
        shape: PopperShape.Star,
        size: 1.95,
        numParticles: 10,
      },
    }),
  ],
})
```

### 配置参数类型声明

- **shape**：形状

    - **PopperShape.Star**：星形。默认值：`PopperShape.Star`
    - **PopperShape.Circle**：圆形

- **size**：设置大小。默认值：`1.75`
- **numParticles**：设置粒子数。默认值：`10`

## 看板娘

::: info
在主题中额外添加 [vuepress-plugin-oh-my-live2d@latest](https://www.npmjs.com/package/vuepress-plugin-oh-my-live2d) 插件，为 `VuePress-v2` 版本提供了看板娘功能
:::

### 安装

::: code-tabs#language

@tab:active pnpm

```pnpm
pnpm add vuepress-plugin-oh-my-live2d@latest
```

@tab yarn

```yarn
yarn add vuepress-plugin-oh-my-live2d@latest
```

@tab npm

```npm
npm install vuepress-plugin-oh-my-live2d@latest
```
:::

### 用法

将依赖包导入配置文件 `config` 文件。

```ts
import { ohmylive2dPlugin } from 'vuepress-plugin-oh-my-live2d';

export default defineUserConfig({
  // 插件配置
  plugins: [
    ohmylive2dPlugin({
      source: "https://oml-api.tj520.top",
      models: [
        {
          path: "/pio/index.json", scale: 1.5, x: 10, y: 0,
        },
        {
          path: "/pa15_3701/normal/normal.model3.json", scale: 1, x: 10, y: 0,
          stageStyle: {
            height: "330",
          },
        },
        // 更多
      ],
      tips: {
        style: {
          width: 150,
          height: 70,
          offsetX: 20,
          offsetY: 50,
        },
        welcomeTips: {
          message: {
            daybreak: "早上好！一日之计在于晨，美好的一天就要开始了。",
            morning: "上午好！工作顺利嘛，不要久坐，多起来走动走动哦！",
            noon: "中午了，工作了一个上午，现在是午餐时间！",
            afternoon: "午后很容易犯困呢，来杯咖啡吧~",
            dusk: "傍晚了！工作一天幸苦啦~",
            night: "晚上好，今天过得怎么样呢？",
            lateNight: "已经这么晚了呀，早点休息吧，晚安~",
            weeHours: "这么晚还不睡吗？当心熬夜秃头哦！"
          },
        },
      },
    })
  ],
})
```

### 配置参数类型声明

- **source**：`Live2D Model` 的来源，支持 **本地路径** 或 **远程 url**。默认为 `https://oml-api.tj520.top`
- **models**：模型配置已支持配置多个，之后可以在面板的控件中对其切换

    - **path**：模型具体路径，在加载模型时会与 `source` 选项进行拼接。默认为 `/pio/index.json`
    - **scale**：模型的缩放比例。默认为 `1`
    - **x**：模型在舞台中 `X` 轴方向的位置。默认为 `0`
    - **y**：模型在舞台中 `Y` 轴方向的位置。默认为 `0`

- **tip**：提示框配置

    - **style**：用于设置提示框样式

        - **width**：设置提示框宽度。默认为 `230`
        - **height**：设置提示框高度。默认为 `100`
        - **offsetX**：提示框在 `X` 轴方向的偏移量。默认为 `0`
        - **offsetY**：提示框在 `Y` 轴方向的偏移量。默认为 `0`
    
    - **stageStyle**：用于配置舞台样式

        - **height**：设置舞台的高度。默认为 `auto`

    - **welcomeTips**：模型在初次加载完之后的提示配置

        - **massage**：在对应时间段提示的内容

            - **daybreak**：早晨 `5-7` 点提示信息内容
            - **morning**：早上 `8-11` 点提示信息内容
            - **noon**：中午 `12-13` 点提示信息内容
            - **afternoon**：下午 `14-17` 点提示信息内容
            - **dusk**：傍晚 `18-19` 点提示信息内容
            - **night**：晚上 `20-21` 点提示信息内容
            - **lateNight**：深夜 `22-23` 点提示信息内容
            - **weeHours**：凌晨 `0-4` 点提示信息内容

:::: tip
此项目不提供任何模型的下载地址，如有需要请自行寻找

- [基础配置](https://vuepress.oml2d.com/configure/)
- [vscode-live2d 看板娘模型库](https://github.com/iCharlesZ/vscode-live2d-models)

::: details vscode-live2d-models 模型配置

```ts
export default defineUserConfig({
  // 插件配置
  plugins: [
    ohmylive2dPlugin({
      source: "/assets/live2d/vscode-live2d-models",
      models: [
        {
          path: "/bilibili-22/index.json", scale: 2, x: 10,
        },
        {
          path: "/bilibili-33/index.json", scale: 1.5, x: 10,
        },
        {
          path: "/girls-frontline/AN94-1/normal/model.json", scale: 0.7,
        },
        {
          path: "/girls-frontline/AN94-1/destroy/model.json", scale: 0.7,
        },
        {
          path: "/girls-frontline/AN94-2/normal/model.json", scale: 0.7,
        },
        {
          path: "/girls-frontline/AN94-2/destroy/model.json", scale: 0.7,
        },
        {
          path: "/girls-frontline/G11/normal/model.json", scale: 0.4,
        },
        {
          path: "/girls-frontline/G11/destroy/model.json", scale: 0.5,
        },
        {
          path: "/girls-frontline/HK416-1/normal/model.json", scale: 0.7,
        },
        {
          path: "/girls-frontline/HK416-1/destroy/model.json", scale: 0.7, x: 10,
        },
        {
          path: "/girls-frontline/HK416-2/normal/model.json", scale: 0.7,
        },
        {
          path: "/girls-frontline/HK416-2/destroy/model.json", scale: 0.7,
        },
        {
          path: "/girls-frontline/Kar98k/normal/model.json", scale: 0.7,
        },
        {
          path: "/girls-frontline/Kar98k/destroy/model.json", scale: 0.7,
        },
        {
          path: "/girls-frontline/M4A1-1/normal/model.json", scale: 1.5,
        },
        {
          path: "/girls-frontline/M4A1-1/destroy/model.json", scale: 1.5,
        },
        {
          path: "/girls-frontline/M4A1-2/normal/model.json", scale: 0.5,
        },
        {
          path: "/girls-frontline/M4A1-2/destroy/model.json", scale: 0.5,
        },
        {
          path: "/girls-frontline/M4-SOPMOD-II-1/normal/model.json", scale: 0.5,
        },
        {
          path: "/girls-frontline/M4-SOPMOD-II-1/destroy/model.json", scale: 0.5,
        },
        {
          path: "/girls-frontline/M4-SOPMOD-II-2/normal/model.json", scale: 0.7,
        },
        {
          path: "/girls-frontline/M4-SOPMOD-II-2/destroy/model.json", scale: 0.7,
        },
        {
          path: "/girls-frontline/UMP9/normal/model.json", scale: 0.5,
        },
        {
          path: "/girls-frontline/UMP45-1/normal/model.json", scale: 1.5,
        },
        {
          path: "/girls-frontline/UMP45-1/destroy/model.json", scale: 1.5,
        },
        {
          path: "/girls-frontline/UMP45-2/normal/model.json", scale: 0.7,
        },
        {
          path: "/girls-frontline/UMP45-2/destroy/model.json", scale: 0.7,
        },
        {
          path: "/girls-frontline/UMP45-3/normal/model.json", scale: 0.8,
        },
        {
          path: "/girls-frontline/UMP45-3/destroy/model.json", scale: 0.8,
        },
        {
          path: "/girls-frontline/WA2000-1/normal/model.json", scale: 0.7,
        },
        {
          path: "/girls-frontline/WA2000-1/destroy/model.json", scale: 0.7,
        },
        {
          path: "/girls-frontline/WA2000-2/normal/model.json", scale: 1.5,
        },
        {
          path: "/girls-frontline/WA2000-2/destroy/model.json", scale: 1.5,
        },
        {
          path: "/girls-frontline/WA2000-3/normal/model.json", scale: 0.7,
        },
        {
          path: "/girls-frontline/WA2000-3/destroy/model.json", scale: 0.7,
        },
        {
          path: "/haru02/haru02.model.json", scale: 0.7,
        },
        {
          path: "/haruto/haruto.model.json", scale: 1.5,
        },
        {
          path: "/hijiki/hijiki.model.json", scale: 1.5,
        },
        {
          path: "/index/index.model.json", scale: 2,
          stageStyle: {
            height: "240",
          },
        },
        {
          path: "/kanzaki/kanzaki.model.json", scale: 2,
          stageStyle: {
            height: "330",
          },
        },
        {
          path: "/kesshouban/model.json", scale: 1.5, x: 70,
        },
        {
          path: "/koharu/koharu.model.json", scale: 1.5,
        },
        {
          path: "/murakumo/index.json", scale: 2, x: 20,
        },
        {
          path: "/nico/nico.model.json", scale: 1.5,
        },
        {
          path: "/potion-Maker-Pio/index.json", scale: 3.3,
        },
        {
          path: "/potion-Maker-Tia/index.json", scale: 3.3,
        },
        {
          path: "/shizuku-48/index.json", scale: 2,
          stageStyle: {
            height: "350",
          },
        },
        {
          path: "/shizuku-pajama/index.json", scale: 2,
          stageStyle: {
            height: "350",
          },
        },
        {
          path: "/tororo/tororo.model.json", scale: 1.5,
        },
        {
          path: "/wanko/wanko.model.json", scale: 1.5, y: 130,
        },
      ],
    }),
  ],
})
```

:::

::::

