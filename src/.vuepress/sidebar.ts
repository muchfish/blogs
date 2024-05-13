import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/JavaInterview/":  [
      {
        text: "Java基础",
        icon: "creative",
        prefix: "JavaBase/",
        collapsible: true,
        children: "structure",
      },
      {
          text: "Java集合",
          icon: "creative",
          prefix: "JavaAggregate/",
          collapsible: true,
          children: "structure",
      },
  ],
  "/posts/":  "structure",
});
