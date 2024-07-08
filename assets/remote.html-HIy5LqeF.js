import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,b as a,e,d as n,w as i,f as t}from"./app-5tldNxZo.js";const r={},p=t(`<p>为了能在任意 Git 项目上协作，您需要知道如何管理自己的远程仓库。远程仓库是指托管在因特网或其他网络中的您的项目的版本库，远程仓库也可以在您的本地主机上。</p><p>您可以有好几个远程仓库，通常有些仓库对您只读，有些则可以读写。与他人协作涉及管理远程仓库以及根据需要推送或拉取数据。管理远程仓库包括了解如何添加远程仓库、移除无效的远程仓库、管理不同的远程分支并定义它们是否被跟踪等等。</p><h2 id="添加远程仓库" tabindex="-1"><a class="header-anchor" href="#添加远程仓库" aria-hidden="true">#</a> 添加远程仓库</h2><p>如果在本地初始化一个 Git 仓库，需要将本地的 Git 仓库与远程仓库进行关联，这样您本地仓库和远程仓库就可以实现同步，又可以让其他人协作管理此仓库。可以使用 <code>git remote add &lt;ailas&gt; &lt;repo&gt;</code> 命令。</p><p>一个远程仓库通常只是一个裸仓库（bare repository）——即一个没有当前工作目录的仓库。因为该仓库仅仅作为合作媒介，不需要从磁盘检查快照；存放的只有 Git 的资料。简单的说，裸仓库就是您工程目录内的 <code>.git</code> 子目录内容，不包含其它资料。</p><p>例如：添加一个别名为 <code>origin</code> 的远程仓库，并指向 <code>git_tutorials.git</code> 仓库。</p><h3 id="添加本地远程仓库" tabindex="-1"><a class="header-anchor" href="#添加本地远程仓库" aria-hidden="true">#</a> 添加本地远程仓库</h3><p>首先在本地创建一个裸仓库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> ~/projects/git_tutorials.git
<span class="token builtin class-name">cd</span> ./projects/git_tutorials.git
<span class="token function">git</span> init <span class="token parameter variable">--bare</span>

Initialized empty Git repository <span class="token keyword">in</span> /home/sankgao/projects/test.git/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git init</code> 默认分支名是 <code>master</code>，修改分支名为 <code>main</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-m</span> main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将裸仓库配置为本地的远程仓库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ./projects/git_tutorials
<span class="token function">git</span> remote <span class="token function">add</span> origin ~/projects/git_tutorials.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加-gitlab-远程仓库" tabindex="-1"><a class="header-anchor" href="#添加-gitlab-远程仓库" aria-hidden="true">#</a> 添加 GitLab 远程仓库</h3><p>在您 GitLab 仓库中创建一个名为 <code>git_tutorials</code> 的仓库，然后为本地项目添加 GitLab 远程仓库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ./projects/git_tutorials
<span class="token function">git</span> remote <span class="token function">add</span> origin ssh://git@10.1.1.10/tests/git_tutorials.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加-github-远程仓库" tabindex="-1"><a class="header-anchor" href="#添加-github-远程仓库" aria-hidden="true">#</a> 添加 GitHub 远程仓库</h3><p>在您 GitHub 仓库中创建一个名为 <code>git_tutorials</code> 的仓库，然后为本地项目添加 GitHub 远程仓库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ./projects/git_tutorials
<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:sankgao/git_tutorials.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看远程仓库" tabindex="-1"><a class="header-anchor" href="#查看远程仓库" aria-hidden="true">#</a> 查看远程仓库</h2>`,20),u=a("code",null,"origin",-1),g=t(`<p>例如：查看刚添加的 <code>git_tutorials.git</code> 远程仓库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote

origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定 <code>-v</code> 选项，会显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL。</p><p>例如：<code>git_tutorials.git</code> 是本地仓库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span>

origin  /home/sankgao/projects/git_tutorials.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin  /home/sankgao/projects/git_tutorials.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：<code>git_tutorials.git</code> 是 GitLab 仓库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span>

origin  ssh://git@10.1.1.10/tests/git_tutorials.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin  ssh://git@10.1.1.10/tests/git_tutorials.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：<code>git_tutorials.git</code> 是 GitHub 仓库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span>

origin  https://github.com/sankgao/git_tutorials.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin  https://github.com/sankgao/git_tutorials.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="从远程仓库中抓取与拉取" tabindex="-1"><a class="header-anchor" href="#从远程仓库中抓取与拉取" aria-hidden="true">#</a> 从远程仓库中抓取与拉取</h2>`,10),m=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> fetch origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令会访问远程仓库，从中拉取所有您还没有的数据。执行完成后，您将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看。</p><p>如果您使用 <code>clone</code> 命令克隆了一个仓库，命令会自动将其添加为远程仓库并默认以 <code>origin</code> 为简写。所以，<code>git fetch origin</code> 会抓取克隆（或上一次抓取）后新推送的所有工作。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>git fetch</code> 命令只会将数据下载到您的本地仓库——它并不会自动合并或修改您当前的工作。当准备好时您必须手动将其合并入您的工作。</p></div>`,4),h=a("code",null,"main",-1),v=a("code",null,"main",-1),b=a("code",null,"git pull",-1),_=t(`<h2 id="推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#推送到远程仓库" aria-hidden="true">#</a> 推送到远程仓库</h2><p>当您想分享您的项目时，可以使用 <code>git push &lt;remote&gt; &lt;branch&gt;</code> 将其推送到上游。当您想要将 <code>main</code> 分支推送到 <code>origin</code> 服务器时（再次说明，克隆时通常会自动帮您设置好那两个名字），那么运行这个命令就可以将您所做的备份到服务器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只有当您有所克隆服务器的写入权限，并且之前没有人推送过时，这条命令才能生效。当您和其他人在同一时间克隆，他们先推送到上游然后您再推送到上游，您的推送就会毫无疑问地被拒绝。您必须先抓取他们的工作并将其合并进您的工作后才能推送。</p><h2 id="重命名远程仓库" tabindex="-1"><a class="header-anchor" href="#重命名远程仓库" aria-hidden="true">#</a> 重命名远程仓库</h2><p>使用 <code>git remote rename</code> 命令，来修改一个远程仓库的简写名。</p><p>例如：将 <code>origin</code> 重命名为 <code>git_tutorials</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">rename</span> origin git_tutorials

