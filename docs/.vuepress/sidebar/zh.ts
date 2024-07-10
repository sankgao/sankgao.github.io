import { sidebar } from "vuepress-theme-hope";
// import { computers, commands, productmanage, framework } from "./computers/index.ts";
import { computers } from "./computers.ts";
// import { commands } from "./commands.ts";
import { productmanage } from "./productmanage.ts";
import { framework } from "./framework.ts";
import { devops, jenkins, docker } from "./devops/index.ts";
import { languages, html5, css3, python3, c } from "./languages/index.ts";
import { others } from "./others/index.ts";
import { about } from "./about.ts";

export const zhSidebarConfig = sidebar({
  // fallback
  // "/": ["", "note/", "code/", "software/", "about/"],
  
  // 侧边栏配置
  "/computers/": computers,

  "/commands/": "structure",
  // "/commands/cmd/": "structure",
  // "/commands/powershell/": "structure",
  // "/commands/git/": "structure",
  // "/commands/linux/": "structure",
  // "/commands/docker/": "structure",

  "/productmanage/": productmanage,
  
  "/framework/": framework,
  
  "/devops/": devops,
  "/devops/svn/": "structure",
  "/devops/git/": "structure",
  "/devops/gerrit": "structure",
  "/devops/jenkins": jenkins,
  "/devops/gitlab": "structure",
  "/devops/docker": docker,
  
  "/languages/": languages,
  "/languages/html5/": html5,
  "/languages/css3/": css3,
  "/languages/python3/": python3,
  "/languages/c/": c,
  
  "/others/": others,
  
  "/about/": about,
  
  "/about/my": [ "personal_info.md", "site.md", ],
});
