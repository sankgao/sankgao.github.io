import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "计算机",  // 项目文字
    icon: "computer",  // 项目图标（可选）
    prefix: "/computer/",  // 为分组的每一个子链接添加一个前缀
    children: [
      {
        text: "计算机基础",
        link: "",  // 项目链接
        activeMatch: "^/computer/$",  // 项目激活匹配（可选），支持正则字符串
      },
      {
        text: "基础",
        link: "base/",
      },
      {
        text: "Windows",
        link: "windows/",
      },
      {
        text: "Linux",
        link: "linux/",
      },
    ],
  },
  {
    text: "运维",
    icon: "operations",
    prefix: "/operations/",
    children: [
      {
        text: "运维",
        link: "",
        activeMatch: "^/operations/$",
      },
      {
        text: "虚拟化",
        link: "virtualization/",
      },
      {
        text: "自动化",
        link: "automation/",
      },
      {
        text: "DevOps",
        link: "devops/",
      },
      {
        text: "监控",
        link: "monitor/",
      },
      {
        text: "数据库",
        link: "database/",
      },
      {
        text: "抓包工具",
        link: "wireshark/",
      },
      {
        text: "面向对象",
        link: "object_oriented/",
      },
      {
        text: "中间件",
        link: "middleware/",
      },
      {
        text: "消息队列",
        link: "message_queue/",
      },
      {
        text: "云计算",
        link: "cloud_computing/",
      },
    ],
  },
  {
    text: "架构",
    icon: "framework",
    prefix: "/framework/",
    children: [
      {
        text: "架构",
        icon: "framework",
        link: "",
        activeMatch: "^/software/$",
      },
      {
        text: "消息队列",
        children: ["message_queue/spring/", "message_queue/summer/"],
      },
      {
        text: "云计算",
        children: ["cloud_computing/life/", "cloud_computing/poem/"],
      },
    ],
  },
  {
    text: "编程语言",
    icon: "language",
    prefix: "/language/",
    children: [
      {
        text: "编程语言",
        link: "",
        activeMatch: "^/software/$",
      },
      {
        text: "Shell",
        link: "shell/",
      },
      {
        text: "Python",
        link: "python/",
      },
      {
        text: "Groovy",
        link: "groovy/",
      },
      {
        text: "Go",
        link: "go/",
      },
      {
        text: "Java",
        link: "java/",
      },
      {
        text: "HTML",
        link: "html/",
      },
      {
        text: "CSS",
        link: "css/",
      },
      {
        text: "JavaScript",
        link: "javascript/",
      },
      {
        text: "Maven",
        link: "maven/",
      },
    ],
  },
  {
    text: "安全",
    icon: "security",
    prefix: "/security/",
    children: [
      {
        text: "安全",
        link: "",
        activeMatch: "^/security/$",
      },
      {
        text: "网络安全",
        link: "",
      },
      {
        text: "黑客",
        link: "",
      },
    ],
  },
  {
    text: "其它",
    icon: "other",
    prefix: "/other/",
    children: [
      {
        text: "其它",
        icon: "other",
        link: "",
        activeMatch: "^/other/$",
      },
      "vscode/",
      "git/",
      "comsol/",
    ],
  },
  {
    text: "索引",
    icon: "index",
    children: [
      {
        text: "索引",
        link: "/index/",
        activeMatch: "^/index/$",
      },
      {
        text: "本站",
        children: ["/category/", "/tag/", "/timeline/"],
      },
      {
        text: "我的",
        children: ["/indexmy/about/", "poem/"],
      },
    ],
  },
]);