import { arraySidebar } from "vuepress-theme-hope";

export const jenkins = arraySidebar([
  {
    text: "教程",
    icon: "tutorial",
    link: "tutorials/",
    prefix: "tutorials/",
    collapsible: true,
    children: [
      "install",
    ],
  },
  {
    text: "问题",
    icon: "problem",
    link: "problems/",
    prefix: "problems/",
    collapsible: true,
    children: [
      "java_version",
    ],
  },
]);
