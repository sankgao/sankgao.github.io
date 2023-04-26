import { sidebar } from "vuepress-theme-hope";

export const zhSidebarConfig = sidebar({
  // fallback
  // "/": ["", "note/", "code/", "software/", "about/"],
  
  // 侧边栏配置
  "/computer/": "structure",
  "/computer/base/": "structure",
  "/computer/windows/": "structure",
  "/computer/linux/": "structure",

  "/about/": [
    {
      text: "笔记",
      icon: "notes",
      prefix: "notes/",
      collapsible: true,
      children: [
        "markdown_syntax.md",
        "resources.md",
      ],
    },
    {
      text: "博客",
      icon: "blog",
      prefix: "blog/",
      collapsible: true,
      children: [
        "build.md",
        "config.md",
        "theme_config.md",
        "theme_plugins.md",
        "problem.md",
        "blog_notes.md",
        "blog_typeset.md",
      ],
    },
  ],
  
  "/about/my": [ "personal_info.md", "site.md"],
  // "/about/my/": "structure",
  // "/about/blog/": "structure",
  
  // "/operations/": "structure",
  // "/operations/virtualization/": "structure",
  // "/operations/automation/": "structure",
  // "/operations/devops/": "structure",
  // "/operations/devops/git/": "structure",
  // "/operations/devops/jenkins/": "structure",
  // "/operations/devops/docker/": "structure",
  // "/operations/web/": "structure",
  // "/operations/monitor/": "structure",
  // "/operations/database/": "structure",
  // "/operations/wireshark/": "structure",
  // "/operations/object_oriented/": "structure",
  // "/operations/middleware/": "structure",
  // "/operations/message_queue/": "structure",
  // "/operations/cloud_computing/": "structure",
  // 
  // "/framework/": "structure",
  // 
  // "/language/": "structure",
  // "/language/shell/": "structure",
  // "/language/python/": "structure",
  // "/language/groovy/": "structure",
  // "/language/go/": "structure",
  // "/language/c/": "structure",
  // "/language/java/": "structure",
  // "/language/html/": "structure",
  // "/language/css/": "structure",
  // "/language/javascript/": "structure",
  // "/language/maven/": "structure",
  // 
  // "/security/": "structure",
  // 
  // "/other/": "structure",
  // 
  // "/index/": "structure",
  // "/index/sites/": "structure",
  // "/index/sites/category/": "structure",
  // "/index/sites/tag/": "structure",
  // "/index/sites/timeline/": "structure",
  // "/index/my/": "structure",
  // "/index/my/about/": "structure",
});

