import fs from "fs";
import path from "path";

export const saveFile = (fileName: string, fileData: any) => {
  const filePath = path.join(__dirname, fileName);

  fs.writeFile(filePath, fileData, "utf8", (err) => {
    if (err) {
      return err;
    } else {
      return filePath;
    }
  });
};
