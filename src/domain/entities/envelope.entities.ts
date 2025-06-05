import { QueryEntities } from "./global/query_entities";

export interface EnvelopeEntities {
  id: number;
  name: string;
  logo: string;
  color: string;
  textColor: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface EnvelopeCreateEntities {
  name: string;
  logo: string;
  color: string;
  textColor: string;
}
export interface EnvelopeUpdateEntities {
  name?: string;
  logo?: string;
  color?: string;
  textColor?: string;
}

export interface EnvelopeQueryEntities extends QueryEntities {
  id?: number;
  name?: string;
  logo?: string;
  color?: string;
  textColor?: string;
}

export interface EnvelopeParamEntities {
  id?: number;
  name?: string;
  logo?: string;
  color?: string;
  textColor?: string;
}
