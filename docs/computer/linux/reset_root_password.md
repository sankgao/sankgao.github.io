---
title: 重置 root 密码
icon: passwd
date: 2023-04-12
category: Computer
tag:
    - Linux
---

## Linux 系统重置 root 密码

1. 重启 Linux 系统主机并出现引导界面时，按下键盘上的 `e` 键进入内核编辑界面

    ```bash
    Red Hat Enterprise Linux (4.18.0-80.el8.x86_64) 8.0 (Ootpa)
    Red Hat Enterprise Linux (0-rescue-2307b5f70ab0473fa42eea2fe914eb95) 8.0




    User the ↑ and ↓ keys to change the selection.
    Press 'e' to edit the selected item, or 'c' for a command prompt.
    ```

2. 在 `Linux` 参数这行的最后面追加 `rd.break` 参数，然后按下 `Ctrl + x` 组合键来运行修改过的内核程序

    ```bash
    load_video
    set gfx_payload=keep
    insmod gzio
    linux ($root)/vmlinuz-4.18.0-80.el8.x86_64 root=/dev/mapper/rhel-root ro resum\
    e=/dev/mapper/rhel-swap rd.lvm.lv=rhel/root rd.lvm.lv=rhel/swap rd.break
    initrd ($root)/initramfs-4.18.0-80.el8.x86_64.img $tuned_initrd




    Press Ctrl-x to start, Ctrl-c for a command prompt or Escape to
    discard edits and return to the menu. Pressing Tab lists 
    possible completions.
    ```

3. 大约 30 秒后，进入到系统的紧急求援模式

    ```bash
    switch_root:/# 
    ```

4. 依次输入以下命令，再连续按下两次 `Ctrl + d` 组合键来退出并重启，等待系统再次重启完毕后便可以使用新密码来登录 Linux 系统

    ```bash
    switch_root:/# mount -o remount,rw /sysroot
    switch_root:/# chroot /sysroot
    sh-4.4# passwd
    sh-4.4# touch /.autorelabel
    sh-4.4# exit
    switch_root:/# logout
    ```

    :::tip
    重新挂载已经挂载了的文件系统（以读写权限挂载），需要注意的是，挂载点必须是一个已经存在的目录，这个目录可以不为空
    :::

    **mount -o remount,rw /sysroot**：重新以可读可写的方式挂载 `/sysroot`
    **chroot /sysroot**：改变根目录为 `/sysroot`
    **passwd**：按提示修改 root 密码
    **touch /.autorelabel**：查看当前目录下是否有 **.autorelabel** 文件，如果没有必须创建该文件，否则将无法正常启动系统
    **exit**：退出
    **logout**：重启系统

