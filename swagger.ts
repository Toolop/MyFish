const swaggerAutogen = require("swagger-autogen")();
import fs from "fs";
import path from "path";

// Load JSON file
const schemas = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./all-schemas.json"), "utf8")
);

const doc = {
  info: {
    title: "myFish Api",
    description: "Description",
  },
  servers: [
    {
      url: `http://localhost:8000/be`,
      description: "main server",
    },
    {
      url: `http://10.88.1.23/be/v1`,
      description: "main server",
    },
  ],
  schemes: ["http"],
  components: {
    schemas: schemas.definitions,
  },
};

const outputFile = "./swagger-output.json";
const routes = [
  "./src/infrastructure/server/routes/*.ts",
  "./src/infrastructure/server/routes/**/**/*.ts",
];

swaggerAutogen(outputFile, routes, doc).then(async () => {
  require("./src/index.ts");
});
