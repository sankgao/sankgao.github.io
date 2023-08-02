import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as l,f as d}from"./app-6a670b99.js";const r={},n=d('<p>服务器总会为每个请求返回一条消息。这些消息应称为 <strong>HTTP 状态消息</strong>。最常见的消息是 <code>200 OK</code>。</p><h2 id="html-错误消息" tabindex="-1"><a class="header-anchor" href="#html-错误消息" aria-hidden="true">#</a> HTML 错误消息</h2><p>当浏览器向 Web 服务器请求服务时，可能会发生错误，并且服务器可能会返回错误代码。例如：<code>404 Not Found</code>。</p><p>通常这些错误被称为 <strong>HTML 错误消息。</strong></p><p>以下是可能返回的 HTTP 状态消息的列表。</p><h2 id="_1xx-信息" tabindex="-1"><a class="header-anchor" href="#_1xx-信息" aria-hidden="true">#</a> 1xx: 信息</h2><table><thead><tr><th style="text-align:center;">消息</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">100 Continue</td><td style="text-align:left;">服务器仅接收到部分请求，但是一旦服务器并没有拒绝该请求，客户端应该继续发送其余的请求</td></tr><tr><td style="text-align:center;">101 Switching Protocols</td><td style="text-align:left;">服务器转换协议：服务器将遵从客户的请求转换到另外一种协议</td></tr></tbody></table><h2 id="_2xx-成功" tabindex="-1"><a class="header-anchor" href="#_2xx-成功" aria-hidden="true">#</a> 2xx: 成功</h2><table><thead><tr><th style="text-align:center;">消息</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">200 OK</td><td style="text-align:left;">请求成功（其后是对 GET 和 POST 请求的应答文档）</td></tr><tr><td style="text-align:center;">201 Created</td><td style="text-align:left;">请求被创建完成，同时新的资源被创建</td></tr><tr><td style="text-align:center;">202 Accepted</td><td style="text-align:left;">供处理的请求已被接受，但是处理未完成</td></tr><tr><td style="text-align:center;">203 Non-authoritative Information</td><td style="text-align:left;">文档已经正常地返回，但一些应答头可能不正确，因为使用的是文档的拷贝</td></tr><tr><td style="text-align:center;">204 No Content</td><td style="text-align:left;">没有新文档。浏览器应该继续显示原来的文档。如果用户定期地刷新页面，而 Servlet 可以确定用户文档足够新，这个状态代码是很有用的</td></tr><tr><td style="text-align:center;">205 Reset Content</td><td style="text-align:left;">没有新文档。但浏览器应该重置它所显示的内容。用来强制浏览器清除表单输入内容</td></tr><tr><td style="text-align:center;">206 Partial Content</td><td style="text-align:left;">客户发送了一个带有 Range 头的 GET 请求，服务器完成了它</td></tr></tbody></table><h2 id="_3xx-重定向" tabindex="-1"><a class="header-anchor" href="#_3xx-重定向" aria-hidden="true">#</a> 3xx: 重定向</h2><table><thead><tr><th style="text-align:center;">消息</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">300 Multiple Choices</td><td style="text-align:left;">多重选择。链接列表。用户可以选择某链接到达目的地。最多允许五个地址</td></tr><tr><td style="text-align:center;">301 Moved Permanently</td><td style="text-align:left;">所请求的页面已经转移至新的 url</td></tr><tr><td style="text-align:center;">302 Found</td><td style="text-align:left;">所请求的页面已经临时转移至新的 url</td></tr><tr><td style="text-align:center;">303 See Other</td><td style="text-align:left;">所请求的页面可在别的 url 下被找到</td></tr><tr><td style="text-align:center;">304 Not Modified</td><td style="text-align:left;">未按预期修改文档。客户端有缓冲的文档并发出了一个条件性的请求（一般是提供 If-Modified-Since 头表示客户只想比指定日期更新的文档）。服务器告诉客户，原来缓冲的文档还可以继续使用</td></tr><tr><td style="text-align:center;">305 Use Proxy</td><td style="text-align:left;">客户请求的文档应该通过 Location 头所指明的代理服务器提取</td></tr><tr><td style="text-align:center;">306 Unused</td><td style="text-align:left;">此代码被用于前一版本。目前已不再使用，但是代码依然被保留</td></tr><tr><td style="text-align:center;">307 Temporary Redirect</td><td style="text-align:left;">被请求的页面已经临时移至新的url</td></tr></tbody></table><h2 id="_4xx-客户端错误" tabindex="-1"><a class="header-anchor" href="#_4xx-客户端错误" aria-hidden="true">#</a> 4xx: 客户端错误</h2><table><thead><tr><th style="text-align:center;">消息</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">400 Bad Request</td><td style="text-align:left;">服务器未能理解请求</td></tr><tr><td style="text-align:center;">401 Unauthorized</td><td style="text-align:left;">被请求的页面需要用户名和密码</td></tr><tr><td style="text-align:center;">402 Payment Required</td><td style="text-align:left;">此代码尚无法使用</td></tr><tr><td style="text-align:center;">403 Forbidden</td><td style="text-align:left;">对被请求页面的访问被禁止</td></tr><tr><td style="text-align:center;">404 Not Found</td><td style="text-align:left;">服务器无法找到被请求的页面</td></tr><tr><td style="text-align:center;">405 Method Not Allowed</td><td style="text-align:left;">请求中指定的方法不被允许</td></tr><tr><td style="text-align:center;">406 Not Acceptable</td><td style="text-align:left;">服务器生成的响应无法被客户端所接受</td></tr><tr><td style="text-align:center;">407 Proxy Authentication Required</td><td style="text-align:left;">用户必须首先使用代理服务器进行验证，这样请求才会被处理</td></tr><tr><td style="text-align:center;">408 Request Timeout</td><td style="text-align:left;">请求超出了服务器的等待时间</td></tr><tr><td style="text-align:center;">409 Conflict</td><td style="text-align:left;">由于冲突，请求无法被完成</td></tr><tr><td style="text-align:center;">410 Gone</td><td style="text-align:left;">被请求的页面不可用</td></tr><tr><td style="text-align:center;">411 Length Required</td><td style="text-align:left;">&quot;Content-Length&quot; 未被定义。如果无此内容，服务器不会接受请求</td></tr><tr><td style="text-align:center;">412 Precondition Failed</td><td style="text-align:left;">请求中的前提条件被服务器评估为失败</td></tr><tr><td style="text-align:center;">413 Request Entity Too Large</td><td style="text-align:left;">由于所请求的实体的太大，服务器不会接受请求</td></tr><tr><td style="text-align:center;">414 Request-url Too Long</td><td style="text-align:left;">由于 url 太长，服务器不会接受请求。当 post 请求被转换为带有很长的查询信息的 get 请求时，就会发生这种情况</td></tr><tr><td style="text-align:center;">415 Unsupported Media Type</td><td style="text-align:left;">由于媒介类型不被支持，服务器不会接受请求</td></tr><tr><td style="text-align:center;">416</td><td style="text-align:left;">服务器不能满足客户在请求中指定的 Range 头</td></tr><tr><td style="text-align:center;">417 Expectation Failed</td><td style="text-align:left;"></td></tr></tbody></table><h2 id="_5xx-服务器错误" tabindex="-1"><a class="header-anchor" href="#_5xx-服务器错误" aria-hidden="true">#</a> 5xx: 服务器错误</h2><table><thead><tr><th style="text-align:center;">消息</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">500 Internal Server Error</td><td style="text-align:left;">请求未完成。服务器遇到不可预知的情况</td></tr><tr><td style="text-align:center;">501 Not Implemented</td><td style="text-align:left;">请求未完成。服务器不支持所请求的功能</td></tr><tr><td style="text-align:center;">502 Bad Gateway</td><td style="text-align:left;">请求未完成。服务器从上游服务器收到一个无效的响应</td></tr><tr><td style="text-align:center;">503 Service Unavailable</td><td style="text-align:left;">请求未完成。服务器临时过载或当机</td></tr><tr><td style="text-align:center;">504 Gateway Timeout</td><td style="text-align:left;">网关超时</td></tr><tr><td style="text-align:center;">505 HTTP Version Not Supported</td><td style="text-align:left;">服务器不支持请求中指明的 HTTP 协议版本</td></tr></tbody></table>',15),a=[n];function i(s,x){return e(),l("div",null,a)}const o=t(r,[["render",i],["__file","status_messages.html.vue"]]);export{o as default};
