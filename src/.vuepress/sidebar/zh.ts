import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      icon: "discover",
      text: "案例",
      prefix: "usage/",
      link: "usage/",
      children: "structure",
    },
    "slides",
  ],
});
