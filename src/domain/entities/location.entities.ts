import { QueryEntities } from "./global/query_entities";

export interface LocationEntities {
  id: number;
  name: string;
  city: string;
  address: string;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;
  companyId?: number | null;
}

export interface LocationCreateEntities {
  name: string;
  city: string;
  address: string;
  latitude: number;
  longitude: number;
  companyId?: number | null;
}

export interface LocationQueryEntities extends QueryEntities {}
