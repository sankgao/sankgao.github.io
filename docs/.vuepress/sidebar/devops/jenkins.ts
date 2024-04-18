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
]);
