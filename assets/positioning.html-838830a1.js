import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c as i,d as t,w as e,f as o,b as n,e as s}from"./app-80aa84af.js";const u={},k=o('<p><code>position</code> 属性规定应用于元素的定位方法的类型。</p><p>有五个不同的位置值：</p><ul><li><strong>static</strong></li><li><strong>relative</strong></li><li><strong>fixed</strong></li><li><strong>absolute</strong></li><li><strong>sticky</strong></li></ul><p>元素其实是使用 <code>top</code>、<code>bottom</code>、<code>left</code> 以及 <code>right</code> 属性定位的。但是，除非首先设置了 <code>position</code> 属性，否则这些属性将不起作用。根据不同的 <code>position</code> 值，它们的工作方式也不同。</p><h2 id="position-static" tabindex="-1"><a class="header-anchor" href="#position-static" aria-hidden="true">#</a> position: static;</h2><p>HTML 元素默认情况下的定位方式为 static（静态）。</p><p>静态定位的元素不受 <code>top</code>、<code>bottom</code>、<code>left</code> 以及 <code>right</code> 属性的影响。</p><p><code>position: static;</code> 的元素不会以任何特殊方式定位；它始终根据页面的正常流进行定位。例如：</p>',8),r=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("static"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  这个 div 元素设置 position: static;
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),d=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div.static"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" static"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),s(" 30px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 3px solid #73AD21"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=o('<h2 id="position-relative" tabindex="-1"><a class="header-anchor" href="#position-relative" aria-hidden="true">#</a> position: relative;</h2><p><code>position: relative;</code> 的元素相对于其正常位置进行定位。</p><p>设置相对定位的元素的 <code>top</code>、<code>bottom</code>、<code>left</code> 以及 <code>right</code> 属性将导致其偏离其正常位置进行调整。不会对其余内容进行调整来适应元素留下的任何空间。例如：</p>',3),v=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("relative"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  这个 div 元素设置 position: relative;
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div.relative"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),s(" 30px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 3px solid #73AD21"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=o('<h2 id="position-fixed" tabindex="-1"><a class="header-anchor" href="#position-fixed" aria-hidden="true">#</a> position: fixed;</h2><p><code>position: fixed;</code> 的元素是相对于视口定位的，这意味着即使滚动页面，它也始终位于同一位置。<code>top</code>、<code>bottom</code>、<code>left</code> 以及 <code>right</code> 属性用于定位此元素。</p><p>固定定位的元素不会在页面中通常在放置的位置上留出空隙。</p><p>请注意页面右下角的这个固定元素。例如：</p>',4),h=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fixed"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  这个 div 元素设置 position: fixed;
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div.fixed"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" fixed"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"bottom"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 3px solid #73AD21"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=o('<h2 id="position-absolute" tabindex="-1"><a class="header-anchor" href="#position-absolute" aria-hidden="true">#</a> position: absolute;</h2><p><code>position: absolute;</code> 的元素相对于最近的定位祖先元素进行定位（而不是相对于视口定位。如：<code>fixed</code>）。</p><p>然而，如果绝对定位的元素没有祖先，它将使用文档主体（body），并随页面滚动一起移动。</p><div class="hint-container tip"><p class="hint-container-title">被定位的元素</p><p>被定位的元素是其位置除 <code>static</code> 以外的任何元素</p></div><p>例如：</p>',5),f=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("relative"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`这个 div 元素设置 position: relative;
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("absolute"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("这个 div 元素设置 position: absolute;"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div.relative"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 400px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 3px solid #73AD21"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(` 

`),n("span",{class:"token selector"},"div.absolute"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 80px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 3px solid #73AD21"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=o('<h2 id="position-sticky" tabindex="-1"><a class="header-anchor" href="#position-sticky" aria-hidden="true">#</a> position: sticky;</h2><p><code>position: sticky;</code> 的元素根据用户的滚动位置进行定位。</p><p>粘性元素根据滚动位置在相对（<code>relative</code>）和固定（<code>fixed</code>）之间切换。起先它会被相对定位，直到在视口中遇到给定的偏移位置为止，然后将其 “粘贴” 在适当的位置（比如：<code>position:fixed</code>）。</p><p>在到达其滚动位置时，<code>sticky</code> 元素将停留在页面顶部（<code>top: 0</code>）。例如：</p>',4),K=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("请试着在这个框架内"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("b")]),n("span",{class:"token punctuation"},">")]),s("滚动"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("b")]),n("span",{class:"token punctuation"},">")]),s("页面，以理解粘性定位的原理。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("sticky"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("我是有粘性的！"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding-bottom"),n("span",{class:"token punctuation"},":"),s(" 2000px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("在此例中，当您到达元素的滚动位置时，粘性元素将停留在页面顶部（top: 0）。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("向上滚动以消除粘性。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本.."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本..一些启用滚动的文本.."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div.sticky"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" -webkit-sticky"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" sticky"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 5px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" #cae8ca"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 2px solid #4CAF50"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=o('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>Internet Explorer、Edge 15 以及更早的版本不支持粘性定位。Safari 需要 <code>-webkit-</code> 前缀。您还必须至少指定 <code>top</code>、<code>right</code>、<code>bottom</code> 或 <code>left</code> 之一，以便粘性定位起作用。</p></div><h2 id="重叠元素" tabindex="-1"><a class="header-anchor" href="#重叠元素" aria-hidden="true">#</a> 重叠元素</h2><p>在对元素进行定位时，它们可以与其他元素重叠。</p><p><code>z-index</code> 属性指定元素的堆栈顺序（哪个元素应放置在其他元素的前面或后面）。</p><p>元素可以设置正或负的堆叠顺序。例如：</p>',5),S=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("这是标题"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/background.png"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("background"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("260"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("150"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("由于图像的 z-index 为 1，它将被置于文本上面。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"img"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),s(" 0px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 0px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"z-index"),n("span",{class:"token punctuation"},":"),s(" 1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("p",null,"具有较高堆叠顺序的元素始终位于具有较低堆叠顺序的元素之前。",-1),B=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"如果两个定位的元素重叠而未指定 z-index，则位于 HTML 代码中最后的元素将显示在顶部")],-1),F=n("h2",{id:"定位图像中的文本",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#定位图像中的文本","aria-hidden":"true"},"#"),s(" 定位图像中的文本")],-1),M=n("p",null,"例如：",-1),z=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/background.png"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("background"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("800"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("450"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("topleft"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Top Left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("topright"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Top Right"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bottomleft"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Bottom Left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bottomright"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Bottom Right"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Centered"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".container"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".topleft"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 8px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),s(" 16px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 18px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".topright"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 8px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),s(" 16px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 18px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".bottomleft"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"bottom"),n("span",{class:"token punctuation"},":"),s(" 8px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),s(" 16px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 18px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".bottomright"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"bottom"),n("span",{class:"token punctuation"},":"),s(" 8px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),s(" 16px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 18px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".center"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 50%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 18px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"img"),s(),n("span",{class:"token punctuation"},"{"),s(` 
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" auto"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 0.3"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("h2",{id:"设置元素的形状",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#设置元素的形状","aria-hidden":"true"},"#"),s(" 设置元素的形状")],-1),T=n("p",null,"元素被裁剪为这种形状并显示。例如：",-1),C=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/background.png"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("background"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("800"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("450"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"img"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"clip"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rect"),n("span",{class:"token punctuation"},"("),s("0px"),n("span",{class:"token punctuation"},","),s("60px"),n("span",{class:"token punctuation"},","),s("200px"),n("span",{class:"token punctuation"},","),s("0px"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function O(R,Q){const a=l("CodeDemo");return p(),i("div",null,[k,t(a,{id:"code-demo-48",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsooyc1RslKyScksU0jOSSwuto1RKi5JLMlMjlGyi8lTUHixf+aTHasUQPJPW5ufb1nwYt2+53vXKRTkF2eWZObnWSlAlFvH5NnoA1UBNSnpKCUXFwNNBXL1ILIK1SCzsOhRUMhJTSuxUjA2KKgAc5Pyi1JSi4ACBRUKxfk5mSkKyubGji5GhkDZWqDZtQA1BkNM"},{default:e(()=>[r,d]),_:1}),m,t(a,{id:"code-demo-61",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsooyc1RslKyScksU0jOSSwuto1RKkrNSSzJLEuNUbKLyVNQeLF/5pMdqxRAKp62Nj/fsuDFun3P965TKMgvzizJzM+zUoBpsI7Js9EHqgNqU9JRSi4uBpoM5OrB5BWqQeZh1aegkJOaVmKlYGxQUAHmJuUXpaQWAQUKKhSK83MyUxSUzY0dXYwMgbK1QPNrAZJQRpw="},{default:e(()=>[v,g]),_:1}),b,t(a,{id:"code-demo-77",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsooyc1RslKyScksU0jOSSwuto1RSsusSE2JUbKLyVNQeLF/5pMdqxRA0k9bm59vWfBi3b7ne9cpFOQXZ5Zk5udZKYBVW8fk2egDFQH1KOkoJRcXA80EcvXAkgrVIJMwdSgoJOWXlOTnWikYgHlFmekZJTBOeWZKSYaVgrGBQUEFVG1RSmoRUKSgQqE4PyczRUHZ3NjRxcgQKFsLtLYWAOfhSmI="},{default:e(()=>[h,y]),_:1}),x,t(a,{id:"code-demo-98",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsooyc1RslKyScksU0jOSSwuto1RKkrNSSzJLEuNUbJ7sX/mkx2rFECyT1ubn29Z8GLdvud71ykU5BdnlmTm51kpwBRbx+QpKKAYk5hUnJ9TWkKcMTDF1jb6QFV2MXkwWklHKbm4GOhEIFcPZplCNcg2HI4oz0wpybBSMDEwKKgAC2SkZqZnlFgpGMFFkvKLUlKLrBSMCyoUgPZmpigomxs7uhgZAmVrFWLyYvJAtsHchG4b3K0g4ZL8AisFC5jBRRCbDJAdgrAW5hBD4hwC9HwtAM0umoU="},{default:e(()=>[f,A]),_:1}),_,t(a,{id:"code-demo-114",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJztVNlKw0AU/ZUhvtoFUZAYAyL4FXnJUjQ0ZkITtSJC3Wpdqbi21qUuGETbIlqLXfwYM5Pkqb/gtFOXfoE+9DH3LDmXy5wFZsqa1hiW4QzeK756xUP3LIFytveecSr3OJ/E52WUXOMkHlezaNPmQhLv51/8s6tmbdup3rrppHd37T6d4MQdKmSd+o6bXUW7F2T+kVjmQgYv6ILOKeoskDXRNEcFxrRUOTovMDxO7eGTIs5tUDkRNmtLXIhwf0SmNa9FiMgQFUXVJwMStCw4zYKBcDhsxImJoANAspPI+PHGaWw5lUeSDNX38bKNUiWv0UBrK+7zJXGnG7Qi1gv4uExondxtAiol0VLOPcwQK7qhny/7K3azlrKgwYJws7bxvRL9Z3rPqWx2XKu3uJzyMzfUspvoVBLO2ylKF90Dm9JbaY7Wce4hGOyBfwT2DvTPQXqgr0Jg+hnZNElTkc8g7RCw0LqfAU3VUqHOgsBcRIqqVoCiI93gryF9zxSnvcKCISPeHkiiHJ2MwRldCchQgzEW9MliZFgWKQpjSoTMBow4MKGmKqBvcHxsYqhltkgyLn4C7yksRg=="},{default:e(()=>[K,q]),_:1}),U,t(a,{id:"code-demo-135",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsooyc1RslKyyTC0e7F/5rMZ658taH+5aIaNPlAgJi8mzyYzN12huCjZNkZJPykxOTu9KL80L0WvIC89RkkhMacEKI4QBgqVZ6aUZAAFjcwMgLyM1Mz0DJAaQ1MQVx9iZIHd8ykbn+zqezp739Pm/uezWhSqdDPzUlIrFJ7s2KVg+H5Pz9N1zU83tL1YtPr53nVAhc+mtT+bs+bJjq6Xcxc9bmiy0S8AGqSko5RcXAx0O8iF1TF5CgoF+cWZJZn5eVYKiUnF+TmlJanWIOGc1LQSKwWDggowryS/AMGB2mulYAjk1gLNrAUAuwpxOA=="},{default:e(()=>[S,w]),_:1}),J,B,F,M,t(a,{id:"code-demo-153",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyVk81SwyAQgF9lhxlvNo2jdTqxetCrJ8cjF0powkghE7a12um7u0D6M06N6Sns8vEtWWDLalwaVrBZqdcgjfD+kTPpLAptVcvZE7cAM72swLeSpsZzIT+q1q1smTW24gyEQcof05T61CXWlJzmOUW10lUdmLtJCMdJeVoPXWPUAqnau2vglYazMc2fBdsg68i3MP4DnTtEt+y0zzHoMyd8L+/4Pr9UFmODXuJAlXtu/2XXTHpPrc0O7YRt0DTOa9TOFtAqI1Cv1QO3O265zbpG/ObE3DuzwsABEFPAtNnEINAF3Nx34YIqjbz+VpRLyMEbf224OOIDzMc297oTdvG+T07lIv3Q3adD/L8rk/wqBvFikyPvYlQbHAmjK1qVXH3lwivawjlPeiJUeYUuJlwjpMavAvLsNi1nux9GqUH7"},{default:e(()=>[z,E]),_:1}),L,T,t(a,{id:"code-demo-163",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJxFjM0KwyAQhF9F9tRCaKS0paQ/T+LFGFGpUdENLYS8e3dPOczAfAzfCh7nCAM8w+xEq+aloB+1+bialzSdSnIKhI5IfMeEvmFCT/AuJS1vg/P8uVx59m+VoAPTGplZvKokRMktYMhpEHpsOS5oH4xNDGUQ1Ro8yPLrblxnyU050mUj2fYHcDo3Lg=="},{default:e(()=>[C,N]),_:1})])}const W=c(u,[["render",O],["__file","positioning.html.vue"]]);export{W as default};