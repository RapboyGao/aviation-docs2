// 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
export default {
  favicon: "/favicon.ico",
  cacheHTML: true,
  cacheImage: true,
  appendBase: true,
  apple: {
    icon: "/assets/icon/apple-icon-152.png",
    statusBarColor: "black",
  },
  msTile: {
    image: "/assets/icon/ms-icon-144.png",
    color: "#ffffff",
  },
  manifest: {
    icons: [
      {
        src: "/assets/icon/chrome-mask-512.png",
        sizes: "512x512",
        purpose: "maskable",
        type: "image/png",
      },
      {
        src: "/assets/icon/chrome-mask-192.png",
        sizes: "192x192",
        purpose: "maskable",
        type: "image/png",
      },
      {
        src: "/assets/icon/chrome-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/assets/icon/chrome-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Demo",
        short_name: "Demo",
        url: "/demo/",
        icons: [
          {
            src: "/assets/icon/guide-maskable.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
        ],
      },
    ],
  },
};
