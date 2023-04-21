---
title: VuePress 插件
icon: plugins
date: 2023-04-19
category: VuePress
tag:
    - VuePress
---

博客自带的一些插件和添加的 VuePress 插件。

<!-- more -->

## Markdown 增强

::: info
`vuepress-theme-hope` 主题自带 [vuepress-plugin-md-enhance](https://plugin-md-enhance.vuejs.press/zh/) 插件
:::

### 启用 Markdown 增强

除了 VuePress 本身新增了一些 Markdown 语法外，`vuepress-theme-hope` 通过 [vuepress-plugin-md-enhance](https://plugin-md-enhance.vuejs.press/zh/) 插件，在 Markdown 中启用了更多的语法与新功能。

主题选项中的 `plugin.mdEnhance` 会传递给 `vuepress-plugin-md-enhance` 作为插件选项传递

### 自定义容器

主题可以为您添加 **信息**、**注释**、**提示**、**警告**、**危险** 和 **详情** 自定义容器的支持。

**配置：**

::: code-tabs#language

@tab:active TS

```ts{8-11}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        // this is the default option, so you can use it directly
        container: true,
      },
    },
  }),
});
```

@tab JS

```js{7-10}
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        // this is the default option, so you can use it directly
        container: true,
      },
    },
  }),
};
```

:::

**演示：**

```md
::: info
信息容器。
:::

::: note
注释容器。
:::

::: tip
提示容器
:::

::: warning
警告容器
:::

::: danger
危险容器
:::

::: details
详情容器
:::
```

::: info
信息容器。
:::

::: note
注释容器。
:::

::: tip
提示容器
:::

::: warning
警告容器
:::

::: danger
危险容器
:::

::: details
详情容器
:::

### 自定义对齐

**配置：**

::: code-tabs#language

@tab:active TS

```ts{8-10}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        align: true,
      },
    },
  }),
});
```

@tab JS

```js{7-9}
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        align: true,
      },
    },
  }),
};
```

:::

**语法：**

```md
::: left
左对齐的内容
:::

::: center
居中的内容
:::

::: right
右对齐的内容
:::

::: justify
两端对齐的内容
:::
```

:::: details 嵌套和转义
- 嵌套可以通过增加外层容器的 marker 数量完成：

    ```md
    :::: center
    居中的内容...
    ::: left
    左对齐的内容...
    :::
    居中的内容...
    ::::
    ```

    **会被渲染为：**

    居中的内容...

    左对齐的内容...

    居中的内容...

- 转义可以通过在 marker 前添加 `\` 转义来完成：

    ```md
    \::: left

    :::
    ```

    **会被渲染为：**

    \::: left

    :::

::::

**演示：**

```md
:::: danger W.I.P
vuepress-theme-hope v2 仍在制作中，API 可能会有

::: center
重大的变动。
:::

如果您在使用过程中遇到了 bug，可以

::: right
[提一个 issue](https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues)。
:::

::::
```

:::: danger W.I.P
vuepress-theme-hope v2 仍在制作中，API 可能会有

::: center
重大的变动。
:::

如果您在使用过程中遇到了 bug，可以

::: right
[提一个 issue](https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues)。
:::

::::

### 选项卡

**配置：**

::: code-tabs#language

@tab:active TS

```ts{8-11}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        // 添加选项卡支持
        tabs: true,
      },
    },
  }),
});
```

@tab JS

```js{7-10}
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        // 添加选项卡支持
        tabs: true,
      },
    },
  }),
};
```

:::

**演示：**

- 您需要将选项卡包装在 `tabs` 容器中
- 您可以在 `tabs` 容器中添加一个 `id` 后缀，该后缀将用作选项卡 `id`。 所有具有相同 `id` 的选项卡将共享相同的切换事件
- 在这个容器内，您应该使用 `@tab` 标记来标记和分隔选项卡内容
- 在 `@tab` 标记后，您可以添加文本 `:active` 默认激活选项卡，之后的文本将被解析为选项卡标题
- 默认情况下，标题将用作选项卡的值，但您可以使用 `id` 后缀覆盖它
- 如果您想让一些选项卡组一起切换，您可以使用相同的选项卡 `ID` 来绑定它们。

```md
::: tabs#fruit

@tab apple#apple

Apple

@tab:active banana

Banana

@tab orange

Orange

:::
```

::: tabs#fruit

@tab apple#apple

Apple

@tab:active banana

Banana

@tab orange

Orange

:::

### 代码块分组

**配置：**

::: code-tabs#language

@tab:active TS

```ts{8-10}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        codetabs: true,
      },
    },
  }),
});
```

@tab JS

```js{7-9}
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        codetabs: true,
      },
    },
  }),
};
```

:::

**演示：**

此功能与 [选项卡](#选项卡) 功能相同，但它是专门为代码块构建的。

代码选项卡只会渲染 `@tab` 标记后的代码块，其他 Markdown 内容将被忽略。

````md
::: code-tabs#language

@tab:active pnpm

```bash
pnpm add -D vuepress-plugin-md-enhance
```

@tab yarn

```bash
yarn add -D vuepress-plugin-md-enhance
```

@tab npm

```bash
npm i -D vuepress-plugin-md-enhance
```

:::
````

::: code-tabs#language

@tab:active pnpm

```bash
pnpm add -D vuepress-plugin-md-enhance
```

@tab yarn

```bash
yarn add -D vuepress-plugin-md-enhance
```

@tab npm

```bash
npm i -D vuepress-plugin-md-enhance
```

:::

### 脚注

**配置：**

::: code-tabs#language

@tab:active JS

```ts{8-10}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        footnote: true,
      },
    },
  }),
});
```

@tab TS

```js{7-9}
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        footnote: true,
      },
    },
  }),
};
```

:::

**演示：**

- 在 Markdown 中使用 **[^锚点文字]** 来定义脚注
- 在之后的任何位置使用 **[^锚点文字]: ...** 来描述脚注内容
- 如果脚注包含多个段落，其后的段落应当保持双层缩进

```md
脚注 1 链接[^first]。

脚注 2 链接[^second]。

行内的脚注^[行内脚注文本] 定义。

重复的页脚定义[^second]。

[^first]: 脚注 **可以包含特殊标记**

    也可以由多个段落组成

[^second]: 脚注文字。
```

脚注 1 链接[^first]。

脚注 2 链接[^second]。

行内的脚注^[行内脚注文本] 定义。

重复的页脚定义[^second]。

[^first]: 脚注 **可以包含特殊标记**

    也可以由多个段落组成

[^second]: 脚注文字。

### 上下角标

**配置：**

::: code-tabs#language

@tab:active TS

```ts{8-13}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        // 启用下角标功能
        sub: true,
        // 启用上角标
        sup: true,
      },
    },
  }),
});
```

@tab JS

```js{7-12}
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        // 启用下角标功能
        sub: true,
        // 启用上角标
        sup: true,
      },
    },
  }),
};
```

:::

**演示：**

- 使用 `^ ^` 进行上角标标注
- 使用 `~ ~` 进行下角标标注

```md
- 19^th^
- H~2~O
```

- 19^th^
- H~2~O

### 标记

**配置：**

::: code-tabs#language

@tab:active TS

```ts{8-10}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        mark: true,
      },
    },
  }),
});
```

@tab JS

```js{7-9}
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        mark: true,
      },
    },
  }),
};
```

:::

**语法：**

使用 `== ==` 进行标记。请注意两边需要有空格。

**演示：**

VuePress Theme Hope ==非常== 强大!

```md
VuePress Theme Hope ==非常== 强大!
```

### 任务列表

**配置：**

::: code-tabs#language

@tab:active TS

```ts{8-10}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        tasklist: true,
      },
    },
  }),
});
```

@tab JS

```js{7-9}
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        tasklist: true,
      },
    },
  }),
};

