---
title: 命令
icon: command
date: 2024-03-19
order: 5
category: DevOps
tag:
    - Gerrit
---

## 添加普通成员

```bash
cat ~/home/id_rsa.pub | ssh gerrit gerrit create-account --full-name lisi --email lisi@example.com --ssh-key - lisi
```

- **cat ~/home/id_rsa.pub**：把要添加的 `lisi` 用户的公钥内容读入到输入流中
- **ssh gerrit**：在 `~/.ssh/config` 中配置好的 Gerrit 服务器别名
- **gerrit**：第二个 `gerrit` 表示通过 ssh 中输入 `gerrit` 命令来进行相关操作
- **create-account**：创建新用户。**注意**，新建的用户名写在最后面，中间是其他参数
- **--full-name**：用户全名
- **--email**：用户的 `email` 地址
- **--ssh-key -**：最后的 `-` 表示从输入流中读取 `ssh` 的公钥内容，也就是 `|` 符号之前我们读入的 `lisi` 用户公钥内容
- **lisi**：创建 `lisi` 用户

## 添加管理员邮箱

```bash
ssh gerrit gerrit set-account --add-email admin@example.com admin
```

- **set-account**：设置账户
- **--add-email**：添加邮箱
- **admin@example.com**：邮箱地址
- **admin**：指定要设置的账户名

## 创建空项目

```bash
ssh gerrit gerrit create-project test_demo
```

到已存在的项目文件中：

```bash
cd /home/gerrit/gitlab/test_demo
```

将该项目与 Gerrit 上新建的项目关联

```bash
git push ssh://admin@192.168.4.129:29418/test_demo
```

## git clone --bare gitlab 到 gerrit

```bash
cd /home/gerrit/gerrit_size/git
git clone --bare git@192.168.4.128:gerrit_demo/test_demo.git
```

## 更新 githooks

该过程用来在 `commit-msg` 中加入 `change-id`，Gerrit 流程必备。

```bash
gitdir=$(git rev-parse --git-dir); scp -p -P 29418 lisi@192.168.4.129:hooks/commit-msg ${gitdir}/hooks/
```

## 安装插件

```bash
java -jar gerrit-3.9.1.war init -d gerrit_site --batch --install-plugin replication
```

## 重新加载 replication 插件

```bash
ssh -p 29418 user@gerritIP gerrit plugin reload replication
```

## 同步仓库

```bash
sudo java -jar /home/gerrit/gerritCD/bin/gerrit.war reindex --index projects -d /home/gerrit/gerritCD/
```

## 同步 changes

```bash
sudo java -jar /home/gerrit/gerritCD/bin/gerrit.war reindex --index changes -d /home/gerrit/gerritCD/
```

## 同步 groups

```bash
sudo java -jar /home/gerrit/gerritCD/bin/gerrit.war reindex --index groups -d /home/gerrit/gerritCD/
```

## 同步 accounts

```bash
sudo java -jar /home/gerrit/gerritCD/bin/gerrit.war reindex --index accounts -d /home/gerrit/gerritCD/
```

## 根据已有的源代码上传

创建仓库以及分支：

```bash
repo forall -c 'echo $REPO_PATH; ssh -p 29418 gerrit@gerritIP gerrit create-project $REPO_PATH --branch branchname --parent ALL-Project --empty-commit'
```

进入代码路径，添加远程库：

```bash
repo forall -c 'echo $REPO_PATH; git remote add origin origin ssh://gerrit@gerritIP:29418/$REPO_PATH'
```

`push` 代码：

```bash
repo forall -c 'echo $REPO_PATH; git push ssh://gerrit@gerritIP:29418/$REPO_PATH develop:refs/heads/develop -f'
```
