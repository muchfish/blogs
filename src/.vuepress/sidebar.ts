import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/Java/":  [
      {
        text: "Java基础",
        icon: "creative",
        prefix: "Java基础/",
        collapsible: true,
        children: "structure",
      },
      {
          text: "Java集合",
          icon: "creative",
          prefix: "Java集合/",
          collapsible: true,
          children: "structure",
      },
      {
          text: "Java并发",
          icon: "creative",
          prefix: "Java并发/",
          collapsible: true,
          children: "structure",
      },
      {
          text: "JVM",
          icon: "creative",
          prefix: "JVM/",
          collapsible: true,
          children: "structure",
      },
  ],
  "/框架/": "structure",
  "/计算机基础/": "structure",
  "/数据库/": "structure",
  "/中间件/": "structure",
  "/分布式微服务/": "structure",
  "/posts/":  "structure",
});
