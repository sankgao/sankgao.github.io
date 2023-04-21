import { defineUserConfig } from "vuepress";
import { dynamicTitlePlugin } from "@vuepress-denaro/vuepress-plugin-dynamic-title";

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
      title: "Sankgao Blog",  // 站点的标题
      description: "使用 VuePress-v2 搭建的个人博客",  // 站点的描述
    },
    
    "/en/": {
      lang: "en-US",
      title: "Sankgao Blog",
      description: "A personal blog built using VuePress v2",
    },
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
    dynamicTitlePlugin({
      showIcon: "/favicon.ico",
      showText: "ヾ(≧▽≦*)o欢迎回来！",
      hideIcon: "/failure.ico",
      hideText: "ಥ_ಥ不要走呀！",
      recoverTime: 2000,
    }),
  ],
})

