<!-- TOC -->

- [HTML5 新元素](#html5-新元素)
    - [新的语义/结构元素](#新的语义结构元素)
    - [新的表单元素](#新的表单元素)
    - [新的输入类型/属性](#新的输入类型属性)
    - [HTML5 新的属性语法](#html5-新的属性语法)
    - [HTML5 图像](#html5-图像)
    - [新的媒介元素](#新的媒介元素)

<!-- /TOC -->

# HTML5 新元素

## 新的语义/结构元素

HTML5 提供的新元素可以构建更好的文档结构：

|  标签  |  描述  |
|  :----:  |  :----  |
|  \<article>  |  定义文档内的文章  |
|  \<aside>  |  定义页面内容之外的内容  |
|  \<bdi>  |  定义与其他文本不同的文本方向  |
|  \<details>  |  定义用户可查看或隐藏的额外细节  |
|  \<dialog>  |  定义对话框或窗口  |
|  \<figcaption>  |  定义 `<figure>` 元素的标题  |
|  \<figure>  |  定义自包含内容，比如图示、图表、照片、代码清单等等  |
|  \<footer>  |  定义文档或节的页脚  |
|  \<header>  |  定义文档或节的页眉  |
|  \<main>  |  定义文档的主内容  |
|  \<mark>  |  定义重要或强调的内容  |
|  \<menuitem>  |  定义用户能够从弹出菜单调用的命令/菜单项目  |
|  \<meter>  |  定义已知范围（尺度）内的标量测量  |
|  \<nav>  |  定义文档内的导航链接  |
|  \<progress>  |  定义任务进度  |
|  \<rp>  |  定义在不支持 ruby 注释的浏览器中显示什么  |
|  \<rt>  |  定义关于字符的解释/发音（用于东亚字体）  |
|  \<ruby>  |  定义 ruby 注释（用于东亚字体）  |
|  \<section>  |  定义文档中的节  |
|  \<summary>  |  定义 `<details>` 元素的可见标题  |
|  \<time>  |  定义日期/时间  |
|  \<wbr>  |  定义可能的折行（line-break）  |

阅读更多有关 [HTML5 语义](./HTML5_语义元素.md) 的内容。

## 新的表单元素

|  标签  |  描述  |
|  :----:  |  :----  |
|  \<datalist>  |  定义输入控件的预定义选项  |
|  \<keygen>  |  定义键对生成器字段（用于表单）  |
|  \<output>  |  定义计算结果  |

阅读更多有关 [HTML 表单元素](./HTML_表单.md#html-表单元素) 中新老元素。

## 新的输入类型/属性

**新的输入类型：**

- color
- date
- datetime
- datetime-local
- email
- month
- number
- range
- search
- tel
- time
- url
- week

**新的输入属性：**

- autocomplete
- autofocus
- form
- formaction
- formenctype
- formmethod
- formnovalidate
- formtarget
- height 和 width
- list
- min 和 max
- multiple
- pattern (regexp)
- placeholder
- required
- step

## HTML5 新的属性语法

HTML5 允许四种不同的属性语法。

例如：`<input>` 标签中使用的不同语法：

|  标签  |  描述  |
|  :----:  |  :----  |
|  Empty  |  \<input type="text" value="Bill Gates" disabled>  |
|  Unquoted  |  \<input type="text" value=Bill>  |
|  Double-quoted  |  \<input type="text" value="Bill Gates">  |
|  Single-quoted  |  \<input type="text" value='Bill Gates'>  |

在 HTML5 中，根据属性所需，可能会使用所有这四种语法。

## HTML5 图像

|  标签  |  描述  |
|  :----:  |  :----  |
|  \<canvas>  |  定义使用 JavaScript 的图像绘制  |
|  \<svg>  |  定义使用 SVG 的图像绘制  |

阅读更多有关 [HTML5 Canvas](./HTML5_图形.md#html5-canvas) 的内容。

阅读更多有关 [HTML5 SVG](./HTML5_图形.md#html5-内联-svg) 的内容。

## 新的媒介元素

|  标签  |  描述  |
|  :----:  |  :----  |
|  \<audio>  |  定义声音或音乐内容  |
|  \<embed>  |  定义外部应用程序的容器（比如插件）  |
|  \<source>  |  定义 `<video>` 和 `<audio>` 的来源  |
|  \<track>  |  定义 `<video>` 和 `<audio>` 的轨道  |
|  \<video>  |  定义视频或影片内容  |

阅读更多有关 [HTML5 视频](./HTML_多媒体.md#html-视频) 的内容。

阅读更多有关 [HTML5 音频](./HTML_多媒体.md#html-音频)的内容。

