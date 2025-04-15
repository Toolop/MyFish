import express, { Express } from "express";
const swaggerUi = require("swagger-ui-express");
import dotenv from "dotenv";
const swaggerDocument = require("../../../swagger-output.json");
import bodyParser from "body-parser";
import cookieparser from "cookie-parser";
import helmet from "helmet";
var cors = require("cors");
import MainRoute from "./routes/main.routes";
import errorHandlingMiddlware from "../middleware/error_handler_middleware";

export const Server = async () => {
  try {
    dotenv.config();

    const app: Express = express();
    const router = express.Router();
    const port = process.env.PORT || 3001;
    app.use(cors());
    // app.use(
    //   cors({
    //     origin: "*",
    //     allowedHeaders: [
    //       "Accept-Version",
    //       "Authorization",
    //       "Credentials",
    //       "Content-Type",
    //     ],
    //   })
    // );

    // // Matikan CORP dari helmet atau pastikan cocok
    // app.use(
    //   helmet({
    //     crossOriginResourcePolicy: false, // atau jangan pakai fitur ini
    //   })
    // );
    app.use((req, res, next) => {
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With, Content-type, Authorization, Cache-control, Pragma"
      );
      next();
    });

    app.use(express.json({ limit: "10MB" }));
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/uploads", express.static("uploads"));
    app.use(express.json());
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use(cookieparser());
    // app.use((req, res, next) => {
    //   setTimeout(next, Math.floor(Math.random() * 5000 + 10000));
    // });

    MainRoute(app, router);
    app.use(errorHandlingMiddlware);

    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
