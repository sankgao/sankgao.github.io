import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
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
      title: "Sankgao",  // 站点的标题
      description: "使用 VuePress-v2 搭建的个人博客",  // 站点的描述
    },
    
    "/en/": {
      lang: "en-US",
      title: "Sankgao",
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
    // DocSearch 搜索
    docsearchPlugin({
      appId: "0KZFY2PX1A",
      apiKey: "26299b05be586e142ecf257f6a6ea1f1",
      indexName: "sankgaoio",
      locales: {
        "/": {
          placeholder: "搜索",
          translations: {
            button: {
              buttonText: "搜索",
              buttonAriaLabel: "搜索",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),
    
    // 动态标题
    dynamicTitlePlugin({
      showIcon: "/favicon.ico",
      showText: "ヾ(≧▽≦*)o欢迎回来！",
      hideIcon: "/favicon.ico",
      hideText: "ಥ_ಥ不要走呀！",
      recoverTime: 2000,
    }),
  ],
})

