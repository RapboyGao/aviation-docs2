import FS from "fs-extra";
import s900 from "./src/.vuepress/components/pepec-data.ts";

for (const item of s900) {
  let fileName = item.index + "";
  switch (fileName.length) {
    case 1:
      fileName = "00" + fileName;
      break;
    case 2:
      fileName = "0" + fileName;
      break;
    case 3:
      fileName = fileName;
      break;
    default:
      throw new Error("Invalid index length: " + item.index);
  }
  const filePath = `./src/.vuepress/public/music/mp3/${fileName}.mp3`;
  const fileSize = FS.statSync(filePath).size;
  item.size = fileSize;
}

FS.writeJSONSync("./pepec-data.json", s900, {
  spaces: 2,
});
