import type { PwaPluginOptions } from "@vuepress/plugin-pwa";
// 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释

const pwa: PwaPluginOptions = {
  favicon: "/IMG_0576.JPG",
  cacheHTML: true,
  cacheImage: true,
  appendBase: true,
  apple: {
    icon: "/IMG_0576.JPG",
    statusBarColor: "black",
  },
  maxSize: 1024 * 1024,
  maxImageSize: 1024 * 1024,
};

export default pwa;
