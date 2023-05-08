import { hopeTheme } from "vuepress-theme-hope";

import { enNavbarConfig, zhNavbarConfig } from "./navbar/index.ts";
import { enSidebarConfig, zhSidebarConfig } from "./sidebar/index.ts";

export default hopeTheme({
  // hopeTheme 主题配置
  favicon: "/favicon.ico",  // 站点图标
  hostname: "https://sankgao.github.io",  // 当前网站部署到的域名
  
  logo: "/logo.png",  // 导航栏图标
  repo: "sankgao/sankgao.github.io",  // 在导航栏中显示仓库链接
  docsDir: "docs",  // 文档在仓库中的目录

  // 作者信息
  author: {
    name: "Sankgao",
    url: "https://sankgao.github.io",
  },
  
  pageInfo: ['Author', 'Date', 'Word', 'ReadingTime', 'PageView', 'Category', 'Tag'],  // 文章信息
  
  iconAssets: "//at.alicdn.com/t/c/font_4015978_vey4rrhxnqr.css",  // 字体图标资源链接
  
  displayFooter: true,  // 是否默认显示页脚
  copyright: "Copyright © 2023-present Sankgao",  // 默认的版权信息
  
  fullscreen: true,  // 显示全屏按钮
  
  // 主题色选择器
  themeColor: {
    cyan: "#71e9e9",
    red: "#e73f3f",
    green: "#3eaf7c",
    pink: "#ffc0cb",
  },
  
  // 主题多语言配置
  locales: {
    "/": {
      navbar: zhNavbarConfig,  // 导航栏配置
      sidebar: zhSidebarConfig,  // 侧边栏配置
      headerDepth: 5,  // 侧边栏嵌套的标题深度
      
      footer:
        "主题使用 <a href='https://theme-hope.vuejs.press/zh/'>VuePress Theme Hope</a> | <a href='/about/my/site.html' target='_blank'>关于网站</a>",  // 页脚的默认内容
      
      copyright: "基于 MIT 协议，© 2023-至今 Sankgao",  // 版权信息
      
      // 博客功能配置
      blog: {
        name: "Sank Gao",  // 博主姓名
        avatar: "/favicon.ico",  // 博主头像
        description: "我是世界上的独一无二，百句空言不如一个行动。",  // 口号、座右铭或介绍语
        intro: "/about/my/personal_info.html",  // 博主的个人介绍地址
        
        // 博主的社交媒体链接配置
        medias: {
          GitHub: "https://github.com/sankgao",
          BiliBili: "https://space.bilibili.com/501802215",
          Gmail: "mailto:sankgao@outlook.com",
          Zhihu: "https://www.zhihu.com/people/57-8-73-75-16",
          Steam: "https://steamcommunity.com/id/sankgao/",
          Weibo: "https://weibo.com/u/6709450808",
          Twitter: "https://twitter.com/sankgao",
        },
      },
    },
    
    "/en/": {
      navbar: enNavbarConfig,
      sidebar: enSidebarConfig,
      headerDepth: 5,
      
      footer:
        "Theme by <a href='https://theme-hope.vuejs.press'>vuepress-theme-hope</a> | <a href='/en/about/my/site.html' target='_blank'>About websites</a>",
      
      copyright: "MIT Licensed, © 2023-present Sankgao",
      
      blog: {
        description:
          "I am unique in the world, a hundred empty words are not worth one action.",
        intro: "/en/about/my/personal_info.html",
        
        medias: {
          GitHub: "https://github.com/sankgao",
          BiliBili: "https://space.bilibili.com/501802215",
          QQ: "http://wpa.qq.com/msgrd?v=3&uin=2036461812&site=qq&menu=yes",
          Qzone: "https://2036461812.qzone.qq.com/",
          Gmail: "mailto:sankgao@163.com",
          Zhihu: "https://www.zhihu.com/people/57-8-73-75-16",
          Steam: "https://steamcommunity.com/id/Mr-Hope/",
          Weibo: "https://weibo.com/u/6709450808",
          Twitter: "https://twitter.com/Mister_Hope",
          Telegram: "https://t.me/Mister_Hope",
        },
      },
    },
  },
  
  // 主题插件配置
  plugins: {
    // 博客配置
    blog: {
      excerptLength: 0,  // 自动生成的摘要的长度，如果设置为 0，意味着不自动生成摘要。
    },
    
    // 评论插件配置
    comment: {
      // provider: "Waline",
      // serverURL: "https://vercel-blog-roan.vercel.app/",
      provider: "Giscus",
      repo: "sankgao/sankgao.github.io",
      repoId: "R_kgDOJWT44A",
      category: "Announcements",
      categoryId: "DIC_kwDOJWT44M4CV-wc",
    },
    
    // Feed 插件配置
    feed: {
      atom: true,  // 启用 Atom 格式输出
      json: true,  // 启用 JSON 格式输出
      rss: true,  // 启用 RSS 格式输出
    },
    
    // MdEnhance 插件配置
    mdEnhance: {
      align: true,  // 启用自定义对齐格式支持
      card: true,  // 添加卡片
      chart: true,  // 支持 Chart 图表
      codetabs: true,  // 启用代码组
      container: true,  // 启用自定义容器支持
      demo: true,  // 启用代码案例支持
      echarts: true,  // 支持 EChart 图表
      figure: true,  // 启用 figure
      flowchart: true,  // 启用流程图支持
      footnote: true,  // 启用脚注格式支持
      imgLazyload: true,  // 使用原生方式懒加载页面图片
      imgMark: true,  // 启用图片标注支持
      imgSize: true,  // 启用图片尺寸支持
      katex: true,  // 使用 KaTeX 启用 TeX 语法支持
      mark: true,  // 启用标记格式支持
      mathjax: true,  // 使用 mathjax 启用 TeX 语法支持
      mermaid: true,  // 启用 Mermaid 支持
      presentation: true,  // 启用幻灯片支持
      sub: true,  // 启用下角标格式支持
      sup: true,  // 启用上角标格式支持
      tabs: true,  // 启用选项卡支持
      tasklist: true,  // 启用任务列表格式支持
      vPre: true,  // 启用 v-pre 容器
    },

    // 可用组件
    components: {
      // 你想使用的组件
      components: [
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Replit",
        "SiteInfo",
        "StackBlitz",
        "VideoPlayer",
        "YouTube",
      ],
    },
    
    // PWA 插件配置
    pwa: {
      themeColor: "#2196f3",  // 主题颜色
      cacheHTML: false,  // 是否缓存主页和 404 错误页之外的 HTML 文件
      maxSize: 3072,  // 允许缓存的最大大小（以 KB 为单位）
      apple: {  // 针对苹果的特殊设置
        icon: "/assets/icon/apple-touch-icon.png",  // 填入苹果使用的图标地址
        statusBarColor: "white",  // 苹果的状态栏颜色
      },
      msTile: {  // 针对微软磁贴的特殊设置
        image: "/assets/icon/ms-icon-144.png",  // 磁贴图标
        color: "#ffffff",  // 磁贴颜色
      },
      manifest: {  // 填充一个将被解析为 manifest.webmanifest 的对象
        name: "Sankgao 的个人博客",
        short_name: "Sankgao Blog",
        description: "Sankgao 的个人博客",
        theme_color: "#2196f3",
        
        // 声明多个图标
        icons: [
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
        ],
        
        // 创建快捷方式
        shortcuts: [
          {
            name: "分类",
            short_name: "分类",
            icons: [
              {
                src: "/assets/icon/category-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
            url: "/category/",
            description: "文章分类分组",
          },
          {
            name: "标签",
            short_name: "标签",
            icons: [
              {
                src: "/assets/icon/tag-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
            url: "/tag/",
            description: "文章标签分组",
          },
          {
            name: "时间线",
            short_name: "时间线",
            icons: [
              {
                src: "/assets/icon/timeline-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
            url: "/timeline/",
            description: "时间线文章列表",
          },
          {
            name: "个人介绍",
            short_name: "个人介绍",
            icons: [
              {
                src: "/assets/icon/about-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
            url: "/about/my/personal_info.html",
            description: "个人介绍",
          },
        ],
      },
    },
  },
});

