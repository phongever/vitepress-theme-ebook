import { createContentLoader } from "vitepress";

export default createContentLoader("chapters/*.md", {
  excerpt: true,
});
