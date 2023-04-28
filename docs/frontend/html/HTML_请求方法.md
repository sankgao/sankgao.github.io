<!-- TOC -->

- [HTML 请求方法](#html-请求方法)
    - [HTTP 请求方法](#http-请求方法)
    - [GET 方法](#get-方法)
        - [有关 GET 请求的其他一些注释](#有关-get-请求的其他一些注释)
    - [POST 方法](#post-方法)
        - [有关 POST 请求的其他一些注释](#有关-post-请求的其他一些注释)
    - [PUT 方法](#put-方法)
    - [HEAD 方法](#head-方法)
    - [DELETE 方法](#delete-方法)
    - [OPTIONS 方法](#options-方法)
    - [比较 GET 与 POST](#比较-get-与-post)

<!-- /TOC -->

# HTML 请求方法

超文本传输协议（Hypertext Transfer Protocol，缩写 HTTP）旨在启用客户端和服务器之间的通信。HTTP 充当客户端和服务器之间的请求-响应协议。

举例：客户端（浏览器）向服务器发送 HTTP 请求；然后服务器将响应返回客户端。响应包含有关请求的状态信息，也可能包含所请求的内容。

## HTTP 请求方法

- GET
- POST
- PUT
- HEAD
- DELETE
- PATCH
- OPTIONS

最常用的两种方法是：`GET` 和 `POST`。

## GET 方法

`GET` 用于从指定资源请求数据。

请注意，查询字符串（名称/值对）是在 GET 请求的 URL 中发送的：

```url
/test/demo_form.php?name1=value1&name2=value2
```

### 有关 GET 请求的其他一些注释

- GET 请求可被缓存
- GET 请求保留在浏览器历史记录中
- GET 请求可被收藏为书签
- GET 请求不应在处理敏感数据时使用
- GET 请求有长度限制
- GET 请求只应当用于取回数据（不修改）

## POST 方法

`POST` 用于将数据发送到服务器来创建/更新资源。

通过 POST 发送到服务器的数据存储在 HTTP 请求的请求主体中：

```url
POST /test/demo_form.php HTTP/1.1
Host: w3school.com.cn
name1=value1&name2=value2
```

### 有关 POST 请求的其他一些注释

- POST 请求不会被缓存
- POST 请求不会保留在浏览器历史记录中
- POST 不能被收藏为书签
- POST 请求对数据长度没有要求

## PUT 方法

`PUT` 用于将数据发送到服务器来创建/更新资源。

POST 和 PUT 之间的区别在于 PUT 请求是幂等的（idempotent）。也就是说，多次调用相同的 PUT 请求将始终产生相同的结果。相反，重复调用 POST 请求具有多次创建相同资源的副作用。

## HEAD 方法

HEAD 与 GET 几乎相同，但没有响应主体。

换句话说，如果 GET /users 返回用户列表，那么 HEAD /users 将发出相同的请求，但不会返回用户列表。

HEAD 请求对于在实际发出 GET 请求之前（例如在下载大文件或响应正文之前）检查 GET 请求将返回的内容很有用。

## DELETE 方法

DELETE 方法删除指定的资源。

## OPTIONS 方法

OPTIONS 方法描述目标资源的通信选项。

## 比较 GET 与 POST

|   指令  |  GET  |  POST  |
|  :----:  |  :----  |  :----  |
|  后退按钮/刷新  |  无害  |  数据会被重新提交（浏览器应该告知用户数据会被重新提交）  |
|  书签  |  可收藏为书签  |  不可收藏为书  |
|  缓存  |  能被缓存  |  不能缓  |
|  编码类型  |  application/x-www-form-urlencoded  |  application/x-www-form-urlencoded 或 multipart/form-data。为二进制数据使用多重编码  |
|  历史  |  参数保留在浏览器历史中。  |  参数不会保存在浏览器历史中  |
|  对数据长度的限制  |  是的。当发送数据时，GET 方法向 URL 添加数据；URL 的长度是受限制的（URL 的最大长度是 2048 个字符）。  |  无限制  |
|  对数据类型的限制  |  只允许 ASCII 字符。  |  没有限制。也允许二进制数据  |
|  安全性  |  与 POST 相比，GET 的安全性较差，因为所发送的数据是 URL 的一部分。在发送密码或其他敏感信息时绝不要使用 GET ！  |  POST 比 GET 更安全，因为参数不会被保存在浏览器历史或 web 服务器日志中  |
|  可见性  |  数据在 URL 中对所有人都是可见的。  |  数据不会显示在 URL 中  |

