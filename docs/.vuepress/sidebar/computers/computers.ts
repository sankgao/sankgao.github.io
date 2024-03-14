import { arraySidebar } from "vuepress-theme-hope";

export const computers = arraySidebar([
  {
    text: "基础",
    icon: "base",
    link: "base/",
    prefix: "base/",
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
    children: [
      "site_not_secure",
      "github_loading",
    ],
  },
  {
    text: "Linux",
    icon: "linux",
    link: "linux/",
    prefix: "linux/",
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
    ],
  },
]);
