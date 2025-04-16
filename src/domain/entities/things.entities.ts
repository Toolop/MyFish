import { QueryEntities } from "./global/query_entities";

export interface ThingsEntities {
  id: number;
  name: string;
  icon?: string | null;
  type: string;
  isSeperate: boolean;
  greenhouseId?: number | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ThingsCreateEntities {
  name: string;
  icon?: string;
  type: string;
  isSeperate: boolean;
  greenhouseId?: number | null;
}

export interface ThingsQueryEntities extends QueryEntities {
  greenhouseId?: number;
}
