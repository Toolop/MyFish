const fs = require("fs");

export const base64SaveHelper = (base64Data: string, fileName: string) => {
  const matches = base64Data.match(/^data:(.+);base64,(.+)$/);
  if (!matches || matches.length !== 3) {
    throw new Error("Invalid base64 string format");
  }

  const contentType = matches[1];
  const base64String = matches[2];
  const imageBuffer = Buffer.from(base64String, "base64");
  const extension = contentType.split("/")[1];

  const filePath = `${fileName}.${extension}`;

  fs.writeFile(filePath, imageBuffer, (err: any) => {
    if (err) {
      console.error("Error saving image:", err);
      throw err;
    }
  });
};
