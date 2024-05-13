const e=JSON.parse('{"key":"v-67121a48","path":"/Java%E9%9D%A2%E8%AF%95/Java%E5%9F%BA%E7%A1%80/%E5%85%B6%E5%AE%83.html","title":"13.其它","lang":"zh-CN","frontmatter":{"title":"13.其它","isTimeLine":true,"date":"2024-05-13T00:00:00.000Z","description":"说下什么是Java的SPI机制？ Java的SPI（Service Provider Interface）机制是Java标准库提供的一种服务发现机制 它允许第三方组件在不修改源代码的情况下，通过在Classpath中提供配置文件，向应用程序注入实现了特定接口的服务提供者 SPI中的几个关键元素 服务接口（Service Interface）： 定义了服务的契约，描述了服务提供者需要实现的接口或抽象类 服务提供者（Service Provider）： 实现了服务接口的具体类，并通过配置文件等方式注册到SPI框架中 服务提供者配置文件（Service Provider Configuration File）： 是一种元数据文件，通常位于META-INF/services/目录下，文件名为服务接口的全限定名。该文件包含了服务接口的实现类的全限定名，每个实现类占据一行 服务加载器（Service Loader）： 是用于加载和实例化服务提供者的API。它在运行时查找并加载META-INF/services/目录下的配置文件，并根据配置文件中指定的实现类实例化相应的对象 SPI机制的工作原理如下 定义服务接口 首先，应用程序定义一个接口，这个接口是服务的契约，规定了需要提供的功能或扩展点 public interface HelloService { \\tvoid sayHello(); } 编写服务提供者 接着，编写服务提供者，实现服务接口，并提供了具体的功能实现 public class HelloServiceImpl implements HelloService { @Override public void sayHello() { System.out.println(\\"Hello from HelloServiceImpl!\\"); } } 编写服务提供者配置文件 每个服务提供者将自己的实现类配置到一个特定的配置文件中，该文件位于 META-INF/services/ 目录下，以接口的全限定名命名 com.example.service.HelloServiceImpl com.example.service.HelloServiceImpl2 服务加载 在应用程序运行时，Java的SPI机制会使用服务加载器加载这些配置文件，并根据文件中指定的实现类，实例化对应的服务提供者对象 ServiceLoader&lt;HelloService&gt; loader =ServiceLoader.load(HelloService.class) 服务使用 ServiceLoader&lt;HelloService&gt; loader =ServiceLoader.load(HelloService.class) for (HelloService service : loader) { \\tservice.sayHello(); } SPI机制的优势 解耦了服务的实现和调用方 应用程序可以在不修改源代码的情况下，动态地替换、扩展或定制某个功能或组件的实现 SPI机制的应用场景 数据库驱动、日志框架、插件系统等","head":[["meta",{"property":"og:url","content":"https://muchfish.github.io/blogs/blogs/Java%E9%9D%A2%E8%AF%95/Java%E5%9F%BA%E7%A1%80/%E5%85%B6%E5%AE%83.html"}],["meta",{"property":"og:site_name","content":"鱼塘"}],["meta",{"property":"og:title","content":"13.其它"}],["meta",{"property":"og:description","content":"说下什么是Java的SPI机制？ Java的SPI（Service Provider Interface）机制是Java标准库提供的一种服务发现机制 它允许第三方组件在不修改源代码的情况下，通过在Classpath中提供配置文件，向应用程序注入实现了特定接口的服务提供者 SPI中的几个关键元素 服务接口（Service Interface）： 定义了服务的契约，描述了服务提供者需要实现的接口或抽象类 服务提供者（Service Provider）： 实现了服务接口的具体类，并通过配置文件等方式注册到SPI框架中 服务提供者配置文件（Service Provider Configuration File）： 是一种元数据文件，通常位于META-INF/services/目录下，文件名为服务接口的全限定名。该文件包含了服务接口的实现类的全限定名，每个实现类占据一行 服务加载器（Service Loader）： 是用于加载和实例化服务提供者的API。它在运行时查找并加载META-INF/services/目录下的配置文件，并根据配置文件中指定的实现类实例化相应的对象 SPI机制的工作原理如下 定义服务接口 首先，应用程序定义一个接口，这个接口是服务的契约，规定了需要提供的功能或扩展点 public interface HelloService { \\tvoid sayHello(); } 编写服务提供者 接着，编写服务提供者，实现服务接口，并提供了具体的功能实现 public class HelloServiceImpl implements HelloService { @Override public void sayHello() { System.out.println(\\"Hello from HelloServiceImpl!\\"); } } 编写服务提供者配置文件 每个服务提供者将自己的实现类配置到一个特定的配置文件中，该文件位于 META-INF/services/ 目录下，以接口的全限定名命名 com.example.service.HelloServiceImpl com.example.service.HelloServiceImpl2 服务加载 在应用程序运行时，Java的SPI机制会使用服务加载器加载这些配置文件，并根据文件中指定的实现类，实例化对应的服务提供者对象 ServiceLoader&lt;HelloService&gt; loader =ServiceLoader.load(HelloService.class) 服务使用 ServiceLoader&lt;HelloService&gt; loader =ServiceLoader.load(HelloService.class) for (HelloService service : loader) { \\tservice.sayHello(); } SPI机制的优势 解耦了服务的实现和调用方 应用程序可以在不修改源代码的情况下，动态地替换、扩展或定制某个功能或组件的实现 SPI机制的应用场景 数据库驱动、日志框架、插件系统等"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-13T00:47:09.000Z"}],["meta",{"property":"article:author","content":"摸鱼散人"}],["meta",{"property":"article:published_time","content":"2024-05-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-13T00:47:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"13.其它\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-13T00:47:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"摸鱼散人\\",\\"url\\":\\"https://github.com/muchfish\\"}]}"]]},"headers":[{"level":2,"title":"说下什么是Java的SPI机制？","slug":"说下什么是java的spi机制","link":"#说下什么是java的spi机制","children":[]}],"git":{"createdTime":1715561229000,"updatedTime":1715561229000,"contributors":[{"name":"daiwencheng","email":"1319105206@qq.com","commits":1}]},"readingTime":{"minutes":2.1,"words":629},"filePathRelative":"Java面试/Java基础/其它.md","localizedDate":"2024年5月13日","excerpt":"<h2> 说下什么是Java的SPI机制？</h2>\\n<ul>\\n<li>\\n<p>Java的SPI（Service Provider Interface）机制是Java标准库提供的一种服务发现机制</p>\\n</li>\\n<li>\\n<p>它允许第三方组件在不修改源代码的情况下，通过在Classpath中提供配置文件，向应用程序注入实现了特定接口的服务提供者</p>\\n</li>\\n<li>\\n<p>SPI中的几个关键元素</p>\\n<ul>\\n<li><strong>服务接口（Service Interface）：</strong> 定义了服务的契约，描述了服务提供者需要实现的接口或抽象类</li>\\n<li><strong>服务提供者（Service Provider）：</strong> 实现了服务接口的具体类，并通过配置文件等方式注册到SPI框架中</li>\\n<li><strong>服务提供者配置文件（Service Provider Configuration File）：</strong> 是一种元数据文件，通常位于<code>META-INF/services/</code>目录下，文件名为服务接口的全限定名。该文件包含了服务接口的实现类的全限定名，每个实现类占据一行</li>\\n<li><strong>服务加载器（Service Loader）：</strong> 是用于加载和实例化服务提供者的API。它在运行时查找并加载<code>META-INF/services/</code>目录下的配置文件，并根据配置文件中指定的实现类实例化相应的对象</li>\\n</ul>\\n</li>\\n<li>\\n<p>SPI机制的工作原理如下</p>\\n<ul>\\n<li>\\n<p>定义服务接口</p>\\n<ul>\\n<li>\\n<p>首先，应用程序定义一个接口，这个接口是服务的契约，规定了需要提供的功能或扩展点</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">HelloService</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">void</span> <span class=\\"token function\\">sayHello</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>编写服务提供者</p>\\n<ul>\\n<li>\\n<p>接着，编写服务提供者，实现服务接口，并提供了具体的功能实现</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">HelloServiceImpl</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">HelloService</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token annotation punctuation\\">@Override</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">sayHello</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Hello from HelloServiceImpl!\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>编写服务提供者配置文件</p>\\n<ul>\\n<li>\\n<p>每个服务提供者将自己的实现类配置到一个特定的配置文件中，该文件位于 META-INF/services/ 目录下，以接口的全限定名命名</p>\\n<div class=\\"language-properties line-numbers-mode\\" data-ext=\\"properties\\"><pre class=\\"language-properties\\"><code>com.example.service.HelloServiceImpl\\ncom.example.service.HelloServiceImpl2\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>服务加载</p>\\n<ul>\\n<li>\\n<p>在应用程序运行时，Java的SPI机制会使用服务加载器加载这些配置文件，并根据文件中指定的实现类，实例化对应的服务提供者对象</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token class-name\\">ServiceLoader</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">HelloService</span><span class=\\"token punctuation\\">&gt;</span></span> loader <span class=\\"token operator\\">=</span><span class=\\"token class-name\\">ServiceLoader</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">load</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">HelloService</span><span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">class</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>服务使用</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token class-name\\">ServiceLoader</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">HelloService</span><span class=\\"token punctuation\\">&gt;</span></span> loader <span class=\\"token operator\\">=</span><span class=\\"token class-name\\">ServiceLoader</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">load</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">HelloService</span><span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">class</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">HelloService</span> service <span class=\\"token operator\\">:</span> loader<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\tservice<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sayHello</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>SPI机制的优势</p>\\n<ul>\\n<li>解耦了服务的实现和调用方</li>\\n<li>应用程序可以在不修改源代码的情况下，动态地替换、扩展或定制某个功能或组件的实现</li>\\n</ul>\\n</li>\\n<li>\\n<p>SPI机制的应用场景</p>\\n<ul>\\n<li>数据库驱动、日志框架、插件系统等</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
