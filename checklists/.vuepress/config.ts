import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import Path from "path";
import { defineUserConfig } from "vuepress";
import head from "./misc/head";
import theme from "./theme";

type BaseUrl = "/" | `/${string}/` | undefined;
const baseUrl = (process.env?.BASE_URL as BaseUrl) ?? "/";

export default defineUserConfig({
  base: baseUrl,
  head,
  lang: "zh-CN",
  title: "Aviation Checklists",
  description: "Aviation Checklists for daily operations.",
  plugins: [
    registerComponentsPlugin({
      componentsDir: Path.resolve(process.cwd(), "src/.vuepress/components"),
    }),
  ],
  theme,
  shouldPreload: true,
  shouldPrefetch: false,
});
