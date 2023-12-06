const e=JSON.parse('{"key":"v-8c7d3d56","path":"/java/basis/why-there-only-value-passing-in-java.html","title":"Java 值传递详解","lang":"zh-CN","frontmatter":{"title":"Java 值传递详解","isTimeLine":true,"date":"2023-08-21T00:00:00.000Z","category":"Java","tag":["Java基础"],"description":"开始之前，我们先来搞懂下面这两个概念： 形参&amp;实参 值传递&amp;引用传递 形参&amp;实参 方法的定义可能会用到 参数（有参的方法），参数在程序语言中分为： 实参（实际参数，Arguments）：用于传递给函数/方法的参数，必须有确定的值。 形参（形式参数，Parameters）：用于定义函数/方法，接收实参，不需要有确定的值。","head":[["meta",{"property":"og:url","content":"https://muchfish.github.io/blogs/blogs/java/basis/why-there-only-value-passing-in-java.html"}],["meta",{"property":"og:site_name","content":"摸鱼散人"}],["meta",{"property":"og:title","content":"Java 值传递详解"}],["meta",{"property":"og:description","content":"开始之前，我们先来搞懂下面这两个概念： 形参&amp;实参 值传递&amp;引用传递 形参&amp;实参 方法的定义可能会用到 参数（有参的方法），参数在程序语言中分为： 实参（实际参数，Arguments）：用于传递给函数/方法的参数，必须有确定的值。 形参（形式参数，Parameters）：用于定义函数/方法，接收实参，不需要有确定的值。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-06T12:05:54.000Z"}],["meta",{"property":"article:author","content":"摸鱼散人"}],["meta",{"property":"article:tag","content":"Java基础"}],["meta",{"property":"article:published_time","content":"2023-08-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-06T12:05:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 值传递详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-06T12:05:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"摸鱼散人\\",\\"url\\":\\"https://gitee.com/daiwencheng\\"}]}"]]},"headers":[{"level":2,"title":"形参&实参","slug":"形参-实参","link":"#形参-实参","children":[]},{"level":2,"title":"值传递&引用传递","slug":"值传递-引用传递","link":"#值传递-引用传递","children":[]},{"level":2,"title":"为什么 Java 只有值传递？","slug":"为什么-java-只有值传递","link":"#为什么-java-只有值传递","children":[{"level":3,"title":"案例 1：传递基本类型参数","slug":"案例-1-传递基本类型参数","link":"#案例-1-传递基本类型参数","children":[]},{"level":3,"title":"案例 2：传递引用类型参数 1","slug":"案例-2-传递引用类型参数-1","link":"#案例-2-传递引用类型参数-1","children":[]},{"level":3,"title":"案例 3：传递引用类型参数 2","slug":"案例-3-传递引用类型参数-2","link":"#案例-3-传递引用类型参数-2","children":[]}]},{"level":2,"title":"引用传递是怎么样的？","slug":"引用传递是怎么样的","link":"#引用传递是怎么样的","children":[]},{"level":2,"title":"为什么 Java 不引入引用传递呢？","slug":"为什么-java-不引入引用传递呢","link":"#为什么-java-不引入引用传递呢","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1701864354000,"updatedTime":1701864354000,"contributors":[{"name":"daiwencheng","email":"daiwencheng@shengqugames.com","commits":1}]},"readingTime":{"minutes":5.11,"words":1534},"filePathRelative":"java/basis/why-there-only-value-passing-in-java.md","localizedDate":"2023年8月21日","excerpt":"<p>开始之前，我们先来搞懂下面这两个概念：</p>\\n<ul>\\n<li>形参&amp;实参</li>\\n<li>值传递&amp;引用传递</li>\\n</ul>\\n<h2> 形参&amp;实参</h2>\\n<p>方法的定义可能会用到 <strong>参数</strong>（有参的方法），参数在程序语言中分为：</p>\\n<ul>\\n<li><strong>实参（实际参数，Arguments）</strong>：用于传递给函数/方法的参数，必须有确定的值。</li>\\n<li><strong>形参（形式参数，Parameters）</strong>：用于定义函数/方法，接收实参，不需要有确定的值。</li>\\n</ul>","autoDesc":true}');export{e as data};
