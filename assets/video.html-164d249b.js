import{_ as c,Z as l,$ as p,a1 as s,a5 as e,a4 as o,a2 as a,a3 as n,F as u}from"./framework-714d3df7.js";const i={},k=o('<p>在 HTML 中播放视频的方法有很多种。</p><h2 id="问题以及解决方法" tabindex="-1"><a class="header-anchor" href="#问题以及解决方法" aria-hidden="true">#</a> 问题以及解决方法</h2><p>在 HTML 中播放视频并不容易！</p><p>您需要谙熟大量技巧，以确保您的视频文件在所有浏览器中（Internet Explorer、Chrome、Firefox、Safari、Opera）和所有硬件上（PC、Mac、iPad、iPhone）都能够播放。</p><h2 id="使用-embed-标签" tabindex="-1"><a class="header-anchor" href="#使用-embed-标签" aria-hidden="true">#</a> 使用 &lt;embed&gt; 标签</h2><p><code>&lt;embed&gt;</code> 标签的作用是在 HTML 页面中嵌入多媒体元素。</p><p>显示嵌入网页的 Flash 视频。例如：</p>',7),r=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("embed")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("320"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("240"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("/html5/movie.swf"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("p")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("b")]),a("span",{class:"token punctuation"},">")]),n("注释："),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("b")]),a("span",{class:"token punctuation"},">")]),n("浏览器可能需要安装插件以后，才能播放该文件。"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("p")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),d=o('<p><strong>问题：</strong></p><ul><li>HTML4 无法识别 <code>&lt;embed&gt;</code> 标签。您的页面无法通过验证</li><li>如果浏览器不支持 Flash，那么视频将无法播放</li><li>iPad 和 iPhone 不能显示 Flash 视频</li><li>如果您将视频转换为其他格式，那么它仍然不能在所有浏览器中播放</li></ul><h2 id="使用-object-标签" tabindex="-1"><a class="header-anchor" href="#使用-object-标签" aria-hidden="true">#</a> 使用 &lt;object&gt; 标签</h2><p><code>&lt;object&gt;</code> 标签的作用是在 HTML 页面中嵌入多媒体元素。</p><p>显示嵌入网页的一段 Flash 视频。例如：</p>',5),m=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("object")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("320"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("240"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("/html5/movie.swf"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("object")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("p")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("b")]),a("span",{class:"token punctuation"},">")]),n("注释："),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("b")]),a("span",{class:"token punctuation"},">")]),n("浏览器可能需要安装插件以后，才能播放该文件。"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("p")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),h=o('<p><strong>问题：</strong></p><ul><li>如果浏览器不支持 Flash，将无法播放视频</li><li>iPad 和 iPhone 不能显示 Flash 视频</li><li>如果您将视频转换为其他格式，那么它仍然不能在所有浏览器中播放</li></ul><h2 id="使用-video-标签" tabindex="-1"><a class="header-anchor" href="#使用-video-标签" aria-hidden="true">#</a> 使用 &lt;video&gt; 标签</h2><p><code>&lt;video&gt;</code> 是 HTML5 中的新标签。</p><p><code>&lt;video&gt;</code> 标签的作用是在 HTML 页面中嵌入视频元素。</p><p>以下 HTML 片段会显示一段嵌入网页的 ogg、mp4 或 webm 格式的视频。例如：</p>',6),g=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("video")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("320"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("240"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"controls"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("controls"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"autoplay"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("autoplay"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("source")]),n(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("/html5/movie.ogv"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("video/ogv"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("source")]),n(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("/html5/movie.mp4"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("video/mp4"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("source")]),n(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("/html5/movie.webm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("video/webm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("video")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),v=o('<p><strong>问题：</strong></p><ul><li>您必须把视频转换为很多不同的格式</li><li><code>&lt;video&gt;</code> 元素在老式浏览器中无效</li><li><code>&lt;video&gt;</code> 元素无法通过 HTML4 和 XHTML 验证</li></ul><h2 id="最好的-html-解决方法" tabindex="-1"><a class="header-anchor" href="#最好的-html-解决方法" aria-hidden="true">#</a> 最好的 HTML 解决方法</h2><p><code>HTML5 + &lt;object&gt; + &lt;embed&gt;</code>。例如：</p>',4),b=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("video")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("320"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("240"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"controls"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("controls"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"autoplay"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("autoplay"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("source")]),n(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("/html5/movie.ogv"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("video/ogv"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("source")]),n(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("/html5/movie.mp4"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("video/mp4"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("source")]),n(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("/html5/movie.webm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("video/webm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("object")]),n(),a("span",{class:"token attr-name"},"data"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("/html5/movie.mp4"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("320"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("240"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("embed")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("320"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("240"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("/html5/movie.swf"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("object")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("video")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),q=o('<p>上例中使用了 4 中不同的视频格式。HTML5 <code>&lt;video&gt;</code> 元素会尝试播放以 mp4、ogv 或 webm 格式中的一种来播放视频。如果均失败，则回退到 <code>&lt;embed&gt;</code> 元素。</p><p><strong>问题：</strong></p><ul><li>您必须把视频转换为很多不同的格式</li><li><code>&lt;video&gt;</code> 元素无法通过 HTML 4 和 XHTML 验证</li><li><code>&lt;embed&gt;</code> 元素无法通过 HTML 4 和 XHTML 验证</li></ul><p><strong>解决问题：</strong></p><p>使用 <code>&lt;!DOCTYPE html&gt;</code>（HTML5）解决验证问题</p><h2 id="优酷解决方案" tabindex="-1"><a class="header-anchor" href="#优酷解决方案" aria-hidden="true">#</a> 优酷解决方案</h2><p>在 HTML 中显示视频的最简单的方法是使用优酷等视频网站。</p><p>如果您希望在网页中播放视频，那么您可以把视频上传到优酷等视频网站，然后在您的网页中插入 HTML 代码即可播放视频。例如：</p>',8),_=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("embed")]),n(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("http://player.youku.com/player.php/sid/XMzI2NTc4NTMy/v.swf"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("480"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("400"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("application/x-shockwave-flash"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("embed")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),f=a("h2",{id:"使用超链接",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#使用超链接","aria-hidden":"true"},"#"),n(" 使用超链接")],-1),y=a("p",null,"如果网页包含指向媒体文件的超链接，大多数浏览器会使用 “辅助应用程序” 来播放文件。",-1),T=a("p",null,"显示指向 AVI 文件的链接。如果用户点击该链接，浏览器会启动 “辅助应用程序”。比如：Windows Media Player 来播放这个 AVI 文件。",-1),M=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("p")]),a("span",{class:"token punctuation"},">")]),n("点击该链接来播放这个对象"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("p")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("a")]),n(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("/html5/movie.mp4"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("播放视频文件"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("a")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),w=a("h2",{id:"关于内联视频的一段注释",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#关于内联视频的一段注释","aria-hidden":"true"},"#"),n(" 关于内联视频的一段注释")],-1),x=a("p",null,"当视频被包含在网页中时，它被称为内联视频。",-1),E=a("p",null,"如果您打算在 web 应用程序中使用内联视频，您需要意识到很多人都觉得内联视频令人恼火。",-1),A=a("p",null,"同时请注意，用户可能已经关闭了浏览器中的内联视频选项。",-1),F=a("p",null,"最好的建议是只在用户希望看到内联视频的地方包含它们。一个正面的例子是，在用户需要看到视频并点击某个链接时，会打开页面然后播放视频。",-1);function j(B,L){const t=u("CodeDemo");return l(),p("div",null,[k,s(t,{id:"code-demo-21",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsooyc1RslKySc1NSk1RKM9MKcmwjVEyNjKIUVLISM1MzygBco1MQNziomQgWx+kw1Q/N78sM1WvuDwNKKFvF5NnU2Bnk2T3bPOKl+1d7/fMstEHcrb2v1je8XTmiqf961807305p+HFssan6zpfLG591j/pye5tT3YvfTqh7/2enmedvUAFzyatfTZl34v1S59NawfKPm5ostEvABqtVAsAnlBR9w=="},{default:e(()=>[r]),_:1}),d,s(t,{id:"code-demo-58",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsooyc1RslKyyU/KSk0uUSjPTCnJsI1RMjYyiFFSyEjNTM8oAXKNTEDc4qJkIFsfpMVUPze/LDNVr7g8LUbJzkYfot0uJs+mwM4mye7Z5hUv27ve75llow/kbO1/sbzj6cwVT/vXv2je+3JOw4tljU/Xdb5Y3Pqsf9KT3due7F76dELf+z09zzp7gQqeTVr7bMq+F+uXPpvWDpR93NBko18ANFqpFgCl41VC"},{default:e(()=>[m]),_:1}),h,s(t,{id:"code-demo-93",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyFjUEOgyAURK9C/gFKY+2moT0JG4tESMBPADGm6d370bpx427mTV7mAyZ7Bw8QxfYa2Wz7bJ4Sbs1VAjPaDiZTbdpaFY45oksE9ki0mzIG1y1E9yjhJUfGRMIpKs1SVDTy+nTnHovVFxwKqXkJmpb1mm+In5k+tEdzQ6fmrN/+qP5ZdQVfESX4/gCMjl5H"},{default:e(()=>[g]),_:1}),v,s(t,{id:"code-demo-122",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyFkF0KgzAQhK8ScoCmtPal2J4kLzHZmhRjxKyKlN696x8FEX3bmeXbGfbDLfqC33naOgOBdc6gfUh+vZwlZxZcbpHkJRmkDiXWoYhkLCO5qsFQFaondxklf8qSsTSGptbAYq1pKYakm/ChdXAKeUso9hXQZowWkyWOSF8la3KyDskOMr9GZ29mQ/YGjcwoVNuxe+8ZT9AR8BmY/UdulIvd699DTEVIpGLsSRP//gC/9YyJ"},{default:e(()=>[b]),_:1}),q,s(t,{id:"code-demo-163",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJw1zjEPgjAUBOC/QrrDI4bBEHR3gInBoUstxddQ6AstYDX+d4sJ2303XO7D0I+GlaxS40N1iZvlhcfOUwlARgQ1Z8Euw5JJOx4FIYHTHdzr9+3UtLJo2jrAmrmt5yzZdOcxjhTnPAqVfqLfme/0gVSEIDJaCq/tBK/UoZXDJlaV9kY45OzKpwr+h2Ji3x9drTix"},{default:e(()=>[_]),_:1}),f,y,T,s(t,{id:"code-demo-175",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsooyc1RslKyKbB73rTzafvuF+uXvpy871nf0mdzlz6btPbZlH0v9s98smPV0/U7X2xcaKNfYBeTZ5OokFGUmmYbo6QP0m6qn5tflpmql1tgEqNkB9W0vO3loonPprU/2b3NRj8RqEmpFgCXcDjh"},{default:e(()=>[M]),_:1}),w,x,E,A,F])}const K=c(i,[["render",j],["__file","video.html.vue"]]);export{K as default};
