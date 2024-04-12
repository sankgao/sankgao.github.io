import { arraySidebar } from "vuepress-theme-hope";

export const productmanage = arraySidebar([
  {
    text: "Nexus",
    icon: "nexus",
    link: "nexus/",
    prefix: "nexus/",
    collapsible: true,
    children: [
      "install",
    ],
  },
]);
