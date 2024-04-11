import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Vitepress theme book",
  titleTemplate: ":title - Vitepress theme book",
  description: "Vitepress theme for book",
  srcDir: "src/pages",
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
});
