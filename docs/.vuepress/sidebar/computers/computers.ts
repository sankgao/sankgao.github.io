import { arraySidebar } from "vuepress-theme-hope";

export const computers = arraySidebar([
  {
    text: "计算机基础",
    icon: "base",
    link: "base/",
    prefix: "base/",
    collapsible: true,
    children: [
      "computer_organization",
      "operating_system",
      "computer_network",
      "data_structure",
    ],
  },
  {
    text: "Windows",
    icon: "windows",
    link: "windows/",
    prefix: "windows/",
    collapsible: true,
    children: [
      "site_not_secure",
      "github_loading",
      "exe_msi_diff",
    ],
  },
  {
    text: "Linux",
    icon: "linux",
    link: "linux/",
    prefix: "linux/",
    collapsible: true,
    children: [
      "banner_message",
      "command",
      "error_using_sudo",
      "hardware_resource",
      "install_software",
      "rebound_shell",
      "reset_root_password",
      "root_directory",
      "system_log",
      "system_service",
      "mail",
      "rpmdb_damage",
    ],
  },
  {
    text: "开发环境",
    icon: "backstage",
    link: "dev_env/",
    prefix: "dev_env/",
    collapsible: true,
    children: [
      "jdk",
      "git",
      "gcc",
    ],
  },
]);
