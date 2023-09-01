---
title: 阿里云盘自动签到
icon: semantic
date: 2023-07-14
category: Tools
tag:
    - Scripts
---

::: warning
无需部署，无需服务器，每个月更新一次 token

使用金山文档的每日定时任务，执行阿里云盘签到接口
:::

## 新建表格

::: tip
填写表格时需要注意的地方：**是否领取奖励** 和 **邮箱** 中间有一列空列，**是否发送邮箱签到提醒** 和 **是否自定义发送邮箱** 中间有一列空列。（可以直接复制下面的表格，然后进行修改）

**refresh_token** 填写自己账号在登陆后的 [阿里云盘网页](https://www.aliyundrive.com/sign/in) 中获取到的值

**邮箱 SMPT 密码** 获取的方法：

- 在邮箱中打开设置
- 找到 **POP3/SMTP/IMAP** 并开启服务
- 找到 **授权密码管理** 点击 **新增授权密码**，然后根据提示操作。**注意** 授权密码只显示一次，需要提前复制保存到其它地方，以防忘记
:::

打开 [金山文档（网页版也可以）](https://www.kdocs.cn/latest?from=docs)，新建一个 **Office文档** 空表格。

在表格中写入以下内容并保存：

|  refresh_token  |  是否签到  |  是否领取奖励  |    |  邮箱  |  邮箱地址  |  是否发送邮箱签到提醒  |    |  是否自定义发送邮箱  |  是  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  23c63ea0cc43baf970525aad5  |  是  |  是  |    |  接收邮箱地址  |  sankgao@163.com  |  是  |    |  SMTP 服务器域名  |  smtp.163.com  |
|    |    |    |    |  接收邮箱地址  |    |    |    |  port  |  465  |
|    |    |    |    |  接收邮箱地址  |    |    |    |  发送邮箱地址  |  sankgao@163.com  |
|    |    |    |    |  接收邮箱地址  |    |    |    |  邮箱 SMTP 密码  |  MRILGSPEYBQ  |

- **refresh_token**：从浏览器中获取 `refresh_token` 值，可以写入多个账户的 `refresh_token`。获取 `refresh_token` 值步骤如下：

    - **浏览器登陆阿里云盘**
    - 点击 **F12**
    - 点击 **应用（应用程序）**
    - 点击 **本地缓存**
    - 点击 **token**
    - 复制 **refresh_token 对应的值**

- **是否领取奖励**：

    - **是**：自动领取签到奖励
    - **否**：只签到，需要自己手动领取签到奖励

- **是否发送邮箱签到提醒**：如果需要发送邮箱通知，要写入对应的 **接收邮箱地址**，不发送就不用写（或者选择否）。支持发送到多个邮箱地址

- **是否自定义发送邮箱**：如果需要写入以下 **配置**，不需要自定义就不用写（或者选择否）

    - **SMTP 服务器域名**：根据自己的邮箱选择写入 SMTP 服务器域名

        - **163.com**：`smtp.163.com`
        - **QQ 邮箱**：`smtp.qq.com`
    
    - **port**：发送端口
    - **发送邮箱地址**
    - **邮箱 SMPT 密码**：SMPT 服务授权密码。并非邮箱账户登陆密码

## 创建 AirScript 脚本

在表格页面上方，依次点击 **效率 -> 高级开发 -> AirScript脚本编辑器。**

在 **AirScript脚本编辑器** 中，依次点击 **创建脚本 -> 文档共享脚本。**

脚本中写入以下代码并保存：

```javascript
var myDate = new Date();  // 创建一个表示当前时间的 Date 对象
var data_time = myDate.toLocaleDateString();  // 获取当前日期的字符串表示

function sleep(d) {
  for (var t = Date.now(); Date.now() - t <= d;);  // 使程序暂停执行一段时间
}

function log(message) {
  console.log(message);  // 打印消息到控制台
  // TODO: 将日志写入文件
}

var tokenColumn = "A";  // 设置列号变量为 "A"
var signInColumn = "B";  // 设置列号变量为 "B"
var rewardColumn = "C";  // 设置列号变量为 "C"
var emailColumn = "F";  // 设置列号变量为 "F"
var sendEmailColumn = "G";  // 设置列号变量为 "G"
var resultColumn = "J";  // 设置列号变量为 "J"

for (let row = 2; row <= 20; row++) {  // 循环遍历从第 2 行到第 20 行的数据
  var refresh_token = Application.Range(tokenColumn + row).Text;  // 获取指定单元格的值
  var sflq = Application.Range(signInColumn + row).Text;  // 获取指定单元格的值
  var sflqReward = Application.Range(rewardColumn + row).Text;  // 获取指定单元格的值
  var jsyx = Application.Range(emailColumn + row).Text;  // 获取指定单元格的值
  var sendEmail = Application.Range(sendEmailColumn + row).Text;  // 获取指定单元格的值
  var customEmailResult = Application.Range(resultColumn + row).Text;  // 获取指定单元格的值

  var emailConfigured = Application.Range("J1").Text;  // 获取指定单元格的值
  var zdy_host = Application.Range("J2").Text;  // 获取指定单元格的值
  var zdy_post = parseInt(Application.Range("J3").Text);  // 获取指定单元格的值并转换为整数
  var zdy_username = Application.Range("J4").Text;  // 获取指定单元格的值
  var zdy_pasd = Application.Range("J5").Text;  // 获取指定单元格的值

  if (sflq == "是") { // 如果 “是否签到” 为 “是”
    if (refresh_token != "") { // 如果刷新令牌不为空
      // 发起网络请求-获取 token
      let data = HTTP.post("https://auth.aliyundrive.com/v2/account/token",
        JSON.stringify({
          "grant_type": "refresh_token",
          "refresh_token": refresh_token
        })
      );
      data = data.json();  // 将响应数据解析为 JSON 格式
      var access_token = data['access_token'];  // 获取访问令牌
      var phone = data["user_name"];  // 获取用户名

      if (access_token == undefined) {  // 如果访问令牌未定义
        log("单元格【" + tokenColumn + row + "】内的 token 值错误，程序执行失败，请重新复制正确的 token 值");
        continue;  // 跳过当前行的后续操作
      }

      try {
        var access_token2 = 'Bearer ' + access_token;  // 构建包含访问令牌的请求头
        // 签到
        let data2 = HTTP.post("https://member.aliyundrive.com/v1/activity/sign_in_list",
          JSON.stringify({ "_rx-s": "mobile" }),
          { headers: { "Authorization": access_token2 } }
        );
        data2 = data2.json();  // 将响应数据解析为 JSON 格式
        var signin_count = data2['result']['signInCount'];  // 获取签到次数

        var logMessage = "账号：" + phone + " - 签到成功，本月累计签到 " + signin_count + " 天";
        var rewardMessage = "";

        if (sflqReward == "是") {  // 如果 “是否领取奖励” 为 “是”
          if (sflq == "是") {  // 如果 “是否签到” 为 “是”
            try {
              // 领取奖励
              let data3 = HTTP.post(
                "https://member.aliyundrive.com/v1/activity/sign_in_reward?_rx-s=mobile",
                JSON.stringify({ "signInDay": signin_count }),
                { headers: { "Authorization": access_token2 } }
              );
              data3 = data3.json();  // 将响应数据解析为 JSON 格式
              var rewardName = data3["result"]["name"];  // 获取奖励名称
              var rewardDescription = data3["result"]["description"];  // 获取奖励描述
              rewardMessage = " " + rewardName + " - " + rewardDescription;
            } catch (error) {
              if (error.response && error.response.data && error.response.data.error) {
                var errorMessage = error.response.data.error;  // 获取错误信息
                if (errorMessage.includes(" - 今天奖励已领取")) {
                  rewardMessage = " - 今天奖励已领取";
                  log("账号：" + phone + " - " + rewardMessage);
                } else {
                  log("账号：" + phone + " - 奖励领取失败：" + errorMessage);
                }
              } else {
                log("账号：" + phone + " - 奖励领取失败");
              }
            }
          } else {
            rewardMessage = " - 奖励待领取";
          }
        } else {
          rewardMessage = " - 奖励待领取";
        }

        log(logMessage + rewardMessage);

        if (sendEmail == "是") {  // 如果 “是否发送邮件” 为 “是”
          try {
            let mailer;
            if (customEmailResult == "是") {  // 如果 “是否自定义邮箱” 为 “是”
              var customEmail = Application.Range(resultColumn + row).Text;  // 获取指定单元格的值
              if (emailConfigured === "是") {  // 如果配置了自定义邮箱
                mailer = SMTP.login({
                  host: zdy_host,
                  port: zdy_post,
                  username: zdy_username,
                  password: zdy_pasd,
                  secure: true
                });
                mailer.send({
                  from: "阿里云盘签到<" + zdy_username + ">",
                  to: customEmail,
                  subject: "阿里云盘签到通知 - " + data_time,
                  text: logMessage + rewardMessage
                });
              } else {  // 如果未配置自定义邮箱，默认使用示例邮箱
                mailer = SMTP.login({
                  host: "smtp.163.com",
                  port: 465,
                  username: "sankgao@163.com",
                  password: "MRILGSPEYBQ",
                  secure: true
                });
                mailer.send({
                  from: "阿里云盘签到<sankgao@163.com>",
                  to: customEmail,
                  subject: "阿里云盘签到通知 - " + data_time,
                  text: logMessage + rewardMessage
                });
              }
              log("账号：" + phone + " - 已发送邮件至：" + customEmail);
            } else {  // 如果 “是否自定义邮箱” 为 “否”
              if (emailConfigured === "是") {  // 如果配置了自定义邮箱
                mailer = SMTP.login({
                  host: zdy_host,
                  port: zdy_post,
                  username: zdy_username,
                  password: zdy_pasd,
                  secure: true
                });
                mailer.send({
                  from: "阿里云盘签到<" + zdy_username + ">",
                  to: jsyx,
                  subject: "阿里云盘签到通知 - " + data_time,
                  text: logMessage + rewardMessage
                });
              } else {  // 如果未配置自定义邮箱，默认使用示例邮箱
                mailer = SMTP.login({
                  host: "smtp.163.com",
                  port: 465,
                  username: "sankgao@163.com",
                  password: "MRILGSPEYBQ",
                  secure: true
                });
                mailer.send({
                  from: "阿里云盘签到<sankgao@163.com>",
                  to: jsyx,
                  subject: "阿里云盘签到通知 - " + data_time,
                  text: logMessage + rewardMessage
                });
              }
              log("账号：" + phone + " - 已发送邮件至：" + jsyx);
            }
          } catch (error) {
            log("账号：" + phone + " - 发送邮件失败：" + error);
          }
        }
      } catch {
        log("单元格【" + tokenColumn + row + "】内的 token 签到失败");
        continue;  // 跳过当前行的后续操作
      }
    } else {
      log("账号：" + phone + " 不签到");
    }
  }
}

var currentDate = new Date();  // 创建一个表示当前时间的 Date 对象
var currentDay = currentDate.getDate();  // 获取当前日期的天数
var lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();  // 获取当月的最后一天的日期

if (currentDay === lastDayOfMonth) {  // 如果当前日期是当月的最后一天
  for (let row = 2; row <= 20; row++) {  // 循环遍历从第 2 行到第 20 行的数据
    var sflq = Application.Range(signInColumn + row).Text;  // 获取指定单元格的值
    var sflqReward = Application.Range(rewardColumn + row).Text;  // 获取指定单元格的值

    if (sflq === "是" && sflqReward === "是") {  // 如果 “是否签到” 和 “是否领取奖励” 均为 “是”
      var refresh_token = Application.Range(tokenColumn + row).Text;  // 获取指定单元格的值
      var jsyx = Application.Range(emailColumn + row).Text;  // 获取指定单元格的值
      var phone = "账号：" + phone;  // 构建账号信息字符串

      if (refresh_token !== "") {  // 如果刷新令牌不为空
        // 发起网络请求-获取token
        let data = HTTP.post("https://auth.aliyundrive.com/v2/account/token",
          JSON.stringify({
            "grant_type": "refresh_token",
            "refresh_token": refresh_token
          })
        );
        data = data.json();  // 将响应数据解析为 JSON 格式
        var access_token = data['access_token'];  // 获取访问令牌

        if (access_token === undefined) {  // 如果访问令牌未定义
          log("单元格【" + tokenColumn + row + "】内的 token 值错误，程序执行失败，请重新复制正确的 token 值");
          continue;  // 跳过当前行的后续操作
        }

        try {
          var access_token2 = 'Bearer ' + access_token;  // 构建包含访问令牌的请求头
          // 领取奖励
          let data4 = HTTP.post(
            "https://member.aliyundrive.com/v1/activity/sign_in_reward?_rx-s=mobile",
            JSON.stringify({ "signInDay": lastDayOfMonth }),
            { headers: { "Authorization": access_token2 } }
          );
          data4 = data4.json();  // 将响应数据解析为 JSON 格式
          var claimStatus = data4["result"]["status"];  // 获取奖励状态
          var day = lastDayOfMonth;  // 获取最后一天的日期

          if (claimStatus === "CLAIMED") {
            log("账号：" + phone + " - 第 " + day + " 天奖励领取成功");
          } else {
            log("账号：" + phone + " - 第 " + day + " 天奖励领取失败");
          }
        } catch {
          log("单元格【" + tokenColumn + row + "】内的 token 签到失败");
          continue;  // 跳过当前行的后续操作
        }
      } else {
        log("账号：" + phone + " 不签到");
      }
    }
  }

  log("自动领取未领取奖励完成。");
}
```

脚本中需要修改的地方：

- **username: "sankgao@163.com"**：修改为自己的邮箱
- **password: "MRILGSPEYBQ"**：修改为自己的 SMPT 服务器授权密码
- **from: "阿里云盘签到\<sankgao@163.com\>"**：修改为自己的邮箱

## 添加服务

在脚本页面点击 **服务 -> 添加服务**，依次添加 **云文档API**、**邮件API**、**网络API。**

## 自动运行脚本

**手动运行**

保存脚本后，手动点击 **运行**，运行消息在下方日志中显示。

**自动运行**

在上方的表格页面中，依次点击 **效率 -> 高级开发 -> 定时任务。**

表格右侧出现 **定时任务** 点击 **创建任务**，设置 **每天触发时间**，选择 **刚刚创建的脚本**，确定。

## 快速获取 refresh_token 值

浏览器登陆阿里云盘并点击 `F12` 后，找到控制台界面，在控制台输入以下内容：

```javascript
var token = JSON.parse(localStorage.getItem('token'));
console.log('refresh_token:', token.refresh_token);
```

::: info
- 原始内容为 [小小猪​](https://zhuanlan.zhihu.com/p/629476969) 创作
- 代码部分由 [柒刻](https://zhuanlan.zhihu.com/p/643179804) 在原始内容上进行二次修改
:::
