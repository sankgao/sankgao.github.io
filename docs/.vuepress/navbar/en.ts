import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  "/en",
  {
    text: "computer",
    icon: "computer",
    prefix: "/en/computer/",
    children: [
      { text: "base", icon: "base", link: "base/" },
      { text: "Windows", icon: "windows", link: "windows/" },
      { text: "Linux", icon: "linux", link: "linux/" },
    ],
  },
  {
    text: "frontend",
    icon: "website",
    link: "/en/frontend/",
  },
  {
    text: "operations",
    icon: "operations",
    link: "/en/operations/",
  },
  {
    text: "index",
    icon: "index",
    children: [
      {
        text: "site",
        children: [
          { text: "category", icon: "categoryselected", link: "/en/category/" },
          { text: "tag", icon: "tag", link: "/en/tag/" },
          { text: "timeline", icon: "time", link: "/en/timeline/" },
        ],
      },
      {
        text: "about",
        children: [
          { text: "my", icon: "my", link: "/en/about/" },
          { text: "links", icon: "link", link: "/en/links" },
        ],
      },
    ],
  },
]);

