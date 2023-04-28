---
title: 快速上手
icon: quickstart
date: 2023-04-28
category: Frontend
tag:
    - Vue3
---

## 线上尝试 Vue​

- 想要快速体验 Vue，您可以直接试试 Vue 官网的 [演练场](https://sfc.vuejs.org/#eNo9j01qAzEMha+iapMWOjbdDm6gu96gG2/cjJJM8B+2nBaGuXvlpBMwtj4/JL234EfO6toIRzT1UObMexvpN6fCMNHRNc+w2AgwOXbPL/caoBC3EjcCCPU0wu6TvE/wlYqfnnZ3ae2PXHKMfiwQYArZOyYhAHN+2y9LnwLrarTQ7XeOuTFch5Am8u8WRbcoktGPbnzFOXS3Q3BZXWqKkuRmy/4L1eK4GbUoUTtbPDPnOmpdj4ee/1JVKictlSot8hxIUQ3Dd0k/lYoMtrglwfUPkXdoJg==)
- 如果您更喜欢不用任何构建的原始 HTML，可以使用 [JSFiddle](https://jsfiddle.net/yyx990803/2ke1ab0z/) 入门
- 如果您已经比较熟悉 `Node.js` 和构建工具等概念，还可以直接在浏览器中打开 [StackBlitz](https://vite.new/vue) 来尝试完整的构建设置

## 创建一个 Vue 应用​

::: tip 前提条件
- 熟悉命令行
- 已安装 16.0 或更高版本的 Node.js
:::

在本节中，将介绍如何在本地搭建 Vue [单页应用](./ways_of_using_vue.md#单页面应用spa)。创建的项目将使用基于 [Vite](https://vitejs.dev/) 的构建设置，并允许使用 Vue 的 [单文件组件]()（SFC）。

确保您安装了最新版本的 [Node.js](https://nodejs.org/en)，然后在命令行中运行以下命令：

```bash
npm init vue@latest
```

这一指令将会安装并执行 [create-vue](https://github.com/vuejs/create-vue)，它是 Vue 官方的项目脚手架工具。您将会看到一些诸如 TypeScript 和测试支持之类的可选功能提示：

```bash
Vue.js - The Progressive JavaScript Framework

✔ Project name: … vue-project
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … No / Yes

Scaffolding project in /root/vue3/vue-project...

Done. Now run:

  cd vue-project
  npm install
  npm run de
```

如果不确定是否要开启某个功能，您可以直接按下回车键选择 `No`。在项目被创建后，通过以下步骤安装依赖并启动开发服务器：

```bash
cd <your-project-name>
npm install
npm run dev
```

您现在应该已经运行起来了您的第一个 Vue 项目！请注意，生成的项目中的示例组件使用的是 **组合式 API** 和 `<script setup>`，而非 **选项式 API**。下面是一些补充提示：

- 推荐的 IDE 配置是 [Visual Studio Code](https://code.visualstudio.com/) + [Volar 扩展](https://marketplace.visualstudio.com/items?itemName=Vue.volar)。如果使用其他编辑器，参考 [IDE 支持]()
- 更多工具细节，包括与后端框架的整合，请查看 [工具链指南]()
- 要了解构建工具 Vite 更多背后的细节，请查看 [Vite 文档](https://cn.vitejs.dev/)
- 如果您选择使用 TypeScript，请阅读 [TypeScript 使用指南](https://cn.vuejs.org/guide/typescript/overview.html)

当您准备将应用发布到生产环境时，请运行：

```bash
npm run build
```

此命令会在 `./dist` 文件夹中为您的应用创建一个生产环境的构建版本。关于将应用上线生产环境的更多内容，请阅读 [生产环境部署指南]()。

## 通过 CDN 使用 Vue​

您可以借助 `script` 标签直接通过 `CDN` 来使用 Vue：

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

这里我们使用了 [unpkg](https://unpkg.com/)，但您也可以使用任何提供 npm 包服务的 `CDN`，例如：[jsdelivr](https://www.jsdelivr.com/package/npm/vue) 或 [cdnjs](https://cdnjs.com/libraries/vue)。当然，您也可以下载此文件并自行提供服务。

通过 CDN 使用 Vue 时，**不涉及** 构建步骤。这使得设置更加简单，并且可以用于增强静态的 HTML 或与后端框架集成。但是，您将 **无法使用** 单文件组件（SFC）语法。

### 使用全局构建版本​

上面的例子使用了全局构建版本的 Vue，该版本的所有顶层 API 都以属性的形式暴露在了全局的 Vue 对象上。

这里有一个使用全局构建版本的例子：

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp } = Vue
  
  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```

[JSFiddle 中的示例](https://jsfiddle.net/yyx990803/nw1xg8Lj/)

### 使用 ES 模块构建版本​

在本文档的其余部分我们使用的主要是 [ES 模块](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules) 语法。

现代浏览器大多都已原生支持 ES 模块。因此可以像这样通过 CDN 以及原生 ES 模块使用 Vue：

```html{3,4}
<div id="app">{{ message }}</div>

<script type="module">
  import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
  
  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```

::: warning 注意
示例中使用了 `<script type="module">`，且导入的 CDN URL 指向的是 Vue 的 **ES 模块构建版本**
:::

[JSFiddle 中的示例](https://jsfiddle.net/yyx990803/vo23c470/)

### 启用 Import maps​

在上面的示例中，使用了完整的 CDN URL 来导入，但在文档的其余部分中，您将看到如下代码：

```js
import { createApp } from 'vue'
```

还可以使用 [导入映射表（Import Maps）](https://caniuse.com/import-maps) 来告诉浏览器如何定位到导入的 `vue`：

```html{1-7,12}
<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
</script>

<div id="app">{{ message }}</div>

<script type="module">
  import { createApp } from 'vue'

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```

[JSFiddle 中的示例](https://jsfiddle.net/yyx990803/2ke1ab0z/)

您也可以在映射表中添加其他的依赖——但请务必确保您使用的是该库的 ES 模块版本。

::: tip 导入映射表的浏览器支持情况
目前只有基于 Chromium 的浏览器支持导入映射表，所以推荐您在学习过程中使用 Chrome 或 Edge 浏览器

如果您使用的是 Firefox 浏览器，则该功能默认在 108+ 版本或通过启用 `about:config` 中的 `dom.importMaps.enabled` 选项支持

如果您更喜欢那些还不支持导入映射表的浏览器，您可以使用 [es-module-shims](https://github.com/guybedford/es-module-shims) 来进行 polyfill
:::

::: warning 生产环境中的注意事项
到目前为止示例中使用的都是 Vue 的开发构建版本——如果您打算在生产中通过 CDN 使用 Vue，请务必查看 [生产环境部署指南]()
:::

### 拆分模块

随着逐步深入，可能需要将代码分割成单独的 JavaScript 文件，以便更容易管理。例如：

```html
<!-- index.html -->
<div id="app"></div>

<script type="module">
  import { createApp } from 'vue'
  import MyComponent from './my-component.js'

  createApp(MyComponent).mount('#app')
</script>
```

```js
// my-component.js
export default {
  data() {
    return { count: 0 }
  },
  template: `<div>count is {{ count }}</div>`
}
```

如果直接在浏览器中打开了上面的 `index.html`，您会发现它抛出了一个错误，因为 ES 模块不能通过 `file://` 协议工作。为了使其工作，您需要使用本地 HTTP 服务器通过 `http://` 协议提供 `index.html`。

要启动一个本地的 HTTP 服务器，请先安装 [Node.js](https://nodejs.org/zh/)，然后通过命令行在 HTML 文件所在文件夹下运行 `npx serve`。您也可以使用其他任何可以基于正确的 MIME 类型服务静态文件的 HTTP 服务器。

::: tip
这里导入的组件模板是内联的 JavaScript 字符串。如果您正在使用 VSCode，您可以安装 [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) 扩展，然后在字符串前加上一个前缀注释 `/*html*/` 以高亮语法
:::

### 无需构建的组合式 API 用法

组合式 API 的许多示例将使用 `<script setup>` 语法。如果您想在无需构建的情况下使用组合式 API，请参阅 [setup() 选项]()。

