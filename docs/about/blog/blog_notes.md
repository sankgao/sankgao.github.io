---
title: 博客笔记
icon: notes
date: 2023-04-12
category: Blog
tag:
    - Blog
---

:::: info
如果想拥有更多丰富的笔记表现力，让自己阅读时，不处于大片黑白的世界里，本内容会让您的笔记句句深入记忆的深处:smile_cat:

::: right
2023-04-19 @Sankgao
::::

<!-- more -->

## 使用 emoji 表情

- **格式**
    - `:语义化文本:`

- **说明**
    - 用一对 `:` 包裹，里面是 **Emoji** 符号的 **语义化文本**（**Typora 编辑器** 中，输入 `:` 就会带提示器）
    - 不支持上述方式的 Markdown 编辑器或笔记软件，直接用 **输入法** 输入也是可以的

```md
:smile:

:sweat:

:cat:

:woman_cartwheeling:
```

**效果：**

:smile:

:sweat:

:cat:

:woman_cartwheeling:

分享一些 emoji 网站：

- [emoji 表情备忘录](https://www.webfx.com/tools/emoji-cheat-sheet)：有很多表情的格式(`:表情:`)
- [emoji 表情](https://emojipedia.org/)：有很多表情可以 copy
- [gitmoji](https://github.com/carloscuesta/gitmoji)：通过 emoji 表达 git 的操作内容
- [EMOJI 中文网](https://www.emojiall.com/zh-hans)：这是一本全面的 EMOJI 字典

::: tip
windows 系统下按 <kbd>Win</kbd> + <kbd>.</kbd> 快速打开表情选择框（不是右侧小键盘的 <kbd>.</kbd>）
:::

## 外部链接

使用外部链接，文字会变色，并且可以点击跳转。**格式如下：**

- []()

```
[vuepress-theme-hope 主题官网](https://theme-hope.vuejs.press/zh/)
```

**效果：**

[vuepress-theme-hope 主题官网](https://theme-hope.vuejs.press/zh/)

## 文本高亮

使用 `` ` ``、`==文本内容==` 或 `<mark>` 标签让文本高亮。**格式如下：**

- `` `文本内容` ``
- `==文本内容==`
- `<mark>文本内容</mark>`

```md
这是一段 `高亮` 文本，这是一段 <mark>高亮</mark> 文本
```

**效果：**

这是一段 `高亮` 文本，这是一段 <mark>高亮</mark> 文本

## 代码块

### 行高亮

突出代码块的某些行，使用 `{行数-行数}`、`{行数,行数}` 格式

````js
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
````

**效果：**

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

- **行数区间**: 例如 `{5-8}`, `{3-10}`, `{10-17}`
- **多个单行**: 例如 `{4,7,9}`
- **行数区间与多个单行**: 例如 `{4,7-13,16,23-27,40}`

### 行号

您肯定已经注意到在代码块的最左侧会展示行号。这个功能是默认启用的，您可以通过配置来禁用它。

您可以在代码块添加 `:line-numbers` 和 `:no-line-numbers` 标记来覆盖配置项中的设置。

````md
```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
````

**效果：**

```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

## 导入代码块

您可以使用下面的语法，从文件中导入代码块：

```md
<!-- 最简单的语法 -->
@[code](../foo.js)
```

如果您只想导入这个文件的一部分：

```md
<!-- 仅导入第 1 行至第 10 行 -->
@[code{1-10}](../foo.js)
```

代码语言会根据文件扩展名进行推断，但建议您显式指定：

```md
<!-- 指定代码语言 -->
@[code js](../foo.js)
```

实际上，`[]` 内的第二部分会被作为代码块标记来处理，因此在上面 [代码块](#代码块) 中提到的语法在这里都可以支持：

```md
<!-- 行高亮 -->
@[code js{2,4-5}](../foo.js)
```

下面是一个复杂的例子：

- 导入 `'../foo.js'` 文件的第 3 行至第 10 行
- 指定语言为 `'js'`
- 对导入代码的第 3 行进行高亮，即 `'../foo.js'` 文件的第 5 行
- 禁用行号

```md
@[code{3-10} js{3}:no-line-numbers](../foo.js)
```

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

```md
《沁园春·雪》<Badge text="摘"/>
北国风光<Badge text="注释" type="note"/>，千里冰封，万里雪飘。

> <Badge text="译文" type="note" vertical="middle"/>: 北方的风光。
```

- **type** 默认是 `info`
    - `info`
    - `note`
    - `tip`
    - `warning`
    - `danger`

- **vertical** 默认是 `top`
    - `top`
    - `middle`

**效果：**

《沁园春·雪》<Badge text="摘"/>
北国风光<Badge text="注释" type="note"/>，千里冰封，万里雪飘。

> <Badge text="译文" type="note" vertical="middle"/>: 北方的风光。

### 外置

如果想用更多的自定义徽章，可使用 [Shields](https://shields.io/) 来生成

```md
![stars](https://img.shields.io/github/stars/Kele-Bingtang/notes-blog)
![stars](https://img.shields.io/github/stars/Kele-Bingtang/notes-blog?style=social)
![kbt](https://img.shields.io/badge/kbt-冰糖-green)
```

![访问量](https://img.shields.io/github/stars/Kele-Bingtang/notes-blog) ![stars](https://img.shields.io/github/stars/Kele-Bingtang/notes-blog?style=social) ![name](https://img.shields.io/badge/kbt-冰糖-green)

如果没接触过 Shields，[Shields 官网](https://shields.io/)

## 信息框容器

添加信息、注释、提示、注意、警告和详情自定义容器的支持。

````md
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
````

**效果：**

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

## 布局容器

```md
::: center
居中的内容
:::

::: right
右对齐的内容
:::

::: justify
两端对齐的内容
:::

嵌套容器：

:::: center
居中的内容
::: right
右对齐的内容
:::
居中的内容
::::
```

**效果：**

::: center
居中的内容
:::

::: right
右对齐的内容
:::

::: justify
两端对齐的内容
:::

嵌套容器：

:::: center
居中的内容
::: right
右对齐的内容
:::
居中的内容
::::

## 代码块选项卡

将选项卡包装在 `code-tabs` 容器中。

在 `code-tabs` 容器中添加一个 `id` 后缀，该后缀将用作选项卡 `id`。所有具有相同 `id` 的选项卡将共享相同的切换事件。

在这个容器内，使用 `@tab` 标记来标记和分隔选项卡内容。

在 `@tab` 标记后，可以添加文本 `:active` 默认激活选项卡，之后的文本将被解析为此选项卡标题。

````md
安装 VuePress Theme Hope:

::: code-tabs#language

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
````

**效果：**

安装 VuePress Theme Hope:

::: code-tabs#shell

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

## 普通卡片列表

如果想使用 <mark>友链</mark> 功能，但是 vdoing 主题并没有直接在首页实现该功能，要么使用 **卡片列表**，要么自己手动实现html。而 **卡片列表** 目前只能使用在 Markdown 文档里，下方介绍。

普通卡片列表容器，可用于 `友情链接`、`项目推荐`、`诗词展示` 等。

输入：

````yml
::: cardList
```yaml
- name: George Chan
  desc: 让我给您讲讲他的传奇故事吧
  avatar: https://z3.ax1x.com/2021/09/30/4oKMVI.jpg
  link: https://cyc0819.top/
  bgColor: '#FFB6C1' # 可选，默认 var(--bodyBg)。颜色值有 # 号时请添加单引号
  textColor: '#621529' # 可选，默认 var(--textColor)
  
- name: butcher2000
  desc: 即使再小的帆，也能远航
  avatar: https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/user/20211029181901.png
  link: https://blog.csdn.net/weixin_46827107
  bgColor: '#CBEAFA' 
  textColor: '#6854A1' 
  
- name: Evan's blog
  desc: 前端的小学生
  avatar: https://cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200103123203.jpg
  link: https://xugaoyi.com/
  bgColor: '#B9D59C'
  textColor: '#3B551F'
```
:::
````

输出：

::: cardList
```yaml
- name: George Chan
  desc: 让我给您讲讲他的传奇故事吧
  avatar: https://z3.ax1x.com/2021/09/30/4oKMVI.jpg
  link: https://cyc0819.top/
  bgColor: '#FFB6C1' # 可选，默认 var(--bodyBg)。颜色值有 # 号时请添加单引号
  textColor: '#621529' # 可选，默认 var(--textColor)
  
- name: butcher2000
  desc: 即使再小的帆，也能远航
  avatar: https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/user/20211029181901.png
  link: https://blog.csdn.net/weixin_46827107
  bgColor: '#CBEAFA' 
  textColor: '#6854A1' 
  
- name: Evan's blog
  desc: 前端的小学生
  avatar: https://cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200103123203.jpg
  link: https://xugaoyi.com/
  bgColor: '#B9D59C'
  textColor: '#3B551F'
```
:::

### 语法

````yml
::: cardList <每行显示数量>
``` yaml
- name: 名称
  desc: 描述
  avatar: https://xxx.jpg # 头像，可选
  link: https://xxx/ # 链接，可选
  bgColor: '#CBEAFA' # 背景色，可选，默认 var(--bodyBg)。颜色值有 # 号时请添加引号
  textColor: '#6854A1' # 文本色，可选，默认 var(--textColor)
```
:::
````

- `<每行显示数量>`：一行内显示多少个卡片，值范围 1~4，默认是 3 个，上方的卡片正好是三个，如果再多一个卡片，就会被换到下一行
- 代码块需指定语言为 `yaml`
- 代码块内是一个 `yaml` 格式的数组列表
- 数组成员的属性有：
    - `name`：名称
    - `desc`：描述
    - `avatar`：头像，可选
    - `link`：链接，可选
    - `bgColor`：背景色，可选，默认 `var(--bodyBg)`。颜色值有 `#` 号时请添加引号
    - `textColor`：文本色，可选，默认 `var(--textColor)`

不指定颜色，默认为白色，如下演示：

````yml
::: cardList 2
```yaml
- name: 《静夜思》
  desc: 床前明月光，疑是地上霜。举头望明月，低头思故乡。
  bgColor: '#F0DFB1'
  textColor: '#242A38'
  
- name: Vdoing
  desc: 🚀一款简洁高效的VuePress 知识管理&博客(blog) 主题
  link: https://github.com/xugaoyi/vuepress-theme-vdoing
  bgColor: '#DFEEE7'
  textColor: '#2A3344'
```
:::
````

::: cardList 2
```yaml
- name: 《静夜思》
  desc: 床前明月光，疑是地上霜。举头望明月，低头思故乡。
  
- name: Vdoing
  desc: 🚀一款简洁高效的VuePress 知识管理&博客(blog) 主题
  link: https://github.com/xugaoyi/vuepress-theme-vdoing
  bgColor: '#DFEEE7'
  textColor: '#2A3344'
```
:::

## 图文卡片列表<Badge text="v1.1.0 +"></Badge>

图文卡片列表容器，可用于 `项目展示`、`产品展示` 等。

先看效果：

::: cardImgList
```yaml
- img: https://cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200529162253.jpg
  link: https://xugaoyi.com/
  name: 标题
  desc: 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容 # 描述，可选
  author: Young Gqs # 作者，可选
  avatar: https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/user/avatar2.png # 头像，可选
  
- img: https://cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200530100256.jpg
  link: https://xugaoyi.com/
  name: 标题
  desc: 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
  author: Young Gqs
  avatar: https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/user/avatar2.png
  
- img: https://cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200530100257.jpg
  link: https://xugaoyi.com/
  name: 标题
  desc: 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
  author: Young Gqs
  avatar: https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/user/avatar2.png
```
:::

````yml
::: cardImgList
```yaml
- img: https://cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200529162253.jpg
  link: https://xugaoyi.com/
  name: 标题
  desc: 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容 # 描述，可选
  author: Young Gqs # 作者，可选
  avatar: https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/user/avatar2.png # 头像，可选
  
- img: https://cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200530100256.jpg
  link: https://xugaoyi.com/
  name: 标题
  desc: 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
  author: Young Gqs
  avatar: https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/user/avatar2.png
  
- img: https://cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/20200530100257.jpg
  link: https://xugaoyi.com/
  name: 标题
  desc: 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
  author: Young Gqs
  avatar: https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/user/avatar2.png
```
:::
````

### 语法

````yml
::: cardImgList <每行显示数量>
``` yaml
- img: https://xxx.jpg # 图片地址
  link: https://xxx.com # 链接地址
  name: 标题
  desc: 描述 # 可选
  author: 作者名称 # 可选
  avatar: https://xxx.jpg # 作者头像，可选
```
:::
````

- `<每行显示数量>` 数字，表示每行最多显示多少个，选值范围 1~4，默认 3。在小屏时会根据屏幕宽度减少每行显示数量。
- 代码块需指定语言为 `yaml`
- 代码块内是一个 `yaml` 格式的数组列表
- 数组成员的属性有：
    - `img`：图片地址
    - `link`：链接地址
    - `name`：标题
    - `desc`：描述，可选
    - `author`：作者名称，可选
    - `avatar`：作者头像，可选

## Tabs 插件

官网：<https://github.com/pskordilakis/vuepress-plugin-tabs>

安装插件：

:::: tabs :options="{ useUrlFragment: false }"
::: tab yarn
```sh
yarn add vuepress-plugin-tabs vue-tabs-component
```
:::

::: tab npm
```sh
npm install vuepress-plugin-tabs vue-tabs-component
```
:::
::::

在 `.vuepress/styles/index.styl` 添加如下内容：

```styl
@require '~vuepress-plugin-tabs/dist/themes/default.styl'
```

在 `.vuepress/config.js` 中添加如下内容：

```js
module.exports = {
  plugins: [ 'tabs' ]
}
```

启动项目，下面是使用的 demo。

````md
:::: tabs cache-lifetime="5" :options="{ useUrlFragment: false }"
::: tab title 
**Markdown content**
:::
::: tab javascript 
``` javascript
() => {
  console.log('Javascript code example')
}
```
:::
::::
````

- `cache-lifetime` 是存活时间，默认 5 分钟，即关闭网页五分钟内回来，当时选中的哪个 tabs，就会显示该内容，5 分钟后默认回到到第一个 tabs
- `:options="{ useUrlFragment: false }"` 建议写上，不然每次点击任意 tabs，都会刷新一次当前页面，没有必要

效果：

:::: tabs cache-lifetime="5" :options="{ useUrlFragment: false }"
::: tab title 
**Markdown content**
:::
::: tab javascript 
``` javascript
() => {
  console.log('Javascript code example')
}
```
:::
::::

