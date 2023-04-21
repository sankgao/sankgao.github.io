---
title: VuePress 默认配置
icon: config
date: 2023-04-17
category: VuePress
tag:
    - VuePress
---

[VuePress 官网配置](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html)

## package.json 文件

`packag.json` 是项目的配置文件，常见的配置有配置项目启动、打包命令，声明依赖包等

在项目根目录下的 `package.json` 中添加 `scripts`

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

完整的 `package.json` 文件：

```json
{
  "name": "vuepress-starter",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@vuepress/client": "2.0.0-beta.61",
    "vue": "^3.2.47",
    "vuepress": "2.0.0-beta.61"
  }
}
```

- `name`：指定项目包的名称
- `version`：指定版本号。遵循 semver 版本规范
    - `1`：代表主版本号，表示有破坏性的更新
    - `0`：代表次版本号，表示有功能的新增
    - `0`：代表修订号，表示有 bug 的修复
- `description`：项目的描述信息
- `main`：main 字段是一个模块的 id，它是您程序的主要入口
- `scripts`：指定项目的一些内置脚本命令
    - `dev`：启动程序
    - `build`：给本地环境打包
    - `test`：一般用于执行测试，单元测试、*-lint……
- `keywords`：一组项目的技术关键词
- `author`：项目作者
- `license`：项目的 [开源许可证](https://www.51cto.com/article/749585.html)
    - `MIT`：MIT 许可证是一种非常宽松的开源许可证，允许将软件用于商业和非商业用途，并且允许修改、分发和私有化软件
    - `ISC`：ISC 许可证它的全称是 Internet Systems Consortium 许可证。ISC 许可证的主要特点是非常灵活和简洁，没有对用户和使用者的限制，同时也不对软件的衍生产品做限制
- `devDependencies`：开发依赖，项目开发环境需要用到而运行时不需要的依赖，用于辅助开发

## 站点配置

### base

- 类型：`string`
- 默认值：`/`
- 详情：
    - 部署站点的基础路径
- 示例：

    ```ts
    export default {
      base: '/',
    }
    ```

### lang

- 类型：`string`
- 默认值：`en-US`
- 详情：
    - 站点的语言
    - 它将会在最终渲染出的 `HTML` 中作为 `<html>` 标签的 `lang` 属性
    - 它可以设置在不同语言的 `locales` 中
    - 如果在不同语言中设置则这里的设置 **不生效**
- 示例：

    ```ts
    export default {
      lang: 'zh-CN',
    }
    ```

### title

- 类型：`string`
- 默认值：`''`
- 详情：
    - 站点的标题
    - 它将会作为所有页面标题的后缀，并且在默认主题的导航栏中显示
    - 它可以设置在不同语言的 `locales` 中
    - 如果在不同语言中设置则这里的设置 **不生效**
- 示例：

    ```ts
    export default {
      title: 'VuePress',
    }
    ```

### description

- 类型：`string`
- 默认值：`''`
- 详情：
    - 站点的描述
    - 它将会在最终渲染出的 HTML 中作为 `<meta name="description" />` 标签的 `content` 属性。它会被每个页面的 `Frontmatter` 中的 `description` 字段覆盖
    - 它可以设置在不同语言的 `locales` 中
    - 如果在不同语言中设置则这里的设置 **不生效**
- 示例：

    ```ts
    export default {
      description: '使用 VuePress-v2 搭建的个人博客',
    }
    ```

### head

- 类型：`HeadConfig[]`
- 默认值：`[]`
- 详情：
    - 在最终渲染出的 HTML 的 `<head>` 标签内加入的额外标签
    - 您可以通过 `[tagName, { attrName: attrValue }, innerHTML?]` 的格式来添加标签
    - 它可以设置在不同语言的 `locales` 中
    - 如果在不同语言中设置则这里的设置 **不生效**
- 示例：

    ```ts
    export default {
      head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
      ],
    }
    ```

### locales

- 类型：`{ [path: string]: Partial<SiteLocaleData> }`
- 默认值：`{}`
- 详情：
    - 多语言支持的各个语言 `locales`
    - 可以使用的字段有：`lang`、`title`、`description`、`head`
- 示例：

    ```ts
    export default {
      locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'en-US',
          title: 'VuePress',
          description: 'Vue-powered Static Site Generator',
        },
        '/zh/': {
          lang: 'zh-CN',
          title: 'VuePress',
          description: 'Vue 驱动的静态网站生成器',
        },
      },
    }
    ```

### 主题配置

- 类型：`Theme`
- 详情：
    - 设置站点要使用的主题
    - 如果不设置该选项，将会使用默认主题
- 示例：

    ```ts
    import { defaultTheme } from 'vuepress'

    export default {
      theme: defaultTheme({
        locales: {
          '/': {
            selectLanguageName: 'English',
          },
          '/zh/': {
            selectLanguageName: '简体中文',
          },
        },
      }),
    }
    ```

### dest

- 类型：`string`
- 默认值：`${sourceDir}/.vuepress/dist`
- 详情：
    - 指定 `vuepress build` 命令的输出目录
- 示例：

    ```ts
    import { defaultTheme } from 'vuepress'

    export default {
      theme: defaultTheme({
        dest: "docs/.vuepress/dist",
      }),
    }
    ```

### temp

- 类型：`string`
- 默认值：`${sourceDir}/.vuepress/.temp`
- 详情：
    - 指定临时文件目录

::: warning
VuePress 在开发和构建时会加载临时文件，因此临时文件目录应位于项目根目录内部，以便可以正确地解析到依赖
:::

### cache

- 类型：`string`
- 默认值：`${sourceDir}/.vuepress/.cache`
- 详情：
    - 指定缓存文件目录

### public

- 类型：`string`
- 默认值：`${sourceDir}/.vuepress/public`
- 详情：
    - 指定 Public 文件目录

### pagePatterns

- 类型：`string[]`
- 默认值：`['**/*.md', '!.vuepress', '!node_modules']`
- 详情：
    - 指定页面文件的 Patterns。这些 Patterns 是相对于 Source 目录的

### plugins 插件配置

- 类型：`PluginConfig[]`
- 详情：
    - 要使用的插件
    - 该配置项接收一个数组，其中的每一个数组项是一个或一组插件
- 示例：

    ```ts
    import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
    
    export default {
      plugins: [
        googleAnalyticsPlugin({
          id: 'G-XXXXXXXXXX'
        }),
      ],
    }
    ```

## 主题配置

### locales

- 类型：`{ [path: string]: Partial<DefaultThemeLocaleData> }`
- 默认值：`{}`
- 详情：
    - 多语言支持的各个语言 `locales`
    - 所有在 [Locale 配置](#locale-配置) 内的配置项都可以在 `locales` 中使用
    - 该配置项仅能在 **默认主题** 内生效，注意不要和 **站点配置** 中的 `locales` 混淆
- 示例：

    ```ts
    import { defaultTheme } from 'vuepress'
    
    export default {
      theme: defaultTheme({
        locales: {
          '/': {
            selectLanguageName: 'English',
          },
          '/zh/': {
            selectLanguageName: '简体中文',
          },
        },
      }),
    }
    ```

### Locale 配置

该 Locale 内的配置项可以作为一般配置使用，也可以使用在 [locales](#locales-1) 内。

#### colorMode

- 类型：`'auto' | 'light' | 'dark'`
- 默认值：`'auto'`
- 详情：
    - 默认颜色模式
    - 如果设置为 `'auto'` ，则会根据 [prefers-color-scheme](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme) 自动设置初始颜色模式
- 示例：

    ```ts
    import { defaultTheme } from 'vuepress'
    
    export default {
      theme: defaultTheme({
        colorMode: 'auto',
      }),
    }
    ```

#### colorModeSwitch

- 类型：`boolean`
- 默认值：`true`
- 详情：
    - 是否启用切换颜色模式的功能
    - 如果设置为 `true`，将会在导航栏展示一个切换颜色模式的按钮
- 示例：

    ```ts
    import { defaultTheme } from 'vuepress'
    
    export default {
      theme: defaultTheme({
        colorModeSwitch: true,
      }),
    }
    ```

#### home

- 类型：`string`
- 默认值：`/`
- 详情：
    - 首页的路径
    - 它将被用于：导航栏中 **Logo** 的链接或 404 页面的 **返回首页** 链接
- 示例：

    ```ts
    import { defaultTheme } from 'vuepress'
    
    export default {
      theme: defaultTheme({
        home: '/',
      }),
    }
    ```

#### navbar

- 类型： `false | (NavbarItem | NavbarGroup | string)[]`
- 默认值： `[]`
- 详情：
    - 导航栏配置
    - 设置为 `false` 可以禁用导航栏
    - 为了配置导航栏元素，您可以将其设置为 **导航栏数组**，其中的每个元素是 **NavbarItem 对象**、**NavbarGroup 对象**、或者 **字符串**
        - **NavbarItem 对象** 应该有一个 `text` 字段和一个 `link` 字段，还有一个可选的 `activeMatch` 字段
        - **NavbarGroup 对象** 应该有一个 `text` 字段和一个 `children` 字段。 `children` 字段同样是一个 **导航栏数组**
        - **字符串** 应为目标页面文件的路径。它将会被转换为 **NavbarItem 对象**，将页面标题作为 `text`，将页面路由路径作为 `link` 
- 示例：

    ```ts
    import { defaultTheme } from 'vuepress'
    
    export default {
      theme: defaultTheme({
        navbar: [
          // NavbarItem
          {
            text: 'Foo',
            link: '/foo/',
          },
          // NavbarGroup
          {
            text: 'Group',
            children: ['/group/foo.md', '/group/bar.md'],
          },
          // 字符串 - 页面文件路径
          '/bar/README.md',
          // 嵌套 Group - 最大深度为 2
          {
            text: 'Group',
            children: [
              {
                text: 'SubGroup',
                children: ['/group/sub/foo.md', '/group/sub/bar.md'],
              },
            ],
          },
          // 控制元素何时被激活
          {
            text: 'Group 2',
            children: [
              {
                text: 'Always active',
                link: '/',
                // 该元素将一直处于激活状态
                activeMatch: '/',
              },
              {
                text: 'Active on /foo/',
                link: '/not-foo/',
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
              },
            ],
          },
        ],
      }),
    }
    ```

#### logo

- 类型：`null | string`
- 详情：
    - Logo 图片的 `URL`
    - Logo 图片将会显示在导航栏的左端
    - 设置为 `null` 可以禁用 Logo
- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        // Public 文件路径
        logo: '/images/hero.png',
        // URL
        logo: 'https://vuejs.org/images/logo.png',
      }),
    }
    ```

#### logoDark

- 类型：`null | string`
- 详情：
    - 在夜间模式中使用的 Logo 图片的 `URL`
    - 如果您想在夜间模式中使用不同的 Logo 图片，就可以使用该配置
    - 设置为 `null` 可以在夜间模式下禁用 Logo。忽略该配置项将会在夜间模式中使用 logo 配置
- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        // Public 文件路径
        logoDark: '/images/hero.png',
        // URL
        logoDark: 'https://vuejs.org/images/logo.png',
      }),
    }
    ```

