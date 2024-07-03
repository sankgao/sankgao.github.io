const t=JSON.parse(`{"key":"v-3e936868","path":"/devops/gerrit/problems/no_admin_account.html","title":"没有管理员账号","lang":"zh-CN","frontmatter":{"title":"没有管理员账号","icon":"problem","date":"2024-03-24T00:00:00.000Z","category":["DevOps","问题"],"tag":["Gerrit"],"description":"问题 没有管理员账号。 原因 不小心删除唯一的管理员账号；时间太久忘记管理员账号密码。 解决方法 停止 Gerrit 服务： 使用 git clone 命令克隆 Gerrit 的 All-User.git 项目，从裸仓库克隆出一个工作仓库出来： 从 All-Users/groups 中得到 Administrators 群组的 UUID： 使用 git...","head":[["meta",{"property":"og:url","content":"https://sankgao.github.io/devops/gerrit/problems/no_admin_account.html"}],["meta",{"property":"og:site_name","content":"Sank's blog"}],["meta",{"property":"og:title","content":"没有管理员账号"}],["meta",{"property":"og:description","content":"问题 没有管理员账号。 原因 不小心删除唯一的管理员账号；时间太久忘记管理员账号密码。 解决方法 停止 Gerrit 服务： 使用 git clone 命令克隆 Gerrit 的 All-User.git 项目，从裸仓库克隆出一个工作仓库出来： 从 All-Users/groups 中得到 Administrators 群组的 UUID： 使用 git..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-03T03:05:38.000Z"}],["meta",{"property":"article:author","content":"Sankgao"}],["meta",{"property":"article:tag","content":"Gerrit"}],["meta",{"property":"article:published_time","content":"2024-03-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-03T03:05:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"没有管理员账号\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-03T03:05:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Sankgao\\",\\"url\\":\\"https://sankgao.github.io\\"}]}"]]},"headers":[{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"原因","slug":"原因","link":"#原因","children":[]},{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}],"git":{"createdTime":1719975938000,"updatedTime":1719975938000,"contributors":[{"name":"Sank Gao","email":"sankgao@163.com","commits":1}]},"readingTime":{"minutes":1.52,"words":455},"filePathRelative":"devops/gerrit/problems/no_admin_account.md","localizedDate":"2024年3月24日","excerpt":"","autoDesc":true}`);export{t as data};
