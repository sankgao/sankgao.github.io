---
title: 博客笔记
icon: notes
date: 2023-04-12
category: About
tag:
    - Blog
---

本内容中的一些效果是来自 [VuePress Theme Hope 主题](https://theme-hope.vuejs.press/zh/guide/markdown/intro.html)。

## 使用 Emoji 表情

使用 Emoji 表情可以使笔记在阅读的时候更加生动，不那么的枯燥。

- **格式**
    - `:语义化文本:`
    - `&#xcode;`

- **说明**
    - 用一对 `:` 包裹，里面是 **Emoji** 符号的 **语义化文本**
    - 不支持上述方式的 Markdown 编辑器或笔记软件，直接用 **输入法** 输入也是可以的

::: md-demo 示例

:smile: :sweat: :cat: :woman_cartwheeling: &#x1F4BB;

:::

分享一些 Emoji 网站：

- [Emoji 符号备忘单](https://www.webfx.com/tools/emoji-cheat-sheet)：轻松单击即可将表情符号复制
- [Emoji 表情](https://emojipedia.org/)：📙 表情图标百科 — 😃 表情符号含义主页 💁👌🎍😍
- [gitmoji](https://gitmoji.dev/)：通过 Emoji 表达 GitHub 提交消息上表情符号使用
- [EMOJI 中文网](https://www.emojiall.com/zh-hans)：这是一本全面的 EMOJI 字典

::: tip
Windows 系统下按 <kbd>Win</kbd> + <kbd>.</kbd> 快速打开表情选择框（不是右侧小键盘的 <kbd>.</kbd>）
:::

## 代码块

### 代码块行高亮

突出代码块的某些行，使用 `{行数-行数}`、`{行数,行数}` 格式。

::: md-demo 第 2、5-7、13 行高亮

```js {2,5-7,13}
return {
  // 数据
  options,
  activeKey,
  sourceLabels,
  sourceForm,
  addForm,
  addRules,
  sourceRules,
  // 函数
  displayRender,
  submitProdoce,
  onAddClose,
};
```

:::

- **行数区间**：例如 `{5-8}`, `{3-10}`, `{10-17}`
- **多个单行**：例如 `{4,7,9}`
- **行数区间与多个单行**：例如 `{4,7-13,16,23-27,40}`

### 行号

在代码块的最左侧会展示行号。这个功能是默认启用的，您可以通过配置来禁用。

::: md-demo 默认启用行号

```ts
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

:::

::: md-demo 禁用行号

```ts:no-line-numbers
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

:::

- **:line-numbers**：启动行号
- **:no-line-numbers**：禁用行号

### 导入代码块

从文件中导入代码块：

```md
<!-- 最简单的语法 -->
@[code](../../.vuepress/client.ts)
```

**效果：**

@[code](../../.vuepress/client.ts)

导入这个文件的一部分：

```md
<!-- 仅导入第 6 行至第 13 行 -->
@[code{6-13}](../../.vuepress/client.ts)
```

**效果：**

@[code{6-13}](../../.vuepress/client.ts)

代码语言会根据文件扩展名进行推断，但建议您显式指定：

```md
<!-- 指定代码语言 -->
@[code ts](../../.vuepress/client.ts)
```

**效果：**

@[code ts](../../.vuepress/client.ts)

实际上，`[]` 内的第二部分会被作为代码块标记来处理，因此在上面 [代码块行高亮](#代码块行高亮) 中提到的语法在这里都可以支持：

```md
<!-- 行高亮 -->
@[code ts{2,4-5}](../../.vuepress/client.ts)
```

**效果：**

@[code ts{2,4-5}](../../.vuepress/client.ts)

下面是一个复杂的例子：

- 导入 `'../../.vuepress/client.ts'` 文件的第 4 行至第 15 行
- 指定语言为 `'ts'`
- 对导入代码的第 3 行进行高亮，即对原 `'../../.vuepress/client.ts'` 文件的第 6 行代码进行高亮
- 禁用行号

```md
@[code{4-15} ts{3}:no-line-numbers](../../.vuepress/client.ts)
```

**效果：**

@[code{4-15} ts{3}:no-line-numbers](../../.vuepress/client.ts)

需要注意的是，路径别名在导入代码语法中不会生效。您可以通过下面的配置来自行处理路径别名：

```ts
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default {
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@src/, path.resolve(__dirname, 'path/to/src')),
    },
  },
}
```

```md
<!-- 会被解析至 'path/to/src/foo.js' -->
@[code](@src/foo.js)
```

## 徽章

### 内置

- **格式**：`<Badge text="string" type="tip" vertical="undefined" />`

::: md-demo 示例

《沁园春·雪》<Badge text="摘" vertical="top" />

北国风光<Badge text="注释1" type="note"/>，千里冰封，万里雪飘。

> <Badge text="注释1" type="note" vertical="middle"/>: 北方的风光。

:::

- **text**：为文本内容，默认为空
- **type**：提示类型
    - **info**：相关信息，默认值
    - **note**：注释
    - **tip**：提示
    - **warning**：警告
    - **danger**：危险

- **vertical**：徽章的垂直方向的位置
    - **top**：顶部
    - **middle**：中间
    - **bottom**：底部
    - **undefined**：未定义，默认值

### 外置

如果想用更多的自定义徽章，可使用 [Shields](https://shields.io/) 来生成。

::: md-demo 示例

![stars](https://img.shields.io/github/stars/sankgao/sankgao.github.io)
![blog](https://img.shields.io/badge/vuepress-VuePress%20Theme%20Hope-green)
![name](https://img.shields.io/badge/name-Sank%20Gao-blue)

:::

## 信息框容器

添加信息、注释、提示、注意、警告和详情自定义容器的支持，标题可以修改。

:::: md-demo 默认标题的容器

::: info
信息容器
:::

::: note
注释容器
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

::: info 自定义标题
一个有 `代码` 的信息容器。

```js
const a = 1;
```

:::

::::

## 布局容器


:::: md-demo 居中、右对齐、两端对齐的内容

::: center
居中的内容
:::

::: right
右对齐的内容
:::

::: justify
两端对齐的内容
:::

::::

::::: md-demo 嵌套容器

:::: center

居中的内容

::: right
右对齐的内容
:::

居中的内容

::::

:::::

## 代码块选项卡

- 将选项卡包装在 `code-tabs` 容器中
- 在 `tabs` 容器中添加一个 `id` 后缀，该后缀将用作选项卡 `id`。所有具有相同 `id` 的选项卡将共享相同的切换事件
- 在这个容器内，使用 `@tab` 标记来标记和分隔选项卡内容
- 在 `@tab` 标记后，可以添加文本 `:active` 默认激活选项卡，之后的文本将被解析为此选项卡标题

:::: md-demo 代码块选项卡

相同 `id` 的选项卡：

::: code-tabs#languages

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope
```

:::

另一个相同 `id` 的选项卡：

::: code-tabs#languages

@tab pnpm

```bash
pnpm install
```

@tab yarn

```bash
yarn install
```

@tab:active npm

```bash
npx install
```

:::

不同 `id` 的选项卡：

::: code-tabs#language

@tab pnpm

```bash
pnpm dlx vp-update
```

@tab yarn

```bash
yarn dlx vp-update
```

@tab npm

```bash
npx vp-update
```

:::

::::

## 普通卡片列表

可以在 Markdown 中添加卡片，可以用于配置 **项目展示** 功能。

::: md-demo 示例
<VPCard
  title="Sank Gao"
  desc="我是世界上的独一无二，百句空言不如一个行动。"
  logo="https://sankgao.github.io/logo.png"
  link="https://sankgao.github.io"
  background="rgba(93, 175, 241, 0.15)"
/>
:::

- **title**：卡片标题
- **desc**：卡片描述
- **logo**：卡片图标
- **link**：卡片链接地址
- **background**：卡片背景颜色
- **color**：卡片字体颜色

## 横幅卡片列表

用于展示横幅。

::: md-demo 示例
<VPBanner
  title="Sank Gao"
  content="我是世界上的独一无二，百句空言不如一个行动。"
  logo="https://sankgao.github.io/logo.png"
  :actions='[
    {
      text: "访问",
      link:"https://sankgao.github.io/",
    },
    {
      text: "仓库",
      link: "https://github.com/sankgao/sankgao.github.io/",
      type: "default",
    },
  ]'
  background="rgba(93, 175, 241, 0.15)"
/>
:::

- **title**：横幅标题
- **content**：横幅内容
- **logo**：横幅图标
- **actions**：横幅操作
    - **text**：显示文本
    - **link**：链接地址
    - **type**：类型，默认值为 `primary`
        - **primary**
        - **default**

- **background**：横幅背景
- **color**：横幅字体颜色

## 图文卡片列表

站点信息，可用于 **友情链接** 或 **项目展示。**

::: md-demo 示例
<SiteInfo
  name="Sank Gao"
  desc="我是世界上的独一无二，百句空言不如一个行动。"
  url="https://sankgao.github.io"
  logo="https://sankgao.github.io/logo.png"
  repo="https://github.com/sankgao/sankgao.github.io"
  preview="/links/my.jpg"
/>
:::

- **name**：站点名称
- **desc**：站点描述
- **url**：站点 URL 地址
- **logo**：站点图标
- **repo**：站点 GitHub 地址
- **preview**：站点预览图，必须为绝对路径或完整 URL


