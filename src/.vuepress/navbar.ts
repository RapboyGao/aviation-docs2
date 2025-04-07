import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    link: "/",
    text: "Home",
  },
  {
    text: "English",
    children: ["/Notes/pepec/index.html"],
  },
  {
    text: "Study",
    children: [
      {
        text: "运行手册",
        children: ["/Notes/operations-manual/OM-05.md", "/Notes/operations-manual/OM-Misc.md"],
      },
      {
        text: "危险品",
        children: ["/dangerous-goods/index.html"],
      },
      {
        text: "FCTM",
        children: ["/Notes/FCTM/index.html"],
      },
      {
        text: "Fleet",
        children: ["/Notes/Fleet/3DD"],
      },
    ],
  },
  {
    text: "Checklists",
    children: ["/Checklists/before-flight-day/", "/Checklists/before-flight-going/", "/Checklists/direct-preparing/", "/Checklists/ground-operations"],
  },
]);
