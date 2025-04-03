import path from "path";

export const fileFilterExcel = (req: Request, file: any, cb: any) => {
  const allowedTypes = /pdf|xls|zip|rar|jpg|jpeg|png|xlsx|xls|doc|docx/;
  const fileType = path.extname(file.originalname).toLowerCase();

  if (allowedTypes.test(fileType) === false) {
    const err = new Error("File extensions is not allowed.");

    cb(err, false);
  }

  cb(null, true);
};
