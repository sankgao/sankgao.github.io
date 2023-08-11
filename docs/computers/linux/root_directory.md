---
title: 系统根目录
icon: directory
date: 2023-04-12
category: Computer
tag:
    - Linux
---

## Linux 系统根目录文件存放内容

在 Linux 系统中，目录、字符设备、套接字、硬盘、光驱、打印机等都会被抽象成了文件形式，即 **Linux 系统中一切皆为文件。**

**路径**：分为绝对路径和相对路径

- **绝对路径**：指的是从根目录 <kbd>/</kbd> 开始写起文件名称，例如：查找 `aaa.txt` 文件位置 `/home/zhangsan/test/aaa.txt`
- **相对路径**：指的是从当前目录开始写起文件名称，例如：当前在 `/home/zhangsan` 目录中，`aaa.txt` 文件位置就是 `test/aaa.txt`

以下目录文件存放的内容为通常放置文件的位置，可以根据自己的情况更改文件位置。

|  目录名称  |  应放置文件的内容  |
|  :----:  |  :----  |
|  `/boot`  |  开机所需文件，如：内核文件  |
|  `/dev`  |  设备与接口文件，如：硬盘  |
|  `/etc`  |  软件的配置文件  |
|  `/home`  |  用户家目录文件  |
|  `/bin`  |  系统命令  |
|  `/lib`  |  开机用的函数库  |
|  `/sbin`  |  系统命令  |
|  `/media`  |  挂载设备文件  |
|  `/opt`  |  第三方软件  |
|  `/root`  |  系统管理员家目录  |
|  `/srv`  |  网络服务的数据文件  |
|  `/tmp`  |  “共享” 临时目录  |
|  `/proc`  |  虚拟文件目录  |
|  `/usr/local`  |  用户自行安装的软件  |
|  `/usr/share`  |  帮助说明文件  |
|  `/var`  |  经常变化的文件，如：日志  |
|  `/lost+found`  |  文件系统发生错误，存放一些丢失的文件片段  |