#### repo

- 类型：`string`
- 详情：
    - 项目仓库的 `URL`
    - 它将被用作 **仓库链接** 的链接。仓库链接将会显示为导航栏的最后一个元素
- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        // 如果您按照 `organization/repository` 的格式设置它
        // 我们会将它作为一个 GitHub 仓库
        repo: 'vuejs/vuepress',
        // 您也可以直接将它设置为一个 URL
        repo: 'https://gitlab.com/foo/bar',
      }),
    }
    ```

#### selectLanguageText

- 类型：`string`
- 详情：
    - 选择语言菜单的文字
    - 如果您在站点配置中设置了多个 `locales`，那么 **选择语言菜单** 就会显示在导航栏中仓库按钮的旁边
    - 该配置项 **仅能在主题配置的 `locales` 的内部生效**
- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        locales: {
          '/': {
            selectLanguageText: 'Languages',
          },
          '/zh/': {
            selectLanguageText: '选择语言',
          },
        },
      }),
    }
    ```

#### selectLanguageAriaLabel

- 类型：`string`
- 详情：
    - 选择语言菜单的 `aria-label` 属性
    - 它主要是为了站点的可访问性（a11y）
    - 该配置项 **仅能在主题配置的 `locales` 的内部生效**
- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        locales: {
          '/': {
            selectLanguageAriaLabel: 'Languages',
          },
          '/zh/': {
            selectLanguageAriaLabel: '选择语言',
          },
        },
      }),
    }
    ```

#### selectLanguageName

- 类型：`string`
- 详情：
    - `Locale` 的语言名称
    - 该配置项 **仅能在主题配置的 locales 的内部生效**。它将被用作 `locale` 的语言名称，展示在 **选择语言菜单** 内
- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        locales: {
          '/': {
            selectLanguageName: 'English',
          },
          '/zh/': {
            selectLanguageName: '简体中文',
          },
        },
      }),
    }
    ```

