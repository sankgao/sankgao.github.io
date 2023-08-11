import { arraySidebar } from "vuepress-theme-hope";

export const about = arraySidebar([
  {
    text: "笔记",
    icon: "notes",
    link: "notes/",
    prefix: "notes/",
    collapsible: true,
    children: [
      "resources.md",
      "quick_reference.md",
      "markdown_syntax.md",
      "command.md",
    ],
  },
  {
    text: "博客",
    icon: "blog",
    link: "blog/",
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
  {
    text: "工具",
    icon: "tools",
    link: "tools/",
    prefix: "tools/",
    collapsible: true,
    children: [
      "picgo.md",
      "vscode.md",
      "ali_cloud_disk.md",
    ],
  },
]);