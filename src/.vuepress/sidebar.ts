import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/Java/":  [
      {
        text: "Java基础",
        icon: "creative",
        prefix: "basic/",
        collapsible: true,
        children: "structure",
      },
      {
          text: "Java集合",
          icon: "creative",
          prefix: "congregation/",
          collapsible: true,
          children: "structure",
      },
      {
          text: "Java并发",
          icon: "creative",
          prefix: "concurrent/",
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
  "/frame/":"structure",
  "/congregation/": "structure",
  "/ComputerBasics/": "structure",
  "/database/": "structure",
  "/middleware/": "structure",
  "/Microservices/": "structure",
  "/electric/": "structure",
  "/posts/":  "structure",
});
