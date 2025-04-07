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
  description: "Aviation documentation",
  plugins: [
    cardContainerPlugin,
    quesContainerPlugin,
    registerComponentsPlugin({
      componentsDir: Path.join(__dirname, "components"),
    }),
  ],
  theme,
  shouldPreload: true,
  shouldPrefetch: true,
});