```

:::

**语法：**

- 使用 `- [ ] 一些文字` 渲染一个未勾选的任务项
- 使用 `- [x] 一些文字` 渲染一个勾选了的任务项（我们也支持大写的 X）

**演示：**

```md
- [ ] 计划 A
- [x] 计划 B
```

- [ ] 计划 A
- [x] 计划 B

### 图片

**配置：**

::: code-tabs#language

@tab:active TS

```ts{8-17}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        // 启用 figure
        figure: true,
        // 启用图片懒加载
        imgLazyload: true,
        // 启用图片标记
        imgMark: true,
        // 启用图片大小
        imgSize: true,
      },
    },
  }),
});
```

@tab JS

```js{7-16}
/// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        // 启用 figure
        figure: true,
        // 启用图片懒加载
        imgLazyload: true,
        // 启用图片标记
        imgMark: true,
        // 启用图片大小
        imgSize: true,
      },
    },
  }),
};

```

:::

#### 图片懒加载

如果您想在您的页面中延迟加载图片，您可以在插件选项中设置 `imgLazyload: true`。

::: note
我们正在使用原生 `HTML5` 功能启用延迟加载，因此您的浏览器必须支持 [loading=lazy 属性](https://caniuse.com/loading-lazy-attr)
:::

#### 图片 ID 标记

GFM 支持通过 ID 标记图片，使得图片只在特定的模式显示。我们同时支持 GitHub 的标记与简易标记 `#light` 和 `#dark`。

您可以通过主题选项中的 `plugins.mdEnhance.imgMark` 选项控制它。

```md
![GitHub Light](/assets/icon/github-light.png#gh-dark-mode-only)
![GitHub Dark](/assets/icon/github-dark.png#gh-light-mode-only)

![GitHub Light](/assets/icon/github-light.png#dark)
![GitHub Dark](/assets/icon/github-dark.png#light)
```

您可以将对象传递给 `imgMark` 以配置 ID 标记，可用选项有：

```ts
interface ImageMarkOptions {
  /** 仅限日间模式的 ID */
  light?: string[];
  /** 仅限夜间模式的 ID */
  dark?: string[];
}
```

#### 图片尺寸

当您在主题选项中设置 `plugin.mdEnhance.imgSize: true` 时，可以使用 `=widthxheight` 指定图像大小。

```md
![Alt](/example.png =200x300)

![Alt](/example.jpg "图片标题" =200x)
![Alt](/example.bmp =x300)
```

上面的 Markdown 将被解析为：

```md
<img src="/example.png" width="200" height="300" />
<img src="/example.jpg" title="图片标题" width="200" />
<img src="/example.bmp" height="300" />
```

#### 图片 Figure

有时，您可能希望为图像添加描述，并将其单独展示在上下文中，在这种情况下，您应该在插件选项中设置 `figure: true`。

这样当您单独将图片至于一行（也可同时嵌套链接），图像将显示为 `<figure>`，标题或图片替代文字将显示为 `<figcaption>`。

```md
![VuePress Hope 图标](/favicon.ico)

[![VuePress Hope 图标](/favicon.ico)](https://theme-hope.vuejs.press/)

![VuePress Hope 图标](/favicon.ico "VuePress Hope 图标")

[![VuePress Hope 图标](/favicon.ico "VuePress Hope 图标")](https://theme-hope.vuejs.press/)

![VuePress Hope 图标](/logo.svg "VuePress Hope 图标" =300x300)
```

### 卡片

**配置：**

::: code-tabs#language

@tab:active TS

```ts{8-10}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        card: true,
      },
    },
  }),
});
```

@tab JS

```js{7-9}
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        card: true,
      },
    },
  }),
};
```

:::

**语法：**

您可以使用卡片代码块来在 Markdown 中添加卡片。

````md
```card
# 卡片数据
```
````

默认情况下，您应该使用 YAML 格式来编写卡片数据，但您也可以通过在代码块后添加 `:json` 后缀来使用 JSON 格式。

````md
```card:json
{
  // 卡片数据
}
```
````

卡片数据支持 `title`、`desc`、`logo`、`link` 和 `color` 属性。

**演示：**

````md
```card
title: Sankgao
desc: Where there is light, there is hope
logo: https://sankgao.github.io/logo.svg
link: https://sankgao.github.io
color: rgba(93, 175, 241, 0.5)
```

```card:json
{
  "title": "Sankgao",
  "desc": "Where there is light, there is hope",
  "logo": "https://sankgao.github.io/logo.svg",
  "link": "https://sankgao.github.io",
  "color": "rgba(93, 175, 241, 0.5)"
}
```
````

```card
title: Sankgao
desc: Where there is light, there is hope
logo: https://sankgao.github.io/logo.svg
link: https://sankgao.github.io
color: rgba(93, 175, 241, 0.5)
```

```card:json
{
  "title": "Sankgao",
  "desc": "Where there is light, there is hope",
  "logo": "https://sankgao.github.io/logo.svg",
  "link": "https://sankgao.github.io",
  "color": "rgba(93, 175, 241, 0.5)"
}
```

### Chart

