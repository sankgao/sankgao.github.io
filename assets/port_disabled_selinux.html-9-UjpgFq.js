const e=JSON.parse(`{"key":"v-32d8ffb9","path":"/devops/gerrit/problem/port_disabled_selinux.html","title":"端口被 SELinux 禁用","lang":"zh-CN","frontmatter":{"title":"端口被 SELinux 禁用","icon":"problem","date":"2024-03-19T00:00:00.000Z","category":["DevOps","问题"],"tag":["Gerrit"],"description":"问题 报错日志如下： 原因 SELinux 默认是启动的，SELinux 影响端口的开放。SELinux 只使用标准的端口，非标准的端口被 SELinux 禁用。 解决方法 端口小于 1024。例如：端口为 80。 Nginx 用 1024 以下端口启动时需要 root 用户权限，所以使用 root 启动 Nginx 服务即可。 此次端口为 8081 ...","head":[["meta",{"property":"og:url","content":"https://sankgao.github.io/devops/gerrit/problem/port_disabled_selinux.html"}],["meta",{"property":"og:site_name","content":"Sank's blog"}],["meta",{"property":"og:title","content":"端口被 SELinux 禁用"}],["meta",{"property":"og:description","content":"问题 报错日志如下： 原因 SELinux 默认是启动的，SELinux 影响端口的开放。SELinux 只使用标准的端口，非标准的端口被 SELinux 禁用。 解决方法 端口小于 1024。例如：端口为 80。 Nginx 用 1024 以下端口启动时需要 root 用户权限，所以使用 root 启动 Nginx 服务即可。 此次端口为 8081 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-18T07:31:25.000Z"}],["meta",{"property":"article:author","content":"Sankgao"}],["meta",{"property":"article:tag","content":"Gerrit"}],["meta",{"property":"article:published_time","content":"2024-03-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-18T07:31:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"端口被 SELinux 禁用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-18T07:31:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Sankgao\\",\\"url\\":\\"https://sankgao.github.io\\"}]}"]]},"headers":[{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"原因","slug":"原因","link":"#原因","children":[]},{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[{"level":3,"title":"解决方法 1","slug":"解决方法-1","link":"#解决方法-1","children":[]},{"level":3,"title":"解决方法 2","slug":"解决方法-2","link":"#解决方法-2","children":[]}]}],"git":{"createdTime":1710843507000,"updatedTime":1713425485000,"contributors":[{"name":"Sankgao","email":"sankgao@163.com","commits":2}]},"readingTime":{"minutes":2.19,"words":657},"filePathRelative":"devops/gerrit/problem/port_disabled_selinux.md","localizedDate":"2024年3月19日","excerpt":"","autoDesc":true}`);export{e as data};