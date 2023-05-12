import{_ as t,Z as e,$ as l,a4 as d}from"./framework-714d3df7.js";const r={},a=d('<p>HTML5 为 <code>&lt;audio&gt;</code> 和 <code>&lt;video&gt;</code> 元素提供了方法、属性和事件。</p><p>这些方法、属性和事件允许您使用 JavaScript 来操作 <code>&lt;audio&gt;</code> 和 <code>&lt;video&gt;</code> 元素。</p><h2 id="html5-audio-video-方法" tabindex="-1"><a class="header-anchor" href="#html5-audio-video-方法" aria-hidden="true">#</a> HTML5 Audio/Video 方法</h2><table><thead><tr><th style="text-align:center;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">addTextTrack()</td><td style="text-align:left;">向音频/视频添加新的文本轨道</td></tr><tr><td style="text-align:center;">canPlayType()</td><td style="text-align:left;">检测浏览器是否能播放指定的音频/视频类型</td></tr><tr><td style="text-align:center;">load()</td><td style="text-align:left;">重新加载音频/视频元素</td></tr><tr><td style="text-align:center;">play()</td><td style="text-align:left;">开始播放音频/视频</td></tr><tr><td style="text-align:center;">pause()</td><td style="text-align:left;">暂停当前播放的音频/视频</td></tr></tbody></table><h2 id="html5-audio-video-属性" tabindex="-1"><a class="header-anchor" href="#html5-audio-video-属性" aria-hidden="true">#</a> HTML5 Audio/Video 属性</h2><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">audioTracks</td><td style="text-align:left;">返回表示可用音轨的 AudioTrackList 对象</td></tr><tr><td style="text-align:center;">autoplay</td><td style="text-align:left;">设置或返回是否在加载完成后随即播放音频/视频</td></tr><tr><td style="text-align:center;">buffered</td><td style="text-align:left;">返回表示音频/视频已缓冲部分的 TimeRanges 对象</td></tr><tr><td style="text-align:center;">controller</td><td style="text-align:left;">返回表示音频/视频当前媒体控制器的 MediaController 对象</td></tr><tr><td style="text-align:center;">controls</td><td style="text-align:left;">设置或返回音频/视频是否显示控件（比如播放/暂停等）</td></tr><tr><td style="text-align:center;">crossOrigin</td><td style="text-align:left;">设置或返回音频/视频的 CORS 设置</td></tr><tr><td style="text-align:center;">currentSrc</td><td style="text-align:left;">返回当前音频/视频的 URL</td></tr><tr><td style="text-align:center;">currentTime</td><td style="text-align:left;">设置或返回音频/视频中的当前播放位置（以秒计）</td></tr><tr><td style="text-align:center;">defaultMuted</td><td style="text-align:left;">设置或返回音频/视频默认是否静音</td></tr><tr><td style="text-align:center;">defaultPlaybackRate</td><td style="text-align:left;">设置或返回音频/视频的默认播放速度</td></tr><tr><td style="text-align:center;">duration</td><td style="text-align:left;">返回当前音频/视频的长度（以秒计）</td></tr><tr><td style="text-align:center;">ended</td><td style="text-align:left;">返回音频/视频的播放是否已结束</td></tr><tr><td style="text-align:center;">error</td><td style="text-align:left;">返回表示音频/视频错误状态的 MediaError 对象</td></tr><tr><td style="text-align:center;">loop</td><td style="text-align:left;">设置或返回音频/视频是否应在结束时重新播放</td></tr><tr><td style="text-align:center;">mediaGroup</td><td style="text-align:left;">设置或返回音频/视频所属的组合（用于连接多个音频/视频元素）</td></tr><tr><td style="text-align:center;">muted</td><td style="text-align:left;">设置或返回音频/视频是否静音</td></tr><tr><td style="text-align:center;">networkState</td><td style="text-align:left;">返回音频/视频的当前网络状态</td></tr><tr><td style="text-align:center;">paused</td><td style="text-align:left;">设置或返回音频/视频是否暂停</td></tr><tr><td style="text-align:center;">playbackRate</td><td style="text-align:left;">设置或返回音频/视频播放的速度</td></tr><tr><td style="text-align:center;">played</td><td style="text-align:left;">返回表示音频/视频已播放部分的 TimeRanges 对象</td></tr><tr><td style="text-align:center;">preload</td><td style="text-align:left;">设置或返回音频/视频是否应该在页面加载后进行加载</td></tr><tr><td style="text-align:center;">readyState</td><td style="text-align:left;">返回音频/视频当前的就绪状态</td></tr><tr><td style="text-align:center;">seekable</td><td style="text-align:left;">返回表示音频/视频可寻址部分的 TimeRanges 对象</td></tr><tr><td style="text-align:center;">seeking</td><td style="text-align:left;">返回用户是否正在音频/视频中进行查找</td></tr><tr><td style="text-align:center;">src</td><td style="text-align:left;">设置或返回音频/视频元素的当前来源</td></tr><tr><td style="text-align:center;">startDate</td><td style="text-align:left;">返回表示当前时间偏移的 Date 对象</td></tr><tr><td style="text-align:center;">textTracks</td><td style="text-align:left;">返回表示可用文本轨道的 TextTrackList 对象</td></tr><tr><td style="text-align:center;">videoTracks</td><td style="text-align:left;">返回表示可用视频轨道的 VideoTrackList 对象</td></tr><tr><td style="text-align:center;">volume</td><td style="text-align:left;">设置或返回音频/视频的音量</td></tr></tbody></table><h2 id="html5-audio-video-事件" tabindex="-1"><a class="header-anchor" href="#html5-audio-video-事件" aria-hidden="true">#</a> HTML5 Audio/Video 事件</h2><table><thead><tr><th style="text-align:center;">事件</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">abort</td><td style="text-align:left;">当音频/视频的加载已放弃时</td></tr><tr><td style="text-align:center;">canplay</td><td style="text-align:left;">当浏览器可以播放音频/视频时</td></tr><tr><td style="text-align:center;">canplaythrough</td><td style="text-align:left;">当浏览器可在不因缓冲而停顿的情况下进行播放时</td></tr><tr><td style="text-align:center;">durationchange</td><td style="text-align:left;">当音频/视频的时长已更改时</td></tr><tr><td style="text-align:center;">emptied</td><td style="text-align:left;">当目前的播放列表为空时</td></tr><tr><td style="text-align:center;">ended</td><td style="text-align:left;">当目前的播放列表已结束时</td></tr><tr><td style="text-align:center;">error</td><td style="text-align:left;">当在音频/视频加载期间发生错误时</td></tr><tr><td style="text-align:center;">loadeddata</td><td style="text-align:left;">当浏览器已加载音频/视频的当前帧时</td></tr><tr><td style="text-align:center;">loadedmetadata</td><td style="text-align:left;">当浏览器已加载音频/视频的元数据时</td></tr><tr><td style="text-align:center;">loadstart</td><td style="text-align:left;">当浏览器开始查找音频/视频时</td></tr><tr><td style="text-align:center;">pause</td><td style="text-align:left;">当音频/视频已暂停时</td></tr><tr><td style="text-align:center;">play</td><td style="text-align:left;">当音频/视频已开始或不再暂停时</td></tr><tr><td style="text-align:center;">playing</td><td style="text-align:left;">当音频/视频在已因缓冲而暂停或停止后已就绪时</td></tr><tr><td style="text-align:center;">progress</td><td style="text-align:left;">当浏览器正在下载音频/视频时</td></tr><tr><td style="text-align:center;">ratechange</td><td style="text-align:left;">当音频/视频的播放速度已更改时</td></tr><tr><td style="text-align:center;">seeked</td><td style="text-align:left;">当用户已移动/跳跃到音频/视频中的新位置时</td></tr><tr><td style="text-align:center;">seeking</td><td style="text-align:left;">当用户开始移动/跳跃到音频/视频中的新位置时</td></tr><tr><td style="text-align:center;">stalled</td><td style="text-align:left;">当浏览器尝试获取媒体数据，但数据不可用时</td></tr><tr><td style="text-align:center;">suspend</td><td style="text-align:left;">当浏览器刻意不获取媒体数据时</td></tr><tr><td style="text-align:center;">timeupdate</td><td style="text-align:left;">当目前的播放位置已更改时</td></tr><tr><td style="text-align:center;">volumechange</td><td style="text-align:left;">当音量已更改时</td></tr><tr><td style="text-align:center;">waiting</td><td style="text-align:left;">当视频由于需要缓冲下一帧而停止</td></tr></tbody></table>',8),n=[a];function i(s,y){return e(),l("div",null,n)}const x=t(r,[["render",i],["__file","audio_video.html.vue"]]);export{x as default};
