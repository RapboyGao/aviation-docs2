import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path as Path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import cardContainerPlugin from "./containers/card";
import quesContainerPlugin from "./containers/ques";
import head from "./misc/head";
import theme from "./theme";

export default defineUserConfig({
  base: "/",
  head,
  lang: "zh-CN",
  title: "Aviation Docs",
  description: "Documents and notes about aviation knowledge",
  plugins: [cardContainerPlugin, quesContainerPlugin, registerComponentsPlugin()],
  theme,
  shouldPreload: true,
  shouldPrefetch: true,
});
