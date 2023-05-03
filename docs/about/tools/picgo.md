---
title: PicGo 图床
icon: pic
date: 2023-05-03
category: Tools
tag:
    - 图床
---

- [GitHub 仓库地址](https://github.com/Molunerfinn/PicGo)
- [PicGo 官网地址](https://molunerfinn.com/PicGo/)
- [PicGo 使用文档](https://picgo.github.io/PicGo-Doc/zh/guide/)
- [PicGo 下载地址](https://github.com/Molunerfinn/picgo/releases)

## 图床作用

就是专门用来存放图片，同时允许您把图片对外连接的网上空间，不少图床都是免费的。

## PicGo 描述

PicGo 是一个用于快速上传图片并获取图片 URL 链接的工具

**PicGo 本体支持如下图床：**

- 七牛图床 v1.0
- 腾讯云 COS v4\v5 版本 v1.1 & v1.5.0
- 又拍云 v1.2.0
- GitHub v1.5.0
- SM.MS V2 v2.3.0-beta.0
- 阿里云 OSS v1.6.0
- Imgur v1.6.0

## 配置 GitHub 图床

以 GitHub 图床为例，其他图床配置请参考 [官网](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#%E5%9B%BE%E5%BA%8A%E5%8C%BA)

1. 创建一个 GitHub 账号
2. 在 GitHub 上新建一个仓库
3. [生成一个 token](https://github.com/settings/tokens) 用于 PicGo 操作您的仓库

::: warning
至少选中 repo 选项，然后生成 token

这个 token 生成后只会显示一次！您要把这个 token 复制一下存到其他地方以备以后使用
:::

4. 配置 PicGo

- **图床配置名**：在 PicGo 上显示的名称。**必须配置**
- **设定仓库名**：指定上传的仓库名。格式：`username/repo`（用户名/仓库名）。**必须配置**
- **设定分支名**：指定上传的分支名。例如：`main`。**必须配置**
- **设定 Token**：指定刚才生成的 Token。**必须配置**
- **设定存储路径**：指定存储到仓库的哪个路径下。**默认存储到 `/`（根）目录下**
- **设定自定义域名**：指定 CDN 加速。图片上传后，PicGo 会按照 **自定义域名+上传的图片名** 的方式生成访问链接，例如：填写 [jsDelivr](http://www.jsdelivr.com/) 的 CDN 加速地址，格式：`https://cdn.staticaly.com/gh/<用户名>/<仓库名>`

## 使用插件

您可以在 PicGo 官方的 [Awesome-PicGo](https://github.com/PicGo/Awesome-PicGo) 里找到超棒的 PicGo 插件和应用了 PicGo 的应用或者项目

