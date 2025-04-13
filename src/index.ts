import { updateScheduleUtil } from "./core/client/schedule.client";
import subscribeSensor from "./core/client/subscribe-sensor-client";
import { Server } from "./infrastructure/server/server";

Server();
updateScheduleUtil();
subscribeSensor();
