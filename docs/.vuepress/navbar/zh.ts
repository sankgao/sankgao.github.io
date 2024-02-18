import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "计算机",  // 项目文字
    icon: "computer",  // 项目图标（可选）
    prefix: "/computers/",  // 为分组的每一个子链接添加一个前缀
    children: [
      // activeMatch：项目激活匹配，避免两个菜单链接同时激活
      { text: "计算机", icon: "computer", link: "", activeMatch: "^/computers/$" },
      { text: "架构", icon: "electron-framework", link: "framework/" },
    ],
  },
  {
    text: "DevOps",
    icon: "devops",
    prefix: "/devops/",
    children: [
      { text: "DevOps", icon: "devops", link: "", activeMatch: "^/devops/$" },
      { text: "SVN", icon: "svn", link: "svn/" },
    ],
  },
  {
    text: "编程语言",
    icon: "backstage",
    prefix: "/languages/",
    children: [
      { text: "编程语言", icon: "backstage", link: "", activeMatch: "^/languages/$" },
      { text: "HTML5", icon: "html5", link: "html5/" },
      { text: "CSS3", icon: "css3", link: "css3/" },
      { text: "Python3", icon: "python", link: "python3/" },
      { text: "C", icon: "c", link: "c/" },
    ],
  },
  {
    text: "其它",
    icon: "other",
    prefix: "/others/",
    children: [
      { text: "其它", icon: "other", link: "", activeMatch: "^/others/$" },
    ],
  },
  {
    text: "索引",
    icon: "index",
    children: [
      {
        text: "本站",
        children: [
          { text: "分类", icon: "categoryselected", link: "/category/" },
          { text: "标签", icon: "tag", link: "/tag/" },
          { text: "时间轴", icon: "time", link: "/timeline/" },
        ],
      },
      {
        text: "关于",
        prefix: "/about/",
        children: [
          { text: "我的", icon: "my", link: "", activeMatch: "^/about/$" },
          { text: "友链", icon: "link", link: "links" },
          { text: "开往", icon: "train", link: "https://www.travellings.cn/go.html"},
        ],
      },
    ],
  },
]);
