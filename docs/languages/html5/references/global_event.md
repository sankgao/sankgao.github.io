---
title: 全局事件
icon: eventstore
date: 2023-05-11
category: Frontend
tag:
    - HTML5
---

HTML 有能力让事件 **触发** 浏览器中的动作。例如：当用户单击元素时启动 JavaScript。

以下是可添加到 HTML 元素以定义事件操作的 **全局事件属性。**

## Window 事件属性

针对 **window 对象** 触发的事件（应用到 \<body> 标签）：

|  属性  |  值  |  描述  |
|  :----:  |  :----:  |  :----  |
|  onafterprint  |  script  |  文档打印之后运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onbeforeprint  |  script  |  文档打印之前运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onbeforeunload  |  script  |  文档卸载之前运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onerror  |  script  |  在错误发生时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onhaschange  |  script  |  当文档已改变时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onload  |  script  |  页面结束加载之后触发  |
|  onmessage  |  script  |  在消息被触发时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onoffline  |  script  |  当文档离线时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  ononline  |  script  |  当文档上线时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onpagehide  |  script  |  当窗口隐藏时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onpageshow  |  script  |  当窗口成为可见时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onpopstate  |  script  |  当窗口历史记录改变时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onredo  |  script  |  当文档执行撤销（redo）时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onresize  |  script  |  当浏览器窗口被调整大小时触发。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onstorage  |  script  |  在 Web Storage 区域更新后运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onundo  |  script  |  在文档执行 undo 时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onunload  |  script  |  一旦页面已下载时触发（或者浏览器窗口已被关闭）  |

## Form 事件

由 **HTML 表单内** 的动作触发的事件（应用到几乎所有 HTML 元素，但最常用在 `form` 元素中）：

|  属性  |  值  |  描述  |
|  :----:  |  :----:  |  :----  |
|  onblur  |  script  |  元素失去焦点时运行的脚本  |
|  onchange  |  script  |  在元素值被改变时运行的脚本  |
|  oncontextmenu  |  script  |  当上下文菜单被触发时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onfocus  |  script  |  当元素获得焦点时运行的脚本  |
|  onformchange  |  script  |  在表单改变时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onforminput  |  script  |  当表单获得用户输入时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  oninput  |  script  |  当元素获得用户输入时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  oninvalid  |  script  |  当元素无效时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onreset  |  script  |  当表单中的重置按钮被点击时触发。:warning: <span style="color: red">HTML5 中不支持</span>  |
|  onselect  |  script  |  在元素中文本被选中后触发  |
|  onsubmit  |  script  |  在提交表单时触发  |

## Keyboard 事件

|  属性  |  值  |  描述  |
|  :----:  |  :----:  |  :----  |
|  onkeydown  |  script  |  在用户按下按键时触发  |
|  onkeypress  |  script  |  在用户敲击按钮时触发  |
|  onkeyup  |  script  |  当用户释放按键时触发  |

## Mouse 事件

由 **鼠标** 或类似 **用户动作** 触发的事件

|  属性  |  值  |  描述  |
|  :----:  |  :----:  |  :----  |
|  onclick  |  script  |  元素上发生鼠标点击时触发  |
|  ondblclick  |  script  |  元素上发生鼠标双击时触发  |
|  ondrag  |  script  |  元素被拖动时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  ondragend  |  script  |  在拖动操作末端运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  ondragenter  |  script  |  当元素元素已被拖动到有效拖放区域时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  ondragleave  |  script  |  当元素离开有效拖放目标时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  ondragover  |  script  |  当元素在有效拖放目标上正在被拖动时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  ondragstart  |  script  |  在拖动操作开端运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  ondrop  |  script  |  当被拖元素正在被拖放时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onmousedown  |  script  |  当元素上按下鼠标按钮时触发  |
|  onmousemove  |  script  |  当鼠标指针移动到元素上时触发  |
|  onmouseout  |  script  |  当鼠标指针移出元素时触发  |
|  onmouseover  |  script  |  当鼠标指针移动到元素上时触发  |
|  onmouseup  |  script  |  当在元素上释放鼠标按钮时触发  |
|  onmousewheel  |  script  |  当鼠标滚轮正在被滚动时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onscroll  |  script  |  当元素滚动条被滚动时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |

## Media 事件

由 **媒介（比如视频、图像和音频）**触发的事件（适用于所有 HTML 元素，但常见于媒介元素中，比如：`<audio>`、`<embed>`、`<img>`、`<object>` 以及 `<video>`）:

|  属性  |  值  |  描述  |
|  :----:  |  :----:  |  :----  |
|  onabort  |  script  |  在退出时运行的脚本  |
|  oncanplay  |  script  |  当文件就绪可以开始播放时运行的脚本（缓冲已足够开始时）。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  oncanplaythrough  |  script  |  当媒介能够无需因缓冲而停止即可播放至结尾时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  ondurationchange  |  script  |  当媒介长度改变时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onemptied  |  script  |  当发生故障并且文件突然不可用时运行的脚本（比如连接意外断开时）。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onended  |  script  |  当媒介已到达结尾时运行的脚本（可发送类似 “感谢观看” 之类的消息）。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onerror  |  script  |  当在文件加载期间发生错误时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onloadeddata  |  script  |  当媒介数据已加载时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onloadedmetadata  |  script  |  当元数据（比如分辨率和时长）被加载时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onloadstart  |  script  |  在文件开始加载且未实际加载任何数据前运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onpause  |  script  |  当媒介被用户或程序暂停时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onplay  |  script  |  当媒介已就绪可以开始播放时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onplaying  |  script  |  当媒介已开始播放时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onprogress  |  script  |  当浏览器正在获取媒介数据时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onratechange  |  script  |  每当回放速率改变时运行的脚本（比如当用户切换到慢动作或快进模式）。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onreadystatechange  |  script  |  每当就绪状态改变时运行的脚本（就绪状态监测媒介数据的状态）。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onseeked  |  script  |  当 seeking 属性设置为 false（指示定位已结束）时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onseeking  |  script  |  当 seeking 属性设置为 true（指示定位是活动的）时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onstalled  |  script  |  在浏览器不论何种原因未能取回媒介数据时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onsuspend  |  script  |  在媒介数据完全加载之前不论何种原因终止取回媒介数据时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  ontimeupdate  |  script  |  当播放位置改变时（比如当用户快进到媒介中一个不同的位置时）运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onvolumechange  |  script  |  每当音量改变时（包括将音量设置为静音）时运行的脚本。:warning: <span style="color: red">HTML5 中添加的属性</span>  |
|  onwaiting  |  script  |  当媒介已停止播放但打算继续播放时（比如当媒介暂停已缓冲更多数据）运行脚本  |

