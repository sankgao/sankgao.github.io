---
title: 预定义变量参考
icon: variable
date: 2024-06-07
order: 14
category: DevOps
tag:
    - GitLab
---

您可以使用 `script` 命令输出可用于作业的所有变量的值。查看官网 [预定义变量参考](https://docs.gitlab.cn/jh/ci/variables/predefined_variables.html)。

## 预定义变量

|  变量名  |  描述  |
|  :----  |  :----  |
|  `CI`  |  适用于在 CI/CD 中执行的所有作业。可用时为 `true`  |
|  `CI_API_V4_URL`  |  极狐GitLab API v4 根 URL  |
|  `CI_BUILDS_DIR`  |  执行构建的顶级目录。例如：`/builds`  |
|  `CI_COMMIT_AUTHOR`  |  `Name <email>` 格式的提交作者  |
|  `CI_COMMIT_BEFORE_SHA`  |  出现在分支或标签上的上一个最新提交。在合并请求的流水线中总是 `0000000000000000000000000000000000000000`  |
|  `CI_COMMIT_BRANCH`  |  提交分支名称。在合并请求流水线或标签流水线中不可用  |
|  `CI_COMMIT_DESCRIPTION`  |  提交的描述。如果标题短于 100 个字符，则消息没有第一行  |
|  `CI_COMMIT_MESSAGE`  |  完整的提交消息  |
|  `CI_COMMIT_REF_NAME`  |  为其构建项目的分支或标签名称  |
|  `CI_COMMIT_REF_PROTECTED`  |  如果作业正在运行以获取受保护的 `ref` 值为 `true`  |
|  `CI_COMMIT_REF_SLUG`  |  `CI_COMMIT_REF_NAME` 小写，缩短为 `63` 字节，除了 `0-9` 和 `a-z` 之外的所有内容都替换为 `-`。没有前导/尾随 `-`。在 URL、主机名和域名中使用  |
|  `CI_COMMIT_SHA`  |  项目为其构建的提交修订  |
|  `CI_COMMIT_SHORT_SHA`  |  `CI_COMMIT_SHA` 的前八个字符  |
|  `CI_COMMIT_TAG`  |  提交标签名称。仅在标签流水线中可用  |
|  `CI_COMMIT_TAG_MESSAGE`  |  提交标签消息。仅在标签流水线中可用  |
|  `CI_COMMIT_TIMESTAMP`  |  ISO 8601 格式的提交时间戳，例如：`2024-06-07T14:31:21+08:00`  |
|  `CI_COMMIT_TITLE`  |  提交的标题。消息的完整第一行  |
|  `CI_CONCURRENT_ID`  |  单个 executor 中构建执行的唯一 ID  |
|  `CI_CONCURRENT_PROJECT_ID`  |  单个 executor 和项目中构建执行的唯一 ID  |
|  `CI_CONFIG_PATH`  |  CI/CD 配置文件的路径。默认为 `.gitlab-ci.yml`。在正在运行的流水线中只读  |
|  `CI_DEBUG_TRACE`  |  是否启用 debug 日志（跟踪）  |
|  `CI_DEBUG_SERVICES`  |  是否启用服务容器日志  |
|  `CI_DEFAULT_BRANCH`  |  项目默认分支的名称  |
|  `CI_DEPENDENCY_PROXY_GROUP_IMAGE_PREFIX`  |  通过 Dependency Proxy 拉取镜像的顶级群组镜像前缀  |
|  `CI_DEPENDENCY_PROXY_DIRECT_GROUP_IMAGE_PREFIX`  |  通过 Dependency Proxy 拉取镜像的直接群组镜像前缀  |
|  `CI_DEPENDENCY_PROXY_PASSWORD`  |  通过 Dependency Proxy 拉取镜像的密码  |
|  `CI_DEPENDENCY_PROXY_SERVER`  |  用于登录 Dependency Proxy 的服务器。相当于 `$CI_SERVER_HOST:$CI_SERVER_PORT`  |
|  `CI_DEPENDENCY_PROXY_USER`  |  通过 Dependency Proxy 拉取镜像的用户名  |
|  `CI_DEPLOY_FREEZE`  |  仅当流水线在部署冻结窗口期间运行时才可用。可用时为 `true`  |
|  `CI_DEPLOY_PASSWORD`  |  极狐GitLab Deploy Token 的认证密码，如果项目有的话  |
|  `CI_DEPLOY_USER`  |  极狐GitLab Deploy Token 的认证用户名，如果项目有的话  |
|  `CI_DISPOSABLE_ENVIRONMENT`  |  仅当作业在一次性环境中执行时才可用（仅为该作业创建并在执行后处理/销毁 - 除 `shell` 和 `ssh` 之外的所有 executor）。可用时为 `true`  |
|  `CI_ENVIRONMENT_NAME`  |  此作业的环境名称。如果设置了 `environment:name`，则可用  |
|  `CI_ENVIRONMENT_SLUG`  |  环境名称的简化版本，适合包含在 DNS、URL、Kubernetes labels 等。如果设置了 `environment:name`，则可用。Slug 被截断为 `24` 个字符  |
|  `CI_ENVIRONMENT_URL`  |  此作业的环境 URL。如果设置了 `environment:url`，则可用  |
|  `CI_ENVIRONMENT_ACTION`  |  为此作业的环境指定的操作注释。如果设置了 `environment:action`，则可用。可以是 `start`、`prepare` 或 `stop`  |
|  `CI_ENVIRONMENT_TIER`  |  此作业的环境部署级别  |
|  `CI_RELEASE_DESCRIPTION`  |  发布的描述。仅在标签流水线上可用。描述长度限制为前 `1024` 个字符  |
|  `CI_JOB_ID`  |  作业的内部 ID，在 极狐GitLab 实例中的所有作业中是唯一的  |
|  `CI_JOB_IMAGE`  |  运行作业的 Docker 镜像的名称  |
|  `CI_JOB_JWT_V1`  |  一个 RS256 JSON Web 令牌，用于与支持 JWT 身份验证的第三方系统进行身份验证，例如：`HashiCorp’s Vault`  |
|  `CI_JOB_MANUAL`  |  如果作业是手动启动为 true  |
|  `CI_JOB_NAME`  |  作业名称  |
|  `CI_JOB_NAME_SLUG`  |  `CI_JOB_NAME` 小写，缩短为 `63` 字节，除了 `0-9` 和 `a-z` 之外的所有内容都替换为 `-`。没有前导/尾随 `-`。在路径中使用  |
|  `CI_JOB_STAGE`  |  作业阶段名称  |
|  `CI_JOB_STATUS`  |  执行每个 Runner 阶段时的作业状态。与 `after_script` 一起使用。可以是 `success`、`failed` 或 `canceled`  |
|  `CI_JOB_TIMEOUT`  |  作业超时的值，默认 `3600` 秒  |
|  `CI_JOB_TOKEN`  |  使用某些 API 端点进行身份验证的令牌。只要作业正在运行，令牌就有效  |
|  `CI_JOB_URL`  |  作业详细信息 URL  |
|  `CI_JOB_STARTED_AT`  |  作业开始时的 UTC 日期时间，采用 ISO 8601 格式，例如：`2024-06-07T14:31:41+08:00`  |
|  `CI_KUBERNETES_ACTIVE`  |  仅当流水线具有可用于部署的 Kubernetes 集群时才可用。可用时为 `true`  |
|  `CI_NODE_INDEX`  |  作业集中的作业 index。仅当作业使用 `parallel` 时可用  |
|  `CI_NODE_TOTAL`  |  此作业并行运行的实例总数。如果作业不使用 `parallel`，则设置为 `1`  |
|  `CI_PAGES_DOMAIN`  |  托管 极狐GitLab Pages 的配置域名  |
|  `CI_PAGES_URL`  |  极狐GitLab Pages 站点的 URL。始终是 `CI_PAGES_DOMAIN` 的子域名  |
|  `CI_PIPELINE_ID`  |  当前流水线的实例级 ID。该 ID 在实例上的所有项目中都是唯一的  |
|  `CI_PIPELINE_IID`  |  当前流水线的项目级 IID（内部 ID）。此 ID 仅在当前项目中是唯一的  |
|  `CI_PIPELINE_SOURCE`  |  流水线是如何触发的。可以是 `push`、`web`、`schedule`、`api`、`external`、`chat`、`webide`、`merge_request_event`、`external_pull_request_event`、`parent_pipeline`、`trigger` 或 `pipeline`   |
|  `CI_PIPELINE_TRIGGERED`  |  如果作业是触发的为 true  |
|  `CI_PIPELINE_URL`  |  流水线详细信息的 URL  |
|  `CI_PIPELINE_CREATED_AT`  |  创建流水线时的 UTC 日期时间，采用 ISO 8601 格式，例如：`2024-06-07T14:31:22+08:00`  |
|  `CI_PIPELINE_NAME`  |  `workflow:name` 中定义的名称  |
|  `CI_PROJECT_DIR`  |  仓库克隆到的完整路径，以及作业从哪里运行。例如：`/builds/tests/test_demo`。如果设置了 极狐GitLab Runner `builds_dir` 参数，这个变量是相对于 `builds_dir` 的值设置的  |
|  `CI_PROJECT_ID`  |  当前项目的 ID。该 ID 在实例上的所有项目中都是唯一的  |
|  `CI_PROJECT_NAME`  |  项目目录的名称。例如：`test_demo`  |
|  `CI_PROJECT_NAMESPACE`  |  作业的项目命名空间（用户名或群组名）。例如：`tests`  |
|  `CI_PROJECT_NAMESPACE_ID`  |  作业的项目命名空间 ID  |
|  `CI_PROJECT_PATH`  |  包含项目名称的项目命名空间。例如：`tests/test_demo`  |
|  `CI_PROJECT_PATH_SLUG`  |  `$CI_PROJECT_PATH` 小写，不是 `a-z` 或 `0-9` 的字符替换为 `-` 并缩短为 `63` 字节。在 URL 和域名中使用  |
|  `CI_PROJECT_TITLE`  |  Web 界面中显示的人类可读的项目名称  |
|  `CI_PROJECT_DESCRIPTION`  |  Web 界面中显示的项目描述  |
|  `CI_PROJECT_URL`  |  项目的 HTTP(S) 地址  |
|  `CI_REGISTRY_IMAGE`  |  项目的 Container Registry 的地址。仅当为项目启用了 Container Registry 时才可用  |
|  `CI_REGISTRY_PASSWORD`  |  将容器推送到项目的 极狐GitLab Container Registry 的密码。仅当为项目启用了 Container Registry 时才可用。此密码值与 `CI_JOB_TOKEN` 相同，并且仅在作业运行时有效  |
|  `CI_REGISTRY_USER`  |  将容器推送到项目的 极狐GitLab Container Registry 的用户名。仅当为项目启用了 Container Registry 时才可用  |
|  `CI_REGISTRY`  |  极狐GitLab Container Registry 的地址。仅当为项目启用了 Container Registry 时才可用  |
|  `CI_REPOSITORY_URL`  |  克隆 Git 仓库的 URL  |
|  `CI_RUNNER_VERSION`  |  运行作业的 极狐GitLab Runner 的版本  |
|  `CI_SERVER_URL`  |  极狐GitLab 实例的基本 URL，包括协议和端口。例如：`https://gitlab.example.com:8080`  |
|  `CI_SERVER_FQDN`  |  极狐GitLab 实例完整 URL，没有协议。例如：`gitlab.example.com:8080`  |
|  `CI_SERVER_HOST`  |  极狐GitLab 实例 URL 的主机，没有协议或端口。例如：`gitlab.example.com`  |
|  `CI_SERVER_NAME`  |  协调作业的 CI/CD 服务器的名称。例如：`GitLab`  |
|  `CI_SERVER_PORT`  |  极狐GitLab 实例 URL 的端口，没有主机或协议。例如：`8080`  |
|  `CI_SERVER_PROTOCOL`  |  极狐GitLab 实例 URL 的协议，没有主机或端口。例如：`http`  |
|  `CI_SERVER_SHELL_SSH_HOST`  |  极狐GitLab 实例的 SSH 主机。用于通过 SSH 访问 Git 仓库，例如：`gitlab.com`  |
|  `CI_SERVER_PROTOCOL`  |  极狐GitLab 实例的 SSH 端口。用于通过 SSH 访问 Git 仓库，例如：`22`  |
|  `CI_TEMPLATE_REGISTRY_HOST`  |  CI/CD 模版使用的镜像库的主机。默认为 `registry.gitlab.com`  |
|  `GITLAB_USER_EMAIL`  |  启动流水线的用户电子邮件，除非作业是手动作业。在手动作业中，该值是启动作业的用户的电子邮件  |
|  `GITLAB_USER_LOGIN`  |  启动流水线的用户登录用户名，除非作业是手动作业。在手动作业中，该值是启动作业的用户的用户名  |
|  `GITLAB_USER_NAME`  |  启动流水线的用户的姓名，除非作业是手动作业。在手动作业中，该值是启动作业的用户的姓名  |
|  `KUBERCONFIG`  |  Kubeconfig 文件的路径，其中包含每个共享代理连接的上下文。只有当 极狐GitLab 代理授权访问项目时才可用  |
|  `TRIGGER_PAYLOAD`  |  Webhook 负载。仅当流水线使用 Webhook 触发时可用  |

## 环境变量示例

您可以使用 Bash 中的 `export` 命令或 PowerShell 中的 `dir env:` 列出脚本可用的所有环境变量，隐藏变量显示为 `[masked]`。

例如：

```yaml
job_name:
  script:
    - export
    # - 'dir env:'  # Use this for PowerShell
```

**输出：**

```shell
export CI='true'
export CI_API_GRAPHQL_URL='http://192.168.52.186:8888/api/graphql'
export CI_API_V4_URL='http://192.168.52.186:8888/api/v4'
export CI_BUILDS_DIR='/builds'
export CI_COMMIT_AUTHOR='Administrator <admin@example.com>'
export CI_COMMIT_BEFORE_SHA='aded54879c3e7bbf524eb13568b19411790cc441'
export CI_COMMIT_BRANCH='main'
export CI_COMMIT_DESCRIPTION=''
export CI_COMMIT_MESSAGE='更新.gitlab-ci.yml文件'
export CI_COMMIT_REF_NAME='main'
export CI_COMMIT_REF_PROTECTED='true'
export CI_COMMIT_REF_SLUG='main'
export CI_COMMIT_SHA='b6275653d48e580a125ecaccb84f03faca8444da'
export CI_COMMIT_SHORT_SHA='b6275653'
export CI_COMMIT_TIMESTAMP='2024-06-07T14:31:21+08:00'
export CI_COMMIT_TITLE='更新.gitlab-ci.yml文件'
export CI_CONCURRENT_ID='0'
export CI_CONCURRENT_PROJECT_ID='0'
export CI_CONFIG_PATH='.gitlab-ci.yml'
export CI_DEFAULT_BRANCH='main'
export CI_DEPENDENCY_PROXY_DIRECT_GROUP_IMAGE_PREFIX='192.168.52.186:8888/tests/dependency_proxy/containers'
export CI_DEPENDENCY_PROXY_GROUP_IMAGE_PREFIX='192.168.52.186:8888/tests/dependency_proxy/containers'
export CI_DEPENDENCY_PROXY_PASSWORD='[MASKED]'
export CI_DEPENDENCY_PROXY_SERVER='192.168.52.186:8888'
export CI_DEPENDENCY_PROXY_USER='gitlab-ci-token'
export CI_DISPOSABLE_ENVIRONMENT='true'
export CI_ENVIRONMENT_ACTION='start'
export CI_ENVIRONMENT_NAME='production'
export CI_ENVIRONMENT_SLUG='production'
export CI_ENVIRONMENT_TIER='production'
export CI_JOB_ID='154'
export CI_JOB_JWT='[MASKED]'
export CI_JOB_JWT_V1='[MASKED]'
export CI_JOB_JWT_V2='[MASKED]'
export CI_JOB_NAME='job4'
export CI_JOB_NAME_SLUG='job4'
export CI_JOB_STAGE='deploy'
export CI_JOB_STARTED_AT='2024-06-07T14:31:41+08:00'
export CI_JOB_STATUS='running'
export CI_JOB_TIMEOUT='3600'
export CI_JOB_TOKEN='[MASKED]'
export CI_JOB_URL='http://192.168.52.186:8888/tests/test_demo/-/jobs/154'
export CI_NODE_TOTAL='1'
export CI_PAGES_DOMAIN='example.com'
export CI_PAGES_URL='http://tests.example.com/test_demo'
export CI_PIPELINE_CREATED_AT='2024-06-07T14:31:22+08:00'
export CI_PIPELINE_ID='19'
export CI_PIPELINE_IID='19'
export CI_PIPELINE_NAME=''
export CI_PIPELINE_SOURCE='push'
export CI_PIPELINE_URL='http://192.168.52.186:8888/tests/test_demo/-/pipelines/19'
export CI_PROJECT_CLASSIFICATION_LABEL=''
export CI_PROJECT_DESCRIPTION=''
export CI_PROJECT_DIR='/builds/tests/test_demo'
export CI_PROJECT_ID='1'
export CI_PROJECT_NAME='test_demo'
export CI_PROJECT_NAMESPACE='tests'
export CI_PROJECT_NAMESPACE_ID='2'
export CI_PROJECT_PATH='tests/test_demo'
export CI_PROJECT_PATH_SLUG='tests-test-demo'
export CI_PROJECT_REPOSITORY_LANGUAGES=''
export CI_PROJECT_ROOT_NAMESPACE='tests'
export CI_PROJECT_TITLE='test_demo'
export CI_PROJECT_URL='http://192.168.52.186:8888/tests/test_demo'
export CI_PROJECT_VISIBILITY='private'
export CI_REGISTRY_PASSWORD='[MASKED]'
export CI_REGISTRY_USER='gitlab-ci-token'
export CI_REPOSITORY_URL='http://gitlab-ci-token:[MASKED]@192.168.52.186:8888/tests/test_demo.git'
export CI_RUNNER_DESCRIPTION='test docker runner'
export CI_RUNNER_EXECUTABLE_ARCH='linux/amd64'
export CI_RUNNER_ID='4'
export CI_RUNNER_REVISION='535ced5f'
export CI_RUNNER_SHORT_TOKEN='1Az2pNLC'
export CI_RUNNER_TAGS='["docker", "shell"]'
export CI_RUNNER_VERSION='16.11.1'
export CI_SERVER='yes'
export CI_SERVER_FQDN='192.168.52.186:8888'
export CI_SERVER_HOST='192.168.52.186'
export CI_SERVER_NAME='GitLab'
export CI_SERVER_PORT='8888'
export CI_SERVER_PROTOCOL='http'
export CI_SERVER_REVISION='315741466e4'
export CI_SERVER_SHELL_SSH_HOST='192.168.52.186'
export CI_SERVER_SHELL_SSH_PORT='2424'
export CI_SERVER_URL='http://192.168.52.186:8888'
export CI_SERVER_VERSION='16.11.1-jh'
export CI_SERVER_VERSION_MAJOR='16'
export CI_SERVER_VERSION_MINOR='11'
export CI_SERVER_VERSION_PATCH='1'
export CI_TEMPLATE_REGISTRY_HOST='registry.gitlab.cn'
export DIND_COMMIT='65cfcc28ab37cb75e1560e4b4738719c07c6618e'
export DOCKER_BUILDX_VERSION='0.14.1'
export DOCKER_COMPOSE_VERSION='2.27.1'
export DOCKER_HOST='tcp://docker:2375'
export DOCKER_TLS_CERTDIR='/certs'
export DOCKER_VERSION='26.1.3'
export FF_CLEAN_UP_FAILED_CACHE_EXTRACT='false'
export FF_CMD_DISABLE_DELAYED_ERROR_LEVEL_EXPANSION='false'
export FF_DISABLE_POWERSHELL_STDIN='false'
export FF_DISABLE_UMASK_FOR_DOCKER_EXECUTOR='false'
export FF_ENABLE_BASH_EXIT_CODE_CHECK='false'
export FF_ENABLE_JOB_CLEANUP='false'
export FF_KUBERNETES_HONOR_ENTRYPOINT='false'
export FF_LOG_IMAGES_CONFIGURED_FOR_JOB='false'
export FF_NETWORK_PER_BUILD='false'
export FF_POSIXLY_CORRECT_ESCAPES='false'
export FF_PRINT_POD_EVENTS='false'
export FF_RESOLVE_FULL_TLS_CHAIN='false'
export FF_RETRIEVE_POD_WARNING_EVENTS='false'
export FF_SCRIPT_SECTIONS='false'
export FF_SECRET_RESOLVING_FAILS_IF_MISSING='true'
export FF_SET_PERMISSIONS_BEFORE_CLEANUP='true'
export FF_SKIP_NOOP_BUILD_STAGES='true'
export FF_TEST_FEATURE='false'
export FF_TIMESTAMPS='false'
export FF_USE_ADVANCED_POD_SPEC_CONFIGURATION='false'
export FF_USE_DIRECT_DOWNLOAD='true'
export FF_USE_DOCKER_AUTOSCALER_DIAL_STDIO='true'
export FF_USE_DUMB_INIT_WITH_KUBERNETES_EXECUTOR='false'
export FF_USE_DYNAMIC_TRACE_FORCE_SEND_INTERVAL='false'
export FF_USE_FASTZIP='false'
export FF_USE_GIT_BUNDLE_URIS='true'
export FF_USE_INIT_WITH_DOCKER_EXECUTOR='false'
export FF_USE_LEGACY_KUBERNETES_EXECUTION_STRATEGY='false'
export FF_USE_NEW_BASH_EVAL_STRATEGY='false'
export FF_USE_NEW_SHELL_ESCAPE='false'
export FF_USE_POD_ACTIVE_DEADLINE_SECONDS='true'
export FF_USE_POWERSHELL_PATH_RESOLVER='false'
export FF_USE_WINDOWS_JOB_OBJECT='false'
export FF_USE_WINDOWS_LEGACY_PROCESS_STRATEGY='false'
export GITLAB_CI='true'
export GITLAB_ENV='/builds/tests/test_demo.tmp/gitlab_runner_env'
export GITLAB_FEATURES=''
export GITLAB_USER_EMAIL='admin@example.com'
export GITLAB_USER_ID='1'
export GITLAB_USER_LOGIN='root'
export GITLAB_USER_NAME='Administrator'
export HOME='/root'
export HOSTNAME='runner-1az2pnlc-project-1-concurrent-0'
export OLDPWD='/'
export PATH='/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin'
export PWD='/builds/tests/test_demo'
export RUNNER_TEMP_PROJECT_DIR='/builds/tests/test_demo.tmp'
export SHLVL='4'
```
