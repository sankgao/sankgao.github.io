import { arraySidebar } from "vuepress-theme-hope";

export const devops = arraySidebar([
  {
    text: "SVN",
    icon: "svn",
    link: "svn/",
    prefix: "svn/",
    collapsible: true,
  },
  {
    text: "Git",
    icon: "git",
    link: "git/",
    prefix: "git/",
    collapsible: true,
    children: [
      "tutorials/",
      "problems/",
    ],
  },
  {
    text: "Gerrit",
    icon: "gerrit",
    link: "gerrit/",
    prefix: "gerrit/",
    collapsible: true,
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
    collapsible: true,
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
    collapsible: true,
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
    collapsible: true,
    children: [
      "tutorials/",
      "problems/",
    ],
  },
]);
