import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as d,a as n,b as s,d as a,f as i}from"./app-10ea249b.js";const c="/blogs/assets/Snipaste_2023-12-07_12-03-54-16395ea9.png",r="/blogs/assets/Snipaste_2023-12-07_12-24-48-06514382.png",p="/blogs/assets/Snipaste_2023-12-07_12-32-27-029fb071.png",u="/blogs/assets/Snipaste_2023-12-07_13-00-29-6c0aa6dd.png",v="/blogs/assets/Snipaste_2023-12-07_13-02-12-4f00d552.png",m="/blogs/assets/Snipaste_2023-12-07_13-04-35-8f226e8b.png",h={},b=n("h2",{id:"三分钟搭建一个博客",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#三分钟搭建一个博客","aria-hidden":"true"},"#"),s(" 三分钟搭建一个博客")],-1),g=n("h3",{id:"准备运行环境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#准备运行环境","aria-hidden":"true"},"#"),s(" 准备运行环境")],-1),k={href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/qq407995680/article/details/131593693",target:"_blank",rel:"noopener noreferrer"},_=i(`<h3 id="创建项目模板" tabindex="-1"><a class="header-anchor" href="#创建项目模板" aria-hidden="true">#</a> 创建项目模板</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> create vuepress-theme-hope my-docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建过程" tabindex="-1"><a class="header-anchor" href="#创建过程" aria-hidden="true">#</a> 创建过程</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PowerShell <span class="token number">7.4</span>.0
PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>daiwencheng<span class="token punctuation">\\</span>Documents<span class="token punctuation">\\</span>BaiduSyncdisk<span class="token punctuation">\\</span>ob<span class="token punctuation">\\</span>ob<span class="token punctuation">\\</span>blogs<span class="token operator">&gt;</span> <span class="token function">pnpm</span> create vuepress-theme-hope my-docs
<span class="token punctuation">..</span>./Local/pnpm/store/v3/tmp/dlx-7428     <span class="token operator">|</span>  +83 ++++++++
<span class="token punctuation">..</span>./Local/pnpm/store/v3/tmp/dlx-7428     <span class="token operator">|</span> Progress: resolved <span class="token number">83</span>, reused <span class="token number">61</span>, downloaded <span class="token number">22</span>, added <span class="token number">83</span>, <span class="token keyword">done</span>
? Select a language to display / 选择显示语言 简体中文
? 选择包管理器 <span class="token function">pnpm</span>
生成 package.json<span class="token punctuation">..</span>.
? 设置应用名称 vuepress-theme-hope-template
? 设置应用版本号 <span class="token number">2.0</span>.0
? 设置应用描述 A project of vuepress-theme-hope
? 设置协议 MIT
? 项目需要用到多语言么? No
? 是否需要一个自动部署文档到 GitHub Pages 的工作流？ Yes
? 你想要创建什么类型的项目？ blog
生成模板<span class="token punctuation">..</span>.
? 是否初始化 Git 仓库? Yes
安装依赖<span class="token punctuation">..</span>.
这可能需要数分钟，请耐心等待.
我们无法正确输出子进程的进度条，所以进程可能会看似未响应
 WARN  <span class="token number">2</span> deprecated subdependencies found: rollup-plugin-terser@7.0.2, sourcemap-codec@1.4.8
Packages: +606
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved <span class="token number">639</span>, reused <span class="token number">409</span>, downloaded <span class="token number">197</span>, added <span class="token number">606</span>, <span class="token keyword">done</span>
node_modules/.pnpm/esbuild@0.19.8/node_modules/esbuild: Running postinstall script, <span class="token keyword">done</span> <span class="token keyword">in</span> 825ms

devDependencies:
+ @vuepress/client <span class="token number">2.0</span>.0-rc.0
+ vue <span class="token number">3.3</span>.10
+ vuepress <span class="token number">2.0</span>.0-rc.0
+ vuepress-theme-hope <span class="token number">2.0</span>.0-rc.2

The dependency was already listed <span class="token keyword">in</span> devDependencies.
If you want to <span class="token function">make</span> it a prod dependency, <span class="token keyword">then</span> move it manually.

Done <span class="token keyword">in</span> <span class="token number">25</span>.3s
模板已成功生成<span class="token operator">!</span>
? 是否想要现在启动 Demo 查看? Yes
启动开发服务器<span class="token punctuation">..</span>.
启动成功后，请在浏览器输入给出的开发服务器地址<span class="token punctuation">(</span>默认为 <span class="token string">&#39;localhost:8080&#39;</span><span class="token punctuation">)</span>

<span class="token operator">&gt;</span> vuepress-theme-hope-template@2.0.0 docs:dev C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>daiwencheng<span class="token punctuation">\\</span>Documents<span class="token punctuation">\\</span>BaiduSyncdisk<span class="token punctuation">\\</span>ob<span class="token punctuation">\\</span>ob<span class="token punctuation">\\</span>blogs<span class="token punctuation">\\</span>my-docs
<span class="token operator">&gt;</span> vuepress dev src


  vite v5.0.6 dev server running at:

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://10.246.84.128:8080/


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问" tabindex="-1"><a class="header-anchor" href="#访问" aria-hidden="true">#</a> 访问</h3>`,5),y={href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"},x=i('<h3 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h3><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="项目启动命令" tabindex="-1"><a class="header-anchor" href="#项目启动命令" aria-hidden="true">#</a> 项目启动命令</h3><ul><li>需要先进入项目目录 my-docs</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="发布到github" tabindex="-1"><a class="header-anchor" href="#发布到github" aria-hidden="true">#</a> 发布到github</h2><h3 id="修改deploy-docs-yml" tabindex="-1"><a class="header-anchor" href="#修改deploy-docs-yml" aria-hidden="true">#</a> 修改<a href="../../.github/workflows/deploy-docs.yml">deploy-docs.yml</a></h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token comment"># 确保这是你正在使用的分支名称</span>
      <span class="token punctuation">-</span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改config-ts" tabindex="-1"><a class="header-anchor" href="#修改config-ts" aria-hidden="true">#</a> 修改<a href="../.vuepress/config.ts">config.ts</a></h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    base<span class="token operator">:</span> <span class="token string">&quot;/my-docs/&quot;</span><span class="token punctuation">,</span>

    lang<span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">&quot;博客演示&quot;</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">&quot;vuepress-theme-hope 的博客演示&quot;</span><span class="token punctuation">,</span>

    theme<span class="token punctuation">,</span>

    <span class="token comment">// Enable it with pwa</span>
    <span class="token comment">// shouldPrefetch: false,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="共享项目到github" tabindex="-1"><a class="header-anchor" href="#共享项目到github" aria-hidden="true">#</a> 共享项目到GitHub</h3><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="从master新建分支gh-pages-推送新分支到github" tabindex="-1"><a class="header-anchor" href="#从master新建分支gh-pages-推送新分支到github" aria-hidden="true">#</a> 从master新建分支gh-pages,推送新分支到github</h3><h3 id="github上开源" tabindex="-1"><a class="header-anchor" href="#github上开源" aria-hidden="true">#</a> GitHub上开源</h3><ol><li>打开仓库my-docs</li><li>打开Settings</li><li>底部设置Change visibility 为change to public<br><img src="'+p+'" alt="Snipaste_2023-12-07_12-32-27.png" loading="lazy"></li></ol><h3 id="配置github-pages" tabindex="-1"><a class="header-anchor" href="#配置github-pages" aria-hidden="true">#</a> 配置Github Pages</h3><ol><li>打开仓库my-docs的Settings项,选中侧边栏pages,配置部署分支为gh-pages,点击save.<br><img src="'+u+'" alt="" loading="lazy"></li><li>在actions菜单栏中应该会触发自动发布,没有的话随便修改下master分支代码,就会触发自动发布<br><img src="'+v+'" alt="" loading="lazy"></li><li>发布完成后,此时pages页会显示访问域名,点击访问即可<br><img src="'+m+'" alt="" loading="lazy"></li></ol><h3 id="踩坑" tabindex="-1"><a class="header-anchor" href="#踩坑" aria-hidden="true">#</a> 踩坑</h3>',18),w={href:"https://github.com/muchfish/my-docs/commits/master/",target:"_blank",rel:"noopener noreferrer"};function S(q,N){const e=l("ExternalLinkIcon");return o(),d("div",null,[b,g,n("ol",null,[n("li",null,[s("安装nodejs "),n("a",k,[s("下载地址"),a(e)])]),n("li",null,[s("安装pnpm "),n("a",f,[s("参考资料"),a(e)])])]),_,n("p",null,[s("打开"),n("a",y,[s("http://localhost:8080/"),a(e)]),s(" 访问")]),x,n("p",null,[s("踩了一些坑,可以看"),n("a",w,[s("提交记录"),a(e)])])])}const C=t(h,[["render",S],["__file","2023-12-07.html.vue"]]);export{C as default};
