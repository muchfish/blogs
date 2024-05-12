const n=JSON.parse('{"key":"v-c679f1e0","path":"/Java%E9%9D%A2%E8%AF%95/Java%E5%9F%BA%E7%A1%80/%E6%B3%A8%E8%A7%A3.html","title":"10.注解","lang":"zh-CN","frontmatter":{"title":"10.注解","isTimeLine":true,"date":"2024-05-12T00:00:00.000Z","description":"说一下你对注解的理解？ Java注解本质上是一个标记 注解可以标记在类上、方法上、属性上等，标记自身也可以设置一些值 有了标记之后，我们就可以在编译或者运行阶段去识别这些标记，然后搞一些事情，这就是注解的用处 AOP，使用注解作为切点就是运行期注解的应用 lombok，就是注解在编译期的运行 注解生命周期 RetentionPolicy.SOURCE 给编译器用的，不会写入 class 文件 @Target(ElementType.METHOD) @Retention(RetentionPolicy.SOURCE) public @interface Override { } RetentionPolicy.CLASS 会写入 class 文件，在类加载阶段丢弃，也就是运行的时候就没这个信息了 没找到 RetentionPolicy.RUNTIME 会写入 class 文件，永久保存，可以通过反射获取注解信息 @Target({ElementType.CONSTRUCTOR, ElementType.METHOD, ElementType.PARAMETER, ElementType.FIELD, ElementType.ANNOTATION_TYPE}) @Retention(RetentionPolicy.RUNTIME) @Documented public @interface Autowired { \\t/** \\t * Declares whether the annotated dependency is required. \\t * &lt;p&gt;Defaults to {@code true}. \\t */ \\tboolean required() default true; }","head":[["meta",{"property":"og:url","content":"https://muchfish.github.io/blogs/blogs/Java%E9%9D%A2%E8%AF%95/Java%E5%9F%BA%E7%A1%80/%E6%B3%A8%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"鱼塘"}],["meta",{"property":"og:title","content":"10.注解"}],["meta",{"property":"og:description","content":"说一下你对注解的理解？ Java注解本质上是一个标记 注解可以标记在类上、方法上、属性上等，标记自身也可以设置一些值 有了标记之后，我们就可以在编译或者运行阶段去识别这些标记，然后搞一些事情，这就是注解的用处 AOP，使用注解作为切点就是运行期注解的应用 lombok，就是注解在编译期的运行 注解生命周期 RetentionPolicy.SOURCE 给编译器用的，不会写入 class 文件 @Target(ElementType.METHOD) @Retention(RetentionPolicy.SOURCE) public @interface Override { } RetentionPolicy.CLASS 会写入 class 文件，在类加载阶段丢弃，也就是运行的时候就没这个信息了 没找到 RetentionPolicy.RUNTIME 会写入 class 文件，永久保存，可以通过反射获取注解信息 @Target({ElementType.CONSTRUCTOR, ElementType.METHOD, ElementType.PARAMETER, ElementType.FIELD, ElementType.ANNOTATION_TYPE}) @Retention(RetentionPolicy.RUNTIME) @Documented public @interface Autowired { \\t/** \\t * Declares whether the annotated dependency is required. \\t * &lt;p&gt;Defaults to {@code true}. \\t */ \\tboolean required() default true; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-12T13:03:49.000Z"}],["meta",{"property":"article:author","content":"摸鱼散人"}],["meta",{"property":"article:published_time","content":"2024-05-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-12T13:03:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10.注解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-12T13:03:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"摸鱼散人\\",\\"url\\":\\"https://github.com/muchfish\\"}]}"]]},"headers":[{"level":2,"title":"说一下你对注解的理解？","slug":"说一下你对注解的理解","link":"#说一下你对注解的理解","children":[]}],"git":{"createdTime":1715519029000,"updatedTime":1715519029000,"contributors":[{"name":"daiwencheng","email":"1319105206@qq.com","commits":1}]},"readingTime":{"minutes":0.83,"words":249},"filePathRelative":"Java面试/Java基础/注解.md","localizedDate":"2024年5月12日","excerpt":"<h2> 说一下你对注解的理解？</h2>\\n<ul>\\n<li>\\n<p>Java注解本质上是一个标记</p>\\n</li>\\n<li>\\n<p>注解可以标记在类上、方法上、属性上等，标记自身也可以设置一些值</p>\\n</li>\\n<li>\\n<p>有了标记之后，我们就可以在编译或者运行阶段去识别这些标记，然后搞一些事情，这就是注解的用处</p>\\n<ul>\\n<li>AOP，使用注解作为切点就是运行期注解的应用</li>\\n<li>lombok，就是注解在编译期的运行</li>\\n</ul>\\n</li>\\n<li>\\n<p>注解生命周期</p>\\n<ul>\\n<li>\\n<p>RetentionPolicy.SOURCE</p>\\n<ul>\\n<li>\\n<p>给编译器用的，不会写入 class 文件</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@Target</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ElementType</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">METHOD</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token annotation punctuation\\">@Retention</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">RetentionPolicy</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">SOURCE</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token annotation punctuation\\">@interface</span> <span class=\\"token class-name\\">Override</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>RetentionPolicy.CLASS</p>\\n<ul>\\n<li>\\n<p>会写入 class 文件，在类加载阶段丢弃，也就是运行的时候就没这个信息了</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code>没找到\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>RetentionPolicy.RUNTIME</p>\\n<ul>\\n<li>\\n<p>会写入 class 文件，永久保存，可以通过反射获取注解信息</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@Target</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span><span class=\\"token class-name\\">ElementType</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">CONSTRUCTOR</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">ElementType</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">METHOD</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">ElementType</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">PARAMETER</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">ElementType</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">FIELD</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">ElementType</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">ANNOTATION_TYPE</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token annotation punctuation\\">@Retention</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">RetentionPolicy</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">RUNTIME</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token annotation punctuation\\">@Documented</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token annotation punctuation\\">@interface</span> <span class=\\"token class-name\\">Autowired</span> <span class=\\"token punctuation\\">{</span>\\n\\n\\t<span class=\\"token doc-comment comment\\">/**\\n\\t * Declares whether the annotated dependency is required.\\n\\t * <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>Defaults to <span class=\\"token punctuation\\">{</span><span class=\\"token keyword\\">@code</span> <span class=\\"token code-section\\"><span class=\\"token code language-java\\"><span class=\\"token boolean\\">true</span></span></span><span class=\\"token punctuation\\">}</span>.\\n\\t */</span>\\n\\t<span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">required</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">default</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{n as data};
