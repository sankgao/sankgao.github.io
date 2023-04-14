---
title: 系统服务
icon: service
date: 2023-4-12
category: Computer
tag:
  - Linux
---

## Linux 系统初始化进程

|  System V init 运行级别  |  Systemd 目标名称  |  Systemd 目标作用  |
|  :----:  |  :----:  |  :----:  |
|  0  |  poweroff.target  |  关机  |
|  1  |  rescue.target  |  单用户模式  |
|  2  |  multi-user.target  |  多用户的文本界面  |
|  3  |  multi-user.target  |  多用户的文本界面  |
|  4  |  multi-user.target  |  多用户的文本界面  |
|  5  |  graphical.target  |  多用户的图形界面  |
|  6  |  reboot.target  |  重启  |
|  7  |  emergency.target  |  救援模式  |

> RHEL 5/6 系统使用 service、chkconfig 等命令来管理系统服务，RHEL 7/8 系统使用 systemctl 命令来管理系统服务

## 服务启动、重启、停止、重载、查看状态等常用命令：

|  RHEL 5/6 系统  |  RHEL 7/8 系统  |  作用  |
|  :----:  |  :----:  |  :----:  |
|  service foo start  |  systemctl start httpd  |  启动服务  |
|  service foo restart  |  systemctl restart httpd  |  重启服务  |
|  service foo stop  |  systemctl stop httpd  |  停止服务  |
|  service foo reload  |  systemctl reload httpd  |  重新加载配置文件（不终止服务）  |
|  service foo status  |  systemctl status httpd  |  查看服务状态  |

## 服务开机启动、开机不启动、查看各级别下服务启动状态等常用命令：

|  RHEL 5/6 系统  |  RHEL 7/8 系统  |  作用  |
|  :----:  |  :----:  |  :----:  |
|  chkconfig foo on  |  systemctl enable httpd  |  开机自动启动  |
|  chkconfig foo off  |  systemctl disable httpd  |  开机不自动启动  |
|  chkconfig foo  |  systemctl is-enabled httpd  |  查看特定服务是否为开机自启动  |
|  chkconfig --list  |  systemctl list-unit-files-type=httpd  |  查看各个级别下服务的启动与禁用情况  |
