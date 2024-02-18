import { sidebar } from "vuepress-theme-hope";
import { computers, framework } from "./computers/index.ts";
import { devops } from "./devops/index.ts";
import { languages, html5, css3, python3 } from "./languages/index.ts";
import { others } from "./others/index.ts";
import { about } from "./about.ts";

export const zhSidebarConfig = sidebar({
  // fallback
  // "/": ["", "note/", "code/", "software/", "about/"],
  
  // 侧边栏配置
  "/computers/": computers,
  "/computers/framework/": framework,
  
  "/devops/": devops,
  
  "/languages/": languages,
  "/languages/html5/": html5,
  "/languages/css3/": css3,
  "/languages/python3/": python3,
  
  "/others/": others,
  
  "/about/": about,
  
  "/about/my": [ "personal_info.md", "site.md", ],
});