```bash
ls /boot  # /boot 目录，开机所需文件，如：内核文件

config-4.18.0-408.el8.x86_64  initramfs-0-rescue-e310191fcb7f4ceea3c545b74256e19f.img  loader                            vmlinuz-0-rescue-e310191fcb7f4ceea3c545b74256e19f
efi                           initramfs-4.18.0-408.el8.x86_64.img                      symvers-4.18.0-408.el8.x86_64.gz  vmlinuz-4.18.0-408.el8.x86_64
grub2                         initramfs-4.18.0-408.el8.x86_64kdump.img                 System.map-4.18.0-408.el8.x86_64


ls /dev  # /dev 目录，设备与接口文件，如：硬盘
autofs   core             dm-2    hidraw0    log           net        nvram   rtc       stderr  tty11  tty18  tty24  tty30  tty37  tty43  tty5   tty56  tty62  ttyS2    usbmon2  vcs6   vcsa6        vsock
block    cpu              dmmidi  hpet       loop-control  ng0n1      port    rtc0      stdin   tty12  tty19  tty25  tty31  tty38  tty44  tty50  tty57  tty63  ttyS3    vcs      vcsa   vfio         zero
bsg      cpu_dma_latency  dri     hugepages  mapper        null       ppp     sg0       stdout  tty13  tty2   tty26  tty32  tty39  tty45  tty51  tty58  tty7   uhid     vcs1     vcsa1  vga_arbiter
bus      cs               fb0     hwrng      mcelog        nvme0      ptmx    shm       tty     tty14  tty20  tty27  tty33  tty4   tty46  tty52  tty59  tty8   uinput   vcs2     vcsa2  vhci
cdrom    disk             fd      initctl    mem           nvme0n1    pts     snapshot  tty0    tty15  tty21  tty28  tty34  tty40  tty47  tty53  tty6   tty9   urandom  vcs3     vcsa3  vhost-net
char     dm-0             full    input      midi          nvme0n1p1  random  snd       tty1    tty16  tty22  tty29  tty35  tty41  tty48  tty54  tty60  ttyS0  usbmon0  vcs4     vcsa4  vhost-vsock
console  dm-1             fuse    kmsg       mqueue        nvme0n1p2  raw     sr0       tty10   tty17  tty23  tty3   tty36  tty42  tty49  tty55  tty61  ttyS1  usbmon1  vcs5     vcsa5  vmci


ls /etc  # /etc 目录，软件的配置文件

adjtime                 crontab                  firewalld     idmapd.conf    libaudit.conf             modprobe.d         passwd-         request-key.conf  ssh                 unbound
aliases                 cron.weekly              fonts         init.d         libibverbs.d              modules-load.d     pesign          request-key.d     ssl                 updatedb.conf
alternatives            crypto-policies          fprintd.conf  inittab        libnl                     motd               pinforc         resolv.conf       sssd                vconsole.conf
anacrontab              crypttab                 fstab         inputrc        libpaper.d                motd.d             pkcs11          rhsm              subgid              vimrc
asciidoc                csh.cshrc                fuse.conf     iproute2       libreport                 mtab               pki             rpc               subgid-             virc
at.deny                 csh.login                gcrypt        ipsec.conf     libssh                    nanorc             plymouth        rpm               subuid              vmware-tools
audit                   dbus-1                   gdbinit       ipsec.d        libuser.conf              netconfig          pm              rsyslog.conf      subuid-             wgetrc
authselect              dconf                    gdbinit.d     ipsec.secrets  locale.conf               NetworkManager     polkit-1        rsyslog.d         sudo.conf           X11
bash_completion.d       debuginfod               glvnd         issue          localtime                 networks           popt.d          rwtab.d           sudoers             xattr.conf
bashrc                  default                  gnupg         issue.d        login.defs                nftables           printcap        samba             sudoers.d           xdg
bindresvport.blacklist  depmod.d                 GREP_COLORS   issue.net      logrotate.conf            nsswitch.conf      profile         sasl2             sudo-ldap.conf      xinetd.d
binfmt.d                dhcp                     groff         java           logrotate.d               nsswitch.conf.bak  profile.d       security          sysconfig           xml
centos-release          DIR_COLORS               group         jvm            lsm                       nvme               protocols       selinux           sysctl.conf         yum
chkconfig.d             DIR_COLORS.256color      group-        jvm-commmon    lvm                       oddjob             rc0.d           services          sysctl.d            yum.conf
chrony.conf             DIR_COLORS.lightbgcolor  grub2.cfg     kdump          machine-id                oddjobd.conf       rc1.d           sestatus.conf     systemd             yum.repos.d
......省略部分内容


ls /home  # /home 目录，用户家目录文件

lisi  zhangshan


ls /bin  # /bin 目录，系统命令

'['                                   domainname                    gxl2gv                 nl-classid-lookup          secret-tool                      taskset
 a2x                                  dos2unix                      gzexe                  nl-class-list              sed                              tbl
 a2x.py                               dot                           gzip                   nl-cls-add                 sedismod                         teamd
 ab                                   dot2gxl                       hash                   nl-cls-delete              sedispol                         teamdctl
 ac                                   dotty                         head                   nl-cls-list                semodule_expand                  teamnl
 aclocal                              dracut                        hexdump                nl-fib-lookup              semodule_link                    tee
 aclocal-1.16                         du                            host                   nl-link-enslave            semodule_package                 test
 acyclic                              dumpkeys                      hostid                 nl-link-ifindex2name       semodule_unpackage               tic
 addr2line                            dumpmscat                     hostname               nl-link-list               seq                              time
 alias                                dwp                           hostnamectl            nl-link-name2ifindex       servertool                       timedatectl
 alt-java                             dwz                           htdbm                  nl-link-release            sessreg                          timeout
 appstream-compose                    easy_install-3.6              htdigest               nl-link-set                setarch                          tload
 appstream-util                       echo                          htpasswd               nl-link-stats              setcifsacl                       tmon
 apropos                              ed                            httxt2dbm              nl-list-caches             setfacl                          tmux
 ar                                   edgepaint                     i386                   nl-list-sockets            setfattr                         tnameserv
 arch                                 editdiff                      iceauth                nl-monitor                 setfont                          toe
 arpaname                             efikeygen                     iconv                  nl-neigh-add               setkeycodes                      top
 as                                   efisiglist                    id                     nl-neigh-delete            setleds                          touch
......省略部分内容


ls /lib  # /lib 目录，开机用的函数库

binfmt.d  dracut         firewalld   games  java         jvm-private  kernel  modprobe.d      motd.d          polkit-1   rpm       sysimage    tmpfiles.d
cpp       eclipse        firmware    gcc    jvm          kbd          locale  modules         NetworkManager  python3.6  sse2      systemd     tuned
debug     environment.d  fontconfig  grub   jvm-commmon  kdump        mdadm   modules-load.d  os-release      realmd     sysctl.d  sysusers.d  udev


ls /sbin  # /sbin 目录，系统命令

accessdb              ctstat               fsck.fat                     iprconfig                   lvresize                    poweroff                   setenforce            vgcfgrestore
accton                dcb                  fsck.minix                   iprdbg                      lvs                         pvchange                   setfiles              vgchange
adcli                 ddns-confgen         fsck.msdos                   iprdump                     lvscan                      pvck                       setpci                vgck
addgnupghome          debugfs              fsck.vfat                    iprinit                     makedumpfile                pvcreate                   setquota              vgconvert
addpart               delpart              fsck.xfs                     iprsos                      matchpathcon                pvdisplay                  setroubleshootd       vgcreate
adduser               depmod               fsfreeze                     iprupdate                   mcelog                      pvmove                     setsebool             vgdisplay
agetty                devlink              fstrim                       ipsec                       mdadm                       pvremove                   sfdisk                vgexport
alternatives          dmeventd             fuse2fs                      ipset                       mdmon                       pvresize                   shutdown              vgextend
......省略部分内容


ls /root  # /root 主目录

aaa.txt  anaconda-ks.cfg  bb


ls /tmp  # /tmp “共享” 临时目录

systemd-private-386ad6947a9b433b98e730020c0dc889-chronyd.service-Nk7yLj


ls /proc  # /proc 虚拟文件目录

1     17    18   188  196  203  212  26     35219  38  508  527  6    644  784  857  911  940   asound     diskstats    ioports      kpageflags  net           stat           version
10    1728  180  189  197  204  213  27     35221  39  509  528  603  646  785  860  913  944   buddyinfo  dma          irq          loadavg     pagetypeinfo  swaps          vmallocinfo
11    1733  181  19   198  205  214  3      35227  4   510  529  612  647  786  862  914  951   bus        driver       kallsyms     locks       partitions    sys            vmstat
1199  1737  182  190  199  206  215  31     35228  40  511  530  638  740  787  884  915  961   cgroups    execdomains  kcore        mdstat      sched_debug   sysrq-trigger  zoneinfo
12    1740  183  191  2    207  216  32     35234  41  512  531  639  778  828  886  916  962   cmdline    fb           keys         meminfo     schedstat     sysvipc
13    1746  184  192  20   208  217  33     35241  42  515  532  640  78   853  9    917  969   consoles   filesystems  key-users    misc        scsi          thread-self
14    1747  185  193  200  209  218  34     35258  43  516  533  641  781  854  908  930  970   cpuinfo    fs           kmsg         modules     self          timer_list
15    1754  186  194  201  210  22   34874  36     44  517  534  642  782  855  909  935  983   crypto     interrupts   kpagecgroup  mounts      slabinfo      tty
16    1755  187  195  202  211  25   35     37     45  526  535  643  783  856  910  939  acpi  devices    iomem        kpagecount   mtrr        softirqs      uptime


ls /usr/local  # /usr/local 用户自行安装的软件

bin  etc  games  include  lib  lib64  libexec  sbin  share  src


ls /usr/share  # /usr/share 帮助说明文件，如：help

aclocal       autoconf         cracklib             file        gettext         grub     intltool     libdrm        makedumpfile    nano           pki             smartmontools     themes            zsh
aclocal-1.16  automake-1.16    crypto-policies      firstboot   gettext-0.19.8  gtk-2.0  ivy-xmls     libgpg-error  man             nmap           plymouth        sounds            thumbnailers
adobe         awk              dbus-1               fontconfig  ghostscript     guile    java         libreport     maven-metadata  omf            polkit-1        source-highlight  tracer
anaconda      backgrounds      desktop-directories  fonts       git-core        help     javadoc      libthai       maven-poms      open-vm-tools  publicsuffix    sssd              tuned
appdata       bash-completion  dict                 games       glib-2.0        httpd    javazi       libtool       mdadm           os-prober      python3-wheels  sssd-kcm          vim
applications  bison            doc                  gawk        glvnd           hwdata   javazi-1.8   licenses      metainfo        p11-kit        redhat-logos    systemd           wayland-sessions
asciidoc      centos-release   eclipse              gcc-8       gnome           i18n     jvm          locale        microcode_ctl   PackageKit     redhat-release  systemtap         X11
audit         cmake            emacs                GConf       gnupg           icons    jvm-commmon  ltrace        mime            perl5          selinux         tabset            xml
augeas        cockpit          empty                gdb         graphviz        idl      kdump        lua           mime-info       pixmaps        setroubleshoot  terminfo          xsessions
authselect    config.site      factory              GeoIP       groff           info     keyutils     magic         misc            pkgconfig      sgml            testpage          zoneinfo


ls /var  # /var 经常变化的文件，如：log

account  adm  cache  crash  db  empty  ftp  games  gopher  kerberos  lib  local  lock  log  mail  nis  opt  preserve  run  spool  tmp  www  yp
```
