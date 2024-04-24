import { arraySidebar } from "vuepress-theme-hope";

export const docker = arraySidebar([
  {
    text: "教程",
    icon: "tutorial",
    link: "tutorials/",
    prefix: "tutorials/",
    collapsible: true,
    children: [
    ],
  },
  {
    text: "问题",
    icon: "problem",
    link: "problems/",
    prefix: "problems/",
    collapsible: true,
    children: [
      "variable_not_set",
    ],
  },
]);
