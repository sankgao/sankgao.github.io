import { arraySidebar } from "vuepress-theme-hope";

export const computers = arraySidebar([
  {
    text: "计算机基础",
    icon: "base",
    link: "base/",
    prefix: "base/",
  },
  {
    text: "Windows",
    icon: "windows",
    link: "windows/",
    prefix: "windows/",
  },
  {
    text: "Linux",
    icon: "linux",
    link: "linux/",
    prefix: "linux/",
  },
  {
    text: "开发环境",
    icon: "backstage",
    link: "dev_env/",
    prefix: "dev_env/",
  },
  {
    text: "架构",
    icon: "electron-framework",
    link: "framework/",
    prefix: "framework/",
    children: [
      "vue3/",
    ],
  },
]);