#### sidebar

- 类型：`false | 'auto' | SidebarConfigArray | SidebarConfigObject`
- 默认值：`'auto'`
- 详情：
    - 侧边栏配置
    - 您可以通过页面的 `sidebar frontmatter` 来覆盖这个全局配置
    - 设置为 `false` 可以禁用侧边栏
    - 如果您设置为 `'auto'`，侧边栏会根据页面标题自动生成
    - 为了手动配置侧边栏元素，您可以将其设置为 **侧边栏数组**，其中的每个元素是一个 **SidebarItem 对象** 或者一个 **字符串**
        - **SidebarItem 对象** 应该有一个 `text` 字段，有一个可选的 `link` 字段、一个可选的 `children` 字段和一个可选的 `collapsible` 字段。 `children` 字段同样是一个 **侧边栏数组**。`collapsible` 字段来控制它是否可折叠
        - **字符串** 应为目标页面文件的路径。它将会被转换为 **SidebarItem 对象**，将页面标题作为 `text`，将页面路由路径作为 `link`，并根据页面小标题自动生成 `children`
    - 如果您想在不同子路径中使用不同的侧边栏，您可以将该配置项设置为 **侧边栏对象**
        - Key 为路径前缀
        - Value 为 **侧边栏数组**
- 示例1：

    ```ts
    export default {
      theme: defaultTheme({
        // 侧边栏数组
        // 所有页面会使用相同的侧边栏
        sidebar: [
          // SidebarItem
          {
            text: 'Foo',
            link: '/foo/',
            children: [
              // SidebarItem
              {
                text: 'github',
                link: 'https://github.com',
                children: [],
              },
              // 字符串 - 页面文件路径
              '/foo/bar.md',
            ],
          },
          // 字符串 - 页面文件路径
          '/bar/README.md',
        ],
      }),
    }
    ```

