import { QueryEntities } from "./global/query_entities";

export interface MascotEntities {
  id: number;
  name: string;
  logo: string;
  color: string;
  textColor: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MascotCreateEntities {
  name: string;
  logo: string;
  color: string;
  textColor: string;
}
export interface MascotUpdateEntities {
  name?: string;
  logo?: string;
  color?: string;
  textColor?: string;
}

export interface MascotQueryEntities extends QueryEntities {
  id?: number;
  name?: string;
  logo?: string;
  color?: string;
  textColor?: string;
}

export interface MascotParamEntities {
  id?: number;
  name?: string;
  logo?: string;
  color?: string;
  textColor?: string;
}
