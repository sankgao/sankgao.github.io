import { arraySidebar } from "vuepress-theme-hope";

export const linux = arraySidebar([
  { text: "SSH 登录之前显示横幅消息", icon: "banner", link: "banner_message" },
  { text: "Linux 系统命令", icon: "command", link: "command" },
  { text: "使用 sudo 时报错", icon: "error", link: "error_using_sudo" },
  { text: "硬件资源管理", icon: "hardware", link: "hardware_resource" },
  { text: "安装软件的方法", icon: "install", link: "install_software" },
  { text: "反弹 Shell", icon: "reverse", link: "rebound_shell" },
  { text: "重置 root 密码", icon: "passwd", link: "reset_root_password" },
  { text: "系统根目录", icon: "directory", link: "root_directory" },
  { text: "系统日志", icon: "log", link: "system_log" },
  { text: "系统服务命令", icon: "service", link: "system_service" },
]);
