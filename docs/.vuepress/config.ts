import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  // 默认站点配置
  lang: 'zh-CN',  // 站点的语言
  dest: "dist",  // 指定 vuepress build 命令的输出目录
  
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
  
  shouldPrefetch: false,  // 用来控制哪些文件是需要生成对应的 <link rel="prefetch"> 标签
})

