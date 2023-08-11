---
title: URL
icon: locator
date: 2023-05-09
category: Frontend
tag:
    - HTML5
---

`URL`（Uniform Resource Locator） **统一资源定位符** 也被称为网址。

URL 可以由单词组成。比如：`w3school.com.cn`，或者是因特网协议（IP）地址：`192.168.1.253`。

大多数人在网上冲浪时，会键入网址的域名，因为名称比数字容易记忆。

## URL

当您点击 HTML 页面中的某个链接时，对应的 `<a>` 标签指向万维网上的一个地址。

统一资源定位器（URL）用于定位万维网上的文档（或其他数据）。

比如网址：<http://www.w3school.com.cn/html/index.asp>，遵守以下的语法规则：

```html
scheme://host.domain:port/path/filename
```

- **scheme**：定义因特网服务的 **类型**。最常见的类型是 `http`
- **host**：定义 **域主机**（`http` 的默认主机是 `www`）
- **domain**：定义因特网 **域名**。比如：`w3school.com.cn`
- **:port**：定义主机上的 **端口号**（`http` 的默认端口号是 `80`）
- **path**：定义服务器上的 **路径**（如果省略，则文档必须位于网站的根目录中）
- **filename**：定义 **文档资源** 的名称

## URL Schemes

以下是其中一些最流行的 scheme：

|  Scheme  |  访问  |  描述  |
|  :----:  |  :----  |  :----  |
|  http  |  超文本传输协议  |  以 `http://` 开头的普通网页。不加密  |
|  https  |  安全超文本传输协议  |  安全网页。加密所有信息交换  |
|  ftp  |  文件传输协议  |  用于将文件下载或上传至网站  |
|  file  |     |  您计算机上的文件  |

