---
title: 文件路径
icon: path
date: 2023-05-08
category: Frontend
tag:
    - HTML5
---

文件路径描述了网站文件夹结构中某个文件的位置。

文件路径会在链接外部文件时被用到：

- 网页
- 图像
- 样式表
- JavaScript

## 绝对文件路径

绝对文件路径是指向一个因特网文件的完整 URL。

```html
<img src="https://www.w3school.com.cn/images/picture.jpg" alt="flower" />
```

## 相对路径

相对路径指向了相对于当前页面的文件。

```html
<!-- 位于当前网站根目录中 images 文件夹里的一个文件 -->
<img src="/images/picture.jpg" alt="flower" />

<!-- 位于当前文件夹中 images 文件夹里的一个文件 -->
<img src="images/picture.jpg" alt="flower" />

<!-- 位于当前文件夹的上一级文件夹中 images 文件夹里的一个文件 -->
<img src="../images/picture.jpg" alt="flower" />
```

- 使用相对路径是个好习惯（如果可能）
- 如果使用了相对路径，那么您的网页就不会与当前的基准 URL 进行绑定。所有链接在您的电脑上（localhost）或未来的公共域中均可正常工作
