import { ActuatorLogsRouter } from "./di/actuator_logs.routes";
import { AuthRouter } from "./di/auth.routes";
import { AutomationRouter } from "./di/automation.routes";
import { CompanyRouter } from "./di/company.routes";
import { LocationRouter } from "./di/location.routes";
import { RoleRouter } from "./di/role.routes";
import { RoleSidebarRouter } from "./di/role_sidebar.routes";
import { RoleUserRouter } from "./di/role_user.routes";
import { ScheduleRouter } from "./di/schedule.routes";
import { SensorRouter } from "./di/sensor.route";
import { SensorDataRouter } from "./di/sensor_data.routes";
import { SidebarRouter } from "./di/sidebar.routes";
import { ThingsRouter } from "./di/things.route";
import { ThingsLogRouter } from "./di/things_logs.route";
import { TypeSensorRouter } from "./di/type_sensor.routes";
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
  app.use("/v1", AutomationRouter(route));
  app.use("/v1", ActuatorLogsRouter(route));
  app.use("/v1", ScheduleRouter(route));
  app.use("/v1", SensorRouter(route));
  app.use("/v1", TypeSensorRouter(route));
  app.use("/v1", ThingsRouter(route));
  app.use("/v1", ThingsLogRouter(route));
  app.use("/v1", SensorDataRouter(route));

  app.use("*", function (req: any, res: any) {
    res.status(404).json({ status: "failed", message: "api not found" });
  });
};

export default MainRoute;
