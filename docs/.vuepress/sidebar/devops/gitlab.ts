import { arraySidebar } from "vuepress-theme-hope";

export const gitlab = arraySidebar([
  {
    text: "教程",
    icon: "tutorial",
    link: "tutorials/",
    prefix: "tutorials/",
    collapsible: true,
    children: [
      "install",
      "basic_operation",
    ],
  },
  {
    text: "问题",
    icon: "problem",
    link: "problems/",
    prefix: "problems/",
    collapsible: true,
    children: [
      "unable_find_match",
    ],
  },
]);
