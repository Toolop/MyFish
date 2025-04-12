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
      url: `https://myfish.agriciatech.com`,
      description: "main server",
    },
    {
      url: `http://localhost:3001/v1`,
      description: "local server",
    },
  ],
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
