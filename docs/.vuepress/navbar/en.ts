import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  "/en",
  {
    text: "computer",
    icon: "computer",
    prefix: "/en/computer/",
    children: [
      {
        text: "base",
        icon: "base",
        link: "base/",
        activeMatch: "^base/$",
      },
      {
        text: "Windows",
        icon: "windows",
        link: "windows/",
      },
      {
        text: "Linux",
        icon: "linux",
        link: "linux/",
      },
    ],
  },
  {
    text: "index",
    icon: "index",
    children: [
      {
        text: "site",
        children: [
          {
            text: "category",
            icon: "categoryselected",
            link: "/en/category/",
            activeMatch: "^/en/category/$",
          },
          {
            text: "tag",
            icon: "tag",
            link: "/en/tag/",
          },
          {
            text: "timeline",
            icon: "time",
            link: "/en/timeline/",
          },
        ],
      },
      {
        text: "about",
        prefix: "/en/about/",
        children: [
          {
            text: "my",
            icon: "my",
            link: "my/",
          },
          {
            text: "link",
            icon: "link",
            link: "link/",
          },
          {
            text: "tools",
            icon: "tools",
            link: "tools/",
          },
        ],
      },
    ],
  },
]);

