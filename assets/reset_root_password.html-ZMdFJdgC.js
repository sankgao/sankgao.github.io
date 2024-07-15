import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,f as e}from"./app-pF54nEc0.js";const o={},t=e(`<h2 id="linux-系统重置-root-密码" tabindex="-1"><a class="header-anchor" href="#linux-系统重置-root-密码" aria-hidden="true">#</a> Linux 系统重置 root 密码</h2><ol><li><p>重启 Linux 系统主机并出现引导界面时，按下键盘上的 <code>e</code> 键进入内核编辑界面</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Red Hat Enterprise Linux <span class="token punctuation">(</span><span class="token number">4.18</span>.0-80.el8.x86_64<span class="token punctuation">)</span> <span class="token number">8.0</span> <span class="token punctuation">(</span>Ootpa<span class="token punctuation">)</span>
Red Hat Enterprise Linux <span class="token punctuation">(</span><span class="token number">0</span>-rescue-2307b5f70ab0473fa42eea2fe914eb95<span class="token punctuation">)</span> <span class="token number">8.0</span>




User the ↑ and ↓ keys to change the selection.
Press <span class="token string">&#39;e&#39;</span> to edit the selected item, or <span class="token string">&#39;c&#39;</span> <span class="token keyword">for</span> a <span class="token builtin class-name">command</span> prompt.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 <code>Linux</code> 参数这行的最后面追加 <code>rd.break</code> 参数，然后按下 <code>Ctrl + x</code> 组合键来运行修改过的内核程序</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>load_video
<span class="token builtin class-name">set</span> <span class="token assign-left variable">gfx_payload</span><span class="token operator">=</span>keep
insmod gzio
linux <span class="token punctuation">(</span><span class="token variable">$root</span><span class="token punctuation">)</span>/vmlinuz-4.18.0-80.el8.x86_64 <span class="token assign-left variable">root</span><span class="token operator">=</span>/dev/mapper/rhel-root ro resum<span class="token punctuation">\\</span>
<span class="token assign-left variable">e</span><span class="token operator">=</span>/dev/mapper/rhel-swap <span class="token assign-left variable">rd.lvm.lv</span><span class="token operator">=</span>rhel/root <span class="token assign-left variable">rd.lvm.lv</span><span class="token operator">=</span>rhel/swap rd.break
initrd <span class="token punctuation">(</span><span class="token variable">$root</span><span class="token punctuation">)</span>/initramfs-4.18.0-80.el8.x86_64.img <span class="token variable">$tuned_initrd</span>




Press Ctrl-x to start, Ctrl-c <span class="token keyword">for</span> a <span class="token builtin class-name">command</span> prompt or Escape to
discard edits and <span class="token builtin class-name">return</span> to the menu. Pressing Tab lists 
possible completions.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>大约 30 秒后，进入到系统的紧急求援模式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>switch_root:/<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>依次输入以下命令，再连续按下两次 <code>Ctrl + d</code> 组合键来退出并重启，等待系统再次重启完毕后便可以使用新密码来登录 Linux 系统</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>switch_root:/<span class="token comment"># mount -o remount,rw /sysroot</span>
switch_root:/<span class="token comment"># chroot /sysroot</span>
sh-4.4<span class="token comment"># passwd</span>
sh-4.4<span class="token comment"># touch /.autorelabel</span>
sh-4.4<span class="token comment"># exit</span>
switch_root:/<span class="token comment"># logout</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>重新挂载已经挂载了的文件系统（以读写权限挂载），需要注意的是，挂载点必须是一个已经存在的目录，这个目录可以不为空</p></div><p><strong>mount -o remount,rw /sysroot</strong>：重新以可读可写的方式挂载 <code>/sysroot</code><strong>chroot /sysroot</strong>：改变根目录为 <code>/sysroot</code><strong>passwd</strong>：按提示修改 root 密码 <strong>touch /.autorelabel</strong>：查看当前目录下是否有 <strong>.autorelabel</strong> 文件，如果没有必须创建该文件，否则将无法正常启动系统 <strong>exit</strong>：退出 <strong>logout</strong>：重启系统</p></li></ol>`,2),i=[t];function l(r,c){return n(),a("div",null,i)}const u=s(o,[["render",l],["__file","reset_root_password.html.vue"]]);export{u as default};
