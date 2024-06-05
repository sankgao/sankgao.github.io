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

例如：

```yaml
stages:
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

例如：

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

关键字类型：您只能将它与作业的 `stage` 关键字一起使用。例如：

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

使用 `script` 指定 Runner 要执行的命令。

除了 `trigger` 之外的所有作业都需要一个 `script` 关键字。

- **关键字类型**：作业关键字。您只能将其用作作业的一部分
- **可能的输入**：一个数组，包括：
    - 单行命令
    - 长命令拆分多行，使用 `-` 开头表示每一行脚本
    - YAML 锚点

例如：

```yaml
job1:
  script: "bundle exec rspec"

job2:
  script:
    - uname -a
    - bundle exec rspec
```

**额外细节：**

- 当您使用 `script` 中的特殊字符时，必须使用单引号（`'`）或双引号（`"`）

## cache

使用 `cache` 指定要在作业之间缓存的文件和目录列表。您只能使用本地工作副本中的路径。

缓存：

- 在流水线和作业之间共享
- 默认情况下，不在受保护和未受保护的分支之间共享
- 在产物之前恢复
- 限制为最多四个不同的缓存

您可以禁用特定作业的缓存，例如覆盖：

- 使用 `default` 定义的默认缓存
- 添加了 `include` 的作业的配置
