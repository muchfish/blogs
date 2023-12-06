import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/java/":  "structure",
  "/posts/":  "structure",
  // 必须放在最后面
  "/": [
    {
      text: "博客首页",
      icon: "star",
      collapsible: true,
      prefix: "/",
      children: ["intro"],
    },
    {
      text: "Java",
      icon: "java",
      collapsible: false,
      prefix: "java/",
      children: [
        {
          text: "基础",
          prefix: "basis/",
          icon: "basic",
          children: [
            "java-basic-questions-01",
            {
              text: "重要知识点",
              icon: "star",
              collapsible: true,
              children: [
                "why-there-only-value-passing-in-java",
              ],
            },
          ],
        },
      ],
    },
  ],
});