- 示例2：

    ```ts
    export default {
      theme: defaultTheme({
        // 侧边栏对象
        // 不同子路径下的页面会使用不同的侧边栏
        sidebar: {
          '/guide/': [
            {
              text: 'Guide',
              children: ['/guide/README.md', '/guide/getting-started.md'],
            },
          ],
          '/reference/': [
            {
              text: 'Reference',
              // 可折叠的侧边栏
              collapsible: true,
              children: ['/reference/cli.md', '/reference/config.md'],
            },
          ],
        },
      }),
    }
    ```

#### sidebarDepth

- 类型：`number`
- 默认值：`2`
- 详情：
    - 设置根据页面标题自动生成的侧边栏的最大深度
        - 设为 `0` 来禁用所有级别的页面标题
        - 设为 `1` 来包含 `<h2>` 标题
        - 设为 `2` 来包含 `<h2>` 和 `<h3>` 标题
        - ...
    - 最大值取决于您通过 [markdown.headers.level](https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-headers) 提取了哪些级别的标题
    - 由于 `markdown.headers.level` 的默认值是 `[2, 3]`，因此 `sidebarDepth` 的默认最大值是 `2`
    - 您可以通过页面的 `sidebarDepth frontmatter` 来覆盖这个全局配置

- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        sidebarDepth: 2,
      }),
    }
    ```

#### editLink

- 类型：`boolean`
- 默认值：`true`
- 详情：
    - 是否启用 **编辑此页** 链接
    - 您可以通过页面的 `editLink frontmatter` 来覆盖这个全局配置
- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        editLinks: true,
      }),
    }
    ```

#### editLinkText

- 类型：`string`
- 默认值：`'Edit this page'`
- 详情：
    - **编辑此页** 链接的文字
- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        editLinkText: '编辑此页',
      }),
    }
    ```

#### docsDir

- 类型：`string`
- 默认值：`''`
- 详情：
    - 文档源文件存放在仓库中的目录名
    - 它将会用于生成 **编辑此页** 的链接
- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        docsDir: 'docs',
      }),
    }
    ```

#### lastUpdated

- 类型：`boolean`
- 默认值：`true`
- 详情：
    - 是否启用 **最近更新时间戳**
    - 您可以通过页面的 `lastUpdated frontmatter` 来覆盖这个全局配置。要注意的是，如果您已经将该选项设为了 `false`，那么这个功能会被完全禁用，并且无法在 `locales` 或页面 `frontmatter` 中启用
- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        lastUpdated: true,
      }),
    }
    ```

#### lastUpdatedText

- 类型：`string`
- 默认值：`'Last Updated'`
- 详情：
    - 最近更新时间戳 **标签的文字**
- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        lastUpdatedText: '上次更新',
      }),
    }
    ```

#### notFound

- 类型：`string[]`
- 默认值：`['Not Found']`
- 详情：
    - **404 页面** 的提示信息
    - 当用户进入 404 页面时，会从数组中随机选取一条信息进行展示
- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
      }),
    }
    ```

#### backToHome

- 类型：`string`
- 默认值：`'Back to home'`
- 详情：
    - 404 页面中 **返回首页** 链接的文字
- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        backToHome: '返回首页',
      }),
    }
    ```

#### openInNewWindow

- 类型：`string`
- 默认值：`'open in new window'`
- 详情：
    - [ExternalLinkIcon.](https://v2.vuepress.vuejs.org/zh/reference/plugin/external-link-icon.html#externallinkicon) 链接内的 `sr-only` 文字
    - 它主要是为了站点的可访问性（a11y）
- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        openInNewWindow: '在新窗口打开',
      }),
    }
    ```

#### toggleColorMode

- 类型：`string`
- 默认值：`'toggle color mode'`
- 详情：
    - 切换颜色模式按钮的标题文字
    - 它主要是为了站点的可访问性（a11y）
- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        toggleColorMode: '切换颜色模式',
      }),
    }
    ```

#### toggleSidebar

- 类型：`string`
- 默认值：`'toggle sidebar'`
- 详情：
    - 切换侧边栏按钮的标题文字
    - 它主要是为了站点的可访问性（a11y）
- 示例：

    ```ts
    export default {
      theme: defaultTheme({
        toggleSidebar: '切换侧边栏',
      }),
    }
    ```

## Frontmater 站点首页

默认的主题提供了一个首页（Homepage）的布局（用于这个网站的主页）。