此插件使用 [chart.js](https://www.chartjs.org/docs/latest/) 提供相应功能。

**配置：**

::: code-tabs#language

@tab:active TS

```ts{8-10}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        chart: true,
      },
    },
  }),
});
```

@tab JS

```js{7-9}
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        chart: true,
      },
    },
  }),
};
```

:::

**语法：**

````md
::: chart 标题

```json
{
  // 此处为图表配置
}
```

:::
````

我们也支持 `js` 和 `javascript` 的代码块，您应当将导出对象赋值给 `module.exports`。

**演示：**

- 块状图

    ::: chart 一个块状图案例
    
    ```json
    {
      "type": "bar",
      "data": {
        "labels": ["红色", "蓝色", "黄色", "绿色", "紫色", "橙色"],
        "datasets": [
          {
            "label": "投票数",
            "data": [12, 19, 3, 5, 2, 3],
            "backgroundColor": [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            "borderColor": [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            "borderWidth": 1
          }
        ]
      },
      "options": {
        "scales": {
          "y": {
            "beginAtZero": true
          }
        }
      }
    }
    ```
    
    :::

    :::: details 对应代码
    ::: chart 一个块状图案例

    ```json
    {
      "type": "bar",
      "data": {
        "labels": ["红色", "蓝色", "黄色", "绿色", "紫色", "橙色"],
        "datasets": [
          {
            "label": "投票数",
            "data": [12, 19, 3, 5, 2, 3],
            "backgroundColor": [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            "borderColor": [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            "borderWidth": 1
          }
        ]
      },
      "options": {
        "scales": {
          "y": {
            "beginAtZero": true
          }
        }
      }
    }
    ```

    :::
    ::::

- 气泡图

    ::: chart 一个气泡图案例
    
    ```json
    {
      "type": "bubble",
      "data": {
        "datasets": [
          {
            "label": "第一个数据集",
            "data": [
              { "x": 20, "y": 30, "r": 15 },
              { "x": 40, "y": 10, "r": 10 }
            ],
            "backgroundColor": "rgb(255, 99, 132)"
          }
        ]
      }
    }
    ```
    
    :::

    :::: details 对应代码
    ::: chart 一个气泡图案例

    ```json
    {
      "type": "bubble",
      "data": {
        "datasets": [
          {
            "label": "第一个数据集",
            "data": [
              { "x": 20, "y": 30, "r": 15 },
              { "x": 40, "y": 10, "r": 10 }
            ],
            "backgroundColor": "rgb(255, 99, 132)"
          }
        ]
      }
    }
    ```

    :::
    ::::

- 线状图

    ::: chart 一个线状图案例
    
    ```json
    {
      "type": "line",
      "data": {
        "labels": ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
        "datasets": [
          {
            "label": "我的第一个数据集",
            "data": [65, 59, 80, 81, 56, 55, 40],
            "fill": false,
            "borderColor": "rgb(75, 192, 192)",
            "tension": 0.1
          }
        ]
      }
    }
    ```
    
    :::

    :::: details 对应代码
    ::: chart 一个线状图案例

    ```json
    {
      "type": "line",
      "data": {
        "labels": ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
        "datasets": [
          {
            "label": "我的第一个数据集",
            "data": [65, 59, 80, 81, 56, 55, 40],
            "fill": false,
            "borderColor": "rgb(75, 192, 192)",
            "tension": 0.1
          }
        ]
      }
    }
    ```

    :::
    ::::

- 玫瑰图

    ::: chart 一个玫瑰图案例
    
    ```json
    {
      "type": "polarArea",
      "data": {
        "labels": ["红色", "绿色", "黄色", "灰色", "蓝色"],
        "datasets": [
          {
            "label": "我的第一个数据集",
            "data": [11, 16, 7, 3, 14],
            "backgroundColor": [
              "rgb(255, 99, 132)",
              "rgb(75, 192, 192)",
              "rgb(255, 205, 86)",
              "rgb(201, 203, 207)",
              "rgb(54, 162, 235)"
            ]
          }
        ]
      }
    }
    ```
    
    :::

    :::: details 对应代码
    ::: chart 一个玫瑰图案例

    ```json
    {
      "type": "polarArea",
      "data": {
        "labels": ["红色", "绿色", "黄色", "灰色", "蓝色"],
        "datasets": [
          {
            "label": "我的第一个数据集",
            "data": [11, 16, 7, 3, 14],
            "backgroundColor": [
              "rgb(255, 99, 132)",
              "rgb(75, 192, 192)",
              "rgb(255, 205, 86)",
              "rgb(201, 203, 207)",
              "rgb(54, 162, 235)"
            ]
          }
        ]
      }
    }
    ```

    :::
    ::::

- 雷达图

    ::: chart 一个雷达图案例
    
    ```json
    {
      "type": "radar",
      "data": {
        "labels": ["吃饭", "喝水", "睡觉", "设计", "编程", "骑车", "跑步"],
        "datasets": [
          {
            "label": "我的第一个数据集",
            "data": [65, 59, 90, 81, 56, 55, 40],
            "fill": true,
            "backgroundColor": "rgba(255, 99, 132, 0.2)",
            "borderColor": "rgb(255, 99, 132)",
            "pointBackgroundColor": "rgb(255, 99, 132)",
            "pointBorderColor": "#fff",
            "pointHoverBackgroundColor": "#fff",
            "pointHoverBorderColor": "rgb(255, 99, 132)"
          },
          {
            "label": "我的第二个数据集",
            "data": [28, 48, 40, 19, 96, 27, 100],
            "fill": true,
            "backgroundColor": "rgba(54, 162, 235, 0.2)",
            "borderColor": "rgb(54, 162, 235)",
            "pointBackgroundColor": "rgb(54, 162, 235)",
            "pointBorderColor": "#fff",
            "pointHoverBackgroundColor": "#fff",
            "pointHoverBorderColor": "rgb(54, 162, 235)"
          }
        ]
      },
      "options": {
        "elements": {
          "line": {
            "borderWidth": 3
          }
        }
      }
    }
    ```
    
    :::

    :::: details 对应代码
    ::: chart 一个雷达图案例

    ```json
    {
      "type": "radar",
      "data": {
        "labels": ["吃饭", "喝水", "睡觉", "设计", "编程", "骑车", "跑步"],
        "datasets": [
          {
            "label": "我的第一个数据集",
            "data": [65, 59, 90, 81, 56, 55, 40],
            "fill": true,
            "backgroundColor": "rgba(255, 99, 132, 0.2)",
            "borderColor": "rgb(255, 99, 132)",
            "pointBackgroundColor": "rgb(255, 99, 132)",
            "pointBorderColor": "#fff",
            "pointHoverBackgroundColor": "#fff",
            "pointHoverBorderColor": "rgb(255, 99, 132)"
          },
          {
            "label": "我的第二个数据集",
            "data": [28, 48, 40, 19, 96, 27, 100],
            "fill": true,
            "backgroundColor": "rgba(54, 162, 235, 0.2)",
            "borderColor": "rgb(54, 162, 235)",
            "pointBackgroundColor": "rgb(54, 162, 235)",
            "pointBorderColor": "#fff",
            "pointHoverBackgroundColor": "#fff",
            "pointHoverBorderColor": "rgb(54, 162, 235)"
          }
        ]
      },
      "options": {
        "elements": {
          "line": {
            "borderWidth": 3
          }
        }
      }
    }
    ```

    :::
    ::::

- 散点图

    ::: chart 一个散点图案例
    
    ```json
    {
      "type": "scatter",
      "data": {
        "datasets": [
          {
            "label": "散点数据集",
            "data": [
              { "x": -10, "y": 0 },
              { "x": 0, "y": 10 },
              { "x": 10, "y": 5 },
              { "x": 0.5, "y": 5.5 }
            ],
            "backgroundColor": "rgb(255, 99, 132)"
          }
        ]
      },
      "options": {
        "scales": {
          "x": {
            "type": "linear",
            "position": "bottom"
          }
        }
      }
    }
    ```
    
    :::

    :::: details 对应代码
    ::: chart 一个散点图案例

    ```json
    {
      "type": "scatter",
      "data": {
        "datasets": [
          {
            "label": "散点数据集",
            "data": [
              { "x": -10, "y": 0 },
              { "x": 0, "y": 10 },
              { "x": 10, "y": 5 },
              { "x": 0.5, "y": 5.5 }
            ],
            "backgroundColor": "rgb(255, 99, 132)"
          }
        ]
      },
      "options": {
        "scales": {
          "x": {
            "type": "linear",
            "position": "bottom"
          }
        }
      }
    }
    ```

    :::
    ::::


::: info 文档
相关详情，详见 [Chart.js 文档](https://www.chartjs.org/docs/latest/)
:::

### 幻灯片

我们使用 [reveal.js](https://revealjs.com/) 来支持这一功能。

**配置：**

::: code-tabs#language

@tab:active TS

```ts{8-10}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        presentation: true,
      },
    },
  }),
});
```

@tab JS

```js{7-9}
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        presentation: true,
      },
    },
  }),
};
```

:::

您也可以传入一个对象以进行更详细的配置。

`presentation.plugins` 接收一个字符串数组，可以自由配置是否启用一些预设的插件，可接受的插件有:

- `"highlight"`
- `"math"`
- `"search"`
- `"notes"`
- `"zoom"`

您还可以使用 `presentation.revealConfig` 来配置全局传递给 `Reveal.js` 的配置选项。

`Reveal.js` 还提供了更多的 [插件](https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware)。如果您需要某个特定的插件，请在 GitHub 上提出 [Feature Request](https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/new/choose)。

**语法：**

- 使用 `---` 分割幻灯片
- 使用 `--` 对幻灯片进行二次分割（垂直显示）

```md
@slidestart [theme]

<!-- slide1 -->

---

<!-- slide2 -->

---

<!-- slide3 -->

@slideend
```

目前可用的主题（请使用它们直接替换 `[theme]`）：

- auto（默认）
- black
- white
- league
- beige
- sky
- night
- serif
- simple
- solarized
- blood
- moon

主题演示，请详见 [幻灯片主题](https://plugin-md-enhance.vuejs.press/zh/guide/presentation/themes.html)。

**演示：**

````md
@slidestart

## 幻灯片 1

一个有文字和 [链接](https://sankgao.github.io) 的段落

---

## 幻灯片 2

- 项目 1
- 项目 2

---

## 幻灯片 3.1

```js
const a = 1;
```

--

## 幻灯片 3.2

$$
J(\theta_0,\theta_1) = \sum_{i=0}
$$

@slideend
````

@slidestart

## 幻灯片 1

一个有文字和 [链接](https://sankgao.github.io) 的段落

---

## 幻灯片 2

- 项目 1
- 项目 2

---

## 幻灯片 3.1

```js
const a = 1;
```

--

## 幻灯片 3.2

$$
J(\theta_0,\theta_1) = \sum_{i=0}
$$

@slideend

**选项：**

您可以在 `Frontmatter` 设置 `reveal` 以设置特定页面的 `reveal.js` 选项，也可以在插件选项中设置 `presentation` 以全局设置 `reveal.js`。

更多选项，请参见 [reveal.js config](https://revealjs.com/config/)，更多用法，请参阅 [reveal.js 文档](https://revealjs.com/)。

### 流程图

我们使用 [flowchart.js](http://flowchart.js.org/) 来支持这一功能。

**配置：**

::: code-tabs#language

@tab:active TS

```ts{8-10}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        flowchart: true,
      },
    },
  }),
});
```

@tab JS

```js{7-9}
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        flowchart: true,
      },
    },
  }),
};
```

:::

**语法：**

````md
<!-- ↓ :preset 是可选的 -->

```flow:preset

<!-- 放置您的流程图代码 -->

```
````

目前可用的预设:

- vue（默认）
- ant
- pie

**演示：**

````md
```flow
st=>start: 开始|past:>http://www.google.com[blank]
e=>end: 结束|future:>http://www.google.com
op1=>operation: 操作1|past
op2=>operation: 操作2|current
sub1=>subroutine: 子程序|invalid
cond=>condition: 是/否?|approved:>http://www.google.com
c2=>condition: 判断2|rejected
io=>inputoutput: 进行反思...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```
````

```flow
st=>start: 开始|past:>http://www.google.com[blank]
e=>end: 结束|future:>http://www.google.com
op1=>operation: 操作1|past
op2=>operation: 操作2|current
sub1=>subroutine: 子程序|invalid
cond=>condition: 是/否?|approved:>http://www.google.com
c2=>condition: 判断2|rejected
io=>inputoutput: 进行反思...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```

#### 流程图介绍：

##### 节点类型：

定义了结点形状

**开始 & 结束：**

被用于流程开始的第一个节点。默认文字为 `Start`。

- `[Variable]->start: [Text]`

被用于流程结束的最后一个节点。默认文字为 `End`。

- `[Variable]->end: [Text]`

````md
```flow
st=>start: 开始
e=>end: 结束

st->e
```
````

```flow
st=>start: 开始
e=>end: 结束

st->e
```

**操作：**

- `[Variable]->operation: [Text]`

````md
```flow
process=>operation: 操作
e=>end: 结束

process->e
```
````

```flow
process=>operation: 操作
e=>end: 结束

process->e
```

**输入输出：**

- [Variable]->inputoutput: [Text]

````md
```flow
process=>inputoutput: 输入输出
e=>end: 结束

process->e
```
````

```flow
process=>inputoutput: 输入输出
e=>end: 结束

process->e
```

**子程序：**

- [Variable]->subroutine: [Text]

````md
```flow
process=>subroutine: 子程序
e=>end: 结束

process->e
```
````

```flow
process=>subroutine: 子程序
e=>end: 结束

process->e
```

**条件：**

- `[Variable]->condition: [Text]`
- `[Variable]([yesText])->[Position]`
- `[Variable]([noText])->[Position]`

````md
```flow
cond=>condition: 是否执行操作?
process=>operation: 操作
e=>end: 结束

cond(yes)->process->e
cond(no)->e
```
````

```flow
cond=>condition: 是否执行操作?
process=>operation: 操作
e=>end: 结束

cond(yes)->process->e
cond(no)->e
```

**平行：**

定义同时开始的多个程序。

- `[Variable]->parallel: [Text]`
- `[Variable](path1, direction)->[Position]`
- `[Variable](path1, direction)->[Position]`

````md
```flow
para=>parallel: 平行任务
process=>operation: 操作
e=>end: 结束

para(path1, bottom)->process->e
para(path2)->e
```
````

```flow
para=>parallel: 平行任务
process=>operation: 操作
e=>end: 结束

para(path1, bottom)->process->e
para(path2)->e
```

##### 链接

连接方式在流程图中节点定义后描述，使用 `->` 指定一个节点之间的链接，例如 `nodeVar1->nodeVar2->nodeVar3`

流程可以被分开：

```md
nodeVar1->nodeVar2
nodeVar2->nodeVar3
```

连接格式定义如下：

`<node variable name>[(<specification1>[, <specification2])]-><node variable name>[[(<specification1>[, <specification2])]-><node variable name>]`

在 `[]` 中的项是可选的。

##### 方向

以下方向可用，并定义了连接将从节点离开的方向。如果指定符不止一个，则总是最后一个。所有节点都有默认方向，这使其成为可选规范。`<direction>` 的可选值为：

- `left`
- `right`
- `top`
- `bottom`

##### 节点特定说明符

每个节点变量都有可选的说明符，例如方向，有些变量有特殊的说明符，具体取决于下面定义的节点类型。在 `()` 中的变量名后添加说明符，并用 `,` 分隔，例如 `nodeVar (spec1，spec2)`。

- `startoperationinputoutputsubroutine`

    可选方向

    - `startVar(<direction>)->nextNode`
    - `operationVar(<direction>)->nextNode`
    - `inputoutputVar(<direction>)->nextNode`
    - `subroutineVar(<direction>)->nextNode`

- `condition`

    必需指定 `yes` or `no`

    可选方向

    ```md
    conditionalVar(yes, <direction>)->nextNode1
    conditionalVar(no, <direction>)->nextNode2
    ```

- `parallel`

    必需指定路径方向 `path1`、`path2` 或 `path3`

    可选方向

    ```md
    parallelVar(path1, <direction>)->nextNode1
    parallelVar(path2, <direction>)->nextNode2
    parallelVar(path3, <direction>)->nextNode3
    ```

##### 网址

可以使用 `:>` 运算符将外部链接添加到节点。

`[blank]` 指定打开新的页面

```md
st=>start: Start:>http://www.google.com[blank]
e=>end: End:>http://www.yahoo.com
```

##### 建议

文本中可能不应该使用的符号：`=>`、`->`、`:>`、`|`、`@>` 和 `:$`

如果要在流程图中强调特定路径，则可以另外定义它，如下所示：

```md
st@>op1({"stroke":"Red"})@>cond({"stroke":"Red","stroke-width":6,"arrow-end":"classic-wide-long"})@>c2({"stroke":"Red"})@>op2({"stroke":"Red"})@>e({"stroke":"Red"})
```

### 组件

通过使用 [vuepress-plugin-components](https://plugin-components.vuejs.press/zh/guide/) 插件，您可以在您的 Markdown 文件中导入和使用一些组件。

可用组件：

- `ArtPlayer`
- `AudioPlayer`
- `Badge`
- `BiliBili`
- `CodePen`
- `FontIcon`
- `PDF`
- `Replit`
- `SiteInfo`
- `StackBlitz`
- `VideoPlayer`
- `YouTube`

默认情况下，`<Badge />` 和 `<FontIcon />` 是启用的。

**配置：**

要启用组件，您应该使用组件名称数组设置 `plugin.components.components`。

::: code-tabs#language

@tab:active TS

```ts{8-10}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      components: {
        // 您想使用的组件
        components: [
          "AudioPlayer",
          "Badge",
          "BiliBili",
          "CodePen",
          "PDF",
          "Replit",
          "StackBlitz",
          "VideoPlayer",
          "YouTube",
        ],
      },
    },
  }),
});
```

@tab JS

```js{7-9}
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      components: {
        // 您想使用的组件
        components: [
          "AudioPlayer",
          "Badge",
          "BiliBili",
          "CodePen",
          "PDF",
          "Replit",
          "StackBlitz",
          "VideoPlayer",
          "YouTube",
        ],
      },
    },
  }),
};
```

:::

**演示：**

- Badge

    支持自定义颜色的徽章。

    - <Badge text="tip" type="tip" />
    - <Badge text="warning" type="warning" />
    - <Badge text="danger" type="danger" />
    - <Badge text="info" type="info" />
    - <Badge text="note" type="note" />

    Badge Test <Badge text="Building" type="warning" /> <Badge text="MrHope" color="grey" />

    ```md
    Badge Test <Badge text="Building" type="warning" /> <Badge text="MrHope" color="grey" />
    ```

- BiliBili

    在 Markdown 文件中嵌入 B 站视频。

    一个 B 站视频：

    <BiliBili bvid="BV1kt411o7C3" />

    ```md
    <BiliBili bvid="BV1kt411o7C3" />
    ```

    一个自定义空降地址且自动播放的 B 站视频：

    ```md
    <BiliBili aid="34304064" cid="109293122" ratio="9:16" time="60" autoplay page="2" />
    ```

- SiteInfo

    基础站点信息：

    <SiteInfo name="Sankgao Blog" url="https://sankgao.gihub.io" preview="https://theme-hope.vuejs.press/assets/image/mrhope.jpg" />

    ```md
    <SiteInfo name="Sankgao Blog" url="https://sankgao.gihub.io" preview="https://theme-hope.vuejs.press/assets/image/mrhope.jpg" />
    ```

    有更多属性的站点信息：

    <SiteInfo
      name="Sankgao Blog"
      desc="Where there is light, there is hope"
      url="https://sankgao.gihub.io"
      logo="https://sankgao.gihub.io/logo.svg"
      repo="https://github.com/sankgao/sankgao.gihub.io"
      preview="https://theme-hope.vuejs.press/assets/image/mrhope.jpg"
    />
    
    ```md
    <SiteInfo
      name="Sankgao Blog"
      desc="Where there is light, there is hope"
      url="https://sankgao.gihub.io"
      logo="https://sankgao.gihub.io/logo.svg"
      repo="https://github.com/sankgao/sankgao.gihub.io"
      preview="https://theme-hope.vuejs.press/assets/image/mrhope.jpg"
    />
    ```

### 外部引用

除了在 Markdown 内部使用新语法来增强内容外，您也可以使用 `<iframe>` 或 `<img>` 从外部引入链接来增强您的 Markdown 内容。

#### shields.io

您可以使用 [shields.io](https://shields.io/) 生成大量的动态勋章，比如项目的 **Stars**、**NPM 版本号**、**下载量** 等。

```md
![Version](https://img.shields.io/npm/v/vuepress-theme-hope.svg?style=flat-square&logo=npm)
![Downloads](https://img.shields.io/npm/dm/vuepress-theme-hope.svg?style=flat-square&logo=npm)
![Dependencies](https://img.shields.io/librariesio/release/npm/vuepress-theme-hope?style=flat-square)
```

![Version](https://img.shields.io/npm/v/vuepress-theme-hope.svg?style=flat-square&logo=npm)
![Downloads](https://img.shields.io/npm/dm/vuepress-theme-hope.svg?style=flat-square&logo=npm)
![Dependencies](https://img.shields.io/librariesio/release/npm/vuepress-theme-hope?style=flat-square)

当然您可以单纯利用它生成静态的徽章。您可以通过修改参数来定制文字、样式、颜色与大小。

```md
![Theme: vuepress-theme-hope](https://img.shields.io/badge/主题-vuepress--theme--hope-green.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGNsYXNzPSJpY29uIiB2aWV3Qm94PSIwIDAgMzI4MC45NDQgMjgwMCI+CiAgPHBhdGggZD0iTTE2NDUuMzMyIDYwMS4wMDRoMzc1LjY3NUwxMDgxLjgyIDIyMzguNDc4IDE0Mi42MzYgNjAxLjAwNGg3MTguNDc3bDIyMC43MDggMzc5LjcwNCAyMTYuMDEzLTM3OS43MDR6IiBmaWxsPSIjNDFiODgzIiAvPgogIDxwYXRoIGQ9Ik0xNDIuNjM2IDYwMS4wMDRsOTM5LjE4NSAxNjM3LjQ3NCA5MzkuMTg2LTE2MzcuNDc0aC0zNzUuNjc1bC01NjMuNTEgOTgyLjQ4NC01NjguMjA4LTk4Mi40ODR6IiBmaWxsPSIjNDFiODgzIiAvPgogIDxwYXRoIGQ9Ik01MTMuMTg4IDYwMS4wMDRsNTY4LjIwNyA5ODcuMjMgNTYzLjUxMS05ODcuMjNoLTM0Ny40OThsLTIxNi4wMTMgMzc5LjcwNC0yMjAuNzA4LTM3OS43MDR6TTE2MDcuNzkyIDEzMTEuODNsNTk0LjY3OCAyLjI5MyAxODcuMzUzLTMxNi4zMjUtNTk4LjY2MiAyLjI5MnpNMjE5OC41MDYgMTkwOS41N0MyODY3LjQzNiA3MzIuNyAyOTM5LjUwMiA2MDUuNDI2IDI5MzcuODc0IDYwMy43OGMtLjcxNS0uNzIzIDQ1LjMwMy0xLjMxNCAxMDIuMjYyLTEuMzE0czEwMy41NjIuNDI4IDEwMy41NjIuOTUxYzAgLjUyMy0yMDguNTcgMzY3Ljk3OC00NjMuNDkxIDgxNi41NjdMMjIxNi43MTUgMjIzNS42bC0xMDIuMS41OTYtMTAyLjEwMi41OTZ6IiBmaWxsPSIjMzU0OTVlIiAvPgogIDxwYXRoIGQ9Ik0xNjgwLjU2MyAyMjMzLjMyOGMwLTEuMzQgMTY4LjIwOC0yOTguMTQ1IDQ0MC4zNzUtNzc3LjA0OGE0MTM1NjQ1Ljc3NSA0MTM1NjQ1Ljc3NSAwIDAwMzM3LjYxOS01OTQuMTlsMTQ2LjEzLTI1Ny4yNSAxNzAuNzQ2LS4wNCAxNzAuNzQ3LS4wNC01LjUzNiA5Ljc0MWMtMy4wNDQgNS4zNTgtNDMuNzI3IDc3LjMwMi05MC40MDcgMTU5Ljg3NS04NS4zNTYgMTUwLjk5Mi0zMzcuNTYyIDU5NS4xNjMtNjU2LjYwMiAxMTU2LjM3M2wtMTcyIDMwMi41NTktMTcwLjUzNi41ODhjLTkzLjc5NS4zMjItMTcwLjUzNi4wNjktMTcwLjUzNi0uNTY3eiIgZmlsbD0iIzQxYjg4MyIgLz4KICA8cGF0aCBkPSJNMTQyOS43ODMgMTYyNS4zNTFsNTk0LjY3OSAyLjI5MiAxODcuMzUzLTMxNi4zMjQtNTk4LjY2MiAyLjI5MnoiIGZpbGw9IiMzNTQ5NWUiIC8+CiAgPHBhdGggZD0iTTE1MjQuMjA3IDE0NjQuOTAzbDYwOC4yODUgNi44NzcgMTczLjc0Ni0zMjAuOTA5aC02MTkuMDcyeiIgZmlsbD0iIzQxYjg4MyIgLz4KPC9zdmc+)
![Author: Mr.Hope](https://img.shields.io/badge/作者:Mr.Hope-关注-blue.svg?style=social)
```

![Theme: vuepress-theme-hope](https://img.shields.io/badge/主题-vuepress--theme--hope-green.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGNsYXNzPSJpY29uIiB2aWV3Qm94PSIwIDAgMzI4MC45NDQgMjgwMCI+CiAgPHBhdGggZD0iTTE2NDUuMzMyIDYwMS4wMDRoMzc1LjY3NUwxMDgxLjgyIDIyMzguNDc4IDE0Mi42MzYgNjAxLjAwNGg3MTguNDc3bDIyMC43MDggMzc5LjcwNCAyMTYuMDEzLTM3OS43MDR6IiBmaWxsPSIjNDFiODgzIiAvPgogIDxwYXRoIGQ9Ik0xNDIuNjM2IDYwMS4wMDRsOTM5LjE4NSAxNjM3LjQ3NCA5MzkuMTg2LTE2MzcuNDc0aC0zNzUuNjc1bC01NjMuNTEgOTgyLjQ4NC01NjguMjA4LTk4Mi40ODR6IiBmaWxsPSIjNDFiODgzIiAvPgogIDxwYXRoIGQ9Ik01MTMuMTg4IDYwMS4wMDRsNTY4LjIwNyA5ODcuMjMgNTYzLjUxMS05ODcuMjNoLTM0Ny40OThsLTIxNi4wMTMgMzc5LjcwNC0yMjAuNzA4LTM3OS43MDR6TTE2MDcuNzkyIDEzMTEuODNsNTk0LjY3OCAyLjI5MyAxODcuMzUzLTMxNi4zMjUtNTk4LjY2MiAyLjI5MnpNMjE5OC41MDYgMTkwOS41N0MyODY3LjQzNiA3MzIuNyAyOTM5LjUwMiA2MDUuNDI2IDI5MzcuODc0IDYwMy43OGMtLjcxNS0uNzIzIDQ1LjMwMy0xLjMxNCAxMDIuMjYyLTEuMzE0czEwMy41NjIuNDI4IDEwMy41NjIuOTUxYzAgLjUyMy0yMDguNTcgMzY3Ljk3OC00NjMuNDkxIDgxNi41NjdMMjIxNi43MTUgMjIzNS42bC0xMDIuMS41OTYtMTAyLjEwMi41OTZ6IiBmaWxsPSIjMzU0OTVlIiAvPgogIDxwYXRoIGQ9Ik0xNjgwLjU2MyAyMjMzLjMyOGMwLTEuMzQgMTY4LjIwOC0yOTguMTQ1IDQ0MC4zNzUtNzc3LjA0OGE0MTM1NjQ1Ljc3NSA0MTM1NjQ1Ljc3NSAwIDAwMzM3LjYxOS01OTQuMTlsMTQ2LjEzLTI1Ny4yNSAxNzAuNzQ2LS4wNCAxNzAuNzQ3LS4wNC01LjUzNiA5Ljc0MWMtMy4wNDQgNS4zNTgtNDMuNzI3IDc3LjMwMi05MC40MDcgMTU5Ljg3NS04NS4zNTYgMTUwLjk5Mi0zMzcuNTYyIDU5NS4xNjMtNjU2LjYwMiAxMTU2LjM3M2wtMTcyIDMwMi41NTktMTcwLjUzNi41ODhjLTkzLjc5NS4zMjItMTcwLjUzNi4wNjktMTcwLjUzNi0uNTY3eiIgZmlsbD0iIzQxYjg4MyIgLz4KICA8cGF0aCBkPSJNMTQyOS43ODMgMTYyNS4zNTFsNTk0LjY3OSAyLjI5MiAxODcuMzUzLTMxNi4zMjQtNTk4LjY2MiAyLjI5MnoiIGZpbGw9IiMzNTQ5NWUiIC8+CiAgPHBhdGggZD0iTTE1MjQuMjA3IDE0NjQuOTAzbDYwOC4yODUgNi44NzcgMTczLjc0Ni0zMjAuOTA5aC02MTkuMDcyeiIgZmlsbD0iIzQxYjg4MyIgLz4KPC9zdmc+)
![Author: Mr.Hope](https://img.shields.io/badge/作者:Mr.Hope-关注-blue.svg?style=social)

#### Markmap

`Markmap` 是一个将 `Markdown` 转换为思维导图的工具。它相对于主题内置的 `flowchart` 支持更多的格式与内容。

1. 使用 [Markmap](https://markmap.js.org/) 生成思维导图 HTML 文件
2. 将 HTML 文件放在 `.vuepress/public/` 下
3. 通过 `<iframe>` 插入到 Markdown

```html
<iframe
  :src="$withBase('/markmap/demo-zh.html')"
  width="100%"
  height="400"
  frameborder="0"
  scrolling="No"
  leftmargin="0"
  topmargin="0"
/>
```

<iframe
  :src="$withBase('/markmap/demo-zh.html')"
  width="100%"
  height="400"
  frameborder="0"
  scrolling="No"
  leftmargin="0"
  topmargin="0"
/>

## 代码复制

::: info
`vuepress-theme-hope` 内置了 [vuepress-plugin-copy-code2](https://plugin-copy-code2.vuejs.press/zh/)，提供了一个复制按钮

`vuepress-theme-hope` 将主题选项中的 `plugins.copyCode` 作为插件选项传递
:::

**配置：**

::: code-tabs#language

@tab:active TS

```ts
// .vuepress/config.ts
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      copyCode: {},
    },
  }),
};
```

@tab JS

```js
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      copyCode: {},
    },
  }),
};
```

:::

## 自动目录页生成

::: info
`vuepress-theme-hope` 内置了 [vuepress-plugin-auto-catalog](https://plugin-auto-catalog.vuejs.press/zh/)，提供了自动目录页生成

`vuepress-theme-hope` 将主题选项中的 `plugin.autoCatalog` 作为插件选项传递
:::

### 控制目录

您可以在插件选项中设置 `shouldIndex`、`titleGetter` 和 `orderGetter` 来控制目录。

- `shouldIndex`：选项是一个函数，它接收 `Page` 对象作为参数并返回一个布尔值，如果该函数返回 `false`，该页面将被忽略，否则，该页面将被索引
- `titleGetter`：选项是一个函数，它接收 `Page` 对象作为参数并返回一个字符串值，该字符串值将用作页面标题，默认情况下插件将使用 `page.title`
- `orderGetter`：选项是一个函数，它接收 `Page` 对象作为参数，并在可能的情况下返回一个数字值，数字越大，页面在目录中的位置就越靠前

### 排除页面

可能有一些情况您有一个 `/foo/bar.md`，但不想在 `/foo/` 生成目录页面，在这种情况下，您可以使用 `exclude` 选项来排除该页面。

```ts
// .vuepress/config.ts
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";

export default {
  plugins: [
    autoCatalogPlugin({
      exclude: ["/foo/"],
    }),
  ],
};
```

`exclude` 选项接受字符串数组或 `RegExp`。

### 控制页面 Frontmatter

默认情况下，插件将从文件夹名称生成目录页面标题。然而，有时您可能想要进行一些自定义，因此您可以将 `frontmatter` 选项设置为一个函数，该函数接收目录页面路径作为参数，您将返回一个包含您想要的 `frontmatter` 的对象。

```ts
// .vuepress/config.ts
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";

export default {
  plugins: [
    autoCatalogPlugin({
      frontmatter: (path) => {
        return {
          // frontmatter you want
        };
      },
    }),
  ],
};
```

### 自定义组件

该插件默认注册并使用 `<AutoCatalog />` 组件，如果您不喜欢内置组件并想使用自己的组件，您可以全局注册您的组件并使用您的组件名称设置 `component` 选项。

### 使用 AutoCatalog 组件

默认的 `<AutoCatalog />` 会将 `3` 层页面呈现为目录项，您可以通过设置 `level` 选项更改层次深度（仅支持 `1` `2` 和 `3`）。

如果您想给目录项添加索引号，您应该给 `<AutoCatalog />` 组件添加 `index` 属性。

默认情况下，`<AutoCatalog />` 为当前文件夹生成目录。如果您需要为其他文件夹生成目录，您可以在 `<AutoCatalog />` 组件上设置 `base` 属性。

您可以在主题布局中或直接在 `Markdown` 文件中使用 `<AutoCatalog />`。

## 博客插件

::: info
`vuepress-theme-hope` 内置了 [vuepress-plugin-blog2](https://plugin-blog2.vuejs.press/zh/)，提供了博客功能

`vuepress-theme-hope` 将主题选项中的 `plugin.blog` 作为插件选项传递
:::

**配置：**

- **excerpt**：是否生成摘要。默认值：`true`
- **excerptSeparator**：摘要分隔符。默认值：`<!-- more -->`
- **excerptLength**：自动生成的摘要的长度。默认值：`300`

    ::: note
    摘要的长度会尽可能的接近这个值。如果设置为 0，意味着不自动生成摘要。
    :::

- **article**：文章列表路由路径。默认值：`/article/`
- **category**：分类地图路由路径。默认值：`/category/`
- **categoryItem**：分类列表路由路径。`:name` 会被自动替换为分类名称。默认值：`/category/:name/`
- **tag**：标签地图路由路径。默认值：`/tag/`
- **tagItem**：标签列表路由路径。`:name` 会被自动替换为标签名称。默认值：`/tag/:name/`
- **star**：收藏文章列表路由路径。默认值：`/star/`
- **timeline**：时间线列表路由路径。默认值：`/timeline/`
- **hotReload**：是否需要在开发服务器启用热更新。默认值：是否在使用 `--debug` 标识

## 评论与阅读量插件

::: info
`vuepress-theme-hope` 内置了 [vuepress-plugin-comment2](https://plugin-comment2.vuejs.press/zh/)，提供了评论与阅读量功能

`vuepress-theme-hope` 将主题选项中的 `plugin.comment` 作为插件选项传递
:::

### 启用

::: code-tabs#language

@tab:active TS

```ts
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      comment: {
        provider: "Waline",

        // waline 模式下
        serverURL: "...", // your serverURL
      },
    },
  }),
});
```

@tab JS

```js
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      comment: {
        provider: "Waline",

        // waline 模式下
        serverURL: "...", // your serverURL
      },
    },
  }),
};
```

评论功能默认全局启用，通过主题选项中的 `plugins.comment.comment` 控制


`vuepress-plugin-comment2` 目前支持 `4` 种评论服务:

- [Artalk](https://artalk.js.org/)
    - `Artalk` 是一款简洁的自托管评论系统，您可以在服务器上轻松部署并置入前端页面中。
- [Giscus](https://giscus.app/zh-CN)
    - `Giscus` 是一个基于 GitHub Discussion 的评论系统，启用简便
- [Waline](https://console.leancloud.app/register)
    - `Twikoo` 在您的网站中启用 Waline 提供评论与浏览量服务
- [Twikoo](https://cloud.tencent.com/login?s_url=https%3A%2F%2Fconsole.cloud.tencent.com%2Ftcb%2Fenv%2Findex%3Faction%3DCreateAndDeployCloudBaseProject%26appUrl%3Dhttps%253A%252F%252Fgithub.com%252Fimaegoo%252Ftwikoo%26branch%3Ddev)
    - 个简洁、安全、免费的静态网站评论系统，基于腾讯云开发

::: tip 评论服务选择
如果您的博客或文档主要面向程序员，建议使用 Giscus
如果您的博客或文档面向大众，建议使用 Waline
:::

:::note
对于每个评论服务对应选项的详细信息，请参考 [vuepress-plugin-comment2](https://plugin-comment2.vuejs.press/zh/) 文档

如果您不需要评论功能，请忽略此选项
:::

## 版权信息

::: info
`vuepress-theme-hope` 内置了 [vuepress-plugin-copyright2](https://plugin-copyright2.vuejs.press/zh/)，提供了版权信息功能

`vuepress-theme-hope` 将主题选项中的 `plugin.copyright` 作为插件选项传递
:::

`vuepress-plugin-copyright2` 插件可以让您的某些文章不被他人复制，或者您想让他人在复制时，自动生成一段版权信息到剪切板中。

### 启用插件

由于相当一部分用户将本主题用于构建文档，而文档站点通常不需要附加版权信息，所以此插件并不是默认启用的。

要想启用此插件，您需要在主题选项中将 `plugins.copyright` 设置为 `true` 或是一个对象（空对象也是可以的）才能启用它。设置为 `true` 等同于设置 `{ global: true }`。

- 当插件的 `global` 选项不为 `true` 时，插件全局禁用，您需要在需要的页面的 `frontmatter` 中设置 `copy: true` 手动开启
- 设置 `global: true` 会使其全局生效，并允许在个别页面的 `frontmatter` 中设置 `copy: false` 禁用它

处于不打扰用户的考虑，默认配置下，仅当用户复制字符长度不小于 `100` 时，才会触发追加版权信息，如果您希望改变这个触发值，请设置 `triggerWords`，同时该选项支持在 `frontmatter` 中通过 `copy.triggerWord` 单独设置。

### 禁用复制和选择

- 如果您不希望用户复制您的整个站点或特定页面文字，您可以在主题选项中的 `plugins.copyright` 或在页面 `frontmatter` 中设置 `disableCopy` 来禁用复制，后者具有更高优先级
- 如果您不希望用户选择您的整个站点或特定页面文字，您可以在主题选项中的 `plugins.copyright` 或在页面 `frontmatter` 中设置 `disableSelection` 来禁用选择，后者具有更高优先级

### 版权信息获取

您可以在主题选项中通过 `plugins.copyright.author` 和 `plugins.copyright.license` 选项设置作者和协议信息。如果文档的不同部分拥有不同的作者和协议，您可以传入一个使用当前页面对象作为参数的函数 `(page: Page) => string` 返回相应信息。

## 图片预览

::: info
`vuepress-theme-hope` 内置了 [vuepress-plugin-photo-swipe](https://plugin-photo-swipe.vuejs.press/zh/)，提供了图片预览功能

`vuepress-theme-hope` 将主题选项中的 `plugin.photoSwipe` 作为插件选项传递
:::

### 浏览模式

在浏览模式中，您可以:

- 左右滑动按顺序浏览页面内其他的图片
- 查看图片的描述
- 对图片进行缩放
- 全屏浏览图片
- 下载图片
- 分享图片

::: tip
- 除了点击右上角的 `"×"` 退出浏览模式外，在上下滚动超过一定距离后，会自动退出图片浏览模式
- 在移动端，或使用 `PC` 触控板，您可以使用平移、缩放手势在浏览模式中平移、缩放图片
:::

## 加密

::: danger
注意，受到 VuePress 的限制，在未解密前，文章内容仅仅被隐藏，访问者仍可以从源码中获取文章的内容。

所以请不要使用该加密功能用于任何敏感、机密的文章与档案，造成的后果请您自负。

主题支持对特定文件夹或特定的路径进行加密，也支持进行全局范围的加密。
:::

### 局部加密

您可以在主题选项中通过 `encrypt.config` 字段配置加密选项。

字段的键名是路径，值支持填入一个或多个数组格式的密码。

::: code-tabs#language

@tab:active TS

```ts
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    encrypt: {
      config: {
        // 这会加密整个 guide 目录，并且两个密码都是可用的
        "/guide/": ["1234", "5678"],
        // 这只会加密 config/page.html
        "/config/page.html": "1234",
      },
    },
  }),
});
```

@tab JS

```js
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    encrypt: {
      config: {
        // 这会加密整个 guide 目录，并且两个密码都是可用的
        "/guide/": ["1234", "5678"],
        // 这只会加密 config/page.html
        "/config/page.html": "1234",
      },
    },
  }),
};
```

:::

::: warning
请注意，您只能使用字符串格式的密码

数字 `1234` 和 字符串 `"1234"` 的混淆值是不同的！而网站只能通过输入框输入字符串格式的内容
:::

### 全局加密

有些情况下，您可能想加密整个站点，您可以在主题选项中设置 `encrypt.global: true` 来实现它。

全局加密时，您可以在主题选项中通过 `encrypt.admin` 选项以字符串或字符串数组的格式设置一个或多个密码。

::: tip
多个密码的考虑是权限分离，这样您可以在日后部署中，废除或更新部分的全局密码，使得拥有密码的部分用户失去访问权限
:::

## Git 信息

::: info
`vuepress-v2` 内置了 [@vuepress/plugin-git](https://v2.vuepress.vuejs.org/zh/reference/plugin/git.html)，提供了收集您的页面的 Git 信息，包括创建和更新时间、贡献者等功能
:::

**配置：**

```ts
import { gitPlugin } from '@vuepress/plugin-git'

export default {
  plugins: [
    gitPlugin({
      // 配置项
    }),
  ],
}
```

- **createdTime**：是否收集页面的创建时间。默认值：`true`
- **updatedTime**：是否收集页面的更新时间。默认值：`true`
- **contributors**：是否收集页面的贡献者。默认值：`true`

## 切换页面时的进度条

::: info
`vuepress-v2` 内置了 [@vuepress/plugin-nprogress](https://v2.vuepress.vuejs.org/zh/reference/plugin/nprogress.html#nprogress-插件)，提供了在切换到另一个页面时会展示进度条功能

默认情况下，`vuepress-theme-hope` 主题会启用此插件，您可以设置 `false` 禁用它
:::

**配置：**

```ts
import { nprogressPlugin } from '@vuepress/plugin-nprogress'

export default {
  plugins: [
    nprogressPlugin(),
  ],
}
```

**样式：**

您可以通过 `CSS` 变量来自定义进度条的样式：

```scss
:root {
  --nprogress-color: #29d;
  --nprogress-z-index: 1031;
}
```

## 代码块高亮

::: info
`vuepress-v2` 内置了 [@vuepress/plugin-prismjs](https://v2.vuepress.vuejs.org/zh/reference/plugin/prismjs.html#prismjs)，提供了代码块高亮功能

默认情况下，`vuepress-theme-hope` 主题会启用此插件，您可以设置 `false` 禁用它
:::

**配置：**

```ts
import { prismjsPlugin } from '@vuepress/plugin-prismjs'

export default {
  plugins: [
    prismjsPlugin({
      // 配置项
    }),
  ],
}
```

- **preloadLanguages**：需要预加载的语言。默认值：`['markdown', 'jsdoc', 'yaml']`

## 页面字数统计并生成预计阅读时间

::: info
`vuepress-theme-hope` 内置了 [vuepress-plugin-reading-time2](https://plugin-reading-time2.vuejs.press/zh/)，提供了页面字数统计并生成预计阅读时间功能

`vuepress-theme-hope` 将主题选项中的 `plugin.readingTime` 作为插件选项传递
:::

- `wordPerMinute`：每分钟阅读字数。默认值：`300`

## SEO 增强

::: info
`vuepress-theme-hope` 内置了 [vuepress-plugin-seo2](https://plugin-seo2.vuejs.press/zh/)，提供了 SEO 增强功能

`vuepress-theme-hope` 将主题选项中的 `plugin.seo` 作为插件选项传递
:::

提供搜索引擎增强。

默认情况下，不需要任何配置。如果您不需要这个功能，请设置为 `false`。

会通过向网站 `<head>` 注入标签，让您的网站完全支持 [开放内容协议 OGP](https://ogp.me/) 和 [JSON-LD 1.1](https://www.w3.org/TR/json-ld-api/)，以全面增强站点的搜索引擎优化性。

默认情况下，插件会读取站点配置、主题配置与页面的 frontmatter 来尽可能自动生成。诸如站点名称，页面标题，页面类型，写作日期，最后更新日期，文章标签均会自动生成。

## Sitemap 生成

::: info
`vuepress-theme-hope` 内置了 [vuepress-plugin-sitemap2](https://plugin-sitemap2.vuejs.press/zh/)，提供了 Sitemap 生成功能

`vuepress-theme-hope` 将主题选项中的 `plugin.sitemap` 作为插件选项传递
:::

为网站自动生成 `Sitemap`。

默认情况下，不需要任何配置。如果您不需要这个功能，请设置为 `false`。

会自动根据页面的 Git 的时间戳生成页面的最后更新时间，同时会根据站点的多语言配置声明页面的其他语言版本替代地址。

## Feed 支持

::: info
`vuepress-theme-hope` 内置了 [vuepress-plugin-feed2](https://plugin-feed2.vuejs.press/zh/)，提供了 Feed 生成功能

`vuepress-theme-hope` 将主题选项中的 `plugin.feed` 作为插件选项传递
:::

`vuepress-plugin-feed2` 插件可为您生成以下三种格式的 `feed` 文件:

- Atom 1.0
- JSON 1.1
- RSS 2.0

## PWA 支持

::: info
`vuepress-theme-hope` 内置了 [vuepress-plugin-pwa2](https://plugin-pwa2.vuejs.press/zh/)，提供了渐进式网页应用（Progressive Web App）支持功能

`vuepress-theme-hope` 将主题选项中的 `plugin.pwa` 作为插件选项传递
:::

`vuepress-plugin-pwa2` 插件默认禁用，您可以设置 `pwa: true` 来以默认设置启用插件。

您可以在主题选项中设置 `plugins.pwa: true` 来让主题自动生成必要配置并快速启用插件。但这种方式并不推荐，推荐对部分选项进行手动配置。

## vuepress-shared

VuePress2 的强大工具函数

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

将依赖包导入配置文件 `config` 文件

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

