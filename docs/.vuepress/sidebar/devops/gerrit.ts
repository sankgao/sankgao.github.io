import { arraySidebar } from "vuepress-theme-hope";

export const gerrit = arraySidebar([
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
