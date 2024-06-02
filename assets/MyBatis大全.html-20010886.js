const l=JSON.parse('{"key":"v-97fecbf2","path":"/%E6%A1%86%E6%9E%B6/Mybatis/MyBatis%E5%A4%A7%E5%85%A8.html","title":"MyBatis大全","lang":"zh-CN","frontmatter":{"title":"MyBatis大全","order":2,"isTimeLine":true,"date":"2024-05-23T00:00:00.000Z","description":"什么是 MyBatis？它与其他 ORM 框架有何不同？ MyBatis是一个Java持久层框架，它通过使用XML或注解配置文件来映射Java对象和关系型数据库中的记录，从而实现对象-关系映射（ORM）。 与其他ORM框架相比，MyBatis有几个不同之处： SQL控制： MyBatis允许开发人员直接编写和控制SQL查询，因此可以更细粒度地优化和控制数据库访问，而不像其他ORM框架那样完全隐藏了SQL。 灵活性： MyBatis相对于其他ORM框架更加灵活，可以直接使用SQL语句来执行复杂查询，处理特殊情况和优化性能。 XML配置： MyBatis通常使用XML文件进行配置，这使得配置和映射关系更清晰可见，尤其对于复杂的映射和查询。 易于集成： MyBatis可以很容易地集成到已有的项目中，不需要大规模重构或修改代码。 与SQL的亲和性： 对于开发人员更熟悉SQL的项目团队来说，MyBatis提供了更接近SQL的编程模型，这样可以更轻松地理解和调优查询。 轻量级： MyBatis相对于其他ORM框架来说比较轻量级，它的学习曲线相对较低，对于新手来说更容易上手。","head":[["meta",{"property":"og:url","content":"https://muchfish.github.io/blogs/blogs/%E6%A1%86%E6%9E%B6/Mybatis/MyBatis%E5%A4%A7%E5%85%A8.html"}],["meta",{"property":"og:site_name","content":"鱼塘"}],["meta",{"property":"og:title","content":"MyBatis大全"}],["meta",{"property":"og:description","content":"什么是 MyBatis？它与其他 ORM 框架有何不同？ MyBatis是一个Java持久层框架，它通过使用XML或注解配置文件来映射Java对象和关系型数据库中的记录，从而实现对象-关系映射（ORM）。 与其他ORM框架相比，MyBatis有几个不同之处： SQL控制： MyBatis允许开发人员直接编写和控制SQL查询，因此可以更细粒度地优化和控制数据库访问，而不像其他ORM框架那样完全隐藏了SQL。 灵活性： MyBatis相对于其他ORM框架更加灵活，可以直接使用SQL语句来执行复杂查询，处理特殊情况和优化性能。 XML配置： MyBatis通常使用XML文件进行配置，这使得配置和映射关系更清晰可见，尤其对于复杂的映射和查询。 易于集成： MyBatis可以很容易地集成到已有的项目中，不需要大规模重构或修改代码。 与SQL的亲和性： 对于开发人员更熟悉SQL的项目团队来说，MyBatis提供了更接近SQL的编程模型，这样可以更轻松地理解和调优查询。 轻量级： MyBatis相对于其他ORM框架来说比较轻量级，它的学习曲线相对较低，对于新手来说更容易上手。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-02T11:44:28.000Z"}],["meta",{"property":"article:author","content":"摸鱼散人"}],["meta",{"property":"article:published_time","content":"2024-05-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-02T11:44:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MyBatis大全\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-02T11:44:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"摸鱼散人\\",\\"url\\":\\"https://github.com/muchfish\\"}]}"]]},"headers":[{"level":2,"title":"什么是 MyBatis？它与其他 ORM 框架有何不同？","slug":"什么是-mybatis-它与其他-orm-框架有何不同","link":"#什么是-mybatis-它与其他-orm-框架有何不同","children":[]},{"level":2,"title":"MyBatis 的核心组件是什么？它们各自的作用是什么？","slug":"mybatis-的核心组件是什么-它们各自的作用是什么","link":"#mybatis-的核心组件是什么-它们各自的作用是什么","children":[]},{"level":2,"title":"MyBatis 的工作原理是什么？简要描述一下它的执行流程。","slug":"mybatis-的工作原理是什么-简要描述一下它的执行流程。","link":"#mybatis-的工作原理是什么-简要描述一下它的执行流程。","children":[]},{"level":2,"title":"什么是 Mapper 接口？它在 MyBatis 中的作用是什么？","slug":"什么是-mapper-接口-它在-mybatis-中的作用是什么","link":"#什么是-mapper-接口-它在-mybatis-中的作用是什么","children":[]},{"level":2,"title":"MyBatis 中的动态 SQL 是什么？你能举例说明如何使用动态 SQL 吗？","slug":"mybatis-中的动态-sql-是什么-你能举例说明如何使用动态-sql-吗","link":"#mybatis-中的动态-sql-是什么-你能举例说明如何使用动态-sql-吗","children":[]},{"level":2,"title":"如何在 MyBatis 中执行批量插入操作？","slug":"如何在-mybatis-中执行批量插入操作","link":"#如何在-mybatis-中执行批量插入操作","children":[]},{"level":2,"title":"MyBatis 中的缓存是如何工作的？它有哪些级别？","slug":"mybatis-中的缓存是如何工作的-它有哪些级别","link":"#mybatis-中的缓存是如何工作的-它有哪些级别","children":[]},{"level":2,"title":"介绍一下 MyBatis 的一级缓存和二级缓                                                                                                                                                                                                          存的区别。","slug":"介绍一下-mybatis-的一级缓存和二级缓-存的区别。","link":"#介绍一下-mybatis-的一级缓存和二级缓-存的区别。","children":[]},{"level":2,"title":"如何在 MyBatis 中进行参数绑定？有哪些方式可以传递参数？","slug":"如何在-mybatis-中进行参数绑定-有哪些方式可以传递参数","link":"#如何在-mybatis-中进行参数绑定-有哪些方式可以传递参数","children":[]},{"level":2,"title":"MyBatis 支持哪些类型的参数映射？","slug":"mybatis-支持哪些类型的参数映射","link":"#mybatis-支持哪些类型的参数映射","children":[]},{"level":2,"title":"什么是 MyBatis 的插件（Plugin）？你能否自定义一个插件？","slug":"什么是-mybatis-的插件-plugin-你能否自定义一个插件","link":"#什么是-mybatis-的插件-plugin-你能否自定义一个插件","children":[]},{"level":2,"title":"MyBatis 如何处理懒加载（Lazy Loading）？它的原理是什么？","slug":"mybatis-如何处理懒加载-lazy-loading-它的原理是什么","link":"#mybatis-如何处理懒加载-lazy-loading-它的原理是什么","children":[]},{"level":2,"title":"你在项目中是如何处理 MyBatis 的异常的？","slug":"你在项目中是如何处理-mybatis-的异常的","link":"#你在项目中是如何处理-mybatis-的异常的","children":[]},{"level":2,"title":"如何在 MyBatis 中实现分页查询？","slug":"如何在-mybatis-中实现分页查询","link":"#如何在-mybatis-中实现分页查询","children":[]},{"level":2,"title":"MyBatis 中的 resultMap 是什么？它有什么作用？","slug":"mybatis-中的-resultmap-是什么-它有什么作用","link":"#mybatis-中的-resultmap-是什么-它有什么作用","children":[]},{"level":2,"title":"什么是 MyBatis 的 SQL 注入？你如何在 MyBatis 中防止 SQL 注入攻击？","slug":"什么是-mybatis-的-sql-注入-你如何在-mybatis-中防止-sql-注入攻击","link":"#什么是-mybatis-的-sql-注入-你如何在-mybatis-中防止-sql-注入攻击","children":[]},{"level":2,"title":"MyBatis 如何处理数据库事务？它支持哪些事务管理方式？","slug":"mybatis-如何处理数据库事务-它支持哪些事务管理方式","link":"#mybatis-如何处理数据库事务-它支持哪些事务管理方式","children":[]},{"level":2,"title":"MyBatis 中的 ResultMap 和 ResultType 有什么区别？它们应该如何选择使用？","slug":"mybatis-中的-resultmap-和-resulttype-有什么区别-它们应该如何选择使用","link":"#mybatis-中的-resultmap-和-resulttype-有什么区别-它们应该如何选择使用","children":[]},{"level":2,"title":"介绍一下 MyBatis 中的 resultMap 的高级特性，比如关联映射和复杂属性映射。","slug":"介绍一下-mybatis-中的-resultmap-的高级特性-比如关联映射和复杂属性映射。","link":"#介绍一下-mybatis-中的-resultmap-的高级特性-比如关联映射和复杂属性映射。","children":[]},{"level":2,"title":"MyBatis 中的 SQL 日志是如何启用的？为什么在开发和调试过程中启用 SQL 日志很重要？","slug":"mybatis-中的-sql-日志是如何启用的-为什么在开发和调试过程中启用-sql-日志很重要","link":"#mybatis-中的-sql-日志是如何启用的-为什么在开发和调试过程中启用-sql-日志很重要","children":[]},{"level":2,"title":"你有在项目中使用 MyBatis Generator 吗？它的作用是什么？有哪些配置选项？","slug":"你有在项目中使用-mybatis-generator-吗-它的作用是什么-有哪些配置选项","link":"#你有在项目中使用-mybatis-generator-吗-它的作用是什么-有哪些配置选项","children":[]},{"level":2,"title":"MyBatis 中的 TypeHandler 是什么？你能否自定义一个 TypeHandler？","slug":"mybatis-中的-typehandler-是什么-你能否自定义一个-typehandler","link":"#mybatis-中的-typehandler-是什么-你能否自定义一个-typehandler","children":[]},{"level":2,"title":"MyBatis 如何处理结果集的映射？它支持哪些基本类型和复杂类型的映射？","slug":"mybatis-如何处理结果集的映射-它支持哪些基本类型和复杂类型的映射","link":"#mybatis-如何处理结果集的映射-它支持哪些基本类型和复杂类型的映射","children":[]},{"level":2,"title":"MyBatis 中的动态 SQL 如何处理 NULL 值？","slug":"mybatis-中的动态-sql-如何处理-null-值","link":"#mybatis-中的动态-sql-如何处理-null-值","children":[]},{"level":2,"title":"如何在 MyBatis 中执行存储过程？有哪些方式可以调用存储过程？","slug":"如何在-mybatis-中执行存储过程-有哪些方式可以调用存储过程","link":"#如何在-mybatis-中执行存储过程-有哪些方式可以调用存储过程","children":[]},{"level":2,"title":"MyBatis 中的连接池是如何配置的？你有什么经验可以分享吗？","slug":"mybatis-中的连接池是如何配置的-你有什么经验可以分享吗","link":"#mybatis-中的连接池是如何配置的-你有什么经验可以分享吗","children":[]},{"level":2,"title":"什么是 MyBatis 的拦截器（Interceptor）？你能否自定义一个拦截器？","slug":"什么是-mybatis-的拦截器-interceptor-你能否自定义一个拦截器","link":"#什么是-mybatis-的拦截器-interceptor-你能否自定义一个拦截器","children":[]},{"level":2,"title":"MyBatis 如何处理乐观锁和悲观锁？你在项目中是如何应用的？","slug":"mybatis-如何处理乐观锁和悲观锁-你在项目中是如何应用的","link":"#mybatis-如何处理乐观锁和悲观锁-你在项目中是如何应用的","children":[]},{"level":2,"title":"你有使用 MyBatis 的批量更新功能吗？它是如何工作的？","slug":"你有使用-mybatis-的批量更新功能吗-它是如何工作的","link":"#你有使用-mybatis-的批量更新功能吗-它是如何工作的","children":[]},{"level":2,"title":"MyBatis 和 Spring 框架如何集成？你有集成经验吗？","slug":"mybatis-和-spring-框架如何集成-你有集成经验吗","link":"#mybatis-和-spring-框架如何集成-你有集成经验吗","children":[]},{"level":2,"title":"在 MyBatis 中，你如何执行批量删除操作？","slug":"在-mybatis-中-你如何执行批量删除操作","link":"#在-mybatis-中-你如何执行批量删除操作","children":[]},{"level":2,"title":"MyBatis 中的延迟加载（Lazy Loading）和立即加载（Eager Loading）有何区别？你何时选择使用延迟加载？","slug":"mybatis-中的延迟加载-lazy-loading-和立即加载-eager-loading-有何区别-你何时选择使用延迟加载","link":"#mybatis-中的延迟加载-lazy-loading-和立即加载-eager-loading-有何区别-你何时选择使用延迟加载","children":[]},{"level":2,"title":"你有使用 MyBatis 的二级缓存吗？在什么情况下你会选择启用二级缓存？","slug":"你有使用-mybatis-的二级缓存吗-在什么情况下你会选择启用二级缓存","link":"#你有使用-mybatis-的二级缓存吗-在什么情况下你会选择启用二级缓存","children":[]},{"level":2,"title":"介绍一下 MyBatis 中的 SQL 脚本处理器（Scripting）以及它的应用场景。","slug":"介绍一下-mybatis-中的-sql-脚本处理器-scripting-以及它的应用场景。","link":"#介绍一下-mybatis-中的-sql-脚本处理器-scripting-以及它的应用场景。","children":[]},{"level":2,"title":"在 MyBatis 中，如何处理数据库连接的异常和超时？","slug":"在-mybatis-中-如何处理数据库连接的异常和超时","link":"#在-mybatis-中-如何处理数据库连接的异常和超时","children":[]},{"level":2,"title":"MyBatis 如何支持数据库的分页查询？有哪些常见的分页插件？","slug":"mybatis-如何支持数据库的分页查询-有哪些常见的分页插件","link":"#mybatis-如何支持数据库的分页查询-有哪些常见的分页插件","children":[]},{"level":2,"title":"MyBatis 中的动态 SQL 如何处理动态条件？举例说明如何构建动态条件查询。","slug":"mybatis-中的动态-sql-如何处理动态条件-举例说明如何构建动态条件查询。","link":"#mybatis-中的动态-sql-如何处理动态条件-举例说明如何构建动态条件查询。","children":[]},{"level":2,"title":"什么是 MyBatis 的乐观锁和悲观锁？你有在项目中应用过吗？请分享一下经验。","slug":"什么是-mybatis-的乐观锁和悲观锁-你有在项目中应用过吗-请分享一下经验。","link":"#什么是-mybatis-的乐观锁和悲观锁-你有在项目中应用过吗-请分享一下经验。","children":[]},{"level":2,"title":"MyBatis 如何进行批量更新和批量","slug":"mybatis-如何进行批量更新和批量","link":"#mybatis-如何进行批量更新和批量","children":[]},{"level":2,"title":"MyBatis 如何处理数据库字段和 Java 对象之间的类型转换？你有遇到过类型转换问题吗？","slug":"mybatis-如何处理数据库字段和-java-对象之间的类型转换-你有遇到过类型转换问题吗","link":"#mybatis-如何处理数据库字段和-java-对象之间的类型转换-你有遇到过类型转换问题吗","children":[]},{"level":2,"title":"MyBatis 中的 SQL 解析器（SQL Parser）是如何工作的？它的作用是什么？你有自定义过 SQL 解析器吗？","slug":"mybatis-中的-sql-解析器-sql-parser-是如何工作的-它的作用是什么-你有自定义过-sql-解析器吗","link":"#mybatis-中的-sql-解析器-sql-parser-是如何工作的-它的作用是什么-你有自定义过-sql-解析器吗","children":[]},{"level":2,"title":"MyBatis 中的 SQL 构建器（SQL Builder）是什么？你有使用过 MyBatis 的 SQL 构建器吗？能分享一些使用经验吗？","slug":"mybatis-中的-sql-构建器-sql-builder-是什么-你有使用过-mybatis-的-sql-构建器吗-能分享一些使用经验吗","link":"#mybatis-中的-sql-构建器-sql-builder-是什么-你有使用过-mybatis-的-sql-构建器吗-能分享一些使用经验吗","children":[]},{"level":2,"title":"你对 MyBatis 的性能调优有什么经验？你在项目中是如何优化 MyBatis 的性能的？","slug":"你对-mybatis-的性能调优有什么经验-你在项目中是如何优化-mybatis-的性能的","link":"#你对-mybatis-的性能调优有什么经验-你在项目中是如何优化-mybatis-的性能的","children":[]},{"level":2,"title":"MyBatis 中的连接池和数据库连接管理是如何工作的？你有进行过连接池的配置和优化吗？","slug":"mybatis-中的连接池和数据库连接管理是如何工作的-你有进行过连接池的配置和优化吗","link":"#mybatis-中的连接池和数据库连接管理是如何工作的-你有进行过连接池的配置和优化吗","children":[]},{"level":2,"title":"在 MyBatis 中，如何处理数据库分页？你有使用过 MyBatis 分页插件吗？它是如何工作的？","slug":"在-mybatis-中-如何处理数据库分页-你有使用过-mybatis-分页插件吗-它是如何工作的","link":"#在-mybatis-中-如何处理数据库分页-你有使用过-mybatis-分页插件吗-它是如何工作的","children":[]},{"level":2,"title":"MyBatis 中的 SQL 注解是什么？它的作用是什么？你有使用过 SQL 注解吗？它们与 XML 映射文件相比有什么优缺点？","slug":"mybatis-中的-sql-注解是什么-它的作用是什么-你有使用过-sql-注解吗-它们与-xml-映射文件相比有什么优缺点","link":"#mybatis-中的-sql-注解是什么-它的作用是什么-你有使用过-sql-注解吗-它们与-xml-映射文件相比有什么优缺点","children":[]},{"level":2,"title":"什么是 MyBatis 的多表查询？你有进行过复杂的多表查询吗？如何处理多表查询结果的映射？","slug":"什么是-mybatis-的多表查询-你有进行过复杂的多表查询吗-如何处理多表查询结果的映射","link":"#什么是-mybatis-的多表查询-你有进行过复杂的多表查询吗-如何处理多表查询结果的映射","children":[]},{"level":2,"title":"MyBatis 中的缓存机制是如何工作的？你有遇到过缓存失效的情况吗？如何处理缓存失效？","slug":"mybatis-中的缓存机制是如何工作的-你有遇到过缓存失效的情况吗-如何处理缓存失效","link":"#mybatis-中的缓存机制是如何工作的-你有遇到过缓存失效的情况吗-如何处理缓存失效","children":[]},{"level":2,"title":"MyBatis 中的动态 SQL 是如何实现的？你有在项目中使用过动态 SQL 吗？它的性能如何？","slug":"mybatis-中的动态-sql-是如何实现的-你有在项目中使用过动态-sql-吗-它的性能如何","link":"#mybatis-中的动态-sql-是如何实现的-你有在项目中使用过动态-sql-吗-它的性能如何","children":[]},{"level":2,"title":"在你看来，MyBatis 的优势是什么？它在项目中的应用场景是什么？","slug":"在你看来-mybatis-的优势是什么-它在项目中的应用场景是什么","link":"#在你看来-mybatis-的优势是什么-它在项目中的应用场景是什么","children":[]},{"level":2,"title":"MyBatis 如何处理数据库连接的管理和释放？它对连接池有何要求？","slug":"mybatis-如何处理数据库连接的管理和释放-它对连接池有何要求","link":"#mybatis-如何处理数据库连接的管理和释放-它对连接池有何要求","children":[]},{"level":2,"title":"你对 MyBatis 中的事务管理有何了解？它如何处理事务的提交和回滚？","slug":"你对-mybatis-中的事务管理有何了解-它如何处理事务的提交和回滚","link":"#你对-mybatis-中的事务管理有何了解-它如何处理事务的提交和回滚","children":[]},{"level":2,"title":"在 MyBatis 中，如何处理数据库的乐观锁和悲观锁？你有在项目中使用过这些机制吗？能分享一些应用经验吗？","slug":"在-mybatis-中-如何处理数据库的乐观锁和悲观锁-你有在项目中使用过这些机制吗-能分享一些应用经验吗","link":"#在-mybatis-中-如何处理数据库的乐观锁和悲观锁-你有在项目中使用过这些机制吗-能分享一些应用经验吗","children":[]},{"level":2,"title":"MyBatis 中的 ResultMap 是如何定义和使用的？你有使用过复杂的 ResultMap 吗？如何定义一个复杂的 ResultMap？","slug":"mybatis-中的-resultmap-是如何定义和使用的-你有使用过复杂的-resultmap-吗-如何定义一个复杂的-resultmap","link":"#mybatis-中的-resultmap-是如何定义和使用的-你有使用过复杂的-resultmap-吗-如何定义一个复杂的-resultmap","children":[]},{"level":2,"title":"你对 MyBatis 中的延迟加载机制有何理解？它如何提高系统性能？","slug":"你对-mybatis-中的延迟加载机制有何理解-它如何提高系统性能","link":"#你对-mybatis-中的延迟加载机制有何理解-它如何提高系统性能","children":[]},{"level":2,"title":"在 MyBatis 中，如何使用动态 SQL 构建动态查询语句？你有使用过动态 SQL 吗？如何避免动态 SQL 带来的潜在安全风险？","slug":"在-mybatis-中-如何使用动态-sql-构建动态查询语句-你有使用过动态-sql-吗-如何避免动态-sql-带来的潜在安全风险","link":"#在-mybatis-中-如何使用动态-sql-构建动态查询语句-你有使用过动态-sql-吗-如何避免动态-sql-带来的潜在安全风险","children":[]},{"level":2,"title":"你有使用过 MyBatis 的注解方式进行 SQL 映射吗？与 XML 映射方式相比，你更倾向于使用哪一种？为什么？","slug":"你有使用过-mybatis-的注解方式进行-sql-映射吗-与-xml-映射方式相比-你更倾向于使用哪一种-为什么","link":"#你有使用过-mybatis-的注解方式进行-sql-映射吗-与-xml-映射方式相比-你更倾向于使用哪一种-为什么","children":[]},{"level":2,"title":"MyBatis 如何处理结果集的映射？你有使用过复杂的映射关系吗？如何处理复杂的结果集映射？","slug":"mybatis-如何处理结果集的映射-你有使用过复杂的映射关系吗-如何处理复杂的结果集映射","link":"#mybatis-如何处理结果集的映射-你有使用过复杂的映射关系吗-如何处理复杂的结果集映射","children":[]},{"level":2,"title":"在 MyBatis 中，如何进行性能分析和调优？你有使用过 MyBatis 提供的性能分析工具吗？如何解读性能分析报告？","slug":"在-mybatis-中-如何进行性能分析和调优-你有使用过-mybatis-提供的性能分析工具吗-如何解读性能分析报告","link":"#在-mybatis-中-如何进行性能分析和调优-你有使用过-mybatis-提供的性能分析工具吗-如何解读性能分析报告","children":[]},{"level":2,"title":"在你的开发经验中，MyBatis 的哪些特性给你留下了深刻的印象？你认为 MyBatis 在未来的发展方向是什么？","slug":"在你的开发经验中-mybatis-的哪些特性给你留下了深刻的印象-你认为-mybatis-在未来的发展方向是什么","link":"#在你的开发经验中-mybatis-的哪些特性给你留下了深刻的印象-你认为-mybatis-在未来的发展方向是什么","children":[]},{"level":2,"title":"MyBatis 的动态 SQL 是如何实现的？你有使用过动态 SQL 来构建动态查询语句吗？能分享一些实际应用的经验吗？","slug":"mybatis-的动态-sql-是如何实现的-你有使用过动态-sql-来构建动态查询语句吗-能分享一些实际应用的经验吗","link":"#mybatis-的动态-sql-是如何实现的-你有使用过动态-sql-来构建动态查询语句吗-能分享一些实际应用的经验吗","children":[]},{"level":2,"title":"MyBatis 中的缓存机制包括一级缓存和二级缓存，请详细说明它们的区别和工作原理。","slug":"mybatis-中的缓存机制包括一级缓存和二级缓存-请详细说明它们的区别和工作原理。","link":"#mybatis-中的缓存机制包括一级缓存和二级缓存-请详细说明它们的区别和工作原理。","children":[]},{"level":2,"title":"你有使用过 MyBatis 的批量操作功能吗？它是如何实现的？在什么场景下你会选择使用批量操作？","slug":"你有使用过-mybatis-的批量操作功能吗-它是如何实现的-在什么场景下你会选择使用批量操作","link":"#你有使用过-mybatis-的批量操作功能吗-它是如何实现的-在什么场景下你会选择使用批量操作","children":[]},{"level":2,"title":"在 MyBatis 中，如何处理数据库的分页查询？你有使用过 MyBatis 分页插件吗？如果不使用插件，你会采取什么样的方法来实现分页？","slug":"在-mybatis-中-如何处理数据库的分页查询-你有使用过-mybatis-分页插件吗-如果不使用插件-你会采取什么样的方法来实现分页","link":"#在-mybatis-中-如何处理数据库的分页查询-你有使用过-mybatis-分页插件吗-如果不使用插件-你会采取什么样的方法来实现分页","children":[]},{"level":2,"title":"MyBatis 中的 TypeHandler 是什么？它的作用是什么？你有自定义过 TypeHandler 吗？在什么场景下会需要自定义 TypeHandler？","slug":"mybatis-中的-typehandler-是什么-它的作用是什么-你有自定义过-typehandler-吗-在什么场景下会需要自定义-typehandler","link":"#mybatis-中的-typehandler-是什么-它的作用是什么-你有自定义过-typehandler-吗-在什么场景下会需要自定义-typehandler","children":[]},{"level":2,"title":"MyBatis 与 Spring 框架的集成是如何实现的？你有在项目中使用过这种集成方式吗？有什么需要注意的地方？","slug":"mybatis-与-spring-框架的集成是如何实现的-你有在项目中使用过这种集成方式吗-有什么需要注意的地方","link":"#mybatis-与-spring-框架的集成是如何实现的-你有在项目中使用过这种集成方式吗-有什么需要注意的地方","children":[]},{"level":2,"title":"在你的开发经验中，MyBatis 的哪些功能给你带来了便利？相反，有没有遇到过 MyBatis 的局限性？","slug":"在你的开发经验中-mybatis-的哪些功能给你带来了便利-相反-有没有遇到过-mybatis-的局限性","link":"#在你的开发经验中-mybatis-的哪些功能给你带来了便利-相反-有没有遇到过-mybatis-的局限性","children":[]},{"level":2,"title":"你在使用 MyBatis 过程中遇到过的最大挑战是什么？你是如何克服的？","slug":"你在使用-mybatis-过程中遇到过的最大挑战是什么-你是如何克服的","link":"#你在使用-mybatis-过程中遇到过的最大挑战是什么-你是如何克服的","children":[]},{"level":2,"title":"MyBatis 如何处理数据库的连接异常？在面对连接异常时，你有哪些应对策略？","slug":"mybatis-如何处理数据库的连接异常-在面对连接异常时-你有哪些应对策略","link":"#mybatis-如何处理数据库的连接异常-在面对连接异常时-你有哪些应对策略","children":[]},{"level":2,"title":"你对 MyBatis 的未来发展有什么预期？你认为 MyBatis 在未来的发展中有哪些可以改进的地方？","slug":"你对-mybatis-的未来发展有什么预期-你认为-mybatis-在未来的发展中有哪些可以改进的地方","link":"#你对-mybatis-的未来发展有什么预期-你认为-mybatis-在未来的发展中有哪些可以改进的地方","children":[]},{"level":2,"title":"MyBatis 如何处理数据库连接的超时和重试机制？你有在项目中实践过连接超时和重试策略吗？","slug":"mybatis-如何处理数据库连接的超时和重试机制-你有在项目中实践过连接超时和重试策略吗","link":"#mybatis-如何处理数据库连接的超时和重试机制-你有在项目中实践过连接超时和重试策略吗","children":[]},{"level":2,"title":"在你的项目中，你是如何组织和管理 MyBatis 的 SQL 映射文件的？有没有遇到过文件过多或难以维护的情况？","slug":"在你的项目中-你是如何组织和管理-mybatis-的-sql-映射文件的-有没有遇到过文件过多或难以维护的情况","link":"#在你的项目中-你是如何组织和管理-mybatis-的-sql-映射文件的-有没有遇到过文件过多或难以维护的情况","children":[]},{"level":2,"title":"MyBatis 中的 Mapper 接口是如何定义和使用的？你有使用过注解方式定义 Mapper 接口吗？与 XML 方式相比，你更倾向于使用哪一种？","slug":"mybatis-中的-mapper-接口是如何定义和使用的-你有使用过注解方式定义-mapper-接口吗-与-xml-方式相比-你更倾向于使用哪一种","link":"#mybatis-中的-mapper-接口是如何定义和使用的-你有使用过注解方式定义-mapper-接口吗-与-xml-方式相比-你更倾向于使用哪一种","children":[]},{"level":2,"title":"在你的开发经验中，MyBatis 的异常处理是如何应用的？你有使用过 MyBatis 的异常处理机制来处理业务异常吗？","slug":"在你的开发经验中-mybatis-的异常处理是如何应用的-你有使用过-mybatis-的异常处理机制来处理业务异常吗","link":"#在你的开发经验中-mybatis-的异常处理是如何应用的-你有使用过-mybatis-的异常处理机制来处理业务异常吗","children":[]},{"level":2,"title":"MyBatis 中的批量更新操作是如何实现的？在什么场景下你会选择使用批量更新操作？","slug":"mybatis-中的批量更新操作是如何实现的-在什么场景下你会选择使用批量更新操作","link":"#mybatis-中的批量更新操作是如何实现的-在什么场景下你会选择使用批量更新操作","children":[]},{"level":2,"title":"在你的项目中，你是如何进行 MyBatis 的单元测试的？你认为单元测试对于 MyBatis 开发的重要性是什么？","slug":"在你的项目中-你是如何进行-mybatis-的单元测试的-你认为单元测试对于-mybatis-开发的重要性是什么","link":"#在你的项目中-你是如何进行-mybatis-的单元测试的-你认为单元测试对于-mybatis-开发的重要性是什么","children":[]},{"level":2,"title":"MyBatis 的 SQL 映射文件中，有哪些常用的标签和元素？你觉得其中哪些是最常用的？为什么？","slug":"mybatis-的-sql-映射文件中-有哪些常用的标签和元素-你觉得其中哪些是最常用的-为什么","link":"#mybatis-的-sql-映射文件中-有哪些常用的标签和元素-你觉得其中哪些是最常用的-为什么","children":[]},{"level":2,"title":"你有在项目中使用过 MyBatis 的乐观锁功能吗？它是如何工作的？在什么情况下你会选择使用乐观锁？","slug":"你有在项目中使用过-mybatis-的乐观锁功能吗-它是如何工作的-在什么情况下你会选择使用乐观锁","link":"#你有在项目中使用过-mybatis-的乐观锁功能吗-它是如何工作的-在什么情况下你会选择使用乐观锁","children":[]},{"level":2,"title":"在 MyBatis 中，如何进行 SQL 的拼接和参数传递？你有遇到过 SQL 注入的情况吗？如何防范 SQL 注入攻击？","slug":"在-mybatis-中-如何进行-sql-的拼接和参数传递-你有遇到过-sql-注入的情况吗-如何防范-sql-注入攻击","link":"#在-mybatis-中-如何进行-sql-的拼接和参数传递-你有遇到过-sql-注入的情况吗-如何防范-sql-注入攻击","children":[]},{"level":2,"title":"你认为 MyBatis 框架的优势和劣势分别是什么？在选择 ORM 框架时，你会优先考虑哪些因素？","slug":"你认为-mybatis-框架的优势和劣势分别是什么-在选择-orm-框架时-你会优先考虑哪些因素","link":"#你认为-mybatis-框架的优势和劣势分别是什么-在选择-orm-框架时-你会优先考虑哪些因素","children":[]},{"level":2,"title":"在你的项目中，你是如何进行 MyBatis 的性能监控和调优的？有哪些工具和技术是你常用的？","slug":"在你的项目中-你是如何进行-mybatis-的性能监控和调优的-有哪些工具和技术是你常用的","link":"#在你的项目中-你是如何进行-mybatis-的性能监控和调优的-有哪些工具和技术是你常用的","children":[]},{"level":2,"title":"MyBatis 中的动态 SQL 是如何实现的？你有使用过动态 SQL 来构建动态查询语句吗？能分享一些实际应用的经验吗？","slug":"mybatis-中的动态-sql-是如何实现的-你有使用过动态-sql-来构建动态查询语句吗-能分享一些实际应用的经验吗","link":"#mybatis-中的动态-sql-是如何实现的-你有使用过动态-sql-来构建动态查询语句吗-能分享一些实际应用的经验吗","children":[]},{"level":2,"title":"MyBatis 如何处理数据库连接的管理和释放？它对连接池有何要求？","slug":"mybatis-如何处理数据库连接的管理和释放-它对连接池有何要求-1","link":"#mybatis-如何处理数据库连接的管理和释放-它对连接池有何要求-1","children":[]},{"level":2,"title":"你对 MyBatis 中的事务管理有何了解？它如何处理事务的提交和回滚？","slug":"你对-mybatis-中的事务管理有何了解-它如何处理事务的提交和回滚-1","link":"#你对-mybatis-中的事务管理有何了解-它如何处理事务的提交和回滚-1","children":[]},{"level":2,"title":"在 MyBatis 中，如何使用注解方式定义 SQL 映射？与 XML 映射方式相比，你更倾向于使用哪一种？为什么？","slug":"在-mybatis-中-如何使用注解方式定义-sql-映射-与-xml-映射方式相比-你更倾向于使用哪一种-为什么","link":"#在-mybatis-中-如何使用注解方式定义-sql-映射-与-xml-映射方式相比-你更倾向于使用哪一种-为什么","children":[]},{"level":2,"title":"MyBatis 的缓存机制是如何工作的？你有在项目中使用过缓存吗？在什么情况下你会选择禁用缓存？","slug":"mybatis-的缓存机制是如何工作的-你有在项目中使用过缓存吗-在什么情况下你会选择禁用缓存","link":"#mybatis-的缓存机制是如何工作的-你有在项目中使用过缓存吗-在什么情况下你会选择禁用缓存","children":[]},{"level":2,"title":"在你的项目中，你是如何处理 MyBatis 中的懒加载问题的？有没有遇到过懒加载导致的性能问题？","slug":"在你的项目中-你是如何处理-mybatis-中的懒加载问题的-有没有遇到过懒加载导致的性能问题","link":"#在你的项目中-你是如何处理-mybatis-中的懒加载问题的-有没有遇到过懒加载导致的性能问题","children":[]},{"level":2,"title":"MyBatis 的 SQL 解析器是如何工作的？它的作用是什么？你有自定义过 SQL 解析器吗？","slug":"mybatis-的-sql-解析器是如何工作的-它的作用是什么-你有自定义过-sql-解析器吗","link":"#mybatis-的-sql-解析器是如何工作的-它的作用是什么-你有自定义过-sql-解析器吗","children":[]},{"level":2,"title":"你有在项目中使用过 MyBatis 的连接池配置吗？你是如何进行连接池优化的？","slug":"你有在项目中使用过-mybatis-的连接池配置吗-你是如何进行连接池优化的","link":"#你有在项目中使用过-mybatis-的连接池配置吗-你是如何进行连接池优化的","children":[]},{"level":2,"title":"在你的开发经验中，MyBatis 与其他 ORM 框架相比，有哪些优势和劣势？在选择使用 ORM 框架时，你会考虑哪些因素？","slug":"在你的开发经验中-mybatis-与其他-orm-框架相比-有哪些优势和劣势-在选择使用-orm-框架时-你会考虑哪些因素","link":"#在你的开发经验中-mybatis-与其他-orm-框架相比-有哪些优势和劣势-在选择使用-orm-框架时-你会考虑哪些因素","children":[]},{"level":2,"title":"MyBatis 如何处理数据库连接的超时和重试机制？你有在项目中实践过连接超时和重试策略吗？","slug":"mybatis-如何处理数据库连接的超时和重试机制-你有在项目中实践过连接超时和重试策略吗-1","link":"#mybatis-如何处理数据库连接的超时和重试机制-你有在项目中实践过连接超时和重试策略吗-1","children":[]},{"level":2,"title":"在你的项目中，你是如何组织和管理 MyBatis 的 SQL 映射文件的？有没有遇到过文件过多或难以维护的情况？","slug":"在你的项目中-你是如何组织和管理-mybatis-的-sql-映射文件的-有没有遇到过文件过多或难以维护的情况-1","link":"#在你的项目中-你是如何组织和管理-mybatis-的-sql-映射文件的-有没有遇到过文件过多或难以维护的情况-1","children":[]},{"level":2,"title":"MyBatis 中的 Mapper 接口是如何定义和使用的？你有使用过注解方式定义 Mapper 接口吗？与 XML 方式相比，你更倾向于使用哪一种？","slug":"mybatis-中的-mapper-接口是如何定义和使用的-你有使用过注解方式定义-mapper-接口吗-与-xml-方式相比-你更倾向于使用哪一种-1","link":"#mybatis-中的-mapper-接口是如何定义和使用的-你有使用过注解方式定义-mapper-接口吗-与-xml-方式相比-你更倾向于使用哪一种-1","children":[]},{"level":2,"title":"在你的开发经验中，MyBatis 的异常处理是如何应用的？你有使用过 MyBatis 的异常处理机制来处理业务异常吗？","slug":"在你的开发经验中-mybatis-的异常处理是如何应用的-你有使用过-mybatis-的异常处理机制来处理业务异常吗-1","link":"#在你的开发经验中-mybatis-的异常处理是如何应用的-你有使用过-mybatis-的异常处理机制来处理业务异常吗-1","children":[]},{"level":2,"title":"MyBatis 中的批量更新操作是如何实现的？在什么场景下你会选择使用批量更新操作？","slug":"mybatis-中的批量更新操作是如何实现的-在什么场景下你会选择使用批量更新操作-1","link":"#mybatis-中的批量更新操作是如何实现的-在什么场景下你会选择使用批量更新操作-1","children":[]},{"level":2,"title":"在你的项目中，你是如何进行 MyBatis 的单元测试的？你认为单元测试对于 MyBatis 开发的重要性是什么？","slug":"在你的项目中-你是如何进行-mybatis-的单元测试的-你认为单元测试对于-mybatis-开发的重要性是什么-1","link":"#在你的项目中-你是如何进行-mybatis-的单元测试的-你认为单元测试对于-mybatis-开发的重要性是什么-1","children":[]},{"level":2,"title":"MyBatis 的 SQL 映射文件中，有哪些常用的标签和元素？你觉得其中哪些是最常用的？为什么？","slug":"mybatis-的-sql-映射文件中-有哪些常用的标签和元素-你觉得其中哪些是最常用的-为什么-1","link":"#mybatis-的-sql-映射文件中-有哪些常用的标签和元素-你觉得其中哪些是最常用的-为什么-1","children":[]},{"level":2,"title":"你有在项目中使用过 MyBatis 的乐观锁功能吗？它是如何工作的？在什么情况下你会选择使用乐观锁？","slug":"你有在项目中使用过-mybatis-的乐观锁功能吗-它是如何工作的-在什么情况下你会选择使用乐观锁-1","link":"#你有在项目中使用过-mybatis-的乐观锁功能吗-它是如何工作的-在什么情况下你会选择使用乐观锁-1","children":[]},{"level":2,"title":"在 MyBatis 中，如何进行 SQL 的拼接和参数传递？你有遇到过 SQL 注入的情况吗？如何防范 SQL 注入攻击？","slug":"在-mybatis-中-如何进行-sql-的拼接和参数传递-你有遇到过-sql-注入的情况吗-如何防范-sql-注入攻击-1","link":"#在-mybatis-中-如何进行-sql-的拼接和参数传递-你有遇到过-sql-注入的情况吗-如何防范-sql-注入攻击-1","children":[]},{"level":2,"title":"你认为 MyBatis 框架的优势和劣势分别是什么？在选择 ORM 框架时，你会优先考虑哪些因素？","slug":"你认为-mybatis-框架的优势和劣势分别是什么-在选择-orm-框架时-你会优先考虑哪些因素-1","link":"#你认为-mybatis-框架的优势和劣势分别是什么-在选择-orm-框架时-你会优先考虑哪些因素-1","children":[]}],"git":{"createdTime":1717328668000,"updatedTime":1717328668000,"contributors":[{"name":"daiwencheng","email":"1319105206@qq.com","commits":1}]},"readingTime":{"minutes":18.48,"words":5545},"filePathRelative":"框架/Mybatis/MyBatis大全.md","localizedDate":"2024年5月23日","excerpt":"<h2> 什么是 MyBatis？它与其他 ORM 框架有何不同？</h2>\\n<p>MyBatis是一个Java持久层框架，它通过使用XML或注解配置文件来映射Java对象和关系型数据库中的记录，从而实现对象-关系映射（ORM）。</p>\\n<p>与其他ORM框架相比，MyBatis有几个不同之处：</p>\\n<ol>\\n<li>\\n<p><strong>SQL控制：</strong> MyBatis允许开发人员直接编写和控制SQL查询，因此可以更细粒度地优化和控制数据库访问，而不像其他ORM框架那样完全隐藏了SQL。</p>\\n</li>\\n<li>\\n<p><strong>灵活性：</strong> MyBatis相对于其他ORM框架更加灵活，可以直接使用SQL语句来执行复杂查询，处理特殊情况和优化性能。</p>\\n</li>\\n<li>\\n<p><strong>XML配置：</strong> MyBatis通常使用XML文件进行配置，这使得配置和映射关系更清晰可见，尤其对于复杂的映射和查询。</p>\\n</li>\\n<li>\\n<p><strong>易于集成：</strong> MyBatis可以很容易地集成到已有的项目中，不需要大规模重构或修改代码。</p>\\n</li>\\n<li>\\n<p><strong>与SQL的亲和性：</strong> 对于开发人员更熟悉SQL的项目团队来说，MyBatis提供了更接近SQL的编程模型，这样可以更轻松地理解和调优查询。</p>\\n</li>\\n<li>\\n<p><strong>轻量级：</strong> MyBatis相对于其他ORM框架来说比较轻量级，它的学习曲线相对较低，对于新手来说更容易上手。</p>\\n</li>\\n</ol>","autoDesc":true}');export{l as data};
