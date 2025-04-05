import { QueryEntities } from "./global/query_entities";

export interface GreenhouseEntities {
  id: number;
  name: string;
  deescription?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface GreenhouseCreateEntities {
  name: string;
  deescription?: string | null;
}

export interface GreenhouseQueryEntities extends QueryEntities {}
