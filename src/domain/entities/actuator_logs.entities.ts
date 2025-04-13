import { QueryEntities } from "./global/query_entities";

export interface ActuatorLogsEntities {
  id: number;
  statusLifeCycle: number;
  actuatorId?: number | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ActuatorLogsCreateEntities {
  statusLifeCycle: number;
  actuatorId?: number | null;
}

export interface ActuatorLogsQueryEntities extends QueryEntities {
  actuatorId?: number;
}
