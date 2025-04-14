const swaggerAutogen = require("swagger-autogen")();
import fs from "fs";
import path from "path";

// Load JSON file
const schemas = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./all-schemas.json"), "utf8")
);

const doc = {
  swagger: "2.0", // ✅ Use this for swagger-autogen (NOT openapi)
  info: {
    title: "myFish API",
    description:
      "API documentation for myFish platform – powered by AgriciaTech.",
    version: "1.0.0",
    contact: {
      name: "Support Team",
      email: "support@agriciatech.com",
      url: "https://agriciatech.com",
    },
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  host: "myfish.agriciatech.com/api", // ✅ use host + basePath in Swagger 2.0
  schemes: ["http", "https"],
  components: {
    schemas: schemas.definitions,
  },
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
      description:
        "Enter your bearer token in the format **Bearer &lt;token>**",
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  tags: [
    { name: "Auth", description: "Authentication routes" },
    { name: "Users", description: "User management" },
    // Add more tags if needed
  ],
};

const outputFile = "./swagger-output.json";
const routes = [
  "./src/infrastructure/server/routes/*.ts",
  "./src/infrastructure/server/routes/**/**/*.ts",
];

swaggerAutogen(outputFile, routes, doc).then(async () => {
  require("./src/index.ts");
});
