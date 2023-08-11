import { arraySidebar } from "vuepress-theme-hope";

export const python3 = arraySidebar([
  {
    text: "基础教程",
    icon: "tutorial",
    prefix: "tutorial/",
    collapsible: true,
    children: [
      "introduction",
      "base",
      "comments",
      "variables",
      "datatypes",
      "operators",
      "flows_control",
      "jumps",
      "containers",
      "strings",
      "regexp",
      "functions",
      "object_oriented",
      "modules",
      "exception_debug",
      "file_directory",
      "process_thread",
      "databases",
      "responsive",
      "game",
      "web_crawler",
    ],
  },
  {
    text: "算法和数据结构",
    icon: "algorithm",
    prefix: "algorithm_data_structure/",
    collapsible: true,
    children: [
      "algorithm_data_structure",
      "data_structure_base",
      "trees",
      "sorting",
      "algorithms_in_interviews",
      "practical_application",
    ],
  },
  {
    text: "参考手册",
    icon: "manual",
    prefix: "references/",
    collapsible: true,
    children: [
      "functions",
      "methods",
      "modules",
    ],
  },
  "cases",
]);