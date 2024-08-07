import { arraySidebar } from "vuepress-theme-hope";

export const languages = arraySidebar([
  {
    text: "CMD",
    icon: "command",
    link: "cmd/",
    prefix: "cmd/",
    collapsible: true,
    children: [
      "tutorials/",
      "problems/",
    ],
  },
  {
    text: "PowerShell",
    icon: "command",
    link: "powershell/",
    prefix: "powershell/",
    collapsible: true,
    children: [
      "tutorials/",
      "problems/",
    ],
  },
  {
    text: "HTML5",
    icon: "html5",
    link: "html5/",
    prefix: "html5/",
    children: [
      "tutorial/",
      "references/",
      "tags/",
    ],
  },
  {
    text: "css3",
    icon: "css3",
    link: "css3/",
    prefix: "css3/",
    children: [
      "tutorial/",
      "references/",
    ],
  },
  {
    text: "Python3",
    icon: "python",
    link: "python3/",
    prefix: "python3/",
    children: [
      "tutorial/",
      "algorithm_data_structure/",
      "references/",
      "cases.md",
    ],
  },
  {
    text: "C",
    icon: "c",
    link: "c/",
    prefix: "c/",
    children: [
      "tutorial/",
    ],
  },
]);
