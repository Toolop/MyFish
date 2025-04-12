import { QueryEntities } from "./global/query_entities";

export interface ActuatorLogsEntities {
  id: number;
  statusLifeCycle: number;
  actuatorId?: number | null;
  createdAt: Date;
  updatedAt: Date;
  status?: boolean | undefined;
}

export interface ActuatorLogsCreateEntities {
  statusLifeCycle: number;
  actuatorId?: number | null;
  status?: boolean | undefined;
}

export interface ActuatorLogsQueryEntities extends QueryEntities {}
