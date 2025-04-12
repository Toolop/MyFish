import { QueryEntities } from "./global/query_entities";

export interface ThingsLogEntities {
  id: number;
  thingsId?: number | null;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ThingsLogCreateEntities {
  thingsId?: number | null;
  status: string;
}

export interface ThingsLogQueryEntities extends QueryEntities {}
