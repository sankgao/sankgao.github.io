import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "计算机",  // 项目文字
    icon: "computer",  // 项目图标（可选）
    prefix: "/computer/",  // 为分组的每一个子链接添加一个前缀
    children: [
      { text: "基础", icon: "base", link: "base/" },
      { text: "Windows", icon: "windows", link: "windows/" },
      { text: "Linux", icon: "linux", link: "linux/" },
    ],
  },
  {
    text: "前端",
    icon: "website",
    link: "/frontend/",
  },
  {
    text: "运维",
    icon: "operations",
    link: "/operations/",
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
        children: [
          { text: "我的", icon: "my", link: "/about/" },
          { text: "友链", icon: "link", link: "/links" },
        ],
      },
    ],
  },
]);

