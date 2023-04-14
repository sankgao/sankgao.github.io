import{_ as s,W as n,X as a,Y as e}from"./framework-6ce913bb.js";const i={},l=e(`<h2 id="linux-系统重置-root-密码" tabindex="-1"><a class="header-anchor" href="#linux-系统重置-root-密码" aria-hidden="true">#</a> Linux 系统重置 root 密码</h2><ol><li><p>重启 Linux 系统主机并出现引导界面时，按下键盘上的 “e” 键进入内核编辑界面</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Red Hat Enterprise Linux <span class="token punctuation">(</span><span class="token number">4.18</span>.0-80.el8.x86_64<span class="token punctuation">)</span> <span class="token number">8.0</span> <span class="token punctuation">(</span>Ootpa<span class="token punctuation">)</span>
Red Hat Enterprise Linux <span class="token punctuation">(</span><span class="token number">0</span>-rescue-2307b5f70ab0473fa42eea2fe914eb95<span class="token punctuation">)</span> <span class="token number">8.0</span>




User the ↑ and ↓ keys to change the selection.
Press <span class="token string">&#39;e&#39;</span> to edit the selected item, or <span class="token string">&#39;c&#39;</span> <span class="token keyword">for</span> a <span class="token builtin class-name">command</span> prompt.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 Linux 参数这行的最后面追加 “rd.break” 参数，然后按下 “Ctrl + x” 组合键来运行修改过的内核程序</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>load_video
<span class="token builtin class-name">set</span> <span class="token assign-left variable">gfx_payload</span><span class="token operator">=</span>keep
insmod gzio
linux <span class="token punctuation">(</span><span class="token variable">$root</span><span class="token punctuation">)</span>/vmlinuz-4.18.0-80.el8.x86_64 <span class="token assign-left variable">root</span><span class="token operator">=</span>/dev/mapper/rhel-root ro resum<span class="token punctuation">\\</span>
<span class="token assign-left variable">e</span><span class="token operator">=</span>/dev/mapper/rhel-swap <span class="token assign-left variable">rd.lvm.lv</span><span class="token operator">=</span>rhel/root <span class="token assign-left variable">rd.lvm.lv</span><span class="token operator">=</span>rhel/swap rd.break
initrd <span class="token punctuation">(</span><span class="token variable">$root</span><span class="token punctuation">)</span>/initramfs-4.18.0-80.el8.x86_64.img <span class="token variable">$tuned_initrd</span>




Press Ctrl-x to start, Ctrl-c <span class="token keyword">for</span> a <span class="token builtin class-name">command</span> prompt or Escape to
discard edits and <span class="token builtin class-name">return</span> to the menu. Pressing Tab lists 
possible completions.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>大约 30 秒后，进入到系统的紧急求援模式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>switch_root:/<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>依次输入以下命令，再连续按下两次 “Ctrl + d” 组合键来退出并重启，等待系统再次重启完毕后便可以使用新密码来登录 Linux 系统</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>switch_root:/<span class="token comment"># mount -o remount,rw /sysroot</span>
switch_root:/<span class="token comment"># chroot /sysroot</span>
sh-4.4<span class="token comment"># passwd</span>
sh-4.4<span class="token comment"># touch /.autorelabel</span>
sh-4.4<span class="token comment"># exit</span>
switch_root:/<span class="token comment"># logout</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),t=[l];function o(r,c){return n(),a("div",null,t)}const d=s(i,[["render",o],["__file","reset_root_password.html.vue"]]);export{d as default};