想要使用它，需要在您的根级 `README.md` 或 `index.md` 的 [YAML front matter](https://jekyllrb.com/) 指定 `home: true`。

### 首页

本节的 `Frontmatter` 只会在首页中生效。

#### home

- 类型：`boolean`
- 详情：
    - 设定该页面是 **首页** 还是 **普通页面**
    - 如果您不设置该 `Frontmatter` 或将其设为 `false`，则该页面会是一个 [普通页面](#普通页面)
- 示例：

    ```md
    ---
    home: true
    ---
    ```

#### heroImage

- 类型：`string`
- 详情：
    - 首页图片的 URL
- 示例：

    ```md
    ---
    # Public 文件路径
    heroImage: /images/hero.png
    # URL
    heroImage: https://vuejs.org/images/logo.png
    ---
    ```

#### heroImageDark

- 类型：`string`
- 详情：
    - 在夜间模式中使用的首页图片的 URL
    - 如果您想在夜间模式中使用不同的首页图片，就可以使用该配置项
- 示例：

    ```md
    ---
    # Public 文件路径
    heroImageDark: /images/logo.png
    # URL
    heroImageDark: https://vuejs.org/images/logo.png
    ---
    ```

#### heroText

- 类型：`string | null`
- 详情：
    - 首页的大标题
    - 如果不设置，则默认使用站点 title
    - 设置为 null 来禁用首页大标题
- 示例：

    ```md
    ---
    heroText: Sankgao Blog
    ---
    ```

#### tagline

- 类型：`string | null`
- 详情：
    - 首页的标语
    - 如果不设置，则默认使用站点 `description`
    - 设置为 null 来禁用首页标语
- 示例：

    ```md
    ---
    tagline: Vue 驱动的静态网站生成器
    ---
    ```

#### actions

- 类型：

    ```ts
    Array<{
      text: string
      link: string
      type?: 'primary' | 'secondary'
    }>
    ```

- 详情：
    - 配置首页按钮
- 示例：

    ```md
    ---
    actions:
      - text: 快速上手
        link: /zh/guide/getting-started.html
        type: primary

      - text: 项目简介
        link: /guide/
        type: secondary
    ---
    ```

#### features

- 类型：

    ```ts
    Array<{
      title: string
      details: string
    }>
    ```

- 详情：
    - 配置首页特性列表
- 示例：

    ```md
    ---
    features:
      - title: 简洁至上
        details: 以 Markdown 为中心的项目结构，以最少的配置帮助您专注于写作

      - title: Vue 驱动
        details: 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题

      - title: 高性能
        details: VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行
    ---
    ```

#### footer

- 类型：`string`
- 详情：
    - 首页的页脚
- 示例：

    ```md
    ---
    footer: MIT Licensed | Copyright © 2023-present [Sankgao](https://github.com/sankgao/sankgao.github.io)
    ---
    ```

#### footerHtml

- 类型：`boolean`
- 详情：
    - 是否允许页脚中使用 `HTML`
    - 如果设置为 `true`，那么 footer 会被作为 `HTML` 代码处理
- 示例：

    ```md
    ---
    footerHtml: true
    ---
    ```

### 普通页面

`Frontmatter` 只会在普通页面中生效。

#### prev

- 类型：`NavLink | string`
- 详情：
    - 上一个页面的链接
    - 如果您不设置该 `Frontmatter`，该链接会自动根据侧边栏配置进行推断
    - 为了手动配置上一页面的链接，您可以将其设置为一个 **NavLink 对象** 或者一个 **字符串**
        - **NavLink 对象** 应该有一个 `text` 字段和一个 `link` 字段
        - **字符串** 应为目标页面文件的路径。它将会被转换为 **NavLink 对象**，将页面标题作为 `text`，将页面路由路径作为 `link`
- 示例：

    ```md
    ---
    # NavLink
    prev:
      text: Get Started
      link: /guide/getting-started.html

    # NavLink - 外部 URL
    prev:
      text: GitHub
      link: https://github.com

    # 字符串 - 页面文件路径
    prev: /guide/getting-started.md

    # 字符串 - 页面文件相对路径
    prev: ../../guide/getting-started.md
    ---
    ```

#### next

- 类型：`NavLink | string`
- 详情：
    - 下一个页面的链接
    - 如果您不设置该 `Frontmatter`，该链接会自动根据侧边栏配置进行推断
    - 类型和 `prev Frontmatter` 相同
- 示例：

    ```md
    ---
    # NavLink
    next:
      text: Get Started
      link: /guide/getting-started.html

    # NavLink - 外部 URL
    next:
      text: GitHub
      link: https://github.com

    # 字符串 - 页面文件路径
    next: /guide/getting-started.md

    # 字符串 - 页面文件相对路径
    next: ../../guide/getting-started.md
    ---
    ```

## Frontmatter 页面属性

### title

- 类型：`string`
- 详情：
    - 页面的标题
    - 如果您不在 Frontmatter 中设置 title ，那么页面中第一个一级标题（即 `# title`）的内容会被当作标题使用
- 示例：

    ```md
    ---
    title: 页面的标题
    ---
    ```

### date

- 类型：`string`
- 详情：
    - 页面的创建日期
    - 应按照 `yyyy-MM-dd` 的格式来指定日期，或者遵循 [YAML Timestamp Type](https://yaml.org/type/timestamp.html)
- 示例：

    ```md
    ---
    date: 2023-4-6
    ---
    ```

### description

- 类型：`string`
- 详情：
    - 页面的描述
    - 它将会覆盖 **站点配置** 中的 description 配置项
- 示例：

    ```md
    ---
    description: 文本描述
    ---
    ```

### permalink

- 类型：`string`
- 详情：
    - 页面的永久链接
    - 它将会覆盖根据文件路径来决定的默认路由路径
- 示例：

    ```md
    ---
    permalink: 链接地址
    ---
    ```
