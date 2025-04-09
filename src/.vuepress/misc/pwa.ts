import type { PwaPluginOptions } from "@vuepress/plugin-pwa";
// 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释

const pwa: PwaPluginOptions = {
  favicon: "/favicon.ico",
  cacheHTML: true,
  cacheImage: true,
  appendBase: true,
  apple: {
    icon: "/assets/icon/apple-icon-152.png",
    statusBarColor: "black",
  },
  maxSize: Infinity,
  maxImageSize: Infinity,
  
};

export default pwa;
