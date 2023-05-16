import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as l,f as n}from"./app-9bd468f1.js";const d={},r=n('<p>HTML 有能力让事件 <strong>触发</strong> 浏览器中的动作。例如：当用户单击元素时启动 JavaScript。</p><p>以下是可添加到 HTML 元素以定义事件操作的 <strong>全局事件属性。</strong></p><h2 id="window-事件属性" tabindex="-1"><a class="header-anchor" href="#window-事件属性" aria-hidden="true">#</a> Window 事件属性</h2><p>针对 <strong>window 对象</strong> 触发的事件（应用到 &lt;body&gt; 标签）：</p><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">onafterprint</td><td style="text-align:center;">script</td><td style="text-align:left;">文档打印之后运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onbeforeprint</td><td style="text-align:center;">script</td><td style="text-align:left;">文档打印之前运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onbeforeunload</td><td style="text-align:center;">script</td><td style="text-align:left;">文档卸载之前运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onerror</td><td style="text-align:center;">script</td><td style="text-align:left;">在错误发生时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onhaschange</td><td style="text-align:center;">script</td><td style="text-align:left;">当文档已改变时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onload</td><td style="text-align:center;">script</td><td style="text-align:left;">页面结束加载之后触发</td></tr><tr><td style="text-align:center;">onmessage</td><td style="text-align:center;">script</td><td style="text-align:left;">在消息被触发时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onoffline</td><td style="text-align:center;">script</td><td style="text-align:left;">当文档离线时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">ononline</td><td style="text-align:center;">script</td><td style="text-align:left;">当文档上线时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onpagehide</td><td style="text-align:center;">script</td><td style="text-align:left;">当窗口隐藏时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onpageshow</td><td style="text-align:center;">script</td><td style="text-align:left;">当窗口成为可见时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onpopstate</td><td style="text-align:center;">script</td><td style="text-align:left;">当窗口历史记录改变时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onredo</td><td style="text-align:center;">script</td><td style="text-align:left;">当文档执行撤销（redo）时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onresize</td><td style="text-align:center;">script</td><td style="text-align:left;">当浏览器窗口被调整大小时触发。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onstorage</td><td style="text-align:center;">script</td><td style="text-align:left;">在 Web Storage 区域更新后运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onundo</td><td style="text-align:center;">script</td><td style="text-align:left;">在文档执行 undo 时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onunload</td><td style="text-align:center;">script</td><td style="text-align:left;">一旦页面已下载时触发（或者浏览器窗口已被关闭）</td></tr></tbody></table><h2 id="form-事件" tabindex="-1"><a class="header-anchor" href="#form-事件" aria-hidden="true">#</a> Form 事件</h2><p>由 <strong>HTML 表单内</strong> 的动作触发的事件（应用到几乎所有 HTML 元素，但最常用在 <code>form</code> 元素中）：</p><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">onblur</td><td style="text-align:center;">script</td><td style="text-align:left;">元素失去焦点时运行的脚本</td></tr><tr><td style="text-align:center;">onchange</td><td style="text-align:center;">script</td><td style="text-align:left;">在元素值被改变时运行的脚本</td></tr><tr><td style="text-align:center;">oncontextmenu</td><td style="text-align:center;">script</td><td style="text-align:left;">当上下文菜单被触发时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onfocus</td><td style="text-align:center;">script</td><td style="text-align:left;">当元素获得焦点时运行的脚本</td></tr><tr><td style="text-align:center;">onformchange</td><td style="text-align:center;">script</td><td style="text-align:left;">在表单改变时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onforminput</td><td style="text-align:center;">script</td><td style="text-align:left;">当表单获得用户输入时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">oninput</td><td style="text-align:center;">script</td><td style="text-align:left;">当元素获得用户输入时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">oninvalid</td><td style="text-align:center;">script</td><td style="text-align:left;">当元素无效时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onreset</td><td style="text-align:center;">script</td><td style="text-align:left;">当表单中的重置按钮被点击时触发。⚠️ <span style="color:red;">HTML5 中不支持</span></td></tr><tr><td style="text-align:center;">onselect</td><td style="text-align:center;">script</td><td style="text-align:left;">在元素中文本被选中后触发</td></tr><tr><td style="text-align:center;">onsubmit</td><td style="text-align:center;">script</td><td style="text-align:left;">在提交表单时触发</td></tr></tbody></table><h2 id="keyboard-事件" tabindex="-1"><a class="header-anchor" href="#keyboard-事件" aria-hidden="true">#</a> Keyboard 事件</h2><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">onkeydown</td><td style="text-align:center;">script</td><td style="text-align:left;">在用户按下按键时触发</td></tr><tr><td style="text-align:center;">onkeypress</td><td style="text-align:center;">script</td><td style="text-align:left;">在用户敲击按钮时触发</td></tr><tr><td style="text-align:center;">onkeyup</td><td style="text-align:center;">script</td><td style="text-align:left;">当用户释放按键时触发</td></tr></tbody></table><h2 id="mouse-事件" tabindex="-1"><a class="header-anchor" href="#mouse-事件" aria-hidden="true">#</a> Mouse 事件</h2><p>由 <strong>鼠标</strong> 或类似 <strong>用户动作</strong> 触发的事件</p><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">onclick</td><td style="text-align:center;">script</td><td style="text-align:left;">元素上发生鼠标点击时触发</td></tr><tr><td style="text-align:center;">ondblclick</td><td style="text-align:center;">script</td><td style="text-align:left;">元素上发生鼠标双击时触发</td></tr><tr><td style="text-align:center;">ondrag</td><td style="text-align:center;">script</td><td style="text-align:left;">元素被拖动时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">ondragend</td><td style="text-align:center;">script</td><td style="text-align:left;">在拖动操作末端运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">ondragenter</td><td style="text-align:center;">script</td><td style="text-align:left;">当元素元素已被拖动到有效拖放区域时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">ondragleave</td><td style="text-align:center;">script</td><td style="text-align:left;">当元素离开有效拖放目标时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">ondragover</td><td style="text-align:center;">script</td><td style="text-align:left;">当元素在有效拖放目标上正在被拖动时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">ondragstart</td><td style="text-align:center;">script</td><td style="text-align:left;">在拖动操作开端运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">ondrop</td><td style="text-align:center;">script</td><td style="text-align:left;">当被拖元素正在被拖放时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onmousedown</td><td style="text-align:center;">script</td><td style="text-align:left;">当元素上按下鼠标按钮时触发</td></tr><tr><td style="text-align:center;">onmousemove</td><td style="text-align:center;">script</td><td style="text-align:left;">当鼠标指针移动到元素上时触发</td></tr><tr><td style="text-align:center;">onmouseout</td><td style="text-align:center;">script</td><td style="text-align:left;">当鼠标指针移出元素时触发</td></tr><tr><td style="text-align:center;">onmouseover</td><td style="text-align:center;">script</td><td style="text-align:left;">当鼠标指针移动到元素上时触发</td></tr><tr><td style="text-align:center;">onmouseup</td><td style="text-align:center;">script</td><td style="text-align:left;">当在元素上释放鼠标按钮时触发</td></tr><tr><td style="text-align:center;">onmousewheel</td><td style="text-align:center;">script</td><td style="text-align:left;">当鼠标滚轮正在被滚动时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onscroll</td><td style="text-align:center;">script</td><td style="text-align:left;">当元素滚动条被滚动时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr></tbody></table><h2 id="media-事件" tabindex="-1"><a class="header-anchor" href="#media-事件" aria-hidden="true">#</a> Media 事件</h2><p>由 **媒介（比如视频、图像和音频）**触发的事件（适用于所有 HTML 元素，但常见于媒介元素中，比如：<code>&lt;audio&gt;</code>、<code>&lt;embed&gt;</code>、<code>&lt;img&gt;</code>、<code>&lt;object&gt;</code> 以及 <code>&lt;video&gt;</code>）:</p><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">onabort</td><td style="text-align:center;">script</td><td style="text-align:left;">在退出时运行的脚本</td></tr><tr><td style="text-align:center;">oncanplay</td><td style="text-align:center;">script</td><td style="text-align:left;">当文件就绪可以开始播放时运行的脚本（缓冲已足够开始时）。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">oncanplaythrough</td><td style="text-align:center;">script</td><td style="text-align:left;">当媒介能够无需因缓冲而停止即可播放至结尾时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">ondurationchange</td><td style="text-align:center;">script</td><td style="text-align:left;">当媒介长度改变时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onemptied</td><td style="text-align:center;">script</td><td style="text-align:left;">当发生故障并且文件突然不可用时运行的脚本（比如连接意外断开时）。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onended</td><td style="text-align:center;">script</td><td style="text-align:left;">当媒介已到达结尾时运行的脚本（可发送类似 “感谢观看” 之类的消息）。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onerror</td><td style="text-align:center;">script</td><td style="text-align:left;">当在文件加载期间发生错误时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onloadeddata</td><td style="text-align:center;">script</td><td style="text-align:left;">当媒介数据已加载时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onloadedmetadata</td><td style="text-align:center;">script</td><td style="text-align:left;">当元数据（比如分辨率和时长）被加载时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onloadstart</td><td style="text-align:center;">script</td><td style="text-align:left;">在文件开始加载且未实际加载任何数据前运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onpause</td><td style="text-align:center;">script</td><td style="text-align:left;">当媒介被用户或程序暂停时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onplay</td><td style="text-align:center;">script</td><td style="text-align:left;">当媒介已就绪可以开始播放时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onplaying</td><td style="text-align:center;">script</td><td style="text-align:left;">当媒介已开始播放时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onprogress</td><td style="text-align:center;">script</td><td style="text-align:left;">当浏览器正在获取媒介数据时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onratechange</td><td style="text-align:center;">script</td><td style="text-align:left;">每当回放速率改变时运行的脚本（比如当用户切换到慢动作或快进模式）。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onreadystatechange</td><td style="text-align:center;">script</td><td style="text-align:left;">每当就绪状态改变时运行的脚本（就绪状态监测媒介数据的状态）。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onseeked</td><td style="text-align:center;">script</td><td style="text-align:left;">当 seeking 属性设置为 false（指示定位已结束）时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onseeking</td><td style="text-align:center;">script</td><td style="text-align:left;">当 seeking 属性设置为 true（指示定位是活动的）时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onstalled</td><td style="text-align:center;">script</td><td style="text-align:left;">在浏览器不论何种原因未能取回媒介数据时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onsuspend</td><td style="text-align:center;">script</td><td style="text-align:left;">在媒介数据完全加载之前不论何种原因终止取回媒介数据时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">ontimeupdate</td><td style="text-align:center;">script</td><td style="text-align:left;">当播放位置改变时（比如当用户快进到媒介中一个不同的位置时）运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onvolumechange</td><td style="text-align:center;">script</td><td style="text-align:left;">每当音量改变时（包括将音量设置为静音）时运行的脚本。⚠️ <span style="color:red;">HTML5 中添加的属性</span></td></tr><tr><td style="text-align:center;">onwaiting</td><td style="text-align:center;">script</td><td style="text-align:left;">当媒介已停止播放但打算继续播放时（比如当媒介暂停已缓冲更多数据）运行脚本</td></tr></tbody></table>',16),s=[r];function a(i,c){return e(),l("div",null,s)}const g=t(d,[["render",a],["__file","global_event.html.vue"]]);export{g as default};
