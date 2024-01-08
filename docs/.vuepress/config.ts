import { defineUserConfig } from "vuepress";
import { dynamicTitlePlugin } from "@vuepress-denaro/vuepress-plugin-dynamic-title";
import { PopperShape } from "@moefy-canvas/theme-popper";
import { popperPlugin } from "./plugins/vuepress-plugin-popper";
import { ohmylive2dPlugin } from "vuepress-plugin-oh-my-live2d";

import theme from "./theme.ts";

export default defineUserConfig({
  // 默认站点配置
  base: "/",  // 站点的基础路径
  lang: "zh-CN",  // 站点的语言
  dest: "docs/.vuepress/dist",  // 指定 vuepress build 命令的输出目录
  
  head: [  // 在最终渲染出的 HTML 的 <head> 标签内加入的额外标签
    ["link", { rel: "icon", href: "/logo.png" }]
  ],
  
  // 站点多语言配置
  locales: {
    "/": {
      lang: "zh-CN",  // 站点的语言
      title: "Sank's blog",  // 站点的标题
      description: "使用 VuePress-v2 搭建的个人博客",  // 站点的描述
    },
    
    // "/en/": {
    //   lang: "en-US",
    //   title: "Sank's blog",
    //   description: "A personal blog built using VuePress v2",
    // },
  },
  
  theme,  // 主题配置

  // 配置 markdown 级别
  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    },
  },
  
  shouldPrefetch: false,  // 用来控制哪些文件是需要生成对应的 <link rel="prefetch"> 标签
  
  // 插件配置
  plugins: [
    // 动态标题
    dynamicTitlePlugin({
      showIcon: "/favicon.ico",
      showText: "ヾ(≧▽≦*)o欢迎回来！",
      hideIcon: "/favicon.ico",
      hideText: "ಥ_ಥ不要走呀！",
      recoverTime: 2000,
    }),

    // 鼠标点击
    popperPlugin({
      config: {
        shape: PopperShape.Star,
        size: 1.95,
        numParticles: 10,
      },
    }),

    // 看板娘
    // ohmylive2dPlugin({
      // source: "/assets/live2d/vscode-live2d-models",
      // models: [
      //   {
      //     path: "/girls-frontline/G11/normal/model.json", scale: 0.4,
      //   },
      //   {
      //     path: "/kesshouban/model.json", scale: 1.5, x: 70,
      //   },
      //   {
      //     path: "/wanko/wanko.model.json", scale: 1.5, y: 130,
      //   },
      //   {
      //     path: "/bilibili-22/index.json", scale: 2, x: 10,
      //   },
      //   {
      //     path: "/potion-Maker-Pio/index.json", scale: 3.3,
      //   },
      //   {
      //     path: "/haruto/haruto.model.json", scale: 1.5,
      //   },
      //   {
      //     path: "/koharu/koharu.model.json", scale: 1.5,
      //   },
      //   {
      //     path: "/hijiki/hijiki.model.json", scale: 1.5,
      //   },
      //   {
      //     path: "/tororo/tororo.model.json", scale: 1.5,
      //   },
      //   {
      //     path: "/kanzaki/kanzaki.model.json", scale: 2,
      //     stageStyle: {
      //       height: "330",
      //     },
      //   },
      //   {
      //     path: "/girls-frontline/AN94-2/normal/model.json", scale: 0.7,
      //   },
      //   {
      //     path: "/girls-frontline/Kar98k/destroy/model.json", scale: 0.7,
      //   },
      //   {
      //     path: "/girls-frontline/M4A1-2/destroy/model.json", scale: 0.5,
      //   },
      //   {
      //     path: "/girls-frontline/M4-SOPMOD-II-2/destroy/model.json", scale: 0.7,
      //   },
      //   {
      //     path: "/girls-frontline/WA2000-3/normal/model.json", scale: 0.7,
      //   },
      //   {
      //     path: "/girls-frontline/WA2000-3/destroy/model.json", scale: 0.7,
      //   },
      //   {
      //     path: "/girls-frontline/HK416-1/destroy/model.json", scale: 0.7, x: 10,
      //   },
      // ],
      // tips: {
      //   style: {
      //     width: 150,
      //     height: 70,
      //     offsetX: 0,
      //     offsetY: 70,
      //   },
      // },
    // }),
  ],
})

