import { arraySidebar } from "vuepress-theme-hope";

export const dev_env = arraySidebar([
  {
    text: "开发环境",
    icon: "backstage",
    link: "dev_env/",
    prefix: "dev_env/",
    children: [
      "jdk",
    ],
  },
]);
