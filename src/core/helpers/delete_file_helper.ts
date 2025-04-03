const fs = require("fs").promises;

export const deleteFileHelper = async (filePath: string) => {
  try {
    if (filePath.includes("uploads")) {
      await fs.unlink(`${filePath}`);
    } else {
      await fs.unlink(`uploads/${filePath}`);
    }
    console.log(`File ${filePath} has been deleted.`);
  } catch (err) {
    console.error(err);
  }
};
