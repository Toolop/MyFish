import { QueryEntities } from "./global/query_entities";

export interface CardEntities {
  id: number;
  name: string;
  logo: string;
  color: string;
  textColor: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CardCreateEntities {
  name: string;
  logo: string;
  color: string;
  textColor: string;
}
export interface CardUpdateEntities {
  name?: string;
  logo?: string;
  color?: string;
  textColor?: string;
}

export interface CardQueryEntities extends QueryEntities {
  id?: number;
  name?: string;
  logo?: string;
}

export interface CardParamEntities {
  id?: number;
  name?: string;
  logo?: string;
}
