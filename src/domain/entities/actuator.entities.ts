import { QueryEntities } from "./global/query_entities";

export interface ActuatorEntities {
  id: number;
  name: string;
  icon?: string | null;
  color?: string | null;
  createdAt: Date;
  updatedAt: Date;
  thingsId?: number | null;
  isAutomation: boolean;
}

export interface ActuatorCreateEntities {
  name: string;
  icon?: string | null;
  color?: string | null;
  createdAt: Date;
  updatedAt: Date;
  thingsId: number | null;
  isAutomation: boolean;
}

export interface ActuatorQueryEntities extends QueryEntities {}
