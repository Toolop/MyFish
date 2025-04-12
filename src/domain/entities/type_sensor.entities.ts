import { QueryEntities } from "./global/query_entities";

export interface TypeSensorEntities {
  id: number;
  name: string;
}

export interface TypeSensorCreateEntities {
  name: string;
}
export interface TypeSensorQueryEntities extends QueryEntities {}
