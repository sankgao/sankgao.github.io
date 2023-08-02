import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as d,f as c}from"./app-6a670b99.js";const l={},r=c('<h2 id="初始化进程" tabindex="-1"><a class="header-anchor" href="#初始化进程" aria-hidden="true">#</a> 初始化进程</h2><table><thead><tr><th style="text-align:center;">System V init 运行级别</th><th style="text-align:center;">Systemd 目标名称</th><th style="text-align:center;">Systemd 目标作用</th></tr></thead><tbody><tr><td style="text-align:center;"><code>0</code></td><td style="text-align:center;"><code>poweroff.target</code></td><td style="text-align:center;">关机</td></tr><tr><td style="text-align:center;"><code>1</code></td><td style="text-align:center;"><code>rescue.target</code></td><td style="text-align:center;">单用户模式</td></tr><tr><td style="text-align:center;"><code>2</code></td><td style="text-align:center;"><code>multi-user.target</code></td><td style="text-align:center;">多用户的文本界面</td></tr><tr><td style="text-align:center;"><code>3</code></td><td style="text-align:center;"><code>multi-user.target</code></td><td style="text-align:center;">多用户的文本界面</td></tr><tr><td style="text-align:center;"><code>4</code></td><td style="text-align:center;"><code>multi-user.target</code></td><td style="text-align:center;">多用户的文本界面</td></tr><tr><td style="text-align:center;"><code>5</code></td><td style="text-align:center;"><code>graphical.target</code></td><td style="text-align:center;">多用户的图形界面</td></tr><tr><td style="text-align:center;"><code>6</code></td><td style="text-align:center;"><code>reboot.target</code></td><td style="text-align:center;">重启</td></tr><tr><td style="text-align:center;"><code>7</code></td><td style="text-align:center;"><code>emergency.target</code></td><td style="text-align:center;">救援模式</td></tr></tbody></table><h2 id="服务启动等常用命令" tabindex="-1"><a class="header-anchor" href="#服务启动等常用命令" aria-hidden="true">#</a> 服务启动等常用命令</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>RHEL 5/6</code> 系统使用 <code>service</code>、<code>chkconfig</code> 等命令来管理系统服务；<code>RHEL 7/8</code> 系统使用 <code>systemctl</code> 命令来管理系统服务</p></div><table><thead><tr><th style="text-align:center;">RHEL 5/6 系统</th><th style="text-align:center;">RHEL 7/8 系统</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;"><code>service foo start</code></td><td style="text-align:center;"><code>systemctl start httpd</code></td><td style="text-align:center;">启动服务</td></tr><tr><td style="text-align:center;"><code>service foo restart</code></td><td style="text-align:center;"><code>systemctl restart httpd</code></td><td style="text-align:center;">重启服务</td></tr><tr><td style="text-align:center;"><code>service foo stop</code></td><td style="text-align:center;"><code>systemctl stop httpd</code></td><td style="text-align:center;">停止服务</td></tr><tr><td style="text-align:center;"><code>service foo reload</code></td><td style="text-align:center;"><code>systemctl reload httpd</code></td><td style="text-align:center;">重新加载配置文件（不终止服务）</td></tr><tr><td style="text-align:center;"><code>service foo status</code></td><td style="text-align:center;"><code>systemctl status httpd</code></td><td style="text-align:center;">查看服务状态</td></tr></tbody></table><h2 id="服务开机启动等常用命令" tabindex="-1"><a class="header-anchor" href="#服务开机启动等常用命令" aria-hidden="true">#</a> 服务开机启动等常用命令</h2><table><thead><tr><th style="text-align:center;">RHEL 5/6 系统</th><th style="text-align:center;">RHEL 7/8 系统</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;"><code>chkconfig foo on</code></td><td style="text-align:center;"><code>systemctl enable httpd</code></td><td style="text-align:center;">开机自动启动</td></tr><tr><td style="text-align:center;"><code>chkconfig foo off</code></td><td style="text-align:center;"><code>systemctl disable httpd</code></td><td style="text-align:center;">开机不自动启动</td></tr><tr><td style="text-align:center;"><code>chkconfig foo</code></td><td style="text-align:center;"><code>systemctl is-enabled httpd</code></td><td style="text-align:center;">查看特定服务是否为开机自启动</td></tr><tr><td style="text-align:center;"><code>chkconfig --list</code></td><td style="text-align:center;"><code>systemctl list-unit-files-type=httpd</code></td><td style="text-align:center;">查看各个级别下服务的启动与禁用情况</td></tr></tbody></table>',7),n=[r];function o(s,a){return e(),d("div",null,n)}const g=t(l,[["render",o],["__file","system_service.html.vue"]]);export{g as default};
