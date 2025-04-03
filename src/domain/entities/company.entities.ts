import { QueryEntities } from "./global/query_entities";

export interface CompanyEntities {
  id: number;
  name: string;
  logo: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CompanyCreateEntities {
  name: string;
  logo: string;
}

export interface CompanyQueryEntities extends QueryEntities {}
