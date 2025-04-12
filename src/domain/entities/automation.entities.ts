import { QueryEntities } from "./global/query_entities";

export interface AutomationEntities {
  id: number;
  condition: string;
  status_lifecycle: number;
  constanta: number;
  range: number;
  sensorId?: number | null;
  actutaorId?: number | null;
}

export interface AutomationCreateEntities {
  condition: string;
  status_lifecycle: number;
  constanta: number;
  range: number;
  sensorId: number | null;
  actutaorId: number | null;
}

export interface AutomationQueryEntities extends QueryEntities {
  sensorId?: number;
  actuatorId?: number;
}