Renaming remote references: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">4</span>/4<span class="token punctuation">)</span>, done.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看远程仓库别名：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote

git_tutorials
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这样会修改您所有远程跟踪的分支名字。那些过去引用 <code>origin/main</code> 的现在会引用 <code>git_tutorials/main</code>。</p></div><h2 id="删除远程仓库" tabindex="-1"><a class="header-anchor" href="#删除远程仓库" aria-hidden="true">#</a> 删除远程仓库</h2><p>如果因为一些原因想要移除一个远程仓库，您已经从服务器上搬走了或不再想使用某一个特定的镜像了，又或者某一个贡献者不再贡献了，可以使用 <code>git remote remove</code> 或 <code>git remote rm</code> 命令。</p><p>例如：删除 <code>git_tutorials</code> 远程仓库，并查看远程仓库地址。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote remove git_tutorials
<span class="token function">git</span> remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>一旦您使用这种方式删除了一个远程仓库，那么所有和这个远程仓库相关的远程跟踪分支以及配置信息也会一起被删除。</p></div>`,16);function k(f,x){const s=o("RouterLink");return c(),l("div",null,[p,a("p",null,[e("如果想查看您已经配置的远程仓库服务器，可以运行 "),n(s,{to:"/computers/commands/git/git_remote.html"},{default:i(()=>[e("git remote")]),_:1}),e(" 命令，它会列出您指定的每一个远程服务器的简写。如果您已经克隆了自己的仓库，那么至少应该能看到 "),u,e("，这是 Git 给您克隆的仓库服务器的默认名字。")]),g,a("p",null,[e("使用 "),n(s,{to:"/computers/commands/git/git_fetch.html"},{default:i(()=>[e("git fetch")]),_:1}),e(" 命令，从远程仓库中获得数据。")]),m,a("p",null,[e("如果您的当前分支设置了跟踪远程分支，那么可以用 "),n(s,{to:"/computers/commands/git/git_pull.html"},{default:i(()=>[e("git pull")]),_:1}),e(" 命令来自动抓取后合并该远程分支到当前分支，这或许是个更加简单舒服的工作流程。默认情况下，"),n(s,{to:"/computers/commands/git/git_clone.html"},{default:i(()=>[e("git clone")]),_:1}),e(" 命令会自动设置本地 "),h,e(" 分支跟踪克隆远程仓库的 "),v,e(" 分支（或其它名字的默认分支）。运行 "),b,e(" 通常会从最初克隆的服务器上抓取数据并自动尝试合并到当前所在的分支。")]),_])}const L=d(r,[["render",k],["__file","remote.html.vue"]]);export{L as default};