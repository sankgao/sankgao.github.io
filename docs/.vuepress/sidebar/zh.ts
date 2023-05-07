import { sidebar } from "vuepress-theme-hope";

export const zhSidebarConfig = sidebar({
  // fallback
  // "/": ["", "note/", "code/", "software/", "about/"],
  
  // 侧边栏配置
  "/computer/": "structure",
  "/computer/base/": "structure",
  "/computer/windows/": "structure",
  "/computer/linux/": "structure",
  
  "/frontend/": [
    {
      text: "HTML5",
      icon: "html5",
      prefix: "html5/",
      collapsible: true,
      children: [
        {
          text: "基础教程",
          icon: "tutorial",
          prefix: "tutorial/",
          collapsible: true,
          children: [
            "introduction.md",
            "base.md",
            "elements.md",
            "attributes.md",
            "title.md",
            "paragraph.md",
            "style.md",
            "formatting.md",
            "comments.md",
            "colors.md",
            "css.md",
            "links.md",
          ],
        },
        {
          text: "表单",
          icon: "form",
          prefix: "tutorial/",
          collapsible: true,
          children: [],
        },
        {
          text: "图形",
          icon: "b-graphical-o",
          prefix: "tutorial/",
          collapsible: true,
          children: [],
        },
        {
          text: "媒体",
          icon: "html5",
          prefix: "tutorial/",
          collapsible: true,
          children: [],
        },
        {
          text: "html5",
          icon: "html5",
          prefix: "tutorial/",
          collapsible: true,
          children: [],
        },
      ],
    },
    {
      text: "css3",
      icon: "css3",
      prefix: "css/",
      collapsible: true,
      children: [
        "CSS_简介.md",
        "CSS_基础.md",
      ],
    },
    {
      text: "vue3",
      icon: "vue",
      prefix: "vue3/",
      collapsible: true,
      children: [
        "introduction.md",
        "quick_start.md",
        "application.md",
        "template_syntax.md",
        "responsive_base.md",
        "computed.md",
        "class_and_style_bind.md",
        "ways_of_using_vue.md",
        "conditional.md",
        "list.md",
      ],
    },
  ],

  "/operations/": [],
  
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
    {
      text: "工具",
      icon: "tools",
      prefix: "tools/",
      collapsible: true,
      children: [
        "picgo.md",
        "quick_reference.md",
        "command.md",
        "scientific_internet.md",
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

