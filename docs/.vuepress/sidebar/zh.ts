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
            "images.md",
            "tables.md",
            "lists.md",
            "blocks.md",
            "classes.md",
            "id.md",
            "iframe.md",
            "javascript.md",
            "filepaths.md",
            "head.md",
            "layout.md",
            "responsive.md",
            "computercode.md",
            "semantic.md",
            "entities.md",
            "emoji.md",
            "charset.md",
            "url.md",
            "frames.md",
            "backgrounds.md",
          ],
        },
        {
          text: "表单",
          icon: "form",
          prefix: "tutorial/",
          collapsible: true,
          children: [
            "forms.md",
            "form_attributes.md",
            "form_elements.md",
            "form_input_types.md",
            "form_input_attributes.md",
            "form_attributes_form.md",
          ],
        },
        {
          text: "图形",
          icon: "b-graphical-o",
          prefix: "tutorial/",
          collapsible: true,
          children: [
            "canvas.md",
            "svg.md",
            "canvas_vs_svg.md",
          ],
        },
        {
          text: "媒体",
          icon: "media",
          prefix: "tutorial/",
          collapsible: true,
          children: [
            "media.md",
            "object.md",
            "audio.md",
            "video.md",
            "youtube.md",
          ],
        },
        {
          text: "API",
          icon: "api",
          prefix: "tutorial/",
          collapsible: true,
          children: [
            "geolocation.md",
            "draganddrop.md",
            "localstorage.md",
            "app_cache.md",
            "webworkers.md",
            "serversentevents.md",
          ],
        },
        {
          text: "参考手册",
          icon: "manual",
          prefix: "references/",
          collapsible: true,
          children: [
            "tags.md",
            "global_attribute.md",
            "global_event.md",
            "colornames.md",
            "canvas.md",
            "audio_video.md",
            "charactersets.md",
            "urlencode.md",
            "language_codes.md",
            "country_codes.md",
            "status_messages.md",
            "methods.md",
            "shortcuts.md",
          ],
        },
        {
          text: "标签",
          icon: "tag",
          prefix: "tags/",
          collapsible: true,
          children: [
            "comment.md",
            "doctype.md",
            "a.md",
            "abbr.md",
            "acronym.md",
            "address.md",
            "applet.md",
          ],
        },
      ],
    },
    {
      text: "css3",
      icon: "css3",
      prefix: "css3/",
      collapsible: true,
      children: [
        {
          text: "教程",
          icon: "tutorial",
          prefix: "tutorial/",
          collapsible: true,
          children: [
            {
              text: "基础教程",
              icon: "tutorial",
              children: [
                "introduction.md",
                "syntax.md",
                "selectors.md",
                "methods.md",
                "comments.md",
                "colors.md",
                "background.md",
                "border.md",
                "margin.md",
                "padding.md",
                "dimension.md",
                "boxmodel.md",
                "outline.md",
                "text.md",
                "font.md",
                "icons.md",
                "link.md",
                "list.md",
                "table.md",
              ],
            },
            {
              text: "中级教程",
              icon: "tutorial",
              children: [
                "display_visibility.md",
                "max_width.md",
                "positioning.md",
                "overflow.md",
                "float.md",
                "inline_block.md",
                "align.md",
                "combinators.md",
                "pseudo_classes.md",
                "pseudo_elements.md",
                "transparency.md",
                "navbar.md",
                "dropdowns.md",
                "images.md",
                "attribute_selectors.md",
              ],
            },
          ],
        },
        {
          text: "参考手册",
          icon: "manual",
          prefix: "references/",
          collapsible: true,
          children: [
            "attributes.md",
            "selectors.md",
            "pseudo_classes.md",
            "pseudo_elements.md",
            "functions.md",
            "animatable.md",
            "websafe_fonts.md",
            "units.md",
            "colors.md",
            "default_values.md",
            "entities.md",
            "aural.md",
          ],
        },
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

  "/languages/": [
    {
      text: "Python",
      icon: "python",
      prefix: "python/",
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
            "comments.md",
            "variables.md",
            "datatypes.md",
            "operators.md",
            "flows_control.md",
            "jumps.md",
            "containers.md",
            "strings.md",
            "regexp.md",
            "functions.md",
            "object_oriented.md",
            "modules.md",
            "exception_debug.md",
            "file_directory.md",
            "process_thread.md",
            "databases.md",
            "responsive.md",
            "game.md",
            "web_crawler.md",
          ],
        },
        {
          text: "算法和数据结构",
          icon: "algorithm",
          prefix: "algorithm_data_structure/",
          collapsible: true,
          children: [
            "algorithm_data_structure.md",
            "data_structure_base.md",
            "trees.md",
            "sorting.md",
            "algorithms_in_interviews.md",
            "practical_application.md",
          ],
        },
        {
          text: "参考手册",
          icon: "manual",
          prefix: "references/",
          collapsible: true,
          children: [
            "functions.md",
            "methods.md",
            "modules.md",
          ],
        },
        "cases.md"
      ],
    },
  ],
  
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
        "vscode.md",
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

