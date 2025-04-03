const multer = require("multer");

export const StorageConfig = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, "uploads/"); // Simpan file di direktori "uploads/"
  },
  filename: (req: any, file: any, cb: any) => {
    cb(null, file.originalname); // Gunakan nama asli file
  },
  limits: {
    fileSize: 50000000, // Batas ukuran file dalam byte (contoh: 5 MB)
  },
});

