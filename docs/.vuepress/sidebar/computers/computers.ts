import { arraySidebar } from "vuepress-theme-hope";

export const computers = arraySidebar([
  {
    text: "基础",
    icon: "base",
    link: "base/",
    prefix: "base/",
    children: [
      "README",
    ],
  },
  {
    text: "Windows",
    icon: "windows",
    link: "windows/",
    prefix: "windows/",
    children: [
      "README",
    ],
  },
  {
    text: "Linux",
    icon: "linux",
    link: "linux/",
    prefix: "linux/",
    children: [
      "README",
    ],
  },
  {
    text: "开发环境",
    icon: "backstage",
    link: "dev_env/",
    prefix: "dev_env/",
    children: [
      "README",
    ],
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
