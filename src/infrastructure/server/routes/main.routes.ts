import { CardsRouter } from "./di/card.route";
import { EnvelopesRouter } from "./di/envelope.routes";
import { MailsRouter } from "./di/mail.routes";
import { MascotsRouter } from "./di/mascot.routes";

const MainRoute = (app: any, route: any) => {
  app.use("/v1", CardsRouter(route));
  app.use("/v1", MascotsRouter(route));
  app.use("/v1", EnvelopesRouter(route));
  app.use("/v1", MailsRouter(route));

  app.use("*", function (req: any, res: any) {
    res.status(404).json({ status: "failed", message: "api not found" });
  });
};

export default MainRoute;
