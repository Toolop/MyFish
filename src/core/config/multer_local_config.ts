import { fileFilterExcel } from "./excel_multer_config";

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, `uploads/`);
  },
  filename: (req: any, file: any, cb: any) => {
    const uniqueName = Date.now() + file.originalname;
    cb(null, uniqueName);
  },
  limits: {
    fileSize: 50000000,
  },
});

export const upload = multer({
  storage,
  fileFilter: fileFilterExcel,
});
