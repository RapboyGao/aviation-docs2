import { defineUserConfig } from "vuepress";
import theme from "./theme";
import cardContainerPlugin from "./containers/card";
import quesContainerPlugin from "./containers/ques";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path as Path } from "@vuepress/utils";

export default defineUserConfig({
  base: "/",

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
});
