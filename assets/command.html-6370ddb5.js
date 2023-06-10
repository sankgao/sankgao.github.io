const l=JSON.parse('{"key":"v-0cbaee84","path":"/computer/linux/command.html","title":"Linux 系统命令","lang":"zh-CN","frontmatter":{"title":"Linux 系统命令","icon":"command","date":"2023-04-12T00:00:00.000Z","category":"Computer","tag":["Linux"],"description":"常用命令 man man 用于查看命令的作用及选项信息，使用 q 退出。语法格式：man 命令 example： ```bash man echo ``` echo echo 用于在终端上输出字符串或变量提取后的值。语法格式：echo [字符串][$变量] 选项 作用 | :----: :---- | -e 使用转义符 | example: ```ba...","head":[["meta",{"property":"og:url","content":"https://sankgao.github.io/computer/linux/command.html"}],["meta",{"property":"og:site_name","content":"Sank\'s blog"}],["meta",{"property":"og:title","content":"Linux 系统命令"}],["meta",{"property":"og:description","content":"常用命令 man man 用于查看命令的作用及选项信息，使用 q 退出。语法格式：man 命令 example： ```bash man echo ``` echo echo 用于在终端上输出字符串或变量提取后的值。语法格式：echo [字符串][$变量] 选项 作用 | :----: :---- | -e 使用转义符 | example: ```ba..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-21T09:21:18.000Z"}],["meta",{"property":"article:author","content":"Sankgao"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2023-04-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-21T09:21:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 系统命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-21T09:21:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Sankgao\\",\\"url\\":\\"https://sankgao.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://sankgao.github.io/atom.xml","title":"Sank\'s blog Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://sankgao.github.io/feed.json","title":"Sank\'s blog JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://sankgao.github.io/rss.xml","title":"Sank\'s blog RSS Feed"}]]},"headers":[{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[{"level":3,"title":"man","slug":"man","link":"#man","children":[]},{"level":3,"title":"echo","slug":"echo","link":"#echo","children":[]},{"level":3,"title":"su","slug":"su","link":"#su","children":[]},{"level":3,"title":"sudo","slug":"sudo","link":"#sudo","children":[]},{"level":3,"title":"date","slug":"date","link":"#date","children":[]},{"level":3,"title":"timedatectl","slug":"timedatectl","link":"#timedatectl","children":[]},{"level":3,"title":"reboot","slug":"reboot","link":"#reboot","children":[]},{"level":3,"title":"poweroff","slug":"poweroff","link":"#poweroff","children":[]},{"level":3,"title":"wget","slug":"wget","link":"#wget","children":[]},{"level":3,"title":"curl","slug":"curl","link":"#curl","children":[]},{"level":3,"title":"lsof","slug":"lsof","link":"#lsof","children":[]},{"level":3,"title":"ps","slug":"ps","link":"#ps","children":[]},{"level":3,"title":"pstree","slug":"pstree","link":"#pstree","children":[]},{"level":3,"title":"top","slug":"top","link":"#top","children":[]},{"level":3,"title":"nice","slug":"nice","link":"#nice","children":[]},{"level":3,"title":"pidof","slug":"pidof","link":"#pidof","children":[]},{"level":3,"title":"kill","slug":"kill","link":"#kill","children":[]},{"level":3,"title":"killall","slug":"killall","link":"#killall","children":[]},{"level":3,"title":"ln","slug":"ln","link":"#ln","children":[]},{"level":3,"title":"tee","slug":"tee","link":"#tee","children":[]},{"level":3,"title":"eval","slug":"eval","link":"#eval","children":[]},{"level":3,"title":"bc","slug":"bc","link":"#bc","children":[]}]},{"level":2,"title":"管理 SELinux 服务命令","slug":"管理-selinux-服务命令","link":"#管理-selinux-服务命令","children":[{"level":3,"title":"getenforce","slug":"getenforce","link":"#getenforce","children":[]},{"level":3,"title":"setenforce","slug":"setenforce","link":"#setenforce","children":[]},{"level":3,"title":"semanage","slug":"semanage","link":"#semanage","children":[]},{"level":3,"title":"restorecon","slug":"restorecon","link":"#restorecon","children":[]},{"level":3,"title":"getsebool","slug":"getsebool","link":"#getsebool","children":[]}]},{"level":2,"title":"查看磁盘信息","slug":"查看磁盘信息","link":"#查看磁盘信息","children":[{"level":3,"title":"mount","slug":"mount","link":"#mount","children":[]},{"level":3,"title":"umount","slug":"umount","link":"#umount","children":[]},{"level":3,"title":"blkid","slug":"blkid","link":"#blkid","children":[]},{"level":3,"title":"df","slug":"df","link":"#df","children":[]},{"level":3,"title":"fdisk","slug":"fdisk","link":"#fdisk","children":[]},{"level":3,"title":"mkfs","slug":"mkfs","link":"#mkfs","children":[]},{"level":3,"title":"du","slug":"du","link":"#du","children":[]},{"level":3,"title":"fsck","slug":"fsck","link":"#fsck","children":[]},{"level":3,"title":"sync","slug":"sync","link":"#sync","children":[]}]},{"level":2,"title":"状态检测命令","slug":"状态检测命令","link":"#状态检测命令","children":[{"level":3,"title":"ifconfig","slug":"ifconfig","link":"#ifconfig","children":[]},{"level":3,"title":"nslookup","slug":"nslookup","link":"#nslookup","children":[]},{"level":3,"title":"nmcli","slug":"nmcli","link":"#nmcli","children":[]},{"level":3,"title":"route","slug":"route","link":"#route","children":[]},{"level":3,"title":"uname","slug":"uname","link":"#uname","children":[]},{"level":3,"title":"uptime","slug":"uptime","link":"#uptime","children":[]},{"level":3,"title":"free","slug":"free","link":"#free","children":[]},{"level":3,"title":"who","slug":"who","link":"#who","children":[]},{"level":3,"title":"last","slug":"last","link":"#last","children":[]},{"level":3,"title":"ping","slug":"ping","link":"#ping","children":[]},{"level":3,"title":"tracepath","slug":"tracepath","link":"#tracepath","children":[]},{"level":3,"title":"netstat","slug":"netstat","link":"#netstat","children":[]},{"level":3,"title":"history","slug":"history","link":"#history","children":[]},{"level":3,"title":"sosreport","slug":"sosreport","link":"#sosreport","children":[]},{"level":3,"title":"watch","slug":"watch","link":"#watch","children":[]}]},{"level":2,"title":"查找定位文件命令","slug":"查找定位文件命令","link":"#查找定位文件命令","children":[{"level":3,"title":"pwd","slug":"pwd","link":"#pwd","children":[]},{"level":3,"title":"cd","slug":"cd","link":"#cd","children":[]},{"level":3,"title":"ls","slug":"ls","link":"#ls","children":[]},{"level":3,"title":"tree","slug":"tree","link":"#tree","children":[]},{"level":3,"title":"find","slug":"find","link":"#find","children":[]},{"level":3,"title":"locate","slug":"locate","link":"#locate","children":[]},{"level":3,"title":"whereis","slug":"whereis","link":"#whereis","children":[]},{"level":3,"title":"which","slug":"which","link":"#which","children":[]},{"level":3,"title":"cat","slug":"cat","link":"#cat","children":[]},{"level":3,"title":"more","slug":"more","link":"#more","children":[]},{"level":3,"title":"head","slug":"head","link":"#head","children":[]},{"level":3,"title":"tail","slug":"tail","link":"#tail","children":[]},{"level":3,"title":"tr","slug":"tr","link":"#tr","children":[]},{"level":3,"title":"wc","slug":"wc","link":"#wc","children":[]},{"level":3,"title":"stat","slug":"stat","link":"#stat","children":[]},{"level":3,"title":"grep","slug":"grep","link":"#grep","children":[]},{"level":3,"title":"cut","slug":"cut","link":"#cut","children":[]},{"level":3,"title":"diff","slug":"diff","link":"#diff","children":[]},{"level":3,"title":"uniq","slug":"uniq","link":"#uniq","children":[]},{"level":3,"title":"sort","slug":"sort","link":"#sort","children":[]},{"level":3,"title":"split","slug":"split","link":"#split","children":[]},{"level":3,"title":"touch","slug":"touch","link":"#touch","children":[]},{"level":3,"title":"mkdir","slug":"mkdir","link":"#mkdir","children":[]},{"level":3,"title":"chmod","slug":"chmod","link":"#chmod","children":[]},{"level":3,"title":"chattr","slug":"chattr","link":"#chattr","children":[]},{"level":3,"title":"lsattr","slug":"lsattr","link":"#lsattr","children":[]},{"level":3,"title":"setfacl","slug":"setfacl","link":"#setfacl","children":[]},{"level":3,"title":"getfacl","slug":"getfacl","link":"#getfacl","children":[]},{"level":3,"title":"cp","slug":"cp","link":"#cp","children":[]},{"level":3,"title":"scp","slug":"scp","link":"#scp","children":[]},{"level":3,"title":"mv","slug":"mv","link":"#mv","children":[]},{"level":3,"title":"rm","slug":"rm","link":"#rm","children":[]},{"level":3,"title":"dd","slug":"dd","link":"#dd","children":[]},{"level":3,"title":"file","slug":"file","link":"#file","children":[]},{"level":3,"title":"tar","slug":"tar","link":"#tar","children":[]},{"level":3,"title":"zip","slug":"zip","link":"#zip","children":[]},{"level":3,"title":"unzip","slug":"unzip","link":"#unzip","children":[]}]},{"level":2,"title":"用户命令","slug":"用户命令","link":"#用户命令","children":[{"level":3,"title":"id","slug":"id","link":"#id","children":[]},{"level":3,"title":"useradd","slug":"useradd","link":"#useradd","children":[]},{"level":3,"title":"groupadd","slug":"groupadd","link":"#groupadd","children":[]},{"level":3,"title":"usermod","slug":"usermod","link":"#usermod","children":[]},{"level":3,"title":"passwd","slug":"passwd","link":"#passwd","children":[]},{"level":3,"title":"userdel","slug":"userdel","link":"#userdel","children":[]}]}],"git":{"createdTime":1681436011000,"updatedTime":1682068878000,"contributors":[{"name":"Sankgao@163.com","email":"gaoqingshan@sis.sh.cn","commits":2},{"name":"Sankgao","email":"sankgao@163.com","commits":1},{"name":"gqingshan","email":"root@localhost.localdomain","commits":1}]},"readingTime":{"minutes":56.32,"words":16896},"filePathRelative":"computer/linux/command.md","localizedDate":"2023年4月12日","excerpt":"","autoDesc":true}');export{l as data};
