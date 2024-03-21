import { arraySidebar } from "vuepress-theme-hope";

export const gerrit = arraySidebar([
  {
    text: "基础",
    icon: "tutorial",
    link: "tutorial/",
    prefix: "tutorial/",
    collapsible: true,
    children: [
      "introduction",
      "install",
      "self_start",
      "command",
    ],
  },
  {
    text: "问题",
    icon: "problem",
    link: "problem/",
    prefix: "problem/",
    collapsible: true,
    children: [
      "java_runtime",
      "connection_refused",
      "port_disabled_selinux",
    ],
  },
]);
