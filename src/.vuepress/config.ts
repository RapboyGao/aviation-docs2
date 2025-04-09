import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { defineUserConfig } from "vuepress";
import cardContainerPlugin from "./containers/card";
import quesContainerPlugin from "./containers/ques";
import head from "./misc/head";
import theme from "./theme";
import Path from "path";

export default defineUserConfig({
  base: "/",
  head,
  lang: "zh-CN",
  title: "Aviation Docs",
  description: "Documents and notes about aviation knowledge",
  plugins: [
    cardContainerPlugin,
    quesContainerPlugin,
    registerComponentsPlugin({
      componentsDir: Path.resolve(__dirname, "./components"),
    }),
  ],
  theme,
  shouldPreload: true,
  shouldPrefetch: false,
});
