import { arraySidebar } from "vuepress-theme-hope";

export const devops = arraySidebar([
  {
    text: "SVN",
    icon: "svn",
    link: "svn/",
    prefix: "svn/",
    children: [
      "svn",
    ],
  },
  {
    text: "Gerrit",
    icon: "gerrit",
    link: "gerrit/",
    prefix: "gerrit/",
    children: [
      "tutorial/",
    ],
  },
]);
