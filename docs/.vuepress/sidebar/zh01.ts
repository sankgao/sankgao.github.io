import { sidebar } from "vuepress-theme-hope";

export const zhSidebarConfig = sidebar({
  // fallback
  "/": ["", "note/", "code/", "software/", "about/"],

  // 侧边栏配置
  "/计算机基础/": "structure",
  "/计算机基础/Windows/": "structure",
  "/计算机基础/Linux/": "structure",

  "/运维/": "structure",
  "/运维/虚拟化/": "structure",
  "/运维/自动化/": "structure",
  "/运维/CICD/": "structure",
  "/运维/CICD/Git/": "structure",
  "/运维/CICD/Jenkins/": "structure",
  "/运维/DevOps/": "structure",
  "/运维/DevOps/Docker/": "structure",
  "/运维/监控/": "structure",
  "/运维/抓包工具/": "structure",
  "/运维/面向对象/": "structure",
  "/运维/中间件/": "structure",
  "/运维/消息队列/": "structure",
  "/运维/云计算/": "structure",

  "/架构/": "structure",

  "/编程语言/": "structure",
  "/编程语言/Shell/": "structure",
  "/编程语言/Python/": "structure",
  "/编程语言/Groovy/": "structure",
  "/编程语言/Go/": "structure",
  "/编程语言/Java/": "structure",
  "/编程语言/HTML/": "structure",
  "/编程语言/CSS/": "structure",
  "/编程语言/JavaScript/": "structure",
  "/编程语言/Maven/": "structure",

  "/安全/": "structure",
  
  "/其它/": "structure",

  "/索引/": "structure",
  "/索引/本站/": "structure",
  "/索引/我的/": "structure",
});