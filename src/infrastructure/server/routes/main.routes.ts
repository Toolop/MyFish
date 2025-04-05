import { AuthRouter } from "./di/auth.routes";
import { CompanyRouter } from "./di/company.routes";
import { LocationRouter } from "./di/location.routes";
import { RoleRouter } from "./di/role.routes";
import { RoleSidebarRouter } from "./di/role_sidebar.routes";
import { RoleUserRouter } from "./di/role_user.routes";
import { SidebarRouter } from "./di/sidebar.routes";
import { UsersRouter } from "./di/user.routes";

const MainRoute = (app: any, route: any) => {
  app.use("/v1", UsersRouter(route));
  app.use("/v1", AuthRouter(route));
  app.use("/v1", RoleRouter(route));
  app.use("/v1", SidebarRouter(route));
  app.use("/v1", RoleUserRouter(route));
  app.use("/v1", RoleSidebarRouter(route));
  app.use("/v1", CompanyRouter(route));
  app.use("/v1", LocationRouter(route));

  app.use("*", function (req: any, res: any) {
    res.status(404).json({ status: "failed", message: "api not found" });
  });
};

export default MainRoute;
