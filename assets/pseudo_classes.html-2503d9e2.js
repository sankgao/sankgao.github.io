import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as u,b as t,w as e,f as c,d as n,e as s}from"./app-8932348c.js";const i={},k=c(`<p>伪类用于定义元素的特殊状态。</p><p>可以用于：</p><ul><li>设置鼠标悬停在元素上时的样式</li><li>为已访问和未访问链接设置不同的样式</li><li>设置元素获得焦点时的样式</li></ul><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><p>伪类的语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>selector:pseudo-class {
  property: value;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>selector</strong>：选择器</li><li><strong>pseudo-class</strong>：伪类</li><li><strong>property</strong>：属性</li><li><strong>value</strong>：值</li></ul><h2 id="锚伪类" tabindex="-1"><a class="header-anchor" href="#锚伪类" aria-hidden="true">#</a> 锚伪类</h2><p>链接能够以不同的方式显示。例如：</p>`,9),d=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("b")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.w3school.com.cn/"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("_blank"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("这是一个链接"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("b")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),r=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token comment"},"/* 未访问的链接 */"),s(`
`),n("span",{class:"token selector"},"a:link"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"/* 访问过的链接 */"),s(`
`),n("span",{class:"token selector"},"a:visited"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" green"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"/* 鼠标悬停在链接上 */"),s(`
`),n("span",{class:"token selector"},"a:hover"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" hotpink"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"/* 链接被点击时 */"),s(`
`),n("span",{class:"token selector"},"a:active"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" blue"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=c('<div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><code>a:hover</code> 必须在 CSS 定义中的 <code>a:link</code> 和 <code>a:visited</code> 之后，才能生效</li><li><code>a:active</code> 必须在 CSS 定义中的 <code>a:hover</code> 之后才能生效</li><li>伪类名称对大小写不敏感</li></ul></div><h3 id="伪类和-css-类" tabindex="-1"><a class="header-anchor" href="#伪类和-css-类" aria-hidden="true">#</a> 伪类和 CSS 类</h3><p>伪类可以与 CSS 类结合使用。</p><p>例如：当您将鼠标悬停在例子中的链接上时，它会改变颜色。</p>',4),g=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("b")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.w3school.com.cn/"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("_blank"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("这是一个链接"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("b")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("伪类可以与 CSS 类结合使用："),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("b")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("highlight"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.w3school.com.cn/"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("_blank"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("这是一个链接"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("b")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token comment"},"/* 未访问的链接 */"),s(`
`),n("span",{class:"token selector"},"a:link"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"/* 访问过的链接 */"),s(`
`),n("span",{class:"token selector"},"a:visited"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" green"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"/* 鼠标悬停在链接上 */"),s(`
`),n("span",{class:"token selector"},"a:hover"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" hotpink"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"a.highlight:hover"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #ff0000"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"/* 链接被点击时 */"),s(`
`),n("span",{class:"token selector"},"a:active"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" blue"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("h3",{id:"悬停在-div-上",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#悬停在-div-上","aria-hidden":"true"},"#"),s(" 悬停在 <div> 上")],-1),h=n("p",null,[s("在 "),n("code",null,"<div>"),s(" 元素上使用 "),n("code",null,":hover"),s(" 伪类的实例。例如：")],-1),_=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("请把鼠标移到下面的 div 元素上来改变其背景色："),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("把鼠标移到我上面"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" green"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 25px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"div:hover"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" blue"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("h3",{id:"简单的工具提示悬停",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简单的工具提示悬停","aria-hidden":"true"},"#"),s(" 简单的工具提示悬停")],-1),f=n("p",null,[s("把鼠标悬停到 "),n("code",null,"<div>"),s(" 元素以显示 "),n("code",null,"<p>"),s(" 元素（类似工具提示的效果）。例如：")],-1),B=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`鼠标移到我上面来显示 p 元素
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("哈哈！我在这里！"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"p"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" yellow"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"div:hover p"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" block"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"first-child-伪类",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#first-child-伪类","aria-hidden":"true"},"#"),s(" :first-child 伪类")],-1),S=n("p",null,[n("code",null,":first-child"),s(" 伪类与指定的元素匹配：该元素是另一个元素的第一个子元素。")],-1),V=n("p",null,[s("选择器匹配作为任何元素的第一个子元素的任何 "),n("code",null,"<p>"),s(" 元素。例如：")],-1),J=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("这是一段文本。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("这是一段文本。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"p:first-child"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" blue"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(` 
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K=n("h3",{id:"匹配所有-p-元素中的首个-i-元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#匹配所有-p-元素中的首个-i-元素","aria-hidden":"true"},"#"),s(" 匹配所有 <p> 元素中的首个 <i> 元素")],-1),q=n("p",null,[s("选择器匹配所有 "),n("code",null,"<p>"),s(" 元素中的第一个 "),n("code",null,"<i>"),s(" 元素。例如：")],-1),E=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("这是"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),n("span",{class:"token punctuation"},">")]),s("一段"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("i")]),n("span",{class:"token punctuation"},">")]),s("文本。这是"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),n("span",{class:"token punctuation"},">")]),s("一段"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("i")]),n("span",{class:"token punctuation"},">")]),s("文本。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("这是"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),n("span",{class:"token punctuation"},">")]),s("一段"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("i")]),n("span",{class:"token punctuation"},">")]),s("文本。这是"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),n("span",{class:"token punctuation"},">")]),s("一段"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("i")]),n("span",{class:"token punctuation"},">")]),s("文本。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"p i:first-child"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" blue"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(` 
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("h3",{id:"匹配所有首个-p-元素中的所有-i-元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#匹配所有首个-p-元素中的所有-i-元素","aria-hidden":"true"},"#"),s(" 匹配所有首个 <p> 元素中的所有 <i> 元素")],-1),L=n("p",null,[s("选择器匹配作为另一个元素的第一个子元素的 "),n("code",null,"<p>"),s(" 元素中的所有 "),n("code",null,"<i>"),s(" 元素。例如：")],-1),Q=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("这是"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),n("span",{class:"token punctuation"},">")]),s("一段"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("i")]),n("span",{class:"token punctuation"},">")]),s("文本。这是"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),n("span",{class:"token punctuation"},">")]),s("一段"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("i")]),n("span",{class:"token punctuation"},">")]),s("文本。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("这是"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),n("span",{class:"token punctuation"},">")]),s("一段"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("i")]),n("span",{class:"token punctuation"},">")]),s("文本。这是"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),n("span",{class:"token punctuation"},">")]),s("一段"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("i")]),n("span",{class:"token punctuation"},">")]),s("文本。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"p:first-child i"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" blue"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(` 
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("h2",{id:"lang-伪类",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lang-伪类","aria-hidden":"true"},"#"),s(" :lang 伪类")],-1),N=n("p",null,[n("code",null,":lang"),s(" 伪类允许您为不同的语言定义特殊的规则。")],-1),M=n("p",null,[n("code",null,":lang"),s(" 为属性为 "),n("code",null,'lang="en"'),s(" 的 "),n("code",null,"<q>"),s(" 元素定义引号。例如：")],-1),P=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s('在本例中，:lang 为 lang="en" 的 q 元素定义引号：'),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("这是 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("en"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("一段"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("q")]),n("span",{class:"token punctuation"},">")]),s(" 文本。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),X=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"q:lang(en)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"quotes"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"~"'),s(),n("span",{class:"token string"},'"~"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function G(O,R){const a=o("CodeDemo");return p(),u("div",null,[k,t(a,{id:"code-demo-58",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJxdzsFKwzAYwPFXCTkOaQ7eau2TBCTN4lqWJSWN7WEMdAgFD148TKWHIQgyZd6kotiXabP2LQx2h9Xrx/f7f98chnrGoQu92PcC3yMgVOz8FNuxjhMXoSzLnOw4oaGU3KFy5lCBMASaqAnTdu8s4ERMMfTb6sHcv9flZV1uursfc/vsIeJ7yEZR7GMBjyBNEnsJjYApNu226lbb3eN1vwtGCAvi8khMwRwLAKjkUrlAsfEJFgsssLCuR22V/3dplESajQd0ohgTB7j7Xpt1bpZvzVXRFC+9r8ubfSKUKVODQCh1bP85TPyZ9ul1t/xs8i+z+thjQnWUsoEO+AXrKVz8Ahs1m4k="},{default:e(()=>[d,r]),_:1}),m,t(a,{id:"code-demo-90",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJy1kM1Kw0AUhV9liLsiGcFdjNn4CN0OyDSdNqHTSUjGZlEKWoSKiypUqJYuilAoVVrcSCTVvEz+uvIVnJpaWnHrwGwu5zvn3NuUDF6nkiKptqaWNBUDwyGVYyTG3HYVCD3Pk71DVzcsi8q6VZd1BpEEOHaqhAvdaYliVkOSloUPyf088s8jf7rsfSTdsQqxpkJhCm0NMcRERLSYpi9BfDOPgnHkd8FJsQjEIA168e1V9B6md5PPxSAHNo10il13VcmsGlR8LvL/q6W0L+muK+4BCyAZTrNZuOzP0sFlrgUFiBhWqMlqoIkYALpFLUcBDikfIdZaLSm4HMrCzm+uYbomJ+UdtOoQwrbg5WKUjDpJ+zm+GMbDSc5H/vXawrAaxNkxMCxuiz4/FljenOkP8V6lciDedt53QPb4lLbf4k6Q9F/XSVjnZoPs0CV6RnJUan0B1WP2ng=="},{default:e(()=>[g,v]),_:1}),b,h,t(a,{id:"code-demo-100",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsooyc1RslKyKbB7sX77s66ul3sWPFvQ/nz57qcdG57s6H45d9HzWS0KKZllCk9bm59vWfBkR9ezuUufTdn5tH/G09ZtL5p7ns1c/6Jz0/s9s2z0C+xi8mLybICq7dCMetYxEagTaJqNPkg2Jk9JRym5uBhoM8jo6pg8BYWkxOTs9KL80rwU3eT8nPwiK4X0otTUPGuQHFSgPCOzJBUsUJCYkpKZl26lYGRaUAEWKUmtKNFNzMlMz7NSSE7NK0ktAgrXgtwDtMEqI78stQiXPUk5pSBTgYqVagGZ731/"},{default:e(()=>[_,y]),_:1}),x,f,t(a,{id:"code-demo-110",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsooyc1RslKySckss3u5Z8GzBe3Pl+9+2rHhWcfEJzu6Xs5d9Gzu0mcz9j1fskuhQOFpa/PzLQti8hQUbArsnk7uAKL3exqBSp/OWfFi/8yX7T1Aro1+gV1Mno0+yMSYPCUdpeTiYqANBQrVII0pmcUFOYmVVgp5+Xmp1iCRpMTk7PSi/NK8FN3k/Jz8IiuFytScnPxysGRBYkpKZl66lYKRQUEFUKQ2Ji8mD2iyVUZ+WWoR0Emohibl5CdnQ5Qp1QIA3SdhQg=="},{default:e(()=>[B,A]),_:1}),C,S,V,t(a,{id:"code-demo-123",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsooyc1RslKyKbB7sX/msxnrn+xoeLZu67Np7c/mrHnc0GSjX2AXkxeTh19eSUcpubgYaEyBVVpmUXGJbnJGZk6KQnVMnoJCcn5OfpGVQlJOaap1TF6tAlB1LQAhDTcQ"},{default:e(()=>[J,U]),_:1}),K,q,t(a,{id:"code-demo-133",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsooyc1RslKyKbB7sX/msxnrbTLtnuxoeLZuq41+pt2zae3P5qx53NCET85Gv8AuJi8mj2IjlHSUkouLgY4pUMi0SsssKi7RTc7IzElRqI7JU1BIzs/JL7JSSMopTbWOyatVAKqvBQCA4F09"},{default:e(()=>[E,z]),_:1}),w,L,t(a,{id:"code-demo-143",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsooyc1RslKyKbB7sX/msxnrbTLtnuxoeLZuq41+pt2zae3P5qx53NCET85Gv8AuJi8mj2IjlHSUkouLgY4psErLLCou0U3OyMxJUchUqI7JU1BIzs/JL7JSSMopTbWOyatVAKqvBQCDml09"},{default:e(()=>[Q,T]),_:1}),F,N,M,t(a,{id:"code-demo-156",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsooyc1RslKyKbB7OmfFszlrnuzrfrJj7fs9PVY5iXnpCk927FIAMWxjlFLzYpQUns9qUShUeNra/HzLgqfrZj3Z2fl0z9Sn/dvf75llo19gF5MXkwc06sX+mc9mrFewKUTWa/dkR8OzdVtt9AvtFJ5Nawfa9bihCaJJSUcpubgY6IxCsK0aqXmaCtUxeQoKhaX5JanFVgoxSnVAy8GkdUxeLVBHLQBg+VOS"},{default:e(()=>[P,X]),_:1})])}const j=l(i,[["render",G],["__file","pseudo_classes.html.vue"]]);export{j as default};
