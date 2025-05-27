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

// PepecData(id: <#T##Int#>, content: <#T##String#>, specialReading: <#T##String?#>, size: <#T##Int#>, hasLotOfInfo: <#T##Bool?#>)

let swiftScript = `import Foundation
public extension PepecSentence {
    static let allCases: [PepecSentence] = [

`;

s900.forEach((item) => {
  swiftScript += `        PepecSentence(
                              id: ${item.index},  
                              content: "${item.content}", 
                              specialReading: "${item.specialReading ?? ""}", 
                              size: ${item.size}, 
                              hasLotOfInfo: ${!!item.hasLotOfInfo}
                          ),\n`;
});

swiftScript += `
  ]
}
`;

FS.writeFileSync("./PepecData.swift", swiftScript, "utf8");
