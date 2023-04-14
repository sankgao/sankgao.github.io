import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "计算机基础",  // 项目文字
    icon: "code",  // 项目图标（可选）
    prefix: "/计算机基础/",  // 为分组的每一个子链接添加一个前缀
    children: [
      {
        text: "计算机基础",
        icon: "code",
        link: "/code/",  // 项目链接
        activeMatch: "^/code/$",  // 项目激活匹配（可选），支持正则字符串
      },
      {
        text: "Windows",
        children: ["/design/"],
      },
      {
        text: "Linux",
        children: ["Linux/"],
      },
    ],
  },
  {
    text: "运维",
    icon: "note",
    prefix: "/运维/",
    children: [
      {
        text: "虚拟化",
        children: ["spring/", "summer/", "fall/", "winter/"],
      },
      {
        text: "自动化",
        children: ["life/", "poem/"],
      },
      {
        text: "CI/CD",
        children: ["CICD/Git/", "CICD/Jenkins/", "fall/", "winter/"],
      },
      {
        text: "DevOps",
        children: ["DevOps/Docker/", "poem/"],
      },
      {
        text: "监控",
        children: ["spring/", "summer/", "fall/", "winter/"],
      },
      {
        text: "抓包工具",
        children: ["life/", "poem/"],
      },
      {
        text: "面向对象",
        children: ["spring/", "summer/", "fall/", "winter/"],
      },
      {
        text: "中间件",
        children: ["life/", "poem/"],
      },
      {
        text: "消息队列",
        children: ["spring/", "summer/", "fall/", "winter/"],
      },
      {
        text: "云计算",
        children: ["life/", "poem/"],
      },
    ],
  },
  {
    text: "架构",
    icon: "software",
    prefix: "/software/",
    children: [
      {
        text: "软件教程",
        icon: "software",
        link: "",
        activeMatch: "^/software/$",
      },
      "vscode/",
      "git/",
      "comsol/",
    ],
  },
  {
    text: "编程语言",
    icon: "software",
    prefix: "/编程语言/",
    children: [
      {
        text: "软件教程",
        icon: "software",
        link: "",
        activeMatch: "^/software/$",
      },
      {
        text: "Shell",
        children: ["Shell/", "summer/", "fall/", "winter/"],
      },
      {
        text: "Python",
        children: ["Python/", "poem/"],
      },
      {
        text: "Groovy",
        children: ["spring/", "summer/", "fall/", "winter/"],
      },
      {
        text: "Go",
        children: ["life/", "poem/"],
      },
      {
        text: "Java",
        children: ["spring/", "summer/", "fall/", "winter/"],
      },
      {
        text: "HTML",
        children: ["HTML/", "poem/"],
      },
      {
        text: "CSS",
        children: ["CSS/", "poem/"],
      },
      {
        text: "JavaScript",
        children: ["spring/", "summer/", "fall/", "winter/"],
      },
      {
        text: "Maven",
        children: ["life/", "poem/"],
      },
    ],
  },
  {
    text: "安全",
    icon: "software",
    prefix: "/software/",
    children: [
      {
        text: "软件教程",
        icon: "software",
        link: "",
        activeMatch: "^/software/$",
      },
      {
        text: "网络安全",
        children: ["spring/", "summer/", "fall/", "winter/"],
      },
      {
        text: "黑客",
        children: ["life/", "poem/"],
      },
    ],
  },
  {
    text: "其它",
    icon: "software",
    prefix: "/software/",
    children: [
      {
        text: "软件教程",
        icon: "software",
        link: "",
        activeMatch: "^/software/$",
      },
      "vscode/",
      "git/",
      "comsol/",
    ],
  },
  {
    text: "索引",
    icon: "software",
    prefix: "/索引/",
    children: [
      {
        text: "软件教程",
        icon: "software",
        link: "",
        activeMatch: "^/software/$",
      },
      {
        text: "本站",
        children: ["分类/", "标签/", "归档/", "winter/"],
      },
      {
        text: "我的",
        children: ["关于/", "poem/"],
      },
    ],
  },
]);