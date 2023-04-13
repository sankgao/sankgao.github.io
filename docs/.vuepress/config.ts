import { defaultTheme } from 'vuepress';
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance';
import { componentsPlugin } from 'vuepress-plugin-components';
import { copyCodePlugin } from 'vuepress-plugin-copy-code2';
import { autoCatalogPlugin } from 'vuepress-plugin-auto-catalog';

export default {
  // 站点配置
  base: '/',  // 站点的基础路径
  
  head: [  // 在最终渲染出的 HTML 的 <head> 标签内加入的额外标签
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  // 站点多语言配置
  locales: {
    '/': {
      lang: 'en-US',  // 站点的语言
      title: 'Sankgao Blog',  // 站点的标题
      description: 'A personal blog built using VuePress v2',  // 站点的描述
    },
    
    '/zh/': {
      lang: 'zh-CN',
      title: 'Sankgao Blog',
      description: '使用 VuePress-v2 搭建的个人博客',
    },
  },
  
  // 主题配置
  theme: defaultTheme({
    logo: '/hero.png',  // Logo 图片会显示在导航栏的左端
    logoDark: '/logo.png',  // 夜间模式中使用的 Logo 图片
    repo: 'sankgao/sankgao.github.io',  // 项目仓库链接会显示在导航栏的右端
    docsDir: 'docs', // 指定根目录

    // 主题多语言配置
    locales: {
      '/': {
        selectLanguageText: 'Languages',  // 选择语言菜单的文字
        selectLanguageName: 'English',  // locale 的语言名称

        navbar: [  // 导航栏配置
          {
            text: '首页',
            link: '/',
          },
          {
            text: '运维1',
            link: '/运维/Linux/',
          },
          {
            text: '运维2',
            children: ['/运维/Linux/Linux 使用 SSH 登录之前显示横幅消息', '/运维/Linux/Linux 反弹 Shell'],
          },
          {
            text: '前端',
            link: '/前端/HTML5/HTML_基础',
            children: [
              {
                text: 'CSS3',
                link: '/前端/CSS3',
              },
              {
                text: 'HTML5',
                link: '/前端/HTML5',
              },
            ],
          },
          {
            text: '关于',
            link: '/关于/',
          },
        ],

        sidebar: 'auto',  // 自动生成侧边栏
        sidebarDepth: 2,  // 页面标题自动生成的侧边栏的最大深度
      },

      '/zh/': {
        selectLanguageText: '选择语言',  // 选择语言菜单的文字
        selectLanguageName: '简体中文',  // locale 的语言名称

        navbar: [  // 导航栏配置
          {
            text: '首页',
            link: '/zh/',
          },
          {
            text: '运维1',
            link: '/zh/运维/Linux/',
          },
          {
            text: '运维2',
            children: ['/zh/运维/Linux/Linux 使用 SSH 登录之前显示横幅消息', '/zh/运维/Linux/Linux 反弹 Shell'],
          },
          {
            text: '前端',
            link: '/zh/前端/HTML5/HTML_基础',
            children: [
              {
                text: 'CSS3',
                link: '/zh/前端/CSS3',
                children: ['/zh/前端/CSS3/CSS_基础.md', '/zh/前端/CSS3/CSS_简介.md'],
              },
              {
                text: 'HTML5',
                link: '/zh/前端/HTML5',
                children: ['/zh/前端/HTML5/HTML5_简介.md', '/zh/前端/HTML5/HTML_基础.md'],
              },
            ],
          },
          {
            text: '关于',
            link: '/zh/关于/',
          },
        ],

        sidebar: 'auto',  // 自动生成侧边栏
        sidebarDepth: 2,  // 页面标题自动生成的侧边栏的最大深度
        editLinkText: '编辑此页',  // 编辑链接的文字
        lastUpdatedText: '最近更新',  // 最近更新时间戳标签的文字
        // 自定义容器
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 页面
        notFound: [
            '这里什么都没有',
            '我们怎么到这来了？',
            '这是一个 404 页面',
            '看起来我们进入了错误的链接',
          ],
        backToHome: '返回首页',
        // 站点的可访问性（a11y）
        openInNewWindow: '在新窗口打开',  // 链接内的 sr-only 文字
        toggleColorMode: '切换颜色模式',  // 切换颜色模式按钮的标题文字
        toggleSidebar: '切换侧边栏',  // 切换侧边栏按钮的标题文字
      },
    },
  }),

  // 配置插件
  plugins: [
    // Markdown 增强
    mdEnhancePlugin({
      container: true,  // 启用自定义容器
      tabs: false,  // 添加选项卡支持
      codetabs: false,  // 启用代码块分组
      sub: true,  // 启用下角标功能
      sup: true,  // 启用上角标
      align: true,  // 启用自定义对齐
      attrs: true,  // 启用属性支持
      footnote: true,  // 启用脚注
      mark: true,  // 开启标记
      tasklist: true,  // 启用任务列表
      figure: true,  // 启用 figure
      imgLazyload: true,  // 启用图片懒加载
      imgMark: true,  // 启用图片标记
      imgSize: true,  // 启用图片大小
      include: true,  // 启用导入支持
      chart: true,  // 启用图表
      echarts: true,  // 启用 ECharts 图表
      flowchart: true, // 启用流程图
      mermaid: true,  // 启用 mermaid
      katex: true,  // 使用 KaTeX 启用 TeX 支持
      mathjax: true,  // 使用 mathjax 启用 TeX 支持
    }),

    // 常用组件
    componentsPlugin({
      components: [
        'ArtPlayer',  // 在 Markdown 文件中嵌入 ArtPlayer
        'AudioPlayer',  // 在 Markdown 文件中嵌入音频
        'Badge',  // 支持自定义颜色的徽章
        'BiliBili',  // 在 Markdown 文件中嵌入 B 站视频
        'CodePen',  // 在 Markdown 嵌入 CodePen 演示组件 Demo
        'FontIcon',  // 在 Markdown 文件中使用它来添加图标
        'PDF',  // 在 Markdown 中嵌入 PDF 阅读器
        'Replit',  // 在 Markdown 文件中嵌入 Replit 演示
        'Share',  // 
        'SiteInfo',  // 
        'StackBlitz',  // 
        'VideoPlayer',  // 
        'XiGua',  // 
        'YouTube',  // 
      ],

      componentOptions: {
        artPlayer: {  // 在 Markdown 文件中嵌入 ArtPlayer
          fastForward: true,
          screenshot: true,
        },
        fontIcon: {
          assets: 'fontawesome',
        },
        pdf: {
          pdfjs: '/assets/lib/pdfjs/',
        },
      },
      
      rootComponents: {
        backToTop: true,  // 返回顶部按钮

        // notice: [  // 向访问者显示一些通知
        //   {
        //     path: '/',
        //     title: 'Notice Title',
        //     content: 'Notice Content',
        //     actions: [
        //       {
        //         text: 'Primary Action',
        //         link: 'https://theme-hope.vuejs.press/',
        //         type: 'primary',
        //       },
        //       { text: 'Default Action' },
        //     ],
        //     fullscreen: true,
        //   },
        //   {
        //     path: '/zh/',
        //     title: 'Notice Title',
        //     content: 'Notice Content',
        //     actions: [
        //       {
        //         text: 'Primary Action',
        //         link: 'https://theme-hope.vuejs.press/',
        //         type: 'primary',
        //       },
        //       { text: 'Default Action' },
        //     ],
        //     fullscreen: true,
        //   },
        // ],
      },
    }),

    copyCodePlugin(),  // 添加复制按钮
    // autoCatalogPlugin(),  // 自动生成目录页面
  ],
}
