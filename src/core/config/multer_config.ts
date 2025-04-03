const { S3Client } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESSKEYID,
    secretAccessKey: process.env.AWS_SECRETACCESSKEY,
  },
  endpoint: process.env.AWS_ENDPOINT,
  forcePathStyle: true,
  sslEnabled: false,
  s3ForcePathStyle: true,
});

export const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: process.env.AWS_BUCKET,
    metadata: (req: Request, file: any, cb: any) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req: any, file: any, cb: any) => {
      cb(null, `uploads/${Date.now()}_${path.basename(file.originalname)}`);
    },
  }),
});
