import { arraySidebar } from "vuepress-theme-hope";

export const devops = arraySidebar([
  {
    text: "SVN",
    icon: "svn",
    link: "svn/",
    prefix: "svn/",
    children: [
      "svn.md",
    ],
  },
  {
    text: "Gerrit",
    icon: "gerrit",
    link: "gerrit/",
    prefix: "gerrit/",
    children: [
      "tutorial/",
      "problem/",
    ],
  },
  {
    text: "Jenkins",
    icon: "jenkins",
    link: "jenkins/",
    prefix: "jenkins/",
    children: [
      "tutorials/",
      "problems/",
    ],
  },
  {
    text: "GitLab",
    icon: "gitlab",
    link: "gitlab/",
    prefix: "gitlab/",
    children: [
      "tutorials/",
      "problems/",
    ],
  },
  {
    text: "Docker",
    icon: "docker",
    link: "docker/",
    prefix: "docker/",
    children: [
      "tutorials/",
      "problems/",
    ],
  },
]);
