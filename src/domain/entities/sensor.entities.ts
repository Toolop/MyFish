import { QueryEntities } from "./global/query_entities";

export interface SensorEntities {
  id: number;
  name: string;
  icon?: string | null;
  thingsId?: number | null;
  typeSensorId: number;
  createdAt: Date;
  updatedAt: Date;
  calibration?: string | null;
  color?: string | null;
}

export interface SensorCreateEntities {
  name: string;
  icon?: string | null;
  thingsId?: number | null;
  typeSensorId: number;
  calibration?: string | null;
  color?: string | null;
}

export interface SensorQueryEntities extends QueryEntities {}
