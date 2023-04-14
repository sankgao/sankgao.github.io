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
]);
