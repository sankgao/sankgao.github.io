import { arraySidebar } from "vuepress-theme-hope";

export const framework = arraySidebar([
  {
    text: "Vue3",
    icon: "vue3",
    link: "vue3/",
    prefix: "vue3/",
    children: [
      "introduction",
      "quick_start",
      "application",
      "template_syntax",
      "responsive_base",
      "computed",
      "class_and_style_bind",
      "ways_of_using_vue",
      "conditional",
      "list",
    ],
  },
]);
