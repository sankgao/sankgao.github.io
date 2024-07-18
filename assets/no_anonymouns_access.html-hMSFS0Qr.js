import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,f as e}from"./app-v7mIjy02.js";const t="/assets/allow_anonymous-nCQ0r6rH.jpg",l={},o=e(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>报错日志如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Downloading http://localhost:8081/repository/gradle-group/packages/gradle/6.5/gradle-6.5-all.zip

Exception <span class="token keyword">in</span> thread <span class="token string">&quot;main&quot;</span> java.io.IOException: Server returned HTTP response code: <span class="token number">401</span> <span class="token keyword">for</span> 
    URL: http://localhost:8081/repository/gradle-group/packages/gradle/6.5/gradle-6.5-all.zip
    at sun.net.www.protocol.http.HttpURLConnection.getInputStream0<span class="token punctuation">(</span>HttpURLConnection.java:1839<span class="token punctuation">)</span>
    at sun.net.www.protocol.http.HttpURLConnection.getInputStream<span class="token punctuation">(</span>HttpURLConnection.java:1440<span class="token punctuation">)</span>
    at org.gradle.wrapper.Download.downloadInternal<span class="token punctuation">(</span>Download.java:66<span class="token punctuation">)</span>
    at org.gradle.wrapper.Download.download<span class="token punctuation">(</span>Download.java:51<span class="token punctuation">)</span>
    at org.gradle.wrapper.Install<span class="token variable">$1</span>.call<span class="token punctuation">(</span>Install.java:62<span class="token punctuation">)</span>
    at org.gradle.wrapper.Install<span class="token variable">$1</span>.call<span class="token punctuation">(</span>Install.java:48<span class="token punctuation">)</span>
    at org.gradle.wrapper.ExclusiveFileAccessManager.access<span class="token punctuation">(</span>ExclusiveFileAccessManager.java:69<span class="token punctuation">)</span>
    at org.gradle.wrapper.Install.createDist<span class="token punctuation">(</span>Install.java:48<span class="token punctuation">)</span>
    at org.gradle.wrapper.WrapperExecutor.execute<span class="token punctuation">(</span>WrapperExecutor.java:107<span class="token punctuation">)</span>
    at org.gradle.wrapper.GradleWrapperMain.main<span class="token punctuation">(</span>GradleWrapperMain.java:61<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FAILURE: Build failed with an exception.

* What went wrong:
A problem occurred configuring root project <span class="token string">&#39;tcsj&#39;</span><span class="token builtin class-name">.</span>
<span class="token operator">&gt;</span> Could not resolve all artifacts <span class="token keyword">for</span> configuration <span class="token string">&#39;:classpath&#39;</span><span class="token builtin class-name">.</span>
   <span class="token operator">&gt;</span> Could not resolve com.android.tools.build:gradle:4.1.1.
     Required by:
         project <span class="token builtin class-name">:</span>
      <span class="token operator">&gt;</span> Could not resolve com.android.tools.build:gradle:4.1.1.
         <span class="token operator">&gt;</span> Could not get resource <span class="token string">&#39;http://localhost:8081/repository/gradle-group/com/android/tools/build/gradle/4.1.1/gradle-4.1.1.pom&#39;</span><span class="token builtin class-name">.</span>
            <span class="token operator">&gt;</span> Could not GET <span class="token string">&#39;http://localhost:8081/repository/gradle-group/com/android/tools/build/gradle/4.1.1/gradle-4.1.1.pom&#39;</span><span class="token builtin class-name">.</span> 
            Received status code <span class="token number">401</span> from server: Unauthorized
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><p>Nexus 存储库拒绝匿名用户访问。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><h3 id="解决方法1" tabindex="-1"><a class="header-anchor" href="#解决方法1" aria-hidden="true">#</a> 解决方法1</h3><p>配置允许匿名用户访问服务器。</p><p>在主页点击 <em>⚙（管理） -&gt; Security-&gt; Anonymous Access</em>。</p><figure><img src="`+t+`" alt="允许匿名用户访问" tabindex="0" loading="lazy"><figcaption>允许匿名用户访问</figcaption></figure><h3 id="解决方法2" tabindex="-1"><a class="header-anchor" href="#解决方法2" aria-hidden="true">#</a> 解决方法2</h3><p>在 <code>distributionUrl</code> 中指定 HTTP 基本身份验证凭据，<code>user:passwd</code> 为 Nexus 服务的访问用户和密码。</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">distributionUrl</span><span class="token punctuation">=</span><span class="token value attr-value">http\\://user:passwd@localhost:8081/repository/gradle-group/packages/gradle/6.5/gradle-6.5-all.zip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或在 <code>build.gradle</code> 中指定 Nexus 服务的访问用户和密码。</p><div class="language-gradle line-numbers-mode" data-ext="gradle"><pre class="language-gradle"><code><span class="token keyword">repositories</span> <span class="token punctuation">{</span>
    maven <span class="token punctuation">{</span>    
        credentials <span class="token punctuation">{</span>
            username <span class="token interpolation-string"><span class="token string">&quot;user&quot;</span></span>
            password <span class="token interpolation-string"><span class="token string">&quot;passwd&quot;</span></span>
        <span class="token punctuation">}</span>
        url <span class="token interpolation-string"><span class="token string">&quot;http://localhost:8081/repository/gradle-group/&quot;</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),i=[o];function r(p,c){return n(),s("div",null,i)}const v=a(l,[["render",r],["__file","no_anonymouns_access.html.vue"]]);export{v as default};
