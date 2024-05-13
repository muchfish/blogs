const a=JSON.parse('{"key":"v-fc32ae94","path":"/Java/Java%E5%9F%BA%E7%A1%80/JDK1.8%E6%96%B0%E7%89%B9%E6%80%A7.html","title":"JDK1.8新特性","lang":"zh-CN","frontmatter":{"title":"JDK1.8新特性","order":12,"isTimeLine":true,"date":"2024-05-12T00:00:00.000Z","description":"JDK1.8都有哪些新特性？ 接口的默认方法和静态方法 在Java 8中，接口可以包含默认方法和静态方法 Lambda 表达式和函数式接口 Lambda 表达式本质上是一段匿名内部类，可以传递一段代码 Lambda 允许把函数作为一个方法的参数（函数作为参数传递到方法中），使用 Lambda 表达式使代码更加简洁 但是也不要滥用，否则会有可读性等问题 《Effective Java》作者 Josh Bloch 建议使用 Lambda 表达式最好不要超过3行 Stream API Stream API提供了一种更简洁、更易于并行处理数据集合的方式 通过Stream API，我们可以对集合进行过滤、映射、排序、聚合等操作，提高了代码的可读性和简洁性 新的日期和时间API Java 8引入了新的日期和时间API（java.time包），提供了更好的日期和时间处理方式 新的API解决了旧的Date和Calendar类在处理日期和时间时的一些问题，并提供了更多的功能和灵活性 Optional 类 Optional类是一个容器类，用于表示一个值可能存在或不存在 通过Optional类，我们可以避免空指针异常，并更好地处理可能为空的值","head":[["meta",{"property":"og:url","content":"https://muchfish.github.io/blogs/blogs/Java/Java%E5%9F%BA%E7%A1%80/JDK1.8%E6%96%B0%E7%89%B9%E6%80%A7.html"}],["meta",{"property":"og:site_name","content":"鱼塘"}],["meta",{"property":"og:title","content":"JDK1.8新特性"}],["meta",{"property":"og:description","content":"JDK1.8都有哪些新特性？ 接口的默认方法和静态方法 在Java 8中，接口可以包含默认方法和静态方法 Lambda 表达式和函数式接口 Lambda 表达式本质上是一段匿名内部类，可以传递一段代码 Lambda 允许把函数作为一个方法的参数（函数作为参数传递到方法中），使用 Lambda 表达式使代码更加简洁 但是也不要滥用，否则会有可读性等问题 《Effective Java》作者 Josh Bloch 建议使用 Lambda 表达式最好不要超过3行 Stream API Stream API提供了一种更简洁、更易于并行处理数据集合的方式 通过Stream API，我们可以对集合进行过滤、映射、排序、聚合等操作，提高了代码的可读性和简洁性 新的日期和时间API Java 8引入了新的日期和时间API（java.time包），提供了更好的日期和时间处理方式 新的API解决了旧的Date和Calendar类在处理日期和时间时的一些问题，并提供了更多的功能和灵活性 Optional 类 Optional类是一个容器类，用于表示一个值可能存在或不存在 通过Optional类，我们可以避免空指针异常，并更好地处理可能为空的值"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-13T04:08:54.000Z"}],["meta",{"property":"article:author","content":"摸鱼散人"}],["meta",{"property":"article:published_time","content":"2024-05-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-13T04:08:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JDK1.8新特性\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-13T04:08:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"摸鱼散人\\",\\"url\\":\\"https://github.com/muchfish\\"}]}"]]},"headers":[{"level":2,"title":"JDK1.8都有哪些新特性？","slug":"jdk1-8都有哪些新特性","link":"#jdk1-8都有哪些新特性","children":[]},{"level":2,"title":"Lambda 表达式了解多少？","slug":"lambda-表达式了解多少","link":"#lambda-表达式了解多少","children":[]},{"level":2,"title":"Java8有哪些内置函数式接口？","slug":"java8有哪些内置函数式接口","link":"#java8有哪些内置函数式接口","children":[]},{"level":2,"title":"Optional了解吗？","slug":"optional了解吗","link":"#optional了解吗","children":[]},{"level":2,"title":"Stream 流用过吗？","slug":"stream-流用过吗","link":"#stream-流用过吗","children":[]}],"git":{"createdTime":1715573334000,"updatedTime":1715573334000,"contributors":[{"name":"daiwencheng","email":"1319105206@qq.com","commits":1}]},"readingTime":{"minutes":3.45,"words":1034},"filePathRelative":"Java/Java基础/JDK1.8新特性.md","localizedDate":"2024年5月12日","excerpt":"<h2> JDK1.8都有哪些新特性？</h2>\\n<ul>\\n<li>接口的默认方法和静态方法\\n<ul>\\n<li>在Java 8中，接口可以包含默认方法和静态方法</li>\\n</ul>\\n</li>\\n<li>Lambda 表达式和函数式接口\\n<ul>\\n<li>Lambda 表达式本质上是一段匿名内部类，可以传递一段代码</li>\\n<li>Lambda 允许把函数作为一个方法的参数（函数作为参数传递到方法中），使用 Lambda 表达式使代码更加简洁</li>\\n<li>但是也不要滥用，否则会有可读性等问题</li>\\n<li>《Effective Java》作者 Josh Bloch 建议使用 Lambda 表达式最好不要超过3行</li>\\n</ul>\\n</li>\\n<li>Stream API\\n<ul>\\n<li>Stream API提供了一种更简洁、更易于并行处理数据集合的方式</li>\\n<li>通过Stream API，我们可以对集合进行过滤、映射、排序、聚合等操作，提高了代码的可读性和简洁性</li>\\n</ul>\\n</li>\\n<li>新的日期和时间API\\n<ul>\\n<li>Java 8引入了新的日期和时间API（java.time包），提供了更好的日期和时间处理方式</li>\\n<li>新的API解决了旧的Date和Calendar类在处理日期和时间时的一些问题，并提供了更多的功能和灵活性</li>\\n</ul>\\n</li>\\n<li>Optional 类\\n<ul>\\n<li>Optional类是一个容器类，用于表示一个值可能存在或不存在</li>\\n<li>通过Optional类，我们可以避免空指针异常，并更好地处理可能为空的值</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{a as data};
