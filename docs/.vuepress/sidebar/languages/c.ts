import { arraySidebar } from "vuepress-theme-hope";

export const c = arraySidebar([
  {
    text: "基础教程",
    icon: "tutorial",
    prefix: "tutorial/",
    collapsible: true,
    children: [
      "introduction",
    ],
  },
]);
