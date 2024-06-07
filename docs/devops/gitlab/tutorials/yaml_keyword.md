---
title: .gitlab-ci.yml 关键字参考
icon: syntax
date: 2024-06-05
order: 4
category: DevOps
tag:
    - GitLab
---

`.gitlab-ci.yml` 文件中关键字示例，查看官网 [.gitlab-ci.yml](https://docs.gitlab.cn/jh/ci/yaml/index.html) 语法参考。

## default

您可以为某些关键字设置全局默认值。例如：

```yaml
default:
  image: ruby:3.0

rspec:
  script: bundle exec rspec

rspec 2.7:
  image: ruby:2.7
  script: bundle exec rspec
```

示例将 `ruby:3.0` 镜像设置为流水线中所有作业的默认镜像。`rspec 2.7` 作业不使用默认值，因为它使用特定于作业的 `image:` 部分覆盖了默认值。

**额外细节：**

- 创建流水线时，每个默认值都会复制到所有未定义该关键字的作业
- 如果作业已经配置了其中一个关键字，则作业中的配置优先，不会被默认替换
- 使用 `inherit:default` 控制作业中默认关键字的继承

## stages

使用 `stages` 来定义包含作业组的阶段，`stages` 是为流水线全局定义的。在作业中使用 `stage` 来定义作业属于哪个阶段，一般在 `.gitlab-ci.yml` 文件的顶部定义。

如果 `.gitlab-ci.yml` 文件中没有定义 `stages`，那么默认的流水线阶段是：

- `.pre`
- `build`
- `test`
- `deploy`
- `.post`

如果流水线仅包含 `.pre` 或 `.post` 阶段的作业，则它不会运行。在不同的阶段必须至少有一项其他作业。

`stages` 项的顺序定义了作业的执行顺序：

- 同一阶段的作业并行运行
- 下一阶段的作业在上一阶段的作业成功完成后运行

例如：也可以自定义 `stages` 值。

```yaml
stages:
  - check
  - build
  - test
  - deploy
```

`build` 中的所有作业并行执行，如果 `build` 中的所有作业都成功，`test` 作业将并行执行；如果 `test` 中的所有作业都成功，`deploy` 作业将并行执行；如果 `deploy` 中的所有作业都成功，则流水线被标记为 `passed`。

如果任何作业失败，流水线将被标记为 `failed` 并且后续阶段的作业不会启动，当前阶段的作业不会停止并继续运行。

如果作业未指定 `stage`，则作业被分配到 `test` 阶段。

如果定义了一个阶段，但没有作业使用它，则该阶段在流水线中不可见。这对合规流水线配置很有用，因为：

- 阶段可以在合规性配置中定义，但如果不使用则保持隐藏
- 当开发人员在作业定义中使用它们时，定义的阶段变得可见

要使作业更早开始并忽略阶段顺序，请使用 `needs` 关键字。

## stage

使用 `stage` 定义作业在哪个 `stage` 中运行。同一个 `stage` 中的作业可以并行执行。

如果没有定义 `stage`，则作业默认使用 `test` 阶段。

- **关键字类型**：作业关键字。您只能将其用作作业的一部分
- **可能的输入**：字符串
    - 默认阶段
    - 用户定义的阶段

例如：依次执行 `build`、`test` 和 `deploy` 阶段，`job2` 和 `job3` 会在 `test` 阶段中并行执行。

```yaml
stages:
  - build
  - test
  - deploy

job1:
  stage: build
  script:
    - echo "This job compiles code."

job2:
  stage: test
  script:
    - echo "This job tests the compiled code. It runs when the build stage completes."

job3:
  script:
    - echo "This job also runs in the test stage".

job4:
  stage: deploy
  script:
    - echo "This job deploys the code. It runs when the test stage completes."
  environment: production
```

**额外细节：**

- 如果作业在不同的 Runner 上运行，则它们可以并行运行
- 如果您只有一个 Runner，如果 Runner 的 `concurrent` 设置大于 `1`，作业可以并行运行

使用 `stage: .pre` 阶段在流水线开始时运行作业。`.pre` 始终是流水线的第一阶段。用户定义的阶段在 `.pre` 之后执行。您不必在 `stages` 中定义 `.pre`。

使用 `stage: .post` 阶段在流水线末尾时运行作业。`.post` 始终是流水线的最后阶段。用户定义的阶段在 `.post` 之前执行。您不必在 `stages` 中定义 `.post`。

如果流水线仅包含 `.pre` 或 `.post` 阶段的作业，则它不会运行。在不同的阶段必须至少有一项其他作业。

**关键字类型**：您只能将它与作业的 `stage` 关键字一起使用

例如：分别在流水线开始和末尾时运行作业。

```yaml
stages:
  - build
  - test

job1:
  stage: build
  script:
    - echo "This job runs in the build stage."

first-job:
  stage: .pre
  script:
    - echo "This job runs in the .pre stage, before all other stages."

last-job:
  stage: .post
  script:
    - echo "This job runs in the .post stage, after all other stages."

job2:
  stage: test
  script:
    - echo "This job runs in the test stage."
```

**额外细节：**

- 如果流水线有包含 `needs: []` 的作业和 `.pre` 阶段的作业，它们将在流水线创建后立即启动。具有 `needs: []` 的作业会立即启动，忽略任何阶段配置。

## script

使用 `script` 指定 Runner 要执行的命令。除了 `trigger` 之外的所有作业都需要一个 `script` 关键字。

使用 `before_script` 定义在每个作业的 `script` 命令之前运行，但在 `artifacts` 恢复之后。

使用 `after_script` 定义在每个作业之后运行的命令，包括失败的作业。

- **关键字类型**：作业关键字。您只能将其用作作业的一部分
- **可能的输入**：一个数组，包括：
    - 单行命令
    - 长命令拆分多行，使用 `-` 开头表示每一行脚本
    - YAML 锚点

例如：

```yaml
job1:
  script: echo "job1"

job2:
  script:
    - uname -a
    - echo "job2"

job3:
  script:
    - echo "This command executes after the job's 'before_script' commands."
    - echo "An example script section."
  after_script:
    - echo "Execute this command after the script section completes."
  before_script:
    - echo "Execute this command before any 'script:' commands."
```

**额外细节：**

- 当您使用 `script` 中的特殊字符时，必须使用单引号（`'`）或双引号（`"`）
- 您在 `before_script` 中指定的脚本与您在主 `script` 中指定的任何脚本连接在一起。组合脚本在单个 `shell` 中一起执行
- 不推荐在 [default](#default) 中使用 `before_script` 和 `after_script`
- 您在 `after_script` 中指定的脚本在一个新的 `shell` 中执行，与任何 `before_script` 或 `script` 命令分开。结果：
    - 将当前工作目录设置回默认值（根据定义运行程序如何处理 Git 请求的变量）
    - 无权访问由 `before_script` 或 `script` 中定义的命令完成的更改，包括
        - 在 `script` 脚本中导出的命令别名和变量
        - 作业树之外的更改（取决于 runner），例如：由 `before_script` 或 `script` 脚本安装的软件
    - 有一个单独的超时，它被硬编码为 `5` 分钟
    - 不要影响作业的退出代码。如果 `script` 部分成功并且 `after_script` 超时或失败，作业将退出，代码为 0（Job Succeeded）

如果作业超时或被取消，则不会执行 `after_script` 命令。存在一个问题，即为超时或取消的作业添加对执行 `after_script` 命令的支持。

## cache

使用 `cache` 指定要在作业之间缓存的文件和目录列表，您只能使用本地工作副本中的路径。

流水线中的每个作业都是独立运行的，如果没有缓存，运行上一个作业时安装的项目依赖包，运行下一个作业还需要安装一次。如果将上一个作业安装的依赖包缓存起来，在下一个作业运行时将其恢复到工作目录中，就可以大大减少资源的浪费。缓存用的最多的场景就是缓存项目的依赖包。

缓存：

- 在流水线和作业之间共享
- 默认情况下，不在受保护和未受保护的分支之间共享
- 在产物之前恢复
- 限制为最多四个不同的缓存

您可以禁用特定作业的缓存，例如覆盖：

- 使用 `default` 定义的默认缓存
- 添加了 `include` 的作业的配置

### cache:key

使用 `cache:key` 关键字为每个缓存提供唯一的标识键。使用相同缓存键的所有作业都使用相同的缓存，包括在不同的流水线中。

如果未设置，则默认键为 `default`。所有带有 `cache` 关键字但没有 `cache:key` 的作业共享 `default` 缓存。

必须与 [cache:paths](#cachepaths) 一起使用，否则不会缓存任何内容。

- **关键字类型**：作业关键字。您只能将其用作作业的一部分或在 [default](#default) 部分中使用
- **可能的输入：**
    - 一个字符串
    - 预定义变量
    - 两者的结合

例如：项目有多个分支，想要设置多个缓存。

```yaml
cache-job:
  script:
    - echo "This job uses a cache."
  cache:
    key: binaries-cache-$CI_COMMIT_REF_SLUG
    paths:
      - binaries/
```

**额外细节：**

- 如果您使用 `Windows Batch` 运行您的 `shell` 脚本，您需要用 `%` 替换 `$`。例如：`key：%CI_COMMIT_REF_SLUG%`
- `cache:key` 值不能包含：
    - `/` 字符，或等效的 URI 编码的 `%2F`
    - 只有 `.` 字符（任何数字），或等效的 URI 编码的 `%2E`
- 缓存在作业之间共享，因此如果您为不同的作业使用不同的路径，您还应该设置不同的 `cache:key`，否则缓存内容可能会被覆盖

### cache:paths

缓存 `binaries` 中以 `.apk` 和当前目录中以 `.config` 结尾的所有文件：

```yaml
rspec:
  script:
    - echo "This job uses a cache."
  cache:
    key: binaries-cache
    paths:
      - binaries/*.apk
      - .config
```

**额外细节：**

- `cache:paths` 关键字包括文件，即使它们未被跟踪或在您的 `.gitignore` 文件中。

### cache:key:file

使用 `cache:key:files` 关键字在一两个特定文件更改时生成新密钥。`cache:key:files` 可让您重用一些缓存，并减少重建它们的频率，从而加快后续流水线运行的速度。

- **关键字类型**：作业关键字。您只能将其用作作业的一部分或在 [default](#default) 部分中使用
- **可能的输入**：一个或两个文件路径的数组

例如：缓存绑定到当前版本的 `Gemfile.lock` 和 `package.json` 文件。当这些文件之一发生变化时，将计算一个新的缓存键并创建一个新的缓存。任何使用相同的 `Gemfile.lock` 和 `package.json` 以及 `cache:key:files` 的未来作业都会使用新的缓存，而不是重建依赖项。

```yaml
cache-job:
  script:
    - echo "This job uses a cache."
  cache:
    key:
      files:
        - Gemfile.lock
        - package.json
    paths:
      - vendor/ruby
      - node_modules
```

**额外信息**：缓存 key 是根据最近更改了每个列出的文件的提交计算得出的 SHA。如果在任何提交中都没有更改任何文件，则回退键是 `default`。

## image

使用 `image` 指定运行作业的 Docker 镜像。对特定的 Runner 执行器有用（如：docker 执行器），对其它 Runner 执行器无效（如：shell 执行器）。

- **关键字类型**：作业关键字。您只能将其用作作业的一部分或在 [default](#default) 部分中使用
- **可能的输入**：镜像的名称，包括镜像库路径（如果需要），采用以下格式之一：
    - `<image-name>`（与使用带有 `latest` 标签的 `<image-name>` 相同）
    - `<image-name>:<tag>`
    - `<image-name>@<digest>`

例如：流水线中所有作业默认使用 `ruby:3.0` 镜像。`rspec 2.7` 作业不使用默认值，因为它使用特定于作业的 `image` 部分覆盖了默认值。

```yaml
default:
  image: ruby:3.0

rspec:
  script: bundle exec rspec

rspec 2.7:
  image: registry.example.com/my-group/my-project/ruby:2.7
  script: bundle exec rspec
```

### image:name

作业运行所在的 Docker 镜像的名称。与自身使用的 `image` 类似。

- **关键字类型**：作业关键字。您只能将其用作作业的一部分或在 [default](#default) 部分中使用
- **可能的输入**：镜像的名称，包括镜像库路径（如果需要），采用以下格式之一
    - `<image-name>`（与使用带有 `latest` 标签的 `<image-name>` 相同）
    - `<image-name>:<tag>`
    - `<image-name>@<digest>`

例如：使用 `registry.example.com/my/image:latest` 镜像。

```yaml
image:
  name: "registry.example.com/my/image:latest"
```

### image:pull_policy

引入于 15.1 版本，功能标志为 `ci_docker_image_pull_policy`，默认禁用。Runner 用于获取 Docker 镜像的拉取策略。

- **关键字类型**：作业关键字。您只能将其用作作业的一部分或在 [default](#default) 部分中使用
- **可能的输入**：单个拉取策略或数组中的多个拉取策略。可以是 `always`、`if-not-present` 或 `never`
    - **always**：即使本地镜像存在也拉取镜像。默认
    - **if-not-present**：仅在本地版本不存在时拉取镜像
    - **never**：从不拉取镜像，只使用本地镜像

例如：`job1` 作业使用 `if-not-present` 拉取策略；`job2` 作业先使用 `always` 作为第一拉取策略，如果 `always` 拉取策略失败，再使用 `if-not-present` 第二拉取策略。

```yaml
job1:
  script: echo "A single pull policy."
  image:
    name: ruby:3.0
    pull_policy: if-not-present

job2:
  script: echo "Multiple pull policies."
  image:
    name: ruby:3.0
    pull_policy: [always, if-not-present]
```

**额外细节：**

- 如果 Runner 不支持定义的拉取策略，则作业将失败并出现类似此错误：`ERROR: Job failed (system failure): the configured PullPolicies ([always]) are not allowed by AllowedPullPolicies ([never])`

### image:entrypoint

作为容器入口点执行的命令或脚本。

创建 Docker 容器时，`entrypoint` 被转换为 Docker 的 `--entrypoint` 选项。语法类似于 Dockerfile `ENTRYPOINT` 指令，其中每个 `shell` 令牌都是数组中的一个单独字符串。

- **关键字类型**：作业关键字。您只能将其用作作业的一部分或在 [default](#default) 部分中使用
- **可能的输入**：一个字符串

例如：容器启动时运行 `/bin/bash` 命令。

```yaml
image:
  name: super/sql:experimental
  entrypoint: ["/bin/bash"]
```

### services

使用 `services` 指定您的脚步成功运行所需的任何其他 Docker 镜像。`services` 镜像链接到 `image` 关键字中指定的镜像。

- **关键字类型**：作业关键字。您只能将其用作作业的一部分或在 [default](#default) 部分中使用
- **可能的输入**：服务镜像的名称，包括镜像库路径（如果需要），采用以下格式之一
    - `<image-name>`（与使用带有 `latest` 标签的 `<image-name>` 相同）
    - `<image-name>:<tag>`
    - `<image-name>@<digest>`

例如：作业启动一个 Ruby 容器。然后，该作业从该容器启动另一个运行 PostgreSQL 的容器。然后该作业在该容器中运行脚本。

```yaml
default:
  image:
    name: ruby:2.6
    entrypoint: ["/bin/bash"]

  services:
    - name: my-postgres:11.7
      alias: db-postgres
      entrypoint: ["/usr/local/bin/db-postgres"]
      command: ["start"]

  before_script:
    - bundle install

test:
  script:
    - bundle exec rake spec
```

在此示例中，极狐GitLab 为作业启动了两个容器：

- 运行 `script` 命令的 Ruby 容器
- 一个 PostgreSQL 容器。Ruby 容器中的 `script` 命令可以连接到位于 `db-postgres` 主机名的 PostgreSQL 数据库

## tags

使用 `tags` 从项目可用的所有 Runner 列表中选择一个特定的 Runner。开发者可以为一条流水线指定一个 Runner，也可以针对某一个作业指定一个 Runner。

注册 Runner 时，您可以指定 Runner 的标签，例如：`ruby`、`postgres` 或 `development`。

- **关键字类型**：作业关键字。您只能将其用作作业的一部分或在 [default](#default) 部分中使用
- **可能的输入：**
    - 标签名称数组
    - 14.1 及更高版本中的 CI/CD 变量

例如：只有同时具有 `ruby` 和 `postgres` 标签的 Runner 才能运行该作业。

```yaml
job:
  tags:
    - ruby
    - postgres
```

**额外细节：**

- 在 14.3 及更高版本中，标签数量必须小于 `50`
- 如果指定的 `tags` 找到多个 Runner，作业会在多个 Runner 之间进行调度。建议使用同一个 Runner 执行整条流水线
- 如果没有指定 `tags`，在执行时系统会去寻找那些可用、公共的 Runner 执行

## variables

使用 `variables` 为作业定义自定义变量。变量在 `script`、`before_script` 和 `after_script` 命令中可用。您还可以在某些作业关键字中使用变量作为输入。

- **关键字类型**：全局和工作关键字
- **可能的输入**：变量名和值对
    - 名称只能使用数字、字母和下划线（`_`）
    - 值必须是字符串

例如：分别在全局和作业中定义变量。

```yaml
variables:
  DEPLOY_SITE: "https://example.com/"

deploy_job:
  stage: deploy
  script:
    - deploy-script --url $DEPLOY_SITE --path "/"
  environment: production

deploy_review_job:
  stage: deploy
  variables:
    REVIEW_PATH: "/review"
  script:
    - deploy-review-script --url $DEPLOY_SITE --path ${REVIEW_PATH}
  environment: production
```

**额外细节：**

- 所有 YAML 定义的变量也设置为任何链接的 Docker 服务容器
- YAML 定义的变量用于非敏感项目配置。将敏感信息存储在受保护变量或 CI/CD secrets 中
- 手动流水线变量和计划流水线变量默认情况下不传递给下游流水线。使用 `trigger:forward` 将这些变量转发到下游流水线
- 变量名在使用时，既可以使用 `$VariableName` 形式，也可以使用 `${VariableName}` 形式
- 变量在全局中定义，则所有作业都可以使用；变量在作业中定义，则只能在当前作业中使用
- 如果作业中定义了全局中的变量，则作业级别变量优先
